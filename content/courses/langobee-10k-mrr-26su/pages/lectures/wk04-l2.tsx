import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Instrumenting return",
  date: "Week 4 Lecture 2",
  week: 4,
  topics: [
    "D1, D7, D30: definitions, benchmarks, and why each matters",
    "Reading a cohort retention curve: the shape of flattening vs decaying",
    "Small-n honesty: what you can and cannot conclude from two cohort weeks",
    "LangoBee's real cohort table: May 18 and May 25 read together",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk04-l2.pdf",
  readings: [
    {
      title: "Week 4 reading: Hooks, triggers, and retention mechanics",
      href: "/c/langobee-10k-mrr-26su/readings/wk04",
      note: "Covers D1/D7/D30 definitions and cohort curve interpretation",
    },
    {
      title: "The Never Ending Road to Product Market Fit (Brian Balfour, 2013)",
      href: "https://brianbalfour.com/essays/product-market-fit",
      note: "The retention curve as the decisive PMF checkpoint; flattening vs decaying",
    },
    {
      title: "The Retention Lifecycle Framework (Archana Madhavan, 2016)",
      href: "https://amplitude.com/blog/retention-lifecycle-framework",
      note: "New, current, and resurrected cohorts; the Quick Ratio as a growth health check",
    },
    {
      title: "What Is Good Retention: An Exhaustive Benchmark Study (Casey Winters and Lenny Rachitsky, 2021)",
      href: "https://caseyaccidental.com/what-is-good-retention",
      note: "Consumer transactional benchmarks: good at ~30% month-6, great at ~50%",
    },
  ],
  followups: [
    "Outcome (Apply): Open the de-alted cohort table you built in week 1. For each cohort week visible, write its D7 return rate as a fraction (returned / activated). Compare it to the consumer-transactional good/great thresholds from Winters and Rachitsky (2021). One sentence per cohort.",
    "Outcome (Analyze): LangoBee's May 18 cohort shows 6 of 12 activated users returned. The May 25 cohort shows 3 of 7 activated users returned. Does the curve flatten or decay across these two points? State one reason you cannot yet conclude which pattern is real at this sample size.",
    "Outcome (Explain): Describe the difference between a flattening retention curve and a decaying one. Why does a flattening curve, even at a low floor, indicate product-market fit for a subset of users, while a curve that trends to zero does not?",
  ],
};

export function Wk04L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk04L2SearchBody =
  "D1 D7 D30 retention definition cohort retention curve flattening decaying small-n sample size LangoBee cohort table May 18 May 25 benchmarks consumer transactional product market fit PMF week 4 lecture 2";
