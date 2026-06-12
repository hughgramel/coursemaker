import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The creator channel",
  date: "Week 10 Lecture 1",
  week: 10,
  topics: [
    "Language-learning YouTube as the watering hole: where the real learners live",
    "Micro vs macro creators: subscriber count, engagement rate, and which metric matters",
    "Market rates: CPM pricing, flat-fee sponsorships, and affiliate commissions",
    "LangoBee's unique prospecting asset: 2,773 catalogued creators already in the database",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk10-l1.pdf",
  readings: [
    {
      title: "Week 10 reading: Sponsorship, affiliate, or equity-partner?",
      href: "/c/langobee-10k-mrr-26su/readings/wk10",
      note: "Required before section",
    },
    {
      title: "YouTube Influencer Rates: A Cost Guide for Brands (Influencer Marketing Hub, 2024)",
      href: "https://influencermarketinghub.com/youtube-influencer-rates/",
      note: "Flat-fee rates by creator tier and CPM benchmarks",
    },
    {
      title: "How to kickstart and scale a consumer business: Step 4, Find your early adopters (Lenny Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/consumer-business-find-first-users",
      note: "Why influencer partnerships are the highest-impact kickstart for identity-driven consumer apps",
    },
    {
      title: "The Law of Shitty Clickthroughs (Andrew Chen, 2012)",
      href: "https://andrewchen.com/the-law-of-shitty-clickthroughs/",
      note: "Why creator channel performance decays and what that implies for deal timing",
    },
  ],
  followups: [
    "Outcome (Analyze): Using the Influencer Marketing Hub rate table, compute the estimated flat-fee cost for one sponsored video from a micro creator (20k subscribers) vs a mid-tier creator (200k subscribers). At LangoBee's $7.99/mo price and 5% trial-to-paid conversion rate, how many new subscribers does each video need to generate to break even?",
    "Outcome (Apply): Open the youtube_creators table and write a SQL query that returns the top 20 Spanish-language creators by clip count, filtered to creators with at least 5 clips in the catalog. These are your warmest prospects for the outreach wave.",
    "Outcome (Evaluate): Andrew Chen argues that every marketing channel degrades toward zero clickthrough as novelty fades. Does the 'your videos are already in our catalog' opening line resist this decay better than a standard sponsorship pitch? Write two sentences defending your answer.",
  ],
};

export function Wk10L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk10L1SearchBody =
  "creator channel YouTube language learning micro macro creators sponsorship rates CPM flat fee affiliate commission youtube_creators catalog prospecting watering hole subscriber engagement market rates week 10 lecture 1";
