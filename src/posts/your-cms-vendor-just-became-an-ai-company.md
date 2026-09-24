---
layout: post.njk
title: Your CMS Vendor Just Became an AI Company
excerpt: Several CMS vendors now give AI agents governed access to structured content
  and workflows. The decisive question is no longer whether a CMS has AI features,
  but whether those agents can be controlled.
tldr: CMS vendors are moving beyond writing assistants toward agents that can act
  across structured content and workflows. Buyers should evaluate permissions, identity,
  review gates, logs, rollback, and cost controls—not accept “agent-native” labels
  or polished demos as proof of operational maturity.
date: '2026-09-24'
featuredImage: /images/posts/your-cms-vendor-just-became-an-ai-company.webp
---

For years, picking a CMS was a content management decision. Which editing interface felt smoother? How flexible was the content model? Could marketing publish without developer support? Reasonable questions. The kind that guided CMS evaluations for a decade.

That frame is no longer enough.

CMS vendors are giving AI agents access to the same structured content and workflows used by human teams. Kontent.ai documents specialist agents triggered inside workflows. Sanity's Content Agent can search a project, create content, and propose bulk changes. Cosmic agents can run on schedules or content events. These products differ in maturity and autonomy, but the direction is clear enough to affect a buying decision: the CMS is becoming an operating environment for agents.

## What's actually changing

A writing assistant waits inside the editor. A person opens a field, asks for a headline, and decides whether to use it. Helpful, sometimes. But it leaves the operating model untouched.

An operational agent can read the schema, start from an approved event, work across multiple records, and hand back a reviewable set of changes. That is a different architectural demand. It requires permissions, identity, logs, versioning, and a reliable way to stop or reverse an action.

This is where I would be careful with the term "agent-native." There is no settled CMS standard behind it. One vendor may mean workflow automation with an AI step. Another may mean an agent that can read and write across the content system. The label tells you very little.

The controls tell you much more. Kontent.ai, Sanity, and Hygraph all document human approval before publication. Cosmic can support unattended publication, but also offers approval gates and execution history. I think that restraint is a strength. Maximum autonomy is a poor measure of maturity when a mistake can spread across an entire content estate.

## Test the operation, not the demo

Ask the vendor to run one real workflow against representative content: localization, metadata cleanup, or retiring expired pages. Watch what happens when the instructions are ambiguous, a field is missing, or external data conflicts with the content model.

Can the agent discover the right schema? Does it have its own identity and narrowly scoped rights? Can a reviewer see a diff before publication? Do the logs show who acted, what changed, when, and under whose approval? Can the team cancel the run, roll it back, and cap its cost?

If you recently completed a migration, none of this makes the platform obsolete by default. Test one bounded operation. Measure review effort, failure modes, and recovery. That will tell you more than a polished agent demo or an unsupported promise about headcount savings.

Content modeling, APIs, editorial usability, and multi-site support still matter. They are no longer the whole decision. Once agents can act, the CMS also becomes a control system for content operations.

Your CMS vendor is becoming an AI company. The question is whether it is building agents you can govern, or simply giving automation more room to fail.

## Meanwhile in sci-fi

In *RoboCop*, ED-209 is heavily armed, obedient, and almost comically bad at context. Give it a clear instruction and it acts. Change the conditions slightly and the power becomes the problem.

That is a useful model for CMS agents. More available actions do not make an agent more capable. Without narrow permissions, human checkpoints, and a visible record of what happened, autonomy only increases the distance a bad decision can travel.
