(() => {
  "use strict";

  const fileInput = document.getElementById("fileInput");
  const fileHint = document.getElementById("fileHint");
  const dropzone = document.getElementById("dropzone");
  const loadingOverlay = document.getElementById("loadingOverlay");
  const loadingTitle = document.getElementById("loadingTitle");
  const loadingDetail = document.getElementById("loadingDetail");
  const loadingProgress = document.getElementById("loadingProgress");
  const loadingProgressBar = document.getElementById("loadingProgressBar");
  const uploadBtn = document.querySelector(".upload-btn");
  const canvasWrap = document.getElementById("canvasWrap");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  const toolsSection = document.getElementById("toolsSection");
  const resetBtn = document.getElementById("resetBtn");
  const reloadAppBtn = document.getElementById("reloadAppBtn");
  const downloadBtn = document.getElementById("downloadBtn");
  const downloadAllBtn = document.getElementById("downloadAllBtn");
  const saveBtn = document.getElementById("saveBtn");
  const saveAllBtn = document.getElementById("saveAllBtn");
  const pickFolderBtn = document.getElementById("pickFolderBtn");
  const folderHint = document.getElementById("folderHint");
  const gallery = document.getElementById("gallery");
  const galleryList = document.getElementById("galleryList");
  const galleryCount = document.getElementById("galleryCount");
  const clearAllBtn = document.getElementById("clearAllBtn");
  const nameField = document.getElementById("nameField");
  const photoNameInput = document.getElementById("photoNameInput");
  const applyNameBtn = document.getElementById("applyNameBtn");
  const captionBox = document.getElementById("captionBox");
  const captionCategory = document.getElementById("captionCategory");
  const captionTemplate = document.getElementById("captionTemplate");
  const captionInput = document.getElementById("captionInput");
  const copyCaptionBtn = document.getElementById("copyCaptionBtn");
  const clearCaptionBtn = document.getElementById("clearCaptionBtn");
  const copyAllCaptionsBtn = document.getElementById("copyAllCaptionsBtn");
  const downloadCaptionsBtn = document.getElementById("downloadCaptionsBtn");
  const watermarkEnabled = document.getElementById("watermarkEnabled");
  const geminiApiKey = document.getElementById("geminiApiKey");
  const verifyApiKeyBtn = document.getElementById("verifyApiKeyBtn");
  const apiKeyStatus = document.getElementById("apiKeyStatus");
  const generateCaptionBtn = document.getElementById("generateCaptionBtn");
  const generateAllCaptionsBtn = document.getElementById("generateAllCaptionsBtn");
  const aiCaptionStatus = document.getElementById("aiCaptionStatus");
  const propertyAddress = document.getElementById("propertyAddress");
  const propertyType = document.getElementById("propertyType");

  const resizeWidth = document.getElementById("resizeWidth");
  const resizeHeight = document.getElementById("resizeHeight");
  const keepAspect = document.getElementById("keepAspect");
  const applyResize = document.getElementById("applyResize");
  const batchResizeBox = document.getElementById("batchResizeBox");
  const batchResizeMode = document.getElementById("batchResizeMode");
  const batchLongEdgeField = document.getElementById("batchLongEdgeField");
  const batchLongEdge = document.getElementById("batchLongEdge");
  const batchResizeHint = document.getElementById("batchResizeHint");
  const batchResizeBtn = document.getElementById("batchResizeBtn");
  const batchResizeSaveBtn = document.getElementById("batchResizeSaveBtn");
  const batchResizeDownloadBtn = document.getElementById("batchResizeDownloadBtn");

  const brushSize = document.getElementById("brushSize");
  const brushSizeLabel = document.getElementById("brushSizeLabel");
  const mosaicSize = document.getElementById("mosaicSize");
  const mosaicSizeLabel = document.getElementById("mosaicSizeLabel");
  const autoDetectPeople = document.getElementById("autoDetectPeople");
  const autoDetectPlates = document.getElementById("autoDetectPlates");
  const autoMosaicBtn = document.getElementById("autoMosaicBtn");
  const autoMosaicAllBtn = document.getElementById("autoMosaicAllBtn");
  const autoMosaicStatus = document.getElementById("autoMosaicStatus");

  const brightness = document.getElementById("brightness");
  const brightnessLabel = document.getElementById("brightnessLabel");
  const contrast = document.getElementById("contrast");
  const contrastLabel = document.getElementById("contrastLabel");
  const resetLight = document.getElementById("resetLight");
  const skyStrength = document.getElementById("skyStrength");
  const skyStrengthLabel = document.getElementById("skyStrengthLabel");
  const skyBrightness = document.getElementById("skyBrightness");
  const skyBrightnessLabel = document.getElementById("skyBrightnessLabel");
  const skyTemperature = document.getElementById("skyTemperature");
  const skyTemperatureLabel = document.getElementById("skyTemperatureLabel");
  const skyScale = document.getElementById("skyScale");
  const skyScaleLabel = document.getElementById("skyScaleLabel");
  const skyShift = document.getElementById("skyShift");
  const skyShiftLabel = document.getElementById("skyShiftLabel");
  const skyRange = document.getElementById("skyRange");
  const skyRangeLabel = document.getElementById("skyRangeLabel");
  const skyEdgeFade = document.getElementById("skyEdgeFade");
  const skyEdgeFadeLabel = document.getElementById("skyEdgeFadeLabel");
  const skyForeground = document.getElementById("skyForeground");
  const skyForegroundLabel = document.getElementById("skyForegroundLabel");
  const skyKeepClouds = document.getElementById("skyKeepClouds");
  const skyAutoBtn = document.getElementById("skyAutoBtn");
  const resetSky = document.getElementById("resetSky");
  const skyApplyAllBtn = document.getElementById("skyApplyAllBtn");
  const skyPresetGrid = document.getElementById("skyPresetGrid");

  const cropAspect = document.getElementById("cropAspect");
  const resetCrop = document.getElementById("resetCrop");
  const applyCrop = document.getElementById("applyCrop");
  const rotateAngle = document.getElementById("rotateAngle");
  const rotateAngleLabel = document.getElementById("rotateAngleLabel");
  const resetRotate = document.getElementById("resetRotate");
  const applyRotate = document.getElementById("applyRotate");
  const rotateLeft = document.getElementById("rotateLeft");
  const rotateRight = document.getElementById("rotateRight");

  const zoomBar = document.getElementById("zoomBar");
  const zoomInBtn = document.getElementById("zoomIn");
  const zoomOutBtn = document.getElementById("zoomOut");
  const zoomFitBtn = document.getElementById("zoomFit");
  const zoomLabel = document.getElementById("zoomLabel");
  const panModeBtn = document.getElementById("panModeBtn");
  const toastEl = document.getElementById("toast");

  /** @type {Record<string, Set<Function>>} */
  const lumenListeners = {
    resize: new Set(),
    save: new Set(),
    download: new Set(),
    error: new Set(),
  };

  let toastTimer = 0;

  function showToast(message, { error = false } = {}) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.toggle("is-error", error);
    toastEl.hidden = false;
    requestAnimationFrame(() => toastEl.classList.add("is-visible"));
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toastEl.classList.remove("is-visible");
      window.setTimeout(() => {
        toastEl.hidden = true;
      }, 220);
    }, 2800);
  }

  function emitLumen(type, detail) {
    const handlers = lumenListeners[type];
    if (handlers) {
      handlers.forEach((fn) => {
        try {
          fn(detail);
        } catch (err) {
          console.warn(err);
        }
      });
    }
    window.dispatchEvent(
      new CustomEvent(`lumen:${type}`, {
        detail,
      })
    );
  }

  function notifySuccess(type, message, detail) {
    fileHint.textContent = message;
    showToast(message);
    emitLumen(type, { ok: true, message, ...detail });
  }

  function notifyError(message, detail = {}) {
    fileHint.textContent = message;
    showToast(message, { error: true });
    emitLumen("error", { ok: false, message, ...detail });
  }

  window.Lumen = {
    on(type, fn) {
      if (!lumenListeners[type] || typeof fn !== "function") return () => {};
      lumenListeners[type].add(fn);
      return () => lumenListeners[type].delete(fn);
    },
    off(type, fn) {
      lumenListeners[type]?.delete(fn);
    },
  };

  /** @type {HTMLImageElement | null} */
  let sourceImage = null;
  /** Base pixels after structural edits (before light effects) */
  let baseImageData = null;
  let skyMaskCache = { key: "", mask: null };
  let aspectRatio = 1;
  let activeTool = "resize";
  let painting = false;
  let lastPoint = null;
  /** 1 = ステージに収まるサイズ */
  let viewZoom = 1;
  let panX = 0;
  let panY = 0;
  const ZOOM_MIN = 0.25;
  const ZOOM_MAX = 8;
  let spaceHeld = false;
  let panMode = false;
  let panning = false;
  let panStart = null;

  /** @type {{ x: number, y: number, w: number, h: number } | null} */
  let cropRect = null;
  /** @type {{ mode: string, startX: number, startY: number, orig: object } | null} */
  let cropDrag = null;
  let previewAngle = 0;
  const CROP_HANDLE = 14;

  /** @type {Array<{
   *   id: string,
   *   name: string,
   *   sourceImage: HTMLImageElement,
   *   thumbUrl: string,
   *   baseImageData: ImageData | null,
   *   brightness: string,
   *   contrast: string,
   *   skyPreset: string,
   *   skyStrength: string,
   *   skyBrightness: string,
   *   skyTemperature: string,
   *   skyScale: string,
   *   skyShift: string,
   *   skyRange: string,
   *   skyEdgeFade: string,
   *   skyForeground: string,
   *   skyKeepClouds: boolean,
   *   captionCategory: string,
   *   caption: string,
   * }>} */
  let photos = [];
  let activePhotoId = null;
  let photoSeq = 0;
  let importBusy = false;
  const MAX_IMAGE_EDGE = 8192;
  const IMAGE_FILE_RE = /\.(jpe?g|png|gif|webp|heic|heif|avif|bmp|tiff?)$/i;

  /** 不動産登録向けキャプション。《杏栄》込みで合計20文字以内 */
  const CAPTION_MAX_LEN = 20;
  const CAPTION_PREFIX = "《杏栄》";
  const CAPTION_BODY_MAX = CAPTION_MAX_LEN - Array.from(CAPTION_PREFIX).length;
  const PROPERTY_TYPE_STORAGE = "lumen-property-type";

  /** @type {Record<string, { name: string, zenith: {r:number,g:number,b:number}, horizon: {r:number,g:number,b:number}, glow: {r:number,g:number,b:number,strength:number}|null, clouds: number, warmth: number }>} */
  const SKY_PRESETS = {
    "clear-blue": {
      name: "晴れ",
      zenith: { r: 42, g: 118, b: 198 },
      horizon: { r: 145, g: 192, b: 236 },
      glow: null,
      clouds: 0.4,
      warmth: 0,
    },
    "deep-blue": {
      name: "青空",
      zenith: { r: 25, g: 85, b: 175 },
      horizon: { r: 95, g: 165, b: 225 },
      glow: null,
      clouds: 0.25,
      warmth: -0.1,
    },
    "soft-blue": {
      name: "淡い青",
      zenith: { r: 120, g: 175, b: 215 },
      horizon: { r: 190, g: 215, b: 240 },
      glow: null,
      clouds: 0.5,
      warmth: 0,
    },
    "sunset": {
      name: "夕焼け",
      zenith: { r: 35, g: 55, b: 120 },
      horizon: { r: 245, g: 145, b: 75 },
      glow: { r: 255, g: 110, b: 60, strength: 0.55 },
      clouds: 0.35,
      warmth: 0.8,
    },
    "twilight": {
      name: "夕暮れ",
      zenith: { r: 25, g: 35, b: 85 },
      horizon: { r: 180, g: 100, b: 130 },
      glow: { r: 220, g: 90, b: 100, strength: 0.4 },
      clouds: 0.3,
      warmth: 0.5,
    },
    "dawn": {
      name: "朝焼け",
      zenith: { r: 85, g: 125, b: 175 },
      horizon: { r: 255, g: 185, b: 140 },
      glow: { r: 255, g: 160, b: 100, strength: 0.45 },
      clouds: 0.35,
      warmth: 0.6,
    },
    "overcast": {
      name: "曇り",
      zenith: { r: 145, g: 158, b: 170 },
      horizon: { r: 195, g: 200, b: 208 },
      glow: null,
      clouds: 0.7,
      warmth: -0.15,
    },
    "storm": {
      name: "嵐",
      zenith: { r: 45, g: 55, b: 72 },
      horizon: { r: 105, g: 115, b: 128 },
      glow: null,
      clouds: 0.85,
      warmth: -0.3,
    },
  };

  const SKY_PRESET_ORDER = [
    "clear-blue",
    "deep-blue",
    "soft-blue",
    "sunset",
    "twilight",
    "dawn",
    "overcast",
    "storm",
  ];

  const DEFAULT_SKY_PRESET = "clear-blue";

  const PROPERTY_TYPES = {
    mansion: {
      label: "マンション売買",
      focus:
        "マンションの専有部・共用部・外観が中心。庭や接道の土地表現は使わない。バルコニー・共用廊下・エントランスなどはマンション用語で。",
      categories: [
        "外観",
        "間取り",
        "リビング",
        "居間・リビング",
        "ダイニング",
        "キッチン",
        "洋室",
        "和室",
        "寝室",
        "子供部屋",
        "玄関",
        "廊下",
        "収納",
        "浴室",
        "洗面",
        "トイレ",
        "バルコニー",
        "共用部",
        "周辺環境",
        "その他",
      ],
      templates: {
        外観: ["タイル張りの外観", "清潔感あるマンション"],
        間取り: ["使いやすい間取り", "家事動線の良い間取"],
        リビング: ["明るいリビング", "広々リビング", "日当たり良好LDK"],
        "居間・リビング": ["南向きリビング", "明るい居間"],
        ダイニング: ["明るいダイニング", "リビング続きのDK"],
        キッチン: ["対面キッチン", "システムキッチン", "食洗機付きキッチン"],
        洋室: ["収納付き洋室", "クローゼット付"],
        和室: ["落ち着いた和室", "続き間の和室"],
        寝室: ["落ち着いた寝室", "収納付き寝室"],
        子供部屋: ["明るい子ども部屋", "成長に合う部屋"],
        玄関: ["明るい玄関", "収納付き玄関"],
        廊下: ["明るい廊下", "動線の良い廊下"],
        収納: ["豊富な収納", "ウォークイン収納"],
        浴室: ["追い焚き付き浴室", "清潔感ある浴室"],
        洗面: ["三面鏡洗面台", "収納付き洗面"],
        トイレ: ["清潔感あるトイレ", "温水洗浄便座"],
        バルコニー: ["広々バルコニー", "南向きバルコニー"],
        共用部: ["きれいな共用部", "清潔なエントランス"],
        周辺環境: ["生活便利な立地", "商業施設が近い"],
        その他: ["おすすめポイント", "詳細はお問合せを"],
      },
    },
    house: {
      label: "戸建て売買",
      focus:
        "一戸建ての外観・庭・駐車場・室内が中心。マンションの共用部表現は使わない。庭・カースペース・玄関ポーチなど戸建てらしい表現で。",
      categories: [
        "外観",
        "間取り",
        "リビング",
        "居間・リビング",
        "ダイニング",
        "キッチン",
        "洋室",
        "和室",
        "寝室",
        "子供部屋",
        "玄関",
        "廊下",
        "収納",
        "浴室",
        "洗面",
        "トイレ",
        "バルコニー",
        "庭",
        "駐車場",
        "周辺環境",
        "その他",
      ],
      templates: {
        外観: ["清潔感ある外観", "落ち着いた外観", "駐車スペース付き"],
        間取り: ["使いやすい間取り", "家事動線の良い間取"],
        リビング: ["明るいリビング", "広々リビング", "日当たり良好LDK"],
        "居間・リビング": ["南向きリビング", "明るい居間"],
        ダイニング: ["明るいダイニング", "リビング続きのDK"],
        キッチン: ["対面キッチン", "システムキッチン", "食洗機付きキッチン"],
        洋室: ["収納付き洋室", "明るい洋室"],
        和室: ["落ち着いた和室", "続き間の和室"],
        寝室: ["落ち着いた寝室", "収納付き寝室"],
        子供部屋: ["明るい子ども部屋", "成長に合う部屋"],
        玄関: ["明るい玄関", "収納付き玄関"],
        廊下: ["明るい廊下", "動線の良い廊下"],
        収納: ["豊富な収納", "ウォークイン収納"],
        浴室: ["追い焚き付き浴室", "清潔感ある浴室"],
        洗面: ["三面鏡洗面台", "収納付き洗面"],
        トイレ: ["清潔感あるトイレ", "温水洗浄便座"],
        バルコニー: ["広々バルコニー", "南向きバルコニー"],
        庭: ["プライベート庭", "ガーデニング可"],
        駐車場: ["カースペースあり", "敷地内駐車場"],
        周辺環境: ["生活便利な立地", "閑静な住宅街"],
        その他: ["おすすめポイント", "詳細はお問合せを"],
      },
    },
    land: {
      label: "土地売買",
      focus:
        "土地・更地・接道・整形地・建築向きが中心。室内設備（キッチン・浴室など）の表現は使わない。建築条件や正確な面積・道路幅の断定はしない。",
      categories: [
        "現地",
        "前面道路",
        "整形地",
        "建築向き",
        "駐車場",
        "周辺環境",
        "その他",
      ],
      templates: {
        現地: ["整った現地", "明るく開放的な現地", "建築向きの土地"],
        前面道路: ["接道状況良好", "前面道路が広い"],
        整形地: ["使いやすい整形地", "プランニングしやすい"],
        建築向き: ["建築しやすい土地", "希望の家が建てやすい"],
        駐車場: ["駐車しやすい土地", "車寄せしやすい"],
        周辺環境: ["生活便利な立地", "閑静な住宅街"],
        その他: ["おすすめの土地", "詳細はお問合せを"],
      },
    },
  };

  function getPropertyTypeKey() {
    const value = propertyType?.value || "mansion";
    return PROPERTY_TYPES[value] ? value : "mansion";
  }

  function getPropertyTypeConfig() {
    return PROPERTY_TYPES[getPropertyTypeKey()];
  }

  function getCaptionCategories() {
    return getPropertyTypeConfig().categories;
  }

  function getCaptionTemplates() {
    return getPropertyTypeConfig().templates;
  }

  function rebuildCaptionCategories(preserveValue = true) {
    const prev = preserveValue ? captionCategory.value : "";
    const categories = getCaptionCategories();
    captionCategory.innerHTML = "";
    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = "選択してください";
    captionCategory.append(empty);
    categories.forEach((name) => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      captionCategory.append(opt);
    });
    if (prev && categories.includes(prev)) {
      captionCategory.value = prev;
    } else {
      captionCategory.value = "";
    }
    fillCaptionTemplates(captionCategory.value);
  }

  const cursor = document.createElement("div");
  cursor.className = "brush-cursor";
  Object.assign(cursor.style, {
    position: "fixed",
    pointerEvents: "none",
    border: "2px solid rgba(15, 122, 90, 0.85)",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "50",
    display: "none",
    mixBlendMode: "difference",
  });
  document.body.appendChild(cursor);

  function enableChrome(enabled) {
    resetBtn.disabled = !enabled;
    downloadBtn.disabled = !enabled;
    saveBtn.disabled = !enabled;
    toolsSection.hidden = !enabled;
    dropzone.hidden = enabled;
    canvasWrap.hidden = !enabled;
    zoomBar.hidden = !enabled;
    updateBatchButtons();
  }

  async function yieldToUi() {
    await new Promise((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(resolve));
    });
  }

  function setImportLoading(active, { title, detail, progress } = {}) {
    importBusy = active;
    if (fileInput) fileInput.disabled = active;
    if (uploadBtn) {
      uploadBtn.classList.toggle("is-loading", active);
      uploadBtn.setAttribute("aria-busy", active ? "true" : "false");
    }
    if (dropzone) dropzone.classList.toggle("is-busy", active);
    if (!loadingOverlay) return;

    loadingOverlay.hidden = !active;
    loadingOverlay.setAttribute("aria-busy", active ? "true" : "false");

    if (loadingTitle) {
      loadingTitle.textContent = title || "写真を読み込んでいます";
    }
    if (loadingDetail) {
      loadingDetail.textContent = detail || "";
    }
    if (loadingProgress && loadingProgressBar) {
      const showBar = active && progress != null;
      loadingProgress.hidden = !showBar;
      if (showBar) {
        const pct = Math.min(100, Math.max(0, Number(progress)));
        loadingProgressBar.style.width = `${pct}%`;
        loadingProgress.setAttribute("aria-valuenow", String(Math.round(pct)));
      }
    }
  }

  function updateBatchButtons() {
    const multi = photos.length > 1;
    downloadAllBtn.hidden = !multi;
    saveAllBtn.hidden = !multi;
    downloadAllBtn.disabled = !multi;
    saveAllBtn.disabled = !multi;
    if (batchResizeBox) {
      batchResizeBox.hidden = photos.length < 1;
    }
  }

  function getActivePhoto() {
    return photos.find((p) => p.id === activePhotoId) || null;
  }

  function cloneImageData(data) {
    return new ImageData(new Uint8ClampedArray(data.data), data.width, data.height);
  }

  function makeThumbUrl(img) {
    const size = 96;
    const scale = Math.min(size / img.naturalWidth, size / img.naturalHeight);
    const w = Math.max(1, Math.round(img.naturalWidth * scale));
    const h = Math.max(1, Math.round(img.naturalHeight * scale));
    const t = document.createElement("canvas");
    t.width = w;
    t.height = h;
    t.getContext("2d").drawImage(img, 0, 0, w, h);
    return t.toDataURL("image/jpeg", 0.7);
  }

  function snapshotCurrent() {
    persistCaptionFromUi();
    const photo = getActivePhoto();
    if (!photo || !baseImageData) return;
    photo.baseImageData = cloneImageData(baseImageData);
    photo.brightness = brightness.value;
    photo.contrast = contrast.value;
    photo.skyPreset = getActiveSkyPresetId();
    photo.skyStrength = skyStrength.value;
    photo.skyBrightness = skyBrightness.value;
    photo.skyTemperature = skyTemperature.value;
    photo.skyScale = skyScale.value;
    photo.skyShift = skyShift.value;
    photo.skyRange = skyRange.value;
    photo.skyEdgeFade = skyEdgeFade.value;
    photo.skyForeground = skyForeground.value;
    photo.skyKeepClouds = skyKeepClouds.checked;
  }

  function splitFileName(name) {
    const trimmed = String(name || "").trim();
    const match = trimmed.match(/^(.*?)(\.[^.]+)?$/);
    return {
      base: (match?.[1] || "").trim() || "untitled",
      ext: match?.[2] || "",
    };
  }

  function sanitizeBaseName(base) {
    return String(base || "")
      .trim()
      .replace(/[\\/:*?"<>|]+/g, "_")
      .replace(/\s+/g, " ")
      .slice(0, 80);
  }

  function syncNameField() {
    const photo = getActivePhoto();
    if (!photo) {
      nameField.hidden = true;
      photoNameInput.value = "";
      return;
    }
    nameField.hidden = false;
    const { base } = splitFileName(photo.name);
    photoNameInput.value = base;
  }

  function fillCaptionTemplates(category) {
    captionTemplate.innerHTML = "";
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = category
      ? "定型文を選んで挿入"
      : "先にカテゴリを選んでください";
    captionTemplate.append(placeholder);

    const list = getCaptionTemplates()[category] || [];
    list.forEach((text, i) => {
      const body = clampCaptionBody(text);
      if (!body) return;
      const opt = document.createElement("option");
      opt.value = body;
      const full = withCaptionPrefix(body);
      opt.textContent = `${i + 1}. ${full}`;
      captionTemplate.append(opt);
    });
  }

  function charLen(text) {
    return Array.from(String(text || "")).length;
  }

  function clampCaptionBody(text) {
    return Array.from(String(text || "").trim())
      .slice(0, CAPTION_BODY_MAX)
      .join("");
  }

  function clampCaption(text) {
    return clampCaptionBody(text);
  }

  function stripCaptionPrefix(text) {
    return String(text || "")
      .replace(/^《杏栄》\s*/, "")
      .replace(/^【杏栄】\s*/, "")
      .trim();
  }

  function withCaptionPrefix(text) {
    const body = clampCaptionBody(stripCaptionPrefix(text));
    const full = body ? `${CAPTION_PREFIX}${body}` : CAPTION_PREFIX;
    return Array.from(full).slice(0, CAPTION_MAX_LEN).join("");
  }

  function updateCaptionCount() {
    const label = document.getElementById("captionCountLabel");
    if (!label) return;
    label.textContent = String(charLen(withCaptionPrefix(captionInput.value)));
  }

  function formatCaption(category, body) {
    const text = clampCaptionBody(stripCaptionPrefix(body));
    if (!category) return text;
    if (!text) return clampCaptionBody(category);
    if (text.startsWith("【")) return clampCaptionBody(text);
    return text;
  }

  function syncCaptionField() {
    const photo = getActivePhoto();
    if (!photo) {
      captionBox.hidden = true;
      captionCategory.value = "";
      captionInput.value = "";
      fillCaptionTemplates("");
      updateCaptionCount();
      return;
    }
    captionBox.hidden = false;
    captionCategory.value = photo.captionCategory || "";
    captionInput.value = clampCaptionBody(stripCaptionPrefix(photo.caption || ""));
    fillCaptionTemplates(photo.captionCategory || "");
    updateCaptionCount();
  }

  function persistCaptionFromUi() {
    const photo = getActivePhoto();
    if (!photo) return;
    photo.captionCategory = captionCategory.value || "";
    photo.caption = clampCaptionBody(stripCaptionPrefix(captionInput.value));
    if (captionInput.value !== photo.caption) {
      captionInput.value = photo.caption;
      updateCaptionCount();
    }
  }

  function applyCaptionTemplate() {
    const photo = getActivePhoto();
    if (!photo) return;
    const category = captionCategory.value;
    const body = captionTemplate.value;
    if (!category || !body) return;
    const next = clampCaptionBody(stripCaptionPrefix(body));
    captionInput.value = next;
    photo.captionCategory = category;
    photo.caption = next;
    captionTemplate.value = "";
    updateCaptionCount();
    renderGallery();
    showToast("定型文を挿入しました");
  }

  async function copyText(text, okMessage) {
    const value = String(text || "").trim();
    if (!value) {
      notifyError("コピーする内容がありません");
      return false;
    }
    try {
      await navigator.clipboard.writeText(value);
      showToast(okMessage);
      return true;
    } catch (err) {
      console.warn(err);
      notifyError("コピーに失敗しました");
      return false;
    }
  }

  function buildCaptionsExport() {
    snapshotCurrent();
    persistCaptionFromUi();
    return photos
      .map((photo, i) => {
        const caption = photo.caption?.trim()
          ? withCaptionPrefix(photo.caption)
          : "（未入力）";
        return `${i + 1}. ${photo.name}\n${caption}`;
      })
      .join("\n\n");
  }

  function buildCaptionsPlainList() {
    snapshotCurrent();
    persistCaptionFromUi();
    return photos
      .map((photo) => (photo.caption || "").trim())
      .filter(Boolean)
      .map((caption) => withCaptionPrefix(caption))
      .join("\n");
  }

  const GEMINI_KEY_STORAGE = "lumen-gemini-api-key";
  const PROPERTY_ADDRESS_STORAGE = "lumen-property-address";
  const WATERMARK_STORAGE = "lumen-watermark-enabled";
  const WATERMARK_SRC = "assets/kyouei-watermark.png";

  /** @type {HTMLImageElement | null} */
  let watermarkImage = null;
  let watermarkLoadPromise = null;
  const GEMINI_MODELS = [
    "gemini-2.5-flash",
    "gemini-2.0-flash",
    "gemini-flash-latest",
    "gemini-2.5-flash-lite",
    "gemini-1.5-flash",
  ];

  const CATEGORY_VISUAL_HINTS = {
    外観: "外壁材・色、階数、バルコニー、エントランス、駐車場、植栽、周辺建物",
    間取り: "間取り図の部屋配置、水回り位置、収納、バルコニー位置（面積数値は書かない）",
    リビング: "採光・窓、床材、天井高、LDKの広がり、家具配置の余白",
    "居間・リビング": "採光・窓、床材、居間の広さ、居室の雰囲気",
    ダイニング: "テーブルスペース、キッチンとの位置関係、採光、収納",
    キッチン: "コンロ種別、食洗機、収納、カウンター形状（対面・L字等）、換気扇、窓",
    洋室: "窓・採光、床材、クローゼット・収納、部屋の広さ",
    和室: "畳、障子・襖、収納、続き間の有無",
    寝室: "採光、床材、収納、落ち着いた雰囲気",
    子供部屋: "採光、収納、床材、部屋の広さ",
    玄関: "収納、土間の広さ、明るさ、靴箱",
    廊下: "動線、明るさ、収納、床材",
    収納: "クローゼット、パントリー、棚の量、ウォークインの有無",
    浴室: "浴槽、シャワー、洗面一体型、窓、清潔感",
    洗面: "洗面台、三面鏡、収納、洗濯機置場",
    トイレ: "温水洗浄便座、収納、清潔感、窓",
    バルコニー: "広さ、方向感、目隠し、洗濯物干し",
    共用部: "エントランス、廊下、宅配ボックス、清潔感",
    庭: "庭の広さ、植栽、プライバシー、使いやすさ",
    駐車場: "車種が入るスペース、屋根の有無、舗装",
    現地: "地盤の状態、周囲の建物、日当たり、道路との関係",
    前面道路: "道路幅、舗装、歩道、角地かどうか（数値は書かない）",
    整形地: "敷地形状、建築しやすさ、周囲との関係",
    建築向き: "平坦さ、周辺環境、日当たり、建築イメージ",
    周辺環境: "商業施設、公園、学校、街路樹、街並み（距離の断定はしない）",
    その他: "写真の主題となる設備・空間・特徴",
  };

  function setAiStatus(message, isError = false) {
    if (!aiCaptionStatus) return;
    aiCaptionStatus.textContent = message || "";
    aiCaptionStatus.style.color = isError ? "var(--danger-soft)" : "var(--muted)";
  }

  function getGeminiApiKey() {
    return (geminiApiKey.value || localStorage.getItem(GEMINI_KEY_STORAGE) || "").trim();
  }

  function saveGeminiApiKey() {
    const key = geminiApiKey.value.trim();
    if (key) localStorage.setItem(GEMINI_KEY_STORAGE, key);
    else localStorage.removeItem(GEMINI_KEY_STORAGE);
  }

  function setApiKeyStatus(message, { ok = false, error = false } = {}) {
    if (!apiKeyStatus) return;
    apiKeyStatus.textContent = message || "";
    apiKeyStatus.classList.toggle("is-ok", ok);
    apiKeyStatus.classList.toggle("is-error", error);
  }

  async function verifyGeminiApiKey() {
    saveGeminiApiKey();
    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      setApiKeyStatus("APIキーを入力してください", { error: true });
      showToast("APIキーを入力してください", { error: true });
      return false;
    }

    const prev = verifyApiKeyBtn.textContent;
    verifyApiKeyBtn.disabled = true;
    verifyApiKeyBtn.textContent = "確認中…";
    setApiKeyStatus("接続を確認しています…");

    try {
      // 生成は使わず models 一覧だけで確認（クォータ消費を抑える）
      const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`;
      const listRes = await fetch(listUrl);
      const listData = await listRes.json().catch(() => ({}));

      if (!listRes.ok) {
        const msg = listData?.error?.message || `HTTP ${listRes.status}`;
        throw new Error(explainGeminiError(msg, listData));
      }

      const models = Array.isArray(listData?.models) ? listData.models : [];
      const available = GEMINI_MODELS.find((name) =>
        models.some((m) => (m.name || "").includes(name))
      );
      const modelLabel = available || (models[0]?.name || "models").replace(/^models\//, "");

      setApiKeyStatus(`有効です（${modelLabel}）`, { ok: true });
      showToast("APIキーは有効です");
      return true;
    } catch (err) {
      console.warn(err);
      const msg = explainGeminiError(err);
      setApiKeyStatus(msg, { error: true });
      showToast(msg, { error: true });
      return false;
    } finally {
      verifyApiKeyBtn.disabled = false;
      verifyApiKeyBtn.textContent = prev;
    }
  }

  function canvasFromPhoto(photo) {
    return exportPhotoCanvas(photo, { watermark: false }) || photoSourceCanvas(photo);
  }

  function isWatermarkEnabled() {
    return watermarkEnabled ? watermarkEnabled.checked : true;
  }

  function loadWatermarkImage() {
    if (watermarkImage) return Promise.resolve(watermarkImage);
    if (watermarkLoadPromise) return watermarkLoadPromise;
    watermarkLoadPromise = new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        watermarkImage = img;
        resolve(img);
      };
      img.onerror = () => {
        watermarkLoadPromise = null;
        reject(new Error("ロゴ画像の読込に失敗しました"));
      };
      img.src = WATERMARK_SRC;
    });
    return watermarkLoadPromise;
  }

  function drawWatermarkOnCanvas(targetCanvas) {
    if (!isWatermarkEnabled() || !watermarkImage) return;
    const ctx2 = targetCanvas.getContext("2d");
    const w = targetCanvas.width;
    const h = targetCanvas.height;
    const shortEdge = Math.min(w, h);
    const logoW = clamp(shortEdge * 0.13, 64, 200);
    const aspect = watermarkImage.naturalWidth / watermarkImage.naturalHeight;
    const logoH = logoW / aspect;
    const margin = clamp(shortEdge * 0.022, 10, 28);
    ctx2.save();
    ctx2.globalAlpha = 0.58;
    ctx2.drawImage(watermarkImage, margin, margin, logoW, logoH);
    ctx2.restore();
  }

  function applyWatermarkToCanvas(canvas) {
    drawWatermarkOnCanvas(canvas);
    return canvas;
  }

  function saveWatermarkPreference() {
    localStorage.setItem(WATERMARK_STORAGE, isWatermarkEnabled() ? "1" : "0");
  }

  function restoreWatermarkPreference() {
    if (!watermarkEnabled) return;
    const saved = localStorage.getItem(WATERMARK_STORAGE);
    watermarkEnabled.checked = saved !== "0";
  }

  function imageToJpegBase64(sourceCanvas, maxEdge = 1536) {
    const scale = Math.min(1, maxEdge / Math.max(sourceCanvas.width, sourceCanvas.height));
    const w = Math.max(1, Math.round(sourceCanvas.width * scale));
    const h = Math.max(1, Math.round(sourceCanvas.height * scale));
    const out = document.createElement("canvas");
    out.width = w;
    out.height = h;
    const octx = out.getContext("2d");
    octx.fillStyle = "#ffffff";
    octx.fillRect(0, 0, w, h);
    octx.imageSmoothingEnabled = true;
    octx.imageSmoothingQuality = "high";
    octx.drawImage(sourceCanvas, 0, 0, w, h);
    const dataUrl = out.toDataURL("image/jpeg", 0.9);
    return dataUrl.split(",")[1];
  }

  function getPropertyAddress() {
    return (propertyAddress?.value || "").trim();
  }

  function savePropertyAddress() {
    const value = getPropertyAddress();
    if (value) localStorage.setItem(PROPERTY_ADDRESS_STORAGE, value);
    else localStorage.removeItem(PROPERTY_ADDRESS_STORAGE);
  }

  function buildCaptionPrompt(hintCategory, photoName = "") {
    const typeConfig = getPropertyTypeConfig();
    const categories = getCaptionCategories().join(" / ");
    const address = getPropertyAddress();
    const addressBlock = address
      ? `物件住所: ${address}
※住所がある場合:
- カテゴリが「周辺環境」「外観」「現地」などのとき、エリアの一般的な生活利便を踏まえてよい
- 「徒歩○分」「○m」など正確な数値は書かない
- 室内カテゴリのときは住所より写真内容を優先する`
      : `物件住所: （未入力）`;

    const categoryBlock = hintCategory
      ? `指定カテゴリ: ${hintCategory}
※重要: このカテゴリの写真としてキャプションを書くこと。category は必ず「${hintCategory}」にする。
他の部屋・設備の話にすり替えない。写真がそのカテゴリに見えにくい場合も、指定カテゴリの観点で短く書く。`
      : `指定カテゴリ: （未指定）
カテゴリは写真内容から判断し、次のいずれかにする: ${categories}`;

    const visualHint = hintCategory
      ? CATEGORY_VISUAL_HINTS[hintCategory] || CATEGORY_VISUAL_HINTS["その他"]
      : "写真の主題となる空間・設備・景色を特定する";
    const visualBlock = `このカテゴリで写真を見るときの観察ポイント:
${visualHint}`;

    const templateExamples = hintCategory ? getCaptionTemplates()[hintCategory] : null;
    const exampleBlock = templateExamples?.length
      ? `文体の参考（写真の内容と一致する場合のみ。無理に使わない）:
${templateExamples.map((t) => `・${t}`).join("\n")}`
      : "";

    const fileBlock = photoName
      ? `写真ファイル名（参考・断定しない）: ${photoName}`
      : "";

    return `添付写真を注意深く観察し、不動産登録サイト用の短いキャプションを作成してください。

物件種別: ${typeConfig.label}
種別の注意: ${typeConfig.focus}

${categoryBlock}
${visualBlock}
${exampleBlock}
${fileBlock}
${addressBlock}

作業手順（必ず守る）:
1. 写真に実際に写っているものだけを observation に列挙する（推測・一般論は書かない）
2. observation を根拠に caption を1つ作る
3. 写っていない設備・特徴は caption に入れない（例: 食洗機が見えなければ「食洗機付き」と書かない）

出力ルール:
1. 必ず次のJSONのみを返す（前後に説明文やコードフェンスを付けない）
{"category":"カテゴリ名","observation":"写真で確認できた事実を短く","caption":"本文のみ（《杏栄》なし）"}
2. category は指定があればそのカテゴリ。なければ次のいずれか: ${categories}
3. caption は日本語。先頭の《杏栄》（4文字）を含めた合計が20文字以内になるよう、本文は最大${CAPTION_BODY_MAX}文字
4. 【カテゴリ】や■、《杏栄》は付けない。名詞句・短いフレーズのみ
5. 指定カテゴリと物件種別に合わない表現は禁止
6. 誇大表現・虚偽（正確な駅距離・面積・価格など）は禁止
7. 句読点や「です・ます」はなるべく使わず、コンパクトに
8. caption に「《杏栄》」は付けない（システム側で付与する）`;
  }

  function parseCaptionResponse(text) {
    const categories = getCaptionCategories();
    const raw = String(text || "").trim();
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        const data = JSON.parse(jsonMatch[0]);
        let category = String(data.category || "").trim();
        let caption = clampCaptionBody(stripCaptionPrefix(data.caption || ""));
        if (!categories.includes(category)) {
          const found = categories.find((c) => category.includes(c) || caption.includes(c));
          category = found || "その他";
        }
        if (!caption) throw new Error("empty caption");
        caption = clampCaptionBody(caption.replace(/^【[^】]*】\s*/, "").replace(/^■\s*/g, ""));
        return { category, caption };
      } catch (_) {
        /* fallback below */
      }
    }

    const cleaned = clampCaptionBody(
      stripCaptionPrefix(
        raw
          .replace(/^```(?:json)?\s*|\s*```$/g, "")
          .replace(/^【[^】]*】\s*/, "")
          .replace(/^■\s*/g, "")
          .trim()
      )
    );
    if (!cleaned) throw new Error("empty response");
    const category =
      categories.find((c) => cleaned.includes(c)) ||
      categories.find((c) => raw.includes(c)) ||
      "その他";
    return { category, caption: cleaned };
  }

  function explainGeminiError(err, data) {
    const msg = String(err?.message || data?.error?.message || err || "生成に失敗しました");
    if (/API key not valid|API_KEY_INVALID|invalid api key/i.test(msg)) {
      return "APIキーが無効です。Google AI Studioでキーを再発行してください";
    }
    if (/API_KEY_HTTP_REFERRER_BLOCKED|referer|referrer/i.test(msg)) {
      return "APIキーの制限でブロックされています。キー制限を「なし」にするか、http://127.0.0.1:5173/* を許可してください";
    }
    if (/PERMISSION_DENIED|403/i.test(msg) && /key/i.test(msg)) {
      return "APIキーに権限がありません。Generative Language API が有効か確認してください";
    }
    if (/RESOURCE_EXHAUSTED|quota|rate limit|429/i.test(msg)) {
      return "利用上限に達しています。1〜2分待って再試行するか、AI Studioの無料枠・課金設定を確認してください";
    }
    if (/Failed to fetch|NetworkError|Load failed|CORS/i.test(msg)) {
      return "ネットワークエラーです。ネット接続、またはブラウザの拡張機能によるブロックを確認してください";
    }
    if (/not found|NOT_FOUND|404/i.test(msg)) {
      return "利用可能なモデルが見つかりませんでした。APIキーのプロジェクト設定を確認してください";
    }
    if (/SAFETY|blockReason|blocked/i.test(msg)) {
      return "安全フィルターで応答が拒否されました。別の写真で試してください";
    }
    if (/empty caption|本文が返りません/i.test(msg)) {
      return "AIの応答を解釈できませんでした。もう一度生成してください";
    }
    return msg.length > 160 ? `${msg.slice(0, 160)}…` : msg;
  }

  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function callGeminiCaption(base64Jpeg, hintCategory, apiKey, photoName = "") {
    const prompt = buildCaptionPrompt(hintCategory, photoName);
    const baseBody = {
      systemInstruction: {
        parts: [
          {
            text: "あなたは日本の不動産物件写真のキャプション専門家です。写真に写っている事実だけを根拠に、短く正確な日本語キャプションを作ります。推測や一般論で設備の有無を断定しません。",
          },
        ],
      },
      contents: [
        {
          parts: [
            { inline_data: { mime_type: "image/jpeg", data: base64Jpeg } },
            { text: prompt },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 384,
      },
    };

    let lastError = null;
    for (const model of GEMINI_MODELS) {
      for (const useJson of [true, false]) {
        let rateRetries = 0;
        while (rateRetries < 2) {
          try {
            const body = {
              ...baseBody,
              generationConfig: useJson
                ? { ...baseBody.generationConfig, responseMimeType: "application/json" }
                : { ...baseBody.generationConfig },
            };
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
            const res = await fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
              const msg = data?.error?.message || `HTTP ${res.status}`;
              lastError = new Error(explainGeminiError(msg, data));
              if (res.status === 429 || /RESOURCE_EXHAUSTED|quota|rate/i.test(msg)) {
                rateRetries += 1;
                if (rateRetries < 2) {
                  setAiStatus(`利用上限のため待機中…（${rateRetries}/1）`);
                  await sleep(20000);
                  continue;
                }
                throw lastError;
              }
              if (res.status === 404 || /not found|not supported|NOT_FOUND/i.test(msg)) break;
              if (/responseMimeType|Unknown name|invalid argument/i.test(msg) && useJson) {
                break; // JSON指定なしで再試行（外側ループ）
              }
              if (res.status === 401 || res.status === 403 || /API key|permission|referr/i.test(msg)) {
                throw lastError;
              }
              break;
            }

            const blockReason = data?.promptFeedback?.blockReason;
            if (blockReason) {
              throw new Error(explainGeminiError(`blocked:${blockReason}`, data));
            }

            const candidate = data?.candidates?.[0];
            const finish = candidate?.finishReason || "";
            if (/SAFETY|RECITATION|BLOCK/i.test(finish)) {
              throw new Error(explainGeminiError(`SAFETY:${finish}`, data));
            }

            const text = candidate?.content?.parts?.map((p) => p.text || "").join("") || "";
            if (!text) {
              lastError = new Error(explainGeminiError("AIから本文が返りませんでした", data));
              break;
            }
            return parseCaptionResponse(text);
          } catch (err) {
            lastError = err instanceof Error ? err : new Error(explainGeminiError(err));
            if (/APIキー|制限|利用上限|権限|ネットワーク|安全フィルター/i.test(lastError.message)) {
              throw lastError;
            }
            break;
          }
        }
        // useJson true で JSON非対応なら false へ
        if (lastError && /responseMimeType|Unknown name|invalid argument/i.test(lastError.message) && useJson) {
          continue;
        }
        if (lastError && /利用上限/i.test(lastError.message)) throw lastError;
      }
    }
    throw lastError || new Error("生成に失敗しました");
  }

  async function generateCaptionForPhoto(photo, { syncUi = false, requireCategory = true } = {}) {
    const apiKey = getGeminiApiKey();
    if (!apiKey) throw new Error("Gemini APIキーを入力してください");

    const category =
      (syncUi ? captionCategory.value : "") ||
      photo.captionCategory ||
      "";
    if (requireCategory && !category) {
      throw new Error("先にカテゴリを選んでから生成してください");
    }

    const source = canvasFromPhoto(photo);
    const base64 = imageToJpegBase64(source, 1536);
    const result = await callGeminiCaption(base64, category, apiKey, photo.name || "");

    // ユーザー指定カテゴリを優先して固定
    photo.captionCategory = category || result.category;
    photo.caption = clampCaptionBody(stripCaptionPrefix(result.caption));

    if (syncUi && photo.id === activePhotoId) {
      captionCategory.value = photo.captionCategory;
      captionInput.value = photo.caption;
      fillCaptionTemplates(photo.captionCategory);
      updateCaptionCount();
    }
    return result;
  }

  async function generateActiveCaption() {
    const photo = getActivePhoto();
    if (!photo) return;
    persistCaptionFromUi();
    if (!captionCategory.value) {
      const msg = "先にカテゴリを選んでから生成してください";
      setAiStatus(msg, true);
      notifyError(msg);
      captionCategory.focus();
      return;
    }

    saveGeminiApiKey();
    const prev = generateCaptionBtn.textContent;
    generateCaptionBtn.disabled = true;
    generateAllCaptionsBtn.disabled = true;
    generateCaptionBtn.textContent = "生成中…";
    setAiStatus(`「${captionCategory.value}」として生成中…`);

    try {
      await generateCaptionForPhoto(photo, { syncUi: true, requireCategory: true });
      renderGallery();
      setAiStatus("キャプションを生成しました");
      showToast("キャプションを生成しました");
    } catch (err) {
      console.warn(err);
      const msg = explainGeminiError(err);
      setAiStatus(msg, true);
      notifyError(msg);
    } finally {
      generateCaptionBtn.disabled = false;
      generateAllCaptionsBtn.disabled = false;
      generateCaptionBtn.textContent = prev;
    }
  }

  async function generateAllCaptions() {
    if (!photos.length) return;
    persistCaptionFromUi();
    saveGeminiApiKey();
    if (!getGeminiApiKey()) {
      notifyError("Gemini APIキーを入力してください");
      setAiStatus("APIキーが必要です", true);
      return;
    }

    const missing = photos.filter((p) => {
      const cat = p.id === activePhotoId ? captionCategory.value || p.captionCategory : p.captionCategory;
      return !cat;
    });
    if (missing.length) {
      const msg = `カテゴリ未設定が ${missing.length} 枚あります。各写真でカテゴリを選んでから全生成してください`;
      setAiStatus(msg, true);
      notifyError(msg);
      return;
    }

    snapshotCurrent();
    const prev = generateAllCaptionsBtn.textContent;
    generateCaptionBtn.disabled = true;
    generateAllCaptionsBtn.disabled = true;

    let ok = 0;
    let failed = 0;

    try {
      for (let i = 0; i < photos.length; i += 1) {
        const photo = photos[i];
        const cat =
          photo.id === activePhotoId
            ? captionCategory.value || photo.captionCategory
            : photo.captionCategory;
        generateAllCaptionsBtn.textContent = `${i + 1}/${photos.length}`;
        setAiStatus(`生成中… ${i + 1}/${photos.length}（${cat} / ${photo.name}）`);
        try {
          photo.captionCategory = cat;
          await generateCaptionForPhoto(photo, {
            syncUi: photo.id === activePhotoId,
            requireCategory: true,
          });
          ok += 1;
        } catch (err) {
          console.warn(err);
          failed += 1;
        }
        if (i < photos.length - 1) await sleep(2500);
      }
      renderGallery();
      syncCaptionField();
      const msg =
        failed > 0 ? `${ok}枚生成（${failed}枚失敗）` : `${ok}枚のキャプションを生成しました`;
      setAiStatus(msg, failed > 0);
      showToast(msg);
    } finally {
      generateCaptionBtn.disabled = false;
      generateAllCaptionsBtn.disabled = false;
      generateAllCaptionsBtn.textContent = prev;
    }
  }

  function renamePhoto(id, nextBase, { silent = false } = {}) {
    const photo = photos.find((p) => p.id === id);
    if (!photo) return false;
    const { ext } = splitFileName(photo.name);
    const base = sanitizeBaseName(nextBase);
    if (!base) {
      if (!silent) notifyError("名前を入力してください");
      syncNameField();
      return false;
    }
    const nextName = `${base}${ext || ".jpg"}`;
    if (nextName === photo.name) {
      syncNameField();
      return false;
    }
    photo.name = nextName;
    if (photo.id === activePhotoId) {
      fileHint.textContent = photo.name;
      syncNameField();
    }
    renderGallery();
    if (!silent) showToast(`「${photo.name}」に変更しました`);
    return true;
  }

  function applyActivePhotoName() {
    const photo = getActivePhoto();
    if (!photo) return;
    renamePhoto(photo.id, photoNameInput.value);
  }

  function renderGallery() {
    const hasPhotos = photos.length > 0;
    gallery.hidden = !hasPhotos;
    galleryCount.textContent = `${photos.length}枚`;
    galleryList.innerHTML = "";

    photos.forEach((photo, index) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `gallery-item${photo.id === activePhotoId ? " is-active" : ""}${
        photo.caption ? " has-caption" : ""
      }`;
      btn.dataset.id = photo.id;

      const img = document.createElement("img");
      img.className = "gallery-thumb";
      img.src = photo.thumbUrl;
      img.alt = "";

      const meta = document.createElement("div");
      meta.className = "gallery-meta";
      const name = document.createElement("span");
      name.className = "gallery-name";
      name.textContent = photo.name;
      name.title = "ダブルクリックで名前を変更";
      name.addEventListener("dblclick", (e) => {
        e.preventDefault();
        e.stopPropagation();
        startInlineRename(photo, name);
      });
      const size = document.createElement("span");
      size.className = "gallery-size";
      const w = photo.baseImageData?.width || photo.sourceImage.naturalWidth;
      const h = photo.baseImageData?.height || photo.sourceImage.naturalHeight;
      size.textContent = `${index + 1}. ${w} × ${h}`;
      meta.append(name, size);
      if (photo.caption) {
        const cap = document.createElement("span");
        cap.className = "gallery-caption-preview";
        cap.textContent = withCaptionPrefix(photo.caption);
        meta.append(cap);
      }

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "gallery-remove";
      remove.setAttribute("aria-label", `${photo.name}を削除`);
      remove.textContent = "×";
      remove.addEventListener("click", (e) => {
        e.stopPropagation();
        removePhoto(photo.id);
      });

      btn.append(img, meta, remove);
      btn.addEventListener("click", () => selectPhoto(photo.id));
      li.append(btn);
      galleryList.append(li);
    });

    syncNameField();
    syncCaptionField();
    updateBatchButtons();
  }

  function startInlineRename(photo, nameEl) {
    if (nameEl.querySelector("input")) return;
    const { base } = splitFileName(photo.name);
    const input = document.createElement("input");
    input.type = "text";
    input.className = "gallery-name-input";
    input.value = base;
    input.setAttribute("aria-label", "名前を変更");
    nameEl.textContent = "";
    nameEl.classList.add("is-editing");
    nameEl.append(input);
    input.focus();
    input.select();

    let finished = false;
    const finish = (commit) => {
      if (finished) return;
      finished = true;
      if (commit) renamePhoto(photo.id, input.value);
      else renderGallery();
    };

    input.addEventListener("keydown", (e) => {
      e.stopPropagation();
      if (e.key === "Enter") {
        e.preventDefault();
        finish(true);
      } else if (e.key === "Escape") {
        e.preventDefault();
        finish(false);
      }
    });
    input.addEventListener("click", (e) => e.stopPropagation());
    input.addEventListener("blur", () => finish(true));
  }

  function clearEditor() {
    setImportLoading(false);
    sourceImage = null;
    baseImageData = null;
    skyMaskCache = { key: "", mask: null };
    activePhotoId = null;
    cropRect = null;
    previewAngle = 0;
    rotateAngle.value = "0";
    brightness.value = "0";
    contrast.value = "0";
    skyStrength.value = "0";
    skyBrightness.value = "0";
    skyTemperature.value = "0";
    skyScale.value = "100";
    skyShift.value = "0";
    skyRange.value = "55";
    skyEdgeFade.value = "50";
    skyForeground.value = "0";
    skyKeepClouds.checked = true;
    setActiveSkyPresetId(DEFAULT_SKY_PRESET);
    updateLightLabels();
    updateSkyLabels();
    updateSkyPresetActive();
    updateRotateLabel();
    canvas.width = 0;
    canvas.height = 0;
    enableChrome(false);
    fileHint.textContent = "複数選択可 · JPEG / PNG / WEBP";
    nameField.hidden = true;
    photoNameInput.value = "";
    captionBox.hidden = true;
    captionCategory.value = "";
    captionInput.value = "";
    fillCaptionTemplates("");
    renderGallery();
  }

  function restorePhoto(photo) {
    sourceImage = photo.sourceImage;
    brightness.value = photo.brightness || "0";
    contrast.value = photo.contrast || "0";
    setActiveSkyPresetId(photo.skyPreset || DEFAULT_SKY_PRESET);
    skyStrength.value = photo.skyStrength || "0";
    skyBrightness.value = photo.skyBrightness || "0";
    skyTemperature.value = photo.skyTemperature || "0";
    skyScale.value = photo.skyScale || "100";
    skyShift.value = photo.skyShift || "0";
    skyRange.value = photo.skyRange || "55";
    skyEdgeFade.value = photo.skyEdgeFade ?? "50";
    skyForeground.value = photo.skyForeground || "0";
    skyKeepClouds.checked = photo.skyKeepClouds !== false;
    previewAngle = 0;
    rotateAngle.value = "0";
    updateLightLabels();
    updateSkyLabels();
    updateSkyPresetActive();
    updateRotateLabel();

    if (photo.baseImageData) {
      const data = cloneImageData(photo.baseImageData);
      canvas.width = data.width;
      canvas.height = data.height;
      ctx.putImageData(data, 0, 0);
      baseImageData = data;
      skyMaskCache = { key: "", mask: null };
      aspectRatio = canvas.width / canvas.height;
      resizeWidth.value = String(canvas.width);
      resizeHeight.value = String(canvas.height);
      initCropRect();
      renderEffects();
      requestAnimationFrame(() => fitView());
    } else {
      setCanvasFromImage(photo.sourceImage, photo.sourceImage.naturalWidth, photo.sourceImage.naturalHeight);
      photo.baseImageData = cloneImageData(baseImageData);
    }

    enableChrome(true);
    fileHint.textContent = photo.name;
    setTool("resize");
    renderGallery();
  }

  function selectPhoto(id) {
    if (id === activePhotoId) return;
    persistCaptionFromUi();
    snapshotCurrent();
    const photo = photos.find((p) => p.id === id);
    if (!photo) return;
    activePhotoId = id;
    restorePhoto(photo);
  }

  function removePhoto(id) {
    const index = photos.findIndex((p) => p.id === id);
    if (index < 0) return;
    const wasActive = activePhotoId === id;
    photos.splice(index, 1);

    if (!photos.length) {
      clearEditor();
      return;
    }

    if (wasActive) {
      const next = photos[Math.min(index, photos.length - 1)];
      activePhotoId = next.id;
      restorePhoto(next);
    } else {
      renderGallery();
    }
  }

  function clearAllPhotos() {
    photos = [];
    clearEditor();
  }

  function isImageFile(file) {
    if (!file) return false;
    if (file.type && file.type.startsWith("image/")) return true;
    return IMAGE_FILE_RE.test(String(file.name || ""));
  }

  function isHeicFile(file) {
    const type = String(file?.type || "").toLowerCase();
    const name = String(file?.name || "").toLowerCase();
    return type.includes("heic") || type.includes("heif") || /\.heic$|\.heif$/.test(name);
  }

  function capImageDimensions(width, height, maxEdge = MAX_IMAGE_EDGE) {
    const w = Math.max(1, Math.round(width));
    const h = Math.max(1, Math.round(height));
    const maxDim = Math.max(w, h);
    if (maxDim <= maxEdge) return { width: w, height: h };
    const scale = maxEdge / maxDim;
    return {
      width: Math.max(1, Math.round(w * scale)),
      height: Math.max(1, Math.round(h * scale)),
    };
  }

  function readImageFile(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = async () => {
        try {
          if (img.decode) await img.decode();
          URL.revokeObjectURL(url);
          resolve(img);
        } catch (err) {
          URL.revokeObjectURL(url);
          reject(err);
        }
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("load failed"));
      };
      img.src = url;
    });
  }

  async function addFiles(fileList) {
    if (importBusy) return;

    const files = Array.from(fileList || []).filter(isImageFile);
    if (!files.length) {
      fileHint.textContent = "画像ファイルを選んでください（JPEG / PNG / WEBP など）";
      return;
    }

    const prevHint = fileHint.textContent;
    const added = [];
    let failed = 0;
    let heicFailed = 0;
    const total = files.length;

    setImportLoading(true, {
      title: "写真を読み込んでいます",
      detail: `0 / ${total} 枚`,
      progress: 2,
    });
    fileHint.textContent = `読み込み中… 0 / ${total} 枚`;

    try {
      snapshotCurrent();
      await yieldToUi();

      for (let i = 0; i < files.length; i += 1) {
        const file = files[i];
        const step = i + 1;
        setImportLoading(true, {
          title: "写真を読み込んでいます",
          detail: `${file.name}（${step} / ${total} 枚）`,
          progress: ((step - 0.65) / total) * 88,
        });
        fileHint.textContent = `読み込み中… ${step} / ${total} 枚`;
        await yieldToUi();

        try {
          const img = await readImageFile(file);
          photoSeq += 1;
          const photo = {
            id: `photo-${photoSeq}-${Date.now()}`,
            name: file.name,
            sourceImage: img,
            thumbUrl: makeThumbUrl(img),
            baseImageData: null,
            brightness: "0",
            contrast: "0",
            skyPreset: DEFAULT_SKY_PRESET,
            skyStrength: "0",
            skyBrightness: "0",
            skyTemperature: "0",
            skyScale: "100",
            skyShift: "0",
            skyRange: "55",
            skyEdgeFade: "50",
            skyForeground: "0",
            skyKeepClouds: true,
            captionCategory: "",
            caption: "",
          };
          photos.push(photo);
          added.push(photo);
        } catch (err) {
          console.warn(err);
          failed += 1;
          if (isHeicFile(file)) heicFailed += 1;
        }
      }

      if (!added.length) {
        const msg =
          heicFailed > 0
            ? "HEIC形式はChromeでは読み込めません。JPEGに変換するか、Safariで開いてください"
            : "画像を読み込めませんでした";
        notifyError(msg);
        fileHint.textContent = msg;
        return;
      }

      setImportLoading(true, {
        title: "写真を表示しています",
        detail: "プレビューを準備中…",
        progress: 94,
      });
      fileHint.textContent = "プレビューを準備中…";
      await yieldToUi();

      activePhotoId = added[0].id;
      try {
        restorePhoto(added[0]);
      } catch (err) {
        console.error(err);
        photos.splice(photos.length - added.length, added.length);
        activePhotoId = photos[0]?.id || null;
        if (activePhotoId) restorePhoto(getActivePhoto());
        else clearEditor();
        notifyError("写真の表示に失敗しました。サイズが大きすぎる可能性があります");
        fileHint.textContent = "写真の表示に失敗しました";
        return;
      }

      const msg =
        failed > 0
          ? `${added.length}枚追加（${failed}枚失敗）`
          : `${added.length}枚追加（合計 ${photos.length}枚）`;
      fileHint.textContent = msg;
      showToast(msg);
    } catch (err) {
      console.error(err);
      notifyError("写真の読み込みに失敗しました");
      fileHint.textContent = prevHint || "読み込みに失敗しました";
    } finally {
      setImportLoading(false);
    }
  }

  function getFitScale() {
    if (!canvas.width || !canvas.height) return 1;
    const availW = Math.max(40, canvasWrap.clientWidth - 40);
    const availH = Math.max(40, canvasWrap.clientHeight - 40);
    return Math.min(availW / canvas.width, availH / canvas.height);
  }

  function getDisplaySize() {
    const scale = getFitScale() * viewZoom;
    return {
      scale,
      width: Math.max(1, canvas.width * scale),
      height: Math.max(1, canvas.height * scale),
    };
  }

  function clampPan() {
    const { width, height } = getDisplaySize();
    const wrapW = canvasWrap.clientWidth;
    const wrapH = canvasWrap.clientHeight;
    const maxX = Math.max(0, (width - wrapW) / 2 + 48);
    const maxY = Math.max(0, (height - wrapH) / 2 + 48);
    panX = clamp(panX, -maxX, maxX);
    panY = clamp(panY, -maxY, maxY);
  }

  function updateZoomLabel() {
    zoomLabel.textContent = `${Math.round(viewZoom * 100)}%`;
  }

  function updatePanCursor() {
    const interactive = activeTool === "hide" || activeTool === "crop";
    const canPan = panMode || spaceHeld || !interactive;
    canvasWrap.classList.toggle("is-panning", canPan);
  }

  function applyView() {
    if (!canvas.width) return;
    const { width, height } = getDisplaySize();
    clampPan();
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.style.transform = `translate(calc(-50% + ${panX}px), calc(-50% + ${panY}px))`;
    updateZoomLabel();
  }

  function setViewZoom(next, anchor) {
    const prev = getDisplaySize();
    const wrapRect = canvasWrap.getBoundingClientRect();
    const centerX = wrapRect.left + wrapRect.width / 2;
    const centerY = wrapRect.top + wrapRect.height / 2;
    const ax = anchor ? anchor.clientX : centerX;
    const ay = anchor ? anchor.clientY : centerY;

    // Point under cursor relative to image center before zoom
    const relX = ax - centerX - panX;
    const relY = ay - centerY - panY;

    viewZoom = clamp(next, ZOOM_MIN, ZOOM_MAX);
    const nextSize = getDisplaySize();
    const ratio = nextSize.width / prev.width;

    panX = ax - centerX - relX * ratio;
    panY = ay - centerY - relY * ratio;
    applyView();
  }

  function zoomBy(factor, anchor) {
    setViewZoom(viewZoom * factor, anchor);
  }

  function fitView() {
    viewZoom = 1;
    panX = 0;
    panY = 0;
    applyView();
  }

  function nudgePan(dx, dy) {
    panX += dx;
    panY += dy;
    applyView();
  }

  function setCanvasFromImage(img, width, height) {
    const capped = capImageDimensions(width, height);
    canvas.width = capped.width;
    canvas.height = capped.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    baseImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    skyMaskCache = { key: "", mask: null };
    aspectRatio = canvas.width / canvas.height;
    resizeWidth.value = String(canvas.width);
    resizeHeight.value = String(canvas.height);
    previewAngle = 0;
    rotateAngle.value = "0";
    updateRotateLabel();
    initCropRect();
    renderEffects();
    const photo = getActivePhoto();
    if (photo) {
      photo.baseImageData = cloneImageData(baseImageData);
      photo.brightness = brightness.value;
      photo.contrast = contrast.value;
    }
    requestAnimationFrame(() => fitView());
  }

  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  }

  function getSkyPreset(id) {
    return SKY_PRESETS[id] || SKY_PRESETS[DEFAULT_SKY_PRESET];
  }

  let activeSkyPresetId = DEFAULT_SKY_PRESET;

  function getActiveSkyPresetId() {
    return activeSkyPresetId;
  }

  function setActiveSkyPresetId(id) {
    activeSkyPresetId = SKY_PRESETS[id] ? id : DEFAULT_SKY_PRESET;
    updateSkyPresetActive();
  }

  function resolvePhotoSkyPresetId(photo) {
    if (photo?.skyPreset && SKY_PRESETS[photo.skyPreset]) return photo.skyPreset;
    return DEFAULT_SKY_PRESET;
  }

  function buildSkyOptions({
    presetId,
    strength,
    brightness,
    temperature,
    scale,
    shift,
    range,
    edgeFade,
    foreground,
    keepClouds,
  }) {
    return {
      preset: getSkyPreset(presetId),
      strength: Number(strength || 0) / 100,
      brightness: Number(brightness || 0),
      temperature: Number(temperature || 0),
      scale: Number(scale || 100) / 100,
      shift: Number(shift || 0) / 100,
      range: Number(range || 55) / 100,
      edgeFade: Number(edgeFade ?? 50) / 100,
      foreground: Number(foreground || 0) / 100,
      keepClouds: keepClouds !== false,
    };
  }

  function hashNoise(x, y) {
    const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return n - Math.floor(n);
  }

  function softNoise(x, y) {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const fx = x - x0;
    const fy = y - y0;
    const ux = fx * fx * (3 - 2 * fx);
    const uy = fy * fy * (3 - 2 * fy);
    const a = hashNoise(x0, y0);
    const b = hashNoise(x0 + 1, y0);
    const c = hashNoise(x0, y0 + 1);
    const d = hashNoise(x0 + 1, y0 + 1);
    return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
  }

  /**
   * 空候補か（色だけ）。建物の外壁グレーは後段の「上からの連結」で除外する
   */
  function isSkyCandidate(r, g, b, yRatio, range) {
    if (yRatio > range) return false;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    if (g > r + 18 && g > b + 12 && sat > 0.12) return false;
    if (r > b + 18 && g > b + 8 && sat > 0.08 && lum < 0.93) return false;
    if (r > g + 28 && r > b + 28 && sat > 0.18) return false;
    if (r > b + 8 && r >= g - 2 && sat < 0.12 && lum < 0.88) return false;
    if (lum < 0.52) return false;

    const isBlueSky = b >= r - 2 && b >= g - 8 && b > 95 && sat >= 0.06 && sat <= 0.55;
    const minLum = 0.62 + yRatio * 0.16;
    const maxSat = 0.16 - yRatio * 0.08;
    const isOvercast =
      lum >= minLum &&
      sat <= Math.max(0.06, maxSat) &&
      b + 6 >= g &&
      g + 10 >= r &&
      b + 4 >= r &&
      Math.abs(r - g) < 22 &&
      Math.abs(g - b) < 24;
    const isPaleSky =
      lum > 0.8 &&
      sat < 0.08 &&
      b + 4 >= r &&
      Math.abs(r - g) < 16 &&
      Math.abs(g - b) < 16;

    if (isBlueSky || isOvercast || isPaleSky) return true;
    return false;
  }

  /** 置き換え用の新しい空（プリセット＋調整） */
  function sampleReplacementSky(xRatio, yRatio, opts) {
    const { preset, range, brightness, temperature, scale, shift } = opts;
    const span = Math.max(0.05, range * scale);
    const t = clamp((yRatio - shift) / span, 0, 1);
    const eased = t * t * (3 - 2 * t);
    let r = preset.zenith.r * (1 - eased) + preset.horizon.r * eased;
    let g = preset.zenith.g * (1 - eased) + preset.horizon.g * eased;
    let b = preset.zenith.b * (1 - eased) + preset.horizon.b * eased;

    if (preset.glow) {
      const glowT = Math.pow(1 - t, 1.6);
      const gs = preset.glow.strength * glowT;
      r = r * (1 - gs) + preset.glow.r * gs;
      g = g * (1 - gs) + preset.glow.g * gs;
      b = b * (1 - gs) + preset.glow.b * gs;
    }

    const warm = preset.warmth + temperature / 120;
    r += warm * 28;
    b -= warm * 28;
    r += temperature * 0.55;
    b -= temperature * 0.55;
    r += brightness * 1.8;
    g += brightness * 1.8;
    b += brightness * 1.8;

    if (preset.clouds > 0) {
      const n1 = softNoise(xRatio * 6.5, yRatio * 4.2);
      const n2 = softNoise(xRatio * 14 + 3.1, yRatio * 9.5 + 1.7);
      const cloud = Math.pow(Math.max(0, n1 * 0.65 + n2 * 0.35 - 0.42), 1.35);
      const amount = cloud * preset.clouds * (0.22 + t * 0.2);
      r = r * (1 - amount) + 248 * amount;
      g = g * (1 - amount) + 250 * amount;
      b = b * (1 - amount) + 252 * amount;
    }

    return {
      r: clamp(r, 0, 255),
      g: clamp(g, 0, 255),
      b: clamp(b, 0, 255),
    };
  }

  function skyMaskCacheKey(imageData, range, edgeFade) {
    const src = imageData.data;
    const len = src.length;
    return [
      imageData.width,
      imageData.height,
      Math.round(range * 100),
      Math.round(edgeFade * 100),
      src[0],
      src[1],
      src[2],
      src[Math.floor(len / 2)],
      src[len - 4],
      src[len - 3],
      src[len - 2],
    ].join(":");
  }

  /**
   * 画像上端から連結した空だけをマスク化（建物の同系色を除外）
   * 戻り値: Float32Array 0〜1（境界はぼかし）
   */
  function buildConnectedSkyMask(imageData, range, edgeFade) {
    const key = skyMaskCacheKey(imageData, range, edgeFade);
    if (skyMaskCache.key === key && skyMaskCache.mask) return skyMaskCache.mask;

    const w = imageData.width;
    const h = imageData.height;
    const src = imageData.data;
    const maxY = Math.min(h - 1, Math.floor(h * range));
    const candidate = new Uint8Array(w * h);

    for (let y = 0; y <= maxY; y += 1) {
      const yRatio = y / h;
      for (let x = 0; x < w; x += 1) {
        const i = (y * w + x) * 4;
        if (isSkyCandidate(src[i], src[i + 1], src[i + 2], yRatio, range)) {
          candidate[y * w + x] = 1;
        }
      }
    }

    const hard = new Uint8Array(w * h);
    const visited = new Uint8Array(w * h);
    const queue = new Int32Array(w * h);
    let qh = 0;
    let qt = 0;

    const seedRows = Math.max(3, Math.floor(h * 0.05));
    for (let y = 0; y < seedRows; y += 1) {
      for (let x = 0; x < w; x += 1) {
        const idx = y * w + x;
        if (!candidate[idx] || visited[idx]) continue;
        visited[idx] = 1;
        hard[idx] = 1;
        queue[qt++] = idx;
      }
    }

    while (qh < qt) {
      const idx = queue[qh++];
      const x = idx % w;
      const y = (idx - x) / w;
      const pi = idx * 4;
      const pr = src[pi];
      const pg = src[pi + 1];
      const pb = src[pi + 2];
      const plum = 0.299 * pr + 0.587 * pg + 0.114 * pb;

      const neigh = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      for (let n = 0; n < 4; n += 1) {
        const nx = x + neigh[n][0];
        const ny = y + neigh[n][1];
        if (nx < 0 || ny < 0 || nx >= w || ny > maxY) continue;
        const nidx = ny * w + nx;
        if (visited[nidx] || !candidate[nidx]) continue;

        const ni = nidx * 4;
        const nr = src[ni];
        const ng = src[ni + 1];
        const nb = src[ni + 2];
        const nlum = 0.299 * nr + 0.587 * ng + 0.114 * nb;
        const colorDist = Math.abs(nr - pr) + Math.abs(ng - pg) + Math.abs(nb - pb);
        if (Math.abs(nlum - plum) > 18) continue;
        if (colorDist > 48) continue;
        if (neigh[n][1] > 0) {
          if (nlum < plum - 6) continue;
          if (colorDist > 28) continue;
          if (nb + 2 < nr) continue;
        }

        visited[nidx] = 1;
        hard[nidx] = 1;
        queue[qt++] = nidx;
      }
    }

    const soft = new Float32Array(w * h);
    const radius = Math.max(1, Math.round(Math.min(w, h) * 0.003 * (1 + edgeFade * 1.8)));
    for (let y = 0; y <= maxY; y += 1) {
      for (let x = 0; x < w; x += 1) {
        let sum = 0;
        let count = 0;
        for (let dy = -radius; dy <= radius; dy += 1) {
          for (let dx = -radius; dx <= radius; dx += 1) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
            sum += hard[ny * w + nx];
            count += 1;
          }
        }
        soft[y * w + x] = count ? sum / count : 0;
      }
    }

    skyMaskCache = { key, mask: soft };
    return soft;
  }

  function blendSkyPixel(origR, origG, origB, yRatio, xRatio, maskValue, opts) {
    const { strength, keepClouds } = opts;
    if (strength <= 0 || maskValue <= 0.02) {
      return applyForegroundLight(origR, origG, origB, yRatio, maskValue, opts);
    }

    const m = clamp(maskValue * strength, 0, 1);
    let sky = sampleReplacementSky(xRatio, yRatio, opts);
    if (keepClouds) {
      const maxC = Math.max(origR, origG, origB);
      const minC = Math.min(origR, origG, origB);
      const sat = maxC ? (maxC - minC) / maxC : 0;
      const origLum = (0.299 * origR + 0.587 * origG + 0.114 * origB) / 255;
      const cloud = clamp((origLum - 0.48) / 0.42, 0, 1) * clamp(1 - sat * 2.2, 0, 1);
      const white = 248;
      sky = {
        r: sky.r * (1 - cloud) + white * cloud,
        g: sky.g * (1 - cloud) + 250 * cloud,
        b: sky.b * (1 - cloud) + 252 * cloud,
      };
      const skyLum = 0.299 * sky.r + 0.587 * sky.g + 0.114 * sky.b;
      const lumRatio = clamp((origLum * 255) / Math.max(1, skyLum), 0.75, 1.25);
      const preserve = cloud * 0.4;
      sky = {
        r: clamp(sky.r * (1 - preserve) + sky.r * lumRatio * preserve, 0, 255),
        g: clamp(sky.g * (1 - preserve) + sky.g * lumRatio * preserve, 0, 255),
        b: clamp(sky.b * (1 - preserve) + sky.b * lumRatio * preserve, 0, 255),
      };
    }

    const blended = {
      r: origR * (1 - m) + sky.r * m,
      g: origG * (1 - m) + sky.g * m,
      b: origB * (1 - m) + sky.b * m,
    };
    return applyForegroundLight(blended.r, blended.g, blended.b, yRatio, maskValue, opts);
  }

  function applyForegroundLight(r, g, b, yRatio, maskValue, opts) {
    if (opts.foreground <= 0 || maskValue > 0.2) return { r, g, b };
    const fg =
      opts.foreground * (1 - maskValue) * clamp((yRatio - 0.2) / 0.75, 0, 1);
    if (fg <= 0) return { r, g, b };
    const h = opts.preset.horizon;
    const mix = fg * 0.32;
    return {
      r: clamp(r * (1 - mix) + h.r * mix, 0, 255),
      g: clamp(g * (1 - mix) + h.g * mix, 0, 255),
      b: clamp(b * (1 - mix) + h.b * mix, 0, 255),
    };
  }

  function getSkyOptionsFromUi() {
    return buildSkyOptions({
      presetId: getActiveSkyPresetId(),
      strength: skyStrength.value,
      brightness: skyBrightness.value,
      temperature: skyTemperature.value,
      scale: skyScale.value,
      shift: skyShift.value,
      range: skyRange.value,
      edgeFade: skyEdgeFade.value,
      foreground: skyForeground.value,
      keepClouds: skyKeepClouds.checked,
    });
  }

  function getSkyOptionsFromPhoto(photo) {
    return buildSkyOptions({
      presetId: resolvePhotoSkyPresetId(photo),
      strength: photo.skyStrength,
      brightness: photo.skyBrightness,
      temperature: photo.skyTemperature,
      scale: photo.skyScale,
      shift: photo.skyShift,
      range: photo.skyRange,
      edgeFade: photo.skyEdgeFade,
      foreground: photo.skyForeground,
      keepClouds: photo.skyKeepClouds,
    });
  }

  function processLitPixels(imageData, dst, bright, contrastVal, skyOpts) {
    const w = imageData.width;
    const h = imageData.height;
    const src = imageData.data;
    const cFactor = (259 * (contrastVal + 255)) / (255 * (259 - contrastVal));
    const skyMask =
      skyOpts.strength > 0
        ? buildConnectedSkyMask(imageData, skyOpts.range, skyOpts.edgeFade)
        : null;

    for (let i = 0; i < src.length; i += 4) {
      let r = src[i];
      let g = src[i + 1];
      let b = src[i + 2];
      r = clamp(r + bright, 0, 255);
      g = clamp(g + bright, 0, 255);
      b = clamp(b + bright, 0, 255);
      r = clamp(cFactor * (r - 128) + 128, 0, 255);
      g = clamp(cFactor * (g - 128) + 128, 0, 255);
      b = clamp(cFactor * (b - 128) + 128, 0, 255);

      if (skyMask) {
        const pix = i / 4;
        const py = Math.floor(pix / w);
        const px = pix % w;
        const out = blendSkyPixel(r, g, b, py / h, px / w, skyMask[pix], skyOpts);
        r = out.r;
        g = out.g;
        b = out.b;
      } else if (skyOpts.foreground > 0) {
        const pix = i / 4;
        const py = Math.floor(pix / w);
        const out = applyForegroundLight(r, g, b, py / h, 0, skyOpts);
        r = out.r;
        g = out.g;
        b = out.b;
      }

      dst[i] = r;
      dst[i + 1] = g;
      dst[i + 2] = b;
      dst[i + 3] = src[i + 3];
    }
  }

  function buildLitCanvas() {
    if (!baseImageData) return null;
    const w = baseImageData.width;
    const h = baseImageData.height;
    const out = ctx.createImageData(w, h);
    processLitPixels(
      baseImageData,
      out.data,
      Number(brightness.value),
      Number(contrast.value),
      getSkyOptionsFromUi(),
    );
    const temp = document.createElement("canvas");
    temp.width = w;
    temp.height = h;
    temp.getContext("2d").putImageData(out, 0, 0);
    applyWatermarkToCanvas(temp);
    return temp;
  }
    const preset = getSkyPreset(presetId);
    const ctx2 = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    const img = ctx2.createImageData(w, h);
    const data = img.data;
    const opts = buildSkyOptions({
      presetId,
      strength: "100",
      brightness: "0",
      temperature: "0",
      scale: "100",
      shift: "0",
      range: "100",
      edgeFade: "50",
      foreground: "0",
      keepClouds: true,
    });
    for (let y = 0; y < h; y += 1) {
      for (let x = 0; x < w; x += 1) {
        const sky = sampleReplacementSky(x / w, y / h, opts);
        const i = (y * w + x) * 4;
        data[i] = sky.r;
        data[i + 1] = sky.g;
        data[i + 2] = sky.b;
        data[i + 3] = 255;
      }
    }
    ctx2.putImageData(img, 0, 0);
  }

  function renderSkyPresetGrid() {
    if (!skyPresetGrid) return;
    skyPresetGrid.innerHTML = "";
    SKY_PRESET_ORDER.forEach((id) => {
      const preset = getSkyPreset(id);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sky-preset-card";
      btn.dataset.preset = id;
      btn.setAttribute("role", "option");
      btn.setAttribute("aria-label", preset.name);
      btn.title = preset.name;

      const thumb = document.createElement("canvas");
      thumb.className = "sky-preset-thumb";
      thumb.width = 80;
      thumb.height = 48;
      drawSkyPresetThumb(id, thumb);

      const label = document.createElement("span");
      label.className = "sky-preset-name";
      label.textContent = preset.name;

      btn.append(thumb, label);
      btn.addEventListener("click", () => {
        setActiveSkyPresetId(id);
        if (Number(skyStrength.value) < 40) skyStrength.value = "90";
        onSkyControlChange();
        setTool("sky");
      });
      skyPresetGrid.append(btn);
    });
    updateSkyPresetActive();
  }

  function drawCropOverlay() {
    if (!cropRect || activeTool !== "crop") return;
    const { x, y, w, h } = cropRect;
    ctx.save();
    ctx.fillStyle = "rgba(20, 32, 26, 0.45)";
    ctx.fillRect(0, 0, canvas.width, y);
    ctx.fillRect(0, y + h, canvas.width, canvas.height - (y + h));
    ctx.fillRect(0, y, x, h);
    ctx.fillRect(x + w, y, canvas.width - (x + w), h);

    ctx.strokeStyle = "#fff";
    ctx.lineWidth = Math.max(2, canvas.width / 400);
    ctx.setLineDash([]);
    ctx.strokeRect(x + 0.5, y + 0.5, w, h);

    ctx.strokeStyle = "rgba(255,255,255,0.35)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + w / 3, y);
    ctx.lineTo(x + w / 3, y + h);
    ctx.moveTo(x + (2 * w) / 3, y);
    ctx.lineTo(x + (2 * w) / 3, y + h);
    ctx.moveTo(x, y + h / 3);
    ctx.lineTo(x + w, y + h / 3);
    ctx.moveTo(x, y + (2 * h) / 3);
    ctx.lineTo(x + w, y + (2 * h) / 3);
    ctx.stroke();

    const hs = Math.max(8, Math.min(18, Math.round(Math.min(w, h) * 0.04)));
    ctx.fillStyle = "#0f7a5a";
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    const points = [
      [x, y],
      [x + w / 2, y],
      [x + w, y],
      [x + w, y + h / 2],
      [x + w, y + h],
      [x + w / 2, y + h],
      [x, y + h],
      [x, y + h / 2],
    ];
    points.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.rect(px - hs / 2, py - hs / 2, hs, hs);
      ctx.fill();
      ctx.stroke();
    });
    ctx.restore();
  }

  function renderEffects() {
    if (!baseImageData) return;
    const lit = buildLitCanvas();
    if (!lit) return;

    const angle = previewAngle;
    if (Math.abs(angle) < 0.001) {
      if (canvas.width !== lit.width || canvas.height !== lit.height) {
        canvas.width = lit.width;
        canvas.height = lit.height;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(lit, 0, 0);
      drawCropOverlay();
      return;
    }

    const rad = (angle * Math.PI) / 180;
    const cos = Math.abs(Math.cos(rad));
    const sin = Math.abs(Math.sin(rad));
    const bbW = Math.ceil(lit.width * cos + lit.height * sin);
    const bbH = Math.ceil(lit.width * sin + lit.height * cos);
    if (canvas.width !== bbW || canvas.height !== bbH) {
      canvas.width = bbW;
      canvas.height = bbH;
    }
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, bbW, bbH);
    ctx.save();
    ctx.translate(bbW / 2, bbH / 2);
    ctx.rotate(rad);
    ctx.drawImage(lit, -lit.width / 2, -lit.height / 2);
    ctx.restore();
  }

  function initCropRect() {
    if (!baseImageData) return;
    const w = baseImageData.width;
    const h = baseImageData.height;
    const marginX = Math.round(w * 0.08);
    const marginY = Math.round(h * 0.08);
    cropRect = {
      x: marginX,
      y: marginY,
      w: Math.max(8, w - marginX * 2),
      h: Math.max(8, h - marginY * 2),
    };
    applyCropAspectConstraint(true);
  }

  function getCropAspectRatio() {
    const ratioVal = cropAspect.value;
    if (ratioVal === "free") return null;
    if (ratioVal === "current") return aspectRatio || null;
    const ratio = Number(ratioVal);
    return ratio > 0 ? ratio : null;
  }

  function applyCropAspectConstraint(fromCenter) {
    if (!cropRect) return;
    const ratio = getCropAspectRatio();
    if (!ratio) return;

    let { x, y, w, h } = cropRect;
    const cx = x + w / 2;
    const cy = y + h / 2;
    if (w / h > ratio) {
      w = h * ratio;
    } else {
      h = w / ratio;
    }
    w = Math.max(8, w);
    h = Math.max(8, h);
    if (fromCenter) {
      x = cx - w / 2;
      y = cy - h / 2;
    }
    cropRect = clampCropRect({ x, y, w, h });
  }

  function clampCropRect(rect) {
    const maxW = baseImageData.width;
    const maxH = baseImageData.height;
    let { x, y, w, h } = rect;
    w = clamp(w, 8, maxW);
    h = clamp(h, 8, maxH);
    x = clamp(x, 0, maxW - w);
    y = clamp(y, 0, maxH - h);
    return { x, y, w, h };
  }

  function hitCropHandle(px, py) {
    if (!cropRect) return null;
    const { x, y, w, h } = cropRect;
    const hs = CROP_HANDLE * (canvas.width / Math.max(1, canvas.getBoundingClientRect().width));
    const spots = [
      { mode: "nw", hx: x, hy: y },
      { mode: "n", hx: x + w / 2, hy: y },
      { mode: "ne", hx: x + w, hy: y },
      { mode: "e", hx: x + w, hy: y + h / 2 },
      { mode: "se", hx: x + w, hy: y + h },
      { mode: "s", hx: x + w / 2, hy: y + h },
      { mode: "sw", hx: x, hy: y + h },
      { mode: "w", hx: x, hy: y + h / 2 },
    ];
    for (const s of spots) {
      if (Math.abs(px - s.hx) <= hs && Math.abs(py - s.hy) <= hs) return s.mode;
    }
    if (px >= x && px <= x + w && py >= y && py <= y + h) return "move";
    return null;
  }

  function updateCropFromDrag(px, py) {
    if (!cropDrag || !cropRect) return;
    const dx = px - cropDrag.startX;
    const dy = py - cropDrag.startY;
    const o = cropDrag.orig;
    let { x, y, w, h } = o;
    const mode = cropDrag.mode;
    const ratio = getCropAspectRatio();

    if (mode === "move") {
      x = o.x + dx;
      y = o.y + dy;
    } else {
      if (mode.includes("n")) {
        y = o.y + dy;
        h = o.h - dy;
      }
      if (mode.includes("s")) {
        h = o.h + dy;
      }
      if (mode.includes("w")) {
        x = o.x + dx;
        w = o.w - dx;
      }
      if (mode.includes("e")) {
        w = o.w + dx;
      }
      if (w < 8) {
        if (mode.includes("w")) x = o.x + o.w - 8;
        w = 8;
      }
      if (h < 8) {
        if (mode.includes("n")) y = o.y + o.h - 8;
        h = 8;
      }
      if (ratio) {
        if (mode === "n" || mode === "s") {
          w = h * ratio;
          x = o.x + o.w / 2 - w / 2;
        } else if (mode === "e" || mode === "w") {
          h = w / ratio;
          y = o.y + o.h / 2 - h / 2;
        } else {
          // corner: dominate by the larger delta
          if (Math.abs(dx) * ratio > Math.abs(dy)) {
            h = w / ratio;
            if (mode.includes("n")) y = o.y + o.h - h;
          } else {
            w = h * ratio;
            if (mode.includes("w")) x = o.x + o.w - w;
          }
        }
      }
    }
    cropRect = clampCropRect({ x, y, w, h });
    renderEffects();
  }

  function commitBaseFromCanvas(sourceCanvas) {
    canvas.width = sourceCanvas.width;
    canvas.height = sourceCanvas.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sourceCanvas, 0, 0);
    baseImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    skyMaskCache = { key: "", mask: null };
    aspectRatio = canvas.width / canvas.height;
    resizeWidth.value = String(canvas.width);
    resizeHeight.value = String(canvas.height);
    previewAngle = 0;
    rotateAngle.value = "0";
    updateRotateLabel();
    initCropRect();
    renderEffects();
    const photo = getActivePhoto();
    if (photo) {
      photo.baseImageData = cloneImageData(baseImageData);
      photo.brightness = brightness.value;
      photo.contrast = contrast.value;
      renderGallery();
    }
    requestAnimationFrame(() => fitView());
  }

  function inscribedCropAfterRotate(srcW, srcH, angleDeg) {
    const ang = (Math.abs(angleDeg) * Math.PI) / 180;
    if (ang < 1e-4) return { width: srcW, height: srcH };
    const c = Math.cos(ang);
    const s = Math.sin(ang);
    // Largest axis-aligned rectangle inside rotated source
    let width = srcW * c - srcH * s;
    let height = srcH * c - srcW * s;
    if (width > 8 && height > 8) {
      return { width: Math.floor(width), height: Math.floor(height) };
    }
    // Fallback for larger angles
    width = srcW / (c + (srcH / srcW) * s);
    height = srcH / (c + (srcW / srcH) * s);
    return {
      width: Math.max(8, Math.floor(width)),
      height: Math.max(8, Math.floor(height)),
    };
  }

  function getCanvasPoint(event) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  }

  function mosaicAt(x, y) {
    if (!baseImageData) return;
    const radius = Number(brushSize.value);
    const block = Math.max(4, Number(mosaicSize.value));
    const w = canvas.width;
    const h = canvas.height;
    const data = baseImageData.data;
    const reach = radius + block * 0.5;
    const reach2 = reach * reach;

    const x0 = Math.max(0, Math.floor((x - radius) / block) * block);
    const y0 = Math.max(0, Math.floor((y - radius) / block) * block);
    const x1 = Math.min(w, Math.ceil((x + radius) / block) * block);
    const y1 = Math.min(h, Math.ceil((y + radius) / block) * block);

    for (let by = y0; by < y1; by += block) {
      for (let bx = x0; bx < x1; bx += block) {
        const cx = bx + Math.min(block, w - bx) / 2;
        const cy = by + Math.min(block, h - by) / 2;
        const dx = cx - x;
        const dy = cy - y;
        if (dx * dx + dy * dy > reach2) continue;

        const bx1 = Math.min(w, bx + block);
        const by1 = Math.min(h, by + block);
        let r = 0;
        let g = 0;
        let b = 0;
        let n = 0;

        for (let py = by; py < by1; py += 1) {
          for (let px = bx; px < bx1; px += 1) {
            const i = (py * w + px) * 4;
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            n += 1;
          }
        }

        if (!n) continue;
        r = Math.round(r / n);
        g = Math.round(g / n);
        b = Math.round(b / n);

        for (let py = by; py < by1; py += 1) {
          for (let px = bx; px < bx1; px += 1) {
            const i = (py * w + px) * 4;
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
          }
        }
      }
    }
  }

  function mosaicRect(rx, ry, rw, rh, blockOverride) {
    if (!baseImageData) return;
    const block = Math.max(4, blockOverride || Number(mosaicSize.value));
    const w = baseImageData.width;
    const h = baseImageData.height;
    const data = baseImageData.data;
    const x0 = Math.max(0, Math.floor(rx / block) * block);
    const y0 = Math.max(0, Math.floor(ry / block) * block);
    const x1 = Math.min(w, Math.ceil((rx + rw) / block) * block);
    const y1 = Math.min(h, Math.ceil((ry + rh) / block) * block);

    for (let by = y0; by < y1; by += block) {
      for (let bx = x0; bx < x1; bx += block) {
        const bx1 = Math.min(w, bx + block);
        const by1 = Math.min(h, by + block);
        let r = 0;
        let g = 0;
        let b = 0;
        let n = 0;
        for (let py = by; py < by1; py += 1) {
          for (let px = bx; px < bx1; px += 1) {
            const i = (py * w + px) * 4;
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            n += 1;
          }
        }
        if (!n) continue;
        r = Math.round(r / n);
        g = Math.round(g / n);
        b = Math.round(b / n);
        for (let py = by; py < by1; py += 1) {
          for (let px = bx; px < bx1; px += 1) {
            const i = (py * w + px) * 4;
            data[i] = r;
            data[i + 1] = g;
            data[i + 2] = b;
          }
        }
      }
    }
  }

  function expandBox(box, padRatio, imgW, imgH) {
    const padX = box.w * padRatio;
    const padY = box.h * padRatio;
    const x = Math.max(0, box.x - padX);
    const y = Math.max(0, box.y - padY);
    const x2 = Math.min(imgW, box.x + box.w + padX);
    const y2 = Math.min(imgH, box.y + box.h + padY);
    return { x, y, w: Math.max(1, x2 - x), h: Math.max(1, y2 - y) };
  }

  let tfModelsPromise = null;

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        if (existing.dataset.loaded === "1") {
          resolve();
          return;
        }
        if (existing.dataset.failed === "1") {
          existing.remove();
        } else {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener(
            "error",
            () => reject(new Error(`スクリプト読込失敗: ${src}`)),
            { once: true },
          );
          return;
        }
      }
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = () => {
        s.dataset.loaded = "1";
        resolve();
      };
      s.onerror = () => {
        s.dataset.failed = "1";
        s.remove();
        reject(new Error(`スクリプト読込失敗: ${src}`));
      };
      document.head.appendChild(s);
    });
  }

  async function ensureTfModels() {
    if (tfModelsPromise) return tfModelsPromise;
    tfModelsPromise = (async () => {
      await loadScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js");
      // blazeface@0.1.0 は CDN に dist が無いため 0.0.7 を使用
      await loadScript(
        "https://cdn.jsdelivr.net/npm/@tensorflow-models/blazeface@0.0.7/dist/blazeface.min.js",
      );
      await loadScript(
        "https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.2.3/dist/coco-ssd.min.js",
      );
      if (!window.blazeface || !window.cocoSsd) {
        throw new Error("検知モデルの読込に失敗しました");
      }
      const [faceModel, objectModel] = await Promise.all([
        window.blazeface.load({ maxFaces: 20 }),
        window.cocoSsd.load({ base: "lite_mobilenet_v2" }),
      ]);
      return { faceModel, objectModel };
    })().catch((err) => {
      tfModelsPromise = null;
      throw err;
    });
    return tfModelsPromise;
  }

  function photoToDetectCanvas(photo) {
    const src = canvasFromPhoto(photo);
    const maxEdge = 960;
    const scale = Math.min(1, maxEdge / Math.max(src.width, src.height));
    if (scale >= 0.999) return { canvas: src, scale: 1 };
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(src.width * scale));
    c.height = Math.max(1, Math.round(src.height * scale));
    const ctx2 = c.getContext("2d");
    ctx2.imageSmoothingEnabled = true;
    ctx2.imageSmoothingQuality = "high";
    ctx2.drawImage(src, 0, 0, c.width, c.height);
    return { canvas: c, scale };
  }

  async function detectPeopleBoxes(detectCanvas, scale, faceModel, objectModel) {
    const boxes = [];
    const inv = 1 / scale;

    try {
      const faces = await faceModel.estimateFaces(detectCanvas, false);
      faces.forEach((face) => {
        const [x1, y1] = face.topLeft;
        const [x2, y2] = face.bottomRight;
        boxes.push({
          type: "face",
          x: x1 * inv,
          y: y1 * inv,
          w: (x2 - x1) * inv,
          h: (y2 - y1) * inv,
        });
      });
    } catch (err) {
      console.warn(err);
    }

    try {
      const preds = await objectModel.detect(detectCanvas, 20, 0.45);
      preds.forEach((p) => {
        if (p.class !== "person") return;
        const [x, y, w, h] = p.bbox;
        // 顔検知漏れ向けに上半身（頭部付近）もモザイク
        boxes.push({
          type: "person-head",
          x: x * inv,
          y: y * inv,
          w: w * inv,
          h: h * inv * 0.38,
        });
      });
    } catch (err) {
      console.warn(err);
    }

    return boxes;
  }

  async function detectPlateBoxesLocal(detectCanvas, scale, objectModel) {
    const boxes = [];
    const inv = 1 / scale;
    try {
      const preds = await objectModel.detect(detectCanvas, 20, 0.4);
      preds.forEach((p) => {
        if (p.class !== "car" && p.class !== "truck" && p.class !== "bus") return;
        const [x, y, w, h] = p.bbox;
        // 車体下部をナンバー位置として推定
        boxes.push({
          type: "plate-est",
          x: (x + w * 0.15) * inv,
          y: (y + h * 0.62) * inv,
          w: w * 0.7 * inv,
          h: h * 0.22 * inv,
        });
      });
    } catch (err) {
      console.warn(err);
    }
    return boxes;
  }

  async function detectPlateBoxesGemini(photo) {
    const apiKey = getGeminiApiKey();
    if (!apiKey) return [];

    const source = canvasFromPhoto(photo);
    const base64 = imageToJpegBase64(source, 1024);
    const prompt = `この不動産写真から「車のナンバープレート」の位置だけを検出してください。
人物の顔は対象外です。
必ず次のJSONのみ返すこと:
{"plates":[{"x":0,"y":0,"w":0,"h":0}]}
座標は画像左上原点、ピクセル単位。写っていない場合は {"plates":[]} 。
推測で広く取りすぎない。プレート本体＋余白少しだけ。`;

    const body = {
      contents: [
        {
          parts: [
            { inline_data: { mime_type: "image/jpeg", data: base64 } },
            { text: prompt },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 512,
        responseMimeType: "application/json",
      },
    };

    let lastError = null;
    for (const model of GEMINI_MODELS) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          lastError = new Error(data?.error?.message || `HTTP ${res.status}`);
          if (res.status === 404) continue;
          if (res.status === 429) throw new Error(explainGeminiError(lastError.message));
          continue;
        }
        const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("") || "";
        const match = text.match(/\{[\s\S]*\}/);
        if (!match) return [];
        const parsed = JSON.parse(match[0]);
        const plates = Array.isArray(parsed.plates) ? parsed.plates : [];
        return plates
          .map((p) => ({
            type: "plate",
            x: Number(p.x) || 0,
            y: Number(p.y) || 0,
            w: Number(p.w) || 0,
            h: Number(p.h) || 0,
          }))
          .filter((p) => p.w > 4 && p.h > 4);
      } catch (err) {
        lastError = err;
        if (/利用上限|APIキー|制限/i.test(String(err?.message || ""))) throw err;
      }
    }
    if (lastError) console.warn(lastError);
    return [];
  }

  function applyBoxesToPhoto(photo, boxes) {
    const wasActive = photo.id === activePhotoId;
    if (!wasActive) {
      // 非表示写真: baseImageData を直接編集
      if (!photo.baseImageData) {
        const c = photoSourceCanvas(photo);
        photo.baseImageData = c.getContext("2d").getImageData(0, 0, c.width, c.height);
      }
    } else {
      snapshotCurrent();
    }

    const targetData = wasActive ? baseImageData : photo.baseImageData;
    if (!targetData) return 0;
    const imgW = targetData.width;
    const imgH = targetData.height;
    const savedBase = baseImageData;
    baseImageData = targetData;

    let count = 0;
    boxes.forEach((box) => {
      const pad = box.type === "face" ? 0.25 : box.type.startsWith("plate") ? 0.12 : 0.08;
      const b = expandBox(box, pad, imgW, imgH);
      const block =
        box.type === "face" || box.type.startsWith("plate")
          ? Math.max(8, Math.round(Math.min(b.w, b.h) / 6))
          : Math.max(10, Number(mosaicSize.value));
      mosaicRect(b.x, b.y, b.w, b.h, block);
      count += 1;
    });

    photo.baseImageData = cloneImageData(targetData);
    if (wasActive) {
      baseImageData = targetData;
      renderEffects();
      const active = getActivePhoto();
      if (active) {
        active.baseImageData = cloneImageData(baseImageData);
      }
    } else {
      baseImageData = savedBase;
    }
    return count;
  }

  async function autoMosaicPhoto(photo, { people, plates }) {
    const boxes = [];
    const { canvas: detectCanvas, scale } = photoToDetectCanvas(photo);

    if (people || plates) {
      const { faceModel, objectModel } = await ensureTfModels();
      if (people) {
        boxes.push(...(await detectPeopleBoxes(detectCanvas, scale, faceModel, objectModel)));
      }
      if (plates) {
        let plateBoxes = [];
        try {
          plateBoxes = await detectPlateBoxesGemini(photo);
        } catch (err) {
          console.warn(err);
          // 上限などでもローカル推定へフォールバック
        }
        if (!plateBoxes.length) {
          plateBoxes = await detectPlateBoxesLocal(detectCanvas, scale, objectModel);
        }
        boxes.push(...plateBoxes);
      }
    }

    const applied = applyBoxesToPhoto(photo, boxes);
    return { applied, boxes };
  }

  function setAutoMosaicStatus(message, isError = false) {
    if (!autoMosaicStatus) return;
    autoMosaicStatus.textContent = message;
    autoMosaicStatus.style.color = isError ? "var(--danger-soft)" : "var(--muted)";
  }

  async function runAutoMosaicActive() {
    const photo = getActivePhoto();
    if (!photo) return;
    const people = autoDetectPeople.checked;
    const plates = autoDetectPlates.checked;
    if (!people && !plates) {
      setAutoMosaicStatus("人物かナンバーの少なくとも一方を選んでください", true);
      return;
    }

    const prev = autoMosaicBtn.textContent;
    autoMosaicBtn.disabled = true;
    autoMosaicAllBtn.disabled = true;
    autoMosaicBtn.textContent = "検知中…";
    setAutoMosaicStatus("モデル読込・検知中…（初回は少し時間がかかります）");

    try {
      const { applied, boxes } = await autoMosaicPhoto(photo, { people, plates });
      renderGallery();
      const faces = boxes.filter((b) => b.type === "face" || b.type === "person-head").length;
      const plateN = boxes.filter((b) => b.type.startsWith("plate")).length;
      const msg =
        applied > 0
          ? `モザイクしました（人物系 ${faces} / ナンバー ${plateN}）`
          : "対象が見つかりませんでした。手動ブラシでも隠せます";
      setAutoMosaicStatus(msg, applied === 0);
      showToast(msg);
    } catch (err) {
      console.warn(err);
      const msg = explainGeminiError(err);
      setAutoMosaicStatus(msg, true);
      notifyError(msg);
    } finally {
      autoMosaicBtn.disabled = false;
      autoMosaicAllBtn.disabled = false;
      autoMosaicBtn.textContent = prev;
    }
  }

  async function runAutoMosaicAll() {
    if (!photos.length) return;
    const people = autoDetectPeople.checked;
    const plates = autoDetectPlates.checked;
    if (!people && !plates) {
      setAutoMosaicStatus("人物かナンバーの少なくとも一方を選んでください", true);
      return;
    }

    persistCaptionFromUi();
    snapshotCurrent();
    const prev = autoMosaicAllBtn.textContent;
    autoMosaicBtn.disabled = true;
    autoMosaicAllBtn.disabled = true;

    let ok = 0;
    let totalBoxes = 0;

    try {
      // モデルを先に読み込み
      if (people || plates) await ensureTfModels();

      for (let i = 0; i < photos.length; i += 1) {
        const photo = photos[i];
        autoMosaicAllBtn.textContent = `${i + 1}/${photos.length}`;
        setAutoMosaicStatus(`自動モザイク中… ${i + 1}/${photos.length}`);
        try {
          const { applied } = await autoMosaicPhoto(photo, { people, plates });
          if (applied > 0) ok += 1;
          totalBoxes += applied;
        } catch (err) {
          console.warn(err);
        }
        if (plates && getGeminiApiKey() && i < photos.length - 1) await sleep(1200);
      }

      const active = getActivePhoto();
      if (active) restorePhoto(active);
      else renderGallery();

      const msg = `${ok}枚にモザイク（計 ${totalBoxes} 箇所）`;
      setAutoMosaicStatus(msg);
      showToast(msg);
    } finally {
      autoMosaicBtn.disabled = false;
      autoMosaicAllBtn.disabled = false;
      autoMosaicAllBtn.textContent = prev;
    }
  }

  function strokeMosaic(from, to) {
    const dist = Math.hypot(to.x - from.x, to.y - from.y);
    const step = Math.max(4, Number(brushSize.value) * 0.4);
    const steps = Math.max(1, Math.ceil(dist / step));
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      mosaicAt(from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
    }
    renderEffects();
  }

  function updateLightLabels() {
    brightnessLabel.textContent = brightness.value;
    contrastLabel.textContent = contrast.value;
  }

  function updateSkyLabels() {
    skyStrengthLabel.textContent = skyStrength.value;
    skyBrightnessLabel.textContent = skyBrightness.value;
    skyTemperatureLabel.textContent = skyTemperature.value;
    skyScaleLabel.textContent = skyScale.value;
    skyShiftLabel.textContent = skyShift.value;
    skyRangeLabel.textContent = skyRange.value;
    skyEdgeFadeLabel.textContent = skyEdgeFade.value;
    skyForegroundLabel.textContent = skyForeground.value;
  }

  function updateSkyPresetActive() {
    if (!skyPresetGrid) return;
    skyPresetGrid.querySelectorAll(".sky-preset-card").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.preset === getActiveSkyPresetId());
    });
  }

  function persistSkyToActivePhoto() {
    const photo = getActivePhoto();
    if (!photo) return;
    photo.skyPreset = getActiveSkyPresetId();
    photo.skyStrength = skyStrength.value;
    photo.skyBrightness = skyBrightness.value;
    photo.skyTemperature = skyTemperature.value;
    photo.skyScale = skyScale.value;
    photo.skyShift = skyShift.value;
    photo.skyRange = skyRange.value;
    photo.skyEdgeFade = skyEdgeFade.value;
    photo.skyForeground = skyForeground.value;
    photo.skyKeepClouds = skyKeepClouds.checked;
  }

  function updateRotateLabel() {
    rotateAngleLabel.textContent = Number(rotateAngle.value).toFixed(1);
  }

  function setTool(tool) {
    // Leaving rotate without apply discards preview
    if (activeTool === "rotate" && tool !== "rotate" && Math.abs(previewAngle) > 0.001) {
      previewAngle = 0;
      rotateAngle.value = "0";
      updateRotateLabel();
    }

    activeTool = tool;
    document.querySelectorAll(".tool-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.tool === tool);
    });
    document.querySelectorAll(".tool-pane").forEach((pane) => {
      pane.classList.toggle("active", pane.dataset.pane === tool);
    });
    canvas.classList.toggle("tool-hide", tool === "hide");
    canvas.classList.toggle("tool-crop", tool === "crop");
    if (tool !== "hide") cursor.style.display = "none";

    if (tool === "crop") {
      previewAngle = 0;
      rotateAngle.value = "0";
      updateRotateLabel();
      if (!cropRect) initCropRect();
      renderEffects();
    } else if (tool === "rotate") {
      cropRect = cropRect; // keep for later
      renderEffects();
    } else {
      renderEffects();
    }
    updatePanCursor();
  }

  document.querySelectorAll(".tool-tab").forEach((tab) => {
    tab.addEventListener("click", () => setTool(tab.dataset.tool));
  });

  fileInput.addEventListener("change", () => {
    if (importBusy) return;
    const files = fileInput.files;
    if (files?.length) {
      addFiles(files);
      fileInput.value = "";
    }
  });

  ["dragenter", "dragover"].forEach((type) => {
    dropzone.addEventListener(type, (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });
  });

  ["dragleave", "drop"].forEach((type) => {
    dropzone.addEventListener(type, (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
    });
  });

  dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    if (importBusy) return;
    const files = e.dataTransfer?.files;
    if (files?.length) addFiles(files);
  });

  const stage = document.getElementById("stage");
  ["dragenter", "dragover"].forEach((type) => {
    stage.addEventListener(type, (e) => {
      e.preventDefault();
      if (e.dataTransfer) e.dataTransfer.dropEffect = "copy";
    });
  });
  stage.addEventListener("drop", (e) => {
    e.preventDefault();
    if (importBusy) return;
    const files = e.dataTransfer?.files;
    if (files?.length) addFiles(files);
  });

  clearAllBtn.addEventListener("click", () => {
    if (!photos.length) return;
    if (window.confirm(`アップロードした ${photos.length} 枚をすべて削除しますか？`)) {
      clearAllPhotos();
    }
  });

  applyNameBtn.addEventListener("click", () => {
    applyActivePhotoName();
  });

  photoNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      applyActivePhotoName();
    }
  });

  photoNameInput.addEventListener("change", () => {
    applyActivePhotoName();
  });

  captionCategory.addEventListener("change", () => {
    const photo = getActivePhoto();
    if (!photo) return;
    photo.captionCategory = captionCategory.value;
    fillCaptionTemplates(captionCategory.value);
    renderGallery();
  });

  captionTemplate.addEventListener("change", () => {
    if (!captionTemplate.value) return;
    applyCaptionTemplate();
  });

  captionInput.addEventListener("input", () => {
    captionInput.value = clampCaptionBody(stripCaptionPrefix(captionInput.value));
    updateCaptionCount();
    persistCaptionFromUi();
  });

  captionInput.addEventListener("blur", () => {
    persistCaptionFromUi();
    renderGallery();
  });

  copyCaptionBtn.addEventListener("click", () => {
    persistCaptionFromUi();
    const photo = getActivePhoto();
    const body = photo?.caption || captionInput.value;
    if (!String(body || "").trim()) {
      notifyError("コピーする内容がありません");
      return;
    }
    copyText(withCaptionPrefix(body), "キャプションをコピーしました");
  });

  clearCaptionBtn.addEventListener("click", () => {
    const photo = getActivePhoto();
    captionInput.value = "";
    if (photo) {
      photo.caption = "";
      renderGallery();
    }
  });

  copyAllCaptionsBtn.addEventListener("click", () => {
    const plain = buildCaptionsPlainList();
    if (!plain) {
      notifyError("キャプションが入力されていません");
      return;
    }
    copyText(plain, `${photos.filter((p) => p.caption).length}件のキャプションをコピーしました`);
  });

  downloadCaptionsBtn.addEventListener("click", () => {
    const text = buildCaptionsExport();
    if (!photos.length) return;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `lumen-captions-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    showToast("キャプション一覧を保存しました");
  });

  setImportLoading(false);

  geminiApiKey.value = localStorage.getItem(GEMINI_KEY_STORAGE) || "";
  geminiApiKey.addEventListener("change", () => {
    saveGeminiApiKey();
    setApiKeyStatus("");
  });
  geminiApiKey.addEventListener("blur", saveGeminiApiKey);
  geminiApiKey.addEventListener("input", () => {
    setApiKeyStatus("");
  });

  verifyApiKeyBtn.addEventListener("click", () => {
    verifyGeminiApiKey();
  });

  propertyAddress.value = localStorage.getItem(PROPERTY_ADDRESS_STORAGE) || "";
  propertyAddress.addEventListener("change", savePropertyAddress);
  propertyAddress.addEventListener("blur", savePropertyAddress);

  restoreWatermarkPreference();
  loadWatermarkImage()
    .then(() => {
      if (baseImageData) renderEffects();
    })
    .catch(() => {});
  if (watermarkEnabled) {
    watermarkEnabled.addEventListener("change", () => {
      saveWatermarkPreference();
      if (baseImageData) renderEffects();
    });
  }

  const savedType = localStorage.getItem(PROPERTY_TYPE_STORAGE);
  if (savedType && PROPERTY_TYPES[savedType]) propertyType.value = savedType;
  rebuildCaptionCategories(false);

  propertyType.addEventListener("change", () => {
    localStorage.setItem(PROPERTY_TYPE_STORAGE, getPropertyTypeKey());
    rebuildCaptionCategories(false);
    const photo = getActivePhoto();
    if (photo && photo.captionCategory && !getCaptionCategories().includes(photo.captionCategory)) {
      photo.captionCategory = "";
      syncCaptionField();
    }
    showToast(`物件種別: ${getPropertyTypeConfig().label}`);
  });

  generateCaptionBtn.addEventListener("click", () => {
    generateActiveCaption();
  });

  generateAllCaptionsBtn.addEventListener("click", () => {
    generateAllCaptions();
  });

  resizeWidth.addEventListener("input", () => {
    if (keepAspect.checked && aspectRatio) {
      const w = Number(resizeWidth.value);
      if (w) resizeHeight.value = String(Math.max(1, Math.round(w / aspectRatio)));
    }
    updateBatchResizeHint();
  });

  resizeHeight.addEventListener("input", () => {
    if (keepAspect.checked && aspectRatio) {
      const h = Number(resizeHeight.value);
      if (h) resizeWidth.value = String(Math.max(1, Math.round(h * aspectRatio)));
    }
    updateBatchResizeHint();
  });

  function resizeCanvasHighQualitySync(source, destW, destH) {
    destW = Math.max(1, Math.round(destW));
    destH = Math.max(1, Math.round(destH));

    if (source.width === destW && source.height === destH) {
      const copy = document.createElement("canvas");
      copy.width = destW;
      copy.height = destH;
      copy.getContext("2d").drawImage(source, 0, 0);
      return copy;
    }

    let cur = source;
    let cw = source.width;
    let ch = source.height;

    // 大きく縮小するときは半分ずつ段階的に縮小（一発縮小よりシャープ）
    while (cw > destW * 2 && ch > destH * 2) {
      const tw = Math.max(destW, Math.floor(cw / 2));
      const th = Math.max(destH, Math.floor(ch / 2));
      const step = document.createElement("canvas");
      step.width = tw;
      step.height = th;
      const sctx = step.getContext("2d");
      sctx.imageSmoothingEnabled = true;
      sctx.imageSmoothingQuality = "high";
      sctx.drawImage(cur, 0, 0, tw, th);
      cur = step;
      cw = tw;
      ch = th;
    }

    const out = document.createElement("canvas");
    out.width = destW;
    out.height = destH;
    const octx = out.getContext("2d");
    octx.imageSmoothingEnabled = true;
    octx.imageSmoothingQuality = "high";
    octx.drawImage(cur, 0, 0, destW, destH);
    return out;
  }

  async function resizeCanvasHighQuality(source, destW, destH) {
    destW = Math.max(1, Math.round(destW));
    destH = Math.max(1, Math.round(destH));
    const upscaling = destW > source.width || destH > source.height;

    // 拡大時はブラウザの高品質リサイザを優先
    if (upscaling && typeof createImageBitmap === "function") {
      try {
        const bmp = await createImageBitmap(source, {
          resizeWidth: destW,
          resizeHeight: destH,
          resizeQuality: "high",
        });
        const out = document.createElement("canvas");
        out.width = destW;
        out.height = destH;
        const octx = out.getContext("2d");
        octx.imageSmoothingEnabled = true;
        octx.imageSmoothingQuality = "high";
        octx.drawImage(bmp, 0, 0, destW, destH);
        if (typeof bmp.close === "function") bmp.close();
        return out;
      } catch (_) {
        /* fallback below */
      }
    }

    return resizeCanvasHighQualitySync(source, destW, destH);
  }

  function calcBatchTargetSize(srcW, srcH, mode, targetW, targetH, longEdge) {
    const tw = Math.max(1, Math.round(targetW));
    const th = Math.max(1, Math.round(targetH));
    const le = Math.max(1, Math.round(longEdge));

    if (mode === "long") {
      const long = Math.max(srcW, srcH);
      if (long <= le) return { w: srcW, h: srcH };
      const scale = le / long;
      return {
        w: Math.max(1, Math.round(srcW * scale)),
        h: Math.max(1, Math.round(srcH * scale)),
      };
    }

    if (mode === "fit") {
      // 拡大はせず枠内に収める。既に小さい場合はそのまま
      if (srcW <= tw && srcH <= th) return { w: srcW, h: srcH };
      const scale = Math.min(tw / srcW, th / srcH);
      return {
        w: Math.max(1, Math.round(srcW * scale)),
        h: Math.max(1, Math.round(srcH * scale)),
      };
    }

    if (mode === "width") {
      const scale = tw / srcW;
      return { w: tw, h: Math.max(1, Math.round(srcH * scale)) };
    }

    if (mode === "height") {
      const scale = th / srcH;
      return { w: Math.max(1, Math.round(srcW * scale)), h: th };
    }

    // exact
    return { w: tw, h: th };
  }

  function photoSourceCanvas(photo) {
    if (photo.id === activePhotoId && baseImageData) {
      const c = document.createElement("canvas");
      c.width = baseImageData.width;
      c.height = baseImageData.height;
      c.getContext("2d").putImageData(baseImageData, 0, 0);
      return c;
    }
    if (photo.baseImageData) {
      const c = document.createElement("canvas");
      c.width = photo.baseImageData.width;
      c.height = photo.baseImageData.height;
      c.getContext("2d").putImageData(photo.baseImageData, 0, 0);
      return c;
    }
    const img = photo.sourceImage;
    const c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    c.getContext("2d").drawImage(img, 0, 0);
    return c;
  }

  function updateBatchResizeHint() {
    if (!batchResizeHint) return;
    const mode = batchResizeMode.value;
    const w = resizeWidth.value || "—";
    const h = resizeHeight.value || "—";
    const le = batchLongEdge.value || "—";
    const hints = {
      fit: `全写真を ${w}×${h} の枠内に収めます（拡大なし）`,
      width: `全写真の幅を ${w}px に揃えます`,
      height: `全写真の高さを ${h}px に揃えます`,
      long: `全写真の長辺を ${le}px に揃えます`,
      exact: `全写真を ${w}×${h} に強制変更します`,
    };
    batchResizeHint.textContent = hints[mode] || hints.fit;
    batchLongEdgeField.hidden = mode !== "long";
  }

  async function batchResizeAll({ andSave = false, forceDownload = false } = {}) {
    if (!photos.length) return;

    snapshotCurrent();
    const mode = batchResizeMode.value;
    const targetW = Number(resizeWidth.value) || 1600;
    const targetH = Number(resizeHeight.value) || 1600;
    const longEdge = Number(batchLongEdge.value) || 1600;

    const buttons = [batchResizeBtn, batchResizeSaveBtn, batchResizeDownloadBtn, applyResize];
    const labels = buttons.map((b) => b.textContent);
    buttons.forEach((b) => {
      b.disabled = true;
    });
    batchResizeBtn.textContent = "処理中…";

    let changed = 0;
    let failed = 0;

    try {
      for (let i = 0; i < photos.length; i += 1) {
        const photo = photos[i];
        fileHint.textContent = `サイズ処理中… ${i + 1}/${photos.length}`;
        batchResizeBtn.textContent = `${i + 1}/${photos.length}`;

        try {
          const src = photoSourceCanvas(photo);
          const { w, h } = calcBatchTargetSize(src.width, src.height, mode, targetW, targetH, longEdge);

          if (w === src.width && h === src.height) {
            if (!photo.baseImageData) {
              photo.baseImageData = src.getContext("2d").getImageData(0, 0, src.width, src.height);
            }
            continue;
          }

          const resized = await resizeCanvasHighQuality(src, w, h);
          const data = resized.getContext("2d").getImageData(0, 0, resized.width, resized.height);
          photo.baseImageData = data;
          changed += 1;
        } catch (err) {
          console.warn(err);
          failed += 1;
        }
      }

      const active = getActivePhoto();
      if (active) restorePhoto(active);
      renderGallery();

      const resizeMsg =
        failed > 0
          ? `${changed}枚サイズ変更（${failed}枚失敗）`
          : changed > 0
            ? `${changed}枚のサイズを変更しました`
            : "サイズ変更の必要はありませんでした";

      showToast(resizeMsg);
      fileHint.textContent = resizeMsg;
      emitLumen("resize", { ok: failed === 0, message: resizeMsg, changed, failed, batch: true });

      if (andSave) {
        await saveAllImages({ forceDownload });
      }
    } finally {
      buttons.forEach((b, i) => {
        b.disabled = false;
        b.textContent = labels[i];
      });
      updateBatchButtons();
    }
  }

  applyResize.addEventListener("click", async () => {
    if (!baseImageData) return;
    const w = Math.max(1, Math.round(Number(resizeWidth.value) || baseImageData.width));
    const h = Math.max(1, Math.round(Number(resizeHeight.value) || baseImageData.height));

    if (w === baseImageData.width && h === baseImageData.height) {
      showToast("サイズは変更されていません");
      fileHint.textContent = "サイズは変更されていません";
      return;
    }

    const temp = document.createElement("canvas");
    temp.width = baseImageData.width;
    temp.height = baseImageData.height;
    temp.getContext("2d").putImageData(baseImageData, 0, 0);

    const prevLabel = applyResize.textContent;
    applyResize.disabled = true;
    applyResize.textContent = "処理中…";

    try {
      const resized = await resizeCanvasHighQuality(temp, w, h);
      commitBaseFromCanvas(resized);
      notifySuccess("resize", `サイズを変更しました（${resized.width} × ${resized.height}）`, {
        width: resized.width,
        height: resized.height,
      });
    } catch (err) {
      console.warn(err);
      notifyError("サイズ変更に失敗しました", { reason: "resize_failed" });
    } finally {
      applyResize.disabled = false;
      applyResize.textContent = prevLabel;
    }
  });

  batchResizeMode.addEventListener("change", updateBatchResizeHint);
  batchLongEdge.addEventListener("input", updateBatchResizeHint);

  batchResizeBtn.addEventListener("click", () => {
    batchResizeAll({ andSave: false });
  });
  batchResizeSaveBtn.addEventListener("click", () => {
    batchResizeAll({ andSave: true, forceDownload: false });
  });
  batchResizeDownloadBtn.addEventListener("click", () => {
    batchResizeAll({ andSave: true, forceDownload: true });
  });

  updateBatchResizeHint();

  brushSize.addEventListener("input", () => {
    brushSizeLabel.textContent = brushSize.value;
  });

  mosaicSize.addEventListener("input", () => {
    mosaicSizeLabel.textContent = mosaicSize.value;
  });

  autoMosaicBtn.addEventListener("click", () => {
    runAutoMosaicActive();
  });

  autoMosaicAllBtn.addEventListener("click", () => {
    runAutoMosaicAll();
  });

  [brightness, contrast].forEach((el) => {
    el.addEventListener("input", () => {
      updateLightLabels();
      renderEffects();
      const photo = getActivePhoto();
      if (!photo) return;
      photo.brightness = brightness.value;
      photo.contrast = contrast.value;
    });
  });

  resetLight.addEventListener("click", () => {
    brightness.value = "0";
    contrast.value = "0";
    updateLightLabels();
    renderEffects();
    const photo = getActivePhoto();
    if (photo) {
      photo.brightness = "0";
      photo.contrast = "0";
    }
  });

  function onSkyControlChange() {
    updateSkyLabels();
    updateSkyPresetActive();
    persistSkyToActivePhoto();
    renderEffects();
  }

  [
    skyStrength,
    skyBrightness,
    skyTemperature,
    skyScale,
    skyShift,
    skyRange,
    skyEdgeFade,
    skyForeground,
  ].forEach((el) => {
    el.addEventListener("input", onSkyControlChange);
  });
  skyKeepClouds.addEventListener("change", onSkyControlChange);

  skyAutoBtn.addEventListener("click", () => {
    if (!baseImageData) return;
    setActiveSkyPresetId("clear-blue");
    skyStrength.value = "90";
    skyBrightness.value = "4";
    skyTemperature.value = "0";
    skyScale.value = "100";
    skyShift.value = "0";
    skyRange.value = "62";
    skyEdgeFade.value = "55";
    skyForeground.value = "18";
    skyKeepClouds.checked = true;
    onSkyControlChange();
    showToast("空を自動置き換えしました");
    setTool("sky");
  });

  resetSky.addEventListener("click", () => {
    setActiveSkyPresetId(DEFAULT_SKY_PRESET);
    skyStrength.value = "0";
    skyBrightness.value = "0";
    skyTemperature.value = "0";
    skyScale.value = "100";
    skyShift.value = "0";
    skyRange.value = "55";
    skyEdgeFade.value = "50";
    skyForeground.value = "0";
    skyKeepClouds.checked = true;
    onSkyControlChange();
    showToast("空の編集をリセットしました");
  });

  skyApplyAllBtn.addEventListener("click", () => {
    if (!photos.length) return;
    persistSkyToActivePhoto();
    const preset = getActiveSkyPresetId();
    const strength = skyStrength.value;
    const brightness = skyBrightness.value;
    const temperature = skyTemperature.value;
    const scale = skyScale.value;
    const shift = skyShift.value;
    const range = skyRange.value;
    const edgeFade = skyEdgeFade.value;
    const foreground = skyForeground.value;
    const keep = skyKeepClouds.checked;
    photos.forEach((photo) => {
      photo.skyPreset = preset;
      photo.skyStrength = strength;
      photo.skyBrightness = brightness;
      photo.skyTemperature = temperature;
      photo.skyScale = scale;
      photo.skyShift = shift;
      photo.skyRange = range;
      photo.skyEdgeFade = edgeFade;
      photo.skyForeground = foreground;
      photo.skyKeepClouds = keep;
    });
    showToast(`全${photos.length}枚に空の設定をコピーしました`);
  });

  renderSkyPresetGrid();
  updateSkyLabels();

  cropAspect.addEventListener("change", () => {
    if (!cropRect) initCropRect();
    applyCropAspectConstraint(true);
    renderEffects();
  });

  resetCrop.addEventListener("click", () => {
    initCropRect();
    renderEffects();
  });

  applyCrop.addEventListener("click", () => {
    if (!baseImageData || !cropRect) return;
    const { x, y, w, h } = cropRect;
    const sx = Math.round(x);
    const sy = Math.round(y);
    const sw = Math.max(1, Math.round(w));
    const sh = Math.max(1, Math.round(h));
    const temp = document.createElement("canvas");
    temp.width = sw;
    temp.height = sh;
    const tctx = temp.getContext("2d");
    const srcCanvas = document.createElement("canvas");
    srcCanvas.width = baseImageData.width;
    srcCanvas.height = baseImageData.height;
    srcCanvas.getContext("2d").putImageData(baseImageData, 0, 0);
    tctx.drawImage(srcCanvas, sx, sy, sw, sh, 0, 0, sw, sh);
    commitBaseFromCanvas(temp);
    fileHint.textContent = `トリミング適用: ${sw} × ${sh}`;
  });

  rotateAngle.addEventListener("input", () => {
    previewAngle = Number(rotateAngle.value);
    updateRotateLabel();
    if (activeTool === "rotate") {
      renderEffects();
      applyView();
    }
  });

  resetRotate.addEventListener("click", () => {
    previewAngle = 0;
    rotateAngle.value = "0";
    updateRotateLabel();
    renderEffects();
    requestAnimationFrame(() => fitView());
  });

  function bakeRotation(angleDeg) {
    if (!baseImageData) return;
    const src = document.createElement("canvas");
    src.width = baseImageData.width;
    src.height = baseImageData.height;
    src.getContext("2d").putImageData(baseImageData, 0, 0);

    const normalized = ((angleDeg % 360) + 360) % 360;
    const isRightAngle =
      Math.abs(normalized) < 0.01 ||
      Math.abs(normalized - 90) < 0.01 ||
      Math.abs(normalized - 180) < 0.01 ||
      Math.abs(normalized - 270) < 0.01;

    if (isRightAngle) {
      const turns = Math.round(normalized / 90) % 4;
      const out = document.createElement("canvas");
      if (turns % 2 === 0) {
        out.width = src.width;
        out.height = src.height;
      } else {
        out.width = src.height;
        out.height = src.width;
      }
      const octx = out.getContext("2d");
      octx.translate(out.width / 2, out.height / 2);
      octx.rotate((turns * Math.PI) / 2);
      octx.drawImage(src, -src.width / 2, -src.height / 2);
      commitBaseFromCanvas(out);
      return;
    }

    const rad = (angleDeg * Math.PI) / 180;
    const cos = Math.abs(Math.cos(rad));
    const sin = Math.abs(Math.sin(rad));
    const bbW = Math.ceil(src.width * cos + src.height * sin);
    const bbH = Math.ceil(src.width * sin + src.height * cos);
    const rotated = document.createElement("canvas");
    rotated.width = bbW;
    rotated.height = bbH;
    const rctx = rotated.getContext("2d");
    rctx.fillStyle = "#ffffff";
    rctx.fillRect(0, 0, bbW, bbH);
    rctx.translate(bbW / 2, bbH / 2);
    rctx.rotate(rad);
    rctx.drawImage(src, -src.width / 2, -src.height / 2);

    const crop = inscribedCropAfterRotate(src.width, src.height, angleDeg);
    const out = document.createElement("canvas");
    out.width = crop.width;
    out.height = crop.height;
    const ox = Math.round((bbW - crop.width) / 2);
    const oy = Math.round((bbH - crop.height) / 2);
    out.getContext("2d").drawImage(rotated, ox, oy, crop.width, crop.height, 0, 0, crop.width, crop.height);
    commitBaseFromCanvas(out);
  }

  applyRotate.addEventListener("click", () => {
    const angle = Number(rotateAngle.value);
    if (Math.abs(angle) < 0.001) {
      fileHint.textContent = "角度が 0° のため変更ありません";
      return;
    }
    bakeRotation(angle);
    fileHint.textContent = `角度を適用: ${angle.toFixed(1)}°`;
  });

  rotateLeft.addEventListener("click", () => {
    bakeRotation(-90);
    fileHint.textContent = "左に 90° 回転";
  });

  rotateRight.addEventListener("click", () => {
    bakeRotation(90);
    fileHint.textContent = "右に 90° 回転";
  });

  function wantsPan(e) {
    if (!baseImageData) return false;
    if (panMode || spaceHeld) return true;
    if ("button" in e && e.button === 1) return true;
    if (activeTool === "hide" || activeTool === "crop") return false;
    return true;
  }

  function startPaint(e) {
    if (panning || panMode || spaceHeld) return;
    if (activeTool !== "hide" || !baseImageData) return;
    e.preventDefault();
    painting = true;
    lastPoint = getCanvasPoint(e);
    mosaicAt(lastPoint.x, lastPoint.y);
    renderEffects();
  }

  function startCropDrag(e) {
    if (panning || panMode || spaceHeld) return false;
    if (activeTool !== "crop" || !baseImageData) return false;
    if (Math.abs(previewAngle) > 0.001) {
      previewAngle = 0;
      rotateAngle.value = "0";
      updateRotateLabel();
      renderEffects();
    }
    if (!cropRect) initCropRect();
    const point = getCanvasPoint(e);
    const mode = hitCropHandle(point.x, point.y);
    if (!mode) return false;
    e.preventDefault();
    cropDrag = {
      mode,
      startX: point.x,
      startY: point.y,
      orig: { ...cropRect },
    };
    return true;
  }

  function movePointer(e) {
    if (panning && panStart) {
      e.preventDefault();
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      panX = panStart.panX + (clientX - panStart.x);
      panY = panStart.panY + (clientY - panStart.y);
      applyView();
      return;
    }

    if (cropDrag) {
      e.preventDefault();
      const point = getCanvasPoint(e);
      updateCropFromDrag(point.x, point.y);
      return;
    }

    if (activeTool === "crop" && !spaceHeld && !panMode) {
      const point = getCanvasPoint(e);
      const mode = hitCropHandle(point.x, point.y);
      const cursors = {
        move: "move",
        n: "ns-resize",
        s: "ns-resize",
        e: "ew-resize",
        w: "ew-resize",
        ne: "nesw-resize",
        sw: "nesw-resize",
        nw: "nwse-resize",
        se: "nwse-resize",
      };
      canvas.style.cursor = mode ? cursors[mode] || "crosshair" : "crosshair";
    }

    if (activeTool === "hide" && !spaceHeld && !panMode) {
      const clientX = "touches" in e ? e.touches[0]?.clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0]?.clientY : e.clientY;
      if (clientX != null) {
        const size = Number(brushSize.value);
        const rect = canvas.getBoundingClientRect();
        const scale = rect.width / canvas.width;
        cursor.style.display = "block";
        cursor.style.width = `${size * scale}px`;
        cursor.style.height = `${size * scale}px`;
        cursor.style.left = `${clientX}px`;
        cursor.style.top = `${clientY}px`;
      }
    }

    if (!painting || activeTool !== "hide") return;
    e.preventDefault();
    const point = getCanvasPoint(e);
    strokeMosaic(lastPoint, point);
    lastPoint = point;
  }

  function endPointer() {
    painting = false;
    lastPoint = null;
    panning = false;
    panStart = null;
    cropDrag = null;
    canvasWrap.classList.remove("is-dragging");
    updatePanCursor();
  }

  function startPan(e) {
    if (!wantsPan(e)) return false;
    e.preventDefault();
    painting = false;
    cropDrag = null;
    panning = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    panStart = {
      x: clientX,
      y: clientY,
      panX,
      panY,
    };
    canvasWrap.classList.add("is-panning", "is-dragging");
    cursor.style.display = "none";
    return true;
  }

  function onPointerDown(e) {
    if (startPan(e)) return;
    if (startCropDrag(e)) return;
    startPaint(e);
  }

  canvasWrap.addEventListener("mousedown", onPointerDown);
  window.addEventListener("mousemove", movePointer);
  window.addEventListener("mouseup", endPointer);
  canvas.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });
  canvasWrap.addEventListener(
    "touchstart",
    (e) => {
      if (panMode || spaceHeld || (activeTool !== "hide" && activeTool !== "crop")) {
        if (startPan(e)) return;
      }
      if (startCropDrag(e)) return;
      startPaint(e);
    },
    { passive: false }
  );
  canvasWrap.addEventListener("touchmove", movePointer, { passive: false });
  window.addEventListener("touchend", endPointer);

  canvasWrap.addEventListener(
    "wheel",
    (e) => {
      if (!baseImageData) return;
      e.preventDefault();

      // ピンチ / Ctrl+ホイール → 拡大縮小、それ以外のスクロール → 移動
      if (e.ctrlKey || e.metaKey) {
        const factor = Math.exp(-e.deltaY * 0.01);
        zoomBy(factor, { clientX: e.clientX, clientY: e.clientY });
        return;
      }

      panX -= e.deltaX;
      panY -= e.deltaY;
      applyView();
    },
    { passive: false }
  );

  zoomInBtn.addEventListener("click", () => zoomBy(1.25));
  zoomOutBtn.addEventListener("click", () => zoomBy(1 / 1.25));
  zoomFitBtn.addEventListener("click", () => fitView());

  panModeBtn.addEventListener("click", () => {
    panMode = !panMode;
    panModeBtn.classList.toggle("is-active", panMode);
    panModeBtn.setAttribute("aria-pressed", panMode ? "true" : "false");
    updatePanCursor();
    if (panMode) cursor.style.display = "none";
  });

  window.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea, button")) return;

    if (e.code === "Space" && !e.repeat) {
      e.preventDefault();
      spaceHeld = true;
      updatePanCursor();
      cursor.style.display = "none";
      return;
    }

    if (!baseImageData) return;
    const step = e.shiftKey ? 80 : 40;
    if (e.code === "ArrowLeft") {
      e.preventDefault();
      nudgePan(step, 0);
    } else if (e.code === "ArrowRight") {
      e.preventDefault();
      nudgePan(-step, 0);
    } else if (e.code === "ArrowUp") {
      e.preventDefault();
      nudgePan(0, step);
    } else if (e.code === "ArrowDown") {
      e.preventDefault();
      nudgePan(0, -step);
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.code !== "Space") return;
    spaceHeld = false;
    if (!panning) updatePanCursor();
  });

  window.addEventListener("resize", () => {
    if (!baseImageData) return;
    applyView();
  });

  if (reloadAppBtn) {
    reloadAppBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }

  resetBtn.addEventListener("click", () => {
    if (!sourceImage) return;
    brightness.value = "0";
    contrast.value = "0";
    skyStrength.value = "0";
    skyBrightness.value = "0";
    skyTemperature.value = "0";
    skyScale.value = "100";
    skyShift.value = "0";
    skyRange.value = "55";
    skyEdgeFade.value = "50";
    skyForeground.value = "0";
    skyKeepClouds.checked = true;
    setActiveSkyPresetId(DEFAULT_SKY_PRESET);
    previewAngle = 0;
    rotateAngle.value = "0";
    updateLightLabels();
    updateSkyLabels();
    updateSkyPresetActive();
    updateRotateLabel();
    setCanvasFromImage(sourceImage, sourceImage.naturalWidth, sourceImage.naturalHeight);
    const photo = getActivePhoto();
    if (photo) {
      photo.brightness = "0";
      photo.contrast = "0";
      photo.skyPreset = DEFAULT_SKY_PRESET;
      photo.skyStrength = "0";
      photo.skyBrightness = "0";
      photo.skyTemperature = "0";
      photo.skyScale = "100";
      photo.skyShift = "0";
      photo.skyRange = "55";
      photo.skyEdgeFade = "50";
      photo.skyForeground = "0";
      photo.skyKeepClouds = true;
    }
  });

  function dataUrlByteSize(dataUrl) {
    const b64 = dataUrl.slice(dataUrl.indexOf(",") + 1);
    const padding = b64.endsWith("==") ? 2 : b64.endsWith("=") ? 1 : 0;
    return Math.floor((b64.length * 3) / 4) - padding;
  }

  function formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    return `${(bytes / 1024).toFixed(bytes < 100 * 1024 ? 1 : 0)} KB`;
  }

  /**
   * JPEG で品質・解像度を自動調整し、maxBytes 以下のデータURLを返す
   */
  function exportUnderLimit(sourceCanvas, maxBytes) {
    const mime = "image/jpeg";
    let width = sourceCanvas.width;
    let height = sourceCanvas.height;

    for (let attempt = 0; attempt < 14; attempt += 1) {
      const w = Math.max(1, Math.round(width));
      const h = Math.max(1, Math.round(height));
      const scaled =
        w === sourceCanvas.width && h === sourceCanvas.height
          ? sourceCanvas
          : resizeCanvasHighQualitySync(sourceCanvas, w, h);

      const exportCanvas = document.createElement("canvas");
      exportCanvas.width = w;
      exportCanvas.height = h;
      const exportCtx = exportCanvas.getContext("2d");
      exportCtx.fillStyle = "#ffffff";
      exportCtx.fillRect(0, 0, w, h);
      exportCtx.drawImage(scaled, 0, 0);

      let best = null;
      let lo = 0.32;
      let hi = 0.92;

      for (let i = 0; i < 10; i += 1) {
        const quality = (lo + hi) / 2;
        const url = exportCanvas.toDataURL(mime, quality);
        const size = dataUrlByteSize(url);
        if (size <= maxBytes) {
          best = { url, size, quality, width: w, height: h };
          lo = quality;
        } else {
          hi = quality;
        }
      }

      if (best) return best;

      width *= 0.82;
      height *= 0.82;
    }

    const w = Math.max(1, Math.round(width));
    const h = Math.max(1, Math.round(height));
    const scaled = resizeCanvasHighQualitySync(sourceCanvas, w, h);
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = w;
    exportCanvas.height = h;
    const exportCtx = exportCanvas.getContext("2d");
    exportCtx.fillStyle = "#ffffff";
    exportCtx.fillRect(0, 0, w, h);
    exportCtx.drawImage(scaled, 0, 0);
    const url = exportCanvas.toDataURL(mime, 0.28);
    return { url, size: dataUrlByteSize(url), quality: 0.28, width: w, height: h };
  }

  const MAX_DOWNLOAD_BYTES = 250 * 1024;
  const FOLDER_DB = "lumen-fs";
  const FOLDER_STORE = "handles";
  const FOLDER_KEY = "saveDir";

  /** @type {FileSystemDirectoryHandle | null} */
  let saveDirHandle = null;

  const canUseFolderSave = typeof window.showDirectoryPicker === "function";

  function openFolderDb() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(FOLDER_DB, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(FOLDER_STORE)) {
          db.createObjectStore(FOLDER_STORE);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function storeDirHandle(handle) {
    const db = await openFolderDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(FOLDER_STORE, "readwrite");
      tx.objectStore(FOLDER_STORE).put(handle, FOLDER_KEY);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  }

  async function loadDirHandle() {
    const db = await openFolderDb();
    const handle = await new Promise((resolve, reject) => {
      const tx = db.transaction(FOLDER_STORE, "readonly");
      const req = tx.objectStore(FOLDER_STORE).get(FOLDER_KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
    db.close();
    return handle;
  }

  async function ensureDirPermission(handle, mode = "readwrite") {
    if (!handle) return false;
    const opts = { mode };
    if ((await handle.queryPermission(opts)) === "granted") return true;
    if ((await handle.requestPermission(opts)) === "granted") return true;
    return false;
  }

  function updateFolderHint() {
    if (!canUseFolderSave) {
      folderHint.textContent = "このブラウザはフォルダ保存未対応（ダウンロードを使ってください）";
      pickFolderBtn.disabled = true;
      return;
    }
    if (saveDirHandle) {
      folderHint.textContent = `選択中: ${saveDirHandle.name}`;
    } else {
      folderHint.textContent = "未設定（初回に選択）";
    }
  }

  function dataUrlToBlob(dataUrl) {
    const [header, b64] = dataUrl.split(",");
    const mime = header.match(/:(.*?);/)?.[1] || "image/jpeg";
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return new Blob([bytes], { type: mime });
  }

  function makeExportName(photoName, index) {
    const base = (photoName || "lumen-edit")
      .replace(/\.[^.]+$/, "")
      .replace(/[^\w\u3040-\u30ff\u3400-\u9fff\-]+/g, "_")
      .slice(0, 40);
    const suffix = index != null ? `-${index + 1}` : "";
    return `${base || "lumen-edit"}${suffix}-${Date.now()}.jpg`;
  }

  function exportPhotoCanvas(photo, { watermark = true } = {}) {
    const data = photo.id === activePhotoId && baseImageData ? baseImageData : photo.baseImageData;
    if (!data) return null;

    const bright = Number(photo.id === activePhotoId ? brightness.value : photo.brightness);
    const contrastVal = Number(photo.id === activePhotoId ? contrast.value : photo.contrast);
    const skyOpts =
      photo.id === activePhotoId ? getSkyOptionsFromUi() : getSkyOptionsFromPhoto(photo);
    const w = data.width;
    const h = data.height;
    const out = new ImageData(w, h);
    processLitPixels(data, out.data, bright, contrastVal, skyOpts);

    const temp = document.createElement("canvas");
    temp.width = w;
    temp.height = h;
    temp.getContext("2d").putImageData(out, 0, 0);
    if (watermark) applyWatermarkToCanvas(temp);
    return temp;
  }

  function triggerDownload(result, filename) {
    const link = document.createElement("a");
    link.download = filename;
    link.href = result.url;
    link.click();
  }

  async function pickSaveFolder() {
    if (!canUseFolderSave) {
      folderHint.textContent = "フォルダ保存には Chrome / Edge が必要です";
      return;
    }
    try {
      const handle = await window.showDirectoryPicker({
        id: "lumen-save",
        mode: "readwrite",
        startIn: "downloads",
      });
      saveDirHandle = handle;
      await storeDirHandle(handle);
      updateFolderHint();
      fileHint.textContent = `保存先を「${handle.name}」に設定しました`;
    } catch (err) {
      if (err && err.name === "AbortError") return;
      folderHint.textContent = "フォルダを選べませんでした";
    }
  }

  async function saveToFolder(result, filename) {
    if (!saveDirHandle) {
      await pickSaveFolder();
      if (!saveDirHandle) return false;
    }

    const ok = await ensureDirPermission(saveDirHandle);
    if (!ok) {
      fileHint.textContent = "フォルダへの書き込み許可が必要です";
      return false;
    }

    const fileHandle = await saveDirHandle.getFileHandle(filename, { create: true });
    const writable = await fileHandle.createWritable();
    await writable.write(dataUrlToBlob(result.url));
    await writable.close();
    return true;
  }

  async function saveImage({ forceDownload = false } = {}) {
    if (!baseImageData) return;
    snapshotCurrent();

    const lit = buildLitCanvas();
    if (!lit) return;
    const result = exportUnderLimit(lit, MAX_DOWNLOAD_BYTES);
    const active = getActivePhoto();
    const filename = makeExportName(active?.name);

    if (!forceDownload && canUseFolderSave) {
      try {
        const saved = await saveToFolder(result, filename);
        if (saved) {
          const pathLabel = `${saveDirHandle.name}/${filename}`;
          notifySuccess("save", `保存しました（${formatBytes(result.size)}）`, {
            mode: "folder",
            filename,
            path: pathLabel,
            bytes: result.size,
            width: result.width,
            height: result.height,
          });
          return;
        }
      } catch (err) {
        if (err && err.name === "AbortError") return;
        console.warn(err);
        showToast("フォルダ保存に失敗したためダウンロードします", { error: true });
        fileHint.textContent = "フォルダ保存に失敗したためダウンロードします";
      }
    }

    triggerDownload(result, filename);
    const type = forceDownload ? "download" : "save";
    notifySuccess(type, `ダウンロードしました（${formatBytes(result.size)}）`, {
      mode: "download",
      filename,
      bytes: result.size,
      width: result.width,
      height: result.height,
    });
  }

  async function saveAllImages({ forceDownload = false } = {}) {
    if (!photos.length) return;
    snapshotCurrent();

    if (!forceDownload && canUseFolderSave && !saveDirHandle) {
      await pickSaveFolder();
      if (!saveDirHandle) return;
    }

    let saved = 0;
    let failed = 0;

    for (let i = 0; i < photos.length; i += 1) {
      const photo = photos[i];
      const lit = exportPhotoCanvas(photo);
      if (!lit) {
        failed += 1;
        continue;
      }
      const result = exportUnderLimit(lit, MAX_DOWNLOAD_BYTES);
      const filename = makeExportName(photo.name, i);

      try {
        if (!forceDownload && canUseFolderSave) {
          const ok = await saveToFolder(result, filename);
          if (ok) {
            saved += 1;
            continue;
          }
        }
        triggerDownload(result, filename);
        saved += 1;
        // 連続ダウンロードがブラウザに止められないよう少し待つ
        await new Promise((r) => setTimeout(r, 180));
      } catch (err) {
        console.warn(err);
        failed += 1;
      }
    }

    const mode = forceDownload ? "download" : "save";
    const message =
      failed > 0
        ? `${saved}枚完了（${failed}枚失敗）`
        : `${saved}枚を${forceDownload ? "ダウンロード" : "保存"}しました`;
    notifySuccess(mode, message, { count: saved, failed });
  }

  pickFolderBtn.addEventListener("click", () => {
    pickSaveFolder();
  });

  saveBtn.addEventListener("click", () => {
    saveImage({ forceDownload: false });
  });

  downloadBtn.addEventListener("click", () => {
    saveImage({ forceDownload: true });
  });

  saveAllBtn.addEventListener("click", () => {
    saveAllImages({ forceDownload: false });
  });

  downloadAllBtn.addEventListener("click", () => {
    saveAllImages({ forceDownload: true });
  });

  (async () => {
    updateFolderHint();
    if (!canUseFolderSave) return;
    try {
      const handle = await loadDirHandle();
      if (!handle) return;
      saveDirHandle = handle;
      updateFolderHint();
      // 権限はユーザー操作時に再確認（自動では取れない場合あり）
    } catch (err) {
      console.warn(err);
    }
  })();
})();
