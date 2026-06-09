import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW1 — Funnel + first instrumentation",
  tagline:
    "Wire your product's funnel end-to-end and report your real numbers to the class.",
  outDate: "End of Week 1",
  dueDate: "End of Week 2 (Friday 11:59pm)",

  overview: [
    "This assignment turns your product into a measurement machine. By the end of Week 2 you will have analytics running in production, an activation event firing in real code, a single-screen dashboard covering every stage from acquisition to paid, and a written teardown naming the one place your funnel leaks the most. Every deliverable is grounded in your actual product — not a toy project, not a sandbox environment.",
    "Why start here? Because every growth tactic in the remaining eight weeks presupposes that you know what's working. Without honest measurement you can't distinguish a real improvement from statistical noise, and you can't diagnose why a number moved. As Eric Ries puts it, vanity metrics make you feel good but do not help you make decisions — actionable metrics let you link a specific action to an observed result (Ries, 2009). The funnel is the skeleton on which every later experiment hangs.",
    "The only rule is brutal honesty. You may report ugly numbers — $0 MRR, a 3% activation rate, zero returning users. You may not invent pretty ones, round up, or present a cherry-picked cohort as your headline metric. The cohort of students who have reported honest bad numbers and then fixed them is far larger than the cohort who reported fake good numbers and coasted. You will not be graded on the magnitude of your metrics; you will be graded on whether they are real, current, and correctly interpreted.",
  ],

  goals: [
    "Apply the AAARRR funnel to your specific product and name which stage is your current biggest leak (PostHog / Vandervell, 2023).",
    "Define your product's activation event in one sentence and confirm it is firing correctly in production.",
    "Distinguish vanity from actionable metrics on your own dashboard, using the three-A test introduced by Ries (2009): actionable, accessible, auditable.",
    "Compute your D0 activation rate from real data and compare it to the industry median of 25% reported by Rachitsky and Timen (2022).",
    "Identify the single largest drop-off step in your onboarding flow by walking through it yourself on a fresh device and correlating with session-level data.",
  ],

  background: [
    "The AAARRR framework — Acquisition, Activation, Retention, Revenue, Referral — was introduced by Dave McClure in 2007 as a diagnostic lens for startup funnels. Its enduring utility is that it forces founders to think in stages: a user who visits but never activates is a different problem from a user who activates but doesn't pay, and both are different from a user who pays once and churns. PostHog's in-depth guide notes that B2C funnels leak differently from B2B because the decision-maker and end-user are the same person, onboarding time is compressed, and the threshold for abandonment is lower — a confusing empty state at first launch is enough to lose someone permanently (Vandervell, 2023). Understanding which stage is bleeding is the prerequisite for every tactic covered in the rest of this course.",
    "Measurement must come before optimization. It sounds obvious, but most early-stage founders optimize by feel: they ship the feature that seems most-requested, fix the bug that annoyed them personally, and run growth campaigns before they have any idea whether the users they acquire actually stick. Gustaf Alstromer, drawing on experience with over 600 YC startups and Airbnb's growth team, is unequivocal: growth before product-market fit is the leading cause of startup death, and retention is the only honest signal of PMF (Alstromer, 2019). The reason to instrument first is not bureaucratic — it's so you can tell the difference between a good week and a lucky one.",
    "The distinction between vanity and actionable metrics is the conceptual core of this assignment. Ries (2009) defines vanity metrics as numbers that can only go up — total registered users, raw pageviews, cumulative downloads — and explains why they're dangerous: they create a false narrative of progress while hiding stagnation in the cohorts underneath. Actionable metrics link a specific action to a result you can replicate: daily activation rate, seven-day retention for a given signup cohort, MRR change week-over-week. Stripe's canonical definition of MRR — predictable recurring income normalised to monthly — is worth internalising because it forces you to exclude one-time payments and trials, which are the two most common sources of inflated revenue figures (Stripe, 2026). For this assignment, every number you report must pass the actionability test: can it go down as well as up, and can you point to a user action that would change it?",
  ],

  instructions: [
    {
      title: "Choose and install your analytics stack",
      body: "PostHog is the recommended tool for this course: it is free up to one million events per month, has a JavaScript snippet that takes five minutes to install, and ships session replay, funnel analysis, and cohort retention out of the box. If your product is a mobile app, a CLI tool, or you already have another analytics platform in production (Mixpanel, Amplitude, a custom SQL pipeline), you may use that instead — but document your choice and confirm the instrumentation is running in production, not just localhost.",
      steps: [
        "Create a PostHog Cloud account (or authenticate with your existing provider).",
        "Add the tracking snippet or SDK to your production codebase — not a staging or local environment.",
        "Verify instrumentation by triggering a pageview or identify call yourself, then confirming it appears in the live events stream within 60 seconds.",
        "Screenshot the live events stream as proof of installation.",
      ],
    },
    {
      title: "Define your activation event and emit it in code",
      body: "Your activation event is the single action that, when a user completes it, predicts they will return. Rachitsky and Timen (2022) define it as 'the earliest point in your onboarding flow that, by showing your product's value, is predictive of long-term retention.' It is not account creation (that's acquisition). It is the first moment your product delivers its core promise. Write this definition in one sentence before you touch your codebase — you will include it verbatim in your teardown.",
      steps: [
        "Draft your activation sentence: 'A user is activated when they [specific action] for the first time.'",
        "Add a named analytics event (e.g., `activation_complete` or a domain-specific name) that fires exactly when this action occurs.",
        "Deploy to production and verify the event appears in your analytics dashboard within an hour of a real or self-triggered activation.",
        "Do NOT fire the event on signup. It must require the user to do something meaningful with your product.",
      ],
    },
    {
      title: "Build the single-screen funnel dashboard",
      body: "The goal is one screen you can load in 10 seconds and immediately know whether your product is healthy. It should show four numbers in sequence: how many new users arrived (acquisition), how many installed or reached your core screen (install/onboarding entry), how many triggered your activation event (activation), and how many are paying (paid/MRR). Four bars or four numbers — clarity over decoration.",
      steps: [
        "In PostHog, create a Funnel insight with four steps: (1) first pageview or app open, (2) onboarding entry or first meaningful screen, (3) your activation event, (4) paid conversion event or Stripe webhook.",
        "Set the date range to the past 30 days. If your product is newer, use all-time.",
        "Pin the funnel to your PostHog dashboard (or save the SQL query if using a custom stack).",
        "Screenshot the dashboard — this screenshot will be a required deliverable.",
      ],
    },
    {
      title: "Pull your real MRR number",
      body: "MRR is total active subscribers multiplied by their monthly price, normalised for annual plans (divide by 12). Stripe's definition is explicit: exclude trials, exclude one-time payments, exclude past-due accounts (Stripe, 2026). If your MRR is $0 because you haven't started charging yet, write $0 and the date. If you have revenue but it's not recurring, write the gross revenue and note explicitly that it's not MRR. Do not estimate or round up.",
      steps: [
        "If you use Stripe: navigate to Revenue → MRR in the Stripe Dashboard and note the number.",
        "If you use another payment processor: compute MRR manually as (monthly subscribers × monthly price) + (annual subscribers × annual price ÷ 12).",
        "Write the MRR figure and the exact date you measured it in your founder journal. This is your baseline for the rest of the course.",
      ],
    },
    {
      title: "Compute your D0 activation rate",
      body: "D0 activation rate = (users who triggered your activation event on the day they signed up) ÷ (total users who signed up) × 100, measured over the past 30 days. This is the highest-leverage metric at your stage because it reflects whether your product's first-minute experience is working. The industry average is 34%, median 25% (Rachitsky and Timen, 2022) — but the right number for your product depends on its complexity. What matters is that you measure it from real data.",
      steps: [
        "In PostHog, create a Funnel with signup as Step 1 and your activation event as Step 2, set to 'first occurrence within 24 hours of signup.'",
        "Note the conversion rate. This is your D0 activation rate.",
        "If the rate is above 60%, double-check your denominator: confirm it includes ALL signups, not just email-verified or onboarding-completed ones.",
        "Record this number alongside your MRR in your founder journal.",
      ],
    },
    {
      title: "Walk through your own onboarding on a fresh device",
      body: "Open your product in an incognito window (or a device where you have never logged in) and go through the entire signup and onboarding flow as if you are a new user who found you via a cold ad. Screenshot every single screen. Time each step. Note every moment you hesitate or feel friction. Paul Graham's canonical advice applies here: the manual work of watching your own product is not a substitute for real user data — it is the mechanism by which you discover what to instrument next (Graham, 2013).",
      steps: [
        "Use an incognito/private window or a secondary device with no existing session.",
        "Screenshot every screen from the first landing page through activation completion.",
        "Annotate each screenshot with the wall-clock time elapsed since you started.",
        "List every moment of friction: a field you didn't understand, a loading state that felt long, a step you almost skipped.",
        "Cross-reference with your funnel dashboard: does the screen where you personally hesitated match the step with the highest drop-off?",
      ],
    },
    {
      title: "Write the funnel teardown",
      body: "The teardown is a 1–2 page (or equivalent Markdown) document that assembles everything above into a readable narrative. It should include: your activation event definition, your four funnel numbers, your D0 activation rate, a screenshot of your dashboard, and a diagnosis of ONE specific leak — the single step with the largest absolute drop-off. A good diagnosis names the step, states the drop-off percentage, and offers one concrete hypothesis for why it happens (not 'users don't understand the value' but 'the empty state on the Projects screen shows no demo data so users don't know what to click next'). You will use this teardown as the baseline when you run your first activation experiment in Week 3.",
      steps: [
        "Section 1 — What I built and what it does (2–3 sentences).",
        "Section 2 — My activation event: definition + how I implemented it.",
        "Section 3 — Funnel numbers: a table with step name, raw count, and conversion rate.",
        "Section 4 — MRR: the number, the date, and whether it is real recurring revenue.",
        "Section 5 — The leak: one drop-off step, the percentage, and your one-sentence hypothesis.",
        "Embed the dashboard screenshot in Section 3.",
      ],
    },
    {
      title: "Ship public output and submit",
      body: "Build-in-public is a first-class practice in this course. Before you submit, post three sentences publicly — on X/Twitter, LinkedIn, your personal blog, or any public channel — describing what you measured, one number you found surprising, and one thing you are going to fix. Link to the post in your submission. The point is not performance: it is that writing for a public audience forces you to be precise about what you actually learned.",
      steps: [
        "Write and publish the three-sentence post. Include at least one real number.",
        "Copy the URL of the post.",
        "Submit your teardown PDF or Markdown, your dashboard screenshot, and the URL of your public post via the course submission form.",
      ],
    },
  ],

  deliverables: [
    "Funnel teardown — PDF or Markdown, 1–2 pages, following the six-section structure in Instruction 7.",
    "Dashboard screenshot — the single-screen PostHog (or equivalent) funnel showing all four stages with real, current numbers.",
    "Activation event code diff or proof — a GitHub link or screenshot showing the activation event being emitted in production.",
    "Public output URL — a link to your three-sentence post on any public channel.",
    "Stretch (optional): a 3–5 minute Loom walk-through of your dashboard, narrated — particularly useful if your funnel has unusual stages.",
  ],

  rubric: [
    {
      dimension: "Activation event correctly defined and firing in production",
      points: 20,
      notes:
        "One-sentence definition present; named event visible in analytics; event fires on meaningful action, not on signup.",
    },
    {
      dimension: "Dashboard shows real, current four-stage funnel numbers",
      points: 20,
      notes:
        "All four stages present (acquisition → install → activation → paid); screenshot included; date range is last 30 days or all-time with explicit note.",
    },
    {
      dimension: "D0 activation rate computed from real data",
      points: 15,
      notes:
        "Rate is drawn from your analytics tool, not estimated; denominator includes all signups; rate is stated with a date.",
    },
    {
      dimension: "Teardown diagnoses ONE specific, named leak",
      points: 15,
      notes:
        "Specific step identified; drop-off percentage stated; hypothesis is concrete and product-specific, not generic.",
    },
    {
      dimension: "Onboarding walk-through is honest and friction-annotated",
      points: 15,
      notes:
        "Screenshots from a fresh session; each screen time-stamped; at least one friction point annotated; cross-referenced with funnel data.",
    },
    {
      dimension: "Public output shipped",
      points: 10,
      notes:
        "URL resolves; post is public; contains at least one real number; posted before submission deadline.",
    },
    {
      dimension: "Teardown polish and clarity",
      points: 5,
      notes:
        "Six-section structure followed; numbers formatted consistently; screenshot legible.",
    },
  ],

  hints: [
    "PostHog's autocapture gets you 80% of what you need on day one — pageviews, clicks, and form submissions are tracked without writing a single custom event. Turn it on first, then layer your named activation event on top.",
    "Your activation event should be the thing that, once a user does it, they are 5× more likely to come back. If you are not sure what that action is, look at the users who have been active for more than 30 days and find the one thing they all did in their first session that your churned users did not.",
    "If your D0 activation rate looks great (above 60%), double-check your denominator. A common mistake is counting only email-verified signups or only users who completed the onboarding checklist — make sure you are dividing by all accounts created, including the ones who never came back.",
    "Walking through your own product on a fresh device will reveal more bugs and UX gaps than a week of QA. The incognito-window test is not a shortcut — it is the most direct way to experience what a new user experiences. Do it before you write a single line of your teardown.",
    "MRR is not gross revenue. If you have $500 in one-time sales and one subscriber paying $29/month, your MRR is $29. Stripe's guide covers the normalisation calculation if you have a mix of monthly and annual plans (Stripe, 2026).",
    "The empty state is the moment most likely to cause drop-off after activation, because it is where the product stops holding the user's hand. If your funnel shows a big gap between 'account created' and 'activation event,' the first place to look is what the user sees when they log in and have done nothing yet. Amorim (2025) documents this as the single most common fixable drop-off point in onboarding funnels.",
  ],

  late:
    "One week late: maximum 80 points. Two weeks late: maximum 60 points. Submissions more than two weeks late are not accepted. Real-number requirement applies at any submission date — do not fabricate metrics to cover for a late start.",
};

export function Hw1Page() {
  return <ProjectPage spec={spec} />;
}

export const hw1SearchBody =
  "HW1 funnel instrumentation activation event PostHog AAARRR MRR activation rate D0 vanity actionable metrics onboarding teardown dashboard acquisition install paid north-star cohort aggregate time-to-value aha moment onboarding friction empty state Week 1 Week 2";
