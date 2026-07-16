export type CssVariableControlKind =
  | "color"
  | "length"
  | "number"
  | "percentage"
  | "angle"
  | "select"
  | "text";

export interface CssVariableControl {
  name: `--${string}`;
  label: string;
  description?: string;
  kind: CssVariableControlKind;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  defaultValue?: string;
  options?: Array<{ label: string; value: string }>;
}

export interface ExampleDefinition {
  id: string;
  title: string;
  description?: string;
  markup: string;
  markupSource?: string;
  css?: string;
  variables?: CssVariableControl[];
  canvas?: "default" | "transparent" | "viewport";
  compact?: boolean;
}

export const siteShellCardExample: ExampleDefinition = {
  id: "site-shell-card",
  title: "Token-aware card",
  description: "Preview and source are generated from this one example definition.",
  markup: `<card>
  <card-body>
    <layout-stack gap="var(--space-sm)">
      <eyebrow>Documentation rebuild</eyebrow>
      <h2>One source of truth</h2>
      <p>The rendered preview and copyable markup cannot drift apart.</p>
      <button class="form-button btn-primary stack-intrinsic" type="button">
        Try CSS Tags
      </button>
    </layout-stack>
  </card-body>
</card>`,
  variables: [
    {
      name: "--card-padding",
      label: "Card padding",
      description: "Controls the inner spacing of this card.",
      kind: "length",
      min: 8,
      max: 48,
      step: 1,
      unit: "px",
      defaultValue: "32px",
    },
    {
      name: "--card-radius",
      label: "Card radius",
      description: "Changes the card corner radius.",
      kind: "length",
      min: 0,
      max: 32,
      step: 1,
      unit: "px",
      defaultValue: "12px",
    },
    {
      name: "--card-background",
      label: "Card background",
      description: "Overrides the card surface color.",
      kind: "color",
      defaultValue: "var(--surface-default)",
    },
  ],
};
