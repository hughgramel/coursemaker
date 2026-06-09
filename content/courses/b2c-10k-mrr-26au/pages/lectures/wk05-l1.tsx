import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "A/B testing rigor",
  date: "Week 5 Lecture 1",
  week: 5,
  topics: [
    "What an A/B test actually controls for: why randomization matters",
    "Sample-size math: the 16 × variance / MDE² heuristic and what it means for low-traffic products",
    "The painted-door test: validating demand without a full build",
    "Sequential testing, peeking, and why reading results too early inflates false positives",
    "What to A/B test (and what not to) in weeks 1-10",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk05-l1.pdf",
  readings: [
    {
      title: "Week 5 reading: Experimentation + release management",
      href: "/c/b2c-10k-mrr-26au/readings/wk05",
      note: "Required before section. Includes the mid-course pivot/persevere check.",
    },
    {
      title: "A software engineer&rsquo;s guide to A/B testing (Lior Neu-ner, PostHog, 2023)",
      href: "https://posthog.com/product-engineers/ab-testing-guide-for-engineers",
      note: "Five-component framework: goals, hypothesis, minimal changes, sample sizes, duration",
    },
    {
      title: "10 things we&rsquo;ve learned about A/B testing for startups (Ian Vanagas, PostHog, 2023)",
      href: "https://posthog.com/newsletter/what-we've-learned-about-ab-testing",
      note: "The peeking problem, sequential testing, and why most experiments fail",
    },
    {
      title: "Trustworthy Online Controlled Experiments (Kohavi, Tang &amp; Xu, 2020)",
      href: "https://www.cambridge.org/core/books/trustworthy-online-controlled-experiments/D97B26382EB0EB2DC2019A7A7B518F59",
      note: "The canonical academic-practitioner reference for A/B rigor (optional deeper reading)",
    },
  ],
  followups: [
    "Outcome: Analyze — Your product gets 400 unique visitors per week. You want to test a new pricing page and need to detect a 10% improvement in conversion rate (currently 5%). Using the sample-size heuristic from the reading, roughly how many weeks do you need to run this test? Show your arithmetic.",
    "Outcome: Analyze — Explain in one sentence why peeking at an A/B test mid-run inflates your false-positive rate. What is the fix?",
    "Outcome: Apply — Name one thing in your product you want to test this week. Run the sample-size math. If you do not have enough traffic, describe the painted-door alternative you would run instead.",
  ],
};

export function Wk05L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk05L1SearchBody =
  "A/B testing rigor controlled experiment randomization sample size MDE minimum detectable effect peeking problem p-hacking sequential testing painted door test traffic threshold lecture Week 5 B2C growth";
