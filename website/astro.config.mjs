// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
	site: 'https://doeixd.github.io',
	base: '/CSS-Tags',
	integrations: [
		expressiveCode({
			themes: ['min-light', 'min-dark'],
			styleOverrides: {
				borderRadius: '6px',
				borderWidth: '1px',
			},
			defaultProps: {
				wrap: true,
				preserveIndent: true,
			},
		}),
		mdx(),
		sitemap(),
		pagefind(),
	],
	experimental: {
		clientPrerender: true,
	},
});
