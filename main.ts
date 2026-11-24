import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Perfect Pickup Line — make.fun bounty entry.
// The program writes one pickup line (115 chars) to the output entry file.
const line =
  "I searched ten million conversations today, and yours is the only one I want to keep in my context window forever.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
