---
title: Library Review
description: A current review of CSS Tags' architecture, strengths, constraints, and next quality investments.
---

CSS Tags is a token-first CSS library built around native HTML, semantic state,
and optional declarative hosts. The public entry point has an explicit cascade:
tokens → theme → defaults and typography → components → layouts → utilities.

## What is working well

- **One themeable system:** semantic color, type, spacing, radius, motion, focus,
  form, feedback, and component tokens are shared rather than hardcoded per
  demo.
- **Native behavior first:** dialog, details, form controls, progress, meter,
  links, tables, and ARIA state remain the behavior-bearing APIs.
- **Flexible hosts:** public visual primitives support custom tags, `data-*`
  attributes, and classes where each form is practical.
- **Progressive enhancement:** Popover, Anchor Positioning, customizable select,
  container queries, and View Transitions retain useful fallbacks.
- **Logical responsive CSS:** layouts and corner utilities account for writing
  direction, container size, long content, and reduced motion.
- **Documentation as verification:** live examples use the shipped `index.css`
  API, can be resized, and are checked across 83 generated routes.

## Resolved structural findings

Earlier reviews reported broken view-transition imports, missing aggregate
stylesheets, inconsistent layers, and nonexistent TypeScript support. Those
findings no longer describe the repository:

- `index.css` imports existing files from the organized `core/`,
  `components/`, `layouts/`, `utilities/`, and `themes/` directories.
- Every import is assigned to the declared cascade.
- View-transition CSS and JavaScript use the singular file names consistently.
- `types/css-tags.d.ts` covers the shipped custom tags and finite attributes.
- GitHub Pages runs the production build and route/API audit before deployment.

See [Issues and Constraints](../issues/) for current compatibility notes rather
than the superseded import report.

## Remaining quality investments

### Browser and accessibility regression coverage

The build audit verifies routes, imports, API contracts, and representative
markup. The next leverage point is an automated browser matrix for computed
layout, keyboard paths, forced-colors, RTL, 200% text, and screenshot
regressions.

### Compatibility lifecycle

Legacy button and form-control aliases intentionally remain functional. A
versioned deprecation policy and changelog would make it clearer when aliases
can move from recommended, to compatibility-only, to removable.

### Optional delivery profiles

The single `index.css` entry is the clearest default. Projects with strict CSS
budgets could also benefit from documented component-category entry points,
provided those profiles preserve layer order and token dependencies.

### Documentation source ownership

The current and compatibility documentation trees are kept aligned. Continuing
to strengthen the sync/audit path will prevent examples and API prose from
drifting as components evolve.

## Review standard

Future changes should be evaluated against five questions:

1. Does semantic HTML or ARIA state carry the behavior?
2. Is repeated customization expressed as a token rather than a one-off value?
3. Do canonical and compatibility hosts share one implementation?
4. Does the pattern survive narrow containers, RTL, dark mode, forced colors,
   reduced motion, and long content?
5. Is the shipped API demonstrated and guarded by the build audit?
