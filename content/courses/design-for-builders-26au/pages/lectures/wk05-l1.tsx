import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The 8-point grid and why every good app uses one",
  date: "Week 5, Lecture 1",
  week: 5,
  topics: [
    "Why 8px: how multiples of 8 align to device pixel densities and eliminate rounding errors",
    "When to use 4px: the half-step for compact components, icons, and fine-grained inner padding",
    "Spacing tokens and T-shirt sizing: mapping xs, sm, md, lg, xl to concrete pixel values",
    "Inner padding vs outer margin: the distinction that determines whether your components survive in a real layout",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk05-l1.pdf",
  readings: [
    {
      title: "Week 5 reading: spacing, grids, and layout",
      href: "/c/design-for-builders-26au/readings/wk05",
    },
    {
      title: "Required: Spec Network, The 8-Point Grid (2016)",
      href: "https://spec.fm/specifics/8-pt-grid",
    },
    {
      title:
        "Required: Tailwind Labs, Customizing Spacing (Tailwind CSS Docs, 2024)",
      href: "https://tailwindcss.com/docs/customizing-spacing",
    },
  ],
  followups: [
    "Open the Tailwind CSS spacing documentation. Find the values for p-4, p-8, and p-16. Convert each to pixels (1 unit = 4px). Which values land on the 8-point grid? Which ones are 4px-grid steps only? What does that tell you about Tailwind&rsquo;s relationship to the 8-point grid?",
    "The Spec Network (2016) article contrasts &ldquo;hard grid&rdquo; and &ldquo;soft grid&rdquo; approaches. In your own words, describe the difference. When would you prefer the soft grid over the hard grid? Give a specific UI component where each approach makes more sense.",
    "Take a screenshot of an app you use every day. Pick a card or list item and measure every spacing value inside it: padding, gap between elements, icon size. Which values are on the 8-point grid? Which are not? For each off-grid value, identify whether it is a 4px half-step or something else entirely.",
    "Define the T-shirt sizing scale you would use for a product dashboard: write out the token names (xs, sm, md, lg, xl) and their pixel values. Then apply those tokens to a simple card with an icon, a headline, body text, and a button. Which token did you use for each gap and each padding value?",
    "A designer sets a button&rsquo;s inner padding to 12px top/bottom and 20px left/right. Neither value is on the 8-point grid. Using the distinction between inner padding and outer margin from the lecture, explain why this choice causes problems when you place the button inside a layout that uses the 8-point grid.",
  ],
};

export function Wk05L1() {
  return <LecturePage spec={spec} />;
}

export const wk05L1SearchBody =
  "8 point grid spacing tokens T-shirt sizing xs sm md lg xl inner padding outer margin pixel density 4px half-step device resolution multiples of 8 spacing scale alignment discipline layout Week 5 Lecture 1 design for builders founders engineers";
