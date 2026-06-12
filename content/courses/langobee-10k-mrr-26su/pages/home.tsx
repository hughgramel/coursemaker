import { AnchorHeading } from "@/components/AnchorHeading";
import { WeekModule } from "@/components/WeekModule";
import { Hero } from "@/components/Hero";
import type { CourseModule } from "@/types/course";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

function weekEntries(
  week: number,
  l1Title: string,
  l2Title: string,
): CourseModule["entries"][number]["notes"] {
  const wk = `wk${week.toString().padStart(2, "0")}`;
  return [
    {
      kind: "row",
      items: [
        { kind: "link", text: `L1 ${l1Title}`, href: `${base}/lectures/${wk}-l1` },
        { kind: "link", text: "slides", href: `${base}/slides/${wk}-l1.pdf` },
        { kind: "link", text: `L2 ${l2Title}`, href: `${base}/lectures/${wk}-l2` },
        { kind: "link", text: "slides", href: `${base}/slides/${wk}-l2.pdf` },
      ],
    },
    {
      kind: "row",
      items: [
        { kind: "link", text: "Reading", href: `${base}/readings/${wk}` },
        { kind: "link", text: "Section", href: `${base}/sections/${wk}` },
      ],
    },
  ];
}

const weeks: CourseModule[] = [
  {
    title: "Week 1, Foundations: ground truth",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Know your real numbers: ~50 humans, 4 weekly actives, $0 MRR." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(1, "The honest dashboard", "LangoBee's funnel, audited"),
          { kind: "label", text: "HW1 out", variant: "purple" },
        ],
      },
      { date: "Milestones", notes: [{ kind: "text", text: "De-alted dashboard rebuilt from raw queries · June bot cohort tagged · north-star metric chosen." }] },
    ],
  },
  {
    title: "Week 2, Foundations: thesis and pivot discipline",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Decide the premium-library vs freemium-shorts fork on purpose." }] },
      { date: "Lectures + reading + section", notes: weekEntries(2, "What a thesis is for", "Pivot or persevere") },
      { date: "Milestones", notes: [{ kind: "text", text: "Fork decision memo written: two falsifiable hypotheses, kill thresholds, a decision date." }] },
    ],
  },
  {
    title: "Week 3, Retention: the broken-vacuum bar",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Make the product not-broken and the first minute guided." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(3, "Quality is binary", "Onboarding to first aha"),
          { kind: "row", items: [
            { kind: "label", text: "HW1 due", variant: "red" },
            { kind: "label", text: "HW2 out", variant: "purple" },
          ]},
        ],
      },
      { date: "Milestones", notes: [{ kind: "text", text: "Must-work checklist run on phone + laptop · defects filed · 60-second guided first session shipped." }] },
    ],
  },
  {
    title: "Week 4, Retention: the reason to return",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Ship one hook that brings a user back tomorrow." }] },
      { date: "Lectures + reading + section", notes: weekEntries(4, "Why they come back", "Instrumenting return") },
      { date: "Milestones", notes: [{ kind: "text", text: "One retention hook chosen and shipped · D1 dashboard live, de-alted." }] },
    ],
  },
  {
    title: "Week 5, Retention: the 10-user test",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Hand-recruit, properly onboard, and honestly measure a real cohort." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(5, "Do things that don't scale", "Reading tiny cohorts"),
          { kind: "label", text: "HW2 due", variant: "red" },
        ],
      },
      { date: "Milestones", notes: [{ kind: "text", text: "10-15 users onboarded · D1 read against the 30% bar · 2+ unprompted quotes collected." }] },
    ],
  },
  {
    title: "Week 6, Monetization: price as a hypothesis",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Make the trial fire for the first time ever." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(6, "Pricing is a test of belief", "The trial funnel"),
          { kind: "label", text: "HW3 out", variant: "purple" },
        ],
      },
      { date: "Milestones", notes: [{ kind: "text", text: "trial_started fires end to end · five willingness-to-pay interviews scheduled." }] },
    ],
  },
  {
    title: "Week 7, Monetization: the first dollar",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Move the paywall to the moment of demonstrated value." }] },
      { date: "Lectures + reading + section", notes: weekEntries(7, "Paywall placement", "Trial to paid") },
      { date: "Milestones", notes: [{ kind: "text", text: "Paywall audit complete · upgrade triggers mapped · premium-only verdict drafted." }] },
    ],
  },
  {
    title: "Week 8, Monetization: the $10K math",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Know exactly how many subscribers, visitors, and churn points stand between $0 and $10K." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(8, "Unit economics of $10K", "Working backward to traffic"),
          { kind: "row", items: [
            { kind: "label", text: "HW3 due", variant: "red" },
            { kind: "label", text: "Capstone out", variant: "purple" },
          ]},
        ],
      },
      { date: "Milestones", notes: [{ kind: "text", text: "MRR model built from real rates · three channel scenarios stress-tested · max CAC set." }] },
    ],
  },
  {
    title: "Week 9, Distribution: community launch",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Launch where learners already gather, without burning the channel." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(9, "Launching where learners live", "The launch as an instrument"),
          { kind: "label", text: "HW4 out", variant: "purple" },
        ],
      },
      { date: "Milestones", notes: [{ kind: "text", text: "Launch posts drafted · hostile-comment pre-mortem written · go/no-go gated on retention." }] },
    ],
  },
  {
    title: "Week 10, Distribution: creators and the 50% question",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Answer the YouTuber-partner question with math, not hope." }] },
      { date: "Lectures + reading + section", notes: weekEntries(10, "The creator channel", "Partner, sponsor, or affiliate") },
      { date: "Milestones", notes: [{ kind: "text", text: "50-creator prospect list from the 2,773 catalogued channels · first five outreach emails personalized." }] },
    ],
  },
  {
    title: "Week 11, Distribution: owned loops",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Turn the 17K-video content engine into marketing inventory." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(11, "Loops, not funnels", "The content engine you already have"),
          { kind: "label", text: "HW4 due", variant: "red" },
        ],
      },
      { date: "Milestones", notes: [{ kind: "text", text: "One owned channel live with three clips · loop metric defined and dashboarded." }] },
    ],
  },
  {
    title: "Week 12, Synthesis: the operating system",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Leave with a running weekly machine and a falsifiable plan to $10K." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(12, "The weekly machine", "From here to $10K"),
          { kind: "label", text: "Capstone due", variant: "red" },
        ],
      },
      { date: "Milestones", notes: [{ kind: "text", text: "Operating plan presented and red-teamed · weekly cadence run once end to end." }] },
    ],
  },
];

export function HomePage() {
  return (
    <>
      <div className="not-prose">
        <Hero hero={config.hero} legacyImage={config.heroImage} />
      </div>
      <AnchorHeading as="h1" id="langobee-10k-mrr-26su" className="mb-2">
        LangoBee to $10K MRR: Operating a Solo Language App from Zero Revenue
      </AnchorHeading>
      <p className="fs-6 fw-300">Summer 2026 · 12 weeks · one founder, one product, one number</p>
      <p>
        This course operates a real business. LangoBee enters week 1 with roughly 50 genuine
        users, 4 real weekly actives, a 17,440-item Spanish-dominant video catalog, a fully
        wired Stripe funnel that has never fired, and $0 of monthly recurring revenue. Twelve
        weeks later it leaves with honest metrics, a measured retention bar, a first dollar,
        a tested distribution engine, and a weekly operating cadence. Start with
        the <a href={`${base}/syllabus`}>syllabus</a>, then work the <a href={`${base}/tasks`}>tasks page</a> week
        by week.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
    </>
  );
}

export const homeSearchBody =
  "LangoBee $10K MRR operator course Summer 2026 calendar retention monetization distribution pivot creators shorts SEO operating cadence honest metrics first dollar";
