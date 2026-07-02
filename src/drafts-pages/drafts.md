---
title: Drafts
description: "Working drafts in progress. Not published yet — these exist so I can share a stable preview URL for review."
layout: base-redesign.njk
permalink: /drafts/
ctaHidden: true
---
{# ═══════════════════ HEADER ═══════════════════ #}
<header class="art-header">
  <a class="art-back mono" href="/insights/">← cd /insights</a>
  <div class="art-meta mono">
    <span class="art-badge">// STATUS: WORK IN PROGRESS</span>
    <span>{{ collections.draftList.length }} drafts</span>
  </div>
  <h1 class="art-title">Drafts<span class="cursor">_</span></h1>
  <p class="art-dek">Working drafts, not yet published. Each link is a stable preview URL — share for review before publish.</p>
</header>

{# ═══════════════════ DRAFT LIST ═══════════════════ #}
<section class="drafts">
  <div class="drafts__list">
    {%- for draft in collections.draftList -%}
    <a href="{{ draft.url }}" class="dcard">
      <div class="dcard__num mono">{{ loop.index | padNum }}</div>
      <div class="dcard__body">
        <div class="dcard__meta mono">
          {%- if draft.date %}<time datetime="{{ draft.date }}">{{ draft.date }}</time>{% else %}<span>undated</span>{% endif %}
        </div>
        <h2 class="dcard__title">{{ draft.title }}</h2>
        {%- if draft.excerpt %}<p class="dcard__excerpt">{{ draft.excerpt }}</p>{% endif %}
      </div>
      <div class="dcard__arrow mono" aria-hidden="true">→</div>
    </a>
    {%- endfor -%}
  </div>
</section>
