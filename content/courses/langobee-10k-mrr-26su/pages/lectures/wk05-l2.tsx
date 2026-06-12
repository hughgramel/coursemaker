import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Reading tiny cohorts",
  date: "Week 5 Lecture 2",
  week: 5,
  topics: [
    "Directional metrics at n=12: what you can and cannot conclude",
    "The D1 >= 30% bar: when a small cohort passes, fails, or is inconclusive",
    "Mom Test interview questions: the three rules and the bad-data patterns",
    "The two-unprompted-praise bar: qualifying qualitative signal",
    "Segmenting stickiness by content type: shorts vs long-form video vs text",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk05-l2.pdf",
  readings: [
    {
      title: "Week 5 reading: The 10-user test",
      href: "/c/langobee-10k-mrr-26su/readings/wk05",
      note: "Required before section",
    },
    {
      title: "The Mom Test (Rob Fitzpatrick, 2013)",
      href: "https://www.momtestbook.com/",
      note: "Three rules and the bad-data patterns; write five compliant questions",
    },
    {
      title: "How to Talk to Users, Startup School 2022 (Gustaf Alstromer, 2022)",
      href: "https://www.youtube.com/watch?v=z1iF1c8w5Lg",
      note: "Interview vs usability test distinction; avoiding confirmation bias",
    },
    {
      title: "Why You Only Need to Test with 5 Users (Jakob Nielsen, 2000)",
      href: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/",
      note: "Statistical argument for small qualitative rounds; when to break the rule",
    },
  ],
  followups: [
    "Outcome (Apply): Your 10-user cohort returns D1 data. Three users returned (D1 = 30%). Two of them used shorts; one used long-form video; the text-only user churned. Write the two-sentence segment finding and what it implies for content prioritization.",
    "Outcome (Analyze): A user tells you 'I love how easy it is to look up words.' Apply the Mom Test: is this signal, fluff, or a compliment? Write the follow-up question you would ask to get past it.",
    "Outcome (Evaluate): You have 12 users and a D1 of 33%. Does this pass the retention bar from week 4? What evidence would you need to call it directionally positive rather than just lucky?",
  ],
};

export function Wk05L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk05L2SearchBody =
  "reading tiny cohorts directional metrics D1 retention 30 percent bar Mom Test interview questions two unprompted praise qual quant pairing content type segmentation shorts long-form video stickiness n=12 week 5 lecture 2";
