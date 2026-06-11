# Slide format

A slide deck is the **disposable artifact** for one lecture. Renders to
PDF via Marp and the shared `themes/coursemaker.css` theme. Spend
craft here LAST, after the reading is solid.

## Where it lives

`content/courses/<slug>/slides/wkNN-lN.md`. Built with
`pnpm slides <slug>`, output at
`public/c/<slug>/slides/wkNN-lN.pdf`.

## Frontmatter

```yaml
---
marp: true
theme: coursemaker
paginate: true
---
```

## Structure (12-18 slides for a 50-minute lecture)

1. **Title slide** — `<!-- _class: title -->`
   - H1: lecture topic
   - H2: week + course name
   - `<div class="meta">` line: term
2. **What we'll cover** — bullets mirroring the topic outline
3. **Section divider** — `<!-- _class: divider -->` with a single H1
4. **Body slides** — heading + 3-5 bullets each. One idea per slide.
   - `<!-- _class: two-col -->` to compare two alternatives
   - `<!-- _class: image-right -->` for screenshots/diagrams
5. **Take-aways slide** — 3-5 numbered points
6. **Quote slide** — `<!-- _class: quote -->` with `<blockquote>` and a
   `<footer>` attribution. Pick a real quote from a real source. Never
   invented.
7. **What's next** — section worksheet, reading, next lecture,
   assignment status

## Style rules

- **Headings:** sentence case
- **No emoji**
- **No em dashes (—).** Periods, commas, parentheses, colons.
- **No AI vocabulary** (see SKILL.md banned-word list)
- **Code blocks** for systems / programming examples
- **One quote per deck, from a real source.** Never invented.
- **Cite inline:** "Author (Year)" parenthetical in bullets

## Sources

A slide deck cites only from this week's `sources.json` slice. If a
claim needs a citation that isn't in the list, STOP and report. Do not
fabricate.
