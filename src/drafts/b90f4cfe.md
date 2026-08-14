---
title: "When the 650th failure becomes a budget decision"
description: "Claude's zeta result makes repeated AI search visible as an organizational choice, which means leaders must decide what deserves another attempt."
tldr: "In August 2026, Anthropic, the AI company behind Claude, reported that an unreleased research model tried 650 ideas that failed and then improved a proven minimum share of Riemann-zeta zeros on the critical line, the line in the complex-number plane where the real part is one-half. The unproved Riemann hypothesis says all relevant zeros lie there. The run used 31 million output tokens and about 60 AI subagents, but it neither establishes that persistence caused the result nor reveals its financial return. I think leaders should predefine the question, evidence, reviewer, and stopping authority."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-14
---

Suppose a team reaches the next portfolio review with 650 failed routes and asks for permission to continue. Anthropic's mathematics project turns that hypothetical into a serious leadership question: when attempts can be delegated to machines and metered, who authorizes the next one?

On August 10, 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of its system had advanced a bound connected to the Riemann zeta function. The public account says 650 initial ideas failed. A later run used 31 million output tokens, meaning metered units of model-generated text, and coordinated about 60 subagents, delegated AI processes working on parts of the problem, over roughly a day and a half.

The tempting summary is that Claude simply outlasted mathematicians. I think that misses both the mathematics and the management. Anthropic disclosed no controlled comparison showing that the number of attempts caused the result, and it published no dollar cost for the run. What the case does make visible is a large search broken into countable attempts, tool calls, checks, and reviews.

Fatigue, shame, and career risk were not measured in this project. I use them as shorthand for pressures that can make repeated human failure difficult, not as findings about Claude's success. The leadership question is therefore narrower: when repeated search can be provisioned like any other resource, which question earns the next allocation?

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Anthropic's case makes persistence visible as a budgeted search process, but it does not prove that more attempts caused the result or produced an attractive financial return.</p></div>

## A precise advance on inherited ground

The Riemann zeta function is a mathematical object whose nontrivial zeros reveal fine patterns in the distribution of prime numbers. In 1859, the German mathematician Bernhard Riemann proposed what became the Riemann hypothesis: all those zeros lie on the critical line, the vertical line in the complex-number plane where the real part is one-half. Nobody has proved that claim.

Claude's paper makes a more limited statement. A lower bound is a proven minimum share of the zeros known to lie on that line. The [lab-released preprint](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) raises the comparison from 5/12, or about 41.67 percent, to at least 2/3, or about 66.67 percent, and reports an optimized figure of 0.6725, or 67.25 percent. That is a serious advance, but it is not a proof of the Riemann hypothesis.

The popular 37-year frame also needs care. The number theorist J. B. Conrey proved in a [1989 peer-reviewed paper](https://doi.org/10.1515/crll.1989.399.1) that more than two fifths of the zeros lie on the critical line. Human mathematicians improved the bound after that, reaching 5/12 in 2020. Claude's paper also credits a [2024 peer-reviewed precursor](https://arxiv.org/abs/2306.04799) by four number theorists and describes its new ingredient as a linear-algebraic reading, which means using the mathematics of relationships among collections of numbers to reinterpret earlier formulas.

The search was extensive. Anthropic says the agents ran 2,400 shell commands, wrote hundreds of Python scripts, checked known zeta zeros numerically, searched for counterexamples, reviewed proofs, and downloaded 54 papers from arXiv, an open repository for scholarly preprints, while checking whether the result was already known. The company says two internal mathematicians studied the work and two outside number theorists examined it on short notice.

Anthropic also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a theorem-proving programming language, and formal verification means that software checks a precisely encoded statement and proof under declared assumptions. This makes the argument easier to audit; it does not turn a lab preprint into completed journal peer review.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The result is a specific, inspectable mathematical advance built on decades of human work and several layers of checking. Persistence expanded the search, but the record does not isolate persistence as the cause.</p></div>

## The run made persistence countable

My take is that Anthropic's public counts invite an economic interpretation of attempts. The project allocated model output, tools, and review across many routes instead of treating the result as one indivisible answer. For enterprise leadership, I propose treating any comparable campaign as a capital decision rather than assuming the extra work is free. This is what I mean when I say productivity increasingly becomes capital: the organization must choose how much repeated machine work it is willing to fund and govern.

That does not make thinking free. Anthropic's public account gives output volume but no model price, hardware or energy total, human-review cost, opportunity cost, or denominator showing how many comparable campaigns produced nothing. I don't know whether 60 subagents were necessary, and the disclosure does not let us calculate a return on the run.

Evidence from ordinary work gives another reason to stay cautious. A [2023 National Bureau of Economic Research study](https://www.nber.org/papers/w31161) of 5,179 customer-support agents found that access to a conversational assistant increased issues resolved per hour by 14 percent on average. In a different setting, a [2025 randomized study by METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), an independent organization that studies AI capabilities, found that 16 experienced open-source developers took 19 percent longer on 246 real software issues when allowed to use early-2025 AI tools. METR now labels that result out of date after newer 2026 data. Neither study tells us the value of frontier mathematics agents. Together, they show why activity counts cannot substitute for measured outcomes.

I think the useful decision is narrower than unlimited machine stamina: should this particular search receive another allocation? The Claude case gives leaders no reason to assume that more search is automatically worth financing.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Repeated AI search can be funded and measured as an input, while its return remains task-specific and unresolved. Tokens, agents, and attempts describe activity; they do not establish value.</p></div>

## The right to continue needs an owner

Formal mathematics made this campaign unusually easy to judge because the claim could be stated precisely and checked in several ways. Strategy, product discovery, and organizational design rarely arrive with an equivalent critical line. I think persistent search deserves more restraint when the definition of success can move during the campaign.

Before allocating a large run, I would require a short authorization that records the exact question, the result that would count against the working hunch, the evidence standard, the independent reviewer, the first limits on tokens, time, tools, and reviewer hours, and the forum allowed to renew the work. This is a proposal, not a method validated by Anthropic's case. Its purpose is to make authority visible before the campaign produces enough polished material to argue for its own continuation.

The renewal decision should sit in an existing portfolio review or another forum that can compare the campaign with competing uses of money and attention. The team running the search can present new evidence, but it should not hold sole authority over another allocation. I think renewal should depend on a predeclared test, an independently reproduced improvement, or a genuinely new hypothesis that changes what will be tested next.

Stopping also needs a record. I would preserve rejected hypotheses, failed checks, reviewer objections, and the reason the work ended, so a later team or agent can inspect the dead ends rather than silently repeat them. This does not prove that the next portfolio decision will be better. It creates an auditable basis for making one.

I think ambition deserves a harder standard once tirelessness can be purchased. The machine's capacity to continue is no longer a sufficient argument for continuing.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Authorize persistent AI search with a fixed question, disconfirming evidence, an independent reviewer, bounded resources, and a renewal forum outside the running team. These are proposed safeguards, not outcomes established by the Claude project.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows Major William Cage, a soldier who repeatedly dies and returns to the same battle carrying knowledge from earlier loops. Repetition helps only because failed routes change what he tries next.</p>
</div>

The mapping is limited but useful: Claude's subagents did not relive one identical day, and the film is not evidence about AI research. It shows why another loop has value only when failure narrows the next test. Tireless intelligence can supply attempts; accountable leaders must decide which battle is worth repeating.
