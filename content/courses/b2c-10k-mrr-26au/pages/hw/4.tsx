import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW4 — Retention engine",
  tagline: "Wire the lifecycle + referral layer that compounds without you.",
  outDate: "End of Week 8",
  dueDate: "End of Week 9 (Friday 11:59pm)",

  overview: [
    "Acquisition is a treadmill: every new user costs money and the moment you stop spending, growth stops. Retention is the opposite — every message you automate today keeps paying back tomorrow. The asymmetry compounds: a product that retains at D30=40% instead of 20% earns roughly 2× the lifetime value from the same acquisition spend, without touching CAC. That math is why lifecycle messaging and referral loops are the highest-leverage levers available to an indie founder who cannot outbid a VC-backed competitor on paid channels.",
    "This course's stance is direct: lifecycle messaging and referral loops are the indie founder's force multiplier. You build them once, they run without you, and they compound. A welcome email that converts 8% of new users to a second session in the first 24 hours is worth more than a growth-hacking sprint. A referral loop built around sharing a result — not the product itself — scales k-factor without a two-sided incentive budget. Duolingo's Friend Streak is the canonical proof: users with at least one Friend Streak are 22% more likely to complete their daily lesson (Duolingo team, 2024), not because Duolingo pays them to share, but because the shared streak creates accountability.",
    "In HW4 you will wire the full retention layer: a triggered lifecycle starter set, at least two live messages with measured open and click rates, and a referral mechanism with share-event telemetry. You will run the system for at least seven days, pull the numbers, and write a post-mortem that separates what actually moved the needle from what felt like marketing theater. The deliverable is a live system, not a plan.",
  ],

  goals: [
    "Integrate a lifecycle messaging tool (Resend, Loops, Customer.io, or OneSignal) end-to-end in your production environment.",
    "Design and ship a triggered welcome message — email or push — with measured open and click rates.",
    "Identify the highest-leverage second lifecycle message for your retention curve and ship it live with correct trigger logic.",
    "Build a referral mechanism (share button, public profile, embed, or shareable asset) with share-event telemetry wired.",
    "Write a post-mortem that names one specific intervention that lifted retention and one that felt inauthentic, grounded in your 7-day data.",
  ],

  background: [
    "The five-message lifecycle starter set maps to the five highest-leverage moments in a B2C retention curve: (1) Welcome — sent the moment a user activates, guides to the first aha moment before they leave; (2) Day-3 nudge — targets users who activated but have not returned, the single highest-churn window in most apps; (3) Paywall-hit — triggered when a user reaches a hard or soft paywall for the first time, contextualizes value before they bounce; (4) Churn-risk — triggered by inactivity (e.g., no session in 7 days for a daily-use app), attempts re-engagement before the user mentally cancels; (5) Win-back — sent to lapsed users quarterly, personalized by their cancellation or drop-off reason (Customer.io, 2024). You do not need all five for HW4 — you need the welcome plus one other. Pick the one that matches where your HW2 cohort data shows the steepest drop-off.",
    "Triggered messages always beat scheduled messages. A scheduled message sent to every user on day 3 is decaying: some users are power users who do not need it, some churned on day 1 and the message is noise. A triggered message sent only to users who have not returned after their activation event is compounding: it reaches the exact people who need it at the exact moment the behavioral signal fires (Nir Eyal, Hooked, 2014). For HW4, every message you build must be triggered by an event or a time-since-event condition — not by a calendar schedule. The one exception is a win-back campaign targeting dormant users; even then, use a behavioral filter, not a broadcast.",
    "Push versus email versus in-app is a real choice with measurable tradeoffs. Push notifications reach opted-in users with a ~20% open rate; email reaches a wider audience but at under 2% open rate on mobile. The practical guidance from OneSignal (Langholz, 2021): push for urgency and brevity (~200 characters, time-sensitive), email for longer-form content, permanence, and users who have not opted into push. For mobile-first products, push is often the higher-leverage channel — but Apple's permission model requires nuance. Do not ask for push permission on first launch without a strong contextual reason; present it after the user has experienced value. For HW4, pick the channel that matches your product's primary surface and defend the choice in two sentences.",
    "Referral mechanics split into two archetypes: share-the-product loops and share-the-result loops. Share-the-product is the Dropbox model — a two-sided incentive where both referrer and referred receive storage (Petrova/GrowSurf, 2026). It drove 3,900% user growth in 15 months at Dropbox, but Dropbox had a product where storage was the direct incentive. For most indie B2C products, the incentive budget is zero and the product value is harder to give away incrementally. Share-the-result works differently: the user shares an artifact of their progress or identity — a streak, a score, a certificate, a generated asset — and the shareability is intrinsic to the outcome, not bolted on. Duolingo's Friend Streak is the canonical modern example. For HW4, build a share-the-result loop if at all possible. If your product genuinely warrants a two-sided incentive, defend it explicitly in the post-mortem.",
  ],

  instructions: [
    {
      title: "Choose your lifecycle tool",
      body: "Select one of: Resend, Loops, Customer.io, or OneSignal. Write exactly two sentences defending your choice — one sentence on why this tool fits your product's primary channel (email vs push vs both), one sentence on why you chose it over the alternatives given your current stack and volume.",
    },
    {
      title: "Wire the welcome message end-to-end",
      body: "Implement a triggered welcome message (email, push, or both) that fires on your activation event — not on sign-up, but on the event that signals the user has experienced value for the first time. The message must be live in production, measurable (open + click tracking), and triggering correctly before you proceed to step 3.",
      steps: [
        "Define the activation event that triggers the welcome (e.g., first lesson complete, first item created, first search run).",
        "Configure the trigger in your lifecycle tool with zero delay or a short delay (under 10 minutes).",
        "Write message copy that references the activation action — avoid generic 'Welcome to [App]' openers.",
        "Verify end-to-end: create a test account, hit the activation event, confirm the message arrives.",
      ],
    },
    {
      title: "Ship one additional lifecycle message",
      body: "Review your HW2 cohort data and identify where the steepest drop-off occurs. If users who return on day 3 have dramatically higher D30 retention, build the day-3 nudge. If your retention curve shows a cliff at day 7 inactivity, build the churn-risk message. If your free-to-paid conversion drops sharply at paywall exposure, build the paywall-hit message. Choose the one message that addresses your actual curve, not the most common one in the literature.",
      steps: [
        "State which message you chose and cite the specific cohort drop-off data from HW2 that motivated it.",
        "Configure the correct trigger: day-3 nudge = 3 days since activation with no return session; churn-risk = N days inactive where N fits your product's usage frequency; win-back = 30+ days since last session.",
        "Write the copy. Churn-risk and win-back copy must be personalized to user behavior, not generic.",
        "Verify the trigger fires correctly in a test environment before leaving it live.",
      ],
    },
    {
      title: "Build a referral mechanism",
      body: "Ship a referral mechanism that lets users share a result, artifact, or identity signal from your product. A share button that generates a URL with a user token, a public profile page, a shareable image or embed, or a leaderboard entry all qualify — as long as you wire share-event telemetry so you can count shares and attribute any downstream installs or activations.",
      steps: [
        "Decide what result users will share (a streak, a score, a generated asset, a public profile).",
        "Build or wire the share UI: native share sheet on mobile, copy-link + social buttons on web.",
        "Implement share-event telemetry: fire an analytics event on every share action with the user ID and share target.",
        "If attributing referrals, use a shareable URL with a token parameter — not a code-entry flow. Codes have dramatically lower redemption rates.",
      ],
    },
    {
      title: "Run lifecycle + referral live for 7+ days",
      body: "Let the full system run in production for at least seven days before pulling final metrics. Do not adjust message copy or trigger conditions during the measurement window — changes invalidate comparisons. You may fix bugs.",
    },
    {
      title: "Measure",
      body: "Pull the following metrics at the end of the 7-day window:",
      steps: [
        "Welcome message: open rate and click rate.",
        "Second lifecycle message: open rate, click rate, and triggered count (how many users hit the trigger condition).",
        "Lifecycle-attributed retention lift: compare D7 retention for users who received and opened the welcome vs users who did not (if sample sizes allow).",
        "Referral mechanism: total share events, unique sharers, and any downstream activations or installs attributable to a referral token.",
      ],
    },
    {
      title: "Write the post-mortem",
      body: "Write approximately one page (400–600 words) covering three things: (1) which message moved the needle — cite the specific metric and the magnitude; (2) which intervention felt inauthentic or manufactured — be specific about why, not just that 'it felt off'; (3) what you would build next if you had one more week. Be honest. A post-mortem that identifies a failure is more valuable than one that claims everything worked.",
    },
    {
      title: "Ship the public output",
      body: "Post your lifecycle results publicly on your chosen channel (Twitter/X, LinkedIn, Indie Hackers, a blog, or equivalent). The post must include at least one real metric from your 7-day window and one concrete takeaway. Link to the live product. This is non-negotiable — the goal is to build in public, not to report to a grader.",
    },
  ],

  deliverables: [
    "Screenshots of every live message (welcome + the second lifecycle message) showing them delivered in a real inbox or device.",
    "Trigger configuration: which event fires the trigger, what delay condition applies, and a screenshot of the configuration in your lifecycle tool.",
    "7-day metrics report: open rate, click rate, triggered-count, and lifecycle-attributed retention lift for each message.",
    "Referral mechanism live and accessible (link or screenshot) with share-event telemetry confirmed working (screenshot of the analytics event firing).",
    "Post-mortem (~400–600 words) identifying one specific lift and one fake-feeling intervention with data.",
    "Public output post (link).",
  ],

  rubric: [
    {
      dimension: "Lifecycle tool integrated and sending in production",
      points: 15,
      notes: "Tool choice defended in 2 sentences; at least one message confirmed sending in prod.",
    },
    {
      dimension: "Welcome message triggered correctly",
      points: 20,
      notes: "Fires on activation event (not sign-up); open + click tracking live; copy references the activation action.",
    },
    {
      dimension: "Second lifecycle message live and correctly targeted",
      points: 20,
      notes: "Choice motivated by HW2 cohort data; trigger condition matches the stated drop-off; personalized copy.",
    },
    {
      dimension: "Referral mechanism shipped and measured",
      points: 20,
      notes: "Share UI live; share-event telemetry confirmed; token-based attribution (if applicable).",
    },
    {
      dimension: "Post-mortem identifies one specific lift and one fake-feeling intervention",
      points: 15,
      notes: "Both claims grounded in 7-day data; failure analysis is specific, not vague.",
    },
    {
      dimension: "Public output shipped",
      points: 10,
      notes: "Live link; includes at least one real metric and one concrete takeaway.",
    },
  ],

  hints: [
    "Triggered always beats scheduled — a triggered message compounds (reaches the right person at the right moment) while a scheduled message decays (reaches everyone regardless of signal). Every message in HW4 must have a behavioral trigger.",
    "Apple's push permission requires nuance. iOS shows the system permission dialog exactly once per app install and a 'no' is permanent until the user manually re-enables in Settings. Do not ask on first launch unless the value proposition is immediately obvious. Present the permission prompt after the user has hit an activation event and experienced a win.",
    "Two-sided referral incentives almost never work for indie B2C products — you don't have the storage, credits, or margin that made Dropbox's mechanic work. Build share-the-result instead: let users share a streak, score, artifact, or identity signal. Duolingo's Friend Streak (22% higher daily lesson completion for users with at least one Friend Streak) works because the shared streak is the result, not a coupon for the product.",
    "If you can't attribute referrals cleanly, use a shareable URL with a token parameter (e.g., ?ref=abc123), not a code-entry flow. Codes require users to remember and type a string — redemption rates are dramatically lower than a pre-populated URL that activates automatically on landing.",
    "Open rates lie a little — Apple Mail Privacy Protection pre-loads tracking pixels, inflating email open rates. Click rate is the metric that matters for lifecycle email. For push, open rate is reliable because it requires a real user tap.",
    "Your day-3 nudge copy should reference what the user actually did in their first session, not generic 'we miss you' language. If your analytics don't have that property yet, add it this week — it is the single highest-leverage personalization you can make at this stage.",
  ],
};

export function Hw4Page() {
  return <ProjectPage spec={spec} />;
}

export const hw4SearchBody = [
  spec.title,
  spec.tagline ?? "",
  ...spec.overview,
  ...spec.goals,
  ...(spec.background ?? []),
  ...spec.instructions.map((t) => `${t.title} ${t.body ?? ""} ${(t.steps ?? []).join(" ")}`),
  ...spec.deliverables,
  ...(spec.hints ?? []),
].join(" ");
