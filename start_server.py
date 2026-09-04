# -*- coding: utf-8 -*-
"""
Lumen static file server (ASCII filename for Windows .bat compatibility).
Serves this folder on 0.0.0.0:8510 for the office PC + Cloudflare Tunnel.
"""
from __future__ import annotations

import socket
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

PROJECT_DIR = Path(__file__).resolve().parent
PORT = 8510
BLOCKED_PREFIXES = ("/.git", "/.env")
NO_CACHE_SUFFIXES = (".html", ".js", ".css")


class LumenHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        sys.stdout.write("%s - %s\n" % (self.address_string(), format % args))

    def _is_blocked(self) -> bool:
        path = self.path.split("?", 1)[0].split("#", 1)[0]
        lowered = path.lower()
        return any(lowered == prefix or lowered.startswith(prefix + "/") for prefix in BLOCKED_PREFIXES)

    def do_GET(self):
        if self._is_blocked():
            self.send_error(404, "Not Found")
            return
        super().do_GET()

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
    print("=" * 60)
    print("  Lumen (static server)")
    print("=" * 60)
    print(f"  Folder:  {PROJECT_DIR}")
    print(f"  Local:   http://localhost:{PORT}/")
    print(f"  LAN:     http://{local_ip}:{PORT}/")
    print("  Office:  https://lumen.n-kyouei-system.com")
    print("  (Ctrl+C to stop)")
    print()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
