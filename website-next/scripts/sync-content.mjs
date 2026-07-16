import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDirectory = path.dirname(fileURLToPath(import.meta.url));
const websiteNextRoot = path.resolve(scriptsDirectory, "..");
const repositoryRoot = path.resolve(websiteNextRoot, "..");
const source = path.join(repositoryRoot, "website", "src", "content", "docs");
const target = path.join(websiteNextRoot, "src", "content", "docs");

if (!target.startsWith(`${websiteNextRoot}${path.sep}`)) {
  throw new Error(`Refusing to sync outside website-next: ${target}`);
}

await rm(target, { recursive: true, force: true });
await mkdir(path.dirname(target), { recursive: true });
await cp(source, target, { recursive: true });

console.log(`Synced documentation content from ${source} to ${target}`);
