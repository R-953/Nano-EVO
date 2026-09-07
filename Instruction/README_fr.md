# Nano-EVO

<p align="center">
    <img src="https://github.com/R-953/Nano-EVO/blob/main/Extension/icon.jpg">
</p>

Extension de barre latérale de navigateur personnelle
## Conçue en JavaScript natif, ajoutant une barre latérale avec prise en charge complète des LLM locaux et des API cloud Gemini / OpenAI / Claude sur les moteurs Chromium et Firefox

<p align="center">
  <a href="../README.md">English</a> •  
  <a href="./README_fr.md">Français</a> • 
  <a href="./README_ja.md">日本語</a> • 
  <a href="./README_zh-Hans.md">简体中文</a> • 
  <a href="./README_zh_Hant.md">繁體中文</a> • 
</p>

<h3 align="center"> Navigateurs compatibles :</h3>

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

<h3 align="center"> Applications locales compatibles :</h3> 

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

<h3 align="center"> Services Cloud compatibles :</h3> 

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

## Fonctionnalités

### Mode Local
- Prise en charge universelle des moteurs locaux (LM Studio, Ollama, vLLM, AnythingLLM, Chatbox, etc.) ;
- Complétion automatique du chemin `/v1` vers `/v1/chat/completions` ;
- Détection dynamique du modèle actif via `${baseUrl}/models` affichée dans le badge inférieur gauche ;
- Deux branches optimisées : Chromium (`chrome.sidePanel`) et Firefox (`sidebar_action`) ;
- Traduction de sélection et résumé de page web en un clic ;
- Annotation Furigana japonaise 100 % hors ligne via Kuromoji intégré.

### Mode Cloud
- Prise en charge officielle de Google Gemini (Flash / Flash Lite), OpenAI (GPT-4o / GPT-4o-mini) et Anthropic Claude (Claude 3.5 Sonnet / Claude 3 Haiku) ;
- Mémorisation indépendante et sécurisée des clés API et points de terminaison.

### Documents & Entrées Multimodales
- **Extraction PDF hors ligne** : Aucun envoi sur le cloud, analyse de texte locale via `pdf.js` ;
- **Vision & Images** : Prise en charge de `.png, .jpg, .jpeg, .webp` avec compression intelligente par Canvas (max 2048px) ;
- **Import multiple simultané** : Ajout de plusieurs fichiers de formats mixtes en une seule fois ;
- **Glisser-déposer & Coller (Ctrl+V)** avec barre de progression en temps réel pour chaque fichier.

### Confort & Ergonomie
- **Raccourcis clavier** : **Entrée** pour envoyer, **Maj + Entrée** pour sauter une ligne, protégé contre les déclenchements anticipés lors de la saisie IME ;
- **Défilement intelligent** : Le défilement vers le haut désactive temporairement l'ancrage en bas ; un double-clic ou le retour en bas réactive le suivi automatique.

---

## Installation

### 1. Navigateurs Chromium (Chrome / Edge / Brave / Opera)
1. Ouvrez `chrome://extensions` ;
2. Activez le **Mode développeur** ;
3. Cliquez sur **Charger l'extension non empaquetée** ;
4. Sélectionnez le dossier `Main/Chromium/6.907.13.41`.

### 2. Navigateurs Firefox (Firefox / Floorp)
1. Ouvrez `about:debugging#/runtime/this-firefox` ;
2. Cliquez sur **Charger un module temporaire...** ;
3. Sélectionnez le fichier `Main/Firefox/6.907.13.41/manifest.json`.

---

## Licence
Ce projet est sous licence [MIT](https://github.com/R-953/Nano-EVO/blob/main/LICENSE).
