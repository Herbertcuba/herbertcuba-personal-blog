---
title: "When persistent search becomes a budget line"
excerpt: "Claude's 650 unsuccessful ideas point to a new capital-allocation problem: tireless search can be funded, so leaders must decide which questions deserve repetition and who can stop the work."
tldr: "Anthropic's reported Riemann-zeta result shows that organizations can provision large, instrumented searches, but attempt volume is not value. Leaders should fund persistent AI work only when the outcome is falsifiable, validation is independent, full cost beats the next-best use of capital, and a named owner can technically stop or renew the campaign."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-18
---

Persistent search is becoming something a leader can provision. That does not make thought cheap. It turns repeated attempts into a capital-allocation decision: which question deserves another run, what evidence must emerge, and who can end the campaign?

In August 2026, [Anthropic, the AI company behind Claude](https://www.anthropic.com/research/riemann-zeta), reported that an unreleased research version of its system found a new mathematical bound across two Claude Code sessions. Claude Code is Anthropic's tool-using environment for working with files, scripts, and software. The sessions produced 31 million output tokens, units of generated text used to meter model output. Anthropic says 650 initial ideas failed; a later run lasting about a day and a half coordinated roughly 60 subagents, meaning delegated AI processes working on parts of the problem rather than 60 human employees.

Those figures do not show that the volume of failure caused the result, and Anthropic has published no complete cash cost. The run also did not measure fatigue, embarrassment, or career risk. The defensible economic shift is narrower: some search capacity constrained by those human pressures can now be purchased as model usage, tool time, and verification. I think that moves leadership upstream, toward choosing the search and defining its limits.

**Evidence status:** Anthropic reported the run and released a proof encoding for the Lean 4 proof-checking system. Outside number theorists examined the work on short notice, but the public record does not yet establish independent reproduction or conventional journal peer review.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The important change is not 650 failures by themselves. It is the ability to fund repeated, tool-using search while separating its measurable effort from the still-unsettled value of its result.</p>
</div>

## What the run actually purchased

Claude did not prove the Riemann hypothesis. The Riemann zeta function is a mathematical function whose nontrivial zeros, special inputs where it equals zero, reveal patterns connected to the distribution of prime numbers. In 1859, German mathematician Bernhard Riemann proposed that every such zero lies on the critical line, where the input's real part is one-half. That claim remains unproved.

The [August 2026 manuscript](https://arxiv.org/abs/2608.13637), posted as version 1 on arXiv, an open repository for research papers, on 13 August, makes a narrower advance. It raises the unconditional lower bound, the minimum share that can be proved without assuming the hypothesis, from 5/12 to at least 2/3. That is a 25-percentage-point increase, but it says neither that all zeros lie on the line nor that the remaining third do not.

The popular 37-year framing begins with number theorist J. B. Conrey's [1989 paper](https://doi.org/10.1515/crll.1989.399.1), which proved that more than two fifths of the zeros lie on the critical line. The field kept moving, and the record reached 5/12 in 2020. The new manuscript also builds on a [2024 peer-reviewed result](https://arxiv.org/abs/2306.04799) by four number theorists, Siegfred Baluyot, Daniel Goldston, Ade Irma Suriajaya, and Caroline Turnage-Butterbaugh. Their work concerns pair correlation, the statistical spacing between zeros. The new proof recasts constraints from that work in linear-algebraic form so they can be analyzed together to reach the stronger bound.

Anthropic says the search used 2,400 shell commands, hundreds of Python scripts, numerical tests, proof review, counterexample searches, and a scan of 54 arXiv papers for possible prior work. A [public Lean 4 artifact](https://github.com/anthropics/zeta-23-lean) adds formal verification: a theorem-proving language checks a precisely encoded statement and its logical dependencies. That is a meaningful check, although it cannot by itself certify novelty, significance, or acceptance by the mathematical community.

The 31 million tokens therefore bought more than retries. They funded an instrumented search around decades of human mathematics, followed by several layers of checking. Persistence helped create the conditions for a conceptual move; the evidence does not let us divide the credit cleanly between search scale, model capability, prior research, and human orchestration.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The result is a specific lower-bound advance built on human research and checked in several ways. Its lesson is that search capacity can be provisioned, not that brute repetition has replaced insight or scholarly scrutiny.</p>
</div>

## A question has to earn repetition

Mathematics gives persistent search a rare advantage: the claim can be tested against exact statements, numerical checks, and a formal proof. Many enterprise questions have moving targets, disputed measures, or consequences that only appear after deployment. In those settings, another thousand attempts can produce more persuasive material without producing better evidence.

Measured AI performance already varies sharply by work. A [2023 National Bureau of Economic Research study](https://www.nber.org/papers/w31161), based on 5,179 customer-support workers, found a 14% average increase in issues resolved per hour with an AI assistant. A [2025 randomized study by the independent research organization METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that experienced open-source developers took 19% longer on its selected tasks when early-2025 AI tools were available. Neither study concerns mathematical agents. Together they show why output volume cannot stand in for economic value.

Before allocating persistent search, ask the question the system cannot settle for you: **Which question is worth repeating?** A fund-or-decline decision should pass four tests:

1. **Verifiable outcome.** Is there a baseline, a falsifiable success condition, and a result that would count as disconfirmation?
2. **Independent validation.** Can a reviewer with a different failure mode check the result, while failed routes and source records remain inspectable?
3. **Positive expected value.** After model and tool compute, every token class, licences, security work, human review, replication, delay, and likely failure are counted, does the campaign's expected net value beat the next-best project?
4. **Bounded authority.** Are data and tool permissions limited, and can closure be enforced and reversed only through explicit approval?

Anthropic's output-token count is useful evidence of effort, but it is not this ledger. It omits a public price, input and cache-token volumes, complete tool costs, and the full human contribution. The leadership metric is cost per independently validated outcome, including unsuccessful campaigns, rather than cost per attempt.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Persistent search transfers beyond mathematics only when results are falsifiable and independently checkable, failed paths remain auditable, full expected cost beats the portfolio alternative, and authority can be withdrawn.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>The 2014 film follows a soldier forced to repeat the same battle after each death. Repetition becomes useful because information survives and changes the next attempt. The mapping is narrow: an AI campaign earns another run only when failed routes leave usable evidence and leaders have defined the condition that ends the loop. Compute supplies retries; it does not choose the objective.</p>
</div>

## Put stop authority in the system

A Tireless Intelligence Charter can make that decision concrete on one page. It should record the question and current baseline; acceptance, disconfirmation, and novelty tests; the exact model, tool, data, and evaluation versions; a maximum cash envelope in the portfolio's working currency, such as SEK or NOK; included licences, security work, and reviewer hours; an expiry date; the next-best unfunded project; and the people allowed to close or renew the work. The record also has to state what triggers an automatic retry, so hidden retry behavior does not quietly enlarge the budget.

**Every campaign needs a named decision owner.** The business process owner should be accountable for total cost and operational consequences. Renewal after the original limit should sit with a portfolio owner outside the delivery team, using a predeclared threshold for new evidence or improved expected value. A team should not be able to keep its own campaign alive because it has already spent heavily on it.

Stopping must also be technical. When the cash ceiling, expiry, or evidence limit is reached, the quota or access-control service that receives model and tool requests should reject new jobs and revoke the campaign's credentials. A written policy without that boundary leaves continuation to enthusiasm. Restarting then requires a new authorization against the frozen evidence record, not an informal extension.

Some searches carry legitimacy requirements beyond technical review. If a campaign uses personal data or affects employee monitoring, work allocation, or role design, launch and renewal should include the responsible privacy and security functions and the employee-representation process required by applicable Nordic law and collective agreements. A search budget is not private permission to reshape people's work.

Finally, closure should preserve failed hypotheses, tests, source trails, and reasons for rejection. That archive makes the decision auditable and prevents a later system from paying to rediscover the same dead ends. When repetition can be delegated, human judgment concentrates in the boundaries around it. Attempt 651 deserves funding only when someone can defend its expected value, and that person must also accept responsibility for making the next attempt impossible when the case no longer holds.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Make persistent search a bounded investment: freeze its evidence baseline, price the full campaign, separate delivery from renewal, enforce closure at the model-and-tool access layer, include affected workers in relevant decisions, and retain failures as an auditable asset.</p>
</div>
