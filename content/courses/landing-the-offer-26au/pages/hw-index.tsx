import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

interface Assignment { code: string; slug: string; title: string; out: string; due: string; }

const assignments: Assignment[] = [
  { code: "HW1",      slug: "1",        title: "Resume and portfolio audit",                                out: "Week 1", due: "Week 3"  },
  { code: "HW2",      slug: "2",        title: "30-problem LeetCode pattern sprint",                        out: "Week 3", due: "Week 5"  },
  { code: "HW3",      slug: "3",        title: "Recorded mock coding interview",                            out: "Week 5", due: "Week 7"  },
  { code: "HW4",      slug: "4",        title: "System design write-up for a well-known product",           out: "Week 6", due: "Week 8"  },
  { code: "HW5",      slug: "5",        title: "STAR story bank, twelve stories",                           out: "Week 7", due: "Week 9"  },
  { code: "Capstone", slug: "capstone", title: "Application sprint, full mock loop, one unconventional move", out: "Week 7", due: "Week 10" },
];

export function HwIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="assignments">Assignments</AnchorHeading>
      <p>Every assignment is applied to YOUR work. There is no toy data, no fake target, no reference solution.</p>
      <table>
        <thead>
          <tr><th>#</th><th>Title</th><th>Out</th><th>Due</th></tr>
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
  "Assignments homework HW1 resume portfolio audit HW2 LeetCode pattern sprint HW3 recorded mock coding interview HW4 system design write-up HW5 STAR story bank capstone application sprint mock loop unconventional move";
