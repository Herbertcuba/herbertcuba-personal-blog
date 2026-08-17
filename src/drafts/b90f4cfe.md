---
title: "Claude made persistence purchasable. Leadership must decide when to stop."
description: "Anthropic's zeta result shows that large-scale persistence can be funded like any other search capacity, which makes evidence and stopping authority the real leadership problem."
tldr: "Anthropic reports that an unreleased Claude research system reached a new mathematical lower bound after 650 unsuccessful ideas, roughly 60 subagents, and 31 million output tokens. The strategic lesson is that metered persistence can generate candidates faster than organizations can verify them, so leaders need to choose the question, reserve an independent evidence budget, and make stopping rules enforceable before the search starts."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

A metered AI system can keep a weak question alive just as easily as a valuable one. Every dead end can lead to another search path, another delegated process, and another polished request for permission to continue. The system does not become tired or embarrassed, but the organization still pays for compute, tools, review, and the opportunities it leaves unfunded.

That is why Anthropic's new mathematics result matters beyond mathematics. On August 10, 2026, the AI company [reported](https://www.anthropic.com/research/riemann-zeta) that an unreleased research version of Claude had tried 650 unsuccessful ideas before coordinating roughly 60 subagents, meaning delegated AI processes working on parts of the problem with tools. The work used 31 million output tokens, the metered units of text produced by the model.

I think the important change is economic. Once persistence can be provisioned and redirected, it starts to behave like capital rather than personal endurance. Leadership then moves toward a harder question: who may authorize the next attempt when generating a reason to continue is becoming easier than judging whether that reason is sound?

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude's run makes large-scale persistence an allocatable input. That increases the value of independent judgment because the organization can now produce search paths, and arguments for extending them, at machine speed.</p>
</div>

## The theorem came with a strong acceptance test

The Riemann zeta function is a mathematical function that helps describe the distribution of prime numbers. In 1859, the German mathematician Bernhard Riemann proposed that all its nontrivial zeros, special points where the function equals zero, lie on a line with real coordinate one-half. This is the “critical line,” and the still-unproved claim is the Riemann hypothesis.

Claude did not prove that hypothesis. Anthropic's [revised preprint, dated August 11](https://www-cdn.anthropic.com/95c246936988e43127bc6b2ceb7077c1dad2d68e.pdf), raised an unconditional lower bound on the share of nontrivial zeros that are simple, meaning not repeated, and lie on the critical line. A lower bound is a proven minimum. The previous record was 5/12; the new basic result is at least 2/3, with a further optimization reaching 0.6725.

The popular “37-year” framing starts with number theorist J. B. Conrey's [1989 peer-reviewed result](https://doi.org/10.1515/crll.1989.399.1), but it should not be read as 37 years without progress. Other mathematicians improved the work in between, and the 5/12 record had stood since 2020. The new paper also relies on decades of prior mathematics and adds a linear-algebraic reading to that foundation. Anthropic says the wider process included numerical tests, counterexample searches, scripts, literature checks, internal mathematicians, and outside specialists who examined the work on short notice.

This case could support an unusually large search because its output faced a demanding acceptance process. Anthropic released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean), which encodes the claims in a theorem-proving language so a computer can check each formal step under declared rules. That provides more evidence than persuasive prose, but it does not decide the work's importance or replace normal scholarly scrutiny. The current status is a company-released preprint with a public formal artifact and short-notice specialist examination, not conventional journal peer review or independent external replication. Anthropic updated its page on August 13 to point to the August 11 revision, which changed attribution and some scope wording while retaining the central two-thirds result.

The operational numbers need the same discipline. Anthropic has not published a counting rule for what qualified as one of the 650 ideas, the unreleased model's full configuration, a complete run trace, or a cost ledger. There is also no controlled comparison showing which ingredient caused the result. The case demonstrates that a large, instrumented search can surface a checkable discovery; it does not establish an average return on retries.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The mathematical advance is specific and assessable, but it cannot be reduced to stamina. Prior research, a new conceptual move, numerical work, formal checking, and human scrutiny all sit between 31 million output tokens and a credible result.</p>
</div>

## Permission becomes the scarce resource

Humans can become tired, ashamed of repeated failure, or wary of attaching a career to a dead end. Claude does not bear those costs. The Anthropic case did not measure this psychological difference, so “purchasing persistence” is an interpretation of the new capacity, not a causal finding about why the proof emerged.

Even with that limit, the organizational shift is real. Search volume can grow with token allowances and parallel agent processes, while qualified review remains constrained by domain expertise, attention, and accountability. The agents can also produce renewal arguments alongside candidate answers. A campaign may therefore become easier to defend at exactly the moment when an independent reviewer is least able to inspect its growing evidence trail.

Stage gates, separation of duties, and automatic circuit breakers are established management and engineering practices. The U.S. National Institute of Standards and Technology, a federal measurement agency, made similar control logic explicit in its voluntary [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), released in 2023. The AI-specific pressure is the imbalance: candidate claims and reasons to fund another round can scale faster than independent verification capacity.

Output is a poor substitute for value. A [2023 National Bureau of Economic Research working paper](https://www.nber.org/papers/w31161) covering 5,179 customer-support agents found that an AI assistant raised issues resolved per hour by 14 percent on average. In a different setting, a [2025 randomized study by the independent research group METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that 16 experienced open-source developers took 19 percent longer on 246 tasks when allowed to use early-2025 AI tools. That second result is now a historical snapshot, not a forecast for current tools. Together, the studies show why each workflow needs its own measure; they cannot be averaged into a universal return on AI.

Portfolio accounting should therefore charge the whole campaign to each independently accepted result. That includes rejected paths, compute and tool use, reviewer time, replication, and the work required to put a result into practice. A token count records activity, not a return.

Formal mathematics is the favorable case because a theorem can be stated precisely and checked. Strategy, product choices, and organizational change often lack that clean acceptance test. If the same system searches, writes the evidence, and argues for renewal, tirelessness can manufacture confidence without producing a better decision.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The binding constraint moves from generating possibilities to accepting them responsibly. AI raises a distinctive governance problem because it can scale both the candidate work and the case for keeping that work alive.</p>
</div>

## Write the right to continue

A Tireless Intelligence Charter can be a one-page authorization that makes every extension a fresh decision. It should sit inside the existing portfolio, risk, security, procurement, and employee-representation forums that already carry authority.

Here is a deliberately illustrative charter for a 5,000-person company considering an agent-designed accounts-payable process:

- **Decision at stake:** decide whether to move the proposed process from a sandbox into a limited live pilot.
- **Accountability:** the chief financial officer sponsors the decision; an automation lead runs the search; internal audit owns acceptance; the portfolio forum alone may renew it. Security, privacy, procurement, and an employee representative approve any change to data, supplier, tool, or work-design boundaries.
- **Evidence contract v1.0:** on a fixed test set hidden from the delivery team, reduce manual invoice exceptions by at least 20 percent, create no unsupported payment approvals, and reproduce the result in an independent replay. A changed test requires a new version and approval before more search begins.
- **Search cap:** 14 calendar days, 10 million output tokens, no more than 12 simultaneous agent processes, and 40 engineering hours. The agents may read a sandbox and run scripts, but they cannot write to the payment system.
- **Evidence reserve:** book 60 internal-audit hours and a security review before launch. The verifier has three working days after each submitted result; if that capacity is unavailable, the campaign pauses rather than accumulating an unchecked queue.
- **Operating boundary:** use only invoice data classified as internal, with European Union residency and the contracted supplier. No employee-performance data, public posting, supplier substitution, or new external tool access is allowed.
- **Renewal test:** review on day seven and at the cap. Another round must beat the expected value of the highest-ranked unfunded finance-control initiative, here a duplicate-payment detection upgrade, using the same portfolio criteria.
- **Closure:** internal audit or the portfolio chair may pause the work immediately. Closing it revokes credentials, removes temporary data according to retention policy, confirms that no live-system changes remain, and archives hypotheses, tests, rejected routes, costs, and the final evidence decision.

The state contract should be just as explicit. **ACTIVE** permits work only inside the current caps and permissions. **ACTIVE → PAUSED** happens automatically at a cap, a missed review deadline, a failed acceptance test, or a boundary breach. **PAUSED → ACTIVE** requires a signed portfolio decision against Evidence Contract v1.0 and the named alternative investment. **PAUSED → CLOSED** ends access and triggers the closure record. A delivery-team attempt to renew its own campaign is an invalid transition.

At launch, the sponsor commits the question and the evidence capacity, not merely the search budget. The delivery lead then produces candidates, the independent verifier accepts or rejects them, and the portfolio forum decides whether new evidence justifies another round. This handoff protects independent judgment before the volume of generated reasoning raises the organizational cost of stopping.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Fund persistent AI through a versioned charter with a separate search cap and protected evidence reserve. Named owners, fixed boundaries, an external renewal decision, and enforceable operating states turn “keep trying” into a portfolio choice rather than a default.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman's science-fiction film follows a soldier forced to repeat the same deadly day. Repetition becomes useful only because he retains information, tests a changed action, and learns which routes fail.</p>
</div>

The mapping is precise: the agent system supplies repetition, the evidence contract determines whether information survived the attempt, and the portfolio forum controls access to another round. Human responsibility sits in that authorization. Leaders must decide whether the next attempt can still change what the organization knows, and close the campaign when it cannot.