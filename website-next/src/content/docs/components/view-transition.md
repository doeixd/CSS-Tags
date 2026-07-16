---
title: View Transitions
description: Progressive same-document and cross-document transitions with semantic hash-link fallbacks.
---

The stylesheet supplies tokenized root animations and an optional view-router presentation layer. Browsers without the View Transitions API still receive immediate state changes.

## Cross-document navigation

Opt both same-origin documents into navigation transitions with the CSS at-rule:

```css
@view-transition {
  navigation: auto;
}
```

Then use ordinary links. No router JavaScript is required.

```html
<a href="/products/42">View product</a>
```

The root animation uses:

- `--view-transition-duration`, default `180ms`
- `--view-transition-easing`
- `--view-transition-hero-easing`

The animation is removed when the user prefers reduced motion.

## Same-document views

Use `view-transitions`, `view-transition`, `[data-view-transitions]`, or `.view-transitions` for the router host. Pages support `view-page`, `[data-view-page]`, and `.view-page`.

The semantic data-host form uses native hash links and sections:

```html
<div data-view-transitions>
  <nav aria-label="Dashboard views">
    <a data-view-trigger href="#summary">Summary</a>
    <a data-view-trigger href="#activity">Activity</a>
  </nav>

  <section data-view-page id="summary" active>
    <h2>Summary</h2>
    <p>12 open tasks.</p>
  </section>

  <section data-view-page id="activity">
    <h2>Activity</h2>
    <p>Recent project changes.</p>
  </section>
</div>
```

Without JavaScript, the hash target becomes visible through `:target`. Keep one page marked `active` as the server-rendered initial view.

Add the enhancement for animated updates, history synchronization, current-link state, and focus movement:

```html
<script type="module" src="/view-transition.js"></script>
```

## Shared elements

Set `view-transition-name` in CSS on an element present in both states:

```css
.profile-avatar {
  view-transition-name: profile-avatar;
}
```

Names must be unique within the rendered state. The property is CSS; `view-transition-name` is not an HTML attribute.

The shipped `hero-element` group receives the shared hero easing:

```css
.product-image {
  view-transition-name: hero-element;
}
```

For other names, style the matching pseudo-element directly:

```css
::view-transition-group(profile-avatar) {
  animation-timing-function: var(--view-transition-hero-easing);
}
```

## Accessibility

Use native links or buttons for triggers. Hash links provide the strongest no-JavaScript fallback. The enhancement adds `aria-current="page"` to the active trigger and `aria-controls` when it is absent.

Give view pages meaningful headings. The script focuses the activated page with `tabindex="-1"` after its DOM update, including after the View Transition callback completes.
