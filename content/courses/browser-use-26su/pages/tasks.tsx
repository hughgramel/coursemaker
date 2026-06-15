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
    theme: "What browser-use is and the loop",
    lectures: [
      { n: 1, title: "Why a browser needs an agent" },
      { n: 2, title: "The loop in three moves" },
    ],
    sectionTitle: "Run and read your first agents",
    milestones: [
      "Install browser-use and set an LLM API key",
      "Run three different plain-English tasks to completion",
      "Read each run's history and narrate what the agent perceived, decided, and did",
    ],
    assignments: [{ code: "HW1", status: "out", href: "hw/1" }],
  },
  {
    n: 2,
    theme: "How an agent sees a page",
    lectures: [
      { n: 1, title: "The DOM, the accessibility tree, and what gets kept" },
      { n: 2, title: "Numbered elements and the vision option" },
    ],
    sectionTitle: "Mapping indices to elements",
    milestones: [
      "Serialize the DOM and selector map for a real page",
      "Match three element indices to the things on screen",
      "Write one paragraph on the DOM-first vs vision tradeoff",
    ],
    assignments: [],
  },
  {
    n: 3,
    theme: "Capturing browser state",
    lectures: [
      { n: 1, title: "BrowserSession and the browser-state summary" },
      { n: 2, title: "Fitting the page into a prompt" },
    ],
    sectionTitle: "Two sessions, two state summaries",
    milestones: [
      "Configure two BrowserSessions (headless vs visible, vision on vs off)",
      "Capture and compare the browser-state summary each produces",
      "Note what got trimmed to fit the context budget",
    ],
    assignments: [
      { code: "HW1", status: "due", href: "hw/1" },
      { code: "HW2", status: "out", href: "hw/2" },
    ],
  },
  {
    n: 4,
    theme: "Structured decisions",
    lectures: [
      { n: 1, title: "Making the model answer in a known shape" },
      { n: 2, title: "Inside AgentOutput" },
    ],
    sectionTitle: "Dissecting AgentOutput",
    milestones: [
      "Capture raw AgentOutput across several steps of one task",
      "Label evaluation, memory, next_goal, and action on one step",
      "Tie an action's element index back to the selector map",
    ],
    assignments: [],
  },
  {
    n: 5,
    theme: "Acting on the page",
    lectures: [
      { n: 1, title: "The tools registry and built-in actions" },
      { n: 2, title: "Dispatch, multi-act, and injection" },
    ],
    sectionTitle: "Following one click through the loop",
    milestones: [
      "Trace one click from AgentOutput through the registry to the page",
      "Record the ActionResult returned to the loop",
      "Identify one injected dependency in an action handler",
    ],
    assignments: [{ code: "HW2", status: "due", href: "hw/2" }],
  },
  {
    n: 6,
    theme: "Custom tools and structured results",
    lectures: [
      { n: 1, title: "Writing a custom action" },
      { n: 2, title: "Structured output and safe inputs" },
    ],
    sectionTitle: "A custom tool with a typed result",
    milestones: [
      "Register one custom @tools.action with typed Pydantic parameters",
      "Add an output_model and verify the returned JSON validates",
      "Restrict with allowed_domains and move a secret into sensitive_data",
    ],
    assignments: [{ code: "HW3", status: "out", href: "hw/3" }],
  },
  {
    n: 7,
    theme: "Driving a real browser",
    lectures: [
      { n: 1, title: "Persistent profiles and real browsers" },
      { n: 2, title: "Multi-tab work and getting data out" },
    ],
    sectionTitle: "Reuse a login across tabs",
    milestones: [
      "Persist a login once with a user_data_dir profile",
      "Run a second agent that reuses the saved session",
      "Complete a task that spans two tabs",
    ],
    assignments: [{ code: "CAPSTONE", status: "out", href: "hw/capstone" }],
  },
  {
    n: 8,
    theme: "Making agents reliable",
    lectures: [
      { n: 1, title: "When agents go wrong" },
      { n: 2, title: "Planning, memory, and task framing" },
    ],
    sectionTitle: "Make a flaky agent reliable",
    milestones: [
      "Reproduce a flaky failure and read it from the history",
      "Add max_steps and max_failures, then reframe the task",
      "Measure the success rate before and after",
    ],
    assignments: [
      { code: "HW3", status: "due", href: "hw/3" },
      { code: "HW4", status: "out", href: "hw/4" },
    ],
  },
  {
    n: 9,
    theme: "Evaluation and ecosystem",
    lectures: [
      { n: 1, title: "Does it actually work? Evaluating web agents" },
      { n: 2, title: "Shipping it: CLI, MCP, cloud, and design philosophy" },
    ],
    sectionTitle: "One task, three ways: a scorecard",
    milestones: [
      "Run one task autonomously, with tighter framing, and as a Playwright baseline",
      "Fill the scorecard: reliability, cost, and effort",
      "Name one prompt-injection risk for your task",
    ],
    assignments: [],
  },
  {
    n: 10,
    theme: "Designing a complete agent",
    lectures: [
      { n: 1, title: "Putting the loop to work" },
      { n: 2, title: "Capstone studio and review" },
    ],
    sectionTitle: "Capstone studio",
    milestones: [
      "Scope the capstone task and write the design document",
      "Build the agent end to end",
      "Run the task-set scorecard and prepare the defense",
    ],
    assignments: [
      { code: "HW4", status: "due", href: "hw/4" },
      { code: "CAPSTONE", status: "due", href: "hw/capstone" },
    ],
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
                {a.status === "out" ? `Start ${a.code}: read the brief and plan` : `Submit ${a.code} deliverables`}
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
    </TasksProvider>
  );
}

export const tasksSearchBody = "Tasks checklist progress reading slides section milestones assignments browser-use weekly";
