import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The new-grad pipeline",
  date: "Week 1, Lecture 2",
  week: 1,
  topics: [
    "University recruiting calendar: when the windows open and close",
    "Intern conversion: the highest-probability path to a new-grad offer",
    "Target list construction: reach, match, and safety tiers",
    "Tagging targets by side-door surface area",
    "Building the spreadsheet you will work from all term",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk01-l2.pdf",
  readings: [
    {
      title: "Week 1 reading: how the hiring funnel works and where you fit",
      href: "/c/landing-the-offer-26au/readings/wk01",
    },
    {
      title: "Patrick McKenzie: Don't call yourself a programmer",
      href: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/",
    },
    {
      title: "Gergely Orosz on tech's entry-level crisis (YouTube)",
      href: "https://www.youtube.com/watch?v=o7Asyo9s2_M",
    },
  ],
  followups: [
    "Map the university recruiting calendar for two companies on your target list. When do applications open? When do offers expire? Work backwards to find the last safe date to start each application.",
    "Orosz (2025) argues that the bar for what counts as junior has risen. What does that mean for how you should present yourself on your target-company list?",
    "Pick five companies you are genuinely considering. For each one, identify whether you have a side-door surface: a referral contact, an open-source project they sponsor, a public artifact that demonstrates relevant skill. Be honest about where you have no entry point other than the portal.",
    "McKenzie (2011) argues that networking through relationships drives hiring more than formal applications. Who in your existing network works at or has worked at a company on your list? What is one concrete step to activate that contact this week?",
    "What is the difference between a reach company and a safety company in the context of SWE recruiting? What makes the same company a reach for one candidate and a match for another?",
    "Section this week: bring a draft of your target-company list (even a short one) to the section workshop. You will build it to 30+ rows during the session.",
  ],
};

export function Wk01L2() {
  return <LecturePage spec={spec} />;
}

export const wk01L2SearchBody =
  "university recruiting calendar intern conversion new-grad pipeline target list reach match safety side-door surface referral open source application channels Week 1 Lecture 2 landing the offer";
