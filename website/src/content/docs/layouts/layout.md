---
title: Layout Components (`layouts/layout.css`)
description: This file provides a comprehensive library of declarative, property-driven layout components that integrate deeply with the framework's design token system. The
---

This file provides a comprehensive library of declarative, property-driven layout components that integrate deeply with the framework's design token system. These components use custom HTML elements for semantic, maintainable layouts.

## Philosophy

- **Declarative & Semantic**: Use `<layout-grid>` instead of classes like `.l-grid`
- **Property-Driven**: Core logic controlled by CSS Custom Properties (e.g., `--l-gap`) that can be overridden via HTML attributes
- **Token-Integrated**: Default values pulled from global design tokens defined in `core/base.css`
- **Composable & Context-Aware**: Designed for nesting and use container queries for responsive adaptation

## Global Defaults

All layout components inherit these default CSS custom properties:

```css
--l-gap: var(--space-md, 1.5rem);
--l-breakpoint: var(--bp-sm, 30em);
--l-padding: var(--space-md, 1.5rem);
--l-gutters: 1.5rem;              /* Side margins for centering layouts */
--l-max-width: 65ch;              /* Maximum width for readable content */
```

These can be overridden globally or per-component.

## Base Behaviors

All layout components (`[class^="layout-"]`) share these base styles:

- `display: block`
- `container-type: inline-size` with `container-name: layout-container`
- Prevent child overflow with `min-width: 0` on direct children

## Grid-Based Layouts

### `<layout-grid>`

A responsive grid that automatically fits columns based on minimum item size.

**CSS Properties:**
- `--l-min-item-size`: Minimum size for each item (default: 16rem)
- `--l-gap`: Gap between items

**HTML Attributes:**
- `min-item-size`: Override minimum item size
- `gap`: Override gap

**Usage:**
```html
<layout-grid min-item-size="12rem" gap="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</layout-grid>
```

### `<layout-split>`

A two-column layout that splits at a breakpoint, stacking on smaller screens.

**CSS Properties:**
- `--l-fraction`: Ratio for first column (default: 1fr)
- `--l-breakpoint`: Container width to split at
- `--l-gap`: Gap between columns

**HTML Attributes:**
- `fraction`: Override column ratio
- `breakpoint`: Override breakpoint
- `gap`: Override gap
- `force-stack`: Force stacked layout
- `no-stack`: Prevent stacking

**Usage:**
```html
<layout-split fraction="2fr" breakpoint="40em">
  <div>Content</div>
  <div>Sidebar</div>
</layout-split>
```

## Flexbox-Based Layouts

### `<layout-stack>`

A vertical stack with consistent spacing.

**CSS Properties:**
- `--l-gap`: Gap between items
- `--l-align`: Alignment (default: stretch)

**HTML Attributes:**
- `gap`: Override gap
- `align`: Override alignment (stretch, center, start, end)

**Usage:**
```html
<layout-stack gap="2rem" align="center">
  <div>Item 1</div>
  <div>Item 2</div>
</layout-stack>
```

### `<layout-cluster>`

Groups items that wrap onto new lines, useful for tags or buttons.

**CSS Properties:**
- `--l-gap`: Gap between items (default: var(--space-sm, 0.75rem))
- `--l-justify`: Justification (default: flex-start)
- `--l-align`: Alignment (default: center)

**HTML Attributes:**
- `gap`: Override gap
- `justify`: Override justification
- `align`: Override alignment

**Usage:**
```html
<layout-cluster gap="0.5rem" justify="center">
  <button>Tag 1</button>
  <button>Tag 2</button>
  <button>Tag 3</button>
</layout-cluster>
```

### `<layout-reel>`

A horizontally scrolling container.

**CSS Properties:**
- `--l-gap`: Gap between items
- `--scrollbar-thumb`: Scrollbar thumb color
- `--scrollbar-track`: Scrollbar track color

**HTML Attributes:**
- `gap`: Override gap
- `no-scrollbar`: Hide scrollbars

**Usage:**
```html
<layout-reel gap="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</layout-reel>
```

### `<layout-switcher>`

Switches from vertical stack to horizontal row when items have enough space.

**CSS Properties:**
- `--l-threshold`: Space threshold for switching (default: 30rem)
- `--l-gap`: Gap between items

**HTML Attributes:**
- `threshold`: Override threshold
- `gap`: Override gap

**Usage:**
```html
<layout-switcher threshold="25rem">
  <div>Title</div>
  <div>Description</div>
</layout-switcher>
```

## Wrapper & Centering Layouts

### `<layout-pad>`

Adds consistent padding to content.

**CSS Properties:**
- `--l-padding`: Padding value
- `--l-padding-inline`: Horizontal padding
- `--l-padding-block`: Vertical padding

**HTML Attributes:**
- `padding`: Override padding
- `padding-x`: Override horizontal padding
- `padding-y`: Override vertical padding

**Usage:**
```html
<layout-pad padding="2rem">
  <p>Content with padding</p>
</layout-pad>
```

### `<layout-center>`

Centers content horizontally with max-width for readability.

**CSS Properties:**
- `--l-max-width`: Maximum width (default: 65ch)
- `--l-gutters`: Side padding (default: var(--space-md, 1.5rem))

**HTML Attributes:**
- `max-width`: Override max width
- `gutters`: Override gutters
- `and-text`: Also center text

**Usage:**
```html
<layout-center max-width="50ch" and-text>
  <p>Centered content</p>
</layout-center>
```

### `<layout-inline-center>`

Centers content horizontally without a max-width constraint, useful for full-width centering.

**CSS Properties:**
- `--l-gutters`: Side padding (default: var(--space-md, 1.5rem))

**HTML Attributes:**
- `gutters`: Override gutters
- `and-text`: Also center text

**Usage:**
```html
<layout-inline-center gutters="2rem" and-text>
  <p>Centered content without width limit</p>
</layout-inline-center>
```

### `<layout-frame>`

Creates responsive media containers with fixed aspect ratios.

**CSS Properties:**
- `--l-aspect-ratio`: Aspect ratio (default: 16 / 9)

**HTML Attributes:**
- `ratio`: Override aspect ratio

**Usage:**
```html
<layout-frame ratio="4/3">
  <img src="image.jpg" alt="Framed image">
</layout-frame>
```

## Complex Layout Patterns

### `<layout-sidebar>`

Sidebar layout that stacks on small screens.

**CSS Properties:**
- `--l-breakpoint`: Breakpoint for stacking
- `--l-side-width`: Sidebar width (default: 20rem)
- `--l-content-min`: Minimum content width (default: 50%)
- `--l-gap`: Gap between areas

**HTML Attributes:**
- `breakpoint`: Override breakpoint
- `side-width`: Override sidebar width
- `content-min-width`: Override content min width
- `side`: Sidebar position ("left" or "right")
- `gap`: Override gap

**Usage:**
```html
<layout-sidebar side="right" side-width="15rem">
  <main>Main content</main>
  <aside slot="aside">Sidebar</aside>
</layout-sidebar>
```

### `<layout-page>`

Standard page layout with header, main, and footer.

**CSS Properties:**
- `--l-min-height`: Minimum height (default: 100vh)
- `--l-gap`: Gap between sections

**HTML Attributes:**
- `min-height`: Override min height
- `gap`: Override gap

**Usage:**
```html
<layout-page min-height="100vh">
  <header slot="header">Header</header>
  <main slot="main">Main content</main>
  <footer slot="footer">Footer</footer>
</layout-page>
```

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Container queries require recent browser versions
- Custom elements work in all modern browsers
- Fallbacks provided for older browsers where possible

## Integration Notes

- Import this file into the components layer in `index.css`
- Components use container queries, so parent containers must have `container-type` set
- Custom properties can be overridden globally in `core/theme.css` or per-component
- Combine with other framework components for complete layouts

## Related Files

- `core/base.css`: Defines global design tokens used by these components
- `core/theme.css`: Theme-specific overrides
- `components/`: Other UI components that work well with these layouts