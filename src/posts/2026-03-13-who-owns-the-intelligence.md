---
title: "Who Owns the Intelligence? The Question That Will Define This Decade"
date: 2026-03-13
excerpt: "The technology that will reshape every industry is being concentrated in maybe five companies. The return to open source and smaller models is an act of distributed sovereignty."
featuredImage: "/images/posts/who-owns-the-intelligence.webp"
layout: post.njk
tags: ["ai", "open-source", "decentralization", "leadership", "strategy"]
---

AI is advancing faster than any technology I've seen in my career. At the same time, the world feels more fragile than it has in decades — conflicts spreading, supply chains fracturing, alliances shifting. These two things are deeply connected.

The technology that will reshape every industry, every government, every military capability on Earth is being concentrated in the hands of maybe five companies. All based in one country. All dependent on the same supply chains, the same chip fabricators, the same energy grids. And most of us — engineers, consultancies, entire nations — are building our futures on top of their APIs without thinking too hard about what that means.

I've spent the past year building AI agents, testing workflows across different models, and getting my hands dirty with what actually works versus what's just conference-talk hype. Some of that work uses frontier models. A lot of it uses smaller, specialized alternatives. That hands-on experience has shaped a conviction I want to share — one that starts with engineering pragmatism but ends somewhere much bigger.

## The Monolith Is Impressive. It's Also a Trap.

OpenAI, Anthropic, and Google are racing to build the largest, most capable general-purpose models. Sam Altman remains committed to scaling. Dario Amodei at Anthropic predicts systems exceeding Nobel Prize-level intellect by late 2026. Demis Hassabis at Google says scaling "must be pushed to the maximum."

The results have been genuinely impressive. But the costs tell a different story.

Training a frontier model in 2024 required roughly 25–30 MW of sustained power. A single ChatGPT query consumes several times the energy of a traditional Google search. Global data centers now consume around 450 TWh per year — approximately 1.5% of the world's total electricity — and that figure is projected to double by 2030. Training GPT-3 alone released an estimated 552 metric tons of CO2.

And the returns are diminishing. Each new model generation costs exponentially more to train while delivering incrementally smaller improvements. OpenAI's GPT-4.5 showed notably smaller gains over GPT-4 than GPT-4 showed over GPT-3. The scaling curve is flattening, but the cost curve keeps climbing.

So the monolith demands more money, more energy, more centralized infrastructure — and delivers less improvement each time. Meanwhile, the dependency deepens. Your data flows through their servers. Your costs scale with their pricing decisions. Your capabilities shift when they update their models or terms. You're renting intelligence from a landlord who can change the lease whenever they want.

## The Swarm Already Works Better

The alternative is gaining momentum fast, and the numbers are striking.

In healthcare, Med-PaLM 2 achieved 86.5% accuracy on U.S. medical licensing exams, surpassing general-purpose models on medical tasks. In finance, BloombergGPT outperforms larger models on financial analysis and sentiment classification. John Deere's See & Spray uses specialized computer vision to reduce herbicide usage by 77%. And in legal work, specialized models showed a 38% accuracy gain over Gemini 2.5 Pro in regulatory document classification — at 1/80th the cost and 1/200th the energy consumption.

Read that last one again. Better accuracy. Eighty times cheaper. Two hundred times less energy. A fundamentally different proposition for how we build with AI.

The infrastructure for running your own models is maturing rapidly. Ollama has over 174,000 active instances worldwide. vLLM and LocalAI provide production-ready serving infrastructure. For a team of ten with heavy usage, a local deployment can save $9,000–$24,000 over five years compared to enterprise API subscriptions — before you even count the data privacy and compliance benefits.

Yann LeCun, Meta's Chief AI Scientist, argues that specialization is "the norm for intelligent evolution" and that current large language models represent a strategic dead end for AGI. Mistral is building its entire business around compact, open-source, specialized architectures. The open-source ecosystem is producing fine-tuned models for virtually every professional domain.

The specialist path works. The economics are clear. But my real argument goes deeper than cost savings.

## Why This Matters for How We Build

For organizations that deliver digital services — consultancies like ours — this fork presents a strategic choice that shapes what kind of company you become.

If you only use frontier APIs, you build capability that depends entirely on external providers. You can't differentiate on infrastructure. You can't experiment with model architecture. You can't build proprietary workflows that competitors can't replicate. And you're fully exposed to pricing changes, rate limits, and API deprecations.

If you invest in your own AI infrastructure — even modestly — you gain something more valuable than compute: you gain understanding. Your engineers learn how models actually work. Your managers learn what agentic workflows can and can't do. You generate real data on throughput, quality, and the actual economics of AI-augmented delivery.

In my experience, there's a massive gap between advising clients based on theory and advising them based on lived experience. In a market where every consultancy claims AI expertise, the ones who've actually run their own infrastructure will stand apart. That knowledge compounds. It becomes institutional muscle memory.

The practical future probably looks like this: a small number of frontier models for exploration and complex cross-domain reasoning, surrounded by a swarm of specialized models handling execution. Your organization doesn't need GPT-5 to generate status reports, review pull requests, or classify support tickets. It needs small, focused models that understand your specific domain — ideally running on hardware you control.

Finance, healthcare, and public sector organizations are already moving this way: sensitive inference stays on-premise, cloud models handle development and training. Pragmatic risk management, plain and simple.

## The Bigger Question We're Not Asking

Everything I've described so far — the cost savings, the better accuracy, the operational independence — those are good reasons to go small and specialized. But they're small reasons compared to what's actually at stake.

We are watching the most powerful technology in human history consolidate into a handful of private companies, during one of the most geopolitically unstable periods since the Cold War. That combination should alarm anyone who's paying attention.

Think about what it means when a few API providers become the cognitive infrastructure for entire economies. When hospitals, courts, banks, governments, and militaries all depend on the same three or four model providers for their intelligence layer. When the models that help nations make decisions are controlled by companies subject to one country's export restrictions, one country's political shifts, one country's corporate interests.

I think this might be one of the most important questions of our time.

AI is already being weaponized in active conflicts — for surveillance, targeting, propaganda, and autonomous decision-making. The countries and organizations that control AI infrastructure hold enormous leverage. And right now, that control is centralizing at a speed that should make every engineer, every leader, every citizen uncomfortable.

The open-source AI movement and the push toward smaller, specialized models are a direct counterweight to that concentration of power. Every organization that self-hosts a model, every researcher who publishes weights openly, every company that builds on open architectures rather than proprietary APIs — they're all contributing to a more distributed, more resilient, more democratic AI ecosystem.

I genuinely believe we have a responsibility here. Those of us who understand this technology, who build with it daily, who advise organizations on how to adopt it — we have a responsibility to push for decentralization. To champion open source. To choose smaller models when they work (and they often work better). To resist the convenience of handing everything to the giants just because their APIs are easy to call.

Because convenience is how monopolies are built. And AI monopolies, given what this technology can do, carry risks that make previous tech monopolies look quaint.

The return to open source and specialization is an act of distributed sovereignty. It's how we make sure that the intelligence infrastructure of the future belongs to everyone — not just the companies that can afford the biggest GPU clusters.

## Where I'm Putting My Energy

Build for portability. Use frontier APIs where they add clear value, but avoid architectures that lock you into a single provider. The landscape is shifting too fast for vendor dependency.

Start with owned infrastructure. Even a modest investment in local compute — a dedicated machine running open-source models — generates learning that API access alone cannot provide. The cost is often less than a single month's cloud AI spend.

Track the energy economics. Energy consumption in AI is becoming a board-level concern. Organizations that demonstrate AI capability with lower environmental impact will hold a genuine competitive edge.

Specialize aggressively. Fine-tuning a 7B parameter model for your domain costs a fraction of ongoing API bills and frequently delivers better results for your specific use cases.

And advocate loudly for open-source AI. Support the projects. Contribute to the ecosystem. Push back when the default is always the biggest proprietary model.

Both paths — monolithic and specialized — will coexist. But for organizations that want durable capability rather than rented access, and for a world that needs distributed intelligence rather than concentrated power, the specialist path offers something the monolith fundamentally cannot: ownership.

Ownership of your models. Ownership of your data. Ownership of your future.

That's the direction I'm investing in — professionally and personally. The economics point there. The sustainability argument points there. The competitive logic points there. And in a world where power is concentrating faster than we can track it, the moral argument points there too.
