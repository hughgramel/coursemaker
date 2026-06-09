import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk04Reading() {
  return (
    <ReadingPage
      id="wk04"
      title="Week 4: retention, cohort analysis, and the habit loop"
      kicker="B2C to $10k MRR: A 10-Week Growth Manual · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the full retention picture for a B2C subscription
          product: how to measure D1, D7, and D30 retention; how to read a
          cohort table and name your curve shape; what net revenue retention
          tells you that logo retention cannot; how the habit loop works and
          where it breaks; and how to distinguish involuntary churn (a billing
          problem) from voluntary churn (a product problem). By the end you will
          be able to look at a cohort table, name its shape, identify which
          cohort changed and why, and prioritize one retention intervention.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> The AAARRR funnel
          (<code>aaarrr-funnel</code>), activation rate
          (<code>activation-rate</code>), monthly recurring revenue
          (<code>mrr</code>), and the difference between cohort and aggregate
          measurement (<code>cohort-vs-aggregate</code>). All four were
          introduced in weeks 1-3.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-why-retention-compounds">
        1. Why retention is the only number that compounds
      </AnchorHeading>
      <p>
        Every other growth lever you will study in this course, paid ads,
        referral loops, content, app store optimization, ultimately produces a
        flow of new users. Retention is different. It determines how many of
        those users you keep. A product with 80% monthly retention and zero new
        acquisition still has 80% of its users a month from now. A product with
        20% monthly retention and a blazing acquisition channel has 20% of its
        users a month from now, and it pays full acquisition cost to replace the
        other 80%.
      </p>
      <p>
        Lenny Rachitsky (2020), after surveying 20 growth experts, wrote:
        &ldquo;Retention is widely considered to be the most important metric,
        yet it remains poorly understood.&rdquo; The misunderstanding is
        usually this: founders treat retention as a single number rather than a
        curve over time. A single retention rate is almost always a deceptive
        aggregate. What you need is a cohort table.
      </p>
      <p>
        PostHog (Vandervell, 2023) identifies a flattening retention curve as
        one of seven leading indicators of product-market fit. Not a high
        retention number: a curve that stops falling. The difference matters.
        A curve that falls from 60% at D1 to 22% at D30 and then stays flat at
        22% through D60 and D90 is a smiling curve. It means a stable core of
        habitual users exists. A curve that falls from 60% at D1 to 22% at D30
        and continues to 8% at D90 is a decaying curve. It means the product
        has no repeating value for anyone.
      </p>

      <AnchorHeading as="h2" id="2-d1-d7-d30">
        2. D1, D7, and D30: what each interval measures
      </AnchorHeading>
      <p>
        <strong>D1 retention</strong> asks: of the users who signed up
        yesterday, how many came back today? Day 1 is almost entirely an
        onboarding question. If the first session delivers a clear
        &ldquo;aha&rdquo; moment (the concept introduced in week 2), users have
        a reason to return. If it does not, they never will. D1 is the metric
        most sensitive to changes in your onboarding flow, empty state copy,
        and time-to-value. Berezovsky (2022) notes that for most B2C products
        D1 retention rates cluster between 25% and 60%.
      </p>
      <p>
        <strong>D7 retention</strong> asks: of the users who signed up last
        week, how many used the product today? Seven days is one full natural
        cycle for many consumer habits: a weekly fitness routine, a weekly
        budget review, a weekly language lesson. If your product is designed
        around a weekly use-case, D7 is your primary signal. If D7 is
        substantially lower than D1 / 7, users are not forming a weekly pattern,
        they are just opening the app on the day they remember it exists.
      </p>
      <p>
        <strong>D30 retention</strong> asks: of the users who signed up last
        month, how many used the product today? D30 is your clearest signal
        about whether the product has earned a permanent place in a user&rsquo;s
        life. RevenueCat (2025), reporting on 115,000+ apps, found that the
        median year-1 retention rate for monthly subscription apps is 17%. The
        top-performing apps are around 25-30%. A D30 number well above 17% is a
        competitive signal. A D30 number near zero is a retention crisis.
      </p>

      <Callout title="N-day vs unbounded retention">
        <p>
          N-day retention asks: did the user return on <em>exactly</em> day N?
          Unbounded retention asks: did the user return on day N <em>or any day
          after</em>? For most B2C products at the early stage, N-day retention
          is cleaner: it shows discrete peaks at natural usage cycles (D7 for
          weekly habits, D30 for monthly billing). Berezovsky (2022) recommends
          starting with N-day retention because it is easier to explain and act
          on. Switch to unbounded only when your product&rsquo;s natural
          re-engagement cycle is irregular.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-curve-shapes">
        3. Reading the retention curve shape
      </AnchorHeading>
      <p>
        A <strong>smiling curve</strong> has a steep early drop (many users who
        tried the product once and never returned) followed by a flat tail (a
        stable core who use it regularly). The smile is the tail: the
        point where the curve stops falling. That stable percentage is your
        retained user base. MRR from those users compounds over time.
      </p>
      <p>
        A <strong>flat curve</strong> has a gentler decline that continues
        steadily without a clear inflection point. This pattern is common in
        products with consistent utility but no strong habit trigger. Users
        return occasionally but not on a predictable cycle. Flat curves tend to
        produce moderate long-term retention: better than decaying, but without
        the compounding core of a smiling curve.
      </p>
      <p>
        A <strong>decaying curve</strong> continues to fall throughout the
        measurement window with no visible flattening. This is the pattern of a
        product that has not found repeating value for any cohort. Rachitsky
        (2022) is direct: if your retention curve is decaying, you do not have
        product-market fit, and spending on acquisition accelerates the problem
        by bringing in more users who will churn.
      </p>
      <p>
        The curve shape predicts MRR trajectory more reliably than any single
        metric. A product with a smiling curve at 22% D30 will compound faster
        than a product with 40% D30 and a decaying curve, because the 40%
        number is still falling.
      </p>

      <AnchorHeading as="h2" id="4-cohort-table">
        4. Building and reading a cohort table
      </AnchorHeading>
      <p>
        A cohort table groups users by the week (or month) they signed up and
        shows their retention at each subsequent interval. Each row is one
        signup cohort. Each column is one retention period. Day 0 is always
        100% (the users who signed up that week). PostHog (2024) describes this
        as the baseline: &ldquo;day 0 is always 100% and subsequent days show
        the percentage returning.&rdquo;
      </p>
      <p>
        Here is a representative cohort table, showing four weeks of signups
        and three retention periods:
      </p>
      <pre>{`signup_week    cohort_size    D1     D7     D30
2026-07-28          42        61%    34%    19%
2026-08-04          58        63%    36%    21%
2026-08-11          71        64%    38%    23%
2026-08-18          85        62%    41%    (too early)`}</pre>
      <p>
        Two things stand out. First, the trend across rows: each successive
        cohort has a slightly better D7 and D30 number. Something changed
        across these four weeks. Second, D30 for the most recent cohort is
        marked &ldquo;too early.&rdquo; A user who signed up on August 18
        cannot yet have a D30 data point by the time you run this table in
        early September. Reporting a preliminary D30 would understate the true
        retention for that cohort. Mark it incomplete.
      </p>
      <p>
        The cells along the same calendar date form a diagonal. If D7 jumps for
        every cohort that signed up after a specific date, something changed
        that week. Berezovsky (2022) describes reading the diagonal as the
        primary technique for attributing product changes to retention outcomes.
        Check your deploy log for the week the jump first appears.
      </p>

      <AnchorHeading as="h2" id="5-nrr">
        5. Net revenue retention vs logo retention
      </AnchorHeading>
      <p>
        <strong>Logo retention</strong> (sometimes called customer retention
        rate) measures the share of customers who are still paying after a
        given period. If you started the month with 50 customers and ended with
        45, your logo retention is 90% (ignoring new acquisitions).
      </p>
      <p>
        <strong>Net revenue retention (NRR)</strong> measures the share of the
        revenue those customers represent, including expansion (upgrades,
        additional seats, upsells), contractions (downgrades), and churn.
      </p>
      <pre>{`NRR = (Start MRR + Expansion - Contraction - Churn) / Start MRR * 100`}</pre>
      <p>
        If your start MRR is $8,000, you added $1,200 from upgrades, lost $400
        from downgrades, and lost $600 from cancellations:
      </p>
      <pre>{`NRR = (8,000 + 1,200 - 400 - 600) / 8,000 * 100 = 102.5%`}</pre>
      <p>
        NRR above 100% means expansion revenue outpaces churn. The business
        grows even without adding a single new customer. Temperton (2024) calls
        this net negative churn and describes it as the goal for any
        subscription product that wants to scale without proportionally scaling
        its acquisition spend.
      </p>
      <p>
        At the early stage ($0 to $10k MRR), you may not yet have meaningful
        expansion revenue, but the concept shapes how you design your pricing.
        A product with a single flat price cannot achieve NRR above 100%.
        A product with a free-to-paid upgrade path, or with a usage-based tier,
        has the structural possibility of NRR above 100%. This connects directly
        to the pricing decisions from week 3.
      </p>

      <AnchorHeading as="h2" id="6-habit-loop">
        6. The habit loop: what it is and what it is not
      </AnchorHeading>
      <p>
        Nir Eyal (2014) described the Hook Model as a four-step cycle: trigger,
        action, variable reward, investment. An external trigger (a push
        notification, an email, a social tag) prompts an action (opening the
        app, completing a task). The action produces a variable reward:
        unpredictable positive reinforcement that releases dopamine more
        reliably than fixed rewards. The investment (data entered, settings
        configured, relationships built, reputation earned) increases the
        probability that the next trigger will fire.
      </p>
      <p>
        The model draws on well-established behavioral science. Variable
        reinforcement schedules produce more persistent behavior than fixed
        schedules: this is the Skinner slot-machine effect, replicated
        extensively. Investment effects are real: users who have configured a
        product, built a history in it, or built relationships through it are
        less likely to leave. These two mechanisms (variable reward and
        investment) are the parts of the Hook Model that survive empirical
        scrutiny.
      </p>
      <p>
        The parts that require care: external triggers work at D1 and D7 but
        decay after day 30 if no internal trigger forms. An internal trigger is
        a habit cue that exists in the user&rsquo;s environment without any
        prompt from the product: the moment of boredom that triggers opening
        Twitter, the feeling of arriving at the gym that triggers opening a
        fitness app. PostHog (Vandervell, 2023) notes that high engagement
        without retention suggests the product is measuring the wrong thing. A
        product that keeps users engaged through dark patterns (artificial
        urgency, manipulative notifications, fear-of-missing-out mechanics) can
        produce strong D1 and D7 numbers that then collapse at D30 when users
        habituate to ignoring the notifications.
      </p>
      <p>
        The diagnostic question is: what is the internal trigger for your
        product? If you cannot name a specific emotional state or routine moment
        that makes a user reach for your app without being prompted, your D30
        retention will be constrained by how aggressively you can push
        notifications.
      </p>

      <AnchorHeading as="h2" id="7-power-users">
        7. Power-user analysis
      </AnchorHeading>
      <p>
        Your <strong>power-user segment</strong> is the top 5% of users by
        usage in the past 30 days. These users are not just your best customers.
        They are your product&rsquo;s proof of concept. If the product can
        produce habitual, high-value usage for 5% of its user base, the question
        becomes: what would it take to produce that usage pattern for 20%, or
        50%?
      </p>
      <p>
        Define power users by behavior, not demographics. A power user is
        someone who triggered your retention event more than N times in the past
        30 days. N should map to your north-star metric. If your north-star is
        &ldquo;tasks completed,&rdquo; a power user is someone who completed
        more than 20 tasks in a month. If your north-star is
        &ldquo;sessions,&rdquo; a power user is someone with more than 15
        sessions in a month.
      </p>
      <p>
        Once you have the segment, look backward at their week-1 path. What did
        they do in their first 72 hours that other users did not? Common
        findings: power users completed a specific setup step that most users
        skipped; power users invited at least one other person; power users
        connected an integration; power users received a manual check-in from
        the founder. Each of these is an activation intervention candidate.
        If power users systematically did something in week 1 that correlated
        with strong D30 retention, making that action the default for all users
        is your most direct retention move.
      </p>

      <AnchorHeading as="h2" id="8-involuntary-churn">
        8. Involuntary churn: the recoverable leak
      </AnchorHeading>
      <p>
        <strong>Involuntary churn</strong> happens when a user&rsquo;s payment
        fails, not because they chose to cancel, but because a card expired,
        a bank blocked the charge, or there were insufficient funds. The user
        often does not realize they have lost access. Baremetrics (Jackson,
        2020) found that involuntary churn represents 20-40% of total SaaS
        churn and costs approximately 9% of MRR monthly. Baremetrics data
        shows a median 410% ROI on dunning investment, with 82% of customers
        seeing payback in the first month.
      </p>
      <p>
        RevenueCat (Tideman, 2025) adds platform-level data: Google Play loses
        subscribers to billing failures at 28% of total churn, compared to
        14% on iOS. If your app is available on both platforms, your
        Android user base is leaking at twice the iOS rate from billing issues
        alone. The fix is the same on both platforms: dunning.
      </p>
      <p>
        A dunning sequence has five components. Pre-dunning sends a warning
        email seven days before a card expires, before any payment fails.
        Smart retry logic retries failed payments at different times of day and
        different days of the week, not at the same moment the previous attempt
        failed. A grace period keeps the user&rsquo;s access active for three
        to seven days after the first payment failure while retries run.
        Multi-channel notification uses email plus in-app messaging (and SMS
        for high-value customers) to reach the user. A card update prompt
        deep-links directly to the payment update screen, not the account
        settings page.
      </p>
      <p>
        Involuntary churn is recoverable. Voluntary churn, where a user
        consciously cancels because the product does not deliver enough value,
        requires a product change. The most important diagnostic step is to
        tag every churned user in your billing system as involuntary (payment
        failure) or voluntary (explicit cancel or non-renewal). Do not mix them
        in your churn rate. They have different causes and different fixes.
      </p>

      <AnchorHeading as="h2" id="9-case-study">
        9. Case study: Duolingo streaks as a habit-loop study
      </AnchorHeading>
      <p>
        Duolingo&rsquo;s streak mechanic is the most studied habit loop in
        consumer mobile apps. A streak is a count of consecutive days the user
        completed a lesson. Losing the streak resets the count to zero. The
        mechanic maps directly onto the Hook Model: the trigger is the daily
        push notification (&ldquo;Your streak is at risk!&rdquo;), the action
        is completing a five-minute lesson, the variable reward is the streak
        count going up plus occasional animated celebrations, and the investment
        is the streak count itself. A 100-day streak is a sunk cost: losing it
        is painful enough that many users complete a minimal lesson purely to
        preserve it.
      </p>
      <p>
        What makes the Duolingo streak instructive is that it works as a
        retention lever while also revealing the limits of pure engagement
        mechanics. Duolingo has disclosed that a measurable share of users
        complete the minimum lesson to maintain the streak without making
        measurable progress in the language. This is engagement without value
        delivery. The streak sustains D30 and D60 retention numbers without
        necessarily moving the user toward fluency (the product&rsquo;s
        stated goal).
      </p>
      <p>
        The lesson for founders is precise: habit mechanics can sustain
        retention for a cohort that has already received value, but they cannot
        substitute for value delivery in the first place. Duolingo&rsquo;s
        smiling curve exists because a core of users genuinely learns language
        through the app. The streak mechanic keeps those users returning daily.
        It does not convert users who never experienced the value of learning
        into retained users.
      </p>
      <p>
        The practical checklist for your own product: identify what the genuine
        value-delivery event is (the moment a user receives something they came
        for). That event should happen before day 1. Then design the retention
        mechanic to bring users back to that event, not to a proxy for it.
      </p>

      <AnchorHeading as="h2" id="10-exercises">10. Exercises</AnchorHeading>

      <Exercise n={1}>
        <p>
          Pull your D1, D7, and D30 retention numbers for the last three
          complete signup cohorts. Write the numbers in a table. Then write
          one sentence naming the curve shape (smiling, flat, or decaying)
          and one sentence explaining which specific cells led you to that
          conclusion. If you do not have enough data for D30 yet, use D7 and
          D14 instead and note that the window is compressed.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Draw or describe your retention curve on a piece of paper. The
          x-axis is days since signup (0, 1, 7, 14, 30). The y-axis is
          percentage of the cohort still active. Plot the points for your most
          recent complete cohort. Does the curve flatten? At what percentage?
          If it does not flatten, at what rate is it still declining at D30?
          Label your drawing with the curve shape name.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Calculate your NRR for the most recent 30-day period. Use the
          formula: (start MRR + expansion - contraction - churn) / start MRR
          &times; 100. If you do not have expansion or contraction MRR yet
          (no upsells, no downgrades), your NRR equals your gross revenue
          retention rate. Is it above or below 100%? What one product or
          pricing change would move it across the 100% line?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Tag every user who churned in the last 30 days as involuntary
          (payment failure) or voluntary (explicit cancel). What percentage
          is involuntary? If you do not have direct billing access, use your
          payment processor&rsquo;s failed-payment log as a proxy. Given the
          RevenueCat benchmark (14-28% of churn is involuntary), does your
          number seem high or low? What dunning step would you add first?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Map your product onto the Hook Model. For each step, write one
          sentence: (a) What is the external trigger you use today? (b) What
          is the minimum action a user takes? (c) What is the variable reward,
          and is it genuinely unpredictable or just a fixed animation? (d)
          What investment does a user make that increases their switching cost?
          Then identify the weakest step: where does the loop break for users
          who churn before day 7?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="11-going-deeper">11. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section worksheet walks you
          through the SQL query and PostHog setup for your D1/D7/D30 cohort
          table. Bring the completed table to section for peer review.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the retention curve
          shapes and the Hook Model in depth with live discussion.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers cohort table
          construction, reading the diagonal, power-user analysis, and churn
          diagnosis with SQL templates.
        </li>
        <li>
          <strong>Week 5 reading.</strong> Mid-course pivot/persevere check
          and acquisition channels. The retention data you collect this week
          feeds directly into the channel-fit evaluation in week 5.
        </li>
      </ul>

      <Takeaways>
        <li>
          Retention is a curve, not a number. Name its shape (smiling, flat,
          or decaying) before you invest in any acquisition channel.
        </li>
        <li>
          D1 measures onboarding quality; D7 measures weekly habit formation;
          D30 measures whether the product has earned a permanent place in a
          user&rsquo;s life. Use different interventions for each.
        </li>
        <li>
          NRR above 100% means expansion revenue outpaces churn. This is
          possible only with a pricing structure that allows upsells or
          usage-based growth; a single flat price caps NRR at 100%.
        </li>
        <li>
          Involuntary churn is 14-28% of total churn and recoverable with
          dunning logic alone. Tag it separately from voluntary churn before
          deciding what to fix.
        </li>
        <li>
          The Hook Model works when it brings users back to genuine value
          delivery. Habit mechanics that substitute for value produce D7 bumps
          and D30 collapses.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Baremetrics (Jackson, Dominique). &ldquo;5 Ways to Prevent Involuntary
          Churn in SaaS.&rdquo; 2020.{" "}
          <a href="https://baremetrics.com/blog/involuntary-churn">
            baremetrics.com/blog/involuntary-churn
          </a>
          . Involuntary churn represents 20-40% of total SaaS churn; median
          410% ROI on dunning; five-mechanism prevention framework.
        </p>
        <p>
          Berezovsky, Olga (guest post, Lenny&rsquo;s Newsletter).
          &ldquo;How to measure cohort retention.&rdquo; 2022.{" "}
          <a href="https://www.lennysnewsletter.com/p/measuring-cohort-retention">
            lennysnewsletter.com/p/measuring-cohort-retention
          </a>
          . Five-step guide: define active, segment free vs paid, choose N-day
          vs unbounded, pick tool vs SQL, visualise with cohort charts.
        </p>
        <p>
          Eyal, Nir. <em>Hooked: How to Build Habit-Forming Products.</em> 2014.{" "}
          <a href="https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788">
            amazon.com/Hooked
          </a>
          . Defines the Hook Model: trigger, action, variable reward,
          investment. Directly informs D7/D30 retention intervention design.
        </p>
        <p>
          PostHog (team). &ldquo;Users who come back: Tracking retention with
          PostHog.&rdquo; 2024.{" "}
          <a href="https://posthog.com/docs/new-to-posthog/retention">
            posthog.com/docs/new-to-posthog/retention
          </a>
          . Official documentation for setting up retention tracking; explains
          the day-0 = 100% baseline.
        </p>
        <p>
          PostHog (Temperton, James). &ldquo;The most useful customer retention
          metrics, ranked.&rdquo; 2024.{" "}
          <a href="https://posthog.com/product-engineers/customer-retention-metrics">
            posthog.com/product-engineers/customer-retention-metrics
          </a>
          . Ranks eight retention metrics; covers gross vs net revenue churn
          and net negative churn.
        </p>
        <p>
          PostHog (Vandervell, Andy). &ldquo;In-depth: How to measure
          product-market fit.&rdquo; 2023.{" "}
          <a href="https://posthog.com/founders/measure-product-market-fit">
            posthog.com/founders/measure-product-market-fit
          </a>
          . Seven PMF indicators; flattening retention curve as the primary
          signal.
        </p>
        <p>
          Rachitsky, Lenny. &ldquo;What is good retention?&rdquo; 2020.{" "}
          <a href="https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29">
            lennysnewsletter.com/p/what-is-good-retention-issue-29
          </a>
          . Evidence-based benchmarks from 20 growth experts; consumer social
          25/45%, consumer SaaS 40/70% at 6 months.
        </p>
        <p>
          Rachitsky, Lenny. &ldquo;How to kickstart and scale a consumer
          business, Step 5: RETAIN.&rdquo; 2022.{" "}
          <a href="https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-consumer-9c8">
            lennysnewsletter.com/p/how-to-kickstart-and-scale-a-consumer-9c8
          </a>
          . Four PMF signals; retention curve flattening as the core signal.
        </p>
        <p>
          RevenueCat. <em>State of Subscription Apps 2025.</em> 2025.{" "}
          <a href="https://www.revenuecat.com/state-of-subscription-apps-2025/">
            revenuecat.com/state-of-subscription-apps-2025
          </a>
          . Benchmark data from 115,000+ apps; year-1 retention median 17%
          for monthly subscriptions.
        </p>
        <p>
          RevenueCat (Tideman, Daphne). &ldquo;Churn in subscription apps:
          top 5 cancellation reasons.&rdquo; 2025.{" "}
          <a href="https://www.revenuecat.com/blog/growth/subscription-app-churn-reasons-how-to-fix/">
            revenuecat.com/blog/growth/subscription-app-churn-reasons-how-to-fix
          </a>
          . 28% involuntary churn on Google Play vs 14% on iOS; dunning
          strategies and grace periods.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk04ReadingSearchBody =
  "retention D1 D7 D30 cohort table cohort analysis curve shape smiling flat decaying net revenue retention NRR logo retention habit loop hook model trigger action variable reward investment Nir Eyal Hooked power user segment involuntary churn voluntary churn dunning card decline grace period Google Play iOS RevenueCat Lenny Rachitsky benchmarks Duolingo streaks Week 4 reading";
