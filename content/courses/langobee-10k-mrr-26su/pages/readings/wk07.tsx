import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk07Reading() {
  return (
    <ReadingPage
      id="wk07"
      title="Week 7: Paywall placement and the trial-to-paid funnel"
      kicker="LangoBee to $10K MRR · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers why paywall placement determines trial entry
          more than price does, what the comprehension score means as a
          conversion moment, how to instrument the trial funnel to find
          where drop-off happens, and what the first paying customer
          requires that the hundredth does not. By the end you will be
          able to name LangoBee's current paywall problem precisely
          (placement before demonstrated value), identify the one move
          that addresses it, and write the three-email trial nurture
          sequence the product needs before it can produce conversion data.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Week 3 (time-to-value,
          activation), week 4 (retention hooks as re-engagement
          touchpoints), week 6 (value metric, trial-funnel benchmarks,
          willingness-to-pay questions). The concepts of trial-to-paid
          conversion rate, CC-required trial, and the four AARRR stages
          are used without re-introduction.
        </p>
      </ReadingFraming>

      {/* ---- 1 ---- */}
      <AnchorHeading as="h2" id="1-the-paywall-placement-problem">
        1. The paywall placement problem
      </AnchorHeading>
      <p>
        A paywall is a gate. Every gate has a location. The location
        determines what the user has experienced before they are asked to
        pay. That experience, or absence of it, is the primary driver of
        whether they enter the trial.
      </p>
      <p>
        LangoBee's June 2026 state: a credit-card-required 14-day trial,
        gated before the user has seen any product. Zero real users have
        entered the trial funnel. 5,225 word_lookup_opened events fired in
        30 days from real users. The engagement signal exists. The revenue
        signal does not. The gap between these two facts is a placement
        problem, not a product problem.
      </p>
      <p>
        The founding assumption behind a front-door gate is that the landing
        page carries enough persuasion to produce payment intent before the
        user touches the product. For most consumer apps this assumption
        is wrong. RevenueCat tracked apps that moved their paywall from
        the front door to immediately after the aha moment: in one plant
        care app, signup-to-trial conversion jumped from 3% to 15%; a
        mental health app saw a 5x revenue increase with the same move.
        (Meinertzhagen, 2023)
      </p>
      <p>
        The mechanism is not trickery. It is evidence. A user who has seen
        their personal comprehension score, or who has tapped a word and
        received a definition that made sense, has a specific reason to
        pay. A user who has only read copy has a generic reason. Generic
        reasons produce lower conversion.
      </p>

      {/* ---- 2 ---- */}
      <AnchorHeading as="h2" id="2-demonstrated-value-defined">
        2. Demonstrated value defined
      </AnchorHeading>
      <p>
        "Demonstrated value" is the moment a user has received a personal,
        specific result from your product that they could not have gotten
        elsewhere for free in the same session. Jake Mor's formulation:
        "The most important thing is getting a user to an aha moment as
        quickly as possible, then presenting the paywall." (Mor, cited in
        Meinertzhagen, 2023)
      </p>
      <p>
        For LangoBee, demonstrated value has a clear candidate: the per-video
        comprehension score. The score is personal (it reflects this user's
        known words, not a generic difficulty rating), specific (it gives a
        percentage, not a category), and unavailable elsewhere in the same
        form. It answers a question the learner actually has: how much of
        this content can I understand right now?
      </p>
      <p>
        A second, earlier candidate exists: word_lookup_opened. When a user
        taps a word and receives a definition, they have (a) identified a
        gap in their knowledge, (b) asked the product to help, and (c)
        received help. That three-step sequence is the aha moment. The word
        tap fires earlier in the session than the comprehension score, and
        it fires 5,225 times per month from real users. Either moment is
        defensible as a paywall trigger. The comprehension score has more
        emotional weight; the word tap has more volume.
      </p>

      <Callout title="What demonstrated value is not">
        <p>
          Demonstrated value is not seeing the product catalog. Knowing
          that 17,440 texts exist is a promise, not a result. A promise
          asks the user to imagine the future value. A result is the value
          now, for this user. The distinction matters because conversion
          copy can deliver a promise and the product can deliver a result:
          the result converts better.
        </p>
      </Callout>

      {/* ---- 3 ---- */}
      <AnchorHeading as="h2" id="3-four-placement-strategies">
        3. The four placement strategies
      </AnchorHeading>
      <p>
        Parizek (2024) names four paywall placement strategies used by
        top-converting subscription apps:
      </p>
      <p>
        <strong>Onboarding placement</strong> fires at the end of the
        first-run setup flow, before the user reaches the core product.
        This strategy accounts for roughly 50% of all trial starts across
        apps and works best when the onboarding itself demonstrates value
        (a quiz result, a personalized recommendation, a setup action that
        takes time to recreate). For LangoBee, onboarding currently ends
        at language selection. No demonstrated value has occurred before
        the gate. Onboarding placement requires fixing the onboarding
        first.
      </p>
      <p>
        <strong>Contextual placement</strong> fires when the user hits a
        premium-only feature or completes a value moment. This is the
        most relevant strategy for LangoBee now. The trigger is the
        comprehension score appearing, or a word tap count crossing a
        threshold. The user has value; the paywall asks if they want more.
      </p>
      <p>
        <strong>Buy-now placement</strong> fires on a dedicated pricing
        screen the user navigates to voluntarily. This strategy requires
        the user to already be motivated. It works best as a secondary
        path (the user who goes looking for pricing), not the primary one.
      </p>
      <p>
        <strong>Campaign placement</strong> fires via push, email, or
        in-app message after a period of inaction or at a specific trial
        milestone. The day-12 trial expiry email is a campaign placement.
        It should exist in addition to, not instead of, contextual
        placement.
      </p>
      <p>
        The practical recommendation for a pre-revenue product: start with
        contextual placement. It requires the least traffic to generate
        signal, it fires at the highest-intent moment, and it produces a
        measurable test with a clear pre/post event (value moment fired,
        then paywall shown, then trial_started or not).
      </p>

      {/* ---- 4 ---- */}
      <AnchorHeading as="h2" id="4-the-trial-to-paid-funnel">
        4. The trial-to-paid funnel
      </AnchorHeading>
      <p>
        Once users enter the trial, the funnel has four steps: trial
        started, trial active (returned at least once), trial expiring
        (day 12-14), trial converted. Each step has a benchmark.
      </p>
      <p>
        Poyar (2026) reports across 200 software products: CC-required
        trials convert 25-35% (good) to 50-60% (great). RevenueCat's
        2025 benchmark across 75,000+ apps reports a median trial-to-paid
        rate of roughly 35-40%, with top performers exceeding 60% when
        trial length exceeds 4 days. (RevenueCat Research Team, 2025)
      </p>
      <p>
        Per 1,000 visitors, a CC-required trial model yields roughly 45
        signups and 3.6 paying customers. A freemium model yields 90
        signups and 5 paying customers. Neither model strictly dominates,
        but for a product where the activated experience is demonstrably
        better than the pre-activation description, the CC-required model
        is appropriate because it filters for users who are already
        persuaded. (Poyar, 2026)
      </p>
      <p>
        LangoBee's funnel currently breaks before the trial starts. The
        relevant question is not trial-to-paid conversion rate (which cannot
        be measured from zero trials) but rather the steps before: what
        happens between signup and the trial gate? The answer from the June
        2026 PostHog data: users activate (word tap, video open), engage
        (5,225 word lookups per month), and then stop. The trial_started
        event never fires.
      </p>

      {/* ---- 5 ---- */}
      <AnchorHeading as="h2" id="5-nurture-during-the-trial">
        5. Nurture during the trial
      </AnchorHeading>
      <p>
        RevenueCat's 2025 report shows 82% of trial starts occur on day 0.
        The user's intent is highest at signup and decays every day without
        reinforcement. Trial nurture is not marketing copy. It is a sequence
        of product-data mirrors: show the user what they have done, what
        it means, and what they would lose.
      </p>
      <p>
        Phil Carter's Subscription Value Loop identifies three moments that
        move trial-to-paid rates: rapid activation within session 1 (build
        the habit before the trial ends), repeatable engagement across
        sessions (show the product working over time), and a clear
        expiry-warning touchpoint. (Carter, 2024)
      </p>
      <p>
        For LangoBee, a three-email minimum works with data the product
        already captures:
      </p>
      <p>
        <strong>Day 0.</strong> Trigger: trial_started. Content: confirm
        the one result the user saw in their first session. "You recognized
        74% of the words in your first video. Here's what 80% feels like."
        Do not sell. Mirror.
      </p>
      <p>
        <strong>Day 3-5.</strong> Trigger: word_lookup_opened count
        available. Content: "Since you joined, you've looked up [N] words.
        That's [N] words your vocabulary didn't have last week." Include
        one video recommendation matched to their current comprehension
        score. The watch-next ranker (mean_zipf) already produces this
        recommendation. One engineer hour to pipe it into an email.
      </p>
      <p>
        <strong>Day 12.</strong> Trigger: trial expiring in 48 hours.
        Content: explicit, honest, non-manipulative. List what stays
        accessible after expiry (nothing, if the product is premium-only)
        and what the monthly cost is. One button: "Keep access."
      </p>

      {/* ---- 6 ---- */}
      <AnchorHeading as="h2" id="6-four-churn-categories">
        6. Four churn categories and how to diagnose them
      </AnchorHeading>
      <p>
        Churn diagnosis starts with classification. Four categories cover
        most early-stage cases:
      </p>
      <p>
        <strong>Never-activated.</strong> The user started a trial but
        never reached the product's core value. They churned from the
        trial with no memory of a useful moment. The fix is onboarding
        speed, not conversion copy. Indicator: trial_started fired, but
        word_lookup_opened and video_opened never fired in the same
        session.
      </p>
      <p>
        <strong>Value-not-seen.</strong> The user activated but did not
        see a result they found compelling enough to pay for. They engaged
        with the product and then concluded it was not worth $7.99. The
        fix is improving the demonstration of value, not the price.
        Indicator: word_lookup_opened fired repeatedly, but no high-
        comprehension-score session occurred.
      </p>
      <p>
        <strong>Price.</strong> The user saw the value but found the price
        too high relative to alternatives (LingQ at $12.99/mo, Dreaming
        Spanish free on YouTube). The fix is pricing, anchoring, or
        positioning. Indicator: cancellation survey cites cost; user had
        multiple high-engagement sessions before cancelling.
      </p>
      <p>
        <strong>Competitive.</strong> The user found a better alternative.
        The fix is product differentiation on the specific dimension the
        competitor wins on. Indicator: cancellation survey cites a named
        alternative.
      </p>
      <p>
        Rachitsky (2022) cites ProfitWell data: early churn (months 1-3)
        runs 5-50% and reflects activation failure, not product-market fit
        decay. Early churners are almost always in the never-activated or
        value-not-seen categories, not the price category. Diagnosing early
        churn as a price problem leads to discounting that does not fix
        the underlying cause.
      </p>

      <Callout title="LangoBee's current churn category">
        <p>
          LangoBee has zero trial_started events. The correct churn
          category is not one of the four above. The problem is
          pre-churn: the gate is placed before the user has value, so
          they never enter the funnel to churn from. The four categories
          become relevant only after the first trial starts. Right now
          the only relevant metric is: how many users hit the gate, and
          how many pass through?
        </p>
      </Callout>

      {/* ---- 7 ---- */}
      <AnchorHeading as="h2" id="7-dunning-basics">
        7. Dunning basics
      </AnchorHeading>
      <p>
        Dunning is the process of retrying failed subscription payments.
        It is relevant once paying customers exist. It is worth configuring
        before the first customer because the configuration is a 30-minute
        one-time task and the recovery value compounds from day one.
      </p>
      <p>
        Stripe smart retries use machine learning to choose the best retry
        timing. The defaults: retry day 1, 3, 7, 14 after a failed charge.
        Recovery rates depend on failure reason: expired cards recover at
        roughly 80% with a reminder; insufficient funds recovers at 30-40%.
        Carter (2024) estimates education apps lose 10-20% of their paying
        base per year to involuntary churn without active dunning.
      </p>
      <p>
        Configuration path: Stripe Dashboard, Billing, Subscriptions and
        emails, Manage failed payments. Enable smart retries. Enable the
        failed payment email. Three clicks. Do it before the first customer,
        not after. Retroactive dunning does not recover users who have
        already churned and moved on.
      </p>

      {/* ---- 8 ---- */}
      <AnchorHeading as="h2" id="8-first-dollar-psychology">
        8. First-dollar psychology
      </AnchorHeading>
      <p>
        The first paying customer is not an optimization problem. Every
        framework in this course applies to patterns across cohorts. The
        first customer is a sample of one. Its value is not in validating
        the funnel; it is in proving that the funnel can complete at all.
      </p>
      <p>
        Until a human who is not the founder, who found the product on
        their own terms, decides it is worth money, every pricing decision
        is theoretical. WTP surveys give willingness-to-pay ranges. The
        first dollar gives a data point with a name attached to it.
      </p>
      <p>
        For LangoBee, the most direct path to the first dollar is not
        funnel optimization. It is direct outreach in the 30-person Discord.
        The Discord is the only proven acquisition channel (June 2026
        snapshot: direct 174 people in 30 days, Google 21, Twitter 5).
        Inside that Discord are real users who have activated: they have
        tapped words, opened videos, seen their comprehension score. Asking
        one of them directly to pay for continued access is the fastest
        test of whether the price is acceptable.
      </p>
      <p>
        Phil Carter's Subscription Value Loop names "remarkable word-of-mouth"
        as the output of the Value Creation stage. (Carter, 2024) The first
        customer is the earliest possible test of whether the loop can
        close. If a user who has experienced the product will not pay, the
        loop does not close at this price. If they will, the loop has a
        first data point.
      </p>

      {/* ---- 9 ---- */}
      <AnchorHeading as="h2" id="9-judging-the-hard-paywall">
        9. Judging the hard paywall decision
      </AnchorHeading>
      <p>
        LangoBee uses a hard paywall with a CC-required trial. Barnard and
        Carter (2026) argue that hard paywalls convert roughly 5x better
        than freemium models at sub-billion-dollar scale, citing a case
        study where a multi-step hard paywall (free app, 7-day trial,
        subscription prompt) produced a 75% increase in LTV per user.
      </p>
      <p>
        The evidence from LangoBee is consistent with the hard-paywall
        thesis on one dimension and inconsistent on another. Consistent:
        the engaged users (word_lookup_opened, video completions) represent
        the audience most likely to convert if asked at the right moment.
        Inconsistent: the CC-required gate before any value has produced
        zero trial starts, which means the hard paywall is currently
        functioning as a 100% friction barrier, not a conversion mechanism.
      </p>
      <p>
        The verdict: keep the hard paywall, move the gate. The problem is
        not the CC requirement per se. It is asking for the CC before the
        user has seen the product. The fix: let the user access at least one
        video and see their comprehension score for free, then present the
        CC-required trial at the moment the score appears. This preserves
        the hard-paywall conversion advantage while removing the
        zero-value-at-gate failure mode.
      </p>
      <p>
        A softer alternative worth running as a test: remove the CC
        requirement and allow a no-card trial for 7 days, then require CC
        at conversion. Poyar (2026) reports CC-required trials convert
        25-35% (good) and no-card trials convert at lower rates but
        with more trial starts. For LangoBee at zero trials, increasing
        trial starts is the immediate priority. After 20-30 trials have
        started, the data will say whether CC-required or no-card produces
        better downstream conversion.
      </p>

      {/* ---- 10 ---- */}
      <AnchorHeading as="h2" id="10-instrumenting-the-paywall">
        10. Instrumenting the paywall moment
      </AnchorHeading>
      <p>
        To measure whether moving the paywall works, two events must exist
        in PostHog: one immediately before the paywall and one immediately
        after it appears. Without both, you cannot calculate the paywall
        conversion rate (users who saw the paywall divided by users who
        started a trial).
      </p>
      <p>
        Recommended events:
      </p>
      <p>
        <strong>paywall_shown.</strong> Fires when the upgrade prompt
        becomes visible to the user. Properties: trigger (comprehension_score,
        word_tap, manual), session_word_count, user_comprehension_score.
      </p>
      <p>
        <strong>trial_started.</strong> This event should already exist if
        the Stripe webhook is wired. Verify it fires in PostHog. If it
        does not, add it to the Stripe webhook handler.
      </p>
      <p>
        The conversion rate to measure: paywall_shown &rarr; trial_started.
        Before any optimization, this rate is your baseline. Every change
        to placement, copy, or price should move this rate in the
        anticipated direction before you claim the change worked.
      </p>

      {/* ---- EXERCISES ---- */}
      <AnchorHeading as="h2" id="exercises">Exercises</AnchorHeading>
      <p>
        Complete these before or during section. Each is answerable from
        this reading alone.
      </p>

      <Exercise n={1}>
        <p>
          LangoBee's June 2026 PostHog data shows word_lookup_opened firing
          5,225 times per month from real users. Zero trial_started events
          have ever fired. Using the four churn categories from section 6,
          classify the problem and write one sentence of evidence for your
          classification. Then write one sentence on why this classification
          changes the recommended fix.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Parizek (2024) names four paywall placement strategies: onboarding,
          contextual, buy-now, and campaign. For each of the four, write one
          sentence on whether it is currently present in LangoBee's flow
          and, if not, what trigger condition would implement it.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write the three-email trial nurture sequence for LangoBee. For
          each email: the day and trigger, the subject line, and the one
          product data point (from PostHog or Supabase) that personalizes
          it. The sequence must use a real field from LangoBee's schema
          (word count, comprehension score, words known). Do not invent
          fields that do not exist.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Meinertzhagen (2023) reports a plant care app increased
          signup-to-trial conversion from 3% to 15% by moving its paywall
          from the front door to after the aha moment. Apply this to
          LangoBee: if current signup-to-trial conversion is 0% (zero trials
          from real signups), what is the minimum number of real signups
          needed to detect a statistically meaningful improvement at the
          15% rate? (Rough estimate is fine: use n = 20 as a practical
          minimum, explain why.)
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Barnard and Carter (2026) argue hard paywalls convert 5x better
          than freemium at sub-billion-dollar scale. LangoBee has a hard
          paywall and zero conversions. Write a two-sentence verdict: does
          this evidence contradict the Barnard and Carter claim, or is it
          consistent with it? Explain which variable resolves the apparent
          contradiction.
        </p>
      </Exercise>

      {/* ---- GOING DEEPER ---- */}
      <AnchorHeading as="h2" id="going-deeper">Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet this week:</strong> Audit the live
          paywall. Walk langobee.com as a stranger, map every payment
          mention and upgrade trigger, run the PostHog funnel, and write
          the one-change recommendation.
        </li>
        <li>
          <strong>Lecture 2 this week:</strong> Trial to paid: the
          three-email nurture sequence, cancellation diagnosis, dunning
          configuration, and first-dollar tactics.
        </li>
        <li>
          <strong>HW3 (in flight, due week 8):</strong> The unit economics
          model requires a trial-to-paid conversion estimate. Use the
          paywall-move scenario from this week to set a hypothesis rate
          (e.g., 15% paywall_shown &rarr; trial_started) and carry it into
          the week 8 LTV calculation.
        </li>
        <li>
          <strong>Community:</strong> The{" "}
          <a href="https://discord.com/servers/refold-espanol-es-667734565309382657">
            Refold Espa&ntilde;ol Discord
          </a>{" "}
          (~9,500 members) is the most methodologically sophisticated
          Spanish comprehensible-input community on the internet. The
          members are exactly the users LangoBee targets. Observing what
          they say about their current tool stack and pain points is the
          fastest route to understanding whether the $7.99 price point
          is in range or not.
        </li>
      </ul>

      <Takeaways>
        <li>
          LangoBee's trial problem is pre-churn: the CC-required gate fires
          before any demonstrated value, so users never enter the funnel.
          Moving the paywall to after the first comprehension score is the
          single highest-expected-value change available.
        </li>
        <li>
          The comprehension score is the right paywall moment because it
          is personal, specific, and unavailable elsewhere in the same
          session. The word tap (word_lookup_opened) is a valid earlier
          trigger with higher volume.
        </li>
        <li>
          Contextual placement (paywall fires after a value moment) is the
          recommended first strategy for a pre-revenue product. It requires
          the least traffic to generate a measurable signal.
        </li>
        <li>
          Trial nurture requires three minimum touchpoints: a day-0 mirror
          of what the user saw, a day-3-5 progress reflection using product
          data, and a day-12 expiry warning. All three can use data
          LangoBee already captures.
        </li>
        <li>
          Keep the hard paywall. Move it. The evidence from Barnard and
          Carter (2026) supports hard paywalls; the evidence from LangoBee's
          zero-trial state points to placement, not the CC requirement, as
          the problem to fix first.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Barnard, D. and Carter, P. (2026). Why a hard paywall is the
          right answer for your app (until it isn&rsquo;t). Sub Club
          podcast, RevenueCat.{" "}
          <a href="https://www.revenuecat.com/blog/growth/phil-carter-elemental-growth-sub-club-podcast-2026/">
            revenuecat.com/blog/growth/phil-carter-elemental-growth-sub-club-podcast-2026/
          </a>{" "}
          Case study: hard paywalls convert ~5x better than freemium at
          sub-billion-dollar scale; 75% LTV increase with multi-step
          paywall.
        </p>
        <p>
          Carter, P. (2024). The Subscription Value Loop. Lenny&rsquo;s
          Newsletter.{" "}
          <a href="https://www.lennysnewsletter.com/p/the-subscription-value-loop-a-framework">
            lennysnewsletter.com/p/the-subscription-value-loop-a-framework
          </a>{" "}
          Three-stage framework: Value Creation, Value Delivery, Value
          Capture. Top-quartile apps convert 1 in 20 installs to paid and
          retain ~50% after year one.
        </p>
        <p>
          Meinertzhagen, P. (2023). Optimizing paywall placement.
          RevenueCat.{" "}
          <a href="https://www.revenuecat.com/blog/growth/paywall-placement/">
            revenuecat.com/blog/growth/paywall-placement/
          </a>{" "}
          Case studies showing post-aha-moment placement outperforms
          front-door gating; Greg plant care app 3% &rarr; 15%; Rootd 5x
          revenue.
        </p>
        <p>
          Parizek, M. (2024). The essential guide to paywalls for
          subscription apps. RevenueCat.{" "}
          <a href="https://www.revenuecat.com/blog/growth/guide-to-mobile-paywalls-subscription-apps/">
            revenuecat.com/blog/growth/guide-to-mobile-paywalls-subscription-apps/
          </a>{" "}
          Four placement strategies (onboarding, contextual, buy-now,
          campaign); RICE scoring for test prioritization; 38% median
          trial-to-paid conversion.
        </p>
        <p>
          Poyar, K. (2026). A new look at free-to-paid conversion:
          insights from a survey of 200 software products. Growth Unhinged.{" "}
          <a href="https://www.growthunhinged.com/p/free-to-paid-conversion-report">
            growthunhinged.com/p/free-to-paid-conversion-report
          </a>{" "}
          CC-required trials convert 25-35% (good) to 50-60% (great);
          per-1,000-visitor model comparing freemium and trial models.
        </p>
        <p>
          Rachitsky, L. (2022). What is good monthly churn. Lenny&rsquo;s
          Newsletter.{" "}
          <a href="https://www.lennysnewsletter.com/p/monthly-churn-benchmarks">
            lennysnewsletter.com/p/monthly-churn-benchmarks
          </a>{" "}
          B2C benchmarks: 3-5% monthly churn is good; early churn
          (months 1-3) runs 5-50% and reflects activation failure.
        </p>
        <p>
          RevenueCat Research Team. (2025). State of subscription apps
          2025. RevenueCat.{" "}
          <a href="https://www.revenuecat.com/state-of-subscription-apps-2025/">
            revenuecat.com/state-of-subscription-apps-2025/
          </a>{" "}
          82% of trial starts occur on day 0; longer trials convert at
          45.7%; annual plan year-1 retention 44.1%; education refund rate
          4.86%.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk07ReadingSearchBody =
  "paywall placement demonstrated value comprehension score aha moment upgrade trigger contextual placement hard paywall trial to paid nurture sequence dunning first dollar psychology four churn categories never activated value not seen price competitive trial started zero trials LangoBee week 7 monetization";
