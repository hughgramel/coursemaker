import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const assignments: { code: string; slug: string; title: string; out: string; due: string }[] = [
  { code: "HW1", slug: "1", title: "The honest dashboard", out: "End Wk 1", due: "End Wk 3" },
  { code: "HW2", slug: "2", title: "MVP-grade plus the cohort test", out: "End Wk 3", due: "End Wk 5" },
  { code: "HW3", slug: "3", title: "First dollar", out: "End Wk 6", due: "End Wk 8" },
  { code: "HW4", slug: "4", title: "The launch and the creator wave", out: "End Wk 9", due: "End Wk 11" },
  { code: "CAPSTONE", slug: "capstone", title: "The $10K MRR operating plan", out: "End Wk 8", due: "End Wk 12" },
];

export function HwIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="assignments">Assignments</AnchorHeading>
      <p>Every assignment is applied to YOUR work. There is no toy data, no fake target, no reference solution.</p>
      {assignments.length === 0 ? (
        <p style={{ color: "#888" }}>No assignments defined yet. Fill the <code>assignments</code> array in <code>pages/hw-index.tsx</code>.</p>
      ) : (
        <table>
          <thead><tr><th>#</th><th>Title</th><th>Out</th><th>Due</th></tr></thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.slug}>
                <td>{a.code}</td>
                <td><a href={`${base}/hw/${a.slug}`}>{a.title}</a></td>
                <td>{a.out}</td>
                <td>{a.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export const hwIndexSearchBody = "Assignments homework capstone";
