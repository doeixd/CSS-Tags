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

const siteHeader = document.createElement("site-header");
siteHeader.setAttribute("role", "banner");

const siteFooter = document.createElement("site-footer");
siteFooter.setAttribute("role", "contentinfo");

const contentHeader = document.createElement("content-header");
contentHeader.append(document.createElement("h1"));

const mediaObject = document.createElement("media-object");
mediaObject.setAttribute("aria-label", "Account activity");

const emptyState = document.createElement("empty-state");
emptyState.setAttribute("role", "status");

const alertMessage = document.createElement("alert-message");
alertMessage.setAttribute("role", "status");

const colorScheme: CSSTags.ColorScheme = "dark";
const eyebrow = document.createElement("eyebrow");
const themeOverrides: CSSTags.ThemeOverrides = {
  "--accent-h": "210",
  "--surface-lightness-shift": "1%",
  "--surface-contrast": "72%",
  "--font-size-prose": "1.0625rem",
  "--measure-prose": "64ch",
};

const example = (
  <layout-grid min-item-size="14rem" gap="var(--space-md)">
    <card>
      <card-body>
        <badge status="success" size="sm" variant="subtle">Typed</badge>
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

const queryLayoutExample = <layout-stack container-query />;

const siteShellExample = (
  <>
    <site-header role="banner" sticky compact />
    <site-footer role="contentinfo" bordered centered />
  </>
);

const newElementsExample = (
  <layout-stack>
    <icon-button size="sm" aria-label="Close" />
    <input-group data-stack="auto" />
    <user-avatar shape="square" size="lg">AL</user-avatar>
    <message-bubble data-sender="self">Hello</message-bubble>
    <snap-feed aria-label="Updates" />
    <content-header><text size="2xl">Projects</text></content-header>
    <media-object aria-label="Account activity" />
    <empty-state role="status">No projects</empty-state>
    <alert-message status="success" density="compact" role="status">Saved</alert-message>
    <nav-list variant="flush" aria-label="Documentation" />
    <chip variant="overt" size="sm">Typed chip</chip>
  </layout-stack>
);

// @ts-expect-error layout side is intentionally limited to physical sides.
const invalidSidebar = <layout-sidebar side="middle" />;

// @ts-expect-error badge status is a documented finite set.
const invalidBadge = <badge status="maybe" />;

// @ts-expect-error badge surfaces use `variant`; `role` remains an ARIA attribute.
const invalidBadgeVariant = <badge variant="loud" />;

// @ts-expect-error chip surfaces use the documented finite variant set.
const invalidChipVariant = <chip variant="loud" />;

// @ts-expect-error list navigation exposes only the documented flush variant.
const invalidListNavigationVariant = <nav-list variant="boxed" />;

// @ts-expect-error divider orientation is intentionally finite.
const invalidDivider = <divider orientation="diagonal" />;

void example;
void modalExample;
void dividerExample;
void fluidTypeExample;
void queryLayoutExample;
void siteShellExample;
void newElementsExample;
void invalidSidebar;
void invalidBadge;
void invalidBadgeVariant;
void invalidChipVariant;
void invalidListNavigationVariant;
void invalidDivider;
void colorScheme;
void eyebrow;
void themeOverrides;
void contentHeader;
void mediaObject;
void emptyState;
void alertMessage;
