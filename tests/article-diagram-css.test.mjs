import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const css = readFileSync(new URL("../src/static/redesign.css", import.meta.url), "utf8");

function compact(value) {
  return value.replace(/\s+/g, "");
}

const compactCss = compact(css);

test("managed article diagrams are responsive without widening the page", () => {
  assert.ok(
    /\.article-diagram\{[^}]*min-width:0;[^}]*overflow:visible;/.test(compactCss),
    "article-diagram must shrink with its article container without becoming a scroller",
  );
  assert.doesNotMatch(
    compactCss,
    /\.article-diagram\{[^}]*overflow-x:(?:auto|scroll);/,
    "managed diagrams must never create nested horizontal scrolling",
  );
  assert.ok(
    /\.article-diagram>svg\{[^}]*display:block;[^}]*width:100%;[^}]*max-width:100%;[^}]*min-width:0;[^}]*height:auto;/.test(
      compactCss,
    ),
    "article-diagram SVG must scale entirely inside its container",
  );
  assert.doesNotMatch(
    compactCss,
    /\.article-diagram>svg\{[^}]*min-width:[1-9][0-9]*px;/,
    "managed diagrams must not force a fixed minimum canvas width",
  );
  assert.ok(
    /\.article-diagram\[data-diagram-id="workflow-sequence"\]>svg\{max-width:420px;}/.test(compactCss),
    "the workflow-sequence diagram must stay readable rather than stretching on desktop",
  );
});

test("all inline article images and SVGs are constrained to the prose width", () => {
  assert.ok(
    /\.art-proseimg,\.art-prosesvg\{[^}]*display:block;[^}]*max-width:100%;[^}]*height:auto;/.test(
      compactCss,
    ),
    "inline images and SVGs must never exceed the article container",
  );
});

test("managed diagrams retain the existing figure-system visual language", () => {
  assert.ok(
    /\.fig-band\{[^}]*background:#000;/.test(compactCss),
    "managed diagrams must inherit the dark figure band",
  );
  assert.ok(
    /\.article-diagram>svg\{[^}]*margin-inline:auto;/.test(compactCss),
    "managed diagram SVG must stay centered",
  );
  assert.ok(
    /\.article-diagram>\.fig-cap/.test(compactCss),
    "managed diagram captions must use the figure caption system",
  );
});
