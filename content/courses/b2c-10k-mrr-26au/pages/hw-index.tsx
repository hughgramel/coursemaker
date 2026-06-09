import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const assignments: {
  code: string;
  slug: string;
  title: string;
  out: string;
  due: string;
  weight: string;
}[] = [
  { code: "HW1", slug: "1", title: "Funnel + first instrumentation", out: "End Wk 1", due: "End Wk 2",  weight: "10%" },
  { code: "HW2", slug: "2", title: "Pricing + paywall",              out: "End Wk 3", due: "End Wk 4",  weight: "10%" },
  { code: "HW3", slug: "3", title: "Wedge channel sprint",           out: "End Wk 6", due: "End Wk 7",  weight: "10%" },
  { code: "HW4", slug: "4", title: "Retention engine",                out: "End Wk 8", due: "End Wk 9",  weight: "10%" },
  { code: "Capstone", slug: "capstone", title: "Plan + ship the path to $10k MRR", out: "End Wk 8 (scaffold)", due: "End Wk 10 (defense)", weight: "30%" },
];

export function HwIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="assignments">Assignments</AnchorHeading>
      <p>
        Four homeworks + one capstone. Every assignment is applied to YOUR
        product — there is no toy data, no fake target, no reference solution.
        Total: 70% of the grade.
      </p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Out</th>
            <th>Due</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a) => (
            <tr key={a.slug}>
              <td>{a.code}</td>
              <td><a href={`${base}/hw/${a.slug}`}>{a.title}</a></td>
              <td>{a.out}</td>
              <td>{a.due}</td>
              <td>{a.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const hwIndexSearchBody =
  "Assignments homework capstone HW1 HW2 HW3 HW4 funnel instrumentation pricing paywall wedge channel sprint retention engine plan ship path to $10k MRR";
