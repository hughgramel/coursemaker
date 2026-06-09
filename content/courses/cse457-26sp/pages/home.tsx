import { AnchorHeading } from "@/components/AnchorHeading";
import { WeekModule } from "@/components/WeekModule";
import { Hero } from "@/components/Hero";
import type { CourseModule } from "@/types/course";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const weeks: CourseModule[] = [
  {
    title: "Week 1", size: "h2-small",
    entries: [
      { date: "Mar 31", notes: [
        { kind: "text", text: "Intro (live in person CSE2 G10)" },
        { kind: "label", text: "P1 out", variant: "purple" },
        { kind: "row", items: [
          { kind: "link", text: "Affine Transformations", href: "https://youtu.be/AheaTd_l5Is" },
          { kind: "link", text: "Hierarchical Modeling", href: "https://youtu.be/4iNJdWXsFQ4" },
        ]},
      ]},
      { date: "Apr 2", notes: [{ kind: "text", text: "Q&A session (CSE2 G10)" }] },
    ],
  },
  {
    title: "Week 2", size: "h2-small",
    entries: [
      { date: "Apr 7", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Meshes 1", href: "https://youtu.be/wt6ixobELxQ" },
          { kind: "link", text: "Meshes 2", href: "https://youtu.be/32XciqyQ9_Q" },
          { kind: "link", text: "Reflection 1", href: "https://youtu.be/e-CDkxNll9w" },
          { kind: "link", text: "Reflection 2", href: "https://youtu.be/xyPDPutHA2A" },
        ]},
        { kind: "row", items: [
          { kind: "label", text: "P1 Due", variant: "red" },
          { kind: "label", text: "P2 out", variant: "purple" },
        ]},
      ]},
      { date: "Apr 9", notes: [{ kind: "text", text: "Q&A" }] },
    ],
  },
  {
    title: "Week 3", size: "h2-small",
    entries: [
      { date: "Apr 14", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Images 1", href: "https://youtu.be/xUzhKqf22mY" },
          { kind: "link", text: "Projection 1", href: "https://youtu.be/F5WA26W4JaM" },
          { kind: "link", text: "Projection 2", href: "https://youtu.be/g7Pb8mrwcJ0" },
          { kind: "link", text: "Color Perception", href: "https://youtu.be/cM2wvHtVcM8" },
        ]},
      ]},
      { date: "Apr 16", notes: [{ kind: "text", text: "Q&A" }] },
    ],
  },
  {
    title: "Week 4", size: "h2-small",
    entries: [
      { date: "Apr 21", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Ray Tracing 1", href: "https://youtu.be/H5TB2l7zq6s" },
          { kind: "link", text: "Ray Tracing 2", href: "https://youtu.be/mTOllvinv-U" },
          { kind: "link", text: "Ray Tracing 3", href: "https://youtu.be/tUh6gCx08LI" },
        ]},
        { kind: "row", items: [
          { kind: "label", text: "P2 Due", variant: "red" },
          { kind: "label", text: "P3 out", variant: "purple" },
        ]},
      ]},
      { date: "Apr 23", notes: [{ kind: "text", text: "Q&A" }] },
    ],
  },
  {
    title: "Week 5", size: "h2-small",
    entries: [
      { date: "Apr 28", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Images 2", href: "https://youtu.be/6v8dNtknOSM" },
          { kind: "link", text: "Images 3", href: "https://youtu.be/JciZYrh36LY" },
          { kind: "link", text: "Interpolation", href: "https://youtu.be/Xj129kA3Ci0" },
        ]},
      ]},
      { date: "Apr 30", notes: [{ kind: "text", text: "Q&A" }] },
    ],
  },
  {
    title: "Week 6", size: "h2-small",
    entries: [
      { date: "May 5", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Particle Systems 1", href: "https://youtu.be/sYBU9GY_g1k" },
          { kind: "link", text: "Particle Systems 2", href: "https://youtu.be/geB2Ms_Mq04" },
          { kind: "link", text: "Splines 1", href: "https://youtu.be/YMl25iCCRew" },
        ]},
        { kind: "row", items: [
          { kind: "label", text: "P3 Due", variant: "red" },
          { kind: "label", text: "P4 out", variant: "purple" },
        ]},
        { kind: "label", text: "Artifact Group", variant: "purple" },
      ]},
      { date: "May 7", notes: [{ kind: "text", text: "Q&A" }] },
    ],
  },
  {
    title: "Week 7", size: "h2-small",
    entries: [
      { date: "May 12", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Splines 2", href: "https://youtu.be/DLsqkWV6Cag" },
          { kind: "link", text: "Splines 3", href: "https://youtu.be/JwN43QAlF50" },
          { kind: "link", text: "Subdivision Surfaces", href: "https://youtu.be/kC8jbGSiuIQ" },
        ]},
        { kind: "label", text: "Artifact Out", variant: "purple" },
      ]},
      { date: "May 14", notes: [{ kind: "text", text: "Q&A" }] },
      { date: "May 16", notes: [{ kind: "label", text: "Artifact Pitch Due", variant: "red" }] },
    ],
  },
  {
    title: "Week 8", size: "h2-small",
    entries: [
      { date: "May 19", notes: [
        { kind: "row", items: [
          { kind: "link", text: "LLMs 1", href: "https://youtu.be/lnA9DMvHtfI" },
          { kind: "link", text: "LLMs 2", href: "https://youtu.be/YDiSFS-yHwk" },
        ]},
        { kind: "label", text: "P4 Due", variant: "red" },
      ]},
      { date: "May 21", notes: [
        { kind: "text", text: "No Q&A this week" },
        { kind: "label", text: "Fab Lab", variant: "blue" },
      ]},
    ],
  },
  {
    title: "Week 9", size: "h2-small",
    entries: [
      { date: "May 26", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Text-to-Image 1", href: "https://youtu.be/GYyP7Ova8KA" },
          { kind: "link", text: "Text-to-Image 2", href: "https://youtu.be/lyodbLwb2lY" },
          { kind: "link", text: "The Aurora Explained", href: "https://www.youtube.com/watch?v=FBQnhenLoN8" },
        ]},
        { kind: "label", text: "Fab Lab", variant: "blue" },
      ]},
      { date: "May 28", notes: [
        { kind: "text", text: "No Q&A this week" },
        { kind: "label", text: "Artifact Checkpoint Due", variant: "red" },
      ]},
    ],
  },
  {
    title: "Week 10", size: "h2-small",
    entries: [
      { date: "Jun 2", notes: [
        { kind: "row", items: [
          { kind: "link", text: "Displays 1", href: "https://youtu.be/1albYPL9Cfg" },
          { kind: "link", text: "Displays 2", href: "https://youtu.be/0b8ce30OllA" },
          { kind: "text", text: "Elective" },
        ]},
      ]},
      { date: "Jun 4", notes: [
        { kind: "text", text: "No Q&A this week" },
        { kind: "label", text: "VR Lab", variant: "blue" },
      ]},
    ],
  },
  {
    title: "Week 11", size: "h2-small",
    entries: [
      { date: "Jun 9", notes: [{ kind: "label", text: "Artifact Due", variant: "red" }] },
      { date: "Jun 10", notes: [{ kind: "text", text: "Artifact Demo Day (4:30-6:20pm @ CSE2 G10, during Finals block)" }] },
    ],
  },
];

export function HomePage() {
  return (
    <>
      <div className="not-prose">
        <Hero hero={config.hero} legacyImage={config.heroImage} />
      </div>

      <AnchorHeading as="h1" id="cse-457-introduction-to-computer-graphics" className="mb-2">
        CSE 457: Introduction to Computer Graphics
      </AnchorHeading>
      <p className="fs-6 fw-300">Spring 2026</p>
      <p>
        After the first lecture (in CSE2 G10), the class will{" "}
        <strong>NOT have lectures on Tuesdays</strong>. Thursdays will be live Q&amp;A
        sessions in CSE2 G10. View the <a href={`${base}/syllabus`}>syllabus</a> for more details.
      </p>

      <AnchorHeading as="h2" id="artifact-winners">Artifact Winners</AnchorHeading>
      <p>
        <a href={`${base}/artifact-winners`}>Click here</a>
        {" "}for last quarter&rsquo;s final artifacts and winners.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      <p>
        Tentative schedule for the class. All assignments are{" "}
        <strong>due at 11pm</strong> on the specified date.
      </p>

      <AnchorHeading as="h3" id="lecture-material">Lecture Material</AnchorHeading>

      {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
    </>
  );
}

export const homeSearchBody =
  "Intro to Computer Graphics Spring 2026 syllabus weeks calendar artifact winners ray tracing meshes reflection projection color perception particle systems splines subdivision surfaces LLMs text-to-image displays VR Lab Fab Lab";
