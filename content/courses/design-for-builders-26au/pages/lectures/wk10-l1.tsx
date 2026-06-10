import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Demo day: present your launch package to the room",
  date: "Week 10, Lecture 1",
  week: 10,
  topics: [
    "Structuring a five-minute design presentation: what to show, in what order, and why",
    "Defending choices with vocabulary: how to answer &ldquo;why that color?&rdquo; or &ldquo;why that typeface?&rdquo; without flinching",
    "Receiving critique: the difference between a question about the work and a question about you",
    "Iterating in public: how to take a note, mark it, and keep moving rather than explaining",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk10-l1.pdf",
  readings: [
    {
      title: "Week 10 reading: synthesis, handoff, and what comes next",
      href: "/c/design-for-builders-26au/readings/wk10",
    },
  ],
  followups: [
    "Write a two-minute script for presenting your launch package. The script should cover: what the product does (one sentence), the three most important design decisions you made, and one decision you are not fully satisfied with and why. The constraint forces you to choose what matters.",
    "A reviewer says: &ldquo;The hero feels a bit busy.&rdquo; Write three different responses. The first treats this as a question about visual hierarchy. The second treats it as a question about spacing. The third treats it as a question about copy-to-image ratio. Which response do you think is most useful, and why?",
    "Look at your five app screens. For each screen, write one sentence explaining the primary user task and one sentence explaining the primary design decision you made to support that task. If you cannot write both sentences for a screen, that screen needs more attention before demo day.",
    "List the five design concepts from the course spine (visual hierarchy, type system, color system, spacing system, component system) and rate your launch package on each from 1 to 3. For any dimension you rated below 3, write one specific change that would raise it.",
    "Identify one piece of feedback you received during a section critique earlier in the course that you acted on and one that you did not. For the one you did not act on, write a sentence explaining why you made that call. Being able to defend a decision you did not take is as important as defending one you did.",
  ],
};

export function Wk10L1() {
  return <LecturePage spec={spec} />;
}

export const wk10L1SearchBody =
  "demo day design presentation launch package presenting defending choices receiving critique iterating in public five-minute presentation vocabulary capstone CAPSTONE Week 10 Lecture 1 design for builders founders engineers";
