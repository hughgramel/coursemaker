import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Resumes that pass two readers",
  date: "Week 2, Lecture 1",
  week: 2,
  topics: [
    "The ATS myth, and the human pipeline that actually runs (Orosz 2020)",
    "Six roles in recruitment: hiring manager, recruiter, sourcer, inbound sourcer, coordinator, interview panel",
    "The 30-second human read: visual hierarchy and the top third of the page",
    "Accomplishment bullets: action verb, scale, and result",
    "Languages and Technologies: three layouts and when to use each",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk02-l1.pdf",
  readings: [
    {
      title: "Week 2 reading: resume, GitHub, LinkedIn, and public artifacts",
      href: "/c/landing-the-offer-26au/readings/wk02",
    },
    {
      title:
        "Gergely Orosz: The Tech Resume Inside Out (sample chapters 2 and 5)",
      href: "https://thetechresume.com/",
    },
    {
      title:
        "Yangshun Tay: Practical guide to writing FAANG-ready software engineer resumes",
      href: "https://www.techinterviewhandbook.org/resume/",
    },
  ],
  followups: [
    "Orosz (2020) interviews tech recruiters who say no ATS filters on resume content. What advice you have read online would you now discard, and what does the truthful pipeline change about how you write the top third of your resume?",
    "Take one bullet from your current resume draft and apply the three-question test: what did you do, at what scale, with what result. If you cannot answer all three, what information would you need to gather to complete it?",
    "Pick one of the three Languages and Technologies layouts from Orosz: separate section, woven into work experience, or split into hands-on plus working-knowledge. Defend your choice in three sentences against the other two for your specific situation.",
    "Compare the action verb 'helped implement' to 'implemented' for the same piece of work. What different seniority signals does each send to a recruiter scanning in 30 seconds? Write a version of a bullet you own using the stronger verb.",
    "What does your resume look like when printed in black and white at 10pt font? Are section headers distinguishable from bullet text? Is date alignment consistent? List two formatting changes you would make based on this audit.",
  ],
};

export function Wk02L1() {
  return <LecturePage spec={spec} />;
}

export const wk02L1SearchBody =
  "resume ATS myth queue not filter human pipeline recruiter inbound sourcer hiring manager interview panel six roles 30-second human read accomplishment bullet action verb scale result Languages and Technologies three approaches Orosz Tech Resume Inside Out Week 2 Lecture 1 landing the offer SWE job search";
