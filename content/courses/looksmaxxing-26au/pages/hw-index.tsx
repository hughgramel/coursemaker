import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const assignments: { code: string; slug: string; title: string; out: string; due: string }[] = [
  { code: "HW1",      slug: "1",        title: "Honest baseline audit",                     out: "Start Wk 1",  due: "End Wk 3" },
  { code: "HW2",      slug: "2",        title: "Two-week skincare and grooming log",         out: "Start Wk 4",  due: "End Wk 6" },
  { code: "HW3",      slug: "3",        title: "Strength program and nutrition plan",        out: "Start Wk 5",  due: "End Wk 8" },
  { code: "HW4",      slug: "4",        title: "Five-look capsule wardrobe",                 out: "Start Wk 7",  due: "End Wk 9" },
  { code: "Capstone", slug: "capstone", title: "Personal twelve-week plan and before-after", out: "Start Wk 7",  due: "End Wk 10 (defense)" },
];

export function HwIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="assignments">Assignments</AnchorHeading>
      <p>
        Four homeworks plus one capstone. Every assignment is applied to YOUR
        body, YOUR skin, YOUR wardrobe. There is no reference solution, no toy
        data. Honesty over heroics.
      </p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Out</th>
            <th>Due</th>
          </tr>
        </thead>
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
    </>
  );
}

export const hwIndexSearchBody =
  "Assignments homework capstone HW1 HW2 HW3 HW4 baseline audit skincare grooming log strength nutrition plan capsule wardrobe twelve week plan before after";
