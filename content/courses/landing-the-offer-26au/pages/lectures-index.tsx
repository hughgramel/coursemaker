import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

interface Lecture { week: number; l1: string; l2: string; phase: string; }

const lectures: Lecture[] = [
  { week: 1,  l1: "How SWE hiring actually works",         l2: "The new-grad pipeline",                          phase: "Foundations" },
  { week: 2,  l1: "Resumes that pass two readers",         l2: "GitHub, LinkedIn, and public artifacts",         phase: "Foundations" },
  { week: 3,  l1: "The coding interview format",           l2: "Two-pointer, hash map, sliding window",          phase: "Core mechanics" },
  { week: 4,  l1: "Recursion as a pattern",                l2: "BFS and DFS in interview shape",                 phase: "Core mechanics" },
  { week: 5,  l1: "Dynamic programming without the panic", l2: "Communicating while you code",                   phase: "Core mechanics" },
  { week: 6,  l1: "System design as a conversation",       l2: "Storage, caching, and scale",                    phase: "Composition" },
  { week: 7,  l1: "Behavioral interviews are pattern matching", l2: "The interview loop end to end",             phase: "Composition" },
  { week: 8,  l1: "Open source as resume",                 l2: "Unpaid stints and find-a-problem moves",         phase: "Frontier" },
  { week: 9,  l1: "Recruiters, applications, take-homes, on-sites", l2: "Negotiation, leveling, multi-offer dynamics", phase: "Frontier" },
  { week: 10, l1: "The application sprint",                l2: "Demo day and personal playbook",                 phase: "Synthesis" },
];

function pad(n: number) { return n.toString().padStart(2, "0"); }

export function LecturesIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="lectures">Lectures</AnchorHeading>
      <p>Two lectures per week, paired with that week&rsquo;s reading and section. Slides render to PDF.</p>
      <table>
        <thead>
          <tr><th>Wk</th><th>Lecture 1</th><th>Lecture 2</th><th>Phase</th></tr>
        </thead>
        <tbody>
          {lectures.map((l) => {
            const wk = `wk${pad(l.week)}`;
            return (
              <tr key={l.week}>
                <td>{l.week}</td>
                <td>
                  <a href={`${base}/lectures/${wk}-l1`}>{l.l1}</a>{" "}<span style={{ color: "#bbb" }}>·</span>{" "}
                  <a href={`${base}/slides/${wk}-l1.pdf`}>slides</a>
                </td>
                <td>
                  <a href={`${base}/lectures/${wk}-l2`}>{l.l2}</a>{" "}<span style={{ color: "#bbb" }}>·</span>{" "}
                  <a href={`${base}/slides/${wk}-l2.pdf`}>slides</a>
                </td>
                <td>{l.phase}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export const lecturesIndexSearchBody =
  "Lectures index hiring funnel new-grad pipeline resume GitHub LinkedIn coding interview format two pointer hash map sliding window recursion BFS DFS dynamic programming communication system design storage caching behavioral STAR open source unpaid stint find a problem recruiter negotiation application sprint demo day";
