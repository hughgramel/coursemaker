import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

interface Assignment { code: string; slug: string; title: string; out: string; due: string; }

const assignments: Assignment[] = [
  { code: "HW1",      slug: "1",        title: "Build a 12-component Figma starter kit for your product", out: "End Wk 1", due: "End Wk 2" },
  { code: "HW2",      slug: "2",        title: "Type-only redesign of a competitor landing page",          out: "End Wk 3", due: "End Wk 5" },
  { code: "HW3",      slug: "3",        title: "Design a full landing page for your product",              out: "End Wk 6", due: "End Wk 7" },
  { code: "HW4",      slug: "4",        title: "Brand sheet for your product",                              out: "End Wk 8", due: "End Wk 9" },
  { code: "Capstone", slug: "capstone", title: "Launch package, demo day",                                  out: "End Wk 7", due: "Demo day, Wk 10" },
];

export function HwIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="assignments">Assignments</AnchorHeading>
      <p>
        Every assignment is applied to YOUR product. There is no toy data, no
        fake target, no reference solution. You submit Figma files (or public
        Figma share links) and short written justifications.
      </p>
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
    </>
  );
}

export const hwIndexSearchBody =
  "Assignments homework starter kit type-only redesign landing page brand sheet capstone launch package demo day";
