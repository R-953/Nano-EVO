# Nano-EVO

<p align="center">
    <img src="https://github.com/R-953/Nano-EVO/blob/main/Extension/icon.jpg">
</p>

個人用ブラウザサイドバー拡張機能
## Javascriptで記述され、ブラウザのネイティブサイドバーを追加し、ローカルの大規模モデルとGeminiクラウドサービスの両方をサポートします

<p align="center">
  <a href="../README.md">English</a> •  
  <a href="../README_fr.md">Français</a> • 
  <a href="../README_ja.md">日本語</a> • 
  <a href="../README_zh-Hant.md">繁體中文</a> • 
</p>

<h3 align="center"> 互換性のあるブラウザ：</h3>

<p align="center">
  <img src="https://img.shields.io/badge/Chromium-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Chrome-%E2%88%9A-greem?style=for-the-badge">
  <img src="https://img.shields.io/badge/Edge-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Brave-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Opera-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Safari-%C3%97-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/Firefox-%C3%97-red?style=for-the-badge">
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
  <img src="https://img.shields.io/badge/Ollama-Partial Compatibly-yellow">
  <img src="https://img.shields.io/badge/vLLM-Partial Compatibly-yellow">
  <img src="https://img.shields.io/badge/llama.cpp-Non Compatibly-red">
  <img src="https://img.shields.io/badge/Local AI-Non Compatibly-red">
  <img src="https://img.shields.io/badge/etc.-white">
</p>

<h3 align="center"> 互換性のあるクラウドサービス：</h3> 

<p align="center">
  <img src="https://img.shields.io/badge/Google Gemini-Fully Compatibly-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/Meta Muse-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/xAI Grok-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/DeepSeek-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/Alibaba Qwen-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/Moonshot Kimi-Partial Compatibly-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/Anthropic Claude-Non Compatibly-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/OpenAI GPT-Non Compatibly-red?style=for-the-badge">  
  <img src="https://img.shields.io/badge/Z GLM-Non Compatibly-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/etc.-white?style=for-the-badge">
</p>

## 詳細機能

### ローカルモード
- **ローカルにデプロイされた**大規模言語モデルをサポートします。
- **ローカルモード**と**プロキシポートの変更**をサポートし、左下隅に**モデル名**、**バージョン番号**、および**パラメータ**を含む**特定のモデルパラメータをリアルタイムで表示**します。
- **右クリックメニュー**からブラウザでサイドバーを開くか、**拡張機能をクリック**してサイドバーを開くことをサポートし、**もう一度クリック**するとサイドバーを閉じることができます。
> モデルの**実行とサイドロード**後に**ループバックアドレスポート**を開き、**ローカルAPIサービス**と**オリジン間リソース共有 (CORS)**を有効にする必要があります。
- 複数の言語への**選択翻訳**をサポートします。現在、デフォルトで**簡体字中国語**、**アメリカ英語**、**カナダフランス語**、および**日本語**に翻訳されます。
> JSファイルのプロンプトを変更して、翻訳時にモデルが出力する言語を追加または削除できます。
- 現在のページの**ウェブページ要約**をサポートします。
> 入力欄で現在のウェブページについて**質問する**か、**空白のまま直接送信**することができます。入力が空の場合、モデルは現在のウェブページの主要コンテンツを**自動的に抽出**し、その概要を**簡潔に要約**します。
- チャット履歴を*Markdown*形式で**エクスポート**する機能と、**読後消去（Burn-after-reading）**機能をサポートします。
> 有効にすると、サイドバーを閉じた後に**現在のチャット履歴がすべて自動的にクリア**されます。デフォルトでは、サイドバーを閉じても**現在のチャット履歴は自動的に削除されません**が、手動で削除することを選択できます。
- **一部の形式**のファイル入力をサポートします。
> これは**ローカルモデルの種類**にも依存します。**テキスト専用モデル**は画像入力を受け付けることができません。現在、**プレーンテキスト形式**のファイル入力のみがサポートされていますが、画像入力をサポートする**マルチモーダルモデル**を優先してサイドロードすることをお勧めします。
- **テキスト読み上げ (TTS)** 機能をサポートし、チャットおよび要約インターフェースでの**モデル出力**の読み上げ、翻訳インターフェースでの**ユーザー入力**と**モデル出力**の両方の読み上げをサポートします。現在、**簡体字中国語**、**アメリカ英語**、**カナダフランス語**、および**日本語**のみをサポートしています。
> *Brave*以外の*Chromium*ブラウザを使用する場合、ブラウザはデフォルトで*Google Network Voices*を呼び出して読み上げを行います。*Brave*ブラウザはデフォルトでこのサービスを**削除**しているため、**アメリカ英語**以外の3つの言語をサポートするには、4つの言語パックをコンピューターのローカルに**完全にデプロイ**する必要があります。
  
### クラウドモード
- *API Key*を介した**一部のクラウドモデル**の呼び出しをサポートします。
> [!NOTE]
> 有効なAPIキーを生成する必要があります。現在、*Google Gemini*のみがサポートされています。*API Key*を介して呼び出されるモデルには、*Google Gemini 3.1 Flash Lite*や*Google Gemini 3.5 Flash*などが含まれます。現在、この2つのみが適合されています。JSファイルの呼び出しリンクのパラメーターを変更して、*Google Gemini 3.1 Pro*などのモデルを使用できます。**[こちらのページ](https://ai.google.dev/gemini-api/docs/rate-limits)**で、サポートされているすべてのモデルを確認できます。

> [!IMPORTANT]
> *Google Gemini*を例にとると、*[Google AI Studio](https://aistudio.google.com)*で自分のアカウントにログインし、左下の*Get API Key*をクリックし、右上の**Create API key**をクリックする必要があります。**プロジェクトの命名**と**請求情報の設定**を完了したら、*API Key*をコピーしてモデルの下の入力ボックスに貼り付けることができます。
- 複数の言語への**選択翻訳**をサポートします。現在、デフォルトで**簡体