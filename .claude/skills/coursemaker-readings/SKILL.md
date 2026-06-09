---
name: coursemaker-readings
description: Author a per-week reading handout (the "textbook" the course generates for itself) and render it to a styled PDF. Use when the user says "make the reading for week N of <course>", "write the week N primer", or when coursemaker-create fans out to per-week reading generation.
---

# coursemaker-readings — original course-textbook chapters

This skill produces **one reading handout per week**, rendered to a styled
PDF using `themes/coursemaker-reading.css`. These readings are the
course's textbook — they are *original writing*, not curated chapters
from someone else's book. The course has no required textbook; the
readings ARE the required reading.

## When to use

- The user asks for a reading / handout / primer for a specific week.
- The master `coursemaker-create` skill fans out per-week sub-agents and
  one of those needs to write the week's reading.
- An author wants to add a primer beyond the slide deck for one lecture.

## Inputs (must have)

- **Course slug** (e.g. `cse457-26sp`).
- **Filename** (e.g. `wk01-affine.md`) — kebab-case, `wkNN-<topic>`.
- **Week scope** — the row from the curriculum graph: theme, lectures,
  prerequisites (concepts already taught), introduces (new concepts).
- **Pedagogical level** — undergrad intro vs. graduate seminar.
- **Length target** — 4–8 printed pages is the default sweet spot.

## What you produce

A single Markdown file at
`content/courses/<slug>/readings/<filename>.md` that renders to a PDF at
`public/c/<slug>/readings/<filename>.pdf` via `pnpm readings`.

### Structure (every reading follows this skeleton)

1. **H1: Week N — Topic.** Always this format.
2. **Course / term / "Reading" line.** Renders as a kicker under the H1
   (the CSS styles the paragraph immediately after H1 as a kicker).
3. **"What this reading covers"** section.
   - One paragraph framing what the learner will be able to do after.
   - One paragraph declaring **Prerequisites assumed** (named concepts
     from earlier weeks).
4. **Numbered body sections** (H2: `1. …`, `2. …`).
   - Build up the idea from first principles.
   - Use small examples, not large ones — one figure per section is fine,
     but most sections are pure prose + the occasional code block.
   - Insert one blockquote per reading for a key definition or quote
     ("A definition.", "An identity.", etc.).
5. **Worked example.** A complete walk-through tying earlier sections
   together. One full numerical example, with the matrices/equations
   spelled out, not just described.
6. **Exercises.** 3-5 problems, each wrapped in `<div class="exercise">`
   so they don't break across pages. Use a hidden "key" exercise marked
   "Try this first" if you want to scaffold.
7. **Going deeper.** Pointers to the section worksheet, next lecture,
   and the relevant project — internal references, NOT external books.
8. **Take-aways.** 3-5 numbered points. Echoes the framing in §1.
9. **(Optional) Bibliography.** A small `<div class="bibliography">`
   block at the end. Only used if external references are mentioned;
   don't fabricate citations.

### Style rules

- **Voice: textbook-calm.** Not "tutorial-chirpy." Sentences declarative,
  authoritative, never apologetic. Match the prose style of
  Marschner & Shirley or the Bishop ML book.
- **No emoji. No tables of contents at the top.** The H1 + section
  numbers do all the orienting.
- **Sentence case headings.** "Composition order matters", not
  "Composition Order Matters".
- **Math in plain text or code blocks.** This pipeline uses Puppeteer to
  print HTML, not MathJax. Render equations as monospace code blocks
  with the matrix written out in ASCII, exactly like the example deck.
  Don't try `$inline math$` — it won't typeset.
- **Code blocks** are for matrices, equations, pseudo-code, and short
  programs. Keep under 14 lines.
- **Inline `code`** for symbols (`p`, `R(θ)`, `M_world`).
- **Strong tags** for emphasis on *named concepts the first time they
  appear.* This is how the learner sees what's introduced this week.
- **Blockquotes** for definitions and short quotations only.
- **Callouts** (`<div class="callout">…</div>` or
  `<div class="callout callout-warn">…</div>`) for asides — use sparingly,
  at most one per reading.
- **Page breaks.** Insert `<div class="page-break"></div>` if you need to
  force a break before exercises or going-deeper.

### Length

Target 4–8 pages of printed PDF. The CSS aims for ~450 words per page;
that's ~2,000-3,500 words.

- < 4 pages: the reading is too thin. Add a second example or a deeper
  derivation.
- > 8 pages: the reading is doing too much. Split into two weeks or move
  material to the slides.

## Pedagogy (from /teach)

- **One mission per reading.** The "What this reading covers" paragraph
  states a concrete capability the learner will gain. Every section
  should pay into that.
- **Zone of proximal development.** The Prerequisites list must be
  honest. Don't sneak in an idea the curriculum graph says hasn't been
  introduced. If a sneaky prereq is unavoidable, write a half-page
  primer section for it before using it.
- **Inline rationale.** Don't just state results — say *why* the result
  matters and *why* the convention is the way it is. ("The price is
  small: every point carries an extra `1`. The payoff is huge: …")
- **Feedback loop at the end.** Exercises must be answerable from the
  reading alone, and the "Going deeper" pointers must reference real
  course artifacts (worksheet, next lecture, project), NOT external
  books that the user hasn't been told to buy.

## How to run

```bash
# After authoring the .md file:
pnpm readings <course-slug> <filename-prefix>
# e.g.
pnpm readings cse457-26sp wk01

# Or all readings across all courses:
pnpm readings
```

The script writes PDFs to `public/c/<slug>/readings/<filename>.pdf`.
Link to them from the calendar / lecture page as
`/c/<slug>/readings/<filename>.pdf`.

The first run downloads `md-to-pdf` + a headless Chromium (~150MB) if
you haven't run Marp yet. Subsequent runs are fast (~2-4s per reading).

## Verifying

1. `pnpm readings <slug> <name>` succeeds.
2. Open the rendered PDF. Check:
   - Title + kicker render cleanly
   - Section numbering is consistent
   - Exercises don't break mid-question
   - Page count is in the 4-8 range
   - The reading stands alone — no `??` markers, no unfilled placeholders
3. Click through to the linked project / section worksheet from "Going
   deeper" — they should exist.

## Common mistakes

- **Citing a real textbook the course doesn't assign.** This course
  generates its own readings; don't reference Cormen / Bishop / Murphy
  unless the syllabus explicitly says they're optional.
- **Padding with fluff.** If a paragraph doesn't advance the mission,
  delete it. Textbook-calm voice doesn't mean wordy.
- **Skipping the worked example.** Every reading must include one fully
  worked numerical or step-by-step example. Pure exposition is not enough.
- **Forgetting prerequisites.** Always state what you assume the reader
  already knows. The curriculum graph says exactly this — copy from it.
- **Using `$math$` syntax.** It won't typeset. Use code blocks for
  equations.
