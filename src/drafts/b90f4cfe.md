---
title: "Claude and the economics of trying again"
tldr: "Anthropic’s zeta result shows that organizations can now fund and coordinate far more attempts on a problem with clear tests, but it does not show that persistence alone caused discovery or that agent activity equals value. Leaders must choose questions worth sustained search, require independent evidence, release budget and authority in stages, and write stopping rules before tireless systems begin."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-15
---

On August 10, 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of its system had generated and tested 650 mathematical ideas. Every one failed. These were the opening approaches in a longer search, and Anthropic does not say that idea 651 succeeded.

Claude continued through two sessions in Claude Code, its tool-using coding environment, producing 31 million output tokens, or metered units of model-generated text. During a later day-and-a-half phase, roughly 60 subagents, delegated AI processes rather than employees, divided work across proofs, software checks, counterexample searches and literature review. That process eventually produced a new argument. I think the strategic change sits in this sequence: an organization funded and coordinated the willingness to try again.

The argument concerns the Riemann zeta function, a mathematical function connected to the distribution of prime numbers and central to German mathematician Bernhard Riemann’s 1859 work. A zero is an input where that function returns zero. The nontrivial zeros are those connected to Riemann’s famous hypothesis; the function also has a known, simpler set at negative even numbers.

The function takes complex numbers, which have real and imaginary parts, so mathematicians can plot its inputs on a two-dimensional graph. The critical line is the target vertical line where the horizontal, or real, part is one half. The Riemann hypothesis says every nontrivial zero sits there.

Claude’s [lab-released preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf), a public paper that has not completed conventional journal peer review, proves something narrower. Its basic theorem raises the proven lower bound from 5/12, about 41.7%, to at least two thirds, about 66.7%, a gain of 25 percentage points. An optimized version reaches 0.6725, or 67.25%.

The result is asymptotic: it describes the share as the counted range grows without limit, rather than making a claim about every finite sample. The calculation counts multiplicity in its total, so a zero repeated at one location counts more than once; the proven two-thirds are simple zeros that occur once and lie on the critical line. This is meaningful progress because far more zeros are now proved to meet the target condition, but the hypothesis requires every nontrivial zero to meet it.

The history matters too. Number theorist J. B. Conrey proved in a [peer-reviewed 1989 paper](https://doi.org/10.1515/crll.1989.399.1) that more than two fifths of the zeros lie on the line, and later human work lifted the record to 5/12 in 2020. So the popular “37-year record” frame describes the span from Conrey’s paper to 2026, not 37 years without progress.

The new proof also builds on a [2024 peer-reviewed paper](https://arxiv.org/abs/2306.04799) by number theorists Baluyot, Goldston, Suriajaya and Turnage-Butterbaugh. Their work established a result about the spacing between pairs of zeros without assuming the Riemann hypothesis. Claude’s paper treated the resulting sum as a quadratic form, an expression whose possible values can be bounded with linear algebra, and used that reframing in the stronger proof.

Anthropic reports that two internal mathematicians validated the paper and that specialist number theorists Brian Conrey and Dan Goldston examined it on short notice. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean), meaning a theorem-proving language checked a precisely encoded version of the argument under declared assumptions. That makes the result unusually open to inspection, although it does not replace independent replication or wider scrutiny by the field. I think the achievement becomes more interesting, not less, when these boundaries are visible.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude’s 650 failures were an initial phase in a longer, coordinated search that produced a specific new lower bound, not a proof of the Riemann hypothesis and not a documented victory of persistence alone.</p></div>

## The new resource is sustained search

Anthropic also reports 2,400 shell commands, hundreds of Python scripts, numerical tests, counterexample searches and checks across 54 research papers. Those numbers describe a search built around tests and records, not a price. Anthropic published neither a full cost ledger nor data from similar campaigns that produced nothing.

I don’t know whether 650 rejected ideas were necessary, whether fewer agents could have found the same route, or whether the decisive factor was one conceptual reframing. There is no controlled comparison that separates model capability, agent coordination, prior mathematics and search volume. I think the defensible economic claim is narrower: an organization can now fund persistence as a metered input and direct it toward a chosen problem.

This is the part of my Three Crucibles framing that matters here: productivity increasingly behaves like capital. A firm can allocate attempts, tools and review time instead of asking one researcher to absorb every dead end. Anthropic did not measure fatigue, shame or career risk; these are human frictions that funded AI search may partly move from an individual’s tolerance into an organizational budget.

A budget still does not create value by itself. A [2023 working paper](https://www.nber.org/papers/w31161) from the National Bureau of Economic Research, a US economics research organization, found a 14% average gain in issues resolved per hour among 5,179 customer-support workers using an AI assistant. In a different setting, [METR, an independent AI research group](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), found in 2025 that 16 experienced open-source developers took 19% longer with the early-2025 tools tested; METR now calls that result historical. I think the shared lesson is simple: count validated outcomes in the actual work, not tokens, messages or confidence.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The Claude case makes large-scale persistence allocatable, but its return is unknown. Search volume becomes economically useful only when an organization measures what the work proves, improves or decides.</p></div>

## Another run needs a prior agreement

Mathematics gave this campaign an unusual advantage: a theorem can be stated precisely, numerical claims can be tested, prior work can be searched, and a formal proof can be checked. Strategy, hiring and product discovery rarely arrive with such clean tests for success. A tireless system can instead build a polished trail of arguments that all inherit the same weak premise.

My take is that persistent AI work should begin with a Tireless Intelligence Charter, a short agreement written before the agents start. It names the question, the observable result that warrants more investment, what would show the idea is wrong, and how the team will establish that the result is new. It also names an independent verifier, such as a domain expert, external data, a controlled test or a proof system whose method is unlikely to repeat the agent’s mistakes. I think evidence design has to come before scale because an agent cannot manufacture both the claim and its standard of truth.

Funding should arrive in stages, with limits on tokens, elapsed time, reviewer hours, tool permissions, data access, spending authority and campaign scope. Renewal requires a gain agreed in advance, such as a testable new hypothesis, a reproduced result or an improvement on a validated measure. The ledger includes work postponed for the campaign and reports cost per validated outcome rather than activity alone.

The same charter sets the stopping rule. Pause when attempts repeat one failure without changing the hypothesis, when an independent reviewer cannot reproduce the result, or when another batch looks less valuable than the next question in the portfolio. Keep rejected routes, tests and source records so a stopped campaign leaves an auditable map instead of making the next system buy the same failures. The human responsibility is deciding what deserves another run and who can refuse it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Persistent AI campaigns need a question, an evidence contract, staged limits on budget and authority, and a stopping rule set in advance. Otherwise tirelessness turns an untested hunch into an expensive source of its own confirmation.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman’s science-fiction film follows Major William Cage, a soldier trapped in a battle that restarts whenever he dies. Each reset helps because he carries information from the failed loop into his next move.</p>
</div>

The mapping is narrow: an agent campaign earns another loop only when the last failure changes the hypothesis, the evidence or the test. A tireless system can always spend another life. Leadership decides whether that life still serves the question.
