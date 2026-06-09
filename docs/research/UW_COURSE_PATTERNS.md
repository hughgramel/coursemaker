# UW course-site patterns

Notes gathered from CSE 444 (databases), CSE 446 (ML), CSE 457 (graphics),
and CSE 344 (databases, Google Sites). Used to scope the data model and the
fan-out skill.

## Universal sidebar nav

Every Just the Docs UW course site has roughly the same first-class sections:

| Section | Common label | Notes |
|---------|--------------|-------|
| Course home | "Home" | Has staff info, announcements, calendar excerpt |
| Syllabus | "Syllabus" | Overview, grading, policies |
| Calendar / Schedule | "Calendar" or "Schedule" | Week-by-week table |
| Lectures | "Lectures" | Per-lecture notes + slides + recordings |
| Sections | "Sections" | Per-section worksheets + recordings |
| Assignments | "Homework", "Labs", "Projects" | One sub-page per assignment |
| Readings | "Readings" | Per-week or per-lecture reading lists |
| Staff | "Staff" | Instructor + TA bios with photos |
| External | Ed / Gradescope / Canvas / YouTube | Always rendered as external links |

CSE 344 (Google Sites) deviates: it has "Support Hours and 1:1s", "Code
Legibility", "More Resources", "Down the Rabbit Hole" — community-flavored
extras.

## Syllabus shape

Top-level sections in order:
1. **Overview** — 1-2 paragraphs on what the course covers
2. **Logistics** — meeting times, format, modality
3. **Staff & Office Hours** — instructor / TAs / OH grid
4. **Prerequisites + Getting Help** — what to know first, where to ask
5. **Grading** — assessment breakdown table with weights
   - Subsections: late policy (e.g. "25% per day"), AI policy, regrade policy
6. **Resources** — required + optional textbooks, video playlists, supplementary

## Calendar shape

Two common formats:

### Format A — Just the Docs `dl` modules (CSE 457)
- `<h2>Week N</h2>` per week, `<dl>` with `<dt>` date + `<dd>` events
- Labels (purple/red/blue/green) for "Project N Out", "Project N Due", "Fab Lab"
- Compact, fits in a sidebar column

### Format B — Wide table with 4 columns (CSE 446)
- Columns: **Date** | **Topic** | **Reading** | **Resources**
- Resources = links to slides, Colab notebooks, datasets
- Grouped into thematic units via section headings ("The basics", "Neural networks")
- No assignment-due rows inline — assignments link out

Both should be supported by the template.

## Lecture page shape

- Title + date + week
- "Topics" bullets
- Linked slides (PDF), recording (YouTube/Panopto)
- Reading list with chapter/section refs
- Optional: discussion questions, follow-up prompts

## Section/discussion page shape

- Worksheet (PDF or inline)
- Solutions (separate page, link)
- Sometimes a recording

## Project handout shape

1. **Overview** — what you're building, 2-3 sentences
2. **Learning goals** — bulleted skills/concepts
3. **Background / Conceptual prep** — sometimes split into its own page
4. **Instructions / Tasks** — numbered or part-1/part-2
5. **Deliverables** — exactly what to submit, where
6. **Rubric / Grading** — points per dimension
7. **Hints / FAQ** — appended over the quarter
8. **Late policy reminder**

## Staff card shape

- Photo
- Name + role (Instructor, TA, Grader)
- Email (often a contact form for instructor)
- Office hours: day + time + location
- Optional: research interests, bio paragraph

## Slide deck patterns

UW slides we sampled (CSE 446, 457):
- Title slide: course code + title + lecturer name + date
- Section dividers: large title on color background
- Body slides: heading + bullets, often with a figure
- Code blocks for systems / DBMS courses
- Math typeset (probably LaTeX/MathJax) for ML / graphics
- Generally 30-50 slides per 50-minute lecture

These look reproducible with **Marp** (Markdown → PDF/HTML) using a custom
theme that matches the coursemaker palette.

## What we'll build into the template

Based on the above:
- Keep the JtD-style sidebar
- Support **both** calendar formats (modules + table)
- Add `Syllabus`, `LecturePage`, `SectionPage`, `ProjectPage`, `StaffPage`
  primitives with prefilled section heads
- Each course owns one `hero.svg` (custom art) instead of a name picked from a
  global animated registry
- A Marp theme `coursemaker.css` to render slides in the course palette
- Skills:
  - `/coursemaker-create <topic>` — research + 12-week scope + fan-out per week
  - `/coursemaker-slides <course> <lecture>` — slide deck for one lecture
