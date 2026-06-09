---
name: coursemaker/create-course
description: Bootstrap a fresh course-website repo from the coursemaker template — clones the repo, runs the scaffolder, then walks the agent through filling one sample week (reading, lecture, section, assignment, tasks calendar) using /c/template as the visual reference. Use when the user says "make a course site", "start a new course from coursemaker", or "scaffold a coursemaker course".
---

# coursemaker/create-course — bootstrap a new course site

This skill turns a topic + term into a working course site at
`/c/<slug>` running on Next.js. It is the **starter** path: clone the
repo, scaffold, fill one sample week, ship. It does **not** generate a
full 10-week curriculum with researched citations — that is the in-repo
`coursemaker-create` skill, which runs after this one and is much
larger.

The skill assumes:

- You have `gh`, `git`, `node` (>= 22), and `pnpm` on the PATH.
- The user told you a slug, a title, and a term — or asked you to pick.

## When to use

- "Make me a course site about <topic>."
- "Start a new coursemaker course called <name>."
- "Scaffold a course with the coursemaker template."

If the user only said "make a course about X", ask for two things and
then proceed:

1. **Slug.** Kebab-case, ends in the term tag, e.g. `crypto-101-26au`
   for Autumn 2026 or `growth-marketing-27sp` for Spring 2027.
2. **Term.** A human label, e.g. `Autumn 2026` or `Self-paced`.

## Step 1 — Clone the repo

```bash
gh repo clone hughgramel/coursemaker <slug>
cd <slug>
pnpm install
```

If `gh` is not available, fall back to:

```bash
git clone https://github.com/hughgramel/coursemaker.git <slug>
cd <slug>
pnpm install
```

## Step 2 — Run the scaffolder

```bash
pnpm new-course \
  --slug <slug> \
  --title "<short title for sidebar>" \
  --full-title "<long title for metadata>" \
  --term "<term label>" \
  --weeks <6|8|10|12>
```

This emits **nine files** under `content/courses/<slug>/`:

- `course.config.ts` — slug, titles, term, hero, footer, flat sidebar nav
- `index.tsx` — registers home, syllabus, staff, tasks, four index pages
- `pages/home.tsx` — empty calendar stub using `WeekModule`
- `pages/syllabus.tsx` — high-level syllabus stub
- `pages/staff.tsx` — generic role description
- `pages/tasks.tsx` — localStorage-backed checklist with an empty `weeks` array
- `pages/lectures-index.tsx`, `pages/sections-index.tsx`, `pages/readings-index.tsx`, `pages/hw-index.tsx`

And registers the new course in `content/courses/index.tsx` between the
`COURSEMAKER:REGISTRY_START` / `_END` markers.

## Step 3 — Fill one sample week using `/c/template` as your reference

Open `pnpm dev` and visit `http://localhost:3000/c/template`. That
course is the canonical reference. Every file you are about to write
has a corresponding example under `content/courses/template/pages/`.

Write these four files for week 1 of `<slug>`, mimicking the template:

```
content/courses/<slug>/pages/readings/wk01.tsx   # ReadingPage with framing, body, exercises, takeaways, bibliography
content/courses/<slug>/pages/lectures/wk01-l1.tsx # LecturePage from a LectureSpec
content/courses/<slug>/pages/sections/wk01.tsx   # ProjectPage from a ProjectSpec (hands-on)
content/courses/<slug>/pages/hw/1.tsx             # ProjectPage from a ProjectSpec (deliverable + rubric)
```

Then:

1. **Edit `pages/home.tsx`.** Replace the stub `weeks` array with one
   real `CourseModule` for week 1 — one `dt`/`dd` row per day, linking
   to `readings/wk01`, `lectures/wk01-l1`, `sections/wk01`, and the
   HW1 handout. Use `kind: "label"` notes for assignment status
   (`HW1 out` / `HW1 due`).
2. **Edit `pages/tasks.tsx`.** Replace the commented stub in the
   `weeks` array with a real `WeekData` entry: theme, lectures
   (title only — the `n` is `1 | 2`), section title, milestones,
   assignments. The page auto-generates checkbox tasks.
3. **Edit `index.tsx`.** Import the four new pages and add their
   `pages[]` entries. The `segments` array maps directly to the URL:
   `["readings", "wk01"]` becomes `/readings/wk01`.

## Step 4 — Verify

```bash
pnpm typecheck   # must pass
pnpm build       # every page prerenders
pnpm dev         # then click through /c/<slug>
```

Open every nav entry in the sidebar. If any click 404s, your
`index.tsx` is missing the registration — fix it there, not in
`course.config.ts`.

## Step 5 — Report

Tell the user:

- `http://localhost:3000/c/<slug>` — local URL
- Which sample-week files you wrote
- That `/c/template` remains in the repo as the visual reference
- To run the in-repo `coursemaker-create` skill if they want a full
  researched 10-week curriculum (the "shipping" path, not the "starter"
  path this skill provides)

## What this skill explicitly does NOT do

- **Generate slide-deck PDFs.** Slides go through the Marp pipeline
  (`pnpm slides <slug>`). Run separately if needed.
- **Run a research pass over the topic.** No `WebSearch` for primary
  sources, no `tmp/coursemaker/<slug>-sources.json`. The starter
  skill emits one *sample* reading, not a researched textbook chapter.
- **Fan out parallel subagents per week.** One week, written inline.
- **Author the syllabus or staff page beyond the stub.** Those stay
  as the scaffolder emitted them; the user can fill in policies and
  staff names before the term begins.

For all of the above, run the in-repo `coursemaker-create` skill after
this one.

## Repo + license

- Source: <https://github.com/hughgramel/coursemaker>
- License: see `LICENSE` in the cloned repo.
- File an issue or PR upstream if you find a scaffolder bug.
