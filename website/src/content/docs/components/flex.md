---
title: Flex Component
description: The `flex` component provides a declarative way to create flexible one-dimensional layouts using CSS Flexbox. It allows configuration of flex container properti
---

## Overview
The `flex` component provides a declarative way to create flexible one-dimensional layouts using CSS Flexbox. It allows configuration of flex container properties and individual item properties through HTML attributes.

## Key Features
- **Declarative API**: Configure flex properties via HTML attributes
- **Item-Level Control**: Individual flex items can have their own attributes
- **CSS Nesting**: Organized styles for container and items
- **Type-Safe Attributes**: Uses `attr()` with type checking

## Container Attributes

### Layout Direction
- `direction`: Flex direction (default: `row`)
  - Values: `row`, `row-reverse`, `column`, `column-reverse`

### Wrapping
- `wrap`: Flex wrap behavior (default: `nowrap`)
  - Values: `nowrap`, `wrap`, `wrap-reverse`

### Content Justification
- `justify`: Justify-content alignment (default: `flex-start`)
  - Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`

### Item Alignment
- `align`: Align-items alignment (default: `stretch`)
  - Values: `stretch`, `flex-start`, `flex-end`, `center`, `baseline`

### Spacing
- `gap`: Gap between flex items (default: `1.5rem`)

## Item Attributes (Applied to Direct Children)

### Sizing
- `grow`: Flex-grow factor (default: `0`)
- `shrink`: Flex-shrink factor (default: `1`)
- `basis`: Flex-basis value (default: `auto`)

### Ordering
- `order`: Flex order (default: `0`)

### Self Alignment
- `align-self`: Individual item alignment (default: `auto`)
  - Values: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`

## Usage Examples

### Basic Horizontal Layout
```html
<flex>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</flex>
```

### Centered Content
```html
<flex justify="center" align="center">
  <div>Centered Item</div>
</flex>
```

### Space Between Items
```html
<flex justify="space-between">
  <div>Left</div>
  <div>Right</div>
</flex>
```

### Vertical Layout with Gaps
```html
<flex direction="column" gap="2rem">
  <div>Top</div>
  <div>Middle</div>
  <div>Bottom</div>
</flex>
```

### Item-Level Control
```html
<flex>
  <div grow="1">Flexible Item</div>
  <div shrink="0" basis="200px">Fixed Width</div>
  <div order="-1">First Item</div>
</flex>
```

## CSS Implementation

### Container Styles
```css
flex {
  display: flex;
  flex-direction: var(--flex-direction);
  /* ... other properties */
}
```

### Item Styles
```css
flex > * {
  flex-grow: attr(grow type(<number>), 0);
  /* ... other properties */
}
```

## Future Features
The component includes a placeholder for theme integration:
```css
&[theme="brand"] {
  /* @apply --theme-colors(...) */
}
```

## Browser Support
- All modern browsers supporting CSS Flexbox
- `attr()` with type checking: Limited support (graceful fallbacks)
- CSS Nesting: Modern browsers

## Use Cases
- **Navigation Bars**: Horizontal menus with equal spacing
- **Card Layouts**: Flexible card arrangements
- **Form Controls**: Button groups and input layouts
- **Content Grids**: Simple responsive layouts
- **Component Building**: Internal layout of complex components