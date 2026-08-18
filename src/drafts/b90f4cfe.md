---
title: "Failure is becoming a budget line"
excerpt: "Anthropic's mathematics result points to a new leadership problem: tireless search can now be funded, so its purpose, evidence, and ending have to be designed before the campaign starts."
tldr: "Anthropic reports that an unreleased Claude research model reached a new bound after 650 unsuccessful ideas, two agentic work sessions, and 31 million output tokens. The result does not show that persistence alone creates discovery, but it does show that repeated search can become a funded input. Leaders now need to choose questions worth repeating, pay for independent validation, and give someone outside the delivery loop the authority to stop."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

In August 2026, [Anthropic](https://www.anthropic.com/research/riemann-zeta), the AI company behind Claude, reported a research run with an unusual shape. An unreleased Claude model worked across two sessions in Claude Code, Anthropic's agentic coding environment, and produced 31 million output tokens. An output token is a unit of model-generated text used to meter the work. Before finding a successful route, Claude had generated and tested 650 ideas that did not work.

The second session ran for about a day and a half and coordinated roughly 60 subagents. These were delegated AI processes working with tools on parts of the problem, not 60 digital employees. The scale matters because an organization could keep a difficult search alive without asking one mathematician to absorb every dead end.

For people, repeated failure brings fatigue and opportunity cost. It may also bring embarrassment or professional risk, although Anthropic did not measure those effects. Software does not feel them. The organization pays instead through compute, tools, elapsed time, and scarce human review.

This is the economic shift: persistence can be provisioned. It does not make good thinking free, and the public evidence does not show that the 650 failures caused the result. It makes leadership responsible for deciding which questions deserve a large search, what evidence would justify another round, and who can end it.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude's run makes repeated search an allocatable input. The resulting leadership problem is to govern the purpose, proof, and duration of that search rather than celebrate its volume.</p>
</div>

## The result was bounded, but real

The mathematics needs a careful description. The Riemann zeta function is a mathematical function whose special zero values carry information about how prime numbers are distributed. In 1859, German mathematician Bernhard Riemann proposed what became the Riemann hypothesis: all the relevant, or “nontrivial,” zeros should lie on a particular location called the critical line.

Claude did not prove that hypothesis. The released manuscript raised the unconditional lower bound, meaning the minimum share that can be proved without assuming the hypothesis, from 5/12 to at least 2/3. That is a 25-percentage-point increase, while still leaving the claim about all zeros unproved.

Nor did human mathematics sit still for 37 years. Number theorist J. B. Conrey proved in a [1989 peer-reviewed paper](https://doi.org/10.1515/crll.1989.399.1) that more than two fifths of the zeros lie on the critical line, and later work raised the record to 5/12 by 2020. Claude's manuscript also credits a [2024 result](https://arxiv.org/abs/2306.04799) by four number theorists, Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh. It says the new step came from reading part of that earlier result through a different mathematical method.

The verification trail is substantial but unfinished. Anthropic reports numerical tests, searches for counterexamples and prior work, review by its own mathematicians, and short-notice examination by two outside specialists. A public [Lean 4 companion artifact](https://github.com/anthropics/zeta-23-lean) encodes the result for formal verification, which means a proof-assistant program checks a precisely stated theorem and its declared assumptions.

That is stronger than a persuasive model answer, but it is not the same as journal peer review or broad acceptance by the field. The public record also lacks a controlled comparison, a complete cost ledger, and enough detail to reproduce the whole search, including the model build, prompts, retry policy, and full tool use. Anthropic updated its announcement on August 13 to point to a revised August 11 manuscript, another reason to treat this as active research rather than settled history.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The achievement is a specific improvement built on decades of mathematics and several layers of checking. Its status and missing controls limit what the case can prove about AI persistence in general.</p>
</div>

## Judgment becomes the scarce input

Once retries can be bought, the bottleneck moves. More compute can produce more candidate proofs, designs, or plans, but it cannot make expert attention abundant. It also cannot decide whether a question matters enough to displace the next project in the portfolio.

Which question is worth repeating?

That question should come before a token budget. Mathematics is unusually friendly to persistent search because a theorem can be stated precisely, tested against known cases, checked for counterexamples, and encoded for a proof assistant. A strategy campaign has no equivalent critical line. If leaders ask an agent swarm to “find evidence for this growth idea,” the system can generate increasingly polished support without ever meeting a genuine test of truth.

The remedy is an evidence contract: a written agreement made before the search that defines success, disconfirmation, novelty, and independent review. It should also name the baseline being improved. Otherwise the campaign can quietly change its question whenever the latest answer fails.

This changes the useful economic measure. Token volume records production, not value. A better portfolio measure is cost per validated outcome, including failed attempts, expert-review time, elapsed delay, replication work, and the opportunity cost of the best unfunded alternative. Persistent search earns renewal when that complete record improves, not when the system merely stays busy.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Cheap retries increase the value of question selection and independent validation. A campaign should be judged against a fixed evidence contract and the full cost of producing an accepted result.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>The film follows a soldier forced to repeat the same battle, using knowledge from each death to search for a way out. The mapping here is limited but useful: repetition creates progress only when failed paths leave usable evidence and the loop has an exit condition. For a tireless AI campaign, leadership has to define that exit before another attempt becomes the automatic answer.</p>
</div>

## Write the ending before the search begins

A usable stopping rule must change what the system is allowed to do. Consider an illustrative research charter with one batch of five million output tokens, 48 hours of elapsed time, and no more than 20 hours from an independent domain reviewer. Those numbers are not benchmarks. Their purpose is to make compute, time, and reviewer capacity visible before enthusiasm expands all three.

The charter records the question, current baseline, success test, disconfirmation test, data and tool permissions, expiry, and the next project competing for the same resources. The decision owner must be named before the run begins. That owner should sit outside the delivery team, because the people and agents producing the work have already invested in continuing it.

The control itself can be simple. An ACTIVE campaign has access to its approved tools and budget. At the checkpoint it moves automatically to PAUSED, where the delivery team may present evidence but cannot restart itself or rewrite the success test after seeing the results. The independent owner may authorize one more bounded batch or move the campaign to CLOSED, which revokes access and preserves the record.

Preservation matters. Failed hypotheses, counterexamples, review notes, and source records allow a later team to learn without paying again for the same dead ends. They also show whether the search explored distinct possibilities or merely repeated one failure in different words.

I think the human role becomes more demanding at this point. A model can spend another batch, but it cannot be accountable for why this question displaced another or why the standard of evidence changed. Tireless intelligence is a capability. Permission to continue belongs to someone who can also say no.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Precommit the budget, evidence tests, expiry, and independent renewal authority. When access pauses automatically and failed work remains inspectable, persistence becomes a governed investment rather than an endless campaign.</p>
</div>
