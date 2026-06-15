import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const rows: { week: number; phase: string; title: string; href: string }[] = [
  { week: 1, phase: "Foundations", title: "Run and read your first agents", href: "sections/wk01" },
  { week: 2, phase: "Foundations", title: "Mapping indices to elements", href: "sections/wk02" },
  { week: 3, phase: "Core mechanics", title: "Two sessions, two state summaries", href: "sections/wk03" },
  { week: 4, phase: "Core mechanics", title: "Dissecting AgentOutput", href: "sections/wk04" },
  { week: 5, phase: "Core mechanics", title: "Following one click through the loop", href: "sections/wk05" },
  { week: 6, phase: "Composition", title: "A custom tool with a typed result", href: "sections/wk06" },
  { week: 7, phase: "Composition", title: "Reuse a login across tabs", href: "sections/wk07" },
  { week: 8, phase: "Frontier", title: "Make a flaky agent reliable", href: "sections/wk08" },
  { week: 9, phase: "Frontier", title: "One task, three ways: a scorecard", href: "sections/wk09" },
  { week: 10, phase: "Synthesis", title: "Capstone studio", href: "sections/wk10" },
];

export function SectionsIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="sections">Sections</AnchorHeading>
      <p>
        One hands-on worksheet a week. Sections are where the skill is built: you run real code,
        inspect what the agent does, and get a tight feedback loop with a self-grading rubric.
        Each section opens with a five-minute retrieval drill on the prior week, so earlier ideas
        stay fresh.
      </p>
      <table>
        <thead>
          <tr><th>Wk</th><th>Phase</th><th>Worksheet</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.week}>
              <td>{r.week}</td>
              <td>{r.phase}</td>
              <td><a href={`${base}/${r.href}`}>{r.title}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const sectionsIndexSearchBody =
  "sections index worksheets hands-on browser-use retrieval drill run agents selector map AgentOutput custom tool login reliability scorecard capstone studio";
