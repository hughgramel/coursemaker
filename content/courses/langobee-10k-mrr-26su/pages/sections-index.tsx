import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const rows: { week: number; cells: (string | { text: string; href: string })[] }[] = [
  { week: 1, cells: [{ text: "Rebuild the de-alted dashboard from raw queries", href: "sections/wk01" }, "A PostHog + Supabase dashboard showing real signups, activation, return"] },
  { week: 2, cells: [{ text: "Write the fork decision memo", href: "sections/wk02" }, "Library vs shorts as falsifiable hypotheses with kill thresholds and a decision date"] },
  { week: 3, cells: [{ text: "Run the must-work checklist on real devices", href: "sections/wk03" }, "A defect list filed, blockers fixed, the 60-second first session designed"] },
  { week: 4, cells: [{ text: "Choose the hook; build the D1 dashboard", href: "sections/wk04" }, "One retention hook spec plus the de-alted cohort dashboard that judges it"] },
  { week: 5, cells: [{ text: "Outreach script and interview guide", href: "sections/wk05" }, "A Discord-norms-respecting script and a Mom Test interview guide, practiced live"] },
  { week: 6, cells: [{ text: "WTP script and price positioning", href: "sections/wk06" }, "Interview script plus positioning worksheet against LingQ, Duolingo, Dreaming Spanish"] },
  { week: 7, cells: [{ text: "Paywall placement audit", href: "sections/wk07" }, "A map of every payment mention and the upgrade triggers that should exist instead"] },
  { week: 8, cells: [{ text: "Build and stress-test the MRR model", href: "sections/wk08" }, "The $10K spreadsheet with three channel scenarios and a maximum CAC"] },
  { week: 9, cells: [{ text: "Draft launch posts; pre-mortem comments", href: "sections/wk09" }, "Reddit + Show HN drafts and written replies to the ten most likely hostile comments"] },
  { week: 10, cells: [{ text: "Creator prospect list and first emails", href: "sections/wk10" }, "50 ranked prospects from the catalogued channels plus five personalized emails"] },
  { week: 11, cells: [{ text: "Three clips through the pipeline", href: "sections/wk11" }, "An owned channel live with three posts and a defined loop metric"] },
  { week: 12, cells: [{ text: "Capstone red-team session", href: "sections/wk12" }, "The operating plan presented and stress-tested against its own kill criteria"] },
];

export function SectionsIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="sections">Sections</AnchorHeading>
      <p>One hands-on section per week, applied to YOUR work. Sections are the feedback loop.</p>
      {rows.length === 0 ? (
        <p style={{ color: "#888" }}>No sections defined yet. Fill the <code>rows</code> array in <code>pages/sections-index.tsx</code>.</p>
      ) : (
        <table>
          <thead><tr><th>Wk</th><th>Section</th><th>What you ship</th></tr></thead>
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

export const sectionsIndexSearchBody = "Sections index";
