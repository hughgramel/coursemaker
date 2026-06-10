import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Palettes, contrast, and dark mode",
  date: "Week 4, Lecture 2",
  week: 4,
  topics: [
    "Tailwind-style 9-step ramps: how to build 50-950 from a single base color",
    "WCAG contrast: AA (4.5:1 normal, 3:1 large), AAA (7:1), and when each applies",
    "Semantic color tokens: separating what a color is from what it does",
    "Dark mode as a parallel system: new palette choices, not inverted light-mode values",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk04-l2.pdf",
  readings: [
    {
      title: "Week 4 reading: color, palettes, contrast, and dark mode",
      href: "/c/design-for-builders-26au/readings/wk04",
    },
    {
      title: "Required: WebAIM, Contrast and Color Accessibility (Understanding WCAG 2)",
      href: "https://webaim.org/articles/contrast/",
    },
    {
      title:
        "Required: Shirley Miao (Figma Engineering Blog), Illuminating Dark Mode (2022)",
      href: "https://www.figma.com/blog/illuminating-dark-mode/",
    },
    {
      title: "Tailwind CSS: customizing colors (9-step ramp reference)",
      href: "https://tailwindcss.com/docs/customizing-colors",
    },
  ],
  followups: [
    "Open the WebAIM contrast checker and test the body text color against the card background color in a product you use. Does it pass AA? Does it pass AAA? If it fails, what is the minimum adjustment to one of the two colors that would produce a passing ratio?",
    "Miao (Figma, 2022) describes five dimensions Figma uses to name semantic color tokens: type, UI element, color role, prominence, and interaction state. Take the button component in your starter kit and write semantic token names for its background color in default and disabled states using those five dimensions.",
    "Khamatov (Smashing Magazine, 2023) distinguishes color palettes (what colors exist) from color schemes (how colors are used). Write out your product’s palette layer (primitive values: Slate 100 through 900, Blue 100 through 900) and its scheme layer (semantic assignments: surface-base, text-primary, accent-default). How many scheme tokens point to the same palette value?",
    "Take any two colors from your neutral ramp at steps 700 and 100 (or equivalent dark and light values). Calculate their contrast ratio using the WCAG formula. Now pick a text color from your accent ramp and test it against both backgrounds. Which one passes AA? Does either pass AAA?",
    "Miao (Figma, 2022) writes that Figma’s dark mode is not an inversion of light mode. Pick one semantic token from your palette (for example, surface-base or text-secondary). What value does it hold in light mode? What value would you assign it in dark mode, and why is that value not the mathematical inverse of the light value?",
  ],
};

export function Wk04L2() {
  return <LecturePage spec={spec} />;
}

export const wk04L2SearchBody =
  "Tailwind color ramp 9-step palette WCAG contrast AA AAA semantic color tokens dark mode parallel system Figma variables primitive semantic color scheme design system Week 4 Lecture 2 design for builders founders engineers";
