import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 7 section: build a complete five-screen app flow",
  tagline:
    "Design a connected five-screen flow in Figma using the component library you build in this session.",
  outDate: "Week 7",
  overview: [
    "Reading about component systems is not the same as building one. This section asks you to do both in a single session: first assemble a minimal component library (button, input, card, modal) with interaction states, then use those components to design a connected five-screen app flow for your product.",
    "The five screens are not optional. Every product needs them before launch: a sign-in screen, an empty state, a primary task screen, a success confirmation, and an error state. By designing all five in sequence you will encounter the real constraint of component reuse: a decision you make for the button in the sign-in screen will propagate to the error state whether you planned for it or not.",
    "By the end of section you should have a Figma file with at least four named components, each with at least two variants, and five connected frames that tell a coherent user story. This file becomes one of the required deliverables for the capstone.",
  ],
  goals: [
    "Build a button component with at minimum three state variants: default, disabled, and loading",
    "Build a text input component with at minimum three state variants: default, focused, and error",
    "Build a card component that can hold at least two different content configurations via component properties",
    "Build a modal component with a header, body, and action area",
    "Design all five required screens using only your component library and your tokens from weeks 3-5",
    "Connect the five screens with prototype links so the flow can be walked through in presentation mode",
  ],
  background: [
    "Frost (2016) describes the atomic design hierarchy as atoms, molecules, organisms, templates, and pages. In Figma terms: your tokens (color, type, spacing) are atoms; your button and input components are molecules; a form section combining inputs, labels, and a submit button is an organism; a full sign-in screen is a template; and the working prototype flow is a page. This session asks you to build from atom to page in order.",
    "Figma’s component best-practices guide recommends naming components with slash-separated groups: “Button/Primary/Default” rather than “Button Default Primary.” Before you build, write out your naming scheme on paper. Renaming components after publishing to a team library forces downstream updates in every consuming file, so naming discipline now saves time later.",
    "The five screens (sign-in, empty state, primary task, success, error) are not arbitrary. They represent the five moments when a user is most uncertain about your product. Sign-in establishes trust. Empty state orients a new user. Primary task is the reason the product exists. Success closes the loop. Error tells the user what went wrong and what to do next. Designing all five reveals gaps that single-screen design hides.",
  ],
  instructions: [
    {
      title: "Set up your component page",
      body: "Create a new page in your Figma file called “Components.” This page will hold your master components. Do not design your screens directly on this page. On the components page, create four named sections: Button, Input, Card, Modal. Build one master component in each section before moving to screens.",
    },
    {
      title: "Build your button component",
      body: "Create a button master component with auto-layout. Add a variant property called “State” with values: Default, Hover, Pressed, Disabled, Loading. Add a variant property called “Hierarchy” with values: Primary, Secondary, Ghost. Use your semantic color tokens from week 4 for every fill and stroke. The loading variant should replace the text label with a spinner placeholder (a circle with a dashed stroke works fine as a placeholder).",
    },
    {
      title: "Build your text input component",
      body: "Create a text input master component. Add a variant property called “State” with values: Default, Focused, Error, Disabled. The error state must include a helper text layer below the input that shows an error message. Use your error color token for the border and helper text. The focused state should use your brand accent color on the border. Check that every state passes WCAG AA contrast for the label text.",
    },
    {
      title: "Build your card component",
      body: "Create a card master component with auto-layout for the content area. Add a boolean property called “Has image” that shows or hides an image slot at the top. Add a boolean property called “Has action” that shows or hides a bottom action row with a ghost button. The card should work without either property active (text-only card) and with both active (full card). Use your spacing tokens for all padding and gaps.",
    },
    {
      title: "Build your modal component",
      body: "Create a modal master component with three sections: a header area (title + close button), a body area (scrollable content slot), and an action area (primary and secondary buttons from your button component). The modal should have a drop shadow and a white background. Place it on a backdrop layer (a full-width semi-transparent overlay) as a separate component so you can combine them on screens.",
    },
    {
      title: "Design all five screens",
      body: "Create a new page called “Screens.” Design five frames in sequence: (1) Sign-in: email input, password input, submit button, and a secondary link for account recovery. (2) Empty state: an illustration or icon placeholder, a headline, a supporting line, and a primary action button. (3) Primary task: the main UI your product does, using at least two card instances and any navigation pattern from lecture. (4) Success: a confirmation message, a summary of what was completed, and a next-action button. (5) Error: a clear description of what went wrong, any recoverable action, and a way back to safety. Use only components and tokens you have already defined.",
    },
    {
      title: "Connect the flow and prepare for walkthrough",
      body: "In prototype mode, connect all five screens in sequence: sign-in leads to empty state (first-time user) or primary task (returning user); primary task leads to success or error. Add at least one back connection. Run the prototype in presentation mode and walk a section partner through the flow. Give each other two minutes of feedback focused on: are the component states legible, and does the flow make sense without narration?",
    },
  ],
  deliverables: [
    "A Figma file with a Components page containing at least four master components (Button, Input, Card, Modal), each with at least two variants",
    "A Screens page with all five required frames: sign-in, empty state, primary task, success, and error",
    "Prototype links connecting the five screens into a walkable flow",
    "All components using tokens (color, type, spacing) from weeks 3-5, with no hardcoded hex values",
    "Section partner walkthrough completed, with one revision made based on feedback",
  ],
  rubric: [
    {
      dimension: "Component completeness",
      points: 30,
      notes:
        "All four components built with the required variant properties; each component uses semantic color tokens",
    },
    {
      dimension: "State coverage",
      points: 20,
      notes:
        "Button has at least five states; input has at least four states; error states are visually distinct and pass WCAG AA",
    },
    {
      dimension: "Screen coverage",
      points: 25,
      notes:
        "All five required screen types present; each screen uses components from the library rather than one-off frames",
    },
    {
      dimension: "Flow coherence",
      points: 15,
      notes:
        "Prototype links connect all five screens; the flow makes sense when walked through without narration",
    },
    {
      dimension: "Partner feedback incorporated",
      points: 10,
      notes: "At least one visible change made after the walkthrough",
    },
  ],
  hints: [
    "Build your components before your screens. If you start a screen and realize you need a component you haven’t built yet, stop and build it on the Components page. Starting screens with one-off shapes means your component library will never catch up.",
    "Your loading button state will expose a layout problem: when the text label disappears, does the button collapse? Set the button to a fixed width or to “fill container” to prevent the collapse. This is the kind of edge case that breaks real UIs at runtime.",
    "The empty state is the most underdesigned screen in most products. A blank area with no explanation tells the user nothing. At minimum, explain why the area is empty and offer one action that would fill it. The empty state for a “saved items” feature should read differently from the empty state for a “notifications” feed.",
    "Component naming: write your naming scheme before you build. A button named “Button/Primary/Default” and a button named “Primary Button Default” look identical in your file but behave differently in the assets panel and in team library updates.",
    "You do not need a custom illustration for the empty state. A simple icon from Iconify with a headline and subtext reads clearly and takes ten minutes to build. Save illustration work for the capstone polish pass.",
  ],
};

export function Wk07Section() {
  return <ProjectPage spec={spec} />;
}

export const wk07SectionSearchBody =
  "section five-screen app flow component library button input card modal variants states sign-in empty state primary task success error prototype flow Figma components design system atomic design Week 7 worksheet design for builders";
