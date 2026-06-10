import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Content calendars and batching",
  date: "Week 4, Lecture 1",
  week: 4,
  topics: [
    "Why daily posting beats sporadic excellence: the algorithm rewards cadence, not peaks",
    "Batch writing once, schedule across the week: the hub-and-spoke model",
    "Mixing evergreen, timely, and personal posts: the three-bucket framework",
    "Avoiding the engagement-bait trap: why short-term spikes destroy long-term trust",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk04-l1.pdf",
  readings: [
    {
      title: "Week 4 reading, Building a sustainable weekly system",
      href: "/c/grow-on-x-26au/readings/wk04",
    },
    {
      title: "Chenell Basilio, How Justin Welsh built a $1.7M solo business in 3.5 years (Growth in Reverse, 2023)",
      href: "https://growthinreverse.com/justin-welsh/",
    },
    {
      title: "Tiago Forte, Building a Second Brain: the definitive introductory guide (2023)",
      href: "https://fortelabs.com/blog/basboverview/",
    },
  ],
  followups: [
    "Welsh batches his Saturday newsletter into 10-20 short posts staggered over 4-6 weeks. What does that staggering buy him that posting all derived posts in the same week would not?",
    "Forte (2023) writes “Your brain is for having ideas, not storing them.” How does that principle apply to a content calendar specifically? What are you offloading, and to where?",
    "Pick one piece of content you posted or consumed recently. Classify it as evergreen, timely, or personal. What would you have to change to move it into a different bucket?",
    "Describe a post you’ve seen that was clearly engagement-bait. What signal told you it was bait? Would the account’s regular followers benefit from more posts like that one?",
    "Paul Graham writes that a single meeting can blow a whole afternoon by breaking it into pieces too small to do anything hard in. How does that apply to writing one post per day versus batching an entire week on Sunday?",
  ],
};

export function Wk04L1() {
  return <LecturePage spec={spec} />;
}

export const wk04L1SearchBody =
  "content calendar batching daily posting cadence hub-and-spoke evergreen timely personal post-mix engagement-bait sustainability scheduling batch writing Week 4 Lecture 1";
