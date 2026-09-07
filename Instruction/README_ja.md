# Nano-EVO

<p align="center">
    <img src="https://github.com/R-953/Nano-EVO/blob/main/Extension/icon.jpg">
</p>

個人用ブラウザサイドバー拡張機能
## ネイティブJavaScriptで記述され、ブラウザのサイドバーを追加し、ローカルの大規模モデルおよびGemini / OpenAI / ClaudeのクラウドAPIをサポート。ChromiumとFirefoxの両方のエンジンに完全対応

<p align="center">
  <a href="../README.md">English</a> •  
  <a href="./README_fr.md">Français</a> • 
  <a href="./README_ja.md">日本語</a> • 
  <a href="./README_zh-Hans.md">简体中文</a> • 
  <a href="./README_zh_Hant.md">繁體中文</a> • 
</p>

<h3 align="center"> 互換性のあるブラウザ：</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Chromium-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Chrome-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Edge-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Brave-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Opera-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Firefox-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Safari-%C3%97-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/etc.-white?style=for-the-badge">
</p>

<h3 align="center"> 互換性のあるローカルアプリケーション：</h3> 

<p align="center">
  <img src="https://img.shields.io/badge/Ollama GUI-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/LM Studio-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/GPT4All-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/Cherry Studio-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/Chatbox-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/AnythingLLM-Fully Compatibly-brightgreen">  
  <img src="https://img.shields.io/badge/Ollama-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/vLLM-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/Local AI-Fully Compatibly-brightgreen">
  <img src="https://img.shields.io/badge/llama.cpp-Partial Compatibly-yellow">
  <img src="https://img.shields.io/badge/etc.-white">
</p>

<h3 align="center"> 互換性のあるクラウドサービス：</h3> 

<p align="center">
  <img src="https://img.shields.io/badge/Google Gemini-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/OpenAI GPT-Fully Compatibly-brightgreen?style=for-the-badge">  
  <img src="https://img.shields.io/badge/Anthropic Claude-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/DeepSeek-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/Alibaba Qwen-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/Moonshot Kimi-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/xAI Grok-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/Meta Muse-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/Z GLM-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/etc.-white?style=for-the-badge">
</p>

## 詳細機能

### ローカルモード (Local Mode)
- **広範な互換性**：LM Studio、Ollama、vLLM、AnythingLLM、Chatbox、Cherry Studio 等をネイティブサポート。
- **自動エンドポイント補完**：URL末尾の `/v1` を自動補完し、`http://127.0.0.1:1234` から `/v1/chat/completions` にスムーズにルーティング。
- **動的モデル検出**：`${baseUrl}/models` を自動検出し、読み込まれているモデル名を左下のバッジにリアルタイム表示。
- **独立した2つのブランチ**：Chromium（`chrome.sidePanel`）および Firefox（`sidebar_action`）に特化したビルドを提供。
- **テキスト選択翻訳・Webページ要約**：右クリックから選択テキストの翻訳やページ全体の要約を実行。
- **日本語ふりがな注音 (Furigana)**：オフライン Kuromoji トークナイザーと辞書を内蔵し、外部通信なしで漢字にルビを付与。
- **Markdown エクスポート & 閲覧後消去**：履歴の保存またはサイドバー終了時の自動消去（👻）に対応。
- **音声合成 (TTS)**：日本語、英語、中国語、フランス語の出力を自動判別して読み上げ。

### クラウドモード (Cloud Mode)
- **複数クラウドプロバイダーの統合**：
  - **Google Gemini**：`gemini-flash-latest` (Flash) および `gemini-flash-lite-latest` (Flash Lite) に対応。
  - **OpenAI**：`gpt-4o` および `gpt-4o-mini` に対応。
  - **Anthropic Claude**：`claude-3-5-sonnet-20240620` および `claude-3-haiku-20240307` に対応。
- **個別設定保存**：APIキーとエンドポイントは各モデルごとに独立してブラウザ内に安全に保存。

### ドキュメント・メディア・マルチモーダル入力
- **完全オフライン PDF 解析**：内蔵の `pdf.js` により、外部サーバーを介さずブラウザ内で高速にテキスト抽出。
- **画像マルチモーダル認識 (Vision)**：`.png, .jpg, .jpeg, .webp` に対応。Canvas による自動縮小処理（最大 2048px）を経て、Gemini `inlineData`、OpenAI `image_url`、Claude `base64` に自動変換。
- **複数ファイル一括対応**：2つ以上の異なるファイル（PDF、画像、テキスト）を同時に送信可能。
- **ドラッグ＆ドロップ + クリップボード貼り付け (Ctrl+V)**：
  - デスクトップからの直接ドラッグに対応。
  - スクリーンショットを `Ctrl + V` で即時貼り付け。
- **ファイルリストと進度バー**：読み込み進度（`5/12 ページ` 等）を視覚的に表示し、不要なファイルは `✖` で即座に削除可能。

### 快適なユーザー操作性 (Ergonomics)
- **キーボード操作**：**Enter** で送信、**Shift + Enter** で改行。日本語入力（IME変換中）の誤送信防止機能付き。
- **スマートスクロール切り替え**：
  - モデル回答中に上へスクロールすると、強制スクロールを解除して自由に閲覧可能。
  - チャットエリアをダブルクリック、または一番下までスクロールすると、自動追従モードに復帰。

---

## インストール手順

### 1. Chromium 系ブラウザ (Chrome / Edge / Brave 等)
1. `chrome://extensions` を開く。
2. 右上の **デベロッパーモード** を有効にする。
3. **パッケージ化されていない拡張機能を読み込む** をクリック。
4. `Main/Chromium/6.907.13.41` フォルダを選択。

### 2. Firefox 系ブラウザ (Firefox / Floorp 等)
1. `about:debugging#/runtime/this-firefox` を開く。
2. **一時的なアドオンを読み込む...** をクリック。
3. `Main/Firefox/6.907.13.41/manifest.json` ファイルを選択。

---

## 免責事項
本プロジェクトは [MIT License](https://github.com/R-953/Nano-EVO/blob/main/LICENSE) に準拠し、すべての処理はローカルブラウザ環境内で完結します。
