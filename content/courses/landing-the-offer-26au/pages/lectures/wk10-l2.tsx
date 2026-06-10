import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Demo day and personal playbook",
  date: "Week 10, Lecture 2",
  week: 10,
  topics: [
    "Loop review and peer critique: how to watch your own recorded mock loop and name the single highest-leverage thing to fix",
    "What worked across formal and side-door channels: patterns from students who converted conversations to offers in the data",
    "Personal hiring playbook: the five components every playbook needs and how to build yours from the work you have done this term",
    "Negotiation reminder: the moves from week 9 that apply at every offer, including the first one",
    "What comes next after week 10: the steady-state interview habit, when to stop applying, and the post-offer transition",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk10-l2.pdf",
  readings: [
    {
      title: "Week 10 reading: your personal hiring playbook",
      href: "/c/landing-the-offer-26au/readings/wk10",
    },
    {
      title: "Patrick McKenzie (patio11): Salary negotiation (2012)",
      href: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/",
    },
    {
      title: "Paul Graham: How to Do Great Work (2023)",
      href: "https://paulgraham.com/greatwork.html",
    },
  ],
  followups: [
    "Watch your recorded mock loop from the capstone. Before you critique the content of your answers, critique the structure: did you finish each problem or design within the allotted time? Did you narrate your reasoning throughout? For each round, name the one structural fix that would have the highest impact.",
    "McKenzie (2012) writes: &ldquo;Negotiating never makes worthwhile offers worse. This means you need a commitment strategy: you always, as a matter of policy, negotiate all offers.&rdquo; Write the exact sentence you would say to a recruiter after receiving a verbal offer before you have all the numbers in writing.",
    "Graham (2023) describes consistency as the mechanism that compounds: &ldquo;Writing a page a day...&rdquo; Apply that framing to your job search after week 10. What is the minimum consistent action you will take each week until you sign an offer?",
    "A personal hiring playbook has five components (per the lecture). Write a one-sentence description of your current state for each component. Where are you strongest? Where is the biggest gap you need to close before the next sprint?",
    "The lecture covers what worked across formal and side-door channels. For your own search so far this term, which channel has generated the most responses per unit of effort? What does that tell you about where to concentrate in the next sprint?",
    "After you receive an offer, the lecture describes a post-offer transition. Name three things you should do between signing and your start date that most new grads skip.",
  ],
};

export function Wk10L2() {
  return <LecturePage spec={spec} />;
}

export const wk10L2SearchBody =
  "demo day personal playbook loop review peer critique mock loop recording highest-leverage fix formal side-door channels negotiation patio11 salary post-offer transition steady-state interview habit capstone synthesis Week 10 Lecture 2 landing the offer";
