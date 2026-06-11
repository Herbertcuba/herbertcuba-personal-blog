import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  eleventyConfig.addPassthroughCopy({ "src/images": "/images" });

  // Markdown with heading anchors
  const md = markdownIt({ html: true, linkify: true })
    .use(markdownItAnchor, {
      permalink: false,
      slugify: (s) => s.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()
    });
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("currentYear", () => {
    return new Date().getFullYear();
  });

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("drafts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/drafts/*.md").sort((a, b) => b.date - a.date);
  });

  // Drafts: every md file under src/drafts/, regardless of permalink.
  // getFilteredByGlob/getAll silently drops files with an explicit `permalink` frontmatter
  // (e.g. /drafts/<hash>/), which all our draft files have, so we read them directly
  // from disk and extract title/excerpt/date from frontmatter.
  eleventyConfig.addCollection("draftList", () => {
    const dir = join(process.cwd(), "src", "drafts");
    if (!existsSync(dir)) return [];
    const files = readdirSync(dir).filter((f) => f.endsWith(".md"));
    const items = files.map((f) => {
      const raw = readFileSync(join(dir, f), "utf8");
      // Minimal frontmatter parser — we only need title, date, excerpt
      const fm = {};
      if (raw.startsWith("---")) {
        const end = raw.indexOf("\n---", 3);
        if (end !== -1) {
          const block = raw.slice(3, end);
          for (const line of block.split("\n")) {
            const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
            if (m) {
              let v = m[2].trim();
              if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
              if (v.startsWith("'") && v.endsWith("'")) v = v.slice(1, -1);
              fm[m[1]] = v;
            }
          }
        }
      }
      const hash = f.replace(/\.md$/, "");
      return {
        url: `/drafts/${hash}/`,
        title: fm.title || hash,
        date: fm.date || "",
        excerpt: fm.excerpt || "",
      };
    });
    return items.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "dist"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
