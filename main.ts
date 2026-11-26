import { mkdirSync, writeFileSync } from "node:fs";

// Rename the Planet — one funny new name for a planet, plus the why,
// in a single line under 200 characters. The program writes that line
// to /output/entry.txt. Deterministic: no network, no clock, no random.
const LINE =
  "Rename Venus 'Drama Queen': it spins backwards, its day outlasts its year, and it's hotter than Mercury despite standing farther from the Sun.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
