import { AnchorHeading } from "@/components/AnchorHeading";
import { WeekModule } from "@/components/WeekModule";
import { Hero } from "@/components/Hero";
import type { CourseModule } from "@/types/course";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const weeks: CourseModule[] = [
  {
    title: "Week 1", size: "h2-small",
    entries: [
      { date: "TBD", notes: [{ kind: "text", text: "Replace me with real content." }] },
    ],
  },
];

export function HomePage() {
  return (
    <>
      <div className="not-prose">
        <Hero hero={config.hero} legacyImage={config.heroImage} />
      </div>
      <AnchorHeading as="h1" id="b2c-10k-mrr-26au" className="mb-2">
        B2C to 0k MRR — A 10-Week Growth Manual for Technical Founders
      </AnchorHeading>
      <p className="fs-6 fw-300">Autumn 2026</p>
      <p>
        A course website for B2C to 0k MRR — A 10-Week Growth Manual for Technical Founders (Autumn 2026). View the <a href={`${base}/syllabus`}>syllabus</a> for details.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
    </>
  );
}

export const homeSearchBody =
  "B2C to 0k MRR — A 10-Week Growth Manual for Technical Founders Autumn 2026 calendar";
