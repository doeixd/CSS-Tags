/**
 * I18N STRINGS
 *
 * Centralized string constants for internationalization.
 * To add a new language, create a new constant object with translated strings.
 *
 * Usage:
 * import { STRINGS } from '../i18n/strings';
 * const label = STRINGS.navigation.home;
 */

export const STRINGS = {
	// Navigation & Menu
	navigation: {
		home: "Home",
		toggleMenu: "Toggle navigation menu",
		openMenu: "Open menu",
		closeMenu: "Close menu",
		breadcrumb: "Breadcrumb",
	},

	// Table of Contents
	toc: {
		title: "On This Page",
		label: "Table of contents",
		close: "Close table of contents",
		empty: "No headings on this page",
	},

	// Search
	search: {
		title: "Search",
		label: "Search",
		placeholder: "Search documentation...",
		close: "Close search",
		noResults: "No results found",
		searching: "Searching...",
	},

	// Scroll Controls
	scroll: {
		toTop: "Scroll to top",
		progress: "Reading progress",
	},

	// Theme Toggle
	theme: {
		toggle: "Toggle theme",
		light: "Switch to light mode",
		dark: "Switch to dark mode",
		system: "Use system preference",
	},

	// Loading
	loading: {
		message: "Loading...",
		error: "Failed to load content",
	},

	// Accessibility
	a11y: {
		skipToContent: "Skip to content",
		currentPage: "Current page",
		externalLink: "Opens in new window",
		expandSection: "Expand section",
		collapseSection: "Collapse section",
	},

	// Common Actions
	actions: {
		close: "Close",
		open: "Open",
		back: "Back",
		next: "Next",
		previous: "Previous",
		submit: "Submit",
		cancel: "Cancel",
	},

	// Error Messages
	errors: {
		generic: "An error occurred",
		notFound: "Page not found",
		offline: "You appear to be offline",
		noScript: "JavaScript is required for this feature",
	},
} as const;

// Type for accessing strings
export type StringsType = typeof STRINGS;

// Helper function to get nested string value
export function getString(path: string): string {
	const keys = path.split(".");
	let value: any = STRINGS;

	for (const key of keys) {
		if (value && typeof value === "object" && key in value) {
			value = value[key];
		} else {
			console.warn(`String not found for path: ${path}`);
			return path;
		}
	}

	return typeof value === "string" ? value : path;
}
