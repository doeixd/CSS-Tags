/// <reference path="./css-tags.d.ts" />

const card = document.createElement("card");
const cardBody = document.createElement("card-body");
card.append(cardBody);

const modal = document.createElement("modal-dialog");
modal.setAttribute("aria-labelledby", "modal-title");

const divider = document.createElement("divider");
divider.setAttribute("role", "separator");
divider.setAttribute("aria-orientation", "vertical");

const fluidContainer = document.createElement("fluid-container");
fluidContainer.append(document.createElement("h2"));

const example = (
  <layout-grid min-item-size="14rem" gap="var(--space-md)">
    <card>
      <card-body>
        <badge status="success" size="sm">Typed</badge>
      </card-body>
    </card>
  </layout-grid>
);

const modalExample = (
  <modal-dialog aria-labelledby="modal-title">Dialog surface</modal-dialog>
);

const dividerExample = (
  <divider role="separator" aria-orientation="vertical" strength="overt" />
);

const fluidTypeExample = (
  <fluid-container>
    <text size="6xl">Container-relative type</text>
  </fluid-container>
);

const newElementsExample = (
  <layout-stack>
    <icon-button size="sm" aria-label="Close" />
    <input-group data-stack="auto" />
    <user-avatar shape="square" size="lg">AL</user-avatar>
    <message-bubble data-sender="self">Hello</message-bubble>
    <snap-feed aria-label="Updates" />
  </layout-stack>
);

// @ts-expect-error layout side is intentionally limited to physical sides.
const invalidSidebar = <layout-sidebar side="middle" />;

// @ts-expect-error badge status is a documented finite set.
const invalidBadge = <badge status="maybe" />;

// @ts-expect-error divider orientation is intentionally finite.
const invalidDivider = <divider orientation="diagonal" />;

void example;
void modalExample;
void dividerExample;
void fluidTypeExample;
void newElementsExample;
void invalidSidebar;
void invalidBadge;
void invalidDivider;
