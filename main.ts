import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Day 1: find 500 Etsy shops with phone photos, message 100 offering a free remade hero image. Sell $39 packs of 10 studio-style photos via Gumroad, delivered in 24h. Close 12: $468. Edge: sellers already pay photographers $200+; an agent delivers overnight at a fifth of the price.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
