import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const rows: { week: number; cells: (string | { text: string; href: string })[] }[] = [
  { week: 1, cells: [{ text: "Ground truth: reading your own funnel honestly", href: "readings/wk01" }, "Know the real numbers before changing anything"] },
  { week: 2, cells: [{ text: "Thesis discipline: when and why to pivot", href: "readings/wk02" }, "Decide the library-vs-shorts fork on purpose"] },
  { week: 3, cells: [{ text: "The broken-vacuum bar", href: "readings/wk03" }, "Make the product not-broken and the first minute guided"] },
  { week: 4, cells: [{ text: "Hooks: the reason to return tomorrow", href: "readings/wk04" }, "Ship the mechanism that brings a user back"] },
  { week: 5, cells: [{ text: "The 10-user test", href: "readings/wk05" }, "Hand-recruit, onboard, and honestly measure a real cohort"] },
  { week: 6, cells: [{ text: "Price as a hypothesis", href: "readings/wk06" }, "Fire the first trial; learn what anyone would pay"] },
  { week: 7, cells: [{ text: "Conversion: paywall placement and the first dollar", href: "readings/wk07" }, "Move the ask to the moment of demonstrated value"] },
  { week: 8, cells: [{ text: "The $10K math", href: "readings/wk08" }, "Work backward from $10K to subscribers, churn, and traffic"] },
  { week: 9, cells: [{ text: "Community launch", href: "readings/wk09" }, "Launch where learners gather without burning the channel"] },
  { week: 10, cells: [{ text: "Creators and the 50% question", href: "readings/wk10" }, "Answer the partner question with expected value, not hope"] },
  { week: 11, cells: [{ text: "Owned loops", href: "readings/wk11" }, "Turn the content engine into compounding distribution"] },
  { week: 12, cells: [{ text: "The operating system", href: "readings/wk12" }, "Run the weekly machine; write the plan to $10K"] },
];

export function ReadingsIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="readings">Readings</AnchorHeading>
      <p>The weekly readings ARE the textbook. Original writing vetted from primary sources.</p>
      {rows.length === 0 ? (
        <p style={{ color: "#888" }}>No readings defined yet. Fill the <code>rows</code> array in <code>pages/readings-index.tsx</code>.</p>
      ) : (
        <table>
          <thead><tr><th>Wk</th><th>Reading</th><th>Mission</th></tr></thead>
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

export const readingsIndexSearchBody = "Readings index";
