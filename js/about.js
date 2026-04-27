// About page — extra i18n strings (merge into the global I18N from app.js)
(function () {
  const extras = {
    zh: {
      "ab.eyebrow":   "About LingQi",
      "ab.title":     "让每条产线拥有 AI 之眼",
      "ab.tagline":   "扬州凌柒科技有限公司 · 工业视觉 AI 平台",
      "ab.q1":        "公司成立",
      "ab.q2":        "行业方向",
      "ab.q3":        "首批团队规模",
      "ab.q4":        "首批方案准确率",
      "about.more":   "了解更多关于我们",

      "ab.mission.eyebrow": "// Mission",
      "ab.mission.title":   "用视觉 AI 替代千百次人眼,重塑制造业质检",
      "ab.mission.body":    "凌柒科技专注于工业 AI 深度学习与机器视觉技术。我们以哈佛、宾大背景的算法团队为核心,把视觉感知能力交付给中国制造企业 — 从经典 OpenCV 到大模型 RAG,全栈方案,让 AOI 检测从规则迈向认知。",
      "ab.mission.body2":   "视觉感知是未来 10 年最大的技术红利。AI / 人形机器人时代正在到来 — 我们用工业 AOI 沉淀的感知能力,自然延伸到机器人视觉。",

      "ab.pulse.eyebrow":   "// vision_2030",
      "ab.pulse.l1":        "工业 AOI 落地深耕(1-3 年)",
      "ab.pulse.l2":        "通用视觉智能平台(3-5 年)",
      "ab.pulse.l3":        "人形机器人视觉感知中枢(5-10 年)",

      "ab.values.eyebrow":  "// Values",
      "ab.values.title":    "我们怎么做事",
      "ab.v1.t":            "算法先行",
      "ab.v1.b":            "复杂的工业视觉问题没有现成轮子 — 我们坚持自研,用前沿 CNN + Transformer + 大模型,做规则系统做不到的事。",
      "ab.v2.t":            "数据本地化",
      "ab.v2.b":            "生产数据是客户的核心资产。所有训练 / 推理 / 模型托管均支持本地化部署,数据不出厂、不上云。",
      "ab.v3.t":            "工程极致",
      "ab.v3.b":            "不做 demo 级原型,我们交付的是产线级稳定性 — 7×24 不间断、毫秒级时延、单产品全检。",
      "ab.v4.t":            "客户共创",
      "ab.v4.b":            "每条产线都是独特的。我们与客户深度共创,从首件检测的第一张图开始,共建专属模型与工艺数据库。",

      "ab.tl.eyebrow":      "// Timeline",
      "ab.tl.title":        "公司里程碑",
      "ab.tl.m1.t":         "技术原型与首个 POC",
      "ab.tl.m1.b":         "基于 YOLOv8 + CNN + 金样匹配的多路视觉融合算法成型,某头部消费电子代工厂键盘产线 POC 完成,准确率 97.5%。",
      "ab.tl.m2.t":         "扬州凌柒科技正式成立",
      "ab.tl.m2.b":         "在扬州市广陵区注册成立 · 申请人才引进与绿扬金凤计划 · 建立首批办公与实验场地。",
      "ab.tl.m3.t":         "首批本地客户 + 团队组建",
      "ab.tl.m3.b":         "5-7 人核心团队组建到位 · 首批 2-3 家本地试点客户(电子 / 汽车零部件)· 跨垂直行业模型沉淀。",
      "ab.tl.m4.t":         "区域标杆 · 平台化沉淀",
      "ab.tl.m4.b":         "长三角 50+ 客户 · 通用视觉平台 SaaS 上线 · 申请专精特新 / 国家高新技术企业资质。",
      "ab.tl.m5.t":         "视觉智能 → 人形机器人感知",
      "ab.tl.m5.b":         "把工业 AOI 沉淀的感知能力 — 场景理解、物体识别、动作预测、多模态推理 — 应用到人形机器人视觉感知中枢,成为机器人时代的核心算法供应商。",

      "ab.heritage.eyebrow":"// Academic Heritage",
      "ab.heritage.title":  "核心团队的学术背景",
      "ab.heritage.lead":   "由哈佛 + 宾大背景的算法团队组成,涵盖工业视觉、深度学习、机器人感知等方向。",

      "ab.cta.title":       "想了解更多?",
      "ab.cta.body":        "看一下我们落地的视觉 AI 案例,或者直接发起一次技术咨询。",
      "ab.cta.btn1":        "查看案例展示",
      "ab.cta.btn2":        "联系我们",
    },

    en: {
      "ab.eyebrow":   "About LingQi",
      "ab.title":     "Give Every Production Line an AI Eye",
      "ab.tagline":   "Yangzhou LingQi Technology · Industrial Vision AI",
      "ab.q1":        "Founded",
      "ab.q2":        "Verticals",
      "ab.q3":        "Founding Team",
      "ab.q4":        "First Deployment Accuracy",
      "about.more":   "Learn more about us",

      "ab.mission.eyebrow": "// Mission",
      "ab.mission.title":   "Replace thousands of human eye-checks with one AI eye",
      "ab.mission.body":    "LingQi is a Harvard / UPenn-rooted vision AI team. We bring visual perception to Chinese manufacturers — from classical OpenCV to vision-language models — moving AOI from rule-based to cognitive.",
      "ab.mission.body2":   "Visual perception is the biggest technology dividend of the next decade. As humanoid robots arrive, our industrial vision stack extends naturally into robot perception.",

      "ab.pulse.eyebrow":   "// vision_2030",
      "ab.pulse.l1":        "Industrial AOI deep deployment (1-3 yrs)",
      "ab.pulse.l2":        "General visual-intelligence platform (3-5 yrs)",
      "ab.pulse.l3":        "Humanoid-robot perception backbone (5-10 yrs)",

      "ab.values.eyebrow":  "// Values",
      "ab.values.title":    "How We Work",
      "ab.v1.t":            "Algorithm First",
      "ab.v1.b":            "Hard industrial-vision problems don't have off-the-shelf solutions. We build in-house — modern CNN + Transformer + LLM — to do what rules can't.",
      "ab.v2.t":            "Data On-Prem",
      "ab.v2.b":            "Production data is the customer's core asset. Training, inference and model hosting all run on-prem; data never leaves the factory.",
      "ab.v3.t":            "Engineering Excellence",
      "ab.v3.b":            "We don't ship demos. We ship production-line stability — 7×24 uptime, millisecond latency, full-coverage inspection.",
      "ab.v4.t":            "Co-creation",
      "ab.v4.b":            "Every line is unique. We co-create deeply with customers, starting from the first capture of first-article inspection, building dedicated models and process data.",

      "ab.tl.eyebrow":      "// Timeline",
      "ab.tl.title":        "Company Milestones",
      "ab.tl.m1.t":         "First Prototype & POC",
      "ab.tl.m1.b":         "Multi-route fusion algorithm (YOLOv8 + CNN + golden-sample) shipped; POC at a top-tier consumer electronics OEM keyboard line achieved 97.5% accuracy.",
      "ab.tl.m2.t":         "LingQi Tech Founded in Yangzhou",
      "ab.tl.m2.b":         "Registered in Guangling, Yangzhou · applying to talent-introduction and Green-Phoenix programs · setting up office + lab space.",
      "ab.tl.m3.t":         "First Local Customers + Team Buildout",
      "ab.tl.m3.b":         "5-7 core engineers onboarded · 2-3 Yangzhou pilot customers (electronics / automotive parts) · cross-vertical model accumulation.",
      "ab.tl.m4.t":         "Regional Standard + Platform",
      "ab.tl.m4.b":         "50+ Yangtze Delta customers · general vision platform SaaS launch · applying for specialized + new high-tech enterprise certifications.",
      "ab.tl.m5.t":         "Vision AI → Humanoid Robot Perception",
      "ab.tl.m5.b":         "Apply industrial-AOI perception — scene understanding, object detection, action prediction, multimodal reasoning — to humanoid robot vision, becoming the core algorithm supplier for the robot era.",

      "ab.heritage.eyebrow":"// Academic Heritage",
      "ab.heritage.title":  "Where the Core Team Comes From",
      "ab.heritage.lead":   "Harvard + UPenn-trained engineers spanning industrial vision, deep learning, and robot perception.",

      "ab.cta.title":       "Want to Learn More?",
      "ab.cta.body":        "Browse our deployed vision AI cases, or start a technical conversation.",
      "ab.cta.btn1":        "See Case Studies",
      "ab.cta.btn2":        "Contact Us",
    },
  };

  if (typeof I18N === "object") {
    Object.assign(I18N.zh, extras.zh);
    Object.assign(I18N.en, extras.en);
    const cur = document.documentElement.getAttribute("data-lang") || "zh";
    if (typeof applyLang === "function") applyLang(cur);
  }
})();
