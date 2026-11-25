// 首屏四角光暈設定（11/25）
// 調整方式：開 http://localhost:4330/portfolio/lab/hero-glows/ 拖曳、拉滑桿，按「複製設定」後貼回這裡（或貼給 Claude）
// x、y：光暈「中心點」在首屏的位置，百分比（0＝最左／最上，100＝最右／最下，可以小於 0 或大於 100 讓它只露出一角）
// size：直徑 px；opacity：0–1；tone：pink 粉、sky 藍
export type HeroGlow = { tone: "pink" | "sky"; x: number; y: number; size: number; opacity: number };

export const heroGlows: HeroGlow[] = [
	{ tone: "pink", x: 48.2, y: 31.9, size: 580, opacity: 0.15 },
	{ tone: "pink", x: 18.3, y: 67.1, size: 560, opacity: 0.25 },
	{ tone: "sky", x: 76.2, y: 60.9, size: 530, opacity: 0.25 },
];
