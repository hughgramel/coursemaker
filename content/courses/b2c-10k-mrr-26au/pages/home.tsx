import { AnchorHeading } from "@/components/AnchorHeading";
import { WeekModule } from "@/components/WeekModule";
import { Hero } from "@/components/Hero";
import { Label } from "@/components/Label";
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
    title: "Week 1, Foundations: the B2C funnel",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Make your funnel honest." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(1, "The B2C funnel", "Reading metrics honestly"),
          { kind: "label", text: "HW1 out", variant: "purple" },
        ],
      },
      {
        date: "Milestones",
        notes: [{
          kind: "text",
          text: "PostHog installed · activation event firing · single-screen dashboard · first MRR written.",
        }],
      },
    ],
  },
  {
    title: "Week 2, Foundations: activation",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Cut your time-to-first-value in half." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(2, "Activation", "Onboarding teardown"),
          { kind: "label", text: "HW1 due", variant: "red" },
        ],
      },
      {
        date: "Milestones",
        notes: [{
          kind: "text",
          text: "Activation rate measured · onboarding walked · one experiment shipped · 3 teardown notes.",
        }],
      },
    ],
  },
  {
    title: "Week 3, Core: pricing + paywall",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Pick a price that someone will pay this week." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(3, "Pricing for B2C", "Paywall design"),
          { kind: "label", text: "HW2 out", variant: "purple" },
        ],
      },
      {
        date: "Milestones",
        notes: [{
          kind: "text",
          text: "1-page pricing brief · paywall live · payment integration · first $1 of new MRR (or post-mortem).",
        }],
      },
    ],
  },
  {
    title: "Week 4, Core: retention",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Make your retention curve smile." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(4, "Retention", "Cohort analysis"),
          { kind: "label", text: "HW2 due", variant: "red" },
        ],
      },
      {
        date: "Milestones",
        notes: [{
          kind: "text",
          text: "Cohort table · curve shape named · power-user query · one retention intervention shipped.",
        }],
      },
    ],
  },
  {
    title: "Week 5, Core: experimentation + release",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Build the loop that lets you ship 10× without breaking 10×." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(5, "A/B testing rigor", "Release management"),
          { kind: "label", text: "Mid-course check", variant: "blue" },
        ],
      },
      {
        date: "Milestones",
        notes: [{
          kind: "text",
          text: "Feature flags · one A/B test (or memo) · CI/CD on green main · rollback runbook · pivot/persevere written.",
        }],
      },
    ],
  },
  {
    title: "Week 6, Composition: wedge channel + SEO",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Commit to ONE growth channel for the rest of the course." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(6, "Picking a wedge channel", "SEO + content engines"),
          { kind: "label", text: "HW3 out", variant: "purple" },
          { kind: "label", text: "Channel locks", variant: "yellow" },
        ],
      },
      {
        date: "Milestones",
        notes: [{
          kind: "text",
          text: "Channel-fit worksheet · public commitment · GSC submitted · lighthouse article · topic cluster map.",
        }],
      },
    ],
  },
  {
    title: "Week 7, Composition: social, virality, paid",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Bake one growth loop into the product itself." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(7, "Social + virality", "Paid acquisition basics"),
          { kind: "label", text: "HW3 due", variant: "red" },
        ],
      },
      {
        date: "Milestones",
        notes: [{
          kind: "text",
          text: "Viral asset shipped · growth loop diagram · CAC ceiling computed · paid test or memo.",
        }],
      },
    ],
  },
  {
    title: "Week 8, Frontier: app stores + ASO",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Ship to a store (or commit to PWA) with a real release pipeline." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(8, "App store mechanics", "ASO + screenshots"),
          { kind: "label", text: "HW4 out", variant: "purple" },
          { kind: "label", text: "Capstone scaffold", variant: "blue" },
        ],
      },
      {
        date: "Milestones",
        notes: [{
          kind: "text",
          text: "TestFlight / Play internal / PWA install live · ASO rewrite · 5 conversion screenshots · capstone scaffold.",
        }],
      },
    ],
  },
  {
    title: "Week 9, Frontier: lifecycle + referral",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Wire the messages that bring people back without you doing the work." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(9, "Lifecycle messaging", "Referral loops"),
          { kind: "label", text: "HW4 due", variant: "red" },
          { kind: "label", text: "Capstone draft v1", variant: "yellow" },
        ],
      },
      {
        date: "Milestones",
        notes: [{
          kind: "text",
          text: "Welcome message live · second lifecycle live · referral mechanism shipped · capstone draft v1 (4 sections).",
        }],
      },
    ],
  },
  {
    title: "Week 10, Synthesis: diagnosis + path to $10k",
    size: "h2-small",
    entries: [
      { date: "Mission", notes: [{ kind: "text", text: "Defend the single highest-leverage move for your next 30 days." }] },
      {
        date: "Lectures + reading + section",
        notes: [
          ...weekEntries(10, "Diagnosing stalled MRR", "Past $10k: what changes"),
          { kind: "label", text: "Capstone due", variant: "red" },
          { kind: "label", text: "Defense day", variant: "purple" },
        ],
      },
      {
        date: "Milestones",
        notes: [{
          kind: "text",
          text: "Funnel diagram with real numbers · diagnosed quadrant · 30-day plan · measurement + rollback · 5-minute defense.",
        }],
      },
    ],
  },
];

export function HomePage() {
  return (
    <>
      <div className="not-prose">
        <Hero hero={config.hero} legacyImage={config.heroImage} />
      </div>

      <AnchorHeading as="h1" id="b2c-10k-mrr" className="mb-2">
        {config.fullTitle}
      </AnchorHeading>
      <p className="fs-6 fw-300">{config.term}</p>
      <p>
        A 10-week growth manual for technical founders shipping a B2C product.
        Each week pairs two short lectures with a single hands-on section, a
        generated reading that serves as the textbook chapter, and a concrete
        weekly task applied to your own product. See the{" "}
        <a href={`${base}/syllabus`}>syllabus</a> for grading, policies, and
        the daily working rhythm.
      </p>

      <AnchorHeading as="h2" id="how-this-course-works">How this course works</AnchorHeading>
      <p>
        <strong>The daily rhythm.</strong> Every weekday is four fixed slots: a{" "}
        <em>morning growth move</em> (~30 min, includes your daily public output),
        a <em>customer hour</em> (~60 min, talk to a user, read tickets, watch a
        session replay), a <em>build block</em> (~3-4 h) that does <strong>NOT</strong>{" "}
        open until the first two slots are done, and an end-of-day{" "}
        <em>measure + reflect</em> (~15 min) where you log your numbers. Plus a
        15-min Sunday/Monday weekly plan, a 5-min daily plan, and a 30-min Friday
        review.
      </p>
      <p>
        <strong>The public-output mandate.</strong> Every weekday you ship one
        piece of public output, tweet, LinkedIn post, Reddit comment, IH update,
        Discord post, TikTok, YT short, blog draft. Weeks 1-5: experiment across
        platforms. Week 6: pick ONE channel via the channel-fit worksheet, commit
        through week 10 + capstone. Target: 50+ outputs by end of course.
      </p>
      <p>
        <strong>Mission per week.</strong> Each week has one sentence. Each week
        has milestones (artifacts you ship), Bloom-tagged outcomes (capabilities
        you leave with), and a per-day plan. The capstone in week 10 is your
        defended path to $10k MRR.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      <p>
        Tentative schedule. Weekly readings are the textbook, written from
        primary sources and published at the start of each week. Labels:{" "}
        <Label variant="purple">assignment out</Label>{" "}
        <Label variant="red">assignment due</Label>{" "}
        <Label variant="blue">course check-in</Label>{" "}
        <Label variant="yellow">in-week milestone</Label>.
      </p>

      {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
    </>
  );
}

export const homeSearchBody =
  "B2C 10k MRR growth manual technical founders syllabus weeks calendar funnel activation pricing paywall retention cohort A/B testing release management wedge channel SEO programmatic SEO viral loops K-factor growth loops paid acquisition app store ASO TestFlight Play PWA lifecycle messaging triggered referral loops Duolingo streaks diagnosing stalled MRR capstone path to 10k MRR daily routine morning growth move customer hour build block reflect public output mandate planning slots mid-course check Bloom outcomes";
