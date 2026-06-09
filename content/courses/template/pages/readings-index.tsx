import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const rows: { week: number; cells: (string | { text: string; href: string })[] }[] = [
  // Fill rows as the course gets authored.
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
