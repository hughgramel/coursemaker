import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 1 section: rebuild a landing-page section pixel-for-pixel",
  tagline:
    "Reverse-engineer a real public design using auto-layout and components before you design anything original.",
  outDate: "Week 1",
  overview: [
    "The fastest way to learn Figma’s layout system is to copy something that already works. This section asks you to pick a public landing-page section, study it closely, and rebuild it in Figma using auto-layout and at least one component. You are not redesigning or improving it. You are matching it as closely as you can.",
    "Pixel-matching is an underrated learning technique. When you try to reproduce a specific outcome rather than create something original, you are forced to confront every decision the original designer made. Why is that gap 24px and not 16px? Why does the card hug its content vertically but fill the container horizontally? These are the questions that build genuine Figma fluency.",
    "You will bring your file to section for a short peer review. Each pair will compare how they structured their auto-layout frames, discuss what was hard, and identify one thing they would do differently now.",
  ],
  goals: [
    "Use a frame as a screen-level container sized to a real device width (1440px desktop or 390px mobile)",
    "Apply auto-layout to reproduce a multi-column or multi-row layout without using absolute positioning",
    "Extract a repeated element (a card, a feature row, an icon + label pair) into a reusable component",
    "Match spacing, padding, and gap values by reading the original with your eye and a ruler (not by inspecting code)",
    "Explain, for at least two layout decisions, why auto-layout produces the right behavior when the container is resized",
  ],
  instructions: [
    {
      title: "Pick a section to rebuild",
      body: "Choose one section from a real public landing page. Good candidates: a three-column feature section, a pricing card row, a testimonial band, or a hero with an image and headline. The section should have at least three repeated elements (three feature cards, three pricing tiers, etc.) so you practice building a component and reusing it. Avoid full-page heroes with complex illustrations; those are harder to match and the learning payoff is lower. Screenshot the section at full width so you have a reference image to work from.",
    },
    {
      title: "Set up your file",
      body: "Create a new Figma file named “WK01 Section ,  [Your name]”. Use the four-page structure from Lecture 2: cover, flows, components, archive. Your rebuild goes on the “flows” page. Paste your reference screenshot on the canvas outside the frame so you can compare as you work. Set your top-level frame to the same width as the source (1440px for most desktop sites, 390px for mobile-first designs).",
    },
    {
      title: "Trace the layout structure",
      body: "Before you place a single element in Figma, draw the frame hierarchy on paper or in a notes app. Identify: the outer section frame, any row or column containers inside it, and the leaf-level elements (text, icons, images, buttons). Mark which containers use horizontal auto-layout and which use vertical. This step forces you to see the structure rather than just the visual output. Most sections have two or three levels of nesting, not ten.",
    },
    {
      title: "Build with auto-layout",
      body: "Start from the outermost container and work inward. Create each frame with auto-layout from the beginning: do not place elements absolutely and convert later. For each frame, set the flow direction, gap, and padding before adding children. When you add a child and the layout behaves unexpectedly, stop and name what is happening before you fix it. Common surprises: a child frame set to Fixed width when it should be Fill, or a gap set on a frame that should be using padding instead.",
    },
    {
      title: "Extract a component",
      body: "Identify the most-repeated element in your section (a feature card, a pricing column, a testimonial block). Build one instance until it matches the reference, then press Cmd+Alt+K (Mac) or Ctrl+Alt+K (Windows) to create a component from it. Duplicate the main component to create the other instances. Any change to the main component should propagate to all instances. Name the component using the slash convention from Lecture 2 (e.g. “FeatureCard/Default”).",
    },
    {
      title: "Check resizing behavior",
      body: "Drag the outer section frame narrower by about 200px. Does the layout stay intact? Are columns collapsing gracefully, or are elements overflowing? Note what breaks and why. You are not expected to make the layout fully responsive at this stage; the goal is to understand which properties control resizing behavior (Hug, Fill, Fixed, Min/Max) and what each one means in context.",
    },
    {
      title: "Write a short reflection",
      body: "In a text frame on your cover page, write 100-150 words answering: (1) what was the hardest layout decision to match and why, (2) one thing about auto-layout that surprised you compared to your mental model of CSS flexbox, and (3) one change you would make to your component structure if you were starting over. Bring this reflection to section for discussion.",
    },
  ],
  deliverables: [
    "A Figma file shared via “anyone with the link can view” with the four-page structure in place",
    "A rebuild of the chosen landing-page section using auto-layout, with no absolute positioning except for intentional overlapping elements",
    "At least one named component following the slash naming convention",
    "A reference screenshot of the source section on the canvas next to your rebuild",
    "A 100-150 word reflection on the cover page answering the three questions",
  ],
  rubric: [
    {
      dimension: "Auto-layout structure: no absolute positioning",
      points: 30,
      notes:
        "Every container uses auto-layout. Direction, gap, and padding match the source visually. Elements do not overflow or collapse under normal resizing.",
    },
    {
      dimension: "Component extraction",
      points: 25,
      notes:
        "At least one repeated element is a component. Instances are derived from the main component, not duplicated frames. Naming follows the slash convention.",
    },
    {
      dimension: "Visual fidelity",
      points: 25,
      notes:
        "Spacing, typography, and color match the source closely enough that a side-by-side comparison shows the same proportions. Exact pixel-perfection is not required; intent and care are.",
    },
    {
      dimension: "Reflection quality",
      points: 10,
      notes:
        "Three questions are answered with specific observations, not generalizations. The hardest layout decision is named precisely.",
    },
    {
      dimension: "Section participation",
      points: 10,
      notes:
        "Brings file to section, gives one concrete observation on a peer’s auto-layout structure during review.",
    },
  ],
  hints: [
    "If you cannot figure out why a gap is a certain size, measure it yourself with the ruler tool (R) rather than guessing. Precision teaches you to see spacing as a number, not a feeling.",
    "Start with the most repeated element, not the most visually interesting one. Getting the component right early means the rest of the section assembles quickly.",
    "If your auto-layout frame is not behaving as expected, check the resizing setting of the children first. Most layout bugs come from a child that is Fixed when it should be Fill.",
    "The Figma auto-layout guide (Figma, 2023) has an interactive demo of hug vs fill behavior. If the distinction is not clicking, spend five minutes there before you continue.",
    "Do not try to match box shadows or blur effects perfectly in this session. Focus on the structural layout: frames, gaps, and components. Visual polish comes in later weeks.",
  ],
};

export function Wk01Section() {
  return <ProjectPage spec={spec} />;
}

export const wk01SectionSearchBody =
  "section rebuild landing page pixel-for-pixel auto-layout components frames gap padding hug fill resizing component extraction slash naming peer review Week 1 worksheet design for builders";
