#!/usr/bin/env node
/**
 * scripts/new-course.mjs
 *
 * Scaffold a new course under content/courses/<slug>/ and register it in
 * content/courses/index.tsx between the COURSEMAKER:REGISTRY_START and
 * COURSEMAKER:REGISTRY_END markers.
 *
 * Usage:
 *   pnpm new-course --slug cse455-26au --title "CSE 455" --full-title "CSE 455 – Computer Vision" --term "Autumn 2026"
 *
 * Flags:
 *   --slug         REQUIRED. URL slug, [a-z0-9-]+.
 *   --title        REQUIRED. Short title (sidebar).
 *   --full-title   REQUIRED. Full course name.
 *   --term         REQUIRED. Term label, e.g. "Autumn 2026".
 *   --description  Optional. Defaults to a generic blurb.
 *   --weeks        Optional. Number of instructional weeks (6-12, default 10).
 *                  Currently informational only — the generated home page is
 *                  empty by default; coursemaker-create populates it.
 *   --hero-image   Optional. Path or URL of the course hero (SVG preferred).
 *   --force        Overwrite the directory if it already exists.
 *
 * Designed to be called non-interactively by Claude Code or CI.
 */

import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const COURSES_DIR = join(REPO_ROOT, "content", "courses");
const REGISTRY_FILE = join(COURSES_DIR, "index.tsx");

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const k = a.slice(2);
    if (k === "force") { out.force = true; continue; }
    const v = argv[i + 1];
    if (v === undefined || v.startsWith("--")) { out[k] = true; continue; }
    out[k] = v;
    i++;
  }
  return out;
}

function fail(msg) {
  console.error(`new-course: ${msg}`);
  process.exit(1);
}

async function exists(path) {
  try { await access(path, constants.F_OK); return true; } catch { return false; }
}

function camelFromSlug(slug) {
  return slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function esc(s) { return s.replace(/`/g, "\\`").replace(/\$/g, "\\$"); }

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const required = ["slug", "title", "full-title", "term"];
  for (const k of required) {
    if (!args[k] || typeof args[k] !== "string") fail(`missing required flag --${k}`);
  }
  const slug = args.slug;
  if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
    fail(`invalid --slug "${slug}". Use lowercase letters, digits, hyphens.`);
  }
  const title = args.title;
  const fullTitle = args["full-title"];
  const term = args.term;
  const description = args.description || `A course website for ${fullTitle} (${term}).`;
  const heroImage = args["hero-image"] || null;
  const weeks = args.weeks ? Number(args.weeks) : 10;
  if (Number.isNaN(weeks) || weeks < 6 || weeks > 12) {
    fail(`invalid --weeks "${args.weeks}". Must be an integer between 6 and 12.`);
  }

  const courseDir = join(COURSES_DIR, slug);
  if (await exists(courseDir) && !args.force) {
    fail(`directory already exists: ${courseDir}. Use --force to overwrite.`);
  }

  await mkdir(join(courseDir, "pages"), { recursive: true });

  const configTs = `import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "${slug}",
  title: ${JSON.stringify(title)},
  fullTitle: ${JSON.stringify(fullTitle)},
  term: ${JSON.stringify(term)},
  weeks: ${weeks},
  description: ${JSON.stringify(description)},
  ${heroImage
    ? `hero: { src: ${JSON.stringify(heroImage)}, alt: ${JSON.stringify(fullTitle)} },`
    : `hero: null,`}
  // Flat sidebar. NO children/dropdowns. Each parent links to a real
  // landing page that the scaffolder writes as a stub.
  navGroups: [
    {
      items: [
        { label: "Home",        href: "" },
        { label: "Tasks",       href: "tasks" },
        { label: "Syllabus",    href: "syllabus" },
        { label: "Lectures",    href: "lectures" },
        { label: "Sections",    href: "sections" },
        { label: "Assignments", href: "hw" },
        { label: "Readings",    href: "readings" },
      ],
    },
  ],
  footer: {
    lines: ["Built with coursemaker."],
  },
};
`;

  const homeTsx = `import { AnchorHeading } from "@/components/AnchorHeading";
import { WeekModule } from "@/components/WeekModule";
import { Hero } from "@/components/Hero";
import type { CourseModule } from "@/types/course";
import { config } from "../course.config";

const base = \`/c/\${config.slug}\`;

// coursemaker-create fills this with real week entries. Until then the
// home page just shows the hero + title + syllabus link.
const weeks: CourseModule[] = [];

export function HomePage() {
  return (
    <>
      <div className="not-prose">
        <Hero hero={config.hero} legacyImage={config.heroImage} />
      </div>
      <AnchorHeading as="h1" id="${slug}" className="mb-2">
        ${esc(fullTitle)}
      </AnchorHeading>
      <p className="fs-6 fw-300">${esc(term)}</p>
      <p>
        ${esc(description)} View the <a href={\`\${base}/syllabus\`}>syllabus</a> for details.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
    </>
  );
}

export const homeSearchBody =
  "${esc(fullTitle)} ${esc(term)} calendar";
`;

  // ===== Syllabus stub: high-level roadmap shape (custom JSX). =====
  const syllabusTsx = `import { AnchorHeading } from "@/components/AnchorHeading";

export function SyllabusPage() {
  return (
    <>
      <AnchorHeading as="h1" id="syllabus">Syllabus</AnchorHeading>
      <p>One-paragraph elevator pitch: arrive with X, leave with Y. Replace this stub.</p>

      <AnchorHeading as="h2" id="what-this-course-is-about">What this course is about</AnchorHeading>
      <p>Two short paragraphs on subject matter + course bias.</p>

      <AnchorHeading as="h2" id="fundamentals">The fundamentals</AnchorHeading>
      <p>3-5 non-negotiable principles the course steers learners toward.</p>
      <ol>
        <li><strong>Principle 1.</strong> One or two sentences.</li>
        <li><strong>Principle 2.</strong> One or two sentences.</li>
        <li><strong>Principle 3.</strong> One or two sentences.</li>
      </ol>

      <AnchorHeading as="h2" id="roadmap">The roadmap</AnchorHeading>
      <h3>Foundations (weeks 1-2)</h3>
      <p>What this phase tackles, what you leave it with.</p>
      <h3>Core mechanics</h3><p>...</p>
      <h3>Composition</h3><p>...</p>
      <h3>Frontier</h3><p>...</p>
      <h3>Synthesis</h3><p>...</p>

      <AnchorHeading as="h2" id="prerequisites">Prerequisites</AnchorHeading>
      <ul><li>What learners bring.</li></ul>

      <AnchorHeading as="h2" id="how-the-work-flows">How the work flows</AnchorHeading>
      <p>Brief paragraph: the daily / weekly rhythm.</p>

      <AnchorHeading as="h2" id="how-you-are-evaluated">How you are evaluated</AnchorHeading>
      <p>Six graded components. Exact weights are confirmed before the term begins; the structure below is fixed.</p>
      <ul>
        <li><strong>Weekly milestones.</strong> Brief description.</li>
        <li><strong>HW1.</strong> Brief description.</li>
      </ul>

      <AnchorHeading as="h2" id="policies">Policies</AnchorHeading>
      <h3>Late work</h3><p>Stub.</p>
      <h3>AI use</h3><p>Stub.</p>

      <AnchorHeading as="h2" id="reading-list">Reading list</AnchorHeading>
      <p>There is no required external textbook. The weekly readings on this site ARE the textbook.</p>
    </>
  );
}

export const syllabusSearchBody = "Syllabus overview fundamentals roadmap prerequisites policies";
`;

  // ===== Tasks page: localStorage-backed checklist, EMPTY weeks data. =====
  const tasksTsx = `"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = \`/c/\${config.slug}\`;
const STORAGE_KEY = \`\${config.slug}:tasks\`;

type DoneMap = Record<string, true>;

interface TasksCtx { done: DoneMap; toggle: (id: string) => void; reset: () => void; totalCount: number; doneCount: number; }
const Ctx = createContext<TasksCtx | null>(null);
function useTasks() { const c = useContext(Ctx); if (!c) throw new Error("Task used outside TasksProvider"); return c; }

function TasksProvider({ totalCount, children }: { totalCount: number; children: ReactNode }) {
  const [done, setDone] = useState<DoneMap>({});
  useEffect(() => { try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) setDone(JSON.parse(raw) as DoneMap); } catch {} }, []);
  const persist = useCallback((next: DoneMap) => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {} }, []);
  const toggle = useCallback((id: string) => { setDone((p) => { const n: DoneMap = { ...p }; if (n[id]) delete n[id]; else n[id] = true; persist(n); return n; }); }, [persist]);
  const reset = useCallback(() => { if (!confirm("Clear ALL task progress for this course? This cannot be undone.")) return; setDone({}); persist({}); }, [persist]);
  const value: TasksCtx = useMemo(() => ({ done, toggle, reset, totalCount, doneCount: Object.keys(done).length }), [done, toggle, reset, totalCount]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

function CircleCheckbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <button type="button" role="checkbox" aria-checked={checked} aria-label={label} onClick={onChange}
      style={{ appearance: "none", background: "transparent", border: 0, padding: 0, margin: 0, cursor: "pointer", width: "18px", height: "18px", flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: "0.18rem", marginRight: "0.625rem" }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="8" stroke={checked ? "#7253ed" : "#c2c2c2"} strokeWidth="1.5" fill={checked ? "#7253ed" : "transparent"} />
        {checked ? <path d="M5.25 9.5 L7.75 12 L12.75 6.5" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" /> : null}
      </svg>
    </button>
  );
}

const GROUP_HEADER_STYLE: CSSProperties = { fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#666", margin: "1.25rem 0 0.375rem 0", padding: 0 };
const WEEK_HEADER_STYLE: CSSProperties = { display: "flex", alignItems: "baseline", gap: "0.5rem", margin: "0 0 0.25rem 0", fontSize: "1.0625rem", fontWeight: 800, letterSpacing: "-0.005em" };
const WEEK_BLOCK_STYLE: CSSProperties = { marginBottom: "2rem" };
const GROUP_BODY_STYLE: CSSProperties = { paddingLeft: "0.25rem" };

function Task({ id, children, href, pdfHref }: { id: string; children: ReactNode; href?: string; pdfHref?: string }) {
  const { done, toggle } = useTasks();
  const isDone = !!done[id];
  const rowStyle: CSSProperties = { display: "flex", alignItems: "flex-start", padding: "0.4rem 0", lineHeight: 1.45, opacity: isDone ? 0.45 : 1, textDecoration: isDone ? "line-through" : "none", transition: "opacity 120ms ease" };
  const labelStr = typeof children === "string" ? children : "Task";
  return (
    <div style={rowStyle}>
      <CircleCheckbox checked={isDone} onChange={() => toggle(id)} label={labelStr} />
      <div style={{ flex: "1 1 auto", minWidth: 0 }}>
        {href ? <a href={href}>{children}</a> : <span>{children}</span>}
        {pdfHref ? <> <span style={{ color: "#bbb" }}>·</span> <a href={pdfHref}>PDF</a></> : null}
      </div>
    </div>
  );
}

interface WeekData { n: number; theme: string; lectures: { n: 1 | 2; title: string }[]; sectionTitle: string; milestones: string[]; assignments: { code: string; status: "out" | "due"; href: string }[]; }

// Fill this array as you author the course. Each week generates Reading,
// Slides (2), Section, Milestones, and Assignments tasks automatically.
const weeks: WeekData[] = [
  // {
  //   n: 1,
  //   theme: "Foundations",
  //   lectures: [
  //     { n: 1, title: "Lecture 1 title" },
  //     { n: 2, title: "Lecture 2 title" },
  //   ],
  //   sectionTitle: "Section title",
  //   milestones: ["Milestone 1", "Milestone 2"],
  //   assignments: [{ code: "HW1", status: "out", href: "hw/1" }],
  // },
];

function pad(n: number) { return n.toString().padStart(2, "0"); }
function taskIdsForWeek(w: WeekData): string[] {
  const wk = \`wk\${pad(w.n)}\`;
  return [\`\${wk}:reading\`, ...w.lectures.map((l) => \`\${wk}:slides-l\${l.n}\`), \`\${wk}:section\`, ...w.milestones.map((_, i) => \`\${wk}:milestone-\${i}\`), ...w.assignments.map((a) => \`\${wk}:asgn-\${a.code.toLowerCase()}-\${a.status}\`)];
}
const ALL_IDS = weeks.flatMap(taskIdsForWeek);

function WeekProgressBadge({ ids }: { ids: string[] }) {
  const { done } = useTasks();
  const total = ids.length;
  const completed = ids.filter((id) => done[id]).length;
  return <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#888", marginLeft: "0.5rem", whiteSpace: "nowrap" }}>{completed} / {total}</span>;
}

function OverallProgress() {
  const { doneCount, totalCount, reset } = useTasks();
  const pct = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100);
  return (
    <div style={{ margin: "1rem 0 2rem 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.5rem" }}>
        <div style={{ fontSize: "0.875rem", fontWeight: 700 }}>{doneCount} of {totalCount} complete ({pct}%)</div>
        <button type="button" onClick={reset} style={{ background: "transparent", border: 0, padding: 0, color: "#7253ed", fontSize: "0.8125rem", cursor: "pointer", textDecoration: "underline" }}>reset all</button>
      </div>
      <div style={{ height: "6px", background: "#ececec", borderRadius: "999px", overflow: "hidden" }}>
        <div style={{ width: \`\${pct}%\`, height: "100%", background: "#7253ed", transition: "width 200ms ease" }} />
      </div>
    </div>
  );
}

function WeekBlock({ w }: { w: WeekData }) {
  const wk = \`wk\${pad(w.n)}\`;
  const ids = taskIdsForWeek(w);
  return (
    <section style={WEEK_BLOCK_STYLE}>
      <h2 id={\`week-\${w.n}\`} style={WEEK_HEADER_STYLE}><span>Week {w.n}: {w.theme}</span><WeekProgressBadge ids={ids} /></h2>
      <h3 style={GROUP_HEADER_STYLE}>Reading</h3>
      <div style={GROUP_BODY_STYLE}><Task id={\`\${wk}:reading\`} href={\`\${base}/readings/\${wk}\`}>{\`Read Week \${w.n}: \${w.theme}\`}</Task></div>
      <h3 style={GROUP_HEADER_STYLE}>Slides</h3>
      <div style={GROUP_BODY_STYLE}>
        {w.lectures.map((l) => (
          <Task key={l.n} id={\`\${wk}:slides-l\${l.n}\`} href={\`\${base}/lectures/\${wk}-l\${l.n}\`} pdfHref={\`\${base}/slides/\${wk}-l\${l.n}.pdf\`}>
            {\`Review Lecture \${l.n}: \${l.title}\`}
          </Task>
        ))}
      </div>
      <h3 style={GROUP_HEADER_STYLE}>Section</h3>
      <div style={GROUP_BODY_STYLE}><Task id={\`\${wk}:section\`} href={\`\${base}/sections/\${wk}\`}>{\`Complete section: \${w.sectionTitle}\`}</Task></div>
      <h3 style={GROUP_HEADER_STYLE}>Milestones</h3>
      <div style={GROUP_BODY_STYLE}>{w.milestones.map((m, i) => <Task key={i} id={\`\${wk}:milestone-\${i}\`}>{m}</Task>)}</div>
      {w.assignments.length > 0 ? (
        <>
          <h3 style={GROUP_HEADER_STYLE}>Assignments</h3>
          <div style={GROUP_BODY_STYLE}>
            {w.assignments.map((a) => (
              <Task key={\`\${a.code}-\${a.status}\`} id={\`\${wk}:asgn-\${a.code.toLowerCase()}-\${a.status}\`} href={\`\${base}/\${a.href}\`}>
                {a.status === "out" ? \`Start \${a.code}: review brief, plan the sprint\` : \`Submit \${a.code} deliverables\`}
              </Task>
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}

export function TasksPage() {
  return (
    <TasksProvider totalCount={ALL_IDS.length}>
      <AnchorHeading as="h1" id="tasks">Tasks</AnchorHeading>
      <OverallProgress />
      <p style={{ fontSize: "0.875rem", color: "#666", marginTop: 0 }}>
        Track your progress through the course. Tick off each reading, slide deck, section, and assignment as you finish it. Progress saves in your browser&rsquo;s local storage on this device. Use the reset link above to start over.
      </p>
      <div style={{ marginTop: "1.5rem" }}>{weeks.map((w) => <WeekBlock key={w.n} w={w} />)}</div>
      {weeks.length === 0 ? <p style={{ color: "#888" }}>No weeks defined yet. Fill the <code>weeks</code> array in <code>pages/tasks.tsx</code>.</p> : null}
    </TasksProvider>
  );
}

export const tasksSearchBody = "Tasks checklist progress reading slides section milestones assignments";
`;

  // ===== Four index pages: empty data arrays the user (or skill) fills. =====
  const indexPage = (heading, intro, headers) => `import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = \`/c/\${config.slug}\`;

const rows: { week: number; cells: (string | { text: string; href: string })[] }[] = [
  // Fill rows as the course gets authored.
];

export function ${heading}IndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="${heading.toLowerCase()}">${heading}</AnchorHeading>
      <p>${intro}</p>
      {rows.length === 0 ? (
        <p style={{ color: "#888" }}>No ${heading.toLowerCase()} defined yet. Fill the <code>rows</code> array in <code>pages/${heading.toLowerCase()}-index.tsx</code>.</p>
      ) : (
        <table>
          <thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.week}>
                <td>{r.week}</td>
                {r.cells.map((c, i) => (
                  <td key={i}>{typeof c === "string" ? c : <a href={\`\${base}/\${c.href}\`}>{c.text}</a>}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export const ${heading.toLowerCase()}IndexSearchBody = "${heading} index";
`;

  const lecturesIndexTsx = indexPage(
    "Lectures",
    "Two lectures per week, paired with that week\\u2019s reading and section. Slides render to PDF.",
    ["Wk", "Lecture 1", "Lecture 2", "Phase"],
  );
  const sectionsIndexTsx = indexPage(
    "Sections",
    "One hands-on section per week, applied to YOUR work. Sections are the feedback loop.",
    ["Wk", "Section", "What you ship"],
  );
  const readingsIndexTsx = indexPage(
    "Readings",
    "The weekly readings ARE the textbook. Original writing vetted from primary sources.",
    ["Wk", "Reading", "Mission"],
  );
  const hwIndexTsx = `import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = \`/c/\${config.slug}\`;

const assignments: { code: string; slug: string; title: string; out: string; due: string }[] = [
  // { code: "HW1", slug: "1", title: "Title", out: "End Wk 1", due: "End Wk 2" },
];

export function HwIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="assignments">Assignments</AnchorHeading>
      <p>Every assignment is applied to YOUR work. There is no toy data, no fake target, no reference solution.</p>
      {assignments.length === 0 ? (
        <p style={{ color: "#888" }}>No assignments defined yet. Fill the <code>assignments</code> array in <code>pages/hw-index.tsx</code>.</p>
      ) : (
        <table>
          <thead><tr><th>#</th><th>Title</th><th>Out</th><th>Due</th></tr></thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.slug}>
                <td>{a.code}</td>
                <td><a href={\`\${base}/hw/\${a.slug}\`}>{a.title}</a></td>
                <td>{a.out}</td>
                <td>{a.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export const hwIndexSearchBody = "Assignments homework capstone";
`;

  const indexTsx = `import type { Course } from "@/types/course";
import { config } from "./course.config";
import { HomePage,         homeSearchBody }         from "./pages/home";
import { SyllabusPage,     syllabusSearchBody }     from "./pages/syllabus";
import { TasksPage,        tasksSearchBody }        from "./pages/tasks";
import { LecturesIndexPage, lecturesIndexSearchBody } from "./pages/lectures-index";
import { SectionsIndexPage, sectionsIndexSearchBody } from "./pages/sections-index";
import { ReadingsIndexPage, readingsIndexSearchBody } from "./pages/readings-index";
import { HwIndexPage,       hwIndexSearchBody }       from "./pages/hw-index";

export const course: Course = {
  config,
  pages: [
    { segments: [],             title: "Home",        searchBody: homeSearchBody,         render: () => <HomePage /> },
    { segments: ["tasks"],      title: "Tasks",       searchBody: tasksSearchBody,        render: () => <TasksPage /> },
    { segments: ["syllabus"],   title: "Syllabus",    searchBody: syllabusSearchBody,     render: () => <SyllabusPage /> },
    { segments: ["lectures"],   title: "Lectures",    searchBody: lecturesIndexSearchBody, render: () => <LecturesIndexPage /> },
    { segments: ["sections"],   title: "Sections",    searchBody: sectionsIndexSearchBody, render: () => <SectionsIndexPage /> },
    { segments: ["hw"],         title: "Assignments", searchBody: hwIndexSearchBody,       render: () => <HwIndexPage /> },
    { segments: ["readings"],   title: "Readings",    searchBody: readingsIndexSearchBody, render: () => <ReadingsIndexPage /> },
  ],
};
`;

  await writeFile(join(courseDir, "course.config.ts"),         configTs,          "utf8");
  await writeFile(join(courseDir, "pages", "home.tsx"),         homeTsx,           "utf8");
  await writeFile(join(courseDir, "pages", "syllabus.tsx"),     syllabusTsx,       "utf8");
  await writeFile(join(courseDir, "pages", "tasks.tsx"),        tasksTsx,          "utf8");
  await writeFile(join(courseDir, "pages", "lectures-index.tsx"), lecturesIndexTsx, "utf8");
  await writeFile(join(courseDir, "pages", "sections-index.tsx"), sectionsIndexTsx, "utf8");
  await writeFile(join(courseDir, "pages", "readings-index.tsx"), readingsIndexTsx, "utf8");
  await writeFile(join(courseDir, "pages", "hw-index.tsx"),     hwIndexTsx,        "utf8");
  await writeFile(join(courseDir, "index.tsx"),                 indexTsx,          "utf8");

  // Register in content/courses/index.tsx
  const varName = camelFromSlug(slug).replace(/[^A-Za-z0-9_]/g, "_");
  const registry = await readFile(REGISTRY_FILE, "utf8");
  if (registry.includes(`./${slug}`)) {
    console.log(`new-course: ${slug} already registered, skipping registry update.`);
  } else {
    const importLine = `import { course as ${varName} } from "./${slug}";`;
    const lastImportIdx = registry.lastIndexOf("import ");
    const eolAfter = registry.indexOf("\n", lastImportIdx);
    let updated = registry.slice(0, eolAfter + 1) + importLine + "\n" + registry.slice(eolAfter + 1);

    const startMarker = "// COURSEMAKER:REGISTRY_START";
    const endMarker = "// COURSEMAKER:REGISTRY_END";
    const startIdx = updated.indexOf(startMarker);
    const endIdx = updated.indexOf(endMarker);
    if (startIdx === -1 || endIdx === -1) {
      fail(`could not find registry markers in ${REGISTRY_FILE}.`);
    }
    const block = updated.slice(startIdx, endIdx);
    // Insert the new entry as the last array item, preserving trailing comma.
    const newBlock = block.replace(
      /(\];)\s*$/m,
      "" // strip
    );
    // Easier: find "]\;" inside the block and inject before it.
    const before = updated.slice(0, endIdx);
    const after = updated.slice(endIdx);
    const injected = before.replace(/(\n\];)\s*$/m, `  ${varName},\n];\n`);
    if (injected === before) {
      fail("could not inject new entry into courses array — check formatting of index.tsx.");
    }
    updated = injected + after;
    await writeFile(REGISTRY_FILE, updated, "utf8");
  }

  console.log(`\n✓ Created course "${slug}" (${weeks} weeks).`);
  console.log(`  • ${courseDir}`);
  console.log(`  • registered in ${REGISTRY_FILE}`);
  console.log(`\nNext:`);
  console.log(`  pnpm dev     # then open http://localhost:3000/c/${slug}`);
}

main().catch((err) => fail(err.stack || String(err)));
