// Cases page — i18n strings + filter logic
// (i18n applies on top of the global I18N from app.js)
(function () {
  // ---- additional i18n strings ----
  const extras = {
    zh: {
      "cases.eyebrow":  "Case Studies",
      "cases.title":    "视觉 AI 项目集合",
      "cases.lead":     "从工业产线到医疗影像、从分类模型到大模型工艺生成 — 沉淀真实落地与研发项目。",
      "cases.f.all":          "全部",
      "cases.f.industrial":   "工业 AOI",
      "cases.f.medical":      "医疗影像",
      "cases.f.llm":          "大模型 / VLM",
      "cases.f.research":     "研究 / 原型",
      "cases.tag.industrial": "工业 AOI",
      "cases.tag.medical":    "医疗影像",
      "cases.tag.llm":        "大模型 / VLM",
      "cases.tag.research":   "研究 / 原型",
      "cases.empty":          "这个分类下暂无案例,即将更新。",

      "cases.c1.title":  "MAC 键盘外观瑕疵检测",
      "cases.c1.client": "客户:某头部消费电子代工厂  ·  状态:已落地",
      "cases.c1.body":   "8192×13000 大分辨率 TIF 端到端处理,亮印 / 暗痕 / 凹陷 / 黑点 11 类常见缺陷自动判定,瑕疵键帽自动框选 + OK / 待复核 / NG 三态输出。",
      "cases.c1.s1":     "分类准确率",
      "cases.c1.s2":     "mAP50",
      "cases.c1.s3":     "单张端到端",

      "cases.c2.title":  "肺部疾病 X-Ray 辅助诊断",
      "cases.c2.client": "类型:学术 + 研发项目  ·  数据:NIH ChestX-ray14",
      "cases.c2.body":   "基于 ResNet/EfficientNet 多标签分类,识别 14 类胸部异常(肺炎、肺结节、气胸等)。Grad-CAM 可视化,辅助医生定位异常区域。",
      "cases.c2.s1":     "AUC (avg)",
      "cases.c2.s2":     "疾病分类",
      "cases.c2.s3":     "训练样本",

      "cases.c3.title":  "Noval AI · 制造业智能工艺生成",
      "cases.c3.client": "类型:平台产品  ·  状态:原型上线",
      "cases.c3.body":   "基于 Qwen2.5-VL 视觉大模型 + LoRA 微调,自动分析产品图像并生成完整工艺流程文档。端到端:图像上传 → 视觉理解 → 工艺生成 → PDF 报告。",
      "cases.c3.s1":     "资源节省",
      "cases.c3.s2":     "零件类型",
      "cases.c3.s3":     "工艺报告",

      "cases.c4.title":  "金融风控 · 信贷违约预测",
      "cases.c4.client": "类型:研究项目  ·  规模:5,000 万美元+ 年化交易",
      "cases.c4.body":   "XGBoost + Feature Engineering 构建违约预测模型,基于历史交易、行为序列与外部征信数据,辅助实时授信决策。",
      "cases.c4.s1":     "AUC",
      "cases.c4.s2":     "CTR 提升",
      "cases.c4.s3":     "交易规模 ($)",

      "cases.c5.title":  "高精度尺寸测量 · 注塑件 / 冲压件",
      "cases.c5.client": "行业:汽车零部件  ·  状态:扬州本地优先",
      "cases.c5.body":   "亚像素级图像处理,实现长宽 / 圆度 / 角度等几何尺寸高速全检,适用于注塑、冲压、机加工件全检场景。",
      "cases.c5.s1":     "最高精度",
      "cases.c5.s2":     "处理时延",
      "cases.c5.s3":     "全检覆盖",

      "cases.c6.title":  "视觉引导机器人装配",
      "cases.c6.client": "方向:人形机器人视觉  ·  长期愿景",
      "cases.c6.body":   "为工业机器人 / 人形机器人提供视觉感知中枢:无序抓取、6D 位姿估计、装配对位 — 工业 AOI 沉淀的感知能力,自然延伸到机器人视觉。",
      "cases.c6.s1":     "位姿估计",
      "cases.c6.s2":     "感知融合",
      "cases.c6.s3":     "长期愿景 (年)",

      "case.more": "查看全部案例",
    },

    en: {
      "cases.eyebrow":  "Case Studies",
      "cases.title":    "Visual AI Project Portfolio",
      "cases.lead":     "From the factory floor to medical imaging, from classifiers to vision-language models — real-world deployments and research prototypes.",
      "cases.f.all":          "All",
      "cases.f.industrial":   "Industrial AOI",
      "cases.f.medical":      "Medical Imaging",
      "cases.f.llm":          "LLM / VLM",
      "cases.f.research":     "Research / Prototype",
      "cases.tag.industrial": "Industrial AOI",
      "cases.tag.medical":    "Medical Imaging",
      "cases.tag.llm":        "LLM / VLM",
      "cases.tag.research":   "Research",
      "cases.empty":          "No cases under this category yet — coming soon.",

      "cases.c1.title":  "MAC Keyboard Cosmetic Inspection",
      "cases.c1.client": "Client: top-tier consumer-electronics OEM  ·  Status: deployed",
      "cases.c1.body":   "End-to-end processing of 8192×13000 TIF captures, auto-classifying 11 common defect types (bright marks, dark streaks, dents, dots, etc.) with bounding boxes and OK / Review / NG verdicts.",
      "cases.c1.s1":     "Cls Accuracy",
      "cases.c1.s2":     "mAP50",
      "cases.c1.s3":     "End-to-End",

      "cases.c2.title":  "Lung X-Ray Diagnostic Assistant",
      "cases.c2.client": "Type: academic + R&D  ·  Data: NIH ChestX-ray14",
      "cases.c2.body":   "Multi-label classifier on ResNet/EfficientNet covering 14 chest abnormalities (pneumonia, nodule, pneumothorax, ...). Grad-CAM visualization helps clinicians localize findings.",
      "cases.c2.s1":     "AUC (avg)",
      "cases.c2.s2":     "Conditions",
      "cases.c2.s3":     "Train Samples",

      "cases.c3.title":  "Noval AI · Manufacturing Process Generation",
      "cases.c3.client": "Type: platform product  ·  Status: prototype live",
      "cases.c3.body":   "Qwen2.5-VL vision-language model + LoRA fine-tuning, automatically analyzing product images and generating full process documentation. End-to-end: upload → understand → generate → PDF report.",
      "cases.c3.s1":     "Resource Saved",
      "cases.c3.s2":     "Part Types",
      "cases.c3.s3":     "Process Report",

      "cases.c4.title":  "Credit Risk · Default Prediction",
      "cases.c4.client": "Type: research  ·  Scale: $50M+ annualized",
      "cases.c4.body":   "XGBoost + feature-engineering pipeline for credit-default prediction across historical transactions, behavior sequences and external credit data — powering real-time credit decisions.",
      "cases.c4.s1":     "AUC",
      "cases.c4.s2":     "CTR Lift",
      "cases.c4.s3":     "Volume ($)",

      "cases.c5.title":  "Sub-pixel Dimensional Inspection",
      "cases.c5.client": "Sector: automotive parts  ·  Status: Yangzhou-priority pipeline",
      "cases.c5.body":   "Sub-pixel image processing for length, roundness, and angle measurements — full-coverage inline inspection for injection, stamping and machined parts.",
      "cases.c5.s1":     "Best Precision",
      "cases.c5.s2":     "Latency",
      "cases.c5.s3":     "Full Coverage",

      "cases.c6.title":  "Vision-guided Robotic Assembly",
      "cases.c6.client": "Direction: humanoid-robot vision  ·  long-term horizon",
      "cases.c6.body":   "Perception backbone for industrial / humanoid robots: bin picking, 6-DoF pose estimation, assembly alignment — a natural extension of our industrial-vision stack.",
      "cases.c6.s1":     "Pose DoF",
      "cases.c6.s2":     "Multi-modal",
      "cases.c6.s3":     "Long-term (yrs)",

      "case.more": "See all cases",
    },
  };

  // merge into global I18N (from app.js)
  if (typeof I18N === "object") {
    Object.assign(I18N.zh, extras.zh);
    Object.assign(I18N.en, extras.en);
    // re-apply with the current language
    const cur = document.documentElement.getAttribute("data-lang") || "zh";
    if (typeof applyLang === "function") applyLang(cur);
  }

  // ---- filter logic ----
  const tiles  = document.querySelectorAll(".case-tile");
  const empty  = document.getElementById("cases-empty");
  const filterBtns = document.querySelectorAll(".cases-filter");

  function setFilter(cat) {
    let visibleCount = 0;
    tiles.forEach((t) => {
      const match = cat === "all" || t.dataset.cat === cat;
      t.classList.toggle("hidden", !match);
      if (match) visibleCount++;
    });
    if (empty) empty.hidden = visibleCount > 0;

    filterBtns.forEach((b) => b.classList.toggle("active", b.dataset.cat === cat));
  }

  filterBtns.forEach((b) => b.addEventListener("click", () => setFilter(b.dataset.cat)));
})();
