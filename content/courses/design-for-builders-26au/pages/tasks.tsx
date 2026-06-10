"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;
const STORAGE_KEY = `${config.slug}:tasks`;

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

const weeks: WeekData[] = [
  {
    n: 1,
    theme: "Figma as your design environment",
    lectures: [
      { n: 1, title: "Figma for people who think in code" },
      { n: 2, title: "Your design environment, file structure, libraries, plugins" },
    ],
    sectionTitle: "Rebuild a landing-page section in Figma with auto-layout",
    milestones: [
      "Install Figma desktop and create a free personal account",
      "Set up a starter file with 3 pages: Cover, Components, Screens",
      "Install Iconify and Unsplash plugins",
    ],
    assignments: [{ code: "HW1", status: "out", href: "hw/1" }],
  },
  {
    n: 2,
    theme: "Visual literacy, what your eye actually sees",
    lectures: [
      { n: 1, title: "CRAP, the four moves every designer makes" },
      { n: 2, title: "Gestalt, how the brain groups things" },
    ],
    sectionTitle: "Design critique, decompose three real interfaces",
    milestones: [
      "Collect 5 product screenshots you find visually well-designed",
      "Mark up one of them with hierarchy levels (1, 2, 3)",
    ],
    assignments: [{ code: "HW1", status: "due", href: "hw/1" }],
  },
  {
    n: 3,
    theme: "Typography, the 80% lever",
    lectures: [
      { n: 1, title: "How type works, anatomy, classification, voice" },
      { n: 2, title: "Type systems, scales, line-height, measure" },
    ],
    sectionTitle: "Audit and fix typography on your landing page",
    milestones: [
      "Pick one display typeface and one body typeface for your product",
      "Build a 5-step modular type scale in Figma styles",
    ],
    assignments: [{ code: "HW2", status: "out", href: "hw/2" }],
  },
  {
    n: 4,
    theme: "Color, building a palette you can use",
    lectures: [
      { n: 1, title: "Color theory for screens, not paintings" },
      { n: 2, title: "Palettes, contrast, and dark mode" },
    ],
    sectionTitle: "Build your product palette as Figma variables",
    milestones: [
      "Build a 9-step neutral ramp",
      "Build a 9-step accent ramp",
      "Verify body text passes WCAG AA",
    ],
    assignments: [],
  },
  {
    n: 5,
    theme: "Layout, grids, and spacing",
    lectures: [
      { n: 1, title: "The 8-point grid and why every good app uses one" },
      { n: 2, title: "Grids, columns, and responsive layout in Figma" },
    ],
    sectionTitle: "Pixel-grid drill, rebuild three product screens on 8pt",
    milestones: [
      "Create spacing variables (4, 8, 12, 16, 24, 32, 48, 64)",
      "Apply your spacing scale to your starter kit components",
    ],
    assignments: [{ code: "HW2", status: "due", href: "hw/2" }],
  },
  {
    n: 6,
    theme: "Landing pages that convert",
    lectures: [
      { n: 1, title: "Landing-page anatomy, hero, social proof, features, CTA" },
      { n: 2, title: "Designing the hero, copy, image, and call-to-action" },
    ],
    sectionTitle: "Hero-section critique, tear down and rebuild three SaaS heroes",
    milestones: [
      "Write your hero headline and subhead in plain text first",
      "Sketch 3 hero layouts on paper before opening Figma",
    ],
    assignments: [{ code: "HW3", status: "out", href: "hw/3" }],
  },
  {
    n: 7,
    theme: "App UI, screens, states, and component systems",
    lectures: [
      { n: 1, title: "App UI, navigation, layout, and the screens you always need" },
      { n: 2, title: "Component systems, variants, states, and reuse" },
    ],
    sectionTitle: "Build a five-screen app flow using your component library",
    milestones: [
      "Design a Button component with 4 variants (primary, secondary, ghost, destructive)",
      "Design an Input component with 4 states (default, focus, error, disabled)",
    ],
    assignments: [
      { code: "HW3", status: "due", href: "hw/3" },
      { code: "CAPSTONE", status: "out", href: "hw/capstone" },
    ],
  },
  {
    n: 8,
    theme: "Brand identity, logo, wordmark, and the system",
    lectures: [
      { n: 1, title: "Logos, wordmarks, marks, and lockups" },
      { n: 2, title: "Brand systems beyond the logo" },
    ],
    sectionTitle: "Logo studio, ship three wordmark drafts with peer critique",
    milestones: [
      "Draft 5 wordmark options for your product",
      "Test the chosen wordmark at favicon size (32x32) and at billboard size",
    ],
    assignments: [{ code: "HW4", status: "out", href: "hw/4" }],
  },
  {
    n: 9,
    theme: "Marketing assets and where to legally source them",
    lectures: [
      { n: 1, title: "App Store screenshots, OG images, and the marketing surface" },
      { n: 2, title: "Asset hunting, fonts, icons, photos, illustrations, legally" },
    ],
    sectionTitle: "Asset studio, collect every asset you need for launch",
    milestones: [
      "Choose your icon library (Lucide, Phosphor, or Iconify)",
      "Lock the license for every asset you plan to ship",
    ],
    assignments: [{ code: "HW4", status: "due", href: "hw/4" }],
  },
  {
    n: 10,
    theme: "Synthesis, ship your launch package",
    lectures: [
      { n: 1, title: "Demo day, present your launch package" },
      { n: 2, title: "Design to code, handoff, tokens, and shipping it" },
    ],
    sectionTitle: "Mutual critique, review every classmate's launch package",
    milestones: [
      "Export tokens as CSS variables for handoff",
      "Prepare a 3-minute demo of your launch package",
    ],
    assignments: [{ code: "CAPSTONE", status: "due", href: "hw/capstone" }],
  },
];

function pad(n: number) { return n.toString().padStart(2, "0"); }
function taskIdsForWeek(w: WeekData): string[] {
  const wk = `wk${pad(w.n)}`;
  return [`${wk}:reading`, ...w.lectures.map((l) => `${wk}:slides-l${l.n}`), `${wk}:section`, ...w.milestones.map((_, i) => `${wk}:milestone-${i}`), ...w.assignments.map((a) => `${wk}:asgn-${a.code.toLowerCase()}-${a.status}`)];
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
        <div style={{ width: `${pct}%`, height: "100%", background: "#7253ed", transition: "width 200ms ease" }} />
      </div>
    </div>
  );
}

function WeekBlock({ w }: { w: WeekData }) {
  const wk = `wk${pad(w.n)}`;
  const ids = taskIdsForWeek(w);
  return (
    <section style={WEEK_BLOCK_STYLE}>
      <h2 id={`week-${w.n}`} style={WEEK_HEADER_STYLE}><span>Week {w.n}: {w.theme}</span><WeekProgressBadge ids={ids} /></h2>
      <h3 style={GROUP_HEADER_STYLE}>Reading</h3>
      <div style={GROUP_BODY_STYLE}><Task id={`${wk}:reading`} href={`${base}/readings/${wk}`}>{`Read Week ${w.n}: ${w.theme}`}</Task></div>
      <h3 style={GROUP_HEADER_STYLE}>Slides</h3>
      <div style={GROUP_BODY_STYLE}>
        {w.lectures.map((l) => (
          <Task key={l.n} id={`${wk}:slides-l${l.n}`} href={`${base}/lectures/${wk}-l${l.n}`} pdfHref={`${base}/slides/${wk}-l${l.n}.pdf`}>
            {`Review Lecture ${l.n}: ${l.title}`}
          </Task>
        ))}
      </div>
      <h3 style={GROUP_HEADER_STYLE}>Section</h3>
      <div style={GROUP_BODY_STYLE}><Task id={`${wk}:section`} href={`${base}/sections/${wk}`}>{`Complete section: ${w.sectionTitle}`}</Task></div>
      <h3 style={GROUP_HEADER_STYLE}>Milestones</h3>
      <div style={GROUP_BODY_STYLE}>{w.milestones.map((m, i) => <Task key={i} id={`${wk}:milestone-${i}`}>{m}</Task>)}</div>
      {w.assignments.length > 0 ? (
        <>
          <h3 style={GROUP_HEADER_STYLE}>Assignments</h3>
          <div style={GROUP_BODY_STYLE}>
            {w.assignments.map((a) => (
              <Task key={`${a.code}-${a.status}`} id={`${wk}:asgn-${a.code.toLowerCase()}-${a.status}`} href={`${base}/${a.href}`}>
                {a.status === "out" ? `Start ${a.code}: review brief, plan the sprint` : `Submit ${a.code} deliverables`}
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
