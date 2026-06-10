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
    reading:  { title: "The hiring funnel and the side doors", href: `${base}/readings/wk01` },
    lectures: [
      { title: "L1, How SWE hiring actually works", href: `${base}/lectures/wk01-l1`, slides: `${base}/slides/wk01-l1.pdf` },
      { title: "L2, The new-grad pipeline",         href: `${base}/lectures/wk01-l2`, slides: `${base}/slides/wk01-l2.pdf` },
    ],
    section: { title: "Target-company-list workshop", href: `${base}/sections/wk01` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW1 out", variant: "purple" },
        { kind: "link",  text: "Resume and portfolio audit", href: `${base}/hw/1` },
      ]},
    ],
  },
  {
    n: 2,
    phase: "Foundations",
    reading:  { title: "Positioning for two readers", href: `${base}/readings/wk02` },
    lectures: [
      { title: "L1, Resumes that pass two readers",         href: `${base}/lectures/wk02-l1`, slides: `${base}/slides/wk02-l1.pdf` },
      { title: "L2, GitHub, LinkedIn, and public artifacts", href: `${base}/lectures/wk02-l2`, slides: `${base}/slides/wk02-l2.pdf` },
    ],
    section: { title: "Resume teardown clinic", href: `${base}/sections/wk02` },
    assignments: [],
  },
  {
    n: 3,
    phase: "Core mechanics",
    reading:  { title: "The coding interview, format and patterns", href: `${base}/readings/wk03` },
    lectures: [
      { title: "L1, The coding interview format",           href: `${base}/lectures/wk03-l1`, slides: `${base}/slides/wk03-l1.pdf` },
      { title: "L2, Two-pointer, hash map, sliding window", href: `${base}/lectures/wk03-l2`, slides: `${base}/slides/wk03-l2.pdf` },
    ],
    section: { title: "Pattern sprint 1", href: `${base}/sections/wk03` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW1 due", variant: "red" },
        { kind: "link",  text: "Resume and portfolio audit", href: `${base}/hw/1` },
      ]},
      { kind: "row", items: [
        { kind: "label", text: "HW2 out", variant: "purple" },
        { kind: "link",  text: "30-problem LeetCode pattern sprint", href: `${base}/hw/2` },
      ]},
    ],
  },
  {
    n: 4,
    phase: "Core mechanics",
    reading:  { title: "Recursion, trees, and graphs", href: `${base}/readings/wk04` },
    lectures: [
      { title: "L1, Recursion as a pattern",        href: `${base}/lectures/wk04-l1`, slides: `${base}/slides/wk04-l1.pdf` },
      { title: "L2, BFS and DFS in interview shape", href: `${base}/lectures/wk04-l2`, slides: `${base}/slides/wk04-l2.pdf` },
    ],
    section: { title: "Pattern sprint 2", href: `${base}/sections/wk04` },
    assignments: [],
  },
  {
    n: 5,
    phase: "Core mechanics",
    reading:  { title: "Dynamic programming and the spoken solve", href: `${base}/readings/wk05` },
    lectures: [
      { title: "L1, Dynamic programming without the panic", href: `${base}/lectures/wk05-l1`, slides: `${base}/slides/wk05-l1.pdf` },
      { title: "L2, Communicating while you code",          href: `${base}/lectures/wk05-l2`, slides: `${base}/slides/wk05-l2.pdf` },
    ],
    section: { title: "Pattern sprint 3", href: `${base}/sections/wk05` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW2 due", variant: "red" },
        { kind: "link",  text: "30-problem LeetCode pattern sprint", href: `${base}/hw/2` },
      ]},
      { kind: "row", items: [
        { kind: "label", text: "HW3 out", variant: "purple" },
        { kind: "link",  text: "Recorded mock coding interview", href: `${base}/hw/3` },
      ]},
    ],
  },
  {
    n: 6,
    phase: "Composition",
    reading:  { title: "System design end to end", href: `${base}/readings/wk06` },
    lectures: [
      { title: "L1, System design as a conversation", href: `${base}/lectures/wk06-l1`, slides: `${base}/slides/wk06-l1.pdf` },
      { title: "L2, Storage, caching, and scale",     href: `${base}/lectures/wk06-l2`, slides: `${base}/slides/wk06-l2.pdf` },
    ],
    section: { title: "System design lab", href: `${base}/sections/wk06` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW4 out", variant: "purple" },
        { kind: "link",  text: "System design write-up", href: `${base}/hw/4` },
      ]},
    ],
  },
  {
    n: 7,
    phase: "Composition",
    reading:  { title: "STAR and the full loop", href: `${base}/readings/wk07` },
    lectures: [
      { title: "L1, Behavioral interviews are pattern matching", href: `${base}/lectures/wk07-l1`, slides: `${base}/slides/wk07-l1.pdf` },
      { title: "L2, The interview loop end to end",              href: `${base}/lectures/wk07-l2`, slides: `${base}/slides/wk07-l2.pdf` },
    ],
    section: { title: "STAR story bank workshop", href: `${base}/sections/wk07` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW3 due", variant: "red" },
        { kind: "link",  text: "Recorded mock coding interview", href: `${base}/hw/3` },
      ]},
      { kind: "row", items: [
        { kind: "label", text: "HW5 out", variant: "purple" },
        { kind: "link",  text: "STAR story bank", href: `${base}/hw/5` },
      ]},
      { kind: "row", items: [
        { kind: "label", text: "Capstone out", variant: "purple" },
        { kind: "link",  text: "Application sprint and full mock loop", href: `${base}/hw/capstone` },
      ]},
    ],
  },
  {
    n: 8,
    phase: "Frontier",
    reading:  { title: "The unconventional path", href: `${base}/readings/wk08` },
    lectures: [
      { title: "L1, Open source as resume",                 href: `${base}/lectures/wk08-l1`, slides: `${base}/slides/wk08-l1.pdf` },
      { title: "L2, Unpaid stints and find-a-problem moves", href: `${base}/lectures/wk08-l2`, slides: `${base}/slides/wk08-l2.pdf` },
    ],
    section: { title: "Triage week", href: `${base}/sections/wk08` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW4 due", variant: "red" },
        { kind: "link",  text: "System design write-up", href: `${base}/hw/4` },
      ]},
    ],
  },
  {
    n: 9,
    phase: "Frontier",
    reading:  { title: "Closing offers", href: `${base}/readings/wk09` },
    lectures: [
      { title: "L1, Recruiters, applications, take-homes, on-sites", href: `${base}/lectures/wk09-l1`, slides: `${base}/slides/wk09-l1.pdf` },
      { title: "L2, Negotiation, leveling, multi-offer dynamics",    href: `${base}/lectures/wk09-l2`, slides: `${base}/slides/wk09-l2.pdf` },
    ],
    section: { title: "Pipeline and negotiation lab", href: `${base}/sections/wk09` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW5 due", variant: "red" },
        { kind: "link",  text: "STAR story bank", href: `${base}/hw/5` },
      ]},
    ],
  },
  {
    n: 10,
    phase: "Synthesis",
    reading:  { title: "The two-track playbook", href: `${base}/readings/wk10` },
    lectures: [
      { title: "L1, The application sprint",     href: `${base}/lectures/wk10-l1`, slides: `${base}/slides/wk10-l1.pdf` },
      { title: "L2, Demo day and personal playbook", href: `${base}/lectures/wk10-l2`, slides: `${base}/slides/wk10-l2.pdf` },
    ],
    section: { title: "Mock interview marathon", href: `${base}/sections/wk10` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "Capstone due", variant: "red" },
        { kind: "link",  text: "Application sprint and full mock loop", href: `${base}/hw/capstone` },
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
    ...(w.assignments.length > 0 ? [{ date: "Assignments", notes: w.assignments }] : []),
  ],
}));

export function HomePage() {
  return (
    <>
      <div className="not-prose">
        <Hero hero={config.hero} legacyImage={config.heroImage} />
      </div>
      <AnchorHeading as="h1" id="landing-the-offer-26au" className="mb-2">
        Landing the Offer: SWE Job Search for Senior CS Students
      </AnchorHeading>
      <p className="fs-6 fw-300">Autumn 2026</p>
      <p>
        A ten-week course for senior CS undergraduates aiming at a new-grad
        software engineering offer. Two parallel tracks: the formal interview
        funnel (resume, DSA, system design, behavioral, recruiter ops,
        negotiation) and the side-door path (open source, unpaid stints,
        find-a-problem-and-just-solve-it). View the{" "}
        <a href={`${base}/syllabus`}>syllabus</a> for the full overview.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      <p className="fs-6 fw-300">
        Ten weeks, in five phases. Work the rows of each week top to bottom:
        reading first (it frames the lectures), then both lectures, then the
        hands-on section, then the assignment touchpoints.
      </p>
      <div className="course-weeks">
        {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
      </div>
    </>
  );
}

export const homeSearchBody =
  "Landing the Offer SWE job search senior CS students Autumn 2026 ten weeks hiring funnel side doors resume LeetCode DSA system design behavioral STAR open source unpaid stint find a problem recruiter negotiation capstone calendar";
