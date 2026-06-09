import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW2, Ship twenty posts in seven days",
  tagline: "Volume builds the muscle. Variety builds the dataset Week 5 needs.",
  outDate: "Week 2",
  dueDate: "Week 3",
  overview: [
    "Writing in public gets easier only by doing it in volume. This assignment asks you to publish twenty posts across seven consecutive days on your X account. The purpose is not perfection: it is repetition under mild constraint. Each post forces a decision about hook, format, and idea, and twenty of those decisions in a week build faster than any amount of preparation. Cole (2021) calls this the Rate of Revelation: the only way to find out which ideas land is to put them in front of an audience at speed.",
    "A post counts toward the twenty if it is original content published from your own account during the seven-day window. Retweets without comment do not count. Quote posts with your own take count. Threads count as one post regardless of length. The mix requirements below specify exactly how those twenty slots should be filled: twelve single posts, three threads, three quote posts, and two long-form posts. Meeting that mix is part of the grade because Week 5 analytics work requires enough variety to compare across formats.",
  ],
  goals: [
    "Publish twenty original posts within a single seven-day window without missing a day",
    "Apply at least four of the six Bush and Cole opener patterns (Ship 30 for 30, 2020) across your post set",
    "Construct threads using the Ship 30 lead-in, body, TL;DR, and CTA structure from Bush and Cole",
    "Write single posts that carry one idea in under 280 characters per the Welsh (2022) single-post anatomy",
    "Compose long-form posts that sustain reader attention through payoff density rather than mere length",
    "Produce a tracking sheet that records format, opener pattern, and four engagement metrics per post",
  ],
  background: [
    "Three bodies of work underpin this assignment. First, Nicholas Cole&rsquo;s Rate of Revelation (Cole 2021): the reader decides whether to keep reading in the first line, and the fastest way to calibrate your first lines is to publish many of them and observe which earn a second click. Second, the six opener patterns catalogued by Dickie Bush and Nicholas Cole in their Ship 30 for 30 essay series (Bush and Cole 2020): strong declarative, thought-provoking question, controversial opinion, moment in time, vulnerable statement, and weird or unique insight. Each pattern activates a different reader reflex, and the tracking sheet in this assignment lets you compare their performance directly. Third, the single-post anatomy described by Tom Welsh (Welsh 2022): one idea per post, a concrete claim in the first line, no filler sentences, and an ending that either answers the claim or raises a harder question. Long-form posts follow the same discipline at greater length, and Metricool&rsquo;s 2024 X study found that posts above roughly 1,000 characters outperform threads in raw reach, making them a format worth testing alongside shorter formats.",
  ],
  instructions: [
    {
      title: "Generate a deep idea bank (40+ raw ideas)",
      body: "Before you write a single publishable post, fill a document with at least forty raw ideas. A raw idea is one sentence: a claim, an observation, a question, or a story fragment. Do not filter during generation. Forty ideas give you enough to pick twenty you believe in and still have surplus to draw on if a post falls flat mid-week.",
      steps: [
        "List every question someone new to your niche asks in the first month. Each question is a potential post.",
        "List ten things you believe about your niche that most people in it would push back on. Controversial opinions make strong declarative and controversial-opinion openers.",
        "List five moments in your own experience with this niche that carry a concrete detail: a date, a number, a specific failure. These are your moment-in-time and vulnerable-statement material.",
        "Mark each idea with a candidate format: S (single), T (thread), Q (quote), L (long-form). This primes the scheduling step.",
      ],
    },
    {
      title: "Schedule twenty posts across the seven days",
      body: "Mix formats deliberately. Do not publish twenty single posts; do not publish twenty threads. Spread the load so you have data across all four formats by the time Week 5 arrives.",
      steps: [
        "12 single posts (one idea each, under 280 characters, following Welsh&rsquo;s anatomy: concrete claim in line one, no filler, a payoff in the final line)",
        "3 threads (each 5-9 posts, structured per Bush and Cole: lead-in tweet, numbered body posts, TL;DR post, CTA post)",
        "3 quote posts (find a post by someone else in your niche, quote it with 1-3 sentences of your own take; the take must add information, not just agree)",
        "2 long-form posts (use X&rsquo;s 25,000-character capacity; from Metricool&rsquo;s 2024 X study, long-form outperforms threads in reach; aim for 800-1,500 characters minimum and treat each paragraph as its own payoff unit)",
      ],
    },
    {
      title: "Use at least four of the six Bush and Cole opener patterns",
      body: "Track which opener you used per post in your sheet. The six patterns from Bush and Cole (Ship 30 for 30, 2020): strong declarative (a flat assertion with no hedging), thought-provoking question (genuine uncertainty, not a rhetorical setup), controversial opinion (a position others in your niche would contest), moment in time (opens mid-scene with a concrete detail: a day, a number, a place), vulnerable statement (something you got wrong or lost), and weird or unique insight (a connection most people in the niche have not made). You need evidence of at least four distinct patterns across your twenty posts.",
    },
    {
      title: "Publish on a schedule, not in a burst",
      body: "Spread the twenty across all seven days. Post at least once on every day. Do not publish more than four posts on any single day. Consistent daily presence is what this week is training; a burst-and-disappear pattern does not develop that habit and will make Week 5 cadence analysis uninterpretable.",
    },
    {
      title: "Track results in a simple sheet",
      body: "For each post, record: timestamp, format (S / T / Q / L), opener pattern used, impressions at 24 hours, likes, replies, profile visits, and follows gained. You do not need a fancy tool: a Google Sheet, a Notion table, or a plain TSV file all qualify. This sheet is a graded deliverable and becomes the raw data for Week 5 analytics work. Incomplete rows cost points.",
    },
  ],
  deliverables: [
    "Twenty published posts on your X account, all within the seven-day window and visible via your profile URL.",
    "A tracking sheet (Google Sheet, Notion table, or plain TSV) with all 20 posts logged: timestamp, format, opener pattern, impressions at 24 hours, likes, replies, profile visits, and follows gained.",
    "A 200-word reflection answering two questions: which opener pattern felt most natural to you and why, and which format surprised you (positively or negatively) relative to your expectations.",
  ],
  rubric: [
    {
      dimension: "Twenty posts shipped on time",
      points: 30,
      notes:
        "Counts posts that went live during the window. 18 posts = 27 points, 15 posts = 22 points, scaled proportionally below.",
    },
    {
      dimension: "Format mix as specified",
      points: 20,
      notes:
        "Required mix: 12 single, 3 thread, 3 quote, 2 long-form. Each bucket that is off by one loses 3 points; off by two or more in any bucket loses 6 for that bucket.",
    },
    {
      dimension: "Opener diversity (at least 4 of 6 patterns used)",
      points: 15,
      notes:
        "Marked from your tracking sheet. Using only 3 patterns: 10 points. Using only 2: 5 points. Tracking sheet must match the actual posts.",
    },
    {
      dimension: "Consistent daily publishing",
      points: 10,
      notes:
        "At least one post on each of the seven days. Each day with no post loses 1.5 points.",
    },
    {
      dimension: "Tracking sheet complete and honest",
      points: 15,
      notes:
        "All columns filled for all 20 rows. Numbers must be plausible against what is visible on X. Missing columns or rows: 2 points off per row.",
    },
    {
      dimension: "Reflection shows real reading of own data",
      points: 10,
      notes:
        "Specific observations tied to actual numbers from the sheet. Vague claims (&ldquo;I learned a lot&rdquo;, &ldquo;it was challenging&rdquo;) earn at most 5 points.",
    },
  ],
  hints: [
    "Generate 40+ ideas first, then choose the 20 you would actually publish. A wide idea pool is the only way to hit the format mix without forcing a post you do not believe in.",
    "Quote posts are not lazy. Quoting a thoughtful take by someone with a larger following than yours and adding two sentences of your own is one of the cheapest ways to test an opener pattern with a built-in audience.",
    "Long-form posts reach further on X than they used to. Metricool&rsquo;s 2024 X study found long-form outperforms threads in raw reach. Write at least one long-form post early in the week so you have 24-hour data before the window closes.",
    "If you blank mid-week, take three ideas from your tracking sheet that got zero engagement and rewrite them with a different opener pattern. Same idea, new first line. This is not cheating; it is what Cole (2021) calls calibration.",
    "Do not edit a post after publishing to chase better numbers. Edit before you publish, then let it run. Your tracking sheet captures the result of the decision you made, not the decision you wished you had made.",
    "Threads count as one post in the mix. If you write a thread on day one and it performs poorly, resist the urge to fill the rest of the week with single posts only. The format data matters to Week 5 even if the thread flopped.",
  ],
  late: "Late submissions lose 10 points per calendar day, up to three days. After three days the assignment is not accepted. Week 5 analytics work depends on having published real volume during this window; if you ship 20 posts late you still have a dataset, but you will have less time between publication and the Week 5 analysis session.",
};

export function Hw2() {
  return <ProjectPage spec={spec} />;
}

export const hw2SearchBody =
  "HW2 twenty posts seven days hook patterns Bush Cole opener formats threads quote posts long-form tracking sheet impressions";
