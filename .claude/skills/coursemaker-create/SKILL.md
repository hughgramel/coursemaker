---
name: coursemaker-create
description: Create a complete 10-12 week course site in this coursemaker repo from a topic prompt. Researches the subject, drafts a syllabus + calendar, fans out one subagent per week to write lectures, sections, readings, and assignments, then renders slides. Use when the user says "make a course on X", "build a course around Y", "create a class for Z", or "let's teach <topic>".
---

# coursemaker-create — the master course builder

You are about to build an entire course site — syllabus, calendar, ~30
lectures, ~10 sections, ~5 projects, hero art, and slide decks — inside this
coursemaker repo. The output is a publishable course page at
`/c/<slug>` plus PDFs under `public/c/<slug>/slides/`.

This skill orchestrates many subagents. You are the **master**: you scope
the curriculum, dispatch week-by-week subagents, then assemble.

## When to use

User says any of:
- "Make a course on cryptography."
- "Build a 12-week course around modern web performance."
- "Create a CS course covering distributed systems for undergrads."
- "Let's teach the history of mathematics."

If the topic is **vague** (e.g. "make a course on AI"), ask 2-3 clarifying
questions BEFORE doing anything:

- **Audience:** undergraduate intro? graduate seminar? practitioner upskill?
- **Length:** standard 10 weeks? compressed 6? expanded 15?
- **Emphasis:** theory-heavy? hands-on projects? readings + discussion?
- **Prerequisites the learner is assumed to have.**

Save the answers — they become the `CourseBrief` you pass to every subagent.

## Pre-flight

1. You must be at the repo root (where `package.json` and `content/courses/`
   live). If not, `cd` there.
2. Confirm:
   ```bash
   pnpm typecheck && pnpm build
   ```
   passes BEFORE you start. You will run these again at the end — any
   regression there means a subagent broke something.
3. Read `docs/research/UW_COURSE_PATTERNS.md` once — it captures the
   conventions every page in this template follows.

## Step 1 — Scope the curriculum (you, not a subagent)

Decide:
- **Slug.** Lowercase letters/digits/hyphens, e.g. `intro-cryptography-26au`.
- **Title** (sidebar): short, e.g. `Cryptography 101`.
- **Full title**: e.g. `Cryptography 101 — A One-Quarter Introduction`.
- **Term**: e.g. `Autumn 2026`. Use the current term if the user didn't say.

Then write a `CourseBrief` to a temp file at
`tmp/coursemaker/<slug>-brief.json`:

```json
{
  "slug": "intro-cryptography-26au",
  "title": "Cryptography 101",
  "fullTitle": "Cryptography 101 — A One-Quarter Introduction",
  "term": "Autumn 2026",
  "audience": "Undergrad CS sophomores",
  "prereqs": ["Discrete math", "Intro programming"],
  "weeks": 10,
  "emphasis": "Theory + practical implementations of foundational primitives",
  "goals": [
    "Explain what makes a cipher cryptographically secure",
    "Implement classical and modern symmetric ciphers",
    "Describe public-key cryptography from first principles",
    "Recognize side-channel attacks in real systems"
  ],
  "primaryReferences": [
    "Katz & Lindell, Introduction to Modern Cryptography (3e)",
    "Boneh & Shoup, A Graduate Course in Applied Cryptography (free online)"
  ]
}
```

Use **WebSearch** to find primary references — never invent them. Verify
each one exists.

## Step 2 — Draft the 10-12 week scope (you, with WebSearch)

For each week, output one row with:
- Week number, theme, 2 lecture topics, 1 section theme, reading citations,
  and the assignment status ("HW1 out", "HW1 due", "Project pitch", etc.).

Save as `tmp/coursemaker/<slug>-scope.md`. Show it to the user before
fanning out — they should sanity-check the arc.

## Step 3 — Scaffold the course (you)

```bash
pnpm new-course --slug <slug> --title "<title>" --full-title "<full>" --term "<term>"
```

Then **immediately** edit `content/courses/<slug>/course.config.ts` to:
- Set `hero` to `{ src: "/c/<slug>/hero.svg", alt: "<one-line concept>" }`.
  (We commission the SVG in Step 4.)
- Set up navGroups: Home, Syllabus, Calendar, Lectures, Sections, Assignments,
  Readings, Staff. Add a second group with external links the user mentioned.

## Step 4 — Commission the hero SVG (subagent, parallel with step 5)

Spawn ONE subagent with this brief:

> Author `public/c/<slug>/hero.svg` — a single static SVG, 1200×400 viewBox,
> that visually communicates the course topic in a calm UW-textbook style.
> No animation. No watermarks. Use 1-2 colors from the coursemaker palette
> (`#7253ed`, `#d93c3c`, `#2869e6`, `#10ac7d`). Keep it under 30KB. Save the
> file and exit.

If the topic is abstract (e.g. "philosophy of mind"), tell the subagent to
use a metaphorical visual (a brain made of thought-bubble waves, a
Möbius-strip-as-a-question-mark, etc.) rather than something literal that
won't render well.

## Step 5 — Write the syllabus + index (you)

Replace `content/courses/<slug>/pages/syllabus.tsx` with a `SyllabusPage`
using the `SyllabusSpec` type:

```tsx
import { SyllabusPage } from "@/components/SyllabusPage";
import type { SyllabusSpec } from "@/types/course";

const spec: SyllabusSpec = {
  overview: ["…", "…"],
  logistics: { meeting: "…", format: "…", location: "TBD" },
  staff: [{ name: "TBD", role: "Instructor" }],
  prerequisites: [...],
  gettingHelp: [
    "Post to Ed Discussion for content questions",
    "Office hours for 1:1 help",
    "Email the instructor only for personal matters",
  ],
  grading: {
    breakdown: [
      { item: "Assignments", weight: "40%" },
      { item: "Midterm", weight: "20%" },
      { item: "Final project", weight: "30%" },
      { item: "Participation", weight: "10%" },
    ],
    latePolicy: "Late submissions lose 10% per day, up to 3 days.",
    aiPolicy: "Acceptable for conceptual study; disclose use on every submission.",
  },
  resources: {
    required: [{ title: "Katz & Lindell — Introduction to Modern Cryptography (3e)" }],
    optional: [{ title: "Boneh & Shoup — A Graduate Course in Applied Cryptography", href: "https://toc.cryptobook.us/" }],
  },
};

export function SyllabusPage() { return <SyllabusPage spec={spec} />; }
```

(Adjust the names so they don't shadow each other.)

## Step 6 — Fan out one subagent per week

This is the big parallel step. For each week N (1..weeks), spawn ONE
subagent with the SAME `CourseBrief` plus the scope row for that week.

Use parallel Agent tool calls — issue them all in one message. Each
subagent's brief should be self-contained (it doesn't see the conversation):

```
You are authoring Week N of a course called <fullTitle> (<term>) for
<audience>. The course brief is below. Your week's scope is:

  Theme: <theme>
  Lectures: <topic 1>, <topic 2>
  Section: <section theme>
  Readings: <citations>
  Assignment status: <out/due/...>

Produce the following files in this repo:

  1. content/courses/<slug>/pages/lectures/wkNN-l1.tsx — LecturePage spec
  2. content/courses/<slug>/pages/lectures/wkNN-l2.tsx — LecturePage spec
  3. content/courses/<slug>/pages/sections/wkNN.tsx    — section worksheet
  4. content/courses/<slug>/slides/wkNN-l1.md          — Marp deck
  5. content/courses/<slug>/slides/wkNN-l2.md          — Marp deck

Use the SyllabusPage / LecturePage / ProjectPage primitives from
@/components/*. Use the coursemaker Marp theme for slides (see
.claude/skills/coursemaker-slides/SKILL.md — read it first).

For content: use WebSearch + WebFetch to gather primary sources. Cite
inline. Do NOT write content from parametric knowledge. Each lecture
should follow /teach principles — one core mission, ZPD-appropriate,
inline citations, end with discussion questions or worksheet pointer.

After authoring all five files, register them in
content/courses/<slug>/index.tsx (add entries to the `pages` array).
Run `pnpm typecheck` before exiting. Return a one-line summary of what
you produced.
```

If the user wants a smaller course (≤ 6 weeks) you can keep this serial;
otherwise parallel is much faster.

## Step 7 — Write the assignments

For each assignment in the scope (typically 4-5 across the quarter), spawn
ONE subagent per assignment:

> Author `content/courses/<slug>/pages/hw/<n>.tsx` as a ProjectPage using
> ProjectSpec. The assignment is <title>, themed around <topic>. Cover
> Overview, Goals, Background, Instructions (numbered tasks), Deliverables,
> Rubric (sums to 100), and Hints. Cite primary references. Register in
> the course index.tsx.

Run these in parallel with Step 6 — they're independent.

## Step 8 — Build the slides

```bash
pnpm slides <slug>
```

This runs Marp via `pnpm dlx @marp-team/marp-cli` over every deck and writes
PDFs to `public/c/<slug>/slides/`. The first run may take a couple of minutes
while marp-cli + chromium are fetched.

## Step 9 — Assemble the calendar

Replace `content/courses/<slug>/pages/home.tsx` so its Calendar section uses
either:
- `WeekModule` (compact Just-the-Docs style, good for project-heavy courses), OR
- `CalendarTable` (wide table, good for theory courses with lots of readings).

Each row should LINK out to:
- Slides PDF: `/c/<slug>/slides/wkNN-l1.pdf`
- Lecture notes: `/c/<slug>/lectures/wkNN-l1`
- Section: `/c/<slug>/sections/wkNN`
- Reading citations as inline `<a>` tags

## Step 10 — Verify

```bash
pnpm typecheck   # must pass
pnpm build       # must pass; every page prerenders
pnpm dev         # spot-check /c/<slug> in a browser
```

Open `/c/<slug>` and click through:
- syllabus renders
- calendar links resolve
- a few lecture pages render
- one slide PDF opens

If a subagent left a typecheck error, fix it inline (don't re-dispatch — the
errors are usually trivial). If a Marp deck failed, re-run `pnpm slides
<slug> <deck>`.

## Step 11 — Commit

```bash
git add content/courses/<slug>/ public/c/<slug>/
git -c commit.gpgsign=false commit -m "feat(courses): add <slug> — <fullTitle>"
```

(Do NOT push without the user's go-ahead. They control when courses go live.)

## Pedagogy reminders (the /teach overlay)

Every subagent and every primary file in this skill should follow these:

- **Mission.** State what the learner will be able to do at the end. Tie
  every lecture back to that.
- **Zone of proximal development.** Assume only the prereqs + previous weeks.
  When a concept is needed but not yet covered, write a primer paragraph in
  the lecture page instead of skipping.
- **One thing.** Each lecture has one core idea. The take-aways slide
  echoes the mission in 3-5 numbered points.
- **Knowledge from trusted sources.** Cite as you go. NEVER write content
  from memory.
- **Feedback loop.** Every lecture ends with discussion questions; every
  section ends with a worksheet + solutions.
- **Wisdom.** Point students at a real community in the syllabus — an
  arXiv reading group, a subreddit, a Meetup, the relevant CS conference's
  student volunteer program.

## Common failure modes

- **Topic too broad.** "Make a course on math." Ask for narrowing first.
- **Hero SVG is animated.** This template uses static art per course. If
  the subagent produces SMIL or CSS animations, reject and respawn.
- **Subagents write competing entries in `index.tsx`.** If two subagents
  edit it simultaneously you'll get merge conflicts. Solution: have each
  subagent write to its own scope (no index.tsx edits), and YOU do one
  consolidated `index.tsx` edit at the end.
- **Slides built from memory.** Read each rendered PDF before committing.
  If a quote isn't real, the deck is wrong.
- **Calendar links 404.** After step 9 click every link.

## When you're done

Tell the user:
- Number of weeks, lectures, sections, assignments, slide decks
- URL to view: `pnpm dev` → `http://localhost:3000/c/<slug>`
- Where the slides live: `public/c/<slug>/slides/`
- What still needs human input (real instructor names, real office hours,
  real Ed/Gradescope links)
