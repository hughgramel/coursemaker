import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const rows: { week: number; cells: (string | { text: string; href: string })[] }[] = [
  // Fill rows as the course gets authored.
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
