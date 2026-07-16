# Documentation rebuild visual baseline

The `current/` screenshots preserve the production documentation site before
route migration. They are evidence, not pixel-perfect targets: the replacement
may intentionally change spacing, hierarchy, and component visuals when the
shipped CSS Tags API produces a clearer result.

Captured routes:

- `home`: landing page and global chrome
- `card`: component page with a rendered example
- `getting-started`: long-form guide
- `palette`: dense interactive tooling
- `examples`: example-heavy documentation

Each route is captured at 1440×1000 (`desktop`), 768×1024 (`tablet`), and
375×812 (`mobile`). Compare semantic structure, content availability,
scrollability, overflow, responsive behavior, and interaction affordances—not
only pixels.
