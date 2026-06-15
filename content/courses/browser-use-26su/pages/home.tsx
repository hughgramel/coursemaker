import { AnchorHeading } from "@/components/AnchorHeading";
import { WeekModule } from "@/components/WeekModule";
import { Hero } from "@/components/Hero";
import type { CourseModule, ModuleNote } from "@/types/course";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

function pad(n: number) { return n.toString().padStart(2, "0"); }

interface WeekSpec {
  n: number;
  phase: string;
  theme: string;
  reading: string;
  lectures: [string, string];
  section: string;
  assignments?: ModuleNote[];
}

const SPECS: WeekSpec[] = [
  { n: 1, phase: "Foundations", theme: "What browser-use is and the loop", reading: "What browser-use is and the loop", lectures: ["Why a browser needs an agent", "The loop in three moves"], section: "Run and read your first agents", assignments: [{ kind: "label", variant: "purple", text: "HW1 out" }] },
  { n: 2, phase: "Foundations", theme: "How an agent sees a page", reading: "How an agent sees a page", lectures: ["The DOM, the accessibility tree, and what gets kept", "Numbered elements and the vision option"], section: "Mapping indices to elements" },
  { n: 3, phase: "Core mechanics", theme: "Capturing browser state", reading: "Capturing browser state", lectures: ["BrowserSession and the browser-state summary", "Fitting the page into a prompt"], section: "Two sessions, two state summaries", assignments: [{ kind: "label", variant: "red", text: "HW1 due" }, { kind: "label", variant: "purple", text: "HW2 out" }] },
  { n: 4, phase: "Core mechanics", theme: "Structured decisions", reading: "Structured decisions", lectures: ["Making the model answer in a known shape", "Inside AgentOutput"], section: "Dissecting AgentOutput" },
  { n: 5, phase: "Core mechanics", theme: "Acting on the page", reading: "Acting on the page", lectures: ["The tools registry and built-in actions", "Dispatch, multi-act, and injection"], section: "Following one click through the loop", assignments: [{ kind: "label", variant: "red", text: "HW2 due" }] },
  { n: 6, phase: "Composition", theme: "Custom tools and structured results", reading: "Custom tools and structured results", lectures: ["Writing a custom action", "Structured output and safe inputs"], section: "A custom tool with a typed result", assignments: [{ kind: "label", variant: "purple", text: "HW3 out" }] },
  { n: 7, phase: "Composition", theme: "Driving a real browser", reading: "Driving a real browser", lectures: ["Persistent profiles and real browsers", "Multi-tab work and getting data out"], section: "Reuse a login across tabs", assignments: [{ kind: "label", variant: "purple", text: "Capstone out" }] },
  { n: 8, phase: "Frontier", theme: "Making agents reliable", reading: "Making agents reliable", lectures: ["When agents go wrong", "Planning, memory, and task framing"], section: "Make a flaky agent reliable", assignments: [{ kind: "label", variant: "red", text: "HW3 due" }, { kind: "label", variant: "purple", text: "HW4 out" }] },
  { n: 9, phase: "Frontier", theme: "Evaluation and ecosystem", reading: "Evaluation, deployment, ecosystem", lectures: ["Does it actually work? Evaluating web agents", "Shipping it: CLI, MCP, cloud, and design philosophy"], section: "One task, three ways: a scorecard" },
  { n: 10, phase: "Synthesis", theme: "Designing a complete agent", reading: "Designing a complete agent", lectures: ["Putting the loop to work", "Capstone studio and review"], section: "Capstone studio", assignments: [{ kind: "label", variant: "red", text: "HW4 due" }, { kind: "label", variant: "red", text: "Capstone due" }] },
];

function toModule(s: WeekSpec): CourseModule {
  const wk = `wk${pad(s.n)}`;
  const entries: { date: string; notes: ModuleNote[] }[] = [
    { date: "Reading", notes: [{ kind: "link", text: s.reading, href: `${base}/readings/${wk}` }] },
    {
      date: "Lectures",
      notes: [{
        kind: "row",
        items: [
          { kind: "link", text: s.lectures[0], href: `${base}/lectures/${wk}-l1` },
          { kind: "link", text: s.lectures[1], href: `${base}/lectures/${wk}-l2` },
        ],
      }],
    },
    { date: "Section", notes: [{ kind: "link", text: s.section, href: `${base}/sections/${wk}` }] },
  ];
  if (s.assignments?.length) entries.push({ date: "Assignments", notes: s.assignments });
  return { title: `Week ${s.n}: ${s.theme}`, id: `week-${s.n}`, entries };
}

const phases: { name: string; weeks: number[] }[] = [
  { name: "Foundations", weeks: [1, 2] },
  { name: "Core mechanics", weeks: [3, 4, 5] },
  { name: "Composition", weeks: [6, 7] },
  { name: "Frontier", weeks: [8, 9] },
  { name: "Synthesis", weeks: [10] },
];

export function HomePage() {
  return (
    <>
      <div className="not-prose">
        <Hero hero={config.hero} legacyImage={config.heroImage} />
      </div>
      <AnchorHeading as="h1" id="browser-use-26su" className="mb-2">
        Browser Use: How LLM Agents Drive the Web
      </AnchorHeading>
      <p className="fs-6 fw-300">Summer 2026 · 10 weeks</p>
      <p>
        browser-use is the open-source Python library that lets a language model drive a real web
        browser to complete tasks described in plain English. This course is half architecture
        (the perceive-decide-act loop, DOM serialization, the tools registry, the browser layer)
        and half hands-on building (custom tools, structured output, logged-in browsers, and a
        capstone agent you design and defend). Start with the{" "}
        <a href={`${base}/syllabus`}>syllabus</a>, then work the weekly{" "}
        <a href={`${base}/readings`}>readings</a> and <a href={`${base}/sections`}>sections</a>.
        Track everything on the <a href={`${base}/tasks`}>tasks</a> page.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      {phases.map((p) => (
        <div key={p.name}>
          <AnchorHeading as="h3" id={`phase-${p.name.toLowerCase().replace(/\s+/g, "-")}`} className="text-gamma">
            {p.name}
          </AnchorHeading>
          {p.weeks.map((n) => {
            const spec = SPECS.find((s) => s.n === n)!;
            return <WeekModule key={n} module={toModule(spec)} />;
          })}
        </div>
      ))}
    </>
  );
}

export const homeSearchBody =
  "Browser Use How LLM Agents Drive the Web Summer 2026 calendar perceive decide act loop DOM selector map tools registry custom tools structured output real browser reliability evaluation capstone schedule weeks phases";
