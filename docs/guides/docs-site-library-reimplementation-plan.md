# CSS Tags documentation-site reimplementation plan

## Goal

Create a parallel copy of the current Astro documentation site, then rebuild
that copy so the site itself is a first-class demonstration of CSS Tags.
The replacement must retain the current content, routes, search, navigation,
theme switching, and GitHub Pages deployment while adding a unified example
workbench with live previews, source viewing, one-click copying, and scoped
CSS custom-property editing.

This is a reimplementation, not a visual redesign project. First reach feature
and content parity. Visual changes are acceptable when they come from the
library's real defaults or correct an accessibility/responsiveness problem.

The project is also a deliberate library-improvement exercise. Rebuilding a
real, interaction-heavy site with CSS Tags should expose weak defaults,
missing states, awkward composition, insufficient tokens, unclear naming, and
APIs that work in isolated demos but not in production layouts. Those findings
are first-class project output, not incidental cleanup.

## Implementation progress (2026-07-16)

- Milestone 0 is complete: `website-next/` is isolated from deployment, content
  sync is repeatable, and five production routes are captured at desktop,
  tablet, and mobile sizes under `website-next/reference/current/`.
- Milestone 1 is complete for the first slice: public site header/footer APIs,
  tokens, typings, documentation, and a zero-custom-CSS demo ship through
  `index.css`.
- Milestones 2–4 have a validated vertical slice on the explicit
  `/components/site-shell/` replacement route. The library-first shell,
  single-source preview/code workbench, clipboard fallback, and scoped live
  variable controls pass desktop and mobile browser QA.
- The rebuild has already improved the library: card variables inherit from a
  preview scope, direct card regions own correct insets, header navigation grows
  safely, and layout size containment is now an explicit knob instead of an
  intrinsic-sizing hazard. It also now exposes a root color-scheme override so
  applications can offer light/dark/system controls without duplicating the
  semantic theme.
- Milestones 5–7 are implemented: all 60 routes and the home
  page use the library-first shell; every route has the unified example
  workbench or interactive palette; search and explicit light/dark/system
  controls are live; `npm run check` audits the generated route set; browser QA
  covers desktop and mobile shell behavior; and the Pages workflow now builds
  and audits `website-next/` before deployment.

## Current-state findings

The current site has useful pieces, but the implementation is fragmented and
contains a large private design system alongside the library:

- `DocsLayout.astro` is about 1,426 lines.
- `LandingLayout.astro` is about 818 lines.
- `Header.astro`, `Navigation.astro`, and `Search.astro` total more than 2,500
  lines and each owns substantial private styling and behavior.
- `website/src/theme.css` is about 887 lines of site-specific tokens and rules.
- `LiveExample.astro` correctly isolates library examples in an open shadow
  root and loads the shipped `index.css`.
- `QuickExample.astro` renders source separately from `LiveExample`, so source
  and preview can drift.
- `page-examples.ts` already provides structured example data, but it has no
  shared copy control or variable-control schema.
- `ColorPaletteViewer.astro` already proves that scoped, real-time custom
  property editing works. Its editor and clipboard logic are private to that
  one 705-line component.
- The library now provides skip links, breadcrumbs, pagination, semantic
  layouts, navigation patterns, form patterns, actions, loading states,
  dividers, and fluid typography.
- Public site-header and site-footer primitives now ship through `index.css`.
  Their implementation is the first proof that a docs-site requirement can be
  promoted into a reusable, documented library API instead of remaining
  private site CSS.

## Non-negotiable architecture rules

1. The replacement builds and audits independently. Deployment may point at
   `website-next/` only after the cutover checklist passes, while `website/`
   remains available as a short-lived rollback source.
2. The replacement imports the repository's real `index.css`; it must not use
   a copied or reduced facsimile of the library.
3. Astro components should provide data, composition, and enhancement. They
   should not privately recreate CSS Tags components.
4. When the site needs a reusable UI primitive that the library lacks, add it
   to the library first, with public tokens, documentation, an example, and
   typings when a custom element is exposed.
5. Prefer native HTML and ARIA state contracts. JavaScript enhances search,
   copying, dialogs, navigation, and editors; it does not manufacture basic
   page semantics.
6. Preview and displayed source must derive from the same example definition.
7. Variable edits are scoped to a preview by default. A control must not
   silently rewrite the entire documentation site.
8. The replacement must work at the production `/CSS-Tags/` base path as well
   as at `/` in local development.
9. Do not work around a library limitation privately until it has been assessed
   as a possible public API improvement.
10. Favor a small number of coherent, hierarchical knobs over many narrowly
    named one-off variables.

## Library-improvement feedback loop

Every migrated site region doubles as an integration test for the library.
Use the following loop throughout the project:

1. Compose the region from the current documented public API.
2. Record friction before adding site CSS: missing behavior, excessive markup,
   selector conflicts, poor defaults, absent states, or difficult theming.
3. Classify the problem as a library defect, missing primitive, missing token,
   missing host form, documentation problem, or genuinely site-specific need.
4. Fix reusable problems in CSS Tags itself.
5. Add or update the library documentation, runnable demo, and TypeScript
   declarations in the same change.
6. Rebuild the site region using the improved public API.
7. Add a regression check that proves the improvement outside the docs shell.

Maintain a living `website-next/LIBRARY-FEEDBACK.md` during implementation.
Each entry should include:

- the site feature that exposed the problem;
- the smallest markup that reproduces it;
- the current workaround, if one is temporarily required;
- the proposed library-level solution;
- affected tokens, selectors, host forms, and states;
- accessibility and compatibility considerations;
- status and links to the implementation/docs/tests.

Temporary workarounds must carry a matching feedback identifier and removal
condition. This prevents experimental site CSS from quietly becoming a second
component system.

### What to improve in the library

The rebuild should actively evaluate and improve:

- **Public host consistency:** custom tag, `data-*`, class, and semantic native
  forms where each is practical.
- **State APIs:** prefer `aria-current`, `aria-expanded`, `aria-busy`,
  `aria-disabled`, native `open`, Popover API state, and other platform
  contracts over private classes.
- **Component knobs:** density, size, alignment, wrapping, overflow, sticky
  behavior, surface strength, borders, radii, and responsive thresholds.
- **Hierarchical tokens:** component defaults should derive from semantic
  system tokens while still exposing local override points.
- **Layout composition:** components should behave correctly inside grid,
  stack, cluster, sidebar, containers, and narrow preview regions without
  special-case fixes.
- **Long-content resilience:** wrapped labels, long navigation names, code,
  localization, large text, and unknown user content must not overflow.
- **Progressive enhancement:** native behavior and readable fallbacks should
  remain when JavaScript or a modern platform feature is unavailable.
- **Typing and discoverability:** public custom elements and finite attributes
  should be represented in the global TypeScript declarations.
- **Documentation quality:** every meaningful knob needs an actual rendered
  example showing its effect, not only a token list.
- **Debuggability:** invalid combinations and cascade boundaries should be
  understandable from normal browser developer tools.

### API design threshold

Promote a docs-site requirement into CSS Tags when one or more of these is true:

- it is useful to ordinary product sites or applications;
- the same override appears in two or more site regions;
- the current public API cannot express a common accessible state;
- a component breaks under normal responsive, content, or theming pressure;
- users are likely to theme the value directly;
- a site-only rule must reach inside a public component to make it work.

Keep a requirement site-specific when it is tied to Pagefind's generated
markup, Astro routing/view transitions, documentation source rendering,
preview sandboxing, or another docs-only integration. Even then, prefer public
tokens on surrounding library components over deep selectors.

### Quality bar for new knobs

Any new public knob must:

- solve a named use case rather than expose an arbitrary implementation detail;
- have a stable semantic name and sensible fallback;
- compose with existing tokens instead of bypassing them;
- work across every supported host form;
- include relevant hover, focus, disabled, busy, open, current, and reduced-
  motion behavior;
- be demonstrated in the library docs and the standalone examples;
- be covered by typings when represented as a finite custom-element attribute;
- avoid breaking existing markup or silently changing unrelated components.

### Library API audit deliverables

The rebuilt site is a continuing integration harness for CSS Tags, not merely
a consumer of it. For every migrated component or common UI block, capture a
small contract matrix covering:

| Contract | Questions the migration must answer |
| --- | --- |
| Hosts | Does the custom element, `data-*` host, class host, and appropriate semantic native form behave consistently? |
| Regions | Can optional media, title, metadata, body, navigation, and action regions be expressed without fragile positional selectors? |
| States | Are native and ARIA states sufficient, visible, keyboard-usable, and progressively enhanced? |
| Knobs | Are the common size, density, alignment, wrapping, overflow, surface, and responsive choices intentional public APIs? |
| Tokens | Do component variables derive from semantic tokens, inherit through preview/theme scopes, and expose likely customization points? |
| Composition | Does the component survive stack, cluster, grid, sidebar, container, prose, narrow viewport, long content, and large-text contexts? |
| Compatibility | Is there a useful fallback for `:has()`, Popover API, Anchor Positioning, customizable select, CSS mixins, and other modern features? |
| Developer experience | Are typings, examples, copyable source, variable controls, and common footguns present and accurate? |

Each finding must end in one of four explicit outcomes:

1. fix an existing library defect;
2. add a coherent public API, token, host form, state, mixin, or composition
   primitive;
3. improve documentation when the API is capable but unclear; or
4. record why the need is genuinely documentation-site-specific.

The feedback log should link the outcome to its library CSS, docs, demo,
typings, and regression coverage. A docs-only selector is not resolution for a
reusable problem.

New knobs should be harvested from demonstrated pressure rather than added
speculatively. When several components need the same behavior, prefer a shared
semantic token, utility, layout primitive, or documented CSS mixin—with
ordinary fallback declarations—over parallel component-specific switches.

## Parallel-copy strategy

Create `website-next/` from `website/`, excluding generated and installed
content:

- exclude `node_modules/`, `dist/`, `.astro/`, and Pagefind output;
- keep the current lockfile and Astro configuration initially;
- give the copied package a distinct name and local development port;
- leave `.github/workflows/deploy.yml` pointed at `website/`;
- capture desktop and mobile reference screenshots for the home page and a
  representative documentation page before changing the copy.

The copy begins as an implementation workspace. For the first cutover, deploy
`website-next/` directly and retain `website/` as an explicit rollback source.
After the replacement has completed a successful production soak, consolidate
the replacement back to the canonical `website/` path in a separate cleanup
change. This keeps the deployment change reversible without treating both
trees as permanent products.

During the parallel phase, treat `website/src/content/docs/` as canonical.
Add a small content-sync command that copies only changed Markdown/MDX files
into `website-next` before builds. Do not hand-edit the same document in both
trees. Remove the sync command at cutover.

## Target site composition

The replacement shell should use these real library APIs:

| Site responsibility | CSS Tags composition |
| --- | --- |
| Skip navigation | `a.skip-link` targeting a focusable native `main` |
| Page shell | `layout-page` or `[data-layout-page]` |
| Header | native `header.site-header` after the public header primitive ships |
| Main content width | `container` / `[data-container]` and `layout-center` |
| Sidebar/content/TOC | `layout-sidebar` plus intrinsic-width opt-outs |
| Navigation groups | native `nav`, `details`/`summary`, `nav-list`, and `aria-current` |
| Search control | native `input[type="search"]` with the search-input/form pattern |
| Breadcrumbs | `nav.breadcrumbs` or `nav[data-breadcrumbs]` |
| Page outline | native navigation list using the list-navigation pattern |
| Previous/next articles | semantic nav composed from cards/actions; keep distinct from result pagination |
| Theme toggle | native button using `aria-pressed` and icon-button sizing |
| Mobile menu | native dialog/popover or disclosure with `aria-expanded` fallback |
| Scroll-to-top | `floating-action` with an accessible label |
| Loading state | `aria-busy="true"` and the shared loading primitive |
| Footer | native `footer.site-footer` after the public footer primitive ships |
| Long-form content | `[data-prose]` and semantic typography tokens |
| Responsive display type | `fluid-container` only where container-relative scaling is useful |

The site may keep a small `docs-site.css`, but its allowed responsibilities are
limited to documentation-only concerns:

- the exact sticky shell arrangement;
- Pagefind vendor markup adaptation;
- syntax-highlighting integration;
- preview-canvas/checkerboard treatment;
- resizable documentation panes;
- Astro view-transition names;
- print styles.

It must not redefine buttons, cards, forms, breadcrumbs, typography, alerts,
navigation items, headers, footers, or other public library components.
Every rule in `docs-site.css` should have a short comment explaining why it is
site-specific.

## Library prerequisites

Complete these before the shell migration depends on them:

### Site header

Add a native-first header surface supporting:

```html
<header class="site-header" data-sticky>
  <container>
    <a data-site-brand href="/">CSS Tags</a>
    <nav aria-label="Primary">...</nav>
    <div data-header-actions>...</div>
  </container>
</header>
```

Support native, data, class, and optional custom hosts where semantics remain
correct. The default is flat; sticky elevation is opt-in. Expose tokens for
height, padding, surface, border, actions gap, brand size, safe-area inset,
sticky offset, and z-index.

### Site footer

Add a native-first footer surface with grid and metadata regions:

```html
<footer class="site-footer">
  <container>
    <div data-footer-grid>...</div>
    <div data-footer-meta>...</div>
  </container>
</footer>
```

Expose compact, centered, and bordered variants without adding a default
shadow. Document native, data, class, and optional custom hosts.

### Documentation-driven gaps

As the new shell is composed, record missing tokens or behaviors in a short
gap list. Promote repeated customization pressure into the existing component
layer. Do not add a parallel `docs-button`, `docs-card`, or `docs-nav` system.

This gap list is not limited to missing components. It should also drive
refinements to existing APIs—for example, better wrapping defaults, logical
properties, intrinsic-width opt-outs, container-query thresholds, compact
variants, state attributes, target sizes, overflow handling, and component-
specific customization tokens.

## Unified example workbench

Replace `LiveExample`, `QuickExample`, and their duplicated source surfaces
with one `ExampleWorkbench.astro` component. It should compose library tabs,
actions, forms, layout primitives, and disclosure patterns.

### Example definition

Use one typed definition as the source of truth:

```ts
interface CssVariableControl {
  name: `--${string}`;
  label: string;
  description?: string;
  kind: "color" | "length" | "number" | "percentage" | "angle" | "select" | "text";
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  options?: Array<{ label: string; value: string }>;
}

interface ExampleDefinition {
  id: string;
  title: string;
  description?: string;
  markup: string;
  css?: string;
  enhancement?: "carousel" | "navigation" | "tabs" | "view-transition";
  variables?: CssVariableControl[];
  canvas?: "default" | "transparent" | "viewport";
  compact?: boolean;
}
```

`markup` feeds both the rendered preview and the HTML source panel. `css` is
optional, visible, and injected only into that example's shadow root. It must
not contain invisible workaround CSS. Enhancements are named, reviewed modules;
the workbench must never evaluate arbitrary JavaScript from documentation text.

### Workbench interface

Each example provides:

- Preview and Code tabs, with correct `role="tablist"`, `role="tab"`, and
  `role="tabpanel"` behavior.
- A copy button for the active source panel.
- Optional HTML/CSS sub-tabs when the example contains both.
- A reset-preview action when the example has mutable state.
- An optional full-width/compact preview toggle.
- A visible title and description connected with `aria-labelledby` and
  `aria-describedby`.
- An `aria-live="polite"` status for copy/reset feedback.
- Keyboard operation for every action and no focus loss when tabs switch.
- Horizontal source scrolling without trapping page scrolling.

Use build-time syntax highlighting through the existing Astro/Expressive Code
toolchain. Do not ship a full client-side highlighter merely to recolor static
source.

### Clipboard behavior

Implement one shared `copyText()` helper:

1. Prefer `navigator.clipboard.writeText()` in secure contexts.
2. Fall back to a temporary selected textarea when the Clipboard API is
   unavailable.
3. Restore focus to the copy button.
4. Announce success or failure without changing the button's accessible name
   to an ambiguous icon-only state.
5. Reuse the helper for examples, generated CSS overrides, installation
   commands, and palette swatches.

### MDX authoring

Start with explicit imported example definitions so the implementation is
predictable. After migration, optionally add a remark directive such as:

````md
```html preview title="Status alert" variables="alert-status"
<aside class="alert" status="success">...</aside>
```
````

The directive should compile into the same workbench and never introduce a
second preview implementation.

## Interactive CSS custom-property editor

Extract the palette editor's useful ideas into a reusable
`CssVariableEditor.astro` plus a small controller module.

### Scope and cascade

- The default target is the workbench's `css-tags-example` host.
- Apply values with `target.style.setProperty(name, value)` so they inherit
  into the shadow preview.
- Read initial and resolved values with `getComputedStyle(target)` after the
  library stylesheet is attached.
- Preserve the distinction between authored input tokens and derived semantic
  tokens. Editors should normally expose inputs that safely propagate through
  the system, not every internal output.
- Allow an explicit target selector only within the preview shadow root for
  component-local variables.
- Reset removes the inline property rather than guessing the previous value.

### Control types

- color picker plus a text field for any valid CSS color;
- range and number pairs for lengths, numbers, percentages, and angles;
- select controls for documented finite values;
- text input for compound values such as shadows or grid tracks;
- resolved-value display beside the authored value;
- invalid-value messaging using native validity plus a polite status region.

Changing a control updates the preview on `input`. Expensive derived displays
may update once per animation frame. The editor must not reload the page.

### Override output

Show the active changes as copyable CSS:

```css
.my-component {
  --card-padding: 1.5rem;
  --card-radius: 0.75rem;
}
```

Provide Reset selected, Reset all, and Copy overrides actions. Preserve control
order in generated output. Do not emit untouched defaults.

### Variable metadata

Create a reusable metadata registry rather than hardcoding controls inside
Astro templates. Begin in `website-next/src/data/css-variables.ts`, organized
by component and theme group. Each entry records the public variable, label,
type, bounds/options, and a brief consequence of changing it.

When the registry stabilizes, consider moving it to a publishable library
metadata file so documentation and future tooling share the same API catalog.
Do not try to infer every useful control by regex-parsing CSS declarations.

### Persistence

Milestone one keeps edits in memory and scoped to the current example. Later:

- optionally persist the global theme lab in `localStorage`;
- optionally encode a small set of overrides in the URL for shareable demos;
- never persist component-demo overrides globally without an explicit user
  action;
- provide a clear Reset saved theme action.

## Migration milestones

### Milestone 0: Freeze the reference and create the copy

1. Record the current commit and deployment URL.
2. Capture desktop, tablet, and mobile screenshots for home, a component page,
   a long prose page, the palette, and a page with many live examples.
3. Copy the source into `website-next/` with generated folders excluded.
4. Add independent `dev`, `build`, and `preview` commands.
5. Prove both sites build without changing the deployment workflow.

Exit criteria: the copy renders the same routes and the current site remains
the only deployed package.

### Milestone 1: Ship missing library shell primitives

1. Implement and document site header and footer.
2. Add their tokens and host variants to `index.css` and TypeScript globals.
3. Add standalone no-custom-CSS demos.
4. Verify focus, sticky behavior, wrapping, safe areas, and reduced motion.
5. Create the library-feedback log and record baseline friction from composing
   the first shell route with the current APIs.

Exit criteria: the replacement shell needs no private header/footer visual
system.

### Milestone 2: Rebuild the documentation shell

1. Load `index.css` in the light DOM of `website-next`.
2. Build a small `DocsShell.astro` from the mapping table above.
3. Replace the separate desktop/mobile navigation implementations with one
   semantic source and responsive presentation.
4. Keep Pagefind, but wrap its generated markup with the library's search and
   list-navigation styling contracts.
5. Replace layout inline styles with public layout hosts or documented
   site-specific rules.
6. Keep the existing Astro content collection and route URLs.
7. For each private rule removed, decide whether the library needs a bug fix,
   a new semantic token, or a documented knob before replacing it.

Exit criteria: home and one representative documentation route work at mobile
and desktop widths using the library-first shell.

### Milestone 3: Build the example workbench

1. Implement the typed example definition and shadow preview host.
2. Implement Preview/Code tabs and build-time highlighting.
3. Add shared clipboard feedback and fallback behavior.
4. Migrate `page-examples.ts` first.
5. Migrate three MDX examples covering static HTML, CSS, and an enhancement
   module before converting the remainder.

Exit criteria: preview and displayed source are generated from the same value,
copying works, and the old `QuickExample` source surface is no longer needed.

### Milestone 4: Build reusable variable editing

1. Extract the palette editor controller and clipboard logic.
2. Add the metadata registry and generic control renderer.
3. Integrate it with the workbench host.
4. Migrate the palette explorer to the shared editor without losing its color
   filters, resolved-value copying, or synchronized horizontal scrolling.
5. Add variable-enabled examples for theme colors, typography, spacing,
   cards, forms, navigation, and layout.

Exit criteria: at least one example from every major library layer supports
safe live editing and generated CSS copying.

### Milestone 5: Migrate all content and landing pages

1. Convert existing `LiveExample`, `DialogExample`, and `TabsExample` usages.
2. Add a useful workbench to every component page.
3. Rebuild the landing page from public library primitives.
4. Remove private Astro component styles as their replacements land.
5. Keep a temporary migration report listing remaining custom selectors and
   why each is allowed.
6. Close or explicitly defer every library-feedback entry discovered during
   the migration; unresolved reusable issues block final cutover.

Exit criteria: every public component page has a working, copyable example;
no example relies on undocumented workaround CSS.

### Milestone 6: Parity, accessibility, and performance validation

1. Compare replacement screenshots with the frozen references.
2. Test navigation, search, theme switching, sidebar disclosure, TOC links,
   copy actions, example tabs, editor reset, scrolling, and back/forward
   navigation.
3. Run keyboard-only and screen-reader-oriented semantic checks.
4. Test reduced motion, forced colors, light/dark themes, 320px width, large
   text, and zoom.
5. Add automated browser tests for the critical flows.
6. Confirm no unexpected horizontal page overflow and no nested scroll trap.
7. Measure generated CSS and client JavaScript; investigate meaningful
   regressions before cutover.

Exit criteria: no critical accessibility violations, no broken routes, and all
critical browser flows pass in the production-base-path preview.

### Milestone 7: Cut over and clean up

1. Rebase the replacement on the latest canonical content.
2. Run both production builds one final time.
3. Move the replacement into `website/` and update the lockfile intentionally.
4. Keep `.github/workflows/deploy.yml` targeting `website/`.
5. Remove `website-next`, the content-sync command, and superseded components.
6. Build exactly as GitHub Actions does and preview `website/dist` locally.
7. Commit the cutover separately so it can be reverted cleanly.

Exit criteria: GitHub Pages deploys the replacement from `main`, all reference
routes resolve, and there is only one maintained documentation source tree.

## Automated checks to add

- `npm run build`: Astro production build at `/CSS-Tags/`.
- `npm run check`: Astro/TypeScript validation.
- `npm run test:browser`: focused browser tests for shell and workbench flows.
- `npm run test:a11y`: automated accessibility scan of representative routes.
- `npm run test:visual`: desktop and mobile screenshot comparisons.
- A CSS-site audit that flags private redefinitions of public component hosts
  inside `website-next`.
- A content check that every documented public component has at least one
  example definition or an explicit no-preview rationale.
- A feedback-log check that temporary workaround identifiers refer to an open
  entry and that resolved entries leave no workaround selectors behind.

## Definition of done

- The documentation site visibly and honestly uses the shipped library.
- Site chrome remains usable with JavaScript disabled except for features that
  inherently require enhancement, such as full-text search and copying.
- Every component page includes a rendered example and copyable source.
- Example source and preview cannot silently diverge.
- Important public variables can be edited in real time, reset, and copied as
  valid CSS.
- The palette uses the shared variable editor rather than a private duplicate.
- Search, navigation, theme switching, responsive layouts, and GitHub Pages
  base paths continue to work.
- The site has no accidental page-level overflow or inaccessible nested scroll
  regions.
- Private site CSS is small, documented, and limited to genuine documentation
  concerns.
- Header/footer and any other generally useful missing primitive ship in CSS
  Tags itself, with docs and examples.
- Existing components discovered to have weak APIs receive better defaults,
  semantic state contracts, hierarchical tokens, and practical knobs rather
  than docs-only patches.
- Every migrated common UI block has a completed host/region/state/knob/token/
  composition audit, and each reusable finding is reflected in the shipped
  library rather than only in the documentation site.
- Repeated implementation patterns become documented mixins, functions,
  utilities, or shared primitives where that produces a clearer API; explicit
  browser-compatible declarations remain the baseline.
- The library-feedback log has no unresolved reusable defects or undocumented
  temporary workarounds at cutover.
- The old implementation is recoverable from Git history, not maintained as a
  second production codebase.

## Recommended first implementation slice

Start with a deliberately narrow vertical slice:

1. Create `website-next` and the reference screenshots.
2. Implement the library site-header and site-footer primitives.
3. Rebuild one documentation route with the new shell.
4. Build `ExampleWorkbench` with a card example and copy action.
5. Add three editable card variables and generated override output.
6. Validate that slice at mobile and desktop widths before migrating the rest
   of the content.
7. Record every point of library friction in the feedback log, implement at
   least one reusable API improvement, and remove its temporary workaround.

That slice proves the copy strategy, library-first shell, isolated preview,
single-source code display, clipboard behavior, and variable-editing cascade
before the project commits to a full-site conversion. It also proves that the
site rebuild can feed concrete improvements back into CSS Tags instead of
accumulating another layer of private fixes.
