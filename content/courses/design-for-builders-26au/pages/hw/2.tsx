import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW2, Type-only redesign of a competitor landing page",
  tagline:
    "Prove that a single typeface, a neutral ramp, and one accent color do most of the work.",
  outDate: "End of Week 3",
  dueDate: "End of Week 5",
  overview: [
    "Most founders reach for images, icons, and brand color the moment they open Figma. This assignment removes that option. You will take a real SaaS competitor&rsquo;s landing page and redesign it using only Inter, a neutral gray ramp, and a single accent color. No images. No icons. No decorative elements of any kind. If the redesign communicates clearly, you will have demonstrated the core claim of the first three weeks: typography and spacing carry hierarchy; everything else is optional.",
    "The constraint forces a specific skill. When decoration is available, it is easy to lean on it to create emphasis. When it is gone, you have only scale, weight, line-height, measure, and whitespace. Fluency with those five levers is what separates a designer who can build fast from one who needs a full brand system before they can make a decision. Color and spacing systems are introduced in lectures during Weeks 4 and 5, so by the time this is due you will have the vocabulary to apply them with intention.",
  ],
  goals: [
    "Build a five-step modular type scale from a single base size and apply it consistently across an entire page",
    "Control line-height and measure independently for display text and body text to maximize readability",
    "Construct a neutral gray ramp and a single accent color that together pass WCAG AA on every text and background pair",
    "Use whitespace as the primary grouping and separation tool in the absence of borders or decorative dividers",
    "Articulate in writing why specific typographic decisions improve hierarchy over the original design",
  ],
  background: [
    "Type anatomy gives you the vocabulary for this project. Know the difference between cap height, x-height, ascender, and descender: they explain why different typefaces at the same nominal size feel different in size. Inter is a variable font optimized for screen legibility at small sizes, which makes it a practical default for product work.",
    "A modular scale is a sequence of sizes built by multiplying a base size by a fixed ratio. The major third (1.250) is the recommended starting point here: it produces steps large enough to read as a clear hierarchy without the jump being so large that the scale feels theatrical. Applied to a 16px base, the five steps are roughly 10px, 13px, 16px, 20px, 25px. You can generate these at typescale.com or build them by hand. Whatever method you use, document the base, the ratio, and the resulting values in your Figma file.",
    "Measure is the line length of a text block, measured in characters. The conventional range for comfortable reading is 45 to 75 characters per line. Below 45 the eye reverses direction too often; above 75 the return trip from the end of one line to the start of the next introduces tracking errors. Body copy in your redesign should stay inside that range. Headlines can break it briefly because display text is read in a single fixation rather than a series of saccades.",
    "Line-height is the vertical distance from one baseline to the next, expressed as a unitless ratio of the font size. A ratio of 1.5 is the standard for body text; it gives each line breathing room without opening gaps large enough to break the sense of a flowing paragraph. Display text at large sizes benefits from a tighter ratio, around 1.2, because the ascenders and descenders already occupy space and a loose line-height makes the heading read as two unrelated lines. Set these ratios explicitly; do not rely on a browser or Figma default.",
    "A neutral ramp is a sequence of grays from near-white to near-black. Give each step a name or number you can reference consistently (100 through 900 is conventional). Your accent color should be a single hue at one or two values: the full-saturation version for interactive elements and emphasis, and a light tint for backgrounds. The WCAG AA standard requires a contrast ratio of at least 4.5:1 for normal text against its background and 3:1 for large text (18px bold or 24px regular). Test every combination before you submit.",
  ],
  instructions: [
    {
      title: "Pick a real SaaS competitor landing page in your space",
      body: "Choose a page with at least five distinct sections: a hero, some form of social proof, a features block, an FAQ, and a footer. The page should have enough visual complexity to be worth redesigning. Avoid pages that are already typographically disciplined; find one that relies heavily on photography, illustration, or custom iconography, because those are the pages where the constraint will teach you the most.",
    },
    {
      title: "Screenshot the current version as a Figma frame",
      body: "Use your browser&rsquo;s full-page screenshot tool or a Figma plugin to capture the entire page at 1440px wide. Drop it into a frame named &ldquo;Original&rdquo; in your Figma file. This frame is the baseline that your writeup will reference. Do not alter it after you start designing.",
    },
    {
      title: "Build a five-step type scale",
      body: "Choose a base size (16px is the conventional default) and a ratio (1.250 major third is recommended). Multiply or divide to produce five steps. Document the base, ratio, and resulting pixel values as text styles in Figma so that every size in your design is drawn from the scale and nothing is set by eye.",
      steps: [
        "Generate your scale at typescale.com or by hand: multiply the base by the ratio four times to get sizes above, divide once to get the size below.",
        "Name each step by its role: caption, body, subhead, heading, display. This naming discipline makes it easier to be consistent and easier to explain your choices in the writeup.",
        "Create Figma text styles for each combination of scale step, weight (regular and semibold at minimum), and line-height. You will reference these styles throughout the design; styles you apply by hand rather than from the panel will not count toward the &ldquo;consistent use&rdquo; rubric dimension.",
      ],
    },
    {
      title: "Apply the scale and spacing to the full redesign",
      body: "Recreate each section of the original page using only Inter, your gray ramp, and your accent color. Replace every image with a solid rectangle at an appropriate gray value. Replace every icon with a text label or remove it. Replace decorative dividers with whitespace. The spacing scale (covered in the Week 4 lecture) is an 8pt grid: all spacing values are multiples of 8px. You will have this system by submission time, and using it is worth 15 points on the rubric.",
      steps: [
        "Hero: set the headline in your display style, the subhead in your subhead style, and the primary CTA as a button using your accent color. Body copy in the hero, if any, uses your body style.",
        "Social proof: logos become gray rectangles or short text names. Quotes use body style for the text and caption style for the attribution.",
        "Features: each feature title uses subhead style. Feature body copy uses body style. Keep the grid alignment tight.",
        "FAQ: question labels use subhead style or semibold body. Answer text uses body style. Measure must stay within 45 to 75 characters.",
        "Footer: use caption style for fine print. Navigation links use body style. The accent color may appear on hover states or as a link color.",
      ],
    },
    {
      title: "Render the redesign in a second Figma frame",
      body: "Name the frame &ldquo;Redesign&rdquo; and place it directly to the right of the Original frame at the same width and approximate height. Both frames should be visible in a single Figma share link at 50% zoom. Do not crop either frame.",
    },
    {
      title: "Test contrast on every text and background pair",
      body: "Use the Figma plugin &ldquo;Contrast&rdquo; or the WebAIM Contrast Checker to verify every combination of text color and background color in your design. Every normal-size text pair must pass 4.5:1. Every large-text pair must pass 3:1. If a pair fails, adjust the gray value or accent value until it passes, then update your text styles so the fix propagates. Record the pass/fail results in your writeup.",
    },
  ],
  deliverables: [
    "A Figma file containing the Original frame and the Redesign frame side by side, shared as a view link.",
    "Figma text styles for every scale step, weight, and line-height combination used in the design. Graders will inspect the Styles panel.",
    "A 250-word writeup (submitted as a PDF or plain text) explaining what you changed and why. Name specific decisions: which sizes you used for which roles, what line-height you set for body and display text, why you chose your accent color, and what contrast results you found. The writeup should read as a defense of choices in the vocabulary of the course, not a summary of steps taken.",
  ],
  rubric: [
    {
      dimension: "Type scale used consistently",
      points: 25,
      notes:
        "Every text element in the redesign is set using a Figma text style drawn from the documented scale. Ad-hoc sizes not in the scale lose points proportionally to how many instances appear.",
    },
    {
      dimension: "Measure and line-height tuned",
      points: 20,
      notes:
        "Body copy falls within 45 to 75 characters per line. Body line-height is 1.5 or within 0.05 of it. Display line-height is 1.2 or within 0.05 of it. Each violation in a distinct section costs 4 points.",
    },
    {
      dimension: "Spacing scale discipline",
      points: 15,
      notes:
        "All spacing values are multiples of 8px. Spot-checked at five locations in the design. Each location that fails costs 3 points. The 8pt grid is covered in the Week 4 lecture; you will have it before this is due.",
    },
    {
      dimension: "Hierarchy visible from across the room",
      points: 15,
      notes:
        "At 25% zoom, a reader should be able to identify the headline, the primary CTA, the section headings, and the body copy without zooming in. Graded holistically: 15 if clear, 10 if partially clear, 5 if ambiguous, 0 if flat.",
    },
    {
      dimension: "WCAG AA passes everywhere",
      points: 10,
      notes:
        "All normal-text pairs at 4.5:1 or better, all large-text pairs at 3:1 or better. Each failing pair costs 2 points.",
    },
    {
      dimension: "Writeup defends choices in real vocabulary",
      points: 15,
      notes:
        "Uses terms from the course (modular scale, measure, line-height, neutral ramp, contrast ratio, cap height, x-height) with accuracy. Vague claims like &ldquo;it looks cleaner&rdquo; without a specific reason earn at most 7 points.",
    },
  ],
  hints: [
    "Start with the type scale before you open the competitor page. If you build the scale first and then apply it, you are designing; if you eyeball sizes from the original, you are tracing. The difference shows in the rubric.",
    "The major third (1.250) produces a hierarchy that reads as calm and professional. If you want more contrast between levels, try the perfect fourth (1.333), but document the choice. Do not switch ratios mid-design.",
    "Measure is harder to control in Figma than it sounds. Set a maximum width on your text frames rather than letting them stretch to fill the column. For a 16px body size, 65ch is approximately 650px at Inter&rsquo;s average character width.",
    "Your accent color does not need to appear often to work. One application per section is usually enough. If you find yourself reaching for the accent to solve every emphasis problem, the type scale is not doing its job.",
    "Gray rectangles standing in for images are not a cop-out; they are the constraint. Label each rectangle with the content it represents (for example, &ldquo;product screenshot&rdquo; or &ldquo;customer logo&rdquo;) in caption style so a reader knows what would be there in a final design.",
    "Run the contrast check before you finalize colors, not after. If your accent fails against white at normal size, a small adjustment to its lightness value usually fixes it without changing the hue.",
    "The writeup is 15 points. It is not a summary of what you did; it is a defense of why. Write it after you finish the design and ask yourself: if I handed this to a developer to implement, what would they need to know about the decisions I made? That is the standard the grader is applying.",
    "The spacing system from Week 4 is straightforward: every gap, padding, and margin is a multiple of 8px. If you are unsure in advance, use 8, 16, 24, 32, 48, and 64 as your palette. You will refine the system in class, but these values will get you through the assignment without waiting.",
  ],
  late:
    "Late submissions lose 10 points per calendar day, up to three days. After three days the assignment is not accepted. There is no Week 5 dependency on this work, so extensions are not granted for downstream reasons.",
};

export function Hw2() {
  return <ProjectPage spec={spec} />;
}

export const hw2SearchBody =
  "HW2 type-only redesign competitor landing page Inter type scale modular scale measure line-height neutral ramp accent color WCAG AA Figma";
