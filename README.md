<div align="center">

<img src="assets/logo_full.png" alt="LingQi Technology" width="240" />

# 扬州凌柒科技 · LingQi Technology

**Industrial Visual-AI Platform · From Classical CV to LLMs**

Bilingual (中文 / English) corporate website for [Yangzhou LingQi
Technology Co., Ltd.](https://github.com/SuperGokou/linqitech) — a
computer-vision company that ships automated optical inspection (AOI)
systems for electronics, automotive, appliance, and medical-device
manufacturing lines.

[![Node](https://img.shields.io/badge/Node.js-18%2B-43853d?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.21-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![DeepSeek](https://img.shields.io/badge/AI-DeepSeek--chat-4d6bff?logo=openai&logoColor=white)](https://deepseek.com/)
[![i18n](https://img.shields.io/badge/i18n-中文%20%2F%20English-2b7fff)](#)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blueviolet?logo=github&logoColor=white)](#-deployment)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#-license)

[功能特性](#-features) ·
[快速开始](#-quick-start) ·
[项目结构](#-project-structure) ·
[架构](#-architecture) ·
[部署](#-deployment) ·
[联系](#-contact)

</div>

---

## ✨ Features

| | Capability | Notes |
| --- | --- | --- |
| 🌐 | **Bilingual UI** | Live `中 ⇄ EN` toggle on every page, persisted via `data-lang` |
| 🤖 | **DeepSeek customer-service bot** | Server-side proxy with a strict company-fact-only system prompt |
| 📨 | **Contact-form pipeline** | Logs submissions to JSONL + optional SMTP email out |
| 🔬 | **Tiny VGG CNN visualizer** | Real forward-pass on the input image — 10 hidden layers, RdBu colormap, animated wave + connection lines (inspired by [poloclub/cnn-explainer](https://poloclub.github.io/cnn-explainer/)) |
| 🛠 | **YOLOX defect-detection demo** | Animated input → pipeline → output panel with bounding-box reveal |
| 🖼 | **PCB / IC-die scan demo** | Hero "LQ-Vision" widget with synthesised defect overlays |
| 📐 | **No build step** | Vanilla HTML / CSS / JS — open `index.html` and it just works |
| 📊 | **GitHub Pages ready** | Every static file at the repo root, no Webpack / Vite required |

---

## 🚀 Quick start

```sh
# 1. Install dependencies
npm install

# 2. Provide a DeepSeek API key (chatbot falls back to mock replies otherwise)
cp .env.example .env
#   then edit .env and set DEEPSEEK_API_KEY=sk-...

# 3. Run the dev server
npm run dev          # → http://localhost:3000
```

### Environment variables

| Variable | Required | Purpose |
| --- | :---: | --- |
| `DEEPSEEK_API_KEY` |  ✓ for chat | API key for the [DeepSeek `deepseek-chat`](https://platform.deepseek.com/) model |
| `PORT` | — | HTTP port (default `3000`) |
| `SMTP_HOST` | for email | SMTP server hostname |
| `SMTP_PORT` | for email | SMTP server port (e.g. `465`) |
| `SMTP_SECURE` | for email | `true` for TLS on port 465 |
| `SMTP_USER` | for email | SMTP username |
| `SMTP_PASS` | for email | SMTP password |
| `CONTACT_FROM` | for email | Sender address (header `From:`) |
| `CONTACT_TO` | for email | Recipient address — where new inquiries are delivered |

If SMTP is not configured the server still accepts contact-form submissions
and appends them to `data/inquiries.jsonl` for manual review.

---

## 🗂 Project structure

```
linqitech/
├── index.html               # Home (hero + scan demo + capabilities + cases)
├── about.html               # Company / mission / vision / heritage band
├── careers.html             # Open roles, perks, "join us" CTA
├── cases.html               # Case studies, filter pills, anchor links
├── technology.html          # Core tech: CNN demo, 3-tier matrix, pipeline
├── privacy.html / terms.html# Legal docs
│
├── css/                     # 6 stylesheets — one per major surface
│   ├── styles.css           # shared design tokens + nav + footer + chat
│   ├── about.css · cases.css · careers.css · tech.css · legal.css
│
├── js/                      # 6 scripts — app.js holds shared logic
│   ├── app.js               # i18n, scan demo, chat, contact form, scroll FX
│   ├── about.js · cases.js · careers.js · tech.js · legal.js
│
├── assets/                  # Images, logos, icons (no build step needed)
│   ├── chip_demo.jpg · pcb_demo.jpg · pcb_yolox_*.{jpg,png}
│   ├── logo*.{svg,png,avif}
│   ├── tech/                # tech-stack SVG icons
│   ├── universities/        # academic-heritage logos
│   └── figma/               # solution-card photography
│
├── server.js                # Express server — static files + /api endpoints
├── scripts/
│   └── make-pcb-demo.py     # one-off asset prep (PIL, generates pcb_demo.jpg)
├── data/                    # runtime — gitignored
│   └── inquiries.jsonl      # append-only contact-form log
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🧭 Site map

```mermaid
graph LR
  Home["🏠 index.html<br/>Hero · Scan Demo · Capabilities"]
  Tech["⚙️ technology.html<br/>CNN Demo · Tiers · Pipeline"]
  Cases["🗂 cases.html<br/>Filterable case studies"]
  About["🏢 about.html<br/>Mission · Vision · Heritage"]
  Careers["💼 careers.html<br/>Roles · Perks"]
  Privacy["📜 privacy.html"]
  Terms["📜 terms.html"]

  Home --> Tech
  Home --> Cases
  Home --> About
  Home --> Careers
  Home -. footer .-> Privacy
  Home -. footer .-> Terms
```

---

## 🏗 Architecture

```mermaid
flowchart LR
  subgraph Client["🌐 Browser"]
    UI[Static HTML / CSS / JS]
    Chat[💬 Chat widget]
    Form[📨 Contact form]
  end

  subgraph Server["🖥 Express (server.js)"]
    Static["express.static(__dirname)"]
    ApiChat["POST /api/chat"]
    ApiContact["POST /api/contact"]
  end

  subgraph External["☁️ External services"]
    DS["DeepSeek<br/>deepseek-chat"]
    SMTP["SMTP relay<br/>(optional)"]
  end

  Disk[("📁 data/inquiries.jsonl")]

  UI -- HTML / CSS / JS --> Static
  Chat -- "messages[]" --> ApiChat -- HTTPS --> DS
  Form -- "name + email + msg" --> ApiContact
  ApiContact -- append --> Disk
  ApiContact -- "if SMTP_HOST" --> SMTP
```

---

## 🧠 CNN Explainer demo (`technology.html`)

A real Tiny VGG forward-pass runs in the browser on the PCB demo image
— no model is loaded, but every map is computed by actual 3 × 3
convolutions, ReLU, and 2 × 2 max-pool ops, then rendered with the
matplotlib **RdBu_r** divergent colormap.

```mermaid
flowchart LR
  In["🟦 input<br/>(64,64,3)"] --> C11["conv_1_1<br/>(62,62,10)"]
  C11 --> R11["relu_1_1"]
  R11 --> C12["conv_1_2<br/>(60,60,10)"]
  C12 --> R12["relu_1_2"]
  R12 --> P1["max_pool_1<br/>(30,30,10)"]
  P1  --> C21["conv_2_1<br/>(28,28,10)"]
  C21 --> R21["relu_2_1"]
  R21 --> C22["conv_2_2<br/>(26,26,10)"]
  C22 --> R22["relu_2_2"]
  R22 --> P2["max_pool_2<br/>(13,13,10)"]
  P2  --> Out["softmax<br/>6 PCB defect classes"]
```

Visual features replicated from
[poloclub/cnn-explainer](https://poloclub.github.io/cnn-explainer):

- 3 separated R / G / B input channels
- 10 feature maps per hidden layer (procedurally diverse 3×3 kernels)
- Layer name + dimension `(H, W, D)` above every column
- Per-layer color-scale strip + global activation legend
- Forward-pass wave animation (16-second loop) — each layer pulses,
  its label highlights blue, output bars fill at the end
- ~480 SVG bezier connection lines, dense at small layers
  (3 → 10, 10 → 6) and 5-neighbour at the 10 → 10 stages

---

## 🔌 API reference

| Method | Path | Purpose |
| --- | --- | --- |
| `GET`  | `/`               | Static `index.html` (and any other route ending in `.html`) |
| `POST` | `/api/chat`       | Forwards `{ messages: [...] }` to DeepSeek with the company system prompt |
| `POST` | `/api/contact`    | `{ name, email, company, phone, topic, message }` → JSONL + email |

Mock-mode behaviour: if `DEEPSEEK_API_KEY` is unset, `/api/chat` returns
canned bilingual replies instead of failing — useful for offline demos.

---

## 🚢 Deployment

### Option A · GitHub Pages (static only)

Settings → Pages → Source = **`main` branch / root**.
Pages will serve `index.html` and friends straight from the repo. The
chatbot and contact-form endpoints require the Express server, so for a
fully-functional preview pair Pages with Option B for the backend.

### Option B · Self-hosted Node

```sh
npm ci
NODE_ENV=production node server.js
```

Behind nginx / Caddy with TLS termination. The server is stateless apart
from `data/inquiries.jsonl`, so containerising or rolling-restarting is
trivial.

---

## 🛠 Tech stack

<table>
<tr>
  <td><b>Front-end</b></td>
  <td>HTML5 · CSS3 · vanilla JS · Google Fonts (Inter, Noto Sans SC, JetBrains Mono) · SVG / Canvas</td>
</tr>
<tr>
  <td><b>Back-end</b></td>
  <td>Node.js 18+ · Express 4 · ESM · dotenv · nodemailer</td>
</tr>
<tr>
  <td><b>AI</b></td>
  <td>DeepSeek <code>deepseek-chat</code> via REST</td>
</tr>
<tr>
  <td><b>Tooling</b></td>
  <td>None — no bundler, no transpiler, no framework</td>
</tr>
</table>

---

## 📞 Contact

- **公司 / Company** — 扬州凌柒科技有限公司 (Yangzhou LingQi Technology Co., Ltd.)
- **地址 / Address** — 江苏省扬州市广陵区创业中心 7-707
- **电话 / Phone** — +86 0514-85764459 · +86 0514-85764366
- **邮箱 / Email** — [corporation@linqi.tech](mailto:corporation@linqi.tech)

---

## 📄 License

© 2026 扬州凌柒科技有限公司 · All rights reserved. Proprietary —
this repository is hosted privately and is not licensed for
redistribution.
