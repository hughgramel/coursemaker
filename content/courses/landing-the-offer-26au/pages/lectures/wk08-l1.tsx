import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Open source as resume",
  date: "Week 8, Lecture 1",
  week: 8,
  topics: [
    "Finding the right project: relevance to target companies, maintainer health, and good-first-issue labels",
    "Reading the contribution guide before writing a single line of code",
    "The first merged PR: fork, branch, atomic commit, and a PR description that helps the reviewer say yes",
    "Becoming a regular contributor: sustaining momentum after the first merge",
    "Citing open source work in interviews: how to frame a merged PR as a portfolio artifact",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk08-l1.pdf",
  readings: [
    {
      title: "Week 8 reading: the unconventional path",
      href: "/c/landing-the-offer-26au/readings/wk08",
    },
    {
      title: "GitHub Open Source Guides: How to Contribute to Open Source",
      href: "https://opensource.guide/how-to-contribute/",
    },
    {
      title: "first-contributions: a hands-on tutorial for your first PR (GitHub repo)",
      href: "https://github.com/firstcontributions/first-contributions",
    },
  ],
  followups: [
    "Pick one company on your target list. Find two open-source projects that company maintains or depends on. For each, identify whether the project has a CONTRIBUTING.md, an open issues tracker, and any issues tagged 'good first issue' or 'help wanted'. Report what you found.",
    "The Open Source Guides (GitHub, 2023) argue that documentation and bug triage are just as valuable as code contributions. Why might a non-code first contribution actually be strategically better for a new contributor trying to get noticed?",
    "Write a one-paragraph PR description for a hypothetical small bug fix in an open-source project. Include: what the problem was, what you changed, how you tested it, and any open questions for the maintainer. Bring it to section.",
    "What is the difference between a repo that is nominally active and one that has healthy maintainer engagement? Name three signals in the GitHub UI that distinguish the two.",
    "Suppose a maintainer leaves a critical review comment on your first PR. Draft a response that addresses the technical feedback, asks a clarifying question about one point you are unsure of, and does so in a tone that builds the relationship rather than defending your work.",
    "HW 4 (system design write-up) is due this week. Complete and submit it before section.",
  ],
};

export function Wk08L1() {
  return <LecturePage spec={spec} />;
}

export const wk08L1SearchBody =
  "open source resume contribution first PR pull request fork branch commit CONTRIBUTING.md good first issue maintainer project selection interview portfolio unconventional path Week 8 Lecture 1 landing the offer";
