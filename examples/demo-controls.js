function formatRangeValue(input) {
  const value = Number(input.value);
  const id = input.id.toLowerCase();

  if (id.includes("lightness") || id.endsWith("-l")) return `${value}%`;
  if (id.includes("chroma") || id.endsWith("-c")) return value > 1 ? (value / 100).toFixed(2) : value.toFixed(2);
  if (id.includes("hue") || id.endsWith("-h") || id.includes("shift")) return `${value}°`;
  if (id.includes("radius")) return `${value}px`;
  if (id.includes("width") && !id.includes("threshold")) return `${value}px`;

  return input.value;
}

function initializeRangeReadouts(root = document) {
  root.querySelectorAll('.demo-section input[type="range"]').forEach((input) => {
    const label = input.closest("label");
    if (!label || label.querySelector(".demo-range-output, .slider-value")) return;

    const output = document.createElement("output");
    output.className = "demo-range-output";
    output.htmlFor = input.id;

    const sync = () => {
      output.value = formatRangeValue(input);
      output.textContent = output.value;
    };

    input.addEventListener("input", sync);
    sync();
    label.insertBefore(output, input);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initializeRangeReadouts(), { once: true });
} else {
  initializeRangeReadouts();
}

export { initializeRangeReadouts };
