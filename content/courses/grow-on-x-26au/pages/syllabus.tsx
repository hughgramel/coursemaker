import { SyllabusPage as SyllabusLayout } from "@/components/SyllabusPage";
import type { SyllabusSpec } from "@/types/course";

const spec: SyllabusSpec = {
  overview: [
    "Grow on X is a six-week practical course for solo creators going from near-zero followers to 10,000. The course covers four engines: niche and bio, post craft, distribution (the algorithm and the reply game), and a sustainable weekly system. Week five turns the same lens on your own analytics. Week six synthesizes the rest into a 90-day playbook you commit to running.",
    "There is no required external textbook. The weekly readings published in this site ARE the textbook. They are original writing built from primary sources: Paul Graham, Kevin Kelly, the open-sourced X recommendation algorithm, Justin Welsh, Dickie Bush and Nicolas Cole, David Perell, Dan Koe, Andrew Chen, Casey Newton, and recent reporting on X algorithm changes through 2025.",
    "You will leave with a defined niche, a bio that converts, a working knowledge of what the X algorithm rewards, a daily 60-minute creator routine, a measurement habit that tells you what to keep and what to kill, and a concrete plan for the next 90 days.",
  ],
  logistics: {
    meeting: "Asynchronous. Two lectures per week, one section, one reading, one weekly check-in.",
    format: "Self-paced with weekly milestones. Most learners spend 4-6 hours per week.",
    location: "Online. All materials live on this site.",
    extras: [
      "Public posting is required. You cannot pass this course while keeping your account private.",
      "Recommended: pair with one other learner for weekly feedback on hooks and replies.",
    ],
  },
  staff: [
    { name: "TBD", role: "Instructor", bio: "Replace with real instructor bio." },
  ],
  prerequisites: [
    "An X account (new accounts welcome; under 1,000 followers is the typical starting point).",
    "Willingness to post publicly five days a week for six weeks.",
    "30 to 60 minutes a day for posting and replying.",
    "Comfort reading basic analytics dashboards (impressions, engagement rate, profile visits).",
  ],
  gettingHelp: [
    "Bring questions to the weekly section.",
    "Post specific hook drafts or analytics screenshots to the course discussion channel for peer review.",
    "Reach the instructor for personal or administrative matters only.",
  ],
  grading: {
    breakdown: [
      { item: "Weekly readings and section participation", weight: "10%" },
      { item: "HW1 — Niche and bio rewrite",                  weight: "10%" },
      { item: "HW2 — Twenty posts in seven days",              weight: "15%" },
      { item: "HW3 — Run your system for two weeks",           weight: "15%" },
      { item: "HW4 — Thirty-day growth experiment",            weight: "15%" },
      { item: "Capstone — 90-day playbook",                    weight: "30%" },
      { item: "Peer-review participation",                     weight: "5%" },
    ],
    latePolicy: "Late submissions lose 10% per day, up to three days. After three days the work earns no credit, but you should still submit it because every assignment scaffolds the next.",
    aiPolicy: "Use AI for brainstorming, hook iteration, and editing. Do NOT publish AI-written posts as your own voice; the readers you want will detect it. Disclose any AI use on every submission, including the prompt and the human edits you made.",
    regradePolicy: "Submit regrade requests within one week of receiving the grade. Include a specific argument tied to the rubric, not a general appeal.",
  },
  resources: {
    required: [
      {
        title: "Weekly readings published in /readings/",
        note: "There is no required external textbook. The six weekly readings on this site are the textbook.",
      },
    ],
    optional: [
      {
        title: "Kevin Kelly, 1,000 True Fans (2008)",
        href: "https://kk.org/thetechnium/1000-true-fans/",
        note: "The foundational essay behind the course's audience-loyalty frame.",
      },
      {
        title: "Paul Graham, Do Things That Don't Scale (2013)",
        href: "https://paulgraham.com/ds.html",
        note: "Why manual outreach beats broadcast at zero followers.",
      },
      {
        title: "Nicolas Cole, The Art and Business of Online Writing (2021)",
        note: "The Rate of Revelation, the 1/3/1 intro, and the curiosity gap. Buy used if you want one paper book.",
      },
      {
        title: "X Recommendation Algorithm source code",
        href: "https://github.com/twitter/the-algorithm",
        note: "Skim it once. You do not need to read the C++; the README and module overviews are enough.",
      },
    ],
  },
};

export function SyllabusPage() {
  return <SyllabusLayout spec={spec} />;
}

export const syllabusSearchBody =
  "Syllabus Grow on X 10k followers solo creator niche bio hook algorithm reply game weekly system analytics capstone 90-day playbook grading late policy AI policy resources";
