import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const readings: { week: number; title: string; mission: string }[] = [
  { week: 1, title: "Funnel, niche, bio",               mission: "Make your profile a conversion landing page, not a journal." },
  { week: 2, title: "Hooks and formats",                mission: "Earn the show-more click on the first line, every time." },
  { week: 3, title: "The algorithm and the reply game", mission: "Use what X actually rewards. Comment your way into the room." },
  { week: 4, title: "The weekly system",                mission: "Build a routine that survives a year, not a sprint." },
  { week: 5, title: "Analytics and iteration",          mission: "Replace vanity metrics with two ratios that predict growth." },
  { week: 6, title: "The 90-day playbook",              mission: "Commit to a plan with phased milestones and a real monetization path." },
];

export function ReadingsIndex() {
  return (
    <>
      <AnchorHeading as="h1" id="readings">Readings</AnchorHeading>
      <p>
        The weekly readings ARE the textbook, original writing vetted from
        primary sources (Paul Graham, Kevin Kelly, the open-sourced X algorithm,
        Justin Welsh, Dickie Bush and Nicolas Cole, Dan Koe, Andrew Chen, Casey
        Newton). Each runs roughly 2,500-3,500 words with exercises and a
        bibliography. Start each week here.
      </p>
      <table>
        <thead>
          <tr>
            <th>Wk</th>
            <th>Reading</th>
            <th>Mission</th>
          </tr>
        </thead>
        <tbody>
          {readings.map((r) => {
            const wk = `wk${r.week.toString().padStart(2, "0")}`;
            return (
              <tr key={r.week}>
                <td>{r.week}</td>
                <td><a href={`${base}/readings/${wk}`}>{r.title}</a></td>
                <td>{r.mission}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export const readingsIndexSearchBody =
  "Readings index textbook funnel niche bio hooks formats algorithm reply game weekly system analytics 90-day playbook";
