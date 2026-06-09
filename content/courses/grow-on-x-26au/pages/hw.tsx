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
  { code: "HW1",      slug: "1",        title: "Define your niche and rewrite your bio",     out: "End Wk 1",            due: "End Wk 2",                    weight: "10%" },
  { code: "HW2",      slug: "2",        title: "Ship twenty posts in seven days",             out: "End Wk 2",            due: "End Wk 3",                    weight: "15%" },
  { code: "HW3",      slug: "3",        title: "Run your weekly system for two weeks",        out: "End Wk 4",            due: "End Wk 5",                    weight: "15%" },
  { code: "HW4",      slug: "4",        title: "Your thirty-day growth experiment",            out: "End Wk 5",            due: "End Wk 6 (design + wk1)",     weight: "15%" },
  { code: "Capstone", slug: "capstone", title: "Your 90-day playbook to 10,000 followers",     out: "End Wk 4 (scaffold)", due: "End Wk 6 (demo + revise)",     weight: "30%" },
];

export function HwIndex() {
  return (
    <>
      <AnchorHeading as="h1" id="assignments">Assignments</AnchorHeading>
      <p>
        Four homeworks plus one capstone. Every assignment is applied to YOUR
        account, with real numbers, real posts, and real audiences. Each one
        produces an artifact you reuse later in the course. Total: 85% of the grade.
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
  "Assignments homework capstone HW1 HW2 HW3 HW4 niche bio twenty posts weekly system growth experiment 90-day playbook";
