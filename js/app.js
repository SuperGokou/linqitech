// =====================================================================
// LingQi landing — i18n + animated counters + AI scan demo + chatbot
// Aligned to Figma node 1:2 (B2B blue/light theme)
// =====================================================================

const I18N = {
  zh: {
    "brand.zh": "扬州凌柒科技有限公司",
    "brand.en": "LingQi Technology Co., Ltd.",

    "nav.home":         "首页",
    "nav.capabilities": "核心技术",
    "nav.solutions":    "解决方案",
    "nav.case":         "案例展示",
    "nav.about":        "关于凌柒",
    "nav.careers":      "加入我们",
    "nav.contact":      "联系我们",
    "nav.cta":          "获取专属方案",

    // Hero
    "hero.pill":        "工业级视觉检测解决方案",
    "hero.title.l1":    "高精度机器视觉  ",
    "hero.title.l2":    "赋能智能制造",
    "hero.lead":        "扬州凌柒科技有限公司专注于工业 AI 深度学习与机器视觉技术。为制造业提供表面缺陷检测、高精度尺寸测量与机器人视觉引导等全场景解决方案。",
    "hero.cta.primary": "获取专属方案",
    "hero.cta.secondary":"了解核心技术",
    "hero.spec.s1":     "部署周期 4-6 周",
    "hero.spec.s2":     "数据本地化 / 不出厂",
    "hero.spec.s3":     "7×24 SLA · 远程升级",
    "hero.spec.s4":     "ISO 9001 兼容",

    // Stats
    "stat.precision":   "最高检测精度",
    "stat.latency":     "平均处理速度",
    "stat.acc":         "缺陷检出率",
    "stat.uptime":      "稳定运行",

    // Heritage
    "heritage.caption": "核心研发团队拥有全球顶尖学术背景",

    // Scan demo widget
    "scan.target":      "Intel 486 Die",
    "scan.run":         "开始扫描",
    "scan.reset":       "重置",
    "scan.idle":        "待机 · 点击开始扫描",
    "scan.scanning":    "扫描中...",
    "scan.done":        "扫描完成 · 已生成报告",
    "scan.report.title":"AI 检测报告 · LQ-Vision Report",
    "scan.report.status":"FAIL · 检出 2 处缺陷",
    "scan.report.objects":"检出对象",
    "scan.report.defects":"缺陷数",
    "scan.report.duration":"耗时",
    "scan.report.confidence":"平均置信度",
    "scan.report.defectType":"颗粒污染 99.8%",
    "scan.report.defectType2":"异物附着 96.2%",
    "scan.report.passType":"良品 100%",

    // Case Study
    "case.eyebrow":     "Case Study",
    "case.title":       "实测案例 · 多场景视觉 AI",
    "case.lead":        "从工业产线到医疗影像 · 从分类模型到大模型工艺生成 — 选择任一场景查看详情。",
    "case.tab.industrial":"工业 AOI",
    "case.tab.medical":   "医疗影像",
    "case.tab.llm":       "大模型 / VLM",
    "case.tab.research":  "机器人视觉",
    "case.viewDetail":  "查看详情",
    "case.more":        "查看全部案例",

    // Capabilities
    "cap.eyebrow":      "Core Technology",
    "cap.title":        "突破视觉极限,赋能智能制造",
    "cap.lead":         "凌柒科技依托顶尖的 AI 算法团队,打破传统机器视觉规则限制,让检测设备具备类似人类的「认知」能力。",
    "cap.c1.title":     "自研深度学习架构",
    "cap.c1.body":      "结合前沿 CNN 与 Transformer 技术,专门针对工业小样本缺陷进行优化,保障极高检出率。",
    "cap.c2.title":     "毫秒级边缘计算",
    "cap.c2.body":      "依托工业级边缘计算平台,实现单次图像推理耗时极低,完美匹配高速产线节拍。",
    "cap.c3.title":     "抗干扰成像算法",
    "cap.c3.body":      "自适应光源补偿与动态降噪算法,有效应对车间环境光变化、震动与油污干扰。",
    "cap.c4.title":     "系统级安全稳定",
    "cap.c4.body":      "工业级软件架构设计,支持 7×24 小时不间断运行,严格保障生产数据本地化安全。",

    // YOLOX PCB demo
    "yolox.meta":       "参考 MathWorks Deep Learning Toolbox · 6 类 PCB 缺陷",
    "yolox.input":      "INPUT",
    "yolox.output":     "OUTPUT",
    "yolox.detected":   "检出",
    "yolox.classes":    "6 类缺陷",
    "yolox.s1.t":       "Backbone",
    "yolox.s2.t":       "Neck",
    "yolox.s3.t":       "Head",
    "yolox.s4.t":       "NMS",

    // Tech Stack
    "stack.eyebrow":    "Tech Stack",
    "stack.title":      "我们使用的技术",
    "stack.lead":       "从经典视觉到大模型 · 从训练到部署 · 全栈技术沉淀",

    // Solutions
    "sol.eyebrow":      "Solutions",
    "sol.title":        "全场景机器视觉解决方案",
    "sol.lead":         "覆盖从前端零部件生产到后端包装检测的完整工业生命周期。",
    "sol.s1.title":     "表面缺陷检测",
    "sol.s1.body":      "精准识别划痕、凹坑、脏污、裂纹等复杂表面缺陷,代替人工目检。",
    "sol.s2.title":     "高精度尺寸测量",
    "sol.s2.body":      "亚像素级图像处理,实现零部件长宽、圆度、角度等几何尺寸高速全检。",
    "sol.s3.title":     "OCR 与条码识别",
    "sol.s3.body":      "高效读取工业级一维码、二维码及各类复杂背景下的字符信息。",
    "sol.s4.title":     "视觉引导装配",
    "sol.s4.body":      "为工业机器人装上「眼睛」,实现无序抓取、高精度装配对位。",
    "sol.more":         "了解核心技术",

    // About
    "about.eyebrow":    "About",
    "about.title":      "由哈佛 + 宾大背景工程师领导的工业视觉 AI 团队",
    "about.lead":       "12 年数据系统工程化经验,首批方案已在键盘产线落地 — 准确率 97.5%、目标检测 mAP50 99.2%。",

    // Contact
    "contact.eyebrow":  "Contact",
    "contact.title":    "联系我们",
    "contact.cta.eyebrow":"技术咨询",
    "contact.cta.title":"有技术问题?直接对话",
    "contact.cta.body": "凌柒 AI 助手由 DeepSeek 驱动,可即时回答关于产品、技术与方案的疑问。",
    "contact.cta.l1":   "技术架构 / 算法选型",
    "contact.cta.l2":   "产线集成 / 部署方式",
    "contact.cta.l3":   "交付周期 / 价格区间",
    "contact.cta.btn":  "开始 AI 对话",

    // Contact form
    "contact.f.name":          "姓名 *",
    "contact.f.company":       "公司 / 单位",
    "contact.f.email":         "邮箱 *",
    "contact.f.phone":         "电话",
    "contact.f.topic":         "关注方向",
    "contact.f.topic.o1":      "产线 AOI 视觉检测",
    "contact.f.topic.o2":      "大模型 / VLM 项目",
    "contact.f.topic.o3":      "非标定制方案",
    "contact.f.topic.o4":      "合作 / 投资洽谈",
    "contact.f.topic.o5":      "其他",
    "contact.f.msg":           "需求描述 *",
    "contact.f.msg.placeholder":"简单介绍下你的产线、产品类型、当前检测痛点...",
    "contact.f.submit":        "提交咨询",
    "contact.f.hint":          "提交后会直接发送到我们的邮箱,通常 24 小时内回复。",
    "contact.f.success":       "已收到 ✓  我们会尽快与你联系。",
    "contact.f.error":         "提交失败,请稍后重试或直接邮件:contact@lingqitech.com",
    "contact.f.required":      "带 * 字段必填",

    // Footer
    "footer.tagline":   "聚焦于机器视觉与 AI 深度学习技术,为全球制造企业提供稳定、高效、智能的视觉检测解决方案。",
    "footer.col1.title":"解决方案",
    "footer.col2.title":"关于我们",
    "footer.col2.l1":   "公司简介",
    "footer.col2.l2":   "核心技术",
    "footer.col2.l3":   "招贤纳士",
    "footer.col3.title":"联系方式",
    "footer.col3.addr1":"江苏省扬州市广陵区",
    "footer.col3.addr2":"创业中心 7-707",
    "footer.copy":      "© 2026 扬州凌柒科技有限公司. All rights reserved.",
    "footer.privacy":   "隐私政策",
    "footer.terms":     "服务条款",

    // Chat
    "chat.title":       "凌柒 AI 助手",
    "chat.online":      "在线 · 由 DeepSeek 驱动",
    "chat.placeholder": "问我任何关于凌柒的问题...",
    "chat.send":        "发送",
    "chat.welcome":     "你好!我是凌柒科技的 AI 客服助手 🤖\n可以问我:\n· 公司能解决什么问题\n· 核心技术与方案差异\n· 如何开启合作",
    "chat.quick.q1":    "你们能解决什么?",
    "chat.quick.q2":    "标准方案怎么样?",
    "chat.quick.q3":    "了解团队",
    "chat.error":       "哎呀,后端开了个小差,请稍后再试。",
  },

  en: {
    "brand.zh": "扬州凌柒科技有限公司",
    "brand.en": "LingQi Technology Co., Ltd.",

    "nav.home":         "Home",
    "nav.capabilities": "Technology",
    "nav.solutions":    "Solutions",
    "nav.case":         "Case Study",
    "nav.about":        "About LingQi",
    "nav.careers":      "Join Us",
    "nav.contact":      "Contact",
    "nav.cta":          "Get a Quote",

    "hero.pill":        "Industrial Vision Inspection · Built in Yangzhou",
    "hero.title.l1":    "High-precision Vision  ",
    "hero.title.l2":    "for Smart Manufacturing",
    "hero.lead":        "LingQi Technology builds industrial AI deep-learning and machine-vision systems — surface-defect inspection, micron-grade dimensional measurement, and robot-vision guidance for the modern factory floor.",
    "hero.cta.primary": "Get a Quote",
    "hero.cta.secondary":"How It Works",
    "hero.spec.s1":     "4-6 week deployment",
    "hero.spec.s2":     "On-prem · data never leaves",
    "hero.spec.s3":     "7×24 SLA · remote OTA",
    "hero.spec.s4":     "ISO 9001 compliant",

    "stat.precision":   "Best Precision",
    "stat.latency":     "Avg Inference",
    "stat.acc":         "Detection Rate",
    "stat.uptime":      "Continuous Uptime",

    "heritage.caption": "Core team educated at world-leading universities",

    "scan.target":      "Intel 486 Die",
    "scan.run":         "Start Scan",
    "scan.reset":       "Reset",
    "scan.idle":        "Idle · click to scan",
    "scan.scanning":    "Scanning...",
    "scan.done":        "Done · report generated",
    "scan.report.title":"Inspection Report · LQ-Vision",
    "scan.report.status":"FAIL · 2 defects found",
    "scan.report.objects":"Objects",
    "scan.report.defects":"Defects",
    "scan.report.duration":"Duration",
    "scan.report.confidence":"Avg Confidence",
    "scan.report.defectType":"Particle contamination · 99.8%",
    "scan.report.defectType2":"Foreign object · 96.2%",
    "scan.report.passType":"Pass · 100%",

    "case.eyebrow":     "Case Study",
    "case.title":       "Real Cases · Multi-Sector Vision AI",
    "case.lead":        "From the factory floor to medical imaging · pick a scenario to see the full case.",
    "case.tab.industrial":"Industrial AOI",
    "case.tab.medical":   "Medical Imaging",
    "case.tab.llm":       "LLM / VLM",
    "case.tab.research":  "Robot Vision",
    "case.viewDetail":  "View Detail",
    "case.more":        "See all cases",

    "cap.eyebrow":      "Core Technology",
    "cap.title":        "Pushing Past the Limits of Industrial Vision",
    "cap.lead":         "Backed by a top-tier AI research team, LingQi breaks beyond rule-based vision — giving inspection systems near-human cognitive recognition.",
    "cap.c1.title":     "In-house Deep Learning",
    "cap.c1.body":      "Modern CNN + Transformer architecture, optimized for low-data industrial defects with state-of-the-art recall.",
    "cap.c2.title":     "Millisecond Edge Compute",
    "cap.c2.body":      "Industrial edge platform delivers single-image inference latency low enough to match high-speed production cycles.",
    "cap.c3.title":     "Robust Imaging",
    "cap.c3.body":      "Adaptive lighting compensation and dynamic denoising tolerate ambient-light changes, vibration, and oil contamination.",
    "cap.c4.title":     "Mission-grade Reliability",
    "cap.c4.body":      "Industrial software architecture designed for 7×24 uninterrupted operation; production data stays on-prem.",

    "yolox.meta":       "Ref: MathWorks Deep Learning Toolbox · 6 PCB defect classes",
    "yolox.input":      "INPUT",
    "yolox.output":     "OUTPUT",
    "yolox.detected":   "Detected",
    "yolox.classes":    "6-CLASS DEFECTS",
    "yolox.s1.t":       "Backbone",
    "yolox.s2.t":       "Neck",
    "yolox.s3.t":       "Head",
    "yolox.s4.t":       "NMS",

    "stack.eyebrow":    "Tech Stack",
    "stack.title":      "Our Engineering Stack",
    "stack.lead":       "From classical CV to large vision-language models · trained, fine-tuned, and deployed in-house",

    "sol.eyebrow":      "Solutions",
    "sol.title":        "Full-scenario Vision Solutions",
    "sol.lead":         "Covering the full industrial life-cycle, from inbound parts to outbound packaging.",
    "sol.s1.title":     "Surface Defect Detection",
    "sol.s1.body":      "Precise detection of scratches, dents, contamination, and cracks — replacing manual visual inspection.",
    "sol.s2.title":     "Dimensional Measurement",
    "sol.s2.body":      "Sub-pixel image processing for length, roundness, and angle measurements at line speed.",
    "sol.s3.title":     "OCR & Barcode",
    "sol.s3.body":      "High-speed reading of 1D/2D barcodes and characters, even on noisy industrial backgrounds.",
    "sol.s4.title":     "Vision-guided Assembly",
    "sol.s4.body":      "Give industrial robots an eye — bin picking, high-accuracy alignment, and assembly verification.",
    "sol.more":         "Explore Core Technology",

    "about.eyebrow":    "About",
    "about.title":      "An Industrial Vision Team Led by Harvard + UPenn Engineers",
    "about.lead":       "12 years building production data systems. Our first deployment is live on a keyboard inspection line — 97.5% top-1 accuracy, 99.2% mAP50.",

    "contact.eyebrow":  "Contact",
    "contact.title":    "Get in Touch",
    "contact.cta.eyebrow":"Technical Inquiry",
    "contact.cta.title":"Got a technical question?",
    "contact.cta.body": "Our DeepSeek-powered AI assistant can answer product, technical and solution questions instantly.",
    "contact.cta.l1":   "Architecture / Model Selection",
    "contact.cta.l2":   "Line Integration / Deployment",
    "contact.cta.l3":   "Timeline / Price Range",
    "contact.cta.btn":  "Start AI Chat",

    "contact.f.name":          "Name *",
    "contact.f.company":       "Company",
    "contact.f.email":         "Email *",
    "contact.f.phone":         "Phone",
    "contact.f.topic":         "Topic",
    "contact.f.topic.o1":      "AOI / line inspection",
    "contact.f.topic.o2":      "LLM / VLM project",
    "contact.f.topic.o3":      "Custom integration",
    "contact.f.topic.o4":      "Partnership / Investment",
    "contact.f.topic.o5":      "Other",
    "contact.f.msg":           "Tell us what you need *",
    "contact.f.msg.placeholder":"Briefly describe your line, product type, current inspection pain points...",
    "contact.f.submit":        "Send Inquiry",
    "contact.f.hint":          "Goes straight to our inbox · we typically reply within 24 hours.",
    "contact.f.success":       "Got it ✓  We'll get back to you shortly.",
    "contact.f.error":         "Something went wrong. Please try again or email contact@lingqitech.com",
    "contact.f.required":      "Required fields marked with *",

    "footer.tagline":   "Industrial vision and deep-learning AI — stable, efficient, and intelligent inspection for global manufacturing.",
    "footer.col1.title":"Solutions",
    "footer.col2.title":"About",
    "footer.col2.l1":   "Company",
    "footer.col2.l2":   "Technology",
    "footer.col2.l3":   "Careers",
    "footer.col3.title":"Contact",
    "footer.col3.addr1":"Innovation Center 7-707",
    "footer.col3.addr2":"Guangling, Yangzhou, Jiangsu",
    "footer.copy":      "© 2026 LingQi Technology Co., Ltd. All rights reserved.",
    "footer.privacy":   "Privacy",
    "footer.terms":     "Terms",

    "chat.title":       "LingQi AI Assistant",
    "chat.online":      "Online · Powered by DeepSeek",
    "chat.placeholder": "Ask me anything about LingQi...",
    "chat.send":        "Send",
    "chat.welcome":     "Hi there! I'm LingQi's AI assistant 🤖\nAsk me about:\n· what problems we solve\n· our core technology and solutions\n· how to start a conversation",
    "chat.quick.q1":    "What problems do you solve?",
    "chat.quick.q2":    "Tell me about the standard tier",
    "chat.quick.q3":    "About the team",
    "chat.error":       "Oops, the backend hiccuped — please try again.",
  },
};

// ---- i18n -----------------------------------------------------------
function applyLang(lang) {
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.querySelectorAll(".lang-pill").forEach((p) => {
    p.classList.toggle("active", p.dataset.key === lang);
  });
  localStorage.setItem("lingqi.lang", lang);
}
const initialLang = localStorage.getItem("lingqi.lang") || "zh";
applyLang(initialLang);
document.getElementById("lang-toggle").addEventListener("click", () => {
  const cur = document.documentElement.getAttribute("data-lang") || "zh";
  applyLang(cur === "zh" ? "en" : "zh");
});

// ---- Counters -------------------------------------------------------
function animateCounter(el) {
  const target = parseFloat(el.dataset.counter);
  const duration = 1400;
  const start = performance.now();
  const isInt = Number.isInteger(target);
  function step(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const cur = isInt ? Math.round(target * eased) : (target * eased).toFixed(1);
    el.textContent = cur;
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
{
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll("[data-counter]").forEach((el) => obs.observe(el));
}

// =====================================================================
//  HOME CASE STUDY — switchable category tabs
// =====================================================================
const CASE_DATA = {
  keyboard: {
    badge: "MAC 键盘 · LIVE",
    img:   "assets/case_keyboard.jpg",
    caption: "彩色边框为 AI 自动识别的瑕疵键帽 · 实时输出 OK / 待复核 / NG",
    stats: [
      { v: "97.5",   u: "%",     l: "缺陷分类准确率" },
      { v: "99.2",   u: "%",     l: "目标检测 mAP50" },
      { v: "~3",     u: "s",     l: "单张端到端 (CPU)" },
      { v: "8K",     u: "×13K",  l: "原生超大图处理" },
    ],
  },
  xray: {
    badge: "X-Ray AI · DEMO",
    img:   "assets/figma/sol_dimension.jpg",  // placeholder (could be replaced)
    useSvg: true,
    caption: "ResNet/EfficientNet 多标签分类 · Grad-CAM 可视化辅助医生定位",
    stats: [
      { v: "0.89",  u: "",     l: "AUC (avg)" },
      { v: "14",    u: "类",   l: "胸部疾病分类" },
      { v: "112K",  u: "",     l: "训练样本" },
      { v: "Grad-",  u: "CAM",  l: "可解释 AI" },
    ],
  },
  noval: {
    badge: "Noval AI · BETA",
    img:   "assets/figma/sol_ocr.jpg",  // placeholder
    useSvg: true,
    caption: "Qwen2.5-VL + LoRA · 图像 → 视觉理解 → 工艺文档 → PDF 报告",
    stats: [
      { v: "~90",   u: "%",   l: "资源节省" },
      { v: "11",    u: "类",  l: "零件类型" },
      { v: "PDF",   u: "",    l: "工艺报告输出" },
      { v: "VLM",   u: "+RAG",l: "技术栈" },
    ],
  },
  robot: {
    badge: "Robot Vision · 长期愿景",
    img:   "assets/figma/sol_assembly.jpg",
    caption: "工业 AOI → 通用视觉智能 → 人形机器人感知中枢",
    stats: [
      { v: "6D",       u: "",    l: "位姿估计" },
      { v: "多模态",   u: "",    l: "感知融合" },
      { v: "10+",      u: "年",  l: "长期愿景" },
      { v: "VLM",      u: "+RGB-D", l: "技术栈" },
    ],
  },
};

// SVG illustrations for cases that don't have a real photo
const CASE_SVG = {
  xray: `<svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;background:#0f1729">
    <ellipse cx="300" cy="190" rx="180" ry="130" fill="none" stroke="#5b9aff" stroke-width="2" opacity="0.5"/>
    <path d="M200 140 Q300 100 400 140" fill="none" stroke="#7ab8ff" stroke-width="2.4" opacity="0.7"/>
    <path d="M200 240 Q300 270 400 240" fill="none" stroke="#7ab8ff" stroke-width="2.4" opacity="0.7"/>
    <line x1="300" y1="120" x2="300" y2="280" stroke="#5b9aff" stroke-width="1.5" opacity="0.4"/>
    <rect x="240" y="170" width="60" height="60" fill="rgba(239,68,68,0.18)" stroke="#ef4444" stroke-width="2.5"/>
    <rect x="234" y="146" width="105" height="24" fill="#ef4444"/>
    <text x="245" y="163" font-size="13" font-family="monospace" fill="#fff" font-weight="700">PNEUMONIA 0.94</text>
    <text x="40" y="350" font-size="14" font-family="monospace" fill="#5b9aff" opacity="0.7">CHEST_X-RAY // GRAD-CAM ACTIVE</text>
  </svg>`,
  noval: `<svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;background:#1a0f2e">
    <circle cx="180" cy="190" r="58" fill="none" stroke="#b44aff" stroke-width="2.5" opacity="0.7"/>
    <circle cx="180" cy="190" r="32" fill="none" stroke="#b44aff" stroke-width="2" opacity="0.5"/>
    <text x="160" y="196" font-size="14" font-family="monospace" fill="#d685ff">IMAGE</text>
    <line x1="245" y1="190" x2="345" y2="190" stroke="#b44aff" stroke-width="2" stroke-dasharray="6 6" opacity="0.7"/>
    <polyline points="345,180 360,190 345,200" fill="none" stroke="#b44aff" stroke-width="2.5"/>
    <rect x="375" y="130" width="180" height="120" fill="none" stroke="#d685ff" stroke-width="2" opacity="0.8"/>
    <line x1="395" y1="155" x2="535" y2="155" stroke="#d685ff" stroke-width="1.5" opacity="0.7"/>
    <line x1="395" y1="175" x2="510" y2="175" stroke="#d685ff" stroke-width="1.5" opacity="0.6"/>
    <line x1="395" y1="195" x2="525" y2="195" stroke="#d685ff" stroke-width="1.5" opacity="0.7"/>
    <line x1="395" y1="215" x2="490" y2="215" stroke="#d685ff" stroke-width="1.5" opacity="0.5"/>
    <line x1="395" y1="235" x2="500" y2="235" stroke="#d685ff" stroke-width="1.5" opacity="0.6"/>
    <text x="395" y="280" font-size="14" font-family="monospace" fill="#d685ff" opacity="0.85">PROCESS DOC.PDF</text>
    <text x="40" y="350" font-size="14" font-family="monospace" fill="#d685ff" opacity="0.7">QWEN2.5-VL // LORA // RAG</text>
  </svg>`,
};

(function initCaseTabs() {
  const tabs   = document.getElementById("case-tabs");
  const link   = document.getElementById("case-image-link");
  const badge  = document.getElementById("case-badge");
  const imgEl  = document.getElementById("case-image-img");
  const stripe = document.getElementById("case-stripe");
  const stats  = document.getElementById("case-stats");
  if (!tabs || !link) return;

  function renderCase(id) {
    const data = CASE_DATA[id];
    if (!data) return;

    // image / illustration
    if (CASE_SVG[id]) {
      imgEl.style.display = "none";
      let svgHolder = link.querySelector(".case-svg-holder");
      if (!svgHolder) {
        svgHolder = document.createElement("div");
        svgHolder.className = "case-svg-holder";
        imgEl.after(svgHolder);
      }
      svgHolder.innerHTML = CASE_SVG[id];
      svgHolder.style.display = "block";
    } else {
      imgEl.style.display = "block";
      imgEl.src = data.img;
      const svgHolder = link.querySelector(".case-svg-holder");
      if (svgHolder) svgHolder.style.display = "none";
    }

    badge.textContent  = data.badge;
    stripe.textContent = data.caption;
    link.href = `cases.html#case-${id}`;

    // stats
    stats.innerHTML = data.stats.map(s => `
      <div class="case-stat">
        <div class="case-stat-num">${s.v}<span class="case-unit">${s.u}</span></div>
        <div class="case-stat-label">${s.l}</div>
      </div>
    `).join("");

    // active tab state
    tabs.querySelectorAll(".case-tab").forEach(b => {
      b.classList.toggle("active", b.dataset.id === id);
    });
  }

  // initial state — keyboard
  renderCase("keyboard");

  // tab handlers
  tabs.querySelectorAll(".case-tab").forEach(b => {
    b.addEventListener("click", () => renderCase(b.dataset.id));
  });
})();

// =====================================================================
//  TECH STACK MARQUEE — render pills (every pill has a logo OR letter badge)
// =====================================================================
const TECH_PILLS = [
  { name: "Python",     icon: "assets/tech/python.svg" },
  { name: "TypeScript", icon: "assets/tech/typescript.svg" },
  { name: "PyTorch",    icon: "assets/tech/pytorch.svg" },
  { name: "YOLOv8",     icon: "assets/tech/ultralytics.svg" },
  { name: "OpenCV",     icon: "assets/tech/opencv.svg" },
  { name: "ONNX",       icon: "assets/tech/onnx.svg" },
  { name: "CUDA",       icon: "assets/tech/nvidia.svg" },
  { name: "Qwen2.5-VL", icon: "assets/tech/qwen.png",        accent: true },
  { name: "DeepSeek",   icon: "assets/tech/deepseek.svg",    accent: true },
  { name: "Gemini",     icon: "assets/tech/gemini.svg",      accent: true },
  { name: "Anthropic",  icon: "assets/tech/anthropic.svg",   accent: true },
  { name: "HuggingFace",icon: "assets/tech/huggingface.svg", accent: true },
  { name: "RAG",        icon: "assets/tech/rag.svg",     accent: true },
  { name: "LoRA",       icon: "assets/tech/lora.svg",    accent: true },
  { name: "VLM",        icon: "assets/tech/vlm.svg",     accent: true },
  { name: "Agentic AI", icon: "assets/tech/agentic.svg", accent: true },
  { name: "FastAPI",    icon: "assets/tech/fastapi.svg" },
  { name: "Next.js",    icon: "assets/tech/nextjs.svg" },
  { name: "Node.js",    icon: "assets/tech/nodejs.svg" },
  { name: "React",      icon: "assets/tech/react.svg" },
  { name: "PostgreSQL", icon: "assets/tech/postgresql.svg" },
  { name: "Redis",      icon: "assets/tech/redis.svg" },
  { name: "Docker",     icon: "assets/tech/docker.svg" },
  { name: "Kubernetes", icon: "assets/tech/kubernetes.svg" },
  { name: "Tailwind",   icon: "assets/tech/tailwindcss.svg" },
  { name: "Framer",     icon: "assets/tech/framer.svg" },
  { name: "Vercel",     icon: "assets/tech/vercel.svg" },
];

(function renderMarquee() {
  const track = document.getElementById("marquee-track");
  if (!track) return;

  function pillHtml(t) {
    const accent = t.accent ? " accent" : "";
    const inner = t.icon
      ? `<img src="${t.icon}" alt="">`
      : `<span class="tech-mono" data-color="${t.color}">${t.badge}</span>`;
    return `<span class="tech-pill${accent}">${inner}<b>${t.name}</b></span>`;
  }

  // duplicate for seamless loop
  const html = TECH_PILLS.map(pillHtml).join("");
  track.innerHTML = html + html;
})();

// =====================================================================
//  AI SCAN DEMO WIDGET (only present on the home page hero)
// =====================================================================
const scanStage  = document.getElementById("scan-stage");
const scanRun    = document.getElementById("scan-run");
const scanReset  = document.getElementById("scan-reset");
const scanState  = document.getElementById("scan-state");
const scanProg   = document.getElementById("scan-progress");
const scanStatus = document.getElementById("scan-status");
const scanReport = document.getElementById("scan-report");

// Guard: cases.html and other pages don't have the scan widget — exit cleanly.
const scanBoxes = scanStage ? scanStage.querySelectorAll(".scan-box") : null;
if (!scanStage) {
  // skip the whole scan-widget initialization on this page
} else {

let scanRunning = false;

function setScanState(stateKey) {
  const lang = document.documentElement.getAttribute("data-lang") || "zh";
  scanStatus.textContent = I18N[lang][stateKey];
}

function runScan() {
  if (scanRunning) return;
  scanRunning = true;
  scanRun.disabled = true;
  scanReset.disabled = true;
  scanReport.classList.remove("shown");
  scanBoxes.forEach((b) => b.classList.remove("shown"));

  scanState.textContent = "SCANNING";
  setScanState("scan.scanning");
  scanStage.classList.add("scanning");

  // Animate progress %
  const progStart = performance.now();
  const progDur   = 2400;
  function progStep(now) {
    const t = Math.min((now - progStart) / progDur, 1);
    scanProg.textContent = `SCAN: ${Math.round(t * 100)}%`;
    if (t < 1 && scanRunning) requestAnimationFrame(progStep);
  }
  requestAnimationFrame(progStep);

  // Reveal boxes as the scan line passes them (sorted by Y position)
  // HTML order: [0]=defect@18% (scratch top-right), [1]=defect@70% (contamination)
  setTimeout(() => scanBoxes[0]?.classList.add("shown"), 900);   // defect (top) y=18%
  setTimeout(() => scanBoxes[1]?.classList.add("shown"), 1900);  // defect (bot) y=70%

  // Finish
  setTimeout(() => {
    scanStage.classList.remove("scanning");
    scanState.textContent = "DONE";
    setScanState("scan.done");
    scanReport.classList.add("shown");
    scanRun.disabled = false;
    scanReset.disabled = false;
    scanRunning = false;
  }, 2500);
}

function resetScan() {
  scanStage.classList.remove("scanning");
  scanReport.classList.remove("shown");
  scanBoxes.forEach((b) => b.classList.remove("shown"));
  scanState.textContent = "READY";
  scanProg.textContent = "SCAN: 0%";
  setScanState("scan.idle");
  scanReset.disabled = true;
}

scanRun.addEventListener("click", runScan);
scanReset.addEventListener("click", resetScan);

// Auto-trigger first scan when widget enters viewport
{
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        setTimeout(runScan, 600);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  obs.observe(scanStage);
}

}  // end of scan-widget guard (scanStage exists)

// =====================================================================
//  CONTACT FORM — POSTs to /api/contact (server logs + emails)
// =====================================================================
{
  const form = document.getElementById("contact-form");
  if (form) {
    const status = document.getElementById("contact-status");
    const submit = document.getElementById("contact-submit");

    function showStatus(kind, key) {
      const lang = document.documentElement.getAttribute("data-lang") || "zh";
      status.hidden = false;
      status.className = `form-status ${kind}`;
      status.textContent = I18N[lang][key] || key;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const payload = Object.fromEntries(fd.entries());

      if (!payload.name || !payload.email || !payload.message) {
        showStatus("err", "contact.f.required");
        return;
      }

      submit.disabled = true;
      const origText = submit.textContent;
      submit.textContent = "...";

      try {
        const r = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!r.ok) throw new Error("HTTP " + r.status);
        showStatus("ok", "contact.f.success");
        form.reset();
      } catch (err) {
        console.error("[contact]", err);
        showStatus("err", "contact.f.error");
      } finally {
        submit.disabled = false;
        submit.textContent = origText;
      }
    });
  }
}

// =====================================================================
//  CHATBOT (DeepSeek-backed)
// =====================================================================
const chatFab    = document.getElementById("chat-fab");
const chatPanel  = document.getElementById("chat-panel");
const chatClose  = document.getElementById("chat-close");
const chatBody   = document.getElementById("chat-body");
const chatForm   = document.getElementById("chat-form");
const chatText   = document.getElementById("chat-text");
const openChatBtn = document.getElementById("open-chat");

const conversation = [];

function openChat() {
  chatPanel.classList.add("open");
  chatPanel.setAttribute("aria-hidden", "false");
  if (conversation.length === 0) {
    const lang = document.documentElement.getAttribute("data-lang") || "zh";
    addBotMessage(I18N[lang]["chat.welcome"], true);
  }
  setTimeout(() => chatText.focus(), 250);
}
function closeChat() {
  chatPanel.classList.remove("open");
  chatPanel.setAttribute("aria-hidden", "true");
}
chatFab.addEventListener("click", () => {
  chatPanel.classList.contains("open") ? closeChat() : openChat();
});
chatClose.addEventListener("click", closeChat);
if (openChatBtn) openChatBtn.addEventListener("click", openChat);

// Lift the chat FAB / panel when the footer-bottom strip enters the viewport,
// so it never covers 服务条款 / 隐私政策 text.
{
  const fbottom = document.querySelector(".footer-bottom");
  if (fbottom) {
    const obs = new IntersectionObserver((entries) => {
      const lifted = entries[0].isIntersecting;
      chatFab.classList.toggle("lifted", lifted);
      chatPanel.classList.toggle("lifted", lifted);
    }, { rootMargin: "0px 0px -8px 0px", threshold: 0 });
    obs.observe(fbottom);
  }
}

function addMsg(role, text) {
  const div = document.createElement("div");
  div.className = `msg ${role}`;
  div.textContent = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
  return div;
}

function addBotMessage(text, withQuickReplies = false) {
  addMsg("bot", text);
  if (withQuickReplies) renderQuickReplies();
}

function renderQuickReplies() {
  const lang = document.documentElement.getAttribute("data-lang") || "zh";
  const dict = I18N[lang];
  const wrap = document.createElement("div");
  wrap.className = "chat-quick";
  ["chat.quick.q1", "chat.quick.q2", "chat.quick.q3"].forEach((k) => {
    const btn = document.createElement("button");
    btn.textContent = dict[k];
    btn.addEventListener("click", () => {
      wrap.remove();
      sendUserMessage(dict[k]);
    });
    wrap.appendChild(btn);
  });
  chatBody.appendChild(wrap);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function showTyping() {
  const div = document.createElement("div");
  div.className = "msg bot typing";
  div.innerHTML = "<span></span><span></span><span></span>";
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
  return div;
}

async function sendUserMessage(text) {
  if (!text || !text.trim()) return;
  text = text.trim();
  addMsg("user", text);
  conversation.push({ role: "user", content: text });

  const typing = showTyping();
  const sendBtn = chatForm.querySelector(".chat-send");
  sendBtn.disabled = true;

  try {
    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: conversation }),
    });
    typing.remove();
    if (!r.ok) throw new Error("HTTP " + r.status);
    const data = await r.json();
    const reply = data.reply || "(empty)";
    addMsg("bot", reply);
    conversation.push({ role: "assistant", content: reply });
  } catch (e) {
    typing.remove();
    const lang = document.documentElement.getAttribute("data-lang") || "zh";
    addMsg("bot", I18N[lang]["chat.error"] + "\n\n[" + e.message + "]");
  } finally {
    sendBtn.disabled = false;
  }
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatText.value;
  chatText.value = "";
  sendUserMessage(text);
});
