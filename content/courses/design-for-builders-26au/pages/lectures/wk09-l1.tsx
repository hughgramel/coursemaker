import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "App Store screenshots, OG images, and the marketing surface",
  date: "Week 9, Lecture 1",
  week: 9,
  topics: [
    "App Store screenshot anatomy: required dimensions, device frames, text overlays, and how screenshots read at thumbnail size",
    "OG image patterns: 1200x630, open graph meta tags, and what gets rendered when someone shares your link",
    "Favicons across platforms: 16px browser tab, 180px Apple touch icon, 512px PWA icon, and the SVG favicon",
    "Social-share cards: Twitter card, LinkedIn card, and the design constraints each platform imposes",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk09-l1.pdf",
  readings: [
    {
      title: "Week 9 reading: marketing assets and license literacy",
      href: "/c/design-for-builders-26au/readings/wk09",
    },
    {
      title: "The App Launchpad: creating App Store screenshots in Figma (2026)",
      href: "https://theapplaunchpad.com/blog/how-to-create-app-store-screenshots-in-figma/",
    },
    {
      title: "Seth Richardson: App Store icons, screenshots, and OG images in Figma",
      href: "https://www.sethrichardsondesign.com/ultimate-app-store-icon-and-screenshot-generator",
    },
  ],
  followups: [
    "Open the App Store and search for any productivity app. Look at the first three screenshots in the listing. For each one, identify: the feature message in the text overlay, the device frame choice, and whether the screenshot would still communicate its message if the device frame were removed. Which of the three is most legible at thumbnail size, and why?",
    "Create a 1200&times;630px frame in Figma. Your product name, a one-sentence value proposition, and a single supporting visual must all fit in the safe zone (keeping 80px from each edge). Build a version with a solid background and a version with a dark gradient behind white text. Which communicates faster?",
    "The App Launchpad guide (2026) describes text overlays as &ldquo;the real message&rdquo; in App Store screenshots, with the device frame as supporting evidence. Find a screenshot set that reverses this: the visual is the message and the text is supporting. Does the reversal work? Why or why not?",
    "Your product has an OG image. A user shares the URL on X (Twitter), on LinkedIn, and in iMessage. Each platform crops the image differently. Design one OG image that survives a 16:9 crop (X), a 1.91:1 crop (LinkedIn), and a square crop (iMessage preview). What is the minimum safe zone that works for all three?",
    "Richardson&rsquo;s guide distinguishes between an App Store icon (the app mark) and the first screenshot (the marketing message). Why should these be designed as a pair, not independently? Find an App Store listing where the icon and first screenshot feel disconnected, and name specifically what breaks.",
  ],
};

export function Wk09L1() {
  return <LecturePage spec={spec} />;
}

export const wk09L1SearchBody =
  "App Store screenshots OG images favicons social-share cards 1200x630 open graph meta tags device frames text overlays thumbnail size Apple touch icon PWA icon SVG favicon Twitter card LinkedIn card marketing surface Week 9 Lecture 1 design for builders founders engineers";
