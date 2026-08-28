#!/bin/bash
cd "$(dirname "$0")"
PORT=5173

# Kill previous instance on this port if any
lsof -ti tcp:$PORT | xargs kill -9 2>/dev/null

open "http://127.0.0.1:$PORT/"

echo "Lumen を起動しました → http://127.0.0.1:$PORT/"
echo "このウィンドウを閉じるとサーバーも停止します。"
echo ""

ruby -run -e httpd . -p "$PORT"
