import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "ASO + screenshots",
  date: "Week 8 Lecture 2",
  week: 8,
  topics: [
    "Title, subtitle, keywords: character limits, ranking weight, and what actually moves organic search",
    "Screenshots that convert: the first-three rule, visual hierarchy, and benefit framing over feature labels",
    "Featuring: how indie apps get featured (Tony Dinh case study) and what you can actually control",
    "Localization as ASO leverage: one keyword set, three languages, measurable lift",
    "Apple Search Ads basics for indie budgets: keyword targeting, CPI measurement, and the pause-and-monitor cycle",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk08-l2.pdf",
  readings: [
    {
      title: "Week 8 reading: App store mechanics, ASO, and the capstone scaffold",
      href: "/c/b2c-10k-mrr-26au/readings/wk08",
      note: "Required before section",
    },
    {
      title: "A practical guide to app store optimization (Thomas Kriebernegg, RevenueCat, 2022)",
      href: "https://www.revenuecat.com/blog/growth/app-store-optimization-guide/",
      note: "Title carries the strongest ranking weight; screenshots are the most critical CRO element",
    },
    {
      title: "App Store Optimization Title: 2026 ASO Title Playbook (AppFollow team, 2026)",
      href: "https://appfollow.io/blog/app-store-optimization-title",
      note: "Character limits, keyword placement strategy, A/B methodology, and the first-three rule explained",
    },
    {
      title: "Apple Search Ads: The Complete Guide for Indie Developers (Peter, trysonar.app, 2026)",
      href: "https://trysonar.app/blog/apple-search-ads-guide",
      note: "Target search popularity scores 20-55 where major companies do not bid; $5-50/day budget tiers",
    },
  ],
  followups: [
    "Outcome: Analyze, Take your current app title. Count the characters. Does it include a keyword with measurable search volume? Use the AppFollow playbook structure (brand name + pipe/colon + primary keyword) to draft an alternative. Write one sentence explaining which keyword you chose and why.",
    "Outcome: Apply, Replace your first three screenshots with versions that follow the benefit framing rule: caption describes the outcome the user gets, not the feature name. Post the new screenshots publicly and record one piece of feedback.",
    "Outcome: Evaluate, Should you run Apple Search Ads this week? Use the trysonar framework: check your current organic CPI, find three keywords with search popularity 20-55, estimate cost at $0.50-2.00 CPI. Write a one-sentence go/no-go decision with your reasoning.",
  ],
};

export function Wk08L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk08L2SearchBody =
  "ASO app store optimization title subtitle keywords character limit ranking weight screenshots first three rule visual hierarchy benefit framing featuring indie apps Tony Dinh localization Apple Search Ads ASA indie budget CPI keyword targeting lecture Week 8";
