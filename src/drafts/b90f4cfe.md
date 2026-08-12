---
title: "Tireless intelligence needs a stopping rule"
date: 2026-08-12
description: "Claude's Riemann zeta search shows what changes when persistence becomes a budget and why leaders must decide what deserves another attempt."
featuredImage: "/images/posts/tireless-intelligence-needs-a-stopping-rule.webp"
tldr: "Anthropic's reported Riemann zeta result shows that organizations can now fund unusually large AI searches as a metered resource. The case does not establish that persistence alone caused the advance or that more attempts always pay; it shows why leaders need to choose worthy questions, define independent evidence, limit delegated authority, and write continuation and stopping rules before a tireless campaign begins."
permalink: /drafts/b90f4cfe/
layout: post.njk
---

On August 10, 2026, Anthropic, the AI company behind Claude, [reported](https://www.anthropic.com/research/riemann-zeta) that an unreleased research version of the system generated and tried 650 ideas that did not work. It then coordinated roughly 60 subagents, delegated AI processes working on narrower parts of the problem. The wider effort ran across two sessions in Claude Code and consumed 31 million output tokens, units of model-generated text used to meter usage. Claude Code is Anthropic's environment for agents that can work with files and run software tools.

The problem involved the Riemann zeta function, a mathematical object whose zeros reveal patterns in the distribution of prime numbers. In 1859, German mathematician Bernhard Riemann proposed what became the Riemann hypothesis: every nontrivial zero, a special input where the function equals zero, lies on the critical line, where the input's real component is one-half.

Claude did not prove the Riemann hypothesis. Its [paper](https://www-cdn.anthropic.com/564f962e60643842f5fcb4a17c9dbc8f608f1c37.pdf) raised an unconditional lower bound, the minimum share of those zeros that can be proved to lie on the line without assuming the hypothesis, from 5/12 to at least 2/3. That is a serious mathematical advance, while the claim that every nontrivial zero lies there remains open.

The 650 failures make stamina the obvious headline, but they do not tell us what caused the result. The proof also drew on decades of human mathematics, an algebra-based interpretation of prior work, computation, and several forms of checking. I think the more durable insight is economic: a large search that once competed directly with scarce human attention can now be provisioned as tokens, tools, and review time.

Anthropic did not measure fatigue, shame, or career risk among researchers. Saying those human costs became a compute budget is therefore a metaphor for allocatable search capacity, not a finding from the project. Once persistence becomes purchasable, leadership has to choose which questions deserve it, what evidence can justify another tranche, and who has the authority to stop.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Claude advanced a specific mathematical lower bound after a large search; it did not solve the Riemann hypothesis or prove that persistence alone caused the result. The strategic change is that sustained search can be funded and metered, which moves question choice, evidence, authority, and termination to the center of leadership.</p></div>

## What the 650 failures actually bought

Anthropic says the agents ran 2,400 shell commands, wrote hundreds of Python programs, checked calculations against known zeta zeros, searched for counterexamples, and downloaded 54 papers from arXiv, an open repository where researchers share scholarly papers before and after journal review. The literature search could reveal that an idea was already known, although it could not settle novelty by itself. Candidate ideas repeatedly met calculation and criticism, so the process produced more information than a raw list of guesses.

That process entered a landscape built by mathematicians. Number theorist J. B. Conrey's peer-reviewed [1989 paper](https://doi.org/10.1515/crll.1989.399.1) proved that more than two-fifths of the zeros lie on the critical line, and later work raised the guarantee to 5/12 by 2020. Claude's preprint describes its new ingredient as a “linear-algebraic reading” of a [2024 result](https://arxiv.org/abs/2306.04799). In plainer language, it found a new algebra-based way to interpret an existing relationship among zeta zeros and use it in a stronger proof. The popular 37-year frame begins with Conrey's paper; it does not describe 37 years without human progress.

The checks are part of what makes the result usable. Anthropic reports numerical tests, counterexample searches, review by its own mathematicians, and examination by two outside number theorists on short notice. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean). Lean 4 is a theorem-proving programming language, and formal verification means a proof assistant checks a precisely encoded statement and its dependencies under declared logical assumptions. That makes the proof more open to inspection, while questions of novelty, significance, and journal review remain for the mathematical community.

I don't know whether 60 agents were necessary, whether fewer tokens would have worked, or how many comparable campaigns ended with nothing publishable. The released materials provide no controlled comparison, public invoice, or portfolio-wide failure rate. I think the case demonstrates that a bounded, instrumented search can surface a checkable result while leaving the expected return on the next 31 million output tokens unknown.

Early failure can still have option value, meaning it preserves better future choices as uncertainty falls. A rejected proof path earns that value when it rules out a class of ideas, sharpens the next hypothesis, or records a dead end so another agent does not buy it again. Leaders can rationally fund exploration without demanding an immediate win, but each tranche should leave the decision landscape clearer. Repetition that produces no new evidence is just accumulated cost.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The search budget purchased breadth, tests, and repeated scrutiny on top of a human-built mathematical frontier. Failed paths create value when they narrow the search or improve the next decision; the public record does not show a general return curve for agent persistence.</p></div>

## Persistence becomes capital

A person who keeps failing pays in attention and lost alternatives, with reputation sometimes added to the bill. Machine attempts also consume scarce resources, including computing capacity and expert review, but they no longer require one person to carry every retry. I think this is one concrete meaning of productivity becoming capital: an organization can provision more execution, while judgment decides where that capacity belongs.

The value still depends on the work. A [2023 study](https://www.nber.org/papers/w31161) from the National Bureau of Economic Research, a U.S. economics research organization, examined 5,179 customer-support workers and found that an AI assistant increased issues resolved per hour by 14% on average. A [2025 randomized study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) by METR, an independent organization that evaluates AI capabilities, found that experienced open-source developers took 19% longer on its measured tasks when allowed to use early-2025 AI tools. The gap shows why tokens, agent-hours, and confidence are poor substitutes for a result measured in the task itself.

Consider a generic inventory-forecast campaign. A first two-week tranche could ask whether an agent system reduces forecast error on sales data the model has not seen, compared with the current method. The team might cap the search at 100 candidate approaches and 20 reviewer hours, grant read-only access to historical data, and forbid production changes. An independent data scientist would rerun the best result before the scheduled review. If replication fails, the campaign receives neither more tool permissions nor another tranche. If it clears the prewritten threshold, a second, reversible pilot can run beside the existing forecast without controlling orders.

The control burden should grow with consequence. The European Union's [2024 Artificial Intelligence Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng), the bloc's binding framework for AI, uses a risk-based approach intended to tailor rules to the intensity and scope of risk. A read-only research loop should not face the same internal process as a system that can change prices, influence hiring, or alter working conditions. As authority expands, the warrant should trigger the relevant checks on supplier data rights, contracts, security, and employee consultation instead of making every low-risk search equally bureaucratic.

At a portfolio review, the useful comparison is not one campaign's token count against another's. Leaders need the cost of reviewer time, false positives, failed replications, verified improvement, and information gained, set beside the best alternative use of the same capacity. I think uncertain exploration may deserve patience when it keeps opening credible paths. If a tranche stops changing the available choices, the owner should end it unless a distinct hypothesis and budget are approved.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>Purchasable persistence turns repeated search into a capital-allocation choice whose return varies by task. A proportionate campaign starts with limited access, a measured baseline, independent replication, and a reversible path, then competes for its next tranche against better uses of the same capacity.</p></div>

## Write the stopping rule before the loop

My take is that any persistent-agent campaign asking for budget or wider authority should carry a one-page **Persistence Warrant**. It is a decision record written before results arrive, so enthusiasm cannot quietly move the evidence threshold:

- **Question and owner:** Name the decision the search will inform, the domain owner accountable for its quality, and the executive who can end the work.
- **Hypothesis and disconfirmation:** State the claim, the baseline, what would count as failure, and what would make a later path genuinely new.
- **Evidence and independent evaluator:** Define the acceptance test and assign someone who uses an independent way to find errors, such as held-out data, a separate test, a proof assistant, or a domain expert who did not produce the answer.
- **Budget and authority:** Cap attempts or tokens, elapsed time, reviewer hours, data access, tool permissions, and consequential actions. Record which decisions remain reversible.
- **Evidence record:** Keep a hypothesis ID, the prior result, tool and data boundaries, evaluator, replication status, spend, and stop reason. This turns rejected work into an auditable asset.
- **Continuation rule:** Prewrite the conditions for continuing, pivoting to a distinct hypothesis, and stopping for futility when another batch is unlikely to clear the evidence gate.

There is a deeper reason to decide these conditions in advance. A [2022 paper](https://doi.org/10.1287/opre.2021.2135) in *Operations Research*, an academic journal focused on decision methods, examines continuously monitored A/B tests, experiments that compare two versions. It explains how ordinary statistical conclusions can become unreliable when people keep watching and choose when to stop after seeing the data. The mathematics is not a direct model for agent research, but the leadership lesson travels: changing the threshold after a promising trace appears makes weak evidence look stronger.

At the scheduled review, the owner has three honest choices. Continue when the agreed threshold is met and independently replicated; pivot when a failed approach produces a distinct, testable hypothesis with a new budget; or stop when the campaign repeats its failure without reducing uncertainty. Wider permissions require a fresh review because they change the risk, not merely the size, of the search. No new tranche should be approved without a falsifiable hypothesis, independent evidence, and a reversible path.

In Doug Liman's 2014 science-fiction film *[Edge of Tomorrow](https://www.warnerbros.com/movies/edge-tomorrow)*, a soldier relives the same fatal battle and uses each reset to change what he does next. Tireless AI can provide far more resets, but a loop learns only when evidence changes the next move and an accountable person can end it. Leadership is the choice to fund the next reset, preserve the record of the last one, or decide that another attempt is no longer learning.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A Persistence Warrant ties every agent campaign to a named owner, falsifiable claim, independent evaluator, limited authority, inspectable record, and prewritten continuation and futility rules. When machines can repeat the day indefinitely, leadership means owning the decision to fund the next reset or end the loop.</p></div>
