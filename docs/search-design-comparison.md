---
type: Product delta specification
---
# Menu search design comparison

Authority: Herbert Slack C0C315RDBSM/1793813310.940909; same owner task website-current-mirror-1793811009. Base: B28a3ce05a37943040cbc38d3ed2e92d9df3c7683.

The supplied iOS screenshot shows excessive outlined rectangles, oversized Close/Clear buttons, repetitive text and an undifferentiated empty state. Improve only the menu search experience; preserve the actual production site's surrounding design. Human judgment of beauty remains separate from technical acceptance.

## Promises

- D1: Two independently retained featurebranches and private noindex preview links from exact B base. Existing baseline/A/B and production remain unchanged. No public deploy.
- D2: Version1 Minimal Finder: compact charcoal command-palette feel; one integrated search field, understated search icon, small44px close/reset controls, restrained green accent and subtle separators, thumbnail-led horizontal results. Clear hierarchy and concise empty copy; no giant outlined buttons or permanent green input box. Existing site typefaces remain.
- D3: Version2 Editorial Explorer: visibly different, airier editorial panel; larger image-led cards, more deliberate title hierarchy and warm dark-neutral surfaces. Desktop two-column results and mobile one-column cards; compact search controls. Green remains accent, not a border around everything. Not just a color swap of D2.
- D4: At320/390px, modal uses at least viewport minus24px width and readable input font>=16px,44px actionable targets, no horizontal overflow. At1440px desktop composition is intentional. Initial empty state fits comfortably; results scroll inside modal. Test short mobile viewport390x500 to approximate keyboard-reduced space. No overlap/inaccessible controls.
- D5: Search titles/full text, normalization, results, noresults, clear/reset, submit, fetch failure/retry, relative article links, loaded optional real article images and failed/missing image fallback continue. No article/index/image-policy/ranking changes. May shorten empty copy through a data-bound optional string but not weaken errors/status announcements.
- D6: Accessible named modal/input/buttons, trapped forward/reverseTab, firstEscape closes populated dialog and returns focus, visible keyboard focus without touch-focused giant outline. Native touch keyboard input remainsusable; physical iOS not claimed verified. No new tracking/network mutation, unsafe images/links, external assets/fonts.
- D7: Source Standards+Spec review bound exact commits; npm ci/test/build:preview pass; separate behavioral tester checks actual HTTPS previews at320/390/1440 and shortviewport. Record screenshots of empty/results mobile+desktop. All unmodified outside-modal pages remain visually identical. Deliver clear links and short comparison, no production promotion.

## Non-goals and recovery

No site-wide redesign, content edits, analytics, semantic backend, production deployment or new paid service. Preserve header search location. Revert/remove only new owned previews if a design fails; existingB is rollback. Source branches remain unmerged. Missing image and network errors are required failure coverage; broader authorization features not applicable to this read-only public corpus.
