import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "How posts spread on X",
  date: "Week 3, Lecture 1",
  week: 3,
  topics: [
    "Engagement velocity in the first 30 minutes: why early signals determine total reach",
    "Signal weights from the open-sourced algorithm: replies at 13.5x, retweets at 20x, likes at 1x baseline",
    "Time decay and the second-wave effect: how a post can re-enter the For You feed",
    "Why dwell time and &ldquo;show more&rdquo; clicks outweigh likes as quality signals",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk03-l1.pdf",
  readings: [
    {
      title: "Week 3 reading: the X algorithm and the reply game",
      href: "/c/grow-on-x-26au/readings/wk03",
    },
    {
      title: "X Engineering: source code for the recommendation algorithm (GitHub)",
      href: "https://github.com/twitter/the-algorithm",
    },
    {
      title: "Hashmeta: major algorithm changes in 2025",
      href: "https://hashmeta.com/insights/twitter-algorithm-changes-2025",
    },
  ],
  followups: [
    "A post you published got 10 likes and 0 replies in its first 30 minutes, then went quiet. A second post got 3 replies and 2 reposts in the same window. Which one did better by the algorithm&rsquo;s weighting? Show the math.",
    "Hashmeta (2025) reports that Premium accounts reach 40-80% of followers in the initial push vs. 10-20% for free accounts. How does that asymmetry affect strategy for a creator who can&rsquo;t afford Premium?",
    "Describe one concrete thing you can do in the 30 minutes after posting to improve engagement velocity without using automated tools.",
    "The algorithm counts &ldquo;show more&rdquo; clicks as a quality signal. What does that imply about where you should place the most interesting part of a long post?",
    "External links receive a reach penalty of 30-50% (Hashmeta 2025). Design a post strategy that shares a link without eating the full penalty.",
  ],
};

export function Wk03L1() {
  return <LecturePage spec={spec} />;
}

export const wk03L1SearchBody =
  "how posts spread X algorithm engagement velocity first 30 minutes signal weights replies retweets likes dwell time show more time decay second wave For You feed recommendation pipeline Week 3 Lecture 1";
