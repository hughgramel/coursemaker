import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Pricing for B2C",
  date: "Week 3 Lecture 1",
  week: 3,
  topics: [
    "Free vs freemium vs paid vs hybrid: one tradeoff each",
    "Anchor pricing and the $9.99 myth",
    "Annual vs monthly: cashflow and churn implications",
    "Localized pricing and PPP discounts",
    "The first re-price: how Tony Dinh and Pieter Levels picked their numbers",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk03-l1.pdf",
  readings: [
    {
      title: "Week 3 reading: Pricing and the paywall",
      href: "/c/b2c-10k-mrr-26au/readings/wk03",
      note: "Required before section",
    },
    {
      title: "My solopreneur story: zero to $45K/mo in 2 years (Tony Dinh, Indie Hackers, 2023)",
      href: "https://www.indiehackers.com/post/my-solopreneur-story-zero-to-45k-mo-in-2-years-1b858f47af",
      note: "Primary source on one-time vs subscription pricing decisions across five products",
    },
    {
      title: "State of Subscription Apps 2025 (RevenueCat)",
      href: "https://www.revenuecat.com/state-of-subscription-apps-2025/",
      note: "Benchmark data: hard paywall 12.11% vs freemium 2.18% day-35 conversion",
    },
  ],
  followups: [
    "Outcome: Evaluate — Tony Dinh charges a one-time fee for DevUtils and a subscription for Black Magic. State his exact rule for when each model applies, then apply that rule to your own product. Do you agree with the rule?",
    "Outcome: Apply — Write down your product’s price anchor: the number you will put in the paywall. Explain in one sentence why that specific number, not half of it and not double.",
    "Outcome: Evaluate — RevenueCat reports hard paywall apps convert at 12.11% vs freemium at 2.18% at day 35. List two scenarios where freemium would still be the right choice despite this gap.",
  ],
};

export function Wk03L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk03L1SearchBody =
  "pricing B2C freemium free paid hybrid anchor price annual monthly PPP purchasing power parity Tony Dinh Pieter Levels one-time subscription lecture Week 3";
