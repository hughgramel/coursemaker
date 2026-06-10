import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

interface ReadingRow { week: number; title: string; mission: string; }

const readings: ReadingRow[] = [
  { week: 1,  title: "The hiring funnel and the side doors",     mission: "How SWE hiring works, where applicants are filtered, and where the side doors are" },
  { week: 2,  title: "Positioning for two readers",              mission: "Resumes, GitHub, LinkedIn, and the public artifacts that earn attention" },
  { week: 3,  title: "The coding interview, format and patterns", mission: "What is tested, complexity reasoning, and the three early patterns" },
  { week: 4,  title: "Recursion, trees, and graphs",             mission: "Recursive thinking, BFS and DFS, and modeling problems as graphs" },
  { week: 5,  title: "Dynamic programming and the spoken solve", mission: "Recurrence-first DP and the skill of thinking aloud" },
  { week: 6,  title: "System design end to end",                 mission: "A worked design for a well-known product with storage, caching, and scale tradeoffs" },
  { week: 7,  title: "STAR and the full loop",                   mission: "Behavioral as pattern matching against leadership principles, then the loop in shape" },
  { week: 8,  title: "The unconventional path",                  mission: "Open source as resume, unpaid stints, find-a-problem-and-just-solve-it" },
  { week: 9,  title: "Closing offers",                           mission: "Recruiter ops, total comp, leveling, competing offers, and the script that protects the relationship" },
  { week: 10, title: "The two-track playbook",                   mission: "Synthesis: the formal funnel and side door, run together as one sprint" },
];

function pad(n: number) { return n.toString().padStart(2, "0"); }

export function ReadingsIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="readings">Readings</AnchorHeading>
      <p>The weekly readings ARE the textbook. Original writing, vetted from primary sources.</p>
      <table>
        <thead>
          <tr><th>Wk</th><th>Reading</th><th>Mission</th></tr>
        </thead>
        <tbody>
          {readings.map((r) => (
            <tr key={r.week}>
              <td>{r.week}</td>
              <td><a href={`${base}/readings/wk${pad(r.week)}`}>{r.title}</a></td>
              <td>{r.mission}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const readingsIndexSearchBody =
  "Readings index hiring funnel side doors positioning resume GitHub LinkedIn coding interview patterns recursion trees graphs dynamic programming spoken solve system design STAR behavioral loop unconventional open source unpaid stint find a problem closing offers negotiation playbook";
