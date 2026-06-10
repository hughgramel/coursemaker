import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Your design environment: file structure, libraries, plugins",
  date: "Week 1, Lecture 2",
  week: 1,
  topics: [
    "Page organization: cover, flows, components, archive",
    "Team libraries: publishing, consuming, and managing breaking changes",
    "Essential plugins: Iconify, Unsplash, Lorem ipsum",
    "Keyboard-driven workflow: selection, alignment, and spacing without the mouse",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk01-l2.pdf",
  readings: [
    {
      title: "Week 1 reading: Figma as a design environment",
      href: "/c/design-for-builders-26au/readings/wk01",
    },
    {
      title: "Figma: components, styles, and shared library best practices",
      href: "https://www.figma.com/best-practices/components-styles-and-shared-libraries/",
    },
    {
      title: "Figma Learn: lesson 3, build your design system",
      href: "https://help.figma.com/hc/en-us/articles/14548865734679-Lesson-3-Build-your-design-system",
    },
  ],
  followups: [
    "Set up a four-page Figma file with the structure from lecture: a cover page, a flows page, a components page, and an archive page. On the cover page, add a frame with your file title, last-updated date, and your name. Why is a cover page useful before you publish a library?",
    "Publish your component file as a team library (or a local library if you are on the free plan). Open a second file and enable the library. Insert one of your published components. Now make a change to the original component and push the update. What does the &ldquo;review updates&rdquo; dialog show in the consuming file?",
    "The Figma best-practices guide recommends naming components with a &ldquo;/&rdquo; separator to create groups (e.g. &ldquo;Button/Primary/Default&rdquo;). Apply this naming pattern to at least six components in your starter kit. How does this grouping appear in the assets panel?",
    "Install Iconify and find icons for five common UI actions: close, search, settings, user profile, and external link. Note the icon set you chose and its license. Why does license matter for icons you ship in a product?",
    "Time yourself completing a simple layout task (three cards in a row, evenly spaced) using only the keyboard shortcuts from the lecture. Then do the same task using the mouse. How much faster was the keyboard-driven approach after one practice run?",
  ],
};

export function Wk01L2() {
  return <LecturePage spec={spec} />;
}

export const wk01L2SearchBody =
  "Figma file structure page organization team libraries publishing components plugins Iconify Unsplash Lorem ipsum keyboard shortcuts workflow design environment Week 1 Lecture 2 design for builders founders engineers";
