---
title: Common Footguns
description: Avoid semantic, composition, theming, responsive, and progressive-enhancement traps in CSS Tags.
---

CSS Tags intentionally works close to the platform. That keeps the library
small, but CSS cannot create semantics or JavaScript behavior. This guide
collects the places where otherwise reasonable markup can produce surprising
results.

## Host forms are equivalent styling hooks, not equivalent semantics

New public components generally support:

```html
<media-object>...</media-object>
<article data-media-object>...</article>
<article class="media-object">...</article>
```

The CSS is equivalent; the HTML meaning is not. Prefer a native landmark,
button, list, article, form element, or heading when one expresses the content.
Unknown custom tags have no implicit role. Add a role only when a native host
cannot be used.

Some primitives deliberately remain native-first rather than inventing a custom
tag: form controls, `details`/`summary`, `progress`, `meter`, tables, and
ARIA tabs.

## Slot labels are not Shadow DOM slots

Components such as content patterns and layouts accept `slot="actions"` or
`slot="aside"` as a direct-child CSS label. No Shadow DOM is attached and no
content distribution occurs. Frameworks may consume slot attributes; use the
equivalent data or class hook in that case.

```html
<div data-media-object>
  <img data-media-object-media alt="" src="avatar.png">
  <div data-media-object-body>...</div>
  <div data-media-object-actions>...</div>
</div>
```

Optional region selectors match direct children. Put arbitrary wrappers inside
the body region, not around the region.

## CSS does not add behavior or accessibility state

A styled `div` is not a button. A tab-looking element does not gain keyboard
navigation. A custom alert is not announced without an appropriate live-region
role. Use native controls and states first:

- `aria-busy="true"` for loading;
- `aria-current` for the current navigation item;
- `aria-expanded` and native `open` for disclosure;
- `role="tablist"`, `role="tab"`, and `role="tabpanel"` for real tabs;
- native `details` when disclosure semantics are sufficient.

Details-based “tabs” remain disclosures; CSS cannot make them ARIA tabs.

Do not use `role` as a visual variant. `role="subtle"` is not a valid ARIA
role. Components use `variant="subtle"`, `data-variant="subtle"`, or a
documented class alias for appearance, leaving `role` available for semantics.
Legacy badge/chip visual-role selectors are compatibility-only and deprecated.

## Bare attributes and data attributes are not interchangeable everywhere

Finite component states usually support a bare custom-element attribute, a data
attribute, and a class variant. For example:

```html
<alert-message status="success">...</alert-message>
<div data-alert data-status="success">...</div>
<div class="alert alert-success">...</div>
```

Attribute-driven layout values such as `gap="var(--space-lg)"` use raw CSS
values. Do not quote the value inside the attribute. Typed `attr()` support is
progressive; use component variables or classes when targeting browsers that
cannot evaluate a particular attribute contract.

## Public variables must be set at the correct scope

Most public variables inherit, so set them on a component, preview wrapper, or
theme root:

```css
.billing-panel {
  --card-radius: var(--radius-xl);
  --alert-padding: var(--space-lg);
}
```

Parent inference with `:has()` is also an enhancement. Structured tooltips can
infer their trigger wrapper, but `data-tooltip-host` or `.tooltip-host` is the
explicit fallback contract when older engines are in scope.

A closer declaration wins normally. A component that redeclares a public input
on itself prevents ancestor theming; treat that as a library bug rather than
reaching inside with a stronger selector.

Use `data-theme` for a brand/theme pack and root
`data-color-scheme="light|dark"` for an explicit contrast mode. Removing
`data-color-scheme` restores system preference behavior.

## Layout containment and intrinsic sizing

Layout children are full width by default in `layout-stack`. Use
`.stack-intrinsic` for an intentionally content-sized child.

Size containment changes intrinsic sizing. Container queries are therefore
opt-in through `container-query`, `data-container-query`, or
`.layout-container`; do not enable them casually on content-sized clusters,
buttons, or navigation groups.

Always add `min-inline-size: 0` to custom grid/flex children that must shrink
around long content.

## Global prose rhythm versus component rhythm

`.prose` and `[data-prose]` add long-form spacing. Do not apply prose to a
whole application shell or compact component tree. Apply it to the article body
and let components own their internal rhythm.

Native Markdown tables and code can be wider than the reading column. Prose
styles bound those elements to their own scroll/wrap behavior, but custom
renderers should preserve semantic `table`, `pre > code`, figures, lists,
and heading order.

Repeated examples must use unique IDs for labels, descriptions, tabs, and
headings. Copying a demo twice without changing IDs creates broken accessible
relationships even when it looks correct.

## Modern CSS is progressive enhancement

`:has()`, Popover API, Anchor Positioning, customizable select, View
Transitions, relative colors, custom functions, and custom mixins do not share
one support baseline. CSS Tags should provide a readable native fallback before
an enhancement block.

Custom mixins in `core/mixins.css` are optional recipes. Keep explicit
declarations in production CSS:

```css
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);

  @apply --cluster(var(--space-sm));
}
```

## API consistency checklist

Before shipping or reporting a component bug, check:

1. Does the appropriate native host work?
2. Do documented custom, data, and class hosts match?
3. Are optional regions direct children using a documented alias?
4. Is the state expressed with native or ARIA attributes?
5. Does it work without JavaScript and without its modern-CSS enhancement?
6. Does it survive 320px width, 200% text, long unbroken content, RTL, dark
   mode, forced colors, reduced motion, and missing optional regions?
7. Can public variables be inherited from a surrounding theme or preview?
8. Are docs, standalone examples, and TypeScript globals aligned with
   `index.css`?

Report mismatches as API defects or papercuts. A docs-site override is not a
general library fix.
