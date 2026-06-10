import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "App UI: navigation, layout, and the screens you always need",
  date: "Week 7, Lecture 1",
  week: 7,
  topics: [
    "Navigation patterns: sidebar, top bar, and bottom tabs, when to use each",
    "The five screens every app must design before launch (sign-in, empty state, primary task, success, error)",
    "Loading and error states: designing for uncertainty, not the happy path",
    "Settings and account screens: the underdesigned screens that define trust",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk07-l1.pdf",
  readings: [
    {
      title: "Week 7 reading: app screens, states, and component systems",
      href: "/c/design-for-builders-26au/readings/wk07",
    },
    {
      title: "Brad Frost: Atomic Design, chapter 2, atoms, molecules, organisms, templates, and pages",
      href: "https://atomicdesign.bradfrost.com/chapter-2/",
    },
    {
      title: "Figma: components, styles, and shared library best practices",
      href: "https://www.figma.com/best-practices/components-styles-and-shared-libraries/",
    },
  ],
  followups: [
    "Frost (2016) describes &ldquo;templates&rdquo; as the level where content-free wireframes become real page layouts. Open three apps you use daily and identify which navigation pattern each uses (sidebar, top bar, or bottom tabs). What does the pattern choice tell you about the primary device context and the number of top-level destinations?",
    "Design an empty state for a &ldquo;saved items&rdquo; screen in Figma. Follow the three-part structure from lecture: a reason the state exists, a headline that tells the user what to do next, and a primary action button. Compare your version to the empty state in a real app. What do they share? What did you omit?",
    "Refactoring UI (Wathan &amp; Schoger, 2019) argues that labels are often a last resort and that format, context, and position can replace explicit labels. Find one form in an app where you think a label could be removed without losing clarity. Redesign the field in Figma without the label. Did the design improve or degrade?",
    "Take a sign-in screen from a real product. Identify every interaction state: default, focus, error, loading, success. Which states did the original designer omit? Design the missing states in Figma using your color tokens from week 4.",
    "Settings screens are often the last thing a founder designs and the first thing a skeptical user reads. Look at the settings screen of a product you trust and one you distrust. What visual or informational signals drive that trust difference? List three changes you could make to the &ldquo;untrusted&rdquo; settings screen that would shift perception.",
  ],
};

export function Wk07L1() {
  return <LecturePage spec={spec} />;
}

export const wk07L1SearchBody =
  "app UI navigation sidebar top bar bottom tabs screens sign-in empty state primary task success error loading states settings account screens interaction states app flows five screens product design Week 7 Lecture 1 design for builders founders engineers";
