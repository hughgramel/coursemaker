import { SyllabusPage as SyllabusPageComponent } from "@/components/SyllabusPage";
import type { SyllabusSpec } from "@/types/course";

const spec: SyllabusSpec = {
  overview: [
    "This course is a 10-week growth manual for technical founders shipping a B2C product. You arrive with a shipped MVP — even rough — and a product idea you are serious about. You leave with a defended, written plan to reach $10,000 in monthly recurring revenue, a real funnel you can read, and the daily working rhythm to keep moving when the lectures stop.",
    "Every week pairs two short lectures with a single hands-on section, a generated reading that serves as the textbook chapter, and a concrete weekly task applied to your own product. The course has no required external textbook — the weekly readings are the textbook, written from primary sources (founder essays, operator newsletters, platform research, recorded talks from Y Combinator and MicroConf).",
    "The course is designed for the technical founder working solo or in a tiny team. You are expected to ship code. The course will teach you the un-fun work that technical founders avoid: instrumenting honest analytics, picking a price and defending it, picking ONE channel and committing, talking to users every weekday, and shipping public output before the build block opens.",
  ],
  logistics: {
    meeting: "Two lectures per week (60 min each) + one section (90 min). Weekly reading published Sundays.",
    format: "Hybrid: live lectures recorded; sections strongly preferred in-person for the cohort effect. Capstone defense in week 10 is in-person or live video; submissions are not.",
    location: "TBD",
    extras: [
      "Daily working rhythm: 4 fixed slots — morning growth move (~30 min), customer hour (~60 min), build block (~3-4 h), end-of-day measure + reflect (~15 min). Plus a 15-min Sunday/Monday weekly plan, a 5-min daily plan, and a 30-min Friday review.",
      "Public-output mandate: every weekday, one piece of public output (tweet, LinkedIn post, Reddit comment, IH update, Discord post, TikTok, YT short, blog draft) — anything in front of an audience that isn't you. Course-tracked target: 50+ weekday outputs by end of course.",
      "Mid-course pivot/persevere check at end of week 5; capstone scaffold starts end of week 8.",
    ],
  },
  staff: [
    {
      name: "TBD",
      role: "Instructor",
      officeHours: [{ when: "TBD", where: "TBD" }],
      bio: "Practitioner with first-hand experience scaling at least one B2C product past $10k MRR.",
    },
  ],
  prerequisites: [
    "A B2C product idea you are serious about and have committed time to.",
    "A shipped MVP — even rough, even ugly. Web, mobile, or PWA all fine.",
    "Comfort shipping code: deploys, releases, simple analytics wiring.",
    "Surface-level familiarity with Stripe, landing pages, conversion funnels (the course goes deeper, but doesn't define every term from scratch).",
  ],
  gettingHelp: [
    "Post to the course Discord for content questions — answered within 24 hours by staff or peers.",
    "Bring your real numbers to section every week. The section is where you get help, not where you get re-lectured.",
    "Office hours are for 1:1 product help. Bring your dashboard, your cohort chart, your paywall — not abstract questions.",
    "Peer accountability is built in: pair groups assigned in week 1, swapped at week 6 when channel commitments lock.",
  ],
  grading: {
    breakdown: [
      { item: "Weekly milestones (10 weeks × the week's milestones, scored shipped / partial / not)", weight: "20%", notes: "Quantified, not vibes — the milestones are spelled out in each week's reading." },
      { item: "HW1 — Funnel + first instrumentation", weight: "10%" },
      { item: "HW2 — Pricing + paywall", weight: "10%" },
      { item: "HW3 — Wedge channel sprint", weight: "10%" },
      { item: "HW4 — Retention engine", weight: "10%" },
      { item: "Capstone — Plan + ship the path to $10k MRR", weight: "30%", notes: "Written plan (15%) + 5-minute defended presentation (15%)." },
      { item: "Participation + public output", weight: "10%", notes: "Section attendance, peer feedback, public-output count toward 50+ target." },
    ],
    latePolicy:
      "Weekly milestones cannot be banked or back-paid — the week ends Friday EOD, period. The point of milestones is the rhythm. Homework is due Friday 11:59pm of its due week; 10% per day off, capped at 3 days. The capstone has no late window.",
    aiPolicy:
      "Acceptable for conceptual study, copywriting drafts, and code assistance. Disclose use on every submission. AI cannot generate your milestones, write your reflections, or run your customer interviews — those are personal practice the AI breaks the moment it does them for you.",
  },
  resources: {
    required: [
      {
        title: "Weekly readings published in /readings/",
        note: "There is no required external textbook. The weekly readings ARE the textbook — written from vetted primary sources and cited per reading.",
      },
      {
        title: "Founder journal — paper or digital, your choice",
        note: "Used for daily plan + EOD reflect + Friday review. Required to bring to section. The single most important non-software tool of the course.",
      },
      {
        title: "A working analytics + experimentation tool",
        note: "PostHog (free tier sufficient) is the course default. Mixpanel, Amplitude, or a hand-rolled SQL dashboard are accepted alternatives. Decided in week 1.",
      },
    ],
    optional: [
      { title: "The Mom Test — Rob Fitzpatrick", href: "https://www.momtestbook.com/", note: "The course's customer-hour ritual is built on this book. Strongly recommended week 1." },
      { title: "MAKE — Pieter Levels (free chapters)", href: "https://readmake.com/", note: "Indie-hacker bible. Repeatedly cited in weeks 3 and 6." },
      { title: "Hooked — Nir Eyal", href: "https://www.nirandfar.com/hooked/", note: "Habit-loop foundations for week 4." },
      { title: "Traction — Weinberg & Mares", href: "https://en.wikipedia.org/wiki/Traction:_A_Startup_Guide_to_Getting_Customers", note: "The 19 traction channels framework, used in week 6." },
      { title: "Shape Up — Basecamp (free online)", href: "https://basecamp.com/shapeup", note: "Single-person ship discipline, used in week 5." },
    ],
  },
};

export function SyllabusPage() {
  return <SyllabusPageComponent spec={spec} />;
}

export const syllabusSearchBody =
  "Syllabus overview prerequisites grading policies AI policy late policy office hours daily routine public output mandate weekly milestones capstone HW1 HW2 HW3 HW4 founder journal PostHog The Mom Test MAKE Pieter Levels Hooked Traction Shape Up B2C $10k MRR";
