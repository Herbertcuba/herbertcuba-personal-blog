import fs from "node:fs";
import path from "node:path";
import slugify from "slugify";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Usage: npm run new -- "My Post Title"');
  process.exit(1);
}

const date = new Date().toISOString().slice(0,10);
const slug = slugify(title, { lower: true, strict: true });
const out = path.join('src/posts', `${slug}.md`);

const template = `---\ntitle: "${title.replaceAll('"','\\"')}"\ndate: ${date}\nexcerpt: ""\nlayout: post.njk\n---\n\n`;

fs.mkdirSync('src/posts', { recursive: true });
fs.writeFileSync(out, template, 'utf8');
console.log('Created', out);
