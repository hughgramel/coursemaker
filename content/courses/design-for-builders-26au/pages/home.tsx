import { AnchorHeading } from "@/components/AnchorHeading";
import { WeekModule } from "@/components/WeekModule";
import { Hero } from "@/components/Hero";
import type { CourseModule, ModuleNote } from "@/types/course";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

interface WeekSpec {
  n: number;
  phase: string;
  reading: { title: string; href: string };
  lectures: { title: string; href: string; slides: string }[];
  section: { title: string; href: string };
  assignments: ModuleNote[];
}

function readingHref(n: number): string {
  return `${base}/readings/wk${n.toString().padStart(2, "0")}`;
}
function lectureHref(n: number, l: 1 | 2): string {
  return `${base}/lectures/wk${n.toString().padStart(2, "0")}-l${l}`;
}
function slidesHref(n: number, l: 1 | 2): string {
  return `${base}/slides/wk${n.toString().padStart(2, "0")}-l${l}.pdf`;
}
function sectionHref(n: number): string {
  return `${base}/sections/wk${n.toString().padStart(2, "0")}`;
}

const spec: WeekSpec[] = [
  {
    n: 1, phase: "Foundations",
    reading:  { title: "Figma as your design environment", href: readingHref(1) },
    lectures: [
      { title: "L1, Figma for people who think in code",       href: lectureHref(1, 1), slides: slidesHref(1, 1) },
      { title: "L2, Your design environment",                  href: lectureHref(1, 2), slides: slidesHref(1, 2) },
    ],
    section: { title: "Rebuild a landing-page section", href: sectionHref(1) },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW1 out", variant: "purple" },
        { kind: "link",  text: "Figma starter kit",            href: `${base}/hw/1` },
      ]},
    ],
  },
  {
    n: 2, phase: "Foundations",
    reading:  { title: "Visual literacy", href: readingHref(2) },
    lectures: [
      { title: "L1, CRAP, the four moves",                     href: lectureHref(2, 1), slides: slidesHref(2, 1) },
      { title: "L2, Gestalt grouping",                         href: lectureHref(2, 2), slides: slidesHref(2, 2) },
    ],
    section: { title: "Design critique, three interfaces", href: sectionHref(2) },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW1 due", variant: "red" },
        { kind: "link",  text: "Figma starter kit",            href: `${base}/hw/1` },
      ]},
    ],
  },
  {
    n: 3, phase: "Core mechanics",
    reading:  { title: "Typography", href: readingHref(3) },
    lectures: [
      { title: "L1, How type works",                            href: lectureHref(3, 1), slides: slidesHref(3, 1) },
      { title: "L2, Type systems and scales",                   href: lectureHref(3, 2), slides: slidesHref(3, 2) },
    ],
    section: { title: "Type audit on your landing page", href: sectionHref(3) },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW2 out", variant: "purple" },
        { kind: "link",  text: "Type-only redesign",            href: `${base}/hw/2` },
      ]},
    ],
  },
  {
    n: 4, phase: "Core mechanics",
    reading:  { title: "Color", href: readingHref(4) },
    lectures: [
      { title: "L1, Color theory for screens",                  href: lectureHref(4, 1), slides: slidesHref(4, 1) },
      { title: "L2, Palettes, contrast, dark mode",             href: lectureHref(4, 2), slides: slidesHref(4, 2) },
    ],
    section: { title: "Build your product palette as variables", href: sectionHref(4) },
    assignments: [],
  },
  {
    n: 5, phase: "Core mechanics",
    reading:  { title: "Layout, grids, and spacing", href: readingHref(5) },
    lectures: [
      { title: "L1, The 8-point grid",                          href: lectureHref(5, 1), slides: slidesHref(5, 1) },
      { title: "L2, Grids and responsive layout",               href: lectureHref(5, 2), slides: slidesHref(5, 2) },
    ],
    section: { title: "Pixel-grid drill on three screens", href: sectionHref(5) },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW2 due", variant: "red" },
        { kind: "link",  text: "Type-only redesign",            href: `${base}/hw/2` },
      ]},
    ],
  },
  {
    n: 6, phase: "Composition",
    reading:  { title: "Landing pages that convert", href: readingHref(6) },
    lectures: [
      { title: "L1, Landing-page anatomy",                      href: lectureHref(6, 1), slides: slidesHref(6, 1) },
      { title: "L2, Designing the hero",                        href: lectureHref(6, 2), slides: slidesHref(6, 2) },
    ],
    section: { title: "Hero critique and rebuild", href: sectionHref(6) },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW3 out", variant: "purple" },
        { kind: "link",  text: "Landing page design",           href: `${base}/hw/3` },
      ]},
    ],
  },
  {
    n: 7, phase: "Composition",
    reading:  { title: "App UI, screens and states", href: readingHref(7) },
    lectures: [
      { title: "L1, App UI essentials",                         href: lectureHref(7, 1), slides: slidesHref(7, 1) },
      { title: "L2, Component systems",                         href: lectureHref(7, 2), slides: slidesHref(7, 2) },
    ],
    section: { title: "Build a five-screen app flow", href: sectionHref(7) },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW3 due", variant: "red" },
        { kind: "link",  text: "Landing page design",           href: `${base}/hw/3` },
      ]},
      { kind: "row", items: [
        { kind: "label", text: "Capstone out", variant: "purple" },
        { kind: "link",  text: "Launch package",                href: `${base}/hw/capstone` },
      ]},
    ],
  },
  {
    n: 8, phase: "Frontier",
    reading:  { title: "Brand identity", href: readingHref(8) },
    lectures: [
      { title: "L1, Logos, wordmarks, marks",                   href: lectureHref(8, 1), slides: slidesHref(8, 1) },
      { title: "L2, Brand systems beyond the logo",             href: lectureHref(8, 2), slides: slidesHref(8, 2) },
    ],
    section: { title: "Logo studio, three drafts", href: sectionHref(8) },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW4 out", variant: "purple" },
        { kind: "link",  text: "Brand sheet",                   href: `${base}/hw/4` },
      ]},
    ],
  },
  {
    n: 9, phase: "Frontier",
    reading:  { title: "Marketing assets and sourcing", href: readingHref(9) },
    lectures: [
      { title: "L1, App Store screenshots and OG images",       href: lectureHref(9, 1), slides: slidesHref(9, 1) },
      { title: "L2, Asset hunting, legally",                    href: lectureHref(9, 2), slides: slidesHref(9, 2) },
    ],
    section: { title: "Asset studio for launch", href: sectionHref(9) },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW4 due", variant: "red" },
        { kind: "link",  text: "Brand sheet",                   href: `${base}/hw/4` },
      ]},
    ],
  },
  {
    n: 10, phase: "Synthesis",
    reading:  { title: "Synthesis and handoff", href: readingHref(10) },
    lectures: [
      { title: "L1, Demo day",                                  href: lectureHref(10, 1), slides: slidesHref(10, 1) },
      { title: "L2, Design to code",                            href: lectureHref(10, 2), slides: slidesHref(10, 2) },
    ],
    section: { title: "Mutual critique", href: sectionHref(10) },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "Capstone due", variant: "red" },
        { kind: "link",  text: "Launch package",                href: `${base}/hw/capstone` },
      ]},
    ],
  },
];

function lectureNote(l: WeekSpec["lectures"][number]): ModuleNote {
  return {
    kind: "row",
    items: [
      { kind: "link", text: l.title,        href: l.href },
      { kind: "link", text: "Slides (PDF)", href: l.slides },
    ],
  };
}

const weeks: CourseModule[] = spec.map((w) => ({
  title: `Week ${w.n}, ${w.phase}`,
  size: "h2-small",
  entries: [
    { date: "Reading",     notes: [{ kind: "link", text: w.reading.title, href: w.reading.href }] },
    { date: "Lectures",    notes: w.lectures.map(lectureNote) },
    { date: "Section",     notes: [{ kind: "link", text: w.section.title, href: w.section.href }] },
    { date: "Assignments", notes: w.assignments },
  ],
}));

export function HomePage() {
  return (
    <>
      <div className="not-prose">
        <Hero hero={config.hero} legacyImage={config.heroImage} />
      </div>
      <AnchorHeading as="h1" id="design-for-builders-26au" className="mb-2">
        Design for Builders: Ship Beautiful Products as a Founder
      </AnchorHeading>
      <p className="fs-6 fw-300">Autumn 2026</p>
      <p>
        A 10-week, shipping-heavy course for founders, indie hackers, and
        engineers who can code but freeze when they open Figma. Each week
        produces a real Figma artifact: a starter kit, a type-only redesign, a
        landing page, an app flow, a brand sheet, App Store screenshots, and a
        full launch package. View the <a href={`${base}/syllabus`}>syllabus</a> for
        the full overview.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      <p className="fs-6 fw-300">
        Ten weeks, self-paced. Work the rows of each week top to bottom:
        reading first (it sets up the vocabulary the lectures assume), then
        both lectures, then the hands-on section, then the assignment
        touchpoint.
      </p>
      <div className="course-weeks">
        {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
      </div>
    </>
  );
}

export const homeSearchBody =
  "Design for Builders Ship Beautiful Products as a Founder Autumn 2026 ten week Figma typography color layout landing pages app UI brand identity marketing assets capstone launch package shipping every week";
