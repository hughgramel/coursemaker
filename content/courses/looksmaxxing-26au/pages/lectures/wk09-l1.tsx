import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Standing tall: posture and gait",
  date: "Week 9 Lecture 1",
  week: 9,
  topics: [
    "Upper-cross syndrome: tight pecs and upper traps versus weak lower traps and deep neck flexors",
    "Forward head posture and rounded shoulders: how desk work creates the imbalance",
    "Hip flexor tightness: anterior pelvic tilt and what it does to walking posture",
    "Walking gait basics: neutral spine, natural arm swing, heel-to-toe transition",
    "Daily mobility minimum: a specific 5-minute sequence for desk workers",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk09-l1.pdf",
  readings: [
    {
      title: "Week 9 reading: Posture, gait, and being photographed",
      href: "/c/looksmaxxing-26au/readings/wk09",
      note: "Required before section",
    },
    {
      title:
        "Tight chest, rounded shoulders? Here&rsquo;s what&rsquo;s actually causing it (Dr. Aaron Horschig DPT, Squat University, 2024)",
      href: "https://www.youtube.com/watch?v=RoiWkNKDEBU",
      note: "Upper-cross syndrome mechanics and the corrective routine",
    },
    {
      title:
        "Physical therapist shows proper walking posture (Physical therapy YouTube channel, 2022)",
      href: "https://www.youtube.com/watch?v=ZFqwPExMbIQ",
      note: "Gait cues, anterior pelvic tilt compensation, self-filming protocol",
    },
  ],
  followups: [
    "Outcome (Analyze): Analyze your standing posture and walking gait from video and name two specific changes to make",
    "Outcome (Apply): Apply a five-minute daily mobility routine that targets the four imbalances common in desk workers",
  ],
};

export function Wk09L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk09L1SearchBody =
  "upper-cross syndrome forward head posture rounded shoulders hip flexor tightness anterior pelvic tilt walking gait neutral spine arm swing heel-to-toe daily mobility routine desk worker pec stretch chin tuck doorway wall angels face pulls band pull-aparts thoracic rotation dead-hang posture analysis video self-film Week 9 lecture 1";
