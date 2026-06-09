import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Post formats and when each one wins",
  date: "Week 2, Lecture 2",
  week: 2,
  topics: [
    "The single post: tight argument, one idea, payoff in under 280 characters",
    "The thread: when sequence earns the click on &ldquo;show more&rdquo;",
    "Quote posts and replies as first-class formats with their own reach mechanics",
    "Images, screenshots, and the one-graph rule: one visual, one point",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk02-l2.pdf",
  readings: [
    {
      title: "Week 2 reading — Hooks and formats",
      href: "/c/grow-on-x-26au/readings/wk02",
    },
    {
      title: "Required: Dickie Bush and Nicolas Cole — How to Write a Twitter Thread: The Complete Guide",
      href: "https://www.ship30for30.com/post/how-to-write-a-twitter-thread",
    },
    {
      title: "Required: Dickie Bush and Nicolas Cole — Lean Writing: Tweet to Thread to Atomic Essay",
      href: "https://www.ship30for30.com/post/lean-writing-on-twitter-how-to-turn-a-tweet-into-a-thread-into-an-atomic-essay",
    },
    {
      title: "Optional: Ship 30 for 30 — Writing Twitter Threads 101 with Mack, Bush, and Cole (YouTube, ~60 min)",
      href: "https://www.youtube.com/watch?v=0d-0evLKYL4",
    },
  ],
  followups: [
    "Look at your last five posts. Which format did you use each time? Was the format the right fit for the idea, or did the idea outgrow (or underuse) the format you chose?",
    "Bush and Cole (2022) say to test an idea as a single tweet before expanding it into a thread. What engagement signal would tell you the idea has earned the expansion?",
    "Describe a topic where a thread is the wrong format and a single post is the right one. What property of the idea makes the single post sufficient?",
    "A quote post can amplify, critique, or add context to another account&rsquo;s post. Give one example of each use that would fit your niche without seeming opportunistic.",
    "The one-graph rule says one visual communicates one point. Find a post that violates this rule. What would you cut to bring it into compliance?",
  ],
};

export function Wk02L2() {
  return <LecturePage spec={spec} />;
}

export const wk02L2SearchBody =
  "post formats single post thread quote post reply images screenshots one-graph rule sequence payoff density format fit writing impressions X Twitter Week 2 Lecture 2";
