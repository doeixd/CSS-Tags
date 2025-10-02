# Text Core Documentation

## Overview
The `text.css` file provides a declarative typography component that allows controlling text styles like size, weight, color, and alignment directly from HTML attributes. It integrates deeply with the library's design token system for consistent theming.

## Key Features
- **Attribute-Based Styling**: Control typography via HTML attributes (e.g., `size="lg"`, `color="muted"`)
- **Design Token Integration**: Maps attributes to CSS variables from theme and token layers
- **Auto-Contrast**: `contrast` attribute calculates readable text color against parent background
- **Text Truncation**: Supports single-line (`truncate`) and multi-line (`lines="..."`) truncation
- **Modern CSS**: Uses `attr()` function and CSS variables for dynamic styling

## Basic Usage
```html
<text size="lg" weight="bold" color="accent">Large bold accent text</text>
<text truncate>Single-line truncated text</text>
<text lines="3">Multi-line truncated text</text>
<text contrast>Auto-contrast text</text>
```

## Attributes

### Size Variants
Control font size using the `size` attribute:
- `size="xs"` - Extra small
- `size="sm"` - Small
- `size="base"` - Base (default)
- `size="lg"` - Large
- `size="xl"` - Extra large
- `size="2xl"` - 2X large
- `size="3xl"` - 3X large
- `size="4xl"` - 4X large

### Weight Variants
Control font weight using the `weight` attribute:
- `weight="thin"` - Thin weight
- `weight="light"` - Light weight
- `weight="normal"` - Normal weight (default)
- `weight="medium"` - Medium weight
- `weight="semibold"` - Semibold weight
- `weight="bold"` - Bold weight
- `weight="black"` - Black weight

### Color Variants
Control text color using the `color` attribute:

**Text Roles:**
- `color="muted"` - Muted text
- `color="subtle"` - Subtle text
- `color="default"` - Default text (default)
- `color="overt"` - Overt text
- `color="link"` - Link text

**Accent & Brand Colors:**
- `color="accent"` - Accent color
- `color="secondary"` - Secondary color
- `color="tertiary"` - Tertiary color

**Feedback Colors:**
- `color="success"` - Success text
- `color="warning"` - Warning text
- `color="error"` - Error text
- `color="info"` - Info text

### Line Height Variants
Control line height using the `leading` attribute:
- `leading="none"` - No line height
- `leading="tight"` - Tight line height
- `leading="snug"` - Snug line height
- `leading="normal"` - Normal line height (default)
- `leading="relaxed"` - Relaxed line height
- `leading="loose"` - Loose line height

### Text Alignment
Control text alignment using the `align` attribute:
- `align="start"` - Start alignment (default)
- `align="center"` - Center alignment
- `align="end"` - End alignment
- `align="justify"` - Justified alignment

### Text Transform
Control text transformation using the `transform` attribute:
- `transform="none"` - No transformation (default)
- `transform="capitalize"` - Capitalize
- `transform="uppercase"` - Uppercase
- `transform="lowercase"` - Lowercase

### Font Style
Control font style using the `style` attribute:
- `style="normal"` - Normal style (default)
- `style="italic"` - Italic style

### Text Wrapping
Control text wrapping using the `wrap` attribute:
- `wrap="balance"` - Balanced wrapping (default)
- `wrap="wrap"` - Normal wrapping
- `wrap="nowrap"` - No wrapping
- `wrap="pretty"` - Pretty wrapping

## Special Features

### Auto-Contrast
The `contrast` attribute automatically calculates the most readable text color against the parent's background:
```html
<div style="--bg: black;">
  <text contrast>This text will be white for readability</text>
</div>
```

### Text Truncation
**Single-line truncation:**
```html
<text truncate>Very long text that will be truncated with ellipsis</text>
```

**Multi-line truncation:**
```html
<text lines="3">Long text that will be truncated after 3 lines with ellipsis</text>
```
Supported line counts: 2, 3, 4, 5

## CSS Variables
The component uses local CSS variables that map to global tokens:
- `--_fs` → `--font-size-*` tokens
- `--_fw` → `--font-weight-*` tokens
- `--_color` → `--text-*` and color tokens
- `--_lh` → `--line-height-*` tokens

## Integration with Design System
- **Tokens Layer**: Provides raw font size, weight, and color values
- **Theme Layer**: Defines semantic color roles
- **Defaults Layer**: Sets base typography styles
- **Components Layer**: Uses text component for consistent typography

## Browser Support
- **attr() Function**: Chrome 111+, Firefox 126+, Safari 17.4+
- **CSS Variables**: All modern browsers
- **Line Clamp**: Chrome 6+, Firefox 68+, Safari 5.1+
- **Fallback**: Graceful degradation in older browsers

## Usage Notes
- **Semantic HTML**: Use appropriate heading elements when possible
- **Accessibility**: Ensure sufficient color contrast
- **Performance**: Attribute-based styling is efficient and performant
- **Customization**: Override CSS variables for theme customization