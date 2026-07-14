---
title: TypeScript
description: Add CSS Tags custom elements to the DOM and JSX type systems with the shipped declaration file.
---

CSS accepts unknown custom tags without registration, but TypeScript needs to know their names and attributes. CSS Tags ships [`types/css-tags.d.ts`](https://github.com/doeixd/CSS-Tags/blob/main/types/css-tags.d.ts) for that purpose.

The declarations provide two things:

- `HTMLElementTagNameMap` entries for typed DOM APIs such as `document.createElement("card")`
- global `JSX.IntrinsicElements` entries for JSX setups that read the global JSX namespace

## Add the declarations

Until the library is published as an npm package, copy `types/css-tags.d.ts` into your project—for example, `src/types/css-tags.d.ts`. A normal TypeScript configuration that includes `src` will discover it automatically.

```json title="tsconfig.json"
{
  "compilerOptions": {
    "strict": true,
    "lib": ["DOM", "ES2022"]
  },
  "include": ["src"]
}
```

If the file lives outside an included directory, add it explicitly:

```json title="tsconfig.json"
{
  "include": [
    "src",
    "types/css-tags.d.ts"
  ]
}
```

For a small project, a triple-slash reference also works:

```ts
/// <reference path="../types/css-tags.d.ts" />
```

Do not import the declaration for runtime side effects. It contains types only; include `index.css` separately in your HTML or application stylesheet.

## Typed DOM APIs

The global tag-name map gives TypeScript the correct base element type:

```ts
const card = document.createElement("card");
const body = document.createElement("card-body");

body.textContent = "Typed custom-element markup";
card.append(body);
```

CSS Tags does not register JavaScript custom-element classes, so these entries intentionally resolve to `HTMLElement`, not a fictional component class.

## JSX

In JSX setups that use the global `JSX` namespace, the tags and their public attributes are checked directly:

```tsx
export function ProductGrid() {
  return (
    <layout-grid min-item-size="16rem" gap="var(--space-md)">
      <card>
        <card-body>
          <card-header>Starter plan</card-header>
          <card-content>For small sites and prototypes.</card-content>
        </card-body>
      </card>
    </layout-grid>
  );
}
```

Attribute unions catch common mistakes. For example, `badge` status accepts `success`, `warning`, `error`, `info`, `primary`, or `overt`, and `layout-sidebar` limits `side` to `left` or `right`.

## React 19 and framework-owned JSX

React, Solid, Preact, and other JSX runtimes may own a module-scoped JSX namespace instead of using the global one. The DOM declarations still work, but framework JSX may need a small adapter in your application.

For React, create a local `src/types/css-tags-react.d.ts`:

```ts
import type * as React from "react";
import type {} from "./css-tags";

type CustomTag<Props = object> =
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  & Props;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "layout-grid": CustomTag<{
        "min-item-size"?: string;
        gap?: string;
      }>;
      "layout-stack": CustomTag<{
        gap?: string;
        align?: string;
        center?: boolean;
      }>;
      card: CustomTag;
      "card-body": CustomTag;
      "card-header": CustomTag;
      "card-content": CustomTag;
      "card-footer": CustomTag;
      badge: CustomTag<{
        status?: "success" | "warning" | "error" | "info" | "primary" | "overt";
        size?: "sm" | "md" | "lg";
      }>;
      chip: CustomTag<{
        size?: "sm" | "md" | "lg";
        removable?: boolean;
      }>;
    }
  }
}
```

Extend that adapter with the tags your React project uses. Keeping it local avoids making CSS Tags depend on React or forcing React types into non-React projects.

## Extending the declarations

The interfaces are open, so an application can add its own project-specific tags:

```ts
declare global {
  interface HTMLElementTagNameMap {
    "project-toolbar": HTMLElement;
  }

  namespace JSX {
    interface IntrinsicElements {
      "project-toolbar": CSSTags.GlobalAttributes & {
        mode?: "view" | "edit";
      };
    }
  }
}

export {};
```

## Troubleshooting

### JSX still says the tag does not exist

Confirm the declaration file appears under `tsc --listFiles`. If it does, your framework probably uses a module-owned JSX namespace; add the framework adapter described above.

### DOM types such as `HTMLElement` are missing

Add `"DOM"` to `compilerOptions.lib`. Server-only configurations often omit browser types intentionally.

### CSS is not applied

Types do not load styles. Include the CSS separately:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/doeixd/CSS-Tags@latest/index.css">
```

The declaration file and `index.css` should come from the same revision so documented attributes stay aligned with shipped selectors.
