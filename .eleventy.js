import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

// Single source of truth for theme config — also available to templates as `themes`
const THEMES = JSON.parse(readFileSync(join(process.cwd(), "src", "_data", "themes.json"), "utf8"));

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

  // MM-DD short date for card meta rows
  eleventyConfig.addFilter("shortDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toISOString().slice(5, 10);
  });

  // Estimated reading time in minutes from raw content
  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return 1;
    const text = String(content).replace(/<[^>]+>/g, " ");
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 220));
  });

  // Theme metadata: label + accent colors, keyed by theme slug.
  // Source of truth is src/_data/themes.json (also exposed to templates as `themes`).
  const THEME_META = THEMES.meta;
  eleventyConfig.addFilter("themeMeta", (slug) => THEME_META[slug] || THEME_META["strategy-leadership"]);
  eleventyConfig.addGlobalData("themeOrder", THEMES.order);
  eleventyConfig.addGlobalData("themeMetaAll", THEME_META);

  // Tags minus "ai", capped at N — for card meta rows
  eleventyConfig.addFilter("displayTags", (tags, n) => {
    if (!Array.isArray(tags)) return [];
    return tags.filter((t) => t && t.toLowerCase() !== "ai").slice(0, n || 3);
  });

  // First N items of an array (works on collections/arrays)
  eleventyConfig.addFilter("take", (arr, n) => (Array.isArray(arr) ? arr.slice(0, n) : []));

  // Zero-pad a number to 3 digits — insight numbering (057)
  eleventyConfig.addFilter("padNum", (n) => String(n).padStart(3, "0"));

  // Is a post trending? GA4 data (src/_data/trending.js) wins when present;
  // otherwise fall back to the post's manual `trending: true` frontmatter flag.
  // Usage in templates: {% if post | isTrending(trending) %}
  eleventyConfig.addFilter("isTrending", (post, gaTrending) => {
    if (gaTrending && typeof gaTrending === "object") {
      return Boolean(gaTrending[post.url]);
    }
    return Boolean(post.data && post.data.trending);
  });

  // Items from index start..end
  eleventyConfig.addFilter("between", (arr, start, end) => (Array.isArray(arr) ? arr.slice(start, end) : []));

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date);
  });

  // Posts grouped by theme (each sorted newest-first)
  eleventyConfig.addCollection("postsByTheme", (collectionApi) => {
    const posts = collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date);
    const groups = { "agentic-engineering": [], "operating-models": [], "strategy-leadership": [] };
    for (const p of posts) {
      const t = p.data.theme || "strategy-leadership";
      (groups[t] || groups["strategy-leadership"]).push(p);
    }
    return groups;
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
