import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "LangoBee's funnel, audited",
  date: "Week 1 Lecture 2",
  week: 1,
  topics: [
    "AARRR mapped to LangoBee's PostHog events",
    "The real numbers: ~50 real users, 4 WAU, $0 MRR",
    "The June 2026 bot-signup spike: anatomy and detection",
    "Choosing a north-star metric for a comprehensible-input app",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk01-l2.pdf",
  readings: [
    {
      title: "Week 1 reading: Ground truth and the de-alted dashboard",
      href: "/c/langobee-10k-mrr-26su/readings/wk01",
      note: "Required before section",
    },
    {
      title: "Startup Metrics for Pirates: AARRR!! (Dave McClure, 2007)",
      href: "https://www.slideshare.net/slideshow/startup-metrics-for-pirates-long-version/89026",
      note: "The canonical AARRR framework: five stages, five conversion rates",
    },
    {
      title: "Choosing Your North Star Metric (Lenny Rachitsky, 2021)",
      href: "https://www.lennysnewsletter.com/p/choosing-your-north-star-metric",
      note: "Six NSM categories with real-company examples including education and consumer apps",
    },
    {
      title: "How to Set KPIs and Goals (Adora Cheung, 2019)",
      href: "https://www.youtube.com/watch?v=lL6GdUHIBsM",
      note: "Primary KPI is almost always revenue or active users; de-alt to track health",
    },
  ],
  followups: [
    "Outcome (Apply): Map each PostHog event class (pageview, user_signed_up, reading_event, word_lookup_opened, trial_started) to its AARRR stage. Which stage has zero events firing?",
    "Outcome (Analyze): The June 1 week added 52 signups. One activated. Write the two-sentence diagnosis: what evidence marks those 51 as bots, and what would a real activation look like in your events table?",
    "Outcome (Apply): Propose one candidate north-star metric for LangoBee using Rachitsky's six-category framework. State which category it falls into and why it is a leading indicator of subscription revenue rather than a lagging one.",
  ],
};

export function Wk01L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk01L2SearchBody =
  "AARRR funnel LangoBee audit real numbers 50 users 4 WAU 0 MRR bot signup spike June 2026 north star metric comprehensible input PostHog events word_lookup_opened week 1 lecture 2";
