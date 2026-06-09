import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const readings = [
  { wk: 1, title: "Funnel, niche, bio",                blurb: "The three-step follower funnel, the niche-voice-bio triangle, and what a bio that converts looks like." },
  { wk: 2, title: "Hooks and formats",                 blurb: "The first-line economics behind every post that earns impressions. Six opener patterns. Format-fit decisions." },
  { wk: 3, title: "The algorithm and the reply game",  blurb: "What the open-sourced X algorithm actually rewards. Why commenting matters at zero. The math of replies vs likes." },
  { wk: 4, title: "The weekly system",                 blurb: "A daily 60-minute creator routine, weekly batching, post-mix planning, and how to build a real creator network." },
  { wk: 5, title: "Analytics and iteration",           blurb: "Vanity vs signal metrics. The two ratios that actually predict growth. The weekly retrospective ritual." },
  { wk: 6, title: "The 90-day playbook",               blurb: "Three growth phases mapped to concrete tactics. Realistic timelines. Monetization options at 10k with real numbers." },
];

export function ReadingsIndex() {
  return (
    <>
      <AnchorHeading as="h1" id="readings">Readings</AnchorHeading>
      <p>
        There is no required external textbook for this course. The six weekly readings on this site
        ARE the textbook, written from primary sources (Paul Graham, Kevin Kelly, the open-sourced X
        algorithm, Justin Welsh, Dickie Bush and Nicolas Cole, Dan Koe, Andrew Chen, Casey Newton, and
        recent reporting on X algorithm changes through 2025).
      </p>
      <p>
        Each reading runs roughly 2,500-3,500 words and ends with 3-5 exercises plus a bibliography.
        If you want a paper copy, your browser&rsquo;s print to PDF works fine.
      </p>
      <ul>
        {readings.map(({ wk, title, blurb }) => (
          <li key={`wk${wk}`}>
            <a href={`${base}/readings/wk0${wk}`}>
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

export const readingsIndexSearchBody =
  "Readings index weekly readings textbook funnel niche bio hooks formats algorithm reply game weekly system analytics 90-day playbook";
