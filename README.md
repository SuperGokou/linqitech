# LingQi Technology — Corporate Website

Bilingual (CN / EN) marketing site for **扬州凌柒科技有限公司** (Yangzhou LingQi
Technology Co., Ltd.) — an industrial computer-vision company building AOI
inspection systems for electronics, automotive, appliance, and medical
manufacturing lines.

The site is a small Node.js / Express application that serves a static
front-end and proxies an LLM-powered customer-service chatbot to the
[DeepSeek](https://deepseek.com/) API.

## Stack

- **Backend** — Node 18+, Express 4, ESM modules, Nodemailer (optional)
- **Front-end** — Vanilla HTML / CSS / JS (no build step), Inter + Noto Sans
  SC + JetBrains Mono via Google Fonts
- **AI integration** — DeepSeek `deepseek-chat` model behind `/api/chat`
- **CNN Explainer demo** — On-page Tiny VGG forward-pass visualization
  rendered with `<canvas>` and the matplotlib RdBu_r colormap

## Project layout

```
linqi-landing/
├── index.html               Pages live at the project root so the site can
├── about.html                deploy to GitHub Pages (root) without a build step
├── careers.html
├── cases.html
├── privacy.html
├── technology.html
├── terms.html
├── css/                     One stylesheet per page + shared styles.css
├── js/                      Page-level scripts (app.js is shared)
├── assets/                  Images, logos, university crests, tech-stack icons
├── server.js                Express entry point (chatbot + contact API)
├── scripts/                 One-off helper scripts (e.g. PCB demo asset prep)
├── data/                    Runtime data (gitignored)
│   └── inquiries.jsonl      Append-only log of contact-form submissions
├── .env.example             Template for the local secrets file
├── package.json
└── README.md
```

## GitHub Pages deployment

Because every static file lives at the repo root, the site is GH Pages
ready out of the box — no build step. Set **Settings → Pages → Source =
`main` branch / root** and the static pages will be served at the
configured URL. The chatbot and contact-form endpoints require the
Express server and won't work on GitHub Pages alone.

## Quick start

```sh
# 1. Install dependencies
npm install

# 2. Provide a DeepSeek API key (otherwise the chatbot returns mock replies)
cp .env.example .env
#   then edit .env and set DEEPSEEK_API_KEY=...

# 3. Run the dev server
npm run dev
#   → http://localhost:3000
```

Optional environment variables (see `.env.example` for the full list):

| Variable             | Purpose                                          |
| -------------------- | ------------------------------------------------ |
| `DEEPSEEK_API_KEY`   | DeepSeek API key for the on-site chatbot          |
| `PORT`               | Server port (default `3000`)                      |
| `SMTP_HOST`          | If set, contact-form submissions also email-out  |
| `SMTP_PORT`          | SMTP server port                                  |
| `SMTP_USER`          | SMTP username                                     |
| `SMTP_PASS`          | SMTP password                                     |
| `CONTACT_TO`         | Recipient address for contact-form submissions    |

## Endpoints

- `GET  /`                   → static front-end (`public/`)
- `POST /api/chat`           → forwarded to DeepSeek with the company
                                customer-service system prompt
- `POST /api/contact`        → appends submission to `data/inquiries.jsonl`
                                and (if SMTP configured) emails it out

## License

© 2026 扬州凌柒科技有限公司 · All rights reserved.
