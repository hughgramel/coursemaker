import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Onboarding to first aha",
  date: "Week 3, Lecture 2",
  week: 3,
  topics: [
    "Time-to-value: how long is too long before the aha moment",
    "The guided first session: one path, one outcome, sixty seconds",
    "Defining activation for LangoBee: first word tapped as the aha action",
    "Measuring activation rate against industry benchmarks",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk03-l2.pdf",
  readings: [
    {
      title: "Week 3 reading: The broken-vacuum bar and the guided first session",
      href: "/c/langobee-10k-mrr-26su/readings/wk03",
      note: "Required before section",
    },
    {
      title: "User Onboarding Teardowns (UserOnboard / Hulick, 2013)",
      href: "https://www.useronboard.com/user-onboarding-teardowns/",
      note: "Annotated teardowns of Duolingo, Dropbox, Slack: what a guided first session looks like in practice",
    },
    {
      title: "How to Determine Your Activation Metric (Lenny's Newsletter / Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/how-to-determine-your-activation",
      note: "Three-step empirical framework for finding the action that predicts long-term retention",
    },
  ],
  followups: [
    "Outcome (Apply): Write the script for LangoBee's guided first session. It must reach word_lookup_opened in 60 seconds or less. Describe each screen transition in one sentence.",
    "Outcome (Apply): LangoBee's activation event is word_lookup_opened (first word tapped). Write the PostHog query that measures the percentage of signups who fire this event within 24 hours of account creation.",
    "Outcome (Analyze): Rachitsky and Timen (2022) report a median activation rate of 25% across 500+ products. LangoBee's current cohort data shows roughly 12 activated out of 19 real signups in the May 25 week, a rate that drops sharply when bot signups are included. What does this tell you about where the onboarding investment should go first?",
  ],
};

export function Wk03L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk03L2SearchBody =
  "time to value guided first session activation aha moment word tapped word_lookup_opened onboarding 60 seconds activation rate benchmark LangoBee lecture Week 3";
