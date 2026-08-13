---
title: "Tireless intelligence needs a stopping rule"
description: "Claude's Riemann zeta search shows what changes when persistence becomes a budget and why leaders must decide what deserves another attempt."
featuredImage: "/images/posts/tireless-intelligence-needs-a-stopping-rule.webp"
tldr: "Anthropic's reported Riemann zeta result shows that organizations can now fund unusually large AI searches as a metered resource. The case does not establish that persistence alone caused the advance or that more attempts always pay; it shows why leaders need to choose worthy questions, define independent evidence, limit delegated authority, and write continuation and stopping rules before a tireless campaign begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-13
---

On August 10, 2026, Anthropic, the AI company behind Claude, [reported](https://www.anthropic.com/research/riemann-zeta) that an unreleased research version of the system generated and tried 650 ideas that did not work. It then coordinated roughly 60 subagents, delegated AI processes working on narrower parts of the problem. The wider effort ran across two sessions in Claude Code, Anthropic's environment for agents that can work with files and run software tools, and consumed 31 million output tokens, units of model-generated text used to meter usage.

The problem involved the Riemann zeta function, a mathematical object whose zeros reveal patterns in the distribution of prime numbers. In 1859, German mathematician Bernhard Riemann proposed what became the Riemann hypothesis: every nontrivial zero, a special input where the function equals zero, lies on the critical line, where the input's real component is one-half.

Claude did not prove the Riemann hypothesis. Its [paper](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) raised an unconditional lower bound, the minimum share of those zeros that can be proved to lie on the line without assuming the hypothesis, from 5/12 to at least 2/3. That is a serious mathematical advance, and the larger claim about every nontrivial zero remains open.

The 650 failures invite a seductive reading, and a newsletter called AI Secret [supplied it](https://aisecret.us/a-37-year-math-record/): "This wasn't genius. It was stamina." I think that sentence is half right. The search also drew on decades of human mathematics, an algebra-based interpretation of prior work, computation, and several forms of checking. The more durable insight is economic: a search that once competed directly with scarce human attention can now be provisioned as tokens, tools, and review time.

Anthropic did not measure fatigue, shame, or career risk among researchers, so saying those human costs became a compute budget is a metaphor for allocatable search capacity, not a finding from the project. The metaphor still matters. Once persistence becomes purchasable, leadership has to choose which questions deserve it, what evidence can justify another tranche of funding, and who has the authority to stop.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude advanced a specific mathematical lower bound after a large search; it did not solve the Riemann hypothesis or prove that persistence alone caused the result. The strategic change is that sustained search can be funded and metered, which moves question choice, evidence, authority, and termination to the center of leadership.</p></div>

## What the 650 failures actually bought

Anthropic says the agents ran 2,400 shell commands, wrote hundreds of Python programs, checked calculations against known zeta zeros, searched for counterexamples, and downloaded 54 papers from arXiv, an open repository where researchers share scholarly papers before and after journal review. The literature search could reveal that an idea was already known, although it could not settle novelty by itself. Candidate ideas repeatedly met calculation and criticism, so the process produced more information than a raw list of guesses.

That process entered a landscape built by mathematicians. Number theorist J. B. Conrey's peer-reviewed [1989 paper](https://doi.org/10.1515/crll.1989.399.1) proved that more than two-fifths of the zeros lie on the critical line, and later human work raised the guarantee to 5/12 by 2020. Claude's preprint describes its new ingredient as a "linear-algebraic reading" of a [2024 result](https://arxiv.org/abs/2306.04799). In plainer language, it found a new algebra-based way to interpret an existing relationship among zeta zeros and use it in a stronger proof. The popular 37-year frame begins with Conrey's paper; it does not describe 37 years without human progress.

The checks are part of what makes the result usable. Anthropic reports numerical tests, counterexample searches, review by its own mathematicians, and examination by two outside number theorists on short notice. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean), a version of the proof written in a theorem-proving programming language so that a proof assistant can mechanically check the encoded statement and everything it depends on. That makes the proof more open to inspection, while questions of novelty, significance, and journal review remain for the mathematical community.

I don't know whether 60 agents were necessary, whether fewer tokens would have worked, or how many comparable campaigns ended with nothing publishable. Even the 650 figure needs care: it is Anthropic's count of initially unsuccessful ideas, and the released materials do not say how comparable those attempts were or under what shared standard they were rejected. There is no controlled comparison, public invoice, or portfolio-wide failure rate. I think the case demonstrates that a bounded, instrumented search can surface a checkable result while leaving the expected return on the next 31 million output tokens unknown.

Early failure can still have value when it changes what happens next. A rejected proof path pays for itself when it rules out a class of ideas, sharpens the next hypothesis, or records a dead end so another agent does not pay to find it again. Leaders can rationally fund exploration without demanding an immediate win, but each tranche should leave the decision landscape clearer than it found it. Repetition that produces no new evidence is only accumulated cost.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The search budget purchased breadth, tests, and repeated scrutiny on top of a human-built mathematical frontier. Failed paths create value when they narrow the search or improve the next decision; the public record does not show a general return curve for agent persistence.</p></div>

## Persistence becomes capital

A person who keeps failing pays in attention and lost alternatives, with reputation often added to the bill. A mathematician can spend a decade on an approach that fails and watch the cost arrive as a tenure decision, a grant that is not renewed, a career quietly narrowed. Machine attempts also consume scarce resources, including computing capacity and expert review, but no single person has to carry every retry. I think this is one concrete meaning of productivity becoming capital, the shift I have explored in earlier writing as the Three Crucibles: an organization can provision more execution on demand, while judgment decides where that capacity belongs.

The value still depends on the work. A [2023 study](https://www.nber.org/papers/w31161) from the National Bureau of Economic Research, a U.S. economics research organization, examined 5,179 customer-support workers and found that an AI assistant increased issues resolved per hour by 14% on average. A [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by METR, an independent organization that evaluates AI capabilities, found that experienced open-source developers took 19% longer on its measured tasks when allowed to use early-2025 AI tools. I think the gap between those results is the lesson: tokens, agent-hours, and user confidence are poor substitutes for an outcome measured in the task itself.

Consider a generic inventory-forecast campaign, scoped the way a real portfolio team would scope it: three or four people over six weeks, with roughly 20 hours of senior reviewer time set aside before the first run. A first two-week tranche could ask whether an agent system reduces forecast error on sales data the model has not seen, compared with the current method. The team might cap the search at 100 candidate approaches and an output-token budget in the low millions, grant read-only access to historical data, and forbid production changes. Those numbers are illustrative rather than benchmarks; the discipline is that they exist on paper before the first run.

An independent data scientist would then rerun the best result before the scheduled review, and the data, security, and workforce leads would be consulted in proportion to the access being requested rather than as a standing committee. If replication fails, the campaign receives neither more tool permissions nor another tranche. If it clears the prewritten threshold, a second, reversible pilot can run beside the existing forecast without controlling orders.

The control burden should grow with consequence. The European Union's [2024 Artificial Intelligence Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng), the bloc's binding framework for AI, uses a risk-based approach intended to tailor rules to the intensity and scope of risk. A read-only research loop should not face the same internal process as a system that can change prices, influence hiring, or alter working conditions. In much of Europe, employee representatives hold a legal right to be consulted before changes that affect working conditions, and in the Nordic countries that duty is codified in co-determination law, which makes it a design input rather than an afterthought. A campaign that graduates from reading data to shaping how people work crosses that line, so the consultation belongs in the escalation trigger, not in a postmortem.

At a portfolio review, the useful comparison is not one campaign's token count against another's. The unit a board can compare across campaigns is the cost per independently replicated improvement in a decision, including the reviewer and control hours that made the improvement trustworthy, set beside the best alternative use of the same capacity. Uncertain exploration deserves patience while it keeps changing what the organization would plausibly do next: the next hypothesis tested, the permissions requested, the budget allocated. When a tranche stops changing any of those, the owner should end the campaign unless a distinct hypothesis and budget are approved.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Purchasable persistence turns repeated search into a capital-allocation choice whose return varies by task. A proportionate campaign starts with limited access, a measured baseline, independent replication, and a reversible path, then competes for its next tranche against better uses of the same capacity.</p></div>

## Write the stopping rule before the loop

My take is that any persistent-agent campaign asking for budget or wider authority should carry a one-page **Persistence Warrant**. It is a decision record written before results arrive, so enthusiasm cannot quietly move the evidence threshold. It does not require a new forum; in most organizations the quarterly portfolio review can sign it, with the architecture board or the stage-gate between pilot and production as the natural alternate:

- **Question and owner:** Name the decision the search will inform, the domain owner accountable for its quality, and the executive who can end the work.
- **Hypothesis and disconfirmation:** State the claim, the baseline, what would count as failure, and what would make a later path genuinely new.
- **Evidence and independent evaluator:** Define the acceptance test and assign someone who can find errors through a different route, such as data reserved for testing, a separate experiment, a proof assistant, or a domain expert who did not produce the answer.
- **Budget and authority:** Cap attempts or tokens, elapsed time, reviewer hours, data access, tool permissions, and consequential actions. Record which decisions remain reversible.
- **Evidence record:** Keep a hypothesis ID, the prior result, tool and data boundaries, evaluator, replication status, spend, and stop reason, so rejected work becomes an inspectable record of what was tried and learned.
- **Continuation rule:** Prewrite the conditions for continuing, pivoting to a distinct hypothesis, and stopping for futility when another batch is unlikely to clear the evidence gate.

There is a statistical reason to decide these conditions in advance. A [2022 paper](https://doi.org/10.1287/opre.2021.2135) in *Operations Research*, an academic journal focused on decision methods, examines continuously monitored A/B tests, experiments that compare two versions of a product. It shows how ordinary statistical conclusions become unreliable when people keep watching and choose when to stop after seeing the data.

The analogy to agent campaigns has limits worth naming. A/B peeking bends statistical estimates because stopping adapts to the data, while an agent campaign's odds shift as hypotheses and tools change. The leadership lesson still travels, and it fits in one sentence a board can hold: if we choose when to stop after seeing the results, our evidence is weaker than it looks.

The deeper failure mode arrives after the budget does. When another attempt is always affordable, the scarce discipline is not stamina and not even the willingness to stop; it is defining learning narrowly enough that stopping remains possible. A campaign that redefines what counts as progress after each tranche can never fail, and a campaign that can never fail will consume every budget it is offered. Call it evidence-threshold inflation, and expect it to arrive quietly, dressed as optimism.

At the scheduled review, the owner has three honest choices. Continue when the agreed threshold is met and independently replicated. Pivot when a failed approach produces a distinct, testable hypothesis with its own budget. Stop when the campaign repeats its failure without reducing uncertainty. Wider permissions always require a fresh review, because they change the risk of the search and not merely its size, and when a campaign begins to touch employees' working conditions, the consultation duty travels with the authority. No new tranche should be approved without a falsifiable hypothesis, independent evidence, and a reversible path.

<figure class="fig-band article-diagram" data-diagram-id="review-stopping-rule">
<figcaption class="fig-cap">Fig. — At the scheduled review, a persistent-agent campaign has three prewritten outcomes: continue, pivot, or stop.</figcaption>
<svg width="100%" height="auto" viewBox="0 0 760 340" role="img" aria-labelledby="ad-review-stopping-rule-title ad-review-stopping-rule-desc" xmlns="http://www.w3.org/2000/svg">
<title id="ad-review-stopping-rule-title">Three prewritten outcomes at the scheduled review</title>
<desc id="ad-review-stopping-rule-desc">A decision tree with a scheduled review node branching into continue, pivot, and stop, each labeled with its prewritten condition.</desc>
<defs><marker id="ad-review-stopping-rule-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#00E653"></path></marker></defs>
<g class="article-diagram__decoration"><rect x="0" y="0" width="760" height="340" fill="#000000"></rect></g>
<g class="article-diagram__claim" data-claim-id="claim-review-choices">
<rect x="265" y="30" width="230" height="54" rx="8" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect>
<text x="380" y="64" text-anchor="middle" fill="#DCE7DE" font-size="20" font-weight="700">Scheduled review</text>
<line x1="320" y1="84" x2="140" y2="176" stroke="#00E653" stroke-width="3" marker-end="url(#ad-review-stopping-rule-arrow)"></line>
<line x1="380" y1="84" x2="380" y2="176" stroke="#00E653" stroke-width="3" marker-end="url(#ad-review-stopping-rule-arrow)"></line>
<line x1="440" y1="84" x2="620" y2="176" stroke="#00E653" stroke-width="3" marker-end="url(#ad-review-stopping-rule-arrow)"></line>
</g>
<g class="article-diagram__claim" data-claim-id="claim-continue">
<rect x="26" y="176" width="228" height="140" rx="8" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect>
<text x="140" y="212" text-anchor="middle" fill="#00E653" font-size="20" font-weight="700">Continue</text>
<text x="140" y="242" text-anchor="middle" fill="#DCE7DE" font-size="16">Threshold met and</text>
<text x="140" y="264" text-anchor="middle" fill="#DCE7DE" font-size="16">independently replicated</text>
</g>
<g class="article-diagram__claim" data-claim-id="claim-pivot">
<rect x="266" y="176" width="228" height="140" rx="8" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect>
<text x="380" y="212" text-anchor="middle" fill="#00E653" font-size="20" font-weight="700">Pivot</text>
<text x="380" y="242" text-anchor="middle" fill="#DCE7DE" font-size="16">Distinct, testable</text>
<text x="380" y="264" text-anchor="middle" fill="#DCE7DE" font-size="16">hypothesis, own budget</text>
</g>
<g class="article-diagram__claim" data-claim-id="claim-stop">
<rect x="506" y="176" width="228" height="140" rx="8" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect>
<text x="620" y="212" text-anchor="middle" fill="#00E653" font-size="20" font-weight="700">Stop</text>
<text x="620" y="242" text-anchor="middle" fill="#DCE7DE" font-size="16">Failure repeats without</text>
<text x="620" y="264" text-anchor="middle" fill="#DCE7DE" font-size="16">reducing uncertainty</text>
</g>
</svg>
</figure>

The Claude result is the first draft of that discipline arriving in the real world. Sixty agents did not outsmart the mathematicians who built the frontier; they outlasted the constraints that used to ration how many attempts any question could afford. Those constraints are now a budget line, and budgets are governance. My bet is falsifiable: within the next two or three budget cycles, purchasable persistence shows up first where questions have observable answers, in research portfolios, technical diligence, and forecasting work. The organizations that handle it well will be the ones whose people chose the question, defined the evidence, and were willing to say that the 651st attempt would teach them nothing new.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A Persistence Warrant ties every agent campaign to a named owner, falsifiable claim, independent evaluator, limited authority, inspectable record, and prewritten continuation and futility rules. Evidence thresholds fixed in advance protect the organization from its own enthusiasm, and the test of the discipline is whether future portfolios fund bounded questions rather than endless loops.</p></div>

## Meanwhile in sci-fi

<div class="scifi"><span class="scifi__label">Meanwhile in sci-fi</span><p class="scifi__film">Edge of Tomorrow (2014)</p><p>In Doug Liman's film, a soldier relives the same fatal battle and survives because each reset changes what he does next; the repetition itself is worthless without the learning it carries. That is exactly the distinction this article asks leaders to enforce. Tireless AI systems can provide far more resets than any human career could absorb, but a loop only earns its budget when evidence changes the next move and an accountable person can end it. The machine can repeat the day forever. Leadership is choosing the day worth repeating, deciding what would count as escape, and ending the loop when it stops teaching.</p></div>
