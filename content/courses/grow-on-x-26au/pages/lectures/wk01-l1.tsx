import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The follower funnel",
  date: "Week 1, Lecture 1",
  week: 1,
  topics: [
    "Impression, profile click, and follow as a conversion funnel",
    "Why follower count alone is a lagging indicator",
    "The shadow audience: lurkers, repliers, and sharers",
    "Setting a 90-day target and working backwards",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk01-l1.pdf",
  readings: [
    {
      title: "Week 1 reading: funnel, niche, and bio",
      href: "/c/grow-on-x-26au/readings/wk01",
    },
    {
      title: "Justin Welsh: Metrics that Matter (going beyond followers and likes)",
      href: "https://www.justinwelsh.me/newsletter/metrics-that-matter-going-beyond-followers-likes",
    },
  ],
  followups: [
    "Pick one account you admire. Estimate its impression-to-follow conversion rate from public data. What would you need to change to double it?",
    "Welsh (2023) separates top-of-funnel metrics from bottom-of-funnel outcomes. Where does your current account spend most of its attention? Should it?",
    "Describe the shadow audience for a creator in your prospective niche. What do lurkers in that space want but rarely say publicly?",
    "If follower count is a lagging indicator, what leading indicators would you track in the first 30 days? List three and explain why each predicts growth.",
    "You want 10,000 followers in 90 days. Work backwards: what weekly follow rate do you need? What daily impression target gets you there?",
  ],
};

export function Wk01L1() {
  return <LecturePage spec={spec} />;
}

export const wk01L1SearchBody =
  "follower funnel impression profile click conversion lagging indicator shadow audience lurkers repliers sharers 90-day target growth X Twitter Week 1 Lecture 1";
