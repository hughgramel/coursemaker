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

function TasksProvider({
  totalCount,
  children,
}: {
  totalCount: number;
  children: ReactNode;
}) {
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
    if (!confirm("Clear ALL task progress for this course? This cannot be undone."))
      return;
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
      <svg
        width={CHECK_SIZE}
        height={CHECK_SIZE}
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
      >
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
  const labelAsString =
    typeof children === "string" ? children : "Task";
  return (
    <div style={rowStyle}>
      <CircleCheckbox
        checked={isDone}
        onChange={() => toggle(id)}
        label={labelAsString}
      />
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
  mission: string;
  lectures: { n: 1 | 2; title: string }[];
  sectionTitle: string;
  milestones: string[];
  assignments: { code: string; status: "out" | "due"; href: string }[];
}

const weeks: WeekData[] = [
  {
    n: 1,
    theme: "The B2C funnel",
    mission: "Make your funnel honest.",
    lectures: [
      { n: 1, title: "The B2C funnel" },
      { n: 2, title: "Reading metrics honestly" },
    ],
    sectionTitle: "Wire your funnel",
    milestones: [
      "PostHog (or equivalent) installed and verified with a test event",
      "One activation event firing in production",
      "Single-screen dashboard live (acquisition, install, activation, paid)",
      "First MRR number written in founder journal",
    ],
    assignments: [{ code: "HW1", status: "out", href: "hw/1" }],
  },
  {
    n: 2,
    theme: "Activation",
    mission: "Cut your time to first value in half.",
    lectures: [
      { n: 1, title: "Activation" },
      { n: 2, title: "Onboarding teardown" },
    ],
    sectionTitle: "Activation audit",
    milestones: [
      "Activation rate measured from real 30 day data",
      "Own onboarding walked end to end on a fresh device, with screenshots",
      "One activation experiment shipped",
      "Three teardown notes (category leader, indie hit, your product)",
    ],
    assignments: [{ code: "HW1", status: "due", href: "hw/1" }],
  },
  {
    n: 3,
    theme: "Pricing and paywall",
    mission: "Pick a price that someone will pay this week.",
    lectures: [
      { n: 1, title: "Pricing for B2C" },
      { n: 2, title: "Paywall design" },
    ],
    sectionTitle: "Pricing experiment",
    milestones: [
      "1 page pricing brief (model, anchor, trial mechanics, placement)",
      "Paywall live in production (hard, soft, or metered)",
      "Stripe, RevenueCat, or IAP wired to a working test purchase",
      "First $1 of new MRR, or a written explanation of why no one bought",
    ],
    assignments: [{ code: "HW2", status: "out", href: "hw/2" }],
  },
  {
    n: 4,
    theme: "Retention",
    mission: "Make your retention curve smile.",
    lectures: [
      { n: 1, title: "Retention" },
      { n: 2, title: "Cohort analysis" },
    ],
    sectionTitle: "Build a cohort chart",
    milestones: [
      "Cohort table showing D1, D7, D30 by signup week",
      "Retention curve shape named in writing",
      "Power user query (top 5% behavior)",
      "One retention intervention shipped (push, in-app, email, or product)",
    ],
    assignments: [{ code: "HW2", status: "due", href: "hw/2" }],
  },
  {
    n: 5,
    theme: "Experimentation and release",
    mission: "Build the loop that lets you ship 10x without breaking 10x.",
    lectures: [
      { n: 1, title: "A/B testing rigor" },
      { n: 2, title: "Release management" },
    ],
    sectionTitle: "Design one A/B test",
    milestones: [
      "Feature flag system installed",
      "One real A/B test running, or a written 'why I am not testing this' memo",
      "CI/CD pipeline auto deploys on green main",
      "Rollback runbook (1 page, 5 minute drill)",
      "Mid course pivot or persevere check completed",
    ],
    assignments: [],
  },
  {
    n: 6,
    theme: "Wedge channel and SEO",
    mission: "Commit to ONE growth channel for the rest of the course.",
    lectures: [
      { n: 1, title: "Picking a wedge channel" },
      { n: 2, title: "SEO and content engines" },
    ],
    sectionTitle: "Channel fit worksheet",
    milestones: [
      "Channel fit worksheet: 5 channels scored, 1 picked, documented",
      "Public commitment to the chosen channel",
      "GSC and Bing Webmaster verified; sitemap submitted (or channel equivalent)",
      "Lighthouse article drafted (about 2k words) or channel equivalent piece",
      "Topic cluster map: 1 lighthouse plus 8 to 12 supporting pages identified",
    ],
    assignments: [{ code: "HW3", status: "out", href: "hw/3" }],
  },
  {
    n: 7,
    theme: "Social, virality, paid",
    mission: "Bake one growth loop into the product itself.",
    lectures: [
      { n: 1, title: "Social and virality" },
      { n: 2, title: "Paid acquisition basics" },
    ],
    sectionTitle: "Write one viral asset",
    milestones: [
      "One viral asset shipped into the product",
      "Growth loop diagram (one page)",
      "CAC ceiling computed and written down",
      "Paid: $50 to $200 test spend with measured CAC, or a written 'why not yet' memo",
    ],
    assignments: [{ code: "HW3", status: "due", href: "hw/3" }],
  },
  {
    n: 8,
    theme: "App stores and ASO",
    mission: "Ship to a store (or commit to PWA) with a real release pipeline.",
    lectures: [
      { n: 1, title: "App store mechanics" },
      { n: 2, title: "ASO and screenshots" },
    ],
    sectionTitle: "Ship to the stores",
    milestones: [
      "TestFlight, Play internal testing, or PWA install prompt live",
      "Title, subtitle, keywords rewritten with ASO intent and cited evidence",
      "5 conversion optimized screenshots in store listing",
      "Capstone scaffold started (funnel, problem, interventions)",
    ],
    assignments: [{ code: "HW4", status: "out", href: "hw/4" }],
  },
  {
    n: 9,
    theme: "Lifecycle and referral",
    mission: "Wire the messages that bring people back without you doing the work.",
    lectures: [
      { n: 1, title: "Lifecycle messaging" },
      { n: 2, title: "Referral loops" },
    ],
    sectionTitle: "Wire one lifecycle email",
    milestones: [
      "Triggered welcome email or push live with measured open and click",
      "One additional lifecycle message live (day 3, churn risk, or win back)",
      "Referral mechanism shipped (a share button counts if measured)",
      "Capstone draft v1: 4 sections complete",
    ],
    assignments: [{ code: "HW4", status: "due", href: "hw/4" }],
  },
  {
    n: 10,
    theme: "Synthesis: path to $10k",
    mission: "Defend the single highest leverage move for your next 30 days.",
    lectures: [
      { n: 1, title: "Diagnosing stalled MRR" },
      { n: 2, title: "Past $10k: what changes" },
    ],
    sectionTitle: "Stall diagnosis clinic",
    milestones: [
      "Funnel diagram with REAL numbers",
      "Diagnosed quadrant (leak, ceiling, price, or channel) with evidence",
      "30 day intervention plan (metric, target, deadline)",
      "Measurement design and rollback criterion written",
      "5 minute presented defense delivered in the clinic",
    ],
    assignments: [{ code: "Capstone", status: "due", href: "hw/capstone" }],
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
    ...w.milestones.map((_, i) => `${wk}:milestone-${i}`),
    ...w.assignments.map((a) => `${wk}:asgn-${a.code.toLowerCase()}-${a.status}`),
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
    <div
      style={{
        margin: "1rem 0 2rem 0",
        padding: 0,
      }}
    >
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

const MISSION_STYLE: CSSProperties = {
  fontSize: "0.8125rem",
  color: "#666",
  margin: "0 0 0.5rem 0",
};

const WEEK_BLOCK_STYLE: CSSProperties = {
  marginBottom: "2rem",
  paddingLeft: "1rem",
  borderLeft: "2px solid #ececec",
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
      <p style={MISSION_STYLE}>Mission: {w.mission}</p>

      <h3 style={GROUP_HEADER_STYLE}>Reading</h3>
      <div style={GROUP_BODY_STYLE}>
        <Task id={`${wk}:reading`} href={`${base}/readings/${wk}`}>
          {`Read Week ${w.n}: ${w.theme}`}
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
          {`Complete section: ${w.sectionTitle}`}
        </Task>
      </div>

      <h3 style={GROUP_HEADER_STYLE}>Milestones</h3>
      <div style={GROUP_BODY_STYLE}>
        {w.milestones.map((m, i) => (
          <Task key={i} id={`${wk}:milestone-${i}`}>
            {m}
          </Task>
        ))}
      </div>

      {w.assignments.length > 0 ? (
        <>
          <h3 style={GROUP_HEADER_STYLE}>Assignments</h3>
          <div style={GROUP_BODY_STYLE}>
            {w.assignments.map((a) => (
              <Task
                key={`${a.code}-${a.status}`}
                id={`${wk}:asgn-${a.code.toLowerCase()}-${a.status}`}
                href={`${base}/${a.href}`}
              >
                {a.status === "out"
                  ? `Start ${a.code}: review brief, plan the sprint`
                  : `Submit ${a.code} deliverables`}
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
  "Tasks checklist progress reading slides section milestones assignments week by week";
