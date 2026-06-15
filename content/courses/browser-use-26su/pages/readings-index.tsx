import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const rows: { week: number; phase: string; title: string; href: string }[] = [
  { week: 1, phase: "Foundations", title: "What browser-use is and the loop", href: "readings/wk01" },
  { week: 2, phase: "Foundations", title: "How an agent sees a page", href: "readings/wk02" },
  { week: 3, phase: "Core mechanics", title: "Capturing browser state", href: "readings/wk03" },
  { week: 4, phase: "Core mechanics", title: "Structured decisions", href: "readings/wk04" },
  { week: 5, phase: "Core mechanics", title: "Acting on the page", href: "readings/wk05" },
  { week: 6, phase: "Composition", title: "Custom tools and structured results", href: "readings/wk06" },
  { week: 7, phase: "Composition", title: "Driving a real browser", href: "readings/wk07" },
  { week: 8, phase: "Frontier", title: "Making agents reliable", href: "readings/wk08" },
  { week: 9, phase: "Frontier", title: "Evaluation, deployment, ecosystem", href: "readings/wk09" },
  { week: 10, phase: "Synthesis", title: "Designing a complete agent", href: "readings/wk10" },
];

export function ReadingsIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="readings">Readings</AnchorHeading>
      <p>
        There is no required external textbook. These weekly readings are the textbook: one
        chapter a week, each the durable artifact you return to. Read the week&rsquo;s chapter
        before its lectures and section. Each chapter ends with retrieval exercises and a
        bibliography of the sources it draws on.
      </p>
      <table>
        <thead>
          <tr><th>Wk</th><th>Phase</th><th>Chapter</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.week}>
              <td>{r.week}</td>
              <td>{r.phase}</td>
              <td><a href={`${base}/${r.href}`}>{r.title}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const readingsIndexSearchBody =
  "readings index textbook chapters browser-use loop perception state structured decisions actions custom tools real browser reliability evaluation capstone";
