// Technology page — extra i18n strings
(function () {
  const extras = {
    zh: {
      "tech.eyebrow":  "Core Technology",
      "tech.title":    "从经典视觉到大模型 · 全栈视觉感知能力",
      "tech.lead":     "凌柒科技自研多路融合算法栈,把工业 AOI 从「规则匹配」推向「认知理解」。我们不强求一套打天下 — 按缺陷复杂度匹配最适合的工具,客户只为真正需要的复杂度付费。",

      "nn.eyebrow":    "// Neural Network in Action",
      "nn.title":      "神经网络如何识别瑕疵",
      "nn.lead":       "从输入像素到分类输出 — 一次完整的前向推理,只用 ~52 ms。",
      "nn.input":      "INPUT",
      "nn.layers":     "CNN · 16 LAYERS",
      "nn.output":     "OUTPUT",
      "nn.cls.defect": "Defect (划痕)",
      "nn.cls.pass":   "Pass",
      "nn.verdict":    "VERDICT",
      "nn.verdict.value":"NG · 表面划痕",

      "tech.tiers.eyebrow": "// Solution Matrix",
      "tech.tiers.title":   "三层级方案矩阵",
      "tech.tiers.lead":    "L1 轻量 → L2 标准 → L3 大模型增强 — 同一团队提供从规则到大模型的全栈视觉方案。",
      "tech.scenarios":     "应用场景",
      "tech.stack":         "技术栈",
      "tech.cases":         "典型案例",
      "tech.l1.name":       "轻量方案",
      "tech.l1.s":          "装配缺失 / 尺寸超差 / 明显凹陷 / 标贴错位",
      "tech.l1.t":          "OpenCV · 模板匹配 · 阈值与形态学",
      "tech.l1.c":          "汽车螺栓装配 · 家电外壳定位 · 包装合格性",
      "tech.l2.name":       "标准方案",
      "tech.l2.s":          "外观瑕疵 / 多类缺陷分类 / 持续学习",
      "tech.l2.t":          "YOLOv8 + CNN + 金样像素对比",
      "tech.l2.c":          "键盘 AOI · 连接器 · 注塑件外观全检",
      "tech.l3.name":       "大模型增强",
      "tech.l3.s":          "零样本检测 / 开放式描述 / 报告生成 / 异常解释",
      "tech.l3.t":          "Qwen2.5-VL · MiniCPM-V + LoRA + RAG",
      "tech.l3.c":          "医疗耗材冷启动 · 首件检测+工艺生成 · 新品类",

      "tech.pipe.eyebrow":  "// Universal Pipeline",
      "tech.pipe.title":    "通用底层架构 · 三阶段流水线",
      "tech.pipe.lead":     "不变项 — 同一架构换数据集 + 微调模型即可服务多行业,新行业落地周期 4-6 周。",
      "tech.p1.t":          "图像定位",
      "tech.p1.b":          "OpenCV 自适应阈值 → 形态学 → 透视校正 → 朝向自动判定。处理 8K×13K 大分辨率工业图像,~0.5s/张。",
      "tech.p2.t":          "目标切割",
      "tech.p2.b":          "YOLOv8 检测分割,关键部件 bbox 输出。mAP50 = 99.2%,单图 ~52ms (CPU)。",
      "tech.p3.t":          "缺陷判定",
      "tech.p3.b":          "CNN 分类 + 金样对比 + OpenCV 黑点 + 高通异常 — 四路并行,任一触发即标 NG。",

      "tech.moat.eyebrow":  "// Differentiation",
      "tech.moat.title":    "技术壁垒 · 我们的差异化优势",
      "tech.moat.m1.t":     "多路融合算法",
      "tech.moat.m1.b":     "CNN + 金样 + OpenCV + 高通,四路并行,任一触发即标 NG。召回率 +18%,显著降低漏检。",
      "tech.moat.m2.t":     "浏览器端推理",
      "tech.moat.m2.b":     "ONNX Runtime Web 零服务端部署,数据不出厂、不上云。同时支持 GPU 服务器和边缘盒子。",
      "tech.moat.m3.t":     "工业图像专精",
      "tech.moat.m3.b":     "8192×13000 大分辨率 TIF 端到端处理 3 秒级,这是非主流 VLM 难以做到的。",
      "tech.moat.m4.t":     "金样对比体系",
      "tech.moat.m4.b":     "部件 ID 识别 → 自动匹配金样 → 像素级差异检测,微小瑕疵召回率显著提升。",

      "tech.metrics.eyebrow":"// Production Numbers",
      "tech.metrics.title":  "生产环境指标",
      "tech.m.acc":          "Top-1 缺陷分类准确率",
      "tech.m.map":          "YOLO mAP50 目标检测",
      "tech.m.lat":          "单张大图端到端 (CPU)",
      "tech.m.res":          "原生超大图处理",
      "tech.m.types":        "常见缺陷类别覆盖",
      "tech.m.uptime":       "不间断运行 SLA",

      "tech.cta.title":      "想看实际效果?",
      "tech.cta.body":       "浏览我们落地的视觉 AI 案例,或者直接发起一次技术咨询。",
      "tech.cta.btn1":       "查看案例展示",
      "tech.cta.btn2":       "联系我们",
    },
    en: {
      "tech.eyebrow":  "Core Technology",
      "tech.title":    "From Classical CV to LLMs · Full-stack Vision Perception",
      "tech.lead":     "LingQi's in-house multi-route fusion stack moves industrial AOI from rule matching to cognitive understanding. We don't force one architecture for every problem — clients pay only for the complexity they truly need.",

      "nn.eyebrow":    "// Neural Network in Action",
      "nn.title":      "How the Network Spots a Defect",
      "nn.lead":       "From input pixels to class output — one full forward pass in ~52 ms.",
      "nn.input":      "INPUT",
      "nn.layers":     "CNN · 16 LAYERS",
      "nn.output":     "OUTPUT",
      "nn.cls.defect": "Defect (scratch)",
      "nn.cls.pass":   "Pass",
      "nn.verdict":    "VERDICT",
      "nn.verdict.value":"NG · Surface scratch",

      "tech.tiers.eyebrow": "// Solution Matrix",
      "tech.tiers.title":   "Three-Tier Solution Matrix",
      "tech.tiers.lead":    "L1 lightweight → L2 standard → L3 LLM-augmented — one team, full stack from rules to large vision-language models.",
      "tech.scenarios":     "Use cases",
      "tech.stack":         "Tech",
      "tech.cases":         "Examples",
      "tech.l1.name":       "Lightweight",
      "tech.l1.s":          "Missing parts · dimension OOS · obvious dents · sticker misplacement",
      "tech.l1.t":          "OpenCV · template matching · threshold & morphology",
      "tech.l1.c":          "Auto bolt assembly · appliance shell · packaging QA",
      "tech.l2.name":       "Standard",
      "tech.l2.s":          "Surface defects · multi-class classification · continual learning",
      "tech.l2.t":          "YOLOv8 + CNN + golden-sample diff",
      "tech.l2.c":          "Keyboard AOI · Connectors · Injection-mold inspection",
      "tech.l3.name":       "LLM-augmented",
      "tech.l3.s":          "Zero-shot detection · open-ended description · report generation",
      "tech.l3.t":          "Qwen2.5-VL · MiniCPM-V + LoRA + RAG",
      "tech.l3.c":          "Medical cold-start · first-article + process generation · new SKUs",

      "tech.pipe.eyebrow":  "// Universal Pipeline",
      "tech.pipe.title":    "Universal Backbone · 3-Phase Pipeline",
      "tech.pipe.lead":     "Stable infrastructure — swap dataset + fine-tune to serve a new vertical in 4-6 weeks.",
      "tech.p1.t":          "Image Localization",
      "tech.p1.b":          "OpenCV adaptive threshold → morphology → perspective correction → auto orientation. Handles 8K×13K industrial captures at ~0.5s each.",
      "tech.p2.t":          "Target Segmentation",
      "tech.p2.b":          "YOLOv8 detection + segmentation, bbox output for parts. mAP50 = 99.2%, ~52ms on CPU.",
      "tech.p3.t":          "Defect Classification",
      "tech.p3.b":          "CNN classifier + golden-sample diff + OpenCV black-spot + high-pass anomaly — four routes in parallel, any positive flags NG.",

      "tech.moat.eyebrow":  "// Differentiation",
      "tech.moat.title":    "What Sets Us Apart",
      "tech.moat.m1.t":     "Multi-Route Fusion",
      "tech.moat.m1.b":     "CNN + golden + OpenCV + high-pass, four routes in parallel; any positive flags NG. +18% recall on subtle defects.",
      "tech.moat.m2.t":     "Edge / In-Browser Inference",
      "tech.moat.m2.b":     "ONNX Runtime Web — zero-server deployment. Data never leaves the factory. Supports GPU servers and edge boxes too.",
      "tech.moat.m3.t":     "Industrial-Image Specialism",
      "tech.moat.m3.b":     "8192×13000 TIF end-to-end in ~3 seconds — something off-the-shelf VLMs can't match.",
      "tech.moat.m4.t":     "Golden-Sample System",
      "tech.moat.m4.b":     "Part ID recognition → auto-match golden reference → pixel-level diff. Significantly higher recall on subtle defects.",

      "tech.metrics.eyebrow":"// Production Numbers",
      "tech.metrics.title":  "Production Metrics",
      "tech.m.acc":          "Top-1 Classification Accuracy",
      "tech.m.map":          "YOLO mAP50 Detection",
      "tech.m.lat":          "Large-image End-to-End (CPU)",
      "tech.m.res":          "Native Large-image Pipeline",
      "tech.m.types":        "Common Defect Categories",
      "tech.m.uptime":       "Continuous Uptime SLA",

      "tech.cta.title":      "Want to See It in Action?",
      "tech.cta.body":       "Browse our deployed cases, or start a technical conversation.",
      "tech.cta.btn1":       "See Cases",
      "tech.cta.btn2":       "Contact Us",
    },
  };
  if (typeof I18N === "object") {
    Object.assign(I18N.zh, extras.zh);
    Object.assign(I18N.en, extras.en);
    const cur = document.documentElement.getAttribute("data-lang") || "zh";
    if (typeof applyLang === "function") applyLang(cur);
  }
})();

/* ============================================================================
   CNN-EXPLAINER replica — runs an actual Tiny VGG forward-pass on the input
   image. Produces 10 feature maps per hidden layer with the same RdBu
   divergent colormap, layer dims, and architecture as poloclub/cnn-explainer.
   ============================================================================ */
(function () {
  // ---- RdBu divergent colormap (CNN Explainer's exact palette) ------------
  // negative=red, zero=white, positive=blue. Sampled from matplotlib RdBu_r.
  const RDBU = [
    { t: 0.00, c: [103,   0,  31] },
    { t: 0.10, c: [178,  24,  43] },
    { t: 0.20, c: [214,  96,  77] },
    { t: 0.30, c: [244, 165, 130] },
    { t: 0.40, c: [253, 219, 199] },
    { t: 0.50, c: [247, 247, 247] },   // near-white center
    { t: 0.60, c: [209, 229, 240] },
    { t: 0.70, c: [146, 197, 222] },
    { t: 0.80, c: [ 67, 147, 195] },
    { t: 0.90, c: [ 33, 102, 172] },
    { t: 1.00, c: [  5,  48,  97] },
  ];
  function sampleRdBu(t) {
    t = Math.max(0, Math.min(1, t));
    for (let i = 1; i < RDBU.length; i++) {
      const a = RDBU[i - 1], b = RDBU[i];
      if (t <= b.t) {
        const k = (t - a.t) / (b.t - a.t);
        return [
          a.c[0] + (b.c[0] - a.c[0]) * k,
          a.c[1] + (b.c[1] - a.c[1]) * k,
          a.c[2] + (b.c[2] - a.c[2]) * k,
        ];
      }
    }
    return RDBU[RDBU.length - 1].c;
  }

  // ---- Image helpers -----------------------------------------------------
  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  // Stretch a channel array to use the full [-1, 1] range based on its
  // own min/max — improves contrast for dim/dark images so conv kernels
  // produce visibly meaningful activations.
  function stretchContrast(arr) {
    let lo = Infinity, hi = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < lo) lo = arr[i];
      if (arr[i] > hi) hi = arr[i];
    }
    const range = (hi - lo) || 1;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = ((arr[i] - lo) / range) * 2 - 1;   // → [-1, 1]
    }
  }

  // Resize image to size×size, return {r, g, b} as contrast-stretched
  // Float32Arrays in [-1, 1].
  function extractChannels(img, size) {
    const c = document.createElement("canvas");
    c.width = c.height = size;
    const ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0, size, size);
    const data = ctx.getImageData(0, 0, size, size).data;
    const r = new Float32Array(size * size);
    const g = new Float32Array(size * size);
    const b = new Float32Array(size * size);
    for (let i = 0; i < size * size; i++) {
      r[i] = data[i * 4]     / 255;
      g[i] = data[i * 4 + 1] / 255;
      b[i] = data[i * 4 + 2] / 255;
    }
    stretchContrast(r);
    stretchContrast(g);
    stretchContrast(b);
    return { r, g, b };
  }

  // ---- Convolution kernels ------------------------------------------------
  // 10 distinct 3x3 kernels — mix of edge detectors, blobs, sharpen, identity
  // variants. Produces visually-diverse feature maps even when applied to
  // similar input.
  const KERNELS_BASE = [
    [[-1,-1, 0],[-1, 0, 1],[ 0, 1, 1]],            // diagonal /
    [[ 0,-1,-1],[ 1, 0,-1],[ 1, 1, 0]],            // diagonal \
    [[-1, 0, 1],[-2, 0, 2],[-1, 0, 1]],            // sobel x
    [[-1,-2,-1],[ 0, 0, 0],[ 1, 2, 1]],            // sobel y
    [[ 0,-1, 0],[-1, 4,-1],[ 0,-1, 0]],            // laplacian
    [[ 1, 1, 1],[ 1,-7, 1],[ 1, 1, 1]],            // center inverter
    [[ 0,-1, 0],[-1, 5,-1],[ 0,-1, 0]],            // sharpen
    [[ 0.5,-1, 0.5],[-1, 0,-1],[ 0.5,-1, 0.5]],   // checker high-pass
    [[ 1, 0,-1],[ 1, 0,-1],[ 1, 0,-1]],            // vertical gradient
    [[ 1, 1, 1],[ 0, 0, 0],[-1,-1,-1]],            // horizontal gradient
  ];

  // 2D valid convolution (3×3 kernel on size×size input → (size-2)×(size-2) output)
  function conv2d(input, inSize, kernel) {
    const outSize = inSize - 2;
    const out = new Float32Array(outSize * outSize);
    for (let y = 0; y < outSize; y++) {
      for (let x = 0; x < outSize; x++) {
        let sum = 0;
        for (let ky = 0; ky < 3; ky++) {
          for (let kx = 0; kx < 3; kx++) {
            sum += input[(y + ky) * inSize + (x + kx)] * kernel[ky][kx];
          }
        }
        out[y * outSize + x] = sum;
      }
    }
    return out;
  }

  // Sum two arrays in place
  function addInPlace(target, src) {
    for (let i = 0; i < target.length; i++) target[i] += src[i];
  }

  // Scale into reasonable activation range
  function scale(arr, factor) {
    for (let i = 0; i < arr.length; i++) arr[i] *= factor;
  }

  function relu(arr) {
    const out = new Float32Array(arr.length);
    for (let i = 0; i < arr.length; i++) out[i] = arr[i] > 0 ? arr[i] : 0;
    return out;
  }

  function maxPool2x2(input, inSize) {
    const outSize = Math.floor(inSize / 2);
    const out = new Float32Array(outSize * outSize);
    for (let y = 0; y < outSize; y++) {
      for (let x = 0; x < outSize; x++) {
        const x0 = x * 2, y0 = y * 2;
        const a = input[ y0      * inSize + x0    ];
        const b = input[ y0      * inSize + x0 + 1];
        const c = input[(y0 + 1) * inSize + x0    ];
        const d = input[(y0 + 1) * inSize + x0 + 1];
        out[y * outSize + x] = Math.max(a, b, c, d);
      }
    }
    return out;
  }

  // ---- Render a feature map array onto a canvas with RdBu colormap --------
  // Auto-normalizes by the max abs value to use the full color range.
  function drawMap(canvas, arr, size, displaySize, vmax) {
    canvas.width = size;
    canvas.height = size;
    canvas.style.width  = displaySize + "px";
    canvas.style.height = displaySize + "px";
    const ctx = canvas.getContext("2d");
    const img = ctx.createImageData(size, size);
    const data = img.data;
    // map value v ∈ [-vmax, +vmax] → t ∈ [0, 1] for RdBu
    for (let i = 0; i < arr.length; i++) {
      const v = arr[i] / (vmax || 1);          // -1 .. +1
      const t = Math.max(0, Math.min(1, (v + 1) / 2));
      const [r, g, b] = sampleRdBu(t);
      data[i * 4]     = r;
      data[i * 4 + 1] = g;
      data[i * 4 + 2] = b;
      data[i * 4 + 3] = 255;
    }
    ctx.imageSmoothingEnabled = false;
    ctx.putImageData(img, 0, 0);
  }

  // Render a single grayscale channel input (one of R/G/B)
  function drawChannel(canvas, arr, size, displaySize, label, color) {
    canvas.width = size;
    canvas.height = size;
    canvas.style.width  = displaySize + "px";
    canvas.style.height = displaySize + "px";
    const ctx = canvas.getContext("2d");
    const img = ctx.createImageData(size, size);
    const data = img.data;
    for (let i = 0; i < arr.length; i++) {
      const v = (arr[i] + 1) / 2 * 255;        // back to 0..255
      data[i * 4]     = v;
      data[i * 4 + 1] = v;
      data[i * 4 + 2] = v;
      data[i * 4 + 3] = 255;
    }
    ctx.imageSmoothingEnabled = false;
    ctx.putImageData(img, 0, 0);
  }

  // ---- Build the colormap legend gradients --------------------------------
  function paintColormapLegend() {
    const bars = document.querySelectorAll(".cnn-cm-bar");
    bars.forEach(bar => {
      const isRight = bar.classList.contains("cnn-cm-bar-r");
      // left bar: red → white   (t = 0 → 0.5)
      // right bar: white → blue (t = 0.5 → 1.0)
      const stops = [];
      const N = 16;
      for (let i = 0; i <= N; i++) {
        const k = i / N;
        const t = isRight ? 0.5 + k * 0.5 : k * 0.5;
        const [r, g, b] = sampleRdBu(t);
        stops.push(`rgb(${r|0},${g|0},${b|0}) ${(k*100).toFixed(0)}%`);
      }
      bar.style.background = `linear-gradient(90deg, ${stops.join(", ")})`;
    });
  }

  // ---- Per-layer mini-legend (the colored bar at the bottom of each layer)
  function paintLayerLegend(scaleEl) {
    const stops = [];
    const N = 24;
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const [r, g, b] = sampleRdBu(t);
      stops.push(`rgb(${r|0},${g|0},${b|0}) ${(t*100).toFixed(0)}%`);
    }
    scaleEl.style.background = `linear-gradient(90deg, ${stops.join(", ")})`;
  }

  // ---- Display sizes per layer (decreases as feature maps shrink) --------
  // Larger sizes → maps are clearly visible like in the CNN Explainer site.
  const DISPLAY = {
    1: 56, 2: 56,                     // conv_1_1, relu_1_1 (62×62)
    3: 54, 4: 54,                     // conv_1_2, relu_1_2 (60×60)
    5: 32,                            // max_pool_1 (30×30)
    6: 30, 7: 30,                     // conv_2_1, relu_2_1 (28×28)
    8: 28, 9: 28,                     // conv_2_2, relu_2_2 (26×26)
    10: 18,                           // max_pool_2 (13×13)
  };

  // ---- Main forward-pass + render ----------------------------------------
  async function runForwardPass() {
    const stage = document.getElementById("cnn-stage");
    if (!stage) return;

    // 1. Load + downsample the input image
    const img = await loadImage("assets/pcb_demo.jpg");
    const INPUT_SIZE = 64;
    const channels = extractChannels(img, INPUT_SIZE);

    // 2. Render the 3 input channels (R, G, B grayscale) into the input column
    const inputBox = document.getElementById("cnn-input-channels");
    if (inputBox) {
      inputBox.innerHTML = "";
      [
        { name: "R", color: "#ef4444", arr: channels.r },
        { name: "G", color: "#22c55e", arr: channels.g },
        { name: "B", color: "#3b82f6", arr: channels.b },
      ].forEach(ch => {
        const wrap = document.createElement("div");
        wrap.className = "cnn-input-ch";
        const lbl = document.createElement("div");
        lbl.className = "cnn-input-ch-lbl mono";
        lbl.style.color = ch.color;
        lbl.textContent = ch.name + " channel";
        const cv = document.createElement("canvas");
        cv.className = "cnn-input-ch-canvas";
        drawChannel(cv, ch.arr, INPUT_SIZE, 64, ch.name, ch.color);
        wrap.appendChild(cv);
        wrap.appendChild(lbl);
        inputBox.appendChild(wrap);
      });
    }

    // 3. Run forward pass, accumulating tensors at each step
    // conv_1_1: For each of 10 output maps, sum (R*kR + G*kG + B*kB) using
    // 3 different kernel rotations per output. Produces 62×62 outputs.
    function makeConvLayer(inputs, inSize, numOut, kernelOffset) {
      // inputs: array of Float32Array (each inSize×inSize), shape = (numIn, inSize*inSize)
      // returns array of Float32Array (numOut maps), each (inSize-2)×(inSize-2)
      const outSize = inSize - 2;
      const result = [];
      for (let o = 0; o < numOut; o++) {
        const sum = new Float32Array(outSize * outSize);
        for (let i = 0; i < inputs.length; i++) {
          const kIdx = (o + i + kernelOffset) % KERNELS_BASE.length;
          const partial = conv2d(inputs[i], inSize, KERNELS_BASE[kIdx]);
          // Weight by 1/numIn so output stays in similar range
          for (let p = 0; p < partial.length; p++) sum[p] += partial[p] / inputs.length;
        }
        result.push(sum);
      }
      return result;
    }

    function reluLayer(inputs) {
      return inputs.map(arr => relu(arr));
    }

    function poolLayer(inputs, inSize) {
      return inputs.map(arr => maxPool2x2(arr, inSize));
    }

    // Forward pass: input(64,64,3) → conv_1_1(62,62,10) → relu → conv_1_2(60,60,10) → relu →
    //               pool_1(30,30,10) → conv_2_1(28,28,10) → relu → conv_2_2(26,26,10) → relu →
    //               pool_2(13,13,10)
    const inputs = [channels.r, channels.g, channels.b];
    const conv_1_1   = makeConvLayer(inputs,    64, 10, 0);   // 62×62×10
    const relu_1_1   = reluLayer(conv_1_1);
    const conv_1_2   = makeConvLayer(relu_1_1, 62, 10, 3);   // 60×60×10
    const relu_1_2   = reluLayer(conv_1_2);
    const max_pool_1 = poolLayer(relu_1_2, 60);              // 30×30×10
    const conv_2_1   = makeConvLayer(max_pool_1, 30, 10, 5); // 28×28×10
    const relu_2_1   = reluLayer(conv_2_1);
    const conv_2_2   = makeConvLayer(relu_2_1, 28, 10, 7);   // 26×26×10
    const relu_2_2   = reluLayer(conv_2_2);
    const max_pool_2 = poolLayer(relu_2_2, 26);              // 13×13×10

    const layers = [
      { step: 1, size: 62, maps: conv_1_1   },
      { step: 2, size: 62, maps: relu_1_1   },
      { step: 3, size: 60, maps: conv_1_2   },
      { step: 4, size: 60, maps: relu_1_2   },
      { step: 5, size: 30, maps: max_pool_1 },
      { step: 6, size: 28, maps: conv_2_1   },
      { step: 7, size: 28, maps: relu_2_1   },
      { step: 8, size: 26, maps: conv_2_2   },
      { step: 9, size: 26, maps: relu_2_2   },
      { step:10, size: 13, maps: max_pool_2 },
    ];

    // 4. Render each layer's 10 maps with RdBu colormap
    layers.forEach(({ step, size, maps }) => {
      const layerEl = stage.querySelector(`.cnn-layer[data-step="${step}"]`);
      if (!layerEl) return;
      const wrap = layerEl.querySelector(".cnn-maps");
      const scaleEl = layerEl.querySelector(".cnn-scale");
      if (!wrap) return;
      wrap.innerHTML = "";

      // Find common vmax across all maps of this layer for stable colormap
      let vmax = 0;
      for (const m of maps) {
        for (let i = 0; i < m.length; i++) {
          const a = Math.abs(m[i]);
          if (a > vmax) vmax = a;
        }
      }
      vmax = vmax || 1;

      const dispSize = DISPLAY[step] || 24;
      maps.forEach((m, i) => {
        const c = document.createElement("canvas");
        c.className = "cnn-map";
        drawMap(c, m, size, dispSize, vmax);
        wrap.appendChild(c);
      });
      if (scaleEl) paintLayerLegend(scaleEl);
    });

    paintColormapLegend();
  }

  // ---- Connection lines between adjacent layers (CNN Explainer style) ----
  function drawConnections() {
    const stage = document.getElementById("cnn-stage");
    if (!stage) return;
    const flow = stage.querySelector(".cnn-flow");
    if (!flow) return;

    let svg = flow.querySelector("svg.cnn-conns");
    if (!svg) {
      svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "cnn-conns");
      svg.style.position = "absolute";
      svg.style.top = "0";
      svg.style.left = "0";
      svg.style.pointerEvents = "none";
      svg.style.zIndex = "0";
      flow.style.position = "relative";
      flow.insertBefore(svg, flow.firstChild);
    }

    const flowRect = flow.getBoundingClientRect();
    svg.setAttribute("width", flowRect.width);
    svg.setAttribute("height", flowRect.height);
    svg.setAttribute("viewBox", `0 0 ${flowRect.width} ${flowRect.height}`);

    // Helper: get source/destination anchor points for one layer column
    function getAnchors(layerEl, side) {
      const maps = layerEl.querySelectorAll(
        "canvas.cnn-map, canvas.cnn-input-ch-canvas, .cnn-out-row"
      );
      return [...maps].map(m => {
        const r = m.getBoundingClientRect();
        return {
          x: (side === "right" ? r.right : r.left) - flowRect.left,
          y: r.top + r.height / 2 - flowRect.top,
        };
      });
    }

    const layers = [...stage.querySelectorAll(".cnn-layer")];
    const lines = [];
    for (let i = 0; i < layers.length - 1; i++) {
      const fromAnchors = getAnchors(layers[i], "right");
      const toAnchors   = getAnchors(layers[i + 1], "left");
      if (!fromAnchors.length || !toAnchors.length) continue;

      const N = fromAnchors.length, M = toAnchors.length;
      const pairs = [];

      // Small layer pairs (input 3→10, max_pool_2 10→6): full mesh — every
      // source connects to every destination so no map is left unconnected.
      // Larger 10→10 pairs: each source connects to 5 nearby destinations,
      // which guarantees every destination has multiple incoming connections.
      if (N * M <= 60) {
        for (let s = 0; s < N; s++) {
          for (let t = 0; t < M; t++) pairs.push([s, t]);
        }
      } else {
        for (let s = 0; s < N; s++) {
          const baseIdx = Math.round((s / Math.max(1, N - 1)) * (M - 1));
          for (const off of [-2, -1, 0, 1, 2]) {
            const t = baseIdx + off;
            if (t >= 0 && t < M) pairs.push([s, t]);
          }
        }
        // Also iterate by destination so every dest is guaranteed at least 5
        // incoming connections (in case the source-side loop missed it).
        for (let t = 0; t < M; t++) {
          const baseIdx = Math.round((t / Math.max(1, M - 1)) * (N - 1));
          for (const off of [-2, -1, 0, 1, 2]) {
            const s = baseIdx + off;
            if (s >= 0 && s < N) pairs.push([s, t]);
          }
        }
      }

      // De-duplicate
      const seen = new Set();
      for (const [s, t] of pairs) {
        const key = s * 1024 + t;
        if (seen.has(key)) continue;
        seen.add(key);
        const a = fromAnchors[s], b = toAnchors[t];
        const dx = (b.x - a.x) * 0.5;
        lines.push(`M${a.x.toFixed(1)},${a.y.toFixed(1)} C${(a.x + dx).toFixed(1)},${a.y.toFixed(1)} ${(b.x - dx).toFixed(1)},${b.y.toFixed(1)} ${b.x.toFixed(1)},${b.y.toFixed(1)}`);
      }
    }

    svg.innerHTML =
      `<g stroke="rgba(15, 23, 42, .28)" stroke-width="0.9" fill="none" stroke-linecap="round">` +
      lines.map(d => `<path d="${d}"/>`).join("") +
      `</g>`;
  }

  function init() {
    if (!document.getElementById("cnn-stage")) return;
    runForwardPass()
      .then(() => {
        // Wait one frame so layout settles before measuring
        requestAnimationFrame(() => requestAnimationFrame(drawConnections));
      })
      .catch(err => console.error("CNN render failed:", err));

    // Re-draw on resize
    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(drawConnections, 150);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
