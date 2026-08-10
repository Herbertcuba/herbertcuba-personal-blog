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
    /\.article-diagram\{[^}]*overflow-x:auto;/.test(compactCss),
    "article-diagram must own horizontal overflow",
  );
  assert.ok(
    /\.article-diagram\{[^}]*overscroll-behavior-inline:contain;/.test(compactCss),
    "article-diagram must contain horizontal overscroll",
  );
  assert.ok(
    /\.article-diagram>svg\{[^}]*display:block;[^}]*width:100%;[^}]*height:auto;/.test(
      compactCss,
    ),
    "article-diagram SVG must scale responsively",
  );
  const managedSvgMinimums = [
    ...compactCss.matchAll(
      /\.article-diagram>svg\{[^}]*min-width:([0-9]+)px;/g,
    ),
  ].map((match) => Number(match[1]));
  assert.ok(
    managedSvgMinimums.length > 0,
    "managed diagram SVGs must declare a minimum canvas width",
  );
  assert.deepEqual(
    [...new Set(managedSvgMinimums)],
    [760],
    "the CSS canvas must stay at 760px so <=760-unit SVG viewBoxes keep 16-unit labels at >=16 CSS pixels",
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
