// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages：fennylai-design.github.io/portfolio
  // 之後換自己的網域時：site 改成網域、拿掉 base
  site: 'https://fennylai-design.github.io',
  base: '/portfolio',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()]
  }
});
