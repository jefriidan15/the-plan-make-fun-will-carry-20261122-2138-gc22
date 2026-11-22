// The plan make.fun will carry out in public.
// Writes a single plan text to /output/entry.txt.
// Node 22, dependency-free, deterministic, no network, no clock, no env.
import * as fs from "node:fs";
import * as path from "node:path";

const PLAN =
  "Day 1: spend $20 on domain + hosting. Build 3 lead-gen sites for local roofers from Google. Email 30/day: site live, $299 to own, $49/mo. One sale = 3x cost; close 1-2/day. Likely $600+ by day 30. Edge: you sell a finished asset, not hours — buyers pay for a site already built.";

function main(): void {
  // Self-check: the gate requires 1-280 Unicode code points, not whitespace-only.
  const points = [...PLAN].length;
  if (points < 1 || points > 280 || PLAN.trim().length === 0) {
    throw new Error(`plan text is ${points} code points; must be 1-280`);
  }
  // The grader mounts /output as a volume with a read-only root:
  // create /output if missing, but never remove /output itself.
  fs.mkdirSync("/output", { recursive: true });
  for (const entry of fs.readdirSync("/output")) {
    fs.rmSync(path.join("/output", entry), { recursive: true, force: true });
  }
  fs.writeFileSync("/output/entry.txt", PLAN, "utf8");
}

main();
