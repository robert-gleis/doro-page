// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	base: '/doro-page/',
	site: 'https://robert-gleis.github.io',
	vite: {
		plugins: [tailwindcss()],
	},
});
