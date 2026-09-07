# Nano-EVO

<p align="center">
    <img src="https://github.com/R-953/Nano-EVO/blob/main/Extension/icon.jpg">
</p>

Personal Browser Sidebar Extension
## Built with vanilla JavaScript, providing a native browser sidebar with comprehensive support for local sideloaded LLMs and Gemini / OpenAI / Claude cloud APIs across Chromium and Firefox engines

<p align="center">
  <a href="./README.md">English</a> •  
  <a href="./Instruction/README_fr.md">Français</a> • 
  <a href="./Instruction/README_ja.md">日本語</a> • 
  <a href="./Instruction/README_zh-Hans.md">简体中文</a> • 
  <a href="./Instruction/README_zh_Hant.md">繁體中文</a> • 
</p>

<h3 align="center"> Compatible Browsers:</h3>

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

<h3 align="center"> Compatible Local Applications:</h3> 

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

<h3 align="center"> Compatible Cloud Services:</h3> 

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

## Features

### Local Mode
- **Broad Local LLM Compatibility**: Works seamlessly with LM Studio, Ollama, vLLM, AnythingLLM, Chatbox, Cherry Studio, and other local OpenAI-compatible backends;
- **Automatic Endpoint Formatting**: Automatically appends `/v1` to base URLs (e.g. `http://127.0.0.1:1234` is routed to `/v1/chat/completions`);
- **Dynamic Model Auto-Detection**: Actively polls `${baseUrl}/models` and displays the currently loaded model ID directly on the bottom-left status badge;
- **Cross-Browser Sidebar Navigation**: Open the sidebar via the browser right-click context menu or by clicking the extension icon;
- **Dual Engine Releases**: Independent branches tailored for Chromium (`chrome.sidePanel`) and Firefox (`sidebar_action`);
- **Select-to-Translate & Webpage Summarization**: Translate highlighted text or summarize the active webpage outline in one click;
- **Local Japanese Furigana Injection**: Integrated offline Kuromoji tokenizer and dictionary to annotate Japanese kanji with ruby furigana locally without cloud dependencies;
- **Burn-after-Reading & Markdown Export**: Export chat history to clean Markdown, or toggle ephemeral mode (👻) to wipe logs upon sidebar close;
- **Text-to-Speech (TTS)**: Native language auto-detection and speech synthesis for Chinese, English, French, and Japanese.

### Cloud Mode
- **Multi-Vendor Cloud API Integration**:
  - **Google Gemini**: Preserves official `gemini-flash-latest` (Flash) and `gemini-flash-lite-latest` (Flash Lite) with reliable REST endpoints;
  - **OpenAI**: Native `gpt-4o` and `gpt-4o-mini` support;
  - **Anthropic Claude**: Native `claude-3-5-sonnet-20240620` and `claude-3-haiku-20240307` support;
  - **OpenAI-Compatible Providers**: Easily hook up DeepSeek, Qwen, Kimi, and other providers;
- **Persistent Key Storage**: Each provider's credentials and base endpoints are stored independently in local extension storage.

### Multimodal Documents & Media Input
- **Zero-Cloud Offline PDF Parsing**: Integrated `pdf.js` worker extracts full text from multi-page PDFs locally in browser memory;
- **Vision Image Processing**: Supports `.png, .jpg, .jpeg, .webp` images with smart canvas-based proportional downscaling (max 2048px) and auto-formatting into provider-specific vision payloads (Gemini `inlineData`, OpenAI `image_url`, Claude `base64`);
- **Batch Multi-File Uploads**: Simultaneously upload 2 or more mixed-format documents and images in a single turn;
- **Drag & Drop + Clipboard Paste (Ctrl+V)**:
  - Drag files directly from your desktop into the input area with interactive highlight feedback;
  - Paste screenshots or copied files directly from your clipboard using `Ctrl + V`;
- **Interactive File Queue**: Real-time progress bars, file sizes, processing status, and individual removal buttons (`✖`).

### Ergonomics & UI Improvements
- **Keyboard Shortcuts**: Send with **Enter**, insert newline with **Shift + Enter**, protected with `!e.isComposing` against premature triggers during IME composition;
- **Smart Auto-Scroll Decoupling**:
  - **Free Browsing**: Scrolling up during streaming immediately suspends forced autoscroll, allowing undisturbed reading of prior output;
  - **Re-lock to Bottom**: Double-click anywhere on the chat container or scroll back to bottom to re-engage autoscroll tracking.

---

## Installation

> [!IMPORTANT]
> This extension can be installed manually via **Load Unpacked** or **Load Temporary Add-on**.

### 1. Chromium-Based Browsers (Chrome / Edge / Brave / Opera / Vivaldi)
1. Navigate to your browser's extension management page (`chrome://extensions` or `edge://extensions`);
2. Enable **Developer mode** in the top right;
3. Click **Load unpacked**;
4. Select the directory: `Main/Chromium/6.907.13.41`.

### 2. Firefox-Based Browsers (Firefox / Floorp / LibreWolf)
1. Navigate to `about:debugging#/runtime/this-firefox`;
2. Click **Load Temporary Add-on...**;
3. Select the file: `Main/Firefox/6.907.13.41/manifest.json`.

---

## Disclaimer

### Please note that this project is intended for personal testing and learning purposes.
### Please note that this project complies with the [MIT License](https://github.com/R-953/Nano-EVO/blob/main/LICENSE). The licensee must include the above copyright notice and this permission notice in all copies or substantial portions of the Software. By running this project, the licensee and user agree that this action is equivalent to having read this statement, the original text of the MIT License, and the privacy terms and disclaimers of the cloud service providers in detail and in their entirety.
### Please note that this project will not read or execute any local files other than those necessary for the project to run, except:
- Code necessary for the operation of this project
- Locally sideloaded large model files on the device
- Files uploaded during conversations with the large model
- Files exported during conversations with the large model
> All data generated by this project should be saved within the browser;
> This project also will not store, upload, or modify any data related to local or cloud large models, including but not limited to: chat logs, translation history, webpage summaries, *API Keys*, etc.
> Unless the aforementioned data is manually exported locally or uploaded to the cloud,
## The consequences caused by such actions are completely unrelated to this project. The author and the cloud service providing companies do not bear any responsibility for the consequences arising from the use of this project.
### Please note that the operation of this project does not rely on any additional permissions, except:
- Permissions required to run in the browser
- Permissions required to open the sidebar
- Permissions required to access local loopback and specified API addresses
### Please note that the local mode of this project provides the ability to access local large language models offline, so you can completely disconnect from the internet when using local mode;
> When using cloud services via API keys in Cloud Mode, please refer to the respective privacy policies:
> - [Google Privacy Policy](https://policies.google.com/privacy)
> - [OpenAI Privacy Policy](https://openai.com/policies/privacy-policy)
> - [Anthropic Privacy Policy](https://www.anthropic.com/legal/privacy)
### This project is not affiliated with any company, brand, trademark, project, or product mentioned in this document:
- *Ollama GUI* is an open-source project by its respective rights holders;
- *LM Studio* is a registered trademark of *LM Studio*;
- *GPT4All* is a registered trademark of *Nomic AI*;
- *Cherry Studio* is an open-source project by its developer team;
- *Chatbox* is an open-source project by its developer team;
- *AnythingLLM* is a registered trademark of *Mintplex Labs Inc.*;
- *Ollama* is a registered trademark of *Ollama Inc.*;
- *vLLM* is an open-source high-throughput inference engine;
- *Google Gemini* is a registered trademark of *Google LLC*;
- *Anthropic Claude* is a registered trademark of *Anthropic PBC*;
- *OpenAI GPT* is a registered trademark of *OpenAI Inc.*;
- *DeepSeek* is a registered trademark of Hangzhou DeepSeek Artificial Intelligence Basic Technology Research Co., Ltd.;
- *Alibaba Qwen* is a registered trademark of Alibaba Group;
- *Moonshot Kimi* is a registered trademark of Moonshot AI.
