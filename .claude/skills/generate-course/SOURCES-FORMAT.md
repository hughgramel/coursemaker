# Sources format

`tmp/<slug>-sources.json` is the vetted source library for the course.
Subagents cite ONLY from here. The model never trusts its parametric
knowledge.

## Per-source schema

```json
{
  "id": "kebab-case-id",
  "title": "...",
  "author": "...",
  "year": 2024,
  "url": "https://...",
  "url_verified": true,
  "kind": "youtube-lecture | engineering-blog | founder-essay | free-textbook | interactive-explainer | primary-document",
  "host_kind": "authored-channel | university-channel | engineering-blog | designer-blog | free-textbook | design-tool-docs | interactive-explainer | primary-document",
  "summary": "One paragraph of plain text on what this source teaches.",
  "duration_or_length": "12-minute video | 8-page essay | Chapter 4 (~3000 words)",
  "informs_weeks": [1, 2],
  "informs_concepts": ["concept-id-1", "concept-id-2"],
  "informs_outcomes": ["Apply: do thing"]
}
```

## Communities

Wisdom comes from communities, not the model. Stored at
`tmp/<slug>-communities.json`:

```json
{
  "id": "r-weightroom",
  "name": "r/weightroom",
  "kind": "subreddit | discord | conference | newsletter | in-person",
  "url": "https://...",
  "use_for": "What this community is the right place to ask.",
  "notes": "Why it's high-signal. Moderation, prominent voices, etc."
}
```

Communities appear in the rendered syllabus. The course's job is to
*point at them*, not to *impersonate them*.

## Rules

- **High-trust only.** Authored, dated, hosted by the author or a
  canonical venue, by a practitioner with domain authority.
- **Two registers:** Knowledge (books, articles, lectures, papers,
  primary docs) and Wisdom (communities). A resource lives in one or
  the other.
- **Annotate every entry.** One-line `summary` saying what it covers.
  Bare URLs are useless in three months.
- **Surface gaps explicitly.** A `gaps` array names areas the
  curriculum needs but no good source covers. This drives the next
  search round.
- **Prune ruthlessly.** Wrong, shallow, or off-mission sources are
  removed, not buried. Better five sharp sources than thirty mediocre.
- **Reject:** Wikipedia, Medium spam, listicles, anonymous content,
  undated content, LLM-summary content, aggregator clickbait, YouTube
  under 5,000 views with unclear authorship.
