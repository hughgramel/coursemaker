import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW3, First dollar",
  tagline:
    "Make one real trial fire. Document why it did or why it didn't.",
  outDate: "End of Week 6",
  dueDate: "End of Week 8 (Friday 11:59pm)",

  overview: [
    "Stripe is wired. The checkout flow exists. The webhook is registered. And as of the June 2026 snapshot, zero trial_started events have ever appeared in PostHog. That gap between \"plumbing complete\" and \"a human entered the funnel\" is the only thing this assignment addresses. Everything else is secondary to closing it.",
    "The first job is not to optimize your price. It is not to redesign the paywall copy. It is to make the checkout path fire at least once for a real non-founder user, confirm the event in PostHog, and record exactly what you had to do to get there. The diagnosis of that effort, which part of your funnel swallowed the user before they hit the paywall, is the most valuable data you will collect in phase 2 of this course.",
    "The two supporting deliverables, willingness-to-pay conversations and a competitive price-positioning one-pager, inform the decision you have already made ($7.99/mo, $49/yr) and help you hold it or replace it with evidence rather than anxiety. Patrick Campbell argues that most founders spend fewer than five hours total on pricing strategy, which means even a handful of structured conversations puts you ahead of the field (Campbell, 2016). But those conversations are in service of the trial, not a substitute for it.",
    "If by the due date zero real trials have fired, you still pass the success bar, provided you submit a documented diagnosis: exactly which step in the funnel stops users, what you tried, what the data showed, and what you intend to change in week 9. An honest null result with a named root cause is more useful than an undocumented conversion that you cannot reproduce.",
  ],

  goals: [
    "Fire at least one real, non-founder trial_started event in PostHog, verified by a live Stripe test-mode or live-mode checkout session reaching completion (Hale, 2019).",
    "Conduct five willingness-to-pay conversations with engaged users from the HW2 cohort using Mom Test discipline: past behavior only, no hypotheticals, no leading questions.",
    "Build a one-page competitive price-positioning document stating what $7.99/mo and $49/yr communicate relative to LingQ ($12.99/mo) and Dreaming Spanish ($8/mo), and to whom that positioning is legible.",
    "Produce a funnel report covering every user who reached the paywall this cycle: trial start rate, and the single most common recorded reason users stopped before completing checkout.",
    "Either confirm the trial fires end to end, or document, with PostHog screenshots and session data, the exact step where it breaks.",
  ],

  background: [
    "Value-based pricing starts with a question: what outcome does the user pay for, and how do they measure it? Kevin Hale frames this as the pricing thermometer: cost at the bottom, price in the middle, value at the top (Hale, 2019). A product priced at the cost layer leaves most of the value on the table; a product priced at the value layer captures it. For LangoBee the value is comprehensible immersion in a target language without having to curate content yourself. The $7.99/mo price sits well below LingQ's $12.99, which means the current positioning is cost-anchored rather than value-anchored. That might be correct at this stage of the business, but it should be a deliberate choice backed by willingness-to-pay data, not a default.",
    "The value metric is the unit of value the customer actually pays for growth of. Campbell and colleagues identify picking the right value metric as the single most consequential pricing decision because it determines how revenue scales as customers get more value (Campbell, 2016). For a language-learning app, candidates include words encountered per month (usage-based), number of languages active (seat-based), or a flat subscription regardless of usage. LangoBee currently uses flat-rate subscription, which is defensible because learners have uneven usage patterns and adding a usage gate raises perceived risk. The flat rate communicates: pay once, read as much as you want. That message is legible to the user fleeing Duolingo's gamification pressure.",
    "The freemium tradeoff is not a philosophical question at this stage; it is an arithmetic one. Kyle Poyar's benchmark across 200 software products shows that credit-card-required free trials convert 25-50% of trial starters to paid, compared to 5-8% for freemium-to-paid (Poyar, 2022). Per 1,000 visitors, freemium generates roughly 90 signups and 5 paying customers; a CC-required trial generates roughly 45 signups and 9-11 paying customers. For a product with 4 weekly active users and $0 MRR, the question is not which model is philosophically correct but which one produces the first dollar fastest. A CC-required trial is the higher-conversion path at this scale (Poyar, 2022; Poyar, 2026).",
    "Trial mechanics determine when and how a user commits. LangoBee's current setup is a 14-day CC-required trial: the user must enter payment credentials before experiencing the product. Patrick Campbell's four-question willingness-to-pay survey (too cheap / good deal / expensive / too expensive) is calibrated for exactly this gate: it surfaces the price band where most engaged users place the product, which tells you whether $7.99 is above or below the \"good deal\" threshold for your specific cohort (Campbell, 2016). Madhavan Ramanujam adds the van Westendorp framing: the acceptable price range is bounded by the point where the product starts to feel cheap on the low side and where resistance peaks on the high side (Ramanujam, 2022). Running five WTP conversations before the due date gives you enough signal to hold the current price or adjust it before the week 9 distribution push.",
    "The competitive frame sets context for what $7.99 communicates. LingQ charges $12.99/mo and is the acknowledged benchmark for serious comprehensible-input learners: its catalog is deeper, its dictionary integration more mature, and its brand is 15+ years old. Dreaming Spanish charges $8/mo for Patreon access to native Spanish video content, the exact CI ecosystem where LangoBee's early adopters congregate. Duolingo Super is $6.99-$12.99/mo depending on offer, positioned at the gamified-streak user who does not think of themselves as a serious learner. LangoBee at $7.99 lands between Dreaming Spanish and LingQ, which is legible as \"more than a content channel, less than a full language platform.\" Whether that positioning is intentional or incidental is what the one-pager must settle.",
  ],

  instructions: [
    {
      title: "Test the trial end to end yourself before anyone else sees it",
      body: "Open your product in an incognito window. Go through the full trial signup flow using a Stripe test-mode card (4242 4242 4242 4242). Confirm that: (1) the Stripe checkout session completes, (2) the webhook fires, (3) the app unlocks any gated feature, and (4) a trial_started event appears in PostHog's live events stream within 60 seconds. Screenshot each step. If any step fails, fix it before recruiting a real user. Do not skip this self-test and jump straight to recruiting: the self-test reveals broken redirects, missing webhook handlers, and missing analytics calls before they cost you a real user.",
      steps: [
        "Open the product in incognito. Navigate to the paywall.",
        "Complete checkout with Stripe test card 4242 4242 4242 4242, any future date, any CVC.",
        "In the Stripe dashboard, confirm the checkout.session.completed event fired.",
        "In PostHog, confirm a trial_started event (or your equivalent named event) appears in the live events stream.",
        "Screenshot the PostHog event and the Stripe event side by side.",
        "If the event does not appear: check your webhook endpoint URL in Stripe's dashboard, confirm the handler is deployed to production (not localhost), and check server logs for 4xx or 5xx errors on the webhook route.",
      ],
    },
    {
      title: "Get one real (non-founder) user to start a trial",
      body: "Your HW2 cohort (the Discord users you recruited manually) is the right pool to recruit from. A user who has already activated is the most likely to convert: they have experienced the word-lookup loop, they know what the product does, and they have already expressed enough interest to show up. Do not recruit cold strangers for this; do not run ads. Do the unscalable thing: message users individually, acknowledge they have been using the product, and ask if they are willing to try the premium version for free for 14 days. That framing removes the financial barrier and makes yes the path of least resistance.",
      steps: [
        "Pull a list from PostHog or Supabase of non-founder users who have at least one session after their signup day (these are your retained users).",
        "Message each individually via Discord. Say what the product is for them specifically, not a generic pitch.",
        "Offer the 14-day trial directly: share the trial signup link.",
        "If they start the trial: note the date, how they were recruited, and confirm the PostHog event fires.",
        "If they decline or do not respond: note the reason if they give one. This data feeds your funnel report.",
      ],
    },
    {
      title: "Run five willingness-to-pay conversations using Mom Test discipline",
      body: "The goal is to calibrate whether $7.99/mo is above or below the price where engaged users feel they are getting a good deal, and to understand how they mentally compare LangoBee to the alternatives they currently pay for. Mom Test discipline means: ask only about past behavior and current spending, never ask whether they would pay or what they think is a fair price, and let them volunteer the numbers. The four-question price sensitivity framework gives you a structured way to probe after you have established rapport: ask at what monthly price the product starts to feel cheap, at what price it becomes a good deal, at what price it starts to feel expensive, and at what price it is too expensive to consider regardless of value (Campbell, 2016).",
      steps: [
        "Recruit from your HW2 cohort first. Anyone who has returned at least twice is an engaged user worth interviewing.",
        "Start with behavioral questions: what language learning tools do you currently pay for, how much, and why did you choose each one.",
        "Ask about their current spending ceiling: what is the most they pay per month for any subscription they consider optional.",
        "After establishing rapport, introduce the four-question price sensitivity sequence: cheap / good deal / expensive / too expensive.",
        "Take notes in a structured format: user ID or pseudonym, current tools and spend, price sensitivity thresholds, any spontaneous comparison to LingQ or Dreaming Spanish.",
        "Do not introduce LangoBee's current price until after they have answered the price sensitivity questions. Anchoring contaminates the data.",
      ],
    },
    {
      title: "Write the competitive price-positioning one-pager",
      body: "This document answers a single question: what does $7.99/mo communicate, and to whom? Structure it as a comparison table across four products: LangoBee ($7.99/mo or $49/yr), LingQ ($12.99/mo), Dreaming Spanish ($8/mo Patreon), and Duolingo Super ($6.99-$12.99/mo). For each product, state the value metric (what the user is paying for), the primary audience, and what the price signals about positioning. Then write two paragraphs: one arguing that $7.99 is the right price given what LangoBee delivers and to whom, and one arguing it should be higher or lower, citing your WTP interview findings. Pick a side. The one-pager is not a menu of options; it is a defended position.",
      steps: [
        "Build the comparison table: four rows (LangoBee, LingQ, Dreaming Spanish, Duolingo Super), four columns (price, value metric, primary audience, what the price signals).",
        "Write the paragraph defending the current price, citing at least one WTP interview finding and one benchmark from the sources.",
        "Write the dissenting paragraph, citing the same sources but arguing the opposite. Be specific about what would have to be true about your users for the dissenting view to be correct.",
        "End with one sentence stating your current position and what evidence would change it.",
      ],
    },
    {
      title: "Run the paywall for the full cycle and collect funnel data",
      body: "Do not change the price, trial length, or paywall placement between the HW3 out date and the due date. You need a clean read. What you can do is fix bugs (a broken redirect, a missing event, a 500 error on checkout). Use PostHog to track every user who reaches the paywall screen. For each user who reaches the paywall but does not complete a trial, record the exit point if you can observe it: did they leave the paywall screen without clicking, did they abandon the Stripe checkout form, did they complete checkout but the webhook failed? The funnel report is the output of this observation.",
    },
    {
      title: "Write the funnel report",
      body: "The funnel report covers the full cycle from HW3 out date to due date. It should be one page and state four numbers: (1) how many unique non-founder users visited the product, (2) how many reached the paywall screen, (3) how many started a trial (PostHog trial_started events, non-founder), and (4) how many converted to a paid subscription. If the trial count is zero, state that explicitly and include your best diagnosis of where the funnel stops. A diagnosis names the specific step, states the evidence for that claim (a PostHog screenshot, a Stripe event log, a session recording), and offers one concrete hypothesis for why that step fails.",
      steps: [
        "Pull the paywall-reach count from PostHog (a funnel report from first pageview to paywall screen).",
        "Pull the trial_started count filtered to non-founder user IDs.",
        "Pull the subscription.active or charge.succeeded count from Stripe for the same window.",
        "If trial count is zero: include one PostHog screenshot and one Stripe event log screenshot showing the absence of events.",
        "State the top recorded reason users stopped. If you have no data on why, state that too.",
      ],
    },
    {
      title: "Ship public output and submit",
      body: "Before submitting, post publicly on any channel (X/Twitter, Indie Hackers, your Discord, or a build-in-public thread) with three sentences: what you shipped, one real funnel number, and one thing you learned about why trials do or do not fire. A zero is not shameful; reporting it honestly is the thing. Link to the post in your submission.",
      steps: [
        "Write and publish the three-sentence post. Include at least one real number from the funnel report.",
        "Copy the URL.",
        "Submit: funnel report, WTP conversation notes, competitive positioning one-pager, PostHog + Stripe screenshots, and the public post URL via the course submission form.",
      ],
    },
  ],

  deliverables: [
    "PostHog screenshot showing at least one non-founder trial_started event (or a documented null result with diagnosis if zero trials fired).",
    "Stripe dashboard screenshot of the corresponding checkout.session.completed event or subscription record.",
    "Five WTP conversation notes, structured: user pseudonym, current tools and spend, price sensitivity thresholds (cheap / good deal / expensive / too expensive), any LingQ or Dreaming Spanish comparison raised spontaneously.",
    "Competitive price-positioning one-pager: comparison table plus two defended paragraphs, one for the current price and one against it.",
    "Funnel report, one page: visitors, paywall-reach count, trial starts, paid conversions, and the top recorded reason users stopped.",
    "Public output URL: link to the three-sentence build-in-public post.",
  ],

  rubric: [
    {
      dimension: "Trial verifiably fires",
      points: 30,
      notes:
        "PostHog event screenshot and Stripe event screenshot both present. Event timestamp matches and the user ID is not a founder alt. If zero trials: a documented diagnosis with PostHog and Stripe evidence earns up to 20 points; zero trials with no diagnosis earns zero.",
    },
    {
      dimension: "WTP interviews follow Mom Test rules",
      points: 25,
      notes:
        "Five conversations documented. Notes contain past-behavior questions and price sensitivity thresholds. No question asks 'would you pay' or 'what do you think is fair.' Hypothetical or leading questions visible in the notes cap this dimension at 10 points.",
    },
    {
      dimension: "Positioning is specific",
      points: 20,
      notes:
        "Comparison table is complete and accurate. Both paragraphs name the user archetype, not a generic audience. A position is taken and defended with evidence from WTP notes or cited benchmarks, not stated as preference.",
    },
    {
      dimension: "Funnel report is honest and complete",
      points: 15,
      notes:
        "All four funnel numbers present. Zero is accepted if stated. Top-reason diagnosis names a specific step with evidence. Blaming 'not enough traffic' without citing the visitor count is not a diagnosis.",
    },
    {
      dimension: "Public output shipped",
      points: 5,
      notes:
        "URL resolves, post is public, includes at least one real number, posted before submission deadline.",
    },
    {
      dimension: "Polish and structure",
      points: 5,
      notes:
        "Deliverables follow the formats specified. Conversation notes use the structured format. Funnel report is one page. No placeholder text.",
    },
  ],

  hints: [
    "The self-test in Instruction 1 will catch 80% of the reasons a trial never fires in production: a missing webhook endpoint, a localhost URL still registered in Stripe, or a PostHog event that fires only on localhost. Do it before you recruit anyone.",
    "Your most likely trial user is someone who has already returned to the product at least twice. Pull that list from PostHog (users with two or more sessions after signup day, excluding your own accounts). A user who returns without being prompted has already answered the engagement question; they are a closer prospect than any cold lead you could recruit.",
    "Mom Test discipline breaks down most often on the price sensitivity questions. The wrong version: 'Would $7.99 feel reasonable to you?' The right version: 'At what price would this start to feel too cheap to trust?' Then: 'At what price would you start to hesitate?' Then: 'At what price would you rule it out entirely regardless of what it does?' (Campbell, 2016).",
    "When writing the positioning one-pager: Dreaming Spanish charges $8/mo for a content creator's back-catalog, not a platform with word-level tracking. LingQ charges $12.99/mo for a platform with 15 years of library depth. LangoBee at $7.99 is below both. The question is whether that communicates 'accessible and new' or 'lacks confidence in its own value.' Your WTP data tells you which reading your users bring to the number.",
    "If zero trials fire by week 7, do not wait for week 8 to diagnose. Pull PostHog session recordings filtered to users who visited the paywall screen. Watch what they do. The diagnosis is in the recording. A user who opens the paywall and leaves in two seconds has a different problem than a user who abandons the Stripe form after entering a name.",
    "Poyar's 2026 benchmark shows that CC-required trials convert 25-50% of trial starters to paid (Poyar, 2026). The bottleneck at LangoBee is not trial-to-paid conversion; it is getting anyone to the trial start point. Do not let the downstream optimization distract from the upstream problem.",
  ],

  late:
    "One week late: maximum 80 points. Two weeks late: maximum 60 points. Submissions more than two weeks late are not accepted. A zero-trial result documented with PostHog and Stripe evidence is accepted at any submission date. A zero-trial result with no evidence is not.",
};

export function Hw3Page() {
  return <ProjectPage spec={spec} />;
}

export const hw3SearchBody = [
  spec.title,
  spec.tagline ?? "",
  ...spec.overview,
  ...spec.goals,
  ...(spec.background ?? []),
  ...spec.instructions.map(
    (t) => `${t.title} ${t.body ?? ""} ${(t.steps ?? []).join(" ")}`
  ),
  ...spec.deliverables,
  ...(spec.hints ?? []),
].join(" ");
