---
name: coursemaker-readings
description: Author a per-week reading page (the "textbook chapter" the course generates for itself) as a TSX page in this Next.js app. Renders at /c/<slug>/readings/<name>. Use when the user says "make the reading for week N of <course>", "write the week N primer", or when coursemaker-create fans out to per-week reading generation.
---

# coursemaker-readings — original course-textbook chapters (web pages, not PDFs)

This skill produces **one reading page per week** as a TSX page in this
Next.js app. The reading IS a webpage — same layout, same typography,
same routing as every other course page. There is no PDF pipeline. If a
student wants a PDF they can `Cmd-P → Save as PDF` in their browser.

The course has **no required external textbook**. These weekly readings
are the textbook — original writing, not curated chapters from someone
else's book.

## When to use

- User asks for a reading / handout / primer for a specific week.
- The master `coursemaker-create` skill fans out per-week subagents and
  one of those needs to write the week's reading.
- An author wants to add a primer beyond the slide deck for one lecture.

## Inputs (must have)

- **Course slug** (e.g. `cse457-26sp`).
- **Filename** (e.g. `wk01-affine.tsx`) — kebab-case, `wkNN-<topic>`.
- **Week scope** — the row from the curriculum graph: theme, lectures,
  prerequisites (concepts already taught), introduces (new concepts).
- **Pedagogical level** — undergrad intro vs. graduate seminar.
- **Length target** — roughly 2,000–3,500 words. Renders as a 4-8
  printed page when the browser prints to PDF.

## What you produce

ONE file:
`content/courses/<slug>/pages/readings/<filename>.tsx`

The component exports a function (e.g. `Wk01Reading`) and a string
`<wkNN>ReadingSearchBody` for the search index. Both must be registered
in `content/courses/<slug>/index.tsx` — append a line under the existing
`pages` array.

### Structure (every reading uses these primitives)

```tsx
import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage, ReadingFraming, Exercise, Takeaways, Bibliography, Callout,
} from "@/components/ReadingPage";

export function Wk01Reading() {
  return (
    <ReadingPage
      id="wk01-affine"
      title="Week 1 — Topic"
      kicker="<Course code> <Course name> · <Term> · Reading"
    >
      <ReadingFraming>
        <p>What this reading covers — concrete capability the learner will gain.</p>
        <p><strong>Prerequisites assumed.</strong> Named concepts from earlier weeks.</p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-section">1. First section</AnchorHeading>
      <p>...</p>

      <Callout title="A definition">
        <p>Optional inline aside for a key definition or warning.</p>
      </Callout>

      <AnchorHeading as="h2" id="exercises">7. Exercises</AnchorHeading>
      <Exercise n={1}>
        <p>Question goes here.</p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">8. Going deeper</AnchorHeading>
      <ul>
        <li>Section worksheet</li>
        <li>Next lecture</li>
        <li>Related project</li>
      </ul>

      <Takeaways>
        <li>One sentence per take-away. 3-5 total.</li>
      </Takeaways>

      <Bibliography>
        <p>Optional. Hanging-indent prose references.</p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk01ReadingSearchBody =
  "Comma-separated index terms used by the in-app search...";
```

### Required structure, in order

1. **`<ReadingPage>` wrapper** with `title`, `id`, `kicker`.
2. **`<ReadingFraming>`** containing two paragraphs:
   - "What this reading covers" — outcome framing.
   - "Prerequisites assumed." — named concepts from the curriculum graph.
3. **Numbered body sections.** H2 anchors `1. …`, `2. …`, etc.
   - Each section teaches one idea. Build from first principles.
   - Use small code blocks for matrices, equations, pseudo-code.
   - At most ONE `<Callout>` per reading.
4. **Worked example.** A full numerical walk-through, not a paraphrase.
   Spell out the matrices / equations in `<pre>` blocks.
5. **Exercises.** 3-5 `<Exercise>` blocks. Each block is self-contained
   and answerable from the reading alone.
6. **Going deeper.** Internal pointers ONLY — section worksheet, next
   lecture, related project. Do NOT recommend external books unless the
   syllabus explicitly assigns them.
7. **`<Takeaways>`.** 3-5 numbered items. Echoes the framing in §1.
8. **`<Bibliography>`** (optional). Only if you cite external references
   you actually consulted.

### Style rules

- **Voice: textbook-calm.** Authoritative, declarative, never apologetic.
  Match Marschner & Shirley or the Bishop ML book.
- **Sentence case headings.** "Composition order matters" not
  "Composition Order Matters".
- **No emoji.**
- **Math in `<pre>` blocks.** ASCII matrices like the example. Do NOT
  use `$inline math$` — there's no MathJax/KaTeX on this route.
- **Inline `<code>` for symbols** (`p`, `R(θ)`, `M_world`).
- **`<strong>` for named concepts the first time they appear** — this
  is how the learner sees what's introduced this week.
- **Escape entities.** Use `&rsquo;` not `'`, `&ldquo;`/`&rdquo;` not
  `"`, `&amp;` not `&`. Avoid stray `<` or `>` in prose.

### Length

Target 2,000–3,500 words. The reading renders inside the existing
`.prose` layout at `--content-max-width: 800px`, so word count is the
right unit, not page count.

- < 2,000 words: reading is too thin. Add a second example or a deeper
  derivation.
- > 3,500 words: reading is doing too much. Split into two weeks or
  move material to the slides.

## Pedagogy (from /teach)

- **One mission per reading.** The framing block names a concrete
  capability. Every section pays into that.
- **Zone of proximal development.** The Prerequisites list must match
  the curriculum graph's `depends_on` exactly. Don't sneak in a concept
  the graph says hasn't been introduced.
- **Inline rationale.** Don't just state results — say *why* the result
  matters and *why* the convention is the way it is.
- **Feedback loop at the end.** Exercises must be answerable from the
  reading alone. "Going deeper" must reference real course artifacts
  (worksheet, next lecture, project).

## Registering the reading

After writing the TSX file, append to
`content/courses/<slug>/index.tsx`:

```tsx
import { Wk01Reading, wk01ReadingSearchBody } from "./pages/readings/wk01-affine";

// ... in the `pages` array:
{
  segments: ["readings", "wk01-affine"],
  title: "Week 1 — Affine transformations",
  searchBody: wk01ReadingSearchBody,
  render: () => <Wk01Reading />,
},
```

When coursemaker-create is fanning out, individual subagents do NOT
edit `index.tsx` — they write only their own file. The master adds the
registry entry in the consolidation step.

## Verifying

1. `pnpm typecheck` passes — JSX errors are common (unescaped `&`, `<`,
   stray `</p>`). Fix inline.
2. `pnpm dev` and open `http://localhost:3000/c/<slug>/readings/<name>`.
   Check:
   - Title + kicker render cleanly under the sidebar
   - Section numbering is consistent
   - Exercise cards have the "EXERCISE N" label
   - Takeaways list has the purple numerals
   - Bibliography (if present) has hanging-indent paragraphs
   - All internal links resolve (no 404s on "Going deeper" pointers)
3. Resize the browser to mobile (~390px). Reading should still be
   readable — the prose wraps, the sidebar collapses to a top bar.

## Common mistakes

- **Citing a real textbook the course doesn't assign.** This course
  generates its own readings; don't push students to buy something.
- **Padding with fluff.** If a paragraph doesn't advance the mission,
  delete it. Textbook-calm voice doesn't mean wordy.
- **Skipping the worked example.** Every reading must include one fully
  worked numerical or step-by-step example. Pure exposition isn't enough.
- **Forgetting prerequisites.** Always state what you assume the reader
  already knows. The curriculum graph says exactly this — copy from it.
- **Using `$math$` syntax.** It won't render. Use `<pre>` blocks for
  equations.
- **Forgetting to register the page.** A reading that exists in
  `pages/readings/` but isn't in `index.tsx` won't show up in routing
  or search.
- **Unescaped entities.** `He's` should be `He&rsquo;s`, `A & B` should
  be `A &amp; B`.
