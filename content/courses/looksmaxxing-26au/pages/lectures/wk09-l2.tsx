import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "On being photographed",
  date: "Week 9 Lecture 2",
  week: 9,
  topics: [
    "Camera height and angle: why lens position below eye level flattens and distorts",
    "Three-quarter vs. straight-on framing: which works for most faces and why",
    "Natural light vs. ring light: soft frontal and window light versus harsh overhead sources",
    "Posing without posing: chin, jaw, and shoulder micro-adjustments that read naturally",
    "Updating your weekly progress photos with better technique from week 2",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk09-l2.pdf",
  readings: [
    {
      title: "Week 9 reading: Posture, gait, and being photographed",
      href: "/c/looksmaxxing-26au/readings/wk09",
      note: "Required before section",
    },
    {
      title:
        "Best camera angle for great portraits and flattering images (Rachel Gulotta & Daniel Inskeep, Mango Street, 2020)",
      href: "https://www.youtube.com/watch?v=v9BYZVPMOk8",
      note: "Camera height, three-quarter turn, and natural light placement",
    },
  ],
  followups: [
    "Outcome (Demonstrate): Demonstrate camera-angle and lighting choices that flatter your face and frame, and explain the rule behind each choice",
  ],
};

export function Wk09L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk09L2SearchBody =
  "camera angle portrait photography lens height eye level three-quarter straight-on natural light ring light overhead harsh window light soft frontal posing chin jaw shoulder micro-adjustments weekly progress photos flattering face frame Week 9 lecture 2";
