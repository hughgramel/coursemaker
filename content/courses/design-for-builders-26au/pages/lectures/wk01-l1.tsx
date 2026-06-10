import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Figma for people who think in code",
  date: "Week 1, Lecture 1",
  week: 1,
  topics: [
    "Frames vs groups: why the distinction matters more than it looks",
    "Auto-layout as flexbox: direction, gap, padding, and hug vs fill",
    "Components, variants, and component properties",
    "Styles vs variables: when to use each",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk01-l1.pdf",
  readings: [
    {
      title: "Week 1 reading: Figma as a design environment",
      href: "/c/design-for-builders-26au/readings/wk01",
    },
    {
      title: "Figma: guide to auto layout (official docs)",
      href: "https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout",
    },
    {
      title: "Figma: introduction to design systems (three-lesson course)",
      href: "https://help.figma.com/hc/en-us/sections/14548397990423-Introduction-to-design-systems",
    },
  ],
  followups: [
    "Create a frame sized to a 1440px desktop viewport. Inside it, place three child frames with auto-layout using horizontal flow, a 24px gap, and equal padding on all sides. Set each child to Fill container width. What happens when you resize the parent?",
    "In your file, make a button component with two variants: primary and secondary. Add a boolean property called &ldquo;disabled&rdquo;. How does Figma represent these in the variants panel? How is this similar to a React component with props?",
    "Frost (2016) describes atoms, molecules, and organisms as a mental model for component hierarchies. Identify one atom, one molecule, and one organism in a product you use every day. Do those levels map cleanly to Figma components, nested components, and frames?",
    "Create a color style named &ldquo;brand/primary&rdquo; and a color variable in a collection named &ldquo;Color/Brand&rdquo; with the same hex value. Apply both to a rectangle. What is the visible difference in Figma&rsquo;s inspector panel? When would you choose a variable over a style?",
    "Simon (DesignCourse, 2022) builds a card component from scratch using auto-layout and variants. After watching that tutorial, rebuild the same card in your own file without following along. What did you have to look up? What came naturally from your mental model of CSS flexbox?",
  ],
};

export function Wk01L1() {
  return <LecturePage spec={spec} />;
}

export const wk01L1SearchBody =
  "Figma frames groups auto-layout flexbox direction gap padding hug fill components variants component properties styles variables design system Week 1 Lecture 1 design for builders founders engineers";
