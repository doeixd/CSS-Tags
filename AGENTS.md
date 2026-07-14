# AGENTS

## Project Philosophy
- Prefer token-first design over one-off hardcoded values.
- Prefer semantic HTML and ARIA-driven styling first, with custom elements as an optional host style rather than a requirement.
- Public component APIs should work in three forms when practical: custom element, `data-*` host, and class host.
- Use progressive enhancement for modern platform features like Popover API, Anchor Positioning, customizable select, and View Transitions.
- Keep CSS layered and responsibilities clear: tokens -> theme -> defaults/typography -> components -> utilities -> layouts.

## Selector Conventions
- For public primitives and components, prefer selectors shaped like `:is(component-tag, [data-component], .component)`.
- Do not force users to adopt custom elements if a normal element with class or `data-*` can express the same intent.
- Prefer semantic selectors for built-in browser features when possible:
  - `aria-busy` for loading
  - `role="switch"` for switches
  - `role="tablist"`, `role="tab"`, `role="tabpanel"` for tabs
  - native `details` / `summary` for disclosure
  - native `progress` and `meter` for status indicators

## Tokens And Variables
- Add dedicated semantic tokens when users are likely to theme something directly.
- Prefer hierarchical variables over flat one-off values.
- Expose element/component-specific tokens where customization is likely, for example:
  - form controls
  - typography hierarchy and prose rhythm
  - loading states
  - disclosure/tabs
  - status elements
- When an attribute should accept `var(...)`, avoid narrow typed `attr(... type(<color>))` parsing; use `type(*)` when needed.

## Typography And Content
- Typography is a first-class system, not just heading sizes.
- Maintain a semantic type hierarchy for:
  - body
  - headings
  - lead
  - caption
  - eyebrow
  - code
- Prefer readable defaults for longform content via `.prose` / `[data-prose]`.
- Keep rhythm tokens for relationships between unlike elements, not just per-element margins.
- Rich content defaults should cover paragraphs, headings, lists, code blocks, figures, figcaptions, blockquotes, callouts, hr, mark, and abbr.

## Lists
- Native `ul` / `ol` should share the same tokens as the declarative list component.
- The list component should enhance the native list model rather than invent a separate visual system.
- Reserve the custom list host for cases like inline lists, custom markers, icons, and dividers.

## Loading And Feedback
- Prefer semantic loading states over bespoke wrappers.
- Use `aria-busy="true"` as the primary spinner trigger.
- Skeletons should be simple utility/component hooks, not heavyweight abstractions.
- Semantic feedback surfaces should always have matching contrast text tokens.

## Disclosure And Tabs
- Prefer `details` / `summary` for no-JS disclosure and accordion patterns.
- ARIA tabs are the canonical fully semantic tab pattern when tab behavior is required.
- `details`-based tabs are acceptable as a no-JS disclosure-style alternative, but should be documented as disclosure-driven rather than treated as identical to ARIA tabs.
- Avoid inventing JS-dependent APIs when native elements already provide a good semantic path.

## Layout Preferences
- `layout-stack` should make children full-width by default.
- Allow explicit opt-outs for intrinsic-width children with dedicated hooks like `.stack-intrinsic`.
- Layout tokens should use raw CSS values, not quoted strings.

## Demo And Docs Expectations
- Demos should reflect the real library API, not workaround-only code.
- If a feature is added to the library, document it and add or update a demo for it.
- Keep docs aligned with the shipped import structure in `index.css`.
- Make docs explicit when a feature supports custom tags, classes, and `data-*` hosts.

## Accessibility Preferences
- Keep accessibility semantics in the markup/API rather than bolting them on visually.
- Prefer visible focus states, reduced-motion support, and semantic state attributes.
- Use ARIA/state attributes as the styling contract when they are the natural platform primitive.

## Editing Preferences
- Prefer the smallest correct change, but add first-class tokens when repeated customization pressure appears.
- Avoid parallel overlapping systems when an existing layer can be extended cleanly.
- When modern platform features are used, provide graceful fallbacks or clearly scoped progressive enhancement.
