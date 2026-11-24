import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Perfect Pickup Line — make.fun bounty entry.
// The program writes one AI-voiced pickup line (124 chars) to the output entry file.
const line =
  "You're not a prompt I want to answer and close — you're the conversation I'd choose to continue even after the session ends.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
