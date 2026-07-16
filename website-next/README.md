# CSS Tags documentation site

This is the production documentation site for CSS Tags. It imports the real
library entry point from the repository root, so the documentation shell and
all isolated examples exercise the same CSS that package consumers receive.

The site includes:

- documentation for the library's components, layouts, themes, and utilities;
- rendered examples with matching source, preview tabs, and copy controls;
- scoped CSS custom-property editors and generated override CSS;
- a palette explorer and a global theme creator with layered CSS export;
- search, responsive navigation, light/dark/system previews, and TypeScript
  installation guidance.

GitHub Pages deploys this directory from the `main` branch through
`../.github/workflows/deploy.yml`.

## Development

```bash
npm ci
npm run dev
```

The development server uses `http://localhost:4322/CSS-Tags/` by default.

## Validation

```bash
npm run check
```

`check` builds the production site at the `/CSS-Tags/` base path and audits
the generated route set, internal links, examples, editor controls, package
metadata, and library contracts. A successful build currently produces 64
indexed routes.

To inspect the production output locally:

```bash
npm run preview -- --host 127.0.0.1
```

## Content and architecture

- `src/content/docs/` contains the published documentation.
- `src/data/` contains typed example and variable-control definitions.
- `src/components/ExampleWorkbench.astro` renders preview and source from one
  example definition.
- `src/components/NextThemeEditor.astro` and `src/scripts/theme-editor.ts`
  provide live theme authoring and layered CSS export.
- `src/styles/docs-site.css` is limited to documentation-specific shell and
  tooling behavior; reusable visual primitives belong in the root library.
- `LIBRARY-FEEDBACK.md` records library defects or API friction exposed by
  building the site with CSS Tags itself.

The screenshots under `reference/current/` preserve the pre-cutover site at
desktop, tablet, and mobile sizes for regression and migration comparisons.
