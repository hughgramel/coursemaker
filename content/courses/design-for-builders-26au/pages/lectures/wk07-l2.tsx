import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Component systems: variants, states, and reuse",
  date: "Week 7, Lecture 2",
  week: 7,
  topics: [
    "Buttons with states: default, hover, pressed, disabled, and loading",
    "Form inputs with variants: text, select, checkbox, radio, and their error and focus states",
    "Cards as a primitive: how one component becomes a list item, a dashboard tile, and a modal header",
    "Modals and overlays: z-index, backdrop, focus trap, and when not to use a modal",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk07-l2.pdf",
  readings: [
    {
      title: "Week 7 reading: app screens, states, and component systems",
      href: "/c/design-for-builders-26au/readings/wk07",
    },
    {
      title: "Figma Learn: design an interactive button component",
      href: "https://help.figma.com/hc/en-us/articles/20953528101783-Design-an-interactive-button-component",
    },
    {
      title: "Figma: introduction to design systems (three-lesson official course)",
      href: "https://help.figma.com/hc/en-us/sections/14548397990423-Introduction-to-design-systems",
    },
  ],
  followups: [
    "Figma&rsquo;s interactive button tutorial (2023) covers default, hover, pressed, disabled, and focused states. Build that button, then add a sixth variant: loading (spinner replaces label, button stays full-width). How does auto-layout behavior need to change to keep the button from collapsing when the label disappears?",
    "Frost (2016) distinguishes molecules (a few atoms working together) from organisms (complex sections from molecules). Take your card component and identify each part as atom or molecule. Then describe one context where the card itself becomes an atom inside a larger organism.",
    "Figma&rsquo;s component best-practices guide (2023) recommends naming components using &ldquo;/&rdquo; separators to create groups. Design a naming scheme for a button library that covers size (sm, md, lg), hierarchy (primary, secondary, ghost), and state (default, hover, disabled). Write out the full name strings for at least six variants before you build them. Does the naming scheme reveal any gaps?",
    "Pick a form in an app you use. Count how many distinct input types it uses (text, password, email, select, checkbox, radio, toggle). Now count how many interaction states each type has in the original design. How many are missing? Build the missing states for two of the inputs using your existing color tokens.",
    "Modals interrupt the user&rsquo;s current context. List three situations in a product where a modal is the right choice and three where a drawer, an inline expansion, or a new page would serve the user better. What is the decision rule that separates &ldquo;modal&rdquo; from &ldquo;not modal&rdquo;?",
  ],
};

export function Wk07L2() {
  return <LecturePage spec={spec} />;
}

export const wk07L2SearchBody =
  "component systems variants states buttons form inputs cards modals overlays reuse component library interaction states default hover pressed disabled loading focus error design system Figma atomic design Week 7 Lecture 2 design for builders founders engineers";
