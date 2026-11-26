import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "SockMatch is the dating app for your orphaned socks, matching them with strangers' single socks, then charging a breakup fee when the new pair inevitably splits up over the dryer.";

if (entry.length > 240 || entry.trim().length === 0) {
  throw new Error(`entry must be 1 to 240 characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
