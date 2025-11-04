import { visit } from 'unist-util-visit';

/**
 * Remark plugin to prepend base path to internal links and images in markdown
 * @param {string} base - The base path to prepend (e.g., '/CSS-Tags')
 * @returns {Function} Transformer function for remark
 */
export function remarkBasePath(base) {
  // Normalize base to ensure no trailing slash
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;

  return function transformer(tree) {
    visit(tree, ['link', 'image'], (node) => {
      const url = node.url;

      // Only transform internal absolute paths (starting with /)
      // Skip:
      // - External URLs (http://, https://)
      // - Protocol-relative URLs (//)
      // - Anchor links (#)
      // - Already prefixed URLs
      if (
        url &&
        url.startsWith('/') &&
        !url.startsWith('//') &&
        !url.startsWith(normalizedBase + '/')
      ) {
        node.url = normalizedBase + url;
      }
    });
  };
}
