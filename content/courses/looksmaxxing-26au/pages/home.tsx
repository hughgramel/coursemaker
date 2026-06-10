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
    phase: "Foundations, attractiveness research and reading the landscape",
    reading:  { title: "Attractiveness research and what you can change", href: `${base}/readings/wk01` },
    lectures: [
      { title: "L1, The science of attractiveness",            href: `${base}/lectures/wk01-l1`, slides: `${base}/slides/wk01-l1.pdf` },
      { title: "L2, The looksmaxxing landscape",               href: `${base}/lectures/wk01-l2`, slides: `${base}/slides/wk01-l2.pdf` },
    ],
    section: { title: "Annotate three forum posts", href: `${base}/sections/wk01` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW1 out", variant: "purple" },
        { kind: "link",  text: "Honest baseline audit", href: `${base}/hw/1` },
      ]},
    ],
  },
  {
    n: 2,
    phase: "Foundations, baseline measurement and the habit machine",
    reading:  { title: "Baseline, sleep, and the habit machine", href: `${base}/readings/wk02` },
    lectures: [
      { title: "L1, Measuring what you cannot see day to day", href: `${base}/lectures/wk02-l1`, slides: `${base}/slides/wk02-l1.pdf` },
      { title: "L2, Sleep, circadian rhythm, recovery",        href: `${base}/lectures/wk02-l2`, slides: `${base}/slides/wk02-l2.pdf` },
    ],
    section: { title: "Photo station and habit stack", href: `${base}/sections/wk02` },
    assignments: [],
  },
  {
    n: 3,
    phase: "Core mechanics, skincare from the skin barrier forward",
    reading:  { title: "Skincare from skin biology forward", href: `${base}/readings/wk03` },
    lectures: [
      { title: "L1, Skin biology for the impatient", href: `${base}/lectures/wk03-l1`, slides: `${base}/slides/wk03-l1.pdf` },
      { title: "L2, The four-product routine",        href: `${base}/lectures/wk03-l2`, slides: `${base}/slides/wk03-l2.pdf` },
    ],
    section: { title: "Bathroom shelf audit", href: `${base}/sections/wk03` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW1 due", variant: "red" },
        { kind: "link",  text: "Honest baseline audit", href: `${base}/hw/1` },
      ]},
    ],
  },
  {
    n: 4,
    phase: "Core mechanics, hair biology, hair loss, and a cut that fits",
    reading:  { title: "Hair, hair loss, and a haircut that fits", href: `${base}/readings/wk04` },
    lectures: [
      { title: "L1, Hair biology and the hair-loss talk", href: `${base}/lectures/wk04-l1`, slides: `${base}/slides/wk04-l1.pdf` },
      { title: "L2, Wash, cut, style",                    href: `${base}/lectures/wk04-l2`, slides: `${base}/slides/wk04-l2.pdf` },
    ],
    section: { title: "Bring two reference cuts", href: `${base}/sections/wk04` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW2 out", variant: "purple" },
        { kind: "link",  text: "Two-week skincare and grooming log", href: `${base}/hw/2` },
      ]},
    ],
  },
  {
    n: 5,
    phase: "Core mechanics, strength, protein, and recomposition",
    reading:  { title: "Strength, protein, and body recomposition", href: `${base}/readings/wk05` },
    lectures: [
      { title: "L1, Strength training first principles", href: `${base}/lectures/wk05-l1`, slides: `${base}/slides/wk05-l1.pdf` },
      { title: "L2, Eating for a visible jawline",       href: `${base}/lectures/wk05-l2`, slides: `${base}/slides/wk05-l2.pdf` },
    ],
    section: { title: "Write your program, peer review", href: `${base}/sections/wk05` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW3 out", variant: "purple" },
        { kind: "link",  text: "Strength program and nutrition plan", href: `${base}/hw/3` },
      ]},
      { kind: "label", text: "Mid-course check-in", variant: "blue" },
    ],
  },
  {
    n: 6,
    phase: "Composition, dental and the jawline conversation",
    reading:  { title: "Dental, whitening, and the jawline myths", href: `${base}/readings/wk06` },
    lectures: [
      { title: "L1, Mouth basics: hygiene, gums, breath", href: `${base}/lectures/wk06-l1`, slides: `${base}/slides/wk06-l1.pdf` },
      { title: "L2, Teeth, alignment, jawline myths",     href: `${base}/lectures/wk06-l2`, slides: `${base}/slides/wk06-l2.pdf` },
    ],
    section: { title: "Defend your oral hygiene cycle", href: `${base}/sections/wk06` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW2 due", variant: "red" },
        { kind: "link",  text: "Two-week skincare and grooming log", href: `${base}/hw/2` },
      ]},
    ],
  },
  {
    n: 7,
    phase: "Composition, style, fit, color, capsule",
    reading:  { title: "Fit, color, and the five-look capsule", href: `${base}/readings/wk07` },
    lectures: [
      { title: "L1, Fit is the whole game",                href: `${base}/lectures/wk07-l1`, slides: `${base}/slides/wk07-l1.pdf` },
      { title: "L2, Color, context, capsule wardrobe",     href: `${base}/lectures/wk07-l2`, slides: `${base}/slides/wk07-l2.pdf` },
    ],
    section: { title: "Closet audit and cull", href: `${base}/sections/wk07` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW4 out", variant: "purple" },
        { kind: "link",  text: "Five-look capsule wardrobe", href: `${base}/hw/4` },
      ]},
      { kind: "row", items: [
        { kind: "label", text: "Capstone out", variant: "purple" },
        { kind: "link",  text: "Twelve-week plan and before-and-after", href: `${base}/hw/capstone` },
      ]},
    ],
  },
  {
    n: 8,
    phase: "Frontier, grooming and finishing details",
    reading:  { title: "Beard, brows, fragrance, hands", href: `${base}/readings/wk08` },
    lectures: [
      { title: "L1, Beards, stubble, eyebrow line", href: `${base}/lectures/wk08-l1`, slides: `${base}/slides/wk08-l1.pdf` },
      { title: "L2, Fragrance, hands, details",     href: `${base}/lectures/wk08-l2`, slides: `${base}/slides/wk08-l2.pdf` },
    ],
    section: { title: "Grooming kit show-and-tell", href: `${base}/sections/wk08` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW3 due", variant: "red" },
        { kind: "link",  text: "Strength program and nutrition plan", href: `${base}/hw/3` },
      ]},
    ],
  },
  {
    n: 9,
    phase: "Frontier, posture, gait, and being photographed",
    reading:  { title: "Posture, gait, and being photographed", href: `${base}/readings/wk09` },
    lectures: [
      { title: "L1, Standing tall, posture and gait", href: `${base}/lectures/wk09-l1`, slides: `${base}/slides/wk09-l1.pdf` },
      { title: "L2, On being photographed",           href: `${base}/lectures/wk09-l2`, slides: `${base}/slides/wk09-l2.pdf` },
    ],
    section: { title: "Film, review, fix", href: `${base}/sections/wk09` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "HW4 due", variant: "red" },
        { kind: "link",  text: "Five-look capsule wardrobe", href: `${base}/hw/4` },
      ]},
    ],
  },
  {
    n: 10,
    phase: "Synthesis, mental health and the twelve-week plan",
    reading:  { title: "Body dysmorphia and the twelve-week plan", href: `${base}/readings/wk10` },
    lectures: [
      { title: "L1, Body dysmorphia and the rabbit hole", href: `${base}/lectures/wk10-l1`, slides: `${base}/slides/wk10-l1.pdf` },
      { title: "L2, Demo day and your twelve-week plan",  href: `${base}/lectures/wk10-l2`, slides: `${base}/slides/wk10-l2.pdf` },
    ],
    section: { title: "Before, after, plan", href: `${base}/sections/wk10` },
    assignments: [
      { kind: "row", items: [
        { kind: "label", text: "Capstone due", variant: "red" },
        { kind: "link",  text: "Twelve-week plan and before-and-after", href: `${base}/hw/capstone` },
      ]},
      { kind: "label", text: "Demo day", variant: "blue" },
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

const weeks: CourseModule[] = spec.map((w) => {
  const entries = [
    { date: "Reading",  notes: [{ kind: "link", text: w.reading.title, href: w.reading.href }] as ModuleNote[] },
    { date: "Lectures", notes: w.lectures.map(lectureNote) },
    { date: "Section",  notes: [{ kind: "link", text: w.section.title, href: w.section.href }] as ModuleNote[] },
  ];
  if (w.assignments.length > 0) {
    entries.push({ date: "Assignments", notes: w.assignments });
  }
  return {
    title: `Week ${w.n}, ${w.phase}`,
    size: "h2-small" as const,
    entries,
  };
});

export function HomePage() {
  return (
    <>
      <div className="not-prose">
        <Hero hero={config.hero} legacyImage={config.heroImage} />
      </div>
      <AnchorHeading as="h1" id="looksmaxxing-26au" className="mb-2">
        Looksmaxxing: A Ten-Week Evidence-Based Self-Improvement Course
      </AnchorHeading>
      <p className="fs-6 fw-300">Autumn 2026</p>
      <p>
        Ten weeks of research-backed self-improvement for men aged 18 to 30
        across seven pillars: skin, hair, body, dental, style, grooming,
        posture, and sleep, with mental health woven through every week. No
        surgery, no pseudoscience, no rabbit holes. View the{" "}
        <a href={`${base}/syllabus`}>syllabus</a> for the seven fundamentals,
        prerequisites, and grading. Use{" "}
        <a href={`${base}/tasks`}>Tasks</a> to track course work week by week
        and <a href={`${base}/habits`}>Habits</a> to hold the daily and weekly
        practices the course is trying to instill.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      <p className="fs-6 fw-300">
        Ten weeks. Work each row top to bottom: reading first (it sets up the
        lectures), then both lectures, then the hands-on section, then the
        assignment touchpoint.
      </p>
      <div className="course-weeks">
        {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
      </div>
    </>
  );
}

export const homeSearchBody =
  "Looksmaxxing ten week course men 18 to 30 evidence based softmaxxing skin hair body dental style grooming posture sleep mental health calendar attractiveness research baseline sleep skincare hair loss strength training jawline myths capsule wardrobe fragrance camera angles body dysmorphia twelve week plan";
