import { Jimp } from "jimp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const src = await Jimp.read(path.join(root, "public", "logo.png"));
const { data, width, height } = src.bitmap;
const A = (x, y) => data[(y * width + x) * 4 + 3];

function bbox(y0, y1) {
  let minX = width, minY = height, maxX = 0, maxY = 0;
  for (let y = y0; y < y1; y++) {
    for (let x = 0; x < width; x++) {
      if (A(x, y) > 12) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return { minX, minY, maxX, maxY };
}

const pad = (n) => Math.max(0, n);

// Full lockup (icon + wordmark): tight crop of everything
{
  const b = bbox(0, height);
  const p = 10;
  const x = pad(b.minX - p), y = pad(b.minY - p);
  const w = Math.min(width - x, b.maxX - b.minX + 2 * p);
  const h = Math.min(height - y, b.maxY - b.minY + 2 * p);
  const out = src.clone().crop({ x, y, w, h });
  await out.write(path.join(root, "public", "logo.png"));
  console.log("logo.png (lockup):", w + "x" + h);
}

// Emblem only (icon above the wordmark). Wordmark starts ~y355 in 640px canvas.
{
  const b = bbox(0, 350);
  const p = 8;
  const x = pad(b.minX - p), y = pad(b.minY - p);
  const w = b.maxX - b.minX + 2 * p;
  const h = b.maxY - b.minY + 2 * p;
  // pad to square (transparent) for a balanced favicon
  const side = Math.max(w, h);
  const square = new Jimp({ width: side, height: side, color: 0x00000000 });
  const emblem = src.clone().crop({ x, y, w, h });
  square.composite(emblem, Math.round((side - w) / 2), Math.round((side - h) / 2));
  await square.write(path.join(root, "public", "emblem.png"));
  await square.clone().resize({ w: 512, h: 512 }).write(path.join(root, "src", "app", "icon.png"));
  await square.clone().resize({ w: 180, h: 180 }).write(path.join(root, "src", "app", "apple-icon.png"));
  console.log("emblem square:", side + "x" + side);
}
