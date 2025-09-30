# API Documentation for Layout Primitives

This document details the custom element layout primitives provided by the library. Each layout is declarative, property-driven, and integrates with the design token system.

## <layout-grid>

A responsive grid that automatically fits columns based on item size.

**Properties:**
- `--l-min-item-size`: Minimum size for each item (default: 16rem).
- `--l-gap`: Gap between items (default: var(--space-md)).

**Attributes:**
- `min-item-size`: String, e.g., "200px".
- `gap`: Length, e.g., "1rem".

**Example:**
```html
<layout-grid min-item-size="200px" gap="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
</layout-grid>
```

## <layout-split>

A two-column layout that stacks on small screens and splits at a breakpoint.

**Properties:**
- `--l-fraction`: Ratio for the first column (default: 1fr).
- `--l-breakpoint`: Container width to split at (default: var(--bp-md)).
- `--l-gap`: Gap between columns (default: var(--space-md)).

**Attributes:**
- `fraction`: String, e.g., "2fr".
- `breakpoint`: Length, e.g., "48em".
- `gap`: Length, e.g., "1rem".
- `force-stack`: Boolean, forces stacked layout.
- `no-stack`: Boolean, forces side-by-side.

**Example:**
```html
<layout-split fraction="1fr 2fr" breakpoint="48em">
  <aside>Sidebar</aside>
  <main>Content</main>
</layout-split>
```

## <layout-stack>

A vertical stack with consistent spacing.

**Properties:**
- `--l-gap`: Gap between items (default: var(--space-md)).
- `--l-align`: Alignment of items (default: stretch).

**Attributes:**
- `gap`: Length, e.g., "1rem".
- `align`: String, e.g., "center".

**Example:**
```html
<layout-stack gap="1rem" align="center">
  <h1>Title</h1>
  <p>Paragraph</p>
</layout-stack>
```

## <layout-cluster>

For grouping items that wrap onto new lines.

**Properties:**
- `--l-gap`: Gap between items (default: var(--space-sm)).
- `--l-justify`: Justification (default: flex-start).
- `--l-align`: Alignment (default: center).

**Attributes:**
- `gap`: Length, e.g., "0.5rem".
- `justify`: String, e.g., "space-between".
- `align`: String, e.g., "center".

**Example:**
```html
<layout-cluster gap="0.5rem" justify="center">
  <button>Btn1</button>
  <button>Btn2</button>
</layout-cluster>
```

## <layout-reel>

A horizontally scrolling container.

**Properties:**
- `--l-gap`: Gap between items (default: var(--space-md)).
- `--l-scrollbar-thumb`: Scrollbar thumb color.
- `--l-scrollbar-track`: Scrollbar track color.

**Attributes:**
- `gap`: Length, e.g., "1rem".
- `no-scrollbar`: Boolean, hides scrollbar.

**Example:**
```html
<layout-reel gap="1rem" no-scrollbar>
  <img src="1.jpg">
  <img src="2.jpg">
</layout-reel>
```

## <layout-switcher>

Switches from stack to row when items fit.

**Properties:**
- `--l-threshold`: Threshold for switching (default: 30rem).
- `--l-gap`: Gap between items (default: var(--space-md)).

**Attributes:**
- `threshold`: Length, e.g., "20rem".
- `gap`: Length, e.g., "1rem".

**Example:**
```html
<layout-switcher threshold="20rem">
  <div>Item 1</div>
  <div>Item 2</div>
</layout-switcher>
```

## <layout-pad>

Adds consistent padding.

**Properties:**
- `--l-padding`: Padding (default: var(--space-md)).
- `--l-padding-inline`: Inline padding.
- `--l-padding-block`: Block padding.

**Attributes:**
- `padding`: Length, e.g., "1rem".
- `padding-x`: Length, e.g., "1rem".
- `padding-y`: Length, e.g., "1rem".

**Example:**
```html
<layout-pad padding="1rem">
  <p>Content</p>
</layout-pad>
```

## <layout-center>

Centers content with max-width.

**Properties:**
- `--l-max-width`: Max width (default: 65ch).
- `--l-gutters`: Gutters (default: var(--space-md)).

**Attributes:**
- `max-width`: Length, e.g., "60ch".
- `gutters`: Length, e.g., "1rem".
- `and-text`: Boolean, centers text too.

**Example:**
```html
<layout-center max-width="60ch" gutters="1rem" and-text>
  <h1>Centered Heading</h1>
</layout-center>
```

## <layout-frame>

Responsive container for media with aspect ratio.

**Properties:**
- `--l-aspect-ratio`: Aspect ratio (default: 16/9).

**Attributes:**
- `ratio`: String, e.g., "4/3".

**Example:**
```html
<layout-frame ratio="16/9">
  <img src="video.jpg">
</layout-frame>
```

## <layout-sidebar>

Sidebar layout that stacks on small screens.

**Properties:**
- `--l-breakpoint`: Breakpoint (default: var(--bp-md)).
- `--l-side-width`: Sidebar width (default: 20rem).
- `--l-content-min`: Min content width (default: 50%).
- `--l-gap`: Gap (default: var(--space-md)).

**Attributes:**
- `breakpoint`: Length, e.g., "48em".
- `side-width`: String, e.g., "15rem".
- `content-min-width`: String, e.g., "60%".
- `gap`: Length, e.g., "1rem".
- `side`: "left" or "right" (default: left).

**Example:**
```html
<layout-sidebar side-width="200px" side="left">
  <aside slot="aside">Sidebar</aside>
  <main>Content</main>
</layout-sidebar>
```

## <layout-page>

Standard page layout with header, main, footer.

**Properties:**
- `--l-min-height`: Min height (default: 100vh).
- `--l-gap`: Gap (default: 0).

**Attributes:**
- `min-height`: Length, e.g., "100vh".
- `gap`: Length, e.g., "1rem".

**Example:**
```html
<layout-page>
  <header slot="header">Header</header>
  <main slot="main">Main</main>
  <footer slot="footer">Footer</footer>
</layout-page>
```

All layouts pull defaults from global tokens and can be customized via CSS custom properties or HTML attributes.