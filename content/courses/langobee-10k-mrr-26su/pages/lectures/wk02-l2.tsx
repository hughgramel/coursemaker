import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Pivot or persevere",
  date: "Week 2 Lecture 2",
  week: 2,
  topics: [
    "The Ries pivot taxonomy: seven named pivot types and their evidence requirements",
    "The zoom-in pivot: when a feature becomes the whole product",
    "The shorts feed as a zoom-in pivot candidate: what the June 2026 data says",
    "Time-boxed experiments: hypothesis, metric, kill threshold, decision date",
    "The four-lever framework: picking the most misaligned lever",
    "The fork decision memo: required fields and structure",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk02-l2.pdf",
  readings: [
    {
      title: "Week 2 reading: Thesis discipline and the fork decision",
      href: "/c/langobee-10k-mrr-26su/readings/wk02",
      note: "Required before section",
    },
    {
      title: "The Lean Startup: Talks at Google (Eric Ries, 2011)",
      href: "https://www.youtube.com/watch?v=fEvKo90qBns",
      note: "Full pivot taxonomy and the pivot-or-persevere decision logic; 60 minutes",
    },
    {
      title: "The Pivot to Product-Market Fit (First Round Review, 2023)",
      href: "https://review.firstround.com/the-pivot-to-product-market-fit/",
      note: "Four-lever framework with Plaid, Clay, Lattice, and Vanta case studies",
    },
  ],
  followups: [
    "Outcome (Analyze): Using Ries's seven pivot types, name the type that best describes LangoBee's possible move from premium library to freemium shorts feed. State the evidence that would be required to justify that specific pivot type.",
    "Outcome (Apply): Write a time-boxed experiment for the shorts direction. Include: the hypothesis (one falsifiable sentence), the metric, the kill threshold as a specific number, and the decision date as a specific calendar date.",
    "Outcome (Explain): What is a zoom-in pivot? How does it differ from a customer-segment pivot? Give one reason the shorts feed fits the zoom-in definition and one reason it might not.",
  ],
};

export function Wk02L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk02L2SearchBody =
  "pivot persevere Ries pivot taxonomy zoom-in pivot shorts feed time-boxed experiment four-lever framework fork decision memo kill threshold decision date week 2 lecture 2 LangoBee foundations";
