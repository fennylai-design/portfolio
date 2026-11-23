# Fenny 個人網站・設計原則知識庫（design-principles.md）

> 用途：本網站 UI 的單一真相來源。任何前端／UI 調整前先讀本檔，改完用文末「健檢清單」逐項對照。
> 原則：寧可少一套、全站一致，也不要每頁各自發明。
> 來源：改寫自 Fenny 給 Howay 的 UIUX 分享（2026-06-16）+ 品牌視覺系統（`200_Reference/brand/brand-design-guide.md`）+ 本站拍板決定。

---

## 0. 視覺調性（本站的靈魂）

**溫暖手札 × 扁平編輯感。**

- 空間感**不靠陰影、不靠圓角卡片**，而是靠三樣東西：
  1. **色塊分帶**：用 base / surface 兩個底色把頁面切成一帶一帶的區段。
  2. **線條**：hairline 細線（`border-ink/10`）做分隔與「框住一組」。
  3. **留白**：大膽留白，相關的靠近、不相關的拉開。
- 暖白底 + 暖黑字 + 粉色亮點。克制、可讀、有設計感，不花俏。

---

## A. 文字可讀性 Tokens

### 字體
- 中文（內文＋標題）：**源樣黑體 GenYoGothic（TW 台灣字形）**，自架、子集化 woff2（`public/fonts/GenYoGothic-*.subset.woff2`），每字重 ~75KB。字重：Regular 400 / Medium 500 / Bold（600、700 共用）。
- 英文／數字：**Plus Jakarta Sans**（Google Fonts），永遠排在 font stack 最前，中文 fallback 到 GenYoGothic。
- 引言金句：襯線 `Lora` + `Noto Serif TC`（`.quote`）。
- **加字、改文案後要重做子集**：用 `pyftsubset <otf> --text-file=chars.txt --flavor=woff2`（chars.txt 掃全站 .astro 的中文字）。原始 OTF 不入 repo。

### 顏色對比（WCAG）
- 內文對背景對比 **≥ 4.5:1**（WCAG AA）。
- **正文一律用 `text-ink/80`（80% 暖黑）為標準**——純黑在暖白底上稍硬，80% 仍達 AA 且更柔。
- **`muted` `#8B8589` 只能用在**：日期、標籤、圖說、eyebrow、次要說明。**不可用在正文。**

### 字級階層 Type scale（固定這套，不隨手定大小）
| 用途 | 大小 | Tailwind |
|:--|:--|:--|
| 頁面主標 H1 | 手機 32 → 桌面 **40px** | `text-[2rem]` → `sm:text-[2.5rem]` |
| 區塊標題 H2 | **30px** | `text-3xl` |
| 小標 H3 | **20px** | `text-xl`（卡片標題、步驟標題都用這個） |
| 內文（繁中）| **18px** | `text-lg` |
| 次要／註解 | 14px | `text-sm` |
| Tag 膠囊 | 12px | `text-xs` |
- 中文比同級英文「看起來更小」，繁中內文一律 18px（`text-lg`），不要掉到 16px。
- 同層級（如所有 H3）字級必須一致，不可一處 20、一處 18。
- 手機輸入框字級 **≥ 16px**（低於 16px 在 iOS 會觸發自動放大）。

### 行高 Line-height
- 繁中內文 **1.7–1.8**（已設於 `body`，line-height 1.75）。
- 標題 1.2–1.3（`leading-tight`）。

### 行寬 Measure
- 長段落欄寬 **≤ 約 40 中文字**；prose 區塊 `max-w-prose` 或約 `max-w-2xl`。
- Landing 區段可寬，但段落文字本身控制在易讀寬度，不要整行拉到底。

### 間距 Spacing（8pt grid）
- 取值：**4 / 8 / 16 / 24 / 32 / 48 / 64**（Tailwind `1 / 2 / 4 / 6 / 8 / 12 / 16`）。
- 內距、外距、間隙都從這套取，維持節奏。
- 區塊上下留白大（`py-20`～`py-28`），段間距 `≥ 16px`。

---

## B. 元件規則

### 按鈕（只用三級・含完整互動狀態）

**通則**：方塊按鈕（primary／secondary）**固定高度 40px**（`h-10`）、圓角 2px（`rounded-btn`）、**無陰影**。互動**只靠顏色變化，不浮起、不位移**。Focus 只給鍵盤（`focus-visible:ring-2 ring-brand ring-offset-2`）。一個畫面**最多一顆 primary**，不可只靠顏色區分級別。

色階：主粉 `brand #D9358D`、淺粉底 `hl-pink #F7D0E5`、深粉 `brand-deep #A82568`、停用 `muted #8B8589`。

Hover 全站統一用**同一種淺粉底 `hl-pink`**。Active 維持各自形式、只把粉色轉深（`brand-deep`）：Primary 實心轉深粉底+白字；Secondary 維持框線、底色不變（仍淺粉），框+字轉深粉。

| 級別 | Default | Hover | Active | Focus | Disabled |
|:--|:--|:--|:--|:--|:--|
| **Primary** | 實心粉底 + 白字 | 淺粉底 `hl-pink` + 粉字 | 深粉底 `brand-deep` + 白字 | + 粉外框 | muted 底 + 白字 40% |
| **Secondary** | 粉框 + 粉字 | 淺粉底 `hl-pink` + 粉字 | **淺粉底不變**，深粉框 + 深粉字 | + 粉外框 | 灰框 + 灰字 40% |
| **Tertiary**（文字連結，無固定高度）| 粉字、**無底線** | **加底線** | 深粉字 + 底線 | + 粉外框 | 灰字、無底線 40% |

- Tertiary 用於：Nav 聯絡我、卡片內的「看模板 →」等行動連結。一律走共用 `Button` 元件，不手刻。
- 停用態用 `disabled` prop（加 `aria-disabled` + `pointer-events-none`）。

### 卡片（一個標準卡，全站套用）
- **直角（無圓角）**、**無陰影**。
- 用 **surface 色塊** 或 **hairline 細線框**（`border border-ink/10`）做「common region」圈住一組。
- 內距取 8pt grid（`p-6`～`p-8`）。
- 一排卡片**等高對齊**，避免高高低低。
- hover 若需回饋：用底色微變或邊框變色，不用浮起陰影。

### 區段分隔
- 相鄰區段用**底色交替**（base ↔ surface）或**上下 hairline 線**（`border-y border-ink/10`）區隔，不用陰影、不用大圓角容器。

### 顏色語意（照用途命名，不照長相）
- 已語意化：`base / surface / ink / muted / brand / blue / darkblue / hl-sky / hl-pink`。
- 標籤顏色綁死意義並全站一致。用顏色分類處要配文字標示。

---

## C. 資訊層級規則

- 製造層級的五個工具：**大小、粗細、顏色對比、留白與分組、位置**。
- 每頁排出「先看什麼 → 再看什麼 → 細節」，避免所有元素同大小／同粗細／同色的扁平版面。
- **Gestalt 接近原則**：相關元素靠在一起、不相關的拉開（CP 值最高，先用這個）。
- **Gestalt 共同區域**：用線／色塊把一組圈起來（卡片、分區的依據）。
- 標籤用小灰字（muted）、內容用較深字（ink）。

---

## 健檢清單（改完 UI 逐項對照）

- [ ] 正文用 ink 深字，淺灰（muted）只用在日期／標籤／次要說明
- [ ] 內文對背景對比 ≥ 4.5:1
- [ ] 繁中內文 17–18px；手機輸入框 ≥ 16px
- [ ] 字級取自固定 type scale，非隨手定值
- [ ] 繁中內文行高 1.7–1.8、標題 1.2–1.3
- [ ] 長段落欄寬控制在易讀寬度（≤ 約 40 中文字）
- [ ] 間距取自 8pt grid（4/8/16/24/32/48/64）
- [ ] 按鈕只用三級、一畫面最多一顆 primary、不只靠顏色區分
- [ ] 按鈕、卡片**無陰影**；空間感來自色塊／線條／留白
- [ ] 卡片**無圓角（直角）**、等高對齊、共用同一套內距
- [ ] 區段用底色交替或 hairline 線分隔，不用陰影容器
- [ ] 顏色照用途命名、全站綁定語意
- [ ] 每頁有清楚資訊層級，相關元素用留白與容器（線／色塊）分組
