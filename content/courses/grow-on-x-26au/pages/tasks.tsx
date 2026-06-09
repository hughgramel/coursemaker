"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;
const STORAGE_KEY = `${config.slug}:tasks`;

type DoneMap = Record<string, true>;

interface TasksCtx {
  done: DoneMap;
  toggle: (id: string) => void;
  reset: () => void;
  totalCount: number;
  doneCount: number;
}

const Ctx = createContext<TasksCtx | null>(null);

function useTasks(): TasksCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("Task used outside TasksProvider");
  return ctx;
}

function TasksProvider({ totalCount, children }: { totalCount: number; children: ReactNode }) {
  const [done, setDone] = useState<DoneMap>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw) as DoneMap);
    } catch {
      /* ignore */
    }
  }, []);

  const persist = useCallback((next: DoneMap) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(
    (id: string) => {
      setDone((prev) => {
        const next: DoneMap = { ...prev };
        if (next[id]) delete next[id];
        else next[id] = true;
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const reset = useCallback(() => {
    if (!confirm("Clear ALL task progress for this course? This cannot be undone.")) return;
    setDone({});
    persist({});
  }, [persist]);

  const value: TasksCtx = useMemo(
    () => ({
      done,
      toggle,
      reset,
      totalCount,
      doneCount: Object.keys(done).length,
    }),
    [done, toggle, reset, totalCount],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

const CHECK_SIZE = 18;

function CircleCheckbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={onChange}
      style={{
        appearance: "none",
        background: "transparent",
        border: 0,
        padding: 0,
        margin: 0,
        cursor: "pointer",
        width: `${CHECK_SIZE}px`,
        height: `${CHECK_SIZE}px`,
        flex: "0 0 auto",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "0.18rem",
        marginRight: "0.625rem",
      }}
    >
      <svg width={CHECK_SIZE} height={CHECK_SIZE} viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle
          cx="9"
          cy="9"
          r="8"
          stroke={checked ? "#7253ed" : "#c2c2c2"}
          strokeWidth="1.5"
          fill={checked ? "#7253ed" : "transparent"}
        />
        {checked ? (
          <path
            d="M5.25 9.5 L7.75 12 L12.75 6.5"
            stroke="#ffffff"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : null}
      </svg>
    </button>
  );
}

const GROUP_HEADER_STYLE: CSSProperties = {
  fontSize: "0.6875rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#666",
  margin: "1.25rem 0 0.375rem 0",
  padding: 0,
};

const TASK_ROW_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  padding: "0.4rem 0",
  lineHeight: 1.45,
  transition: "opacity 120ms ease",
};

function Task({
  id,
  children,
  href,
  pdfHref,
}: {
  id: string;
  children: ReactNode;
  href?: string;
  pdfHref?: string;
}) {
  const { done, toggle } = useTasks();
  const isDone = !!done[id];
  const rowStyle: CSSProperties = {
    ...TASK_ROW_STYLE,
    opacity: isDone ? 0.45 : 1,
    textDecoration: isDone ? "line-through" : "none",
    textDecorationColor: isDone ? "#666" : undefined,
  };
  const labelAsString = typeof children === "string" ? children : "Task";
  return (
    <div style={rowStyle}>
      <CircleCheckbox checked={isDone} onChange={() => toggle(id)} label={labelAsString} />
      <div style={{ flex: "1 1 auto", minWidth: 0 }}>
        {href ? <a href={href}>{children}</a> : <span>{children}</span>}
        {pdfHref ? (
          <>
            {" "}
            <span style={{ color: "#bbb" }}>·</span>{" "}
            <a href={pdfHref}>PDF</a>
          </>
        ) : null}
      </div>
    </div>
  );
}

interface WeekData {
  n: number;
  theme: string;
  lectures: { n: 1 | 2; title: string }[];
  sectionTitle: string;
  assignments: { code: string; verb: "Start" | "Submit" | "Present at section: Capstone demo day"; what: string; href: string }[];
}

const weeks: WeekData[] = [
  {
    n: 1,
    theme: "Foundations",
    lectures: [
      { n: 1, title: "The follower funnel" },
      { n: 2, title: "Niche, voice, and bio craft" },
    ],
    sectionTitle: "Audit five accounts in your niche",
    assignments: [
      { code: "HW1", verb: "Start", what: "Define your niche and rewrite your bio", href: "hw/1" },
    ],
  },
  {
    n: 2,
    theme: "Core mechanics: writing",
    lectures: [
      { n: 1, title: "Anatomy of a hook" },
      { n: 2, title: "Post formats and when each wins" },
    ],
    sectionTitle: "Hook lab (twenty hooks)",
    assignments: [
      { code: "HW1", verb: "Submit", what: "Niche and bio rewrite", href: "hw/1" },
      { code: "HW2", verb: "Start", what: "Ship twenty posts in seven days", href: "hw/2" },
    ],
  },
  {
    n: 3,
    theme: "Core mechanics: distribution",
    lectures: [
      { n: 1, title: "How posts spread on X" },
      { n: 2, title: "The reply game and reaching out first" },
    ],
    sectionTitle: "Reply sprint (10 replies, 5 DMs)",
    assignments: [
      { code: "HW2", verb: "Submit", what: "Twenty posts in seven days", href: "hw/2" },
    ],
  },
  {
    n: 4,
    theme: "Composition",
    lectures: [
      { n: 1, title: "Content calendars and batching" },
      { n: 2, title: "Collaboration and the network" },
    ],
    sectionTitle: "Build your weekly system",
    assignments: [
      { code: "HW3",      verb: "Start", what: "Run your weekly system for two weeks", href: "hw/3" },
      { code: "Capstone", verb: "Start", what: "90 day playbook (early scaffolding)", href: "hw/capstone" },
    ],
  },
  {
    n: 5,
    theme: "Frontier: analytics",
    lectures: [
      { n: 1, title: "What to measure" },
      { n: 2, title: "Testing and iterating" },
    ],
    sectionTitle: "Read your analytics (classify top 10 posts)",
    assignments: [
      { code: "HW3", verb: "Submit", what: "Weekly system run", href: "hw/3" },
      { code: "HW4", verb: "Start",  what: "Your thirty day growth experiment", href: "hw/4" },
    ],
  },
  {
    n: 6,
    theme: "Synthesis",
    lectures: [
      { n: 1, title: "The 10k roadmap" },
      { n: 2, title: "Sustainable growth and life after 10k" },
    ],
    sectionTitle: "Capstone demo day",
    assignments: [
      { code: "HW4",      verb: "Submit", what: "Design and week 1 data",        href: "hw/4" },
      { code: "Capstone", verb: "Submit", what: "90 day playbook",                href: "hw/capstone" },
    ],
  },
];

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function taskIdsForWeek(w: WeekData): string[] {
  const wk = `wk${pad(w.n)}`;
  return [
    `${wk}:reading`,
    ...w.lectures.map((l) => `${wk}:slides-l${l.n}`),
    `${wk}:section`,
    ...w.assignments.map((a, i) => `${wk}:asgn-${a.code.toLowerCase()}-${a.verb.toLowerCase()}-${i}`),
  ];
}

const ALL_IDS: string[] = weeks.flatMap(taskIdsForWeek);

function WeekProgressBadge({ ids }: { ids: string[] }) {
  const { done } = useTasks();
  const total = ids.length;
  const completed = ids.filter((id) => done[id]).length;
  return (
    <span
      style={{
        fontSize: "0.75rem",
        fontWeight: 600,
        color: "#888",
        marginLeft: "0.5rem",
        whiteSpace: "nowrap",
      }}
    >
      {completed} / {total}
    </span>
  );
}

function OverallProgress() {
  const { doneCount, totalCount, reset } = useTasks();
  const pct = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100);
  return (
    <div style={{ margin: "1rem 0 2rem 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "0.5rem",
        }}
      >
        <div style={{ fontSize: "0.875rem", fontWeight: 700 }}>
          {doneCount} of {totalCount} complete ({pct}%)
        </div>
        <button
          type="button"
          onClick={reset}
          style={{
            background: "transparent",
            border: 0,
            padding: 0,
            color: "#7253ed",
            fontSize: "0.8125rem",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          reset all
        </button>
      </div>
      <div
        style={{
          height: "6px",
          background: "#ececec",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: "#7253ed",
            transition: "width 200ms ease",
          }}
        />
      </div>
    </div>
  );
}

const WEEK_HEADER_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: "0.5rem",
  margin: "0 0 0.25rem 0",
  fontSize: "1.0625rem",
  fontWeight: 800,
  letterSpacing: "-0.005em",
};

const WEEK_BLOCK_STYLE: CSSProperties = {
  marginBottom: "2rem",
};

const GROUP_BODY_STYLE: CSSProperties = {
  paddingLeft: "0.25rem",
};

function WeekBlock({ w }: { w: WeekData }) {
  const wk = `wk${pad(w.n)}`;
  const ids = taskIdsForWeek(w);

  return (
    <section style={WEEK_BLOCK_STYLE}>
      <h2 id={`week-${w.n}`} style={WEEK_HEADER_STYLE}>
        <span>Week {w.n}: {w.theme}</span>
        <WeekProgressBadge ids={ids} />
      </h2>

      <h3 style={GROUP_HEADER_STYLE}>Reading</h3>
      <div style={GROUP_BODY_STYLE}>
        <Task id={`${wk}:reading`} href={`${base}/readings/${wk}`}>
          {`Read Week ${w.n} reading`}
        </Task>
      </div>

      <h3 style={GROUP_HEADER_STYLE}>Slides</h3>
      <div style={GROUP_BODY_STYLE}>
        {w.lectures.map((l) => (
          <Task
            key={l.n}
            id={`${wk}:slides-l${l.n}`}
            href={`${base}/lectures/${wk}-l${l.n}`}
            pdfHref={`${base}/slides/${wk}-l${l.n}.pdf`}
          >
            {`Review Lecture ${l.n}: ${l.title}`}
          </Task>
        ))}
      </div>

      <h3 style={GROUP_HEADER_STYLE}>Section</h3>
      <div style={GROUP_BODY_STYLE}>
        <Task id={`${wk}:section`} href={`${base}/sections/${wk}`}>
          {w.n === 6
            ? `Present at section: ${w.sectionTitle}`
            : `Complete section: ${w.sectionTitle}`}
        </Task>
      </div>

      {w.assignments.length > 0 ? (
        <>
          <h3 style={GROUP_HEADER_STYLE}>Assignments</h3>
          <div style={GROUP_BODY_STYLE}>
            {w.assignments.map((a, i) => (
              <Task
                key={i}
                id={`${wk}:asgn-${a.code.toLowerCase()}-${a.verb.toLowerCase()}-${i}`}
                href={`${base}/${a.href}`}
              >
                {`${a.verb} ${a.code}: ${a.what}`}
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
        Track your progress through the course. Tick off each reading, slide
        deck, section, and assignment as you finish it. Progress saves in your
        browser&rsquo;s local storage on this device. Use the reset link
        above to start over.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        {weeks.map((w) => (
          <WeekBlock key={w.n} w={w} />
        ))}
      </div>

      <p style={{ marginTop: "2rem", fontSize: "0.8125rem", color: "#888" }}>
        Storage key: <code>{STORAGE_KEY}</code>. Clearing your browser storage
        resets every checkbox. Tasks are tracked per device.
      </p>
    </TasksProvider>
  );
}

export const tasksSearchBody =
  "Tasks checklist progress reading slides section assignments week by week";
