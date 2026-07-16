import libraryCss from "../../../index.css?inline";

const shadowLibraryCss = libraryCss
    .replace(/:root(\[[^\]]+\])/g, ":host($1)")
    .replace(/:root\b/g, ":host");

const exampleHelpers = `
    :host {
        display: block;
        /* Preserve DOM/style isolation while inheriting the documentation's
           live theme inputs instead of restoring the library defaults. */
        --accent-h: inherit;
        --accent-c: inherit;
        --accent-l: inherit;
        --surface-saturation: inherit;
        --contrast-factor: inherit;
        --density-factor: inherit;
        --radius-factor: inherit;
        --font-size-prose: inherit;
        --line-height-prose: inherit;
        --measure-prose: inherit;
        --font-size-ui: inherit;
        --font-size-control: inherit;
        --font-weight-heading: inherit;
        --letter-spacing-heading: inherit;
        color: var(--text-default, inherit);
    }

    .example-panel {
        padding: var(--space-md, 1rem);
        border: 1px solid var(--outline-subtle, #d8dee4);
        border-radius: var(--radius-md, 0.5rem);
        background: var(--surface-default, #fff);
    }

    .example-muted {
        color: var(--text-subtle, inherit);
    }

    .example-tile,
    .example-swatch {
        min-inline-size: 0;
        padding: var(--space-md, 1rem);
        border: 1px solid var(--outline-subtle, #d8dee4);
        border-radius: var(--radius-md, 0.5rem);
        background: var(--surface-default, #fff);
    }

    .example-swatch {
        display: grid;
        min-block-size: 5rem;
        place-items: end start;
        font-size: var(--font-size-sm, 0.875rem);
        font-weight: var(--font-weight-semibold, 600);
    }

    .example-slide {
        display: grid;
        inline-size: 100%;
        max-inline-size: 100%;
        block-size: 12rem;
        place-items: center;
        background: linear-gradient(135deg, var(--accent-muted), var(--secondary-muted));
        color: var(--text-overt, inherit);
        font-size: var(--font-size-xl, 1.5rem);
        font-weight: var(--font-weight-bold, 700);
    }

    .example-scale {
        display: grid;
        grid-template-columns: repeat(9, minmax(2rem, 1fr));
        min-block-size: 6rem;
        overflow: clip;
        border: 1px solid var(--outline-subtle, #d8dee4);
        border-radius: var(--radius-md, 0.5rem);
    }

    [data-doc-view-transition] view-page {
        margin-block-start: var(--space-md, 1rem);
    }

    @media (prefers-reduced-motion: reduce) {
        * { scroll-behavior: auto !important; }
    }
`;

function createLibraryStyle(extra = "") {
    const style = document.createElement("style");
    style.textContent = `${shadowLibraryCss}\n${extra}`;
    return style;
}

class CssTagsExample extends HTMLElement {
    connectedCallback() {
        if (this.shadowRoot) return;

        const content = Array.from(this.childNodes);
        const root = this.attachShadow({ mode: "open" });
        root.append(createLibraryStyle(exampleHelpers), ...content);
    }
}

class CssTagsTokens extends HTMLElement {
    connectedCallback() {
        if (this.shadowRoot) return;

        const root = this.attachShadow({ mode: "open" });
        const slot = document.createElement("slot");
        root.append(createLibraryStyle(":host { display: block; }"), slot);
    }
}

if (!customElements.get("css-tags-example")) {
    customElements.define("css-tags-example", CssTagsExample);
}

if (!customElements.get("css-tags-tokens")) {
    customElements.define("css-tags-tokens", CssTagsTokens);
}
