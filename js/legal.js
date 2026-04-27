// Legal pages — English translations for privacy + terms
(function () {
  const extras = {
    zh: {
      // Privacy meta
      "pp.eyebrow":  "Privacy Policy",
      "pp.title":    "隐私政策",
      "pp.meta.updated": "最后更新",
      "pp.tldr":     "简而言之: 我们只收集你主动提交的咨询信息(姓名、邮箱、电话、留言)和与 AI 客服的对话内容。数据存储在我们自己的服务器上,不出售给第三方。AI 客服由 DeepSeek 驱动,你的对话会发送到 DeepSeek API。你可以随时联系我们删除你的数据。",
      "pp.related":  "相关文件:",
      "pp.related.terms": "服务条款",

      // Terms meta
      "ts.eyebrow":  "Terms of Service",
      "ts.title":    "服务条款",
      "ts.meta.updated": "最后更新",
      "ts.tldr":     "简而言之: 本网站是凌柒科技的产品展示和咨询入口。请合法、合理地使用本网站,不要发起恶意访问或滥用 AI 客服。AI 客服的回答仅供参考,不构成正式合同或专业建议。本条款适用中华人民共和国法律,争议由扬州市有管辖权的法院处理。",
      "ts.related":  "相关文件:",
      "ts.related.privacy": "隐私政策",
    },

    en: {
      // ===== Privacy Policy =====
      "pp.eyebrow":  "Privacy Policy",
      "pp.title":    "Privacy Policy",
      "pp.meta.updated": "Last updated",
      "pp.tldr":     "TL;DR — We only collect what you actively submit (the contact form: name, email, phone, message) and your AI-assistant conversation. Data lives on our own servers and is never sold. The AI assistant is powered by DeepSeek, so your chat is sent to the DeepSeek API. You can request deletion at any time.",

      "pp.s1.t":  "Introduction",
      "pp.s1.b1": "Yangzhou LingQi Technology Co., Ltd. (\"LingQi\", \"we\", \"us\") respects your privacy. This policy explains what we collect when you visit linqi.tech, use the AI assistant, or submit the inquiry form, and how we use, store and protect that information.",
      "pp.s1.b2": "By using this site, you agree to this policy. If you don't agree, please stop using the site.",

      "pp.s2.t":  "Information We Collect",
      "pp.s2.h1": "A. Information you actively submit",
      "pp.s2.l1": "Inquiry form: name, company, email, optional phone, topic, and your message.",
      "pp.s2.l2": "AI assistant chats: the questions you type and the conversation history.",
      "pp.s2.l3": "Job applications: resume and bio you send via email (careers.html).",
      "pp.s2.h2": "B. Information collected automatically",
      "pp.s2.l4": "Access logs: IP, User-Agent, timestamp.",
      "pp.s2.l5": "Browser local storage: language preference (lingqi.lang) and minor configuration. We do not use third-party tracking cookies.",

      "pp.s3.t":  "How We Use Information",
      "pp.s3.l1": "Reply to your inquiry, provide pre-sales / post-sales support;",
      "pp.s3.l2": "Improve the site and the AI assistant's response quality;",
      "pp.s3.l3": "Match your resume to relevant roles when you apply;",
      "pp.s3.l4": "Comply with applicable legal obligations.",
      "pp.s3.b1": "We never use your information for purposes outside this list, and we don't sell it to third parties.",

      "pp.s4.t":  "Third-party Services",
      "pp.s4.b1": "To power the AI assistant, your chat is sent to the DeepSeek API (operator: Hangzhou DeepSeek Artificial Intelligence Co., Ltd.). See the DeepSeek privacy policy.",
      "pp.s4.b2": "Hosting and domain services are provided by our own or contracted cloud providers. Beyond that, we do not transmit your personal information to other third parties.",

      "pp.s5.t":  "Storage & Security",
      "pp.s5.l1": "Inquiry data is stored on our own servers (mainland China).",
      "pp.s5.l2": "Internal access is limited to authorized personnel with appropriate access controls and encryption.",
      "pp.s5.l3": "Despite reasonable measures, no internet transmission or electronic storage is 100% secure.",

      "pp.s6.t":  "Data Retention",
      "pp.s6.b1": "Inquiry data is retained for 3 years by default to support continued customer service and audit. AI conversation logs are kept for 90 days for quality improvement, then anonymized or deleted. You can request earlier deletion at any time.",

      "pp.s7.t":  "Your Rights",
      "pp.s7.b1": "Under the PRC Personal Information Protection Law and other applicable laws, you have the right to:",
      "pp.s7.l1": "Access, copy, and correct your personal information;",
      "pp.s7.l2": "Delete your personal information (except where law requires retention);",
      "pp.s7.l3": "Withdraw consent you previously provided;",
      "pp.s7.l4": "File a complaint or appeal.",
      "pp.s7.b2": "To exercise any of the above, email corporation@linqi.tech and we'll respond within 15 business days.",

      "pp.s8.t":  "Minors",
      "pp.s8.b1": "This site targets B2B manufacturing customers and does not actively collect data from anyone under 14. If you are a guardian and a minor has submitted information without your consent, please contact us to have it removed.",

      "pp.s9.t":  "Cross-border Transfer",
      "pp.s9.b1": "Because the AI assistant API and some infrastructure may sit outside mainland China, your conversations may be transferred across borders. We will adopt the necessary compliance measures required by applicable law.",

      "pp.s10.t": "Changes to This Policy",
      "pp.s10.b1":"This policy may be updated periodically. The \"Last updated\" date at the top of this page reflects the latest revision. Material changes will be communicated via on-site notice or email. Continued use of the site means you accept the updated policy.",

      "pp.s11.t": "Contact Us",
      "pp.s11.b1":"For any questions about this Privacy Policy, please contact:",
      "pp.s11.l1":"Company:",
      "pp.s11.l2":"Address:",
      "pp.s11.l3":"Email:",
      "pp.s11.l4":"Phone:",

      "pp.related": "Related:",
      "pp.related.terms": "Terms of Service",

      // ===== Terms of Service =====
      "ts.eyebrow":  "Terms of Service",
      "ts.title":    "Terms of Service",
      "ts.meta.updated": "Last updated",
      "ts.tldr":     "TL;DR — This site is LingQi's showcase and inquiry portal. Please use it lawfully and reasonably; don't run abusive traffic or misuse the AI assistant. AI replies are reference only and don't constitute a binding contract or professional advice. PRC law applies; disputes go to courts in Yangzhou.",

      "ts.s1.t":  "Acceptance",
      "ts.s1.b1": "Welcome to the official site (linqi.tech) of Yangzhou LingQi Technology Co., Ltd. (\"LingQi\", \"we\", \"us\"). By accessing or using the site, you confirm that you've read, understood, and accepted these terms in full.",
      "ts.s1.b2": "If you don't agree to any part, please stop using the site.",

      "ts.s2.t":  "Service Description",
      "ts.s2.b1": "This site provides:",
      "ts.s2.l1": "Showcase of LingQi's products, technology, cases, and company information;",
      "ts.s2.l2": "An inquiry form — you submit needs, we reply by email;",
      "ts.s2.l3": "An AI assistant (powered by DeepSeek) for common pre-sales questions;",
      "ts.s2.l4": "A careers section for sending your resume to apply.",

      "ts.s3.t":  "User Obligations",
      "ts.s3.b1": "When using this site, you agree to:",
      "ts.s3.l1": "Submit truthful, accurate, complete information; don't impersonate others;",
      "ts.s3.l2": "Refrain from malicious requests, automated scraping, load testing, or anything that disrupts normal operation;",
      "ts.s3.l3": "Avoid posting illegal, offensive, harassing, sexually explicit, politically sensitive, or rights-infringing content via the AI assistant or forms;",
      "ts.s3.l4": "Not attempt to reverse-engineer, crack, or illegally access source code, data, or accounts;",
      "ts.s3.l5": "Comply with applicable PRC laws and regulations.",
      "ts.s3.b2": "We may immediately revoke your access for violations and reserve the right to pursue legal remedies.",

      "ts.s4.t":  "Intellectual Property",
      "ts.s4.b1": "The site and all its content (text, images, trademarks, logos, source code, case studies, model technology, etc.) are owned by LingQi or its licensors, protected by PRC copyright, trademark, patent, and related laws.",
      "ts.s4.b2": "You may not copy, redistribute, modify, transmit or commercially exploit any content without our prior written permission.",
      "ts.s4.b3": "Third-party brand logos used on the site (Harvard, MIT, PyTorch, Qwen, etc.) are shown for informational purposes; copyrights belong to their respective owners.",

      "ts.s5.t":  "AI Assistant Disclaimer",
      "ts.s5.b1": "The \"LingQi AI Assistant\" embedded in this site is powered by DeepSeek and is intended as a convenient reference for product questions.",
      "ts.s5.b2": "Important:",
      "ts.s5.l1": "AI replies may contain errors, omissions, or occasional inaccuracies, and cannot serve as a binding contract, quote, or professional advice;",
      "ts.s5.l2": "Specific technical proposals and commercial terms are governed by the written documents you sign with our commercial team;",
      "ts.s5.l3": "Do not enter passwords, ID numbers, bank-card numbers, or other sensitive data into the AI chat.",

      "ts.s6.t":  "Disclaimer",
      "ts.s6.b1": "The site and its content are provided \"as is\". To the maximum extent permitted by applicable law, we are not responsible for:",
      "ts.s6.l1": "Occasional unavailability, slow loading, or AI assistant outages;",
      "ts.s6.l2": "Functional disruption caused by third-party services (DeepSeek API, map services, etc.);",
      "ts.s6.l3": "Decisions you make in reliance on site information or AI replies, and any losses thereof;",
      "ts.s6.l4": "Force majeure (natural disasters, war, government acts, cyberattacks, etc.).",

      "ts.s7.t":  "Limitation of Liability",
      "ts.s7.b1": "To the maximum extent permitted by applicable law, LingQi is not liable for any indirect, incidental, special, consequential or punitive damages arising from your use of this site (or the AI assistant).",
      "ts.s7.b2": "Nothing in these terms limits liability that cannot be excluded under mandatory law.",

      "ts.s8.t":  "Service Changes & Termination",
      "ts.s8.b1": "We reserve the right to modify, suspend or terminate all or part of the site at any time, without prior notice. Material changes will be announced on the site.",
      "ts.s8.b2": "We may terminate access for users who violate these terms without prior notice.",

      "ts.s9.t":  "Governing Law & Disputes",
      "ts.s9.b1": "These terms are governed by the laws of the People's Republic of China (excluding conflict-of-laws rules).",
      "ts.s9.b2": "Disputes arising from these terms or use of the site shall first be settled by friendly negotiation; failing that, submitted to the people's court with jurisdiction over LingQi's domicile (Guangling District People's Court, Yangzhou, Jiangsu).",

      "ts.s10.t": "Changes to These Terms",
      "ts.s10.b1":"We may revise these terms from time to time. New versions are published on this page with an updated \"Last updated\" date. Continued use of the site after changes constitutes acceptance of the revised terms.",

      "ts.s11.t": "Contact Us",
      "ts.s11.b1":"For any questions or feedback about these Terms of Service, please contact:",
      "ts.s11.l1":"Company:",
      "ts.s11.l2":"Address:",
      "ts.s11.l3":"Email:",
      "ts.s11.l4":"Phone:",

      "ts.related": "Related:",
      "ts.related.privacy": "Privacy Policy",
    },
  };

  if (typeof I18N === "object") {
    Object.assign(I18N.zh, extras.zh);
    Object.assign(I18N.en, extras.en);
    const cur = document.documentElement.getAttribute("data-lang") || "zh";
    if (typeof applyLang === "function") applyLang(cur);
  }
})();
