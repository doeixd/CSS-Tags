# API Reference (`API.md`)

This file serves as the comprehensive API reference for the CSS framework's layout primitives. It provides detailed documentation for all custom element layout components.

## Overview

`API.md` contains complete API documentation for each layout component, including:

- **Properties**: CSS custom properties that control behavior
- **Attributes**: HTML attributes for configuration
- **Examples**: Code examples showing usage
- **Defaults**: Token-based default values

## Documented Components

The API reference covers all major layout components:

### Grid-Based Layouts
- `<layout-grid>`: Responsive grid with auto-fitting columns
- `<layout-split>`: Two-column layout with responsive stacking

### Flexbox-Based Layouts
- `<layout-stack>`: Vertical stacking with alignment
- `<layout-cluster>`: Wrapping item groups
- `<layout-reel>`: Horizontal scrolling containers
- `<layout-switcher>`: Adaptive stack-to-row switching

### Wrapper & Centering Layouts
- `<layout-pad>`: Consistent padding containers
- `<layout-center>`: Centered content with max-width
- `<layout-frame>`: Aspect ratio media containers

### Complex Layout Patterns
- `<layout-sidebar>`: Responsive sidebar layouts
- `<layout-page>`: Standard page structure (header/main/footer)

## Structure

Each component section includes:

1. **Brief Description**: What the component does
2. **Properties**: Custom properties with defaults
3. **Attributes**: HTML attributes with types and examples
4. **Example**: Complete HTML usage example

## Key Features

- **Property-Driven**: Components use CSS custom properties for configuration
- **Attribute Overrides**: HTML attributes provide convenient overrides
- **Token Integration**: Defaults pull from global design tokens
- **Declarative**: Semantic HTML elements instead of classes

## Usage

This file is the primary reference for developers implementing layout components. Use it alongside the demo files and component-specific documentation in `docs/components/` and `docs/layouts/`.

## Integration Notes

- Components are documented in the order they appear in `layouts/layout.css`
- Examples use realistic HTML structure
- All properties and attributes are optional with sensible defaults
- Components work together and can be nested

## Related Files

- `layouts/layout.css`: Implementation of these components
- `docs/layouts/layout.md`: Detailed component documentation
- `examples/demo.html`: Interactive examples
- `core/base.css`: Defines the tokens used as defaults