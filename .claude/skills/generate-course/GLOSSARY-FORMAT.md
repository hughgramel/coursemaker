# Glossary format

`content/courses/<slug>/pages/glossary.tsx` is the canonical language
for the course. Every reading, lecture, section, and exercise adheres
to its terminology.

The glossary is **a record of compressed learning, not a dictionary**.
Adding a term is itself evidence that the concept is now well
understood.

## Structure

Rendered as a `<dl>` of term/definition pairs, optionally grouped under
subheadings. Each entry:

```tsx
<dt id="hypertrophy"><strong>Hypertrophy</strong></dt>
<dd>
  Muscle growth driven by mechanical tension and metabolic stress over
  repeated training sessions.
  <em>Avoid:</em> bulking, getting big.
</dd>
```

## Rules

- **Opinionated.** When multiple words exist for the same concept, pick
  the best one. List the rest under `<em>Avoid:</em>`. This is how
  language compresses.
- **Tight.** One or two sentences. Define what the term IS, not what it
  does or how to do it.
- **Self-referential.** Use the glossary's own terms inside other
  definitions. Once `progressive-overload` is defined, prefer it
  everywhere — including inside other glossary entries.
- **Group under subheadings** when natural clusters emerge
  (`## Anatomy`, `## Programming`, `## Modes of failure`). A flat list
  is fine when terms cohere.
- **Flag ambiguities.** "In this course, 'set' always means a working
  set; warm-ups are tracked separately."
- **Revise as understanding deepens.** A definition that was correct in
  week 1 may be incomplete by week 6. Update in place; don't leave
  stale entries.
- **Concept ids match the curriculum graph.** The glossary's terms are
  the same kebab-case ids used in `depends_on` / `introduces` in
  `curriculum.json`, but rendered as the human-readable name.

## When to add a term

- The course introduced the concept and the learner has demonstrated
  they can use it correctly (e.g., the section worksheet exercised it).
- The concept appears in `introduces` for some week.
- There is a competing word in the wider field and the course needs to
  pick one.

## When NOT to add a term

- Something the reading mentioned in passing but never exercised
- A synonym for an existing entry (list it under `Avoid:` instead)
- Anything that already lives as a longer treatment in a reference page

Better thirty sharp entries than two hundred mediocre ones.
