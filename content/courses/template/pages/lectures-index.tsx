import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const rows: { week: number; cells: (string | { text: string; href: string })[] }[] = [
  // Fill rows as the course gets authored.
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
