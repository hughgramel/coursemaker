import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "SEO + content engines",
  date: "Week 6 Lecture 2",
  week: 6,
  topics: [
    "Programmatic SEO: how Nomad List turned a database into thousands of pages that rank",
    "Topic clusters and the lighthouse article pattern",
    "Backlinks for indie hackers: what is realistic vs what is fantasy",
    "Page 1 in 12 weeks: when it is possible and when it is not",
    "Measuring with Google Search Console: impressions to clicks to activation",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk06-l2.pdf",
  readings: [
    {
      title: "Week 6 reading: Picking your wedge channel and building an SEO engine",
      href: "/c/b2c-10k-mrr-26au/readings/wk06",
      note: "Required; the programmatic SEO and GSC sections are directly relevant to this lecture",
    },
    {
      title: "Nomad List Founder (Pieter Levels, 2024)",
      href: "https://levels.io/nomad-list-founder",
      note: "Levels’ own account of how Nomad List grew to $20-40k/month via organic search and product design",
    },
    {
      title: "MAKE: The Indie Maker Handbook (Pieter Levels, 2019)",
      href: "https://readmake.com/",
      note: "Covers programmatic SEO mechanics, pricing philosophy, and automation in detail",
    },
    {
      title: "What are impressions, position, and clicks in Google Search Console? (Google, 2026)",
      href: "https://support.google.com/webmasters/answer/7042828",
      note: "Official documentation for the three GSC metrics; required for understanding the search-console funnel",
    },
    {
      title: "How to get customers with free tool marketing (Marc Lou, 2024)",
      href: "https://newsletter.marclou.com/p/marketing-for-product-obsessed-developers",
      note: "30% conversion from free tool to paid product; rules for no-friction mini-apps that expand SEO reach",
    },
    {
      title: "Kickstarting and scaling a consumer business: Step 6, Build your growth engine (Lenny Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/growth-engines",
      note: "Three growth engines (virality, SEO, paid); Thumbtack SEO case study with 18-24 month timeline",
    },
  ],
  followups: [
    "Outcome: Create, Design a topic cluster for your product: 1 lighthouse article title (targeting a high-intent query) and 8 supporting page titles. Write the URL template you would use if you were building a programmatic SEO system.",
    "Outcome: Apply, Verify Google Search Console for your domain and submit your sitemap. Screenshot the GSC dashboard showing your current impressions and average position. If you have zero data, write what you expect the first query impressions to be and why.",
    "Outcome: Analyze, Pull your GSC data (or estimate from week 5 traffic). Write the search-console funnel: impressions → clicks → activation. Where is the biggest drop? Name one change you could make to the next piece of content to improve the weakest step.",
  ],
};

export function Wk06L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk06L2SearchBody =
  "programmatic SEO content engine topic cluster lighthouse article backlinks Google Search Console GSC impressions clicks Nomad List Pieter Levels Marc Lou free tool marketing page 1 lecture Week 6";
