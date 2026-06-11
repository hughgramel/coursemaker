---
name: generate-course
description: Generate a complete, publishable course site from a single topic prompt. Produces a syllabus, 10 weeks of lectures, readings, sections, slide PDFs, assignments, a vetted source library, a glossary, and a wired Tasks page. Use when the user says "make a course on X", "build a 10-week course around Y", "create a CS course covering Z", or invokes /generate-course.
---

# generate-course — build the whole course site

This skill produces a stateful **teaching workspace** at `/c/<slug>` —
syllabus, week-by-week calendar, ~20 lectures, ~10 sections, ~10 readings,
~5 assignments, slide PDFs, hero art, curriculum graph, sources library,
glossary — all rendered as real Next.js pages and downloadable PDFs.

You are the master. You research, build the curriculum graph, get user
sign-off, fan out per-week subagents, then assemble.

## Pedagogy (the why before the how)

Read this section before doing anything mechanical. Every later decision
traces back here.

### Knowledge, Skills, Wisdom

Deep learning needs three things, and the course must produce all three:

- **Knowledge** comes from high-trust primary sources. Lives in the
  course's `sources.json` and is cited inline in every reading.
- **Skills** come from interactive feedback loops. Lives in the section
  worksheets and assignments. Each one builds toward an Apply / Create
  outcome.
- **Wisdom** comes from real-world communities. The course does NOT
  pretend to be one. Every course's syllabus points learners to real
  places (subreddits, Discord servers, conferences, in-person groups,
  newsletters by named practitioners) where they can test their skills
  against humans who aren't reading from this script.

### Never trust parametric knowledge

The model is a scout, not an oracle. Before any week is written, a
sourcing pass populates `sources.json`. Subagents cite only from that
library. If a subagent needs a source not in the list, it stops and
reports rather than inventing one. This rule has no exceptions.

### Storage strength over fluency strength

Fluency (in-the-moment recall) feels like mastery and isn't. The course
is designed for storage strength using three concrete tools, all derived
from Bjork's desirable-difficulty research:

- **Retrieval practice.** Every reading ends with exercises that force
  the learner to recall the material, not just recognise it. Every
  section opens with a five-minute retrieval drill on the prior week.
- **Spacing.** The calendar distributes practice. A concept introduced
  in week 3 is exercised again in week 5 and week 7.
- **Interleaving.** Sections in later weeks deliberately mix earlier
  concepts. The week 6 section problem set draws from weeks 3, 4, and 5
  in shuffled order.

### Zone of proximal development = the curriculum graph

Every week declares `depends_on` (concepts the learner already has) and
`introduces` (new concepts). The graph is the ZPD made explicit. No
week's lecture, reading, section, or exercise may use a concept that
isn't in `depends_on` or an earlier week's `introduces`. Forward
references are a bug, caught at the coherence-check stage.

### Lessons disposable, reference durable

Lectures and slides come and go. The **reading is the textbook chapter
for the week** — the durable artifact a learner returns to. Reference
documents (per-course glossary, syllabus, study guide) are also
durable. Allocate craft accordingly: readings get the most editorial
care, slides the least.

### Coverage is not learning

A page that lists every relevant concept is not a course. A course
forces the learner to *do* something with each concept and then come
back to it. If a week introduces five concepts but the section
exercises only one of them, the other four are throat-clearing. Either
exercise them or drop them from `introduces`.

## When to use

User says any of:
- "Make a course on cryptography."
- "Build a 10-week course around modern web performance."
- "Create a CS course covering distributed systems for undergrads."
- "Let's teach the history of mathematics."
- Invokes `/generate-course`.

If the topic is **vague** ("make a course on AI"), interview the user
BEFORE writing anything. A bad mission is worse than no mission.

- **Audience.** Undergraduate intro? Graduate seminar? Practitioner upskill?
- **Length.** Default is **10 weeks of instruction**. Override with
  `--weeks <N>`, clamped to [6, 12].
- **Emphasis.** Theory-heavy? Hands-on projects? Readings + discussion?
- **Prerequisites the learner is assumed to have.**

## The course mission

Before any artifact is written, write `tmp/<slug>-mission.md`:

```md
# Mission: <Course title>

## Why
1-3 sentences. The concrete real-world capability the cohort is chasing.
What changes in their life or work when they have this skill? Avoid
abstract framings like "to understand X". Push for the underlying
outcome.

## Success looks like
- A specific, observable thing a learner will be able to do at the end
- Another specific thing
- ...

## Constraints
- Time, budget, prior commitments, learning preferences, anything that
  bounds the approach

## Out of scope
- Adjacent topics this course deliberately does not chase. Protects ZPD.
```

One mission per course. Concrete over abstract: "Ship a Rust CLI to my
team" beats "learn Rust." Push back on vagueness. The mission is a
compass, not a plan; keep it under a screen.

Every later decision (what each week tackles, which sources to surface,
which exercises to design) must trace back to this document.

## Pre-flight

1. You must be at the repo root (where `package.json` and
   `content/courses/` live).
2. Confirm `pnpm typecheck && pnpm build` passes BEFORE you start. Any
   regression at the end means a subagent broke something.
3. Read `docs/research/UW_COURSE_PATTERNS.md` once for the visual design
   conventions (CSE 457 style).
4. The course has no required external textbook. Weekly readings ARE
   the textbook.

## Step 1 — Lock the parameters

Write `tmp/<slug>-brief.json`:

```json
{
  "slug": "intro-cryptography-26au",
  "title": "Cryptography 101",
  "fullTitle": "Cryptography 101: A One-Quarter Introduction",
  "term": "Autumn 2026",
  "weeks": 10,
  "audience": "Undergrad CS sophomores",
  "prereqs": ["Discrete math", "Intro programming"],
  "emphasis": "Theory plus practical implementations of foundational primitives",
  "goals": [
    "Explain what makes a cipher cryptographically secure",
    "Implement classical and modern symmetric ciphers",
    "Describe public-key cryptography from first principles",
    "Recognise side-channel attacks in real systems"
  ]
}
```

`fullTitle` uses a colon, not an em dash. `goals` are 4-6 concrete
capabilities (the same form as the mission's "Success looks like"
items).

## Step 2 — Build the curriculum graph

Produce `tmp/<slug>-curriculum.json` with this shape and get user
sign-off before fanning out:

```json
{
  "slug": "intro-cryptography-26au",
  "phases": [
    { "name": "Foundations",    "weeks": [1, 2] },
    { "name": "Core mechanics", "weeks": [3, 4, 5] },
    { "name": "Composition",    "weeks": [6, 7] },
    { "name": "Frontier",       "weeks": [8, 9] },
    { "name": "Synthesis",      "weeks": [10] }
  ],
  "weeks": [
    {
      "n": 1,
      "phase": "Foundations",
      "theme": "Information-theoretic security and classical ciphers",
      "outcomes": [
        { "verb": "Apply",   "statement": "Break a Vigenère ciphertext using frequency analysis" },
        { "verb": "Explain", "statement": "State what perfect secrecy guarantees and what it costs" },
        { "verb": "Analyze", "statement": "Distinguish a working threat model from a wishful one" }
      ],
      "lectures": [
        { "title": "What 'secure' means", "topics": ["Threat models", "Perfect secrecy", "Shannon's theorem"] },
        { "title": "Caesar to Vigenère",  "topics": ["Substitution ciphers", "Frequency analysis", "Why Vigenère breaks"] }
      ],
      "section":    "Frequency-analysis worksheet on real ciphertext",
      "depends_on": [],
      "introduces": ["threat-model", "perfect-secrecy", "substitution-cipher", "frequency-analysis"],
      "assignment": { "kind": "out", "code": "HW1", "title": "Break a Vigenère ciphertext" }
    }
  ],
  "synthesis": {
    "kind": "capstone-project",
    "title": "Implement and break a small cryptosystem",
    "outWeek": 7,
    "dueWeek": 10
  }
}
```

### Rules (non-negotiable)

1. **Phase shape.** Five phases, always. For 10 weeks, distribute
   **2 / 3 / 2 / 2 / 1**:
   - Foundations: vocabulary and mental models
   - Core mechanics: 2-3 essential techniques the rest depends on
   - Composition: how the core pieces combine into real systems
   - Frontier: modern variants, edge cases, where the field is now
   - Synthesis: capstone and review (always exactly 1 week)
2. **Concept ids** are kebab-case strings. Be consistent.
3. **Backward-design outcomes.** Each week declares 2-4 outcomes. Each
   outcome is `{verb, statement}` using Bloom-revised verbs:
   - Remember: define, list, recall, name, state, identify
   - Understand: explain, describe, summarize, classify, interpret
   - Apply: apply, calculate, demonstrate, implement, solve, use
   - Analyze: analyze, compare, contrast, differentiate, examine
   - Evaluate: appraise, argue, assess, critique, judge, justify
   - Create: create, design, construct, develop, formulate, compose
4. **Coherence check** (mental, then in code):
   - Every id in any week's `depends_on` appears in some earlier week's
     `introduces`. No forward references.
   - No concept is introduced twice.
   - Every week has at least one Apply-or-above outcome.
   - The Synthesis week has at least one Create-level outcome.
   - The Synthesis week's `depends_on` is the union of the most
     important concepts across the rest.
5. **Lectures per week.** Default 2. If a topic is too thin, the second
   lecture is a guided worked example.
6. **One section per week.** Hands-on, not a re-lecture. The feedback
   loop.
7. **Assignment cadence.** 4-6 across the quarter, each "out for two
   weeks, due in week 3 of being out." Capstone separate.
8. **Themes evolve.** Adjacent weeks within a phase build toward the
   phase's purpose.

### Show the curriculum to the user as prose

Render a short markdown summary (humans read prose), get sign-off,
then proceed.

## Step 2.5 — The sourcing pass

This is the gate that turns "vibes research" into traceable knowledge.

The audience is **learners, not researchers**. Prioritise sources that
teach: YouTube lectures by real instructors, practitioner essays,
engineering blogs, well-known online tutorials, free book chapters
hosted by the author. Academic papers are a fallback.

### What counts as a high-trust source

A good source is **authored, dated, hosted by the author or a canonical
venue, by a practitioner with domain authority.**

Priority order:

1. **YouTube lectures** by real instructors. For most topics this is
   the highest-leverage source. By field:
   - Math: 3Blue1Brown, Numberphile, MIT OCW math
   - Physics: Veritasium, MinutePhysics, MIT 8.01/8.02
   - CS: MIT 6.006, Stanford CS, Computerphile, Fireship
   - ML/AI: Karpathy's neural-nets-zero-to-hero, Stanford CS231n
   - Biology/chemistry: Crash Course, Kurzgesagt for primers, MIT OCW
   - History: Crash Course, OverSimplified, Yale/Stanford lecture series
   - Economics: Marginal Revolution University, Khan Academy
   - Design: Refactoring UI talks, Don Norman talks, Figma Config
   - Engineering practice: QCon, Strange Loop, GOTO, USENIX
   - Startups: YC Startup School, How to Start a Startup
2. **Curated YouTube collections** via classcentral.com/subject/<topic>.
3. **Practitioner essays and engineering blogs.** Field-appropriate
   authority blogs (paulgraham.com, Stripe Press, Julia Evans, Dan Luu,
   Lilian Weng, Karpathy posts, language designer essays).
4. **Free online textbook chapters.** When the field has a canonical
   one freely accessible (Boneh and Shoup, Bitcoin paper, Goodfellow et
   al., SICP, the Rust Book).
5. **Authored explainers and interactive content.** distill.pub, The
   Pudding, Bartosz Ciechanowski, Red Blob Games, Worrydream.
6. **Original primary documents.** For history, philosophy, classics.
7. **Academic papers.** Only when the field genuinely requires the
   primary literature.

**Reject:**
- Wikipedia (orientation only, never citation-worthy)
- Medium spam, listicles ("10 things every X must know")
- Anonymous or undated content
- LLM-generated summaries of anything (find the original)
- Aggregator clickbait
- YouTube videos under 5,000 views with unclear authorship

### Run the pass

For each concept id in the curriculum (the union of every week's
`introduces`), run 2-3 WebSearch queries, then WebFetch the top 3-5
hits to confirm they resolve. For each surviving source, record:

```json
{
  "id": "3b1b-essence-linear-algebra",
  "title": "Essence of linear algebra (chapter 1)",
  "author": "Grant Sanderson (3Blue1Brown)",
  "year": 2016,
  "url": "https://youtube.com/watch?v=...",
  "url_verified": true,
  "kind": "youtube-lecture | engineering-blog | founder-essay | free-textbook | interactive-explainer | primary-document",
  "host_kind": "authored-channel | university-channel | engineering-blog | founder-essay | free-textbook | interactive-explainer | primary-document",
  "summary": "One-paragraph plain-text summary of what the source teaches.",
  "duration_or_length": "10:58 video | 12-page essay",
  "informs_weeks": [1, 2],
  "informs_concepts": ["vector", "linear-combination"],
  "informs_outcomes": ["Apply: compute a linear combination"]
}
```

Save to `tmp/<slug>-sources.json`. Aim for **3-6 sources per week**, at
least one YouTube lecture per week.

Surface gaps explicitly: if a week has weak coverage, name it before
proceeding. Better five sharp sources than thirty mediocre ones.

Show the user a prose summary, leading with the videos. Wait for
sign-off.

### Wisdom: communities

Alongside sources, record the **real communities** the syllabus will
point learners to. For each:

```json
{
  "id": "r-weightroom",
  "name": "r/weightroom",
  "kind": "subreddit | discord | conference | newsletter | in-person",
  "url": "https://reddit.com/r/weightroom",
  "use_for": "Programme critique, plateau troubleshooting.",
  "notes": "High-signal, moderated against bro-science."
}
```

Stored at `tmp/<slug>-communities.json`. These appear in the syllabus
under "Where to find people who aren't this site."

## Step 3 — Scaffold the course

```bash
pnpm new-course --slug <slug> --title "<title>" \
  --full-title "<full>" --term "<term>" --weeks <weeks>
```

Then edit `content/courses/<slug>/course.config.ts`:
- Set `hero` to `{ src: "/c/<slug>/hero.svg", alt: "<one-line concept>" }`.
- Confirm `weeks: <N>` is present.
- Set up ONE navGroup, flat (no children): Home, Tasks, Syllabus, Lectures,
  Sections, Assignments, Readings, Glossary.
- Every nav parent with sub-content MUST have its own index page.
- No Staff nav item until the user names real instructors.
- Footer: single attribution line.

## Step 4 — Commission the hero SVG (subagent)

Spawn ONE subagent:

> Author `public/c/<slug>/hero.svg` — single STATIC SVG, 1200×400 viewBox,
> calm textbook style, no animation, 1-2 colors from the palette
> (`#7253ed`, `#d93c3c`, `#2869e6`, `#10ac7d`), under 30KB.

## Step 5 — Author the spine pages (you, not subagents)

Author these directly. Subagents only own per-week artifacts.

### 5a. Syllabus

Custom JSX at `content/courses/<slug>/pages/syllabus.tsx`. Sections in
order:

1. `<h1>` Syllabus + one-paragraph elevator pitch
2. What this course is about (1-2 paragraphs)
3. The N fundamentals (3-5 numbered, bold-led non-negotiables)
4. The roadmap (one short paragraph per phase)
5. Prerequisites
6. How the work flows
7. How you are evaluated (NAMES of graded components, NO percentages;
   lead with "Exact weights are confirmed before the term begins; the
   structure below is fixed")
8. Policies (Late work, AI use — real prose only)
9. Reading list ("There is no required external textbook." Then 3-6
   books worth owning for going deeper, with links.)
10. Communities (NEW — from `communities.json`. Real subreddits,
    Discords, conferences, in-person groups, newsletters. Wisdom is
    delegated to them, not faked.)

Hard rules: no fake staff names, emails, office hours, meeting times,
Discord URLs, Gradescope links. No grading percentages. No em dashes
(use colon for "Term: definition", comma for prose pauses, period for
full breaks).

### 5b. The four index pages

Build `pages/lectures-index.tsx`, `pages/sections-index.tsx`,
`pages/readings-index.tsx`, `pages/hw-index.tsx`. Each is a brief intro
plus a clean `<table>` with one row per week (or per assignment). This
is the canonical course landing for that category.

### 5c. The Tasks page

`pages/tasks.tsx`, `"use client"`. Per-week: Reading (1 task), Slides
(2 tasks), Section (1 task), Milestones (n tasks from curriculum row),
Assignments (n tasks from `out`/`due` entries). LocalStorage key
`<slug>:tasks`. Circular checkboxes (NOT native), bold-uppercase-small
sub-headers, flat layout (no left border, no shadow). Reference
implementations: `content/courses/b2c-10k-mrr-26au/pages/tasks.tsx` and
`grow-on-x-26au/pages/tasks.tsx`.

### 5d. The Glossary page (NEW, Pocock pattern)

`pages/glossary.tsx`. Canonical language for the course. Maps the
concept ids from the curriculum graph to definitions.

Rules:
- **Opinionated.** When multiple words exist for the same concept, pick
  the best and list the rest under "Avoid:".
- **Tight.** One or two sentences. Define what the term IS, not what it
  does.
- **Self-referential.** Use the glossary's own terms inside other
  definitions. Compression compounds.
- **Group naturally** under subheadings when clusters emerge.
- **Flag ambiguities.** "In this course, 'X' always means Y."

Render as `<dl>` with `<dt>` (term) / `<dd>` (definition + avoid line).

### 5e. The flat nav

```ts
navGroups: [{ items: [
  { label: "Home",        href: "" },
  { label: "Tasks",       href: "tasks" },
  { label: "Syllabus",    href: "syllabus" },
  { label: "Lectures",    href: "lectures" },
  { label: "Sections",    href: "sections" },
  { label: "Assignments", href: "hw" },
  { label: "Readings",    href: "readings" },
  { label: "Glossary",    href: "glossary" },
]}],
```

No `children` arrays. No Staff. No second nav group of marketing links.

## Step 6 — Fan out per-week subagents (parallel)

For each week N, spawn ONE subagent with the brief + week row + sources
slice. Issue them all in one message.

```
You are authoring Week N of <fullTitle> for <audience>.

Your week's row (verbatim from the curriculum):
  Theme: <theme>
  Phase: <phase>
  Outcomes: <list>
  Lectures: <l1 + topics>, <l2 + topics>
  Section: <section description>
  Depends on: <list>
  Introduces: <list>
  Assignment status: <out / due / none>

Produce these six files:
  1. content/courses/<slug>/pages/lectures/wkNN-l1.tsx     (LectureSpec)
  2. content/courses/<slug>/pages/lectures/wkNN-l2.tsx     (LectureSpec)
  3. content/courses/<slug>/pages/sections/wkNN.tsx        (ProjectSpec worksheet)
  4. content/courses/<slug>/slides/wkNN-l1.md              (Marp deck — see SLIDE-FORMAT.md)
  5. content/courses/<slug>/slides/wkNN-l2.md              (Marp deck — see SLIDE-FORMAT.md)
  6. content/courses/<slug>/pages/readings/wkNN.tsx        (ReadingPage — see READING-FORMAT.md)

SOURCES: cite ONLY from the JSON slice below. Do not WebSearch
mid-flight. Do not write content from parametric knowledge. If you
genuinely need a source not listed, STOP and report.

[paste sources.json slice for week N]

The reading is the durable artifact. Spend craft there:
- ~2,500-3,500 words
- Each section ends with a sentence that closes it, not a transition
- Inline author-year citations
- A <Bibliography> block listing every source id used
- 3-5 retrieval-practice exercises at the end (recall from memory, not
  "look it up")
- A "Going deeper" section pointing to next-week reading, the section
  worksheet, and any community from communities.json relevant to the
  topic

The section worksheet is the skill loop:
- Open with a 5-minute retrieval drill on the prior week
- Mix in at least one Apply-or-above task from a concept introduced
  2-3 weeks ago (interleaving)
- Provide a tight feedback loop: the worksheet ships with a solutions
  page (or a way to self-grade)

Slides are disposable. 12-18 per lecture. Sentence-case headings. One
quote per deck, from a real source, never invented.

DO NOT edit content/courses/<slug>/index.tsx. The master consolidates
it at the end.
```

See `READING-FORMAT.md` and `SLIDE-FORMAT.md` for the structural specs.

## Step 7 — Author the assignments (parallel)

For each assignment in the curriculum, spawn ONE subagent. Each writes
one `ProjectPage` at `content/courses/<slug>/pages/hw/<n>.tsx`.

Constraint: an assignment may only use concepts taught by its `outWeek`
or earlier. No forward references.

## Step 8 — Build the slides

```bash
pnpm slides <slug>
```

Renders Marp decks to `public/c/<slug>/slides/wkNN-l{1,2}.pdf`.

## Step 9 — Consolidate index.tsx and the calendar

Register every page in `content/courses/<slug>/index.tsx`. Rewrite
`pages/home.tsx` so the Calendar uses `WeekModule` with reading,
lecture + slides, section, and assignment labels (purple "HW1 out", red
"HW1 due").

## Step 10 — Verify

```bash
pnpm typecheck
pnpm build
pnpm dev   # spot-check /c/<slug>
```

Click through. Every nav item resolves. Every PDF opens. The hero
renders.

Em-dash audit: `grep -rn "—" content/courses/<slug>/` must return zero
hits.

## Step 11 — Commit and push

```bash
git add content/courses/<slug>/ public/c/<slug>/
git -c commit.gpgsign=false commit -m "feat(courses): add <slug>"
git push origin main
```

## Global prose rules

These apply to every authored artifact.

### Voice

- **No em dashes (—).** Periods, commas, parentheses, colons. En
  dashes for ranges (`weeks 3-5`) are fine.
- **No emoji.**
- **No AI vocabulary.** Banned: delve, leverage, robust, comprehensive,
  intricate, vibrant, multifaceted, nuanced, furthermore, moreover,
  additionally, pivotal, landscape, tapestry, underscore, foster,
  showcase, fundamental, significant. Find a more specific word.
- **Active voice.** "Bob proved the theorem", not "The theorem was
  proved by Bob".
- **No hedging.** Skip *perhaps, arguably, it might be said.*
- **No throat-clearing.** Cut *let's explore, we'll dive into, join me
  as we discover, in conclusion, in summary.*
- **Lead with the point.** First sentence of each section advances the
  argument.
- **Sentence-case headings.** "Composition order matters", not
  "Composition Order Matters".
- **Voice: textbook-calm.** Declarative, authoritative, never
  apologetic.

### Citations

- Inline, author-year: "Shannon (1949) shows that..."
- Bibliography at the end of every reading
- Descriptive link text; external links open in a new tab with
  `rel="noopener noreferrer"`

### Length

- Reading: 2,000-3,500 words
- Section: 200-400 words per worked-step
- Paragraphs: 3-7 sentences
- Lists: at most 7 items

### Honesty

- If a claim needs a source, cite the source
- No "studies show" without a study
- No real-sounding placeholders (no fake instructor names, no fake
  Discord URLs, no fake meeting times)

## Common failure modes

- Topic too broad ("Make a course on math") → narrow first
- Forward references in the curriculum graph → fix before fan-out
- Subagents racing on index.tsx → don't let them. Master does it.
- Wide schedule table instead of `WeekModule` → use the CSE 457 style
- Animated hero SVG → reject and respawn
- Slides built from parametric knowledge → reject; re-source
- Readings citing a textbook the syllabus doesn't assign → cite from
  the per-week sources slice only
- Sidebar dropdowns → flat nav only
- Em dashes anywhere in generated content → grep audit before declaring
  done
- Fake grading weights → list components by name only, no percentages
- Glossary as dictionary → wrong. Glossary is an opinionated record of
  *compressed* learning, not a list of every term the course mentions.

## When you're done

Tell the user:
- Counts of lectures, sections, assignments, readings, slide decks
- URL to view locally
- GitHub commit URL
- Where slide PDFs live: `public/c/<slug>/slides/`
- Where readings live: `/c/<slug>/readings/wkNN`
- What still needs human input (real instructor names, real office
  hours, real community URLs if you couldn't find them)
- Pointers to `tmp/<slug>-mission.md`, `tmp/<slug>-curriculum.json`,
  `tmp/<slug>-sources.json`, `tmp/<slug>-communities.json` so the user
  can edit and re-run later.
