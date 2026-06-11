# generate-course

Turn a single topic prompt into a publishable course site.

One Claude Code skill, one Next.js app. The skill researches, writes,
and registers a syllabus, ten weeks of lectures and readings, hands-on
sections, slide PDFs, four assignments and a capstone, a curriculum
graph, a vetted source library, a per-course glossary, and a tasks
page that learners use as their day-to-day driver. The Next.js app
renders all of it at `/c/<slug>`.

## Philosophy

- **Knowledge, skills, wisdom are three different things.** Knowledge
  comes from primary sources, never the model. Skills come from
  interactive sections with tight feedback loops. Wisdom comes from
  real-world communities the syllabus points at.
- **The reading is the textbook.** Original writing in TSX. No
  external book to buy. Slides are disposable; readings are durable.
- **Storage strength over fluency.** Retrieval practice, spacing,
  interleaving, applied at the exercise and section level.
- **No fakery.** No invented instructor names, office hours, Discord
  URLs, grading percentages, or sources. The model is a scout, not an
  oracle.

## Use it

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

Then, inside Claude Code, ask for a course:

```
/generate-course Make a 10-week course on modern cryptography for CS sophomores.
```

Or scaffold an empty course you'll author by hand:

```bash
pnpm new-course --slug my-course-26au \
  --title "My Course" \
  --full-title "My Course: a one-quarter introduction" \
  --term "Autumn 2026" \
  --weeks 10
```

Sample courses in the repo:

- `/c/b2c-10k-mrr-26au`, 10-week B2C to $10k MRR
- `/c/grow-on-x-26au`, 6-week creator growth
- `/c/landing-the-offer-26au`, 10-week SWE job search
- `/c/design-for-builders-26au`, 10-week design for builders
- `/c/cse457-26sp`, hand-built CS course (the visual reference)

## What every generated course contains

- 1 syllabus (high-level roadmap, no fake contract)
- 10 weeks of (1 reading, 1 section, 2 lectures, 2 slide PDFs)
- 4-6 assignments plus a capstone
- A curriculum graph at `tmp/<slug>-curriculum.json`
- A source library at `tmp/<slug>-sources.json`
- A communities list at `tmp/<slug>-communities.json`
- A glossary at `/c/<slug>/glossary`
- A tasks page learners check off as they go

## How the skill is structured

`/.claude/skills/generate-course/`

- `SKILL.md` — the whole pedagogy and the build flow
- `MISSION-FORMAT.md` — how to write the course's mission
- `SOURCES-FORMAT.md` — how to record knowledge and wisdom sources
- `GLOSSARY-FORMAT.md` — how to compress course language
- `READING-FORMAT.md` — how to write a reading
- `SLIDE-FORMAT.md` — how to write a slide deck

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Marp (for slide PDFs)
- Mermaid (for diagrams in readings)
- Deployed on Vercel

## Credit

The teaching workspace pattern (mission, sources, glossary, knowledge /
skills / wisdom split, lessons disposable / reference durable, never
trust parametric knowledge) is adapted from
[Matt Pocock's `teach` skill](https://github.com/mattpocock/skills/tree/main/skills/productivity/teach).
The course-site visual style is adapted from the University of
Washington CSE 457 (Computer Graphics) Just-the-Docs course site.
