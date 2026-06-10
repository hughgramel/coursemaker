import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The science of attractiveness",
  date: "Week 1 Lecture 1",
  week: 1,
  topics: [
    "Halo effect: how one trait shapes judgments of everything else",
    "Symmetry and averageness as attractiveness cues in peer-reviewed research",
    "Cross-cultural consistency and what it rules out",
    "Limits of attractiveness research: what studies can and cannot tell you",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk01-l1.pdf",
  readings: [
    {
      title: "Week 1 reading: Attractiveness research and what you can actually change",
      href: "/c/looksmaxxing-26au/readings/wk01",
      note: "Required before section",
    },
    {
      title: "Attractive Faces Are Only Average (Langlois & Roggman, 1990)",
      href: "https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.1990.tb00079.x",
      note: "The original averageness paper; 7 pages",
    },
    {
      title: "The Evolutionary Psychology of Facial Beauty (Rhodes, 2006)",
      href: "https://www.annualreviews.org/content/journals/10.1146/annurev.psych.57.102904.190208",
      note: "Annual Review synthesizing symmetry, averageness, and sexual dimorphism",
    },
    {
      title: "In your face: David Perrett at TEDxGhent (Perrett, 2012)",
      href: "https://www.youtube.com/watch?v=rVE6kZW88lc",
      note: "18-min talk by a leading face-perception researcher on what changes attractiveness",
    },
  ],
  followups: [
    "Outcome (Explain): Describe the halo effect and name three traits that drive first-impression attractiveness ratings in published studies.",
    "Outcome (Distinguish): Distinguish features under behavioral control from features that are genetically fixed, using at least one example from Perrett (2012).",
  ],
};

export function Wk01L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk01L1SearchBody =
  "halo effect symmetry averageness attractiveness research cross-cultural facial beauty evolutionary psychology Langlois Roggman Rhodes Perrett lecture week 1 looksmaxxing science";
