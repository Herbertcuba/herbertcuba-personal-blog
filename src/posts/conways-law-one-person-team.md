---
title: "Conway's Law Still Applies. You Just Became a One-Person Team."
date: 2026-05-16
excerpt: "AI lets you build systems that used to require teams. The velocity is real. The blind spots are too."
featuredImage: "/images/posts/conways-law-one-person-team.webp"
layout: post.njk
tags:
  - ai
  - architecture
  - engineering
---

I used to think code review existed to catch bugs. I was wrong. It exists to catch assumptions — things the author couldn't see because they were standing too close. AI doesn't review your assumptions. It implements them, very consistently.

## The Load-Bearing Friction

Conway's Law says your system architecture will mirror your organizational structure. Most engineers know this as a truism about large companies — too many teams, too many microservices, weird API boundaries that only make sense when you look at the org chart.

But there's a deeper version that matters more right now. The friction between different engineers building the same system — the API negotiation, the design review challenge, the second person who hits a wall with your abstraction and forces you to justify it — is load-bearing. It's not bureaucracy. It's adversarial design.

When your colleague pushes back on an interface decision, they're stress-testing it from a cognitive angle you don't have. When a junior engineer can't understand your abstraction, that's signal about its clarity under pressure. When three people disagree about a data model, the resolution process usually produces something better than any single person would have designed.

That process is slow. It's also how good architecture gets made.

## The Solo Velocity Trap

AI has enabled something genuinely new: individual engineers building systems that previously required teams. I see this in my work as a Tech Director within AI — a single developer shipping a full feature set that would have taken three or four people a year ago. The velocity is real and it's impressive.

But here's what's happening underneath. The system now reflects one cognitive model. One person's assumptions about naming, about boundaries, about what belongs where and why. And the AI that helped build it didn't challenge any of those assumptions — it reinforced them.

That's the subtle part. AI doesn't just implement your ideas. It makes your internal patterns more consistent. Your naming conventions feel clean. Your abstractions align. Your code has a coherence that reads like quality. And in many ways it is quality — surface quality. The kind of quality that comes from a single mind applied uniformly.

What it lacks is the stress test. The second perspective. The person who says: "I get what you're trying to do, but this breaks down the moment you need to handle X."

## Polished Blind Spots

I think the right name for this is **Polished Blind Spots**. The system looks good. It reads well. It has internal consistency. But the places where the original engineer made assumptions — about user behavior, about data patterns, about which edge cases matter — those assumptions are now baked in uniformly across the entire codebase. Reinforced, not examined.

In a team-built system, those assumptions get surfaced naturally. Someone building the adjacent module encounters an interface that doesn't work for their use case. The disagreement that follows isn't a failure — it's the system self-correcting before production does it more painfully.

In a solo-built system, that correction mechanism doesn't exist. The first stress test happens in production, with users, under pressure. And by then the assumption is everywhere.

## What Conway's Law Actually Tells Us Now

Conway's insight was never really about teams being bad at coordination. It was about the fact that systems encode the communication structures of the people who build them. A system built by four people who argue well has those arguments encoded as clean interfaces. A system built by one person who never had to defend a decision has those unexamined decisions encoded as hidden coupling.

AI accelerates both outcomes. If you're working in a team that uses AI to move faster while preserving the adversarial design process — code reviews still happen, design docs still get challenged, interface decisions still get debated — the result is genuinely better. More throughput through the same quality filter.

If you're working alone and AI is your only collaborator, you get more throughput through no quality filter at all. And it feels great right up until it doesn't.

## Substitutes for the Missing Perspective

I'm not arguing engineers should avoid building solo. That ship has sailed — the economics are too compelling. But I think it requires building in deliberate substitutes for the perspectives you've lost.

**Architectural Decision Records** become more important, not less. When there's no second engineer to ask "why did you do it this way?", you need to ask yourself — in writing, before you move on. The act of justifying a decision to a future reader forces the kind of thinking that a real-time design review would have.

**Pre-mortems on interfaces.** Before shipping an API or data model, spend ten minutes assuming it's wrong. What would break? What would the person building the consuming service complain about? What happens when the requirements change in six months? Solo engineers who do this consistently catch the same problems that teams catch through natural friction.

**Periodic external review.** Not daily code review — that's overkill for solo work. But a monthly architecture review with someone outside the project. Someone who hasn't absorbed your assumptions. Someone whose first question is "wait, why is it structured this way?" rather than "looks clean."

The engineering discipline hasn't disappeared. It's just that the organizational structure used to provide it for free, and now you have to provide it yourself.

## The Architectural Risk Worth Naming

Here's the broader pattern I think matters. AI is removing friction from engineering faster than we're replacing the useful parts of that friction. Build speed, iteration speed, deployment speed — all up. Assumption-testing, perspective diversity, adversarial design — all unaddressed.

The engineers who will build the most durable systems in this era aren't the ones who move fastest. They're the ones who figure out which friction was structural overhead and which friction was load-bearing — and find new ways to keep the second kind, even when the tools make it easy to skip.

Conway's Law hasn't changed. What's changed is that the organizational structure it describes now fits in one chair.
