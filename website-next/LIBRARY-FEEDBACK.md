# CSS Tags library feedback from the documentation rebuild

This log records reusable library problems exposed while rebuilding the docs
site. Temporary site workarounds must reference an entry here and state when
they can be removed.

## Status values

- `open`: reproduced and awaiting a library-level design
- `planned`: public API agreed; implementation pending
- `implemented`: library, documentation, examples, and relevant typings updated
- `verified`: replacement site uses the improved API and the workaround is gone
- `site-specific`: reviewed and intentionally kept in documentation-site code

## FB-001 — No public site-header primitive

- Status: `verified`
- Exposed by: rebuilding the global documentation header
- Reproduction: the existing `Header.astro` needs hundreds of private CSS lines
  to arrange a brand, search, navigation, and actions.
- Current workaround: the production site retains its private header while the
  parallel replacement is built.
- Proposed library solution: native-first `header.site-header`,
  `header[data-site-header]`, and optional `site-header` hosts with explicit
  brand/action regions, sticky and compact variants, safe-area support, and
  hierarchical tokens.
- Removal condition: the replacement header is composed from the shipped
  primitive with no private component styling.

## FB-002 — No public site-footer primitive

- Status: `verified`
- Exposed by: rebuilding page-level documentation chrome
- Reproduction: the library has page layout slots and dividers but no reusable
  responsive footer surface or metadata arrangement.
- Current workaround: retain the existing production footer/sidebar metadata.
- Proposed library solution: native-first `footer.site-footer`,
  `footer[data-site-footer]`, and optional `site-footer` hosts with grid,
  metadata, compact, centered, and bordered variants.
- Removal condition: the replacement footer uses only the public primitive and
  ordinary content markup.

## FB-003 — Example preview, source, copying, and token editing are fragmented

- Status: `verified`
- Exposed by: component documentation examples and the palette explorer
- Reproduction: `LiveExample`, `QuickExample`, `PageExample`, and
  `ColorPaletteViewer` each own part of the example experience; preview and
  displayed source can diverge.
- Current workaround: keep the existing components in the production site.
- Proposed library/docs solution: a documentation workbench composed from
  public tabs, actions, forms, and layout primitives, backed by one typed
  example definition and one shared clipboard/editor controller.
- Classification note: the workbench itself is documentation tooling, while
  any component limitations it exposes must be fixed in CSS Tags.
- Migration result: generated fallback examples, the site-shell reference, and
  authored MDX examples all resolve through the unified workbench. The legacy
  component is now only a build-time adapter that renders its slot once and
  supplies that exact HTML to preview, code, reset, and copy behavior.
- Palette integration: its compact one-at-a-time editor remains specialized for
  the unusually large token set, but now consumes the same typed
  `CssVariableControl` registry and shared clipboard behavior as workbenches.
- Removal condition: all new examples use the unified definition and controls.

## FB-004 — Card variables could not inherit from a component region

- Status: `verified`
- Exposed by: attaching the first reusable variable editor to a card preview
- Reproduction: setting `--card-padding` on the preview host had no effect
  because every card redeclared the same public variable on itself.
- Previous workaround: an editor would have needed to reach into the shadow
  preview and set inline styles directly on each card.
- Library solution: card defaults now resolve through private `--_card-*`
  aliases while public `--card-*` inputs remain inheritable.
- Affected API: card background, color, border, radius, padding, and gap tokens.
- Removal condition: browser verification proves a preview-host override
  updates the nested card without an internal selector or inline card style.

## FB-005 — Legacy route CSS contaminated the replacement shell

- Status: `verified`
- Exposed by: rendering the first replacement route at desktop width
- Reproduction: importing both Astro layouts from one conditional catch-all
  route bundled the legacy layout's global `body` grid into the replacement
  page, collapsing its content to the legacy sidebar column.
- Solution: the replacement route is an explicit page entry and the catch-all
  excludes it, so each shell receives only its own global stylesheet.
- Classification: documentation architecture; no library API was required.

## FB-006 — Layout primitives lost intrinsic size inside flex and grid

- Status: `verified`
- Exposed by: composing `layout-cluster` inside the site header and workbench
  toolbar.
- Reproduction: every layout primitive unconditionally used
  `container-type: inline-size`; size containment makes its intrinsic inline
  contribution zero, so nested clusters and their buttons collapsed.
- Library solution: layouts size from their children by default. Named size
  containment is now explicit through `container-query`,
  `data-container-query`, or `.layout-container`, with
  `--layout-container-name` as the naming knob.
- Removal condition: desktop and mobile browser verification shows nested
  clusters retain content width, and the opt-in helpers still respond.

## FB-007 — Direct card header and footer regions had no inset

- Status: `verified`
- Exposed by: composing the unified example workbench from public card regions.
- Reproduction: `card-header` and `card-footer` were styled typographically but
  had no padding when placed directly under a card.
- Library solution: direct regions inherit the card inset with dedicated
  header/footer padding knobs; regions nested in `card-body` do not double it.
- Removal condition: browser verification covers both direct and nested region
  structures.

## FB-008 — Sidebar regions depended on framework-sensitive slot markup

- Status: `verified`
- Exposed by: migrating the long-form Getting Started guide.
- Reproduction: Astro consumed `slot="aside"` from a conditional table-of-
  contents region, so `layout-sidebar` classified it as main content and wrapped
  it above the article.
- Library solution: the supporting region now accepts `slot="aside"`,
  `data-layout-sidebar-aside`, or `.layout-sidebar__aside`, matching the
  library's custom/data/class API convention and preserving semantic elements.
- Removal condition: browser verification shows both nested sidebars maintain
  their intended columns at wide widths and stack without overflow when narrow.

## FB-009 — Generated prose tables could widen the entire page

- Status: `verified`
- Exposed by: mobile QA of the Getting Started browser-support table.
- Reproduction: Markdown emits a bare native table, so it cannot use the
  preferred `data-table` overflow wrapper and widened the document by 9px.
- Library solution: direct tables in `.prose`/`[data-prose]` become bounded
  horizontal scroll regions while preserving native table markup and cells.
  Scrollbar gutter and width remain adjustable through prose-specific tokens.
- Removal condition: mobile browser verification reports no document overflow
  and the table itself remains horizontally scrollable.

## FB-010 — Long inline API signatures widened prose

- Status: `verified`
- Exposed by: full mobile route audit of the Text primitive reference.
- Reproduction: inline `code` values containing attribute unions could not
  break and widened the document by 35px; preformatted blocks already had the
  correct independent scroller.
- Library solution: inline code inside prose uses the adjustable
  `--prose-inline-code-wrap` and `--prose-inline-code-word-break` policy while
  code blocks remain unchanged.
- Removal condition: the Text route reports zero document overflow at 375px.

## FB-011 — Applications could not override the system color scheme

- Status: `verified`
- Exposed by: adding a persistent light/dark/system control to the replacement
  documentation header.
- Reproduction: the theme only responded to `prefers-color-scheme`, so an
  application control had to duplicate the library's dark semantic token set.
- Library solution: `data-color-scheme="light|dark"` on `:root` explicitly
  selects contrast mode; removing it restores automatic system behavior.
  Brand selection remains independently controlled by `data-theme`.
- Removal condition: the replacement site switches all semantic surfaces and
  native controls among light, dark, and system modes without private theme
  token overrides.

## FB-012 — Customizable form selects stacked their picker icon

- Status: `verified`
- Exposed by: compacting the replacement header's color-scheme control.
- Reproduction: the generic form-control rule gave `.form-select`
  `display: block`; under `appearance: base-select`, Chrome then laid the
  selected content and picker icon on separate lines.
- Library solution: supported customizable selects become inline flex controls,
  keep selected content and the picker icon aligned, and expose
  `--form-select-icon-gap` for the relationship between them.
- Removal condition: the header control and standalone form demo remain
  single-line at compact and default widths in a supporting browser.

## FB-013 — Optional content regions needed a shared composition contract

- Status: `verified`
- Exposed by: composing documentation page headers, search/activity rows, and
  no-result states without private site selectors.
- Reproduction: the library had no common contract for optional media, body,
  metadata, or action children. Global typography rhythm also created large
  gaps inside compact blocks, and a three-region row squeezed its body into a
  one-character column at mobile widths.
- Library solution: `content-header`, `media-object`, and `empty-state` now
  accept custom-element, data, and class hosts. Direct optional regions accept
  equivalent light-DOM slot labels, data hooks, and class hooks. A stacked
  baseline works without `:has()`; supported browsers enhance only the regions
  present. Component body regions own compact heading/paragraph/list rhythm,
  and media-object actions move to a second row under narrow viewport pressure.
- Compatibility: `slot` is documented as a styling label rather than Shadow
  DOM distribution. `:has()` rules are contained by `@supports`, and semantics
  remain the responsibility of native hosts and ARIA in the markup.
- Removal condition: desktop and 375px browser QA shows all optional-region
  combinations remain readable without document overflow, and the TypeScript
  global test covers all three custom hosts.

## FB-014 — Alerts were class-only and depended on experimental mixins

- Status: `verified`
- Exposed by: auditing host consistency and ordinary fallback declarations for
  reusable feedback surfaces.
- Reproduction: alerts supported only `.alert`; semantic surface variables
  were assigned through experimental `@apply` mixins, and the fixed three-
  column grid reserved unnecessary structure when icon or actions were absent.
- Library solution: `alert-message`, `[data-alert]`, and `.alert` now share a
  native-token implementation. Status and density support bare, data, and
  class forms; icon/title/body/actions support slot, data, and class region
  aliases. `:has()` adds only columns that exist, with a stacked fallback and
  narrow-screen action placement.
- Removal condition: TypeScript checks and desktop/mobile browser QA cover the
  custom, data, and class examples without overflow or experimental mixin
  support being required.

## FB-015 — New guide content could be omitted from the static route manifest

- Status: `verified`
- Exposed by: adding the Common Footguns guide.
- Reproduction: the content collection and navigation accepted the new file,
  but the guide page used a separate hard-coded slug list, producing a broken
  navigation target without failing the build.
- Documentation-site solution: the guide is included in the route manifest,
  and the generated-site audit now resolves internal links against the actual
  set of built routes.
- Classification: documentation architecture; no library selector was needed.
- Removal condition: `npm run check` builds 62 routes and fails when a local
  route link points to a page absent from `dist`.

## FB-016 — Global theme editing lacked coherent density and radius inputs

- Status: `verified`
- Exposed by: building a minimal collapsed theme editor for the replacement
  documentation header.
- Reproduction: the generative color inputs were editable, but spacing had no
  hierarchical density input and the theme defined `--border-radius-*` while
  many components consumed `--radius-*`.
- Library solution: `--density-factor` now scales the existing spacing tokens;
  `--radius-factor` scales the non-pill radius hierarchy; and preferred short
  radius aliases resolve to the compatible long names. Both factors default to
  `1`, preserving existing output.
- Documentation solution: a collapsed Theme panel edits the root accent,
  palette relationships, surface tint, contrast, density, and radius inputs;
  persists only explicit overrides; restores them before first paint; resets
  to library defaults; and emits copyable `:root` CSS.
- Removal condition: desktop and 375px browser QA proves live updates, internal
  panel scrolling, reset, copy feedback, and persistence across reload while
  the default closed header remains compact.

## FB-017 — Common CMS output lacked a resilient prose contract

- Status: `verified`
- Exposed by: composing a renderer-produced article from ordinary Markdown and
  CMS HTML rather than hand-authored component wrappers.
- Reproduction: task-list checkboxes, footnote sections, heading permalinks,
  definition descriptions, quote citations, table captions, embedded media,
  and long links had no shared prose contract. Width and density variants also
  required page-specific selectors.
- Library solution: prose now supports compact, wide, and unbounded scopes;
  common task/footnote/heading hooks; native definition, quote, figure, table,
  details, and embed composition; target scroll margins; and dedicated public
  tokens for each likely customization point.
- Documentation solution: the CMS and Markdown guide includes a live semantic
  article fragment, renderer-neutral hook table, overflow guidance, tokens,
  accessibility requirements, and an integration checklist.
- Removal condition: desktop and 375px browser QA show no page overflow and
  readable content hierarchy; the generated-site audit asserts the task,
  footnote, heading-anchor, and table-caption output remains present.

## FB-018 — Visual variants collided with ARIA roles and draft CSS leaked into baselines

- Status: `verified`
- Exposed by: the cross-library API and compatibility audit.
- Reproduction: badge and chip surfaces accepted values such as
  `role="subtle"`, which are not valid ARIA roles; badge colors and popover
  elevation also included experimental `@apply` syntax in shipped component
  rules. The TypeScript declarations reinforced the visual-role collision.
- Library solution: `variant`, `data-variant`, and class aliases are the public
  visual API; legacy visual-role selectors remain as deprecated CSS-only
  compatibility. Badges and popovers now use ordinary token-based CSS, badge
  statuses and sizes support all host forms, and typings reserve `role` for
  accessibility semantics.
- Removal condition: examples and documentation no longer author visual role
  values, type tests reject unknown variants, and the generated-site audit
  fails if an ordinary baseline import introduces active `@apply` syntax.

## FB-019 — Parent-aware enhancements lacked explicit fallback contracts

- Status: `verified`
- Exposed by: reviewing every active `:has()` selector.
- Reproduction: rich tooltips needed `:has()` to establish and activate their
  positioning parent, and `layout-split[no-stack]` unnecessarily depended on
  `:has()` even though the attribute itself expresses the layout intent.
- Library solution: rich tooltips accept `data-tooltip-host` or
  `.tooltip-host` as a compatibility-safe parent contract while retaining
  automatic `:has()` inference; placement supports attribute, data, and class
  forms. No-stack split layout is now unconditional and supports data/class
  aliases. Card parent-aware spacing is explicitly contained in `@supports`.
- Removal condition: the source audit requires the explicit tooltip and split
  fallbacks, while documentation explains which behavior is baseline and which
  is inferred enhancement.

## FB-020 — The library lacked a consumable npm contract

- Status: `verified`
- Exposed by: documenting how a real application should install CSS Tags
  rather than copying repository files or relying on the documentation build.
- Reproduction: the repository had no package manifest, license, export map,
  package-scoped TypeScript entry point, or installation guide, so npm and
  bundler consumers had no stable public contract.
- Library solution: the root package now publishes only the shipped CSS,
  enhancement modules, and global declarations; exposes the aggregate and
  subpath imports; identifies the stylesheet and types; and includes public
  metadata, MIT licensing, and side-effect declarations.
- Documentation solution: the npm guide demonstrates stylesheet imports,
  JavaScript bundler imports, subpath imports, global TypeScript declarations,
  and the correct cascade order for a user theme.
- Removal condition: the production-site audit checks package metadata and the
  generated npm route, while `npm pack --dry-run` excludes source-site and
  scratch files.

## FB-021 — Theme authoring and contextual typography were too flat

- Status: `verified`
- Exposed by: turning the docs theme switcher into a useful theme creator that
  can produce a drop-in layer for a product site.
- Reproduction: applications could change colors, density, and radii, but
  common prose, interface, navigation, controls, metadata, and heading
  relationships either shared broad tokens or required local overrides. The
  editor could copy a raw `:root` block but could not name, scope, or download
  a reusable theme layer.
- Library solution: contextual type inputs now cover family, size, leading,
  measure, weight, and tracking at the semantic levels applications commonly
  tune. Component consumers derive from those inputs, and the TypeScript theme
  contract enumerates the supported authoring knobs.
- Documentation solution: grouped presets and live controls generate valid
  `@layer css-tags-theme` CSS for either the document or a named `data-theme`
  scope, with copy, reset, persistence, and file download actions.
- Removal condition: desktop and mobile browser QA proves live contextual type
  updates, named scoping, generated-layer copying, download behavior, panel
  scrolling, and persistence without page overflow.

## FB-022 — Dense documentation exposed noisy defaults and weak overflow polish

- Status: `verified`
- Exposed by: rebuilding the documentation shell with the shipped library and
  testing code-heavy pages at desktop and mobile widths.
- Reproduction: list navigation only had a boxed treatment, cards moved on
  hover, inline code inherited a visible border, scrollbars had no shared
  theme contract, and the root view transition slid slowly between pages.
- Library solution: list navigation now has a public `flush` variant; cards are
  flat by default; inline code uses a faint background with cloned wrapping;
  scrollbars use semantic tokens; and root navigation uses a quick cross-fade.
- Documentation solution: the shell uses the flush navigation form, a neutral
  palette, shared safe-width and inset variables, tighter vertical rhythm, and
  bounded, line-preserving highlighted source panels.
- Removal condition: build and type audits pass, ARIA tab examples operate in
  their isolated preview roots, and browser QA confirms alignment, wrapping,
  copy controls, syntax highlighting, and page scrolling at desktop and mobile
  sizes.

## FB-023 — Isolated examples exposed theme and carousel contract drift

- Status: `verified`
- Exposed by: rendering the shipped components inside the documentation's live
  preview roots at desktop and mobile widths.
- Reproduction: preview roots restored default theme inputs instead of the
  documentation theme, heading measure wrapped titles prematurely, and the
  carousel demo duplicated behavior while its fixed-width slides overflowed
  narrow previews and its controls could appear before enhancement.
- Library solution: heading measure is a wider semantic token; carousel slides
  occupy the host width; navigation uses themeable component tokens; controls
  appear only after successful enhancement; and inactive slides are hidden
  from assistive technology and made inert.
- Documentation solution: preview roots retain DOM and selector isolation while
  inheriting live theme inputs, and the carousel example initializes through
  the shipped JavaScript module. Search, scroll-aware outline nesting,
  auto-hiding shell scrollbars, and sequential page navigation now use the
  compact, readable patterns from the previous site.
- Removal condition: the build audit requires the shared carousel initializer,
  full-width slide contract, enhancement flag, inert inactive slides, and
  inherited preview theme inputs; browser QA confirms search, outline depth,
  carousel controls, and page navigation at desktop and mobile widths.

## FB-024 — Theme surfaces and button interaction needed coherent public knobs

- Status: `verified`
- Exposed by: using the documentation theme creator to tune neutral hierarchy
  and comparing native, utility, and form-button interaction feedback.
- Reproduction: surface chroma was editable but tonal depth was hardcoded, and
  button implementations repeated state timing, transforms, and focus details
  instead of deriving from one interaction contract.
- Library solution: `--surface-lightness-shift` safely lifts or dims both color
  schemes, while `--surface-contrast` controls separation between semantic
  surface tiers. Shared button tokens now cover base, hover, active, disabled,
  transition, transform, and shadow behavior; native and ARIA-disabled states
  retain semantic markup and reduced-motion support.
- Documentation solution: the live creator exposes both surface inputs,
  persists them, includes them in presets, and exports them in the generated
  theme layer. Theme and defaults references document the public contracts.
- Removal condition: source and generated-site audits require the new theme
  controls and button tokens; browser QA proves live updates in light and dark
  schemes plus distinct hover, pressed, and keyboard-focus states.

## FB-025 — Data surfaces were narrower and louder than their containers

- Status: `verified`
- Exposed by: comparing documentation tables and active navigation treatments
  against the surrounding neutral documentation shell.
- Reproduction: prose and responsive table paths could visually shrink inside
  their wrappers, table colors reused stronger general-purpose highlights, and
  flush navigation marked the active item with an accent-colored edge.
- Library solution: native, prose, and responsive tables explicitly fill their
  containers and use dedicated low-contrast surface, border, divider, stripe,
  heading, and hover tokens. Flush navigation keeps current-item background and
  text feedback without a decorative accent edge; forced-colors retains a
  system-colored structural edge for accessibility.
- Documentation solution: the table reference explains global theme tokens and
  per-table aliases using the real wrapper-based overflow API.
- Removal condition: build audits require the full-width table contract and
  dedicated table tokens; browser QA confirms container fill and restrained
  light/dark table contrast.
