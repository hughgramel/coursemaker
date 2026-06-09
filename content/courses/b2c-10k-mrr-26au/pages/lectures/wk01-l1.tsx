import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The B2C funnel",
  date: "Week 1 Lecture 1",
  week: 1,
  topics: [
    "The five stages: acquisition, activation, retention, revenue, referral",
    "Why B2C funnels leak differently than B2B",
    "Top-of-funnel: traffic vs visits vs uniques",
    "Bottom-of-funnel: paid conversions are the only number that matters",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk01-l1.pdf",
  readings: [
    {
      title: "Week 1 reading: The B2C funnel and what ‘real’ numbers look like",
      href: "/c/b2c-10k-mrr-26au/readings/wk01",
      note: "Required before section",
    },
    {
      title: "In-depth: The AARRR pirate funnel explained (PostHog / Vandervell, 2023)",
      href: "https://posthog.com/product-engineers/aarrr-pirate-funnel",
      note: "Covers each stage with B2C-specific notes",
    },
    {
      title: "Growth for Startups (Y Combinator / Gustaf Alstromer, 2019)",
      href: "https://www.ycombinator.com/library/6k-growth-for-startups",
      note: "Why growth before PMF kills startups; funnel thinking from Airbnb’s growth team",
    },
  ],
  followups: [
    "Outcome (Apply): Which stage of the AAARRR funnel is your product currently leaking at most, and how would you confirm that with data rather than intuition?",
    "Outcome (Analyze): Pick one metric on your current dashboard. Is it vanity or actionable? Write the one-sentence test you used.",
    "Outcome (Evaluate): Gustaf Alstromer argues that growth before product-market fit is the leading cause of startup death. Given your MRR snapshot, do you believe you have enough retention signal to justify spending on acquisition? Why or why not?",
  ],
};

export function Wk01L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk01L1SearchBody =
  "AAARRR funnel acquisition activation retention revenue referral B2C funnel stages traffic visits uniques paid conversions lecture Week 1";
