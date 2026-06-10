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

const STORAGE_KEY = `${config.slug}:habits`;

type Cadence = "daily" | "weekly";

interface HabitDef {
  id: string;
  label: string;
  detail?: string;
  cadence: Cadence;
}

interface HabitGroup {
  name: string;
  intro: string;
  habits: HabitDef[];
}

const GROUPS: HabitGroup[] = [
  {
    name: "Daily honesty",
    intro:
      "The habit that catches every other habit. Skip these and the rest become performance.",
    habits: [
      {
        id: "honesty-mirror",
        label: "Mirror check without flinching",
        detail: "Front, side, three-quarter. Twenty seconds each. Name what you see.",
        cadence: "daily",
      },
      {
        id: "honesty-journal",
        label: "Log one win and one thing you avoided",
        detail: "One sentence each. Notes app or paper.",
        cadence: "daily",
      },
      {
        id: "honesty-no-doomscroll",
        label: "No comparison-spiral scrolling on looksmaxxing forums",
        detail: "Looksmax.org, r/looksmaxxing, comparison-bait TikTok. Zero minutes.",
        cadence: "daily",
      },
    ],
  },
  {
    name: "Skin and grooming",
    intro:
      "The compounding lever. Skin and grooming work over months, not days. Daily consistency is the whole game.",
    habits: [
      {
        id: "skin-am",
        label: "AM routine (cleanser, moisturizer, sunscreen)",
        detail: "SPF 30 minimum, two-finger length on the face and neck.",
        cadence: "daily",
      },
      {
        id: "skin-pm",
        label: "PM routine (cleanser, treatment, moisturizer)",
        detail: "Retinoid pea-size if tolerated, otherwise just moisturizer.",
        cadence: "daily",
      },
      {
        id: "skin-spf-reapply",
        label: "Sunscreen reapply if outdoors longer than two hours",
        detail: "Stick or spray in your bag.",
        cadence: "daily",
      },
      {
        id: "groom-beard",
        label: "Beard or stubble trim on your set cadence",
        detail: "Stubble every 2 to 3 days; longer beards weekly.",
        cadence: "weekly",
      },
      {
        id: "groom-brows",
        label: "Eyebrow tidy",
        detail: "Strays only. Preserve the natural shape. No overplucking.",
        cadence: "weekly",
      },
    ],
  },
  {
    name: "Hair",
    intro:
      "Scalp health and styling. If you are treating loss, this is also where adherence matters most.",
    habits: [
      {
        id: "hair-wash",
        label: "Wash at your hair-type cadence (not every day for most)",
        detail: "Type 1 and 2: every 2 to 3 days. Type 3 and 4: less often.",
        cadence: "daily",
      },
      {
        id: "hair-style",
        label: "Style before leaving the house",
        detail: "Three minutes. Product, direction, dry.",
        cadence: "daily",
      },
      {
        id: "hair-minox",
        label: "Topical minoxidil twice daily, if prescribed",
        detail: "1 mL AM, 1 mL PM, dry scalp. Skip if not on a regimen.",
        cadence: "daily",
      },
    ],
  },
  {
    name: "Dental",
    intro: "Cheapest visible improvement you can make. Hold the floor every day.",
    habits: [
      {
        id: "dental-brush-am",
        label: "Brush AM (two minutes, soft brush, fluoride)",
        cadence: "daily",
      },
      {
        id: "dental-brush-pm",
        label: "Brush PM",
        cadence: "daily",
      },
      {
        id: "dental-floss",
        label: "Floss",
        detail: "Once per day. Cochrane says it matters; the brand of floss does not.",
        cadence: "daily",
      },
      {
        id: "dental-tongue",
        label: "Tongue scrape",
        detail: "Two passes. Halitosis lives here.",
        cadence: "daily",
      },
    ],
  },
  {
    name: "Body",
    intro:
      "Strength sessions are weekly counters. Sleep, protein, and steps are daily. Recomposition is a ten-week story; show up daily.",
    habits: [
      {
        id: "body-training",
        label: "Strength session",
        detail: "Four times this week. Track sets, reps, load.",
        cadence: "weekly",
      },
      {
        id: "body-protein",
        label: "Hit protein target (about 0.8 g per pound bodyweight)",
        cadence: "daily",
      },
      {
        id: "body-steps",
        label: "Ten thousand steps or thirty-minute walk",
        cadence: "daily",
      },
      {
        id: "body-mobility",
        label: "Five-minute mobility routine",
        detail: "Hip flexors, thoracic spine, chest opener.",
        cadence: "daily",
      },
      {
        id: "body-sleep",
        label: "Sleep seven to nine hours with consistent wake time",
        detail: "Wake-time discipline matters more than bedtime discipline.",
        cadence: "daily",
      },
    ],
  },
  {
    name: "Style and presentation",
    intro:
      "Free visible wins, every single day. Get the daily decisions right and the wardrobe earns its keep.",
    habits: [
      {
        id: "style-fit",
        label: "Wear something that actually fits",
        detail: "Shoulder seam at your shoulder, no accidental oversize.",
        cadence: "daily",
      },
      {
        id: "style-color",
        label: "Outfit color check (max three colors plus neutrals)",
        cadence: "daily",
      },
      {
        id: "style-shoes",
        label: "Shoes clean and appropriate for the fit",
        detail: "Wipe-down or polish before leaving. Match formality to the outfit.",
        cadence: "daily",
      },
      {
        id: "style-accessories",
        label: "Accessory check (watch, bag, glasses) before leaving",
        detail: "Pick one focal piece, do not stack four.",
        cadence: "daily",
      },
      {
        id: "style-posture",
        label: "Posture check three times today",
        detail: "Stand tall, chest open, chin level. Set a phone reminder if needed.",
        cadence: "daily",
      },
    ],
  },
  {
    name: "Weekly",
    intro: "Sunday rituals. Run them and the next week takes care of itself.",
    habits: [
      {
        id: "weekly-photos",
        label: "Sunday photos at the photo station",
        detail: "Front, side, three-quarter. Same lighting, same distance, same time.",
        cadence: "weekly",
      },
      {
        id: "weekly-measure",
        label: "Sunday measurements (weight, waist, chest, arms)",
        detail: "Morning, after the bathroom, before food.",
        cadence: "weekly",
      },
      {
        id: "weekly-wardrobe",
        label: "Wardrobe rotation refresh",
        detail: "Pull the week's five outfits out the night before Monday.",
        cadence: "weekly",
      },
      {
        id: "weekly-plan",
        label: "Plan workouts and meals for the week",
        detail: "Four training slots, grocery list, protein per meal.",
        cadence: "weekly",
      },
    ],
  },
];

const ALL_HABITS: HabitDef[] = GROUPS.flatMap((g) => g.habits);
const DAILY_HABITS: HabitDef[] = ALL_HABITS.filter((h) => h.cadence === "daily");
const WEEKLY_HABITS: HabitDef[] = ALL_HABITS.filter((h) => h.cadence === "weekly");

type CheckMap = Record<string, true>;
interface HabitState {
  dayKey: string;
  weekKey: string;
  daily: CheckMap;
  weekly: CheckMap;
  dailyHistory: Record<string, number>;
  weeklyHistory: Record<string, number>;
}

const EMPTY_STATE: HabitState = {
  dayKey: "",
  weekKey: "",
  daily: {},
  weekly: {},
  dailyHistory: {},
  weeklyHistory: {},
};

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function isoWeekKey(): string {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  const yearStart = new Date(d.getFullYear(), 0, 1);
  const weekNum = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${d.getFullYear()}-W${String(weekNum).padStart(2, "0")}`;
}

interface HabitsCtx {
  state: HabitState;
  toggleDaily: (id: string) => void;
  toggleWeekly: (id: string) => void;
  resetToday: () => void;
  resetThisWeek: () => void;
  resetAll: () => void;
  hydrated: boolean;
}

const Ctx = createContext<HabitsCtx | null>(null);

function useHabits(): HabitsCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error("useHabits outside provider");
  return c;
}

function HabitsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<HabitState>(EMPTY_STATE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const dk = todayKey();
    const wk = isoWeekKey();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const prev = JSON.parse(raw) as HabitState;
        const dailyHistory = { ...prev.dailyHistory };
        const weeklyHistory = { ...prev.weeklyHistory };
        if (prev.dayKey && prev.dayKey !== dk) {
          dailyHistory[prev.dayKey] = Object.keys(prev.daily).length;
        }
        if (prev.weekKey && prev.weekKey !== wk) {
          weeklyHistory[prev.weekKey] = Object.keys(prev.weekly).length;
        }
        const next: HabitState = {
          dayKey: dk,
          weekKey: wk,
          daily: prev.dayKey === dk ? prev.daily : {},
          weekly: prev.weekKey === wk ? prev.weekly : {},
          dailyHistory,
          weeklyHistory,
        };
        setState(next);
      } else {
        setState({ ...EMPTY_STATE, dayKey: dk, weekKey: wk });
      }
    } catch {
      setState({ ...EMPTY_STATE, dayKey: dk, weekKey: wk });
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: HabitState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const toggleDaily = useCallback(
    (id: string) => {
      setState((prev) => {
        const daily: CheckMap = { ...prev.daily };
        if (daily[id]) delete daily[id];
        else daily[id] = true;
        const next = { ...prev, daily };
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const toggleWeekly = useCallback(
    (id: string) => {
      setState((prev) => {
        const weekly: CheckMap = { ...prev.weekly };
        if (weekly[id]) delete weekly[id];
        else weekly[id] = true;
        const next = { ...prev, weekly };
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const resetToday = useCallback(() => {
    if (!confirm("Reset today's daily habits?")) return;
    setState((prev) => {
      const next = { ...prev, daily: {} };
      persist(next);
      return next;
    });
  }, [persist]);

  const resetThisWeek = useCallback(() => {
    if (!confirm("Reset this week's weekly habits?")) return;
    setState((prev) => {
      const next = { ...prev, weekly: {} };
      persist(next);
      return next;
    });
  }, [persist]);

  const resetAll = useCallback(() => {
    if (!confirm("Erase ALL habit history including past days and weeks? This cannot be undone."))
      return;
    setState((prev) => {
      const next: HabitState = {
        ...prev,
        daily: {},
        weekly: {},
        dailyHistory: {},
        weeklyHistory: {},
      };
      persist(next);
      return next;
    });
  }, [persist]);

  const value: HabitsCtx = useMemo(
    () => ({ state, toggleDaily, toggleWeekly, resetToday, resetThisWeek, resetAll, hydrated }),
    [state, toggleDaily, toggleWeekly, resetToday, resetThisWeek, resetAll, hydrated],
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

const GROUP_NAME_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: "0.5rem",
  margin: "1.5rem 0 0.25rem 0",
  fontSize: "1.0625rem",
  fontWeight: 800,
  letterSpacing: "-0.005em",
};

const GROUP_INTRO_STYLE: CSSProperties = {
  fontSize: "0.8125rem",
  color: "#666",
  margin: "0 0 0.75rem 0",
};

function HabitRow({ habit }: { habit: HabitDef }) {
  const { state, toggleDaily, toggleWeekly, hydrated } = useHabits();
  const checked = hydrated && (habit.cadence === "daily" ? !!state.daily[habit.id] : !!state.weekly[habit.id]);
  const toggle = habit.cadence === "daily" ? toggleDaily : toggleWeekly;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        padding: "0.4rem 0",
        lineHeight: 1.45,
        opacity: checked ? 0.5 : 1,
        textDecoration: checked ? "line-through" : "none",
        textDecorationColor: checked ? "#666" : undefined,
        transition: "opacity 120ms ease",
      }}
    >
      <CircleCheckbox checked={checked} onChange={() => toggle(habit.id)} label={habit.label} />
      <div style={{ flex: "1 1 auto", minWidth: 0 }}>
        <div>{habit.label}</div>
        {habit.detail ? (
          <div style={{ fontSize: "0.8125rem", color: "#888", marginTop: "0.125rem" }}>{habit.detail}</div>
        ) : null}
      </div>
    </div>
  );
}

function GroupBadge({ habits }: { habits: HabitDef[] }) {
  const { state, hydrated } = useHabits();
  if (!hydrated) return null;
  const total = habits.length;
  const done = habits.filter((h) =>
    h.cadence === "daily" ? state.daily[h.id] : state.weekly[h.id],
  ).length;
  return (
    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#888", whiteSpace: "nowrap" }}>
      {done} / {total}
    </span>
  );
}

function HeaderSummary() {
  const { state, resetToday, resetThisWeek, hydrated } = useHabits();
  const dailyDone = hydrated ? Object.keys(state.daily).length : 0;
  const dailyTotal = DAILY_HABITS.length;
  const weeklyDone = hydrated ? Object.keys(state.weekly).length : 0;
  const weeklyTotal = WEEKLY_HABITS.length;
  const dailyPct = dailyTotal === 0 ? 0 : Math.round((dailyDone / dailyTotal) * 100);
  const weeklyPct = weeklyTotal === 0 ? 0 : Math.round((weeklyDone / weeklyTotal) * 100);
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
          Today: {dailyDone} of {dailyTotal} daily ({dailyPct}%)
        </div>
        <button
          type="button"
          onClick={resetToday}
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
          reset today
        </button>
      </div>
      <div style={{ height: "6px", background: "#ececec", borderRadius: "999px", overflow: "hidden" }}>
        <div
          style={{
            width: `${dailyPct}%`,
            height: "100%",
            background: "#7253ed",
            transition: "width 200ms ease",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          margin: "1.25rem 0 0.5rem 0",
        }}
      >
        <div style={{ fontSize: "0.875rem", fontWeight: 700 }}>
          This week: {weeklyDone} of {weeklyTotal} weekly ({weeklyPct}%)
        </div>
        <button
          type="button"
          onClick={resetThisWeek}
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
          reset this week
        </button>
      </div>
      <div style={{ height: "6px", background: "#ececec", borderRadius: "999px", overflow: "hidden" }}>
        <div
          style={{
            width: `${weeklyPct}%`,
            height: "100%",
            background: "#2869e6",
            transition: "width 200ms ease",
          }}
        />
      </div>
    </div>
  );
}

function StreakBlock() {
  const { state, hydrated } = useHabits();
  if (!hydrated) return null;
  const days = Object.keys(state.dailyHistory).sort();
  const weeks = Object.keys(state.weeklyHistory).sort();
  const last7 = days.slice(-7);
  return (
    <section style={{ marginTop: "2.5rem" }}>
      <AnchorHeading as="h2" id="history">History</AnchorHeading>
      <p style={{ fontSize: "0.8125rem", color: "#666" }}>
        Snapshots from past days and weeks. Use them honestly. Two perfect days
        and a streak of zeroes still means a week of zeroes.
      </p>
      <h3 style={GROUP_HEADER_STYLE}>Last seven days</h3>
      {last7.length === 0 ? (
        <p style={{ fontSize: "0.875rem", color: "#888" }}>
          No history yet. Come back tomorrow.
        </p>
      ) : (
        <ul>
          {last7.map((d) => (
            <li key={d}>
              <code>{d}</code>: {state.dailyHistory[d]} of {DAILY_HABITS.length} daily habits
            </li>
          ))}
        </ul>
      )}
      <h3 style={GROUP_HEADER_STYLE}>Past weeks</h3>
      {weeks.length === 0 ? (
        <p style={{ fontSize: "0.875rem", color: "#888" }}>
          No weekly history yet.
        </p>
      ) : (
        <ul>
          {weeks.slice(-6).map((w) => (
            <li key={w}>
              <code>{w}</code>: {state.weeklyHistory[w]} of {WEEKLY_HABITS.length} weekly habits
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function HabitsPage() {
  return (
    <HabitsProvider>
      <AnchorHeading as="h1" id="habits">Habits</AnchorHeading>
      <p>
        These are the recurring practices the course is trying to instill. The
        Tasks page lists the one-off course work; this page lists what should
        happen every day and every week, for the rest of the quarter and
        beyond. Daily habits reset every day. Weekly habits reset every Monday.
        Past completion counts are kept in your browser&rsquo;s history so you
        can see how often you actually show up.
      </p>

      <HeaderSummary />

      {GROUPS.map((g) => (
        <section key={g.name}>
          <h2 style={GROUP_NAME_STYLE}>
            <span>{g.name}</span>
            <GroupBadge habits={g.habits} />
          </h2>
          <p style={GROUP_INTRO_STYLE}>{g.intro}</p>
          <div style={{ paddingLeft: "0.25rem" }}>
            {g.habits.map((h) => (
              <HabitRow key={h.id} habit={h} />
            ))}
          </div>
        </section>
      ))}

      <StreakBlock />

      <p style={{ marginTop: "2rem", fontSize: "0.8125rem", color: "#888" }}>
        Storage key: <code>{STORAGE_KEY}</code>. Daily resets at local midnight,
        weekly resets on Monday. To purge all history, use{" "}
        <ResetAllLink />.
      </p>
    </HabitsProvider>
  );
}

function ResetAllLink() {
  const { resetAll } = useHabits();
  return (
    <button
      type="button"
      onClick={resetAll}
      style={{
        background: "transparent",
        border: 0,
        padding: 0,
        color: "#d93c3c",
        fontSize: "0.8125rem",
        cursor: "pointer",
        textDecoration: "underline",
      }}
    >
      erase all history
    </button>
  );
}

export const habitsSearchBody =
  "Habits daily weekly tracker skincare sunscreen brushing flossing strength training protein sleep posture style fit color shoes accessories minoxidil eyebrow tidy beard mirror check honesty";
