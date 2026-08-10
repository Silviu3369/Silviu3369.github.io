// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://silviu3369.github.io',
	output: 'static',
	trailingSlash: 'never',
	redirects: {
		'/about': '/',
	},
});
