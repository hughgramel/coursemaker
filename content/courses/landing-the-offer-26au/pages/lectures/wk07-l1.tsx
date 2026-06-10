import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Behavioral interviews are pattern matching",
  date: "Week 7, Lecture 1",
  week: 7,
  topics: [
    "Why behavioral interviews exist and what interviewers are actually scoring",
    "Leadership principles as a public scoring rubric",
    "The STAR structure: situation, task, action, result",
    "The hiring bar and what a bar raiser does in practice",
    "Selecting the right stories for the right leadership signals",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk07-l1.pdf",
  readings: [
    {
      title: "Week 7 reading: STAR structure, worked example, and 12 story sources",
      href: "/c/landing-the-offer-26au/readings/wk07",
    },
    {
      title: "Amazon Leadership Principles (primary document)",
      href: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles",
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
    "Amazon publishes its 16 leadership principles on amazon.jobs. Pick three that you expect to be tested for a role you are targeting. For each one, write a one-sentence definition in your own words. What specific behavior would count as evidence?",
    "Orosz (2023) says that practiced answers sound practiced and that this is disqualifying. What is the difference between a rehearsed answer and an internalized one? How would you recognize the difference if you were the interviewer?",
    "Take one story from a past project or class. Write out the STAR structure for it: two sentences for Situation, one sentence for Task, three to five sentences for Action, one sentence for Result. Read the Action section: how many of the sentences use 'I' as the subject? How many use 'we'?",
    "Spolsky (2006) argues it is better to reject a good candidate than accept a bad one. From the candidate's side, what does that asymmetry mean for the threshold of evidence your stories need to clear?",
    "HW 5 is out this week: build a STAR story bank of 12 stories. Start by listing 12 distinct experiences from your academic and project history that involved a decision, a conflict, or a tradeoff. We will map them to principles in section.",
  ],
};

export function Wk07L1() {
  return <LecturePage spec={spec} />;
}

export const wk07L1SearchBody =
  "behavioral interviews pattern matching leadership principles STAR structure situation task action result hiring bar bar raiser story selection Ownership Bias for Action Deliver Results new-grad SWE behavioral round Week 7 Lecture 1 landing the offer";
