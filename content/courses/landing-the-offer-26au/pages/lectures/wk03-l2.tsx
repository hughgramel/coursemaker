import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Two-pointer, hash map, sliding window",
  date: "Week 3, Lecture 2",
  week: 3,
  topics: [
    "The hash-map pattern: turning O(n²) lookups into O(n) by trading space for time",
    "Two pointers on sorted input: shrinking the search space without extra memory",
    "Sliding window: maintaining a running invariant across a contiguous subarray",
    "Pattern recognition under time pressure: how to decide which pattern fits",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk03-l2.pdf",
  readings: [
    {
      title: "Week 3 reading: the three early patterns",
      href: "/c/landing-the-offer-26au/readings/wk03",
    },
    {
      title: "NeetCode Roadmap: Arrays &amp; Hashing, Two Pointers, Sliding Window",
      href: "https://neetcode.io/roadmap",
    },
    {
      title: "NeetCode 150: all coding interview questions solved (YouTube)",
      href: "https://www.youtube.com/watch?v=T0u5nwSA0w0",
    },
  ],
  followups: [
    "Two Sum is a canonical hash-map problem. Solve it without looking at any resource. Then write out the time and space complexity, naming the data structure that enables each.",
    "The NeetCode Roadmap places Arrays &amp; Hashing before Two Pointers intentionally. Write one sentence explaining the pedagogical reason: what does knowing hash maps first unlock for two pointers?",
    "Describe a problem shape where two pointers would be tempting but wrong. What property of the input makes two pointers valid, and what property breaks it?",
    "Write the sliding-window invariant for the &ldquo;longest substring without repeating characters&rdquo; problem. What condition expands the window? What condition shrinks it?",
    "NeetCode (2020) says he was trying to understand patterns well enough to derive any solution from scratch, not memorize solutions. What is the practical difference? Give an example of a problem where pattern understanding lets you solve a variant that pure memorization would not.",
  ],
};

export function Wk03L2() {
  return <LecturePage spec={spec} />;
}

export const wk03L2SearchBody =
  "two pointer hash map sliding window pattern recognition complexity analysis O(n) O(n squared) sorted array subarray invariant NeetCode 150 Week 3 Lecture 2 landing the offer";
