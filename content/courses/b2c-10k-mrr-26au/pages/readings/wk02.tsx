import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk02Reading() {
  return (
    <ReadingPage
      id="wk02-activation"
      title="Week 2, Activation: the first 60 seconds that decide whether anyone comes back"
      kicker="B2C to $10k MRR · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This week&rsquo;s mission: cut your time-to-first-value in half. By
          the end of this reading you will be able to name your product&rsquo;s
          activation event in one sentence a new user would recognize, compute
          your activation rate from production data, identify the largest
          drop-off in your onboarding flow, and articulate the difference
          between sign-up friction and time-to-value.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You already understand the
          AAARRR funnel (activation sits between acquisition and retention),
          what an activation event is in the abstract, and the difference
          between vanity metrics and actionable metrics. Those were Week 1
          concepts. This week we make them concrete for your specific product.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="week-at-a-glance">1. Your week at a glance</AnchorHeading>
      <p>
        <strong>Learning goals.</strong> By Friday you should be able to: name
        your product&rsquo;s aha moment in a single sentence the user would
        recognize; compute your activation rate from real data; identify the
        largest drop-off in your onboarding flow; and articulate the difference
        between sign-up friction and time-to-value.
      </p>
      <p>
        <strong>Milestones.</strong> Four concrete deliverables:
      </p>
      <ol>
        <li>Activation rate measured for the past 30 days.</li>
        <li>Onboarding flow walked through end-to-end on a fresh device, with screenshots.</li>
        <li>One activation experiment shipped (even a copy change counts).</li>
        <li>Three teardown notes: one category leader, one indie hit, one your own product.</li>
      </ol>
      <p>
        <strong>Bloom outcomes.</strong> (1) <em>Apply:</em> measure activation rate
        from production data for your product. (2) <em>Analyze:</em> identify the
        largest drop-off step in your onboarding using session replay. (3) <em>Create:</em>
        design and ship one activation experiment with a measured before/after.
      </p>
      <p>
        <strong>Metrics to track this week:</strong> activation rate (D0), time
        to activation (median), drop-off step in onboarding, public outputs
        shipped.
      </p>

      <AnchorHeading as="h2" id="daily-routine">2. Your week, day by day</AnchorHeading>
      <p>
        Each day has four slots. The build block does not open until the
        morning growth move and customer hour are done. That is not a
        suggestion.
      </p>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Morning growth move (30 min)</th>
              <th>Customer hour (60 min)</th>
              <th>Build block (210 min)</th>
              <th>Measure + reflect (15 min)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Mon</strong></td>
              <td>Post a teardown thread of one category leader&rsquo;s onboarding.</td>
              <td>Walk through your own onboarding on a fresh device; screenshot every step.</td>
              <td>Build the activation-rate query.</td>
              <td>Where did you wince at your own product?</td>
            </tr>
            <tr>
              <td><strong>Tue</strong></td>
              <td>Public post: &ldquo;my activation rate is X%; here&rsquo;s what I&rsquo;m fixing.&rdquo;</td>
              <td>Watch 3 session replays of users who didn&rsquo;t activate.</td>
              <td>Ship one onboarding copy change.</td>
              <td>What was the single biggest drop-off step?</td>
            </tr>
            <tr>
              <td><strong>Wed</strong></td>
              <td>Cold-message 5 power-users asking what hooked them.</td>
              <td>Interview one power user.</td>
              <td>Remove one sign-up friction (optional field, account requirement, etc.).</td>
              <td>Was the friction worth what it cost you?</td>
            </tr>
            <tr>
              <td><strong>Thu</strong></td>
              <td>Post a before/after of one onboarding step.</td>
              <td>Watch a teardown video of an indie hit&rsquo;s onboarding (mobbin.com, etc.).</td>
              <td>Ship demo data / empty-state copy.</td>
              <td>Will you keep this change?</td>
            </tr>
            <tr>
              <td><strong>Fri</strong></td>
              <td>Friday &ldquo;what I shipped + measured&rdquo; public recap.</td>
              <td>Re-walk your own onboarding. Did it get faster?</td>
              <td>No new features. Tighten Monday&rsquo;s activation experiment.</td>
              <td>Activation delta this week?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AnchorHeading as="h2" id="plan-card">3. This week&rsquo;s plan card</AnchorHeading>
      <Callout title="Fill this in on Sunday or Monday AM (15 minutes)">
        <p><strong>Last week&rsquo;s activation rate (if known):</strong> ____%</p>
        <p><strong>My activation event:</strong> A user has activated when they ________________ within ____ hours of signing up.</p>
        <p><strong>My 3 milestones this week:</strong></p>
        <ol>
          <li>_______________________________________________</li>
          <li>_______________________________________________</li>
          <li>_______________________________________________</li>
        </ol>
        <p><strong>My repeating growth move this week:</strong> _______________________________________________</p>
        <p><strong>The friction most likely to derail me:</strong> _______________________________________________</p>
      </Callout>

      <AnchorHeading as="h2" id="daily-rules">4. Daily rules</AnchorHeading>
      <Callout title="Non-negotiable course rules (apply every day this week)">
        <ul>
          <li>The build block does not open until the morning growth move and customer hour are done. No exceptions.</li>
          <li>If the week&rsquo;s growth move feels uncomfortable, that&rsquo;s evidence it&rsquo;s the right one.</li>
          <li>Friday review is non-negotiable. Skipping it means the week didn&rsquo;t count.</li>
          <li>Build-block scope is one sentence. If you can&rsquo;t write it in one sentence, the scope is too big.</li>
          <li>No new features that aren&rsquo;t on this week&rsquo;s milestone list. Period.</li>
          <li>Every weekday you ship one piece of public output (tweet, post, Reddit comment, IH update). Target: 50+ by end of course.</li>
        </ul>
      </Callout>

      <AnchorHeading as="h2" id="time-to-value">5. Time-to-value: the clock your user is running against</AnchorHeading>
      <p>
        <strong>Time-to-value (TTV)</strong> is the elapsed time between a user&rsquo;s
        account creation and the moment they first experience the core benefit
        of your product. It is a clock that starts the instant they land on
        your sign-up page or open your app for the first time.
      </p>
      <p>
        Users do not wait. Research and operator experience consistently point
        to a first-session window of 30-90 seconds before a new user either
        finds something worth continuing or closes the tab. That window is not
        a reflection of impatience. It is a reflection of how much competing
        demand each person has on their attention. Your product is one of
        dozens of open tabs.
      </p>
      <p>
        Every step you require before value is delivered costs you a percentage
        of your arriving cohort. A required email confirmation costs some
        percentage. A five-question sign-up survey costs more. An empty
        interface with no guidance costs the most, because it asks the user to
        do work before they have any reason to trust that the work will pay off.
      </p>
      <p>
        TTV is not the same as onboarding length. A ten-step onboarding that
        delivers the core value experience at step three has a short TTV. A
        two-step sign-up that dumps the user into a blank canvas with no
        guidance has a long effective TTV, even if the form was short.
      </p>
      <p>
        The question to keep in mind as you read this chapter: at what exact
        step does your product first deliver its core promise? Every step
        before that one is TTV overhead.
      </p>

      <AnchorHeading as="h2" id="aha-moment">6. The aha moment: what it is and how to find yours</AnchorHeading>
      <p>
        The <strong>aha moment</strong> is the instant a new user first
        experiences the specific value that makes your product worth keeping.
        It is the moment that separates the users who will become regular
        customers from those who sign up, browse for two minutes, and never
        return.
      </p>
      <p>
        The term is widely used and widely misunderstood. Two failure modes
        are worth naming explicitly.
      </p>
      <p>
        <em>Failure mode 1: confusing the sign-up for the aha moment.</em> The
        aha moment is not when the user creates an account. That action is
        entirely on your side of the transaction. The user has given you their
        email and password and received nothing yet. The aha moment is always
        on the user&rsquo;s side: it is the first time they experience value.
      </p>
      <p>
        <em>Failure mode 2: naming a feature rather than a user
        outcome.</em> &ldquo;When the user exports a CSV&rdquo; is not an aha
        moment. &ldquo;When the user sees their first automated report and
        realizes they don&rsquo;t have to build it themselves&rdquo; is closer.
        The aha moment names what the user feels, not what button they click.
      </p>
      <p>
        The methodical way to find your aha moment comes from Lenny Rachitsky
        (2022): start by brainstorming candidate moments from usage data (first
        export, first share, first collaboration, first result), then run a
        regression of each candidate against 30-day retention to find the step
        that best predicts whether users stay. The step that produces the
        largest retention lift is your leading candidate.
      </p>
      <p>
        But correlation is not enough. Rachitsky&rsquo;s key finding is that
        a good activation metric must be causal for retention, not merely
        correlative. If you can nudge users toward that action and their
        retention goes up, it is causal. If nudging them has no effect on
        retention, the correlation was coincidence. Real-world examples:
        Slack found that teams who sent 2,000+ internal messages in their first
        ten days retained at dramatically higher rates. Nudging teams toward
        that threshold improved retention. The metric was causal.
      </p>
      <p>
        Write your aha moment now in this form: &ldquo;A user experiences our
        aha moment when they [specific action] and realize [specific
        outcome].&rdquo; If you cannot write it, that is diagnostic. You do
        not yet have a clear view of the value your product delivers.
      </p>

      <AnchorHeading as="h2" id="onboarding-friction">7. Onboarding friction: the taxonomy</AnchorHeading>
      <p>
        <strong>Onboarding friction</strong> is any obstacle between a new
        user and their aha moment. There are three types, and they call for
        different fixes.
      </p>
      <p>
        <strong>UX friction</strong> is an obstacle caused by the interface:
        a required field the user doesn&rsquo;t understand, a confirmation
        email that never arrives, a button labeled with jargon. UX friction is
        the easiest to diagnose (users stop at the same step) and the easiest
        to fix (remove the field, rewrite the label, eliminate the gate).
      </p>
      <p>
        <strong>Value gap</strong> is the user&rsquo;s failure to understand
        why they should continue. They have not yet seen enough of the product
        to believe it will deliver on the promise. Value gap looks like users
        who complete all the onboarding steps but still don&rsquo;t activate.
        They got through the form but did not do the thing that produces
        value. The fix is usually to front-load the value experience earlier,
        before you ask the user to invest effort in setting up.
      </p>
      <p>
        <strong>Trust gap</strong> is the user&rsquo;s hesitation to give
        you what you&rsquo;re asking for. Credit card before trial, phone
        number for a notes app, location permission before the app has earned
        it. Trust gaps are addressed by deferring the ask until the user has
        evidence that the product is worth trusting.
      </p>
      <p>
        Natalia Amorim (PostHog, 2025) frames onboarding drop-offs as usually
        UX friction, not product rejection. That framing is correct for most
        early products: the user was willing to try, something got in the way,
        and they left before they had any evidence about whether the product
        itself was good. The session replay diagnostic is the primary tool for
        distinguishing the three types. UX friction produces visible hesitation
        and re-reads at a specific step. Value gap produces smooth but
        purposeless completion. Trust gap produces abandonment precisely when
        a sensitive ask appears.
      </p>
      <p>
        Paul Graham&rsquo;s essay &ldquo;Do Things That Don&rsquo;t Scale&rdquo; (2013)
        makes a related point from a different direction. The most
        informative onboarding feedback comes from manually walking new users
        through your product one at a time, by hand. Not because this scales,
        but because it reveals what no funnel chart can: the exact words a
        confused user uses, the assumption they made that turned out to be
        wrong, the moment they almost quit but didn&rsquo;t. The customer hour
        ritual you are running this week is that practice, systematized.
      </p>

      <AnchorHeading as="h2" id="empty-state">8. Empty-state design: the screen that loses the most users</AnchorHeading>
      <p>
        The <strong>empty state</strong> is the interface a new user sees when
        they first arrive in the product with no data yet. It is often the
        most neglected screen in a product and frequently the one responsible
        for the largest single drop-off in onboarding.
      </p>
      <p>
        There are two broad responses to the empty state problem.
      </p>
      <p>
        The first is <em>demo data</em>: pre-populate the interface with
        realistic sample content so the product looks alive on arrival. The
        user sees what a working version of the product looks like. This is
        effective when the value of the product is visual or immediately
        apparent from looking at data. It fails when the demo data is so
        generic that the user can&rsquo;t project their own situation onto it,
        or when the user must delete the demo data before they can do real
        work. The latter is the demo data trap: you have replaced an empty
        screen with a populated screen the user now has to clean before they
        can start. That is a worse experience than the blank canvas.
      </p>
      <p>
        The second is the <em>actionable prompt</em>: a single prominent
        call-to-action that drives the user toward the first value event.
        Nothing else on the screen. &ldquo;Create your first project&rdquo;
        with a large primary button. The actionable prompt works when the
        product&rsquo;s value is clear from the name and context, and when
        the first action the user takes is itself part of the value experience.
      </p>
      <p>
        The hybrid approach that tends to work best for complex tools: show
        a stripped-down demo data view that makes the interface legible, and
        put a prominent &ldquo;start with your own data&rdquo; CTA in the
        most visible position. Users who want to explore the demo can. Users
        who want to get started can do that without deleting anything.
      </p>
      <p>
        The copy in the empty state matters more than founders expect. &ldquo;No
        items yet&rdquo; is correct but useless. &ldquo;Create your first
        report to start tracking your weekly revenue&rdquo; gives the user a
        reason and a next step in the same sentence. The best empty-state copy
        names both the action and the specific benefit the user will experience
        from taking it.
      </p>

      <AnchorHeading as="h2" id="activation-rate">9. Activation rate: computing and owning the number</AnchorHeading>
      <p>
        <strong>Activation rate</strong> is the percentage of new users who
        reach your activation event within a defined window.
      </p>
      <pre>{`Activation rate =
  users who reached activation event within N days
  ─────────────────────────────────────────────────
  users who signed up in the same N-day cohort`}</pre>
      <p>
        N is typically 1, 7, or 30 days depending on your product&rsquo;s
        natural usage rhythm. For most B2C products, start with D0
        (same-day activation). That is your most actionable number: it tells
        you what percentage of users who signed up today got value today.
      </p>
      <p>
        From a survey of 500+ products, Rachitsky and Timen (2022) found an
        average activation rate of 34% and a median of 25%. The 60th
        percentile (&ldquo;good&rdquo;) sits around 40-45%; the 80th
        percentile (&ldquo;great&rdquo;) is 60% or above. Before you compare
        yourself to these benchmarks, understand that variance by model and
        category is wide. A transactional tool where the value is obvious in
        30 seconds should be at 60%+. A complex tool that requires setup
        might reasonably be at 20-25% and that could still be healthy if the
        users who do activate retain well.
      </p>
      <p>
        The more important comparison is to your own number last week. Activation
        rate is a metric you own and move. When you ship a copy change Monday
        and watch Tuesday&rsquo;s D0 activation rate, you are running an
        experiment. That tight feedback loop is what makes activation the
        highest-leverage place to spend time in weeks 2-4.
      </p>
      <p>
        The PMF framing from Sean Ellis (2019) gives activation rate its
        wider context. Ellis surveyed nearly 100 startups and found that
        products where 40% or more of active users would be &ldquo;very
        disappointed&rdquo; if the product disappeared consistently achieve
        sustainable growth. Products below that threshold struggle for
        traction regardless of how much they spend on acquisition.
      </p>
      <p>
        The connection to activation: the users who reach your aha moment are
        the users most likely to say &ldquo;very disappointed.&rdquo; Users
        who sign up and never activate are almost certainly in the
        &ldquo;not disappointed at all&rdquo; bucket. Your activation rate
        is a leading indicator of your future Ellis score.
      </p>
      <p>
        Rahul Vohra&rsquo;s Superhuman PMF engine (First Round Review, 2018)
        extends this further. Vohra used the Ellis survey to segment users by
        how they responded, then built a roadmap that doubled down on what
        the &ldquo;very disappointed&rdquo; users loved and removed barriers
        for the users who answered &ldquo;somewhat disappointed.&rdquo; His
        key insight: &ldquo;If you only double down on what users love, your
        PMF score won&rsquo;t increase. If you only address what holds users
        back, your competition will likely overtake you.&rdquo; The activation
        work you do this week is the &ldquo;remove barriers&rdquo; half of
        that engine.
      </p>

      <AnchorHeading as="h2" id="case-study">10. Case study: Duolingo&rsquo;s activation design</AnchorHeading>
      <p>
        Duolingo is one of the most studied examples of onboarding in B2C.
        It is worth examining not because you are building a language app,
        but because it demonstrates every principle from this chapter in a
        single clean flow.
      </p>
      <p>
        The first screen of Duolingo&rsquo;s onboarding asks which language
        you want to learn. This is not friction. It is the aha moment setup:
        the product is collecting the information it needs to deliver the
        first value experience, and the user is making a choice that creates
        psychological commitment. They have now invested something: they have
        expressed a goal.
      </p>
      <p>
        The second screen asks about their motivation. Again, not friction in
        the harmful sense: the personalization creates commitment and makes the
        first lesson more relevant. Critically, no account is required for
        either of these screens.
      </p>
      <p>
        The third step is the first lesson, which starts immediately. The user
        has not created an account. They have not confirmed an email. They are
        doing the thing the product is for. The time-to-value is under two
        minutes from cold start.
      </p>
      <p>
        Account creation is prompted after the first lesson completes. At that
        point, the user has invested real time, completed a real task, and
        experienced the product&rsquo;s core loop. The account creation ask
        arrives when the user is most likely to answer &ldquo;yes, I want to
        save this.&rdquo; The trust gap and the value gap have both been
        resolved before the registration gate appears.
      </p>
      <p>
        The streak mechanic is introduced in the first session. This is the
        retention hook, planted during activation. The user does not need to
        understand how streaks work to feel the pull of not wanting to lose
        theirs. By the time they create an account, they already have a
        one-day streak.
      </p>
      <p>
        The lessons for your product: defer registration until after value
        delivery. Remove everything from the path to the aha moment that
        doesn&rsquo;t contribute to it. Introduce your retention mechanism
        during the activation session, not after. The empty state in Duolingo&rsquo;s
        case is the language selection screen, and it is handled by making
        the user&rsquo;s choice the first action, not a setup step.
      </p>

      <AnchorHeading as="h2" id="exercises">11. Exercises</AnchorHeading>

      <Exercise n={1}>
        <p>
          <strong>Outcome: Apply.</strong> Pull 30 days of production data and
          compute your D0 activation rate using the formula in section 9. Write
          it as: &ldquo;X% of users who signed up in [date range] reached
          [your activation event] on the same day.&rdquo; If you don&rsquo;t
          have a defined activation event yet, define one first using the method
          in section 6.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          <strong>Outcome: Analyze.</strong> Open incognito. Start a timer. Walk
          your own onboarding from a cold start. Screenshot every step.
          Identify the step where a new user who didn&rsquo;t activate would
          most likely have stopped. What type of friction is it: UX friction,
          value gap, or trust gap? Write one sentence for each that explains
          your diagnosis.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          <strong>Outcome: Create.</strong> Write a one-sentence scope for an
          activation experiment you will ship this week. It must be achievable
          in one build block (3.5 hours), and it must address the drop-off you
          identified in exercise 2. Name the metric you will watch and record
          today&rsquo;s baseline for that metric.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          <strong>Outcome: Analyze.</strong> Read your empty state. Copy the
          exact text currently shown to a brand-new user who has no data yet.
          Rewrite it in one sentence that names both the action and the specific
          benefit of taking it. Compare the two versions. Which one would make
          a tired, skeptical person take the next step?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          <strong>Outcome: Apply.</strong> Cold-message three users who became
          power users of your product. Ask them one Mom Test-style question:
          &ldquo;Tell me about the first time you got real value from the
          product.&rdquo; Do not ask &ldquo;what did you like about
          onboarding?&rdquo; Record their exact words. Do they describe the
          same aha moment you named in section 6, or a different one?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">12. Going deeper</AnchorHeading>
      <p>
        If you want to read beyond this chapter before section:
      </p>
      <ul>
        <li>
          <strong>What is a good activation rate</strong> (Lenny Rachitsky
          &amp; Yuriy Timen, 2022). The primary source for the benchmark data
          cited in section 9. Includes the improvement tactic list. Available
          at Lenny&rsquo;s Newsletter.
        </li>
        <li>
          <strong>How to determine your activation metric</strong> (Lenny
          Rachitsky, 2022). The three-step regression method in section 6 is
          drawn from here. Includes named examples from Figma, Slack, Airtable,
          and Linear.
        </li>
        <li>
          <strong>App onboarding: how to fix drop-off points</strong> (Natalia
          Amorim, PostHog, 2025). The nine-step drop-off diagnosis method
          referenced in section 7. Practical and tool-specific.
        </li>
        <li>
          <strong>Section worksheet:</strong> the activation audit. Bring your
          activation rate number and your onboarding screenshots. You will
          need both.
        </li>
        <li>
          <strong>Lecture 2 this week:</strong> onboarding teardown. We will
          walk three products live using the framework from this reading.
        </li>
      </ul>

      <Takeaways>
        <li>Time-to-value is a clock that starts the moment a user lands. Every step before value delivery is overhead that costs a percentage of your cohort.</li>
        <li>A valid activation event is causal for retention, not merely correlative. Brainstorm candidates, regress against retention, then verify causality with an experiment (Rachitsky, 2022).</li>
        <li>Onboarding drop-offs have three types: UX friction, value gap, and trust gap. Session replays distinguish them; each calls for a different fix.</li>
        <li>The empty state is the most neglected screen in most products and often the largest single drop-off. Actionable copy that names both the action and the benefit outperforms &ldquo;no items yet.&rdquo;</li>
        <li>Your activation rate is a leading indicator of your Ellis PMF score. Users who never activate are almost never &ldquo;very disappointed&rdquo; if the product disappears (Ellis, 2019; Vohra, 2018).</li>
      </Takeaways>

      <Bibliography>
        <p>
          Amorim, Natalia. &ldquo;App onboarding: how to fix drop-off points.&rdquo;
          PostHog blog, 2025. Nine-step method for diagnosing and fixing
          onboarding drop-offs using funnel analytics and session replays.
        </p>
        <p>
          Ellis, Sean. &ldquo;Using product/market fit to drive sustainable
          growth.&rdquo; Medium / GrowthHackers, 2019. The original framing of the
          40% &ldquo;very disappointed&rdquo; threshold as a leading indicator of
          sustainable growth.
        </p>
        <p>
          Fitzpatrick, Rob. <em>The Mom Test: how to talk to customers and learn
          if your business is a good idea when everyone is lying to you.</em>
          2013. Practical handbook for customer interviews used in the customer
          hour ritual.
        </p>
        <p>
          Graham, Paul. &ldquo;Do things that don&rsquo;t scale.&rdquo; paulgraham.com,
          2013. The canonical essay on manual, unscalable early tactics as a
          discovery mechanism, not a stopgap.
        </p>
        <p>
          Rachitsky, Lenny. &ldquo;How to determine your activation metric.&rdquo;
          Lenny&rsquo;s Newsletter, 2022. Three-step methodology: brainstorm,
          regress, experiment. Includes named examples from Figma, Slack, and
          Airtable.
        </p>
        <p>
          Rachitsky, Lenny and Yuriy Timen. &ldquo;What is a good activation
          rate.&rdquo; Lenny&rsquo;s Newsletter, 2022. Survey of 500+ products;
          median 25%, average 34%, with benchmark percentiles and top
          improvement tactics.
        </p>
        <p>
          Vohra, Rahul. &ldquo;How Superhuman built an engine to find
          product/market fit.&rdquo; First Round Review, 2018. Four-step PMF
          engine: survey, segment, roadmap, track weekly. Key insight on the
          balance between doubling down on love and removing barriers.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk02ReadingSearchBody =
  "activation time-to-value aha moment onboarding friction empty state activation rate TTV drop-off session replay sign-up friction demo data Duolingo Superhuman Ellis PMF survey Lenny Rachitsky reading Week 2 B2C growth $10k MRR";
