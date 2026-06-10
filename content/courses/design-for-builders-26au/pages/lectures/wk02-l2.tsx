import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Gestalt: how the brain groups things you didn&rsquo;t tell it to group",
  date: "Week 2, Lecture 2",
  week: 2,
  topics: [
    "Proximity grouping: distance is the cheapest signal of belonging",
    "Similarity grouping: shape, color, and size say &ldquo;same category&rdquo;",
    "Closure and continuity: the eye completes what the design implies",
    "Figure-ground: which shape reads as the object and which reads as the canvas",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk02-l2.pdf",
  readings: [
    {
      title: "Week 2 reading, Visual literacy: CRAP, Gestalt, and visual hierarchy",
      href: "/c/design-for-builders-26au/readings/wk02",
    },
    {
      title: "Required: Nielsen Norman Group, The Gestalt Principles for User Interface Design (Video, ~8 min)",
      href: "https://www.nngroup.com/videos/the-gestalt-principles-intro/",
    },
    {
      title: "Optional: Michal Malewicz, Master Visual Hierarchy: Principles of Visual Design (YouTube, ~15 min)",
      href: "https://www.youtube.com/watch?v=LfkDiDyn6nU",
    },
  ],
  followups: [
    "The NN/G video (2020) shows proximity used to group form fields into logical sections. Find a form on any app or website. Does the whitespace between fields match the semantic grouping, or does it contradict it?",
    "Similarity grouping works across shape, color, and size. Pick a navigation bar. How many similarity signals is it using simultaneously? Could you remove one and still communicate the same grouping?",
    "Closure allows the eye to complete a shape the designer started but did not finish. Find one example of closure in a logo or icon you use daily. What line or curve is implied but absent?",
    "Gordon (2020) uses Gestalt to explain why visual hierarchy emerges without explicit instruction. In your own product&rsquo;s interface, find one place where the grouping the brain infers does not match the grouping the information structure intends.",
    "Figure-ground can be manipulated: the FedEx arrow, the NBC peacock. Find one product icon or logo where negative space carries meaning. What would you have to add to destroy the figure-ground effect?",
  ],
};

export function Wk02L2() {
  return <LecturePage spec={spec} />;
}

export const wk02L2SearchBody =
  "Gestalt principles proximity grouping similarity grouping closure continuity figure-ground visual perception brain groups layout cluttered whitespace category signal design for builders Week 2 Lecture 2";
