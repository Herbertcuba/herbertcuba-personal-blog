---
title: "Tireless intelligence needs a stopping rule"
description: "Claude advanced a lower bound connected to the Riemann hypothesis after hundreds of failed ideas. The strategic lesson is how to fund persistent AI search without funding it forever."
tldr: "Anthropic reports that an unreleased Claude system rejected 650 ideas before a larger, tool-using search advanced a lower bound related to the Riemann hypothesis. The case does not prove that retries caused the result or that thinking has become cheap. It shows that persistence can be funded in stages. Leaders therefore need to choose questions with observable tests, require independent evidence, measure full cost against alternatives, and assign stopping authority before the next attempt begins."
featuredImage: "/images/posts/tireless-intelligence-needs-a-stopping-rule.webp"
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-15
---

On August 10, 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported an unusual mathematical result. Across two sessions in Claude Code, its environment for AI agents that can use files and software tools, an unreleased research system generated 31 million output tokens. An output token is a metered unit of text produced by the model.

Anthropic says Claude first tried 650 ideas and none worked. After another prompt, it spent a day and a half coordinating about 60 subagents, delegated AI runs that explored parts of the problem, used tools, and checked work. The tempting conclusion is that Claude simply outlasted mathematicians. I think that conclusion hides the mechanism we most need to understand.

The public record contains no controlled comparison showing that the number of attempts, subagents, or tokens caused the result. The proof also rests on decades of human mathematics, a new conceptual move, software checks, and specialist examination. Anthropic did not measure fatigue, shame, or career risk. Those are my names for human frictions that can make another failed idea harder to pursue or defend, not findings from this project.

Even with those limits, something important changed. An organization can now provision persistence, meter it, and decide whether to fund another stage. When a system does not tire, leadership becomes more responsible for choosing which question deserves repeated search, what will count as evidence, and who may refuse the next attempt.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude's result does not establish that persistence caused a breakthrough. It shows that repeated search can become a funded input, moving the renewal decision to the center of leadership.</p>
</div>

## What Claude actually moved

The Riemann zeta function is a mathematical function whose zeros, the inputs where its value equals zero, help describe patterns in the distribution of prime numbers. Its nontrivial zeros are the ones connected to that prime-number question. The Riemann hypothesis, proposed by German mathematician Bernhard Riemann in 1859, says every nontrivial zero lies on one vertical line in the mathematical plane, called the critical line. Nobody has proved that hypothesis, and Claude did not prove it.

The [current Claude preprint, dated August 11, 2026](https://www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf), is a research paper released before conventional journal peer review. It establishes a lower bound, meaning a proven minimum: at least two thirds of the nontrivial zeros are simple and lie on the critical line. A simple zero occurs once. Because the theorem counts with multiplicity, a repeated zero would be counted once for each repetition. The claim concerns the share as the number of zeros grows without limit, rather than a finite census, and it does not classify the remaining third.

The previous record was 5/12, about 41.7%, reached in 2020. The basic new theorem raises that floor to two thirds, about 66.7%, a move of 25 percentage points. The popular “37-year record” line reaches back to number theorist J. B. Conrey's [1989 peer-reviewed result](https://doi.org/10.1515/crll.1989.399.1) that more than two fifths lie on the line, but human mathematicians improved the bound between 1989 and 2020.

The new paper also builds on a [2024 peer-reviewed precursor](https://arxiv.org/abs/2306.04799) by number theorists Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh. Its new step re-reads a pair-correlation sum, a calculation about how the zeros' positions relate to one another, as a linear-algebra problem. Rank and trace, two properties of the resulting matrix, then constrain how many simple zeros the proof can certify on the critical line. This was recombination at a live mathematical frontier, not a machine searching an empty landscape.

Anthropic's [published process transcript](https://www-cdn.anthropic.com/8a0d1add3c637b858a9a181e98c40e9548c3f44f.pdf) makes one abandoned route visible. A branch sought useful cases among zeros away from the critical line, found none under its test, and shifted to a positive part of the calculation that could certify zeros on the line. That route first produced a one-half lower bound; a follow-up run pushed it to two thirds. The transcript omits the model's private reasoning and the complete settings and metadata needed to reproduce the run.

The checking record is meaningful and unfinished. Anthropic says two of its own mathematicians validated the paper, while number theorists Brian Conrey and Daniel Goldston examined it on short notice. Claude also produced a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a programming language for writing machine-checkable proofs; formal verification here means the software checked a precisely encoded theorem and proof against declared logical rules. It does not verify the search process, the economic interpretation, or broad acceptance by the mathematical community. I think the result is interesting precisely because its achievement and its limits can be stated together.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude advanced a specific lower bound rather than proving the Riemann hypothesis. The result combines human research, a new mathematical reading, repeated tool-using search, and several layers of checking, while remaining a fresh company-released preprint.</p>
</div>

## The economics are in the next attempt

Thirty-one million output tokens record activity, not a public price. Anthropic did not publish the input-token total, model price, infrastructure and energy costs, reviewer costs, or results from comparable failed campaigns. I don't know whether this scale was necessary, and the available evidence cannot tell us.

What leaders can buy is an option to fund another bounded stage. I use “attempt 651” as shorthand for that renewal decision, not as an attempt Anthropic numbered. The organization can ask whether the latest stage produced a stronger hypothesis, cleared an evidence gate, or merely generated more material.

This distinction matters for the Three Crucibles framing that productivity increasingly becomes capital. Capital is an owned asset expected to produce value over time; spending more on retries is still spending. Persistent search starts to look capital-like only when it leaves reusable assets such as verified methods, stable evaluation tests, and a searchable archive of failed hypotheses. Those assets also depreciate as models, data, and the problem change.

My take is therefore narrower: persistence has become a budgeted, option-like input. The stronger capital claim has to survive a portfolio test. Across a stable class of tasks, staged campaigns must produce more independently accepted value after all costs than open-ended campaigns and the strongest projects they delay. If they do not, governance may still have improved, but the capital thesis has failed.

Evidence from ordinary work shows why that test cannot be assumed. A [2023 working paper from the U.S. National Bureau of Economic Research](https://www.nber.org/papers/w31161) studied 5,179 customer-support workers and found a 14% average increase in issues resolved per hour with an AI assistant. A [2025 randomized study by the independent research group METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that 16 experienced open-source developers took 19% longer with the early-2025 AI tools tested; METR now labels that historical result out of date for newer tools. Neither study concerns mathematics. Together they show that activity and confidence are poor substitutes for measurement inside the work being funded.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Another stage of persistent AI search is an investment choice, not automatic proof that thinking has become capital. The stronger economic claim depends on reusable assets, full costs, independently accepted outcomes, and a credible comparison with the work that was delayed.</p>
</div>

## Write attempt 651 down in advance

I think a persistent AI campaign should begin with a Tireless Intelligence Charter: a one-page, signed agreement that fixes the question, evidence, limits, and decision rights before the system starts producing persuasive output. This is a proposal to test, not a practice established by the Claude project.

| Charter field | What must be fixed before launch |
|---|---|
| Question and owners | The decision, theorem, design, or experiment; the accountable sponsor; the delivery lead. |
| Evidence contract | The versioned tests for success, disconfirmation, novelty, and independent acceptance. |
| Data and tool boundary | Permitted data, models, tools, actions, data owner, storage location, and supplier-exit plan. |
| Stage budget | Wall-clock time, model and tool spend, reviewer hours, and the prebooked review date. |
| Independent verifier | A named expert, method, model, formal proof, controlled test, or external dataset with a different failure mode. |
| Renewal and stop authority | A named person or forum outside the delivery team with power to renew, pause, or end the campaign. |
| Archive and signatures | The owner and retention period for prompts, tool calls, failed hypotheses, evidence, decisions, plus signatures from the sponsor, verifier, and stop authority. |

The control mechanics should be equally plain. Permissions prevent the delivery team from changing a campaign from paused to renewed on its own. An append-only event record does something different: it preserves the requested transition, the evidence presented, the authorized decision, and the acceptance-test version so the choice can be audited later.

The economic measure also needs a stable denominator. For a predeclared class of tasks, divide the full cost of every accepted and rejected stage, including independent review and delayed alternatives, by the number of outcomes the independent verifier accepts. Freeze the acceptance rules before launch and report campaigns with no accepted outcomes honestly. Token volume alone cannot rescue the ratio.

Stopping rules belong in the charter for the same reason. A campaign should pause when new batches repeat the same failure without a new testable hypothesis, when independent review cannot reproduce the claim, when the required authority exceeds the original boundary, or when the expected value of another stage falls below the next portfolio candidate. The team running the search can recommend renewal, but it cannot grant it.

A stopped campaign may still leave a useful asset if its failed routes and evidence remain searchable. That archive can keep a later team from paying to rediscover the same dead ends. I think the difficult leadership act will be refusing another stage when the evidence has stopped improving, even though the system remains perfectly willing to continue.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A Tireless Intelligence Charter makes question choice, evidence, cost, independent review, data boundaries, and stopping authority explicit before launch. Its decisive rule is that the team consuming the budget cannot authorize its own renewal.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows Major William Cage, a soldier who dies in battle and returns to the same day with knowledge from earlier repetitions. Progress comes because information survives each reset and changes what he tries next.</p>
<p>The mapping to persistent AI search is exact enough to be useful: repeated attempts create value only when evidence carries forward, rejected routes remain visible, and someone has defined the condition for exit. Tireless intelligence can own the repetition. Leadership still owns the reason to repeat and the authority to stop.</p>
</div>
