import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Asset hunting: fonts, icons, photos, illustrations, legally and cheaply",
  date: "Week 9, Lecture 2",
  week: 9,
  topics: [
    "Google Fonts and Fontsource: what the SIL Open Font License actually permits for commercial products",
    "Lucide, Phosphor, and Iconify: ISC vs MIT vs mixed-license icon sets and how to read the license page before you ship",
    "Unsplash, Pexels, and Open Peeps: free photo and illustration sources, attribution rules, and the “free for commercial use” trap",
    "Reading a license without crying: what “attribution required,” “no derivatives,” and “Reserved Font Name” mean in practice",
    "When to pay: Tabler Icons Pro, Getty images, and cases where a commercial license is the right call",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk09-l2.pdf",
  readings: [
    {
      title: "Week 9 reading: marketing assets and license literacy",
      href: "/c/design-for-builders-26au/readings/wk09",
    },
    {
      title: "SIL International: using OFL fonts (official guidance)",
      href: "https://openfontlicense.org/how-to-use-ofl-fonts/",
    },
    {
      title: "Lucide Icons: license page (ISC)",
      href: "https://lucide.dev/license",
    },
  ],
  followups: [
    "Go to the Lucide license page (lucide.dev/license). The ISC license requires “the above copyright notice and this permission notice” to appear in all copies. In practice, for a web app that uses Lucide icons via npm, where does this notice live? Is it visible to end users? Does it need to be?",
    "The SIL Open Font License (OFL) includes a “Reserved Font Name” clause for some fonts. Find one Google Font whose OFL text includes a Reserved Font Name restriction. If you modified the font for your product, what would you be required to do before distributing it? What are you not required to do?",
    "Open Peeps by Pablo Stanley uses a CC0 (public domain) license. Unsplash uses its own custom license (not Creative Commons). For each: can you use the assets in a commercial product without attribution? Can you modify them? Can you resell the raw files? Find the answer by reading the license text, not by recalling a summary.",
    "You need an icon set for a production app. Lucide (ISC), Heroicons (MIT), and Phosphor (MIT) are all viable options. Pick one, read its license page, and write a two-sentence summary of what the license permits and what it prohibits. Then explain why a developer shipping to the App Store should care about this distinction.",
    "You find a high-quality photo on a website that says “free for commercial use.” There is no link to a specific license. Before you use it in a product screenshot or OG image, list three specific things you need to verify to be confident the use is legally clean. Where would you look to find each of those things?",
  ],
};

export function Wk09L2() {
  return <LecturePage spec={spec} />;
}

export const wk09L2SearchBody =
  "Google Fonts Fontsource SIL Open Font License OFL Lucide Phosphor Iconify ISC MIT icons Unsplash Pexels Open Peeps license reading attribution no derivatives Reserved Font Name Tabler Icons Pro commercial license asset hunting legal free sources Week 9 Lecture 2 design for builders founders engineers";
