# coursemaker

A template + skill library that generates publishable course websites the
way UW computer-science classes do them — except the lectures, readings,
slides, syllabus, calendar, and hero art are produced end-to-end by Claude
Code from a single topic prompt.

Two things in one repo:

1. **A Next.js template** modeled on the "Just the Docs" theme used by UW
   CSE 457 — sidebar, calendar, syllabus, project handouts, per-week
   modules with status labels. Every course lives in its own data-driven
   folder under `content/courses/<slug>/`.
2. **Three Claude Code skills** that turn a topic prompt into ~90 generated
   files: a research-vetted curriculum graph, lecture pages, section
   worksheets, weekly readings (the course's textbook), per-lecture slide
   PDFs, assignment handouts, and a custom SVG hero — by dispatching one
   subagent per week and rendering through this template.

Look at [/c/cse457-26sp](https://github.com/hughgramel/coursemaker/tree/main/content/courses/cse457-26sp)
for a hand-built reference: a recreation of the
[UW CSE 457 Spring 2026 site](https://courses.cs.washington.edu/courses/cse457/26sp/).
The week-1 reading at `/c/cse457-26sp/readings/wk01-affine` is the shape
every generated reading takes.

## Quickstart

```bash
pnpm install
pnpm dev                       # http://localhost:3000
```

Have Claude Code build a whole course end-to-end:

```
/coursemaker-create Make a 10-week course on modern cryptography for CS sophomores.
```

That single invocation produces all of the following:

| Artifact | Count (10-week course) |
|----------|------:|
| Curriculum graph + source library JSON | 2 |
| Hero SVG | 1 |
| Syllabus page | 1 |
| Lecture pages (TSX) | 20 |
| Section worksheets (TSX) | 10 |
| Reading pages (TSX, the textbook) | 10 |
| Slide decks (Marp `.md`) | 20 |
| Slide PDFs (rendered) | 20 |
| Assignment handouts (TSX) | ~5 |
| Calendar wiring + page registry | 1 |
| Local commit + push to `origin/main` | 1 |

The skill pauses for your sign-off **twice** before any heavy fan-out runs
— once on the curriculum graph, once on the source library — so the whole
pipeline stays grounded in stuff you've actually approved.

If you prefer to scaffold manually:

```bash
pnpm new-course \
  --slug intro-crypto-26au \
  --title "Crypto 101" \
  --full-title "Cryptography 101" \
  --term "Autumn 2026" \
  --weeks 10
```

## How the create skill runs

Eleven steps. The skill file is at
`.claude/skills/coursemaker-create/SKILL.md`; Claude reads it and executes
each step in order when you invoke `/coursemaker-create <topic>`.

1. **Lock parameters** — slug, title, term, weeks. Write
   `tmp/coursemaker/<slug>-brief.json`.
2. **Build the curriculum graph** — 5 phases (Foundations → Core
   mechanics → Composition → Frontier → Synthesis), concept-level
   `depends_on` / `introduces` per week. Coherence-checked: no forward
   references, no duplicates.
   - **You sign off** before continuing.
3. **Research pass** — collect every concept id, WebSearch + WebFetch
   primary sources, verify URLs, record `author / year / host_kind /
   summary / key_quote / informs_weeks / informs_concepts`. Save to
   `tmp/coursemaker/<slug>-sources.json`. The rubric: *primary* means
   authored, dated, hosted by author or canonical venue, written by a
   practitioner with domain authority. For startup courses, Paul Graham
   essays count. For crypto, NIST RFCs. For systems, Stripe engineering
   blogs.
   - **You sign off** before continuing.
4. **Scaffold the course** via `pnpm new-course`.
5. **Commission the hero SVG** — one subagent, 1200×400 viewBox, static,
   1-2 colors from the coursemaker palette.
6. **Draft the syllabus** — `SyllabusPage` with grading / late policy /
   AI policy / "weekly readings ARE the textbook" note.
7. **Fan out one subagent per week** in parallel. Each writes 6 files:
   2 lecture pages, 1 section page, 2 Marp decks, 1 reading page. Each
   receives the slice of `sources.json` tagged with its week's concepts
   and is constrained to cite only from that slice.
8. **Fan out assignment subagents** in parallel — 4-5 across the quarter
   using `ProjectPage`.
9. **Build the slides** — `pnpm slides <slug>` renders every `.md` to PDF
   via Marp.
10. **Consolidate** — master rewrites `index.tsx` to register every
    page; rewrites `pages/home.tsx` so its calendar uses `WeekModule`
    with links to every reading, lecture, slide PDF, and section.
11. **Verify, commit, push** — `pnpm typecheck && pnpm build`, then
    `git add` + `git commit` + `git push origin main`.

Total wall-clock: typically 20-40 minutes, mostly bound by the parallel
subagent fan-out and the one-time Chromium download on first
`pnpm slides`.

## Skills

### `/coursemaker-create <topic>`

Master orchestrator (above). Defaults to 10 weeks; override with
`--weeks <N>` (6–12). No required external textbook — the per-week
readings ARE the textbook. Pedagogy follows the `/teach` overlay
(mission, ZPD, one-thing-per-lesson, cite-as-you-go, feedback loops).

### `/coursemaker-slides <course> <lecture>`

Writes one Marp slide deck for a single lecture using
`themes/coursemaker.css`, renders to PDF. Used directly and as a
sub-procedure by the create skill's per-week subagents.

### `/coursemaker-readings <course> <week>`

Writes the week's reading as a TSX page — an original 2,000–3,500-word
textbook chapter using the `<ReadingPage>` primitives (framing,
sections, exercises, callouts, takeaways, bibliography). Renders at
`/c/<slug>/readings/<name>`. Typography: Source Serif 4 body at 18px /
1.65 in a 38rem measure, sans headings, no card chrome. Looks like a
real textbook page.

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
│  ├─ ReadingPage.tsx                # ReadingPage + Framing + Exercise + ...
│  ├─ ProjectPage.tsx                # canonical project handout
│  ├─ LecturePage.tsx, StaffList.tsx
│  └─ icons.tsx
├─ content/courses/
│  ├─ index.tsx                      # registry with marker comments
│  └─ cse457-26sp/                   # example course
│     ├─ course.config.ts            # SiteConfig
│     ├─ index.tsx                   # page list
│     ├─ pages/                      # React renderers
│     │  └─ readings/                # weekly textbook chapters (TSX)
│     └─ slides/                     # Marp .md decks → PDFs
├─ types/course.ts                   # all data shapes
├─ themes/
│  └─ coursemaker.css                # Marp theme (slides)
├─ scripts/
│  ├─ new-course.mjs                 # scaffolder (--weeks N)
│  └─ build-slides.mjs               # Marp .md → PDF
├─ tmp/coursemaker/                  # curriculum + sources JSON, per course
├─ docs/research/                    # UW patterns, design references
└─ .claude/skills/
   ├─ coursemaker-create/SKILL.md    # master orchestrator
   ├─ coursemaker-slides/SKILL.md    # per-lecture deck author
   └─ coursemaker-readings/SKILL.md  # per-week reading author
```

## Curriculum shape (five phases, locked)

A course has **10 weeks of instruction** by default (override
`--weeks 6..12`). Every curriculum the master builds uses the same five
phases:

| Phase | Weeks (10-week default) | Job |
|-------|------------------------|-----|
| Foundations | 1-2 | Vocabulary + mental models. Smallest building blocks. |
| Core mechanics | 3-5 | The 2-3 essential techniques the rest depends on. |
| Composition | 6-7 | How the core pieces combine into real systems. |
| Frontier | 8-9 | Modern variants, edge cases, where the field is now. |
| Synthesis | 10 | Capstone project demo + review. |

Each week declares `depends_on: [concept-ids]` and `introduces: [...]`.
The coherence check runs before fan-out: every concept used in week N
must be introduced in some week M < N. You sign off on the curriculum
graph before any subagent runs.

The graph lives at `tmp/coursemaker/<slug>-curriculum.json` so you can
edit and re-run.

## Source rubric

Primary sources are *authored, dated, hosted by author or canonical
venue, written by a practitioner with domain authority.* By field:

| Field | Canonical sources |
|-------|-------------------|
| ML / AI / theoretical CS | arXiv, NeurIPS/ICML/ICLR, distill.pub, Berkeley/Stanford/MIT notes, Goodfellow/Bishop/Murphy |
| Systems engineering | USENIX, Stripe/Vercel/Notion/Google engineering blogs, conference talks, RFC drafts |
| Cryptography | Boneh & Shoup, Katz & Lindell, CRYPTO/EUROCRYPT, IETF RFCs |
| Programming languages | TC39 proposals, Rust RFCs, language designer essays, POPL/ICFP papers |
| Startups | paulgraham.com, founder essays (Patrick Collison, DHH, Sam Altman), YC essays, a16z/USV |
| Design / UX | Don Norman, Tufte, Refactoring UI, Nielsen Norman Group, Bringhurst |
| History | Primary documents, peer-reviewed history journals, archived letters |
| Economics | NBER/SSRN, key books, FRED data, central-bank speeches |
| Music / art theory | Schenker, Schoenberg, Berklee notes, Open Music Theory |

Rejected: Wikipedia, Medium spam, anonymous content, undated content,
aggregator clickbait, other LLMs' summaries of papers.

## Slide decks

Authored as Marp Markdown under `content/courses/<slug>/slides/<name>.md`
with the `coursemaker` theme.

```bash
pnpm slides                       # build all
pnpm slides cse457-26sp           # one course
pnpm slides cse457-26sp wk01      # one deck
```

PDFs land in `public/c/<slug>/slides/<name>.pdf`.

> **First-run note.** `pnpm slides` runs via `pnpm dlx`. The first
> invocation downloads `marp-cli` plus a headless Chromium (~150 MB,
> 1-2 min). Subsequent runs are 2-4 s per deck.

## Reading pages (the generated textbook, as web pages)

Each week has one reading — an original textbook chapter authored by the
create skill's per-week subagent as a TSX page. Body in Source Serif 4
at a 38rem measure, sans headings, no card chrome — looks like Marschner
& Shirley, not a vibe-coded shadcn dashboard.

Source: `content/courses/<slug>/pages/readings/wkNN.tsx`
Renders at: `/c/<slug>/readings/wkNN`

Authored using the `<ReadingPage>` primitives in
`components/ReadingPage.tsx` — `ReadingFraming`, `Exercise`, `Callout`,
`Takeaways`, `Bibliography`. No PDF pipeline; students who want paper
use the browser's Cmd-P → Save as PDF.

The example `cse457-26sp/pages/readings/wk01-affine.tsx` shows the
canonical structure (framing → numbered body sections → worked example
→ exercises → going deeper → takeaways → bibliography).

## Routes

| Route | What |
|-------|------|
| `/` | Course directory |
| `/c/<slug>` | Course home |
| `/c/<slug>/<page>` | Course inner page (lecture, section, reading, project) |
| `/design` | Design library (tokens, type, components) |
| `/template` | Creator guide + Claude prompt |

## Reference

- [`docs/research/UW_COURSE_PATTERNS.md`](docs/research/UW_COURSE_PATTERNS.md) — patterns extracted from CSE 444 / 446 / 457 / 344
- [`CREATING_COURSES.md`](CREATING_COURSES.md) — manual / CLI flow

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind v4 · TypeScript ·
Source Serif 4 (readings) · Marp (slides only) · No backend.

## License

MIT
