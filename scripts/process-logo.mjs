import { Jimp } from "jimp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const img = await Jimp.read(path.join(root, "public", "logo.jpg"));
const { data, width, height } = img.bitmap;

const idx = (x, y) => (y * width + x) * 4;
const isWhite = (i) => data[i] > 232 && data[i + 1] > 232 && data[i + 2] > 232;

const visited = new Uint8Array(width * height);
const stack = [];
const seed = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  stack.push(x, y);
};
// seed every edge pixel
for (let x = 0; x < width; x++) {
  seed(x, 0);
  seed(x, height - 1);
}
for (let y = 0; y < height; y++) {
  seed(0, y);
  seed(width - 1, y);
}

while (stack.length) {
  const y = stack.pop();
  const x = stack.pop();
  const p = y * width + x;
  if (visited[p]) continue;
  const i = idx(x, y);
  if (!isWhite(i)) continue;
  visited[p] = 1;
  data[i + 3] = 0; // transparent
  if (x > 0) stack.push(x - 1, y);
  if (x < width - 1) stack.push(x + 1, y);
  if (y > 0) stack.push(x, y - 1);
  if (y < height - 1) stack.push(x, y + 1);
}

// Soften 1px halo: any opaque-but-light pixel touching a transparent one gets reduced alpha
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = idx(x, y);
    if (data[i + 3] === 0) continue;
    const light = data[i] > 210 && data[i + 1] > 210 && data[i + 2] > 210;
    if (!light) continue;
    const neighbours = [
      [x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1],
    ];
    const touchesTransparent = neighbours.some(([nx, ny]) => {
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) return false;
      return data[idx(nx, ny) + 3] === 0;
    });
    if (touchesTransparent) data[i + 3] = 90;
  }
}

await img.write(path.join(root, "public", "logo.png"));
console.log(`done: ${width}x${height} -> public/logo.png`);
