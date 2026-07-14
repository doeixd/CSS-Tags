/// <reference path="./css-tags.d.ts" />

const card = document.createElement("card");
const cardBody = document.createElement("card-body");
card.append(cardBody);

const modal = document.createElement("modal-dialog");
modal.setAttribute("aria-labelledby", "modal-title");

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

// @ts-expect-error layout side is intentionally limited to physical sides.
const invalidSidebar = <layout-sidebar side="middle" />;

// @ts-expect-error badge status is a documented finite set.
const invalidBadge = <badge status="maybe" />;

void example;
void modalExample;
void invalidSidebar;
void invalidBadge;
