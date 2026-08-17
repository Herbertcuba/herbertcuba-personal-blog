---
title: "Tireless intelligence needs a stopping rule"
tldr: "Anthropic’s reported mathematical advance shows that repeated AI search can now be funded as an organizational resource, but activity is not value. As candidate production grows, leaders must reserve independent verification capacity, make every campaign earn its next round of funding, and give someone outside the delivery team the authority to stop it."
permalink: /drafts/b90f4cfe/
layout: post.njk
date: 2026-08-17
---

An organization can now purchase another attempt at a hard question at a scale few human teams could sustain. That may be more consequential than any single answer an AI system produces.

Anthropic’s recent mathematics project makes the shift concrete. The AI company says an unreleased research version of Claude tried 650 ideas that did not work. It then coordinated roughly 60 subagents, delegated AI processes assigned narrower tasks, during a larger search using 31 million output tokens, units of model-generated text used to meter activity. The result was a checkable new proof claim in number theory, the branch of mathematics concerned with whole numbers and their relationships.

The seductive reading is that machines have acquired superhuman stamina. I think the harder lesson is economic: persistence has become an allocatable resource, so the right to continue can no longer be left implicit. Leaders now have to decide which questions deserve repeated search, which evidence can release more budget, and who has the authority to end the campaign.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>AI can make another attempt available on demand. That turns persistence from a personal virtue into a portfolio decision, with verification and termination at its center.</p></div>

## What the 650 failures actually bought

On August 10, 2026, Anthropic reported that Claude had produced a new result connected to the Riemann hypothesis. On August 13, the company [updated its release page to point to a revised preprint dated August 11](https://www.anthropic.com/research/riemann-zeta). The revision changed attribution and some scope wording while retaining the central mathematical result. Its status still matters: this is a company-released research paper with public checking artifacts and short-notice specialist examination, not conventional journal peer review or independent replication.

The Riemann zeta function is a mathematical function that helps describe the distribution of prime numbers. In 1859, the German mathematician Bernhard Riemann proposed that all its nontrivial zeros, meaning inputs where the function equals zero outside a set of already understood cases, lie on the “critical line” with real coordinate one-half. That claim, now called the Riemann hypothesis, remains unproved.

Claude did not prove it. The revised work instead raises a lower bound, a proven minimum share of those zeros known to lie on the critical line, from 5/12 to at least 2/3. A further optimization reaches 0.6725. The popular “37-year record” description reaches back to number theorist J. B. Conrey’s [1989 peer-reviewed result](https://doi.org/10.1515/crll.1989.399.1), but human work continued after that; the previous 5/12 record had stood since 2020.

Nor did hundreds of retries replace mathematical ideas. The paper credits decades of prior research and adds a new linear-algebraic reading, which means it recasts existing mathematical relationships in a form that can be studied through structured operations on quantities. Anthropic says the broader run also used numerical tests, counterexample searches, literature checks, scripts, internal mathematicians, and outside specialists.

The reported token count measures activity, not return, and Anthropic has published no campaign invoice. The public material also lacks a complete attempt trace, a rule for what counted as one idea, the full run configuration, and a controlled comparison proving that the number of attempts caused the discovery. Those limits make this a valuable case, not a general return-on-investment study.

One validation layer is especially relevant. Anthropic released a [Lean 4 formalization](https://github.com/anthropics/zeta-23-lean), an encoding that lets a proof-assistant program check precisely stated theorems and their logical dependencies. That is stronger evidence than persuasive prose, but it cannot by itself settle novelty, importance, or whether every informal claim has been represented appropriately. The claim is substantive enough to examine and bounded enough to resist mythology.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>The project produced a specific, checkable lower-bound claim through scaled search, prior mathematics, a conceptual reformulation, and several validation layers. The public record does not show that persistence alone caused the result or what the campaign cost.</p></div>

## The scarce resource moves to acceptance

For a human researcher, a failed path consumes attention and may also carry fatigue, embarrassment, or professional opportunity cost. The Claude case did not measure those effects. The narrower operational point is that a compute process can begin another search path as soon as budget and permission exist; no recovery period is built into the loop.

That makes persistence a form of capital in the practical sense: leaders can allocate it among competing questions. It does not make thinking free. Every additional search path consumes compute, tool access, coordination, and eventually the time of someone qualified to decide whether the output is true and useful.

This is where the limiting factor changes. An agent system can scale both candidate answers and polished arguments for why it deserves one more run. Independent reviewers cannot necessarily scale at the same rate. When the queue of plausible claims grows faster than the capacity to test them, verification becomes scarce and continuation becomes easier to justify than closure.

Evidence from ordinary work already warns against treating visible AI activity as economic return. A [2023 working paper from the U.S. National Bureau of Economic Research](https://www.nber.org/papers/w31161), an economics research organization, studied a rollout to 5,179 customer-support agents and found 14% more issues resolved per hour on average, with larger gains among less experienced workers. In a different setting, a [2025 randomized study by the independent research group METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) found that experienced open-source developers took 19% longer with the AI tools tested; METR has since called that estimate out of date for newer systems. The studies should not be averaged into one verdict. They show that value depends on the task, the workflow, and the measure.

For persistent agents, the useful economic unit is therefore the full cost per independently accepted outcome. It includes failed search, reviewer time, replication, delivery work, and the opportunity cost of the strongest project that went unfunded. Token volume tells us how much motion occurred. It cannot tell us whether another round of funding is warranted.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>As AI search expands, independent acceptance can become scarcer than candidate production. Leaders should measure the full cost of validated outcomes and compare every renewal with the next-best use of money and review capacity.</p></div>

## Meanwhile in sci-fi

<div class="scifi">
<span class="scifi__label">Meanwhile in sci-fi</span>
<p class="scifi__film">Edge of Tomorrow (2014)</p>
<p>Doug Liman’s science-fiction film follows a soldier forced to repeat the same disastrous battle. Repetition becomes useful only because information survives each reset and changes what happens in the next loop.</p>
</div>

The mapping here is limited but useful: an AI campaign also needs memory of failed routes, feedback that changes the next attempt, and an exit condition. Repeating a search without those three properties is not learning; it is merely another bill.

## Make every campaign earn the right to continue

Tests written before launch, automatic pause controls, and separation of duties, where different people run and approve work, all existed before AI agents. The new pressure is one of scale: candidate answers and renewal arguments can multiply faster than independent evidence capacity. A sensible mandate must therefore reserve search and verification as separate budgets, then make continuation expire unless someone outside the delivery team renews it.

Here is a deliberately illustrative campaign card for a company considering an AI agent for billing disputes. The numbers show the shape of a decision record; they are not universal recommendations or a description of Anthropic’s process.

**Illustrative campaign mandate**

- **Decision at stake:** whether a billing-dispute agent may move from a read-only shadow test, in which it sees real cases but cannot act, to a supervised pilot in European operations.
- **Accountability:** the chief operating officer sponsors the decision; an AI product lead runs the search; an independent risk-analytics lead owns acceptance; the existing portfolio forum that compares investments alone may renew funding. An employee representative reviews proposed changes to roles and monitoring.
- **Evidence test v1.0:** on billing cases kept out of development and stripped of customer identifiers, reduce reopened tickets by at least 10% without increasing incorrect refund recommendations or customer complaints. The independent verifier, not the delivery team, signs the result.
- **Separate caps:** at most 5,000 agent runs, 14 calendar days, and 10 concurrent subagents. Reserve 80 verifier hours and 25% of the total campaign budget for evidence work; if the verifier cannot respond within two business days, search pauses rather than consuming that reserve.
- **Operating boundary:** confidential billing data with customer identifiers removed, stored and processed in the European Union by an approved supplier that cannot retain it for training. Tools remain read-only, with no customer-contact or refund authority. Credentials must be removable immediately, and test outputs must be deletable without changing the production process.
- **Review and alternative:** formal reviews on days 7 and 14 against a named portfolio comparator, in this example an unfunded upgrade to the existing billing-rules engine.
- **Kill and closure:** the portfolio chair or risk owner may pause the campaign. Closure requires revoked access, a saved record naming the model, prompts, tools, data, and test version, plus the verifier’s report and an archive of failed routes.

The operating states can stay equally plain. **ACTIVE → PAUSED** when a cap, evidence test, data boundary, or review deadline is missed. **PAUSED → ACTIVE** requires a saved evidence packet and approval from the portfolio forum; a delivery-team request cannot renew itself. **ACTIVE or PAUSED → CLOSED** when the end date arrives, the kill authority acts, or the portfolio alternative offers greater expected value. **CLOSED** removes permissions and rejects any previously queued job that tries to resume.

This discipline protects the evidence budget from becoming leftover money and gives the verifier an escalation path. It also turns failed attempts into a reusable record rather than a private history that the next agent has to rediscover. Most importantly, it places the decision to continue where it belongs: with an accountable human forum that can compare the campaign against everything else the organization could be doing.

Tireless systems will make another attempt easy to request. Leadership begins when the evidence is no longer good enough to grant it.

<div class="chapter-tldr"><span class="chapter-tldr__label">In short</span><p>A persistent AI campaign needs two protected budgets, a saved acceptance test, explicit operating boundaries, and renewal authority outside the delivery team. If continuation cannot be denied and technically enforced, the organization has not written a stopping rule.</p></div>
