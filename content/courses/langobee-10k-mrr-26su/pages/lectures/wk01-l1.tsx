import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The honest dashboard",
  date: "Week 1 Lecture 1",
  week: 1,
  topics: [
    "Vanity vs actionable metrics: the three-A test",
    "De-alting: removing founder, alt, and bot accounts from your counts",
    "Single source of truth: why one queryable store beats many dashboards",
    "The intel repo: recording decisions so the next session can grep them",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk01-l1.pdf",
  readings: [
    {
      title: "Week 1 reading: Ground truth and the de-alted dashboard",
      href: "/c/langobee-10k-mrr-26su/readings/wk01",
      note: "Required before section",
    },
    {
      title: "Why Vanity Metrics Are Dangerous (Eric Ries, 2009)",
      href: "http://www.startuplessonslearned.com/2009/12/why-vanity-metrics-are-dangerous.html",
      note: "The original argument for actionable over vanity metrics",
    },
    {
      title: "Vanity Metrics vs. Actionable Metrics (Eric Ries, 2009)",
      href: "https://tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/",
      note: "Four tools for creating actionable metrics including cohort funnels",
    },
    {
      title: "How to Measure If Users Love Your Product Using Cohorts and Revisit Rates (Andrew Chen, 2015)",
      href: "https://andrewchen.com/how-to-measure-if-users-love-your-product-using-cohorts-and-revisit-rates/",
      note: "The practical how-to for de-alting and building retention cohort tables",
    },
  ],
  followups: [
    "Outcome (Apply): Open PostHog project 374549 and write down your raw WAU, MAU, and signup count for the past 30 days. Then apply the de-alting filter (exclude hughgramel@, bot domains, accounts with zero reading_events). How do the numbers change?",
    "Outcome (Analyze): Name one number on your current dashboard that passes Ries's three-A test (actionable, accessible, auditable) and one that fails it. Write one sentence for each explaining why.",
    "Outcome (Explain): In your own words, why does a vanity metric harm decision-making more than simply being misleading? Use the June 2026 bot-signup spike as your concrete example.",
  ],
};

export function Wk01L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk01L1SearchBody =
  "vanity metrics actionable metrics de-alting bot filtering single source of truth intel repo WAU MAU cohort PostHog HogQL dashboard honest metrics founders week 1 lecture 1";
