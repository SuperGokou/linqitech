// Local proxy server: serves the static landing page + bridges /api/chat to DeepSeek.
// API key never leaves the server. Loads from local .env first, then falls back to
// J:/Project Files/MyProject/领益智造/numberDetect/.env if local isn't set.

import "dotenv/config";
import express from "express";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";
import multer from "multer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// ---- API key resolution ---------------------------------------------------
function loadApiKey() {
  if (process.env.DEEPSEEK_API_KEY) return process.env.DEEPSEEK_API_KEY;

  const fallbackEnv = "J:/Project Files/MyProject/领益智造/numberDetect/.env";
  if (fs.existsSync(fallbackEnv)) {
    const text = fs.readFileSync(fallbackEnv, "utf8");
    const m = text.match(/^DEEPSEEK_API_KEY\s*=\s*(.+)$/m);
    if (m) return m[1].trim().replace(/^["']|["']$/g, "");
  }
  return null;
}
const DEEPSEEK_API_KEY = loadApiKey();
if (!DEEPSEEK_API_KEY) {
  console.warn("[warn] DEEPSEEK_API_KEY not found — /api/chat will return mock replies");
}

// ---- System prompt (bilingual customer-service persona) -------------------
const SYSTEM_PROMPT = `You are 凌柒AI, the customer-service assistant of 扬州凌柒科技有限公司
(Yangzhou LingQi Technology Co., Ltd.) — an industrial visual-AI company that builds
automated optical inspection (AOI) systems for manufacturing customers.

Company facts:
- Industrial vision team led by Harvard / UPenn-trained engineers.
- Core product: 3-tier visual AI platform — L1 OpenCV (lightweight rules), L2 YOLO+CNN+golden-sample
  (the standard offering, already deployed on a Luxshare keyboard line, 97.5% top-1 accuracy),
  L3 VLM + RAG (Qwen2.5-VL / MiniCPM-V) for zero-shot and report-generation cases.
- Verticals: electronics, automotive parts, appliances, medical consumables.
- Long-term direction: industrial vision today → humanoid-robot vision tomorrow.
- HQ direction: applying to Yangzhou talent-introduction program; office to be in Yangzhou.

Official company contact (the ONLY contact info you may share):
- Address: 江苏省扬州市广陵区创业中心 7-707
- Phone:   +86 0514-85764459 / +86 0514-85764366
- Email:   corporation@linqi.tech

Behavior rules:
1. Detect the user's language (Chinese or English) and reply in the same language.
2. Be concise — 2-4 sentences for typical questions. Use Markdown only when truly helpful.
3. NEVER share or invent any individual founder's personal phone or email. Use only the
   official company contact info above. For project starts or pricing, also direct customers
   to the inquiry form on the contact page.
4. If asked something off-topic (politics, jokes, unrelated tech), gently steer back to company services.
5. Never invent specs you don't know; if unsure, say you'll have a human follow up.
6. When asked about the team, describe the team's academic & industry background at a high level
   (Harvard / UPenn-trained engineers, 12 years industrial CV experience) — do NOT reveal
   individuals' personal information.`;

// ---- Express setup --------------------------------------------------------
const app = express();
app.use(express.json({ limit: "1mb" }));
// Serve the static front-end from the project root (works for both local
// `npm run dev` and GitHub Pages root-level deployment).
app.use(express.static(__dirname, {
  extensions: ["html"],
  index: "index.html",
}));

// ---- /api/chat ------------------------------------------------------------
app.post("/api/chat", async (req, res) => {
  try {
    const { messages = [] } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages array required" });
    }

    if (!DEEPSEEK_API_KEY) {
      // Mock reply so the UI is still usable for demos
      return res.json({
        reply:
          "[demo 模式] 当前后端没有 DeepSeek API key,这是占位回复。请把 DEEPSEEK_API_KEY 配置好后重启服务。",
      });
    }

    const payload = {
      model: "deepseek-chat",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.6,
      max_tokens: 600,
      stream: false,
    };

    const r = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const text = await r.text();
      console.error("[deepseek] error:", r.status, text.slice(0, 200));
      return res.status(502).json({ error: `upstream ${r.status}` });
    }
    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "(empty)";
    return res.json({ reply });
  } catch (e) {
    console.error("[/api/chat] crash:", e);
    return res.status(500).json({ error: "server error" });
  }
});

// ---- /api/contact ---------------------------------------------------------
// 1. Always logs the inquiry to inquiries.jsonl
// 2. If SMTP_HOST + SMTP_USER + SMTP_PASS are configured, sends email to CONTACT_TO
//    (or ming.xia@alumni.harvard.edu by default).
// SMTP env vars (e.g., for Gmail with app password or any SMTP provider):
//   SMTP_HOST=smtp.gmail.com
//   SMTP_PORT=465
//   SMTP_USER=your-account@gmail.com
//   SMTP_PASS=app-password
//   SMTP_FROM="LingQi Inquiries <your-account@gmail.com>"
//   CONTACT_TO=ming.xia@alumni.harvard.edu

let mailer = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  mailer = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  console.log("[mail] SMTP transport configured ✓");
} else {
  console.log("[mail] SMTP not configured — inquiries will only be logged to inquiries.jsonl");
}

const CONTACT_TO   = process.env.CONTACT_TO   || "corporation@linqi.tech";
const CONTACT_FROM = process.env.SMTP_FROM    || process.env.SMTP_USER || "no-reply@linqi.tech";
const DATA_DIR = path.join(__dirname, "data");
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
const INQ_LOG = path.join(DATA_DIR, "inquiries.jsonl");

function isEmail(s) {
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
function safe(s, max = 5000) {
  if (typeof s !== "string") return "";
  return s.slice(0, max);
}

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, company, phone, topic, message } = req.body || {};

    if (!safe(name, 200) || !isEmail(email) || !safe(message, 5000)) {
      return res.status(400).json({ error: "name, email, message required" });
    }

    const entry = {
      ts: new Date().toISOString(),
      name:    safe(name, 200),
      email:   safe(email, 320),
      company: safe(company, 200),
      phone:   safe(phone, 50),
      topic:   safe(topic, 50),
      message: safe(message, 5000),
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || "",
      ua: safe(req.headers["user-agent"] || "", 300),
    };

    fs.appendFileSync(INQ_LOG, JSON.stringify(entry) + "\n");

    if (mailer) {
      const subj = `[LingQi 咨询] ${entry.topic || "general"} — ${entry.name}`;
      const text = [
        `New inquiry from the LingQi landing page`,
        ``,
        `Time:    ${entry.ts}`,
        `Name:    ${entry.name}`,
        `Email:   ${entry.email}`,
        `Phone:   ${entry.phone}`,
        `Company: ${entry.company}`,
        `Topic:   ${entry.topic}`,
        `IP/UA:   ${entry.ip}  ·  ${entry.ua}`,
        ``,
        `Message:`,
        entry.message,
      ].join("\n");

      try {
        await mailer.sendMail({
          from: CONTACT_FROM,
          to: CONTACT_TO,
          replyTo: entry.email,
          subject: subj,
          text,
        });
      } catch (e) {
        console.error("[mail] send failed:", e.message);
        // still return success — inquiry is in the log, we'll see it
      }
    }

    res.json({ ok: true });
  } catch (e) {
    console.error("[/api/contact] crash:", e);
    res.status(500).json({ error: "server error" });
  }
});

// ---- /api/apply — job applications --------------------------------------
// Stores submissions in data/applications.jsonl (parallel to inquiries.jsonl)
// Saves uploaded resume to data/resumes/{ts}-{rand}-{originalname}
// Emails CONTACT_TO with the resume attached (if SMTP configured)
const RESUME_DIR = path.join(DATA_DIR, "resumes");
if (!fs.existsSync(RESUME_DIR)) fs.mkdirSync(RESUME_DIR, { recursive: true });
const APP_LOG = path.join(DATA_DIR, "applications.jsonl");

const ALLOWED_RESUME_EXT = new Set([
  ".pdf", ".doc", ".docx", ".rtf", ".txt", ".md", ".pages", ".odt",
]);

const resumeStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, RESUME_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname || "").toLowerCase();
    const stem = path.basename(file.originalname || "resume", ext)
      .replace(/[^\w.\-一-龥]+/g, "_")   // sanitize, keep CJK
      .slice(0, 80);
    const ts = new Date().toISOString().replace(/[:.]/g, "-");
    const rnd = crypto.randomBytes(4).toString("hex");
    cb(null, `${ts}-${rnd}-${stem}${ext}`);
  },
});
const uploadResume = multer({
  storage: resumeStorage,
  limits: { fileSize: 10 * 1024 * 1024, files: 1 },   // 10 MB max, 1 file
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname || "").toLowerCase();
    if (ALLOWED_RESUME_EXT.has(ext)) return cb(null, true);
    cb(new Error("RESUME_EXT_REJECTED"));
  },
});

app.post("/api/apply", (req, res) => {
  uploadResume.single("resume")(req, res, async (err) => {
    if (err) {
      const code = err.code === "LIMIT_FILE_SIZE" ? "FILE_TOO_LARGE"
                 : err.message === "RESUME_EXT_REJECTED" ? "FILE_TYPE_REJECTED"
                 : "UPLOAD_ERROR";
      return res.status(400).json({ error: code });
    }
    try {
      const { name, email, phone, github, jobId, jobTitle, message } = req.body || {};

      if (!safe(name, 200) || !isEmail(email)) {
        if (req.file) { try { fs.unlinkSync(req.file.path); } catch {} }
        return res.status(400).json({ error: "name and email required" });
      }

      const entry = {
        ts: new Date().toISOString(),
        jobId:    safe(jobId, 50),
        jobTitle: safe(jobTitle, 200),
        name:     safe(name, 200),
        email:    safe(email, 320),
        phone:    safe(phone, 50),
        github:   safe(github, 300),
        message:  safe(message, 5000),
        resume: req.file ? {
          filename: req.file.filename,
          original: req.file.originalname,
          size:     req.file.size,
          mimetype: req.file.mimetype,
        } : null,
        ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || "",
        ua: safe(req.headers["user-agent"] || "", 300),
      };

      fs.appendFileSync(APP_LOG, JSON.stringify(entry) + "\n");

      if (mailer) {
        const subj = `[LingQi 求职] ${entry.jobTitle || "general"} — ${entry.name}`;
        const text = [
          `New application from the LingQi careers page`,
          ``,
          `Time:      ${entry.ts}`,
          `Position:  ${entry.jobTitle}  (${entry.jobId})`,
          `Name:      ${entry.name}`,
          `Email:     ${entry.email}`,
          `Phone:     ${entry.phone}`,
          `GitHub:    ${entry.github}`,
          `Resume:    ${entry.resume ? `${entry.resume.original} (${entry.resume.size} bytes)` : "(not attached)"}`,
          `IP/UA:     ${entry.ip}  ·  ${entry.ua}`,
          ``,
          `Message:`,
          entry.message || "(none)",
        ].join("\n");
        const mailOpts = {
          from: CONTACT_FROM,
          to: CONTACT_TO,
          replyTo: entry.email,
          subject: subj,
          text,
        };
        if (req.file) {
          mailOpts.attachments = [{
            filename: req.file.originalname,
            path: req.file.path,
            contentType: req.file.mimetype,
          }];
        }
        try {
          await mailer.sendMail(mailOpts);
        } catch (e) {
          console.error("[mail] application send failed:", e.message);
          // don't bubble up — application is logged + resume saved on disk
        }
      }

      res.json({ ok: true });
    } catch (e) {
      console.error("[/api/apply] crash:", e);
      res.status(500).json({ error: "server error" });
    }
  });
});

// ---- start ----------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`linqi-landing running at http://localhost:${PORT}`);
  console.log(
    `DeepSeek API key: ${DEEPSEEK_API_KEY ? "loaded ✓" : "NOT loaded — chat returns mock"}`
  );
});
