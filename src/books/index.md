---
layout: base-redesign.njk
title: Books
permalink: /books/
activeNav: books
description: "Three books about what comes next — including AION, Engineering the Organization for the Age of Agents, by Herbert Cuba Garcia."
---
{# ═══════════════════ HEADER ═══════════════════ #}
<header class="bk-header">
  <div class="bk-kicker mono"><span class="slash">//</span>ls ./books</div>
  <h1 class="bk-title">Three books about what comes next<span class="cursor">_</span></h1>
  <p class="bk-lede">The long-form versions of the ideas on this site — where the essays end and the arguments get room to breathe.</p>
</header>

{# ═══════════════════ BOOK 01 (cover left) ═══════════════════ #}
{%- set b1 = site.books[0] -%}
<div class="bk-panel bk-panel--1">
  <div class="bk-panel__cover">
    <img src="{{ b1.cover }}" alt="{{ b1.title }} cover">
  </div>
  <div class="bk-panel__text">
    <div class="bk-panel__meta mono">
      <span class="bk-badge">// BOOK {{ b1.num }}</span>
      <span class="bk-panel__tags">{%- for t in b1.tags %}<span class="art-tag art-tag--dark">{{ t }}</span>{% endfor -%}</span>
    </div>
    <h2 class="bk-panel__title">{{ b1.title }}</h2>
    <div class="bk-panel__subtitle mono">{{ b1.subtitle }}</div>
    <p class="bk-panel__desc">{{ b1.description }}</p>
    <div class="bk-panel__btns">
      <a class="btn btn--primary" href="{{ b1.amazon }}" target="_blank" rel="noopener">Buy on Amazon ↗</a>
      <a class="btn btn--secondary" href="{{ b1.page }}">Buy PDF — {{ b1.priceSek }} SEK →</a>
    </div>
  </div>
</div>

{# ═══════════════════ BOOK 02 (cover right) ═══════════════════ #}
{%- set b2 = site.books[1] -%}
<div class="bk-panel bk-panel--2">
  <div class="bk-panel__text">
    <div class="bk-panel__meta mono">
      <span class="bk-badge">// BOOK {{ b2.num }}</span>
      <span class="bk-panel__tags">{%- for t in b2.tags %}<span class="art-tag art-tag--dark">{{ t }}</span>{% endfor -%}</span>
    </div>
    <h2 class="bk-panel__title">{{ b2.title }}</h2>
    <div class="bk-panel__subtitle mono">{{ b2.subtitle }}</div>
    <p class="bk-panel__desc">{{ b2.description }}</p>
    <div class="bk-panel__btns">
      <a class="btn btn--primary" href="{{ b2.amazon }}" target="_blank" rel="noopener">Buy on Amazon ↗</a>
      <a class="btn btn--secondary" href="{{ b2.page }}">Buy PDF — {{ b2.priceSek }} SEK →</a>
    </div>
  </div>
  <div class="bk-panel__cover">
    <img src="{{ b2.cover }}" alt="{{ b2.title }} cover">
  </div>
</div>

{# ═══════════════════ BOOK 03 (cover left) ═══════════════════ #}
{%- set b3 = site.books[2] -%}
<div class="bk-panel bk-panel--3">
  <div class="bk-panel__cover">
    <img src="{{ b3.cover }}" alt="{{ b3.title }} cover">
  </div>
  <div class="bk-panel__text">
    <div class="bk-panel__meta mono">
      <span class="bk-badge">// BOOK {{ b3.num }}</span>
      <span class="bk-panel__tags">{%- for t in b3.tags %}<span class="art-tag art-tag--dark">{{ t }}</span>{% endfor -%}</span>
    </div>
    <h2 class="bk-panel__title">{{ b3.title }}</h2>
    <div class="bk-panel__subtitle mono">{{ b3.subtitle }}</div>
    <p class="bk-panel__desc">{{ b3.description }}</p>
    <div class="bk-panel__btns">
      <a class="btn btn--primary" href="/aion/">Explore AION →</a>
      <a class="btn btn--secondary" href="{{ b3.page }}">Buy PDF — 1,999 SEK →</a>
    </div>
  </div>
</div>
