import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Loops, not funnels",
  date: "Week 11 Lecture 1",
  week: 11,
  topics: [
    "Growth loops vs linear acquisition funnels: what makes them structurally different",
    "The shorts-share-viewer candidate loop: shorts feed -> share -> new viewer -> shorts feed",
    "Viral coefficient honestly measured: LangoBee's K-factor at 1 share from 408 impressions",
    "Why K less than 1 still supports a healthy business, and what would change the number",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk11-l1.pdf",
  readings: [
    {
      title: "Week 11 reading: Owned loops and the content engine",
      href: "/c/langobee-10k-mrr-26su/readings/wk11",
      note: "Required before section",
    },
    {
      title: "Growth Loops are the New Funnels (Balfour, Winters, Kwok, Chen, Reforge, 2018)",
      href: "https://www.reforge.com/blog/growth-loops",
      note: "The canonical definition of acquisition, engagement, and monetization loops",
    },
    {
      title: "Viral coefficient: What it does and does NOT measure (Andrew Chen, 2009)",
      href: "https://andrewchen.com/viral-coefficient/",
      note: "Why K greater than 1 is not required and K alone is not a growth model",
    },
    {
      title: "The Cold Start Problem (Andrew Chen, Talks at Google, 2021)",
      href: "https://www.youtube.com/watch?v=TSnYO34b3TA",
      note: "Viral loop design and the share trigger that converts content consumption into distribution",
    },
  ],
  followups: [
    "Outcome (Apply): Draw the shorts-share-viewer loop on paper. Label each arrow with the metric that measures the transition: impression -> completion rate, completion -> share rate, share -> new viewer signup rate. Using LangoBee's June 2026 snapshot (408 impressions, 101 completions, 1 share, 13 real feed users), compute the K-factor honestly.",
    "Outcome (Analyze): The Reforge essay distinguishes acquisition loops from engagement loops. Identify which type the shorts-share-viewer loop is, and state the single metric that would move from the current near-zero K toward 0.1.",
    "Outcome (Explain): In two sentences, explain why a growth loop compounds while a linear acquisition funnel does not. Then name the reinvestment step in the shorts loop: what output becomes a new input?",
  ],
};

export function Wk11L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk11L1SearchBody =
  "growth loops funnels viral coefficient K-factor shorts share viewer acquisition loop engagement loop LangoBee 408 impressions 1 share 13 users compounding reinvestment week 11 lecture 1 distribution";
