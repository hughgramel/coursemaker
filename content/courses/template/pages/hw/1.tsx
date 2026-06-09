import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW 1: scaffold a new course of your own",
  tagline:
    "Run the scaffolder, fill in week 1, and ship a working course site at /c/<your-slug>.",
  outDate: "Week 1",
  dueDate: "End of Week 2",
  overview: [
    "This assignment takes you from zero to a working course site of your own. You run pnpm new-course with a slug, title, and term, fill in one sample week using this template as your reference, and verify the site renders end to end.",
    "There is no toy data and no reference solution. Pick a real subject you would actually teach (or a half-serious one you'd enjoy). The assignment is about the shape of the scaffold, not the depth of the curriculum.",
  ],
  goals: [
    "Run the scaffolder non-interactively with --slug, --title, --full-title, --term, and --weeks",
    "Read the files the scaffolder emitted and match each to its rendered route",
    "Fill in pages/home.tsx with a populated calendar (use WeekModule)",
    "Fill in pages/tasks.tsx with a populated weeks array",
    "Write one sample reading at pages/readings/wk01.tsx using the ReadingPage primitives",
    "Verify pnpm typecheck and pnpm build pass before declaring done",
  ],
  background: [
    "The scaffolder lives at scripts/new-course.mjs. It writes course.config.ts, index.tsx, home, syllabus, staff, tasks, and the four index pages (lectures-index, sections-index, readings-index, hw-index). It registers the new course in content/courses/index.tsx between the COURSEMAKER:REGISTRY markers.",
    "Use this template course as your visual reference. Every file you need to write has a corresponding example under content/courses/template/pages/.",
  ],
  instructions: [
    {
      title: "Pick a slug, title, and term",
      body: "Slugs are kebab-case and end with the term tag, e.g. distributed-systems-26au or growth-marketing-27sp. Titles are short (sidebar label). Full titles are the long form that renders in metadata.",
    },
    {
      title: "Run the scaffolder",
      body: "From the repo root:",
      steps: [
        "pnpm new-course --slug <your-slug> --title \"<short>\" --full-title \"<long>\" --term \"<Term YYYY>\" --weeks 6",
        "Open the file list it printed. There are nine files under content/courses/<slug>/, plus the registration in content/courses/index.tsx.",
      ],
    },
    {
      title: "Edit course.config.ts",
      body: "Set the description to something honest. Leave the navGroups as the scaffolder emitted them (flat, no children). If you have a hero SVG, drop it under public/c/<slug>/hero.svg and set hero accordingly; otherwise leave hero: null.",
    },
    {
      title: "Fill in week 1",
      body: "Create the four sample-week files, modeled on this template:",
      steps: [
        "pages/readings/wk01.tsx — use ReadingPage, ReadingFraming, Exercise, Takeaways, Bibliography.",
        "pages/lectures/wk01-l1.tsx — use LecturePage with a LectureSpec.",
        "pages/sections/wk01.tsx — use ProjectPage with a ProjectSpec.",
        "pages/hw/1.tsx — use ProjectPage with a ProjectSpec.",
      ],
    },
    {
      title: "Wire them into index.tsx",
      body: "Import each new page in content/courses/<slug>/index.tsx and add a pages[] entry with the right segments array. The segments map directly to the URL: ['readings', 'wk01'] becomes /readings/wk01.",
    },
    {
      title: "Populate home.tsx and tasks.tsx",
      body: "Open pages/home.tsx and replace the stub weeks array with one real CourseModule for week 1, linking to your reading, lecture, section, and assignment. Open pages/tasks.tsx and uncomment a wk01 entry in the weeks array, filling in the lecture title, section title, milestones, and assignment.",
    },
    {
      title: "Verify",
      body: "Run pnpm typecheck and pnpm build. Both must pass with no errors. Open pnpm dev and click through every nav entry at /c/<your-slug>.",
    },
  ],
  deliverables: [
    "A working course at /c/<your-slug> with a populated week 1 calendar.",
    "A sample reading, a sample lecture, a sample section, and a sample assignment, all reachable from the home calendar.",
    "A populated tasks page that shows progress when you toggle a task.",
    "Output of pnpm build showing the new course's routes prerendering.",
  ],
  rubric: [
    { dimension: "Scaffolder ran cleanly; nine files written and course registered", points: 20 },
    { dimension: "Sample reading uses ReadingPage primitives end to end", points: 20 },
    { dimension: "Sample lecture and sample section render from spec objects", points: 15 },
    { dimension: "Sample assignment has overview, goals, instructions, deliverables, and a rubric that sums to 100", points: 15 },
    { dimension: "Home calendar links to all four sample-week pages", points: 10 },
    { dimension: "Tasks page renders week 1 entries and progress saves to localStorage", points: 10 },
    { dimension: "pnpm typecheck and pnpm build both pass", points: 10 },
  ],
  hints: [
    "Every nav parent in course.config.ts needs a registered page in index.tsx. A click that 404s means you forgot to add the entry to the pages[] array.",
    "The 'wk01' in URLs is just convention — the segments array drives the route, not the filename. Keep them aligned so the next person can find files easily.",
    "If pnpm typecheck complains about an unused export, you probably forgot to import the page in index.tsx. The TS compiler catches dead exports at module scope.",
  ],
  late: "There is no late penalty for the sample assignment. Take the time you need to understand the shape; the depth will come later.",
};

export function Hw1() {
  return <ProjectPage spec={spec} />;
}

export const hw1SearchBody =
  "HW 1 scaffold a new course pnpm new-course sample reading lecture section assignment week 1";
