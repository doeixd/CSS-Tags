import { copyText } from "./clipboard";

function numericPart(value: string, fallback = "0") {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? String(parsed) : fallback;
}

function resolveColor(target: HTMLElement, value: string) {
  const root = target.shadowRoot;
  if (!root) return "#ffffff";
  const probe = document.createElement("span");
  probe.style.color = value;
  probe.hidden = true;
  root.append(probe);
  const resolved = getComputedStyle(probe).color;
  probe.remove();
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const context = canvas.getContext("2d");
  if (!context) return "#ffffff";
  context.fillStyle = resolved;
  context.fillRect(0, 0, 1, 1);
  const channels = context.getImageData(0, 0, 1, 1).data.slice(0, 3);
  return `#${Array.from(channels, (channel) => channel.toString(16).padStart(2, "0")).join("")}`;
}

function setupCssVariableEditors() {
  document.querySelectorAll<HTMLElement>("[data-css-variable-editor]").forEach((editor) => {
    if (editor.dataset.ready === "true") return;
    editor.dataset.ready = "true";

    const workbench = editor.closest<HTMLElement>("[data-example-workbench]");
    if (!workbench) return;

    const controls = Array.from(editor.querySelectorAll<HTMLElement>("[data-variable-control]"));
    const output = editor.querySelector<HTMLElement>("[data-variable-output] code");
    const status = editor.querySelector<HTMLElement>("[data-variable-status]");
    const resetAll = editor.querySelector<HTMLButtonElement>("[data-variable-reset-all]");
    const copyButton = editor.querySelector<HTMLButtonElement>("[data-variable-copy]");
    const overrides = new Map<string, string>();

    const target = () => workbench.querySelector<HTMLElement>("[data-workbench-preview]");

    const updateOutput = () => {
      const css = overrides.size
        ? `.example-scope {\n${Array.from(overrides, ([name, value]) => `  ${name}: ${value};`).join("\n")}\n}`
        : ".example-scope {\n  /* Edit a variable to generate an override. */\n}";
      if (output) output.textContent = css;
      if (status) {
        status.textContent = overrides.size
          ? `${overrides.size} ${overrides.size === 1 ? "override" : "overrides"} applied.`
          : "No overrides applied.";
      }
      return css;
    };

    const apply = (control: HTMLElement, rawValue: string) => {
      const name = control.dataset.variableName;
      const unit = control.dataset.variableUnit ?? "";
      if (!name) return;
      const value = `${rawValue}${unit}`;
      target()?.style.setProperty(name, value);
      overrides.set(name, value);
      const resolved = control.querySelector<HTMLOutputElement>("[data-variable-resolved]");
      if (resolved) resolved.value = value;
      updateOutput();
    };

    controls.forEach((control) => {
      const kind = control.dataset.variableKind;
      const defaultValue = control.dataset.variableDefault ?? "";
      const input = control.querySelector<HTMLInputElement | HTMLSelectElement>("[data-variable-input]");
      const range = control.querySelector<HTMLInputElement>("[data-variable-range]");
      const color = control.querySelector<HTMLInputElement>("[data-variable-color]");
      const reset = control.querySelector<HTMLButtonElement>("[data-variable-reset]");

      if (input && range) {
        input.value = numericPart(defaultValue, range.min || "0");
        range.value = input.value;
        range.addEventListener("input", () => {
          input.value = range.value;
          apply(control, range.value);
        });
        input.addEventListener("input", () => {
          range.value = input.value;
          apply(control, input.value);
        });
      } else if (input) {
        input.addEventListener("input", () => apply(control, input.value));
        input.addEventListener("change", () => apply(control, input.value));
      }

      if (color) {
        const preview = target();
        if (preview) color.value = resolveColor(preview, defaultValue);
        color.addEventListener("input", () => {
          if (input) input.value = color.value;
          apply(control, color.value);
        });
      }

      reset?.addEventListener("click", () => {
        const name = control.dataset.variableName;
        if (!name) return;
        target()?.style.removeProperty(name);
        overrides.delete(name);
        if (input) input.value = range ? numericPart(defaultValue, range.min || "0") : defaultValue;
        if (range && input) range.value = input.value;
        if (color) {
          const preview = target();
          if (preview) color.value = resolveColor(preview, defaultValue);
        }
        const resolved = control.querySelector<HTMLOutputElement>("[data-variable-resolved]");
        if (resolved) resolved.value = defaultValue;
        updateOutput();
        reset.focus();
      });
    });

    resetAll?.addEventListener("click", () => {
      controls.forEach((control) => {
        const name = control.dataset.variableName;
        if (name) target()?.style.removeProperty(name);
        control.querySelector<HTMLButtonElement>("[data-variable-reset]")?.click();
      });
      overrides.clear();
      updateOutput();
      resetAll.focus();
    });

    copyButton?.addEventListener("click", async () => {
      try {
        await copyText(updateOutput());
        if (status) status.textContent = "Copied CSS overrides.";
      } catch {
        if (status) status.textContent = "Copy unavailable. Select the CSS manually.";
      } finally {
        copyButton.focus();
      }
    });

    workbench.addEventListener("workbench:preview-reset", () => {
      const preview = target();
      if (!preview) return;
      overrides.forEach((value, name) => preview.style.setProperty(name, value));
    });

    updateOutput();
  });
}

setupCssVariableEditors();
document.addEventListener("astro:page-load", setupCssVariableEditors);
