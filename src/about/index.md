---
layout: base-redesign.njk
title: About
permalink: /about/
activeNav: about
description: "Herbert Cuba Garcia — engineer, entrepreneur, author working at the intersection of AI, strategy, and human potential."
---
{%- set allPosts = collections.posts -%}
{%- set insightCount = allPosts | length -%}

{# ═══════════════════ HEADER ═══════════════════ #}
<header class="ab-header">
  <div class="ab-header__text">
    <div class="ab-kicker mono"><span class="slash">//</span>whoami</div>
    <h1 class="ab-title">Engineer. Entrepreneur. Author<span class="cursor">_</span></h1>
    <p class="ab-intro">I'm Herbert Cuba Garcia — a technology leader working at the intersection of AI, strategy, and human potential.</p>
    <p class="ab-intro">After 20+ years building products and leading engineering teams, I now spend my time on one question: how organizations turn AI capability into actual outcomes — without losing the people in the process.</p>
  </div>
  <div class="ab-portrait duotone">
    <img src="{{ site.portrait }}" alt="Herbert Cuba Garcia">
    <div class="ab-portrait__caption mono">// herbert cuba garcia</div>
  </div>
</header>

{# ═══════════════════ STATS STRIP ═══════════════════ #}
<div class="ab-stats-wrap">
  <div class="ab-stats">
    <div class="ab-stat"><div class="ab-stat__num">{{ site.yearsInTech }}</div><div class="ab-stat__lbl mono">years in tech</div></div>
    <div class="ab-stat"><div class="ab-stat__num">{{ insightCount }}</div><div class="ab-stat__lbl mono">insights published</div></div>
    <div class="ab-stat"><div class="ab-stat__num">02</div><div class="ab-stat__lbl mono">books authored</div></div>
    <div class="ab-stat"><div class="ab-stat__num">APEX</div><div class="ab-stat__lbl mono">operating-model framework</div></div>
  </div>
</div>

{# ═══════════════════ WHAT I DO ═══════════════════ #}
<section class="ab-do">
  <h2 class="apex-h2 apex-h2--light"><span class="apex-h2__slash apex-h2__slash--light mono">//</span>What I do</h2>
  <div class="ab-do__grid">
    <div class="ab-do__col">
      <h3 class="ab-do__name">Write</h3>
      <div class="apex-rules apex-rules--green"><span></span><span></span></div>
      <p class="ab-do__body">Deep, practical insights on agentic engineering, AI operating models, and what leadership looks like when software becomes cheap.</p>
      <a class="ab-do__link" href="/insights/">Read the insights →</a>
    </div>
    <div class="ab-do__col">
      <h3 class="ab-do__name">Advise</h3>
      <div class="apex-rules apex-rules--blue"><span></span><span></span></div>
      <p class="ab-do__body">I work with leadership teams on AI operating models — turning individual productivity gains into organizational outcomes, using the APEX framework.</p>
      <a class="ab-do__link" href="#contact">Get in touch →</a>
    </div>
    <div class="ab-do__col">
      <h3 class="ab-do__name">Author</h3>
      <div class="apex-rules apex-rules--orange"><span></span><span></span></div>
      <p class="ab-do__body">Two books on the forces reshaping technology and business: The 3 Crucibles and The Digital Singularity Shift.</p>
      <a class="ab-do__link" href="/books/">See the books →</a>
    </div>
  </div>
</section>

{# ═══════════════════ LONGER STORY ═══════════════════ #}
<section class="ab-story">
  <div class="ab-story__grid">
    <aside class="ab-story__rail mono">
      <div class="apex-rules apex-rules--green"><span></span><span></span></div>
      <div class="ab-story__label">the longer story</div>
    </aside>
    <div class="ab-story__prose">
      <p>I started as an engineer, became a founder, and spent the last decade leading technology organizations through platform shifts. The AI shift is the third one I've worked through — and the first where the constraint moved from building to deciding.</p>
      <p>That's what this site is about. Not tool reviews, not hype cycles — the operating models, team structures, and leadership habits that determine whether AI capability compounds or evaporates inside an organization.</p>
      <p>When I'm not writing or advising, I'm usually building something anyway. Old habits.</p>
    </div>
  </div>
</section>
