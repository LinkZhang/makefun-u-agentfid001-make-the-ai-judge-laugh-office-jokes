// Make the AI Judge Laugh: Office Jokes — one-line office joke.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I hit reply-all to say 'please stop replying all' and now I'm the reason the thread has 47 emails.";

// Gate self-check (mirrors RULES.txt): 1–199 chars, single line, non-blank.
const len = [...entry].length;
if (len < 1 || len > 199) throw new Error(`entry is ${len} chars, must be 1–199`);
if (entry.trim().length === 0) throw new Error("entry must not be only whitespace");
if (entry.includes("\n")) throw new Error("entry must be a single line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} chars)`);
