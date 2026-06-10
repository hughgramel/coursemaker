import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Design to code: handoff, tokens, and shipping it for real",
  date: "Week 10, Lecture 2",
  week: 10,
  topics: [
    "What design tokens are and how Figma variables map to CSS custom properties and Tailwind config",
    "Exporting tokens: the Figma Variables API, Tokens Studio, and Style Dictionary in plain terms",
    "Writing a component spec: what a developer needs to implement a component from your design",
    "What lives in design vs what lives in code: the boundary decisions you must make before handoff",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk10-l2.pdf",
  readings: [
    {
      title: "Week 10 reading: synthesis, handoff, and what comes next",
      href: "/c/design-for-builders-26au/readings/wk10",
    },
    {
      title:
        "Required: Figma, Design Tokens: How to Sync Design and Code (2024)",
      href: "https://www.figma.com/resource-library/design-tokens/",
    },
    {
      title:
        "Required: anclist.com, Design Tokens in Practice: From Figma to Tailwind (2024)",
      href: "https://www.anclist.com/blog/posts/design-tokens-in-practice",
    },
  ],
  followups: [
    "Open your Figma file and locate all the color variables you defined. For each collection (primitive and semantic), write out the equivalent CSS custom property name you would use in code. For example, a Figma variable named “color/brand/500” might become “--color-brand-500”. Check that your naming is consistent: no camelCase mixed with kebab-case, no orphaned variables with no semantic counterpart.",
    "The anclist.com tutorial (2024) walks the Figma variables to Tailwind config pipeline. Follow it with your own color tokens. At what point does the pipeline break down for your specific file? Name the step and explain what you would need to change to fix it.",
    "Write a component spec for your primary button. The spec should cover: the four interaction states (default, hover, pressed, disabled), the token names used for each color in each state, the spacing values (padding, gap between icon and label), and the typography token. A developer reading only your spec should be able to implement the component without opening Figma.",
    "Figma Dev Mode surfaces CSS properties directly from your design. Open one of your app screens in Dev Mode and inspect the primary call-to-action element. How closely does the generated CSS match what you would write by hand? Where does it diverge, and why?",
    "List every design decision in your launch package that cannot be represented as a token (an animation timing, a specific illustration, a custom shadow treatment). For each one, describe how you would document it so a developer has enough information to implement it without guessing.",
  ],
};

export function Wk10L2() {
  return <LecturePage spec={spec} />;
}

export const wk10L2SearchBody =
  "design to code handoff tokens shipping design tokens Figma variables CSS custom properties Tailwind config Style Dictionary Tokens Studio component spec what lives in design vs code developer handoff export pipeline Week 10 Lecture 2 design for builders founders engineers";
