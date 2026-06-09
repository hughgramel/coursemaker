import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Diagnosing stalled MRR",
  date: "Week 10 Lecture 1",
  week: 10,
  topics: [
    "The four-quadrant diagnosis: leak vs ceiling vs price vs channel",
    "Reading your own dashboard like a stranger would: the self-audit checklist",
    "When to pivot the product vs pivot the channel vs pivot the price",
    "Honest assessment: should you keep going?",
    "Live diagnosis: three student products on the projector",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk10-l1.pdf",
  readings: [
    {
      title: "Week 10 reading: Synthesis",
      href: "/c/b2c-10k-mrr-26au/readings/wk10",
      note: "Required before section Friday",
    },
    {
      title: "What is monthly recurring revenue? (Stripe, 2026)",
      href: "https://stripe.com/resources/more/what-is-monthly-recurring-revenue",
      note: "Expansion MRR, churn MRR, contraction MRR: the building blocks for diagnosing a stall",
    },
    {
      title: "Growth for Startups (Gustaf Alstromer, YC, 2019)",
      href: "https://www.ycombinator.com/library/6k-growth-for-startups",
      note: "Why retention is the only honest PMF signal, and how to diagnose stalled growth from first principles",
    },
    {
      title: "Thinking beyond frameworks (Casey Winters, Lenny&rsquo;s Podcast, 2023)",
      href: "https://www.youtube.com/watch?v=QMFvz8utx-Q",
      note: "Channel-product fit failures and the tension between retention and acquisition",
    },
  ],
  followups: [
    "Outcome: Analyze, Apply the diagnostic quadrant to your own product. Write one sentence for each quadrant (leak, ceiling, price, channel): does the evidence point there or not? Which quadrant has the most evidence?",
    "Outcome: Evaluate, Using the self-audit checklist from lecture, what is the single most uncomfortable dashboard number you have been avoiding? Write it down and explain why it is uncomfortable.",
    "Outcome: Create, Draft the first 60 seconds of your capstone defense. The framing is: funnel numbers, activation rate, MRR, and the quadrant your diagnosis lands in. Practice it out loud.",
  ],
};

export function Wk10L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk10L1SearchBody =
  "diagnosing stalled MRR diagnostic quadrant leak ceiling price channel self-audit dashboard pivot product channel price trigger honest assessment keep going live diagnosis lecture Week 10";
