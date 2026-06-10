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

// Fill this array as you author the course. Each week generates Reading,
// Slides (2), Section, Milestones, and Assignments tasks automatically.
const weeks: WeekData[] = [
  {
    n: 1,
    theme: "How SWE hiring works and where you fit in it",
    lectures: [
      { n: 1, title: "How SWE hiring actually works" },
      { n: 2, title: "The new-grad pipeline" },
    ],
    sectionTitle: "Target-company-list workshop",
    milestones: [
      "Skim the syllabus and bookmark the calendar",
      "Identify five target companies you would accept an offer from today",
      "Start your master target spreadsheet (30+ rows, tagged by reach and side-door access)",
    ],
    assignments: [{ code: "HW1", status: "out", href: "hw/1" }],
  },
  {
    n: 2,
    theme: "Positioning: resume, GitHub, public artifacts",
    lectures: [
      { n: 1, title: "Resumes that pass two readers" },
      { n: 2, title: "GitHub, LinkedIn, and public artifacts" },
    ],
    sectionTitle: "Resume teardown clinic",
    milestones: [
      "Get your current resume reviewed by one peer",
      "Pin three projects on your GitHub with rewritten READMEs",
      "Pick one public artifact you will ship by week 10",
    ],
    assignments: [],
  },
  {
    n: 3,
    theme: "Coding interviews 1: format and early patterns",
    lectures: [
      { n: 1, title: "The coding interview format" },
      { n: 2, title: "Two-pointer, hash map, sliding window" },
    ],
    sectionTitle: "Pattern sprint 1 (hash map, two pointer, sliding window)",
    milestones: [
      "Solve 5 hash-map mediums with stated complexity",
      "Solve 4 two-pointer or sliding-window mediums",
      "Time at least 3 problems under interview pressure (35-minute cap)",
    ],
    assignments: [
      { code: "HW1", status: "due", href: "hw/1" },
      { code: "HW2", status: "out", href: "hw/2" },
    ],
  },
  {
    n: 4,
    theme: "Coding interviews 2: recursion, trees, graphs",
    lectures: [
      { n: 1, title: "Recursion as a pattern" },
      { n: 2, title: "BFS and DFS in interview shape" },
    ],
    sectionTitle: "Pattern sprint 2 (binary tree, BFS, DFS)",
    milestones: [
      "Solve 4 binary-tree problems (in-order, level-order, path sum)",
      "Solve 4 BFS/DFS problems and defend your choice in each",
      "Practice narrating the recursive call stack out loud",
    ],
    assignments: [],
  },
  {
    n: 5,
    theme: "Coding interviews 3: DP and communication",
    lectures: [
      { n: 1, title: "Dynamic programming without the panic" },
      { n: 2, title: "Communicating while you code" },
    ],
    sectionTitle: "Pattern sprint 3 (DP plus a narrated solve)",
    milestones: [
      "Solve 4 DP mediums (at least one 1D and one 2D)",
      "Record one full narrated solve and watch it back",
      "Identify your weakest pattern from the HW2 sprint and pick a redo list",
    ],
    assignments: [
      { code: "HW2", status: "due", href: "hw/2" },
      { code: "HW3", status: "out", href: "hw/3" },
    ],
  },
  {
    n: 6,
    theme: "System design as a conversation",
    lectures: [
      { n: 1, title: "System design as a conversation" },
      { n: 2, title: "Storage, caching, and scale" },
    ],
    sectionTitle: "System design lab (URL shortener or rate limiter)",
    milestones: [
      "Watch the ByteByteGo URL-shortener walkthrough",
      "Skim the Donne Martin system-design-primer table of contents",
      "Sketch one full design end-to-end on paper before lecture 2",
    ],
    assignments: [{ code: "HW4", status: "out", href: "hw/4" }],
  },
  {
    n: 7,
    theme: "Behavioral and the full loop",
    lectures: [
      { n: 1, title: "Behavioral interviews are pattern matching" },
      { n: 2, title: "The interview loop end to end" },
    ],
    sectionTitle: "STAR story bank workshop",
    milestones: [
      "List 20 candidate story sources from your past 2 years",
      "Read the Amazon Leadership Principles end to end",
      "Schedule a peer full-mock-loop slot for the week 9/10 weekend",
    ],
    assignments: [
      { code: "HW3", status: "due", href: "hw/3" },
      { code: "HW5", status: "out", href: "hw/5" },
      { code: "Capstone", status: "out", href: "hw/capstone" },
    ],
  },
  {
    n: 8,
    theme: "The unconventional path",
    lectures: [
      { n: 1, title: "Open source as resume" },
      { n: 2, title: "Unpaid stints and find-a-problem moves" },
    ],
    sectionTitle: "Triage week (PR, cold emails, or a public artifact)",
    milestones: [
      "Pick the one target company you would kill to work at",
      "Find one open-source project relevant to it and read the contribution guide",
      "Decide your unconventional move: open-source PR, cold-email stint, or find-a-problem artifact",
    ],
    assignments: [{ code: "HW4", status: "due", href: "hw/4" }],
  },
  {
    n: 9,
    theme: "Running and closing the formal pipeline",
    lectures: [
      { n: 1, title: "Recruiters, applications, take-homes, on-sites" },
      { n: 2, title: "Negotiation, leveling, multi-offer dynamics" },
    ],
    sectionTitle: "Pipeline and negotiation lab",
    milestones: [
      "Send 5 referral requests using the week 8 patterns",
      "Compute total comp for a hypothetical 4-year RSU schedule",
      "Pair-rehearse the recruiter pushback (the best-offer script) twice",
    ],
    assignments: [{ code: "HW5", status: "due", href: "hw/5" }],
  },
  {
    n: 10,
    theme: "Capstone: sprint, mock loop, retrospective",
    lectures: [
      { n: 1, title: "The application sprint" },
      { n: 2, title: "Demo day and personal playbook" },
    ],
    sectionTitle: "Mock interview marathon",
    milestones: [
      "Run your one-week sprint (15 applications, 5 referrals, ending in 3 live conversations)",
      "Execute your one unconventional move and surface it to a real human",
      "Record the full mock loop and write your personal hiring playbook",
    ],
    assignments: [{ code: "Capstone", status: "due", href: "hw/capstone" }],
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
