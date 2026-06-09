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

const spec: WeekSpec[] = [
  {
    n: 1,
    phase: "Foundations",
    reading:  { title: "Funnel, niche, bio", href: `${base}/readings/wk01` },
    lectures: [
      { title: "L1, The follower funnel",      href: `${base}/lectures/wk01-l1`, slides: `${base}/slides/wk01-l1.pdf` },
      { title: "L2, Niche, voice, and bio",    href: `${base}/lectures/wk01-l2`, slides: `${base}/slides/wk01-l2.pdf` },
    ],
    section: { title: "Audit five accounts in your niche", href: `${base}/sections/wk01` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW1 out", variant: "purple" },
        { kind: "link",  text: "Niche and bio rewrite",                 href: `${base}/hw/1` },
      ]},
    ],
  },
  {
    n: 2,
    phase: "Core mechanics: writing",
    reading:  { title: "Hooks and formats", href: `${base}/readings/wk02` },
    lectures: [
      { title: "L1, Anatomy of a hook",   href: `${base}/lectures/wk02-l1`, slides: `${base}/slides/wk02-l1.pdf` },
      { title: "L2, Post formats",        href: `${base}/lectures/wk02-l2`, slides: `${base}/slides/wk02-l2.pdf` },
    ],
    section: { title: "Hook lab", href: `${base}/sections/wk02` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW1 due", variant: "red" },
        { kind: "link",  text: "Niche and bio rewrite",                  href: `${base}/hw/1` },
      ]},
      { kind: "row", items: [
        { kind: "label", text: "HW2 out", variant: "purple" },
        { kind: "link",  text: "Twenty posts in seven days",             href: `${base}/hw/2` },
      ]},
    ],
  },
  {
    n: 3,
    phase: "Core mechanics: distribution",
    reading:  { title: "The algorithm and the reply game", href: `${base}/readings/wk03` },
    lectures: [
      { title: "L1, How posts spread on X", href: `${base}/lectures/wk03-l1`, slides: `${base}/slides/wk03-l1.pdf` },
      { title: "L2, The reply game",        href: `${base}/lectures/wk03-l2`, slides: `${base}/slides/wk03-l2.pdf` },
    ],
    section: { title: "Reply sprint", href: `${base}/sections/wk03` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW2 due", variant: "red" },
        { kind: "link",  text: "Twenty posts in seven days",             href: `${base}/hw/2` },
      ]},
    ],
  },
  {
    n: 4,
    phase: "Composition",
    reading:  { title: "The weekly system", href: `${base}/readings/wk04` },
    lectures: [
      { title: "L1, Calendars and batching",       href: `${base}/lectures/wk04-l1`, slides: `${base}/slides/wk04-l1.pdf` },
      { title: "L2, Collaboration and network",    href: `${base}/lectures/wk04-l2`, slides: `${base}/slides/wk04-l2.pdf` },
    ],
    section: { title: "Build your weekly system", href: `${base}/sections/wk04` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW3 out", variant: "purple" },
        { kind: "link",  text: "Run your system for two weeks",          href: `${base}/hw/3` },
      ]},
      { kind: "row", items: [
        { kind: "label", text: "Capstone out", variant: "purple" },
        { kind: "link",  text: "90-day playbook",                        href: `${base}/hw/capstone` },
      ]},
    ],
  },
  {
    n: 5,
    phase: "Frontier: analytics",
    reading:  { title: "Analytics and iteration", href: `${base}/readings/wk05` },
    lectures: [
      { title: "L1, What to measure",         href: `${base}/lectures/wk05-l1`, slides: `${base}/slides/wk05-l1.pdf` },
      { title: "L2, Testing and iterating",   href: `${base}/lectures/wk05-l2`, slides: `${base}/slides/wk05-l2.pdf` },
    ],
    section: { title: "Read your analytics", href: `${base}/sections/wk05` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW3 due", variant: "red" },
        { kind: "link",  text: "Run your system for two weeks",          href: `${base}/hw/3` },
      ]},
      { kind: "row", items: [
        { kind: "label", text: "HW4 out", variant: "purple" },
        { kind: "link",  text: "Thirty-day growth experiment",           href: `${base}/hw/4` },
      ]},
    ],
  },
  {
    n: 6,
    phase: "Synthesis",
    reading:  { title: "The 90-day playbook", href: `${base}/readings/wk06` },
    lectures: [
      { title: "L1, The 10k roadmap",                   href: `${base}/lectures/wk06-l1`, slides: `${base}/slides/wk06-l1.pdf` },
      { title: "L2, Life after 10k",                    href: `${base}/lectures/wk06-l2`, slides: `${base}/slides/wk06-l2.pdf` },
    ],
    section: { title: "Capstone demo day", href: `${base}/sections/wk06` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW4 due", variant: "red" },
        { kind: "link",  text: "Thirty-day growth experiment",           href: `${base}/hw/4` },
      ]},
      { kind: "row", items: [
        { kind: "label", text: "Capstone due", variant: "red" },
        { kind: "link",  text: "90-day playbook",                        href: `${base}/hw/capstone` },
      ]},
    ],
  },
];

function lectureNote(l: WeekSpec["lectures"][number]): ModuleNote {
  return {
    kind: "row",
    items: [
      { kind: "link", text: l.title,       href: l.href },
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
      <AnchorHeading as="h1" id="grow-on-x-26au" className="mb-2">
        Grow on X: From Zero to 10,000 Followers
      </AnchorHeading>
      <p className="fs-6 fw-300">Autumn 2026</p>
      <p>
        A six-week practical course for solo creators going from near-zero to 10,000 followers on X.
        Niche and bio, post craft, the algorithm, the reply game, sustainable weekly systems, analytics,
        and a 90-day playbook. View the <a href={`${base}/syllabus`}>syllabus</a> for the full overview.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      <p className="fs-6 fw-300">
        Six weeks, self-paced. Each week ships a reading, two lectures with slides, one section, and one assignment touchpoint.
      </p>
      <div className="course-weeks">
        {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
      </div>
    </>
  );
}

export const homeSearchBody =
  "Grow on X From Zero to 10,000 Followers Autumn 2026 calendar six week course solo creator niche bio hook algorithm reply game weekly system analytics capstone 90-day playbook";
