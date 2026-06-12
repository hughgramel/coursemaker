import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Partner, sponsor, or affiliate",
  date: "Week 10 Lecture 2",
  week: 10,
  topics: [
    "What 50% buys and what it costs forever: co-founder vs distribution partner",
    "FAST agreement norms: advisor equity tops out at 1%, not 50%",
    "Milestone-based alternatives: affiliate now, equity vesting against delivered subscribers later",
    "Creator-led distribution cases: what the evidence says about pre-scale influencer deals",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk10-l2.pdf",
  readings: [
    {
      title: "Week 10 reading: Sponsorship, affiliate, or equity-partner?",
      href: "/c/langobee-10k-mrr-26su/readings/wk10",
      note: "Required before section",
    },
    {
      title: "FAST Agreement (Founder/Advisor Standard Template, Founder Institute, 2020)",
      href: "https://fi.co/fast",
      note: "Market-rate equity for advisors: 0.15-1%, two-year vest, three-month cliff",
    },
    {
      title: "Early Stage SaaS Marketing Overview (Rob Walling, 2022)",
      href: "https://www.youtube.com/watch?v=BgC-yiNYsR4",
      note: "When affiliate vs sponsorship is the right structure; criteria for adding equity",
    },
    {
      title: "The Bullseye Framework for Getting Traction (Gabriel Weinberg, 2015)",
      href: "https://medium.com/@yegg/the-bullseye-framework-for-getting-traction-ef49d05bfd7e",
      note: "How to score and sequence traction channels before committing equity or cash",
    },
  ],
  followups: [
    "Outcome (Analyze): A creator with 80k subscribers offers to promote LangoBee in exchange for 50% of the company. Using FAST norms and the Influencer Marketing Hub rate table, write three sentences showing why this offer is structurally mismatched and what the cash-equivalent alternative would cost.",
    "Outcome (Apply): Write a milestone-based alternative to the 50% offer: a three-tier structure that starts with a 30% affiliate commission, adds a cash bonus at 100 paid conversions, and unlocks a 2% equity vesting grant only after the creator delivers 500 paying subscribers over 12 months.",
    "Outcome (Evaluate): Rob Walling argues that paid channels and equity-heavy creator deals are premature until at least one organic or affiliate channel is validated. Given LangoBee's June 2026 snapshot (0 trials started, 4 real WAU), is LangoBee at the validation threshold yet? Write a one-paragraph recommendation.",
  ],
};

export function Wk10L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk10L2SearchBody =
  "partner sponsor affiliate equity split FAST agreement advisor equity co-founder milestone vesting creator distribution 50 percent equity deal creator-led cases bootstrap Rob Walling Bullseye framework week 10 lecture 2";
