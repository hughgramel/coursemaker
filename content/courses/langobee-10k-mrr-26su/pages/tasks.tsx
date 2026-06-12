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
    theme: "Ground truth",
    lectures: [
      { n: 1, title: "The honest dashboard" },
      { n: 2, title: "LangoBee's funnel, audited" },
    ],
    sectionTitle: "Rebuild the de-alted dashboard from raw queries",
    milestones: [
      "Tag the June bot cohort in an exclusion list",
      "Rebuild signups, activation, return by cohort week (de-alted)",
      "Choose the north-star metric and write its one-paragraph defense",
    ],
    assignments: [{ code: "HW1", status: "out", href: "hw/1" }],
  },
  {
    n: 2,
    theme: "Thesis and pivot discipline",
    lectures: [
      { n: 1, title: "What a thesis is for" },
      { n: 2, title: "Pivot or persevere" },
    ],
    sectionTitle: "Write the fork decision memo (library vs shorts)",
    milestones: [
      "State both hypotheses falsifiably with win conditions",
      "Set kill thresholds, time boxes, and a decision date",
    ],
    assignments: [],
  },
  {
    n: 3,
    theme: "The broken-vacuum bar",
    lectures: [
      { n: 1, title: "Quality is binary" },
      { n: 2, title: "Onboarding to first aha" },
    ],
    sectionTitle: "Run the must-work checklist on phone and laptop",
    milestones: [
      "File every defect found; fix the blocking ones",
      "Ship the 60-second guided first session (ends in a word tap)",
    ],
    assignments: [
      { code: "HW1", status: "due", href: "hw/1" },
      { code: "HW2", status: "out", href: "hw/2" },
    ],
  },
  {
    n: 4,
    theme: "The reason to return",
    lectures: [
      { n: 1, title: "Why they come back" },
      { n: 2, title: "Instrumenting return" },
    ],
    sectionTitle: "Choose the one hook; build the D1 dashboard",
    milestones: [
      "Ship one retention hook end to end (push, email, or streak)",
      "D1/D7 cohort dashboard live, internal accounts excluded",
    ],
    assignments: [],
  },
  {
    n: 5,
    theme: "The 10-user test",
    lectures: [
      { n: 1, title: "Do things that don't scale" },
      { n: 2, title: "Reading tiny cohorts" },
    ],
    sectionTitle: "Write the outreach script and interview guide",
    milestones: [
      "Recruit and concierge-onboard 10-15 real users from Discords",
      "Read D1 against the 30% bar; collect 2+ unprompted quotes",
    ],
    assignments: [{ code: "HW2", status: "due", href: "hw/2" }],
  },
  {
    n: 6,
    theme: "Price as a hypothesis",
    lectures: [
      { n: 1, title: "Pricing is a test of belief" },
      { n: 2, title: "The trial funnel" },
    ],
    sectionTitle: "Draft the WTP script and price-positioning worksheet",
    milestones: [
      "Make trial_started fire end to end, verified in PostHog",
      "Schedule five willingness-to-pay conversations",
    ],
    assignments: [{ code: "HW3", status: "out", href: "hw/3" }],
  },
  {
    n: 7,
    theme: "The first dollar",
    lectures: [
      { n: 1, title: "Paywall placement" },
      { n: 2, title: "Trial to paid" },
    ],
    sectionTitle: "Audit the live paywall; map every upgrade trigger",
    milestones: [
      "Identify the comprehension-score paywall moment",
      "Draft the keep/soften/revisit verdict on premium-only",
    ],
    assignments: [],
  },
  {
    n: 8,
    theme: "The $10K math",
    lectures: [
      { n: 1, title: "Unit economics of $10K" },
      { n: 2, title: "Working backward to traffic" },
    ],
    sectionTitle: "Build and stress-test the MRR model",
    milestones: [
      "Compute subscriber count, churn ceiling, visitor requirement",
      "Compare community-led, creator-led, loop-led scenarios",
      "Set the maximum defensible CAC",
    ],
    assignments: [
      { code: "HW3", status: "due", href: "hw/3" },
      { code: "CAPSTONE", status: "out", href: "hw/capstone" },
    ],
  },
  {
    n: 9,
    theme: "Community launch",
    lectures: [
      { n: 1, title: "Launching where learners live" },
      { n: 2, title: "The launch as an instrument" },
    ],
    sectionTitle: "Draft the launch posts; pre-mortem hostile comments",
    milestones: [
      "Verify the launch-readiness gate (checklist green, D1 recorded)",
      "UTM-tag every link; message-match the landing page",
    ],
    assignments: [{ code: "HW4", status: "out", href: "hw/4" }],
  },
  {
    n: 10,
    theme: "Creators and the 50% question",
    lectures: [
      { n: 1, title: "The creator channel" },
      { n: 2, title: "Partner, sponsor, or affiliate" },
    ],
    sectionTitle: "Build the 50-creator list; write five outreach emails",
    milestones: [
      "Rank prospects from the 2,773 catalogued channels",
      "Write the 50%-partner expected-value memo",
    ],
    assignments: [],
  },
  {
    n: 11,
    theme: "Owned loops",
    lectures: [
      { n: 1, title: "Loops, not funnels" },
      { n: 2, title: "The content engine you already have" },
    ],
    sectionTitle: "Produce and post three clips; define the loop metric",
    milestones: [
      "Stand up one owned channel fed by the clip pipeline",
      "Measure the share loop honestly (K-factor, shares per active)",
    ],
    assignments: [{ code: "HW4", status: "due", href: "hw/4" }],
  },
  {
    n: 12,
    theme: "The operating system",
    lectures: [
      { n: 1, title: "The weekly machine" },
      { n: 2, title: "From here to $10K" },
    ],
    sectionTitle: "Present the operating plan; red-team it",
    milestones: [
      "Run the weekly cadence once end to end",
      "Grade the twelve weeks: proven, killed, still open",
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
