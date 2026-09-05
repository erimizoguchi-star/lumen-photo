#!/bin/bash
cd "$(dirname "$0")"
PORT=5173
URL="http://127.0.0.1:$PORT/?v=28"

# Kill previous instance on this port if any
lsof -ti tcp:$PORT | xargs kill -9 2>/dev/null

open_in_chrome() {
  if [ -d "/Applications/Google Chrome.app" ]; then
    open -a "Google Chrome" "$URL"
    return 0
  fi
  if [ -d "$HOME/Applications/Google Chrome.app" ]; then
    open -a "Google Chrome" "$URL"
    return 0
  fi
  # Chrome が無い場合のみデフォルトブラウザ
  echo "Google Chrome が見つかりません。デフォルトブラウザで開きます。"
  open "$URL"
}

# サーバー起動後に Chrome で開く（起動待ち）
(
  for _ in 1 2 3 4 5 6 7 8 9 10; do
    if curl -sf -o /dev/null "$URL"; then
      open_in_chrome
      exit 0
    fi
    sleep 0.3
  done
  open_in_chrome
) &

echo "Lumen を起動しました → $URL"
echo "Google Chrome で開きます。"
echo "このウィンドウを閉じるとサーバーも停止します。"
echo ""

ruby -run -e httpd . -p "$PORT"
