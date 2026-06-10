import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The interview loop end to end",
  date: "Week 7, Lecture 2",
  week: 7,
  topics: [
    "The phone screen: what it tests and the pass/fail criteria",
    "Virtual on-site structure: what each round is designed to measure",
    "How interviewers calibrate scores inside a loop",
    "The debrief process: what happens after you leave the building",
    "What the hiring committee reads and how decisions are made",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk07-l2.pdf",
  readings: [
    {
      title: "Week 7 reading: STAR structure, worked example, and 12 story sources",
      href: "/c/landing-the-offer-26au/readings/wk07",
    },
    {
      title: "Gergely Orosz: The tech interview inside out",
      href: "https://blog.pragmaticengineer.com/the-tech-interview-inside-out/",
    },
    {
      title: "Gergely Orosz: Confessions from a big tech hiring manager (YouTube)",
      href: "https://www.youtube.com/watch?v=vFOw_m5zNCs",
    },
    {
      title: "Joel Spolsky: The guerrilla guide to interviewing (v3.0)",
      href: "https://www.joelonsoftware.com/2006/10/25/the-guerrilla-guide-to-interviewing-version-30/",
    },
  ],
  followups: [
    "Orosz (2020) says that most prep materials ignore the surrounding loop. Describe the full on-site loop for one company on your target list: how many rounds, what types, roughly how long? Where does behavioral fit in the sequence?",
    "Interviewers write feedback packets with specific evidence, not just votes. Why does specificity matter more than the vote itself? What does that imply about how you should tell your STAR stories?",
    "The bar raiser is from outside the hiring team and cannot be overruled by headcount pressure. What problem is this mechanism designed to solve? What failure mode does it create?",
    "Spolsky (2006) writes that the gut feeling that something is 'wrong' about a candidate is a signal worth heeding, even if you cannot name it. From the candidate side, what does that mean for how you should present yourself in the behavioral round?",
    "If a debrief has four 'hire' votes and one 'strong no hire' from the bar raiser, what typically happens? What does that tell you about the calibration structure at companies that use this model?",
    "The capstone is out this week: full mock loop (45 min coding, 45 min design, 30 min behavioral) plus an application sprint and one unconventional move. Start identifying two peers who can run each round with you.",
  ],
};

export function Wk07L2() {
  return <LecturePage spec={spec} />;
}

export const wk07L2SearchBody =
  "interview loop end to end phone screen virtual on-site debrief process hiring committee feedback packet bar raiser calibration hiring bar new-grad SWE full loop mock interview Week 7 Lecture 2 landing the offer";
