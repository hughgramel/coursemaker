import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Referral loops",
  date: "Week 9 Lecture 2",
  week: 9,
  topics: [
    "Incentivized vs organic referrals: when each model fits",
    "Dropbox-style two-sided incentives: what made them work and why they rarely work for indie founders",
    "Share-the-product vs share-the-result: the Duolingo friend streak as a share-result loop",
    "Measuring referrals without lying about attribution",
    "Public profiles, leaderboards, and shareable artifacts as passive share loops",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk09-l2.pdf",
  readings: [
    {
      title: "Week 9 reading: Lifecycle messaging and referral loops",
      href: "/c/b2c-10k-mrr-26au/readings/wk09",
      note: "Required before section",
    },
    {
      title: "The Dropbox Referral Program: 3900% Growth in 15 Months (GrowSurf, Petrova 2026)",
      href: "https://growsurf.com/blog/dropbox-referral-program/",
      note: "Five success factors: onboarding integration, transparent rewards, minimal friction, progress dashboard, viral email loops",
    },
    {
      title: "Friend Streak: a new way to stay motivated together (Duolingo, 2024)",
      href: "https://blog.duolingo.com/friend-streak/",
      note: "Users with one Friend Streak are 22% more likely to complete their daily lesson; the canonical share-result loop",
    },
  ],
  followups: [
    "Outcome: Create, Sketch your referral mechanism in one paragraph: what is the incentive (if any), what does the referrer share, what does the referred user see before signing up? Then name the one number you will track to know whether the mechanism is working.",
    "Outcome: Analyze, The Dropbox two-sided incentive (GrowSurf, Petrova 2026) worked because the reward was directly tied to the core value proposition: storage. Does your product have an equivalent? If you offered referral credits, would they feel meaningful or hollow? Write a one-sentence test to tell the difference.",
    "Outcome: Create, Duolingo's Friend Streak shares a result (the joint streak count), not a product invitation. Identify one result in your product that a user would plausibly share even without an incentive. Describe how you would make that result shareable in two engineering steps.",
  ],
};

export function Wk09L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk09L2SearchBody =
  "referral loops incentivized organic two-sided incentive Dropbox share-result loop Duolingo friend streak attribution public profiles leaderboards shareable artifacts lecture Week 9";
