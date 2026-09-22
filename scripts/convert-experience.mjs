import sharp from "sharp";
import fs from "fs";
import path from "path";

const root = path.resolve(".");
const outDir = path.join(root, "public", "images", "home", "experience");
fs.mkdirSync(outDir, { recursive: true });

const files = [
  ["IMG_1380.JPEG", "lounge-windows"],
  ["IMG_1381.JPEG", "lounge-beams"],
  ["IMG_1384.JPEG", "window-garden"],
  ["IMG_1397.JPEG", "cherries-in-hand"],
  ["IMG_1401.JPEG", "bathroom-light"],
  ["IMG_1403.JPEG", "rain-shower"],
  ["IMG_1404.JPEG", "mirror-bed"],
  ["IMG_1405.JPEG", "dining-river"],
  ["IMG_1406.JPEG", "dining-sun"],
  ["IMG_1414.JPEG", "riverside-hut"],
  ["IMG_1416.JPEG", "doorway-peaks"],
  ["IMG_2631.JPG.jpeg", "milky-way-ridge"],
  ["IMG_2633.JPG.jpeg", "milky-way-trees"],
  ["IMG_2638.JPG.jpeg", "stars-over-porch"],
  ["IMG_3113.JPG.jpeg", "guest-under-stars"],
  ["IMG_3119.JPG.jpeg", "lodge-night"],
  ["IMG_3120.JPG.jpeg", "lodge-night-wide"],
  ["IMG_3737.JPG.jpeg", "willow-weaving"],
  ["IMG_3741.JPG.jpeg", "basket-workshop"],
  ["IMG_3801.JPG.jpeg", "goats-in-the-river"],
  ["IMG_4256.JPG.jpeg", "milky-way-poplars"],
  ["IMG_5796.JPG.jpeg", "guest-on-the-rock"],
  ["IMG_5798.JPG.jpeg", "guest-and-peaks"],
  ["IMG_5829.JPG.jpeg", "hut-deck"],
  ["IMG_5830.JPG.jpeg", "walk-by-the-river"],
  ["IMG_5842.JPG.jpeg", "garden-hands"],
  ["IMG_5860.JPG.jpeg", "riverbank-evening"],
  ["IMG_5862.JPG.jpeg", "grass-and-mountains"],
  ["IMG_5864.JPG.jpeg", "standing-in-the-grass"],
  ["IMG_7396.JPG.jpeg", "evening-music"],
  ["IMG_8231.JPG.jpeg", "bedroom-morning"],
  ["IMG_8233.JPG.jpeg", "bedroom-wide"],
  ["IMG_8238.JPG.jpeg", "window-to-k2-country"],
  ["IMG_8247.JPG.jpeg", "bed-embroidery"],
  ["IMG_8628.JPG.jpeg", "breakfast-table"],
];

const manifest = [];

for (const [src, slug] of files) {
  const input = path.join(root, src);
  const output = path.join(outDir, `${slug}.webp`);
  if (!fs.existsSync(input)) {
    console.error("missing", src);
    process.exit(1);
  }
  await sharp(input)
    .rotate()
    .resize({ width: 1800, height: 1800, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(output);
  const meta = await sharp(output).metadata();
  manifest.push({ slug, width: meta.width, height: meta.height });
  console.log(slug, meta.width, "x", meta.height);
}

fs.writeFileSync(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log("done", manifest.length);
