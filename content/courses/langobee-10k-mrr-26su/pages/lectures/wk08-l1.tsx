import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Unit economics of $10K",
  date: "Week 8 Lecture 1",
  week: 8,
  topics: [
    "How many subscribers $10K MRR actually requires at $7.99/mo and at $49/yr",
    "Churn as a compounding tax: why 5% monthly makes $10K MRR a moving target",
    "The Quick Ratio: a one-number health check for growth vs churn",
    "LTV at education-category benchmarks and what it implies for CAC",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk08-l1.pdf",
  readings: [
    {
      title: "Week 8 reading: The $10K math",
      href: "/c/langobee-10k-mrr-26su/readings/wk08",
      note: "Required before section. Includes the full subscriber-count and LTV arithmetic.",
    },
    {
      title: "SaaS Metrics 2.0 (David Skok, 2020)",
      href: "https://www.forentrepreneurs.com/saas-metrics-2/",
      note: "Canonical derivation of LTV, CAC, MRR components, and the churn ceiling formula",
    },
    {
      title: "State of Subscription Apps 2025 (RevenueCat Research Team, 2025)",
      href: "https://www.revenuecat.com/state-of-subscription-apps-2025/",
      note: "Education-category LTV, trial-to-paid, and annual plan retention benchmarks",
    },
    {
      title: "Episode 602: Explaining SaaS Metrics to a Child (Rob Walling, 2022)",
      href: "https://www.startupsfortherestofus.com/episodes/episode-602-explaining-saas-metrics-to-a-child",
      note: "Plain-language derivation of MRR, churn, and LTV for founders without a finance background",
    },
  ],
  followups: [
    "Outcome (Apply): Using $7.99/mo and a 5% monthly churn rate, compute your LTV. Then compute the subscriber count and monthly new-subscriber rate required to reach and sustain $10K MRR. Show the arithmetic.",
    "Outcome (Analyze): At 3% monthly churn vs 5% monthly churn, how does the steady-state subscriber count required for $10K MRR change? Write one sentence explaining why the difference is larger than it looks.",
    "Outcome (Evaluate): LangoBee has $0 MRR and no churn data. Given RevenueCat's education-category median LTV of $10.97 per payer (year 1), what is the maximum CAC you can defend without a LTV:CAC ratio below 3:1? Show your work.",
  ],
};

export function Wk08L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk08L1SearchBody =
  "unit economics $10K MRR subscriber count 1252 subscribers $7.99 monthly $49 annual churn compounding tax 5% monthly churn Quick Ratio LTV CAC education benchmarks RevenueCat SaaS metrics churn ceiling LangoBee week 8 lecture 1";
