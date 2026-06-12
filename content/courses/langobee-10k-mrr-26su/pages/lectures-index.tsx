import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const rows: { week: number; cells: (string | { text: string; href: string })[] }[] = [
  { week: 1, cells: [{ text: "The honest dashboard", href: "lectures/wk01-l1" }, { text: "LangoBee's funnel, audited", href: "lectures/wk01-l2" }, "Foundations"] },
  { week: 2, cells: [{ text: "What a thesis is for", href: "lectures/wk02-l1" }, { text: "Pivot or persevere", href: "lectures/wk02-l2" }, "Foundations"] },
  { week: 3, cells: [{ text: "Quality is binary", href: "lectures/wk03-l1" }, { text: "Onboarding to first aha", href: "lectures/wk03-l2" }, "Retention"] },
  { week: 4, cells: [{ text: "Why they come back", href: "lectures/wk04-l1" }, { text: "Instrumenting return", href: "lectures/wk04-l2" }, "Retention"] },
  { week: 5, cells: [{ text: "Do things that don't scale", href: "lectures/wk05-l1" }, { text: "Reading tiny cohorts", href: "lectures/wk05-l2" }, "Retention"] },
  { week: 6, cells: [{ text: "Pricing is a test of belief", href: "lectures/wk06-l1" }, { text: "The trial funnel", href: "lectures/wk06-l2" }, "Monetization"] },
  { week: 7, cells: [{ text: "Paywall placement", href: "lectures/wk07-l1" }, { text: "Trial to paid", href: "lectures/wk07-l2" }, "Monetization"] },
  { week: 8, cells: [{ text: "Unit economics of $10K", href: "lectures/wk08-l1" }, { text: "Working backward to traffic", href: "lectures/wk08-l2" }, "Monetization"] },
  { week: 9, cells: [{ text: "Launching where learners live", href: "lectures/wk09-l1" }, { text: "The launch as an instrument", href: "lectures/wk09-l2" }, "Distribution"] },
  { week: 10, cells: [{ text: "The creator channel", href: "lectures/wk10-l1" }, { text: "Partner, sponsor, or affiliate", href: "lectures/wk10-l2" }, "Distribution"] },
  { week: 11, cells: [{ text: "Loops, not funnels", href: "lectures/wk11-l1" }, { text: "The content engine you already have", href: "lectures/wk11-l2" }, "Distribution"] },
  { week: 12, cells: [{ text: "The weekly machine", href: "lectures/wk12-l1" }, { text: "From here to $10K", href: "lectures/wk12-l2" }, "Synthesis"] },
];

export function LecturesIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="lectures">Lectures</AnchorHeading>
      <p>Two lectures per week, paired with that week\u2019s reading and section. Slides render to PDF.</p>
      {rows.length === 0 ? (
        <p style={{ color: "#888" }}>No lectures defined yet. Fill the <code>rows</code> array in <code>pages/lectures-index.tsx</code>.</p>
      ) : (
        <table>
          <thead><tr><th>Wk</th><th>Lecture 1</th><th>Lecture 2</th><th>Phase</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.week}>
                <td>{r.week}</td>
                {r.cells.map((c, i) => (
                  <td key={i}>{typeof c === "string" ? c : <a href={`${base}/${c.href}`}>{c.text}</a>}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export const lecturesIndexSearchBody = "Lectures index";
