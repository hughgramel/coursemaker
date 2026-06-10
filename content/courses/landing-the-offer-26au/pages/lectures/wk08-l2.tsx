import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Unpaid stints and find-a-problem moves",
  date: "Week 8, Lecture 2",
  week: 8,
  topics: [
    "When an unpaid two-week trial is worth it: small startup, genuine interest, and a clear conversion path",
    "When unpaid work is exploitative: large company that should pay, no clear outcome, you cannot afford the time",
    "Cold-emailing a company to work free for two weeks: the message structure that gets a yes",
    "Find a problem and solve it without permission: identifying real friction, building the fix, sending the artifact",
    "Build-in-public as attention leverage: how a public artifact compounds visibility before you apply",
    "Earning the introduction: from artifact to conversation to referral",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk08-l2.pdf",
  readings: [
    {
      title: "Week 8 reading: the unconventional path",
      href: "/c/landing-the-offer-26au/readings/wk08",
    },
    {
      title: "Paul Graham: Do Things that Don't Scale",
      href: "https://paulgraham.com/ds.html",
    },
    {
      title: "Pieter Levels: Turning side projects into profitable startups",
      href: "https://levels.io/startups",
    },
    {
      title: "Paul Graham: How to Do Great Work",
      href: "https://paulgraham.com/greatwork.html",
    },
  ],
  followups: [
    "Graham (2013) argues that the most effective early moves are the ones that do not scale: recruiting users one by one, doing things for free to prove value. Map that argument onto a specific job-search move you could make this week at one company on your target list.",
    "Apply the decision framework from lecture: pick one company you genuinely want to work at. Walk through the checklist for whether an unpaid stint would be worth it in your specific situation. What is the honest answer, and why?",
    "Write a cold email to a specific person at a target company offering to solve a real problem you have identified in their product. The email must be under 150 words, name the problem specifically, and describe what you would ship. Bring it to section.",
    "Levels (2019) builds products in public before they are ready and uses community transparency as a growth engine. Describe one job-search artifact you could build and ship publicly that would be useful to a target company's engineering team regardless of whether you get hired.",
    "Graham (2023) writes that noticing what others overlook and pursuing it without waiting for permission is as good a bet as you will find. Identify one specific gap or pain point in a product you use that the company's engineers probably know about but have not prioritized. What would a two-day prototype addressing that gap look like?",
    "Section this week is a triage decision: pick ONE of the three moves (OSS PR draft, three cold emails sent, or one public artifact aimed at a target company) and ship it. You must bring the artifact or email to peer review.",
  ],
};

export function Wk08L2() {
  return <LecturePage spec={spec} />;
}

export const wk08L2SearchBody =
  "unpaid stint cold email find a problem build in public permissionless work attention leverage open source unconventional path startup move solve without permission earn introduction artifact Week 8 Lecture 2 landing the offer";
