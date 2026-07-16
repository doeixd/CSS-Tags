import { copyText } from "./clipboard";

const storageKey = "css-tags-theme-overrides";

const presets: Record<string, Record<string, string>> = {
  clean: {
    "--surface-saturation": "0.008",
    "--density-factor": "0.9",
    "--radius-factor": "0.8",
    "--font-size-prose": "1rem",
    "--line-height-prose": "1.6",
    "--measure-prose": "68ch",
    "--font-size-ui": "0.875rem",
    "--font-size-control": "1rem",
    "--font-weight-heading": "600",
    "--letter-spacing-heading": "-0.015em",
  },
  compact: {
    "--surface-saturation": "0.01",
    "--density-factor": "0.75",
    "--radius-factor": "0.65",
    "--font-size-prose": "0.9375rem",
    "--line-height-prose": "1.55",
    "--measure-prose": "72ch",
    "--font-size-ui": "0.8125rem",
    "--font-size-control": "0.875rem",
    "--font-weight-heading": "625",
    "--letter-spacing-heading": "-0.0125em",
  },
  editorial: {
    "--accent-h": "25",
    "--accent-c": "0.12",
    "--surface-saturation": "0.006",
    "--density-factor": "1.05",
    "--radius-factor": "0.5",
    "--font-size-prose": "1.0625rem",
    "--line-height-prose": "1.725",
    "--measure-prose": "62ch",
    "--font-size-ui": "0.875rem",
    "--font-size-control": "1rem",
    "--font-weight-heading": "650",
    "--letter-spacing-heading": "-0.025em",
  },
};

function readStoredOverrides(allowed: Set<string>) {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) ?? "{}");
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return new Map<string, string>();
    return new Map(Object.entries(parsed).filter(([name, value]) => allowed.has(name) && typeof value === "string") as Array<[string, string]>);
  } catch {
    return new Map<string, string>();
  }
}

function numericPart(value: string, fallback = "0") {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? String(parsed) : fallback;
}

function slugify(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "custom";
}

function setupThemeEditor() {
  const editor = document.querySelector<HTMLDetailsElement>("[data-theme-editor]");
  if (!editor || editor.dataset.ready === "true") return;
  editor.dataset.ready = "true";

  const root = document.documentElement;
  const controls = Array.from(editor.querySelectorAll<HTMLElement>("[data-theme-variable]"));
  const allowed = new Set(controls.flatMap((control) => control.dataset.variableName ?? []));
  const overrides = readStoredOverrides(allowed);
  const output = editor.querySelector<HTMLElement>("[data-theme-editor-output] code");
  const status = editor.querySelector<HTMLElement>("[data-theme-editor-status]");
  const reset = editor.querySelector<HTMLButtonElement>("[data-theme-editor-reset]");
  const copy = editor.querySelector<HTMLButtonElement>("[data-theme-editor-copy]");
  const download = editor.querySelector<HTMLButtonElement>("[data-theme-editor-download]");
  const nameInput = editor.querySelector<HTMLInputElement>("[data-theme-editor-name]");
  const scopeInput = editor.querySelector<HTMLSelectElement>("[data-theme-editor-scope]");

  const generatedCss = () => {
    const title = nameInput?.value.trim() || "Custom theme";
    const slug = slugify(title);
    const selector = scopeInput?.value === "named"
      ? `:root[data-theme="${slug}"], [data-theme="${slug}"]`
      : ":root";
    const declarations = overrides.size
      ? Array.from(overrides, ([name, value]) => `    ${name}: ${value};`).join("\n")
      : "    /* Move a control or choose a preset to add overrides. */";
    return `/* CSS Tags theme: ${title}\n * Load after css-tags/index.css.\n */\n@layer css-tags-theme {\n  ${selector} {\n${declarations}\n  }\n}\n`;
  };

  const updateOutput = (message?: string) => {
    const css = generatedCss();
    if (output) output.textContent = css;
    if (status) status.textContent = message ?? (overrides.size
      ? `${overrides.size} ${overrides.size === 1 ? "override" : "overrides"} applied.`
      : "Using library defaults.");
    return css;
  };

  const persist = () => {
    if (overrides.size) localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(overrides)));
    else localStorage.removeItem(storageKey);
    root.dataset.themeOverrides = String(overrides.size);
  };

  const syncControl = (control: HTMLElement) => {
    const name = control.dataset.variableName;
    if (!name) return;
    const unit = control.dataset.variableUnit ?? "";
    const input = control.querySelector<HTMLInputElement>("[data-theme-variable-input]");
    const valueOutput = control.querySelector<HTMLOutputElement>("[data-theme-variable-value]");
    const value = overrides.get(name) || getComputedStyle(root).getPropertyValue(name).trim();
    const numeric = numericPart(value, input?.min || "0");
    if (input) input.value = numeric;
    if (valueOutput) valueOutput.value = `${numeric}${unit}`;
  };

  const applyOverrides = (values: Record<string, string>, message: string) => {
    allowed.forEach((name) => root.style.removeProperty(name));
    overrides.clear();
    Object.entries(values).forEach(([name, value]) => {
      if (!allowed.has(name)) return;
      root.style.setProperty(name, value);
      overrides.set(name, value);
    });
    persist();
    controls.forEach(syncControl);
    updateOutput(message);
  };

  overrides.forEach((value, name) => root.style.setProperty(name, value));
  controls.forEach((control) => {
    syncControl(control);
    const name = control.dataset.variableName;
    const unit = control.dataset.variableUnit ?? "";
    const input = control.querySelector<HTMLInputElement>("[data-theme-variable-input]");
    const valueOutput = control.querySelector<HTMLOutputElement>("[data-theme-variable-value]");
    input?.addEventListener("input", () => {
      if (!name) return;
      const value = `${input.value}${unit}`;
      root.style.setProperty(name, value);
      overrides.set(name, value);
      if (valueOutput) valueOutput.value = value;
      persist();
      updateOutput();
    });
  });

  editor.querySelectorAll<HTMLButtonElement>("[data-theme-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      const preset = button.dataset.themePreset;
      if (preset && presets[preset]) applyOverrides(presets[preset], `${button.textContent?.trim()} preset applied.`);
    });
  });

  reset?.addEventListener("click", () => {
    applyOverrides({}, "Theme reset to library defaults.");
    reset.focus();
  });

  copy?.addEventListener("click", async () => {
    try {
      await copyText(updateOutput());
      updateOutput("Copied layered theme CSS.");
    } catch {
      updateOutput("Copy unavailable. Select the CSS manually.");
    } finally {
      copy.focus();
    }
  });

  download?.addEventListener("click", () => {
    const blob = new Blob([updateOutput()], { type: "text/css;charset=utf-8" });
    const href = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.download = `css-tags-${slugify(nameInput?.value || "custom")}.css`;
    anchor.click();
    URL.revokeObjectURL(href);
    updateOutput(`Downloaded ${anchor.download}.`);
    download.focus();
  });

  nameInput?.addEventListener("input", () => updateOutput());
  scopeInput?.addEventListener("change", () => updateOutput());

  document.addEventListener("change", (event) => {
    if (!(event.target instanceof HTMLElement) || !event.target.matches("[data-color-scheme-control]")) return;
    requestAnimationFrame(() => controls.forEach((control) => {
      const name = control.dataset.variableName;
      if (name && !overrides.has(name)) syncControl(control);
    }));
  });

  document.addEventListener("pointerdown", (event) => {
    if (editor.open && event.target instanceof Node && !editor.contains(event.target)) editor.open = false;
  });

  editor.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      editor.open = false;
      editor.querySelector<HTMLElement>("summary")?.focus();
    }
  });

  updateOutput();
}

setupThemeEditor();
document.addEventListener("astro:page-load", setupThemeEditor);
