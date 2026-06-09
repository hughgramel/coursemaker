import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

interface LectureLink {
  week: number;
  l1: string;
  l2: string;
  phase: string;
}

const lectures: LectureLink[] = [
  { week: 1, phase: "Foundations",    l1: "The follower funnel",          l2: "Niche, voice, and bio craft" },
  { week: 2, phase: "Core mechanics", l1: "Anatomy of a hook",            l2: "Post formats and when each wins" },
  { week: 3, phase: "Core mechanics", l1: "How posts spread on X",        l2: "The reply game and reaching out first" },
  { week: 4, phase: "Composition",    l1: "Content calendars and batching", l2: "Collaboration and the network" },
  { week: 5, phase: "Frontier",       l1: "What to measure",              l2: "Testing and iterating" },
  { week: 6, phase: "Synthesis",      l1: "The 10k roadmap",              l2: "Sustainable growth and life after 10k" },
];

export function LecturesIndex() {
  return (
    <>
      <AnchorHeading as="h1" id="lectures">Lectures</AnchorHeading>
      <p>
        Two lectures per week, paired with that week&rsquo;s reading and section.
        Slides render to PDF.
      </p>
      <table>
        <thead>
          <tr>
            <th>Wk</th>
            <th>Lecture 1</th>
            <th>Lecture 2</th>
            <th>Phase</th>
          </tr>
        </thead>
        <tbody>
          {lectures.map((l) => {
            const wk = `wk${l.week.toString().padStart(2, "0")}`;
            return (
              <tr key={l.week}>
                <td>{l.week}</td>
                <td>
                  <a href={`${base}/lectures/${wk}-l1`}>{l.l1}</a>
                  {" · "}
                  <a href={`${base}/slides/${wk}-l1.pdf`}>slides</a>
                </td>
                <td>
                  <a href={`${base}/lectures/${wk}-l2`}>{l.l2}</a>
                  {" · "}
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
  "Lectures index funnel niche bio hook format algorithm reply game calendar batching collaboration network analytics testing 10k roadmap sustainable growth";
