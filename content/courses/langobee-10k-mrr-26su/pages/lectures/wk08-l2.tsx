import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Working backward to traffic",
  date: "Week 8 Lecture 2",
  week: 8,
  topics: [
    "Visitor-to-signup, signup-to-trial, trial-to-paid: where each benchmark comes from",
    "Three growth scenarios compared by funnel arithmetic: community-led, creator-led, loop-led",
    "Why 5% monthly churn caps growth regardless of traffic volume",
    "Setting the maximum defensible CAC from a modeled LTV",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk08-l2.pdf",
  readings: [
    {
      title: "Week 8 reading: The $10K math",
      href: "/c/langobee-10k-mrr-26su/readings/wk08",
      note: "Required before section. Contains the full funnel-rate arithmetic and scenario tables.",
    },
    {
      title: "What Is Good Monthly Churn (Lenny Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/monthly-churn-benchmarks",
      note: "B2C churn benchmarks and the churn ceiling problem stated plainly",
    },
    {
      title: "The Subscription Value Loop (Phil Carter, 2024)",
      href: "https://www.lennysnewsletter.com/p/the-subscription-value-loop-a-framework",
      note: "Consumer subscription growth stages; top-quartile conversion and year-1 retention benchmarks",
    },
    {
      title: "How to Win in Consumer Subscription (Lenny Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/winning-at-consumer-subscription",
      note: "One-month payback target and channel math from breakout B2C subscription companies",
    },
  ],
  followups: [
    "Outcome (Apply): For each of the three growth scenarios (community-led, creator-led, loop-led), write the assumed visitor-to-signup, signup-to-trial, and trial-to-paid rates you used. Then compute the required monthly visitor count to add 63 net new subscribers per month (the number needed to reach $10K MRR at $7.99 with 5% monthly churn).",
    "Outcome (Analyze): Show algebraically why a 5% monthly churn rate caps steady-state MRR at New MRR / 0.05 regardless of how much traffic you generate. What does that ceiling equal at 63 new subscribers per month at $7.99?",
    "Outcome (Evaluate): Using your modeled LTV from lecture 1, set a maximum defensible CAC for each growth scenario. For the scenario with the lowest CAC ceiling, state whether any real-world channel can reliably acquire users at that cost.",
  ],
};

export function Wk08L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk08L2SearchBody =
  "working backward traffic visitor signup trial paid funnel rates three scenarios community-led creator-led loop-led churn ceiling 5% monthly churn cap MRR growth maximum CAC LTV consumer subscription benchmarks LangoBee week 8 lecture 2";
