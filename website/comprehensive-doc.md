# Custom Astro Documentation Website: Complete Guide

This comprehensive guide covers everything you need to know about this custom-built Astro documentation site with no framework dependencies. From advanced theming and hand-coded components to deployment and features, this document provides detailed explanations, guides, and tutorials.

## Important Clarification

**This is NOT a Starlight site.** Despite the README mentioning Starlight, this website was built entirely from scratch with custom Astro components. The README appears to contain outdated information from when the project was initially created with a Starlight template, but the entire codebase has been rebuilt as a custom implementation.

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture & Structure](#architecture--structure)
- [Theming System](#theming-system)
- [Expressive Code Integration](#expressive-code-integration)
- [Adding Pages](#adding-pages)
- [Custom Components](#custom-components)
  - [Header Component (NEW)](#headerastro)
  - [Navigation & Layout](#layout-components)
  - [Interactive Components](#interactive-components)
- [Navigation & Hierarchy](#navigation--hierarchy)
- [Search Functionality](#search-functionality)
- [Table of Contents (TOC)](#table-of-contents-toc)
- [View Transitions](#view-transitions)
- [Meta Tags & SEO](#meta-tags--seo)
- [Prefetching & Performance](#prefetching--performance)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)

## Project Overview

The CSS-Tags documentation website is a modern, accessible documentation site built entirely from scratch with Astro. This is a custom implementation, not based on any documentation themes or frameworks.

- **Framework**: Astro 5.x (custom implementation)
- **Styling**: Custom CSS with OKLCH color system
- **Search**: Pagefind for full-text search
- **Content**: MDX files with frontmatter
- **Deployment**: GitHub Pages
- **Features**: Dark/light mode, view transitions, mobile-responsive

### Key Technologies

- **Astro**: Static site generator with component islands
- **Custom Components**: 31+ hand-built Astro components (including the new Header)
- **Custom Layout System**: Fully custom documentation layout
- **Expressive Code**: Syntax highlighting
- **Pagefind**: Client-side search
- **View Transitions API**: Smooth page transitions
- **OKLCH Color Space**: Perceptually uniform colors

### Recent Updates

**NEW: Header Component** - A flexible, full-width header component with:
- Logo/site title support
- Integrated search functionality
- Social/icon links (GitHub, Discord, Twitter, LinkedIn)
- Optional version and language dropdowns
- **Slot system** for custom content (desktop-only, mobile-only, or universal)
- Disabled by default for template flexibility

## Architecture & Structure

### File Structure

```
website/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── styles.css
├── src/
│   ├── assets/            # Images and media
│   ├── components/        # Astro components
│   │   ├── Header.astro
│   │   ├── Navigation.astro
│   │   ├── MobileHeader.astro
│   │   ├── Search.astro
│   │   ├── TableOfContents.astro
│   │   ├── ThemeToggle.astro
│   │   └── ... (30+ components)
│   ├── content/           # Content collections
│   │   ├── docs/          # Documentation pages
│   │   └── config.ts      # Content configuration
│   ├── layouts/           # Page layouts
│   │   └── DocsLayout.astro
│   ├── pages/             # Route handlers
│   │   ├── [...slug].astro # Dynamic routes
│   │   └── index.astro    # Homepage
│   ├── utils/             # Utility functions
│   │   └── url.ts         # URL helpers
│   ├── content.config.ts  # Content collections
│   ├── navigation.ts      # Site navigation
│   └── theme.css          # Theme variables
├── astro.config.mjs       # Astro configuration
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript config
```

### Content Management

Content is managed through Astro's content collections with a custom schema:

```typescript
// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});
```

### Custom Architecture

Unlike template-based documentation sites, this implementation features:

- **Hand-built Components**: Every component is custom-coded (31+ components)
- **Flexible Layout System**: Custom grid system for desktop/mobile
- **Advanced Navigation**: Multi-level collapsible navigation with state persistence
- **Mobile-First Design**: Custom mobile header and overlay system
- **Optional Header**: Full-width header with slot-based customization system
- **Theme System**: Sophisticated OKLCH-based theming with auto-contrast
- **Slot Architecture**: Advanced slot system for responsive component customization

### Routing

- **Dynamic Routes**: `[...slug].astro` handles all documentation pages
- **Base Path**: Configured for GitHub Pages deployment (`/CSS-Tags/`)
- **URL Helpers**: `src/utils/url.ts` provides path normalization

### Important Note

Despite the README mentioning Starlight, this is **not a Starlight site**. The README appears to be leftover from when the project was initialized with a Starlight template, but the entire codebase has been rebuilt as a custom Astro implementation with no Starlight dependencies or components.

## Theming System

The website uses an advanced, generative theming system based on OKLCH color space.

### Core Principles

1. **OKLCH Color Space**: Perceptually uniform colors
2. **Generative Palette**: Colors generated from minimal inputs
3. **Automatic Contrast**: Intelligent text color calculation
4. **Context-Aware Styling**: Colors adapt based on background

### Theme Variables

The theme is controlled by CSS custom properties in `src/theme.css`:

```css
:root {
  /* Core brand colors */
  --accent-h: 280;           /* Hue (0-360°) */
  --accent-c: 0.15;          /* Chroma (0-1) */
  --accent-l: 60%;           /* Lightness (0-100%) */

  /* Theme configuration */
  --surface-saturation: 0.015;  /* Surface chroma */
  --contrast-factor: 1.0;       /* Contrast multiplier */

  /* Color relationships */
  --secondary-hue-shift: 60;    /* Secondary hue offset */
  --tertiary-hue-shift: -90;    /* Tertiary hue offset */
}
```

### Color Architecture

#### Surface Hierarchy
```
overt > default > base > subtle > muted
```

#### Text Hierarchy
```
overt > default > subtle > muted
```

#### Accent Variations
- `--accent`: Primary brand color
- `--accent-subtle`: Lighter variant
- `--accent-muted`: Desaturated variant
- `--accent-overt`: Darker variant

### Light/Dark Mode

Automatic switching based on `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  :root:not(.light-mode) {
    --base: oklch(22% 0.02 250);  /* Dark background */
    --text-default: oklch(88% 0.008 250);  /* Light text */
  }
}
```

### Manual Theme Switching

Users can toggle themes with the `ThemeToggle` component:

- **System**: Follows OS preference
- **Light**: Forced light mode
- **Dark**: Forced dark mode

### High Contrast Mode

Enhanced accessibility for users with visual impairments:

```css
@media (prefers-contrast: high) {
  :root {
    --contrast-factor: 1.3;      /* Increased contrast */
    --focus-ring-width: 3px;     /* Thicker focus rings */
  }
}
```

### Brand Customization

Create custom themes by overriding variables:

```css
:root[data-theme="ocean"] {
  --accent-h: 200;        /* Blue theme */
  --accent-c: 0.16;
  --accent-l: 60%;
}
```

## Expressive Code Integration

### Overview

The site uses Expressive Code for syntax highlighting and code block rendering, providing a rich, customizable code experience.

### Configuration

Expressive Code is configured in `astro.config.mjs`:

```javascript
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  integrations: [
    expressiveCode({
      themes: ['min-light', 'min-dark'],
      themeCssSelector: (theme) => {
        // Use data-theme attribute for manual toggle
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
  ],
});
```

### Key Features

#### Theme Integration
- **Dual Themes**: `min-light` and `min-dark` themes
- **Dynamic Switching**: Themes change automatically with site theme
- **CSS Selector**: Uses `data-theme` attribute for theme selection

#### Styling Customization
- **Border Styling**: Custom border radius, width, and color
- **Frame Options**: Shadow and background customization
- **Default Props**: Automatic line wrapping and indentation preservation

#### Code Block Features
- **Copy Button**: Built-in copy-to-clipboard functionality
- **Line Numbers**: Optional line numbering
- **Language Detection**: Automatic syntax highlighting
- **Inline Code**: Styled inline code snippets

### Usage in Content

Code blocks in MDX files automatically use Expressive Code:

````markdown
```javascript
function example() {
  console.log("Hello, world!");
}
```
````

### Customization

Override Expressive Code variables in `theme.css`:

```css
/* Code block styling */
--code-frame-border: 1px solid var(--border-color);
--code-margin-bottom: 1lh;

/* Copy button styling */
--code-copy-button-width: 1.9rem;
--code-copy-button-bg: var(--code-background);
--code-copy-tooltip-bg: var(--bg-secondary);
```

## Adding Pages

### Content Structure

Pages are MDX files stored in `src/content/docs/` with a hierarchical folder structure.

### File Organization

```
src/content/docs/
├── index.mdx              # Homepage
├── guides/
│   ├── introduction.md
│   └── getting-started.md
├── components/
│   ├── button.md
│   └── input.md
└── api/
    └── reference.md
```

### Frontmatter Schema

Each page requires frontmatter with the defined schema:

```yaml
---
title: Page Title
description: Brief description for SEO and previews
order: 1  # Optional: controls display order in navigation
---
```

### Content Writing

Pages support full MDX syntax:

```markdown
---
title: My New Page
description: Learn about this feature
---

# Main Heading

This is regular markdown content.

## Subheading

You can use **bold**, *italic*, and `inline code`.

### Code Blocks

```javascript
function example() {
  return "Hello, world!";
}
```

### Components

You can import and use custom components:

```jsx
import CustomComponent from '../../components/CustomComponent.astro';

<CustomComponent />
```

### Images

Images go in `src/assets/` and are referenced relatively:

```markdown
![Alt text](../../assets/image.jpg)
```

### Navigation Integration

To add pages to the navigation, update `src/navigation.ts`:

```typescript
export const navigation: NavItem[] = [
  {
    label: 'Guides',
    items: [
      { label: 'Introduction', slug: 'guides/introduction' },
      { label: 'Getting Started', slug: 'guides/getting-started' },
      { label: 'My New Page', slug: 'guides/my-new-page' }, // Add new page
    ],
  },
];
```

### Page Routing

Pages automatically route based on their file path:

- `src/content/docs/guides/introduction.md` → `/guides/introduction/`
- `src/content/docs/api/reference.md` → `/api/reference/`

### Special Pages

#### Homepage
The homepage is `src/content/docs/index.mdx` (not `index.md`).

#### Dynamic Routes
All pages are handled by `src/pages/[...slug].astro` which:
- Loads content from the content collection
- Applies the DocsLayout
- Handles 404s for non-existent pages

### Content Collection

Pages are loaded via Astro's content API:

```typescript
// In [...slug].astro
const { slug } = Astro.params;
const entry = await getEntry('docs', slug);

if (!entry) {
  return Astro.redirect('/404');
}
```

### Best Practices

1. **Consistent Naming**: Use kebab-case for file names
2. **Frontmatter**: Always include title and description
3. **Navigation**: Update `navigation.ts` when adding new sections
4. **Images**: Optimize images and use descriptive alt text
5. **Links**: Use relative paths for internal links
6. **SEO**: Write descriptive titles and descriptions

## Custom Components

The website includes 31+ **hand-built Astro components** for documentation features. Every component is custom-coded from scratch, providing full control over functionality and styling.

**NEW**: The recently added `Header.astro` component introduces an advanced slot-based architecture for responsive customization, setting a pattern for flexible, template-ready components.

### Layout Components

#### `DocsLayout.astro`
Custom main layout wrapper providing:
- HTML structure with meta tags
- Theme initialization and FOUC prevention
- View transitions setup
- Mobile header integration
- Custom grid system for sidebar and TOC positioning
- Resizeable sidebar functionality

#### `Navigation.astro`
Custom collapsible sidebar navigation:
- Hierarchical menu structure with nested items
- Active link highlighting and auto-expansion
- Mobile overlay with backdrop and touch gestures
- Keyboard navigation and accessibility
- Local storage persistence for collapsed sections
- Swipe-to-close on mobile

#### `MobileHeader.astro`
Custom fixed header for mobile devices:
- TOC dropdown button with overlay
- Search overlay trigger with full-screen interface
- Menu button for sidebar navigation
- Touch gesture support and swipe-to-close
- Intersection Observer for active section tracking

#### `Header.astro`
**NEW**: Flexible full-width header component (optional, disabled by default):
- Logo image or site title text support
- Integrated Pagefind search with keyboard shortcuts (Ctrl/Cmd+K)
- Configurable icon links (GitHub, Discord, Twitter, LinkedIn, custom)
- Optional version dropdown for multi-version documentation
- Optional language dropdown for internationalization
- Theme toggle integration
- **Slot system** for custom children:
  - Default slot: Content visible on both desktop and mobile
  - `desktop` slot: Content visible only on desktop (>768px)
  - `mobile` slot: Content visible only on mobile (≤768px)
- View transitions support with `transition:persist`
- Responsive design with mobile-first approach
- Fixed positioning with configurable z-index (1003)
- Seamless integration with existing theme system

##### Header Usage Examples

**Basic usage** (site title only):
```astro
<Header currentPath={currentPath} />
```

**With logo image**:
```astro
<Header
  currentPath={currentPath}
  logo={{ src: "/logo.svg", alt: "Site Logo" }}
/>
```

**With icon links**:
```astro
<Header
  currentPath={currentPath}
  iconLinks={[
    { href: "https://github.com/user/repo", icon: "github", label: "GitHub" },
    { href: "https://discord.gg/invite", icon: "discord", label: "Discord" },
    { href: "https://twitter.com/user", icon: "twitter", label: "Twitter" }
  ]}
/>
```

**With version dropdown**:
```astro
<Header
  currentPath={currentPath}
  versionDropdown={{
    current: "2.0",
    versions: [
      { version: "2.0", href: "/v2", label: "2.0 (Latest)" },
      { version: "1.0", href: "/v1", label: "1.0 (Legacy)" }
    ]
  }}
/>
```

**With custom children** (default slot - visible everywhere):
```astro
<Header currentPath={currentPath}>
  <button class="cta-button">Get Started</button>
  <span class="version-badge">Beta</span>
</Header>
```

**With desktop-only content**:
```astro
<Header currentPath={currentPath}>
  <Fragment slot="desktop">
    <a href="/pricing">Pricing</a>
    <a href="/blog">Blog</a>
    <a href="/enterprise">Enterprise</a>
  </Fragment>
</Header>
```

**With mobile-only content**:
```astro
<Header currentPath={currentPath}>
  <Fragment slot="mobile">
    <button aria-label="Open menu">☰</button>
  </Fragment>
</Header>
```

**With both desktop and mobile slots**:
```astro
<Header currentPath={currentPath}>
  {/* Always visible */}
  <span class="status-badge">Online</span>

  {/* Desktop only - full navigation */}
  <Fragment slot="desktop">
    <nav>
      <a href="/pricing">Pricing</a>
      <a href="/docs">Docs</a>
      <a href="/blog">Blog</a>
    </nav>
  </Fragment>

  {/* Mobile only - compact button */}
  <Fragment slot="mobile">
    <button onclick="toggleMenu()">Menu</button>
  </Fragment>
</Header>
```

**Full-featured example**:
```astro
<Header
  currentPath={currentPath}
  logo={{ src: "/logo.svg", alt: "My Docs" }}
  siteTitle="Documentation"
  siteTitleHref="/"
  showSearch={true}
  iconLinks={[
    { href: "https://github.com/user/repo", icon: "github", label: "GitHub" },
    { href: "https://discord.gg/invite", icon: "discord", label: "Discord" }
  ]}
  versionDropdown={{
    current: "2.0",
    versions: [
      { version: "2.0", href: "/v2" },
      { version: "1.0", href: "/v1" }
    ]
  }}
  languageDropdown={{
    current: "en",
    languages: [
      { code: "en", label: "English", href: "/" },
      { code: "es", label: "Español", href: "/es/" },
      { code: "fr", label: "Français", href: "/fr/" }
    ]
  }}
>
  <Fragment slot="desktop">
    <a href="/enterprise" class="cta-link">Enterprise</a>
  </Fragment>
</Header>
```

##### Header Configuration

The Header component is **disabled by default** to allow template users to choose whether to use it. To enable:

1. **Uncomment the Header component** in `DocsLayout.astro`:
   ```astro
   <Header currentPath={currentPath} />
   ```

2. **Uncomment CSS adjustments** for fixed header spacing:
   ```css
   body {
     padding-top: var(--header-height);
   }

   @media (max-width: 768px) {
     body {
       padding-top: var(--header-height-mobile);
     }
   }
   ```

3. **Uncomment view transition persistence** (optional):
   ```css
   ::view-transition-old(site-header),
   ::view-transition-new(site-header) {
     animation: none;
     transform: none !important;
   }
   ```

##### Header Theme Variables

The Header respects existing theme variables and adds its own:

```css
/* In theme.css */
--header-height: 4rem;                    /* Desktop height */
--header-height-mobile: 3.5rem;           /* Mobile height */
--header-bg: var(--bg-secondary);         /* Background color */
--header-border: 1px solid var(--border-color);
--header-padding-x: var(--space-2xl);     /* Horizontal padding */
--header-max-width: 100%;                 /* Max width */
--header-z-index: 1003;                   /* Z-index (above MobileHeader) */
--header-logo-height: 2rem;               /* Logo height */
```

##### Header Props Interface

```typescript
interface Props {
  currentPath?: string;
  logo?: { src: string; alt: string; href?: string } | null;
  siteTitle?: string;
  siteTitleHref?: string;
  showSearch?: boolean;
  iconLinks?: IconLink[];
  versionDropdown?: {
    current: string;
    versions: VersionOption[];
  } | null;
  languageDropdown?: {
    current: string;
    languages: LanguageOption[];
  } | null;
}

interface IconLink {
  href: string;
  icon: 'github' | 'discord' | 'twitter' | 'linkedin' | 'custom';
  label: string;
  customIcon?: string; // SVG path data for custom icons
}

interface VersionOption {
  version: string;
  label?: string;
  href: string;
}

interface LanguageOption {
  code: string;
  label: string;
  href: string;
}
```

### Content Components

#### `TableOfContents.astro`
Custom auto-generated TOC from headings:
- H2 and H3 heading support with depth indication
- Scroll highlighting with Intersection Observer
- Mobile overlay version with touch interactions
- Smooth scrolling and active section tracking

#### `Breadcrumbs.astro`
Navigation breadcrumbs:
- Automatic path generation
- URL slug to title conversion
- Accessible markup

#### `PrevNextNav.astro`
Previous/Next page navigation:
- Content collection integration
- Order-based navigation
- Prefetching support

### Interactive Components

#### `Search.astro`
Custom full-text search interface:
- Pagefind integration with custom UI
- URL query persistence and browser history
- Keyboard shortcuts (Ctrl+K) with focus management
- Mobile overlay with touch-friendly interface
- Custom result styling and highlighting

#### `ThemeToggle.astro`
Custom theme switching button:
- System/Light/Dark mode options
- Smooth icon transitions with CSS animations
- Local storage and cookie persistence
- Server-side rendering support
- FOUC prevention

#### `ScrollToTop.astro`
Floating scroll button:
- Visibility based on scroll position
- Mobile positioning adjustments
- Smooth scroll behavior

### Utility Components

#### `PageMeta.astro`
Page metadata and edit links:
- GitHub edit links
- SEO meta tags
- Social media cards

#### `LoadingIndicator.astro`
Loading states for navigation:
- Page transition feedback
- Customizable animations

#### `KeyboardShortcuts.astro`
Keyboard shortcut handling:
- Search focus (Ctrl+K)
- Accessibility features

#### `ScrollProgress.astro`
Reading progress indicator:
- Top-of-page progress bar
- Scroll position tracking

### Form Components

The website includes form components (though primarily for documentation):
- `Input.astro`, `Textarea.astro`, `Select.astro`
- `Checkbox.astro`, `Radio.astro`
- `FormField.astro` for labels and validation

### Content Components

Documentation-specific components:
- `Admonition.astro`: Callouts and warnings
- `Badge.astro`: Status indicators
- `Card.astro`: Content containers
- `Tabs.astro`: Tabbed content
- `Accordion.astro`: Collapsible sections

## Navigation & Hierarchy

### Navigation Structure

Navigation is defined in `src/navigation.ts`:

```typescript
export const navigation: NavItem[] = [
  {
    label: 'Start Here',
    items: [
      { label: 'Home', slug: '' },
      { label: 'Introduction', slug: 'guides/introduction' },
    ],
  },
  // ... more sections
];
```

### Hierarchy Levels

1. **Sections**: Top-level navigation groups
2. **Pages**: Individual documentation pages
3. **Headings**: H1-H6 within pages (TOC)
4. **Sub-sections**: Nested navigation items

### Active State Management

- URL-based active detection
- Automatic section expansion
- Visual highlighting
- Keyboard navigation support

### Mobile Navigation

Two mobile navigation options:

1. **Fixed Header** (`MobileHeader.astro`): TOC + Search + Menu buttons
2. **Floating Button** (in `Navigation.astro`): Standalone menu button

## Search Functionality

### Pagefind Integration

The website uses Pagefind for client-side search:

- **Index Generation**: Automatic during build
- **Query Processing**: Client-side search
- **Result Highlighting**: Term highlighting
- **URL Persistence**: Search queries in URL

### Search Features

- Full-text search across all content
- Excerpt display with highlights
- Keyboard shortcuts (Ctrl+K)
- Mobile overlay interface
- Result pagination

### Configuration

```javascript
// astro.config.mjs
import pagefind from 'astro-pagefind';

export default defineConfig({
  integrations: [
    pagefind(),
  ],
});
```

## Table of Contents (TOC)

### Desktop TOC

Sticky sidebar TOC (`TableOfContents.astro`):
- Auto-generated from H2/H3 headings
- Scroll position highlighting
- Intersection Observer API
- Smooth scrolling to sections

### Mobile TOC

Overlay dropdown in mobile header:
- Touch-friendly interface
- Active section tracking
- Close on navigation

### TOC Features

- Hierarchical display (H2 > H3)
- Visual indentation
- Hover effects
- Active link styling
- Accessibility support

## View Transitions

### Native View Transitions API

The website uses the View Transitions API for smooth page transitions:

```html
<!-- In DocsLayout.astro -->
<ViewTransitions fallback="none" />
```

### Transition Types

1. **Page Transitions**: Between different pages
2. **Theme Transitions**: When switching light/dark mode
3. **Shared Elements**: Elements with `view-transition-name`

### Animation Details

- **Duration**: 400ms for page transitions
- **Easing**: `cubic-bezier(0.45, 0, 0.55, 1)`
- **Effects**: Slide and fade animations

### JavaScript Integration

For SPA-style transitions (if needed):

```javascript
// view-transition.js
document.startViewTransition(() => {
  // DOM updates
});
```

## Meta Tags & SEO

### Automatic Meta Tags

`DocsLayout.astro` generates comprehensive meta tags:

```html
<title>{title} | Documentation</title>
<meta
    name="description"
    content={description ||
        "Comprehensive documentation with modern design and advanced features."}
/>

<!-- Open Graph / Social -->
<meta property="og:type" content="website" />
<meta property="og:title" content={`${title} | Documentation`} />
<meta
    name="og:description"
    content={description || "Comprehensive documentation with modern design"}
/>
<meta property="og:site_name" content="Documentation" />
```

### Page-Specific Metadata

Each content file can define:

```yaml
---
title: Page Title
description: Page description for SEO
---
```

### Edit Links

`PageMeta.astro` provides GitHub edit links:

```html
<a href="https://github.com/username/repo/edit/main/src/content/docs/...">
  Edit this page
</a>
```

## Prefetching & Performance

### Astro Prefetching

Automatic prefetching for links:

```html
<a href="/page" data-astro-prefetch>Link</a>
```

### View Transitions

Smooth transitions reduce perceived loading time.

### Code Splitting

Astro automatically code-splits components.

### Image Optimization

Sharp integration for image processing:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sharp from 'sharp';

export default defineConfig({
  image: {
    service: sharp(),
  },
});
```

## Deployment

### GitHub Pages Deployment

The site can be configured for GitHub Pages:

```javascript
// astro.config.mjs
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repository-name/',
  integrations: [
    // ... other integrations
  ],
});
```

### Build Process

```bash
npm run build  # Creates dist/ directory
npm run preview # Local preview of build
```

### Deployment Steps

1. Build the site: `npm run build`
2. Deploy `dist/` contents to GitHub Pages
3. Configure GitHub Pages to serve from `gh-pages` branch or GitHub Actions

### Environment Variables

- `BASE_URL`: Set to `/CSS-Tags/` for GitHub Pages
- `NODE_ENV`: Automatically set by Astro

## Customization Guide

### Theme Customization

Override CSS variables:

```css
:root {
  --accent-h: 45;        /* Yellow theme */
  --accent-c: 0.14;      /* Moderate saturation */
  --surface-saturation: 0.012;  /* Subtle surfaces */
}
```

### Header Customization

The Header component provides extensive customization options:

#### Enabling the Header

By default, the Header is disabled. To enable it:

1. Open `src/layouts/DocsLayout.astro`
2. Find the commented Header component (around line 738)
3. Uncomment it: `<Header currentPath={currentPath} />`
4. Uncomment the CSS body padding adjustments (around line 385)

#### Header Visual Customization

Customize header appearance via CSS variables in `theme.css`:

```css
:root {
  /* Header dimensions */
  --header-height: 5rem;              /* Increase height */
  --header-height-mobile: 4rem;       /* Mobile height */

  /* Header styling */
  --header-bg: var(--bg-primary);     /* Change background */
  --header-border: 2px solid var(--accent);  /* Custom border */
  --header-padding-x: var(--space-xl); /* Adjust padding */

  /* Header positioning */
  --header-z-index: 2000;             /* Change stacking */
  --header-max-width: 1400px;         /* Limit width */

  /* Logo sizing */
  --header-logo-height: 2.5rem;       /* Larger logo */
}
```

#### Header Content Customization

Add custom branding, links, or actions:

```astro
<Header
  currentPath={currentPath}
  logo={{ src: "/my-logo.svg", alt: "My Brand" }}
  siteTitle="My Documentation"
  iconLinks={[
    { href: "https://github.com/me/repo", icon: "github", label: "GitHub" },
    { href: "https://discord.gg/xyz", icon: "discord", label: "Discord" }
  ]}
>
  {/* Add custom buttons or badges */}
  <a href="/pro" class="upgrade-button">Upgrade to Pro</a>
  <span class="version-badge">v3.0 Beta</span>
</Header>
```

#### Header Slot Customization

Use slots for responsive layouts:

```astro
<Header currentPath={currentPath}>
  {/* Always visible */}
  <span class="status">Live</span>

  {/* Desktop: Full navigation */}
  <Fragment slot="desktop">
    <nav class="header-nav">
      <a href="/pricing">Pricing</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
    </nav>
  </Fragment>

  {/* Mobile: Compact menu */}
  <Fragment slot="mobile">
    <button class="mobile-menu-btn" onclick="toggleMenu()">
      Menu
    </button>
  </Fragment>
</Header>
```

#### Disable Header Search

To use only sidebar search:

```astro
<Header currentPath={currentPath} showSearch={false} />
```

#### Custom Icon Support

Add custom icons with SVG paths:

```astro
<Header
  iconLinks={[
    {
      href: "https://example.com",
      icon: "custom",
      label: "Custom Link",
      customIcon: "M12 2L2 7l10 5 10-5-10-5z..."  // Your SVG path
    }
  ]}
/>
```

### Component Customization

Modify component props or extend components:

```astro
---
// Custom navigation
---
<Navigation customProp="value" />
```

### Layout Customization

Extend `DocsLayout.astro` for custom layouts.

### Content Customization

Modify content collections and schemas in `content.config.ts`.

## Advanced Features

### Slot-Based Component Architecture

The Header component introduces a powerful slot system for responsive customization:

#### Default Slot (Universal)
Content passed to the default slot appears on all screen sizes:

```astro
<Header>
  <button>Contact</button>
  <span>v2.0</span>
</Header>
```

#### Named Slots (Responsive)
Use named slots for screen-size-specific content:

```astro
<Header>
  {/* Desktop-only: Full navigation */}
  <Fragment slot="desktop">
    <nav>
      <a href="/pricing">Pricing</a>
      <a href="/docs">Docs</a>
      <a href="/blog">Blog</a>
    </nav>
  </Fragment>

  {/* Mobile-only: Compact UI */}
  <Fragment slot="mobile">
    <button>☰</button>
  </Fragment>
</Header>
```

#### Slot Combinations
Combine all three for maximum flexibility:

```astro
<Header>
  {/* Always visible */}
  <span class="badge">Live</span>

  {/* Desktop: Extended nav */}
  <Fragment slot="desktop">
    <a href="/enterprise">Enterprise</a>
    <a href="/support">Support</a>
  </Fragment>

  {/* Mobile: Single button */}
  <Fragment slot="mobile">
    <button onclick="openMenu()">Menu</button>
  </Fragment>
</Header>
```

#### Breakpoint Behavior
- Desktop slot: Visible when viewport width > 768px
- Mobile slot: Visible when viewport width ≤ 768px
- Default slot: Always visible
- Empty slots automatically hide (no extra spacing)

### Keyboard Shortcuts

- `Ctrl+K` / `Cmd+K`: Focus search (works in Header and Sidebar)
- `Tab`: Navigate focusable elements
- `Enter`: Activate buttons/links
- `Escape`: Close overlays and dropdowns

### Accessibility Features

- ARIA labels and roles
- Focus management
- Screen reader support
- High contrast mode
- Reduced motion support

### Mobile Optimizations

- Touch gesture support
- Responsive design
- Mobile-specific overlays
- Swipe-to-close functionality

### Performance Features

- Lazy loading
- Code splitting
- Image optimization
- Minimal JavaScript bundle

## Troubleshooting

### Common Issues

#### Theme Not Switching
- Check localStorage for theme value
- Verify CSS variable overrides
- Check for JavaScript errors

#### Search Not Working
- Ensure Pagefind is built (`npm run build`)
- Check browser console for errors
- Verify content is indexed

#### Navigation Not Updating
- Check URL structure
- Verify navigation.ts configuration
- Check for JavaScript errors

#### TOC Not Showing
- Ensure page has H2/H3 headings
- Check mobile vs desktop display
- Verify component props

#### Header Not Showing
- Verify the Header component is uncommented in `DocsLayout.astro`
- Check that CSS body padding is uncommented
- Ensure `--header-height` CSS variable is defined in `theme.css`
- Check z-index conflicts (Header uses z-index: 1003)
- Verify no CSS `display: none` is overriding header visibility

#### Header Search Not Working
- Ensure `showSearch={true}` prop is set (default)
- Check Pagefind is properly built and bundled
- Verify `#header-search` element exists in DOM
- Check browser console for Pagefind initialization errors
- Confirm `PagefindUI` script is loaded

#### Header Dropdowns Not Opening
- Check JavaScript console for errors
- Verify dropdown button click handlers are initialized
- Ensure dropdown menus have content (not empty)
- Check z-index of dropdown menu (should be 10)
- Verify `initDropdowns()` function runs on page load and after transitions

#### Header Slots Not Showing
- Verify slot content is not empty
- Check responsive breakpoint (768px for mobile/desktop switch)
- Ensure `<Fragment slot="name">` syntax is correct
- Check CSS display rules for `.header-children-*` classes
- Verify no parent component is hiding the slot content

#### Header Layout Issues
- Check `--header-padding-x` and spacing variables
- Verify flexbox gap values are appropriate
- Ensure `--header-max-width` is not too restrictive
- Check for conflicting CSS from other stylesheets
- Verify viewport meta tag is set correctly for mobile

### Development Tips

#### Local Development
```bash
npm run dev  # Start dev server
npm run build  # Build for production
npm run preview  # Preview production build
```

#### Debugging
- Use browser DevTools
- Check console for errors
- Verify network requests
- Test on multiple devices

#### Content Updates
- MDX files in `src/content/docs/`
- Frontmatter for metadata
- Automatic rebuild on changes

This comprehensive guide covers all aspects of this custom-built Astro documentation website. Unlike template-based documentation sites, this implementation provides complete control through hand-coded components and advanced theming. For specific implementation details, refer to the component source code and configuration files.