# Container Component Documentation

## Overview
The `container` component provides responsive, centered content containers that react to global breakpoint states through CSS Style Queries. Unlike traditional media queries, it responds to a custom property set on an ancestor element, making it truly context-aware.

## Key Features
- **Style Queries**: Uses `@container style()` instead of media queries
- **Context-Aware**: Responds to `--breakpoint-active` on ancestor elements
- **Logical Properties**: Automatic LTR/RTL support with `margin-inline`
- **Attribute Overrides**: Per-element customization of max-width values
- **No Media Queries**: Purely CSS-based responsive behavior

## Breakpoint System

The container responds to four breakpoint states set via `--breakpoint-active`:

- `sm`: Small screens (default: 100% width)
- `md`: Medium screens (default: 768px)
- `lg`: Large screens (default: 1024px)
- `xl`: Extra large screens (default: 1280px, default state)

## Attributes

### Max-Width Overrides
- `max-width-sm`: Max width for small breakpoint (default: `100%`)
- `max-width-md`: Max width for medium breakpoint (default: `768px`)
- `max-width-lg`: Max width for large breakpoint (default: `1024px`)
- `max-width-xl`: Max width for extra large breakpoint (default: `1280px`)

### Padding
- `pad`: Inline padding (default: `1.5rem`)

## Usage Examples

### Basic Container
```html
<container>
  <p>Centered content that responds to breakpoints</p>
</container>
```

### Custom Max-Widths
```html
<container max-width-md="600px" max-width-lg="900px">
  <div>Custom sizing per breakpoint</div>
</container>
```

### With Custom Padding
```html
<container pad="2rem">
  <div>Extra padding on sides</div>
</container>
```

## Setup Requirements

The container requires a style query container (usually `<body>`) with the `--breakpoint-active` property:

```css
body {
  container-type: inline-size;
  container-name: breakpoint-container;
  --breakpoint-active: xl; /* Default to largest */
}

/* Update based on media queries */
@media (max-width: 767px) {
  body { --breakpoint-active: sm; }
}
@media (min-width: 768px) {
  body { --breakpoint-active: md; }
}
@media (min-width: 1024px) {
  body { --breakpoint-active: lg; }
}
```

## Technical Implementation

### Style Queries
```css
@container style(--breakpoint-active = lg) {
  container { --container-max-width: var(--mw-lg); }
}
```

This checks the computed value of `--breakpoint-active` on the nearest style query container.

### Logical Properties
- `margin-inline: auto`: Centers the container (works in both LTR and RTL)
- `padding-inline`: Responsive padding that respects text direction

### attr() Function
```css
--mw-sm: attr(max-width-sm type(<length-percentage>), 100%);
```

Allows per-element overrides with type checking and fallbacks.

## CSS Custom Properties
- `--mw-sm`, `--mw-md`, `--mw-lg`, `--mw-xl`: Max-width values for each breakpoint
- `--container-max-width`: Active max-width (updated by style queries)
- `--container-padding-inline`: Inline padding value

## Advantages Over Media Queries
- **Context-Aware**: Can have different breakpoints in different parts of the page
- **Component-Level**: Each container can respond independently
- **CSS-Only**: No JavaScript required for responsive behavior
- **Flexible**: Breakpoints can be set dynamically or based on container size

## Browser Support
- **Style Queries**: Chrome 111+, Safari 18+ (limited support)
- **Logical Properties**: All modern browsers
- **attr() with types**: Limited support (fallback to defaults)
- **Fallback**: Behaves as a centered block element in unsupported browsers

## Use Cases
- **Page Layouts**: Main content containers
- **Component Containers**: Self-contained responsive sections
- **Contextual Layouts**: Different sizing in sidebars vs main content
- **Dynamic Interfaces**: Breakpoints that change based on user interactions