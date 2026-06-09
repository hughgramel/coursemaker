import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Anatomy of a hook",
  date: "Week 2, Lecture 1",
  week: 2,
  topics: [
    "The first line as the only line that matters: the 210-character above-the-fold constraint",
    "Five reliable hook patterns: claim, contrast, number, story-open, question",
    "Why generic hooks fail: curiosity gap versus actual specificity",
    "Hook-to-payoff alignment: what the hook promises, the post must deliver",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk02-l1.pdf",
  readings: [
    {
      title: "Week 2 reading — Hooks and formats",
      href: "/c/grow-on-x-26au/readings/wk02",
    },
    {
      title: "Required: Dickie Bush and Nicolas Cole — 6 Proven Single-Sentence Openers to Hook Your Reader’s Attention",
      href: "https://www.ship30for30.com/post/6-proven-single-sentence-openers-to-hook-your-reader-s-attention",
    },
    {
      title: "Optional: Ship 30 for 30 — Viral Writing 101 with Shaan Puri (YouTube, ~55 min)",
      href: "https://www.youtube.com/watch?v=fN1kLxB1JIc",
    },
  ],
  followups: [
    "Take three posts you admire from accounts in your niche. Identify which of the five hook patterns each one uses. If a post uses none of them, what does it use instead?",
    "Welsh (2022) says the first line is more important than 95% of the rest of the post. What does that claim imply about how much time you should spend writing versus editing the first line?",
    "Write the same idea as both a curiosity-gap hook and a specificity hook. Read both out loud. Which one would you click on? Why?",
    "Find a post that made a strong promise in the hook but failed to deliver in the body. What exactly broke the hook-to-payoff contract?",
    "Bush (cited in Basilio 2023) compares a hook to a YouTube thumbnail. In what ways does that analogy hold? In what ways does it break down for a text-first platform?",
  ],
};

export function Wk02L1() {
  return <LecturePage spec={spec} />;
}

export const wk02L1SearchBody =
  "anatomy hook first line 210 characters above the fold five hook patterns claim contrast number story-open question curiosity gap specificity hook-to-payoff alignment writing posts impressions X Twitter Week 2 Lecture 1";
