import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

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
