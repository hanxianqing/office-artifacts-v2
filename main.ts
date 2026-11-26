import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Office Artifacts: The One-Line Placard Contest — one line, at most 180 characters.
// Fresh angle: the stapler is not a desk tool but a bronze ritual implement,
// and the joke is in the catalogue details: a named rite (the Binding Rite),
// a date (c. 2140 BCE), and a donor (the Department of Paperwork) that never
// got its sheets back. Dry curator's voice throughout; nothing explains itself.
const LINE =
  "Stapler, cast bronze, c. 2140 BCE. Ritual tool of the Binding Rite, joining two sheets for eternity. Gift of the Department of Paperwork, which never got them back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate self-check: the entry must be 1–180 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 180 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-180 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} characters)`);
