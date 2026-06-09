import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const assignments = [
  { code: "HW1",      slug: "1",        title: "Define your niche and rewrite your bio", out: "Week 1", due: "Week 2", blurb: "Pick the narrow group you serve, then turn your X profile into a four-part conversion landing page." },
  { code: "HW2",      slug: "2",        title: "Ship twenty posts in seven days",         out: "Week 2", due: "Week 3", blurb: "Twelve singles, three threads, three quote posts, two long-form. Tracked in a sheet for Week 5 analysis." },
  { code: "HW3",      slug: "3",        title: "Run your weekly system for two weeks",    out: "Week 4", due: "Week 5", blurb: "Daily 60-minute routine, weekly batching block, two collaboration touches. Honest daily log." },
  { code: "HW4",      slug: "4",        title: "Your thirty-day growth experiment",        out: "Week 5", due: "Week 6", blurb: "One hypothesis, one signal metric, thirty days. Design plus week-one data due in Week 6." },
  { code: "Capstone", slug: "capstone", title: "Your 90-day playbook to 10,000 followers", out: "Week 4", due: "Week 6", blurb: "Phased milestones, weekly system, first 30 days of posts, monetization plan, highest-risk assumption." },
];

export function HwIndex() {
  return (
    <>
      <AnchorHeading as="h1" id="hw">Assignments</AnchorHeading>
      <p>
        Four scaffolded assignments plus a capstone. Each one produces an artifact you reuse later in the
        course: HW1 gives you the niche and bio. HW2 gives you a real dataset for Week 5. HW3 proves your
        weekly system can survive two weeks. HW4 tests one specific hypothesis. The capstone is the
        90-day plan you commit to running after the course ends.
      </p>
      <ul>
        {assignments.map(({ code, slug, title, out, due, blurb }) => (
          <li key={code}>
            <a href={`${base}/hw/${slug}`}>
              <strong>{code} — {title}</strong>
            </a>
            <br />
            Out: {out}. Due: {due}. {blurb}
          </li>
        ))}
      </ul>
    </>
  );
}

export const hwIndexSearchBody =
  "Assignments index HW1 HW2 HW3 HW4 capstone niche bio twenty posts weekly system growth experiment 90-day playbook";
