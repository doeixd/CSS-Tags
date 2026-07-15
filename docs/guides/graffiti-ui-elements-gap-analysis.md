# Graffiti UI Elements gap analysis

This document compares the components shipped by CSS Tags through `index.css`
with the 26 single-purpose elements listed by
[Graffiti UI Elements](https://graffiti-ui.com/elements) (v4.32.0, reviewed
July 15, 2026).

The comparison is intentionally about public, documented APIs. A pattern is
not marked **covered** merely because a user could recreate it with several
utilities. A first-class component needs a stable selector contract, theme
tokens, accessible example markup, and documentation. Graffiti's UI Blocks,
templates, utilities, and JavaScript packages are outside this comparison.

## Current implementation status

All 15 partial or missing patterns identified by the original audit now ship
through `index.css`. See [Element patterns](../components/element-patterns.md)
for working markup, host forms, accessibility guidance, and tokens.

| Implemented group | New public patterns |
| --- | --- |
| Actions | Icon button and safe-area-aware floating action button |
| Forms | Switch, input group, search input, file dropzone, rating, and reaction select |
| Identity | Avatar and avatar group |
| Navigation | Toolbar, rich list navigation, and icon rail |
| Application | Message bubble, log card, and vertical snap feed |

The existing horizontal `layout-reel` remains unchanged. The vertical Graffiti
reel use case is implemented as `snap-feed`, avoiding a breaking semantic and
direction change.

## Original audit summary

These were the baseline counts before the implementation work:

| Coverage | Count | Meaning |
| --- | ---: | --- |
| Covered | 11 | CSS Tags has a documented component with substantially the same purpose. |
| Partial | 7 | The building blocks exist, but the public API, behavior, or orientation differs. |
| Missing | 8 | CSS Tags has no shipped first-class equivalent. |

The table below records that baseline and explains why each addition was
needed. It is retained as design rationale rather than a current missing list.

## Element-by-element comparison

| Graffiti element | CSS Tags equivalent | Coverage | What is missing or different |
| --- | --- | --- | --- |
| Buttons | Native `button`, `.button`, and button variants | Covered | The general button system is present. Icon-only buttons need a dedicated contract. |
| Icon Button | A normal button can contain an SVG | Partial | No square size tokens, icon sizing rule, `.icon-button`/`[data-icon-button]` host, or focused accessibility example. |
| Floating Action Button | Position and button utilities can be composed | Missing | No circular FAB API, fixed logical-edge placement, safe-area offsets, size variants, or FAB documentation. |
| Chips | `chip`, `[data-chip]`, `.chip` | Covered | CSS Tags already distinguishes an interactive chip-like control. |
| Tags | `badge`, `[data-badge]`, `.badge` | Covered | Badge is the existing non-interactive metadata primitive; another parallel tag component is unnecessary. |
| Rating | None | Missing | No read-only rating display or native-radio interactive rating pattern. |
| Reactions | Native `select` receives general form defaults | Missing | No reaction-picker API or progressively enhanced customizable-select treatment. |
| Avatar | None shipped through `index.css` | Missing | No image/initial fallback, size tokens, shape variants, status treatment, or avatar group. |
| Boxes | `box`, `[data-box]`, `.box` and box extras | Covered | CSS Tags provides a broader declarative box API. |
| Callouts | `.callout`, `[data-callout]`, plus `.alert` | Covered | Prose callouts and application feedback are already separate, useful concepts. |
| Card | `card`, `[data-card]`, `.card` | Covered | Core card structure, media, header, body, footer, and adaptive layout are present. Linked/featured examples could still be expanded. |
| Bubble | None | Missing | No message bubble, sender alignment, grouped-chat rhythm, typing state, or streaming state. |
| Icon Rail | Sidebar and navigation primitives can be composed | Missing | No compact vertical icon navigation contract, selected state sizing, or rail-specific responsive behavior. |
| Carousel | `carousel`, `[data-carousel]`, `.carousel` | Covered | CSS Tags includes a scroll-snap fallback and optional JavaScript controls. |
| Log Card | Card and list primitives can be composed | Missing | No transcript row states, monospace log treatment, status markers, or expandable log region. This is specialized and lower priority. |
| Reel | `layout-reel` | Partial | CSS Tags uses “reel” for a **horizontal** overflow row. Graffiti's reel is a **vertical** scroll-snap feed. Renaming the existing API would be breaking; add a separately named vertical feed primitive instead. |
| Tables | Native table with `[data-table]`/`.data-table` | Covered | Responsive overflow, stripes, hover, borders, captions, and semantic native markup are present. A sticky-header variant is not yet first-class. |
| Dialog | Native `dialog[data-modal]`/`dialog.modal` | Covered | CSS Tags correctly treats native `dialog` as canonical and also retains a legacy visual host. |
| Tabs | ARIA tabs and disclosure-driven tabs | Covered | CSS Tags deliberately documents ARIA tabs as canonical and `details` as a no-JS disclosure alternative. |
| Tooltip | Tooltip components and anchor-positioning utilities | Covered | Both simple and richer tooltip patterns are shipped. |
| List Navigation | List, navbar, and sidebar pieces can be composed | Partial | No first-class rich navigation-row API for icon, label, description, trailing metadata, and current/disabled states. |
| Toggle Switch | Generic checkbox styling | Partial | No `[role="switch"]` styling contract, switch-specific tokens, or semantic example. A checkbox is not visually or behaviorally documented as a switch. |
| Input Group | `.input-group` appears in legacy utilities | Partial | The rule uses non-browser `@extend`, and there is no connected-control layout, affix API, mobile stacking, or docs. It should be treated as unimplemented until replaced with real CSS. |
| Search Input | General `.form-input` | Partial | No search-specific icon/clear affordance layout, `type="search"` contract, tokens, or example. |
| File Dropzone | Native file input only | Missing | No drop surface, visually full-size native input overlay, focus/drag state, file summary, or documented JS enhancement hook. |
| Toolbar | `layout-cluster`, buttons, and dividers can be composed | Partial | No toolbar role host, grouped-control rhythm, flexible spacer, separator behavior, overflow strategy, or compact density tokens. |

## Recommended implementation order

### 1. Complete common control primitives

Add icon button, toggle switch, input group, search input, and toolbar first.
They appear across many products, can stay CSS-first, and reuse the current
button, form, layout, and divider tokens.

Suggested public selectors:

```css
:is(icon-button, [data-icon-button], .icon-button) { /* ... */ }
:is(input-group, [data-input-group], .input-group) { /* ... */ }
:is(search-input, [data-search-input], .search-input) { /* ... */ }
:is(tool-bar, [data-toolbar], .toolbar) { /* ... */ }
input[type="checkbox"][role="switch"] { /* ... */ }
```

The semantic element remains canonical: an icon button is still a labelled
`button`; a switch is still a native checkbox with `role="switch"`; a search
control still contains `input type="search"`; and a toolbar should use
`role="toolbar"` when it represents a related control group.

### 2. Add identity and input patterns

Add avatar, file dropzone, and rating next. They are broadly reusable and have
clear native foundations:

- Avatar: image first, initials fallback, explicit accessible name where the
  surrounding context does not already provide it.
- File dropzone: native `input type="file"` remains operable and covers the
  drop target; JavaScript only enhances drag state and file summaries.
- Rating: native radio buttons for input and a separate read-only output
  pattern. Do not turn `meter` into a decorative rating widget.

### 3. Fill navigation and scrolling gaps

Create a rich list-navigation row and a vertical snap-feed component. Keep the
existing horizontal `layout-reel` API for compatibility and choose a clear name
such as `snap-feed` for the vertical pattern. Icon rail can follow once the
navigation-row state model is settled.

### 4. Add specialized application elements only with demand

FAB, reactions, chat bubbles, and log cards are useful, but more product-shaped
than the foundational items above. Add them when a real example can establish
the required states. Reactions should use customizable select only as a
progressive enhancement, with a normal select fallback.

## API requirements for every new component

Every accepted gap should meet the same bar:

1. Prefer native HTML and ARIA state as the behavior contract.
2. Support custom element, `data-*`, and class hosts when all three are useful.
3. Expose hierarchical component tokens for size, spacing, color, border, and
   state values users are likely to theme.
4. Remain usable without JavaScript; use JavaScript only to enhance behavior
   the platform does not provide.
5. Include keyboard, focus-visible, disabled, forced-colors, reduced-motion,
   narrow-container, and long-content examples where applicable.
6. Import the component from `index.css`, document all host forms, and add a
   working example that uses the public API rather than demo-only CSS.

## What CSS Tags should not copy

The goal is coverage, not matching Graffiti's names one-for-one. CSS Tags
should retain its stronger semantic distinctions:

- `badge` already fills the non-interactive tag role.
- `.callout` belongs to rich content, while `.alert` represents application
  feedback.
- Native dialog and ARIA tabs remain the canonical interactive patterns.
- Existing horizontal `layout-reel` should not silently change direction.
- Specialized patterns should not enter the core merely to improve a component
  count.
