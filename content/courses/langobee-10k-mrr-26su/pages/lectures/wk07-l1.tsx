import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Paywall placement",
  date: "Week 7 Lecture 1",
  week: 7,
  topics: [
    "Gating after taste: why the paywall after the aha moment converts better than one at the door",
    "The comprehension score as the paywall moment: when the user has seen their score move, demonstrated value exists",
    "Upgrade triggers: the four placement strategies and which one fits a pre-revenue product",
    "LangoBee's current gate: credit-card-required at signup, zero trials ever started",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk07-l1.pdf",
  readings: [
    {
      title: "Week 7 reading: Paywall placement and the trial-to-paid funnel",
      href: "/c/langobee-10k-mrr-26su/readings/wk07",
      note: "Required before section",
    },
    {
      title: "Optimizing Paywall Placement (Peter Meinertzhagen, RevenueCat, 2023)",
      href: "https://www.revenuecat.com/blog/growth/paywall-placement/",
      note: "Case studies showing earlier post-aha-moment placement beating front-door gating",
    },
    {
      title: "The Essential Guide to Paywalls for Subscription Apps (Michal Parizek, RevenueCat, 2024)",
      href: "https://www.revenuecat.com/blog/growth/guide-to-mobile-paywalls-subscription-apps/",
      note: "The four placement strategies: onboarding, contextual, buy-now, campaign",
    },
    {
      title: "The Subscription Value Loop (Phil Carter, Lenny's Newsletter, 2024)",
      href: "https://www.lennysnewsletter.com/p/the-subscription-value-loop-a-framework",
      note: "Value Capture stage: how paywall design sits inside a three-stage growth loop",
    },
  ],
  followups: [
    "Outcome (Apply): Map every point in LangoBee's current flow where a user encounters a payment mention. For each point, write one sentence on what the user has experienced by then. Identify the earliest moment where demonstrated value (a comprehension score, a word tap, a video completion) has occurred before the payment ask.",
    "Outcome (Analyze): LangoBee's trial funnel shows zero trial_started events from real users. Using the four placement strategies from Parizek (2024), name which strategy is currently in use and state why it is producing zero trials.",
    "Outcome (Evaluate): Meinertzhagen (2023) reports that moving a paywall from the front door to immediately after the aha moment increased signup-to-trial conversion from 3% to 15% in one case. Given LangoBee's June 2026 snapshot (24% real signup-to-activation, word_lookup_opened as the top action), write one sentence recommending the earliest defensible paywall moment and one sentence on the risk of that choice.",
  ],
};

export function Wk07L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk07L1SearchBody =
  "paywall placement gating after taste aha moment comprehension score upgrade trigger four placement strategies onboarding contextual buy-now campaign credit card required trial zero trials LangoBee week 7 lecture 1 monetization";
