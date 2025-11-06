/**
 * Site Configuration
 *
 * Configure global settings for the documentation site
 */

export const config = {
  /**
   * Heading Anchor Configuration
   *
   * Controls the clickable anchor links on headings
   */
  headingAnchors: {
    /**
     * Enable/disable heading anchors globally
     */
    enabled: true,

    /**
     * Which heading levels to add anchors to
     * Example: [2, 3] will add anchors to h2 and h3 only
     */
    levels: [2, 3, 4, 5, 6],

    /**
     * Position of the anchor icon
     */
    iconPosition: 'right' as 'left' | 'right',

    /**
     * Show icon only on hover or always
     */
    showOnHover: true,

    /**
     * Custom icon SVG (optional)
     * If not provided, uses default link icon
     */
    icon: undefined as string | undefined,
  },

  /**
   * Site Metadata
   */
  site: {
    title: 'CSS Tags Documentation',
    description: 'Style HTML directly with modern CSS. No classes, no frameworks—just semantic markup that looks great.',
    url: 'https://yourdomain.com',
  },

  /**
   * GitHub Repository
   */
  github: {
    url: 'https://github.com/doeixd/CSS-Tags',
    editBase: 'https://github.com/doeixd/CSS-Tags/edit/main/website',
  },
} as const;

export default config;
