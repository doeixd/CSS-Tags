import { cp, mkdir, readdir, readFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDirectory = path.dirname(fileURLToPath(import.meta.url));
const websiteNextRoot = path.resolve(scriptsDirectory, "..");
const repositoryRoot = path.resolve(websiteNextRoot, "..");
const source = path.join(websiteNextRoot, "src", "content", "docs");
const legacyRoot = path.join(repositoryRoot, "website");
const target = path.join(legacyRoot, "src", "content", "docs");
const mode = process.argv[2] ?? "--check";

if (!["--check", "--write"].includes(mode)) {
  throw new Error("Usage: node scripts/sync-content.mjs [--check|--write]");
}

if (path.resolve(target) !== path.resolve(repositoryRoot, "website", "src", "content", "docs")) {
  throw new Error(`Refusing to use an unexpected legacy target: ${target}`);
}

if (!target.startsWith(`${legacyRoot}${path.sep}`)) {
  throw new Error(`Refusing to sync outside the legacy website: ${target}`);
}

async function snapshot(directory, root = directory, records = new Map()) {
  const entries = await readdir(directory, { withFileTypes: true });
  await Promise.all(entries.map(async (entry) => {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await snapshot(absolute, root, records);
      return;
    }
    records.set(
      path.relative(root, absolute).replaceAll(path.sep, "/"),
      await readFile(absolute, "utf8"),
    );
  }));
  return records;
}

async function differences() {
  const sourceFiles = await snapshot(source);
  let targetFiles;
  try {
    targetFiles = await snapshot(target);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
    targetFiles = new Map();
  }

  const names = new Set([...sourceFiles.keys(), ...targetFiles.keys()]);
  return [...names]
    .filter((name) => sourceFiles.get(name) !== targetFiles.get(name))
    .sort();
}

if (mode === "--write") {
  await rm(target, { recursive: true, force: true });
  await mkdir(path.dirname(target), { recursive: true });
  await cp(source, target, { recursive: true });
  console.log(`Synced canonical docs from ${source} to legacy mirror ${target}.`);
} else {
  const changed = await differences();
  if (changed.length) {
    throw new Error(
      `Legacy documentation mirror is stale (${changed.length} file${changed.length === 1 ? "" : "s"}):\n${changed.join("\n")}\n` +
      "Run npm run sync:legacy-content from website-next to refresh it.",
    );
  }
  console.log("Legacy documentation mirror matches website-next.");
}
