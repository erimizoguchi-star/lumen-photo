(() => {
  "use strict";

  const APP_VERSION = "39";

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
  const homeBtn = document.getElementById("homeBtn");
  const appVersionEl = document.getElementById("appVersion");
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
  const clearListingInfoBtn = document.getElementById("clearListingInfoBtn");
  const nameField = document.getElementById("nameField");
  const photoNameInput = document.getElementById("photoNameInput");
  const applyNameBtn = document.getElementById("applyNameBtn");
  const captionBox = document.getElementById("captionBox");
  const captionEmpty = document.getElementById("captionEmpty");
  const captionCategory = document.getElementById("captionCategory");
  const captionTemplate = document.getElementById("captionTemplate");
  const captionInput = document.getElementById("captionInput");
  const captionPrefixPicker = document.getElementById("captionPrefixPicker");
  const captionPrefixBadge = document.getElementById("captionPrefixBadge");
  const captionInputWrap = document.getElementById("captionInputWrap");
  const captionLimitHint = document.getElementById("captionLimitHint");
  const captionMaxLabel = document.getElementById("captionMaxLabel");
  const captionPrefixLabelNote = document.getElementById("captionPrefixLabelNote");
  const copyCaptionBtn = document.getElementById("copyCaptionBtn");
  const clearCaptionBtn = document.getElementById("clearCaptionBtn");
  const copyAllCaptionsBtn = document.getElementById("copyAllCaptionsBtn");
  const downloadCaptionsBtn = document.getElementById("downloadCaptionsBtn");
  const watermarkEnabled = document.getElementById("watermarkEnabled");
  const overwriteExisting = document.getElementById("overwriteExisting");
  const watermarkPosPicker = document.getElementById("watermarkPosPicker");
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
  const exportPresetPicker = document.getElementById("exportPresetPicker");
  const exportPresetHint = document.getElementById("exportPresetHint");

  const brushSize = document.getElementById("brushSize");
  const brushSizeLabel = document.getElementById("brushSizeLabel");
  const mosaicSize = document.getElementById("mosaicSize");
  const mosaicSizeLabel = document.getElementById("mosaicSizeLabel");
  const autoDetectPeople = document.getElementById("autoDetectPeople");
  const autoDetectPlates = document.getElementById("autoDetectPlates");
  const autoMosaicBtn = document.getElementById("autoMosaicBtn");
  const autoMosaicAllBtn = document.getElementById("autoMosaicAllBtn");
  const undoMosaicBtn = document.getElementById("undoMosaicBtn");
  const hideBrushModePicker = document.getElementById("hideBrushModePicker");
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
  const skyBrushModePicker = document.getElementById("skyBrushModePicker");
  const skyStrokePicker = document.getElementById("skyStrokePicker");
  const skyBrushSize = document.getElementById("skyBrushSize");
  const skyBrushSizeLabel = document.getElementById("skyBrushSizeLabel");
  const skyClearPaintBtn = document.getElementById("skyClearPaintBtn");

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
  /** 画面プレビュー用に縮小した base（空・明るさの再計算を軽くする） */
  let litPreviewCache = { source: null, data: null };
  let renderEffectsRaf = 0;
  const LIT_PREVIEW_MAX_EDGE = 1280;
  let aspectRatio = 1;
  let activeTool = "resize";
  let activePanelTab = "photos";
  let hideBrushMode = "mosaic";
  let skyBrushMode = "add";
  let skyStrokeStyle = "free";
  let skyPaintSnapshot = null;
  let skyStrokeOrigin = null;
  let painting = false;
  let skyPainting = false;
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
   *   preMosaicImageData: ImageData | null,
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
   *   watermarkPosition: string,
   *   captionCategory: string,
   *   caption: string,
   * }>} */
  let photos = [];
  let activePhotoId = null;
  let photoSeq = 0;
  let importBusy = false;
  const MAX_IMAGE_EDGE = 8192;
  const IMAGE_FILE_RE = /\.(jpe?g|png|gif|webp|heic|heif|avif|bmp|tiff?)$/i;

  /** 不動産登録向けキャプション。最終出力は36文字以内。《杏栄》あり時はプレフィックス込み */
  const CAPTION_MAX_LEN = 36;
  const CAPTION_PREFIX = "《杏栄》";
  const CAPTION_PREFIX_LEN = Array.from(CAPTION_PREFIX).length;
  const CAPTION_PREFIX_STORAGE = "lumen-caption-prefix-enabled";
  let captionPrefixEnabled = true;
  const PROPERTY_TYPE_STORAGE = "lumen-property-type";
  const EXPORT_PRESET_STORAGE = "lumen-export-preset";
  const IRI_GUIDELINE_URL =
    "https://www.iri.ne.jp/kensaku/member/info_supo/images/Guideline.pdf";
  const DEFAULT_EXPORT_PRESET = "iri-photo";

  /** @type {Record<string, { label: string, kind: string, maxW: number, maxH: number, minW: number, minH: number, maxBytes: number, hint: string, allowUpscale?: boolean }>} */
  const EXPORT_PRESETS = {
    "iri-thumb": {
      label: "IRI 見出写真",
      kind: "iri-box",
      maxW: 90,
      maxH: 90,
      minW: 50,
      minH: 50,
      maxBytes: 5 * 1024,
      hint: "50〜90px・5KB以内（外観写真の縮小版）",
      allowUpscale: true,
    },
    "iri-photo": {
      label: "IRI 物件写真",
      kind: "iri-box",
      maxW: 800,
      maxH: 800,
      minW: 400,
      minH: 400,
      maxBytes: 250 * 1024,
      hint: "400〜800px・250KB以内（外観・追加・間取・地図等）",
      allowUpscale: true,
    },
  };

  let activeExportPreset = DEFAULT_EXPORT_PRESET;

  /** @type {Record<string, { name: string, zenith: {r:number,g:number,b:number}, horizon: {r:number,g:number,b:number}, haze: {r:number,g:number,b:number,strength:number}|null, glow: {r:number,g:number,b:number,strength:number}|null, clouds: number, warmth: number }>} */
  const SKY_PRESETS = {
    "natural-blue": {
      name: "自然な青空",
      zenith: { r: 48, g: 125, b: 208 },
      horizon: { r: 162, g: 205, b: 236 },
      haze: { r: 215, g: 230, b: 242, strength: 0.42 },
      glow: null,
      clouds: 0.48,
      warmth: 0.06,
    },
    "cloudy-blue": {
      name: "雲のある青空",
      zenith: { r: 55, g: 128, b: 205 },
      horizon: { r: 170, g: 208, b: 236 },
      haze: { r: 220, g: 232, b: 244, strength: 0.4 },
      glow: null,
      clouds: 0.78,
      warmth: 0.05,
    },
    "clear-blue": {
      name: "晴れ",
      zenith: { r: 38, g: 112, b: 200 },
      horizon: { r: 150, g: 196, b: 238 },
      haze: { r: 210, g: 228, b: 245, strength: 0.32 },
      glow: null,
      clouds: 0.22,
      warmth: 0.04,
    },
    "deep-blue": {
      name: "深い青",
      zenith: { r: 22, g: 82, b: 172 },
      horizon: { r: 100, g: 168, b: 228 },
      haze: { r: 175, g: 205, b: 235, strength: 0.28 },
      glow: null,
      clouds: 0.12,
      warmth: -0.08,
    },
    "soft-blue": {
      name: "淡い青",
      zenith: { r: 110, g: 170, b: 218 },
      horizon: { r: 188, g: 218, b: 240 },
      haze: { r: 230, g: 238, b: 246, strength: 0.38 },
      glow: null,
      clouds: 0.22,
      warmth: 0.02,
    },
    "sunset": {
      name: "夕焼け",
      zenith: { r: 35, g: 55, b: 120 },
      horizon: { r: 245, g: 145, b: 75 },
      haze: { r: 255, g: 190, b: 140, strength: 0.35 },
      glow: { r: 255, g: 110, b: 60, strength: 0.55 },
      clouds: 0.28,
      warmth: 0.8,
    },
    "twilight": {
      name: "夕暮れ",
      zenith: { r: 25, g: 35, b: 85 },
      horizon: { r: 180, g: 100, b: 130 },
      haze: { r: 210, g: 150, b: 160, strength: 0.3 },
      glow: { r: 220, g: 90, b: 100, strength: 0.4 },
      clouds: 0.22,
      warmth: 0.5,
    },
    "dawn": {
      name: "朝焼け",
      zenith: { r: 85, g: 125, b: 175 },
      horizon: { r: 255, g: 185, b: 140 },
      haze: { r: 255, g: 210, b: 180, strength: 0.35 },
      glow: { r: 255, g: 160, b: 100, strength: 0.45 },
      clouds: 0.25,
      warmth: 0.6,
    },
    "overcast": {
      name: "曇り",
      zenith: { r: 145, g: 158, b: 170 },
      horizon: { r: 195, g: 200, b: 208 },
      haze: { r: 220, g: 224, b: 228, strength: 0.4 },
      glow: null,
      clouds: 0.55,
      warmth: -0.15,
    },
    "storm": {
      name: "嵐",
      zenith: { r: 45, g: 55, b: 72 },
      horizon: { r: 105, g: 115, b: 128 },
      haze: { r: 140, g: 148, b: 158, strength: 0.25 },
      glow: null,
      clouds: 0.7,
      warmth: -0.3,
    },
  };

  const SKY_PRESET_ORDER = [
    "natural-blue",
    "cloudy-blue",
    "clear-blue",
    "deep-blue",
    "soft-blue",
    "sunset",
    "twilight",
    "dawn",
    "overcast",
    "storm",
  ];

  const DEFAULT_SKY_PRESET = "natural-blue";

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
        "前面道路",
        "眺望",
        "周辺環境",
        "その他",
      ],
      templates: {
        外観: [
          "タイル張りの清潔感ある外観で落ち着いた印象",
          "明るく整ったマンション外観が印象的",
          "エントランスまわりもきれいな外観",
          "植栽のあるやわらかい雰囲気の外観",
          "シンプルで見栄えの良いマンション外観",
        ],
        間取り: [
          "家事動線を意識した使いやすい間取り",
          "各部屋の配置が分かりやすい間取図",
          "生活しやすいバランスの良い間取り",
          "収納も確保された実用的な間取り",
        ],
        リビング: [
          "採光のよい明るいリビングで開放感あり",
          "広がりを感じる清潔感あるリビング空間",
          "窓からの光が心地よいリビングダイニング",
          "落ち着いたトーンで過ごしやすいリビング",
          "家具を置きやすいゆとりあるリビング",
        ],
        "居間・リビング": [
          "日当たりのよい明るい居間でくつろげる",
          "やわらかい光が入る落ち着いた居間",
          "家族が集まりやすい広がりのある居間",
        ],
        ダイニング: [
          "明るく食事が楽しめるダイニング空間",
          "キッチンとつながる使いやすいダイニング",
          "採光のよい清潔感あるダイニング",
        ],
        キッチン: [
          "作業しやすく清潔感のあるキッチン空間",
          "明るい対面キッチンで会話もはずむ",
          "収納たっぷりの使いやすいキッチン",
          "シンプルで整った印象のキッチン",
        ],
        洋室: [
          "採光のよい明るい洋室で使いやすい",
          "収納付きで生活しやすい洋室",
          "落ち着いた雰囲気のきれいな洋室",
        ],
        和室: [
          "落ち着きのある和室で寛げる空間",
          "やわらかい印象のきれいな和室",
          "続き間としても使える和の空間",
        ],
        寝室: [
          "休息にふさわしい落ち着いた寝室",
          "収納付きで使いやすい寝室空間",
          "穏やかなトーンのきれいな寝室",
        ],
        子供部屋: [
          "明るく成長に合わせやすい子ども部屋",
          "採光のよい使いやすい子ども部屋",
          "収納もある過ごしやすい子ども部屋",
        ],
        玄関: [
          "明るく迎えやすい清潔感ある玄関",
          "収納付きで使いやすい玄関スペース",
          "すっきり整った印象の玄関まわり",
        ],
        廊下: [
          "明るく動線の良い廊下が印象的",
          "すっきり通れる清潔感ある廊下",
          "床もきれいで歩きやすい廊下空間",
        ],
        収納: [
          "しまえる場所が多く生活しやすい収納",
          "奥行きのある使いやすい収納スペース",
          "整理整頓しやすい収納力が魅力",
        ],
        浴室: [
          "清潔感のある浴室で毎日の入浴が快適",
          "明るく掃除しやすい印象の浴室",
          "落ち着いて使えるきれいな浴室空間",
        ],
        洗面: [
          "使いやすく清潔感ある洗面スペース",
          "収納付きで朝の準備がしやすい洗面",
          "明るくすっきりした洗面化粧台まわり",
        ],
        トイレ: [
          "手洗いカウンター付きで清潔感あるトイレ",
          "明るくすっきりした印象のトイレスペース",
          "温水洗浄便座付きのきれいなトイレ",
          "毎日使いやすい整ったトイレ空間",
          "コンパクトでも清潔感のあるトイレ",
          "手洗い付きで来客時も安心のトイレ",
        ],
        バルコニー: [
          "明るく開放感のあるバルコニー空間",
          "洗濯物も干しやすい広々バルコニー",
          "外の空気を感じられるバルコニー",
        ],
        共用部: [
          "きれいに保たれた共用部で好印象",
          "清潔感のあるエントランスまわり",
          "管理の行き届いた共用スペース",
        ],
        前面道路: [
          "接道の印象がよく出入りしやすい",
          "前面道路との関係が分かりやすい",
          "見通しのよい道路づけが印象的",
          "日常の出入りがしやすそうな接道",
        ],
        眺望: [
          "窓からの眺めがよく開放感がある",
          "明るく見晴らしのよい眺望が魅力",
          "空が広がる爽やかな眺めの一枚",
          "周囲の景色が心地よい眺望ポイント",
        ],
        周辺環境: [
          "生活利便を感じる落ち着いた立地感",
          "街並みの雰囲気がよい周辺環境",
          "日常使いに便利そうな立地の印象",
        ],
        その他: [
          "写真から清潔感と使いやすさが伝わる",
          "明るく整った印象のおすすめポイント",
          "住み心地のよさが感じられる一枚",
        ],
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
        "前面道路",
        "眺望",
        "周辺環境",
        "その他",
      ],
      templates: {
        外観: [
          "落ち着いた色味のきれいな外観",
          "駐車スペース付きで使いやすい外観",
          "植栽のあるやわらかい印象の外観",
          "シンプルで清潔感ある戸建て外観",
        ],
        間取り: [
          "家事動線を意識した使いやすい間取り",
          "各部屋の配置が分かりやすい間取図",
          "生活しやすいバランスの良い間取り",
        ],
        リビング: [
          "採光のよい明るいリビングで開放感あり",
          "広がりを感じる清潔感あるリビング空間",
          "家族が集まりやすい明るいリビング",
          "窓辺が心地よい落ち着いたリビング",
        ],
        "居間・リビング": [
          "日当たりのよい明るい居間でくつろげる",
          "やわらかい光が入る落ち着いた居間",
          "家族が集まりやすい広がりのある居間",
        ],
        ダイニング: [
          "明るく食事が楽しめるダイニング空間",
          "キッチンとつながる使いやすいダイニング",
          "採光のよい清潔感あるダイニング",
        ],
        キッチン: [
          "作業しやすく清潔感のあるキッチン空間",
          "明るい対面キッチンで会話もはずむ",
          "収納たっぷりの使いやすいキッチン",
          "シンプルで整った印象のキッチン",
        ],
        洋室: [
          "採光のよい明るい洋室で使いやすい",
          "収納付きで生活しやすい洋室",
          "落ち着いた雰囲気のきれいな洋室",
        ],
        和室: [
          "落ち着きのある和室で寛げる空間",
          "やわらかい印象のきれいな和室",
          "続き間としても使える和の空間",
        ],
        寝室: [
          "休息にふさわしい落ち着いた寝室",
          "収納付きで使いやすい寝室空間",
          "穏やかなトーンのきれいな寝室",
        ],
        子供部屋: [
          "明るく成長に合わせやすい子ども部屋",
          "採光のよい使いやすい子ども部屋",
          "収納もある過ごしやすい子ども部屋",
        ],
        玄関: [
          "明るく迎えやすい清潔感ある玄関",
          "収納付きで使いやすい玄関スペース",
          "すっきり整った印象の玄関まわり",
        ],
        廊下: [
          "明るく動線の良い廊下が印象的",
          "すっきり通れる清潔感ある廊下",
          "床もきれいで歩きやすい廊下空間",
        ],
        収納: [
          "しまえる場所が多く生活しやすい収納",
          "奥行きのある使いやすい収納スペース",
          "整理整頓しやすい収納力が魅力",
        ],
        浴室: [
          "清潔感のある浴室で毎日の入浴が快適",
          "明るく掃除しやすい印象の浴室",
          "落ち着いて使えるきれいな浴室空間",
        ],
        洗面: [
          "使いやすく清潔感ある洗面スペース",
          "収納付きで朝の準備がしやすい洗面",
          "明るくすっきりした洗面化粧台まわり",
        ],
        トイレ: [
          "手洗いカウンター付きで清潔感あるトイレ",
          "明るくすっきりした印象のトイレスペース",
          "温水洗浄便座付きのきれいなトイレ",
          "毎日使いやすい整ったトイレ空間",
          "コンパクトでも清潔感のあるトイレ",
          "手洗い付きで来客時も安心のトイレ",
        ],
        バルコニー: [
          "明るく開放感のあるバルコニー空間",
          "洗濯物も干しやすい広々バルコニー",
          "外の空気を感じられるバルコニー",
        ],
        庭: [
          "プライベート感のある使いやすいお庭",
          "植栽を楽しめるやわらかい庭空間",
          "手入れしやすい印象のきれいなお庭",
        ],
        駐車場: [
          "駐車しやすいカースペースが魅力",
          "出し入れしやすい敷地内駐車場",
          "日常使いに便利な駐車スペース",
        ],
        前面道路: [
          "接道の印象がよく出入りしやすい",
          "前面道路との関係が分かりやすい",
          "見通しのよい道路づけが印象的",
          "日常の出入りがしやすそうな接道",
        ],
        眺望: [
          "窓からの眺めがよく開放感がある",
          "明るく見晴らしのよい眺望が魅力",
          "空が広がる爽やかな眺めの一枚",
          "周囲の景色が心地よい眺望ポイント",
        ],
        周辺環境: [
          "閑静な住宅街の落ち着いた雰囲気",
          "生活利便を感じる周辺環境の印象",
          "街並みの雰囲気がよい立地感",
        ],
        その他: [
          "写真から清潔感と使いやすさが伝わる",
          "明るく整った印象のおすすめポイント",
          "住み心地のよさが感じられる一枚",
        ],
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
        "眺望",
        "周辺環境",
        "その他",
      ],
      templates: {
        現地: [
          "明るく開放感のある整った現地",
          "建築イメージが湧きやすい現地の印象",
          "日当たりのよさが感じられる現地",
          "すっきり見渡せるきれいな現地",
        ],
        前面道路: [
          "接道の印象がよく使いやすそう",
          "前面道路との関係が分かりやすい",
          "出入りしやすい印象の道路づけ",
          "見通しのよい接道状況が魅力",
        ],
        整形地: [
          "プランニングしやすい整形地の印象",
          "使いやすい形のきれいな整形地",
          "建築しやすいバランスの良い整形地",
        ],
        建築向き: [
          "希望の家をイメージしやすい建築向き",
          "日当たりを感じる建築しやすい土地",
          "周辺との関係がよい建築向きの印象",
        ],
        駐車場: [
          "車寄せしやすい印象の駐車スペース",
          "駐車計画を立てやすい土地の印象",
          "車の出し入れがしやすそうな配置",
        ],
        眺望: [
          "明るく見晴らしのよい眺望が魅力",
          "空が広がる開放感のある眺め",
          "周囲の景色が心地よい眺望ポイント",
          "現地からの眺めがよい一枚",
        ],
        周辺環境: [
          "閑静な住宅街の落ち着いた雰囲気",
          "生活利便を感じる周辺環境の印象",
          "街並みの雰囲気がよい立地感",
        ],
        その他: [
          "建築の可能性を感じるおすすめの土地",
          "写真から開放感が伝わる土地の一枚",
          "検討しやすい印象の現地写真",
        ],
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
    pointerEvents: "none",
    display: "none",
  });
  canvasWrap.appendChild(cursor);

  function setPanelTab(panel) {
    const tabBtn = document.querySelector(`.panel-tab[data-panel="${panel}"]`);
    if (!tabBtn || tabBtn.disabled) return;

    activePanelTab = panel;
    document.querySelectorAll(".panel-tab").forEach((tab) => {
      const isActive = tab.dataset.panel === panel;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    document.querySelectorAll(".panel-pane").forEach((pane) => {
      const isActive = pane.dataset.panelPane === panel;
      pane.classList.toggle("active", isActive);
      pane.hidden = !isActive;
    });
  }

  function updatePanelTabAvailability(enabled) {
    document.querySelectorAll('.panel-tab[data-panel="edit"], .panel-tab[data-panel="caption"]').forEach((tab) => {
      tab.disabled = !enabled;
    });
    if (!enabled && (activePanelTab === "edit" || activePanelTab === "caption")) {
      setPanelTab("photos");
    }
  }

  function enableChrome(enabled) {
    resetBtn.disabled = !enabled;
    downloadBtn.disabled = !enabled;
    saveBtn.disabled = !enabled;
    updatePanelTabAvailability(enabled);
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

  function snapshotPhotoSettings() {
    persistCaptionFromUi();
    const photo = getActivePhoto();
    if (!photo) return;
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
    photo.watermarkEnabled = isWatermarkEnabled();
    photo.watermarkPosition = getWatermarkPositionFromUi();
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
    photo.watermarkEnabled = isWatermarkEnabled();
    photo.watermarkPosition = getWatermarkPositionFromUi();
  }

  function markPhotoPixelEdited(photo) {
    if (photo) photo.pixelEdited = true;
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
      const body = clampCaptionBody(stripCaptionPrefix(text));
      if (!body) return;
      const opt = document.createElement("option");
      opt.value = body;
      const full = formatCaptionOutput(body);
      const count = charLen(isCaptionPrefixEnabled() ? full : body);
      opt.textContent = `${i + 1}. ${full}（${count}文字）`;
      captionTemplate.append(opt);
    });
  }

  function isCaptionPrefixEnabled() {
    return captionPrefixEnabled;
  }

  function getCaptionBodyMax() {
    return isCaptionPrefixEnabled() ? CAPTION_MAX_LEN - CAPTION_PREFIX_LEN : CAPTION_MAX_LEN;
  }

  function charLen(text) {
    return Array.from(String(text || "")).length;
  }

  function clampCaptionBody(text) {
    return Array.from(String(text || "").trim())
      .slice(0, getCaptionBodyMax())
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

  function formatCaptionOutput(text) {
    const body = clampCaptionBody(stripCaptionPrefix(text));
    if (!isCaptionPrefixEnabled()) return body;
    const full = body ? `${CAPTION_PREFIX}${body}` : CAPTION_PREFIX;
    return Array.from(full).slice(0, CAPTION_MAX_LEN).join("");
  }

  /** @deprecated use formatCaptionOutput */
  function withCaptionPrefix(text) {
    return formatCaptionOutput(text);
  }

  function updateCaptionPrefixUi() {
    if (captionPrefixPicker) {
      captionPrefixPicker.querySelectorAll(".caption-prefix-mode-btn").forEach((btn) => {
        const active = (btn.dataset.prefix === "on") === isCaptionPrefixEnabled();
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }
    if (captionPrefixBadge) captionPrefixBadge.hidden = !isCaptionPrefixEnabled();
    if (captionInputWrap) captionInputWrap.classList.toggle("no-prefix", !isCaptionPrefixEnabled());
    if (captionInput) captionInput.maxLength = getCaptionBodyMax();
    if (captionMaxLabel) captionMaxLabel.textContent = String(CAPTION_MAX_LEN);
    if (captionPrefixLabelNote) {
      captionPrefixLabelNote.textContent = isCaptionPrefixEnabled() ? "（《杏栄》込み）" : "";
    }
    if (captionLimitHint) {
      captionLimitHint.textContent = isCaptionPrefixEnabled()
        ? `《杏栄》を含めて合計${CAPTION_MAX_LEN}文字以内です`
        : `本文のみ合計${CAPTION_MAX_LEN}文字以内です（《杏栄》は付けません）`;
    }
    if (captionInput?.value) {
      captionInput.value = clampCaptionBody(stripCaptionPrefix(captionInput.value));
      persistCaptionFromUi();
    }
    updateCaptionCount();
    if (captionCategory) fillCaptionTemplates(captionCategory.value || "");
    if (photos.length) renderGallery();
  }

  function setCaptionPrefixEnabled(enabled, { silent = false } = {}) {
    captionPrefixEnabled = Boolean(enabled);
    localStorage.setItem(CAPTION_PREFIX_STORAGE, captionPrefixEnabled ? "1" : "0");
    updateCaptionPrefixUi();
    if (!silent) {
      showToast(captionPrefixEnabled ? "《杏栄》を付ける設定にしました" : "《杏栄》なしで出力します");
    }
  }

  function restoreCaptionPrefixPreference() {
    const saved = localStorage.getItem(CAPTION_PREFIX_STORAGE);
    captionPrefixEnabled = saved !== "0";
    updateCaptionPrefixUi();
  }

  function updateCaptionCount() {
    const label = document.getElementById("captionCountLabel");
    if (!label) return;
    const body = clampCaptionBody(stripCaptionPrefix(captionInput?.value || ""));
    const counted = isCaptionPrefixEnabled() ? formatCaptionOutput(body) : body;
    label.textContent = String(charLen(counted));
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
      if (captionEmpty) captionEmpty.hidden = false;
      captionCategory.value = "";
      captionInput.value = "";
      fillCaptionTemplates("");
      updateCaptionCount();
      return;
    }
    captionBox.hidden = false;
    if (captionEmpty) captionEmpty.hidden = true;
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
          ? formatCaptionOutput(photo.caption)
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
      .map((caption) => formatCaptionOutput(caption))
      .join("\n");
  }

  const GEMINI_KEY_STORAGE = "lumen-gemini-api-key";
  const PROPERTY_ADDRESS_STORAGE = "lumen-property-address";
  const WATERMARK_STORAGE = "lumen-watermark-enabled";
  const OVERWRITE_STORAGE = "lumen-overwrite-existing";
  const WATERMARK_POS_STORAGE = "lumen-watermark-position";
  const WATERMARK_SRC = "assets/kyouei-watermark.png";
  const WATERMARK_POSITIONS = ["top-left", "top-right", "bottom-left", "bottom-right"];
  const DEFAULT_WATERMARK_POSITION = "top-left";

  /** @type {HTMLImageElement | null} */
  let watermarkImage = null;
  let watermarkLoadPromise = null;
  let activeWatermarkPosition = DEFAULT_WATERMARK_POSITION;
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
    眺望: "窓や現地からの眺め、空の広がり、周囲の建物・緑、開放感（距離の断定はしない）",
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

  let sharedGeminiReady = false;

  function getPersonalGeminiApiKey() {
    return (geminiApiKey.value || localStorage.getItem(GEMINI_KEY_STORAGE) || "").trim();
  }

  function hasGeminiAccess() {
    return Boolean(getPersonalGeminiApiKey() || sharedGeminiReady);
  }

  function geminiMissingKeyMessage() {
    return "Gemini APIキーがありません。社内サーバーの .env か、画面の入力欄を確認してください";
  }

  function buildGeminiUrl(apiPath) {
    const personal = getPersonalGeminiApiKey();
    if (personal) {
      return `https://generativelanguage.googleapis.com/${apiPath}?key=${encodeURIComponent(personal)}`;
    }
    if (sharedGeminiReady) {
      return `/api/gemini/${apiPath}`;
    }
    return "";
  }

  function updateSharedGeminiHint() {
    if (getPersonalGeminiApiKey()) return;
    if (sharedGeminiReady) {
      setApiKeyStatus("社内サーバーの共通キーを使用します（個人キーは不要）", { ok: true });
    }
  }

  async function refreshSharedGeminiStatus() {
    try {
      const res = await fetch("/api/gemini-status", { cache: "no-store" });
      if (!res.ok) {
        sharedGeminiReady = false;
        return;
      }
      const data = await res.json().catch(() => ({}));
      sharedGeminiReady = Boolean(data.configured);
    } catch (_) {
      sharedGeminiReady = false;
    }
    updateSharedGeminiHint();
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
    if (!hasGeminiAccess()) {
      setApiKeyStatus(geminiMissingKeyMessage(), { error: true });
      showToast(geminiMissingKeyMessage(), { error: true });
      return false;
    }

    const prev = verifyApiKeyBtn.textContent;
    verifyApiKeyBtn.disabled = true;
    verifyApiKeyBtn.textContent = "確認中…";
    setApiKeyStatus("接続を確認しています…");

    try {
      // 生成は使わず models 一覧だけで確認（クォータ消費を抑える）
      const listUrl = buildGeminiUrl("v1beta/models");
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
      const usingShared = !getPersonalGeminiApiKey() && sharedGeminiReady;

      setApiKeyStatus(
        usingShared ? `社内共通キーは有効です（${modelLabel}）` : `有効です（${modelLabel}）`,
        { ok: true },
      );
      showToast(usingShared ? "社内共通キーは有効です" : "APIキーは有効です");
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

  function isOverwriteEnabled() {
    return overwriteExisting ? overwriteExisting.checked : true;
  }

  function restoreOverwritePreference() {
    if (!overwriteExisting) return;
    const saved = localStorage.getItem(OVERWRITE_STORAGE);
    overwriteExisting.checked = saved !== "0";
  }

  function persistOverwritePreference() {
    if (!overwriteExisting) return;
    localStorage.setItem(OVERWRITE_STORAGE, isOverwriteEnabled() ? "1" : "0");
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

  function getWatermarkMetrics(canvasW, canvasH) {
    const shortEdge = Math.min(canvasW, canvasH);
    const logoW = clamp(shortEdge * 0.13, 64, 200);
    const aspect = watermarkImage.naturalWidth / watermarkImage.naturalHeight;
    const logoH = logoW / aspect;
    const margin = clamp(shortEdge * 0.022, 10, 28);
    return { logoW, logoH, margin };
  }

  function getWatermarkCoords(canvasW, canvasH, position) {
    const { logoW, logoH, margin } = getWatermarkMetrics(canvasW, canvasH);
    switch (position) {
      case "top-right":
        return { x: canvasW - logoW - margin, y: margin, logoW, logoH };
      case "bottom-left":
        return { x: margin, y: canvasH - logoH - margin, logoW, logoH };
      case "bottom-right":
        return {
          x: canvasW - logoW - margin,
          y: canvasH - logoH - margin,
          logoW,
          logoH,
        };
      case "top-left":
      default:
        return { x: margin, y: margin, logoW, logoH };
    }
  }

  function getWatermarkPositionFromUi() {
    return activeWatermarkPosition;
  }

  function setWatermarkPosition(position) {
    activeWatermarkPosition = WATERMARK_POSITIONS.includes(position)
      ? position
      : DEFAULT_WATERMARK_POSITION;
    localStorage.setItem(WATERMARK_POS_STORAGE, activeWatermarkPosition);
    updateWatermarkPosUi();
    persistWatermarkToActivePhoto();
    if (baseImageData) renderEffects();
  }

  function updateWatermarkPosUi() {
    if (!watermarkPosPicker) return;
    const current = getWatermarkPositionFromUi();
    const disabled = !isWatermarkEnabled();
    watermarkPosPicker.querySelectorAll(".watermark-pos-btn").forEach((btn) => {
      const active = btn.dataset.pos === current;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.disabled = disabled;
    });
  }

  function getWatermarkPositionForPhoto(photo) {
    if (!photo) return getWatermarkPositionFromUi();
    if (photo.id === activePhotoId) return getWatermarkPositionFromUi();
    return photo.watermarkPosition || DEFAULT_WATERMARK_POSITION;
  }

  function drawWatermarkOnCanvas(targetCanvas, position = DEFAULT_WATERMARK_POSITION) {
    if (!isWatermarkEnabled() || !watermarkImage) return;
    const ctx2 = targetCanvas.getContext("2d");
    const w = targetCanvas.width;
    const h = targetCanvas.height;
    const { x, y, logoW, logoH } = getWatermarkCoords(w, h, position);
    ctx2.save();
    ctx2.globalAlpha = 0.58;
    ctx2.drawImage(watermarkImage, x, y, logoW, logoH);
    ctx2.restore();
  }

  function applyWatermarkToCanvas(canvas, position = getWatermarkPositionFromUi()) {
    drawWatermarkOnCanvas(canvas, position);
    return canvas;
  }

  function persistWatermarkToActivePhoto() {
    const photo = getActivePhoto();
    if (!photo) return;
    photo.watermarkEnabled = isWatermarkEnabled();
    photo.watermarkPosition = getWatermarkPositionFromUi();
  }

  function saveWatermarkPreference() {
    localStorage.setItem(WATERMARK_STORAGE, isWatermarkEnabled() ? "1" : "0");
    persistWatermarkToActivePhoto();
  }

  function restoreWatermarkPreference() {
    if (watermarkEnabled) {
      const saved = localStorage.getItem(WATERMARK_STORAGE);
      watermarkEnabled.checked = saved !== "0";
    }
    const savedPos = localStorage.getItem(WATERMARK_POS_STORAGE);
    activeWatermarkPosition = WATERMARK_POSITIONS.includes(savedPos)
      ? savedPos
      : DEFAULT_WATERMARK_POSITION;
    updateWatermarkPosUi();
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
    const bodyMax = getCaptionBodyMax();
    const minAim = Math.max(8, Math.floor(bodyMax * 0.85));
    const addressBlock = address
      ? `物件住所: ${address}
※住所がある場合:
- カテゴリが「周辺環境」「外観」「現地」などのとき、エリアから受ける雰囲気を補足してよい
- 「徒歩○分」「○m」など正確な数値は書かない
- 室内カテゴリのときは住所より写真の印象を優先する`
      : `物件住所: （未入力）`;

    const categoryBlock = hintCategory
      ? `指定カテゴリ: ${hintCategory}
※重要: category は必ず「${hintCategory}」にする。
写真をそのカテゴリの視点で見て、写っているもの・光・空気感からキャプションを作る。`
      : `指定カテゴリ: （未指定）
カテゴリは写真内容から判断し、次のいずれかにする: ${categories}`;

    const visualHint = hintCategory
      ? CATEGORY_VISUAL_HINTS[hintCategory] || CATEGORY_VISUAL_HINTS["その他"]
      : "写真の主題となる空間・設備・景色・光・色味・雰囲気を特定する";
    const visualBlock = `観察のヒント（事実確認用）:
${visualHint}`;

    const fileBlock = photoName
      ? `写真ファイル名（参考・断定しない）: ${photoName}`
      : "";

    const lengthBlock = isCaptionPrefixEnabled()
      ? `文字数（最重要）:
- 最終表示では先頭に《杏栄》（${CAPTION_PREFIX_LEN}文字）が付く
- caption 本文は《杏栄》なしで、ちょうど ${bodyMax} 文字を目指す（最低でも ${minAim} 文字以上）
- 短い名詞句だけで終わらせず、光・広がり・質感・使い勝手など写真から受ける印象を足して上限近くまで使う
- ${bodyMax} 文字を超えない`
      : `文字数（最重要）:
- caption 本文はちょうど ${bodyMax} 文字を目指す（最低でも ${minAim} 文字以上）
- 短い名詞句だけで終わらせず、光・広がり・質感・使い勝手など写真から受ける印象を足して上限近くまで使う
- ${bodyMax} 文字を超えない`;

    return `添付写真を注意深く観察し、不動産登録用の日本語キャプションを作成してください。

方針:
- HOUSEDOなどの定型文・決まり文句に寄せない
- 写真を見た人が感じる印象・雰囲気を、写っている事実に基づいて言葉にする
- 設備名の羅列ではなく、「明るさ」「開放感」「清潔感」「落ち着き」「広がり」など視覚的な印象を優先する
- 写っていない設備・特徴は絶対に書かない

物件種別: ${typeConfig.label}
種別の注意: ${typeConfig.focus}

${categoryBlock}
${visualBlock}
${fileBlock}
${addressBlock}

${lengthBlock}

作業手順（必ず守る）:
1. 写真に実際に写っているものと、そこから受ける印象を observation に書く
2. observation を根拠に caption を1つ作る（印象語は写真の見た目と矛盾しないこと）
3. 写っていない設備・特徴は caption に入れない（例: 食洗機が見えなければ「食洗機付き」と書かない）
4. caption は可能な限り ${bodyMax} 文字ちょうどに近づける

出力ルール:
1. 出力は日本語のJSONオブジェクトのみ。英語の説明文・前置き・コードフェンスは禁止
2. 次の形だけを返す（前後に文字を付けない）
{"category":"カテゴリ名","observation":"写真で確認できた事実と印象","caption":"本文のみ（《杏栄》なし）","charCount":本文の文字数}
3. category は指定があればそのカテゴリ。なければ次のいずれか: ${categories}
4. caption は日本語のみ。《杏栄》は付けない。本文のみ ${bodyMax} 文字以内、目標は ${bodyMax} 文字
5. 【カテゴリ】や■は付けない
6. 「です・ます」は使わず、読みやすい短い文やフレーズでまとめる（句読点は必要なら可）
7. 指定カテゴリと物件種別に合わない表現は禁止
8. 誇大表現・虚偽（正確な駅距離・面積・価格など）は禁止
9. 定型の「おすすめポイント」「詳細はお問合せを」などの無難な文言だけで埋めない
10. charCount は caption の文字数（日本語1文字＝1）を自己点検して入れる
11. 「Here is the JSON」など英語コメントは絶対に書かない`;
  }

  function isUsableCaptionText(text) {
    const body = clampCaptionBody(stripCaptionPrefix(text));
    if (!body) return false;
    if (/Here is|JSON|```|requested|following|caption\s*:/i.test(body)) return false;
    if (/^[A-Za-z0-9\s\{\}\[\]:"',.`_-]+$/.test(body)) return false;
    const jp = (body.match(/[\u3040-\u30ff\u3400-\u9fff々ー]/g) || []).length;
    return jp >= Math.min(4, charLen(body));
  }

  function pickFallbackCaption(category) {
    const list = (getCaptionTemplates()[category] || getCaptionTemplates()["その他"] || []).map((t) =>
      clampCaptionBody(stripCaptionPrefix(t))
    ).filter(Boolean);
    if (!list.length) {
      return clampCaptionBody("写真から清潔感と使いやすさが伝わる");
    }
    return list[Math.floor(Math.random() * list.length)];
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
        caption = clampCaptionBody(caption.replace(/^【[^】]*】\s*/, "").replace(/^■\s*/g, ""));
        if (!isUsableCaptionText(caption)) throw new Error("empty caption");
        return { category, caption };
      } catch (_) {
        /* fallback below */
      }
    }

    const cleaned = clampCaptionBody(
      stripCaptionPrefix(
        raw
          .replace(/^```(?:json)?\s*|\s*```$/g, "")
          .replace(/^Here is[\s\S]*?:\s*/i, "")
          .replace(/^【[^】]*】\s*/, "")
          .replace(/^■\s*/g, "")
          .trim()
      )
    );
    if (!isUsableCaptionText(cleaned)) throw new Error("empty response");
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

  async function callGeminiCaption(base64Jpeg, hintCategory, photoName = "") {
    const prompt = buildCaptionPrompt(hintCategory, photoName);
    const baseBody = {
      systemInstruction: {
        parts: [
          {
            text: `あなたは不動産物件写真のキャプション作家です。必ず日本語のJSONだけを返します。英語の説明やコードフェンスは禁止です。定型文に頼らず、写真から受ける印象を写っている事実に基づいて自然な日本語で表現します。写っていない設備は断定しません。文字数は指定上限にできるだけ近づけます（目標: 本文${getCaptionBodyMax()}文字）。`,
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
        temperature: 0.45,
        maxOutputTokens: 512,
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
            const url = buildGeminiUrl(`v1beta/models/${model}:generateContent`);
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

  async function expandCaptionToLimit(base64Jpeg, draftCaption, hintCategory) {
    const bodyMax = getCaptionBodyMax();
    const draft = clampCaptionBody(stripCaptionPrefix(draftCaption));
    if (charLen(draft) >= Math.floor(bodyMax * 0.9)) return draft;

    const prompt = `次の不動産写真キャプションを、写真の印象に合わせて自然に伸ばしてください。

現在のcaption: ${draft}
指定カテゴリ: ${hintCategory || "（なし）"}
目標文字数: 本文ちょうど ${bodyMax} 文字（最低でも ${Math.floor(bodyMax * 0.9)} 文字）

ルール:
- HOUSEDOなどの定型文に寄せない
- 写真から受ける印象（光・広がり・清潔感・落ち着きなど）を足す
- 写っていない設備は追加しない
- 《杏栄》は付けない
- JSONのみ返す: {"caption":"本文","charCount":文字数}`;

    const body = {
      systemInstruction: {
        parts: [
          {
            text: `短いキャプションを、写真の印象に基づいて自然に伸ばす専門家です。目標は本文${bodyMax}文字です。虚偽の設備は追加しません。`,
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
        temperature: 0.5,
        maxOutputTokens: 256,
        responseMimeType: "application/json",
      },
    };

    for (const model of GEMINI_MODELS.slice(0, 3)) {
      try {
        const url = buildGeminiUrl(`v1beta/models/${model}:generateContent`);
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) continue;
        const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("") || "";
        if (!text) continue;
        const parsed = parseCaptionResponse(text);
        const expanded = clampCaptionBody(stripCaptionPrefix(parsed.caption));
        if (charLen(expanded) > charLen(draft)) return expanded;
      } catch (_) {
        /* try next model */
      }
    }
    return draft;
  }

  async function generateCaptionForPhoto(photo, { syncUi = false, requireCategory = true } = {}) {
    if (!hasGeminiAccess()) throw new Error(geminiMissingKeyMessage());

    const category =
      (syncUi ? captionCategory.value : "") ||
      photo.captionCategory ||
      "";
    if (requireCategory && !category) {
      throw new Error("先にカテゴリを選んでから生成してください");
    }

    const source = canvasFromPhoto(photo);
    const base64 = imageToJpegBase64(source, 1536);
    let usedFallback = false;
    let result;
    try {
      result = await callGeminiCaption(base64, category, photo.name || "");
    } catch (err) {
      const fallback = pickFallbackCaption(category);
      result = { category: category || "その他", caption: fallback };
      usedFallback = true;
      console.warn("AI caption failed; using template fallback", err);
    }

    const bodyMax = getCaptionBodyMax();
    let caption = clampCaptionBody(stripCaptionPrefix(result.caption));
    if (!isUsableCaptionText(caption)) {
      caption = pickFallbackCaption(category || result.category);
      usedFallback = true;
    } else if (!usedFallback && charLen(caption) < Math.floor(bodyMax * 0.85)) {
      if (syncUi) setAiStatus("文字数を上限近くまで調整中…");
      try {
        caption = await expandCaptionToLimit(base64, caption, category || result.category);
      } catch (_) {
        /* keep original */
      }
      if (!isUsableCaptionText(caption)) {
        caption = pickFallbackCaption(category || result.category);
        usedFallback = true;
      }
    }

    // ユーザー指定カテゴリを優先して固定
    photo.captionCategory = category || result.category;
    photo.caption = clampCaptionBody(caption);

    if (syncUi && photo.id === activePhotoId) {
      captionCategory.value = photo.captionCategory;
      captionInput.value = photo.caption;
      fillCaptionTemplates(photo.captionCategory);
      updateCaptionCount();
    }
    return { ...result, caption: photo.caption, usedFallback };
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
      const result = await generateCaptionForPhoto(photo, { syncUi: true, requireCategory: true });
      renderGallery();
      if (result.usedFallback) {
        setAiStatus("AI応答が不安定だったため定型文を入れました。必要なら差し替えてください");
        showToast("定型文でキャプションを入れました");
      } else {
        setAiStatus("キャプションを生成しました");
        showToast("キャプションを生成しました");
      }
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
    if (!hasGeminiAccess()) {
      notifyError(geminiMissingKeyMessage());
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
      return true;
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
        cap.textContent = formatCaptionOutput(photo.caption);
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
    invalidateSkyCaches();
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
    skyKeepClouds.checked = false;
    setActiveSkyPresetId(DEFAULT_SKY_PRESET);
    restoreWatermarkPreference();
    restoreOverwritePreference();
    restoreCaptionPrefixPreference();
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
    if (captionEmpty) captionEmpty.hidden = false;
    captionCategory.value = "";
    captionInput.value = "";
    fillCaptionTemplates("");
    renderGallery();
    updateMosaicUndoUi();
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
    skyKeepClouds.checked = photo.skyKeepClouds === true;
    if (watermarkEnabled) {
      watermarkEnabled.checked = photo.watermarkEnabled !== false;
    }
    activeWatermarkPosition = WATERMARK_POSITIONS.includes(photo.watermarkPosition)
      ? photo.watermarkPosition
      : DEFAULT_WATERMARK_POSITION;
    updateWatermarkPosUi();
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
      invalidateSkyCaches();
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
    updateMosaicUndoUi();
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

  function clearListingInfo({ silent = false } = {}) {
    propertyAddress.value = "";
    savePropertyAddress();
    propertyType.value = "mansion";
    localStorage.setItem(PROPERTY_TYPE_STORAGE, "mansion");
    rebuildCaptionCategories(false);

    photos.forEach((photo) => {
      photo.name = photo.importName || photo.name;
      photo.caption = "";
      photo.captionCategory = "";
    });

    const active = getActivePhoto();
    if (active) {
      syncNameField();
      syncCaptionField();
      fileHint.textContent = active.name;
    } else {
      photoNameInput.value = "";
      captionCategory.value = "";
      captionInput.value = "";
      fillCaptionTemplates("");
      updateCaptionCount();
    }

    renderGallery();
    if (!silent) showToast("住所・名前・キャプションをクリアしました");
  }

  function returnToHomeScreen() {
    clearAllPhotos();
    clearListingInfo({ silent: true });
    setPanelTab("photos");
    if (fileInput) fileInput.value = "";
    showToast("初期画面に戻しました");
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
            importName: file.name,
            sourceImage: img,
            thumbUrl: makeThumbUrl(img),
            baseImageData: null,
            preMosaicImageData: null,
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
            skyKeepClouds: false,
            skyPaint: null,
            watermarkEnabled: isWatermarkEnabled(),
            watermarkPosition: getWatermarkPositionFromUi(),
            captionCategory: "",
            caption: "",
            pixelEdited: false,
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
    const interactive = activeTool === "hide" || activeTool === "crop" || activeTool === "sky";
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
    invalidateSkyCaches({ clearPaint: true });
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
      clearPreMosaicSnapshot(photo);
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

  function invalidateSkyCaches({ clearPaint = false } = {}) {
    skyMaskCache = { key: "", mask: null };
    litPreviewCache = { source: null, data: null };
    if (clearPaint) clearSkyPaintForPhoto(getActivePhoto());
  }

  /** baseImageData を直接書き換えたあとに呼ぶ（明るさ等のプレビューキャッシュを捨てる） */
  function notifyBasePixelsChanged() {
    skyMaskCache = { key: "", mask: null };
    litPreviewCache = { source: null, data: null };
  }

  function getLitPreviewImageData() {
    if (!baseImageData) return null;
    if (litPreviewCache.source === baseImageData && litPreviewCache.data) {
      return litPreviewCache.data;
    }
    const w = baseImageData.width;
    const h = baseImageData.height;
    const longEdge = Math.max(w, h);
    let data = baseImageData;
    if (longEdge > LIT_PREVIEW_MAX_EDGE) {
      const scale = LIT_PREVIEW_MAX_EDGE / longEdge;
      data = scaleImageData(
        baseImageData,
        Math.max(1, Math.round(w * scale)),
        Math.max(1, Math.round(h * scale)),
      );
    }
    litPreviewCache = { source: baseImageData, data };
    return data;
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
      keepClouds: keepClouds === true,
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
    const minLum = 0.58 + yRatio * 0.14;
    const maxSat = 0.18 - yRatio * 0.08;
    const isOvercast =
      lum >= minLum &&
      sat <= Math.max(0.07, maxSat) &&
      b + 8 >= g &&
      g + 12 >= r &&
      b + 6 >= r &&
      Math.abs(r - g) < 26 &&
      Math.abs(g - b) < 28;
    const isPaleSky =
      lum > 0.76 &&
      sat < 0.1 &&
      b + 6 >= r &&
      Math.abs(r - g) < 20 &&
      Math.abs(g - b) < 20;

    if (isBlueSky || isOvercast || isPaleSky) return true;
    return false;
  }

  /** 横長の積雲っぽい密度（0〜1） */
  function sampleSkyCloudDensity(xRatio, yRatio, t, preview) {
    let n1;
    let n2;
    let n3;
    let n4;
    if (preview) {
      n1 = hashNoise(Math.floor(xRatio * 28), Math.floor(yRatio * 14));
      n2 = hashNoise(Math.floor(xRatio * 56 + 2), Math.floor(yRatio * 30 + 1));
      n3 = hashNoise(Math.floor(xRatio * 12 + 5), Math.floor(yRatio * 8 + 3));
      n4 = hashNoise(Math.floor(xRatio * 90 + 9), Math.floor(yRatio * 48 + 4));
    } else {
      // 横方向に伸ばして自然な雲の帯にする
      n1 = softNoise(xRatio * 3.6, yRatio * 2.2);
      n2 = softNoise(xRatio * 7.4 + 2.3, yRatio * 4.6 + 1.1);
      n3 = softNoise(xRatio * 1.6 + 8.1, yRatio * 1.15 + 3.4);
      n4 = softNoise(xRatio * 14.5 + 4.7, yRatio * 9.2 + 2.8);
    }
    const base = n1 * 0.45 + n2 * 0.3 + n3 * 0.15 + n4 * 0.1;
    // 地平寄りのほうが雲が出やすい
    const band = 0.42 + t * 0.12;
    let cloud = Math.pow(Math.max(0, base - band), 1.25);
    // やわらかい輪郭
    cloud = cloud * cloud * (3 - 2 * cloud);
    return clamp(cloud, 0, 1);
  }

  /** 置き換え用の新しい空（大気散乱っぽいグラデ＋薄い霞） */
  function sampleReplacementSky(xRatio, yRatio, opts) {
    const { preset, range, brightness, temperature, scale, shift } = opts;
    const span = Math.max(0.05, range * scale);
    const t = clamp((yRatio - shift) / span, 0, 1);
    // 天頂の青を長めに保ち、地平近くで明るくする
    const eased = Math.pow(t, 0.78);
    let r = preset.zenith.r * (1 - eased) + preset.horizon.r * eased;
    let g = preset.zenith.g * (1 - eased) + preset.horizon.g * eased;
    let b = preset.zenith.b * (1 - eased) + preset.horizon.b * eased;

    if (preset.haze) {
      const hazeT = Math.pow(t, 1.35);
      const hs = preset.haze.strength * hazeT;
      r = r * (1 - hs) + preset.haze.r * hs;
      g = g * (1 - hs) + preset.haze.g * hs;
      b = b * (1 - hs) + preset.haze.b * hs;
    }

    if (preset.glow) {
      const glowT = Math.pow(1 - t, 1.6);
      const gs = preset.glow.strength * glowT;
      r = r * (1 - gs) + preset.glow.r * gs;
      g = g * (1 - gs) + preset.glow.g * gs;
      b = b * (1 - gs) + preset.glow.b * gs;
    }

    // わずかな左右の色むら（写真っぽさ）
    const side =
      opts.preview
        ? (hashNoise(Math.floor(xRatio * 24), Math.floor(yRatio * 10)) - 0.5)
        : (softNoise(xRatio * 2.4, yRatio * 1.1) - 0.5);
    r += side * 4;
    g += side * 2;
    b += side * 6;

    const warm = preset.warmth + temperature / 120;
    r += warm * 28;
    b -= warm * 28;
    r += temperature * 0.55;
    b -= temperature * 0.55;
    r += brightness * 1.8;
    g += brightness * 1.8;
    b += brightness * 1.8;

    if (preset.clouds > 0) {
      const cloud = sampleSkyCloudDensity(xRatio, yRatio, t, opts.preview);
      const amount = cloud * preset.clouds * (0.34 + t * 0.22);
      if (amount > 0.01) {
        // 明るい雲＋わずかな影で立体感
        const shade = cloud * preset.clouds * 0.12;
        const cr = 245 - shade * 18;
        const cg = 248 - shade * 14;
        const cb = 252 - shade * 8;
        r = r * (1 - amount) + cr * amount;
        g = g * (1 - amount) + cg * amount;
        b = b * (1 - amount) + cb * amount;
      }
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

  function isWireLikePixel(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    // 電線・金網など: 暗め／低彩度。木や壁の強い色は除外
    if (g > r + 20 && g > b + 14 && sat > 0.14) return false;
    if (r > g + 30 && r > b + 25 && sat > 0.22) return false;
    return lum < 0.62 && sat < 0.28;
  }

  /**
   * 画像上端から連結した空だけをマスク化。
   * 電線のような細い障害は飛び越えて、囲まれた空も取り込む。
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

    // 電線ギャップを渡れる通路（置き換え対象にはしない）
    const passable = new Uint8Array(w * h);
    const gapMax = Math.max(2, Math.min(6, Math.round(Math.min(w, h) * 0.005)));
    for (let y = 0; y <= maxY; y += 1) {
      for (let x = 0; x < w; x += 1) {
        const idx = y * w + x;
        if (candidate[idx]) {
          passable[idx] = 1;
          continue;
        }
        const i = idx * 4;
        if (!isWireLikePixel(src[i], src[i + 1], src[i + 2])) continue;
        let skyLR = false;
        let skyTB = false;
        for (let d = 1; d <= gapMax; d += 1) {
          if (x - d >= 0 && candidate[y * w + (x - d)]) {
            for (let e = 1; e <= gapMax; e += 1) {
              if (x + e < w && candidate[y * w + (x + e)]) {
                skyLR = true;
                break;
              }
            }
          }
          if (skyLR) break;
        }
        for (let d = 1; d <= gapMax; d += 1) {
          if (y - d >= 0 && candidate[(y - d) * w + x]) {
            for (let e = 1; e <= gapMax; e += 1) {
              if (y + e <= maxY && candidate[(y + e) * w + x]) {
                skyTB = true;
                break;
              }
            }
          }
          if (skyTB) break;
        }
        if (skyLR || skyTB) passable[idx] = 2;
      }
    }

    const hard = new Uint8Array(w * h);
    const visited = new Uint8Array(w * h);
    const queue = new Int32Array(w * h);
    let qh = 0;
    let qt = 0;

    const seedRows = Math.max(3, Math.floor(h * 0.06));
    for (let y = 0; y < seedRows; y += 1) {
      for (let x = 0; x < w; x += 1) {
        const idx = y * w + x;
        if (!candidate[idx] || visited[idx]) continue;
        visited[idx] = 1;
        hard[idx] = 1;
        queue[qt++] = idx;
      }
    }

    const dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ];

    function tryVisitSky(nidx, pr, pg, pb, plum, downward) {
      if (visited[nidx] || !candidate[nidx]) return;
      const ni = nidx * 4;
      const nr = src[ni];
      const ng = src[ni + 1];
      const nb = src[ni + 2];
      const nlum = 0.299 * nr + 0.587 * ng + 0.114 * nb;
      const colorDist = Math.abs(nr - pr) + Math.abs(ng - pg) + Math.abs(nb - pb);
      if (Math.abs(nlum - plum) > 26) return;
      if (colorDist > 64) return;
      if (downward) {
        if (nlum < plum - 12) return;
        if (colorDist > 40) return;
      }
      visited[nidx] = 1;
      hard[nidx] = 1;
      queue[qt++] = nidx;
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

      for (let n = 0; n < dirs.length; n += 1) {
        const dx = dirs[n][0];
        const dy = dirs[n][1];
        // 隣接、および電線ギャップを越えた先の空
        for (let step = 1; step <= gapMax; step += 1) {
          const nx = x + dx * step;
          const ny = y + dy * step;
          if (nx < 0 || ny < 0 || nx >= w || ny > maxY) break;
          const nidx = ny * w + nx;
          if (step > 1) {
            // 間が電線通路でつながっているときだけジャンプ
            let bridged = true;
            for (let s = 1; s < step; s += 1) {
              const bx = x + dx * s;
              const by = y + dy * s;
              const bidx = by * w + bx;
              if (passable[bidx] !== 2 && !candidate[bidx]) {
                bridged = false;
                break;
              }
            }
            if (!bridged) break;
          }
          if (candidate[nidx]) {
            tryVisitSky(nidx, pr, pg, pb, plum, dy > 0);
            break;
          }
          if (passable[nidx] !== 2) break;
        }
      }
    }

    // 電線で囲まれて取り残された空パッチを近傍から回収
    for (let pass = 0; pass < 5; pass += 1) {
      let added = 0;
      for (let y = 0; y <= maxY; y += 1) {
        for (let x = 0; x < w; x += 1) {
          const idx = y * w + x;
          if (!candidate[idx] || hard[idx]) continue;
          let near = 0;
          for (let dy = -2; dy <= 2; dy += 1) {
            for (let dx = -2; dx <= 2; dx += 1) {
              if (!dx && !dy) continue;
              const nx = x + dx;
              const ny = y + dy;
              if (nx < 0 || ny < 0 || nx >= w || ny > maxY) continue;
              if (hard[ny * w + nx]) near += 1;
            }
          }
          if (near >= 5) {
            hard[idx] = 1;
            added += 1;
          }
        }
      }
      if (!added) break;
    }

    const radius = Math.max(1, Math.round(Math.min(w, h) * 0.003 * (1 + edgeFade * 1.8)));
    const soft = softBlurSkyMask(hard, w, h, maxY, radius);
    skyMaskCache = { key, mask: soft };
    return soft;
  }

  /** 分離ボックスぼかし（O(半径)）。従来の二重ループぼかしより大幅に軽い */
  function softBlurSkyMask(hard, w, h, maxY, radius) {
    const soft = new Float32Array(w * h);
    const tmp = new Float32Array(w * h);
    const yLimit = Math.min(h - 1, maxY + radius);

    for (let y = 0; y <= yLimit; y += 1) {
      const row = y * w;
      let sum = 0;
      for (let x = 0; x <= Math.min(w - 1, radius); x += 1) sum += hard[row + x];
      for (let x = 0; x < w; x += 1) {
        const x0 = Math.max(0, x - radius);
        const x1 = Math.min(w - 1, x + radius);
        if (x > 0) {
          const leave = x - radius - 1;
          if (leave >= 0) sum -= hard[row + leave];
          const enter = x + radius;
          if (enter < w) sum += hard[row + enter];
        }
        tmp[row + x] = sum / (x1 - x0 + 1);
      }
    }

    for (let x = 0; x < w; x += 1) {
      let sum = 0;
      for (let y = 0; y <= Math.min(yLimit, radius); y += 1) sum += tmp[y * w + x];
      for (let y = 0; y <= Math.min(h - 1, maxY); y += 1) {
        const y0 = Math.max(0, y - radius);
        const y1 = Math.min(yLimit, y + radius);
        if (y > 0) {
          const leave = y - radius - 1;
          if (leave >= 0) sum -= tmp[leave * w + x];
          const enter = y + radius;
          if (enter <= yLimit) sum += tmp[enter * w + x];
        }
        soft[y * w + x] = sum / (y1 - y0 + 1);
      }
    }
    return soft;
  }

  function blendSkyPixel(origR, origG, origB, yRatio, xRatio, maskValue, opts) {
    const { strength, keepClouds } = opts;
    if (strength <= 0 || maskValue <= 0.02) {
      return applyForegroundLight(origR, origG, origB, yRatio, maskValue, opts);
    }

    // 境界以外は元の色を残さず置き換える（色味変更ではなく差し替え）
    const m = clamp(maskValue * strength, 0, 1);
    let sky = sampleReplacementSky(xRatio, yRatio, opts);
    const origLum = (0.299 * origR + 0.587 * origG + 0.114 * origB) / 255;
    const skyLum = (0.299 * sky.r + 0.587 * sky.g + 0.114 * sky.b) / 255;

    // 明るさだけ軽く合わせて、貼り付け感を減らす
    const adapt = 0.14;
    const lumRatio = clamp(origLum / Math.max(0.05, skyLum), 0.88, 1.12);
    sky = {
      r: clamp(sky.r * (1 - adapt + adapt * lumRatio), 0, 255),
      g: clamp(sky.g * (1 - adapt + adapt * lumRatio), 0, 255),
      b: clamp(sky.b * (1 - adapt + adapt * lumRatio), 0, 255),
    };

    if (keepClouds) {
      const maxC = Math.max(origR, origG, origB);
      const minC = Math.min(origR, origG, origB);
      const sat = maxC ? (maxC - minC) / maxC : 0;
      // 白飛びさせず、元の濃淡を青空の上に乗せる
      const detail = (origLum - 0.68) * 55;
      sky = {
        r: clamp(sky.r + detail * 0.55, 0, 255),
        g: clamp(sky.g + detail * 0.6, 0, 255),
        b: clamp(sky.b + detail * 0.7, 0, 255),
      };
      const cloud = clamp((origLum - 0.74) / 0.24, 0, 1) * clamp(1 - sat * 2.8, 0, 1) * 0.28;
      if (cloud > 0) {
        sky = {
          r: sky.r * (1 - cloud) + 228 * cloud,
          g: sky.g * (1 - cloud) + 236 * cloud,
          b: sky.b * (1 - cloud) + 246 * cloud,
        };
      }
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

  function clearSkyPaintForPhoto(photo) {
    if (!photo) return;
    photo.skyPaint = null;
  }

  function ensureSkyPaint(photo, w, h) {
    if (!photo) return null;
    if (!photo.skyPaint || photo.skyPaint.w !== w || photo.skyPaint.h !== h) {
      photo.skyPaint = { w, h, data: new Float32Array(w * h) };
    }
    return photo.skyPaint;
  }

  function scaleFloatMask(src, srcW, srcH, dstW, dstH) {
    if (!src) return null;
    if (srcW === dstW && srcH === dstH) return src;
    const out = new Float32Array(dstW * dstH);
    for (let y = 0; y < dstH; y += 1) {
      const sy = Math.min(srcH - 1, Math.floor(((y + 0.5) * srcH) / dstH));
      for (let x = 0; x < dstW; x += 1) {
        const sx = Math.min(srcW - 1, Math.floor(((x + 0.5) * srcW) / dstW));
        out[y * dstW + x] = src[sy * srcW + sx];
      }
    }
    return out;
  }

  function resolveSkyPaintMask(photo, targetW, targetH) {
    if (!photo?.skyPaint?.data) return null;
    return scaleFloatMask(photo.skyPaint.data, photo.skyPaint.w, photo.skyPaint.h, targetW, targetH);
  }

  function combineSkyMasks(autoMask, paintMask) {
    if (!paintMask) return autoMask;
    const n = autoMask?.length || paintMask.length;
    const out = new Float32Array(n);
    for (let i = 0; i < n; i += 1) {
      const a = autoMask ? autoMask[i] : 0;
      const p = paintMask[i] || 0;
      out[i] = clamp(a + p, 0, 1);
    }
    return out;
  }

  function getSkyMaskForImage(imageData, skyOpts, photo) {
    if (!(Number(skyOpts?.strength) > 0) && !photo?.skyPaint?.data) return null;
    const auto =
      Number(skyOpts?.strength) > 0
        ? buildConnectedSkyMask(imageData, skyOpts.range, skyOpts.edgeFade)
        : null;
    const paint = resolveSkyPaintMask(photo, imageData.width, imageData.height);
    if (!auto && !paint) return null;
    return combineSkyMasks(auto, paint);
  }

  function getSkyBrushRadius() {
    return Math.max(1.5, Number(skyBrushSize?.value || 12));
  }

  function wantsStraightSkyStroke(e) {
    return skyStrokeStyle === "line" || Boolean(e && e.shiftKey);
  }

  function distToSegment(px, py, ax, ay, bx, by) {
    const vx = bx - ax;
    const vy = by - ay;
    const len2 = vx * vx + vy * vy;
    if (len2 < 0.0001) return Math.hypot(px - ax, py - ay);
    let t = ((px - ax) * vx + (py - ay) * vy) / len2;
    t = clamp(t, 0, 1);
    return Math.hypot(px - (ax + t * vx), py - (ay + t * vy));
  }

  function applySkyBrushCoverage(data, idx, dist, radius, erase) {
    if (dist > radius) return;
    let falloff;
    if (erase) {
      const hard = Math.max(0.35, radius * 0.55);
      falloff = dist <= hard ? 1 : 1 - (dist - hard) / Math.max(0.001, radius - hard);
    } else {
      falloff = 1 - dist / radius;
      falloff = falloff * falloff * (3 - 2 * falloff);
    }
    falloff = clamp(falloff, 0, 1);
    if (erase) data[idx] = clamp(data[idx] - falloff, -1, 1);
    else data[idx] = clamp(data[idx] + falloff, -1, 1);
  }

  function paintSkyAt(x, y) {
    paintSkyCapsule({ x, y }, { x, y });
  }

  function paintSkyCapsule(from, to) {
    if (!baseImageData) return;
    const photo = getActivePhoto();
    if (!photo) return;
    const w = baseImageData.width;
    const h = baseImageData.height;
    const paint = ensureSkyPaint(photo, w, h);
    if (!paint) return;
    const data = paint.data;
    const radius = getSkyBrushRadius();
    const erase = skyBrushMode === "erase";
    const x0 = Math.max(0, Math.floor(Math.min(from.x, to.x) - radius));
    const y0 = Math.max(0, Math.floor(Math.min(from.y, to.y) - radius));
    const x1 = Math.min(w - 1, Math.ceil(Math.max(from.x, to.x) + radius));
    const y1 = Math.min(h - 1, Math.ceil(Math.max(from.y, to.y) + radius));

    for (let py = y0; py <= y1; py += 1) {
      for (let px = x0; px <= x1; px += 1) {
        const dist = distToSegment(px + 0.5, py + 0.5, from.x, from.y, to.x, to.y);
        applySkyBrushCoverage(data, py * w + px, dist, radius, erase);
      }
    }
  }

  function strokeSkyBrush(from, to) {
    paintSkyCapsule(from, to);
  }

  function snapshotSkyPaint(photo) {
    if (!photo?.skyPaint?.data) return null;
    return new Float32Array(photo.skyPaint.data);
  }

  function restoreSkyPaint(photo, snapshot) {
    if (!photo?.skyPaint?.data || !snapshot) return;
    if (photo.skyPaint.data.length !== snapshot.length) return;
    photo.skyPaint.data.set(snapshot);
  }

  function hasSkyPaint(photo) {
    if (!photo?.skyPaint?.data) return false;
    const data = photo.skyPaint.data;
    for (let i = 0; i < data.length; i += 16) {
      if (Math.abs(data[i]) > 0.02) return true;
    }
    return false;
  }

  function processLitPixels(imageData, dst, bright, contrastVal, skyOpts, photo = null) {
    const targetPhoto = photo || getActivePhoto();
    const w = imageData.width;
    const h = imageData.height;
    const src = imageData.data;
    const cFactor = (259 * (contrastVal + 255)) / (255 * (259 - contrastVal));
    const activeSkyOpts =
      hasSkyPaint(targetPhoto) && !(Number(skyOpts.strength) > 0)
        ? { ...skyOpts, strength: 1 }
        : skyOpts;
    const skyMask = getSkyMaskForImage(imageData, activeSkyOpts, targetPhoto);

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
        const out = blendSkyPixel(r, g, b, py / h, px / w, skyMask[pix], activeSkyOpts);
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

  async function processLitPixelsAsync(imageData, dst, bright, contrastVal, skyOpts, photo = null) {
    const w = imageData.width;
    const h = imageData.height;
    const src = imageData.data;
    const cFactor = (259 * (contrastVal + 255)) / (255 * (259 - contrastVal));
    const activeSkyOpts =
      hasSkyPaint(photo) && !(Number(skyOpts.strength) > 0)
        ? { ...skyOpts, strength: 1 }
        : skyOpts;
    const skyMask = getSkyMaskForImage(imageData, activeSkyOpts, photo);
    await yieldToUi();

    const rowStride = Math.max(24, Math.floor(180000 / Math.max(1, w)));
    for (let y0 = 0; y0 < h; y0 += rowStride) {
      const y1 = Math.min(h, y0 + rowStride);
      for (let y = y0; y < y1; y += 1) {
        for (let x = 0; x < w; x += 1) {
          const i = (y * w + x) * 4;
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
            const pix = y * w + x;
            const out = blendSkyPixel(r, g, b, y / h, x / w, skyMask[pix], activeSkyOpts);
            r = out.r;
            g = out.g;
            b = out.b;
          } else if (skyOpts.foreground > 0) {
            const out = applyForegroundLight(r, g, b, y / h, 0, skyOpts);
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
      await yieldToUi();
    }
  }

  function needsHeavyLitProcessing(contrastVal, skyOpts, photo = null) {
    return (
      contrastVal !== 0 ||
      Number(skyOpts?.strength) > 0 ||
      Number(skyOpts?.foreground) > 0 ||
      hasSkyPaint(photo)
    );
  }

  function needsLitProcessing(bright, contrastVal, skyOpts, photo = null) {
    return bright !== 0 || needsHeavyLitProcessing(contrastVal, skyOpts, photo);
  }

  function applyBrightnessToCanvas(targetCanvas, bright) {
    if (!bright) return;
    const ctx = targetCanvas.getContext("2d");
    const w = targetCanvas.width;
    const h = targetCanvas.height;
    const data = ctx.getImageData(0, 0, w, h);
    const px = data.data;
    for (let i = 0; i < px.length; i += 4) {
      px[i] = clamp(px[i] + bright, 0, 255);
      px[i + 1] = clamp(px[i + 1] + bright, 0, 255);
      px[i + 2] = clamp(px[i + 2] + bright, 0, 255);
    }
    ctx.putImageData(data, 0, 0);
  }

  function imageDataToCanvas(data) {
    const canvas = document.createElement("canvas");
    canvas.width = data.width;
    canvas.height = data.height;
    canvas.getContext("2d").putImageData(data, 0, 0);
    return canvas;
  }

  function scaleImageData(data, targetW, targetH) {
    if (data.width === targetW && data.height === targetH) return data;
    const scaled = resizeCanvasHighQualitySync(imageDataToCanvas(data), targetW, targetH);
    return scaled.getContext("2d").getImageData(0, 0, targetW, targetH);
  }

  function scaleCanvasToExport(source, w, h) {
    const temp = document.createElement("canvas");
    temp.width = w;
    temp.height = h;
    const tctx = temp.getContext("2d");
    tctx.fillStyle = "#ffffff";
    tctx.fillRect(0, 0, w, h);
    tctx.imageSmoothingEnabled = true;
    tctx.imageSmoothingQuality = "high";
    tctx.drawImage(source, 0, 0, source.width, source.height, 0, 0, w, h);
    return temp;
  }

  function canvasFromSourceImage(photo, w, h) {
    const temp = document.createElement("canvas");
    temp.width = w;
    temp.height = h;
    const tctx = temp.getContext("2d");
    tctx.fillStyle = "#ffffff";
    tctx.fillRect(0, 0, w, h);
    tctx.imageSmoothingEnabled = true;
    tctx.imageSmoothingQuality = "high";
    tctx.drawImage(photo.sourceImage, 0, 0, w, h);
    return temp;
  }

  function getPhotoAdjustments(photo) {
    const isActive = photo.id === activePhotoId;
    return {
      bright: Number(isActive ? brightness.value : photo.brightness),
      contrastVal: Number(isActive ? contrast.value : photo.contrast),
      skyOpts: isActive ? getSkyOptionsFromUi() : getSkyOptionsFromPhoto(photo),
    };
  }

  function canUseWatermarkOnlyExport(photo) {
    if (photo.pixelEdited) return false;
    if (!photo.sourceImage?.naturalWidth) return false;
    const { contrastVal, skyOpts } = getPhotoAdjustments(photo);
    return !needsHeavyLitProcessing(contrastVal, skyOpts, photo);
  }

  async function buildWatermarkOnlyExportCanvas(photo, { watermark = true } = {}) {
    const img = photo.sourceImage;
    const { w, h } = resolveTargetSize(img.naturalWidth, img.naturalHeight);
    const { bright } = getPhotoAdjustments(photo);
    await yieldToUi();
    const temp = canvasFromSourceImage(photo, w, h);
    if (bright !== 0) {
      applyBrightnessToCanvas(temp, bright);
    }
    if (watermark && isWatermarkEnabledForPhoto(photo)) {
      applyWatermarkToCanvas(temp, getWatermarkPositionForPhoto(photo));
    }
    return temp;
  }

  async function scaleImageDataForExport(data, targetW, targetH) {
    await yieldToUi();
    let cur = imageDataToCanvas(data);
    let cw = cur.width;
    let ch = cur.height;
    while (Math.max(cw, ch) > Math.max(targetW, targetH) * 2) {
      cw = Math.max(targetW, Math.floor(cw / 2));
      ch = Math.max(targetH, Math.floor(ch / 2));
      const step = document.createElement("canvas");
      step.width = cw;
      step.height = ch;
      const sctx = step.getContext("2d");
      sctx.imageSmoothingEnabled = true;
      sctx.imageSmoothingQuality = "high";
      sctx.drawImage(cur, 0, 0, cw, ch);
      cur = step;
      await yieldToUi();
    }
    if (cw === targetW && ch === targetH) return cur;
    return scaleCanvasToExport(cur, targetW, targetH);
  }

  async function buildExportCanvas(photo, { watermark = true } = {}) {
    if (canUseWatermarkOnlyExport(photo)) {
      return buildWatermarkOnlyExportCanvas(photo, { watermark });
    }

    const data = photo.id === activePhotoId && baseImageData ? baseImageData : photo.baseImageData;
    if (!data) return null;

    const { bright, contrastVal, skyOpts } = getPhotoAdjustments(photo);
    const { w, h } = resolveTargetSize(data.width, data.height);

    await yieldToUi();

    let temp;
    if (!needsLitProcessing(bright, contrastVal, skyOpts, photo)) {
      temp = await scaleImageDataForExport(data, w, h);
    } else {
      const workingData = scaleImageData(data, w, h);
      await yieldToUi();
      const out = new ImageData(w, h);
      await processLitPixelsAsync(workingData, out.data, bright, contrastVal, skyOpts, photo);
      temp = document.createElement("canvas");
      temp.width = w;
      temp.height = h;
      temp.getContext("2d").putImageData(out, 0, 0);
    }

    if (watermark && isWatermarkEnabledForPhoto(photo)) {
      applyWatermarkToCanvas(temp, getWatermarkPositionForPhoto(photo));
    }
    return temp;
  }

  function buildLitCanvas() {
    if (!baseImageData) return null;
    const fullW = baseImageData.width;
    const fullH = baseImageData.height;
    const preview = getLitPreviewImageData();
    if (!preview) return null;
    const w = preview.width;
    const h = preview.height;
    const bright = Number(brightness.value);
    const contrastVal = Number(contrast.value);
    const skyOpts = { ...getSkyOptionsFromUi(), preview: true };

    const temp = document.createElement("canvas");
    temp.width = fullW;
    temp.height = fullH;
    const tctx = temp.getContext("2d");

    if (!needsLitProcessing(bright, contrastVal, skyOpts, getActivePhoto())) {
      tctx.putImageData(baseImageData, 0, 0);
    } else {
      const out = new ImageData(w, h);
      processLitPixels(preview, out.data, bright, contrastVal, skyOpts, getActivePhoto());
      if (w === fullW && h === fullH) {
        tctx.putImageData(out, 0, 0);
      } else {
        const small = document.createElement("canvas");
        small.width = w;
        small.height = h;
        small.getContext("2d").putImageData(out, 0, 0);
        tctx.imageSmoothingEnabled = true;
        tctx.imageSmoothingQuality = "high";
        tctx.drawImage(small, 0, 0, fullW, fullH);
      }
    }
    applyWatermarkToCanvas(temp);
    return temp;
  }

  function scheduleRenderEffects() {
    if (renderEffectsRaf) return;
    renderEffectsRaf = requestAnimationFrame(() => {
      renderEffectsRaf = 0;
      renderEffects();
    });
  }

  function drawSkyPresetThumb(presetId, canvas) {
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
      keepClouds: false,
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
        if (Number(skyStrength.value) < 40) skyStrength.value = "100";
        onSkyControlChange();
        setPanelTab("edit");
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
    if (isWatermarkEnabled() && !watermarkImage) {
      loadWatermarkImage()
        .then(() => renderEffects())
        .catch(() => {});
      return;
    }
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
    invalidateSkyCaches({ clearPaint: true });
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
      markPhotoPixelEdited(photo);
      photo.brightness = brightness.value;
      photo.contrast = contrast.value;
      clearPreMosaicSnapshot(photo);
      clearSkyPaintForPhoto(photo);
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

  function savePreMosaicSnapshot(photo) {
    if (!photo) return;
    const data = photo.id === activePhotoId && baseImageData ? baseImageData : photo.baseImageData;
    if (!data) return;
    photo.preMosaicImageData = cloneImageData(data);
    updateMosaicUndoUi();
  }

  function clearPreMosaicSnapshot(photo) {
    if (!photo) return;
    photo.preMosaicImageData = null;
    updateMosaicUndoUi();
  }

  function ensurePreMosaicBeforeEdit(photo) {
    if (!photo || photo.preMosaicImageData) return;
    savePreMosaicSnapshot(photo);
  }

  function canUndoMosaic(photo) {
    return Boolean(photo?.preMosaicImageData);
  }

  function updateMosaicUndoUi() {
    if (undoMosaicBtn) {
      undoMosaicBtn.disabled = !canUndoMosaic(getActivePhoto());
    }
    updateHideBrushUi();
  }

  function setHideBrushMode(mode) {
    hideBrushMode = mode === "restore" ? "restore" : "mosaic";
    updateHideBrushUi();
  }

  function updateHideBrushUi() {
    const canRestore = canUndoMosaic(getActivePhoto());
    if (hideBrushMode === "restore" && !canRestore) {
      hideBrushMode = "mosaic";
    }
    if (hideBrushModePicker) {
      hideBrushModePicker.querySelectorAll(".hide-brush-mode-btn").forEach((btn) => {
        const active = btn.dataset.mode === hideBrushMode;
        const disabled = btn.dataset.mode === "restore" && !canRestore;
        btn.classList.toggle("is-active", active);
        btn.disabled = disabled;
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }
    if (mosaicSize) {
      mosaicSize.disabled = hideBrushMode === "restore";
      mosaicSize.closest(".field")?.classList.toggle("is-disabled", hideBrushMode === "restore");
    }
    canvas.classList.toggle("tool-hide-restore", activeTool === "hide" && hideBrushMode === "restore");
    cursor.classList.toggle("is-restore", hideBrushMode === "restore");
  }

  function getPreMosaicSource(photo) {
    if (!photo?.preMosaicImageData) return null;
    return photo.preMosaicImageData;
  }

  function restorePreMosaicForPhoto(photo) {
    if (!photo?.preMosaicImageData) return false;
    const data = cloneImageData(photo.preMosaicImageData);
    photo.baseImageData = data;
    clearPreMosaicSnapshot(photo);
    if (photo.id === activePhotoId) {
      baseImageData = data;
      canvas.width = data.width;
      canvas.height = data.height;
      ctx.putImageData(data, 0, 0);
      invalidateSkyCaches();
      aspectRatio = data.width / data.height;
      resizeWidth.value = String(data.width);
      resizeHeight.value = String(data.height);
      initCropRect();
      renderEffects();
      requestAnimationFrame(() => fitView());
    }
    renderGallery();
    return true;
  }

  function mosaicAt(x, y) {
    if (!baseImageData) return;
    const radius = Number(brushSize.value);
    const block = Math.max(4, Number(mosaicSize.value));
    const w = baseImageData.width;
    const h = baseImageData.height;
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
    notifyBasePixelsChanged();
  }

  function restoreAt(x, y) {
    const source = getPreMosaicSource(getActivePhoto());
    if (!baseImageData || !source) return false;
    if (source.width !== baseImageData.width || source.height !== baseImageData.height) return false;

    const radius = Number(brushSize.value);
    const w = baseImageData.width;
    const h = baseImageData.height;
    const dst = baseImageData.data;
    const src = source.data;
    const r2 = radius * radius;
    const x0 = Math.max(0, Math.floor(x - radius));
    const y0 = Math.max(0, Math.floor(y - radius));
    const x1 = Math.min(w, Math.ceil(x + radius));
    const y1 = Math.min(h, Math.ceil(y + radius));

    for (let py = y0; py < y1; py += 1) {
      for (let px = x0; px < x1; px += 1) {
        const dx = px - x;
        const dy = py - y;
        if (dx * dx + dy * dy > r2) continue;
        const i = (py * w + px) * 4;
        dst[i] = src[i];
        dst[i + 1] = src[i + 1];
        dst[i + 2] = src[i + 2];
        dst[i + 3] = src[i + 3];
      }
    }
    notifyBasePixelsChanged();
    return true;
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
    notifyBasePixelsChanged();
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
        window.blazeface.load({ maxFaces: 30 }),
        window.cocoSsd.load({ base: "mobilenet_v2" }),
      ]);
      return { faceModel, objectModel };
    })().catch((err) => {
      tfModelsPromise = null;
      throw err;
    });
    return tfModelsPromise;
  }

  const DETECT_MAX_EDGE = 1280;
  const VEHICLE_CLASSES = new Set(["car", "truck", "bus", "motorcycle"]);

  function photoToDetectCanvas(photo) {
    const src = canvasFromPhoto(photo);
    const maxEdge = DETECT_MAX_EDGE;
    const scale = Math.min(1, maxEdge / Math.max(src.width, src.height));
    if (scale >= 0.999) return { canvas: src, scale: 1, width: src.width, height: src.height };
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(src.width * scale));
    c.height = Math.max(1, Math.round(src.height * scale));
    const ctx2 = c.getContext("2d");
    ctx2.imageSmoothingEnabled = true;
    ctx2.imageSmoothingQuality = "high";
    ctx2.drawImage(src, 0, 0, c.width, c.height);
    return { canvas: c, scale, width: c.width, height: c.height };
  }

  function boxIoU(a, b) {
    const x1 = Math.max(a.x, b.x);
    const y1 = Math.max(a.y, b.y);
    const x2 = Math.min(a.x + a.w, b.x + b.w);
    const y2 = Math.min(a.y + a.h, b.y + b.h);
    const inter = Math.max(0, x2 - x1) * Math.max(0, y2 - y1);
    const union = a.w * a.h + b.w * b.h - inter;
    return union > 0 ? inter / union : 0;
  }

  function boxCategory(type) {
    if (type.startsWith("plate")) return "plate";
    return "person";
  }

  function plateTypePriority(type) {
    if (type === "plate-color") return 4;
    if (type === "plate") return 3;
    return 2;
  }

  /** 日本のナンバープレート色（白・黄・緑）に近い画素か */
  function isPlateColorPixel(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    // 黄（軽自動車など）
    if (r > 145 && g > 125 && b < 120 && r > b + 35 && g > b + 20 && sat > 0.18) return true;
    // 白〜薄い銀（自家用）※ヘッドライトより低彩度寄り
    if (lum > 0.62 && sat < 0.18 && Math.abs(r - g) < 28 && Math.abs(g - b) < 28 && Math.abs(r - b) < 32) {
      return true;
    }
    // 緑（事業用）
    if (g > 100 && g > r + 18 && g > b + 14 && r < 130 && b < 130 && sat > 0.16) return true;
    return false;
  }

  function plateEdgeScore(imageData, box) {
    const data = imageData.data;
    const w = imageData.width;
    const h = imageData.height;
    const x0 = Math.max(1, Math.floor(box.x));
    const y0 = Math.max(1, Math.floor(box.y));
    const x1 = Math.min(w - 1, Math.ceil(box.x + box.w));
    const y1 = Math.min(h - 1, Math.ceil(box.y + box.h));
    if (x1 <= x0 || y1 <= y0) return 0;
    let sum = 0;
    let n = 0;
    const stepX = Math.max(1, Math.round((x1 - x0) / 28));
    const stepY = Math.max(1, Math.round((y1 - y0) / 16));
    for (let y = y0; y < y1; y += stepY) {
      for (let x = x0; x < x1; x += stepX) {
        const i = (y * w + x) * 4;
        const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        const ir = ((y * w + (x + 1)) * 4);
        const id = (((y + 1) * w + x) * 4);
        const lumR = 0.299 * data[ir] + 0.587 * data[ir + 1] + 0.114 * data[ir + 2];
        const lumD = 0.299 * data[id] + 0.587 * data[id + 1] + 0.114 * data[id + 2];
        sum += Math.abs(lum - lumR) + Math.abs(lum - lumD);
        n += 1;
      }
    }
    return n ? sum / n : 0;
  }

  /**
   * ROI内のプレート色連結成分から、ナンバーらしい矩形を選ぶ
   */
  function findPlateColorRegion(imageData, sx, sy, sw, sh, opts = {}) {
    const data = imageData.data;
    const w = imageData.width;
    const h = imageData.height;
    const x0 = Math.max(0, Math.floor(sx));
    const y0 = Math.max(0, Math.floor(sy));
    const x1 = Math.min(w, Math.ceil(sx + sw));
    const y1 = Math.min(h, Math.ceil(sy + sh));
    const roiW = Math.max(1, x1 - x0);
    const roiH = Math.max(1, y1 - y0);
    const step = Math.max(1, Math.round(Math.min(roiW, roiH) / 90));
    const gw = Math.ceil(roiW / step);
    const gh = Math.ceil(roiH / step);
    const grid = new Uint8Array(gw * gh);

    for (let gy = 0; gy < gh; gy += 1) {
      for (let gx = 0; gx < gw; gx += 1) {
        const px = Math.min(w - 1, x0 + gx * step);
        const py = Math.min(h - 1, y0 + gy * step);
        const i = (py * w + px) * 4;
        if (isPlateColorPixel(data[i], data[i + 1], data[i + 2])) grid[gy * gw + gx] = 1;
      }
    }

    const visited = new Uint8Array(gw * gh);
    let best = null;
    let bestScore = -1;
    const queue = new Int32Array(gw * gh);

    for (let seed = 0; seed < grid.length; seed += 1) {
      if (!grid[seed] || visited[seed]) continue;
      let qh = 0;
      let qt = 0;
      queue[qt++] = seed;
      visited[seed] = 1;
      let minGX = seed % gw;
      let maxGX = minGX;
      let minGY = (seed - minGX) / gw;
      let maxGY = minGY;
      let count = 0;

      while (qh < qt) {
        const idx = queue[qh++];
        const gx = idx % gw;
        const gy = (idx - gx) / gw;
        count += 1;
        minGX = Math.min(minGX, gx);
        maxGX = Math.max(maxGX, gx);
        minGY = Math.min(minGY, gy);
        maxGY = Math.max(maxGY, gy);
        const neigh = [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
          [1, 1],
          [-1, 1],
          [1, -1],
          [-1, -1],
        ];
        for (let n = 0; n < neigh.length; n += 1) {
          const nx = gx + neigh[n][0];
          const ny = gy + neigh[n][1];
          if (nx < 0 || ny < 0 || nx >= gw || ny >= gh) continue;
          const nidx = ny * gw + nx;
          if (visited[nidx] || !grid[nidx]) continue;
          visited[nidx] = 1;
          queue[qt++] = nidx;
        }
      }

      if (count < 10) continue;
      const bw = (maxGX - minGX + 1) * step;
      const bh = (maxGY - minGY + 1) * step;
      const aspect = bw / Math.max(1, bh);
      if (aspect < 1.7 || aspect > 6.2) continue;
      const dens = count / Math.max(1, (maxGX - minGX + 1) * (maxGY - minGY + 1));
      if (dens < 0.28) continue;

      const pad = Math.max(2, Math.round(bw * 0.06));
      const box = {
        x: Math.max(0, x0 + minGX * step - pad),
        y: Math.max(0, y0 + minGY * step - pad),
        w: Math.min(w, x0 + (maxGX + 1) * step + pad) - Math.max(0, x0 + minGX * step - pad),
        h: Math.min(h, y0 + (maxGY + 1) * step + pad) - Math.max(0, y0 + minGY * step - pad),
      };
      if (!isValidPlateBox(box, w, h)) continue;

      // 車両ROI内での相対サイズ（指定時）
      if (opts.vehicleW && opts.vehicleH) {
        if (box.w < opts.vehicleW * 0.14 || box.w > opts.vehicleW * 0.72) continue;
        if (box.h < opts.vehicleH * 0.035 || box.h > opts.vehicleH * 0.2) continue;
        const cy = box.y + box.h / 2;
        if (opts.vehicleY != null && cy < opts.vehicleY + opts.vehicleH * 0.48) continue;
      }

      const edge = plateEdgeScore(imageData, box);
      // 文字のあるプレートはエッジが高め。低すぎる＝ベタ塗りや壁
      if (edge < 12) continue;
      const score = dens * 40 + Math.min(edge, 80) + (aspect >= 2 && aspect <= 4 ? 12 : 0);
      if (score > bestScore) {
        bestScore = score;
        best = box;
      }
    }

    return best;
  }

  function isValidPlateBox(box, imgW, imgH) {
    if (!box || box.w < 14 || box.h < 7) return false;
    const aspect = box.w / box.h;
    // 日本のプレートはおおよそ横長 2:1 前後
    if (aspect < 1.7 || aspect > 6.2) return false;
    if (box.w > imgW * 0.28 || box.h > imgH * 0.1) return false;
    const area = box.w * box.h;
    if (area < 140) return false;
    if (area > imgW * imgH * 0.028) return false;
    return true;
  }

  function isValidFaceBox(box, imgW, imgH) {
    if (!box || box.w < 10 || box.h < 10) return false;
    const aspect = box.w / box.h;
    if (aspect > 2.1 || aspect < 0.42) return false;
    if (box.w > imgW * 0.42 || box.h > imgH * 0.42) return false;
    return true;
  }

  function refinePlateBoxWithColor(imageData, box, imgW, imgH) {
    const padX = box.w * 0.35;
    const padY = box.h * 0.45;
    const sx = Math.max(0, box.x - padX);
    const sy = Math.max(0, box.y - padY);
    const sw = Math.min(imgW, box.x + box.w + padX) - sx;
    const sh = Math.min(imgH, box.y + box.h + padY) - sy;
    const refined = findPlateColorRegion(imageData, sx, sy, sw, sh);
    if (refined && isValidPlateBox(refined, imgW, imgH)) {
      const edge = plateEdgeScore(imageData, refined);
      if (edge >= 12) {
        return { ...box, ...refined, type: "plate-color" };
      }
    }
    // 色で絞れない推定枠は捨てる（車体への誤モザイク防止）
    if (box.type === "plate-est") return null;
    return box;
  }

  function refinePlateBoxesWithColor(boxes, photo) {
    const source = canvasFromPhoto(photo);
    const imgW = source.width;
    const imgH = source.height;
    const imageData = source.getContext("2d").getImageData(0, 0, imgW, imgH);
    return boxes
      .map((box) =>
        box.type.startsWith("plate") ? refinePlateBoxWithColor(imageData, box, imgW, imgH) : box,
      )
      .filter(Boolean)
      .filter((box) => {
        if (!box.type.startsWith("plate")) return true;
        // 最終ゲート: 形状＋文字っぽいエッジ
        if (!isValidPlateBox(box, imgW, imgH)) return false;
        return plateEdgeScore(imageData, box) >= 10;
      });
  }

  function filterDetectionBoxes(boxes, imgW, imgH) {
    return boxes.filter((box) => {
      if (box.type.startsWith("plate")) return isValidPlateBox(box, imgW, imgH);
      return isValidFaceBox(box, imgW, imgH);
    });
  }

  function mergeDetectionBoxes(boxes, iouThreshold = 0.32) {
    const sorted = [...boxes].sort((a, b) => {
      const catA = boxCategory(a.type);
      const catB = boxCategory(b.type);
      if (catA === "plate" && catB === "plate") {
        const priDiff = plateTypePriority(b.type) - plateTypePriority(a.type);
        if (priDiff !== 0) return priDiff;
      }
      return b.w * b.h - a.w * a.h;
    });
    const kept = [];
    sorted.forEach((box) => {
      const duplicate = kept.some((other) => {
        if (boxCategory(other.type) !== boxCategory(box.type)) return false;
        return boxIoU(other, box) > iouThreshold;
      });
      if (!duplicate) kept.push(box);
    });
    return kept;
  }

  function normalizedBoxToPixels(box, imgW, imgH) {
    const xmin = Number(box.xmin ?? box.x ?? 0);
    const ymin = Number(box.ymin ?? box.y ?? 0);
    const xmax = Number(box.xmax ?? (box.x != null && box.w != null ? box.x + box.w : 0));
    const ymax = Number(box.ymax ?? (box.y != null && box.h != null ? box.y + box.h : 0));
    const looksNormalized =
      xmax > 0 &&
      ymax > 0 &&
      xmax <= 1000 &&
      ymax <= 1000 &&
      xmin >= 0 &&
      ymin >= 0 &&
      xmin < xmax &&
      ymin < ymax;
    if (looksNormalized) {
      return {
        x: (xmin / 1000) * imgW,
        y: (ymin / 1000) * imgH,
        w: ((xmax - xmin) / 1000) * imgW,
        h: ((ymax - ymin) / 1000) * imgH,
      };
    }
    const w = Number(box.w) || 0;
    const h = Number(box.h) || 0;
    return { x: xmin, y: ymin, w, h };
  }

  function scalePixelBoxToImage(box, sentW, sentH, imgW, imgH) {
    const scaleX = imgW / sentW;
    const scaleY = imgH / sentH;
    return {
      x: box.x * scaleX,
      y: box.y * scaleY,
      w: box.w * scaleX,
      h: box.h * scaleY,
    };
  }

  async function detectPeopleBoxes(detectCanvas, scale, faceModel, objectModel) {
    const boxes = [];
    const inv = 1 / scale;

    try {
      const faces = await faceModel.estimateFaces(detectCanvas, false, true);
      faces.forEach((face) => {
        const [x1, y1] = face.topLeft;
        const [x2, y2] = face.bottomRight;
        const w = (x2 - x1) * inv;
        const h = (y2 - y1) * inv;
        if (w < 6 || h < 6) return;
        boxes.push({
          type: "face",
          x: x1 * inv,
          y: y1 * inv,
          w,
          h,
        });
      });
    } catch (err) {
      console.warn(err);
    }

    try {
      const preds = await objectModel.detect(detectCanvas, 30, 0.28);
      preds.forEach((p) => {
        if (p.class !== "person") return;
        const [x, y, w, h] = p.bbox;
        const fullW = w * inv;
        const fullH = h * inv;
        if (fullW < 18 || fullH < 24) return;
        const headW = fullW * 0.72;
        const headH = Math.min(fullH * 0.44, headW * 1.05);
        boxes.push({
          type: "person-head",
          x: x * inv + (fullW - headW) / 2,
          y: y * inv,
          w: headW,
          h: headH,
        });
      });
    } catch (err) {
      console.warn(err);
    }

    return boxes;
  }

  async function detectPlateBoxesLocal(detectCanvas, scale, objectModel, photo) {
    const boxes = [];
    const inv = 1 / scale;
    const source = canvasFromPhoto(photo);
    const imgW = source.width;
    const imgH = source.height;
    const imageData = source.getContext("2d").getImageData(0, 0, imgW, imgH);

    try {
      const preds = await objectModel.detect(detectCanvas, 40, 0.28);
      preds.forEach((p) => {
        if (!VEHICLE_CLASSES.has(p.class)) return;
        const [x, y, w, h] = p.bbox;
        const fullW = w * inv;
        const fullH = h * inv;
        if (fullW < 36 || fullH < 24) return;

        const vx = x * inv;
        const vy = y * inv;
        // 車体下半分〜下部に限定してプレート色の連結成分を探す（推定枠は使わない）
        const searchY = vy + fullH * 0.5;
        const searchH = fullH * 0.48;
        const colorBox = findPlateColorRegion(imageData, vx + fullW * 0.08, searchY, fullW * 0.84, searchH, {
          vehicleW: fullW,
          vehicleH: fullH,
          vehicleY: vy,
        });
        if (colorBox && isValidPlateBox(colorBox, imgW, imgH)) {
          boxes.push({ type: "plate-color", ...colorBox });
        }
      });
    } catch (err) {
      console.warn(err);
    }

    // 車検出が無い場合のみ、画像下部を控えめに探索（看板などへの誤検知を抑える）
    if (!boxes.length) {
      const colorBox = findPlateColorRegion(
        imageData,
        imgW * 0.15,
        imgH * 0.62,
        imgW * 0.7,
        imgH * 0.3,
      );
      if (colorBox && isValidPlateBox(colorBox, imgW, imgH) && plateEdgeScore(imageData, colorBox) >= 16) {
        boxes.push({ type: "plate-color", ...colorBox });
      }
    }

    return boxes;
  }

  async function detectVisionBoxesGemini(photo, target) {
    if (!hasGeminiAccess()) return [];

    const source = canvasFromPhoto(photo);
    const imgW = source.width;
    const imgH = source.height;
    const sentScale = Math.min(1, DETECT_MAX_EDGE / Math.max(imgW, imgH));
    const sentW = Math.max(1, Math.round(imgW * sentScale));
    const sentH = Math.max(1, Math.round(imgH * sentScale));
    const base64 = imageToJpegBase64(source, DETECT_MAX_EDGE);

    const prompt =
      target === "plates"
        ? `この不動産写真から「自動車のナンバープレート」だけを厳密に検出してください。
対象: 日本のナンバープレート本体のみ（白・黄・緑の横長長方形。文字・ひらがな・数字が見えるもの）。
除外（絶対に含めない）: ヘッドライト、フォグ、グリル、バンパー全体、エンブレム、ガラス、ミラー、看板、表札、ポスター、エアコン室外機、白い壁、人物、バイク以外の標識。
ルール:
- プレートの外枠に沿った最小矩形のみ返す（車体を大きく囲まない）
- 1枚の車に複数ある場合はそれぞれ返す
- 自信がない候補は返さない
必ず次のJSONのみ:
{"items":[{"xmin":0,"ymin":0,"xmax":0,"ymax":0}]}
座標は画像左上原点で0〜1000正規化（xmin,ymin=左上、xmax,ymax=右下）。
写っていない場合は {"items":[]}。`
        : `この不動産写真の「人物の顔・頭部」だけを検出してください。
除外: 車のナンバー、看板、ポスター、反射、車体。
必ず次のJSONのみ返すこと:
{"items":[{"xmin":0,"ymin":0,"xmax":0,"ymax":0}]}
座標は画像左上原点で0〜1000の正規化値。
顔はおおよそ正方形に近い範囲。横に細長い範囲は返さない。
写っていない場合は {"items":[]}。`;

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
        temperature: 0.05,
        maxOutputTokens: 768,
        responseMimeType: "application/json",
      },
    };

    let lastError = null;
    for (const model of GEMINI_MODELS) {
      try {
        const url = buildGeminiUrl(`v1beta/models/${model}:generateContent`);
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
        const items = Array.isArray(parsed.items)
          ? parsed.items
          : Array.isArray(parsed.plates)
            ? parsed.plates
            : Array.isArray(parsed.faces)
              ? parsed.faces
              : [];
        return items
          .map((item) => {
            let px;
            if (
              item.xmin != null &&
              item.xmax != null &&
              item.ymin != null &&
              item.ymax != null
            ) {
              px = normalizedBoxToPixels(item, imgW, imgH);
            } else {
              px = scalePixelBoxToImage(
                {
                  x: Number(item.x) || 0,
                  y: Number(item.y) || 0,
                  w: Number(item.w) || 0,
                  h: Number(item.h) || 0,
                },
                sentW,
                sentH,
                imgW,
                imgH,
              );
            }
            return {
              type: target === "plates" ? "plate" : "face-gemini",
              x: px.x,
              y: px.y,
              w: px.w,
              h: px.h,
            };
          })
          .filter((p) => p.w > 6 && p.h > 6);
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

    ensurePreMosaicBeforeEdit(photo);

    const targetData = wasActive ? baseImageData : photo.baseImageData;
    if (!targetData) return 0;
    const imgW = targetData.width;
    const imgH = targetData.height;
    const savedBase = baseImageData;
    baseImageData = targetData;

    let count = 0;
    boxes.forEach((box) => {
      const pad =
        box.type === "face" || box.type === "face-gemini"
          ? 0.32
          : box.type.startsWith("plate")
            ? 0.08
            : 0.16;
      const b = expandBox(box, pad, imgW, imgH);
      const block =
        box.type === "face" ||
        box.type === "face-gemini" ||
        box.type.startsWith("plate")
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
    updateMosaicUndoUi();
    return count;
  }

  async function autoMosaicPhoto(photo, { people, plates }) {
    const boxes = [];
    const { canvas: detectCanvas, scale } = photoToDetectCanvas(photo);
    const source = canvasFromPhoto(photo);
    const imgW = source.width;
    const imgH = source.height;
    const hasGemini = hasGeminiAccess();

    if (people || plates) {
      const { faceModel, objectModel } = await ensureTfModels();
      if (people) {
        boxes.push(...(await detectPeopleBoxes(detectCanvas, scale, faceModel, objectModel)));
        if (hasGemini) {
          try {
            boxes.push(...(await detectVisionBoxesGemini(photo, "people")));
          } catch (err) {
            console.warn(err);
          }
        }
      }
      if (plates) {
        let plateBoxes = [];
        if (hasGemini) {
          try {
            plateBoxes = await detectVisionBoxesGemini(photo, "plates");
          } catch (err) {
            console.warn(err);
          }
        }
        // Geminiが無い／見つからないときだけローカル（色＋形状）。推定枠は使わない
        if (!plateBoxes.length) {
          plateBoxes = await detectPlateBoxesLocal(detectCanvas, scale, objectModel, photo);
        }
        boxes.push(...plateBoxes);
      }
    }

    const filtered = filterDetectionBoxes(
      refinePlateBoxesWithColor(boxes, photo),
      imgW,
      imgH,
    );
    const merged = mergeDetectionBoxes(filtered);
    const applied = applyBoxesToPhoto(photo, merged);
    return { applied, boxes: merged };
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
      const faces = boxes.filter(
        (b) => b.type === "face" || b.type === "face-gemini" || b.type === "person-head",
      ).length;
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
        if (plates && hasGeminiAccess() && i < photos.length - 1) await sleep(1200);
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

  function strokeHideBrush(from, to) {
    const dist = Math.hypot(to.x - from.x, to.y - from.y);
    const step = Math.max(4, Number(brushSize.value) * 0.4);
    const steps = Math.max(1, Math.ceil(dist / step));
    const paint = hideBrushMode === "restore" ? restoreAt : mosaicAt;
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      paint(from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
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
    canvas.classList.toggle("tool-sky", tool === "sky");
    if (tool !== "hide" && tool !== "sky") cursor.style.display = "none";
    updateHideBrushUi();
    updateSkyBrushUi();

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

  document.querySelectorAll(".panel-tab").forEach((tab) => {
    tab.addEventListener("click", () => setPanelTab(tab.dataset.panel));
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

  if (clearListingInfoBtn) {
    clearListingInfoBtn.addEventListener("click", () => {
      const hasPhotos = photos.length > 0;
      const hasAddress = Boolean((propertyAddress?.value || "").trim());
      if (!hasPhotos && !hasAddress && propertyType.value === "mansion") {
        showToast("クリアする入力情報がありません");
        return;
      }
      clearListingInfo();
    });
  }

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      const hasPhotos = photos.length > 0;
      const hasAddress = Boolean((propertyAddress?.value || "").trim());
      const hasType = propertyType.value !== "mansion";
      if (!hasPhotos && !hasAddress && !hasType) {
        setPanelTab("photos");
        showToast("すでに初期画面です");
        return;
      }
      const msg = hasPhotos
        ? `写真 ${photos.length} 枚と入力情報を消して初期画面に戻しますか？`
        : "入力情報を消して初期画面に戻しますか？";
      if (!window.confirm(msg)) return;
      returnToHomeScreen();
    });
  }

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

  if (captionPrefixPicker) {
    captionPrefixPicker.querySelectorAll(".caption-prefix-mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        setCaptionPrefixEnabled(btn.dataset.prefix !== "off");
      });
    });
  }

  copyCaptionBtn.addEventListener("click", () => {
    persistCaptionFromUi();
    const photo = getActivePhoto();
    const body = photo?.caption || captionInput.value;
    if (!String(body || "").trim()) {
      notifyError("コピーする内容がありません");
      return;
    }
    copyText(formatCaptionOutput(body), "キャプションをコピーしました");
  });

  clearCaptionBtn.addEventListener("click", () => {
    const photo = getActivePhoto();
    captionInput.value = "";
    if (photo) {
      photo.caption = "";
      renderGallery();
    }
    updateCaptionCount();
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
    updateSharedGeminiHint();
  });
  geminiApiKey.addEventListener("blur", saveGeminiApiKey);
  geminiApiKey.addEventListener("input", () => {
    setApiKeyStatus("");
    updateSharedGeminiHint();
  });
  refreshSharedGeminiStatus();

  verifyApiKeyBtn.addEventListener("click", () => {
    verifyGeminiApiKey();
  });

  propertyAddress.value = localStorage.getItem(PROPERTY_ADDRESS_STORAGE) || "";
  propertyAddress.addEventListener("change", savePropertyAddress);
  propertyAddress.addEventListener("blur", savePropertyAddress);

  restoreWatermarkPreference();
  restoreOverwritePreference();
  restoreCaptionPrefixPreference();
  loadWatermarkImage()
    .then(() => {
      if (baseImageData) renderEffects();
    })
    .catch(() => {});
  if (watermarkEnabled) {
    watermarkEnabled.addEventListener("change", () => {
      saveWatermarkPreference();
      updateWatermarkPosUi();
      if (baseImageData) renderEffects();
    });
  }
  if (overwriteExisting) {
    overwriteExisting.addEventListener("change", persistOverwritePreference);
  }
  if (watermarkPosPicker) {
    watermarkPosPicker.querySelectorAll(".watermark-pos-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!btn.dataset.pos) return;
        setWatermarkPosition(btn.dataset.pos);
      });
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
    clearExportPresetSelection();
    updateBatchResizeHint();
  });

  resizeHeight.addEventListener("input", () => {
    if (keepAspect.checked && aspectRatio) {
      const h = Number(resizeHeight.value);
      if (h) resizeWidth.value = String(Math.max(1, Math.round(h * aspectRatio)));
    }
    clearExportPresetSelection();
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

  function fitWithinBox(srcW, srcH, minW, minH, maxW, maxH, { allowUpscale = false } = {}) {
    let scale = Math.min(maxW / srcW, maxH / srcH);
    if (!allowUpscale && scale > 1) scale = 1;
    let w = Math.round(srcW * scale);
    let h = Math.round(srcH * scale);
    if (w < minW || h < minH) {
      const upScale = Math.max(minW / srcW, minH / srcH);
      if (allowUpscale || upScale <= 1) {
        scale = Math.max(scale, upScale);
        w = Math.round(srcW * scale);
        h = Math.round(srcH * scale);
      }
    }
    if (w > maxW || h > maxH) {
      scale = Math.min(maxW / srcW, maxH / srcH);
      w = Math.round(srcW * scale);
      h = Math.round(srcH * scale);
    }
    return { w: Math.max(1, w), h: Math.max(1, h) };
  }

  function calcIriPresetSize(srcW, srcH, preset) {
    return fitWithinBox(srcW, srcH, preset.minW, preset.minH, preset.maxW, preset.maxH, {
      allowUpscale: Boolean(preset.allowUpscale),
    });
  }

  function resolveTargetSize(srcW, srcH) {
    const preset = activeExportPreset && EXPORT_PRESETS[activeExportPreset];
    if (preset?.kind === "iri-box") {
      return calcIriPresetSize(srcW, srcH, preset);
    }
    return calcBatchTargetSize(
      srcW,
      srcH,
      batchResizeMode.value,
      Number(resizeWidth.value) || 1600,
      Number(resizeHeight.value) || 1600,
      Number(batchLongEdge.value) || 1600,
    );
  }

  function getActiveExportByteLimit() {
    const preset = activeExportPreset && EXPORT_PRESETS[activeExportPreset];
    if (preset?.maxBytes) return preset.maxBytes;
    return 250 * 1024;
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
    const preset = activeExportPreset && EXPORT_PRESETS[activeExportPreset];
    if (preset?.kind === "iri-box") {
      batchResizeHint.textContent = `${preset.label}: ${preset.minW}〜${preset.maxW}px・${Math.round(preset.maxBytes / 1024)}KB以内（保存時は上限近くの画質で調整）`;
      if (batchLongEdgeField) batchLongEdgeField.hidden = true;
      return;
    }
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
    if (batchLongEdgeField) batchLongEdgeField.hidden = mode !== "long";
  }

  function updateExportPresetUi() {
    if (exportPresetPicker) {
      exportPresetPicker.querySelectorAll(".export-preset-btn").forEach((btn) => {
        const active = btn.dataset.preset === activeExportPreset;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }
    if (exportPresetHint) {
      const preset = EXPORT_PRESETS[activeExportPreset];
      if (preset) {
        const limitKb = Math.round(preset.maxBytes / 1024);
        exportPresetHint.textContent = `IRI公式ガイドライン準拠: ${preset.hint}（保存時は画質を上げ、${limitKb}KB近くまで使います）`;
      } else {
        exportPresetHint.textContent = "幅・高さを手動で指定しています。";
      }
    }
    updateBatchResizeHint();
  }

  function clearExportPresetSelection() {
    activeExportPreset = "";
    localStorage.removeItem(EXPORT_PRESET_STORAGE);
    updateExportPresetUi();
  }

  function applyExportPreset(presetId, { silent = false } = {}) {
    const preset = EXPORT_PRESETS[presetId];
    if (!preset) return;
    activeExportPreset = presetId;
    localStorage.setItem(EXPORT_PRESET_STORAGE, presetId);
    if (preset.maxW) resizeWidth.value = String(preset.maxW);
    if (preset.maxH) resizeHeight.value = String(preset.maxH);
    if (batchResizeMode) batchResizeMode.value = "fit";
    updateExportPresetUi();
    if (!silent) showToast(`${preset.label} のサイズ設定を適用しました`);
  }

  function restoreExportPresetPreference() {
    const saved = localStorage.getItem(EXPORT_PRESET_STORAGE);
    if (saved && EXPORT_PRESETS[saved]) {
      applyExportPreset(saved, { silent: true });
      return;
    }
    applyExportPreset(DEFAULT_EXPORT_PRESET, { silent: true });
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
          const { w, h } = resolveTargetSize(src.width, src.height);

          if (w === src.width && h === src.height) {
            if (!photo.baseImageData) {
              photo.baseImageData = src.getContext("2d").getImageData(0, 0, src.width, src.height);
            }
            continue;
          }

          const resized = await resizeCanvasHighQuality(src, w, h);
          const data = resized.getContext("2d").getImageData(0, 0, resized.width, resized.height);
          photo.baseImageData = data;
          markPhotoPixelEdited(photo);
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
    const { w, h } = resolveTargetSize(baseImageData.width, baseImageData.height);

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

  batchResizeMode.addEventListener("change", () => {
    clearExportPresetSelection();
    updateBatchResizeHint();
  });
  batchLongEdge.addEventListener("input", () => {
    clearExportPresetSelection();
    updateBatchResizeHint();
  });

  if (exportPresetPicker) {
    exportPresetPicker.querySelectorAll(".export-preset-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!btn.dataset.preset) return;
        applyExportPreset(btn.dataset.preset);
      });
    });
  }

  restoreExportPresetPreference();

  batchResizeBtn.addEventListener("click", () => {
    batchResizeAll({ andSave: false });
  });
  batchResizeSaveBtn.addEventListener("click", () => {
    batchResizeAll({ andSave: true, forceDownload: false });
  });
  batchResizeDownloadBtn.addEventListener("click", () => {
    batchResizeAll({ andSave: true, forceDownload: true });
  });

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

  if (undoMosaicBtn) {
    undoMosaicBtn.addEventListener("click", () => {
      const photo = getActivePhoto();
      if (!photo) return;
      if (!restorePreMosaicForPhoto(photo)) {
        showToast("戻せるモザイクがありません", { error: true });
        return;
      }
      showToast("モザイクを元に戻しました");
      fileHint.textContent = "モザイクを元に戻しました";
    });
  }

  if (hideBrushModePicker) {
    hideBrushModePicker.querySelectorAll(".hide-brush-mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!btn.dataset.mode || btn.disabled) return;
        setHideBrushMode(btn.dataset.mode);
      });
    });
  }

  [brightness, contrast].forEach((el) => {
    el.addEventListener("input", () => {
      updateLightLabels();
      scheduleRenderEffects();
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

  function updateSkyBrushUi() {
    if (skyBrushModePicker) {
      skyBrushModePicker.querySelectorAll(".hide-brush-mode-btn").forEach((btn) => {
        const active = btn.dataset.mode === skyBrushMode;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }
    if (skyStrokePicker) {
      skyStrokePicker.querySelectorAll(".hide-brush-mode-btn").forEach((btn) => {
        const active = btn.dataset.stroke === skyStrokeStyle;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }
    if (skyBrushSizeLabel && skyBrushSize) {
      skyBrushSizeLabel.textContent = skyBrushSize.value;
    }
    cursor.classList.toggle("is-sky-erase", activeTool === "sky" && skyBrushMode === "erase");
    canvas.classList.toggle("tool-sky-erase", activeTool === "sky" && skyBrushMode === "erase");
  }

  function onSkyControlChange() {
    updateSkyLabels();
    updateSkyPresetActive();
    persistSkyToActivePhoto();
    scheduleRenderEffects();
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

  if (skyBrushModePicker) {
    skyBrushModePicker.querySelectorAll(".hide-brush-mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        skyBrushMode = btn.dataset.mode === "erase" ? "erase" : "add";
        updateSkyBrushUi();
      });
    });
  }
  if (skyStrokePicker) {
    skyStrokePicker.querySelectorAll(".hide-brush-mode-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        skyStrokeStyle = btn.dataset.stroke === "line" ? "line" : "free";
        updateSkyBrushUi();
      });
    });
  }
  if (skyBrushSize) {
    skyBrushSize.addEventListener("input", () => {
      updateSkyBrushUi();
    });
  }
  if (skyClearPaintBtn) {
    skyClearPaintBtn.addEventListener("click", () => {
      clearSkyPaintForPhoto(getActivePhoto());
      scheduleRenderEffects();
      showToast("ブラシで塗った範囲をクリアしました");
    });
  }
  updateSkyBrushUi();

  skyAutoBtn.addEventListener("click", () => {
    if (!baseImageData) return;
    setActiveSkyPresetId("cloudy-blue");
    skyStrength.value = "100";
    skyBrightness.value = "2";
    skyTemperature.value = "4";
    skyScale.value = "105";
    skyShift.value = "-4";
    skyRange.value = "72";
    skyEdgeFade.value = "65";
    skyForeground.value = "20";
    skyKeepClouds.checked = false;
    onSkyControlChange();
    showToast("雲のある自然な青空に置き換えました");
    setPanelTab("edit");
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
    skyKeepClouds.checked = false;
    clearSkyPaintForPhoto(getActivePhoto());
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
    if (activeTool === "hide" || activeTool === "crop" || activeTool === "sky") return false;
    return true;
  }

  function startPaint(e) {
    if (panning || panMode || spaceHeld) return;
    if (!baseImageData) return;

    if (activeTool === "sky") {
      e.preventDefault();
      if (!(Number(skyStrength.value) > 0)) {
        skyStrength.value = "100";
        updateSkyLabels();
        persistSkyToActivePhoto();
      }
      const photo = getActivePhoto();
      const w = baseImageData.width;
      const h = baseImageData.height;
      ensureSkyPaint(photo, w, h);
      lastPoint = getCanvasPoint(e);
      skyStrokeOrigin = lastPoint;
      skyPaintSnapshot = wantsStraightSkyStroke(e) ? snapshotSkyPaint(photo) : null;
      skyPainting = true;
      painting = true;
      paintSkyAt(lastPoint.x, lastPoint.y);
      scheduleRenderEffects();
      return;
    }

    if (activeTool !== "hide") return;
    e.preventDefault();
    if (hideBrushMode === "restore") {
      if (!canUndoMosaic(getActivePhoto())) {
        showToast("復元できるモザイクがありません", { error: true });
        return;
      }
    } else {
      ensurePreMosaicBeforeEdit(getActivePhoto());
    }
    painting = true;
    lastPoint = getCanvasPoint(e);
    if (hideBrushMode === "restore") restoreAt(lastPoint.x, lastPoint.y);
    else mosaicAt(lastPoint.x, lastPoint.y);
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

    if ((activeTool === "hide" || activeTool === "sky") && !spaceHeld && !panMode) {
      const clientX = "touches" in e ? e.touches[0]?.clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0]?.clientY : e.clientY;
      if (clientX != null) {
        const wrapRect = canvasWrap.getBoundingClientRect();
        const inside =
          clientX >= wrapRect.left &&
          clientX <= wrapRect.right &&
          clientY >= wrapRect.top &&
          clientY <= wrapRect.bottom;
        if (!inside) {
          cursor.style.display = "none";
        } else {
          const size = Number(activeTool === "sky" ? skyBrushSize?.value || 12 : brushSize.value);
          const canvasRect = canvas.getBoundingClientRect();
          const scale = canvasRect.width / Math.max(1, canvas.width);
          cursor.style.display = "block";
          cursor.style.width = `${Math.max(8, size * scale)}px`;
          cursor.style.height = `${Math.max(8, size * scale)}px`;
          cursor.style.left = `${clientX - wrapRect.left}px`;
          cursor.style.top = `${clientY - wrapRect.top}px`;
          cursor.classList.toggle("is-sky-erase", activeTool === "sky" && skyBrushMode === "erase");
          cursor.classList.toggle("is-restore", activeTool === "hide" && hideBrushMode === "restore");
        }
      }
    }

    if (!painting) return;
    if (activeTool === "sky") {
      e.preventDefault();
      const point = getCanvasPoint(e);
      const photo = getActivePhoto();
      if (wantsStraightSkyStroke(e) && skyStrokeOrigin) {
        if (!skyPaintSnapshot) skyPaintSnapshot = snapshotSkyPaint(photo);
        restoreSkyPaint(photo, skyPaintSnapshot);
        strokeSkyBrush(skyStrokeOrigin, point);
      } else {
        strokeSkyBrush(lastPoint, point);
        lastPoint = point;
      }
      scheduleRenderEffects();
      return;
    }
    if (activeTool !== "hide") return;
    e.preventDefault();
    const point = getCanvasPoint(e);
    strokeHideBrush(lastPoint, point);
    lastPoint = point;
  }

  function endPointer() {
    if (painting && activeTool === "hide") {
      const photo = getActivePhoto();
      if (photo && baseImageData) {
        photo.baseImageData = cloneImageData(baseImageData);
        markPhotoPixelEdited(photo);
      }
    }
    if (skyPainting) {
      persistSkyToActivePhoto();
      scheduleRenderEffects();
    }
    skyPainting = false;
    painting = false;
    lastPoint = null;
    skyPaintSnapshot = null;
    skyStrokeOrigin = null;
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
  canvasWrap.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });
  canvasWrap.addEventListener(
    "touchstart",
    (e) => {
      if (panMode || spaceHeld || (activeTool !== "hide" && activeTool !== "crop" && activeTool !== "sky")) {
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
      const url = new URL(window.location.href);
      url.searchParams.set("reload", String(Date.now()));
      window.location.replace(url.toString());
    });
  }

  if (appVersionEl) {
    appVersionEl.textContent = `v${APP_VERSION}`;
  }
  document.title = `Lumen v${APP_VERSION} — Photo Editor`;

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
    skyKeepClouds.checked = false;
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
      photo.skyKeepClouds = false;
      photo.skyPaint = null;
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
   * PhotoShop風の画質段階で JPEG を調整する。
   * 見出写真・物件写真とも同じ手順: 高画質から試し、上限近くまで詰める。
   */
  const PHOTOSHOP_JPEG_STEPS = [
    { level: 12, quality: 0.97 },
    { level: 11, quality: 0.94 },
    { level: 10, quality: 0.9 },
    { level: 9, quality: 0.86 },
    { level: 8, quality: 0.82 },
    { level: 7, quality: 0.76 },
    { level: 6, quality: 0.68 },
    { level: 5, quality: 0.58 },
    { level: 4, quality: 0.48 },
    { level: 3, quality: 0.38 },
  ];

  function getPhotoshopJpegSteps(_maxBytes) {
    return PHOTOSHOP_JPEG_STEPS.slice();
  }

  function capExportDimensions(width, height, maxBytes) {
    const longEdge = Math.max(width, height);
    let cap = 4096;
    // IRI枠に合わせる（見出90 / 物件800）。既に resolveTargetSize 済みでも保険。
    if (maxBytes <= 8 * 1024) cap = 90;
    else if (maxBytes <= 300 * 1024) cap = 800;
    if (longEdge <= cap) return { width, height };
    const scale = cap / longEdge;
    return {
      width: Math.max(1, Math.round(width * scale)),
      height: Math.max(1, Math.round(height * scale)),
    };
  }

  function canvasToJpegBlob(exportCanvas, quality) {
    return new Promise((resolve, reject) => {
      if (typeof exportCanvas.toBlob !== "function") {
        try {
          const url = exportCanvas.toDataURL("image/jpeg", quality);
          resolve({ blob: dataUrlToBlob(url), url, size: dataUrlByteSize(url), quality });
        } catch (err) {
          reject(err);
        }
        return;
      }
      exportCanvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("encode failed"));
            return;
          }
          resolve({ blob, size: blob.size, quality });
        },
        "image/jpeg",
        quality,
      );
    });
  }

  async function finalizeExportResult(candidate, width, height) {
    if (candidate.url) {
      return { ...candidate, width, height };
    }
    const url = URL.createObjectURL(candidate.blob);
    return {
      blob: candidate.blob,
      url,
      size: candidate.size,
      quality: candidate.quality,
      psLevel: candidate.psLevel,
      width,
      height,
      revokeUrl: true,
    };
  }

  async function exportUnderLimit(sourceCanvas, maxBytes) {
    const capped = capExportDimensions(sourceCanvas.width, sourceCanvas.height, maxBytes);
    let width = capped.width;
    let height = capped.height;
    const steps = getPhotoshopJpegSteps(maxBytes);
    const maxAttempts = 4;
    // 見出(5KB)・物件(250KB)とも上限の約88%以上を目標
    const fillTarget = Math.floor(maxBytes * 0.88);

    async function findBestQuality(exportCanvas, w, h) {
      let best = null;
      for (const step of steps) {
        const candidate = await canvasToJpegBlob(exportCanvas, step.quality);
        if (candidate.size <= maxBytes) {
          best = {
            ...candidate,
            width: w,
            height: h,
            psLevel: step.level,
          };
          break;
        }
      }
      if (!best) return null;

      // まだ上限に余裕があれば、段階の間を粗いブーストで詰める
      if (fillTarget && best.size < fillTarget) {
        const boosts = [0.92, 0.95, 0.97, 0.99, 1];
        for (const q of boosts) {
          if (q <= best.quality + 0.005) continue;
          const candidate = await canvasToJpegBlob(exportCanvas, q);
          if (candidate.size <= maxBytes && candidate.size >= best.size) {
            best = {
              ...candidate,
              width: w,
              height: h,
              psLevel: q >= 0.97 ? 12 : q >= 0.94 ? 11 : Math.max(best.psLevel || 10, 10),
            };
            if (best.size >= fillTarget) break;
          }
        }
      }
      return best;
    }

    for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
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

      const best = await findBestQuality(exportCanvas, w, h);
      if (best) {
        await yieldToUi();
        return finalizeExportResult(best, w, h);
      }

      // 最低段階でも超える場合は解像度を一段下げて再試行
      width *= 0.85;
      height *= 0.85;
      await yieldToUi();
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
    const fallbackStep = PHOTOSHOP_JPEG_STEPS[PHOTOSHOP_JPEG_STEPS.length - 1];
    const fallback = await canvasToJpegBlob(exportCanvas, fallbackStep.quality);
    fallback.psLevel = fallbackStep.level;
    return finalizeExportResult(fallback, w, h);
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

  function getExportFileName(photo) {
    if (!photo) return "";
    const { base } = splitFileName(photo.name);
    const safe = sanitizeBaseName(base);
    return safe ? `${safe}.jpg` : "";
  }

  function getDuplicateExportNames(photoList) {
    const seen = new Map();
    const duplicates = new Set();
    photoList.forEach((photo) => {
      const name = getExportFileName(photo);
      if (!name) return;
      if (seen.has(name)) duplicates.add(name);
      else seen.set(name, photo.id);
    });
    return [...duplicates];
  }

  function persistActivePhotoName() {
    const photo = getActivePhoto();
    if (!photo) return true;
    const base = sanitizeBaseName(photoNameInput.value);
    if (!base) {
      const msg = "名前を入力してください";
      showToast(msg, { error: true });
      fileHint.textContent = msg;
      nameField.hidden = false;
      setPanelTab("photos");
      photoNameInput.focus();
      return false;
    }
    const { ext } = splitFileName(photo.name);
    photo.name = `${base}${ext || ".jpg"}`;
    if (photo.id === activePhotoId) fileHint.textContent = photo.name;
    syncNameField();
    renderGallery();
    return true;
  }

  function assertExportNamesReady(photoList, { forBatch = false } = {}) {
    const missing = photoList.filter((photo) => !getExportFileName(photo));
    if (missing.length) {
      const msg = "名前が未設定の写真があります。名前を設定してください";
      showToast(msg, { error: true });
      fileHint.textContent = msg;
      if (photoNameInput) {
        nameField.hidden = false;
        setPanelTab("photos");
        photoNameInput.focus();
      }
      return false;
    }

    const duplicates = getDuplicateExportNames(photoList);
    if (!duplicates.length) return true;

    if (isOverwriteEnabled()) {
      if (forBatch) {
        showToast(`同名があります（${duplicates.join("、")}）。最後の写真で上書き保存します`);
      }
      return true;
    }

    const msg = `ファイル名が重複しています（${duplicates.join("、")}）。各写真の名前を変更するか、出力タブで上書きをオンにしてください`;
    showToast(msg, { error: true });
    fileHint.textContent = msg;
    if (photoNameInput) {
      nameField.hidden = false;
      setPanelTab("photos");
      photoNameInput.focus();
      photoNameInput.select();
    }
    return false;
  }

  function isWatermarkEnabledForPhoto(photo) {
    if (!photo) return isWatermarkEnabled();
    if (photo.id === activePhotoId) return isWatermarkEnabled();
    return photo.watermarkEnabled !== false;
  }

  function exportPhotoCanvas(photo, { watermark = true } = {}) {
    if (canUseWatermarkOnlyExport(photo)) {
      const img = photo.sourceImage;
      const { w, h } = resolveTargetSize(img.naturalWidth, img.naturalHeight);
      const { bright } = getPhotoAdjustments(photo);
      const temp = canvasFromSourceImage(photo, w, h);
      if (bright !== 0) {
        applyBrightnessToCanvas(temp, bright);
      }
      if (watermark && isWatermarkEnabledForPhoto(photo)) {
        applyWatermarkToCanvas(temp, getWatermarkPositionForPhoto(photo));
      }
      return temp;
    }

    const data = photo.id === activePhotoId && baseImageData ? baseImageData : photo.baseImageData;
    if (!data) return null;

    const { bright, contrastVal, skyOpts } = getPhotoAdjustments(photo);
    const { w, h } = resolveTargetSize(data.width, data.height);

    let temp;
    if (!needsLitProcessing(bright, contrastVal, skyOpts)) {
      temp = scaleCanvasToExport(imageDataToCanvas(data), w, h);
    } else {
      const workingData = scaleImageData(data, w, h);
      const out = new ImageData(w, h);
      processLitPixels(workingData, out.data, bright, contrastVal, skyOpts);
      temp = document.createElement("canvas");
      temp.width = w;
      temp.height = h;
      temp.getContext("2d").putImageData(out, 0, 0);
    }

    if (watermark && isWatermarkEnabledForPhoto(photo)) {
      applyWatermarkToCanvas(temp, getWatermarkPositionForPhoto(photo));
    }
    return temp;
  }

  function triggerDownload(result, filename) {
    const link = document.createElement("a");
    link.download = filename;
    link.href = result.url;
    link.click();
    if (result.revokeUrl && result.url) {
      setTimeout(() => URL.revokeObjectURL(result.url), 2000);
    }
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

  async function fileExistsInSaveDir(filename) {
    if (!saveDirHandle) return false;
    try {
      await saveDirHandle.getFileHandle(filename);
      return true;
    } catch (err) {
      if (err && err.name === "NotFoundError") return false;
      throw err;
    }
  }

  async function saveToFolder(result, filename) {
    if (!saveDirHandle) {
      await pickSaveFolder();
      if (!saveDirHandle) return { ok: false };
    }

    const ok = await ensureDirPermission(saveDirHandle);
    if (!ok) {
      fileHint.textContent = "フォルダへの書き込み許可が必要です";
      return { ok: false };
    }

    const exists = await fileExistsInSaveDir(filename);
    if (exists && !isOverwriteEnabled()) {
      const msg = `「${filename}」は既にあります。上書きする場合は「同名ファイルを上書き保存」をオンにしてください`;
      showToast(msg, { error: true });
      fileHint.textContent = msg;
      return { ok: false };
    }

    const fileHandle = await saveDirHandle.getFileHandle(filename, { create: true });
    const writable = await fileHandle.createWritable();
    const payload = result.blob || dataUrlToBlob(result.url);
    await writable.write(payload);
    await writable.close();
    if (result.revokeUrl && result.url) URL.revokeObjectURL(result.url);
    return { ok: true, overwritten: exists };
  }

  async function saveImage({ forceDownload = false } = {}) {
    if (!baseImageData) return;
    snapshotPhotoSettings();
    if (!persistActivePhotoName()) return;
    if (!assertExportNamesReady(photos)) return;

    const active = getActivePhoto();
    const filename = getExportFileName(active);
    if (!filename) return;

    saveBtn.disabled = true;
    downloadBtn.disabled = true;
    const fastSave = canUseWatermarkOnlyExport(active);
    setImportLoading(true, {
      title: "保存しています",
      detail: fastSave ? "透かしを付けて書き出し中…" : "画像を書き出し中…",
    });

    try {
      await yieldToUi();
      const exportCanvas = await buildExportCanvas(active);
      if (!exportCanvas) return;
      await yieldToUi();
      const result = await exportUnderLimit(exportCanvas, getActiveExportByteLimit());

      if (!forceDownload && canUseFolderSave) {
        try {
          const saved = await saveToFolder(result, filename);
          if (saved.ok) {
            const pathLabel = `${saveDirHandle.name}/${filename}`;
            const actionLabel = saved.overwritten ? "上書き保存しました" : "保存しました";
            const qLabel = result.psLevel != null ? `・画質${result.psLevel}` : "";
            notifySuccess("save", `${actionLabel}（${formatBytes(result.size)}${qLabel}）`, {
              mode: "folder",
              filename,
              path: pathLabel,
              bytes: result.size,
              psLevel: result.psLevel,
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
      const qLabel = result.psLevel != null ? `・画質${result.psLevel}` : "";
      notifySuccess(type, `ダウンロードしました（${formatBytes(result.size)}${qLabel}）`, {
        mode: "download",
        filename,
        bytes: result.size,
        psLevel: result.psLevel,
        width: result.width,
        height: result.height,
      });
    } finally {
      setImportLoading(false);
      saveBtn.disabled = false;
      downloadBtn.disabled = false;
    }
  }

  async function saveAllImages({ forceDownload = false } = {}) {
    if (!photos.length) return;
    snapshotPhotoSettings();
    if (!persistActivePhotoName()) return;
    if (!assertExportNamesReady(photos, { forBatch: true })) return;

    if (!forceDownload && canUseFolderSave && !saveDirHandle) {
      await pickSaveFolder();
      if (!saveDirHandle) return;
    }

    let saved = 0;
    let failed = 0;

    saveAllBtn.disabled = true;
    downloadAllBtn.disabled = true;
    saveBtn.disabled = true;
    downloadBtn.disabled = true;
    setImportLoading(true, { title: "一括保存しています", detail: `0/${photos.length}` });

    try {
      for (let i = 0; i < photos.length; i += 1) {
        const photo = photos[i];
        setImportLoading(true, {
          title: "一括保存しています",
          detail: `${i + 1}/${photos.length}`,
          progress: Math.round(((i + 1) / photos.length) * 100),
        });

        const exportCanvas = await buildExportCanvas(photo);
        if (!exportCanvas) {
          failed += 1;
          continue;
        }
        await yieldToUi();
        const result = await exportUnderLimit(exportCanvas, getActiveExportByteLimit());
        const filename = getExportFileName(photo);
        if (!filename) {
          failed += 1;
          continue;
        }

        try {
          if (!forceDownload && canUseFolderSave) {
            const saveResult = await saveToFolder(result, filename);
            if (saveResult.ok) {
              saved += 1;
              continue;
            }
          }
          triggerDownload(result, filename);
          saved += 1;
          await new Promise((r) => setTimeout(r, 180));
        } catch (err) {
          console.warn(err);
          failed += 1;
        }

        if (i % 2 === 1) await yieldToUi();
      }

      const mode = forceDownload ? "download" : "save";
      const message =
        failed > 0
          ? `${saved}枚完了（${failed}枚失敗）`
          : `${saved}枚を${forceDownload ? "ダウンロード" : "保存"}しました`;
      notifySuccess(mode, message, { count: saved, failed });
    } finally {
      setImportLoading(false);
      saveAllBtn.disabled = false;
      downloadAllBtn.disabled = false;
      saveBtn.disabled = false;
      downloadBtn.disabled = false;
    }
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
