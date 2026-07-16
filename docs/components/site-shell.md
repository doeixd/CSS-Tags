# Site Header and Footer

CSS Tags provides page-level header and footer surfaces that compose the
existing container, navigation, layout, action, and typography primitives.
Native `header` and `footer` elements are canonical.

## Site header

```html
<header class="site-header" data-sticky>
  <container>
    <a data-site-brand href="/">CSS Tags</a>

    <nav data-header-navigation aria-label="Primary">
      <layout-cluster gap="var(--space-md)">
        <a href="/docs/">Docs</a>
        <a href="/examples/">Examples</a>
      </layout-cluster>
    </nav>

    <div data-header-actions>
      <button type="button">Theme</button>
    </div>
  </container>
</header>
```

Supported hosts:

```html
<header class="site-header">...</header>
<header data-site-header>...</header>
<site-header role="banner">...</site-header>
```

Use `data-sticky`, `sticky`, or `.is-sticky` for sticky positioning. Elevation
is deliberately opt-in through `data-elevated`, `elevated`, or `.is-elevated`.
Use `data-size="compact"`, `compact`, or `.is-compact` for dense shells.

At narrow container widths the navigation region wraps below the brand and
actions. This is a presentation change only; hiding navigation behind a menu
requires an accessible disclosure, popover, or dialog enhancement.

### Header tokens

- `--site-header-min-height`
- `--site-header-compact-min-height`
- `--site-header-padding-block`
- `--site-header-padding-inline`
- `--site-header-gap`
- `--site-header-actions-gap`
- `--site-header-brand-gap`
- `--site-header-brand-font-size`
- `--site-header-brand-font-weight`
- `--site-header-background`
- `--site-header-color`
- `--site-header-brand-color`
- `--site-header-border`
- `--site-header-shadow`
- `--site-header-sticky-offset`
- `--site-header-z-index`

## Site footer

```html
<footer data-site-footer data-bordered>
  <container>
    <div data-footer-grid>
      <section>
        <h2>Product</h2>
        <nav aria-label="Product"><a href="/docs/">Docs</a></nav>
      </section>
      <section>
        <h2>Community</h2>
        <nav aria-label="Community"><a href="/github/">GitHub</a></nav>
      </section>
    </div>

    <div data-footer-meta>
      <span>CSS Tags</span>
      <span>Built with semantic CSS</span>
    </div>
  </container>
</footer>
```

Supported hosts:

```html
<footer class="site-footer">...</footer>
<footer data-site-footer>...</footer>
<site-footer role="contentinfo">...</site-footer>
```

Use `data-bordered`, `bordered`, or `.is-bordered` for the outer divider;
`data-size="compact"`, `compact`, or `.is-compact` for reduced spacing; and
`data-align="center"`, `centered`, or `.is-centered` for centered content.

### Footer tokens

- `--site-footer-padding-block`
- `--site-footer-padding-inline`
- `--site-footer-gap`
- `--site-footer-grid-gap`
- `--site-footer-column-min`
- `--site-footer-meta-gap`
- `--site-footer-meta-padding-block-start`
- `--site-footer-background`
- `--site-footer-color`
- `--site-footer-meta-color`
- `--site-footer-meta-font-size`
- `--site-footer-border`
- `--site-footer-meta-border`

## Accessibility

- Prefer native `header` and `footer` landmarks.
- Add `role="banner"` or `role="contentinfo"` when using custom hosts.
- Give every navigation landmark a distinct accessible label.
- Keep navigation available without JavaScript; menu behavior is progressive
  enhancement.
- The surfaces include logical safe-area spacing and forced-colors borders.
