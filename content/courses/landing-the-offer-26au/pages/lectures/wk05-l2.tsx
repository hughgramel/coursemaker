import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Communicating while you code",
  date: "Week 5, Lecture 2",
  week: 5,
  topics: [
    "Thinking aloud as a skill: why narrating your reasoning scores separately from getting the answer right, and how to build the habit before your first real interview",
    "Edge-case enumeration: a repeatable checklist for identifying null inputs, empty arrays, negative numbers, duplicates, and off-by-one conditions before you write the first line",
    "Clarifying questions: the three questions every candidate should ask before coding, how to ask without sounding stalling, and what good answers look like",
    "Recovery when stuck: concrete tactics for getting unstuck (step back to examples, simplify the problem, name what you know), and how to signal forward progress even while thinking",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk05-l2.pdf",
  readings: [
    {
      title: "Week 5 reading: dynamic programming and interview communication",
      href: "/c/landing-the-offer-26au/readings/wk05",
    },
    {
      title: "Tech Interview Handbook: Coding interview best practices (Yangshun Tay, 2023)",
      href: "https://www.techinterviewhandbook.org/coding-interview-prep/",
    },
    {
      title: "Clement Mihailescu: How to pass your coding interviews (YouTube, 2020)",
      href: "https://www.youtube.com/watch?v=z3h0JGANLoI",
    },
  ],
  followups: [
    "Tay (2023) writes: &ldquo;Try to avoid staying quiet for long periods of time, as it&rsquo;s important to keep the interviewer in your loop.&rdquo; What specific phrase would you say aloud when you realize your first approach is wrong and need to rethink?",
    "List the edge cases you would check before coding a function that takes a sorted array of integers and returns the index of a target value. Be specific: what inputs would stress each edge?",
    "Mihailescu (2020) argues that most interview failures come from having no process when stuck, not from lacking knowledge. Describe your own three-step recovery process for when you are 30 minutes in and your approach is not working.",
    "Write three clarifying questions you would ask for this problem: &ldquo;Given a list of integers, return the two that sum to a target.&rdquo; For each question, explain what you would do differently depending on the answer.",
    "Your interviewer says nothing for two minutes while you code. What are three reasons silence from an interviewer is not automatically a bad sign? How do you use that silence productively?",
    "Section this week is Pattern sprint 3: two DP mediums plus a recorded narrated solve with peer feedback. The narration practice is the direct application of today&rsquo;s lecture.",
  ],
};

export function Wk05L2() {
  return <LecturePage spec={spec} />;
}

export const wk05L2SearchBody =
  "interview communication think aloud narration edge case enumeration clarifying questions recovery when stuck silent interviewer coding process null input empty array off-by-one forward progress Week 5 Lecture 2 landing the offer";
