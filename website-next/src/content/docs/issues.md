---
title: Issues and Constraints
description: Current constraints, compatibility notes, and the status of previously reported CSS Tags issues.
---

The import and naming problems previously listed on this page are resolved.
`index.css` imports the singular `components/view-transition.css` path, every
public stylesheet is assigned to an explicit cascade layer, and the Pages build
audits the assembled site on every deployment.

## Current constraints

### Custom tags do not create semantics

Names such as `card`, `layout-stack`, and `badge` are styling hosts, not
registered web components. Use a native element when its behavior or landmark
semantics matter, or add the appropriate role and accessible name. Most public
components also support a class and a `data-*` host.

### Modern features are progressive enhancements

Anchor Positioning, customizable selects, container queries, Popover, and View
Transitions enhance supporting browsers. The documented patterns retain normal
layout, native controls, links, disclosure, or navigation behavior when an
enhancement is unavailable.

### Legacy aliases remain supported

Older button and form-control names are compatibility aliases. The canonical
APIs are `.button` and the role-specific `.form-input`, `.form-select`, and
`.form-textarea` classes. Aliases share the same tokens and state rules, but
new code should prefer the canonical names because they communicate intent.

### CSS cannot provide every interaction

ARIA tabs, carousel controls, drag-state file summaries, and cross-document
View Transitions need small JavaScript enhancements. Their markup and CSS
fallbacks remain usable without those enhancements; the component pages state
where behavior changes.

## Reporting a problem

When filing an issue, include the browser and version, the smallest semantic
HTML example that reproduces it, the imported CSS entry point, and whether the
problem occurs in light and dark schemes. A resizable documentation example is
usually the fastest reproduction.
