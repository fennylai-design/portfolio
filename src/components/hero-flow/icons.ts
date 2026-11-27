// 首屏流程圖用的線條圖示（stroke 跟著文字顏色）與 AI 工具 logo
import { asset } from "../../lib/asset";

const paths = {
	doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h4"/>',
	receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
	check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
	chat: '<path d="M4 5.5h16v10.5H10l-6 4z"/><path d="M8.5 10.5h7"/>',
	plus: '<path d="M12 5v14M5 12h14"/>',
	bell: '<path d="M6 16V11a6 6 0 1112 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 004 0"/>',
	grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
	user: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1-3.5 3.8-5.5 7-5.5s6 2 7 5.5"/>',
	loop: '<path d="M20 12a8 8 0 11-2.3-5.7"/><path d="M20 4v4.5h-4.5"/>',
	// 11/27 案例圖用：愛心（婚禮當天）、錢包（請款）、資料夾（雲端）
	heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"/>',
	wallet: '<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M16 14.5h2"/>',
	folder: '<path d="M3 6.5h6l2 2.5h10v10H3z"/>',
	camera: '<rect x="3" y="7" width="18" height="13" rx="3"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8.5 7l1.5-3h4l1.5 3"/>',
};
export type IconName = keyof typeof paths;

export const svg = (name: IconName, size = 18) =>
	`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;

// AI 工具 logo（來源 @lobehub/icons-static-svg 1.106.0），檔案在 public/hero-flow/
export const logos = {
	claude: asset("/hero-flow/claude.svg"),
	codex: asset("/hero-flow/codex.svg"),
};
