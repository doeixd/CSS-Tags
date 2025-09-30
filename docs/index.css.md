# Main Entry Point (`index.css`)

This file serves as the main entry point for the CSS framework, importing all modules in the correct cascade order using CSS cascade layers.

## Overview

`index.css` is the single file to import for full framework functionality. It uses `@layer` to define import precedence and ensure predictable CSS cascading.

## Cascade Layers

The framework uses 10 cascade layers in order of precedence (lowest to highest):

1. **base**: Foundational styles and mixins
2. **reset**: CSS reset using `:where()` for zero specificity
3. **tokens**: Design token definitions
4. **engine**: Calculation engine for derived values
5. **theme**: Theme-specific overrides
6. **palette**: Color palette generation
7. **defaults**: Component default styles
8. **components**: UI component styles
9. **utilities**: Utility class system
10. **layouts**: Layout component styles

## Import Structure

### Core System
```css
@import url("core/reset.css") layer(reset);
@import url("core/tokens.css") layer(tokens);
@import url("core/engine.css") layer(engine);
@import url("core/theme.css") layer(theme);
@import url("core/palette.css") layer(palette);
@import url("core/defaults.css") layer(defaults);
@import url('core/base.css') layer(base);
@import url('core/mixins.css') layer(base);
```

### Themes
```css
@import url("themes/theme-packs.css") layer(theme);
@import url("themes/example-brand.css") layer(theme);
```

### Layouts & Utilities
```css
@import url("utilities/utilities.css") layer(utilities);
@import url("layouts/layout.css") layer(layouts);
@import url("layouts/layout-extra.css") layer(layouts);
@import url("layouts/layout-extras-helpers.css") layer(layouts);
```

### Components
```css
@import url('components/container.css') layer(components);
@import url('components/grid.css') layer(components);
@import url('components/flex.css') layer(components);
@import url('components/card.css') layer(components);
@import url('components/box.css') layer(components);
@import url('components/box-extra.css') layer(components);
@import url('components/badge.css') layer(components);
@import url('components/chip.css') layer(components);
@import url('components/alert.css') layer(components);
@import url('components/modal.css') layer(components);
@import url('components/tooltip.css') layer(components);
@import url('components/tooltips.css') layer(components);
@import url('components/list.css') layer(components);
@import url('components/carousel.css') layer(components);
@import url('components/popover.css') layer(components);
@import url('components/view-transition.css') layer(components);
@import url('components/table.css') layer(components);
@import url('components/form.css') layer(components);
@import url('components/navigation.css') layer(components);
@import url('components/masonry.css') layer(components);
```

## Key Features

- **Zero-Specificity Reset**: Uses `:where()` for reset rules that can be easily overridden
- **Modern Color System**: OKLCH color space with automatic contrast calculation
- **Design Token System**: Comprehensive tokens for spacing, colors, typography
- **Theme Engine**: Built-in dark mode and brand theme support
- **Utility-First**: Extensive utility classes for rapid development
- **Layout Primitives**: Declarative layout components
- **Accessibility**: Enhanced focus states and high contrast support

## Usage

Import this single file in your HTML:

```html
<link rel="stylesheet" href="path/to/index.css">
```

Or in another CSS file:

```css
@import "path/to/index.css";
```

## Import Order Rationale

The import order ensures proper cascading:

1. **Base/Reset**: Establish foundation
2. **Tokens/Engine**: Define design system
3. **Theme/Palette**: Apply color theming
4. **Defaults**: Set component foundations
5. **Components**: Apply component styles
6. **Utilities/Layouts**: Add utilities and layouts (highest precedence)

## Customization

To customize:

1. Override tokens in `core/tokens.css`
2. Add themes in `themes/`
3. Extend components in `components/`
4. Add utilities in `utilities/`

## Browser Support

- Modern browsers with CSS cascade layers support
- OKLCH color space (progressive enhancement for older browsers)
- Container queries for responsive layouts
- CSS custom properties throughout

## Related Files

- `core/base.css`: Base styles and mixins
- `core/reset.css`: CSS reset implementation
- `core/tokens.css`: Design token definitions
- All imported files in their respective directories