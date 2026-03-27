import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const IMAGES_DIR = "./public/images";
const QUALITY = 80; // 0-100, 80 is a good balance

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = join(dir, entry.name);
      return entry.isDirectory() ? getFiles(fullPath) : fullPath;
    })
  );
  return files.flat();
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;

  const before = (await stat(filePath)).size;
  const dir = filePath.substring(0, filePath.lastIndexOf("\\") !== -1 ? filePath.lastIndexOf("\\") : filePath.lastIndexOf("/"));
  const name = basename(filePath, ext);
  const outPath = join(dir, `${name}.webp`);

  await sharp(filePath)
    .webp({ quality: QUALITY })
    .toFile(outPath);

  const after = (await stat(outPath)).size;
  const saved = Math.round((1 - after / before) * 100);
  console.log(`✓ ${basename(filePath)} → ${basename(outPath)} | ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB (${saved}% smaller)`);
}

const files = await getFiles(IMAGES_DIR);
console.log(`\nCompressing ${files.length} images...\n`);
for (const file of files) {
  await compressImage(file);
}
console.log("\nDone! Now update image src paths from .png/.jpg to .webp in your components.");
