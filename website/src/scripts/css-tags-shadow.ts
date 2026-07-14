import libraryCss from "../../../index.css?inline";

const shadowLibraryCss = libraryCss
    .replace(/:root(\[[^\]]+\])/g, ":host($1)")
    .replace(/:root\b/g, ":host");

const exampleHelpers = `
    :host {
        display: block;
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
