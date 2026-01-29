# OBSIDIAN EDGE — Design System

## Overview

A cyber-minimalist design system for Herbert Cuba Garcia's personal blog. Signals: **high confidence, technical mastery, avant-garde taste**.

**Style:** Cyber-Minimalism × Refined Neo-Brutalism  
**Vibe:** Dark, edgy, confident, sophisticated, "bleeding edge"

---

## Color Palette

### Abyss (Backgrounds)
| Token | Hex | Usage |
|-------|-----|-------|
| `--abyss` | `#000000` | Primary background (true black) |
| `--void` | `#0a0a0a` | Card backgrounds, hover states |
| `--obsidian` | `#111111` | Subtle elevation |
| `--graphite` | `#1a1a1a` | Code backgrounds, inputs |
| `--slate` | `#2a2a2a` | Highest elevation panels |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| `--bone` | `#f5f5f5` | Primary text, headlines |
| `--ash` | `#a0a0a0` | Body text, paragraphs |
| `--smoke` | `#666666` | Muted text, metadata |

### Electric Accents (Use Sparingly!)
| Token | Hex | Usage |
|-------|-----|-------|
| `--acid` | `#b0ff00` | **Primary accent** — links, highlights, CTAs |
| `--acid-dim` | `#8acc00` | Accent hover states |
| `--volt` | `#00ff88` | Secondary accent (alt projects) |
| `--hyper` | `#7c3aed` | Tertiary accent (rarely) |
| `--ember` | `#ff4d00` | International Orange (warnings, hot takes) |

**Rule:** Electric colors should feel *earned*. They're the neon in a dark city—impactful because scarce.

---

## Typography

### Font Stack
```css
--font-display: 'Space Grotesk', system-ui, sans-serif;  /* Headlines */
--font-body: 'Inter', system-ui, sans-serif;             /* Body text */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;   /* Code, metadata */
```

### Type Scale
| Class | Size | Usage |
|-------|------|-------|
| Hero headline | `clamp(3.5rem, 10vw, 7rem)` | Main page statement |
| Article title | `clamp(2.5rem, 6vw, 4rem)` | Single post title |
| Section heading | `clamp(1.75rem, 4vw, 2.25rem)` | H2 in prose |
| Card title | `clamp(1.25rem, 2vw, 1.75rem)` | Bento cell titles |
| Body | `1.125rem (18px)` | Prose paragraphs |
| Metadata | `0.75rem (12px)` | Dates, tags, eyebrows |

### Typography Rules
1. **Headlines:** Space Grotesk, **700 weight**, tight tracking (-0.02em to -0.04em)
2. **Body:** Inter, 400 weight, 1.6-1.8 line height
3. **Metadata:** JetBrains Mono, UPPERCASE, wide tracking (0.1em-0.2em)
4. **Code:** JetBrains Mono, acid green color

---

## Layout: Bento Grid

The bento grid creates visual hierarchy through size, not decoration.

### Cell Sizes
```css
.bento-cell--hero   { grid-column: span 8; grid-row: span 2; }  /* Featured */
.bento-cell--tall   { grid-column: span 4; grid-row: span 2; }  /* Vertical emphasis */
.bento-cell--wide   { grid-column: span 6; grid-row: span 1; }  /* Horizontal */
.bento-cell--square { grid-column: span 4; grid-row: span 1; }  /* Standard */
.bento-cell--small  { grid-column: span 3; grid-row: span 1; }  /* Compact */
```

### Grid Rules
- 12-column base grid
- 1.5rem gap
- Cards have 1px border (`--line`), no shadows
- Hover: border brightens, subtle transform

---

## Interactions & Micro-animations

### Hover Effects

1. **Cards:** Border color shift + bottom accent line wipe
```css
.bento-cell::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--acid);
  transition: width 0.4s ease;
}
.bento-cell:hover::after {
  width: 100%;
}
```

2. **Images:** Grayscale → Color on hover
```css
.bento-cell__image img {
  filter: grayscale(100%) contrast(1.1);
  transition: filter 0.5s ease;
}
.bento-cell:hover .bento-cell__image img {
  filter: grayscale(0%) contrast(1);
}
```

3. **Links:** Underline grows from left
```css
.nav a::after {
  content: "";
  width: 0;
  height: 1px;
  background: var(--acid);
  transition: width 0.3s ease;
}
.nav a:hover::after {
  width: 100%;
}
```

### Kinetic Typography Ideas

**1. Headline Character Stagger**
```js
// Split headline into characters, stagger fade-in
const chars = headline.textContent.split('');
headline.innerHTML = chars.map((char, i) => 
  `<span style="animation-delay: ${i * 0.03}s">${char}</span>`
).join('');
```

**2. Scroll-triggered Reveals**
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, { threshold: 0.1 });
```

**3. Glitch Effect on Accent Text**
```css
.glitch {
  position: relative;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  opacity: 0;
}
.glitch:hover::before {
  animation: glitch-1 0.2s ease-in-out;
  color: var(--volt);
  opacity: 0.8;
}
.glitch:hover::after {
  animation: glitch-2 0.2s ease-in-out;
  color: var(--ember);
  opacity: 0.8;
}
```

**4. Cursor Follower (Optional)**
```js
// Subtle dot that follows cursor, scales on interactive elements
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
```

---

## Accessibility

### Implemented
- Skip link (`<a href="#main-content" class="skip-link">`)
- Focus visible states (2px acid outline, 4px offset)
- Semantic HTML (`<article>`, `<nav>`, `<main>`, `<time>`)
- ARIA labels on navigation and sections
- `prefers-reduced-motion` media query disables animations

### Color Contrast
- `--bone` on `--abyss`: **21:1** ✓
- `--ash` on `--abyss`: **7.4:1** ✓
- `--acid` on `--abyss`: **14.2:1** ✓

---

## SEO

### Implemented
- Semantic `<title>` with site name
- Meta description from page/post excerpt
- Open Graph tags (title, description, type, image)
- Twitter Card tags
- Canonical URL
- Schema.org JSON-LD for blog posts

### Image Optimization (Recommended)
Add to build process:
```js
// eleventy.config.js
const Image = require("@11ty/eleventy-img");
```

---

## Files Changed

| File | Purpose |
|------|---------|
| `tailwind.config.js` | Design tokens for Tailwind (optional use) |
| `src/static/styles.css` | Complete stylesheet |
| `src/_layouts/base.njk` | Base HTML template |
| `src/_layouts/post.njk` | Single post template |
| `src/index.njk` | Homepage with bento grid |

---

## Quick Start

1. **Build & serve:**
```bash
npm run dev
```

2. **Fonts are loaded via Google Fonts** (already in CSS)

3. **To use Tailwind classes in templates** (optional):
```bash
npm install -D tailwindcss @tailwindcss/typography
npx tailwindcss init
```

---

## Philosophy

> "The grid is the architecture. The black is the canvas. The acid green is the statement. Everything else is noise."

Use restraint. Let the darkness breathe. The goal isn't to look "designed"—it's to look *inevitable*.
