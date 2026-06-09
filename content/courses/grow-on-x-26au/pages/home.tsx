import { AnchorHeading } from "@/components/AnchorHeading";
import { WeekModule } from "@/components/WeekModule";
import { Hero } from "@/components/Hero";
import type { CourseModule } from "@/types/course";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const weeks: CourseModule[] = [
  {
    title: "Week 1, Foundations",
    size: "h2-small",
    entries: [
      { date: "Mon", notes: [{ kind: "link", text: "Reading: Funnel, niche, bio", href: `${base}/readings/wk01` }] },
      { date: "Tue", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: The follower funnel", href: `${base}/lectures/wk01-l1` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk01-l1.pdf` },
        ]},
      ]},
      { date: "Thu", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: Niche, voice, and bio", href: `${base}/lectures/wk01-l2` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk01-l2.pdf` },
        ]},
      ]},
      { date: "Fri", notes: [{ kind: "link", text: "Section: Audit five accounts", href: `${base}/sections/wk01` }] },
      { date: "Sun", notes: [
        { kind: "row", items: [
          { kind: "label", text: "HW1 out", variant: "purple" },
          { kind: "link", text: "Niche and bio rewrite", href: `${base}/hw/1` },
        ]},
      ]},
    ],
  },
  {
    title: "Week 2, Core mechanics: writing",
    size: "h2-small",
    entries: [
      { date: "Mon", notes: [{ kind: "link", text: "Reading: Hooks and formats", href: `${base}/readings/wk02` }] },
      { date: "Tue", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: Anatomy of a hook", href: `${base}/lectures/wk02-l1` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk02-l1.pdf` },
        ]},
      ]},
      { date: "Thu", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: Post formats", href: `${base}/lectures/wk02-l2` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk02-l2.pdf` },
        ]},
      ]},
      { date: "Fri", notes: [{ kind: "link", text: "Section: Hook lab", href: `${base}/sections/wk02` }] },
      { date: "Sun", notes: [
        { kind: "row", items: [
          { kind: "label", text: "HW1 due", variant: "red" },
          { kind: "label", text: "HW2 out", variant: "purple" },
          { kind: "link", text: "Twenty posts in seven days", href: `${base}/hw/2` },
        ]},
      ]},
    ],
  },
  {
    title: "Week 3, Core mechanics: distribution",
    size: "h2-small",
    entries: [
      { date: "Mon", notes: [{ kind: "link", text: "Reading: The algorithm and the reply game", href: `${base}/readings/wk03` }] },
      { date: "Tue", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: How posts spread on X", href: `${base}/lectures/wk03-l1` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk03-l1.pdf` },
        ]},
      ]},
      { date: "Thu", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: The reply game", href: `${base}/lectures/wk03-l2` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk03-l2.pdf` },
        ]},
      ]},
      { date: "Fri", notes: [{ kind: "link", text: "Section: Reply sprint", href: `${base}/sections/wk03` }] },
      { date: "Sun", notes: [
        { kind: "row", items: [
          { kind: "label", text: "HW2 due", variant: "red" },
        ]},
      ]},
    ],
  },
  {
    title: "Week 4, Composition",
    size: "h2-small",
    entries: [
      { date: "Mon", notes: [{ kind: "link", text: "Reading: The weekly system", href: `${base}/readings/wk04` }] },
      { date: "Tue", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: Calendars and batching", href: `${base}/lectures/wk04-l1` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk04-l1.pdf` },
        ]},
      ]},
      { date: "Thu", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: Collaboration and network", href: `${base}/lectures/wk04-l2` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk04-l2.pdf` },
        ]},
      ]},
      { date: "Fri", notes: [{ kind: "link", text: "Section: Build your weekly system", href: `${base}/sections/wk04` }] },
      { date: "Sun", notes: [
        { kind: "row", items: [
          { kind: "label", text: "HW3 out", variant: "purple" },
          { kind: "link", text: "Run your system for two weeks", href: `${base}/hw/3` },
          { kind: "label", text: "Capstone out", variant: "purple" },
          { kind: "link", text: "90-day playbook", href: `${base}/hw/capstone` },
        ]},
      ]},
    ],
  },
  {
    title: "Week 5, Frontier: analytics",
    size: "h2-small",
    entries: [
      { date: "Mon", notes: [{ kind: "link", text: "Reading: Analytics and iteration", href: `${base}/readings/wk05` }] },
      { date: "Tue", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: What to measure", href: `${base}/lectures/wk05-l1` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk05-l1.pdf` },
        ]},
      ]},
      { date: "Thu", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: Testing and iterating", href: `${base}/lectures/wk05-l2` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk05-l2.pdf` },
        ]},
      ]},
      { date: "Fri", notes: [{ kind: "link", text: "Section: Read your analytics", href: `${base}/sections/wk05` }] },
      { date: "Sun", notes: [
        { kind: "row", items: [
          { kind: "label", text: "HW3 due", variant: "red" },
          { kind: "label", text: "HW4 out", variant: "purple" },
          { kind: "link", text: "Thirty-day growth experiment", href: `${base}/hw/4` },
        ]},
      ]},
    ],
  },
  {
    title: "Week 6, Synthesis",
    size: "h2-small",
    entries: [
      { date: "Mon", notes: [{ kind: "link", text: "Reading: The 90-day playbook", href: `${base}/readings/wk06` }] },
      { date: "Tue", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: The 10k roadmap", href: `${base}/lectures/wk06-l1` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk06-l1.pdf` },
        ]},
      ]},
      { date: "Thu", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Lecture: Life after 10k", href: `${base}/lectures/wk06-l2` },
          { kind: "link", text: "Slides (PDF)", href: `${base}/slides/wk06-l2.pdf` },
        ]},
      ]},
      { date: "Fri", notes: [{ kind: "link", text: "Section: Capstone demo day", href: `${base}/sections/wk06` }] },
      { date: "Sun", notes: [
        { kind: "row", items: [
          { kind: "label", text: "HW4 due", variant: "red" },
          { kind: "label", text: "Capstone due", variant: "red" },
        ]},
      ]},
    ],
  },
];

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
        Self-paced. Two lectures per week, one section, one reading. Day-of-week labels are suggested cadence.
      </p>
      {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
    </>
  );
}

export const homeSearchBody =
  "Grow on X From Zero to 10,000 Followers Autumn 2026 calendar six week course solo creator niche bio hook algorithm reply game weekly system analytics capstone 90-day playbook";
