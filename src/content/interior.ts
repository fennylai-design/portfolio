// 室內設計版作品集：全頁文案
// 來源：100_Todo/doing/2026-11-16_產品_作品集規劃.md（文案在那邊定，再搬過來）
// draft: true = 還是草稿、等 Fenny 確認（清單見 docs/roadmap.md v2）

export const bookingUrl = "#contact"; // TODO: 換成真的 Cal.com 連結

export const site = {
	title: "Fenny｜室內設計公司的案場管理與業主體驗設計",
	description:
		"讓每個案場進度都看得見，你不用再被追著問，業主也更放心。",
	name: "Fenny",
};

export const nav = [
	{ label: "關於我", href: "#about" },
	{ label: "服務", href: "#services" },
	{ label: "流程", href: "#process" },
	{ label: "案例", href: "#cases" },
];

// ① 首屏：第 1 塊＋第 2 塊
export const hero = {
	eyebrow: "給室內設計公司的數位工作流程",
	title: "讓每個案場進度都看得見，你不用再被追著問，業主也更放心。",
	statement:
		"我跟室內設計公司合作，打造一套從接洽、設計、施工到驗收的客製化數位工作流程，讓客戶確認、工班資料、工程進度與款項不再散在 LINE 與各種檔案裡，業主也看得到進度。你能同時掌握多個案場，不被追著問進度，業主也放心。",
	primary: "預約 60 分鐘訪談",
	secondary: "看服務內容",
	draft: true,
};

// ② 關於我：第 3 塊
export const about = {
	title: "關於我",
	name: "Fenny",
	highlight:
		"9 年 UI/UX（介面與使用體驗）設計經驗，我的工作是當人和系統之間的橋樑：先聽懂老闆、團隊、客戶各自要什麼，再變成一套大家都覺得好用的系統。",
	tags: [
		{
			label: "工作價值觀",
			text: "先弄清楚你要解決什麼，再決定用什麼工具；做得剛好，比做得多重要。",
			draft: true,
		},
		{
			label: "個人特質",
			text: "朋友說我很「清透」：聽得懂你的難處，也能把問題拆清楚。",
			draft: true,
		},
		{
			label: "擅長技能",
			text: "網頁與介面設計、系統規劃、AI 工具自動化、Notion",
		},
		{
			label: "服務過的產業",
			text: "人資系統產品（薪酬、出勤）；接案服務過房仲、電信、壽險、銀行、專案管理等產業；近期客製案：婚顧、行銷、影視",
		},
	],
	photoPlaceholder: "照片",
	logoPlaceholder: "合作客戶 Logo",
};

// ③ 合作的好處：第 4 塊
export const benefit = {
	title: "你需要的不只是一張進度表、一個 AI 製作的儀表板",
	rows: [
		{
			label: "現況",
			text: "案場資料散在 LINE 與各種檔案裡，業主三天兩頭問進度，追加減怎麼算也對不上。",
		},
		{
			label: "你需要的是",
			text: "一套團隊和業主都看得懂的案場管理。",
		},
		{
			label: "讓你能",
			text: "同時管多個案場也能有條有理，業主覺得你們專業又安心。",
		},
	],
	draft: true,
};

// ④ 服務方案：第 5 塊
export const services = {
	title: "服務方案",
	items: [
		{
			name: "專案營運診斷",
			sub: "AI 與流程診斷",
			does: "盤點你們從接洽到驗收的做法、資料放在哪、誰在追什麼；找出追進度、對帳、回業主最花時間的環節；評估哪些可以標準化、哪些可以用 AI 與自動化改善。",
			gets: "診斷報告（問題清單與優先順序）、改善藍圖建議與規劃",
		},
		{
			name: "專案系統設計與 AI 流程建置",
			sub: "後台＋前台",
			does: "後台：案場進度與成本管理、廠商與工班資料集中、重複的事自動化。前台：業主專屬進度頁、報價／追加減／請款透明、確認與驗收流程、接洽表單與結案報告、轉介續約。",
			gets: "一套能運作的系統與操作畫面",
		},
		{
			name: "導入與培訓",
			sub: "讓團隊用得起來",
			does: "線上教育訓練（可錄影）、操作手冊，團隊實際試用一段時間並調整。",
			gets: "團隊會用、願意用的系統",
		},
	],
};

// ⑤ 接案流程：第 6 塊
export const process = {
	title: "合作流程",
	steps: [
		{ name: "60 分鐘訪談", text: "聊你們現在案子怎麼跑" },
		{ name: "現況診斷與提案", text: "整理哪裡最花時間，提出方向與報價" },
		{ name: "設計與建置", text: "案場管理，加上業主看到的畫面" },
		{ name: "試用與調整", text: "團隊實際用一段時間，期間討論調整 1–2 輪" },
		{ name: "教學與交付", text: "教育訓練、操作手冊、後續支援" },
	],
};

// ⑥ 案例：第 7 塊（內容最後補，先放草稿）
export const cases = {
	title: "精選案例",
	items: [
		{
			featured: true,
			industry: "婚禮顧問",
			title: "小型婚禮顧問團隊：前台＋後台專案管理",
			result: "專案資料集中，團隊和客戶各自要交的東西更好追蹤",
			problem: "檔案四散、資料重複貼上，還要和客戶來回協作。",
			solution:
				"整體架構規劃、首頁專案看板、廠商資料集中，加上給客戶填寫的內容頁與中英文檔案。",
			outcome: "專案資料集中；新案子能快速建好基本版面；雙方各自要交的東西更好追蹤。",
			draft: true,
		},
		{
			industry: "人力資源",
			title: "招募管理平台：三方整合",
			result: "人選、企業客戶、公司內部各有適合自己的介面",
			problem: "人選、企業客戶、內部招募團隊三方的資訊與進度要串在一起。",
			solution:
				"人選：形象網站與職缺投遞；企業客戶：進度追蹤與回饋面試結果；公司內部：管理履歷、招募專案，為客戶篩選並給出人選建議。",
			outcome: "待補",
			draft: true,
		},
		{
			industry: "影視製作",
			title: "影視接案：依專案類型一鍵建好排程",
			result: "新專案不用再手動建任務，不再漏截止日",
			problem: "每個新專案都要手動建一次任務，排程一多就容易漏。",
			solution: "依專案類型一鍵生成固定階段與任務。",
			outcome: "新專案快速建好，不再漏截止日。",
			draft: true,
		},
	],
	// 有真的評價再填，空陣列就不顯示評價區
	testimonials: [] as { quote: string; who: string }[],
};

// ⑦ 下一步：第 8 塊
export const contact = {
	title: "先聊 60 分鐘，看看你們的案子怎麼跑",
	intro: "不用準備資料，照你們平常的做法聊就好。我會想了解：",
	points: [
		"一個案子從接洽到驗收，現在怎麼跑",
		"資料放在哪、誰在追什麼",
		"哪個環節最花時間、最常被業主追問",
	],
	button: "預約 60 分鐘訪談",
	draft: true,
};

export const footer = {
	copyright: "© 2026 Fenny",
	links: [] as { label: string; href: string }[], // TODO: Email／Threads 等 Fenny 確認要放哪些
};
