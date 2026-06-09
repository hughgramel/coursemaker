import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const sections = [
  { wk: 1, title: "Audit five accounts in your niche",   blurb: "Reverse-engineer what works in your prospective niche before you write a single post." },
  { wk: 2, title: "Hook lab",                             blurb: "Write twenty hooks against one source claim. Peer-rate each. Pick the three you would publish." },
  { wk: 3, title: "Reply sprint",                         blurb: "Ten substantive replies to accounts 10-100x your size. Five genuine DMs. Track profile clicks the next day." },
  { wk: 4, title: "Build your weekly system",             blurb: "Daily 60-minute routine, a weekly batching block, a monthly retrospective. Pick a template calendar." },
  { wk: 5, title: "Read your analytics",                  blurb: "Pull 30 days of X analytics. Classify top 10 posts. Double down on two patterns, retire one." },
  { wk: 6, title: "Capstone demo day",                    blurb: "Present your 90-day playbook to two peers. Get specific feedback on the highest-risk assumption." },
];

export function SectionsIndex() {
  return (
    <>
      <AnchorHeading as="h1" id="sections">Sections</AnchorHeading>
      <p>
        Sections are hands-on, not re-lectures. Each one ends with an artifact you carry into the next
        week&rsquo;s work: a niche audit, a hook bank, a reply log, a written weekly system, an analytics
        classification, or your capstone presentation.
      </p>
      <ul>
        {sections.map(({ wk, title, blurb }) => (
          <li key={`wk${wk}`}>
            <a href={`${base}/sections/wk0${wk}`}>
              <strong>Week {wk} — {title}</strong>
            </a>
            <br />
            {blurb}
          </li>
        ))}
      </ul>
    </>
  );
}

export const sectionsIndexSearchBody =
  "Sections index all six worksheets audit accounts hook lab reply sprint weekly system analytics capstone demo day";
