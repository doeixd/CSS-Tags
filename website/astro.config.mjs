// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
	site: 'https://doeixd.github.io',
	base: '/CSS-Tags/',
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
