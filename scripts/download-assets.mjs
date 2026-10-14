import { readFile, writeFile, mkdir, rename, unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const project = fileURLToPath(new URL("../", import.meta.url));
const directory = path.join(project, "public/assets");
const manifestPath = process.env.FIGMA_ASSET_MANIFEST || path.join(project, "scripts/assets.local.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8").catch(() => readFile(new URL("./assets.json", import.meta.url), "utf8")));
const checkOnly = process.argv.includes("--check");

function isAsset(buffer, filename) {
  if (filename.endsWith(".svg")) return /<svg[\s>]/i.test(buffer.toString("utf8")) && !/<html[\s>]/i.test(buffer.toString("utf8"));
  const png = buffer.length > 8 && buffer.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]));
  const jpeg = buffer.length > 3 && buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255;
  const webp = buffer.length > 12 && buffer.toString("ascii", 0, 4) === "RIFF" && buffer.toString("ascii", 8, 12) === "WEBP";
  return png || jpeg || webp;
}

await mkdir(directory, { recursive: true });
let failed = 0;
for (const asset of manifest) {
  const destination = path.join(directory, asset.file);
  try {
    const existing = await readFile(destination);
    if (isAsset(existing, asset.file)) { console.log(`OK ${asset.file}`); continue; }
  } catch {}
  if (checkOnly) { console.error(`Missing asset: ${asset.file}`); failed++; continue; }
  if (!asset.url) { console.error(`Supply the original Figma asset: ${asset.file}. See README.md.`); failed++; continue; }
  try {
    const response = await fetch(asset.url, { signal: AbortSignal.timeout(45000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    if (!isAsset(bytes, asset.file)) throw new Error("The download was not a valid asset. Export this layer from Figma and save it at the filename above.");
    const temporary = destination + ".download";
    await writeFile(temporary, bytes);
    await rename(temporary, destination);
    console.log(`Downloaded ${asset.file} (${bytes.length} bytes)`);
  } catch (error) {
    await unlink(destination + ".download").catch(() => {});
    console.error(`${asset.file}: ${error.message}`);
    failed++;
  }
}
if (failed) {
  console.error(`\n${failed} asset(s) still need to be supplied. See README.md for the exact Figma layers.`);
  process.exitCode = 1;
} else console.log("\nAll original images are available locally.");
