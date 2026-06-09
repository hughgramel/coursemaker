import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "cse457-26sp",
  title: "CSE 457",
  fullTitle: "CSE 457 – Introduction to Computer Graphics",
  term: "Spring 2026",
  description:
    "A course website for CSE 457 offered at University of Washington, Spring 2026.",
  url: "https://courses.cs.washington.edu/courses/cse457/26sp/",
  hero: { src: "/images/home.png", alt: "Spline curve with sample points (course teaser)" },
  navGroups: [
    {
      items: [
        { label: "Home", href: "" },
        { label: "Syllabus", href: "syllabus" },
        {
          label: "Projects",
          href: "project",
          children: [
            { label: "Project 1 MazeGame", href: "project/maze-game" },
            { label: "Project 2 Modeler", href: "project/modeler" },
            { label: "Project 3 Tracer", href: "project/tracer" },
            { label: "Project 4 Simulator", href: "project/simulator" },
            { label: "Project 5 Artifact", href: "project/artifact" },
          ],
        },
        { label: "Lab Resources", href: "labs" },
        { label: "Artifact Winners", href: "artifact-winners" },
      ],
    },
    {
      items: [
        { label: "Ed Discussion Board", href: "https://edstem.org/us/courses/97219/discussion", external: true },
        { label: "Canvas", href: "https://canvas.uw.edu/courses/1883365", external: true },
        { label: "Textbook (Optional)", href: "https://www.oreilly.com/library/view/fundamentals-of-computer/9781000426359/", external: true },
        { label: "Graphics in 5 Minutes Playlist", href: "https://youtube.com/playlist?list=PLWfDJ5nla8UpwShx-lzLJqcp575fKpsSO", external: true },
      ],
    },
  ],
  footer: {
    lines: [
      "Based on Just the Docs, a documentation theme for Jekyll.",
      "© 2026 Course staff. Built with coursemaker.",
    ],
  },
};
