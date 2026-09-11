# -*- coding: utf-8 -*-
"""
Lumen static file server (ASCII filename for Windows .bat compatibility).
Serves this folder on 0.0.0.0:8510 for the office PC + Cloudflare Tunnel.
Forwards Gemini calls with GEMINI_API_KEY from .env (key never sent to browsers).
"""
from __future__ import annotations

import json
import os
import re
import socket
import sys
import urllib.error
import urllib.request
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import quote, unquote

PROJECT_DIR = Path(__file__).resolve().parent
PORT = 8510
GEMINI_HOST = "https://generativelanguage.googleapis.com"
GEMINI_TIMEOUT_SEC = 120
MAX_GEMINI_BODY = 15 * 1024 * 1024
BLOCKED_PREFIXES = ("/.git", "/.env")
NO_CACHE_SUFFIXES = (".html", ".js", ".css")
GEMINI_GET_RE = re.compile(r"^v1beta/models$")
GEMINI_POST_RE = re.compile(r"^v1beta/models/[A-Za-z0-9._-]+:generateContent$")


def read_env_file(path: Path) -> dict[str, str]:
    values: dict[str, str] = {}
    if not path.is_file():
        return values
    try:
        text = path.read_text(encoding="utf-8")
    except OSError:
        return values
    for raw in text.splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        if not key:
            continue
        value = value.strip()
        if len(value) >= 2 and value[0] == value[-1] and value[0] in "\"'":
            value = value[1:-1]
        values[key] = value
    return values


def read_gemini_key() -> str:
    file_key = (read_env_file(PROJECT_DIR / ".env").get("GEMINI_API_KEY") or "").strip()
    if file_key:
        return file_key
    return (os.environ.get("GEMINI_API_KEY") or "").strip()


class LumenHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        sys.stdout.write("%s - %s\n" % (self.address_string(), format % args))

    def _path_only(self) -> str:
        return unquote(self.path.split("?", 1)[0].split("#", 1)[0])

    def _is_blocked(self) -> bool:
        lowered = self._path_only().lower()
        if lowered == "/.env" or lowered.startswith("/.env.") or lowered.startswith("/.env/"):
            return True
        return any(lowered == prefix or lowered.startswith(prefix + "/") for prefix in BLOCKED_PREFIXES)

    def _send_json(self, status: int, payload: dict) -> None:
        raw = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def _gemini_api_path(self) -> str | None:
        path = self._path_only()
        prefix = "/api/gemini/"
        if not path.startswith(prefix):
            return None
        return path[len(prefix) :]

    def _proxy_gemini(self, method: str) -> None:
        api_path = self._gemini_api_path()
        if api_path is None:
            self.send_error(404, "Not Found")
            return
        if method == "GET" and not GEMINI_GET_RE.match(api_path):
            self.send_error(404, "Not Found")
            return
        if method == "POST" and not GEMINI_POST_RE.match(api_path):
            self.send_error(404, "Not Found")
            return

        key = read_gemini_key()
        if not key:
            self._send_json(
                503,
                {"error": {"message": "社内サーバーに GEMINI_API_KEY が設定されていません"}},
            )
            return

        body = b""
        if method == "POST":
            try:
                length = int(self.headers.get("Content-Length") or 0)
            except ValueError:
                length = 0
            if length > MAX_GEMINI_BODY:
                self._send_json(413, {"error": {"message": "Request too large"}})
                return
            body = self.rfile.read(length) if length else b""

        url = f"{GEMINI_HOST}/{api_path}?key={quote(key, safe='')}"
        req = urllib.request.Request(url, data=body if method == "POST" else None, method=method)
        if method == "POST":
            req.add_header("Content-Type", self.headers.get("Content-Type") or "application/json")

        try:
            with urllib.request.urlopen(req, timeout=GEMINI_TIMEOUT_SEC) as resp:
                payload = resp.read()
                status = getattr(resp, "status", 200)
                content_type = resp.headers.get("Content-Type") or "application/json"
        except urllib.error.HTTPError as exc:
            payload = exc.read()
            status = exc.code
            content_type = exc.headers.get("Content-Type") if exc.headers else "application/json"
        except Exception as exc:
            self._send_json(502, {"error": {"message": f"Gemini への接続に失敗しました: {exc}"}})
            return

        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def do_GET(self):
        if self._is_blocked():
            self.send_error(404, "Not Found")
            return
        if self._path_only() == "/api/gemini-status":
            self._send_json(200, {"configured": bool(read_gemini_key())})
            return
        if self._gemini_api_path() is not None:
            self._proxy_gemini("GET")
            return
        super().do_GET()

    def do_POST(self):
        if self._is_blocked():
            self.send_error(404, "Not Found")
            return
        if self._gemini_api_path() is not None:
            self._proxy_gemini("POST")
            return
        self.send_error(404, "Not Found")

    def do_HEAD(self):
        if self._is_blocked():
            self.send_error(404, "Not Found")
            return
        super().do_HEAD()

    def end_headers(self):
        path = self.path.split("?", 1)[0].lower()
        if path.endswith("/") or any(path.endswith(suffix) for suffix in NO_CACHE_SUFFIXES):
            self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
            self.send_header("Pragma", "no-cache")
        super().end_headers()


def get_local_ip() -> str:
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        sock.connect(("8.8.8.8", 80))
        ip = sock.getsockname()[0]
        sock.close()
        return ip
    except Exception:
        return "localhost"


def main() -> None:
    handler = partial(LumenHandler, directory=str(PROJECT_DIR))
    try:
        server = ThreadingHTTPServer(("0.0.0.0", PORT), handler)
    except OSError as exc:
        print(f"[ERROR] Could not bind port {PORT}: {exc}")
        input("Press Enter to exit...")
        sys.exit(1)

    local_ip = get_local_ip()
    gemini_ready = bool(read_gemini_key())
    print("=" * 60, flush=True)
    print("  Lumen (static server)", flush=True)
    print("=" * 60, flush=True)
    print(f"  Folder:  {PROJECT_DIR}", flush=True)
    print(f"  Local:   http://localhost:{PORT}/", flush=True)
    print(f"  LAN:     http://{local_ip}:{PORT}/", flush=True)
    print("  Office:  https://lumen.n-kyouei-system.com", flush=True)
    print(f"  Gemini:  {'共通キーあり' if gemini_ready else '共通キーなし（.env の GEMINI_API_KEY）'}", flush=True)
    print("  (Ctrl+C to stop)", flush=True)
    print(flush=True)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
