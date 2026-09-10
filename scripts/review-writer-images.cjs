const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

async function main() {
  const root = path.resolve(__dirname, "..");
  const manifest = JSON.parse(await fs.readFile(path.join(root, "src/content/writer-images.json"), "utf8"));
  const output = path.join(root, "test-results/writer-images");
  await fs.mkdir(output, { recursive: true });
  const entries = Object.entries(manifest);
  for (let start = 0; start < entries.length; start += 24) {
    const group = entries.slice(start, start + 24);
    const layers = [];
    for (let index = 0; index < group.length; index++) {
      const [id, image] = group[index];
      const left = index % 4 * 240;
      const top = Math.floor(index / 4) * 190;
      const file = path.join(root, "public", image.src);
      layers.push({ input: await sharp(file).resize(220, 140, { fit: "contain", background: "#dce4e1" }).png().toBuffer(), left: left + 10, top: top + 10 });
      layers.push({ input: Buffer.from(`<svg width="240" height="30"><text x="10" y="20" font-family="Arial" font-size="13">${id}</text></svg>`), left, top: top + 150 });
    }
    await sharp({ create: { width: 960, height: Math.ceil(group.length / 4) * 190, channels: 3, background: "#ffffff" } }).composite(layers).png().toFile(path.join(output, `sheet-${start / 24 + 1}.png`));
  }
  console.log(`Reviewed ${entries.length} decodable image assets`);
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
