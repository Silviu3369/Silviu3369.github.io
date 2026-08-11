// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://ghimpau.eu',
	output: 'static',
	trailingSlash: 'always',
	redirects: {
		'/about': '/',
	},
});
