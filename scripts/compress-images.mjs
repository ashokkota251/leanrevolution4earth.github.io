// One-shot image compressor. Reads from ./image-originals and writes to ./public/images.
// Run with: node scripts/compress-images.mjs
import sharp from "sharp"
import { mkdir } from "node:fs/promises"
import { dirname, resolve } from "node:path"

const ROOT = resolve(process.cwd())
const SRC = resolve(ROOT, "image-originals")
const DST = resolve(ROOT, "public/images")

const jpeg = { quality: 72, mozjpeg: true, chromaSubsampling: "4:2:0" }
const jpegHi = { quality: 76, mozjpeg: true, chromaSubsampling: "4:2:0" }

const jobs = [
  // Hero: full-bleed, priority — a bit more pixels, still tiny vs. originals
  { in: "hero/hero-1.jpg", out: "hero/hero-1.jpg", width: 2400, opts: jpegHi },
  { in: "hero/hero-2.jpg", out: "hero/hero-2.jpg", width: 2400, opts: jpegHi },
  { in: "hero/hero-3.jpg", out: "hero/hero-3.jpg", width: 2400, opts: jpegHi },

  // Pillars: displayed at 25vw desktop, 100vw mobile — 1200px covers retina.
  // Photos: convert PNG → JPEG for ~5-10x size reduction.
  { in: "pillars/green-transitions.jpg",   out: "pillars/green-transitions.jpg",   width: 1200, opts: jpeg },
  { in: "pillars/nature-communities.png",  out: "pillars/nature-communities.jpg",  width: 1200, opts: jpeg },
  { in: "pillars/climate-consciousness.png", out: "pillars/climate-consciousness.jpg", width: 1200, opts: jpeg },
  { in: "pillars/climate-advocacy.png",    out: "pillars/climate-advocacy.jpg",    width: 1200, opts: jpeg },

  // Who-we-are: displayed at max ~480px — 1200px covers retina.
  { in: "home-who-we-are.jpg", out: "home-who-we-are.jpg", width: 1200, opts: jpegHi },
]

for (const job of jobs) {
  const inPath = resolve(SRC, job.in)
  const outPath = resolve(DST, job.out)
  await mkdir(dirname(outPath), { recursive: true })
  const info = await sharp(inPath)
    .rotate()
    .resize({ width: job.width, withoutEnlargement: true })
    .jpeg(job.opts)
    .toFile(outPath)
  const kb = (info.size / 1024).toFixed(0)
  console.log(`${job.in.padEnd(42)} → ${job.out.padEnd(42)}  ${info.width}×${info.height}  ${kb} KB`)
}
