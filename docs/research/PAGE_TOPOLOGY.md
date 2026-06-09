# Page Topology — CSE 457 Home

## Top-level layout
```
<div class="page-wrap">      // flex column, min-h-screen
  <aside class="side-bar">   // fixed left 264px on desktop; top bar on mobile
    <SiteHeader/>            // logo + mobile menu button
    <SiteNav/>               // primary + secondary nav with HR between
    <SiteFooter/>            // attribution
  </aside>
  <div class="main">         // ml-264 on desktop, full width mobile
    <div class="main-header">// 60px tall, white bg, border-bottom
      <SearchBar/>
    </div>
    <main class="main-content"> // max-w 800px, py-8, px-8
      <PageContent/>            // markdown content
    </main>
  </div>
</div>
```

## Sections (top to bottom of main content on Home page)
1. **Hero image** — `/assets/images/home.png` (teaser figure), full-width inside content area
2. **H1 + subtitle** — "CSE 457: Introduction to Computer Graphics" / "Spring 2026" (h1 weight 300, subtitle weight 300 size .9rem)
3. **Announcement paragraph** — links to syllabus
4. **H2: Artifact Winners** — single paragraph + link
5. **H2: Calendar** — schedule intro
6. **H3: Lecture Material** — sub-section header
7. **Week 1...Week 11** — each h2 followed by a `.module` div with `<dl>` of date entries

## Sub-component breakdown
- `Sidebar` (composes SiteHeader, SiteNav, SiteFooter)
- `SiteHeader` — title + hamburger
- `SiteNav` — composes NavGroup, NavItem (with optional NavExpander), NavSeparator
- `SearchBar` — magnifying glass icon + input + dropdown
- `PageContent` — typographic wrapper for markdown
- `AnchorHeading` — h1/h2/h3 with link anchor
- `WeekModule` — date/event dl
- `Label` — colored pill (purple/red/blue/green)
- `Footer`

## Z-index layers
- Sidebar: 0
- Main header (search): 2
- Search dropdown when open: 3

## Routes for the demo app
- `/` — clone of the CSE 457 home page (using config-driven template)
- `/syllabus` — demo of an inner content page
- `/design` — design library showing all components
- `/template` — minimal "start here" page demonstrating how to create a new course
