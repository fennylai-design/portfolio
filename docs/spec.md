# 作品集網站 Spec（v1 極簡版面）

> 建立：2026-11-23
> 範圍：v1 只管排版、基本互動、文字內容；視覺優化與插圖在 v3

---

## 1. 技術框架

| 層 | 用什麼 | 說明 |
|---|---|---|
| 網站框架 | Astro 7 | 產出靜態網頁，載入快 |
| 樣式 | Tailwind CSS 4 | 品牌色票、字體、圓角定義在 `src/styles/global.css` 的 `@theme` |
| 設計規則 | `design-principles.md` | 從 personal-site 複製；改 UI 前先讀，改完照文末健檢清單檢查 |
| 互動 | 原生 HTML／CSS，少量 JS | 不裝額外套件 |
| 部署 | Cloudflare Pages | v4 |

指令：`npm run dev`（本機預覽）、`npm run build`（打包檢查）。

## 2. 資料夾

```
portfolio-website/
├ docs/                 road-map 與 spec
├ design-principles.md  設計規則（單一標準）
├ public/fonts/         源樣黑體子集化字檔
└ src/
  ├ content/interior.ts  ← 全頁文案都在這，改字只改這份
  ├ components/ui/       基本元件：Button、Card、Tag（與 personal-site 同一套）
  ├ components/sections/ 區塊元件：每塊一個檔，文字從 content 傳進來
  ├ layouts/Layout.astro
  └ pages/index.astro    把區塊依序排起來
```

## 3. 頁面結構與元件

| 順序 | 錨點 | 區塊 | 元件 | 版面 |
|---|---|---|---|---|
| 0 | — | 導覽列 | `Nav` | 左：名字；中：關於・服務・流程・案例；右：預約訪談（primary）。捲動時固定在頂端 |
| ① | `#top` | 首屏（第 1＋2 塊） | `Hero` | H1 一句話價值；副句定位宣言；primary「預約 60 分鐘訪談」＋ tertiary「看服務內容 ↓」 |
| ② | `#about` | 關於我（第 3 塊） | `About` | 桌機左照片框右文字；名字＋工作亮點一句；四個標籤（價值觀・特質・技能・產業）各一行；Logo 版位 |
| ③ | `#benefit` | 合作的好處（第 4 塊） | `Benefit` | 粗體標題＋三行（現況 → 你需要的是 → 讓你能），三行用細線與小標分開 |
| ④ | `#services` | 服務方案（第 5 塊） | `Services` | 三欄卡片（手機直排）：編號、名稱、做什麼、你拿到 |
| ⑤ | `#process` | 接案流程（第 6 塊） | `Process` | 5 步編號；桌機橫排、手機直排 |
| ⑥ | `#cases` | 案例（第 7 塊） | `Cases` | 主案大卡＋小卡；每張卡：產業標籤、標題、成果一句，點開看「困難／做法／成果」。評價區有資料才顯示 |
| ⑦ | `#contact` | 下一步（第 8 塊） | `Contact` | 訪談會聊什麼（3 點）＋ primary 預約按鈕 |
| — | — | 頁尾 | `Footer` | 名字、版權、Email／Threads |

區段分隔：底色 base ↔ surface 交替（照 design-principles「區段分隔」）。

## 4. 基本元件（`src/components/ui/`）

| 元件 | 樣式 | 用在 |
|---|---|---|
| Button | primary／secondary／tertiary，含 hover、active、focus、disabled | 預約（primary，一個畫面最多一顆）、看服務（tertiary） |
| Card | fill（surface 色塊）／outline（細線框）；直角無陰影 | 服務、案例 |
| Tag | pink／blue／darkblue／ink 膠囊 | 關於我標籤、案例產業 |

v1 新增：`Placeholder`：灰色虛線框＋「待補：…」字樣，用在還沒定的內容（照片、Logo、案例畫面）。

## 5. 互動

| 互動 | 做法 |
|---|---|
| 導覽列錨點平滑捲動 | `html { scroll-behavior: smooth }`（已有）＋ `scroll-margin-top` 避免被固定導覽列擋住 |
| 導覽列固定 | `sticky top-0`，底部 hairline |
| ~~手機版底部預約按鈕~~ | 11/24 拿掉 |
| 案例卡展開 | HTML `<details>`／`<summary>`，不寫 JS |

## 6. 內容規則

- 文案以 `100_Todo/doing/2026-11-16_產品_作品集規劃.md` 為準，定稿後搬進 `src/content/interior.ts`。
- 還沒定的文字用目前草稿，在 content 裡標 `draft: true`，v1 頁面上不特別標示（避免干擾閱讀），清單在 road-map v2。
- 不放：價格、訪談回饋、假評價（Tania、小嵐、小安那種佔位字）、客戶名字（去識別化，只寫產業與工作型態）。
- Cal.com 連結先用 `#contact` 佔位。

## 7. 驗收（v1）

- [ ] `npm run build` 通過
- [ ] 手機（375px）與桌機（1280px）都能順著讀完八塊
- [ ] 導覽列錨點都捲得到正確區塊，不被導覽列擋住
- [ ] 案例卡能展開收合
- [ ] 照 `design-principles.md` 健檢清單逐項檢查

## 8. 字體子集化（改文案後要重做）

源石黑體只打包頁面用到的字。**新增或改文案後，新字不在字型檔裡就會改用系統字體，看起來粗細不一**（2026-11-24 首屏「也、再、讓」就是這樣）。

重做步驟：
1. 原始字型：源石黑體 TW v2.100（[ButTaiwan/genseki-font](https://github.com/ButTaiwan/genseki-font/releases) 的 `GenSekiGothic2TW-otf.zip`），原始 OTF 不進 repo。
2. 掃 `src/` 所有檔案的字，加上常用全形標點，存成 `chars.txt`。
3. 用 fonttools 的 `pyftsubset` 對 R／M／B 三個字重各跑一次：
   `pyftsubset GenSekiGothic2TW-R.otf --text-file=chars.txt --flavor=woff2 --layout-features='*' --output-file=public/fonts/GenSekiGothic-Regular.subset.woff2`（M → Medium、B → Bold）
4. 檢查每個字重都沒有缺字，再讓瀏覽器強制重新整理（Cmd+Shift+R）。

目前每個字重約 210KB（853 個非英數字元，2026-11-26 Cheng 回饋改文案後補字；2026-11-27 案例卡改版再補 10 字；2026-11-27 一人公司案例再補 35 字，約 230KB；同日合作流程文案補「辨」）。補字時把舊字型檔裡已有的字一起併進 chars.txt，避免掃描漏掉的字被刪掉；表情符號（👋）不在字型裡，交給系統字體。

## 9. 發布（GitHub Pages）

- 網址：https://fennylai-design.github.io/portfolio/
- 公開 repo `fennylai-design/portfolio` 只放這個網站資料夾；程式本體還是在 `fenny-agent` 改。
- 推到 `portfolio` 的 main 就會自動打包上線（`.github/workflows/deploy.yml`，約 1 分鐘）。
- 發布指令（在 repo 根目錄）：
  `git push https://github.com/fennylai-design/portfolio.git $(git subtree split --prefix=300_Web/portfolio-website):refs/heads/main`（不建暫存分支。zsh 裡如果先存成變數，要寫 `${SHA}:refs/...`，寫 `$SHA:refs` 會被 zsh 吃掉 `:r` 而推失敗）
- 網站住在 `/portfolio` 子路徑：`public/` 的檔案在元件裡要用 `asset("/logo.png")`（`src/lib/asset.ts`）；CSS 的 `url(/fonts/...)` 打包時會自動加上。
- 換自己的網域時：`astro.config.mjs` 的 `site` 改網域、拿掉 `base`。
