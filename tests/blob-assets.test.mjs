import assert from "node:assert/strict";
import test from "node:test";

import { rewriteText } from "../scripts/rewrite-blob-assets.mjs";

test("blob asset rewriting handles root-relative and canonical URLs", () => {
  const mapping = {
    "/images/hero.webp": "https://assets.example/site-assets/images/hero.webp",
    "/downloads/book.pdf": "https://assets.example/site-assets/downloads/book.pdf",
  };
  const source = [
    '<img src="/images/hero.webp">',
    '<meta content="https://www.cubagarcia.com/images/hero.webp">',
    '<a href="https://cubagarcia.com/downloads/book.pdf">Book</a>',
  ].join("\n");

  const result = rewriteText(source, mapping);

  assert.equal(result.match(/https:\/\/assets\.example/g)?.length, 3);
  assert.doesNotMatch(result, /cubagarcia\.com\/(?:images|downloads)/);
});

test("blob asset rewriting prefers the longest matching public path", () => {
  const result = rewriteText("/images/hero.webp-large", {
    "/images/hero.webp": "https://assets.example/base",
    "/images/hero.webp-large": "https://assets.example/large",
  });

  assert.equal(result, "https://assets.example/large");
});
