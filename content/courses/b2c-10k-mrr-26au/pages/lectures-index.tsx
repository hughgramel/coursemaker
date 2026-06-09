import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

interface LectureLink {
  week: number;
  l1: string;
  l2: string;
  phase: string;
}

const lectures: LectureLink[] = [
  { week: 1,  phase: "Foundations",    l1: "The B2C funnel",            l2: "Reading metrics honestly" },
  { week: 2,  phase: "Foundations",    l1: "Activation",                 l2: "Onboarding teardown" },
  { week: 3,  phase: "Core mechanics", l1: "Pricing for B2C",            l2: "Paywall design" },
  { week: 4,  phase: "Core mechanics", l1: "Retention",                   l2: "Cohort analysis" },
  { week: 5,  phase: "Core mechanics", l1: "A/B testing rigor",          l2: "Release management" },
  { week: 6,  phase: "Composition",    l1: "Picking a wedge channel",    l2: "SEO + content engines" },
  { week: 7,  phase: "Composition",    l1: "Social + virality",          l2: "Paid acquisition basics" },
  { week: 8,  phase: "Frontier",       l1: "App store mechanics",        l2: "ASO + screenshots" },
  { week: 9,  phase: "Frontier",       l1: "Lifecycle messaging",        l2: "Referral loops" },
  { week: 10, phase: "Synthesis",      l1: "Diagnosing stalled MRR",     l2: "Past $10k: what changes" },
];

export function LecturesIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="lectures">Lectures</AnchorHeading>
      <p>
        Two lectures per week, paired with that week&rsquo;s reading and
        section. Slides render to PDF.
      </p>
      <table>
        <thead>
          <tr>
            <th>Wk</th>
            <th>Lecture 1</th>
            <th>Lecture 2</th>
            <th>Phase</th>
          </tr>
        </thead>
        <tbody>
          {lectures.map((l) => {
            const wk = `wk${l.week.toString().padStart(2, "0")}`;
            return (
              <tr key={l.week}>
                <td>{l.week}</td>
                <td>
                  <a href={`${base}/lectures/${wk}-l1`}>{l.l1}</a>
                  {" · "}
                  <a href={`${base}/slides/${wk}-l1.pdf`}>slides</a>
                </td>
                <td>
                  <a href={`${base}/lectures/${wk}-l2`}>{l.l2}</a>
                  {" · "}
                  <a href={`${base}/slides/${wk}-l2.pdf`}>slides</a>
                </td>
                <td>{l.phase}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export const lecturesIndexSearchBody =
  "Lectures index funnel activation pricing paywall retention cohort A/B testing release management wedge channel SEO programmatic SEO viral loops paid acquisition app store ASO lifecycle referral diagnosis";
