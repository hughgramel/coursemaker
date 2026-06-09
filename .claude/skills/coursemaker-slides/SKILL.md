---
name: coursemaker-slides
description: Author a Marp slide deck for one lecture of a coursemaker course, then render it to PDF. Use when the user says "make slides for week N of <course>", "build a deck for <topic>", or when the create skill fans out to per-week slide generation.
---

# coursemaker-slides — Marp slide decks in the coursemaker style

This skill produces **one slide deck per lecture**, rendered to PDF with the
shared `themes/coursemaker.css` Marp theme so every course's slides look like
they belong to the same family.

## When to use

- The user asks for slides for a specific lecture or week.
- The master `coursemaker-create` skill fans out per-week sub-agents and one
  of those needs to write the deck.
- The user has a lecture topic + outline + readings and wants a deck.

## Inputs (must have)

- **Course slug** (e.g. `cse457-26sp`).
- **Filename** (e.g. `wk01-affine.md`) — kebab-case, `wkNN-<topic>` convention.
- **Lecture topic** — one line.
- **Topic outline** — 5-10 bullet points the deck should cover.
- **Source material** — at least 1-2 trusted references (textbook section,
  arXiv paper, primary source). NEVER write a deck from parametric knowledge
  alone. Use WebSearch + WebFetch to verify and cite.
- **Course tone** — formal (CS theory), playful (intro), applied (engineering).

## What you produce

A single Markdown file under
`content/courses/<slug>/slides/<filename>.md` plus the rendered PDF.

### Structure (target 12-18 slides for a 50-minute lecture)

1. **Title slide** — `<!-- _class: title -->`
   - H1: lecture topic
   - H2: week + course name
   - `<div class="meta">` line: school + term

2. **"What we'll cover"** — bullets mirroring the outline

3. **Section divider** — `<!-- _class: divider -->` with a single H1 for the
   first major theme

4. **Body slides** — heading + 3-5 bullets each. One idea per slide.
   - Use `<!-- _class: two-col -->` to compare two alternatives.
   - Use `<!-- _class: image-right -->` for screenshots / diagrams.
   - Use fenced code blocks for code, equations as plain text (Marp + MathJax
     is finicky; fall back to LaTeX-source-in-monospace if needed).

5. **Take-aways slide** — 3-5 numbered points.

6. **Quote slide** — `<!-- _class: quote -->` with `<blockquote>` + attribution.
   Pick a quote from the source material, not made up.

7. **"What's next"** slide — section worksheet, reading, next lecture,
   assignment status.

### Required frontmatter

```yaml
---
marp: true
theme: coursemaker
paginate: true
---
```

### Style rules (matches the visual identity of the rest of coursemaker)

- **Headings:** sentence case, not title case. "Affine transformations" not
  "Affine Transformations".
- **No emoji.** Inherit the calm UW typographic style.
- **No em dashes (—) anywhere.** Em dashes are an AI tell; readers spot
  them immediately. Use periods, commas, parentheses, or colons instead.
  En dashes are fine for ranges (`weeks 3–5`). Applies in slide titles,
  bullets, the title slide, take-aways, and quote attributions.
- **At most one image per slide.** Place under `public/c/<slug>/slides/img/`
  so the relative paths work after PDF render.
- **Code blocks:** dark slate background (set by theme). Keep them under 12
  lines or split into "before / after" pairs.
- **Citations:** When you reference a textbook section or paper, write the
  citation inline ("Marschner & Shirley §6.1") so the reader can chase it.
- **Pedagogy:** follow `/teach` philosophy where it fits — each slide teaches
  one thing, the deck has a clear mission, take-aways tie back to the outline.

## Pedagogy nudges (from /teach)

- **Mission first.** Every deck begins with "what we'll cover" tied to a
  concrete capability the learner will gain.
- **Zone of proximal development.** Don't assume more than the prerequisites
  + the previous lectures. If a concept needs a primer, write a "section
  divider → primer slide" pair instead of skipping.
- **One thing per slide.** If a slide has > 6 bullets, split it.
- **Feedback loop.** End with discussion questions or a worksheet pointer so
  the learner has something to do.

## How to run

```bash
# After authoring the .md file:
pnpm slides <course-slug> <deck-prefix>
# e.g.
pnpm slides cse457-26sp wk01

# Or all decks across all courses:
pnpm slides
```

The script writes PDFs to `public/c/<slug>/slides/<deck>.pdf`. Link to them
from the lecture page or calendar as
`/c/<slug>/slides/<deck>.pdf`.

## Verifying

1. `pnpm slides <slug> <deck>` succeeds.
2. Open the rendered PDF — count slides, check title slide, check the quote
   slide has a real attribution, check the "next" slide references reality
   (real reading, real next lecture).
3. If a code block overflows or text wraps awkwardly, split the slide. Don't
   shrink the font.

## Common mistakes (don't do these)

- **Don't write a deck from memory.** WebFetch the textbook section or paper
  first. Cite as you go.
- **Don't pack one slide.** "One idea per slide" is non-negotiable.
- **Don't skip the title or take-aways slides.** They give the deck shape.
- **Don't use a different theme.** Always `theme: coursemaker`.
- **Don't put PII or unverified office hours in slides.** Reference the
  course site (sidebar links) for live info.
