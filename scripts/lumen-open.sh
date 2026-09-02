#!/bin/bash
set -euo pipefail

PHOTO_DIR="/Users/erimizoguchi/Desktop/photo"
PORT=5173
URL="http://127.0.0.1:${PORT}/?v=20"
RUBY="/usr/bin/ruby"
LOG="/tmp/lumen-httpd.log"

open_chrome() {
  if [ -d "/Applications/Google Chrome.app" ]; then
    open -a "Google Chrome" "$URL"
  elif [ -d "$HOME/Applications/Google Chrome.app" ]; then
    open -a "Google Chrome" "$URL"
  else
    open "$URL"
  fi
}

server_ready() {
  /usr/bin/curl -sf -o /dev/null "$URL" 2>/dev/null
}

alert_fail() {
  /usr/bin/osascript -e 'display alert "Lumen を起動できませんでした" message "サーバーが起動しませんでした。\n\nFinder で photo フォルダの「開く.command」を実行するか、\nターミナルで ruby サーバーを起動してください。" as critical'
}

if server_ready; then
  open_chrome
  exit 0
fi

# 開く.command と同様、ポートを空けてから Ruby サーバーを起動
/usr/sbin/lsof -ti "tcp:${PORT}" | /usr/bin/xargs /bin/kill -9 2>/dev/null || true
sleep 0.2

cd "$PHOTO_DIR"
nohup "$RUBY" -run -e httpd . -p "$PORT" >>"$LOG" 2>&1 &
disown 2>/dev/null || true

for _ in $(seq 1 25); do
  if server_ready; then
    open_chrome
    exit 0
  fi
  sleep 0.3
done

alert_fail
exit 1
