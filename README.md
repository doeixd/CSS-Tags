# CSS Tags

**A declarative, HTML-first CSS library using custom elements as building blocks.**

CSS Tags is a forward-looking component library and design system that embraces the power and elegance of modern CSS. Instead of relying on thousands of utility classes, it provides a set of semantic, declarative custom elements—like `<grid>`, `<flex>`, and `<card>`—that you can configure directly in your HTML.

It's a showcase of cutting-edge features like Anchor Positioning, the Popover API, Style Queries, and a sophisticated OKLCH-based theming engine, all designed to create a powerful, pre-processor-free developer experience.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version: 1.0.0](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://semver.org/)

**[➡️ View Live Demo](https://your-demo-link.com)** | **[🧩 See Composition Examples](https://your-demo-link.com/examples)**

---

## Philosophy

Our design philosophy is built on a simple question: "Why write `<div class="grid...">` when you can just write `<grid>`?"

1.  **Declarative & Semantic:** We believe your HTML should describe your content's structure, not its styling implementation. By using custom elements like `<grid columns="1fr 2fr">`, your markup becomes more readable, self-documenting, and easier to maintain.

2.  **Modern CSS First:** This library aggressively uses new and upcoming CSS features to push the boundaries of what's possible in the browser. We leverage Container Queries, `@scope`, `@layer`, typed custom properties, and the game-changing `attr()` function to deliver powerful results without a single line of JavaScript for styling.

3.  **Property-Driven Architecture:** At its core, every component and utility is driven by CSS Custom Properties. This creates an incredibly flexible and predictable system. Global design tokens cascade down into semantic theme variables, which are then consumed by components, allowing for robust and effortless customization.

## Core Features

-   **Declarative API with Typed `attr()`:** The star of the show. Configure dozens of CSS properties directly from HTML attributes with type-safety (`attr(radius type(<length>))`), a feature that fundamentally changes how we can write CSS.
-   **Context-Aware Layouts:** Components are truly responsive to their environment, not just the viewport, thanks to a powerful combination of **Container Queries** and a global **Style Query** state machine.
-   **Advanced Tooltip & Popover System:** A showcase component built with the latest APIs, including **CSS Anchor Positioning** for perfect placement, the native **Popover API** for top-layer rendering, and `position-try` for intelligent fallbacks.
-   **Sophisticated OKLCH Theming Engine:** Create beautiful, accessible, and brand-able themes by changing just a few root variables. The system automatically generates entire color palettes, surfaces, and accessible text colors for both **light and dark modes**.
-   **The "Every Layout" System:** A comprehensive suite of `<layout-*>` components that solve common layout problems with robust, composable primitives.
-   **Zero-Specificity Reset:** A modern CSS reset using `:where()` ensures that your custom styles will always take precedence without specificity wars.

## Installation

You can include CSS Tags in your project in a few ways.

### 1. Using a CDN (Recommended for quick starts)

For the simplest setup, link directly to the main stylesheet in the `<head>` of your HTML file.

```html
<head>
  <!-- ... other head elements -->
  <link rel="stylesheet" href="https://path-to-your-cdn/css-tags/index.css">
</head>
```

### 2. NPM / Package Manager

Install the package using your preferred package manager.

```bash
npm install css-tags
```

Then, import the main CSS file into your project's entry point (e.g., `main.js` or `styles.css`).

```javascript
// main.js
import 'css-tags/index.css';
```

---

## Getting Started: Core Concepts

### The Layered Cascade (`@layer`)

CSS Tags uses `@layer` to manage the CSS cascade in a predictable order. This prevents specificity issues and makes customization safe. Any custom styles you write will naturally override the library's styles without needing `!important`.

The layers are loaded in this order of precedence:
`base` → `reset` → `tokens` → `engine` → `theme` → `palette` → `defaults` → `components` → `utilities` → `layouts`

### The Global Breakpoint System (`@container style()`)

Unlike traditional frameworks, CSS Tags avoids littering components with media queries. Instead, `base.css` sets up a global state variable on the `<body>` element: `--breakpoint-active`.

```css
body {
  container-type: style; /* Make the body a container for style queries */
  --breakpoint-active: xl; /* Default state */
}

/* Media queries have only ONE job: update this single variable */
@media (max-width: 1280px) { body { --breakpoint-active: lg; } }
@media (max-width: 1024px) { body { --breakpoint-active: md; } }
@media (max-width: 768px)  { body { --breakpoint-active: sm; } }
```

Components like `<container>` then use **Style Queries** to listen for changes to this variable, making them responsive to a global context rather than the viewport directly. This is a more robust and component-oriented approach to responsive design.

### Putting It All Together: A Composition Example

Here’s how you can combine layout primitives and components to create a responsive profile card without writing any new CSS:

```html
<!-- A responsive card built by composing semantic tags -->
<card radius="12px">
  <layout-split fraction="100px" gap="1rem">
    <!-- The avatar -->
    <box>
      <img src="avatar.jpg" alt="User Avatar" style="border-radius: 999px;">
    </box>
    
    <!-- The user info, stacked vertically -->
    <layout-stack gap="0.5rem">
      <box color="var(--text-overt)" style="font-weight: 600;">Jane Doe</box>
      <box color="var(--text-subtle)">Product Designer</box>
      
      <!-- A wrapping group of badges -->
      <flex gap="0.5rem" wrap="wrap">
        <badge role="subtle">UI Design</badge>
        <badge role="subtle">UX Research</badge>
        <badge role="subtle">CSS</badge>
      </flex>
    </layout-stack>
  </layout-split>
</card>
```
This example demonstrates how declarative layouts create complex components that are readable, maintainable, and intrinsically responsive.

---

## API Documentation

### The Utility Component: `<box>`

The `<box>` tag is the "Swiss Army Knife" of this library. It gives you direct, declarative control over dozens of common CSS properties. This is the perfect tool for creating wrappers, spacers, and one-off styled elements without writing a line of CSS.

**This component is powered by the modern, typed `attr()` function.** Inside the CSS, a rule like `background: attr(bg type(<color>), transparent);` allows the browser to read the `bg` attribute from your HTML, validate it as a color, and apply it. This is a game-changer for creating dynamic, HTML-driven styles.

**Example:**
```html
<!-- A padded, rounded container with a subtle background -->
<box display="flex" p="2rem" radius="8px" bg="var(--surface-subtle)">
  <p>Content inside the box.</p>
</box>
```

**Common Attributes:**
- **Layout & Display:** `display`, `align` (text-align)
- **Spacing:** `p` (padding), `px` (padding-inline), `py` (padding-block), `m` (margin), `mx`, `my`
- **Sizing:** `width`, `height`, `max-width`
- **Appearance:** `bg` (background), `color`, `border`, `radius`

### Layout Primitives

These custom elements form the foundation of your page structure.

#### `<grid>` & `<flex>`

Powerful, declarative implementations of CSS Grid and Flexbox. Control the entire layout of the container and its children directly from your HTML.

**Example:**
```html
<grid columns="2fr 1fr" gap="2rem">
  <main area="main">Main content...</main>
  <aside area="sidebar">Sidebar...</aside>
</grid>
```
*Full attribute tables available in the initial draft.*

### The Every Layout System

A comprehensive suite of `<layout-*>` components for solving common UI patterns with robust, composable primitives.

| Tag | Description | Key Attributes |
|---|---|---|
| `<layout-stack>` | Stacks items vertically with consistent spacing. | `gap`, `align` |
| `<layout-center>` | Centers content horizontally with a readable max-width. | `max-width`, `gutters` |
| `<layout-split>` | A two-column layout that stacks at a breakpoint. | `fraction`, `breakpoint`, `gap`|
| `<layout-sidebar>`| A sidebar layout that stacks on small containers. | `side` (left/right), `side-width`|
| `<layout-switcher>`| Switches from a stack to a row when there's enough space. | `threshold`, `gap`|
| `<layout-cluster>`| For grouping items that wrap onto new lines, like tags. | `justify`, `align`, `gap` |
| `<layout-reel>` | Creates a horizontally scrolling container. | `gap`, `no-scrollbar` |

### UI Components

#### `<card>`
A self-contained component that uses Container Queries to adapt its layout from vertical to horizontal based on its own width.

#### Advanced Tooltip (`<tooltip>`)
A cutting-edge, CSS-only tooltip component that showcases the latest browser APIs.

**Usage:**
```html
<button popovertarget="tip1">
  Hover Me
  <tooltip id="tip1" position="bottom" variant="success" delay="0.3s">
    This tooltip uses Anchor Positioning!
  </tooltip>
</button>
```
- **Modern Features:**
  - **CSS Anchor Positioning:** Tethers the tooltip perfectly to its parent (`popovertarget`).
  - **Popover API:** Renders the tooltip in the top layer, handling all accessibility concerns.
  - **`position-try`:** Intelligently tries fallback positions to avoid viewport collisions.
- **Key Attributes:** `position` (top/bottom/left/right), `variant` (success/error/info), `delay`, `arrow`.
- **Note:** This component relies on features that are new as of late 2025. Check browser compatibility before using in production.

---

## Gotchas & Important Notes

1.  **Browser Support:** This is a modern-only library. It makes no attempt to support older browsers and requires the latest versions of Chrome, Firefox, and Safari for full functionality. Always check [Can I Use](https://caniuse.com/) for specific features.

2.  **Experimental Syntax:** Files containing `@mixin` and `@function` (`mixins.css`, `box-extra.css`) are for **demonstration purposes only** and will not work in any browser. They are a conceptual exploration of a pre-processor-free future.

3.  **File Naming:** In the source, the file is named `view-transition.css` (singular). Ensure your imports match this, as some internal comments mistakenly use the plural form.

4.  **Required JavaScript:** While styling is 100% CSS, some components require small JavaScript files for behavior that CSS cannot handle alone.
    -   `carousel.js`: Adds `transform`-based sliding and touch support.
    -   `view-transition.js`: A simple router for the SPA-style `<view-page>` implementation.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
