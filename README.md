# coursemaker

A template + skill library for generating publishable course websites the
way UW computer science classes do them.

Two things in one repo:

1. **A Next.js template** modeled on the "Just the Docs" theme used by UW
   CSE 457 — sidebar, calendar, syllabus, project handouts, per-week
   modules with status labels. Every course lives in its own data-driven
   folder under `content/courses/<slug>/`.
2. **A set of Claude Code skills** that *write* a complete course from a
   topic prompt — research, syllabus, 10 weeks of lectures + sections,
   per-week reading PDFs (the generated textbook), per-lecture slide
   decks, an SVG hero — by dispatching one subagent per week and
   rendering through this template.

Look at `/c/cse457-26sp` (after `pnpm dev`) for a hand-built reference:
a recreation of the
[UW CSE 457 Spring 2026 site](https://courses.cs.washington.edu/courses/cse457/26sp/).

## Quickstart

```bash
pnpm install
pnpm dev                       # http://localhost:3000
```

Scaffold a course manually:

```bash
pnpm new-course \
  --slug intro-crypto-26au \
  --title "Crypto 101" \
  --full-title "Cryptography 101" \
  --term "Autumn 2026" \
  --weeks 10
```

Or have Claude Code build the whole thing end-to-end:

```
/coursemaker-create Make a 10-week course on modern cryptography for CS sophomores.
```

The skill researches the topic, builds a coherence-checked 10-week
curriculum graph, asks you to sign off, then fans out one subagent per
week to write lectures + slides + readings + sections, renders all PDFs,
wires the calendar, and runs `pnpm build`.

## Skills

### `/coursemaker-create <topic>`

Master orchestrator.

1. Locks parameters (slug, title, term, weeks).
2. Researches the topic (WebSearch + WebFetch).
3. Builds a **10-week curriculum graph** with five fixed phases —
   Foundations → Core mechanics → Composition → Frontier → Synthesis —
   and concept-level `depends_on` / `introduces` per week.
4. Runs a coherence check (no forward references; every prereq satisfied).
5. **Shows you the graph and waits for sign-off.**
6. Scaffolds the course, commissions a hero SVG, drafts the syllabus.
7. **Fans out one subagent per week** to write lectures + slides +
   readings + sections + assignments in parallel.
8. Renders all PDFs, wires the calendar, runs `pnpm typecheck && pnpm build`.

Defaults to 10 weeks; override with `--weeks <N>` (6-12).
No required external textbook — the per-week readings ARE the textbook.
Pedagogy follows `/teach` (mission, ZPD, one-thing-per-lesson,
cite-as-you-go, feedback loops).

### `/coursemaker-slides <course> <lecture>`

Writes one Marp slide deck for a single lecture using
`themes/coursemaker.css`, renders to PDF. Used both directly and as a
tool by the create skill's per-week subagents.

### `/coursemaker-readings <course> <week>`

Writes the week's reading handout — an original 4-8 page textbook
chapter — and renders to PDF via `themes/coursemaker-reading.css`. The
course has no external textbook; these readings are it.

## Architecture

```
.
├─ app/
│  ├─ page.tsx                       # course directory
│  ├─ design/                        # design library showing all primitives
│  ├─ template/                      # how-to + Claude prompt
│  └─ c/[course]/[[...slug]]/        # per-course dynamic route
├─ components/
│  ├─ Sidebar.tsx, SearchBar.tsx, MainLayout.tsx
│  ├─ Hero.tsx                       # renders the per-course SVG
│  ├─ AnchorHeading.tsx, Label.tsx, WeekModule.tsx
│  ├─ SyllabusPage.tsx               # canonical UW syllabus layout
│  ├─ ReadingPage.tsx                # ReadingPage + Exercise + Takeaways + ...
│  ├─ ProjectPage.tsx                # canonical project handout
│  ├─ LecturePage.tsx, StaffList.tsx
│  └─ icons.tsx
├─ content/courses/
│  ├─ index.tsx                      # registry with marker comments
│  └─ cse457-26sp/                   # example course
│     ├─ course.config.ts            # SiteConfig
│     ├─ index.tsx                   # page list
│     ├─ pages/                      # React renderers for each page
│     │   └─ readings/                # weekly readings (TSX, not PDFs)
│     └─ slides/                     # Marp .md decks → PDFs (only PDFs)
├─ types/course.ts                   # all data shapes
├─ themes/
│  └─ coursemaker.css                # Marp theme (slides)
├─ scripts/
│  ├─ new-course.mjs                 # scaffolder (--weeks N)
│  └─ build-slides.mjs               # Marp .md → PDF
├─ docs/research/                    # behavior + topology + UW patterns
└─ .claude/skills/
   ├─ coursemaker-create/SKILL.md    # master orchestrator
   ├─ coursemaker-slides/SKILL.md    # per-lecture deck author
   └─ coursemaker-readings/SKILL.md  # per-week reading author
```

## Slide decks

Authored as Marp Markdown under `content/courses/<slug>/slides/<name>.md`
with the `coursemaker` theme.

```bash
pnpm slides                       # build all
pnpm slides cse457-26sp           # one course
pnpm slides cse457-26sp wk01      # one deck
```

PDFs land in `public/c/<slug>/slides/<name>.pdf`.

## Readings (the generated textbook, as web pages)

Each week has one reading — an original 2,000–3,500-word textbook
chapter authored by the create skill's per-week subagent as a TSX page.

Source: `content/courses/<slug>/pages/readings/wkNN.tsx`
Renders at: `/c/<slug>/readings/wkNN`

Authored using the `<ReadingPage>` primitives in
`components/ReadingPage.tsx` — `ReadingFraming`, `Exercise`, `Callout`,
`Takeaways`, `Bibliography`. Same prose typography as every other page,
same routing, same search index. No PDF pipeline; students who want
paper use the browser's Cmd-P → Save as PDF.

The example `cse457-26sp/pages/readings/wk01-affine.tsx` shows the
canonical structure (framing → numbered body sections → worked example
→ exercises → going deeper → takeaways → bibliography).

> **First-run note for slides.** `pnpm slides` runs via `pnpm dlx`. The
> first invocation downloads `marp-cli` plus a headless Chromium
> (~150 MB, ~1-2 min). Subsequent runs are 2-4s per deck.

## Weeks & curriculum shape

A course has **10 weeks of instruction** by default (override with
`--weeks 6..12`). The master skill builds every curriculum on the same
five phases:

| Phase | Weeks (10-week default) | Job |
|-------|------------------------|-----|
| Foundations | 1-2 | Vocabulary + mental models. Smallest building blocks. |
| Core mechanics | 3-5 | The 2-3 essential techniques the rest depends on. |
| Composition | 6-7 | How the core pieces combine into real systems. |
| Frontier | 8-9 | Modern variants, edge cases, where the field is now. |
| Synthesis | 10 | Capstone project demo + review. |

Each week declares `depends_on: [concept-ids]` and `introduces: [...]`.
The master runs a coherence check before fanning out: every concept used
in week N must be introduced in some week M < N. You sign off on the
curriculum graph before any subagent runs.

The graph lives at `tmp/coursemaker/<slug>-curriculum.json` so you can
edit and re-run.

## Per-course content

A course is `course.config.ts` (sidebar, footer, hero) plus an
`index.tsx` that lists pages. Each page is a React component using the
prebuilt primitives:

```tsx
// content/courses/<slug>/pages/syllabus.tsx
import { SyllabusPage } from "@/components/SyllabusPage";
import type { SyllabusSpec } from "@/types/course";

const spec: SyllabusSpec = { /* ... */ };
export function Syllabus() { return <SyllabusPage spec={spec} />; }
```

## Routes

| Route | What |
|-------|------|
| `/` | Course directory |
| `/c/<slug>` | Course home |
| `/c/<slug>/<page>` | Course inner page |
| `/design` | Design library (tokens, type, components) |
| `/template` | Creator guide + Claude prompt |

## Reference

- [`docs/research/UW_COURSE_PATTERNS.md`](docs/research/UW_COURSE_PATTERNS.md) — patterns extracted from CSE 444 / 446 / 457 / 344
- [`CREATING_COURSES.md`](CREATING_COURSES.md) — manual / CLI flow

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 · TypeScript ·
Marp (slides only) · No backend. Readings are first-class pages.

## License

MIT
