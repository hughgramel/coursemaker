import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The launch as an instrument",
  date: "Week 9 Lecture 2",
  week: 9,
  topics: [
    "UTM discipline: why every link needs a campaign tag and how to read the PostHog source breakdown",
    "Landing page message match: connecting the Reddit post or Show HN title to the page the visitor lands on",
    "Burn risk: why a 24%-ever-return product must hit retention gates before driving volume",
    "Launch as a repeatable instrument, not a one-shot event: the multi-phase framework",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk09-l2.pdf",
  readings: [
    {
      title: "Week 9 reading: Community launch and channel fit",
      href: "/c/langobee-10k-mrr-26su/readings/wk09",
      note: "Required before section",
    },
    {
      title: "How to Launch (Again and Again) (Kat Manalac, 2019)",
      href: "https://www.youtube.com/watch?v=3xU050kMbHM",
      note: "UTM discipline, small-batch launching, distinct audience-message pairs per phase",
    },
    {
      title: "The Bullseye Framework for Getting Traction (Gabriel Weinberg, 2015)",
      href: "https://medium.com/@yegg/the-bullseye-framework-for-getting-traction-ef49d05bfd7e",
      note: "Three-ring test: brainstorm, cheap test, double down -- under $1K and one month per ring",
    },
    {
      title: "How to Get Your First Customers (Gustaf Alstromer, 2022)",
      href: "https://www.youtube.com/watch?v=hyYCn_kAngI",
      note: "When UTM parameters are necessary for understanding which community converts",
    },
  ],
  followups: [
    "Outcome (Apply): Build the UTM parameter set for each of the four launch channels this week (r/languagelearning, r/Spanish, r/dreamingspanish, Show HN). Name the utm_source, utm_medium, and utm_campaign for each. Paste the four tagged URLs.",
    "Outcome (Analyze): LangoBee's current ever-return rate is approximately 24% (June 2026 cohort data). Using Manalac's multi-launch framework, identify which launch phase is currently appropriate and which phases require hitting a retention gate first.",
    "Outcome (Explain): In two sentences, define burn risk in the context of a community launch. Then name the specific retention metric you would want to see before driving a second wave of traffic to r/languagelearning.",
  ],
};

export function Wk09L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk09L2SearchBody =
  "UTM discipline utm_source utm_medium utm_campaign PostHog source breakdown landing page message match burn risk retention gate repeatable launch instrument multi-phase launch Manalac Bullseye framework Weinberg channel fit community launch week 9 lecture 2";
