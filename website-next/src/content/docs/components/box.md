---
title: Box Component
description: The `box` component is a versatile utility element that allows declarative control of dozens of CSS properties through HTML attributes. It serves as a "Swiss Ar
---

## Overview
The `box` component is a versatile utility element that allows declarative control of dozens of CSS properties through HTML attributes. It serves as a "Swiss Army Knife" for layouts, spacers, and custom-styled containers without requiring custom CSS.

## Public API

Use `<box>`, `[data-box]`, or `.box`. Prefer a semantic element with `data-box` or the class host when the content has a natural meaning:

```html
<article data-box p="var(--space-lg)" bg="var(--surface-subtle)">
  <h2>Account updated</h2>
  <p>Your preferences were saved.</p>
</article>
```

All three hosts accept the same attributes.

## Key Features
- **Attribute-Driven Styling**: Uses HTML attributes to control CSS properties
- **Logical Properties**: Employs modern CSS logical properties for spacing
- **CSS-valued attributes**: Uses `attr(... type(*))` so values such as `var(--space-lg)` work
- **Shared host API**: Custom element, `data-*`, and class forms behave the same way

## Supported Attributes

### Display & Layout
- `display`: Sets the display property (default: `block`)
  - Values: `block`, `flex`, `grid`, `inline`, etc.
- `gap`: Sets the gap between flex or grid children (default: `0`)

### Spacing (Logical Properties)
- `p`: Shorthand for padding (default: `0`)
- `px`: Inline (horizontal) padding override
- `py`: Block (vertical) padding override
- `m`: Shorthand for margin (default: `0`)
- `mx`: Inline (horizontal) margin override
- `my`: Block (vertical) margin override

### Sizing
- `width`: Element width (default: `auto`)
- `height`: Element height (default: `auto`)
- `max-width`: Maximum width (default: `none`)

### Appearance
- `bg`: Background color (default: `transparent`)
- `color`: Text color (default: `inherit`)
- `border`: Border property (default: `none`)
- `radius`: Border radius (default: `0`)

### Typography
- `align`: Text alignment (default: `start`)

## Usage Examples

### Basic Container
```html
<section data-box p="1rem" bg="var(--surface-subtle)" radius="0.5rem">
  Content
</section>
```

### Flex Layout
```html
<box display="flex" px="2rem" py="1rem" gap="1rem">
  <div>Item 1</div>
  <div>Item 2</div>
</box>
```

### Spacer
```html
<box height="2rem"></box>
```

### Card Component
```html
<box p="1.5rem" bg="white" border="1px solid var(--outline)" radius="0.75rem" max-width="300px">
  <h3>Card Title</h3>
  <p>Card content...</p>
</box>
```

## Technical Implementation

### attr() Function Usage
The component extensively uses the `attr()` function with type checking:

```css
--padding: attr(p type(*), 0);
```

This provides:
- **CSS value support**: Accepts literal values and custom properties
- **Fallbacks**: Default values when attributes are missing
- **Dynamic Styling**: Properties update automatically when attributes change

### Logical Properties
Uses modern logical properties for spacing:
- `padding-inline` / `padding-block` instead of `padding-left` / `padding-right`
- `margin-inline` / `margin-block` instead of `margin-left` / `margin-right`

## Browser Support
- Requires support for `attr()` with type checking (proposed in CSS Values 5)
- Modern browsers with logical properties support
- Fallback values ensure graceful degradation

## Future Features
The component includes a placeholder for elevation support:
```css
&[elevation] {
  /* @apply --elevation(attr(elevation type(<integer>))); */
}
```

## Philosophy
- **Declarative**: Style through HTML attributes, not CSS classes
- **Flexible**: Control any CSS property without custom stylesheets
- **Maintainable**: No specificity conflicts or cascade issues
- **Progressive**: Works with fallbacks in older browsers
