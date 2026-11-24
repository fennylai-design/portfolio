// 把 public/ 裡的檔案路徑（例如 "/logo.png"）加上網站子路徑（GitHub Pages 是 /portfolio）
export function asset(path: string): string {
	if (!path.startsWith("/")) return path;
	return import.meta.env.BASE_URL.replace(/\/$/, "") + path;
}
