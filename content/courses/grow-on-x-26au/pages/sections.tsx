import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const sections: { week: number; title: string; mission: string }[] = [
  { week: 1, title: "Audit five accounts in your niche", mission: "Reverse-engineer what works before writing a single post." },
  { week: 2, title: "Hook lab",                          mission: "Write twenty hooks against one source claim. Peer-rate, pick three." },
  { week: 3, title: "Reply sprint",                      mission: "Ten substantive replies + five real DMs to accounts 10-100x your size." },
  { week: 4, title: "Build your weekly system",          mission: "Daily 60-minute routine + weekly batching block + monthly retrospective." },
  { week: 5, title: "Read your analytics",               mission: "Classify your top 10 posts. Double down on two patterns, retire one." },
  { week: 6, title: "Capstone demo day",                 mission: "Present your 90-day playbook. Get specific feedback on the highest-risk assumption." },
];

export function SectionsIndex() {
  return (
    <>
      <AnchorHeading as="h1" id="sections">Sections</AnchorHeading>
      <p>
        One hands-on section per week, applied to YOUR account. Sections are not
        re-lectures, they&rsquo;re the feedback loop.
      </p>
      <table>
        <thead>
          <tr>
            <th>Wk</th>
            <th>Section</th>
            <th>What you ship</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((s) => {
            const wk = `wk${s.week.toString().padStart(2, "0")}`;
            return (
              <tr key={s.week}>
                <td>{s.week}</td>
                <td><a href={`${base}/sections/${wk}`}>{s.title}</a></td>
                <td>{s.mission}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export const sectionsIndexSearchBody =
  "Sections index audit accounts hook lab reply sprint weekly system analytics capstone demo day";
