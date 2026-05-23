# Nano-EVO
Personal Browser Sidebar Extension
## Written in JavaScript, this extension adds a native browser sidebar while supporting both local LLMs and the Gemini cloud service.

<h3> Compatible Browsers:</h3>
<p>
  <img src="https://img.shields.io/badge/Chromium-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Chrome-%E2%88%9A-greem?style=for-the-badge">
  <img src="https://img.shields.io/badge/Edge-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Brave-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Opera-%E2%88%9A-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Safari-%C3%97-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/Firefox-%C3%97-red?style=for-the-badge">
  <img src="https://img.shields.io/badge/etc.-white?style=for-the-badge">
</p>
<h3> Compatible Local Applications:</h3> 
<p>
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
<h3> Compatible Cloud Services:</h3> 
<p>
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

## Detailed Description

### Local Mode
- Supports **Local Mode** and **modifying proxy ports**, with **real-time display of specific model parameters** in the bottom-left corner, including **model name**, **version number**, and **parameters**;
- Supports opening the sidebar via the **context menu** (right-click) in the browser, or by **clicking the extension icon**; **clicking it again** closes the sidebar;
- Supports **locally deployed** Large Language Models (LLMs), which require **running and sideloading** the model, opening the **loopback address port** (localhost), and enabling **local API services** and **Cross-Origin Resource Sharing (CORS)**;
- Supports **text selection translation** into multiple languages. By default, it currently translates into **Simplified Chinese**, **American English**, **Canadian French**, and **Japanese**. You can modify the prompts in the JS file to add or remove languages output by the model during translation;
- Supports **webpage summarization** of the current page. You can **ask questions** about the current webpage in the input box, or **leave it blank and send directly**. If the input is empty, the LLM will **automatically extract** the main content of the current webpage and **concisely summarize** its outline;
- Supports **exporting chat history** to *Markdown* format and features an **incognito/self-destruct (burn-after-reading)** function. When enabled, closing the sidebar will **automatically clear all current chat history**. By default, closing the sidebar will not **automatically delete the chat history**, though you can still choose to delete it manually;
- Supports file input for **certain formats**, which also depends on the **local LLM model**. If using a **text-only model**, image inputs will not be accepted. It is highly recommended to prioritize sideloading **multimodal LLMs** that support image input, although currently only **plain text format** file input is supported.
  
### Cloud Mode
- Supports calling **select cloud models** via *API Key*. You will need to generate a valid API key. Currently, only *Google Gemini* is supported. Models called via *API Key* include, but are not limited to, *Google Gemini 3.1 Flash Lite* and *Google Gemini 3.5 Flash*. Currently, only these two are adapted. You can modify the parameters in the API URL within the JS file to use other models, including but not limited to *Google Gemini 3.1 Pro*. **[This page](https://ai.google.dev/gemini-api/docs/rate-limits)** shows all supported models;
- Taking *Google Gemini* as an example, you need to log into your account in *[Google AI Studio](https://aistudio.google.com)*, click *Get API Key* in the bottom-left corner, click **Create API key** in the top-right corner, complete the steps to **name your project** and **set up billing information**, and then copy and paste the *API Key* into the input box under the model settings;
- Supports **text selection translation** into multiple languages. By default, it currently translates into **Simplified Chinese**, **American English**, **Canadian French**, and **Japanese**. You can modify the prompts in the JS file to add or remove languages output during translation;
- Supports **webpage summarization** of the current page. You can **ask questions** about the current webpage in the input box, or **leave it blank and send directly**. If the input is empty, the LLM will **automatically extract** the main content of the current webpage and **concisely summarize** its outline;
- Supports **exporting chat history** to *Markdown* format and features an **incognito/self-destruct (burn-after-reading)** function. When enabled, closing the sidebar will **automatically clear all current chat history**. By default, closing the sidebar will not **automatically delete the chat history**, though you can still choose to delete it manually;
- Supports file input for **certain formats**, which also depends on the **cloud LLM model**. If using a **text-only model**, image inputs will not be accepted. It is highly recommended to prioritize sideloading **multimodal LLMs** that support image input, although currently only **plain text format** file input is supported.

## Installation
> [!NOTE]
> This extension currently only supports manual installation by **loading unpacked extensions** or **importing a zip archive**.
<p> 
  <img src="https://img.shields.io/badge/Chrome Web Store-%C3%97-red?">
  <img src="https://img.shields.io/badge/Edge Addons-%C3%97-red?">
  <img src="https://img.shields.io/badge/Firefox Addons-%C3%97-red?">
  <img src="https://img.shields.io/badge/Safari Extension-%C3%97-red?">
</p>

## Disclaimer

### Please note: This project is intended for personal testing and coding study only.
### Please note: This project is licensed under the [MIT License](https://github.com/R-953/Nano-EVO/blob/main/MIT%20License). Licensees must include the above copyright notice and this permission notice in all copies or substantial portions of the Software. Running this project as a licensee or user is deemed equivalent to having fully and thoroughly read this disclaimer, the original MIT License, and the privacy policies and disclaimers of the respective cloud service providers.
### Please note: This project will not read or execute any local files other than those strictly required to run the project, except for:
- Code essential for running this project
- LLM files sideloaded on your local device
- Files uploaded during chats with the LLM
- Files exported from chats with the LLM
> All data generated by this project is stored locally within your browser;
> Furthermore, this project does not store, upload, or modify any data related to local or cloud LLMs, including but not limited to: chat history, translation history, webpage summaries, *API Keys*, etc.
> Unless the aforementioned data is manually exported locally or uploaded to the cloud,
## Any consequences arising from such actions are entirely unrelated to this project. Neither the author nor the cloud service providers assume any liability for any consequences resulting therefrom.
### Please note: This project does not require any additional permissions to run, except for:
- Permissions required to run within the browser
- Permissions required to pin to the toolbar/extension bar
- Permissions required to access file URLs
### Please note: The Local Mode of this project provides the capability to access local LLMs offline. Therefore, when using **Local Mode**, you can **completely disconnect** from the internet;
> Since *Gemini* is a cloud-based AI service provided by *Google LLC*, a stable internet connection is required when using their cloud services via an *API Key* in **Cloud Mode**.
> Please note: This project has no way of knowing the security and privacy of the cloud LLM outputs before they are transmitted back to this project from the servers. Please refer to *Google LLC*'s privacy policy and terms of service [here](https://policies.google.cn/privacy?hl=zh-CN).
### This project is not affiliated with any company, brand, trademark, project, or product mentioned in this document. Detailed explanations are as follows:
- *Ollama GUI* is an open-source project of its respective rights holders, and *Ollama GUI* is a graphical user interface client designed for *Ollama*;
- *LM Studio* is a registered trademark of *LM Studio*, which is an all-in-one platform for running local LLMs;
- *GPT4All* is a registered trademark of *Nomic AI*, which is an open-source local LLM platform;
- *Cherry Studio* is an open-source project by its development team, and *Cherry Studio* is a desktop-class AI multi-model client designed for professional users;
- *Chatbox* is an open-source project by its development team, and *Chatbox* is a multi-platform desktop AI client and assistant;
- *AnythingLLM* is a registered trademark of *Mintplex Labs Inc.*, and *AnythingLLM* is a fully-featured, enterprise-grade local knowledge base and AI agent platform;
- *Ollama* is a registered trademark of *Ollama Inc.*, and *Ollama* is a local LLM execution framework;
- *vLLM* is a representative project of its open-source community, and *vLLM* is a high-throughput, low-latency LLM serving and inference engine;
- *llama.cpp* is a representative project of its open-source community, and *llama.cpp* is a lightweight LLM inference framework based on *C/C++*;
- *Local AI* is a representative project of its open-source community, and *Local AI* is a local, OpenAI-API-compatible AI inference alternative;
- *Google Gemini* is a registered trademark of *Google LLC*, and *Gemini* is an AI model cloud service provided by *Google LLC*;
- *Meta Muse* is a registered trademark of *Meta Platforms, Inc.*, and *Meta Muse Spark* is a creative AI-assisted design and interactive tool launched by *Meta*;
- *xAI Grok* is a registered trademark of *xAI*, and *Grok* is an AI chat assistant with real-time information retrieval capabilities launched by *xAI*;
- *DeepSeek* is a registered trademark of Hangzhou DeepSeek Artificial Intelligence Technology Co., Ltd., and *DeepSeek* is a series of open-source, high-performance Large Language Models developed by the company;
- *Alibaba Qwen* is a registered trademark of Alibaba Group, and *Qwen* (Tongyi Qianwen) is a series of large-scale language models launched by Alibaba;
- *Moonshot Kimi* is a registered trademark of Moonshot AI Technology Co., Ltd., and *Kimi* is an intelligent assistant supporting ultra-long text processing launched by the company;
- *Anthropic Claude* is a registered trademark of *Anthropic PBC*, and *Claude* is a safe, honest, and high-performance AI language model launched by *Anthropic*;
- *OpenAI GPT* is a registered trademark of *OpenAI Inc.*, and the *GPT* series represents industry-leading multimodal Large Language Models launched by *OpenAI*;
- *Z GLM* is a registered trademark of Beijing Zhipu Huazhang Technology Co., Ltd. (Zhipu AI), and *GLM* is a new-generation cognitive LLM series launched by Zhipu AI.
