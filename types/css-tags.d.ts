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

    interface LayoutPadAttributes extends GlobalAttributes {
      padding?: CSSValue;
      "padding-x"?: CSSValue;
      "padding-y"?: CSSValue;
    }

    interface LayoutCenterAttributes extends GlobalAttributes {
      "max-width"?: CSSValue;
      gutters?: CSSValue;
      "and-text"?: BooleanAttribute;
    }

    interface LayoutFrameAttributes extends GlobalAttributes {
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

    interface BadgeAttributes extends GlobalAttributes {
      size?: "sm" | "md" | "lg";
      role?: "subtle" | "default" | "muted" | "overt" | string;
      status?: "success" | "warning" | "error" | "info" | "primary" | "overt";
    }

    interface ChipAttributes extends GlobalAttributes {
      size?: "sm" | "md" | "lg";
      role?: "subtle" | "default" | "muted" | "overt" | string;
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
    }

    interface GridAttributes extends LayoutAttributes {
      columns?: CSSValue;
      rows?: CSSValue;
      lanes?: string | number;
      flow?: CSSValue;
    }

    interface FlexAttributes extends LayoutAttributes {
      direction?: CSSValue;
      justify?: CSSValue;
      wrap?: CSSValue;
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

    interface ViewPageAttributes extends GlobalAttributes {
      active?: BooleanAttribute;
    }

    interface ViewTriggerAttributes extends GlobalAttributes {
      to?: string;
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
      card: SurfaceAttributes;
      "card-media": GlobalAttributes;
      "card-body": GlobalAttributes;
      "card-header": GlobalAttributes;
      "card-content": GlobalAttributes;
      "card-footer": GlobalAttributes;
      box: SurfaceAttributes;
      badge: BadgeAttributes;
      chip: ChipAttributes;
      text: TextAttributes;
      container: SurfaceAttributes;
      grid: GridAttributes;
      flex: FlexAttributes;
      "img-container": ImageContainerAttributes;
      list: ListAttributes;
      "list-item": ListItemAttributes;
      "list-divider": GlobalAttributes;
      carousel: CarouselAttributes;
      "carousel-item": GlobalAttributes;
      "carousel-trigger": CarouselTriggerAttributes;
      tooltip: TooltipAttributes;
      "masonry-layout": GlobalAttributes;
      "data-table": GlobalAttributes;
      "modal-dialog": ModalDialogAttributes;
      "view-transitions": GlobalAttributes;
      "view-transition": GlobalAttributes;
      "view-page": ViewPageAttributes;
      "nav-trigger": ViewTriggerAttributes;
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
    container: HTMLElement;
    grid: HTMLElement;
    flex: HTMLElement;
    "img-container": HTMLElement;
    list: HTMLElement;
    "list-item": HTMLElement;
    "list-divider": HTMLElement;
    carousel: HTMLElement;
    "carousel-item": HTMLElement;
    "carousel-trigger": HTMLElement;
    tooltip: HTMLElement;
    "masonry-layout": HTMLElement;
    "data-table": HTMLElement;
    "modal-dialog": HTMLElement;
    "view-transitions": HTMLElement;
    "view-transition": HTMLElement;
    "view-page": HTMLElement;
    "nav-trigger": HTMLElement;
  }

  namespace JSX {
    interface IntrinsicElements extends CSSTags.IntrinsicElements {}
  }
}
