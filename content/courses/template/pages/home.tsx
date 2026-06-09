import { AnchorHeading } from "@/components/AnchorHeading";
import { WeekModule } from "@/components/WeekModule";
import { Hero } from "@/components/Hero";
import type { CourseModule } from "@/types/course";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const weeks: CourseModule[] = [
  {
    title: "Week 1, Foundations (sample week, fully populated)",
    size: "h2-small",
    entries: [
      { date: "Mon", notes: [{ kind: "link", text: "Reading: a sample reading", href: `${base}/readings/wk01` }] },
      { date: "Tue", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: how lecture pages are structured", href: `${base}/lectures/wk01-l1` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk01-l1.pdf` },
        ]},
      ]},
      { date: "Fri", notes: [{ kind: "link", text: "Section: read this template end to end", href: `${base}/sections/wk01` }] },
      { date: "Sun", notes: [
        { kind: "row", items: [
          { kind: "label", text: "HW1 out", variant: "purple" },
          { kind: "link", text: "Scaffold a new course of your own", href: `${base}/hw/1` },
        ]},
      ]},
    ],
  },
  {
    title: "Weeks 2 to 6 (empty in the sample)",
    size: "h2-small",
    entries: [
      { date: "TBD", notes: [{ kind: "text", text: "Authors fill the remaining weeks the same way week 1 is filled in. Each week is one WeekModule with date + notes entries." }] },
    ],
  },
];

export function HomePage() {
  return (
    <>
      <div className="not-prose">
        <Hero hero={config.hero} legacyImage={config.heroImage} />
      </div>
      <AnchorHeading as="h1" id="template" className="mb-2">
        Sample Course Template
      </AnchorHeading>
      <p className="fs-6 fw-300">Sample term</p>
      <p>
        This is a fully populated sample course. Every page type is here so you
        can see what your own course will look like when authored. The first
        week is filled in end to end (reading, lecture, section, assignment,
        tasks). Use it as a visual reference. Scaffold your own with{" "}
        <code>pnpm new-course</code> and follow the same shape. View the{" "}
        <a href={`${base}/syllabus`}>syllabus</a> for the policy template.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
    </>
  );
}

export const homeSearchBody =
  "Sample Course Template Sample term six week calendar template reading lecture section assignment tasks";
