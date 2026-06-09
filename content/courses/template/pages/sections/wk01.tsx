import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 1 section: read this template end to end",
  tagline:
    "Click every nav item, open the sample reading, the sample lecture, the sample assignment, and the populated tasks page.",
  outDate: "Week 1",
  overview: [
    "Sections are the feedback loop. Each week's section asks the learner to do one concrete thing with the material from that week's reading and lectures. Sections are not re-lectures. They are hands-on.",
    "This first section is meta: explore the template course so you know what every page type looks like when authored. The shape you see here is what your own course will render once you scaffold and fill it in.",
  ],
  goals: [
    "Name every nav entry the scaffolder emits (Home, Tasks, Syllabus, Lectures, Sections, Assignments, Readings, Staff)",
    "Identify the four index pages (lectures, sections, readings, assignments) and where they live on disk",
    "Open the sample reading, sample lecture, and sample assignment in this template",
    "Toggle a few tasks on the Tasks page and watch the progress bar update",
  ],
  instructions: [
    {
      title: "Walk the sidebar",
      body: "Click each of the eight nav items on the left. Note that every parent route renders a real page, never a blank or 404. That is enforced by the scaffolder: each route in course.config.ts maps to a registered page in index.tsx.",
    },
    {
      title: "Read the sample reading",
      body: "Open /c/template/readings/wk01. Notice the kicker, framing block, body sections, exercises, takeaways, and bibliography. The visual chrome comes from .reading-prose in globals.css — your reading does not need to import any styles.",
    },
    {
      title: "Open the sample lecture",
      body: "Open /c/template/lectures/wk01-l1. The lecture page is data-driven from a LectureSpec — title, topics array, optional slides link, readings, and follow-up questions render automatically.",
    },
    {
      title: "Open the sample assignment",
      body: "Open /c/template/hw/1. The assignment page renders a ProjectSpec — overview, goals, instructions, deliverables, rubric, and hints. The rubric totals automatically.",
    },
    {
      title: "Toggle tasks on the Tasks page",
      body: "Open /c/template/tasks. Click a few of the circular checkboxes. Progress saves to localStorage under the key 'template:tasks'. Use 'reset all' to clear it.",
    },
  ],
  deliverables: [
    "A short note (kept locally) listing two things about this template you want to do differently in your own course.",
    "One idea for a section assignment in your own course's first week that follows the same hands-on shape.",
  ],
  rubric: [
    { dimension: "Walked the full sidebar", points: 20 },
    { dimension: "Opened the sample reading and identified its parts", points: 25 },
    { dimension: "Opened the sample lecture and the sample assignment", points: 25 },
    { dimension: "Toggled tasks on the Tasks page and observed progress save", points: 20 },
    { dimension: "Wrote down two adjustments and one section idea for your own course", points: 10 },
  ],
  hints: [
    "Every nav parent links to a real registered page. If a click 404s in your own course, your index.tsx is missing a route — fix it there, not in the navGroups array.",
    "The Tasks page reads its weeks data from a const array at the top of pages/tasks.tsx. The IDs are deterministic — toggling a task in week 1 of your own course will not collide with this template.",
  ],
};

export function Wk01Section() {
  return <ProjectPage spec={spec} />;
}

export const wk01SectionSearchBody =
  "Week 1 section walk the template sidebar reading lecture assignment tasks page";
