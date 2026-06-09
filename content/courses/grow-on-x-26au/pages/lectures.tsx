import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const lectures = [
  { wk: 1, l: 1, title: "The follower funnel",            blurb: "Impression to profile click to follow as a conversion funnel. Why follower count alone is a lagging indicator." },
  { wk: 1, l: 2, title: "Niche, voice, and bio craft",    blurb: "Picking a niche narrow enough to be remembered. Bio as a conversion landing page." },
  { wk: 2, l: 1, title: "Anatomy of a hook",              blurb: "The first line as the only line that matters. The six Bush and Cole opener patterns." },
  { wk: 2, l: 2, title: "Post formats and when each wins", blurb: "Single posts, threads, quote posts, replies, long-form. When sequence earns the show-more click." },
  { wk: 3, l: 1, title: "How posts spread on X",          blurb: "The three-stage recommendation pipeline. Engagement velocity, dwell time, and the 2025 weight table." },
  { wk: 3, l: 2, title: "The reply game and reaching out first", blurb: "Why commenting matters more than posting at zero. Do things that don't scale (Graham, 2013)." },
  { wk: 4, l: 1, title: "Content calendars and batching", blurb: "Daily posting that survives a year. Hub-and-spoke, theme days, free-form options." },
  { wk: 4, l: 2, title: "Collaboration and the network",  blurb: "Mutual amplification with other creators. Quote-post chains, group chats, the friendly cluster effect." },
  { wk: 5, l: 1, title: "What to measure",                blurb: "Vanity vs signal metrics. Impressions per follower. Profile-visit-to-follow rate." },
  { wk: 5, l: 2, title: "Testing and iterating",          blurb: "Same idea, two hooks. Sample sizes for solo creators. The weekly retrospective ritual." },
  { wk: 6, l: 1, title: "The 10k roadmap",                blurb: "Three growth phases (0 to 1k, 1k to 5k, 5k to 10k). What changes at each. Common stalls." },
  { wk: 6, l: 2, title: "Sustainable growth and life after 10k", blurb: "Burnout avoidance. Monetization options at 10k. Audience loyalty vs audience size." },
];

export function LecturesIndex() {
  return (
    <>
      <AnchorHeading as="h1" id="lectures">Lectures</AnchorHeading>
      <p>
        Two lectures per week across six weeks. Each lecture page includes a topics list, slide PDF,
        the week&rsquo;s assigned reading, and 3-5 follow-up discussion questions you can bring to section.
      </p>
      <ul>
        {lectures.map(({ wk, l, title, blurb }) => (
          <li key={`wk${wk}-l${l}`}>
            <a href={`${base}/lectures/wk0${wk}-l${l}`}>
              <strong>Week {wk}, Lecture {l} — {title}</strong>
            </a>
            <br />
            {blurb}
          </li>
        ))}
      </ul>
    </>
  );
}

export const lecturesIndexSearchBody =
  "Lectures index all twelve lectures Week 1 through Week 6 follower funnel niche hook reply game algorithm calendar collaboration analytics roadmap";
