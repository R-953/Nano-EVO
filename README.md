# Nano-EVO

<p align="center">
    <img src="https://github.com/R-953/Nano-EVO/blob/main/Extension/icon.jpg">
</p>

Personal Browser Sidebar Extension
## Written in JavaScript, adds a native browser sidebar, supporting both local large models and Gemini cloud services

<p align="center">
  <a href="../README.md">English</a> •  
  <a href="../README_fr.md">Français</a> • 
  <a href="../README_ja.md">日本語</a> • 
  <a href="../README_zh-Hant.md">繁體中文</a> • 
</p>

<h3 align="center"> Compatible Browsers:</h3>

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

<h3 align="center"> Compatible Local Applications:</h3> 

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

<h3 align="center"> Compatible Cloud Services:</h3> 

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

## Features

### Local Mode
- Supports **locally deployed** large language models;
- Supports **Local Mode** and **modifying proxy ports**, and displays **specific model parameters in real-time** in the bottom left corner, including **model name**, **version number**, and **parameters**;
- Supports opening the sidebar in the browser via the **right-click menu**, or by **clicking the extension**, and **clicking again** to close it;
> Requires opening the **loopback address port** after **running and sideloading** the model, and enabling **local API services** and **Cross-Origin Resource Sharing (CORS)**;
- Supports **select-to-translate** into multiple languages. Currently defaults to **Simplified Chinese**, **American English**, **Canadian French**, and **Japanese**;
> Prompts can be modified in the JS file to add or remove languages output by the model during translation;
- Supports **webpage summarization** of the current page;
> You can **ask questions** about the current webpage in the input box, or **send it blank**. When the input is empty, the model will **automatically extract** the main content of the current webpage and **concisely summarize** its outline;
- Supports **exporting chat logs** to *Markdown* format, and a **burn-after-reading** feature;
> When enabled, closing the sidebar will **automatically clear all current chat logs**. By default, closing the sidebar does not **automatically delete the current chat logs**, though you can choose to delete them manually;
- Supports **partial format** file inputs;
> This also depends on the **local model type**: **Text-only models** cannot accept image inputs. It is recommended to prioritize sideloading **multimodal models** that support image input, although currently only **plain text format** file inputs are supported.
- Supports **Text-to-Speech (TTS)** functionality, supporting reading out **model outputs** in the chat and summary interfaces, and reading out both **user inputs** and **model outputs** in the translation interface. Currently only supports **Simplified Chinese**, **American English**, **Canadian French**, and **Japanese**.
> When using *Chromium* browsers other than *Brave*, the browser will call *Google Network Voices* by default for reading. Since the *Brave* browser **removes** this service by default, the four language packs must be **fully deployed** locally on the computer to support the other three languages besides **American English**.
  
### Cloud Mode
- Supports calling **selected cloud models** via *API Key*;
> [!NOTE]
> A valid API key needs to be generated. Currently, only *Google Gemini* is supported. Models called via *API Key* include but are not limited to *Google Gemini 3.1 Flash Lite* and *Google Gemini 3.5 Flash*. Currently, only these two are adapted. You can modify the parameters in the call link in the JS file to use models including but not limited to *Google Gemini 3.1 Pro*. **[This page](https://ai.google.dev/gemini-api/docs/rate-limits)** shows all supported models;

> [!IMPORTANT]
> Taking *Google Gemini* as an example, you need to log into your account in *[Google AI Studio](https://aistudio.google.com)*, click *Get API Key* in the bottom left, and **Create API key** in the top right. After completing **Name the project** and **Set up billing**, you can copy the *API Key* and paste it into the input box under the model;
- Supports **select-to-translate** into multiple languages. Currently defaults to **Simplified Chinese**, **American English**, **Canadian French**, and **Japanese**;
> Prompts can be modified in the JS file to add or remove languages output during translation;
- Supports **webpage summarization** of the current page;
> You can **ask questions** about the current webpage in the input box, or **send it blank**. When the input is empty, the model will **automatically extract** the main content of the current webpage and **concisely summarize** its outline;
- Supports **exporting chat logs** to *Markdown* format, and a **burn-after-reading** feature;
> When enabled, closing the sidebar will **automatically clear all current chat logs**. By default, closing the sidebar does not **automatically delete the current chat logs**, though you can choose to delete them manually;
- Supports **partial format** file inputs;
> This also depends on the **cloud model type**: **Text-only models** cannot accept image inputs. It is recommended to prioritize sideloading **multimodal models** that support image input, although currently only **plain text format** file inputs are supported.
- Supports **Text-to-Speech (TTS)** functionality, supporting reading out **model outputs** in the chat and summary interfaces, and reading out both **user inputs** and **model outputs** in the translation interface. Currently only supports **Simplified Chinese**, **American English**, **Canadian French**, and **Japanese**.
> When using *Chromium* browsers other than *Brave*, the browser will call *Google Network Voices* by default for reading. Since the *Brave* browser **removes** this service by default, the four language packs must be **fully deployed** locally on the computer to support the other three languages besides **American English**.

## Installation Method
> [!IMPORTANT]
> This extension currently only supports manual installation by **loading an unpacked extension** and **importing a ZIP file**.
<p align="center">
  <img src="https://img.shields.io/badge/Chrome Web Store-%C3%97-red?">
  <img src="https://img.shields.io/badge/Edge Addons-%C3%97-red?">
  <img src="https://img.shields.io/badge/Firefox Addons-%C3%97-red?">
  <img src="https://img.shields.io/badge/Safari Extension-%C3%97-red?">
</p>

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
- Permissions required to pin to the taskbar
- Permissions required to access file addresses
### Please note that the local mode of this project provides the ability to access local large language models offline, so you can completely disconnect from the internet when using local mode;
> Since *Gemini* is a cloud AI service launched by *Google LLC*, a stable internet connection is required when using the cloud services provided by *Google LLC* via *API Key* in **Cloud Mode**.
> Please note that this project cannot determine the security and privacy of the cloud model's output before it is sent back to this project via the server in cloud mode. Please refer to *Google LLC*'s privacy policy and disclaimer terms [here](https://policies.google.cn/privacy?hl=en).
### This project is not affiliated with any company, brand, trademark, project, or product mentioned in this document. Detailed descriptions are as follows:
- *Ollama GUI* is an open-source project by its respective rights holders, designed as a graphical user interface client for *Ollama*;
- *LM Studio* is a registered trademark of *LM Studio*, which is a one-stop local large model running platform;
- *GPT4All* is a registered trademark of *Nomic AI*, an open-source local large model running platform;
- *Cherry Studio* is an open-source project by its developer team, a desktop-level *AI* multi-model client designed for professional users;
- *Chatbox* is an open-source project by its developer team, a multi-platform universal *AI* client and smart assistant;
- *AnythingLLM* is a registered trademark of *Mintplex Labs Inc.*, an enterprise-grade full-featured local knowledge base and *AI* agent platform;
- *Ollama* is a registered trademark of *Ollama Inc.*, a local large language model running framework;
- *vLLM* is a representative project of its open-source community, a high-throughput, low-latency large model inference and serving engine;
- *llama.cpp* is a representative project of its open-source community, a lightweight large model inference framework based on *C/C++*;
- *Local AI* is a representative project of its open-source community, a local *AI* inference alternative compatible with the *OpenAI API*;
- *Google Gemini* is a registered trademark of *Google LLC*, an *AI* model cloud service launched by *Google LLC*;
- *Meta Muse* is a registered trademark of *Meta Platforms, Inc.*, and *Meta Muse Spark* is a creative *AI* design and interactive tool launched by *Meta*;
- *xAI Grok* is a registered trademark of *xAI*, an *AI* chat assistant with real-time information retrieval capabilities;
- *DeepSeek* is a registered trademark of Hangzhou DeepSeek Artificial Intelligence Basic Technology Research Co., Ltd., representing a series of open-source high-performance large language models;
- *Alibaba Qwen* is a registered trademark of Alibaba Group, representing a series of ultra-large-scale language models;
- *Moonshot Kimi* is a registered trademark of Moonshot AI, a smart assistant supporting ultra-long text processing;
- *Anthropic Claude* is a registered trademark of *Anthropic PBC*, a secure, honest, and high-performance *AI* language model;
- *OpenAI GPT* is a registered trademark of *OpenAI Inc.*, with the *GPT* series being industry-leading multimodal large language models;
- *Z GLM* is a registered trademark of Beijing Zhipu Huazhang Technology Co., Ltd., representing a new generation of cognitive large models.
