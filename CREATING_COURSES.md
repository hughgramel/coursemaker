# Creating a new course

This template is intentionally **programmatic** — designed so a person, a CI
pipeline, or an AI agent (Claude Code) can spin up a new course with a single
command and then iterate from there.

## TL;DR

```bash
pnpm new-course \
  --slug cse455-26au \
  --title "CSE 455" \
  --full-title "CSE 455 – Computer Vision" \
  --term "Autumn 2026"

pnpm dev
# open http://localhost:3000/c/cse455-26au
```

That's it. The scaffolder:

1. creates `content/courses/<slug>/` with `course.config.ts`, `index.tsx`, and
   starter pages (`home.tsx`, `syllabus.tsx`),
2. registers the new course in `content/courses/index.tsx` between the
   `COURSEMAKER:REGISTRY_START`/`END` marker comments,
3. exits non-zero if the slug already exists (use `--force` to overwrite).

## What gets created

```
content/courses/<slug>/
  course.config.ts        # SiteConfig: title, term, navGroups, footer
  index.tsx               # exports `course: Course` + page registry
  pages/
    home.tsx              # HomePage component
    syllabus.tsx          # SyllabusPage component
```

## Configuring the course

Edit `course.config.ts` to change the sidebar nav, footer, theme. Each `NavItem`
has:

- `label` — display text
- `href` — course-relative slug (`""` = home, `"syllabus"` = inner page,
  `"https://…"` = external link)
- `external` — force the open-in-new-tab indicator
- `children` — sub-nav (renders with an expander chevron)

## Adding a page

1. Create `content/courses/<slug>/pages/<name>.tsx` exporting a React component.
2. Add an entry to the `pages` array in `index.tsx`:

```tsx
{ segments: ["projects", "p1"], title: "Project 1", render: () => <P1Page /> }
```

`segments` is the URL path under the course root; an empty array is the course
home page. The router (`app/c/[course]/[[...slug]]/page.tsx`) handles the rest.

## Linking between pages

Inside a course page, derive the course base path from the config and use
absolute hrefs — Next.js `<Link>` and `<a>` resolve relative URLs against the
*current URL*, which would drop the `/c/<slug>` prefix.

```tsx
import { config } from "../course.config";
const base = `/c/${config.slug}`;

// in JSX:
<a href={`${base}/syllabus`}>syllabus</a>
```

External URLs (`https://…`) work as-is.

## Animated heroes

The static teaser image is optional — most courses look better with a
topic-themed animated SVG above the H1. Pass `--hero <name>` to the
scaffolder or set `config.hero` directly:

```bash
pnpm new-course --slug bio200-26au --title "BIOL 200" \
  --full-title "BIOL 200 – Cell Biology" --term "Autumn 2026" \
  --hero dna --hero-color "#10ac7d"
```

| `name` | Topic fit |
|--------|-----------|
| `splines` | Computer graphics, CAD, animation, DSP |
| `timeline` | History, political science |
| `dna` | Biology, medicine, genetics |
| `equation` | Math, theoretical physics, stats |
| `code` | Programming, systems, security |
| `wave` | Physics, music, signals, generic |

Preview all of them at <code>/design#heroes</code>. To add your own, follow
<code>.claude/skills/animated-course-hero/SKILL.md</code>.

## Primitives you have

| Primitive | Use |
|-----------|-----|
| `AnchorHeading` | h1/h2/h3/h4 with the anchor-link icon |
| `WeekModule` | Calendar primitive (`dt`/`dd` grid) |
| `Label` | Pill: `purple`, `red`, `blue`, `green`, `yellow` |
| `SearchBar` | Wired automatically via `buildSearchDocs(course)` |
| `Sidebar` | Driven by `navGroups` in your config |

See `/design` in the running app for an isolated view of every component.

## Instructions for Claude Code

Use this prompt verbatim — it produces a working course end-to-end:

> Add a new course to this repo for **CSE 455 – Computer Vision (Autumn 2026)**.
>
> 1. Run `pnpm new-course --slug cse455-26au --title "CSE 455" --full-title "CSE 455 – Computer Vision" --term "Autumn 2026"`.
> 2. Edit `content/courses/cse455-26au/course.config.ts`:
>    - Add nav items: Home, Syllabus, Projects (with children: HW1, HW2, HW3), Resources.
>    - Add external links: Ed Discussion, Canvas.
>    - Set the footer line.
> 3. Edit `content/courses/cse455-26au/pages/home.tsx` with a real 10-week calendar using `WeekModule` and `Label`.
> 4. Add `pages/projects.tsx`, `pages/hw1.tsx`, etc. and register them in `index.tsx`.
> 5. Run `pnpm typecheck && pnpm build`. Fix any errors.
> 6. Confirm `/c/cse455-26au` renders end-to-end.

## Resetting

Delete `content/courses/<slug>/` and remove the import + array entry from
`content/courses/index.tsx`.
