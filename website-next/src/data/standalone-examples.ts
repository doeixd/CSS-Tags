const demoSources = import.meta.glob("../../../examples/*.html", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export interface StandaloneExample {
  slug: string;
  source: string;
}

export const standaloneExamples: StandaloneExample[] = Object.entries(demoSources)
  .map(([file, source]) => ({
    slug: file.split("/").pop()?.replace(/\.html$/, "") ?? "",
    source,
  }))
  .filter((entry) => entry.slug);

