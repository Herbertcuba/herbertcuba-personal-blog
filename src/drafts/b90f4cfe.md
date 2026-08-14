---
title: "Tireless intelligence needs a stopping rule"
description: "The AI company Anthropic reports that its Claude system tried 650 ideas that failed, turning persistence into a leadership choice about search budgets, proof, and permission to continue."
tldr: "The AI company Anthropic reports that its Claude system increased a proven minimum share of Riemann zeta zeros, inputs where a mathematical function used to study prime-number patterns equals zero, that lie on a fixed line. The work used 31 million output tokens, units of model-generated text, across two coding-agent sessions. After 650 failed ideas, a later effort coordinated about 60 delegated AI subagents. Anthropic disclosed no full cost or controlled test showing persistence caused the result. Leaders should choose the question, evidence, budget, independent evaluator, and stopping authority before tireless search begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-14
---

After 650 failures, the next attempt begins as an authorization. A system may be able to continue, but an organization still has to decide whether it should.

On August 10, 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of its system had advanced a difficult mathematical bound. The complete work generated 31 million output tokens, metered units of model-produced text, across two sessions in Claude Code, Anthropic's coding-agent environment. After 650 initial ideas failed, Anthropic says a later effort spent about a day and a half coordinating roughly 60 subagents, delegated AI processes working on parts of the problem.

The easy explanation is stamina. Yet Anthropic published no controlled comparison showing that the number of attempts caused the result, and its public account contains no full cost ledger. The work also depended on decades of mathematics and several layers of checking. I think the more useful strategic fact is that persistence itself has become a resource an organization can fund, measure, and renew.

That changes the human responsibility rather than removing it. Fatigue, shame, and career risk are my shorthand for pressures that make repeated failure costly for people; Anthropic did not measure them in this project. Moving part of that burden into model output lets a campaign run longer, which makes the choice of question, evidence, and stopping authority more important before the first batch begins.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude's 650 rejected ideas make retry capacity visible as an organizational allocation. The central leadership decision is whether another batch deserves resources and what evidence can end the search.</p></div>

## Decide what can end the search

Tireless work becomes dangerous when a campaign can always invent one more reason to continue. A stopping rule prevents that drift by stating in advance when work must pause, end, or return for fresh authorization. I would place it in a one-page Tireless Intelligence Charter, a written commitment made before the search starts that names the exact question, evidence against the working hunch, an independent evaluator, the first resource limit, and the forum allowed to approve another batch. This is my proposal, not a process Anthropic claims to have followed.

The charter should split authority among people with different incentives. A business sponsor owns the question and explains why a valid answer matters. An evaluator outside the running team owns the acceptance test and tries to reproduce the result. An existing portfolio review owns renewal because it can compare another allocation with the best unfunded alternative. The team doing the work may argue for continuation, while renewal authority stays elsewhere.

That forum needs outcome measures rather than a celebration of activity. The first allocation should cap output tokens, elapsed time, tool access, and reviewer hours. Renewal should require an independently reproduced improvement, a new falsifiable hypothesis, or evidence that materially changes the next test. Repeated failure without a new test, failed replication, or risk beyond the original authority should trigger a stop.

A stopped search can still leave useful assets. Preserve rejected hypotheses, failed checks, reviewer objections, and the reason each route ended, so later teams do not pay to rediscover the same dead ends. I think this is where human leadership gains weight: people still contribute ideas and expertise, but they also decide what counts as learning and who has the legitimate power to say enough.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Set the evidence, first resource limit, independent evaluator, and renewal forum before persistent AI work starts. The operating team produces the result while an existing portfolio forum controls renewal.</p></div>

## Mathematics could say no

The Claude case helps because the question had unusually hard edges. The Riemann zeta function is a mathematical function used to study patterns in prime numbers. Certain inputs make it equal zero, and mathematicians call those inputs its zeros. In 1859, the German mathematician Bernhard Riemann proposed that every nontrivial zero lies on one fixed vertical line with horizontal coordinate one-half, known as the critical line. That proposal, the Riemann hypothesis, remains unproved.

Claude's [lab-released preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) proves a narrower advance. A lower bound is a proven minimum, and the paper raises the minimum share of nontrivial zeros on the critical line from 5/12, about 41.67 percent, to at least 2/3, about 66.67 percent. It also reports an optimized figure of 0.6725, or 67.25 percent. This moves a bound without proving Riemann's full hypothesis.

The popular 37-year headline compresses a living research history. Number theorist J. B. Conrey established more than two fifths in a [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1), and later mathematicians improved the record to 5/12 in 2020. Claude's paper credits a peer-reviewed 2024 precursor by four number theorists and describes its own new ingredient as a linear-algebraic reading of their work. In plain language, it reorganized known mathematical relationships to reveal a stronger route.

Anthropic reports that the search issued 2,400 shell commands, wrote hundreds of Python scripts, ran numerical checks, looked for counterexamples, reviewed proofs, and downloaded 54 scholarly papers while checking whether the result was already known. Two Anthropic mathematicians studied the paper, and two outside number theorists examined it on short notice. The company also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a theorem-proving programming language, and formal verification here means software checked a precisely encoded proof under declared assumptions. That adds auditability, while conventional journal peer review remains a separate process.

I think the case is powerful because the search met resistance. A theorem, numerical checks, specialist scrutiny, and a proof assistant could reject attractive but faulty routes. Most strategy and product questions do not arrive with an equivalent critical line, so leaders must design an observable test before giving persistence a budget.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result is an inspectable lower-bound advance built on decades of human mathematics. Persistent search worked in a setting where several independent checks could reject a polished wrong answer.</p></div>

## Attempts are cheap only from inside the machine

The disclosed token count is an economic clue rather than a price. Anthropic gives no model price, hardware or energy total, human-review cost, opportunity cost, or return across comparable campaigns. We therefore cannot calculate the discovery's financial return from 31 million output tokens.

We can still see where scarcity moves. I think productivity becomes capital when another batch of cognitive work can be purchased instead of waiting for more human hours. Attempts become easier to supply, while expert review, institutional attention, and the choice among competing problems remain limited.

The value of AI work also depends on the setting. A [2023 working paper](https://www.nber.org/papers/w31161) from the National Bureau of Economic Research, a U.S. economics research organization, followed 5,179 customer-support agents and found a 14 percent average increase in issues resolved per hour after they gained access to a conversational assistant.

A different result came from [METR's 2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/). METR is an independent organization that studies AI capabilities; it assigned 246 real software issues to 16 experienced open-source developers, who took 19 percent longer when allowed to use early-2025 AI tools. METR now labels that result out of date after newer data published in 2026. The study still shows why leaders must measure performance inside a defined task instead of treating model use as value.

I don't know whether Anthropic needed 60 subagents, and the released evidence cannot tell us. My take is that copying its counts would miss the durable advantage. It lies in selecting questions where another attempt can produce evidence, then refusing more output when the evidence stops improving. I think independent rejection becomes more valuable as machine persistence gets cheaper.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Model attempts may be easy to provision, but review, attention, and alternative investments remain scarce. Judge persistent AI work by verified improvement, not by the volume of activity it can sustain.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Director Doug Liman's 2014 science-fiction film follows Major William Cage, a soldier who returns to the start of the same battle whenever he dies. The reset lets him gather information from failure because he remembers what the surrounding world forgets.</p>
</div>

The mapping turns on a difference: an organization never receives Cage's reset. An AI subagent may start another attempt without fatigue, while the budget, reviewer attention, delayed alternatives, and institutional confidence keep accumulating outside it. Repetition can feel cheap to the system doing the work and remain expensive to the institution carrying the consequences. Tireless intelligence will always offer another day; leadership is the authority to decide that the next one is no longer worth buying.
