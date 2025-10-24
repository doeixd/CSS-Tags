---
title: List Component
description: The `list` component provides flexible, styleable list layouts with support for custom markers, icons, and dividers. It can display as vertical lists or inline 
---

## Overview
The `list` component provides flexible, styleable list layouts with support for custom markers, icons, and dividers. It can display as vertical lists or inline horizontal arrangements.

## Key Features
- **Flexible Layout**: Vertical or inline horizontal display
- **Custom Markers**: Styleable list item markers with `::marker`
- **Icon Support**: Custom icons using CSS masks
- **Dividers**: Optional separator lines between items
- **Logical Properties**: RTL-friendly positioning

## Structure
- `list`: Main container
- `list-item`: Individual list items
- `list-divider`: Separator elements

## Attributes

### Container Attributes
- `padding`: Padding for the list (default: `0`)
- `margin`: Margin for the list (default: `0`)
- `gap`: Gap between items (default: `var(--l-gap, 0.5rem)`)
- `indent`: Left padding for marker positioning (default: `1.5rem`)
- `inline`: Changes to horizontal flex layout with no markers

### Item Attributes
- `marker-color`: Color of the default bullet marker
- `type`: Content for the marker (default: `'•'`)

### Icon Attributes (for `list-item[icon]`)
- `icon`: URL of the icon image
- `icon-size`: Size of the icon (default: `1.2em`)
- `icon-color`: Color of the icon (applied via background-color)

### Divider Attributes
- `gap`: Margin around the divider (default: `0.5rem`)

## Usage Examples

### Basic Vertical List
```html
<list>
  <list-item>First item</list-item>
  <list-item>Second item</list-item>
  <list-item>Third item</list-item>
</list>
```

### Inline List
```html
<list inline>
  <list-item>Home</list-item>
  <list-item>About</list-item>
  <list-item>Contact</list-item>
</list>
```

### Custom Markers
```html
<list>
  <list-item marker-color="red" type="→">Important</list-item>
  <list-item marker-color="green" type="✓">Completed</list-item>
</list>
```

### With Icons
```html
<list>
  <list-item icon="check.svg" icon-color="green">Task completed</list-item>
  <list-item icon="warning.svg" icon-color="orange">Warning</list-item>
</list>
```

### With Dividers
```html
<list>
  <list-item>Section 1</list-item>
  <list-divider></list-divider>
  <list-item>Section 2</list-item>
</list>
```

## Styling Details

### Vertical Layout
- **Display**: Flex column
- **Gap**: Configurable spacing between items
- **Indent**: Left padding for marker positioning
- **List Style**: Outside positioning

### Inline Layout
- **Display**: Flex row with wrapping
- **No Markers**: `list-style: none`
- **No Indent**: `padding-inline-start: 0`

### Markers
- **::marker Pseudo-element**: Styles the bullet or custom marker
- **Color**: Customizable via `marker-color`
- **Content**: Customizable via `type` attribute

### Icons
- **CSS Masks**: Uses `mask-image` for scalable icons
- **Positioning**: Absolutely positioned at start of item
- **Sizing**: Configurable via `icon-size`
- **Coloring**: Applied via `background-color` (mask shows through)

### Dividers
- **Appearance**: Thin horizontal line
- **Color**: Semi-transparent text color
- **Height**: 1px
- **Margins**: Configurable via `gap` attribute

## CSS Implementation

### Container Styles
```css
list {
  display: flex;
  flex-direction: column;
  gap: attr(gap type(<length>), var(--l-gap, 0.5rem));
  padding-inline-start: attr(indent type(<length>), 1.5rem);
}
```

### Inline Variant
```css
&[inline] {
  flex-direction: row;
  flex-wrap: wrap;
  padding-inline-start: 0;
  list-style: none;
}
```

### Item Markers
```css
& > list-item::marker {
  color: attr(marker-color type(<color>), var(--theme-primary));
  content: attr(type type(*), '•') ' ';
}
```

### Icon Items
```css
&[icon] {
  list-style: none;
  padding-inline-start: calc(attr(icon-size type(<length>), 1.2em) + 0.5rem);

  &::before {
    mask-image: url(attr(icon type(<url>)));
    background-color: attr(icon-color type(<color>), var(--theme-primary));
  }
}
```

## Browser Support
- **CSS Nesting**: Modern browsers
- **::marker**: Firefox 68+, Chrome 86+, Safari 11.1+
- **CSS Masks**: All modern browsers
- **Logical Properties**: Modern browsers
- **attr() with types**: Limited support (graceful fallbacks)

## Use Cases
- **Navigation Menus**: Inline horizontal lists
- **Feature Lists**: Vertical lists with custom markers
- **Task Lists**: Items with checkmark icons
- **Content Sections**: Lists with dividers between sections
- **Status Lists**: Items with colored markers or icons