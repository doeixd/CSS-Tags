# Accessibility Primitives

CSS Tags treats accessibility semantics as part of the HTML API. These helpers style native behavior instead of replacing it with JavaScript.

## Skip link

Place a skip link as the first focusable element in `<body>` and point it at the page's main content. It stays visually hidden until it receives keyboard focus.

```html
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>

  <header>...</header>
  <main id="main-content" tabindex="-1">...</main>
</body>
```

The data-attribute form is equivalent:

```html
<a data-skip-link href="#main-content">Skip to content</a>
```

Only anchors are supported because a skip link is navigation. There is intentionally no custom element form. The component includes a visible focus outline, reduced-motion behavior, forced-colors support, logical positioning, and no JavaScript.

### Tokens

- `--skip-link-inset-block`
- `--skip-link-inset-inline`
- `--skip-link-padding`
- `--skip-link-background`
- `--skip-link-color`
- `--skip-link-border`
- `--skip-link-radius`
- `--skip-link-shadow`
- `--skip-link-font-weight`
- `--skip-link-z-index`
- `--skip-link-duration`
- `--skip-link-focus-outline`
- `--skip-link-focus-offset`

```css
:root {
  --skip-link-background: #111827;
  --skip-link-color: white;
  --skip-link-radius: 999px;
  --skip-link-shadow: none;
}
```

## Main target behavior

Use a stable `id` on the main landmark. `tabindex="-1"` makes the target programmatically focusable in browsers that move focus when following the fragment, without adding it to the normal Tab order.
