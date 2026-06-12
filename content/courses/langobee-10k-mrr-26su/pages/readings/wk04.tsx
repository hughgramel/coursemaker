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
      title="Week 4: Hooks, triggers, and retention mechanics"
      kicker="LangoBee to $10K MRR · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the Hooked model and why external triggers must
          precede internal ones, how to read a cohort retention curve and tell a
          flattening curve from a decaying one, the definitions of D1, D7, and
          D30 retention, and an honest assessment of LangoBee's three candidate
          hooks. By the end you will be able to choose one hook to ship, write
          its event spec, and state what you expect the D1 dashboard to show if
          the hook works.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Activation definition and
          broken-vacuum standard from week 3. De-alted cohort table from week 1.
          North-star metric and the AARRR funnel from week 1.
        </p>
      </ReadingFraming>

      {/* ---- 1. THE HOOK MODEL ---- */}
      <AnchorHeading as="h2" id="the-hook-model">
        1. The Hooked model
      </AnchorHeading>
      <p>
        Nir Eyal's Hook Model describes a four-stage cycle that, with sufficient
        repetitions, shifts a user from needing an external prompt to return to
        self-triggering from an internal emotional state. The four stages are
        trigger, action, variable reward, and investment. (Eyal, 2021)
      </p>
      <p>
        The <strong>trigger</strong> is the cue that initiates behavior. External
        triggers live in the user's environment: a push notification, an email, a
        badge on an app icon. Internal triggers are emotional states the user has
        associated with the product. Boredom is the trigger that opens Instagram.
        Language anxiety is the trigger that opens Duolingo for its most retained
        users. The distinction matters because internal triggers are far more
        durable than external ones: they do not depend on a server sending a
        message on the right day.
      </p>
      <p>
        The <strong>action</strong> is the simplest behavior the user takes in
        anticipation of a reward. Eyal's formula, borrowed from BJ Fogg, is:
        motivation plus ability plus trigger. Reduce friction on the action and
        the trigger can be weaker. Raise friction and even a strong trigger fails.
        For LangoBee, the action is opening the app and tapping a word. The word
        lookup already works reliably (5,225 events in 30 days). The friction
        problem is not the action; it is the absent trigger.
      </p>
      <p>
        The <strong>variable reward</strong> is the unpredictable payoff. Eyal
        identifies three categories: tribe (social validation), hunt (searching
        for resources or information), and self (intrinsic satisfaction and
        mastery). Variable rewards keep users engaged because predictable rewards
        lose their motivational pull quickly. LangoBee's word-lookup popup is a
        hunt reward: the user taps a word not knowing exactly what definition,
        example sentence, or frequency data they will find. The variability is
        built in.
      </p>
      <p>
        The <strong>investment</strong> stage is what raises the switching cost.
        When users invest effort, data, or social capital in a product, leaving
        becomes more expensive. Streaks are an investment mechanic: a user with a
        14-day streak has more to lose by skipping tomorrow than a user on day
        one. Vocabulary status records are an investment: every word marked
        "known" in LangoBee's dictionary table represents real effort that would
        be lost on a competitor platform. Investment is the stage that makes the
        next trigger loop easier to complete. (Eyal, 2021)
      </p>

      <Callout title="LangoBee's Hook Model inventory">
        <p>
          Trigger: zero active external triggers shipped. Internal trigger
          (language-learning habit) present in retained users but never seeded
          externally. Action: word lookup is low-friction and works reliably.
          Variable reward: word definitions and comprehension scores provide hunt
          rewards. Investment: word status records, streak days, reading progress,
          and comprehension percentages all accumulate but are not surfaced to the
          user at session end.
        </p>
      </Callout>

      {/* ---- 2. EXTERNAL BEFORE INTERNAL ---- */}
      <AnchorHeading as="h2" id="external-before-internal">
        2. Why external triggers must precede internal ones
      </AnchorHeading>
      <p>
        A common misreading of the Hook Model is that external triggers are
        inferior to internal ones and should be minimized. Eyal's actual argument
        is the opposite: external triggers are the on-ramp for internal ones.
        Internal triggers only form after the user has experienced the reward
        cycle enough times to associate an emotional state with the product. You
        cannot skip straight to internal triggers. You have to seed the
        association with external prompts first. (Eyal, 2021)
      </p>
      <p>
        LangoBee has sent zero push notifications and no retention emails. The
        product assumes that activated users will self-trigger their return. Some
        do: the May 18 cohort showed 50% of activated users returning. But 50%
        returning once is not a habit. Duolingo's streak data shows that users
        who break a streak in the first week are far more likely to churn than
        users who maintain it, and streak maintenance is primarily driven by
        external triggers in the first 30 days. (Mazal, 2023)
      </p>
      <p>
        The practical implication: ship at least one external trigger before
        measuring your D1 number and calling it a product verdict. The D1 you
        see today is a lower bound. It is what retention looks like with zero
        external triggers. After shipping one, you will have a baseline and a
        treatment to compare.
      </p>

      {/* ---- 3. STREAKS DONE HONESTLY ---- */}
      <AnchorHeading as="h2" id="streaks-done-honestly">
        3. Streaks done honestly
      </AnchorHeading>
      <p>
        Duolingo's streak mechanic is the most-studied retention feature in
        consumer language apps. Jorge Mazal's account of the growth work at
        Duolingo is the primary source for how streaks actually function. The
        headline finding: loss aversion (fear of breaking a streak) outperformed
        achievement (pride in building one) as a motivator. Users respond more
        strongly to "you are about to lose your 7-day streak" than to "you have
        built a 7-day streak." (Mazal, 2023)
      </p>
      <p>
        What Mazal does not obscure: Duolingo's streak optimizations came with
        tradeoffs. Streak freezes (allowing users to maintain a streak without
        actually learning) reduced the signal value of the streak as a
        retention indicator. A user with a 200-day streak who has used streak
        freezes on 150 of those days is not a 200-day engaged learner. The streak
        number looks good in aggregate; the learning outcome is worse than the
        streak suggests.
      </p>
      <p>
        For LangoBee, the honest version of a streak is: a streak based on
        real reading or viewing sessions, not logins. The{" "}
        <code>daily_stats</code> table tracks words read and sessions by day. A
        streak defined as "consecutive days with at least one reading session of
        five or more words" is honest. A streak defined as "consecutive days the
        app was opened" is not.
      </p>
      <p>
        A second honesty constraint: at LangoBee's current D1 rate, most users
        will see their streak reset to 1 on day 2. A streak that immediately
        resets does not produce loss aversion; it produces discouragement. Before
        surfacing the streak, consider whether the D1 experience is strong enough
        to keep a meaningful percentage of users through day 2. If it is not,
        the streak surface will show users a broken record.
      </p>

      {/* ---- 4. D1 / D7 / D30 ---- */}
      <AnchorHeading as="h2" id="d1-d7-d30">
        4. D1, D7, and D30: definitions and what each measures
      </AnchorHeading>
      <p>
        Retention intervals are defined relative to a user's first qualifying
        event, not their signup date. If a user signs up Monday but has their
        first reading session Thursday, day 0 is Thursday.
      </p>
      <p>
        <strong>D1 retention</strong> is the percentage of users who had a
        qualifying event on day 0 and returned to have a qualifying event on
        day 1 (within a 24-to-48-hour window, depending on your measurement
        convention). D1 measures whether the first session created enough value
        to come back tomorrow. It is primarily a quality signal for the
        activation experience.
      </p>
      <p>
        <strong>D7 retention</strong> is the percentage who returned in the
        first week. A user who was active on day 0 and returned on any of days
        1-7 counts as D7 retained. D7 measures whether a weekly habit started
        to form. Consumer apps that hit D7 retention above 20% have typically
        found at least a segment of users for whom the product fits a recurring
        use case.
      </p>
      <p>
        <strong>D30 retention</strong> is the percentage who returned within 30
        days after day 0. D30 is the product-market fit check: a product where
        D30 retention never floors above zero has not found a segment of users
        for whom it is a durable habit. The consumer-transactional benchmark
        places good D30 retention at roughly 25-30% and great at 40-50% for
        the surviving floor. (Winters and Rachitsky, 2021)
      </p>

      <Callout title="PostHog measurement convention for LangoBee">
        <p>
          Qualifying event: <code>reading_session_started</code> or any video
          play event on shorts or the YouTube viewer. Apply the de-alted cohort
          filter (exclude founder account, alt accounts, and bot domains from the
          June 1 wave) before reading any retention number. A D1 number that
          includes the founder's daily dogfooding sessions is not a user-behavior
          signal.
        </p>
      </Callout>

      {/* ---- 5. READING THE RETENTION CURVE ---- */}
      <AnchorHeading as="h2" id="retention-curve">
        5. Reading a cohort retention curve
      </AnchorHeading>
      <p>
        Brian Balfour's 2013 essay on the road to product-market fit frames the
        retention curve as the decisive third checkpoint: after identifying a
        real problem and building a solution users prefer, the retention curve is
        the test of whether you have found a segment for whom your solution is
        durable. Without a flattening curve, accelerating acquisition is filling
        a leaky bucket. (Balfour, 2013)
      </p>
      <p>
        A <strong>flattening retention curve</strong> drops steeply from day 0
        to day 7, then levels off at some floor that does not trend to zero. The
        floor can be low: 10% floor retention at D30 still means one in ten users
        found the product genuinely habit-forming. The shape is the signal, not
        the height of the floor.
      </p>
      <p>
        A <strong>decaying retention curve</strong> continues declining toward
        zero with no visible floor. This means no stable segment has formed. The
        product has not found the audience for whom it fits a recurring use case.
        Every cohort will eventually churn completely.
      </p>
      <p>
        The practical difference in what to do next: a flattening curve tells
        you to study the users at the floor (who are they, what are they doing,
        what brought them back) and optimize for more users like them. A decaying
        curve tells you the product-audience fit is missing; more acquisition
        will not solve it.
      </p>
      <p>
        Archana Madhavan's lifecycle model adds a useful refinement: aggregate
        retention curves can flatten not because a genuine floor has formed but
        because resurrected users (dormant users who returned) are inflating the
        later points. Segmenting new users from resurrected users reveals the
        true floor. (Madhavan, 2016)
      </p>

      {/* ---- 6. SMALL-N HONESTY ---- */}
      <AnchorHeading as="h2" id="small-n-honesty">
        6. Small-n honesty: LangoBee's real cohort table
      </AnchorHeading>
      <p>
        LangoBee's June 2026 cohort data (de-alted, from Supabase):
      </p>
      <pre>{`Cohort week    Signups  Activated  Returned  Return/activated
May 18         15       12         6         50%
May 25         19        7         3         43%
June 1         52*       1         0          0%  (bot wave)

* ~95% bot/spam registrations. Excluding bot signups: ~3 real humans.`}</pre>
      <p>
        The May cohorts are the only rows with signal. Two data points. The
        return rates are 50% and 43%, which looks like a slight decline. Is the
        curve decaying? Possibly. Is it within noise? Also yes.
      </p>
      <p>
        The confidence interval around a proportion of 6/12 (0.50) at n=12 is
        approximately 21% to 79% at 95% confidence. The confidence interval
        around 3/7 (0.43) at n=7 is approximately 10% to 82%. These intervals
        overlap completely. The difference between 50% and 43% at these sample
        sizes is not distinguishable from random variation.
      </p>
      <p>
        What you can honestly say from two cohort weeks: the product retained
        roughly half of activated users in both observed weeks. What you cannot
        say: whether the curve is improving or declining, whether there is a
        stable floor, whether activation quality is the driver of return.
      </p>
      <p>
        The honest action at small n is not to stop measuring; it is to be
        explicit about what the data supports and what it does not, and to
        continue collecting. You need at least 30 activated users per cohort week
        to draw any curve-shape conclusion. At LangoBee's current activation
        rate (May 25 was 7 of 19 real signups), that requires either more
        signups per week or more weeks of data.
      </p>

      <Callout title="The June 1 bot wave lesson">
        <p>
          The June 1 cohort (52 signups, 1 activated) is a direct illustration
          of why de-alting is not optional. If you read the raw signup count of
          52 without removing bot accounts, the June 1 cohort dominates the
          aggregate retention curve and produces a false collapse in the overall
          retention number. The real story (1 genuine signup, 0 returned) is
          actually less alarming than the inflated story (52 signups, 0%
          retention), because you already know the 52 were bots.
        </p>
      </Callout>

      {/* ---- 7. DUOLINGO'S NOTIFICATION MACHINE ---- */}
      <AnchorHeading as="h2" id="duolingo-notification-machine">
        7. Duolingo's notification machine and what it teaches
      </AnchorHeading>
      <p>
        The most detailed public account of retention engineering at a language
        app is Jorge Mazal's 2023 essay on Duolingo's growth. Mazal served as
        Chief Product Officer and describes the work in first-person operational
        terms. (Mazal, 2023)
      </p>
      <p>
        The central finding from Duolingo's growth model: Current User Retention
        Rate (CURR) had five times the impact on daily active users of any other
        input metric. New user acquisition, new user retention, and reactivation
        all mattered, but improving CURR for already-active users compounded
        fastest. This finding is why Duolingo shifted its roadmap toward retention
        mechanics in 2018 rather than accelerating acquisition.
      </p>
      <p>
        Duolingo's three retention mechanics, in the order Mazal describes them:
      </p>
      <ol>
        <li>
          <strong>Streak optimization.</strong> Duolingo ran extensive
          experimentation on streak display, loss-aversion messaging, and streak
          freeze mechanics. Loss aversion messaging ("you are about to lose your
          streak") outperformed achievement messaging ("you have a 7-day streak").
          The streak became the primary investment mechanic.
        </li>
        <li>
          <strong>Gamified leaderboard leagues.</strong> Weekly leagues create a
          recurring external trigger (the weekly deadline) and a social reward
          (leaderboard position). Users who entered a league returned at higher
          rates than those who did not.
        </li>
        <li>
          <strong>Notification channel protection.</strong> Duolingo treated each
          notification channel as a finite resource. Each send that did not
          produce an open trained users to ignore future sends. They capped sends
          per user per day and monitored open rates by channel. (Mazal, 2023)
        </li>
      </ol>
      <p>
        The channel-protection rule is the most directly applicable lesson for
        LangoBee at launch. LangoBee has never sent a push notification. The
        first send sets the open-rate baseline. A low-quality first send to users
        who do not find the content relevant will produce unsubscribes that
        cannot be reversed. The small user volume at launch (roughly 4 real WAU)
        is actually an advantage: each send is a qualitative experiment, not a
        production-scale rollout. You can afford to be careful about what the
        first message says.
      </p>

      {/* ---- 8. LANGOBEE'S THREE CANDIDATE HOOKS ---- */}
      <AnchorHeading as="h2" id="three-candidate-hooks">
        8. LangoBee's three candidate hooks: an honest comparison
      </AnchorHeading>
      <p>
        Three hooks are buildable in the current sprint. Each sits at a different
        point on the external-to-internal trigger path.
      </p>
      <p>
        <strong>PWA push notification.</strong> Web push is available (the PWA
        manifest is configured). The implementation requires a permission prompt,
        a service worker push handler, and a server-side send job. The external
        trigger is the device notification. The internal trigger it aims to
        cultivate is the habitual check-in when a learning urge arises.
      </p>
      <p>
        The honest constraints: web push permission conversion on the open web
        runs 5-15% in cold contexts. A prompt shown to a user who has not yet
        developed an internal trigger will be declined. At LangoBee's current
        user volume, a successful permission campaign reaches roughly 3-5 users.
        The channel risk is real: push permissions once revoked cannot be
        re-requested without the user manually restoring them. This hook produces
        the lowest volume of measurable signal at current scale.
      </p>
      <p>
        <strong>Daily "new for you" email.</strong> Supabase auth already
        delivers transactional email. A daily digest email surfacing one new
        Spanish short matched to the user's comprehension level is buildable as
        a scheduled Edge Function. The external trigger is the email. The internal
        trigger it aims to cultivate is treating email as a content-discovery
        entry point for language learning.
      </p>
      <p>
        The honest constraints: the watch-next ranker already computes{" "}
        <code>mean_zipf</code> difficulty scores and the word status overlay gives
        per-user comprehension estimates. The content selection is already done.
        The email hook requires the send infrastructure only. Email is
        undoable: an unsubscribe does not close the channel permanently. Average
        consumer email open rates in 2024 run 20-25%. At current volume, this
        is a qualitative experiment in message quality, not a statistical test.
      </p>
      <p>
        <strong>Streak surface at session end.</strong> The{" "}
        <code>daily_stats</code> and <code>courses.streak_days</code> columns
        already exist in the schema. The streak is computed but not shown. Surfacing
        it at session end requires only front-end work.
      </p>
      <p>
        The honest constraints: the streak surface is an internal-trigger
        amplifier, not an external trigger. It does nothing for users who do not
        return at least twice to see the streak grow. At D1 rates below 30%,
        most users will see their streak reset to 1 on day 2. A streak that
        immediately resets is more discouraging than motivating. However, the
        streak surface is the fastest to build, has no permission or
        deliverability risks, and costs zero infrastructure. If D1 is already
        above 40% for some user segment, the streak surface will land in a more
        receptive context.
      </p>

      <Callout title="Which hook to ship first">
        <p>
          For a solo founder at LangoBee's current scale, the streak surface is
          the least risky first hook: no channel to protect, no infrastructure to
          build, buildable in a day. It will not move D1 for users who do not
          return, but it will increase the investment cost of churning for users
          who do return. Ship the streak surface first, then add the daily email
          once you have confirmed the streak mechanic is not actively discouraging
          users with a day-2 reset.
        </p>
      </Callout>

      {/* ---- 9. WRITING THE EVENT SPEC ---- */}
      <AnchorHeading as="h2" id="event-spec">
        9. Writing the hook event spec
      </AnchorHeading>
      <p>
        Every hook requires an event spec: a written definition of every PostHog
        event the hook fires, what condition triggers each event, what properties
        it carries, and what success looks like. The spec serves two purposes.
        First, it forces you to be precise about what you are measuring before
        you build. Second, it creates a reference you can check in six weeks when
        you try to read the data and find the event names have drifted.
      </p>
      <p>
        A minimal event spec for the streak surface hook:
      </p>
      <pre>{`Event: streak_surface_shown
Fired: user reaches session-end screen AND courses.streak_days >= 1
Properties: streak_days, session_words_read, session_duration_seconds
Success: D1 return rate for users who saw streak_surface_shown
         vs users who did not, measured over 4 cohort weeks

Event: streak_surface_cta_clicked
Fired: user taps "see you tomorrow" or equivalent CTA on streak screen
Properties: streak_days, cta_label
Success: click rate as a proxy for message resonance`}</pre>
      <p>
        Write the spec before writing code. If you cannot write the spec clearly,
        the hook is not well-defined enough to build.
      </p>

      {/* ---- EXERCISES ---- */}
      <AnchorHeading as="h2" id="exercises">Exercises</AnchorHeading>
      <p>
        These are retrieval practice. Answer from memory before checking the
        reading.
      </p>

      <Exercise n={1}>
        <p>
          Name the four stages of the Hooked model in order. For each stage,
          give the LangoBee-specific example from this reading. Then explain in
          one sentence why the Investment stage is what makes the next trigger
          loop easier to complete.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          A founder ships a product with no external triggers and observes that
          30% of activated users return on D7. They conclude that internal
          triggers are already working. Explain why this conclusion may be
          wrong, and what they should do before accepting it.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          LangoBee's May 18 cohort shows 6 of 12 activated users returned. The
          May 25 cohort shows 3 of 7 activated users returned. A colleague says
          the curve is decaying and you should pivot the product. Write a one-paragraph
          rebuttal that uses the confidence interval argument from section 6 of
          this reading. State exactly what additional data would be needed to
          support the colleague's conclusion.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Duolingo's growth team found that Current User Retention Rate had 5x
          the impact on DAU of any other input metric. Describe what this finding
          implies about where a founder should spend their next sprint: on
          acquisition, on reactivating churned users, or on current user
          retention. Explain the reasoning in terms of the compounding mechanic
          Mazal describes.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Write the event spec for LangoBee's daily email hook. Your spec must
          include: two event names, the fired-when condition for each, at least
          two properties per event, and one sentence defining what success looks
          like in PostHog. Use the format from section 9 of this reading.
        </p>
      </Exercise>

      {/* ---- GOING DEEPER ---- */}
      <AnchorHeading as="h2" id="going-deeper">Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet this week:</strong> Choose your hook, write
          its event spec, build the D1 dashboard. The section operationalizes
          everything in this reading.
        </li>
        <li>
          <strong>Lecture 2 (this week):</strong> Instrumenting return. Covers D1
          definitions, the cohort curve shape analysis, and setting up the PostHog
          retention chart.
        </li>
        <li>
          <strong>Mazal (2023), full essay:</strong> "How Duolingo Reignited User
          Growth" at{" "}
          <a href="https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth">
            lennysnewsletter.com
          </a>. The complete account of CURR, streak optimization, and channel
          protection from the CPO who ran the work. The most directly applicable
          primary source for this week.
        </li>
        <li>
          <strong>Mazal (2023), companion talk:</strong> "How to explode growth
          twice: Duolingo" at{" "}
          <a href="https://www.youtube.com/watch?v=BIagRI_uQ3w">
            youtube.com/watch?v=BIagRI_uQ3w
          </a>. The 40-minute video walk-through of the growth model decomposition.
          Watch the first 20 minutes for the CURR finding alone.
        </li>
        <li>
          <strong>Community:</strong> The Refold Espanol Discord (
          <a href="https://discord.com/servers/refold-espanol-es-667734565309382657">
            discord.com/servers/refold-espanol-es-667734565309382657
          </a>
          ) is the highest-signal community for comprehensible-input Spanish
          learners. The questions people ask there about their learning habits,
          what keeps them coming back to a resource, and what causes them to drop
          one, are the most useful qualitative input you can get on which hook
          to build. Spend one session reading the channel before your section.
        </li>
      </ul>

      <Takeaways>
        <li>
          The Hooked model has four stages. External triggers must precede
          internal ones because internal triggers form only after enough
          repetitions of the reward cycle. A product that ships zero external
          triggers is waiting for habits that were never seeded.
        </li>
        <li>
          Current User Retention Rate had 5x the DAU impact of any other input
          metric at Duolingo. Fix CURR before spending on acquisition. The
          retention phase in this course precedes the distribution phase for
          exactly this reason.
        </li>
        <li>
          A flattening retention curve, even at a low floor, signals that some
          segment finds the product durable. A decaying curve means no stable
          segment has formed. Two cohort weeks at n under 15 cannot distinguish
          the two shapes.
        </li>
        <li>
          LangoBee's May data (50% and 43% return rates on activated users) is
          within noise at these sample sizes. Treat the numbers as directional,
          not conclusive. You need at least 30 activated users per cohort week
          to draw a curve-shape conclusion.
        </li>
        <li>
          Choose one hook to ship. Write its full event spec before writing code.
          Build the de-alted D1 dashboard before the hook goes live so you have
          a baseline to compare against.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Balfour, B. (2013). The never ending road to product market fit.{" "}
          <a href="https://brianbalfour.com/essays/product-market-fit">
            brianbalfour.com/essays/product-market-fit
          </a>
          . The retention curve as the decisive PMF checkpoint; flattening vs
          decaying curve analysis.
        </p>
        <p>
          Eyal, N. (2021). Optimize app retention with the Hooked model.
          Google Play developer publication.{" "}
          <a href="https://medium.com/googleplaydev/optimize-app-retention-with-the-hooked-model-a0781f8e5d29">
            medium.com/googleplaydev/optimize-app-retention-with-the-hooked-model-a0781f8e5d29
          </a>
          . The four Hook Model stages applied to mobile app retention; the
          Investment phase and switching cost.
        </p>
        <p>
          Madhavan, A. (2016). The retention lifecycle framework. Amplitude.{" "}
          <a href="https://amplitude.com/blog/retention-lifecycle-framework">
            amplitude.com/blog/retention-lifecycle-framework
          </a>
          . New, current, and resurrected user cohorts; the Quick Ratio.
        </p>
        <p>
          Mazal, J. (2023). How Duolingo reignited user growth. Lenny's Newsletter.{" "}
          <a href="https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth">
            lennysnewsletter.com/p/how-duolingo-reignited-user-growth
          </a>
          . Primary-source account of the CURR finding, streak optimization, and
          notification channel protection.
        </p>
        <p>
          Mazal, J. (2023). How to explode growth twice: Duolingo.{" "}
          <a href="https://www.youtube.com/watch?v=BIagRI_uQ3w">
            youtube.com/watch?v=BIagRI_uQ3w
          </a>
          . Video companion to the Lenny essay; growth model decomposition.
        </p>
        <p>
          Winters, C. and Rachitsky, L. (2021). What is good retention: an
          exhaustive benchmark study.{" "}
          <a href="https://caseyaccidental.com/what-is-good-retention">
            caseyaccidental.com/what-is-good-retention
          </a>
          . Consumer-transactional retention benchmarks: good at ~30% month-6,
          great at ~50%.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk04ReadingSearchBody =
  "Hooked model trigger action variable reward investment external trigger internal trigger streak Duolingo CURR current user retention rate notification channel protection D1 D7 D30 retention flattening decaying cohort curve small-n confidence interval LangoBee May 18 May 25 cohort PWA push email streak surface event spec de-alted dashboard week 4 retention";
