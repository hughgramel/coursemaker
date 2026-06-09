import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Paywall design",
  date: "Week 3 Lecture 2",
  week: 3,
  topics: [
    "Hard, soft, and metered paywalls: definitions and conversion tradeoffs",
    "Placement: at signup, post-aha-moment, and threshold-based",
    "Trial mechanics: 7-day vs 14-day vs no-trial",
    "Stripe vs RevenueCat vs App Store IAP: who handles what on mobile",
    "Refund policy as a growth lever",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk03-l2.pdf",
  readings: [
    {
      title: "Week 3 reading: Pricing and the paywall",
      href: "/c/b2c-10k-mrr-26au/readings/wk03",
      note: "Required before section",
    },
    {
      title: "State of Subscription Apps 2025 (RevenueCat)",
      href: "https://www.revenuecat.com/state-of-subscription-apps-2025/",
      note: "Primary data: 82% of trial starts on install day; trial-to-paid improves with longer trials",
    },
    {
      title: "Pricing Strategy Guide (Paddle / ProfitWell, 2022)",
      href: "https://www.paddle.com/recur/all/pricing-strategy",
      note: "Value-based pricing research from 30,000+ subscription companies",
    },
  ],
  followups: [
    "Outcome: Apply, Pick one paywall type (hard, soft, or metered) for your product. Write the two-sentence rationale. Then identify the exact screen where the paywall will appear and why that moment follows the aha-moment.",
    "Outcome: Apply, Using the RevenueCat trial data (45.7% trial-to-paid for 17-32 day trials vs lower rates for shorter windows), decide whether your product warrants a trial. If yes, state the length. If no, state why a hard paywall is better.",
    "Outcome: Evaluate, A user emails to request a refund after 8 days. Walk through how you respond, and explain whether your refund policy is a retention tool or a trust-building tool in this case.",
  ],
};

export function Wk03L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk03L2SearchBody =
  "paywall hard soft metered placement aha moment signup threshold trial mechanics 7-day 14-day Stripe RevenueCat App Store IAP refund policy growth lever lecture Week 3";
