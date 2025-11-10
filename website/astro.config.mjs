// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import expressiveCode from 'astro-expressive-code';
import { remarkBasePath } from './src/plugins/remark-base-path.mjs';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { h } from 'hastscript';

// https://astro.build/config
export default defineConfig({
	site: 'https://doeixd.github.io',
	base: process.env.NODE_ENV === 'production' ? '/CSS-Tags/' : '/',
	build: {
		inlineStylesheets: 'always',
		assets: '_astro'
	},
	vite: {
		build: {
			cssCodeSplit: true,
			rollupOptions: {
				output: {
					manualChunks: {
						'vendor': ['astro'],
					},
					assetFileNames: '_astro/[name].[hash][extname]',
					chunkFileNames: '_astro/[name].[hash].js',
					entryFileNames: '_astro/[name].[hash].js',
				}
			}
		}
	},
	prefetch: {
	prefetchAll: true,
	defaultStrategy: 'viewport',
	},
	experimental: {
		clientPrerender: true,
	},
	markdown: {
		remarkPlugins: [
			// @ts-ignore
			[remarkBasePath, { base: process.env.NODE_ENV === 'production' ? '/CSS-Tags' : '' }],
		],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'append',
					properties: {
						className: ['heading-anchor__link'],
						ariaLabel: 'Link to section',
						tabIndex: -1,
					},
					content: () => [
					h('svg', {
					width: 16,
					height: 16,
					viewBox: '0 0 24 24',
					fill: 'none',
					xmlns: 'http://www.w3.org/2000/svg',
					'aria-hidden': 'true',
					}, [
					h('path', {
					d: 'M10 13.229C10.1416 13.4609 10.3097 13.6804 10.5042 13.8828C11.7117 15.1395 13.5522 15.336 14.9576 14.4722C15.218 14.3121 15.4634 14.1157 15.6872 13.8828L18.9266 10.5114C20.3578 9.02184 20.3578 6.60676 18.9266 5.11718C17.4953 3.6276 15.1748 3.62761 13.7435 5.11718L13.03 5.85978',
					stroke: 'currentColor',
					'stroke-width': '1.5',
					'stroke-linecap': 'round',
					}),
					h('path', {
					d: 'M10.9703 18.14L10.2565 18.8828C8.82526 20.3724 6.50471 20.3724 5.07345 18.8828C3.64218 17.3932 3.64218 14.9782 5.07345 13.4886L8.31287 10.1172C9.74413 8.62761 12.0647 8.6276 13.4959 10.1172C13.6904 10.3195 13.8584 10.539 14 10.7708',
					stroke: 'currentColor',
					'stroke-width': '1.5',
					'stroke-linecap': 'round',
					}),
					]),
					],
				},
			],
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
