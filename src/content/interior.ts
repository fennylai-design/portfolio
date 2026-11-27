// 室內設計版作品集：全頁文案
// 來源：100_Todo/doing/2026-11-16_產品_作品集規劃.md（文案在那邊定，再搬過來）
// draft: true = 還是草稿、等 Fenny 確認（清單見 docs/roadmap.md v2）

export const bookingUrl = "#contact"; // TODO: 換成真的 Cal.com 連結

export const site = {
	title: "Fenny｜小型團隊的 AI 客戶專案管理系統",
	description:
		"讓 AI 自動記錄專案進展，客戶也能隨時看到進度，不用一直追問，對你們更放心。",
	name: "Fenny",
	logo: "/logo.png" as string, // 例："/logo.svg"；空字串＝導覽列顯示 Logo 佔位
};

export const nav = [
	{ label: "我的服務", href: "#about" },
	{ label: "服務方案", href: "#services" }, // 含服務方案與合作流程
	{ label: "成功案例", href: "#cases" },
	{ label: "下一步怎麼做", href: "#contact" },
];

// ① 首屏：第 1 塊＋第 2 塊
export const hero = {
	// 11/24 Fenny 改：首屏改寫給小型專業服務團隊（原室內設計版：「讓每個案場進度都看得見，你不用再被追著問，業主也更放心。」）
	// 11/26 照 Cheng 回饋改白話、對象放寬（前一版：「一套讓中小型企業提升服務價值與成交率的數位工作流」）
	// 11/26 Fenny：原大標併進副標，大標改成講系統本身
	// 每一項一行（原本逗號處斷行、逗號拿掉）
	titleLines: ["一套讓 AI 幫團隊記錄專案進展", "客戶也能看到進度的專案管理系統"],
	// 每一列一行；hl: true 的片段進場時自動畫上淡粉螢光筆（依序劃過）
	leadLines: [
		[{ text: "我協助個人工作室與 5-15 人的小型團隊" }, { text: "導入 AI", hl: true }, { text: "，" }],
		[{ text: "建立" }, { text: "客戶專案管理系統", hl: true }, { text: "。" }],
		[{ text: "客戶不用一直追問，對你們" }, { text: "更放心", hl: true }, { text: "。" }],
	] as { text: string; hl?: boolean }[][],
	// 11/26 從「關於我」搬上來：差異化（前台＋後台），放在流程圖上方當說明
	flowCaption: "", // 11/27 Fenny：拿掉（原句「不只做團隊內部的系統，也設計客戶看到的畫面」）；空字串＝不顯示
	// 副標（定位宣言）11/24 Fenny 決定首屏不放，先留著文字備用
	statement:
		"我跟室內設計公司合作，打造一套從接洽、設計、施工到驗收的客製化數位工作流程，讓客戶確認、工班資料、工程進度與款項不再散在 LINE 與各種檔案裡，業主也看得到進度。你能同時掌握多個案場，不被追著問進度，業主也放心。",
	secondary: "了解我的服務",
	image: "" as string, // 首屏右側主視覺，例："/hero.jpg"；空字串＝顯示佔位框
	imageAlt: "",
	draft: true,
};

// ② 關於我：第 3 塊
export const about = {
	// 11/26 版型改成「左大照片＋右大標、短介紹、底部數字列」（參考 Fenny 給的作品集截圖）
	// 內容沿用 11/26 條列版：待過的公司、熟悉的流程、服務過、模板實績
	// 11/26 區塊最上方加一行大字（參考截圖「I'M GUO — A PRODUCT DESIGNER WHO THINKS LIKE A FOUNDER.」），文字是草稿等 Fenny 定；hl 用品牌粉
	bigLines: [
		[{ text: "我是 Fenny，" }],
		[{ text: "一位" }, { text: "懂專案管理的", hl: true }, { text: " UI/UX 設計師" }],
	] as { text: string; hl?: boolean }[][],
	bigSub: "10+ 年 App、網頁與系統設計經驗，現在獨立接案，和個人工作室、小型團隊一起工作。",
	// 右側大標：11/26 Fenny 選
	headlineLines: ["用設計的方法，", "整理團隊的工作流程"],
	// 介紹段：每一列一段，accent: true 的片段用品牌粉色標出重點
	intro: [
		[{ text: "有 10 年 UI/UX 設計經驗，待過設計顧問公司、人資服務新創、語言教育團隊，熟悉接案與服務型公司的流程。" }],
		[{ text: "協助過婚禮顧問、影視製作、行銷接案團隊導入 Notion 客戶專案管理系統，", accent: true }, { text: "設計過 10+ 種產業的系統。" }],
	] as { text: string; accent?: boolean }[][],
	// 底部數字列
	stats: [
		{ num: "10+", label: "年 App、網頁、系統設計經驗" },
		// 11/26 Fenny 列的設計專案共 15 個：三商人壽官網、誠品線上改版、信義房屋網站改版、線上博弈網頁改版、遊戲公司內部管理系統、
		// 遠傳電信官網改版、中文線上教學平台後台、好賣家電商前後台、新創剩食 app、出缺勤系統、Worca（薪資計算、招募管理、出缺勤、員工資料管理、招募網站前台）
		// 出缺勤系統＝Worca 那個（11/26 Fenny 確認），設計專案實為 14 個；再加 Notion 導入 4 案（婚顧、影視、行銷、她勢行銷）＋ 2 個模板（團隊版、個人版）＝ 20
		{ num: "20+", label: "個完成專案" },
		{ num: "3+", label: "年專案管理經驗" },
		// 模板（3,500+ 下載、4.9 分）11/26 Fenny：先拿掉，另外找地方放
	],
	photo: "" as string, // 照片放 public/ 後填路徑，例："/about.jpg"；空字串＝佔位框
	photoAlt: "Fenny",
	photoPlaceholder: "照片",
	logoPlaceholder: "合作客戶 Logo",
};

// ③ 合作的好處：第 4 塊（11/25 Fenny：併進「關於我」，在那一區底部做成一張玻璃卡）
export const benefit = {
	// 11/25 改成置中大字聲明（大標不上色、痛點做成置中白色小卡、結論放大並 highlight 重點）
	titleLines: ["你需要的不只是一張進度表、", "一個 AI 製作的儀表板"],
	// 痛點逐條列（拆自原句：專案資料散在 LINE 與各種檔案裡，業主總是問進度、擔心施作成果，請款帳目對不上。）
	pains: ["專案資料散在 LINE 與各種檔案裡", "客戶總是追著問進度", "請款帳目對不上"],
	// 結論：每一列一行（桌機斷行），hl 為 true 的片段用品牌粉 highlight
	conclusion: [
		[{ text: "你需要" }, { text: "一套有效的 AI x Notion 專案管理系統", hl: true }, { text: "，" }],
		[{ text: "讓團隊能從諮詢提案到驗收結案，同時管理多個專案也能有條有理，" }],
		[{ text: "客戶覺得你們專業又讓人安心。" }],
	],
};

// ④ 服務方案：第 5 塊
export const services = {
	// image：卡片底部插圖，放 public/services/ 後填路徑（例如 "/services/diagnosis.png"），沒填就顯示待補框
	title: "AI x Notion 工作流導入方案",
	intro: "包含以下內容：",
	items: [
		{
			name: "專案營運診斷",
			sub: "AI 工作流程診斷",
			does: [
				"工作流程診斷問卷",
				"工作流程診斷線上會議",
				"找出最花時間的環節，評估可標準化與使用 AI、自動化改善之處",
			],
			gets: "診斷報告（問題清單與優先順序）、改善藍圖建議與規劃",
		},
		{
			name: "AI x Notion 流程與系統建置",
			sub: "AI x Notion 系統規劃與建置",
			does: [
				"2 版使用版面規劃",
				"2 次資料庫／流程修改",
				"資料庫與自動化建置",
				"AI 系統建置規劃",
				"使用體驗／版面設計",
			],
			gets: "一套能運作的系統與操作畫面",
		},
		{
			name: "團隊應用導入與教學",
			sub: "團隊導入服務",
			does: [
				"AI x Notion 使用教學",
				"客製化教材",
				"落地後的使用習慣追蹤",
				"交付後 2 個月的訊息諮詢",
			],
			gets: "團隊會用、願意用的系統",
		},
	] as { name: string; sub: string; does: string[]; gets: string; image?: string }[],
};

// ⑤ 接案流程：第 6 塊
export const process = {
	title: "合作流程",
	steps: [
		{ name: "60 分鐘訪談", text: "聊你們現在案子怎麼跑" },
		{ name: "現況診斷與提案", text: "整理哪裡最花時間，提出方向與報價" },
		{ name: "設計與建置", text: "專案管理，加上客戶看到的進度頁" },
		{ name: "試用與調整", text: "團隊實際用一段時間，期間討論調整 1–2 輪" },
		{ name: "教學與交付", text: "教育訓練、操作手冊、後續支援" },
	] as { name: string; text: string; image?: string }[],
};

// ⑥ 案例：第 7 塊（內容最後補，先放草稿）
export const cases = {
	title: "成功案例",
	// 11/26 順序照跟目標客戶的相似度：婚顧 → 獵頭 → 影視
	// 11/27 獵頭、影視拿掉，改成 Fenny 自己的一人公司（AI Agent × Notion 串接示範）；現在兩張：婚顧 → 一人公司
	// 11/26 改版：卡片正面只放 name（大標）＋成果條列（產業標籤拿掉，跳窗裡保留）；完整標題、困難、解決方案搬進「了解更多」跳窗，晚點再細調
	// 卡片底色 11/26 試過 B 淺彩、A 米灰，最後定白卡＋卡片浮起（Hover Lift）
	// 去識別化：不寫客戶名，只寫工作型態（9/1 原則；子時能不能公開還沒問）
	items: [
		{
			featured: true,
			industry: "婚禮顧問",
			name: "小型婚禮顧問團隊",
			title: "小型婚禮顧問團隊：客戶協作與專案管理，整合在同一個地方",
			problem:
				// 11/26 改用客戶原話（「需要重複貼上到很多地方」）
				"原本用 Google Sheet 和 Doc 管理，檔案四散，同一份資料「需要重複貼上到很多地方」，還有營運款項與廠商資料要管。每組新人都有許多要一起協作的環節，資料越來越多，現有工具已經撐不住。",
			solution: {
				intro:
					"我從實際工作流程、團隊協作方式與未來擴充需求一起思考，透過系統化的規劃，建立一套更清晰、更有效率的工作架構。讓原本分散在不同文件、訊息與表格的資料，能夠在同一個架構下被清楚地管理，團隊在執行與協作上也更加順暢，成為一套真正能陪伴團隊持續成長的系統。",
				points: [
					"首頁專案看板，一眼看到每組新人的進度",
					"廠商資料集中管理",
					"開新案時，一鍵建好整套專案文件",
					"給新人填寫的頁面與中英文檔案，客戶要交的東西也追蹤得到",
				],
			},
			// 2–3 小時是 Fenny 估的（原本每週開會對每天貼的進度），所以寫「約」
			outcomes: [
				// 11/27 Fenny 改：時間改「減少每週同步資料管理 1–3 小時」
				"進度直接在系統裡同步，減少每週同步資料管理 1–3 小時的時間",
				"一個按鈕就建好專案文件，省下每次開案來回複製的時間",
				"客戶協作和團隊內部管理，在同一個平台同步進行",
			],
			more: [] as string[], // 跳窗裡的補充說明，待補
			images: 3, // 跳窗裡的畫面張數（目前是佔位）
			thumb: "wedding", // 卡片縮圖＝封面：src/components/sections/thumbs/WeddingCover.astro
			// 11/27 跳窗改放四張前後對照圖（取代流程圖、串接點文字、畫面佔位；flow／joints 先留著不刪）
			// 說明把原本四個串接點的內容併進來；key 對到 Cases.astro 的 shotParts
			shots: [
				{ key: "wedding-process", title: "從諮詢到請款，一條固定流程", text: "諮詢表**自動帶進洽談紀錄**，報價用模板產出，簽約後**一鍵開案**；訂金、中期款、尾款跟著階段走，廠商在籌備時直接從資料庫挑。", conclusion: "每個階段要做的事，都在**同一個地方**接下去" },
				{ key: "wedding-collab", title: "新人只要看一頁", text: "團隊在內部的籌備進度表更新，新人要做的事**同步到新人頁**；不用再分享一份份檔案、一筆筆開權限。", conclusion: "團隊在內部改，新人頁同步更新，**不用再一個個追問**" },
				{ key: "wedding-board", title: "每組新人的進度，一眼看清", text: "以前每組新人的進度，要在好幾份 Excel 來回核對；現在追蹤籌備進度，婚期倒數、籌備進度、快到期的新人任務，都在**同一個看板**上，每組新人一眼看清。", conclusion: "好幾組新人同時籌備，也**不會漏掉誰**" },
				{ key: "wedding-ops", title: "營運數字和款項，打開就看得到", text: "以前收入、成本、款項各記一份；現在簽約數、收入、成本、廠商回佣**自動統計**，應收應付的款項狀態，打開就看得到。", conclusion: "不用對好幾份表，就知道**這個月的狀況**" },
			],
			// 11/27 內頁大標下的副標
			subtitle: "從資料分散各處，到整合一個客戶專案管理系統",
			// 內頁最上面的膠囊（取代產業名）；icon 等 Fenny 給 Notion 圖示，放 public/ 後填路徑
			detailTag: { text: "Notion 導入", icon: "/cases/notion.svg" },
			// 卡片正面的導入膠囊（11/27 取代「AI 可延伸」）
			cardTag: { text: "Notion 客戶專案管理系統導入", icon: "/cases/notion.svg" },
			// 卡片上的成果簡短版（完整版在 outcomes，內頁用）
			cardOutcomes: ["每週省下 1–3 小時同步資料", "一個按鈕建好專案文件", "客戶協作和內部管理在同一處"],
			// 11/27 內頁「過去 v.s. 現在」（Fenny 社群圖文的寫法）；**關鍵詞** 會變粗體底線
			pastNow: {
				past: { title: "資料散在 Sheet、Doc 和 LINE", text: "同一份資料「**需要重複貼上到很多地方**」，還有營運款項、廠商資料要管；每組新人要一起協作的環節越來越多，現有工具撐不住。" },
				now: { title: "一組新人，一個地方", text: "從諮詢到婚禮當天，資料只填一次，一路接到現場；**每個專案內容一目瞭然**。" },
			},
			// 11/27 卡片正面改照參考版型：原本／粗體結論／AI 可延伸／標籤（流程梳理見 100_Todo/doing/2026-11-16_產品_作品集規劃.md 三、D）
			before: "諮詢、報價、籌備資料散在 Sheet 和 Doc，同一份資料「需要重複貼上到很多地方」。",
			headline: "從諮詢到婚禮當天，新人資料只填一次，一路接到現場要印出來的那張紙。",
			// 這案沒有導入 AI，只能寫「可延伸」，不能寫成已導入
			ai: { title: "洽談完自動整理報價重點", text: "從洽談紀錄抓出新人需求，帶進報價單草稿。" },
			tags: ["洽談紀錄", "報價系統", "新人協作頁", "廠商管理"],
			// 跳窗的流程圖：一組新人走過的六個階段，上排新人看到的、下排團隊內部；joint＝對應下方「怎麼串起來」的編號
			flow: [
				{ stage: "諮詢", front: "諮詢表", back: "洽談紀錄", joint: 1 },
				{ stage: "報價簽約", front: "報價單", back: "報價單管理", joint: 2 },
				{ stage: "開案", front: "新人協作頁", back: "內部客戶專案管理", joint: 3 },
				{ stage: "籌備", front: "任務時程＋確認清單", back: "廠商、會議紀錄、營運帳務", joint: 4 },
				{ stage: "婚禮當天", front: "流程、桌次直接列印", back: "" },
				{ stage: "結案後", front: "照片紀錄（連結雲端）", back: "" },
			],
			// 帳款：新人帳款（要簽收）和內部營運帳完全分開，不要寫成同步
			joints: [
				{ title: "諮詢表 → 洽談紀錄", text: "新人填完諮詢表，資料直接接進洽談紀錄，開會前就準備好要確認的問題。" },
				{ title: "洽談紀錄 → 報價單", text: "洽談完直接到報價系統，用模板產出制式報價單，不用每次從頭做。" },
				{ title: "簽約 → 一鍵開案", text: "一個按鈕同時建好內部專案和新人協作頁，任務時程與整套確認清單一起帶出來。" },
				{ title: "內部資料 → 新人頁面", text: "廠商資料平常在內部管理，要推薦給新人時直接挑出來分享，不用另外整理一份。" },
			],
			modules: ["諮詢表單", "洽談紀錄", "報價系統", "專案看板", "新人協作頁", "廠商資料庫", "會議紀錄", "新人帳款簽收", "內部營運帳務"],
			// 摘自評價區婚顧那則
			quote: "對我們來說，最有感的是每次開完會後，都會對整體調整的方向更加明確，也更有信心知道正在朝著正確的方向前進。",
		},
		{
			// 11/27 取代獵頭、影視：用 Fenny 自己的一人公司示範 AI Agent × Notion 串接（唯一真的導入 AI 的案例）
			// 主軸：Notion 記錄管理專案、分享給客戶；AI Agent 串起流程，負責提醒、整理、照框架產出制式內容；人最後做決策與審核
			// 工具名只寫大家熟的（Notion、Cal.com）；Claude 一律寫「AI Agent」；截圖一律用假資料
			industry: "一人公司",
			name: "一人公司接案事業管理",
			title: "一人公司接案事業管理：AI Agent 串起從預約、會前準備到報價的流程",
			problem:
				"同時要跟好幾位潛在客戶諮詢、報價，手上還有好幾個進行中的專案。每場諮詢前都要整理對方資料、準備問題和簡報，諮詢完再從頭寫報價單；事情一多，進度只能記在腦中，也容易漏掉該跟進的事。",
			solution: {
				intro:
					"先把客戶、諮詢、報價和專案都放進 Notion 記錄管理，需要客戶看的頁面直接分享出去；再讓 AI Agent 串起中間每一段，負責提醒、整理資料、照固定框架產出制式內容，人最後回來做決策與審核。",
				points: [
					"客戶在 Cal.com 預約後，AI Agent 自動建好諮詢文件與空白報價單",
					"照客戶填的需求，產出這場的問題清單與會議簡報",
					"會後整理會議記錄、研究客戶的網站與社群，產出需求清單和附報價依據的初版報價單，由人決定價格與方案",
					"專案進行中，文件、報告直接分享 Notion 頁面和客戶一起協作",
					"每天的日報、每週的週報，自動整理各專案進度",
				],
			},
			outcomes: [
				"開會前資料、問題清單、簡報都備好，不用每場從頭整理",
				"報價單照固定框架產出，加上針對這位客戶的研究，看起來更專業",
				"好幾個專案同時進行，打開日報就知道今天先做什麼",
				"AI Agent 負責整理與產出，人把時間留給判斷和客戶",
			],
			more: [] as string[],
			images: 0,
			thumb: "solo", // 卡片縮圖＝封面：src/components/sections/thumbs/SoloCover.astro
			// 封面圖、四張前後對照圖還沒做（key 對到 CaseDetail.astro 的 shotParts，沒對到就只顯示文字）
			shots: [
				{ key: "self-booking", title: "從預約到報價：AI 先整理，人負責審核與決策", text: "以前要自己到各個平台檢查 Email、確認行事曆，準備訪談問題、查客戶資訊、做簡報，報價還要從頭想怎麼寫、該報多少，零碎時間加起來**要 2–3 小時**；現在 AI Agent 掃描 Email、在 Notion 建好文件、寫進每日日報提醒，產出訪談問題、簡報框架和附上報價原因的初版報價單，人只要**審核與決策，約 15–30 分鐘**。", conclusion: "每次的修正和新做法都**記回 AI**，下一次直接照新版本" },
				{ key: "self-prep", title: "問題清單和簡報，照框架先備好", text: "以前開會前才臨時翻資料想問題；現在 AI Agent 照客戶填的團隊類型與需求，**照固定框架產出問題清單與會議簡報**，開會前看過、調整就好。", conclusion: "每場諮詢都有**同樣水準的準備**" },
				{ key: "self-quote", title: "報價單：AI 先研究，人來決定", text: "以前每次報價都從頭寫；現在會後 AI Agent 整理會議記錄、研究客戶的網站與社群，**整理成需求清單**、對照客戶說過的話，再產出**每項附報價依據**的初版報價單，價格和方案由人決定，再由 AI Agent **產出 PDF 報價單**寄給客戶。", conclusion: "AI 負責整理，**判斷留給人**" },
				{ key: "self-tracking", title: "好幾個專案，一頁看完今天和這週", text: "以前各專案進度靠記憶，文件也一份份寄來寄去；現在需要文件、報告或協作時，直接**分享 Notion 頁面**和客戶一起改；每天早上 AI Agent 整理**行程、待辦和各專案現況**，每週回顧進度與決策、列出下週重點，提醒還有什麼沒收尾。", conclusion: "專案一多，也**不會漏掉該跟進的事**" },
			],
			subtitle: "Notion 記錄管理專案、分享給客戶，AI Agent 串起整段流程，人最後做決策與審核",
			detailTag: { text: "AI Agent × Notion 導入", icon: "/cases/notion.svg" },
			cardTag: { text: "AI Agent × Notion 工作流程導入", icon: "/cases/notion.svg" },
			cardOutcomes: ["客戶一預約，諮詢文件和報價單自動建好", "問題清單、簡報照框架產出，人只做審核", "每天、每週自動整理各專案進度"],
			pastNow: {
				past: { title: "資料散在 Email、行事曆和腦中", text: "預約、諮詢準備、報價各做各的，每多一位客戶，就多一份**要自己記住的事**。" },
				now: { title: "Notion 管專案，AI Agent 接起流程", text: "資料都記在 Notion、需要時分享給客戶；AI Agent 負責**提醒、整理、照框架產出制式內容**，人最後回來**做決策與審核**。" },
			},
			before: "預約在 Email、時間在行事曆，問題清單、簡報、報價單每次都從頭做。",
			headline: "客戶一預約，AI Agent 就建好文件、備好問題清單與簡報，會後整理報價，人只做決策與審核。",
			// 這案是真的導入 AI（不是「可延伸」）
			ai: { title: "已導入：提醒、整理、照框架產出", text: "預約建文件、會前問題清單與簡報、需求清單與初版報價單、日報週報，都由 AI Agent 先做，人審核。" },
			tags: ["預約串接", "會前準備", "報價系統", "日報週報"],
			flow: [
				{ stage: "預約", front: "Cal.com 預約頁", back: "客戶資料、諮詢文件", joint: 1 },
				{ stage: "會前準備", front: "會議簡報", back: "問題清單", joint: 2 },
				{ stage: "諮詢", front: "線上會議", back: "諮詢紀錄" },
				{ stage: "報價", front: "PDF 報價單", back: "報價紀錄、價格調整紀錄", joint: 3 },
				{ stage: "專案進行", front: "共用的 Notion 文件、報告頁", back: "日報、週報", joint: 4 },
			],
			joints: [
				{ title: "預約 → 諮詢文件", text: "客戶預約後，AI Agent 自動在 Notion 建好諮詢文件和空白報價單。" },
				{ title: "諮詢文件 → 問題清單與簡報", text: "照客戶填的需求，照框架產出這場要問的問題與會議簡報。" },
				{ title: "諮詢 → 報價單", text: "整理需求清單、附上報價依據；價格和方案由人決定，再產出 PDF 寄出。" },
				{ title: "各專案 → 日報、週報", text: "需要文件、報告或協作時分享 Notion 頁面給客戶；每天、每週自動整理各專案進度，提醒該跟進的事。" },
			],
			modules: ["預約串接", "客戶資料庫", "諮詢文件", "問題清單", "會議簡報", "報價系統", "價格調整紀錄", "客戶共用頁", "日報", "週報"],
		},
	] as CaseItem[],
};

export type CaseItem = {
	featured?: boolean;
	draft?: boolean;
	industry: string;
	name: string;
	title: string;
	problem: string;
	solution: { intro: string; points: string[] };
	outcomes: string[];
	more: string[];
	images: number;
	before: string; // 卡片「原本」
	headline: string; // 卡片粗體結論
	ai: { title: string; text: string }; // 「AI 可延伸」：還沒導入、可以接上的
	tags: string[];
	thumb?: string; // 卡片縮圖元件代號，對到 Cases.astro 的 thumbs
	shots?: { key: string; title: string; text: string; conclusion?: string }[]; // 內頁的前後對照圖＋說明＋圖下結論句
	subtitle?: string; // 內頁大標下的副標
	detailTag?: { text: string; icon?: string }; // 內頁最上面的膠囊
	cardTag?: { text: string; icon?: string }; // 卡片正面的導入膠囊
	cardOutcomes?: string[]; // 卡片上的成果簡短版
	pastNow?: { past: { title: string; text: string }; now: { title: string; text: string } }; // 內頁「過去 v.s. 現在」
	flow?: { stage: string; front: string; back: string; joint?: number }[];
	joints?: { title: string; text: string }[];
	modules?: string[];
	quote?: string;
};

// 客戶對我的評價（11/24 新增區塊，放在「下一步」上面）
// 只放真的評價，不放佔位假名（Tania、小嵐、小安那種）；還沒有之前，畫面顯示待補框
export const testimonials = {
	title: "客戶對我的評價",
	// 順序＝版面位置：第 1 則左邊大卡、第 2 則右上、第 3 則右下（11/25 Fenny：一人創業放右下）。quote 是段落陣列；原文照登，只補中英數之間的空格。who 寫工作型態
	items: [
		{
			quote: [
				"在每一次的會議中，Fenny 都能很有條理地帶領我們梳理目前的狀況，不只是協助釐清問題，更會從品牌與使用者體驗的角度，說明每個規劃背後的設計邏輯與思考方向。",
				"過程中不會讓人感到資訊過載或混亂，而是能一步一步理解每個決策的原因，也更知道接下來該如何推進。",
				"對我們來說，最有感的是每次開完會後，都會對整體調整的方向更加明確，也更有信心知道正在朝著正確的方向前進。",
				"這種兼具專業度、邏輯性與溝通能力的引導方式，真的讓人感到非常安心。",
			],
			who: "婚禮顧問團隊",
		},
		{
			quote: [
				"Fenny 首先會很詳細的理解我工作流釐清我的期待以及相關喜好習慣等 理解我的需求後進行客製！ 重點！還客製化了 2 個版本讓我去挑選 完全解決我多項專案管理的系統問題。",
			],
			who: "行銷接案",
		},
		{
			quote: ["很喜歡！完全不一樣的切入角度～～～", "當下真的有種哇原來可以這樣用，好厲害！"],
			who: "一人創業工作者",
		},
	] as { quote: string[]; who: string }[],
	placeholders: 3,
};

// ⑦ 下一步：第 8 塊
export const contact = {
	title: "讓我們來聊聊如何幫助到你的團隊",
	// 11/24 照 Fenny 給的參考版型：標題 → 色帶（左「下一步」、右三步驟）→ 預約；文字用自己的話寫
	stepsLabel: "下一步",
	steps: [
		{ name: "Step 1", text: "跟我預約線上會議，讓我用一小時的時間了解你的需求" },
		{ name: "Step 2", text: "根據訪談結果，整理出診斷方向，並提供報價與方案" },
		{ name: "Step 3", text: "確認方案後簽約，開始合作" },
	],
	ctaLabel: "",
	button: "立即預約諮詢",
	draft: true,
};

export const footer = {
	copyright: "© 2026 Fenny",
	links: [] as { label: string; href: string }[], // TODO: Email／Threads 等 Fenny 確認要放哪些
};
