import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Strength training first principles",
  date: "Week 5 Lecture 1",
  week: 5,
  topics: [
    "Progressive overload: why adding load over time is the master driver of muscle growth",
    "Compound lifts: squat, hip hinge, press, and row as the structural backbone of any program",
    "Hypertrophy vs strength rep ranges: why 6-30 reps produce comparable muscle growth if taken close to failure",
    "Program structure for natural lifters: weekly frequency, volume landmarks, and recovery windows",
    "Why frequency beats split obsession: evidence against bro-split mythology",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk05-l1.pdf",
  readings: [
    {
      title: "Week 5 reading: Strength, protein, and body recomposition",
      href: "/c/looksmaxxing-26au/readings/wk05",
      note: "Required before section. Includes the four-day upper/lower program example.",
    },
    {
      title: "The Science of Muscle Growth: Train Smarter, Build Bigger (Jeff Nippard, 2025)",
      href: "https://www.youtube.com/watch?v=iZbaW2wQ3V8",
      note: "25-min synthesis of hypertrophy science: progressive overload, rep ranges, frequency",
    },
    {
      title: "Rep Ranges and Training Intensity: The Fundamentals Series, Chapter 3 (Jeff Nippard, 2018)",
      href: "https://www.youtube.com/watch?v=3JOEZb46-dM",
      note: "18-min primer on rep ranges, RIR, and RPE with citations to Schoenfeld meta-analyses",
    },
  ],
  followups: [
    "Outcome (Design): Design a four-day-per-week strength program using at least two compound lifts per session, progressive overload tracked in writing, and appropriate rep ranges for each exercise.",
  ],
};

export function Wk05L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk05L1SearchBody =
  "progressive overload compound lifts squat deadlift bench press row hypertrophy strength rep ranges RIR RPE frequency natural lifter program structure bro split upper lower lecture week 5 looksmaxxing strength training";
