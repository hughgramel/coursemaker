import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "From here to $10K",
  date: "Week 12 Lecture 2",
  week: 12,
  topics: [
    "The sequencing argument: retention bar first, first dollar second, one repeatable channel third",
    "Channel math: the arithmetic that constrains every growth plan",
    "What kills companies at this stage: the five self-deceptions to audit",
    "The 12-month view: sequenced bets with explicit kill criteria",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk12-l2.pdf",
  readings: [
    {
      title: "Week 12 reading: The $10K MRR operating plan",
      href: "/c/langobee-10k-mrr-26su/readings/wk12",
      note: "Required before section",
    },
    {
      title: "Max MRR: Your Growth Ceiling (Jason Cohen, 2025)",
      href: "https://longform.asmartbear.com/max-mrr/",
      note:
        "The Max MRR formula as a leading indicator of the revenue ceiling you are locked into",
    },
    {
      title: "The Stair Step Method of Bootstrapping (Rob Walling, 2015)",
      href: "https://robwalling.com/essays/2015/03/26/the-stair-step-method-of-bootstrapping",
      note:
        "Why $10K MRR is the threshold that changes which channels become viable",
    },
    {
      title:
        "Author Talks: What poker pro Annie Duke can teach you about quitting on time (McKinsey, 2023)",
      href: "https://www.youtube.com/watch?v=4FgMjah6qQI",
      note: "Kill criteria as pre-committed state-plus-date conditions",
    },
  ],
  followups: [
    "Outcome (Create): Write the $10K MRR operating plan: three sequenced bets, the channel math for each, and the kill criteria for each bet. Use the Max MRR formula to stress-test the math before you write it down.",
    "Outcome (Evaluate): Grade LangoBee against the five self-deceptions named in the lecture. Which one is most present in your current numbers? Name the specific metric that would expose it.",
    "Outcome (Apply): Set the kill criteria for your current growth bet: write the state and date condition in one sentence. Post it to langobee-intel before the capstone section.",
  ],
};

export function Wk12L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk12L2SearchBody =
  "from here to 10K sequencing retention first dollar channel math max MRR formula self-deceptions vanity counts bot signups founder dogfooding spike channel 12-month view sequenced bets kill criteria churn ceiling operating plan week 12 lecture 2 synthesis";
