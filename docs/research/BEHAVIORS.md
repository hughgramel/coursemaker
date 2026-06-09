# Site Behaviors — Just the Docs (CSE 457)

## Source
- URL: https://courses.cs.washington.edu/courses/cse457/26sp/
- Generator: Jekyll 4.1.1 + "Just the Docs" theme
- CSS: `assets/css/just-the-docs-default.css` (~70KB minified)
- JS: `assets/js/just-the-docs.js`, lunr.min.js (for search)
- No CSS custom properties — all values are hardcoded.

## Interaction Model
- **Page is static-driven content** with a few interactive widgets. No scroll-triggered animations.
- **Search**: lunr.js client-side full-text search. Typing in the search input opens a results dropdown directly under the input.
- **Sidebar expanders**: Clicking the chevron beside "Projects" toggles a `.active` class that expands the child `<ul>` with the sub-pages. The expander rotates 90° when active.
- **Active nav item**: server-rendered by Jekyll based on current page. Adds `.active` to `<li>` and `<a>`. Active state is a darker background + the same purple text.
- **Anchor headings**: Hovering an h1-h3 reveals a `#svg-link` icon to its left. Clicking copies/scrolls to the fragment.
- **MathJax**: math expressions are pre-rendered via MathJax CDN. Not used on the homepage but used on inner pages.

## Responsive Behavior
- Single breakpoint: **800px (50rem)**.
- Below 800px: sidebar collapses into a top header bar (60px tall) with a hamburger button. Main content takes full width.
- Above 800px: sidebar is fixed-left (264px wide), main content gets `margin-left: 264px`.
- Main content max-width: 800px (with `px-4` to `px-8` gutter), centered with `mx-auto` essentially.

## Hover States
- Nav links: tinted purple background (`rgba(114,83,237,0.08)`) on hover.
- Anchor headings: link icon fades in on hover.
- External links: solid underline color matches link.
- Buttons (`.btn`): background lightens slightly, retains gradient.

## Search Behavior
- Search bar lives in `.search` container at top of main area, full width, 60px tall.
- Magnifying glass icon (svg-search) sits at left.
- Focus state: subtle box-shadow + the dropdown opens.
- Lunr.js indexes title + content of every page. Dropdown shows titles + snippet.

## Labels (data badges)
- `.label-purple` — bg #5739ce → #6f55d5 gradient, white text
- `.label-red` — bg #d93c3c, white text
- `.label-blue` — bg #2869e6, white text
- `.label-green` — bg #10ac7d, white text
- All: 0.625rem font, 600 weight, uppercase, rounded 12px, 2px/6px padding

## Modules (calendar entries)
- `.module` wraps a `<dl>` definition list.
- `<dt>` = date label, displays inline-block, 100px wide, bold-ish, right-aligned.
- `<dd>` = entries, indented to right of the dt.
- Uses dl as a grid: dt | dd. Border separator between weeks.

## Anchor Heading Pattern
Every h1/h2/h3 has an embedded `<a class="anchor-heading">` containing an SVG link icon. The icon is positioned absolutely to the left of the heading and revealed on hover.

## Footer
- Sticks to bottom of sidebar (mt-auto inside flex column).
- "This site uses Just the Docs..." attribution text.
- Font 12px, color #706e71.

## What I'm NOT extracting (out of scope)
- MathJax inner-page rendering (we'll include the CDN script the same way they do).
- Lunr.js full search index (we'll implement client-side search over a simple in-memory index of sample pages).
