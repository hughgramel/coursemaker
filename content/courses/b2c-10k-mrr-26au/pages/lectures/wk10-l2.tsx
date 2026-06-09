import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Past $10k: what changes",
  date: "Week 10 Lecture 2",
  week: 10,
  topics: [
    "The shape of the next stretch: $10k to $30k to $100k MRR",
    "What you need to hire vs what AI can absorb in 2026 and beyond",
    "When to take money vs stay bootstrapped",
    "The graduate-to-compound mindset: lifecycle, SEO, brand",
    "Send-off: the path-to-$10k-MRR plan you will defend Friday",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk10-l2.pdf",
  readings: [
    {
      title: "Week 10 reading: Synthesis",
      href: "/c/b2c-10k-mrr-26au/readings/wk10",
      note: "Required before capstone defense",
    },
    {
      title: "All the ways to grow your product (Lenny Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/all-the-ways-to-grow-your-product",
      note: "The Racecar Growth Framework: kickstarts, engines, lubricants, turbo boosts, mid-stage accelerants",
    },
    {
      title: "MAKE: The Indie Maker Handbook (Pieter Levels, 2019)",
      href: "https://readmake.com/",
      note: "Pricing philosophy, monetisation, and the keep-going framing for bootstrapped founders",
    },
    {
      title: "Nine Business Models and the Metrics Investors Want (Anu Hariharan, YC, 2019)",
      href: "https://www.startupschool.org/videos/66",
      note: "For consumer subscription: MRR growth rate, user retention, paid CAC, and LTV",
    },
  ],
  followups: [
    "Outcome: Analyze — Map your current growth motion onto Lenny&rsquo;s Racecar framework. Which of the five components (kickstart, engine, lubricant, turbo boost, accelerant) is your strongest? Which is entirely absent?",
    "Outcome: Evaluate — Write the one sentence that describes the graduate-to-compound move available to your specific product right now: a lifecycle sequence you could build, a programmatic SEO cluster you could seed, or a brand moment you could own. What is the 30-day version of that move?",
    "Outcome: Create — Complete your path-to-$10k-MRR plan card: current MRR, the single intervention, the metric you will move, the target, and the rollback criterion. This is the document you defend Friday.",
  ],
};

export function Wk10L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk10L2SearchBody =
  "past $10k MRR $10k $30k $100k growth hire AI bootstrapped funded graduate to compound mindset lifecycle SEO brand path to $10k plan send-off capstone lecture Week 10";
