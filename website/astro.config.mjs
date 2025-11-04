// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import expressiveCode from 'astro-expressive-code';
import { remarkBasePath } from './src/plugins/remark-base-path.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://doeixd.github.io',
	base: process.env.NODE_ENV === 'production' ? '/CSS-Tags/' : '/',
	markdown: {
		remarkPlugins: [
			[remarkBasePath, process.env.NODE_ENV === 'production' ? '/CSS-Tags' : ''],
		],
	},
	integrations: [
		expressiveCode({
			themes: ['min-light', 'min-dark'],
			themeCssSelector: (theme) => {
				// Use data-theme attribute for manual toggle
				// This will be set by JavaScript when user clicks the theme toggle
				return `[data-theme="${theme.type}"]`;
			},
			useThemedScrollbars: false,
			styleOverrides: {
				borderRadius: '6px',
				borderWidth: '1px',
				borderColor: 'var(--border-color)',
				frames: {
					shadowColor: 'transparent',
				},
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

});
