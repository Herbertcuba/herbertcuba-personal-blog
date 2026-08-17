---
title: "Claude’s 650 failures and the price of another attempt"
tldr: "Anthropic's 2026 zeta result shows that organizations can buy large amounts of bounded, tool-assisted persistence, but token volume becomes valuable only when the question is precise, the evidence is independently checked, and the budget has a stopping rule. Leadership shifts toward deciding which searches merit another attempt and remaining accountable for ending them."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

In August 2026, [Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reported an unusual path to mathematical progress. An unreleased research version of Claude generated and tried 650 initial ideas, all unsuccessful. Across two sessions in Claude Code, Anthropic’s tool-using coding environment, the work consumed 31 million output tokens, or units of model-generated text, and later involved roughly 60 subagents, delegated AI runs working on parts of the problem.

The result was important, but it was not a proof of the Riemann hypothesis. Proposed by German mathematician Bernhard Riemann in 1859, the hypothesis concerns the zeros of the Riemann zeta function, inputs where a function connected to the distribution of prime numbers has a value of zero. It says all the relevant zeros lie on a particular “critical line.” Claude’s paper instead established a higher lower bound, meaning a larger guaranteed minimum share on that line: from the previous 5/12 to at least 2/3, with an optimized figure of 0.6725. The hypothesis remains open.

That distinction makes the economic lesson more precise. Claude’s run shows that a large, bounded search can now be provisioned as organizational capacity. Persistence no longer has to reside entirely in one person’s willingness to absorb another dead end, but value still depends on the question, the tests and the people accountable for stopping. I think that is the leadership problem hiding inside the mathematics.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude did not solve the Riemann hypothesis or make thought free. The case shows that hundreds of tool-assisted attempts can become a funded search capacity, shifting attention toward question choice, proof standards and the decision to stop.</p></div>

## What the search budget actually bought

Scale alone did not produce the result. Anthropic reports 2,400 shell commands, hundreds of Python scripts, numerical checks against known zeta zeros, searches for counterexamples and downloads of 54 papers from arXiv, the public archive for scholarly preprints. This was an instrumented search in which candidate paths could be tested and rejected, rather than a long sequence of plausible answers accepted on style.

The search also began far inside a human-built body of mathematics. The “37-year record” shorthand points back to number theorist J. B. Conrey’s peer-reviewed 1989 result showing that more than two fifths of the zeros lie on the critical line. Human work continued after that, and the previous 5/12 record had stood since 2020. Claude’s [preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) credits a key 2024 paper by four number theorists, Baluyot, Goldston, Suriajaya and Turnage-Butterbaugh, then describes its new ingredient as a linear-algebraic reading of an existing calculation. Search capacity surfaced a conceptual move; it did not replace the research lineage that made the move possible.

Validation was part of the production system too. Anthropic says internal mathematicians studied the paper and two outside specialists examined it on short notice. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean): a precisely encoded version that a proof-assistant program can check against its stated logical dependencies. That makes the claim more auditable, although it does not turn a lab preprint into completed journal peer review or independent replication.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The useful unit was not a token or an attempt by itself. Prior mathematics, delegated trials, executable tests, novelty checks and several layers of review turned a large search into a result that specialists can now examine.</p></div>

## Another attempt is now a budget decision

Anthropic did not measure fatigue, shame or career risk, so the case cannot prove that compute replaced those human experiences. The economic asymmetry is still real: people can bear personal costs when they pursue hundreds of failed hypotheses, while an AI system does not become embarrassed or discouraged. An organization can authorize another machine-generated batch in units of tokens, time, tools and review.

This is one practical meaning of productivity becoming capital. Some capacity to keep working can be provisioned, concentrated and moved between problems instead of remaining tied to one person’s endurance. Anthropic published no dollar cost, hardware bill or energy total, however, so 31 million output tokens describes production volume rather than economic return.

And more production can destroy value. A 2023 [National Bureau of Economic Research working paper](https://www.nber.org/papers/w31161), based on 5,179 customer-support workers, found that access to a conversational assistant raised issues resolved per hour by 14% on average. In a different setting, a [2025 randomized study by METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), an independent organization that evaluates AI capabilities, found that experienced open-source developers took 19% longer on 246 real software issues when allowed to use early-2025 AI tools. Neither study tells us the return on mathematical agents. Together, they show why output and confidence cannot stand in for measured value.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI turns some persistence into allocatable capacity, but a larger meter reading is not a larger return. The relevant economic measure is the cost of a validated outcome, including review time and the other work the organization chose not to fund.</p></div>

## Write the stopping decision first

I think leaders should define the end of a persistent search before approving its beginning. A useful search mandate names the exact question, why an answer would matter, what tools and authority the agents receive, and the initial allowance in tokens, elapsed time and human review. “Find something useful about this market” fails that test because almost any polished output can be declared a success afterward.

Beside the question, write an evidence contract: a plain statement of what would count as success, disconfirmation, novelty and independent verification. The independent check should have a different failure mode from the producer. Depending on the problem, that could be a domain expert, a controlled experiment, separate data or a formal proof assistant. Mathematics is unusually favorable here because a theorem can be stated exactly; strategy and product choices need deliberately constructed tests.

Funding should then expand in stages. Another batch earns support when it produces a new falsifiable hypothesis, improves a predeclared measure or passes an evidence gate. The campaign pauses when the same failure recurs without a new explanation, independent review cannot reproduce the claim, the requested authority exceeds the original mandate, or the expected value of continuing falls below that of another candidate in the portfolio.

Stopping need not erase the work. Failed hypotheses, test results, rejected paths and their sources can be archived so another team or agent does not pay to discover the same dead ends. That record also lets leaders distinguish a disciplined search that ended from an expensive campaign that merely ran out of patience or budget.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Persistent AI needs a mandate written in advance: a precise question, an evidence contract, an initial budget, independent checking and explicit exit conditions. Funding expands only when verified learning earns the next stage.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>In this film, a soldier repeats the same battle and uses each death as information. The parallel is limited but useful: persistent AI search gains value only when failed paths are retained, evidence separates progress from motion, and someone has defined what ends the repetition.</p>
</div>

## The scarce resource is permission

This shift does not reduce people to budget setters. Human mathematicians built the underlying field, posed and refined the questions, assessed significance and supplied scrutiny. People will continue to contribute ideas, interpretation, relationships and accountability. What changes is the reason a search ends: machine fatigue is no longer available as a natural limit.

That leaves a harder form of judgment. When another attempt is easy to request and possible to scale across an organization, permission becomes scarce. The leader who authorizes attempt 651 should be able to name the evidence that would justify attempt 652 and the evidence that would end the campaign. Tireless intelligence does not remove leadership; it makes leaders accountable for every search they choose to keep alive.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Human value does not collapse into supervision, but responsibility moves forward in the process. Leaders must decide which questions deserve persistent capacity and remain answerable for both continuing the search and ending it.</p></div>
