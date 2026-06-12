import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The weekly machine",
  date: "Week 12 Lecture 1",
  week: 12,
  topics: [
    "The Monday report cadence: why you grade last week before you plan this week",
    "Input metrics vs output metrics: the Amazon WBR distinction applied to a solo founder",
    "The langobee-intel repo as a CEO dashboard refreshed by agents",
    "Four agent-audited loops that close the operating system",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk12-l1.pdf",
  readings: [
    {
      title: "Week 12 reading: The $10K MRR operating plan",
      href: "/c/langobee-10k-mrr-26su/readings/wk12",
      note: "Required before section",
    },
    {
      title:
        "Colin Bryar on the practice of Amazon's Weekly Business Review (Cedric Chin, 2023)",
      href: "https://commoncog.com/colin-bryar-amazon-weekly-business-review/",
      note: "The two-tier metric architecture and why discussions must focus on inputs",
    },
    {
      title: "Designing the Ideal Bootstrapped Business (Jason Cohen, MicroConf 2013)",
      href: "https://www.youtube.com/watch?v=otbnC2zE2rw",
      note: "Designing backward from target economics; the 60-minute canonical talk",
    },
    {
      title:
        "Reflecting on My Failure to Build a Billion-Dollar Company (Sahil Lavingia, 2019)",
      href: "https://sahillavingia.com/reflecting",
      note:
        "What absent operating discipline looks like in practice: no weekly cadence, no pre-committed kill criteria",
    },
  ],
  followups: [
    "Outcome (Apply): Run the Monday report cadence once end to end this week. Grade last week on D1 retention, MRR, and real WAU. Write the grade in langobee-intel before doing anything else on Monday.",
    "Outcome (Analyze): Using Cedric Chin's input vs output distinction, classify each metric in your current PostHog dashboard as an input metric (you can act on it this week) or an output metric (you can only observe it). Name at least two of each.",
    "Outcome (Evaluate): Sahil Lavingia identifies three moments where he should have applied kill criteria at Gumroad but did not. Match each moment to the corresponding absence in LangoBee's current operating system: which one do you most resemble today, and what would fix it?",
  ],
};

export function Wk12L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk12L1SearchBody =
  "weekly machine Monday report cadence grade last week first input metrics output metrics Amazon WBR weekly business review intel repo CEO dashboard agent-audited loops operating cadence kill criteria langobee-intel week 12 lecture 1 synthesis";
