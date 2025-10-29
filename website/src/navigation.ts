export interface NavItem {
	label: string;
	slug?: string;
	collapsed?: boolean;
	items?: NavItem[];
}

export const navigation: NavItem[] = [
	{
		label: 'Start Here',
		items: [
			{ label: 'Home', slug: '' },
			{ label: 'Introduction', slug: 'guides/introduction' },
			{ label: 'Getting Started', slug: 'guides/getting-started' },
			{ label: 'Philosophy', slug: 'guides/philosophy' },
		],
	},
		{
			label: 'Guides',
			items: [
				{ label: 'Color System', slug: 'guides/color-system' },
				{ label: 'Theming', slug: 'guides/theming' },
				{ label: 'Library Review', slug: 'review' },
				{ label: 'Issues', slug: 'issues' },
			],
		},
	{
		label: 'Components',
		items: [
			{ label: 'Alert', slug: 'components/alert' },
			{ label: 'Badge', slug: 'components/badge' },
			{ label: 'Box', slug: 'components/box' },
			{ label: 'Box Extra', slug: 'components/box-extra' },
			{ label: 'Card', slug: 'components/card' },
			{ label: 'Carousel', slug: 'components/carousel' },
			{ label: 'Carousel JS', slug: 'js/carousel' },
			{ label: 'Chip', slug: 'components/chip' },
			{ label: 'Container', slug: 'components/container' },
			{ label: 'Flex', slug: 'components/flex' },
			{ label: 'Form', slug: 'components/form' },
			{ label: 'Grid', slug: 'components/grid' },
			{ label: 'Image Container', slug: 'components/img-container' },
			{ label: 'List', slug: 'components/list' },
			{ label: 'Masonry', slug: 'components/masonry' },
			{ label: 'Modal', slug: 'components/modal' },
			{ label: 'Navigation', slug: 'components/navigation' },
			{ label: 'Popover', slug: 'components/popover' },
			{ label: 'Table', slug: 'components/table' },
			{ label: 'Tooltip', slug: 'components/tooltip' },
			{ label: 'Tooltips', slug: 'components/tooltips' },
			{ label: 'View Transition', slug: 'components/view-transition' },
			{ label: 'View Transition JS', slug: 'js/view-transition' },
		],
	},
	{
		label: 'Layouts',
		items: [
			{ label: 'Layout', slug: 'layouts/layout' },
			{ label: 'Layout Extra', slug: 'layouts/layout-extra' },
			{ label: 'Layout Extras Helpers', slug: 'layouts/layout-extras-helpers' },
		],
	},
	{
		label: 'Core System',
		items: [
			{ label: 'Base', slug: 'core/base' },
			{ label: 'Defaults', slug: 'core/defaults' },
			{ label: 'Engine', slug: 'core/engine' },
			{ label: 'Mixins', slug: 'core/mixins' },
			{ label: 'Palette', slug: 'core/palette' },
			{ label: 'Reset', slug: 'core/reset' },
			{ label: 'Text', slug: 'core/text' },
			{ label: 'Theme', slug: 'core/theme' },
			{ label: 'Index CSS', slug: 'reference/index-css' },
		],
	},
	{
		label: 'Utilities',
		collapsed: true,
		items: [
			{ label: 'Overview', slug: 'utilities/utilities' },
		],
	},
	{
		label: 'Themes',
		collapsed: true,
		items: [
			{ label: 'Example Brand', slug: 'themes/example-brand' },
			{ label: 'Theme Packs', slug: 'themes/theme-packs' },
		],
	},
	{
		label: 'Examples',
		collapsed: true,
		items: [
			{ label: 'Overview', slug: 'examples/examples' },
		],
	},
	{
		label: 'API Reference',
		collapsed: true,
		items: [
			{ label: 'Overview', slug: 'reference/api' },
		],
	},
];
