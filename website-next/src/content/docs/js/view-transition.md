---
title: View Transitions JavaScript
description: Scope same-document view switching, history, focus, and native View Transition enhancement to each router.
---

`view-transition.js` enhances the CSS hash-link router. It is not required for cross-document transitions.

## Setup

```html
<div data-view-transitions>
  <nav aria-label="Account views">
    <a data-view-trigger href="#profile">Profile</a>
    <a data-view-trigger href="#security">Security</a>
  </nav>

  <section data-view-page id="profile" active>
    <h2>Profile</h2>
  </section>

  <section data-view-page id="security">
    <h2>Security</h2>
  </section>
</div>

<script type="module" src="/view-transition.js"></script>
```

Each router manages only its own pages and triggers. Multiple routers can coexist without toggling one another's content.

## Supported hosts

- Router: `view-transitions`, `view-transition`, `[data-view-transitions]`, `.view-transitions`
- Page: `view-page`, `[data-view-page]`, `.view-page`
- Trigger: `nav-trigger`, `[data-view-trigger]`, `.view-trigger`

Triggers resolve their target from `to="page-id"` or a hash `href="#page-id"`. Prefer native hash links.

## Behavior

On activation, the enhancement:

1. Marks one page `active`.
2. Updates matching triggers with `aria-current="page"`.
3. Adds a hash history entry.
4. Uses `document.startViewTransition()` when supported and motion is allowed.
5. Focuses the new page after the transition update callback.

Back and forward navigation resynchronizes the active view from the URL hash. Unsupported browsers and reduced-motion users receive the same update without animation.

## Programmatic initialization

The module initializes document routers automatically and exports its initializer for content rendered later:

```js
import { initializeViewTransitions } from "/view-transition.js";

initializeViewTransitions(document.querySelector("#new-content"));
```

Initialization is idempotent; routers already enhanced are skipped.

## Custom elements

The optional custom trigger remains supported:

```html
<nav-trigger to="profile" role="link" tabindex="0">Profile</nav-trigger>
```

The enhancement supplies Enter and Space handling for this host, but native `<a>` and `<button>` elements remain preferable because their semantics work before JavaScript.
