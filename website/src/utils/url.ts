/**
 * Normalizes the base URL by removing trailing slashes
 * Returns empty string if base is just '/'
 */
export function normalizeBase(baseUrl: string): string {
	// If base is just '/', return empty string
	if (baseUrl === '/') {
		return '';
	}
	return baseUrl.replace(/\/$/, '');
}

/**
 * Constructs a properly formatted href with base URL
 * @param base - The normalized base URL (empty string for root)
 * @param slug - The page slug (without leading slash)
 * @returns A properly formatted href path
 */
export function buildHref(base: string, slug?: string): string {
	if (!slug) {
		return base || '/';
	}
	// When base is empty (root path), just use /slug/
	// When base has value, use base/slug/
	return base ? `${base}/${slug}/` : `/${slug}/`;
}

/**
 * Constructs a href for an asset (no trailing slash)
 * @param base - The normalized base URL (empty string for root)
 * @param assetPath - The asset path (e.g., 'favicon.svg')
 * @returns A properly formatted asset path
 */
export function buildAssetPath(base: string, assetPath: string): string {
	// When base is empty (root path), just use /assetPath
	// When base has value, use base/assetPath
	return base ? `${base}/${assetPath}` : `/${assetPath}`;
}
