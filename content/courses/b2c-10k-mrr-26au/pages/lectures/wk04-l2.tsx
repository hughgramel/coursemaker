import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Cohort analysis",
  date: "Week 4 Lecture 2",
  week: 4,
  topics: [
    "Building a cohort retention table from scratch in SQL: the GROUP BY signup_week pattern",
    "Reading the diagonal: which cohort changed shape and why it matters more than the aggregate",
    "Power-user analysis: identifying your top 5% by behavior and reverse-engineering their week-1 path",
    "Churn diagnosis: separating involuntary (card decline, 20-40% of SaaS churn) from voluntary (lost interest)",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk04-l2.pdf",
  readings: [
    {
      title: "Week 4 reading: Retention, cohort analysis, and habit loops",
      href: "/c/b2c-10k-mrr-26au/readings/wk04",
      note: "Required before section",
    },
    {
      title: "How to measure cohort retention (Olga Berezovsky, Lenny's Newsletter, 2022)",
      href: "https://www.lennysnewsletter.com/p/measuring-cohort-retention",
      note: "Five-step guide: define active, segment free vs paid, choose N-day vs unbounded, pick tool vs SQL, visualise",
    },
    {
      title: "Users who come back: Tracking retention with PostHog (PostHog team, 2024)",
      href: "https://posthog.com/docs/new-to-posthog/retention",
      note: "Step-by-step PostHog retention table setup; how to read day-0 = 100% baseline",
    },
    {
      title: "Churn in subscription apps: top 5 cancellation reasons (Daphne Tideman, RevenueCat, 2025)",
      href: "https://www.revenuecat.com/blog/growth/subscription-app-churn-reasons-how-to-fix/",
      note: "28% involuntary churn on Google Play vs 14% iOS; grace periods and retry logic",
    },
  ],
  followups: [
    "Outcome: Apply, Run the cohort SQL from section on your database (or PostHog). Paste the D1/D7/D30 table into your founder journal. Which signup cohort has the best D30 number? What changed that week?",
    "Outcome: Analyze, Write the power-user query for your product: what event or event count separates the top 5% from the rest? What did those users do in their first 72 hours that others did not?",
    "Outcome: Evaluate, Look at your last 30 days of churn. Tag each churned customer as involuntary (card failure, expired card, bank decline) or voluntary (explicit cancel, no usage). What share is involuntary? Would adding dunning logic recover more MRR than shipping a new feature this week?",
  ],
};

export function Wk04L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk04L2SearchBody =
  "cohort analysis cohort table SQL signup week diagonal power user top 5% week-1 path involuntary churn voluntary churn card decline dunning retention table PostHog lecture Week 4";
