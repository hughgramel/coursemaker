import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW1, Build a 12-component Figma starter kit",
  tagline: "Translate your product idea into a reusable component library before you write a single line of code.",
  outDate: "Week 1",
  dueDate: "Week 2",
  overview: [
    "A starter kit is not a polished design system. It is a working vocabulary: a small set of named, reusable pieces that let you prototype, review, and iterate your product without reinventing the wheel every session. This assignment asks you to build that vocabulary in Figma for your own product idea, the same product you will carry through the rest of the course.",
    "You will build 12 components, each using auto-layout, each with at least two variants where it makes sense. By the end, your file should feel like a mini library you actually want to open rather than a set of pixel-pushed rectangles. The written deliverable asks you to defend your typeface and color choices in plain language, because a choice you can explain is a choice you can change.",
    "You will practice skills introduced in Week 1: frames, auto-layout, components, variants, and styles. No ramp-building or grid systems are required here; those come later.",
  ],
  goals: [
    "Create a Figma file organized so a collaborator could find any component in under 30 seconds.",
    "Apply auto-layout to every component so it stretches and shrinks without manual pixel work.",
    "Define at least two variants for each component that warrants them, and connect them through the Variants panel.",
    "Use named styles for fill colors, text styles, and stroke colors so a single change propagates across the file.",
    "Write a clear, non-jargon justification of your typeface and color decisions that ties each choice to the product’s intended tone.",
  ],
  background: [
    "Figma organizes everything inside frames. A frame is not just a rectangle: it is the container that enables auto-layout, constrains children, and becomes a component. When you turn a frame into a component (the purple diamond icon), Figma lets you place instances of it anywhere in the file. Instances inherit changes from the main component, so fixing a padding mistake once fixes it everywhere.",
    "Auto-layout turns a frame into a smart container that stacks its children horizontally or vertically and adjusts its own size as content changes. The key settings are direction (horizontal or vertical), spacing between items, and padding. When you set a child’s width to “Fill container,” it stretches to fill available space; when you set it to “Hug contents,” it shrinks to fit. These two settings together handle almost every layout problem you will encounter this week.",
    "Variants let one component hold multiple states. A button can have Primary, Secondary, Ghost, and Destructive variants. A badge can have Success, Warning, and Error. You define variants by adding a property in the component panel and assigning each frame a value for that property. Consumers of the component flip between variants in the instance panel without digging into layers. This is the Figma equivalent of a prop in React.",
    "Styles are named tokens for color, text, and effects. Instead of picking a hex value each time, you define a style once, give it a name like “Primary / 600” or “Body / Regular,” and apply that name to fills, strokes, and text nodes. When your client asks you to shift the brand color, you change the style once and the whole file updates. Raw hex values in components are a maintenance problem; styles are not.",
    "Team libraries publish your components and styles so other Figma files can use them. You do not need to publish a library for this assignment, but structuring your file as if it were a library (components on a dedicated page, styles defined at the file level) is a habit worth building now.",
  ],
  instructions: [
    {
      title: "Set up the file",
      body: "Create a new Figma file named “[Your product] Starter Kit.” Add three pages: Components, Playground, and Cover. All main components live on Components. Playground is where you test assembled screens later. Cover is a single frame you will use as the file thumbnail. At the top of the Components page, create a frame labeled “Styles” and define at minimum: two text styles (a heading and a body style), a primary fill color, a neutral fill color, and a surface color. Name every style. Do not use raw hex values anywhere in the components you build.",
      steps: [
        "Create the Figma file and name it after your product.",
        "Add pages: Components, Playground, Cover.",
        "Define at least five named styles on the Components page: two text styles, a primary color, a neutral color, and a surface color.",
        "Verify that no component in the file references a raw hex value that is not also saved as a style.",
      ],
    },
    {
      title: "Identify your target product",
      body: "Every component you build should feel appropriate for your own product idea. Before building anything, write two sentences at the top of the Components page as a sticky note: what the product does, and who uses it. These two sentences will anchor your type and color choices and are the basis for the written justification deliverable. If you do not yet have a product idea, pick one of the three prompts posted in the course Slack channel.",
      steps: [
        "Drop a sticky note on the Components page with a one-line product description and a one-line user description.",
        "Choose a typeface pair or single typeface that matches the product’s intended tone. Justify this choice in your written deliverable.",
        "Choose a primary color and a neutral palette. Aim for a small palette: one primary, one neutral, one surface, one text color.",
      ],
    },
    {
      title: "Build the 12 components",
      body: "Build each component in order on the Components page, using auto-layout for every frame. Each component must use only named styles, no raw hex values. Where variants are specified, connect them using the Variants panel so they live in a single component set. Group component sets into labeled sections on the page using Figma’s section tool. The section labels should match the component names below.",
      steps: [
        "Button: four variants (Primary, Secondary, Ghost, Destructive). Each uses auto-layout, horizontal direction, padding on all sides, and an icon slot on the left that can be shown or hidden as a boolean property.",
        "Input: two variants (Default, Error). Include a label text node above the input frame, a placeholder text node inside, and a helper/error text node below. The whole group uses vertical auto-layout.",
        "Card: two variants (Default, Selected). A card is a surface frame with vertical auto-layout containing an image placeholder, a heading, a body line, and an optional badge.",
        "Modal: two variants (Default, Destructive). A centered overlay frame with a title, body text, and a two-button footer row. The footer uses horizontal auto-layout with space-between.",
        "Navbar: two variants (Light, Dark). A full-width frame with horizontal auto-layout, a logo slot on the left, navigation links in the center or right, and a CTA button from your Button component.",
        "Footer: one variant is sufficient. A full-width frame with vertical auto-layout containing a logo row, a link row, and a copyright line.",
        "Hero block: two variants (With image, Text only). A full-width section frame with a heading, a subheading, and a CTA button. The “With image” variant adds an image placeholder to the right.",
        "Section heading: two variants (Centered, Left-aligned). A heading text node and an optional subheading text node in vertical auto-layout.",
        "Avatar: three variants (Small, Medium, Large). A circle frame with an image fill and an optional online-status indicator badge.",
        "Badge: three variants (Default, Success, Warning). A small pill frame with a label. Use a named style for each fill color.",
        "Toast: two variants (Informational, Error). A floating card with an icon slot, a message line, and an optional close button.",
        "Empty state: two variants (No content, No results). A vertically centered frame with an illustration placeholder, a heading, a body line, and a primary CTA button.",
      ],
    },
    {
      title: "Audit and clean up",
      body: "Before you export, go through each component with the following checklist. Graders will work through the same list. A component that does not pass this checklist will lose points even if it looks correct.",
      steps: [
        "Every frame uses auto-layout. No component is built from fixed-position layers alone.",
        "Every fill, stroke, and text style references a named style. Open the Styles panel and confirm no orphan hex values.",
        "Every variant set is connected through the Variants panel, not just named with a slash convention.",
        "Layers are named. No “Frame 47” or “Rectangle 12” in any published component.",
        "Component names in the sidebar follow a consistent convention, for example Component / Variant.",
      ],
    },
  ],
  deliverables: [
    "A Figma share link with “Anyone with the link can view” enabled. The link must open to the Components page.",
    "A written justification of 200 words (no more, no less) covering: why you chose your typeface or typeface pair, what tone that choice signals, why you chose your primary color, and what that color says about the product. Submit this as a comment on the Figma file AND as a plain-text block in your submission form.",
  ],
  rubric: [
    { dimension: "Components present", points: 30, notes: "All 12 components exist, are named correctly, and are findable on the Components page. Missing or misnamed components lose 2.5 points each." },
    { dimension: "Auto-layout discipline", points: 20, notes: "Every component frame and every sub-frame uses auto-layout. Fixed-position layers inside a component frame lose points." },
    { dimension: "Variants", points: 15, notes: "Variants are connected through the Variants panel, not just named with a slash. Each variant set has the minimum number of variants specified in the instructions." },
    { dimension: "Tokenized styles", points: 15, notes: "No raw hex values in any component. All fills, strokes, and text nodes reference named styles defined on the Components page." },
    { dimension: "Hierarchy and spacing", points: 10, notes: "Components look intentional: consistent padding, readable type sizes, clear visual hierarchy between heading, body, and supporting text." },
    { dimension: "Written justification", points: 10, notes: "200 words, covers typeface and color choices, ties each choice to the product tone. Vague or generic rationale receives partial credit." },
  ],
  hints: [
    "Use the Iconify plugin (search for it in the Figma community) to pull in any icon as an SVG frame. Drop the icon into a component as a named layer called “icon” and expose it as a boolean property so consumers can toggle it off without breaking the layout.",
    "Find a real product that is close to yours in tone and inspect it in the Figma community or by using the browser inspector. Copy the rough proportions and spacing as a starting point, then replace every color and typeface with your own. This is faster than designing from a blank canvas and produces better first drafts.",
    "Before you duplicate a component, lock the main component in the layers panel. Locked layers cannot be accidentally edited when you are working nearby. Unlock only when you need to modify the main.",
    "Prefer named styles over raw hex values from the start, not as a cleanup step at the end. It takes the same number of clicks and saves a painful find-and-replace later.",
    "Set your component frame to “Hug contents” in both axes during construction. This makes it easy to see whether your auto-layout is working correctly. Switch to fixed widths only for full-width components like Navbar and Footer.",
    "Give every layer a meaningful name before you turn a frame into a component. Layer names become the property labels that instance users see. “Label” and “Icon” are better than “Text 7” and “Vector 3.”",
    "The 200-word justification is graded on specificity, not length. “I chose Inter because it is clean” scores poorly. “I chose Inter because its narrow letterforms keep labels readable at 12px inside the badge and input components, and its lack of decorative serifs matches the task-focused tone of a project-management tool” scores well.",
  ],
  late: "Late submissions lose 10% per day up to three days. After three days, no credit is awarded. Submit whatever you have because HW2 builds directly on this file.",
};

export function Hw1() { return <ProjectPage spec={spec} />; }
export const hw1SearchBody = "HW1 Figma starter kit components auto-layout variants styles button input card modal navbar footer hero avatar badge toast empty state";
