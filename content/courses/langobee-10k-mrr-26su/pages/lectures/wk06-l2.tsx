import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The trial funnel",
  date: "Week 6 Lecture 2",
  week: 6,
  topics: [
    "CC-required vs CC-optional trials: what the conversion benchmarks say",
    "Trial length evidence: why 14 days is a defensible but testable choice",
    "Firing the first trial_started event: Stripe checkout to PostHog end-to-end",
    "Verification: confirming the event in PostHog before calling it done",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk06-l2.pdf",
  readings: [
    {
      title: "Week 6 reading: Price as a hypothesis",
      href: "/c/langobee-10k-mrr-26su/readings/wk06",
      note: "Required before section",
    },
    {
      title: "Your Guide to Reverse Trials (Kyle Poyar, 2022)",
      href: "https://kylepoyar.substack.com/p/your-guide-to-reverse-trials",
      note: "Freemium vs free trial vs CC-required conversion benchmarks",
    },
    {
      title:
        "A New Look at Free-to-Paid Conversion (Kyle Poyar, 2026)",
      href: "https://www.growthunhinged.com/p/free-to-paid-conversion-report",
      note:
        "2026 benchmark: CC-required trials convert 25-35% (good) to 50-60% (great)",
    },
    {
      title: "Pricing, Retention, and Growth Strategies That Work (Patrick Campbell, 2022)",
      href: "https://businessofsoftware.org/talks/pricing-retention-and-growth-strategies/",
      note: "Freemium as an acquisition model, not a revenue model; value-metric pricing data",
    },
  ],
  followups: [
    "Outcome (Apply): Open PostHog project 374549. Write the exact event name you will use for the trial_started event and the three properties you will attach: plan, price, and trial_length_days.",
    "Outcome (Apply): Trace the path from Stripe Checkout session completion to PostHog event. Write the file path and function name in the LangoBee codebase where you will add the posthog.capture call.",
    "Outcome (Analyze): The June 2026 snapshot shows zero trial_started events. List two concrete reasons the event may never have fired: one code-level reason and one funnel-level reason (no user has reached checkout at all).",
  ],
};

export function Wk06L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk06L2SearchBody =
  "trial funnel CC-required credit card trial conversion trial_started PostHog Stripe checkout webhook 14-day trial free-to-paid conversion benchmarks event tracking lecture week 6";
