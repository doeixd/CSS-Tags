# Graffiti-inspired feature implementation plan

Reviewed July 15, 2026 against Graffiti UI v4.32.0:

- [Utilities](https://graffiti-ui.com/utilities): Fluid Container, Skip Link,
  and Font Sizing
- [UI Blocks](https://graffiti-ui.com/ui-blocks): Breadcrumbs, Pagination,
  Header, Footer, Swipe, and Timeline/Steps

This is a behavioral comparison, not a request to reproduce Graffiti's class
names or visual design. CSS Tags should implement each useful behavior through
its token system, semantic markup conventions, and custom/data/class host
model.

## Executive summary

| Requested feature | Current CSS Tags coverage | Decision |
| --- | --- | --- |
| Fluid Container | Partial | Promote the documented container-relative typography recipe to a first-class utility/component. |
| Skip Link | Docs-site only | Move the private docs treatment into the library as a native-anchor accessibility primitive. |
| Fluid Font Sizing | Mostly covered | Preserve the existing viewport-fluid scale; add stable size utilities and automatic container-relative preferred values. |
| Breadcrumbs | Docs-site only | Add a semantic native `nav > ol` component and migrate the docs site to it. |
| Swipe | Missing | Add a CSS scroll-snap swipe-to-reveal row with explicit content/action hooks and a no-swipe opt-out. |
| Timeline | Missing | Add a native-list chronological variant with time and status hooks. |
| TimelineStepper | Missing, but overlaps Timeline | Build one connector/marker system; expose stepper semantics and horizontal layout as variants rather than a second implementation. |
| Pagination | Docs-site has previous/next only | Add general result pagination; keep docs previous/next navigation as a separate content-navigation use case. |
| Header | Partial through navbar; docs-site private header exists | Add a page-level site header that composes with navigation instead of replacing it. |
| Footer | Page layout slot only | Add a responsive semantic site footer with container-driven columns and a legal/meta row. |

## Findings and proposed APIs

### 1. Fluid Container

Graffiti's fluid container changes fluid type from viewport units to container
query units. CSS Tags already ships `.cq`/`.cq-container` and documents manual
`cqi` token overrides, but there is no single public API that performs the
switch.

Add this to the typography/default layer:

```css
:is(fluid-container, [data-fluid-container], .fluid-container, .fc) {
  container-type: inline-size;
  --font-size-step-1-preferred: calc(1.02rem + 0.22cqi);
  /* remaining fluid preferred values */
}
```

Requirements:

- Keep `.cq` as the generic query-container helper.
- Make `fluid-container` specifically mean “type responds to this region.”
- Do not change `container`, which owns centered width and gutters.
- Use paired `--font-size-step-*-preferred` tokens so the component can switch
  `vw` to `cqi` without duplicating the whole semantic type hierarchy.
- Support nesting: the nearest fluid container should determine `cqi`.
- Document that custom tags are visual/layout hosts; semantic sectioning still
  belongs to `section`, `article`, `aside`, and similar elements.

### 2. Skip Link

The documentation layouts already contain private skip-link styling, but the
library does not ship it. That creates a parallel accessibility system.

Canonical markup:

```html
<a class="skip-link" href="#main-content">Skip to main content</a>
<main id="main-content">...</main>
```

Public selectors:

```css
:is(a.skip-link, a[data-skip-link]) { /* hidden until focused */ }
```

Do not offer a custom tag because native link behavior is the feature. Expose
tokens for inset, padding, background, foreground, radius, shadow, and z-index.
Use logical positioning and forced-colors-safe focus styling. After release,
delete the duplicate skip-link rules from both website layouts and dogfood the
library API.

### 3. Fluid Font Sizing

CSS Tags already has a hybrid scale: stable body sizes and viewport-fluid
display sizes. It also has a progressive `--fluid()` custom function and a
manual container-relative recipe. The missing part is a consistent public
contract between those systems.

Plan:

1. Split each fluid step into minimum, preferred, and maximum tokens.
2. Keep the current computed values as compatibility-preserving defaults.
3. Add size-only hooks matching the existing text scale:
   `.text-xs` through `.text-6xl` and `[data-text-size="..."]` where they do
   not already exist.
4. Let `fluid-container` override preferred values from `vw` to `cqi`.
5. Retain ordinary `clamp()` declarations as the baseline. The experimental
   `--fluid()` function must remain optional progressive enhancement.
6. Add examples comparing fixed body text, viewport-fluid display text, and
   container-fluid card/sidebar text.

This is an enhancement, not a new competing typography scale.

### 4. Breadcrumbs

The Astro docs site has a good semantic breadcrumb generator, but all styling
is scoped to that component. Promote the visual contract into the library and
leave route-to-label generation in application code.

Canonical markup:

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/guides/">Guides</a></li>
    <li><span aria-current="page">Typography</span></li>
  </ol>
</nav>
```

Public host forms: `nav[data-breadcrumbs]` and `nav.breadcrumbs`. Do not use a
custom host because the native navigation landmark is essential.

Tokens:

- `--breadcrumbs-gap`
- `--breadcrumbs-separator` (default `/`)
- `--breadcrumbs-color`, `--breadcrumbs-hover-color`
- `--breadcrumbs-current-color`
- `--breadcrumbs-font-size`

The list wraps, separators come from `li + li::before`, and `aria-current`
drives current-page styling. Support both `aria-current` on the link and on a
plain-text child.

### 5. Pagination

The existing docs `PrevNextNav` is sequential documentation navigation, not
general pagination. Keep that distinction.

Canonical markup:

```html
<nav class="pagination" aria-label="Pagination">
  <a class="pagination-previous" href="?page=2">Previous</a>
  <ol>
    <li><a href="?page=2">2</a></li>
    <li><a href="?page=3" aria-current="page">3</a></li>
    <li><a href="?page=4">4</a></li>
  </ol>
  <a class="pagination-next" href="?page=4">Next</a>
</nav>
```

Public forms: `nav[data-pagination]` and `nav.pagination`. Use native anchors
for navigation and native buttons only for client-side data grids that do not
change location. A disabled link should omit `href` and use
`aria-disabled="true"`; visual state alone must not pretend to disable it.

Include compact and simple previous/next variants, overflow-safe page lists,
minimum pointer target tokens, and `aria-current="page"` styling. Do not force
card-footer borders; expose an opt-in `data-surface="footer"` variant.

### 6. Header

CSS Tags has a navbar component, while the docs site has a separate large
`Header.astro`. A site header is the page-level shell; navbar remains the
navigation arrangement inside it.

Canonical markup:

```html
<header class="site-header" data-sticky>
  <container>
    <a class="site-brand" href="/">Brand</a>
    <nav aria-label="Primary">...</nav>
    <div data-header-actions>...</div>
  </container>
</header>
```

Public forms:

```css
:is(header[data-site-header], header.site-header, site-header) { /* ... */ }
```

Native `header` is canonical. Provide border, sticky, readable, and compact
variants through attributes/data hooks. Use existing navigation, icon-button,
container, toolbar, focus, and safe-area tokens. The base header should be a
flat surface with no default shadow. Sticky elevation should be opt-in.

After the API stabilizes, migrate the docs header in a separate change; do not
couple its search/theme JavaScript to the CSS component.

### 7. Footer

`layout-page` has a footer slot, but CSS Tags has no visual or responsive site
footer. Add a semantic surface that composes existing layout primitives.

Canonical markup:

```html
<footer class="site-footer">
  <container>
    <div data-footer-grid>...</div>
    <div data-footer-meta>...</div>
  </container>
</footer>
```

Public forms:

```css
:is(footer[data-site-footer], footer.site-footer, site-footer) { /* ... */ }
```

Requirements:

- Establish `container-type: inline-size` on the footer.
- Auto-fit navigation columns through `--footer-column-min`.
- Stack the meta/legal row in narrow containers.
- Preserve native `nav`, headings, lists, and links.
- Expose background, foreground, border, padding, gap, column-minimum, and
  muted-text tokens.
- Do not globally remove link underlines; scope a documented footer link style
  with visible hover and focus treatment.

### 8. Timeline and TimelineStepper

Graffiti uses one primitive for chronological timelines and ordered process
steps. CSS Tags should do the same internally, while offering intent-specific
hosts.

Canonical timeline:

```html
<ol class="timeline">
  <li data-state="complete">
    <span data-timeline-marker aria-hidden="true">✓</span>
    <div><time datetime="2026-07-15">July 15</time><p>Released</p></div>
  </li>
</ol>
```

Canonical stepper:

```html
<ol class="stepper" aria-label="Checkout progress">
  <li data-state="complete">Account</li>
  <li aria-current="step">Payment</li>
  <li>Confirm</li>
</ol>
```

Public selectors should share one internal marker/connector token system:

- `timeline`, `[data-timeline]`, `.timeline`
- `timeline-stepper`, `[data-stepper]`, `.stepper`

Use `aria-current="step"` for the active step. Completion has no native ARIA
state, so `data-state="complete"` is acceptable, but completion must also be
communicated in visible or assistive text. Status values are `complete`,
`success`, `warning`, `error`, and `info`, mapped to existing feedback tokens.

Timeline defaults vertical. Stepper may opt into
`data-orientation="horizontal"`; it must fall back to vertical or horizontally
scroll at narrow widths without shrinking labels into unreadability. Respect
forced colors and reduced motion. Glow/shadow is not a required default.

### 9. Swipe

Graffiti's Swipe is a swipe-to-reveal row, not carousel gesture handling. CSS
Tags has carousel swipe support but no equivalent row action pattern.

Proposed explicit structure:

```html
<swipe-row>
  <button data-swipe-action="start">Archive</button>
  <article data-swipe-content>Message content</article>
  <button data-swipe-action="end">Delete</button>
</swipe-row>
```

Public forms: `swipe-row`, `[data-swipe]`, and `.swipe`. Prefer explicit role
hooks over only first/second/third-child selectors; positional markup may be a
documented shorthand.

Requirements:

- CSS scroll-snap baseline with logical inline scrolling and hidden-but-usable
  scrollbars.
- Center content sized from the swipe container, with tokenized action width.
- Native buttons for actions and visible focus states that scroll focused
  actions into view.
- `data-swipe="disabled"`/`.swipe-stop` opt-out for rows containing horizontal
  controls.
- RTL testing: start/end actions must follow writing direction.
- No destructive action should fire merely because it was revealed.
- If CSS alone cannot reliably center the initial position across supported
  browsers, add a tiny optional progressive enhancement that calls
  `scrollTo()`; the non-JS baseline must remain operable and understandable.

## Implementation sequence

### Milestone 1: Accessibility and type foundations

1. Add the public skip-link primitive and tokens.
2. Refactor fluid type tokens into min/preferred/max parts without changing
   their rendered defaults.
3. Add `fluid-container`/`[data-fluid-container]`/`.fluid-container`/`.fc`.
4. Add size-only type hooks and comparison examples.
5. Migrate the docs site's private skip-link styling to the library.

Why first: these are low-dependency primitives and establish the container
type contract used by later narrow-component tests.

### Milestone 2: Content navigation

1. Add Breadcrumbs.
2. Add Pagination.
3. Migrate `Breadcrumbs.astro` to library markup and remove its scoped visual
   CSS.
4. Keep `PrevNextNav` separate, but refactor it to share pagination/control
   tokens where appropriate.

### Milestone 3: Progress and history

1. Add the shared timeline connector/marker foundation.
2. Add chronological timeline content slots.
3. Add stepper intent, `aria-current="step"`, completion/status states, and
   horizontal orientation.
4. Test long labels, timestamps, missing markers, and mixed statuses.

### Milestone 4: Site chrome

1. Add site header without changing the existing navbar.
2. Add responsive site footer.
3. Build a complete zero-custom-CSS site-shell demo using skip link, header,
   breadcrumbs, main content, pagination, and footer.
4. Only then consider migrating the docs site's header; retain search/theme
   behavior as application JavaScript.

### Milestone 5: Swipe-to-reveal

1. Prototype CSS-only initial centering in LTR and RTL.
2. Implement explicit action/content hooks and keyboard focus behavior.
3. Add optional reset/centering enhancement only if browser testing proves it
   necessary.
4. Test touch, mouse-wheel/trackpad, keyboard, nested links, destructive
   actions, reduced motion, and narrow containers.

Swipe is last because its off-screen focus order, initial scroll position, and
RTL behavior require more interaction testing than the other CSS-first blocks.

## Proposed files

Library:

- `components/accessibility.css` — skip link
- `core/tokens.css` and `core/typography.css` — fluid preferred values and
  container-relative overrides
- `components/breadcrumbs.css`
- `components/pagination.css`
- `components/timeline.css` — shared timeline/stepper implementation
- `components/site-chrome.css` — site header and footer
- `components/swipe.css`
- `index.css` — component imports in the component layer
- `types/css-tags.d.ts` and its type tests

Documentation and demos:

- `docs/components/breadcrumbs.md`
- `docs/components/pagination.md`
- `docs/components/timeline.md`
- `docs/components/site-chrome.md`
- `docs/components/swipe.md`
- expanded typography/accessibility documentation
- mirrored website docs and navigation entries
- `examples/demo-site-shell.html`
- `examples/demo-timeline-swipe.html`

## Definition of done

Each milestone is complete only when:

1. Native semantic markup is the documented canonical API.
2. Custom, data, and class hosts exist where they do not weaken semantics.
3. The component uses dedicated hierarchical tokens rather than demo values.
4. The feature is imported by `index.css` and included in TypeScript globals
   where custom tags are shipped.
5. Repository and website documentation contain live, copyable examples.
6. At least one standalone demo uses only public CSS Tags APIs.
7. Browser QA covers desktop, 390px mobile, narrow containers, RTL, keyboard,
   200% zoom, forced colors, and reduced motion as applicable.
8. The Astro production build, TypeScript type test, and `git diff --check`
   pass.
9. Any docs-site private CSS replaced by a library primitive is deleted, so
   there is one source of truth.

## Non-goals

- Do not copy Graffiti's shadows, gradients, or naming merely for parity.
- Do not merge result pagination with previous/next article navigation.
- Do not make the site header responsible for search, menus, or theme-toggle
  JavaScript.
- Do not create separate marker/connector implementations for timeline and
  stepper.
- Do not make swipe reveal invoke an action automatically.

