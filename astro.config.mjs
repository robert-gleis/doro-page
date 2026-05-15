// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	base: '/doro-page/',
	site: 'https://robert-gleis.github.io',
	integrations: [
		sitemap({
			changefreq: 'monthly',
			priority: 0.7,
			lastmod: new Date(),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
