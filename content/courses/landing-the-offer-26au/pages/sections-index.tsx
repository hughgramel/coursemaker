import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

interface SectionRow { week: number; title: string; mission: string; }

const sections: SectionRow[] = [
  { week: 1,  title: "Target-company-list workshop",   mission: "Build a 30+ row spreadsheet ranked by fit, reach, and side-door accessibility" },
  { week: 2,  title: "Resume teardown clinic",         mission: "Rewrite three of your own bullets live; sketch one public artifact you’ll ship this term" },
  { week: 3,  title: "Pattern sprint 1",               mission: "Three timed mediums (hash map, two pointer, sliding window) with debrief" },
  { week: 4,  title: "Pattern sprint 2",               mission: "Three timed mediums (binary tree, BFS, DFS) with debrief" },
  { week: 5,  title: "Pattern sprint 3",               mission: "Two DP mediums plus a recorded narrated solve with peer feedback" },
  { week: 6,  title: "System design lab",              mission: "Sketch URL shortener or rate limiter for 60 minutes with peer critique" },
  { week: 7,  title: "STAR story bank workshop",       mission: "Write 12 stories, peer-review three under timed conditions" },
  { week: 8,  title: "Triage week",                    mission: "Ship one side-door move: a PR, three cold emails, or one public artifact at a target company" },
  { week: 9,  title: "Pipeline and negotiation lab",   mission: "Hour 1 pipeline triage; hour 2 negotiation role-play in pairs, swap sides" },
  { week: 10, title: "Mock interview marathon",        mission: "Full virtual on-site: four back-to-back rounds (coding, coding, design, behavioral), then debrief" },
];

function pad(n: number) { return n.toString().padStart(2, "0"); }

export function SectionsIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="sections">Sections</AnchorHeading>
      <p>One hands-on section per week, applied to YOUR work. Sections are the feedback loop.</p>
      <table>
        <thead>
          <tr><th>Wk</th><th>Section</th><th>What you ship</th></tr>
        </thead>
        <tbody>
          {sections.map((s) => (
            <tr key={s.week}>
              <td>{s.week}</td>
              <td><a href={`${base}/sections/wk${pad(s.week)}`}>{s.title}</a></td>
              <td>{s.mission}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const sectionsIndexSearchBody =
  "Sections index target company list resume teardown pattern sprint hash map two pointer sliding window binary tree BFS DFS DP system design lab STAR story bank triage open source cold email pipeline negotiation lab mock interview marathon";
