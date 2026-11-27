// 一人公司案例圖共用：工具小圖示（只用代表色＋簡化圖形，不放官方 logo）、首屏同款虛線箭頭
import { asset } from "../../../lib/asset";

export type SoloTool = "mail" | "cal" | "notion" | "daily" | "web" | "slides" | "pdf" | "share" | "form" | "social";
export const notionIcon = asset("/cases/notion.svg");
// 人的頭像（Fenny 11/27 給的 3D 人像，原檔去掉淡光暈、縮成 160 高）
export const humanIcon = asset("/cases/human.png");
export const toolSvg: Record<Exclude<SoloTool, "notion">, string> = {
	mail: '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="3" fill="#ea4335"/><path d="M5.5 8l6.5 5 6.5-5" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	cal: '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="3" fill="#4285f4"/><path d="M3 9h18" stroke="#fff" stroke-width="1.6"/><rect x="7" y="12" width="3" height="3" rx=".6" fill="#fff"/></svg>',
	daily: '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2.5" fill="#f6b400"/><path d="M8 8h8M8 11.5h8M8 15h5" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/></svg>',
	web: '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#14a3a3"/><path d="M2.5 12h19M12 2.5c2.8 3 2.8 16 0 19M12 2.5c-2.8 3-2.8 16 0 19" fill="none" stroke="#fff" stroke-width="1.4"/></svg>',
	slides: '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="15" rx="2.5" fill="#f4a020"/><rect x="6" y="8" width="12" height="7" rx="1" fill="#fff"/><path d="M12 19v2.5" stroke="#f4a020" stroke-width="2"/></svg>',
	pdf: '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2.5" fill="#d93025"/><text x="12" y="15.5" text-anchor="middle" font-size="6.5" font-weight="700" fill="#fff" font-family="sans-serif">PDF</text></svg>',
	share: '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#d9358d"/><circle cx="9" cy="10" r="2.2" fill="#fff"/><circle cx="15.5" cy="10" r="2.2" fill="#fff"/><path d="M5.5 17c.8-2 2-3 3.5-3s2.7 1 3.5 3M12 17c.8-2 2-3 3.5-3s2.7 1 3.5 3" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/></svg>',
	form: '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2.5" fill="#7b61ff"/><rect x="7.5" y="7" width="9" height="2.6" rx="1" fill="#fff"/><rect x="7.5" y="12" width="9" height="2.6" rx="1" fill="#fff"/><circle cx="8.8" cy="18" r="1.2" fill="#fff"/></svg>',
	social: '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="6" fill="#221d21"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" stroke-width="1.8"/><circle cx="17.3" cy="6.7" r="1.2" fill="#fff"/></svg>',
};
export const ARROW_H = '<svg width="44" height="12" viewBox="0 0 44 12" aria-hidden="true"><circle cx="4" cy="6" r="3" class="hf-node" /><path d="M10 6H32" class="hf-line" /><path d="M33 1.5L42 6L33 10.5z" class="hf-node" /></svg>';
export const ARROW_V = '<svg width="12" height="44" viewBox="0 0 12 44" aria-hidden="true"><circle cx="6" cy="4" r="3" class="hf-node" /><path d="M6 10V32" class="hf-line" /><path d="M1.5 33L6 42L10.5 33z" class="hf-node" /></svg>';
