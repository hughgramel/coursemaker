import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "GitHub, LinkedIn, and public artifacts",
  date: "Week 2, Lecture 2",
  week: 2,
  topics: [
    "Three public surfaces: GitHub, LinkedIn, and at least one public artifact",
    "README as marketing: five questions a good README answers",
    "LinkedIn for SWE: headline, skills, and inbound discovery",
    "Pinned projects: selection criteria and common mistakes",
    "Blog posts and demos as attention surfaces beyond the resume",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk02-l2.pdf",
  readings: [
    {
      title: "Week 2 reading: resume, GitHub, LinkedIn, and public artifacts",
      href: "/c/landing-the-offer-26au/readings/wk02",
    },
    {
      title: "Mayuko Inoue: Critiquing My Resume that helped me get my jobs at Netflix and at a Silicon Valley Startup",
      href: "https://www.youtube.com/watch?v=3oCGpr3bKog",
    },
  ],
  followups: [
    "Open your GitHub profile and apply the five-question README test to your strongest project. Which of the five questions does the current README answer? Which are missing? Write the missing sections.",
    "Look at your six pinned repositories (or choose six if you have not pinned any yet). For each, ask: does this have a working demo or screenshot, and could I discuss the codebase comfortably for 20 minutes? Swap out any that fail either test.",
    "Luu (2015) argues that concrete public work can bypass weak credential signals. Describe one specific project you own that could function as that kind of direct demonstration if you wrote a 500-word write-up about it. What would the write-up cover?",
    "Your LinkedIn headline defaults to your job title or most recent role. Rewrite it as a positioning statement for a new-grad SWE search: include your target role and your strongest technical skill or language pair.",
    "McKenzie (2011) argues that engineers are hired to create business value. Look at a project you have built. Write one sentence explaining what problem it solves for a real person, as if you were pitching it to a non-technical recruiter.",
  ],
};

export function Wk02L2() {
  return <LecturePage spec={spec} />;
}

export const wk02L2SearchBody =
  "GitHub portfolio LinkedIn public artifact README marketing pinned projects blog post demo write-up project narrative positioning attention surface inbound discovery recruiter SWE job search Week 2 Lecture 2 landing the offer";
