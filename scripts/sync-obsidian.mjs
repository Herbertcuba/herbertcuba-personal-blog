import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import slugify from "slugify";

// Configure these paths once and keep them stable.
const OBSIDIAN_PUBLISH_DIR = process.env.OBSIDIAN_PUBLISH_DIR
  || "/Users/herbertcubagarcia/Library/Mobile Documents/iCloud~md~obsidian/Documents/Publish";
const OUT_DIR = "src/posts";

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function listMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.toLowerCase().endsWith('.md'))
    .map(f => path.join(dir, f));
}

function inferDateFromFilename(filePath) {
  // If filename begins with YYYY-MM-DD, use it.
  const base = path.basename(filePath, ".md");
  const m = base.match(/^(\d{4}-\d{2}-\d{2})[ _-]/);
  if (m) return m[1];
  const st = fs.statSync(filePath);
  const d = new Date(st.mtime);
  return d.toISOString().slice(0,10);
}

function inferTitle(filePath, content) {
  // Prefer first H1 in the markdown.
  const m = content.match(/^#\s+(.+)$/m);
  if (m) return m[1].trim();
  return path.basename(filePath, ".md");
}

function buildFrontmatter(existing, filePath, raw) {
  const date = existing.date || inferDateFromFilename(filePath);
  const title = existing.title || inferTitle(filePath, raw);
  const excerpt = existing.excerpt || existing.description || "";
  const layout = existing.layout || "post.njk";
  return { ...existing, title, date, excerpt, layout };
}

function toSlug(filePath, data) {
  if (data.slug) return String(data.slug);
  const base = path.basename(filePath, ".md");
  // strip leading date prefix
  const cleaned = base.replace(/^(\d{4}-\d{2}-\d{2})[ _-]?/, "");
  const candidate = cleaned || (data.title || base);
  return slugify(candidate, { lower: true, strict: true });
}

function syncOne(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = buildFrontmatter(parsed.data || {}, filePath, parsed.content);
  const slug = toSlug(filePath, data);

  // Remove top-level H1 from body if it duplicates title.
  let body = parsed.content.replace(/^#\s+.+\n+/, "");
  body = body.trim() + "\n";

  const outPath = path.join(OUT_DIR, `${slug}.md`);
  const out = matter.stringify(body, data);
  fs.writeFileSync(outPath, out, "utf8");
  return { slug, outPath };
}

ensureDir(OUT_DIR);

const files = listMarkdown(OBSIDIAN_PUBLISH_DIR);
if (files.length === 0) {
  console.log(`No markdown files found in ${OBSIDIAN_PUBLISH_DIR}.`);
  console.log(`Create it and drop publish-ready notes there.`);
  process.exit(0);
}

const results = files.map(syncOne);
console.log(`Synced ${results.length} notes from Obsidian → ${OUT_DIR}`);
for (const r of results) console.log(`- ${r.slug}`);
