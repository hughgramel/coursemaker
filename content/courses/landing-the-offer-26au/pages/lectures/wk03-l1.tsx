import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The coding interview format",
  date: "Week 3, Lecture 1",
  week: 3,
  topics: [
    "What the interviewer is actually evaluating (and what they are not)",
    "The 45-minute arc: setup, exploration, coding, review",
    "The Google coding interview rubric: four signal dimensions",
    "Signal vs noise: what noise looks like in practice",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk03-l1.pdf",
  readings: [
    {
      title: "Week 3 reading: the three early patterns",
      href: "/c/landing-the-offer-26au/readings/wk03",
    },
    {
      title:
        "Clément Mihailescu: Google coding interview grading rubric (YouTube, ~15 min)",
      href: "https://www.youtube.com/watch?v=-btCHmVMHro",
    },
    {
      title:
        "Joel Spolsky: The guerrilla guide to interviewing (version 3.0)",
      href: "https://www.joelonsoftware.com/2006/10/25/the-guerrilla-guide-to-interviewing-version-30/",
    },
  ],
  followups: [
    "Spolsky (2006) says interviewers are looking for two things: smart, and gets things done. How does each of the four rubric dimensions map to those two properties? Are there dimensions that do not map cleanly?",
    "Mihailescu identifies code quality as a distinct signal dimension. What does low code quality look like in a 45-minute interview? Give three concrete examples of choices that hurt that score.",
    "You get through the first 15 minutes with a brute-force O(n²) solution. The interviewer says, ‘That works. Can you do better?’ Walk through the exact next steps you would take, in order.",
    "The reading describes noise as activity that does not generate signal. Identify two behaviors a nervous candidate commonly exhibits that fall into noise. How would you suppress them under real interview pressure?",
    "Map the 45-minute arc onto the rubric dimensions. At which point in the arc is each dimension most exposed? At which point can you no longer recover a dimension you have damaged?",
  ],
};

export function Wk03L1() {
  return <LecturePage spec={spec} />;
}

export const wk03L1SearchBody =
  "coding interview format 45-minute arc interviewer rubric signal noise Google grading problem solving communication code quality edge cases Week 3 Lecture 1 landing the offer";
