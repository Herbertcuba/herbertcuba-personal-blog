---
title: "Tireless intelligence needs a stopping rule"
description: "Claude’s 650 unsuccessful ideas show that persistence can now be funded like an input. Leadership must decide which questions earn it, what counts as evidence, and when the search ends."
date: 2026-08-18
tldr: "Anthropic’s Riemann-zeta experiment did more than produce a new mathematical lower bound: it showed that an organization can buy a large, instrumented search through failure. That does not make thought free or prove that more retries create value. It makes question choice, independent verification, full campaign cost, and stopping authority central leadership decisions."
permalink: /drafts/b90f4cfe/
layout: post.njk
featuredImage: "/images/posts/tireless-intelligence-needs-a-stopping-rule.webp"
---

Anthropic, the AI company that develops Claude, says an unreleased research version of its system generated 650 ideas that did not work before the broader effort produced a new result in number theory, the study of whole numbers and primes. Those failures are the consequential part of the story. They show that persistence can now be provisioned as a metered research input rather than left entirely to human endurance.

For people, hundreds of dead ends can carry fatigue, embarrassment, and career consequences. Anthropic did not measure any of those effects, so I treat that comparison as an economic interpretation, not a finding about psychology. The narrower claim is strong enough: software can be authorized to keep searching, while an organization pays for model output, tools, review, and the opportunities it postpones.

That shifts leadership earlier in the process. When another attempt is easy to fund, leaders have to decide which questions deserve sustained pursuit, define what evidence would change a decision, and give someone the authority to end the work.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>Claude’s failed ideas matter because they make sustained search an allocatable resource. The human responsibility is to set its purpose, proof standard, and limit before the retries begin.</p>
</div>

## Start with the boundary of the proof

The Riemann zeta function is a mathematical function whose zeros, the inputs where its value becomes zero, reveal deep patterns in the distribution of prime numbers. Its “nontrivial” zeros are the difficult family at the center of the problem. In 1859, German mathematician Bernhard Riemann proposed that all of them lie on the critical line, where the real part of the input equals one half. That claim became the Riemann hypothesis, and it remains unproved.

The [current arXiv record](https://arxiv.org/abs/2608.13637), held in an open repository for research papers released before conventional journal review, makes a narrower advance. A lower bound is a proven minimum, and this paper raises the minimum share of nontrivial zeros known to lie on the critical line from 5/12 to at least 2/3. That is an increase of 25 percentage points. An optimized version strengthens the minimum slightly further, to 0.6725, without assuming the Riemann hypothesis. Neither statement says that every nontrivial zero is on the line.

The popular “37-year record” description also needs care. Number theorist J. B. Conrey proved in 1989 that more than two fifths of the zeros lie on the critical line, but later human work improved that result; the 5/12 bound had stood since 2020. The new proof also uses a [2024 peer-reviewed result](https://arxiv.org/abs/2306.04799) by number theorists Baluyot, Goldston, Suriajaya, and Turnage-Butterbaugh, then adds a new conceptual reading of part of their work. Machine persistence operated inside a research frontier built by mathematicians.

The evidence is meaningful but still layered. Anthropic says its own mathematicians studied the paper and that two outside specialists examined it on short notice. It also released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean): Lean 4 is a proof-assistant language that checks a precisely encoded theorem and each logical step under declared assumptions. Formal checking improves auditability while still falling short of independent replication or completed journal review. The preprint was revised after its initial release, which is why the versioned arXiv record above matters; serious review should also record the exact saved version of any formal proof artifact it checked.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The result raises a proven minimum from 5/12 to at least 2/3, with an optimized value of 0.6725; it does not prove the Riemann hypothesis. Its credibility comes from prior human mathematics, a new conceptual step, formal checking, and expert scrutiny whose limits should remain visible.</p>
</div>

## Persistence became an input you can allocate

According to [Anthropic’s August 2026 account](https://www.anthropic.com/research/riemann-zeta), the work used two sessions in Claude Code, its tool-using coding environment, and produced 31 million output tokens across them. An output token is a unit of model-generated text used to meter inference. During the second session, Anthropic says roughly 60 subagents worked for about a day and a half. A subagent here means a delegated AI run using tools and handling part of the task rather than an autonomous employee.

The reported workflow included 2,400 commands issued to computing tools, hundreds of small programs written in Python, numerical tests, internal criticism, searches for cases that would break candidate claims, and checks against 54 research papers. That is closer to an instrumented research program than to a brilliant answer appearing in a chat window.

The public record does not include a complete invoice, a standard definition of one “idea,” or a controlled comparison showing which ingredient caused the result. The exact model remains unreleased. Anthropic’s announcement includes selected annotated transcripts, or excerpts with explanatory notes, but these cannot reconstruct the full run or its configuration. We therefore cannot identify the 31 million tokens, 60 subagents, or any particular retry as the decisive variable.

What the case does establish is operational possibility. An organization can allocate computing capacity and tools to a bounded search, preserve failed paths, and keep generating candidates at a scale that would be punishing for a small human group. Productive capacity becomes an asset that can be provisioned and directed. Yet candidate production can scale faster than expert attention, so the scarce resources become justified continuation and credible verification.

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>The case demonstrates a large, tool-using search while leaving causation unresolved. As retries become easier to buy, reviewer capacity and the authority to continue become the binding constraints.</p>
</div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Director Doug Liman’s science-fiction film follows a soldier who relives the same deadly day while retaining what he learned in earlier loops. Repetition becomes useful because feedback survives each reset and the character has a stable exit condition.</p>
</div>

The mapping to persistent AI search is limited but precise: cheap retries create value only when failed paths change the next attempt and someone outside the loop defines what would count as escape. Without those conditions, another cycle is merely more expenditure.

## Give every campaign a mandate to expire

Mathematics is unusually friendly to persistent search because a theorem can be stated exactly and a formal proof can be checked step by step. Product strategy, hiring, and organizational design rarely offer such clean acceptance tests. The zeta case therefore does not prove that persistent agents improve enterprise outcomes; it shows why leaders must construct stronger evidence boundaries when the answer is ambiguous.

Evidence from other AI workflows reinforces that caution. A [2023 National Bureau of Economic Research study](https://www.nber.org/papers/w31161) of 5,179 customer-support agents found that access to an AI assistant raised issues resolved per hour by 14% on average. In a different setting, [METR, an organization that evaluates AI systems](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), reported in 2025 that 16 experienced open-source developers took 19% longer on real coding tasks when allowed to use early-2025 AI tools. The second result is now a historical snapshot, and the studies should not be combined into one score. Together they show why activity and confidence cannot stand in for measured value in a specific workflow.

Before funding a long-running agent effort, write a persistence mandate with four parts:

- **Decision and owner:** Name the material decision the work may change, the accountable owner, the strongest existing alternative, and the risk level of acting on a wrong answer.
- **Evidence and review:** Record the baseline, acceptance threshold, result that would disprove the hunch, independent verifier, and exact versions of the data, policy, model, and artifacts under review.
- **Resource envelope:** Cap model and tool spend, elapsed time, permissions, and human review hours. Count replication, delay, and rejected outputs in the full campaign cost.
- **Expiry and renewal:** Set an automatic end date and a named stop authority. Renewal should require new evidence and come from someone who does not benefit from keeping the delivery team busy.

Consider a clearly hypothetical Nordic manufacturer investigating a rise in defects on one production line. The operations director owns the decision, while the agents may recommend tests but cannot change machinery. The existing engineer-led analysis is the comparator. Acceptance requires an independent process engineer to reproduce the finding on a production period the agents did not analyze and to meet a predeclared defect-reduction threshold without creating a new safety issue.

For illustration, the mandate could allow 14 days, a €25,000 full-cost ceiling, and 40 reviewer hours. Production data must remain in the approved environment, and any employee-level data triggers privacy review and worker representation under applicable local rules. A safety manager can pause the run. A portfolio owner may renew it only if a new explanation survives an independent test; two batches without such progress close the campaign. Those figures are illustrative rather than benchmarks. Their purpose is to make the trade-offs explicit before the team starts arguing for exceptions.

The pilot should track wrong claims accepted as valid, reviewer queue time, total cost per accepted result, renewals granted without the required evidence, and stopped campaigns later shown to have had a viable path. The stopping rule is itself a hypothesis, so it should be reviewed and improved. It should never be silently waived by the system whose continued operation depends on it.

I think this is where leadership becomes more consequential. A tireless system can absorb another attempt. People remain accountable for deciding whether the question still deserves money, attention, and exposure to risk. The impressive part of 650 failures is the validated result that eventually followed; in many organizations, the wiser outcome will be a well-evidenced decision to stop.

<figure class="fig-band article-diagram" data-diagram-id="persistence-mandate">
<figcaption class="fig-cap">Fig. — The four parts of a persistence mandate.</figcaption>
<svg width="100%" height="auto" viewBox="0 0 390 430" role="img" aria-labelledby="ad-persistence-mandate-title ad-persistence-mandate-desc" xmlns="http://www.w3.org/2000/svg">
<title id="ad-persistence-mandate-title">Persistence mandate with four parts</title>
<desc id="ad-persistence-mandate-desc">A stacked diagram of the four parts of a persistence mandate.</desc>
<g class="article-diagram__decoration"><rect x="0" y="0" width="390" height="430" fill="#000000"></rect><line x1="22" y1="110" x2="368" y2="110" stroke="#00A03A" stroke-width="2"></line></g>
<g class="article-diagram__claim" data-claim-id="claim-mandate-four-parts"><text x="22" y="44" fill="#DCE7DE" font-size="26" font-weight="700">Persistence mandate</text><text x="22" y="70" fill="#9EB8A4" font-size="16">Four parts, set before funding</text><text x="22" y="92" fill="#9EB8A4" font-size="16">a long-running agent effort</text></g>
<g class="article-diagram__claim" data-claim-id="claim-decision-owner"><rect x="22" y="130" width="346" height="54" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="38" y="164" fill="#00E653" font-size="20" font-weight="700">Decision and owner</text></g>
<g class="article-diagram__claim" data-claim-id="claim-evidence-review"><rect x="22" y="202" width="346" height="54" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="38" y="236" fill="#00E653" font-size="20" font-weight="700">Evidence and review</text></g>
<g class="article-diagram__claim" data-claim-id="claim-resource-envelope"><rect x="22" y="274" width="346" height="54" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="38" y="308" fill="#00E653" font-size="20" font-weight="700">Resource envelope</text></g>
<g class="article-diagram__claim" data-claim-id="claim-expiry-renewal"><rect x="22" y="346" width="346" height="54" fill="#0A1A0F" stroke="#00E653" stroke-width="2"></rect><text x="38" y="380" fill="#00E653" font-size="20" font-weight="700">Expiry and renewal</text></g>
</svg>
</figure>

<div class="chapter-tldr">
<span class="chapter-tldr__label">In short</span>
<p>A persistent AI campaign should begin with a decision owner, fixed acceptance test, independent reviewer, full-cost envelope, and expiry that the delivery system cannot waive. Measure accepted results and review burden rather than celebrating activity.</p>
</div>
