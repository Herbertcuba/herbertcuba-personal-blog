import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const draft = readFileSync(
  new URL("../src/drafts/b8cc024d2de43415.md", import.meta.url),
  "utf8",
);

test("the CMS vendor draft renders sci-fi as a supporting aside between chapters", () => {
  const firstChapter = draft.indexOf("## What's actually changing");
  const aside = draft.indexOf('<aside class="scifi"');
  const secondChapter = draft.indexOf("## Test the operation, not the demo");

  assert.ok(firstChapter !== -1, "the first chapter must remain present");
  assert.ok(aside > firstChapter, "the sci-fi aside must follow the first chapter");
  assert.ok(secondChapter > aside, "the sci-fi aside must precede the next chapter");
  assert.match(
    draft,
    /<aside class="scifi" aria-labelledby="scifi-b8cc024d2de43415-title">/,
    "the component must use a labelled aside landmark",
  );
  assert.doesNotMatch(
    draft,
    /^## Meanwhile in sci-fi$/m,
    "the supporting aside must not appear as a numbered or indexed chapter",
  );
});
