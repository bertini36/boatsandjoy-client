[![Github actions](https://github.com/bertini36/boatsandjoy-client/workflows/test/badge.svg)](https://github.com/bertini36/boatsandjoy-client/workflows/test/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/05e6430b-2d1e-4548-a1a0-98f5c59edafd/deploy-status)](https://app.netlify.com/sites/boatsandjoy-client/deploys)
<h3 align="center">
    bertini36/boatsandjoy-client 🛥️
</h3>
<p align="center">
  <a href="#-environment-setup" target="_blank">
    Installation
  </a>&nbsp;&nbsp;•&nbsp;
  <a href="Makefile" target="_blank">
    Commands
  </a>
</p>
<p align="center">
Boatsandjoy official website
</p>
<p align="center">
Powered by <a href="https://github.com/vuejs/vue-next">#vue</a> and
 <a href="https://github.com/tailwindcss/tailwindcss">#tailwind</a>
</p>

## ⚙️ Environment Setup

### 🐳 Required tools

1. [Install Docker and Docker Compose](https://www.docker.com/get-started)
2. Clone this project: `git clone https://github.com/bertini36/boatsandjoy-client`
3. Move to the project folder: `boatsandjoy-client`

### 🔥 Application execution

1. Install all the dependencies and bring up the project with Docker executing: `make build`
2. Set config files: `cp .env.sample .env.production && cp .env.sample .env.development`
3. Run the server: `make up` (by default Vue runs applications at 3000 port)

## 🚀 Deploy

This website is deployed in <a href="https://www.netlify.com/" target="_blank">Netlify</a>

<br />
<p align="center">&mdash; Built with :heart: from Mallorca &mdash;</p>
