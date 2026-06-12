import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Trial to paid",
  date: "Week 7 Lecture 2",
  week: 7,
  topics: [
    "Nurture during the trial: the touchpoints between signup and expiry that change conversion rates",
    "Cancellation reasons and the four churn categories: never-activated, value-not-seen, price, and competitive",
    "Dunning basics: what happens when a card declines and why involuntary churn is recoverable",
    "First-dollar psychology: why the first paying customer requires different tactics than the tenth",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk07-l2.pdf",
  readings: [
    {
      title: "Week 7 reading: Paywall placement and the trial-to-paid funnel",
      href: "/c/langobee-10k-mrr-26su/readings/wk07",
      note: "The shared reading covers both lectures; the trial-to-paid section is most relevant here",
    },
    {
      title: "A New Look at Free-to-Paid Conversion (Kyle Poyar, Growth Unhinged, 2026)",
      href: "https://www.growthunhinged.com/p/free-to-paid-conversion-report",
      note: "Benchmarks: CC-required trials convert 25-35% (good) to 50-60% (great); per-1,000-visitor model",
    },
    {
      title: "State of Subscription Apps 2025 (RevenueCat Research Team, 2025)",
      href: "https://www.revenuecat.com/state-of-subscription-apps-2025/",
      note: "82% of trial starts occur on day 0; longer trials (17-32 days) convert at 45.7%",
    },
    {
      title: "What Is Good Monthly Churn (Lenny Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/monthly-churn-benchmarks",
      note: "Early churn (months 1-3) runs 5-50% and reflects activation failure, not product decay",
    },
    {
      title: "Why a Hard Paywall Is the Right Answer for Your App (Until It Isn't) (Barnard and Carter, 2026)",
      href: "https://www.revenuecat.com/blog/growth/phil-carter-elemental-growth-sub-club-podcast-2026/",
      note: "Hard paywalls convert ~5x better than freemium at sub-billion-dollar scale",
    },
  ],
  followups: [
    "Outcome (Apply): Design a three-email trial nurture sequence for LangoBee. For each email, write the trigger (day, event, or inaction), the subject line, and the one call to action. The sequence must reference a concrete product event: the comprehension score, a word tap count, or a video completion.",
    "Outcome (Analyze): LangoBee's trial funnel has produced zero trial_started events from real users. Using the four churn categories from lecture (never-activated, value-not-seen, price, competitive), diagnose which category is responsible and cite the one PostHog signal that most supports your diagnosis.",
    "Outcome (Evaluate): Rachitsky (2022) reports that early churn (months 1-3) runs 5-50% and reflects activation failure. Poyar (2026) reports CC-required trials convert 25-60%. Given LangoBee's current CC-required gate with zero trials started, write one sentence on whether the problem is churn or pre-churn (never entering the trial), and one sentence on what you would change first.",
  ],
};

export function Wk07L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk07L2SearchBody =
  "trial to paid nurture during trial cancellation reasons churn categories never activated value not seen price competitive dunning involuntary churn first dollar psychology email sequence week 7 lecture 2 monetization LangoBee";
