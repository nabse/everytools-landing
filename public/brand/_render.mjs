import sharp from "sharp";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const icon = readFileSync(resolve(here, "icon.svg"));
const iconDark = readFileSync(resolve(here, "icon-dark.svg"));
const logo = readFileSync(resolve(here, "logo.svg"));
const logoDark = readFileSync(resolve(here, "logo-dark.svg"));

const iconSizes = [16, 32, 48, 64, 128, 180, 192, 256, 512, 1024];
for (const s of iconSizes) {
  await sharp(icon).resize(s, s).png().toFile(resolve(here, `icon-${s}.png`));
  await sharp(iconDark).resize(s, s).png().toFile(resolve(here, `icon-dark-${s}.png`));
}

// Logo (wordmark) — keep aspect, 520x128. Render 2x and 3x.
for (const w of [520, 1040, 1560]) {
  const h = Math.round((w / 520) * 128);
  await sharp(logo).resize(w, h).png().toFile(resolve(here, `logo-${w}.png`));
  await sharp(logoDark).resize(w, h).png().toFile(resolve(here, `logo-dark-${w}.png`));
}

// Open Graph (1200x630) — centered wordmark on white and dark.
const ogLight = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
</svg>`);
const ogDark = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0d0f1c"/>
</svg>`);

const wordmark = await sharp(logo).resize(900).png().toBuffer();
const wordmarkDark = await sharp(logoDark).resize(900).png().toBuffer();

await sharp(ogLight).composite([{ input: wordmark, gravity: "center" }]).png().toFile(resolve(here, "og-1200x630.png"));
await sharp(ogDark).composite([{ input: wordmarkDark, gravity: "center" }]).png().toFile(resolve(here, "og-dark-1200x630.png"));

console.log("✅ brand assets rendered");
