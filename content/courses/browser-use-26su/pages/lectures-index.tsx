import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

type Row = { week: number; phase: string; l1: [string, string]; l2: [string, string] };

const rows: Row[] = [
  { week: 1, phase: "Foundations", l1: ["Why a browser needs an agent", "lectures/wk01-l1"], l2: ["The loop in three moves", "lectures/wk01-l2"] },
  { week: 2, phase: "Foundations", l1: ["The DOM, the accessibility tree, and what gets kept", "lectures/wk02-l1"], l2: ["Numbered elements and the vision option", "lectures/wk02-l2"] },
  { week: 3, phase: "Core mechanics", l1: ["BrowserSession and the browser-state summary", "lectures/wk03-l1"], l2: ["Fitting the page into a prompt", "lectures/wk03-l2"] },
  { week: 4, phase: "Core mechanics", l1: ["Making the model answer in a known shape", "lectures/wk04-l1"], l2: ["Inside AgentOutput", "lectures/wk04-l2"] },
  { week: 5, phase: "Core mechanics", l1: ["The tools registry and built-in actions", "lectures/wk05-l1"], l2: ["Dispatch, multi-act, and injection", "lectures/wk05-l2"] },
  { week: 6, phase: "Composition", l1: ["Writing a custom action", "lectures/wk06-l1"], l2: ["Structured output and safe inputs", "lectures/wk06-l2"] },
  { week: 7, phase: "Composition", l1: ["Persistent profiles and real browsers", "lectures/wk07-l1"], l2: ["Multi-tab work and getting data out", "lectures/wk07-l2"] },
  { week: 8, phase: "Frontier", l1: ["When agents go wrong", "lectures/wk08-l1"], l2: ["Planning, memory, and task framing", "lectures/wk08-l2"] },
  { week: 9, phase: "Frontier", l1: ["Does it actually work? Evaluating web agents", "lectures/wk09-l1"], l2: ["Shipping it: CLI, MCP, cloud, and design philosophy", "lectures/wk09-l2"] },
  { week: 10, phase: "Synthesis", l1: ["Putting the loop to work", "lectures/wk10-l1"], l2: ["Capstone studio and review", "lectures/wk10-l2"] },
];

export function LecturesIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="lectures">Lectures</AnchorHeading>
      <p>
        Two lectures a week, each paired with that week&rsquo;s reading and section. The reading
        is the durable chapter; slides render to PDF and are the disposable companion. Start with
        the <a href={`${base}/readings`}>reading</a> before lecture.
      </p>
      <table>
        <thead>
          <tr><th>Wk</th><th>Phase</th><th>Lecture 1</th><th>Lecture 2</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.week}>
              <td>{r.week}</td>
              <td>{r.phase}</td>
              <td><a href={`${base}/${r.l1[1]}`}>{r.l1[0]}</a></td>
              <td><a href={`${base}/${r.l2[1]}`}>{r.l2[0]}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const lecturesIndexSearchBody =
  "lectures index browser-use agent loop DOM selector map BrowserSession AgentOutput tools registry custom actions real browser reliability evaluation capstone";
