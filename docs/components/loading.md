# Loading States Documentation

## Overview
The loading system provides token-driven spinners and skeleton placeholders using semantic selectors instead of framework-specific wrappers.

## Spinner
Use `aria-busy="true"` on any element to show a loading spinner.

```html
<div aria-busy="true" data-spinner="small"></div>
<div aria-busy="true"></div>
<div aria-busy="true" data-spinner="large"></div>
<button aria-busy="true" data-spinner="small" disabled>Loading</button>
```

### Spinner Variants
- default: medium spinner
- `data-spinner="small"`
- `data-spinner="large"`
- `data-spinner="overlay"`

### Overlay Spinner
`data-spinner="overlay"` dims the host contents and overlays the spinner on top.

```html
<article aria-busy="true" data-spinner="overlay">
  <h3>Card Title</h3>
  <p>This content is dimmed while the spinner overlays the container.</p>
</article>
```

## Skeleton
Use `.skeleton` or `[data-skeleton]` for loading placeholders.

```html
<article class="skeleton" role="status" aria-label="Loading card">
  <div class="skeleton box"></div>
  <div class="skeleton line" style="width: 60%;"></div>
  <div class="skeleton line"></div>
</article>
```

### Skeleton Helpers
- `.line`: text-row placeholder
- `.box`: media/image placeholder

## Tokens
- `--spinner-size`
- `--spinner-size-small`
- `--spinner-size-large`
- `--spinner-stroke-width`
- `--spinner-speed`
- `--spinner-color`
- `--spinner-track-color`
- `--spinner-overlay-backdrop`
- `--spinner-overlay-blur`
- `--skeleton-background`
- `--skeleton-highlight`
- `--skeleton-radius`
- `--skeleton-shimmer-duration`

## Accessibility
- Use `aria-busy="true"` for loading state semantics.
- Use `role="status"` and a label for skeleton placeholders when they represent async content.
- Reduced motion disables spinner rotation and shimmer animations.
