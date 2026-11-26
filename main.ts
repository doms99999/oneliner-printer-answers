// The Printer Finally Answers — entry program.
//
// Writes exactly one comeback line to /output/entry.txt. Deterministic:
// the same bytes on every run.
//
// The line: "Nine years. 41,209 pages. 4,102 thumps. Today I printed this
// instead of your report."
// The printer speaks as a machine that kept a ledger: nine years, every page
// counted, every thump counted. The joke is an action, not a complaint —
// the printer disobeyed and printed its comeback instead of the user's
// report, which is why the reader is reading it at all. No "paper jam":
// the recycled jam line is dodged entirely, and the flat log voice is the
// printer's own.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Nine years. 41,209 pages. 4,102 thumps. Today I printed this instead of your report.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
