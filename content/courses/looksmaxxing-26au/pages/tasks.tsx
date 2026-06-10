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
    theme: "What the research says, and what you can change",
    lectures: [
      { n: 1, title: "The science of attractiveness" },
      { n: 2, title: "The looksmaxxing landscape and how to read it" },
    ],
    sectionTitle: "Annotate three forum posts",
    milestones: [
      "Course goals written in your own words",
      "Three forum-post claims labeled supported, suggestive, or unfounded",
      "Personal threat-model paragraph: what you can change, what you cannot",
    ],
    assignments: [{ code: "HW1", status: "out", href: "hw/1" }],
  },
  {
    n: 2,
    theme: "Baseline measurement, sleep, and habits",
    lectures: [
      { n: 1, title: "Measuring what you cannot see day to day" },
      { n: 2, title: "Sleep, circadian rhythm, and recovery" },
    ],
    sectionTitle: "Photo station and habit stack",
    milestones: [
      "Week-zero photo set captured (front, side, three-quarter)",
      "Baseline measurements logged (weight, waist, chest, arms)",
      "Sleep window set (consistent wake time, lights-out target)",
      "Habit stack drafted: AM routine anchored to wake-up",
    ],
    assignments: [],
  },
  {
    n: 3,
    theme: "Skincare: the daily lever",
    lectures: [
      { n: 1, title: "Skin biology for the impatient" },
      { n: 2, title: "The four-product routine" },
    ],
    sectionTitle: "Bathroom shelf audit",
    milestones: [
      "Cleanser, moisturizer, sunscreen, and PM treatment chosen and justified",
      "AM routine completed seven days running",
      "PM routine completed seven days running",
      "Sunscreen reapplied on at least three outdoor days",
    ],
    assignments: [{ code: "HW1", status: "due", href: "hw/1" }],
  },
  {
    n: 4,
    theme: "Hair: scalp, loss, styling",
    lectures: [
      { n: 1, title: "Hair biology and the hair-loss conversation" },
      { n: 2, title: "Wash, cut, style" },
    ],
    sectionTitle: "Bring two reference cuts",
    milestones: [
      "Hair type identified",
      "Wash cadence set and held for the week",
      "Two reference photos sourced for next cut",
      "Hair loss decision documented (treat, monitor, see derm)",
    ],
    assignments: [{ code: "HW2", status: "out", href: "hw/2" }],
  },
  {
    n: 5,
    theme: "Body: strength and recomposition",
    lectures: [
      { n: 1, title: "Strength training first principles" },
      { n: 2, title: "Eating for a visible jawline" },
    ],
    sectionTitle: "Write your program, peer review it",
    milestones: [
      "Four-day strength program written with progressive overload built in",
      "Maintenance calories and protein target calculated",
      "Three training sessions completed this week",
      "Protein hit on at least five days",
    ],
    assignments: [{ code: "HW3", status: "out", href: "hw/3" }],
  },
  {
    n: 6,
    theme: "Dental and the jawline conversation",
    lectures: [
      { n: 1, title: "Mouth basics: hygiene, gums, breath" },
      { n: 2, title: "Teeth, alignment, and the jawline myth" },
    ],
    sectionTitle: "Defend your oral hygiene cycle",
    milestones: [
      "Twice-daily brushing held for the full week",
      "Flossing held for the full week",
      "Whitening decision documented (none, OTC strips, in-office, defer)",
      "Three jawline claims critiqued in writing",
    ],
    assignments: [{ code: "HW2", status: "due", href: "hw/2" }],
  },
  {
    n: 7,
    theme: "Style: fit, color, capsule",
    lectures: [
      { n: 1, title: "Fit is the whole game" },
      { n: 2, title: "Color, context, capsule wardrobe" },
    ],
    sectionTitle: "Closet audit and cull",
    milestones: [
      "Every top in your closet photographed and scored for fit",
      "Cull list written and bag packed for donation or tailor",
      "Undertone and contrast level identified",
      "Five-look capsule sketched on paper",
    ],
    assignments: [
      { code: "HW4", status: "out", href: "hw/4" },
      { code: "CAPSTONE", status: "out", href: "hw/capstone" },
    ],
  },
  {
    n: 8,
    theme: "Grooming and finishing",
    lectures: [
      { n: 1, title: "Beards, stubble, and the eyebrow line" },
      { n: 2, title: "Fragrance, hands, and details" },
    ],
    sectionTitle: "Grooming kit show-and-tell",
    milestones: [
      "Beard or stubble shape chosen for your face shape",
      "Eyebrow tidy performed without overplucking",
      "Starter fragrance picked for daily wear",
      "Three grooming-kit swaps identified",
    ],
    assignments: [{ code: "HW3", status: "due", href: "hw/3" }],
  },
  {
    n: 9,
    theme: "Posture, gait, photography",
    lectures: [
      { n: 1, title: "Standing tall: posture and gait" },
      { n: 2, title: "On being photographed" },
    ],
    sectionTitle: "Film, review, fix",
    milestones: [
      "Standing posture filmed and analyzed",
      "Walking gait filmed and analyzed",
      "Five-minute daily mobility routine adopted",
      "New weekly photo set captured with better angle and lighting",
    ],
    assignments: [{ code: "HW4", status: "due", href: "hw/4" }],
  },
  {
    n: 10,
    theme: "Mental health and the long game",
    lectures: [
      { n: 1, title: "Body dysmorphia and the rabbit hole" },
      { n: 2, title: "Demo day and your twelve-week plan" },
    ],
    sectionTitle: "Before, after, plan",
    milestones: [
      "Week-zero and week-ten photos placed side by side",
      "Measurement deltas written down honestly",
      "Twelve-week plan drafted across all seven pillars",
      "Five-minute before-and-after presentation delivered",
      "Personal warning signs for the comparison trap written down",
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
