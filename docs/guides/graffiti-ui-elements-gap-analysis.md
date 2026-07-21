---
title: Graffiti UI Elements Coverage
description: A current component-by-component mapping of CSS Tags against Graffiti UI's single-purpose elements.
---

This page maps the 26 single-purpose elements reviewed from
[Graffiti UI Elements](https://graffiti-ui.com/elements) to CSS Tags' shipped
public APIs. It is a coverage guide, not a requirement to copy Graffiti's names
or collapse CSS Tags' stronger semantic distinctions.

A pattern counts as covered only when it ships through `index.css` with a
stable selector contract, theme tokens, accessible example markup, and
documentation. See [Element patterns](../../components/element-patterns/) for
the newer application and control patterns.

## Current coverage

| Graffiti element | CSS Tags API | Coverage and notes |
| --- | --- | --- |
| Buttons | Native `button`, `.button`, `.btn` | Covered. Native behavior is canonical; class aliases share one structural and state contract. |
| Icon Button | `icon-button`, `[data-icon-button]`, `.icon-button` on a labelled button | Covered with square sizing, centered icons, and size tokens. |
| Floating Action Button | `floating-action`, `button[data-fab]`, `button.fab` | Covered with logical fixed positioning and safe-area offsets. |
| Chips | `badge`, `[data-badge]`, `.badge` | Covered by the shared compact-label primitive; use a native button when it is interactive. |
| Tags | `badge`, `[data-badge]`, `.badge` | Covered without a duplicate tag component. |
| Rating | `rating-output` and `rating-input` hosts | Covered with separate read-only output and native-radio input patterns. |
| Reactions | `reaction-select`, `[data-reaction-select]`, `.reaction-select` | Covered through a native select with customizable-select enhancement. |
| Avatar | `user-avatar`, `[data-avatar]`, `.avatar`; `avatar-group` | Covered with image/initial fallback, size, shape, status, and grouping. |
| Boxes | `box`, `[data-box]`, `.box` | Covered by the declarative box API and box extras. |
| Callouts | `.callout`, `[data-callout]`; `.alert` | Covered while preserving the distinction between rich-content callouts and application feedback. |
| Card | `card`, `[data-card]`, `.card` | Covered with media, header, body, footer, and adaptive layout. |
| Bubble | `message-bubble`, `[data-bubble]`, `.bubble` | Covered with sender alignment and streaming/typing states. |
| Icon Rail | `icon-rail`, `[data-icon-rail]`, `.icon-rail` | Covered with current state and compact vertical navigation behavior. |
| Carousel | `carousel`, `[data-carousel]`, `.carousel` | Covered with a scroll-snap fallback and optional controls enhancement. |
| Log Card | `log-card`, `[data-log-card]`, `.log-card` | Covered with transcript rows, status markers, and expandable regions. |
| Reel | `layout-reel` for horizontal content; `snap-feed` for a vertical feed | Covered without changing the direction of the established reel API. |
| Tables | Native `table` with `[data-table]` or `.data-table` | Covered with responsive overflow, stripes, hover, borders, and captions. |
| Dialog | Native `dialog[data-modal]` or `dialog.modal` | Covered; native dialog remains canonical. |
| Tabs | ARIA tabs and disclosure-driven tabs | Covered. ARIA tabs are canonical; `details` is the no-JS disclosure alternative. |
| Tooltip | Tooltip components and anchor-positioning utilities | Covered with simple and rich-tooltip patterns. |
| List Navigation | `nav-list`, `[data-list-navigation]`, `.list-navigation` | Covered with icon, label, description, metadata, current, and disabled states. |
| Toggle Switch | Native checkbox with `role="switch"` | Covered with semantic state selectors and switch-specific tokens. |
| Input Group | `input-group`, `[data-input-group]`, `.input-group` | Covered with connected controls, affixes, focus-within, and container-responsive stacking. |
| Search Input | `search-input`, `[data-search-input]`, `.search-input` | Covered with a native search field, icon slot, clear affordance, and focus treatment. |
| File Dropzone | `file-dropzone`, `[data-file-dropzone]`, `.file-dropzone` | Covered with a full-target native file input and enhancement state hooks. |
| Toolbar | `tool-bar`, `[data-toolbar]`, `.toolbar` | Covered with toolbar semantics, compact density, separators, and a flexible spacer. |

## Intentional API distinctions

- `badge` covers both chip and tag visuals; interactivity comes from the native
  host rather than a second component.
- `.callout` belongs to rich content, while `.alert` represents application
  feedback.
- Native `dialog`, form controls, links, disclosure, and ARIA tabs remain the
  behavior-bearing elements.
- `layout-reel` remains horizontal. `snap-feed` owns the vertical
  scroll-snap use case.
- Custom tags are visual/layout hosts. Prefer the class or `data-*` host on a
  semantic native element when semantics matter.

## Standard for future additions

1. Prefer native HTML and ARIA state as the behavior contract.
2. Support custom-element, `data-*`, and class hosts when each form is useful.
3. Expose hierarchical tokens for repeated size, spacing, color, border, and
   state customization.
4. Remain useful without JavaScript and enhance only behavior the platform
   cannot provide.
5. Test focus-visible, disabled, forced-colors, reduced-motion, narrow
   containers, RTL, and long content where applicable.
6. Import the API from `index.css` and document examples that use the real
   shipped selectors.

The original audit found 11 covered, 7 partial, and 8 missing patterns. Those 15
partial or missing patterns now ship; this page reflects the current state
instead of retaining obsolete “missing” recommendations.
