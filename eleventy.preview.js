import productionConfig from './.eleventy.js';

// Reuse the actual site's render pipeline, adding preview-only safety boundaries.
export default function (eleventyConfig) {
  const config = productionConfig(eleventyConfig);
  for (const path of ['src/drafts/**', 'src/drafts-pages/**', 'src/private/**']) {
    eleventyConfig.ignores.add(path);
  }
  eleventyConfig.addTransform('private-preview', function (content) {
    if (!this.page.outputPath?.endsWith('.html')) return content;
    return content
      .replace(/<meta\b[^>]*name=["']robots["'][^>]*>/gi, '')
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (script) =>
        /googletagmanager|gtag\(|\/api\//i.test(script) ? '' : script)
      .replace(/<head([^>]*)>/i, '<head$1>\n<meta name="robots" content="noindex, nofollow, noarchive">');
  });
  return { ...config, dir: { ...config.dir, output: 'dist-preview' } };
}
