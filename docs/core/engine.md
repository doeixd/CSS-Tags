# Engine Core Documentation

## Overview
The `engine.css` file provides the mathematical foundation for the design system's color and spacing calculations. It defines delta values for lightness and chroma adjustments that enable systematic color scaling and theming.

## Key Features
- **Lightness Scale**: 15-step lightness delta values (0-14)
- **Chroma Scale**: 11-step chroma delta values (0-10)
- **Bidirectional Deltas**: Both positive and negative adjustments
- **Percentage-Based**: Relative adjustments for consistent scaling
- **CSS Calculations**: Pure CSS math for dynamic theming

## Lightness Delta System

### Positive Deltas (Lighter)
```css
--l-delta-0: calc(0 / 100);    /* 0% */
--l-delta-1: calc(2 / 100);    /* 2% */
--l-delta-2: calc(4 / 100);    /* 4% */
--l-delta-3: calc(7 / 100);    /* 7% */
--l-delta-4: calc(10 / 100);   /* 10% */
--l-delta-5: calc(14 / 100);   /* 14% */
--l-delta-6: calc(19 / 100);   /* 19% */
--l-delta-7: calc(25 / 100);   /* 25% */
--l-delta-8: calc(32 / 100);   /* 32% */
--l-delta-9: calc(40 / 100);   /* 40% */
--l-delta-10: calc(50 / 100);  /* 50% */
--l-delta-11: calc(60 / 100);  /* 60% */
--l-delta-12: calc(70 / 100);  /* 70% */
--l-delta-13: calc(80 / 100);  /* 80% */
--l-delta-14: calc(90 / 100);  /* 90% */
```

### Negative Deltas (Darker)
```css
--l-delta-0-down: calc(-1 * var(--l-delta-0));   /* 0% */
--l-delta-1-down: calc(-1 * var(--l-delta-1));   /* -2% */
--l-delta-2-down: calc(-1 * var(--l-delta-2));   /* -4% */
/* ... continuing to --l-delta-14-down */
```

## Chroma Delta System

### Positive Deltas (More Saturated)
```css
--c-delta-0: calc(0 / 100);    /* 0% */
--c-delta-1: calc(10 / 100);   /* 10% */
--c-delta-2: calc(20 / 100);   /* 20% */
--c-delta-3: calc(30 / 100);   /* 30% */
--c-delta-4: calc(40 / 100);   /* 40% */
--c-delta-5: calc(50 / 100);   /* 50% */
--c-delta-6: calc(60 / 100);   /* 60% */
--c-delta-7: calc(70 / 100);   /* 70% */
--c-delta-8: calc(80 / 100);   /* 80% */
--c-delta-9: calc(90 / 100);   /* 90% */
--c-delta-10: calc(100 / 100); /* 100% */
```

### Negative Deltas (Less Saturated)
```css
--c-delta-0-down: calc(-1 * var(--c-delta-0));   /* 0% */
--c-delta-1-down: calc(-1 * var(--c-delta-1));   /* -10% */
/* ... continuing to --c-delta-10-down */
```

## Usage in Color Calculations

### Lightness Adjustments
```css
/* Make background slightly lighter on hover */
.my-element:hover {
  --bg: oklch(from var(--bg) calc(l + var(--l-delta-1)) c h);
}

/* Make border slightly darker on active */
.my-element:active {
  --border: oklch(from var(--border) calc(l + var(--l-delta-1-down)) c h);
}
```

### Chroma Adjustments
```css
/* Increase saturation for emphasis */
.emphasized {
  --accent: oklch(from var(--accent) l calc(c + var(--c-delta-2)) h);
}

/* Decrease saturation for muted state */
.muted {
  --surface: oklch(from var(--surface) l calc(c + var(--c-delta-1-down)) h);
}
```

## Design System Benefits

### Consistent Scaling
- **Predictable Steps**: Each delta represents a meaningful visual change
- **Harmonious Ratios**: Percentages chosen for perceptual uniformity
- **Flexible Application**: Can be combined for complex adjustments

### Color Scale Generation
```css
/* Generate a 15-step lightness scale */
--color-step-0: oklch(from var(--base-color) calc(l + var(--l-delta-0)) c h);
--color-step-1: oklch(from var(--base-color) calc(l + var(--l-delta-1)) c h);
/* ... up to --color-step-14 */
```

### Interactive States
```css
.button {
  --bg: var(--surface-default);
  transition: --bg 0.15s ease;
}

.button:hover {
  --bg: oklch(from var(--surface-default) calc(l + var(--l-delta-1)) c h);
}

.button:active {
  --bg: oklch(from var(--surface-default) calc(l + var(--l-delta-2-down)) c h);
}
```

## Integration with Mixins

### State Adjustment Mixin
The engine powers the `--state-adjust` mixin:
```css
@mixin --state-adjust {
  &:hover:not([disabled]) {
    --bg: oklch(from var(--bg) calc(l + var(--l-delta-1)) c h);
    --border: oklch(from var(--border) calc(l + var(--l-delta-1)) c h);
  }
  &:active:not([disabled]) {
    --bg: oklch(from var(--bg) calc(l + var(--l-delta-1-down)) c h);
    --border: oklch(from var(--border) calc(c + var(--c-delta-1)) l h);
  }
}
```

### Surface Role System
```css
@mixin --surface-role(--role) {
  @when (var(--role) = subtle) {
    --bg: oklch(from var(--base) calc(l + var(--l-delta-2)) c h);
    --border: oklch(from var(--base) calc(l + var(--l-delta-4)) c h);
  }
  /* ... other roles */
}
```

## Mathematical Foundation

### Lightness Scale Rationale
The percentages are chosen to create perceptually uniform steps:
- **Small steps (0-3)**: 0%, 2%, 4%, 7% - For subtle adjustments
- **Medium steps (4-7)**: 10%, 14%, 19%, 25% - For noticeable changes
- **Large steps (8-14)**: 32%, 40%, 50%, 60%, 70%, 80%, 90% - For strong contrasts

### Chroma Scale Rationale
Chroma adjustments are more aggressive since saturation changes are more noticeable:
- **10% increments**: Provides 11 levels from 0% to 100%
- **Bidirectional**: Allows both saturation increase and decrease
- **Conservative**: Smaller steps might be too subtle

## Browser Support
- **CSS Calculations**: All modern browsers
- **OKLCH Color**: Chrome 111+, Firefox 113+, Safari 15.4+
- **Custom Properties**: All modern browsers
- **Fallback**: Basic colors work without calculations

## Performance Considerations
- **CSS Calculations**: Computed at parse time, no runtime performance impact
- **Memory Efficient**: Single definitions used across many applications
- **Cascade Friendly**: Variables resolve efficiently in the cascade

## Extension Possibilities
The delta system can be extended for:
- **Hue adjustments**: Angular deltas for color shifting
- **Alpha transparency**: Opacity delta scales
- **Size scaling**: Dimension adjustment deltas
- **Animation easing**: Time-based delta calculations

## Best Practices
- **Use Relative Adjustments**: Always adjust from current values
- **Test Across Themes**: Deltas behave differently in light/dark themes
- **Combine Carefully**: Multiple deltas can create unexpected results
- **Document Usage**: Comment complex color calculations for maintainability