# Reading format

A reading is the course's textbook chapter for the week. It is the
**durable artifact** — the thing the learner returns to weeks later.
Spend craft here.

## Where it lives

`content/courses/<slug>/pages/readings/wkNN.tsx`. Renders at
`/c/<slug>/readings/wkNN`. A learner who wants paper presses Cmd-P in
their browser.

## What it produces

A function component, e.g. `Wk01Reading`, plus a string
`wk01ReadingSearchBody` for the search index. Both are registered in
`content/courses/<slug>/index.tsx` by the master, not by the subagent.

## Structure

```tsx
import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage, ReadingFraming, Exercise, Takeaways, Bibliography, Callout,
} from "@/components/ReadingPage";

export function Wk01Reading() {
  return (
    <ReadingPage
      id="wk01"
      title="Week 1: Topic"
      kicker="<Course full title> · <Term> · Reading"
    >
      <ReadingFraming>
        <p>What this reading covers: the concrete capability the learner gains.</p>
        <p><strong>Prerequisites assumed.</strong> Named concepts from earlier weeks.</p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-first-section">1. First section</AnchorHeading>
      <p>Lead with the point. Support with prose. End the section with one sentence that closes it.</p>

      <Callout title="A definition or aside">
        <p>Optional inline aside for a key definition or a warning.</p>
      </Callout>

      <AnchorHeading as="h2" id="exercises">N. Exercises</AnchorHeading>
      <p>These are retrieval-practice. Recall from memory, not look it up.</p>
      <Exercise n={1}><p>...</p></Exercise>

      <AnchorHeading as="h2" id="going-deeper">N+1. Going deeper</AnchorHeading>
      <ul>
        <li>Section worksheet this week</li>
        <li>Next lecture</li>
        <li>The community in <code>communities.json</code> most relevant to this topic</li>
      </ul>

      <Takeaways>
        <li>3-5 numbered points. Each one a sentence.</li>
      </Takeaways>

      <Bibliography>
        <p>Author (Year). Title. URL. One-line note on what this source covered.</p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk01ReadingSearchBody = "Plain text body of the reading for search indexing.";
```

## Rules

- **Length:** 2,000-3,500 words. 8-12 sections.
- **Citations** inline (author year), bibliography at the end.
- **Exercises are retrieval practice**, not look-it-up. Recall from
  memory. 3-5 of them.
- **Going deeper** points to: section worksheet, next lecture, related
  upcoming assignment, and at least one community from
  `communities.json`.
- **Math:** ASCII matrices and equations in `<pre>` blocks. No
  MathJax/KaTeX yet.
- **Diagrams:** prefer `<Mermaid chart="..." alt="..." />`. One diagram
  per section maximum.
- **Voice:** textbook-calm. See SKILL.md for the full prose rules.

## What NOT to write

- Throat-clearing introductions ("Welcome to week 1, where we will
  explore...")
- Section openers that paraphrase the heading
- Lists longer than 7 items
- Claims without sources
- Concepts that aren't in this week's `depends_on` or `introduces`
