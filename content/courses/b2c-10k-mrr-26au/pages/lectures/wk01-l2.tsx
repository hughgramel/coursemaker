import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Reading metrics honestly",
  date: "Week 1 Lecture 2",
  week: 1,
  topics: [
    "Vanity vs actionable metrics",
    "MRR vs ARR vs gross revenue: what each lies about",
    "Cohort thinking: why aggregate retention curves deceive",
    "Setting up a one-screen dashboard: install to activation to paid",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk01-l2.pdf",
  readings: [
    {
      title: "Week 1 reading: The B2C funnel and what 'real' numbers look like",
      href: "/c/b2c-10k-mrr-26au/readings/wk01",
      note: "Required before section",
    },
    {
      title: "Vanity Metrics vs. Actionable Metrics (Eric Ries, 2009)",
      href: "https://tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/",
      note: "The original source for the three-A test: actionable, accessible, auditable",
    },
    {
      title: "What is monthly recurring revenue (MRR)? (Stripe, 2026)",
      href: "https://stripe.com/resources/more/what-is-monthly-recurring-revenue",
      note: "Canonical definition of MRR, expansion MRR, and churn MRR",
    },
  ],
  followups: [
    "Outcome (Analyze): Your dashboard shows 2,000 total registered users and 12 paying customers. Which number is actionable and which is vanity? What would make the other one actionable?",
    "Outcome (Analyze): Draw your cohort retention table on paper (four cohorts, four periods). What would a 'deceptively healthy' aggregate retention curve look like on top of those cohorts?",
    "Outcome (Evaluate): You have $800 MRR from 8 customers who each pay $100/month. One customer is on a lifetime deal from a launch promotion. Write the MRR snapshot you would put in your founder journal, including any caveats.",
  ],
};

export function Wk01L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk01L2SearchBody =
  "vanity metrics actionable metrics MRR ARR gross revenue cohort retention aggregate dashboard activation lecture Week 1";
