/**
 * TypeScript declarations for CSS Tags custom elements.
 *
 * Include this file from tsconfig.json or with a triple-slash reference to add
 * the elements to document.createElement() and the global JSX namespace.
 */

export {};

declare global {
  namespace CSSTags {
    type BooleanAttribute = boolean | "" | "true" | "false";
    type CSSValue = string;
    /** Values accepted by the root `data-color-scheme` override. */
    type ColorScheme = "light" | "dark";

    /** Typed authoring inputs accepted by the documentation theme creator. */
    interface ThemeOverrides {
      "--accent-h"?: CSSValue;
      "--accent-c"?: CSSValue;
      "--accent-l"?: CSSValue;
      "--surface-saturation"?: CSSValue;
      "--surface-lightness-shift"?: CSSValue;
      "--surface-contrast"?: CSSValue;
      "--secondary-hue-shift"?: CSSValue;
      "--tertiary-hue-shift"?: CSSValue;
      "--contrast-factor"?: CSSValue;
      "--success-h"?: CSSValue;
      "--warning-h"?: CSSValue;
      "--error-h"?: CSSValue;
      "--info-h"?: CSSValue;
      "--density-factor"?: CSSValue;
      "--radius-factor"?: CSSValue;
      "--font-size-prose"?: CSSValue;
      "--line-height-prose"?: CSSValue;
      "--measure-prose"?: CSSValue;
      "--font-size-ui"?: CSSValue;
      "--font-size-control"?: CSSValue;
      "--font-weight-heading"?: CSSValue;
      "--letter-spacing-heading"?: CSSValue;
    }

    interface GlobalAttributes {
      id?: string;
      class?: string;
      className?: string;
      slot?: string;
      style?: string | Partial<CSSStyleDeclaration>;
      title?: string;
      role?: string;
      tabindex?: number | string;
      hidden?: boolean;
      children?: unknown;
      [attribute: `aria-${string}`]: string | number | boolean | undefined;
      [attribute: `data-${string}`]: unknown;
    }

    interface LayoutAttributes extends GlobalAttributes {
      gap?: CSSValue;
      align?: CSSValue;
      center?: BooleanAttribute;
      "container-query"?: BooleanAttribute;
    }

    interface LayoutGridAttributes extends LayoutAttributes {
      "min-item-size"?: CSSValue;
    }

    interface LayoutSplitAttributes extends LayoutAttributes {
      fraction?: CSSValue;
      breakpoint?: CSSValue;
      "force-stack"?: BooleanAttribute;
      "no-stack"?: BooleanAttribute;
    }

    interface LayoutClusterAttributes extends LayoutAttributes {
      justify?: CSSValue;
    }

    interface LayoutReelAttributes extends LayoutAttributes {
      "no-scrollbar"?: BooleanAttribute;
    }

    interface LayoutSwitcherAttributes extends LayoutAttributes {
      threshold?: CSSValue;
    }

    interface LayoutPadAttributes extends LayoutAttributes {
      padding?: CSSValue;
      "padding-x"?: CSSValue;
      "padding-y"?: CSSValue;
    }

    interface LayoutCenterAttributes extends LayoutAttributes {
      "max-width"?: CSSValue;
      gutters?: CSSValue;
      "and-text"?: BooleanAttribute;
    }

    interface LayoutFrameAttributes extends LayoutAttributes {
      ratio?: CSSValue;
    }

    interface LayoutSidebarAttributes extends LayoutAttributes {
      breakpoint?: CSSValue;
      "side-width"?: CSSValue;
      "content-min-width"?: CSSValue;
      side?: "left" | "right";
    }

    interface LayoutPageAttributes extends LayoutAttributes {
      "min-height"?: CSSValue;
    }

    interface SurfaceAttributes extends GlobalAttributes {
      padding?: CSSValue;
      margin?: CSSValue;
      radius?: CSSValue;
      bg?: CSSValue;
      color?: CSSValue;
    }

    interface CardAttributes extends GlobalAttributes {
      "data-card-layout"?: "adaptive" | string;
    }

    interface BoxAttributes extends GlobalAttributes {
      display?: CSSValue;
      gap?: CSSValue;
      p?: CSSValue;
      px?: CSSValue;
      py?: CSSValue;
      m?: CSSValue;
      mx?: CSSValue;
      my?: CSSValue;
      width?: CSSValue;
      height?: CSSValue;
      "max-width"?: CSSValue;
      bg?: CSSValue;
      color?: CSSValue;
      border?: CSSValue;
      radius?: CSSValue;
      align?: CSSValue;
    }

    interface ContainerAttributes extends GlobalAttributes {
      "max-width-sm"?: CSSValue;
      "max-width-md"?: CSSValue;
      "max-width-lg"?: CSSValue;
      "max-width-xl"?: CSSValue;
      pad?: CSSValue;
    }

    interface FluidContainerAttributes extends GlobalAttributes {}

    interface BadgeAttributes extends GlobalAttributes {
      size?: "sm" | "md" | "lg";
      variant?: "subtle" | "default" | "muted" | "overt";
      status?: "success" | "warning" | "error" | "info" | "primary" | "overt";
    }

    interface ChipAttributes extends GlobalAttributes {
      size?: "sm" | "md" | "lg";
      variant?: "subtle" | "default" | "muted" | "overt";
      removable?: BooleanAttribute;
    }

    interface TextAttributes extends GlobalAttributes {
      variant?: "lead" | "caption" | "eyebrow";
      size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
      weight?: "thin" | "light" | "normal" | "medium" | "semibold" | "bold" | "black";
      tracking?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
      color?: CSSValue;
      leading?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
      align?: CSSValue;
      transform?: CSSValue;
      "font-style"?: CSSValue;
      wrap?: CSSValue;
      display?: "inline" | "block";
      measure?: "body" | "heading" | "wide";
      truncate?: BooleanAttribute;
      lines?: "2" | "3" | "4" | "5" | 2 | 3 | 4 | 5;
    }

    interface TooltipAttributes extends GlobalAttributes {
      content?: string;
      place?: "top" | "right" | "bottom" | "left";
      position?: "top" | "right" | "bottom" | "left";
    }

    interface GridAttributes extends LayoutAttributes {
      display?: CSSValue;
      columns?: CSSValue;
      rows?: CSSValue;
      areas?: CSSValue;
      lanes?: string | number;
      "flow-tolerance"?: CSSValue;
      "justify-items"?: CSSValue;
      "align-items"?: CSSValue;
      "col-rule-width"?: CSSValue;
      "col-rule-style"?: CSSValue;
      "col-rule-color"?: CSSValue;
      "row-rule-width"?: CSSValue;
      "row-rule-style"?: CSSValue;
      "row-rule-color"?: CSSValue;
    }

    interface FlexAttributes extends LayoutAttributes {
      direction?: CSSValue;
      justify?: CSSValue;
      wrap?: CSSValue;
      "align-content"?: CSSValue;
    }

    interface ImageContainerAttributes extends GlobalAttributes {
      "aspect-ratio"?: CSSValue;
      "object-fit"?: CSSValue;
      "object-position"?: CSSValue;
      radius?: CSSValue;
      bg?: CSSValue;
      shadow?: CSSValue;
      transition?: CSSValue;
      lazy?: BooleanAttribute;
      "fallback-src"?: string;
      src?: string;
      srcset?: string;
      sizes?: string;
      alt?: string;
      responsive?: BooleanAttribute;
      "mobile-aspect-ratio"?: CSSValue;
      "desktop-aspect-ratio"?: CSSValue;
      "error-message"?: string;
      theme?: "card" | "hero" | "thumbnail";
    }

    interface ListAttributes extends GlobalAttributes {
      padding?: CSSValue;
      margin?: CSSValue;
      gap?: CSSValue;
      indent?: CSSValue;
      inline?: BooleanAttribute;
    }

    interface ListItemAttributes extends GlobalAttributes {
      type?: string;
      "marker-color"?: CSSValue;
      icon?: string;
      "icon-size"?: CSSValue;
      "icon-color"?: CSSValue;
    }

    interface DividerAttributes extends GlobalAttributes {
      orientation?: "horizontal" | "vertical";
      vertical?: BooleanAttribute;
      strength?: "muted" | "subtle" | "default" | "overt" | "accent";
    }

    interface CarouselAttributes extends GlobalAttributes {
      duration?: CSSValue;
      "timing-function"?: CSSValue;
      radius?: CSSValue;
      width?: CSSValue;
      loop?: BooleanAttribute;
    }

    interface CarouselTriggerAttributes extends GlobalAttributes {
      direction?: "prev" | "next";
      disabled?: BooleanAttribute;
    }

    interface ModalDialogAttributes extends GlobalAttributes {
      open?: BooleanAttribute;
    }

    interface MasonryAttributes extends GlobalAttributes {
      direction?: CSSValue;
      cols?: CSSValue;
      rows?: CSSValue;
      gap?: CSSValue;
      tolerance?: CSSValue;
    }

    interface NavbarAttributes extends GlobalAttributes {
      sticky?: BooleanAttribute;
    }

    interface SiteHeaderAttributes extends GlobalAttributes {
      sticky?: BooleanAttribute;
      elevated?: BooleanAttribute;
      compact?: BooleanAttribute;
    }

    interface SiteFooterAttributes extends GlobalAttributes {
      bordered?: BooleanAttribute;
      compact?: BooleanAttribute;
      centered?: BooleanAttribute;
    }

    interface ViewPageAttributes extends GlobalAttributes {
      active?: BooleanAttribute;
    }

    interface ViewTriggerAttributes extends GlobalAttributes {
      to?: string;
      href?: string;
    }

    interface SizedComponentAttributes extends GlobalAttributes {
      size?: "sm" | "md" | "lg";
      "data-size"?: "sm" | "md" | "lg";
    }

    interface InputGroupAttributes extends GlobalAttributes {
      "data-stack"?: "auto" | "true" | "false";
    }

    interface AvatarAttributes extends SizedComponentAttributes {
      shape?: "circle" | "square";
      "data-shape"?: "circle" | "square";
    }

    interface BubbleAttributes extends GlobalAttributes {
      "data-sender"?: "self" | "other";
    }

    interface SnapFeedAttributes extends GlobalAttributes {
      "aria-label"?: string;
    }

    interface ContentHeaderAttributes extends GlobalAttributes {}

    interface MediaObjectAttributes extends GlobalAttributes {}

    interface EmptyStateAttributes extends GlobalAttributes {}

    interface AlertAttributes extends GlobalAttributes {
      status?: "success" | "warning" | "error" | "info";
      density?: "compact" | "spacious";
      "data-status"?: "success" | "warning" | "error" | "info";
      "data-density"?: "compact" | "spacious";
    }

    interface ListNavigationAttributes extends GlobalAttributes {
      variant?: "flush";
      "data-variant"?: "flush";
    }

    interface IntrinsicElements {
      "layout-grid": LayoutGridAttributes;
      "layout-split": LayoutSplitAttributes;
      "layout-stack": LayoutAttributes;
      "layout-cluster": LayoutClusterAttributes;
      "layout-reel": LayoutReelAttributes;
      "layout-switcher": LayoutSwitcherAttributes;
      "layout-pad": LayoutPadAttributes;
      "layout-center": LayoutCenterAttributes;
      "layout-inline-center": LayoutCenterAttributes;
      "layout-frame": LayoutFrameAttributes;
      "layout-sidebar": LayoutSidebarAttributes;
      "layout-page": LayoutPageAttributes;
      card: CardAttributes;
      "card-media": GlobalAttributes;
      "card-body": GlobalAttributes;
      "card-header": GlobalAttributes;
      "card-content": GlobalAttributes;
      "card-footer": GlobalAttributes;
      box: BoxAttributes;
      badge: BadgeAttributes;
      chip: ChipAttributes;
      text: TextAttributes;
      eyebrow: GlobalAttributes;
      container: ContainerAttributes;
      "fluid-container": FluidContainerAttributes;
      grid: GridAttributes;
      flex: FlexAttributes;
      "img-container": ImageContainerAttributes;
      list: ListAttributes;
      "list-item": ListItemAttributes;
      "list-divider": GlobalAttributes;
      divider: DividerAttributes;
      carousel: CarouselAttributes;
      "carousel-item": GlobalAttributes;
      "carousel-trigger": CarouselTriggerAttributes;
      tooltip: TooltipAttributes;
      "masonry-layout": MasonryAttributes;
      "data-table": GlobalAttributes;
      "modal-dialog": ModalDialogAttributes;
      "nav-navbar": NavbarAttributes;
      "site-header": SiteHeaderAttributes;
      "site-footer": SiteFooterAttributes;
      "view-transitions": GlobalAttributes;
      "view-transition": GlobalAttributes;
      "view-page": ViewPageAttributes;
      "nav-trigger": ViewTriggerAttributes;
      "icon-button": SizedComponentAttributes;
      "floating-action": SizedComponentAttributes;
      "input-group": InputGroupAttributes;
      "search-input": GlobalAttributes;
      "file-dropzone": GlobalAttributes;
      "rating-output": GlobalAttributes;
      "rating-input": GlobalAttributes;
      "reaction-select": GlobalAttributes;
      "user-avatar": AvatarAttributes;
      "avatar-group": GlobalAttributes;
      "tool-bar": GlobalAttributes;
      "nav-list": ListNavigationAttributes;
      "icon-rail": GlobalAttributes;
      "message-bubble": BubbleAttributes;
      "log-card": GlobalAttributes;
      "snap-feed": SnapFeedAttributes;
      "content-header": ContentHeaderAttributes;
      "media-object": MediaObjectAttributes;
      "empty-state": EmptyStateAttributes;
      "alert-message": AlertAttributes;
    }
  }

  interface HTMLElementTagNameMap {
    "layout-grid": HTMLElement;
    "layout-split": HTMLElement;
    "layout-stack": HTMLElement;
    "layout-cluster": HTMLElement;
    "layout-reel": HTMLElement;
    "layout-switcher": HTMLElement;
    "layout-pad": HTMLElement;
    "layout-center": HTMLElement;
    "layout-inline-center": HTMLElement;
    "layout-frame": HTMLElement;
    "layout-sidebar": HTMLElement;
    "layout-page": HTMLElement;
    card: HTMLElement;
    "card-media": HTMLElement;
    "card-body": HTMLElement;
    "card-header": HTMLElement;
    "card-content": HTMLElement;
    "card-footer": HTMLElement;
    box: HTMLElement;
    badge: HTMLElement;
    chip: HTMLElement;
    text: HTMLElement;
    eyebrow: HTMLElement;
    container: HTMLElement;
    "fluid-container": HTMLElement;
    grid: HTMLElement;
    flex: HTMLElement;
    "img-container": HTMLElement;
    list: HTMLElement;
    "list-item": HTMLElement;
    "list-divider": HTMLElement;
    divider: HTMLElement;
    carousel: HTMLElement;
    "carousel-item": HTMLElement;
    "carousel-trigger": HTMLElement;
    tooltip: HTMLElement;
    "masonry-layout": HTMLElement;
    "data-table": HTMLElement;
    "modal-dialog": HTMLElement;
    "nav-navbar": HTMLElement;
    "site-header": HTMLElement;
    "site-footer": HTMLElement;
    "view-transitions": HTMLElement;
    "view-transition": HTMLElement;
    "view-page": HTMLElement;
    "nav-trigger": HTMLElement;
    "icon-button": HTMLElement;
    "floating-action": HTMLElement;
    "input-group": HTMLElement;
    "search-input": HTMLElement;
    "file-dropzone": HTMLElement;
    "rating-output": HTMLElement;
    "rating-input": HTMLElement;
    "reaction-select": HTMLElement;
    "user-avatar": HTMLElement;
    "avatar-group": HTMLElement;
    "tool-bar": HTMLElement;
    "nav-list": HTMLElement;
    "icon-rail": HTMLElement;
    "message-bubble": HTMLElement;
    "log-card": HTMLElement;
    "snap-feed": HTMLElement;
    "content-header": HTMLElement;
    "media-object": HTMLElement;
    "empty-state": HTMLElement;
    "alert-message": HTMLElement;
  }

  namespace JSX {
    interface IntrinsicElements extends CSSTags.IntrinsicElements {}
  }
}
