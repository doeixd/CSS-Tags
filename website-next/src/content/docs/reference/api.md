---
title: Public API Overview
description: The host, attribute, state, and customization conventions shared across CSS Tags.
---

CSS Tags is a CSS API, so its public contract is expressed through selectors,
semantic attributes, and custom properties. Component pages document the exact
hooks; this page explains how those hooks fit together.

## Three practical host forms

Opt-in visual primitives support these forms when the underlying HTML semantics
allow it:

```html
<card>Custom-element host</card>
<article data-card>Data-attribute host</article>
<article class="card">Class host</article>
```

Choose the semantic native element first. A custom tag is useful for terse
prototypes, while data and class hosts fit validators, CMS output, and existing
markup. A component page calls out any form it cannot support.

## Native behavior stays native

Controls and browser features keep their platform elements:

```html
<button class="form-button btn-primary">Save</button>

<details>
  <summary>Advanced options</summary>
  <p>Native disclosure behavior, styled by the library.</p>
</details>

<dialog data-modal aria-labelledby="confirm-title">
  <h2 id="confirm-title">Confirm deletion</h2>
</dialog>
```

Forms use native `input`, `select`, `textarea`, and `button` elements. Modals use
`dialog`; popovers use the Popover API; loading uses `aria-busy`; switches use
`role="switch"`; tabs use the ARIA tab roles. CSS Tags styles these contracts
instead of replacing their semantics.

## State is part of the API

Prefer the attribute that already communicates the state:

```html
<button aria-busy="true">Saving</button>
<input aria-invalid="true" aria-describedby="email-error">
<badge status="success">Published</badge>
<button aria-disabled="true">Unavailable</button>
```

Visual-only variants use documented `variant`, `size`, or component-specific
attributes. State classes are retained where there is no matching platform
state, but they do not add ARIA semantics for you.

## Tokens are the customization boundary

Components resolve from specific variables to shared semantic tokens:

```css
.billing-card {
  --card-background: var(--surface-subtle);
  --card-border-color: var(--outline-subtle);
  --card-radius: var(--radius-lg);
}

.danger-zone {
  --button-variant-background: var(--error);
  --button-variant-color: var(--text-on-error);
}
```

Set root or theme tokens for system-wide changes. Set component tokens on a
container or instance for local changes. Generic surface aliases such as `--bg`
are propagated by components so nested content can inherit a useful context;
prefer the named component token when directly theming that component.

## API groups

- [Defaults](/CSS-Tags/core/defaults/) and [Typography](/CSS-Tags/core/typography/)
  cover semantic HTML and rich content.
- [Form controls](/CSS-Tags/components/form/) preserve native control behavior.
- [Cards](/CSS-Tags/components/card/), [badges](/CSS-Tags/components/badge/),
  [alerts](/CSS-Tags/components/alert/), and [tables](/CSS-Tags/components/table/)
  cover common content surfaces.
- [Disclosure](/CSS-Tags/components/disclosure/),
  [tabs](/CSS-Tags/components/tabs/), [modal](/CSS-Tags/components/modal/), and
  [popover](/CSS-Tags/components/popover/) document interaction contracts.
- [Layout](/CSS-Tags/layouts/layout/) documents the declarative layout
  primitives and their raw CSS-value attributes.
- [Utilities](/CSS-Tags/utilities/utilities/) documents intentional overrides.

## Progressive enhancement

Modern browser features are enhancements, not permission to remove basic access
to content. A popover can remain in normal flow when unsupported; a carousel
remains horizontally scrollable before JavaScript initializes it; view
transitions fall back to an immediate update. See [Browser
Support](/CSS-Tags/guides/browser-support/) for the tested baseline and feature
expectations.
