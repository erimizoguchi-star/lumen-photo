# Lumen — 不動産向け写真編集・キャプションツール

物件写真のサイズ変更・トリミング・明るさ調整と、登録サイト用キャプション作成を行うブラウザアプリです。

- GitHub（public）: https://github.com/erimizoguchi-star/lumen-photo

## 起動

```bash
cd lumen-photo   # または photo フォルダ
ruby -run -e httpd . -p 5173
open -a "Google Chrome" http://127.0.0.1:5173/
```

macOS では `開く.command` をダブルクリックでも起動できます（**Google Chrome** で開きます）。

> `index.html` を直接開くと CSS/JS が読み込まれないことがあります。必ずローカルサーバー経由で開いてください。

## 主な機能

- 左パネル4タブ（写真 / 編集 / キャプション / 出力）
- 複数写真のアップロード・切替・名前変更
- サイズ変更（1枚 / 一括）・IRI登録サイズプリセット・トリミング・角度・モザイク・明るさ・空の編集
- 透かし（4隅配置）・容量上限に近い自動圧縮
- 保存（設定名で `.jpg` / 重複チェック）・一括保存
- キャプション: 先頭 `《杏栄》` は選択式。合計36文字以内（なしの場合は本文のみ）
- 物件種別（マンション / 戸建て / 土地）・住所・カテゴリ
- Gemini による写真からのキャプション生成（社内サーバーは `.env` の共通キー。個人入力も可）

## キャプションの流れ

1. 物件種別を選ぶ  
2. 必要なら住所を入れる  
3. 写真ごとに **カテゴリを先に選択**  
4. 「この写真から生成」または定型文  
5. コピーして登録サイトの写真コメント欄へ貼り付け  

## AI（Gemini）

社内公開 URL（https://lumen.n-kyouei-system.com）では、サーバー PC の `.env` に `GEMINI_API_KEY` があれば社員はキー入力なしで生成できます。キーはブラウザに出さず、サーバーが Google へ中継します。

個人の Mac で `開く.command` から使う場合は、従来どおり画面にキーを貼ります（ブラウザ内のみ保存）。

1. [Google AI Studio](https://aistudio.google.com/apikey) で API キーを取得  
2. **社内サーバー:** サーバー PC の `lumen-photo` フォルダで `.env.example` を `.env` にコピーし、`GEMINI_API_KEY=` の右に貼る。`start_lumen.bat` を再実行  
3. **個人利用:** アプリ左の入力欄に貼り付け（そのブラウザだけ上書き）  
4. 「確認」で接続をチェック  

`.env` は Git に上げません。キー制限は「なし」にするか、サーバー PC の IP を許可してください（ブラウザのリファラー制限は不要です）。

利用上限（無料枠）に達した場合は、しばらく待ってから再試行してください。

## ファイル

| ファイル | 役割 |
|----------|------|
| `index.html` | UI |
| `styles.css` | スタイル |
| `app.js` | 編集・キャプション・Gemini 連携 |
| `開く.command` | ローカルサーバー起動 |

Node.js は不要です。

## 社内公開（サーバー PC + Cloudflare）

社員はブラウザで https://lumen.n-kyouei-system.com を開きます（Cloudflare Access・社員メール）。

サーバー PC:

```bat
cd C:\Users\power-pc\Desktop\lumen-photo
git pull origin main
start_lumen.bat
```

- ポート: **8510**（`http://localhost:8510`）
- Tunnel: `kenchiku-system` → `lumen.n-kyouei-system.com` → `http://localhost:8510`
- スタートアップ: `start_lumen.bat` のショートカットを `shell:startup` へ

更新は Mac で push → サーバー PC で pull → `start_lumen.bat` を再実行。

初回のみ、サーバー PC で `.env.example` を `.env` にコピーし `GEMINI_API_KEY` を入れてください（以降の pull では `.env` はそのまま残ります）。起動ログに `Gemini: 共通キーあり` と出れば設定できています。

フォルダ保存は HTTPS が必要なため、社員は社内 LAN の `http://192.168.0.39:8510` ではなく **https://lumen.n-kyouei-system.com** を使ってください。

## ライセンス

Private / 社内利用想定。
