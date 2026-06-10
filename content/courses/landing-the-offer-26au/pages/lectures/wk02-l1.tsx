import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Resumes that pass two readers",
  date: "Week 2, Lecture 1",
  week: 2,
  topics: [
    "ATS keyword screen: how parsers score your resume against the job description",
    "The 30-second human read: visual hierarchy and the top third of the page",
    "Accomplishment bullets: action verb, scale, and result",
    "Length and structure: one page, section order, skills formatting",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk02-l1.pdf",
  readings: [
    {
      title: "Week 2 reading: resume, GitHub, LinkedIn, and public artifacts",
      href: "/c/landing-the-offer-26au/readings/wk02",
    },
    {
      title:
        "Yangshun Tay: Practical guide to writing FAANG-ready software engineer resumes",
      href: "https://www.techinterviewhandbook.org/resume/",
    },
  ],
  followups: [
    "Take one bullet from your current resume draft and apply the three-question test: what did you do, at what scale, with what result. If you cannot answer all three, what information would you need to gather to complete it?",
    "Tay (2023) recommends quantifying every achievement. Find a project bullet where you lack a concrete metric. What proxy measure (team size, time pressure, data volume, adoption count) would make the bullet more specific without being misleading?",
    "Paste a job description for a role you want into a plain text editor and highlight every technology name and action verb. Count how many appear in your resume. Which three gaps would have the highest impact if you closed them?",
    "Compare the action verb 'helped implement' to 'implemented' for the same piece of work. What different seniority signals does each send to a recruiter scanning in 30 seconds? Write a version of a bullet you own using the stronger verb.",
    "What does your resume look like when printed in black and white at 10pt font? Are section headers distinguishable from bullet text? Is date alignment consistent? List two formatting changes you would make based on this audit.",
  ],
};

export function Wk02L1() {
  return <LecturePage spec={spec} />;
}

export const wk02L1SearchBody =
  "resume ATS keyword screen applicant tracking system 30-second human read accomplishment bullet action verb scale result quantify length one page section order skills formatting recruiter hiring manager Week 2 Lecture 1 landing the offer SWE job search";
