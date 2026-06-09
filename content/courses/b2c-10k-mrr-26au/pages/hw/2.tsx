import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW2 — Pricing + paywall",
  tagline: "Pick a price someone will pay this week. Ship the paywall. Defend the choice.",
  outDate: "End of Week 3",
  dueDate: "End of Week 4 (Friday 11:59pm)",
  overview: [
    "Pricing is the lever most technical founders refuse to touch. It feels presumptuous, risky, and premature — so it gets deferred until a \"later sprint\" that never arrives. This course takes a different stance: the price you charge is a hypothesis, not a commitment. The sooner you pick one and put it in front of real users, the sooner you have data. The data tells you what to do next.",
    "Pieter Levels priced Nomad List based on user value rather than cost, iterating toward what the market would bear. Tony Dinh made deliberate model choices across his portfolio — charging a one-time fee for DevUtils because there were no recurring server costs, while building Black Magic as a subscription once recurring value was obvious. Both founders share a common trait: they shipped a price early, watched what happened, and adjusted. Neither agonised over the \"perfect\" number before launch.",
    "This assignment operationalises that mindset. By end of Week 3 you will have a live paywall in production. By end of Week 4 you will have 7+ days of real conversion data and a written post-mortem. The goal is not to maximise revenue this week — it is to replace your pricing assumptions with evidence.",
  ],
  goals: [
    "Choose a pricing model (free, freemium, paid, or hybrid) and defend the choice against the three alternatives in one page.",
    "Compute a rough LTV and CAC for your product, labelling every number you're estimating versus measuring.",
    "Place a paywall — hard, soft, or metered — live in production and articulate why that placement fits your activation flow.",
    "Wire a payment integration (Stripe, RevenueCat, or App Store IAP) so that a test purchase completes end-to-end.",
    "Measure trial start rate and trial → paid conversion over 7 days and identify the one number you would change first.",
  ],
  background: [
    "Four pricing models dominate B2C: free (monetise later, or never), freemium (core free, premium gated), paid (no free tier), and hybrid (free trial + paid). Free maximises top-of-funnel but defers the revenue signal indefinitely. Freemium lets you grow a large user base but risks training users to expect everything without paying — the RevenueCat State of Subscription Apps 2025 report shows freemium apps converting at 2.18% from download to paying subscriber at day 35, versus 12.11% for hard-paywall apps. Paid and hybrid models surface willingness-to-pay quickly but shrink your addressable top-of-funnel. Paddle/ProfitWell research across 30,000+ subscription companies found that most founders spend fewer than five hours total on pricing strategy — a striking gap given how directly it compounds into LTV and MRR.",
    "Anchor pricing shapes how users perceive the value of your offer before they've decided whether to buy. Presenting a $99/year plan beside a $9.99/month plan makes the monthly look accessible. Tony Dinh chose $9 one-time for DevUtils because the absence of recurring server costs made a subscription feel dishonest — a classic value-based anchor decision. Pieter Levels has been explicit that \"the price is not about the cost\" — it is about what the user perceives they are getting. The Monetizing Innovation framework (Ramanujam & Tacke) goes further, arguing that willingness-to-pay research should drive feature decisions before anything is built.",
    "Paywall placement determines when the friction lands. A hard paywall blocks all value before payment — high conversion rate (12.11% day-35 per RevenueCat) but kills virality, so it only makes sense if your acquisition channel is search or SEO rather than referral. A soft paywall offers a free trial before requiring payment — the RevenueCat data shows 82% of trial starts happen on install day, and trial-to-paid conversion improves with longer trials (45.7% for 17–32 day trials). A metered paywall lets users consume some value for free and gates at a threshold — well-suited to tools where power users self-identify. Placement should reflect where your activation event already lives: the paywall converts best when it sits just after the aha moment, not before it.",
    "Trial mechanics are a sub-decision within paywall type. Annual plans improve cashflow and reduce nominal churn rate, but they hide real churn because the first renewal is 12 months away. Monthly plans surface churn faster and let you iterate. PPP (purchasing power parity) pricing — offering localised discounts based on the buyer's country GDP — can lift conversion in emerging markets by 20–50% at minimal MRR cost, as Sebastien Castiel documented implementing it for his React hooks course. For mobile products, RevenueCat handles the App Store and Google Play IAP complexity for free below $2.5k monthly tracked revenue, removing most of the reason to wire raw StoreKit or Google Billing APIs directly.",
  ],
  instructions: [
    {
      title: "Choose your pricing model and write the 1-paragraph defense.",
      body: "Select one of: free, freemium, paid (one-time or subscription), or hybrid (free trial → paid). In one paragraph, defend your choice by naming the specific tradeoff you are accepting. If you chose freemium, state your conversion rate assumption and how you will know it is wrong. If you chose paid, state what your top-of-funnel sacrifice is and why it is acceptable. Reference at least one source from the course reading list.",
    },
    {
      title: "Pick your anchor price and write the defense.",
      body: "Specify the price (or prices, if you have tiers). Defend it by covering three things: (1) what comparable products charge, (2) what willingness-to-pay signals you have collected from real users or interviews, and (3) what a 2× higher price would require you to believe about your users. If you are considering PPP discounts, note which regions and at what discount level.",
    },
    {
      title: "Choose your paywall type and placement.",
      body: "Select hard, soft, or metered. State exactly where in your product flow the paywall appears — e.g. \"after signup, before first project is saved\" or \"after 3 uses of the export feature.\" Justify the placement relative to your activation event. If the paywall blocks the activation event, that is a deliberate choice you must defend.",
    },
    {
      title: "Wire Stripe, RevenueCat, or IAP to a working test purchase.",
      body: "Complete a test transaction end-to-end: the payment intent is created, the webhook fires, and your app unlocks the gated feature. Screenshot the test transaction in your payment provider dashboard. For mobile apps, RevenueCat is strongly recommended over raw StoreKit/Google Billing — it handles entitlements, receipt validation, and multi-platform support with minimal code.",
      steps: [
        "Create a product and price in Stripe (or a product in RevenueCat linked to your App Store / Play Store product).",
        "Implement the purchase flow in your app.",
        "Complete a test purchase using Stripe test mode or RevenueCat sandbox.",
        "Confirm via webhook or entitlement check that the feature unlocks.",
        "Screenshot the dashboard showing the test transaction.",
      ],
    },
    {
      title: "Ship the paywall to production behind a feature flag.",
      body: "Deploy the paywall so real users can hit it. Wrap it in a feature flag (environment variable, LaunchDarkly, or a simple boolean in your config) so you can revert in under 5 minutes without a redeploy if conversion collapses. Document the flag name and how to toggle it in your pricing brief.",
    },
    {
      title: "Run the paywall for 7+ days (covering Week 3 into Week 4).",
      body: "Leave it live. Resist the urge to iterate on copy or placement mid-week — you need a clean 7-day read. You may fix bugs. You may not change pricing, placement, or trial length during the measurement window.",
    },
    {
      title: "Measure: trial start rate, trial → paid conversion, MRR delta.",
      body: "At the end of 7 days, pull your numbers. At minimum: (1) how many unique users hit the paywall, (2) how many started a trial or completed a purchase, (3) how many converted to paid, and (4) what your MRR was before vs after. If your numbers are zero, that is a valid and informative result — present it honestly.",
      steps: [
        "Export data from Stripe, RevenueCat, or your analytics tool as CSV or screenshots.",
        "Compute trial start rate = trials started / users who hit the paywall.",
        "Compute trial → paid rate = paid conversions / trials started (or estimate if trial has not expired).",
        "State your MRR delta (even if $0).",
      ],
    },
    {
      title: "Write the post-mortem: did your hypothesis match? What re-price would you try?",
      body: "One page. Answer four questions: (1) What did you predict your trial start rate and trial → paid rate would be? (2) What did you actually see? (3) What is your best explanation for the gap? (4) What specific re-price hypothesis would you test next — a different price point, a different paywall placement, a longer trial, or a model change — and what data would tell you it worked?",
    },
  ],
  deliverables: [
    "1-page pricing brief (model, anchor price, trial mechanics, paywall placement — each choice defended with cited reasoning).",
    "Screenshot of the paywall live in production, showing the gated feature and the payment CTA.",
    "Stripe or RevenueCat dashboard screenshot showing at least 1 completed test transaction.",
    "7-day data dump — CSV export or annotated screenshots from your payment/analytics tool covering trial starts, conversions, and MRR delta.",
    "Post-mortem (1 page): hypothesis vs actual, explanation of gap, and one specific re-price hypothesis for next iteration.",
    "Public output: post your pricing experiment and 7-day result publicly (Twitter/X thread, Indie Hackers post, or equivalent). Link included in submission.",
  ],
  rubric: [
    {
      dimension: "Pricing brief defends model + anchor with cited reasoning",
      points: 20,
      notes: "Model choice names its tradeoff; anchor cites competitor data or user interviews; at least one source from the reading list.",
    },
    {
      dimension: "Paywall live in production",
      points: 20,
      notes: "Screenshot shows real paywall behind a feature flag; flag name documented.",
    },
    {
      dimension: "Payment integration completes a test purchase",
      points: 15,
      notes: "Dashboard screenshot shows test transaction; feature unlock confirmed.",
    },
    {
      dimension: "7-day data presented honestly",
      points: 15,
      notes: "Trial start rate, trial → paid rate, and MRR delta all stated; zero is accepted if explained.",
    },
    {
      dimension: "Post-mortem identifies one specific re-price hypothesis",
      points: 15,
      notes: "Hypothesis is specific (price, placement, trial length, or model) and tied to observed data.",
    },
    {
      dimension: "Public output shipped",
      points: 10,
      notes: "Link to live post included; post discloses at least one real number.",
    },
    {
      dimension: "Polish + clarity",
      points: 5,
      notes: "Brief and post-mortem are readable and free of placeholder text.",
    },
  ],
  hints: [
    "Localise prices with PPP if you have international users — even a simple 40% discount for emerging markets can lift conversion 20–40% with minimal MRR cost. Sebastien Castiel's implementation guide is in the reading list.",
    "Hard paywalls convert at 5–6× the rate of freemium (12.11% vs 2.18% day-35, per RevenueCat 2025) but kill virality. Only choose hard if your primary acquisition channel is search or SEO, not referral or word-of-mouth.",
    "Annual plans help cashflow and look good in your MRR chart, but they hide real churn because you won't see renewal failures for 12 months. Launch monthly-only first; add annual once you have a conversion baseline.",
    "RevenueCat handles 90%+ of the App Store IAP complexity for free below $2.5k monthly tracked revenue — entitlement management, receipt validation, webhook normalisation. There is almost no reason to wire raw StoreKit or Google Billing for a new product.",
    "The feature flag is not optional. If your trial start rate is 0% after 48 hours, you want to revert in minutes, not redeploy. Document the toggle before you ship.",
    "82% of trial starts happen on install day (RevenueCat 2025). If your paywall only appears after users have used the product for a week, you are missing most of your conversion window — consider an earlier touch.",
  ],
};

export function Hw2Page() {
  return <ProjectPage spec={spec} />;
}

export const hw2SearchBody = [
  spec.title,
  spec.tagline ?? "",
  ...spec.overview,
  ...spec.goals,
  ...(spec.background ?? []),
  ...spec.instructions.map((t) => `${t.title} ${t.body ?? ""} ${(t.steps ?? []).join(" ")}`),
  ...spec.deliverables,
  ...(spec.hints ?? []),
].join(" ");
