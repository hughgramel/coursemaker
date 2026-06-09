import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const sections: { week: number; title: string; mission: string }[] = [
  { week: 1,  title: "Wire your funnel",            mission: "Instrument PostHog (or equivalent) and report your real numbers to the class." },
  { week: 2,  title: "Activation audit",            mission: "Pair, screen-share each other's onboarding, identify the biggest drop-off, ship a fix this week." },
  { week: 3,  title: "Pricing experiment",          mission: "1-page pricing brief, peer critique, one specific change shipped this week." },
  { week: 4,  title: "Build a cohort chart",        mission: "SQL or PostHog query for D1/D7/D30, bring the chart to class." },
  { week: 5,  title: "Design one A/B test",         mission: "Pick one thing to test, compute sample size, ship the test OR a 'why not testing' memo." },
  { week: 6,  title: "Channel-fit worksheet",       mission: "Score 5 channels, pick one, commit publicly for the remaining course weeks." },
  { week: 7,  title: "Write one viral asset",       mission: "Design and ship one shareable artifact into the product." },
  { week: 8,  title: "Ship to the stores",          mission: "Submit TestFlight OR Play internal-testing OR ship a PWA install prompt. Non-negotiable." },
  { week: 9,  title: "Wire one lifecycle email",    mission: "Ship one triggered email or push end-to-end with a measured uplift estimate." },
  { week: 10, title: "Stall diagnosis clinic",      mission: "Present your funnel + cohorts + MRR curve. Class diagnoses the single highest-leverage 30-day move." },
];

export function SectionsIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="sections">Sections</AnchorHeading>
      <p>
        One hands-on section per week, applied to YOUR product. Sections are
        not re-lectures — they&rsquo;re the feedback loop.
      </p>
      <table>
        <thead>
          <tr>
            <th>Wk</th>
            <th>Section</th>
            <th>What you ship</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((s) => {
            const wk = `wk${s.week.toString().padStart(2, "0")}`;
            return (
              <tr key={s.week}>
                <td>{s.week}</td>
                <td><a href={`${base}/sections/${wk}`}>{s.title}</a></td>
                <td>{s.mission}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export const sectionsIndexSearchBody =
  "Sections index activation audit cohort chart A/B test channel-fit worksheet viral asset app store TestFlight Play PWA lifecycle email stall diagnosis clinic";
