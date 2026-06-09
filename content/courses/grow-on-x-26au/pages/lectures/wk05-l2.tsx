import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "A/B testing posts and iterating",
  date: "Week 5, Lecture 2",
  week: 5,
  topics: [
    "Designing a clean comparison: same core idea, two hooks, all other variables held equal",
    "Sample sizes for a solo creator: why 50-100 impressions per variant is enough to make a directional call",
    "The weekly retrospective: keep, kill, double down, the three-category review ritual",
    "Avoiding p-hacking your own posting: why checking results every two hours produces false patterns",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk05-l2.pdf",
  readings: [
    {
      title: "Week 5 reading, Analytics, experiments, and iteration",
      href: "/c/grow-on-x-26au/readings/wk05",
    },
    {
      title: "Eric Ries: Vanity Metrics vs. Actionable Metrics (2009)",
      href: "https://tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/",
    },
    {
      title: "Chenell Basilio: How Dickie Bush Went From 0 to 326k Twitter Followers in 30 Months (2023)",
      href: "https://growthinreverse.com/dickie-bush/",
    },
  ],
  followups: [
    "You want to test whether a &ldquo;number hook&rdquo; outperforms a &ldquo;claim hook&rdquo; for a post about email open rates. Write both hooks. Identify every variable you held constant and every variable you did not.",
    "Ries (2009) says actionable metrics show cause and effect. For a solo creator with 800 followers, write one metric that is actionable and explain what action it would drive.",
    "Basilio (2023) describes Dickie Bush treating every single tweet as an idea-validation test before expanding to a thread. What is the minimum signal that would tell you an idea has passed that test?",
    "Explain p-hacking in plain language for someone who has never taken a statistics course. Give one example of how a creator could accidentally p-hack their own posting schedule.",
    "Design a weekly retrospective ritual that takes under 20 minutes and produces three decisions: one format or hook to keep, one to retire, and one to post twice as often. What data do you look at and in what order?",
  ],
};

export function Wk05L2() {
  return <LecturePage spec={spec} />;
}

export const wk05L2SearchBody =
  "AB testing posts iterating clean comparison same idea two hooks sample sizes solo creator weekly retrospective keep kill double down p-hacking iteration loop experiment design Week 5 Lecture 2";
