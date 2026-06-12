import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk12Reading() {
  return (
    <ReadingPage
      id="wk12"
      title="Week 12: The $10K MRR operating plan"
      kicker="LangoBee to $10K MRR · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the operating system for a solo founder going from
          $0 to $10K MRR: how to run a weekly cadence that grades last week
          before planning this one, how to construct a sequenced operating plan
          with explicit kill criteria, and how to audit the plan against the
          self-deceptions that have appeared in LangoBee's own numbers over the
          past twelve weeks. By the end you will be able to write the three
          sequenced bets, the channel math for each, and the kill criteria that
          tell you when to stop.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> This is the synthesis week.
          Every concept below draws on earlier weeks: pivot criteria (week 2),
          D1 retention (week 4), the MRR model (week 8), community launch (week
          9), creator partnership (week 10), and growth loops (week 11). The
          reading assumes you have run those weeks on the real product. Numbers
          cited from earlier weeks are taken from those sessions, not
          reconstructed here.
        </p>
      </ReadingFraming>

      {/* ---- 1. THE WEEKLY CADENCE ---- */}
      <AnchorHeading as="h2" id="1-weekly-cadence">
        1. The weekly cadence as an operating system
      </AnchorHeading>

      <p>
        Amazon's Weekly Business Review, described in detail by Cedric Chin in
        his interview with former Bezos shadow Colin Bryar, is built around one
        structural rule: discuss input metrics, not output metrics. Output metrics
        (revenue, churn rate, MRR) are things you can observe but not act on
        directly this week. Input metrics (new push opt-ins, concierge sessions
        run, trial starts from the current outreach wave) are things you can
        change by changing your behavior today. (Chin, 2023)
      </p>

      <p>
        The WBR's second structural rule is sequencing: the prior week is graded
        before anything else on the agenda. A team that opens with "what are we
        building this week" before grading the prior week's bets has severed the
        feedback loop. The data from last week informs whether this week's plan
        should continue, pivot, or kill the current bet.
      </p>

      <p>
        For a solo founder, the lean version of this system has four parts.
        First, a north-star table filled before any build work begins on Monday.
        Second, a graded bets list: green (met the week's input metric target),
        yellow (within 20% of target), red (missed by more than 20% or did not
        run). Third, a theme-blocked calendar committing the week's build time
        before any unplanned work enters. Fourth, one new bet placed for the
        coming week, with its input metric threshold written down.
      </p>

      <p>
        The langobee-intel repo already has this structure as a weekly report.
        The upgrade this week is not architectural. It is disciplinary: the
        north-star table is committed to the repo before any other Monday work
        begins. An uncommitted report does not close the loop. A cold session
        three months from now cannot read it. An agent cannot audit it.
      </p>

      <Callout title="What the north-star table contains">
        <p>Five rows, filled each Monday from PostHog and Supabase:</p>
        <ul>
          <li>Real WAU: authenticated users, de-alted, bot-excluded, last 7 days</li>
          <li>D1 return rate: latest full cohort, same filters</li>
          <li>MRR: from Stripe, normalized to monthly recurring only</li>
          <li>Trial starts: cumulative since product launch</li>
          <li>This week's input metric: the one controllable variable for the current bet</li>
        </ul>
        <p>
          If any cell is unknown, write "unknown" and flag it. An unknown is
          honest. A blank is invisible.
        </p>
      </Callout>

      {/* ---- 2. GRADING THE TWELVE WEEKS ---- */}
      <AnchorHeading as="h2" id="2-grading-twelve-weeks">
        2. Grading the twelve weeks
      </AnchorHeading>

      <p>
        The course's five phases produced outputs that are now evidence, not
        memory. Each phase closes with three graded claims: what was proven
        (a specific number supports it), what was killed (a hypothesis the data
        falsified), and what is still open (a question the course did not close).
      </p>

      <p>
        <strong>Foundations (weeks 1-2):</strong> The thesis discipline produced
        a written thesis with a kill threshold. The bot-signup wave of June 1
        (52 apparent signups, 1 real activation) was a clean falsification of
        raw signup counts as a growth metric. What is still open: the fork
        decision between the premium library thesis and the freemium shorts
        thesis has not been settled by evidence. Neither direction has had a
        trial started.
      </p>

      <p>
        <strong>Retention (weeks 3-5):</strong> The D1 cohort work established
        the real baseline: approximately 24% ever-return on de-alted real users,
        with the May 18 cohort (15 signups, 12 activated, 6 returned) as the
        best-performing cohort in the dataset. The median activated user has 1
        active day and roughly 2 minutes of total session time. What is still
        open: the D1 return rate has not reached the 30% bar on a sustained
        cohort. No retention hook has been confirmed as causally responsible for
        an improvement.
      </p>

      <p>
        <strong>Monetization (weeks 6-8):</strong> The MRR model was
        constructed and stress-tested. Stripe, checkout, trial mechanics, and
        the webhook are all wired. Zero trial_started events have ever fired.
        What is killed: the hypothesis that wiring the infrastructure would
        cause trials to start. Trials require a user who decides to enter the
        paywall, and no mechanism for recruiting that user has been validated.
        What is still open: willingness to pay has not been measured through any
        conversation with a real user.
      </p>

      <p>
        <strong>Distribution (weeks 9-11):</strong> The only confirmed
        acquisition channel is direct (Discord manual recruiting). Three
        community-launch channels were tested. No channel has met the
        repeatability bar: three independent repetitions with consistent
        cost-per-signup. What is killed: the hypothesis that organic traffic
        from google.com (21 visitors in 30 days) represents a developing SEO
        channel. What is still open: the creator partnership outreach wave has
        not been completed, and programmatic SEO pages have not been shipped.
      </p>

      <p>
        <strong>Synthesis (this week):</strong> The operating plan is the
        output. It is graded not by whether it is ambitious but by whether it
        is internally consistent with the evidence from the prior four phases.
      </p>

      {/* ---- 3. THE SEQUENCING ARGUMENT ---- */}
      <AnchorHeading as="h2" id="3-sequencing-argument">
        3. The sequencing argument
      </AnchorHeading>

      <p>
        The course's own phase order is the sequencing argument stated once.
        Foundations first, then retention, then monetization, then
        distribution. This is not arbitrary. It reflects the dependency chain
        in the unit economics.
      </p>

      <p>
        Rob Walling's Stair Step Method makes the same argument for bootstrapped
        founders: build a single-channel product to profitability first, then
        stack revenue sources, and only then launch a standalone recurring
        product at scale. (Walling, 2015) The implication for LangoBee: do not
        invest in channel work before the retention bar is met, because the
        channel will funnel users into a product that does not retain them. The
        cost of acquiring a user who churns in 24 hours is higher than the cost
        of not acquiring them.
      </p>

      <p>
        Jason Cohen's backward-from-$10K method formalizes this as arithmetic.
        Start from the target MRR, derive the subscriber count, derive the trial
        starts required, derive the signups required, and derive the traffic
        required. Each conversion rate in the chain must be either measured or
        labeled as an assumption. (Cohen, 2013) At LangoBee's current conversion
        rates, the arithmetic produces a required traffic volume that exceeds
        any channel currently validated. This is not a reason to give up; it is
        the information needed to set the correct sequence of bets.
      </p>

      <Callout title="The three sequenced bets for LangoBee">
        <p>
          <strong>Bet 1 (retention):</strong> D1 return rate of 30% or above on
          a real de-alted cohort of at least 20 users, sustained for two
          consecutive weeks. No channel spending until this closes.
        </p>
        <p>
          <strong>Bet 2 (first dollar):</strong> One trial started and converted
          to a paid subscription that holds for 30 days. Recruited manually from
          the current user base or Discord. No channel investment until this
          closes.
        </p>
        <p>
          <strong>Bet 3 (one repeatable channel):</strong> Three independent
          channel repetitions with consistent cost-per-real-signup and a
          signup-to-activation rate above 40%. Channel spending begins after
          this closes.
        </p>
      </Callout>

      {/* ---- 4. CHANNEL MATH ---- */}
      <AnchorHeading as="h2" id="4-channel-math">
        4. Channel math: the arithmetic that constrains every plan
      </AnchorHeading>

      <p>
        $10K MRR at $7.99 per month requires approximately 1,252 active paying
        subscribers. Working backward at 5% monthly churn, the business needs
        roughly 63 new subscribers per month simply to hold its subscriber count
        flat. At a 25% trial-to-paid conversion rate (the industry median for
        CC-required trials, per Poyar, 2026), that requires 252 trial starts per
        month. At a 3% signup-to-trial rate, that requires roughly 8,400
        signups per month.
      </p>

      <p>
        None of these conversion rates are currently measured at LangoBee
        because zero trials have been started. The channel math is therefore
        entirely hypothetical until Bet 2 closes. This does not make the math
        useless; it makes the math clarifying. The plan must state which
        conversion rates are measured and which are assumed. Every assumption
        must have an observation date by which it will be confirmed or revised.
      </p>

      <p>
        Jason Cohen's Max MRR formula provides the ceiling check: Max MRR equals
        new MRR divided by the monthly cancellation rate. (Cohen, 2025) If new
        monthly MRR is $200 and the cancellation rate is 5%, Max MRR is $4,000,
        a ceiling visible months before the plateau materializes. The formula
        makes explicit what the retention-first sequencing argument states
        qualitatively: at high churn, acquisition investment cannot compound.
      </p>

      <p>
        The practical implication for the operating plan: compute the Max MRR
        ceiling at the plan's assumed churn rate. If the ceiling is below $10K,
        either the churn assumption must be revised to a number the retention
        work supports, or the acquisition rate must be revised upward to
        compensate. A plan that does not close this check is internally
        inconsistent.
      </p>

      {/* ---- 5. KILL CRITERIA ---- */}
      <AnchorHeading as="h2" id="5-kill-criteria">
        5. Kill criteria: writing exit conditions before the bet is placed
      </AnchorHeading>

      <p>
        Annie Duke defines kill criteria as pre-committed state-plus-date
        conditions you write before starting a project that tell you when to
        exit. The commitment happens before the bet is placed, not after the data
        comes in, because once evidence arrives sunk-cost thinking and identity
        attachment distort the evaluation. (Duke, 2023)
      </p>

      <p>
        The kill-criteria format from week 2 applies to every bet in the
        operating plan: "If [metric] is below [threshold] by [date], this bet
        is dead and I move to the fallback." The fallback must be named. A bet
        without a fallback is a hope: you will pursue it indefinitely because
        there is no written alternative.
      </p>

      <p>
        Sahil Lavingia's Gumroad reconstruction identifies three moments where
        kill criteria were absent and persistence was costly. The first: a growth
        plateau that ran for months before the team acknowledged it. The second:
        an acquisition offer evaluated without a pre-committed framework for
        what "good enough" meant. The third: a fundraising round pursued after
        signals that the consumer market was not the right fit. In each case,
        the absence was not information: "The alarm bells were going off," he
        writes. The absence was structure. (Lavingia, 2019)
      </p>

      <p>
        The kill criteria for LangoBee's three bets must reflect the course's
        own evidence. Bet 1 kill criterion: if D1 return rate is below 20% after
        eight weeks of retention hook work, the current hook approach is
        falsified. Bet 2 kill criterion: if zero trials have been started from
        50 real signups by week 16 (from now), the current paywall placement
        or pricing is falsified. Bet 3 kill criterion: if cost-per-real-signup
        exceeds $50 after three independent channel repetitions, that channel
        is not viable at the current product's conversion rates.
      </p>

      {/* ---- 6. THE SELF-DECEPTION AUDIT ---- */}
      <AnchorHeading as="h2" id="6-self-deception-audit">
        6. The self-deception audit
      </AnchorHeading>

      <p>
        The operating plan must survive five checks before it is credible. Each
        one corresponds to a failure mode that has appeared in LangoBee's own
        data over the past twelve weeks.
      </p>

      <p>
        <strong>Vanity count check.</strong> Eric Ries's original definition:
        a metric is vanity if you cannot link a specific action to an observed
        change in the number. (Ries, 2009) LangoBee's 103 registered profiles
        is the canonical example. The number includes bots, spam registrations,
        and users who activated once and never returned. Restated as an
        actionable metric: 4 real weekly active users (authenticated,
        founder-excluded, bot-excluded) in the June 2026 snapshot. The operating
        plan must use the second number, not the first.
      </p>

      <p>
        <strong>Bot-signup inflation check.</strong> The June 1 week showed 52
        apparent signups. Domain analysis identified approximately 95% as
        bot or spam registrations (junk domains, password signups, exactly 1
        activation event, never returning). Any plan that uses raw Supabase
        user counts without the domain-filter and activation-filter applied is
        off by approximately 50x at the current bot-to-human ratio. The
        de-alted filter built in week 1 applies to every metric in the plan.
        (June 2026 snapshot)
      </p>

      <p>
        <strong>Founder dogfooding inflation check.</strong> 59% of all PostHog
        events in the June 2026 snapshot were generated by the founder account.
        A median session of 34 seconds for real users looks longer when blended
        with founder sessions. Any engagement figure not pulled with the founder
        account excluded is a fiction. This applies to word_lookup_opened counts
        (5,225 events in 30 days), video completion rates, and any "most popular
        content" analysis.
      </p>

      <p>
        <strong>One-spike-is-a-channel check.</strong> LangoBee's acquisition
        attribution over 30 days shows 174 direct visitors (manually recruited
        from Discord), 21 from google.com, and 5 from t.co. Each of the
        non-direct sources is a spike: a single event with unrepeatable
        conditions. A channel is repeatable. Three independent repetitions with
        consistent cost-per-signup is the minimum evidence for "channel." The
        operating plan must not label any source with fewer than three
        repetitions as a channel.
      </p>

      <p>
        <strong>Channel math avoidance check.</strong> The backward-from-$10K
        arithmetic produces uncomfortable numbers: approximately 8,400 signups
        per month required at current assumed conversion rates. Founders who
        avoid this math are not avoiding discouragement; they are avoiding the
        only tool that distinguishes a viable plan from aspiration. The operating
        plan must show the full chain of conversion rates, with each one labeled
        as measured or assumed, and a date by which each assumption will be
        validated.
      </p>

      {/* ---- 7. THE 12-MONTH VIEW ---- */}
      <AnchorHeading as="h2" id="7-twelve-month-view">
        7. The 12-month view
      </AnchorHeading>

      <p>
        The three sequenced bets have a natural timeline. Bet 1 (retention)
        requires building and measuring a retention hook over at least two
        full cohort cycles: approximately 8 to 10 weeks from now. Bet 2 (first
        dollar) requires manually recruiting a trial user from the current
        activated base: achievable in parallel with the tail end of Bet 1 if
        the retention bar is close. Bet 3 (channel) requires three channel
        repetitions: approximately 6 to 8 weeks of active channel work after
        Bet 2 closes.
      </p>

      <p>
        Rob Walling's Stair Step observation is that $10K MRR is the threshold
        at which paid channels become viable because LTV exceeds CAC at that
        scale. (Walling, 2015) Below that threshold, the only channels that work
        are those where the founder is doing the distribution work personally.
        This maps exactly to the three-bet sequence: personal recruitment for
        Bets 1 and 2, channel validation for Bet 3 as the foundation for paid
        acquisition at scale.
      </p>

      <p>
        The 12-month view is not a projection. It is a decision tree with
        explicit branch points. At each branch point, the kill criterion
        determines whether you proceed to the next bet or execute the named
        fallback. A decision tree that does not specify the fallback is not a
        tree; it is a straight line labeled "hope it works."
      </p>

      {/* ---- 8. THE INTEL REPO AS OPERATING INFRASTRUCTURE ---- */}
      <AnchorHeading as="h2" id="8-intel-repo">
        8. The intel repo as operating infrastructure
      </AnchorHeading>

      <p>
        The langobee-intel repo was introduced in week 1 as a place to commit
        the Monday weekly report. Over twelve weeks it has accumulated a
        version-controlled record of every graded bet, every north-star table
        entry, and every thesis revision. This is not just a log. It is the
        CEO dashboard for a one-founder company.
      </p>

      <p>
        The reason a version-controlled repo serves this function better than
        a Notion page or a spreadsheet is queryability. A cold session three
        months from now can grep the repo for "kill" and find every kill
        criterion ever written. An agent can pull the D1 trend by reading
        every Monday report and extracting the D1 row. The intel repo is
        immune to motivated forgetting precisely because it requires a commit:
        you cannot quietly revise last week's target after seeing this week's
        result without leaving a diff in the history.
      </p>

      <p>
        Cedric Chin's account of the Amazon WBR identifies the same property
        as the source of the meeting's effectiveness: the metrics are pulled
        automatically from the system of record, not compiled by hand by the
        person being reviewed. "The automation of the data pull is what makes
        the review honest." (Chin, 2023) For LangoBee, the equivalent is an
        agent that pulls PostHog WAU, D1 cohort, and Supabase trial count and
        commits the result to the intel repo every Sunday night. The founder
        reads it Monday morning and grades the bets. The agent does not grade
        the bets: that judgment requires the founder. But the agent removes the
        temptation to adjust the numbers before grading.
      </p>

      {/* ---- EXERCISES ---- */}
      <AnchorHeading as="h2" id="exercises">Exercises</AnchorHeading>
      <p>
        Complete these before section. Each is answerable from this reading and
        from your langobee-intel repo. Do not open PostHog or Supabase until
        you have written your answer from memory; then check and correct.
      </p>

      <Exercise n={1}>
        <p>
          State LangoBee's current D1 return rate on de-alted real users from
          memory. Then state the Bet 1 threshold (30% for two consecutive
          cohorts). Write one sentence on what specific retention hook change
          you believe is most likely to close the gap, and name the PostHog
          event that would measure whether it worked.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Using the Max MRR formula, compute the ceiling for two scenarios:
          (a) new MRR of $100/month at 8% monthly churn, and (b) new MRR of
          $100/month at 3% monthly churn. State whether either scenario reaches
          $10K MRR. Then state what change would allow scenario (a) to reach
          $10K without increasing new MRR.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write the kill criterion for LangoBee's Bet 2 (first dollar) in the
          exact state-plus-date format: "If [metric] is below [threshold] by
          [date], this bet is dead and I move to [fallback]." Name a specific
          fallback that is different from doing the same thing again. Then write
          one sentence explaining why the fallback you named is not also dead
          on arrival given the current evidence.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Run the bot-signup inflation check on this number: LangoBee has 103
          registered profiles. Applying the June 2026 bot-to-human ratio
          (approximately 95% of the June 1 cohort were bots), estimate the
          range of real human accounts. Then explain why this exercise matters
          for the channel math in the operating plan.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Name one metric currently in your PostHog dashboard that is an output
          metric (you can observe it but not act on it directly this week).
          Convert it to its corresponding input metric. Write the input metric
          in one sentence and state the threshold that would count as a green
          grade in this week's Monday report.
        </p>
      </Exercise>

      {/* ---- GOING DEEPER ---- */}
      <AnchorHeading as="h2" id="going-deeper">Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet this week:</strong> the capstone working
          session. Present the operating plan, run the red-team checklist, and
          run the Monday cadence once end to end.
        </li>
        <li>
          <strong>Jason Cohen, "Designing the Ideal Bootstrapped Business,"</strong>{" "}
          MicroConf 2013. The 60-minute talk that demonstrates constructing a
          plan backward from target economics on stage, with real arithmetic.{" "}
          <a href="https://www.youtube.com/watch?v=otbnC2zE2rw">
            youtube.com/watch?v=otbnC2zE2rw
          </a>
        </li>
        <li>
          <strong>Sahil Lavingia, "Reflecting on My Failure to Build a
          Billion-Dollar Company,"</strong> 2019. The clearest case study in
          what absent operating discipline looks like from the inside.{" "}
          <a href="https://sahillavingia.com/reflecting">
            sahillavingia.com/reflecting
          </a>
        </li>
        <li>
          <strong>Community:</strong> Indie Hackers (indiehackers.com). The
          best searchable archive of bootstrapped-founder journeys with
          transparent MRR numbers. Build-in-public culture means the operating
          plan described in this reading is a native format there: post the
          plan, share the kill criteria, report the grade each Monday.
        </li>
      </ul>

      <Takeaways>
        <li>
          The Monday cadence is the operating system: grade last week before
          planning this week, using input metrics (controllable) rather than
          output metrics (observable only). The langobee-intel repo is the
          version-controlled record that makes this auditable.
        </li>
        <li>
          The three bets must be run in sequence: retention bar (D1 30%+ on
          two cohorts), first dollar (one trial converted), one repeatable
          channel (three independent repetitions). Running them in parallel on
          solo-founder bandwidth means all three run at half-effort.
        </li>
        <li>
          The Max MRR formula (new MRR divided by cancellation rate) shows the
          ceiling the plan is locked into. Every operating plan must close this
          check before it is credible.
        </li>
        <li>
          Kill criteria are written before the bet is placed, in state-plus-date
          format, with a named fallback. A bet without a kill criterion is an
          open loop, not a decision.
        </li>
        <li>
          The five self-deceptions (vanity count, bot inflation, founder
          dogfooding, spike-as-channel, channel-math avoidance) have all
          appeared in LangoBee's own numbers. Audit the operating plan against
          each one before the capstone session.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Chin, C. (2023). Colin Bryar on the practice of Amazon's Weekly
          Business Review. Commoncog.{" "}
          <a href="https://commoncog.com/colin-bryar-amazon-weekly-business-review/">
            commoncog.com/colin-bryar-amazon-weekly-business-review/
          </a>
          . Source for the two-tier input/output metric architecture and the
          cadence structure.
        </p>
        <p>
          Cohen, J. (2013). Designing the ideal bootstrapped business. MicroConf
          Remote.{" "}
          <a href="https://www.youtube.com/watch?v=otbnC2zE2rw">
            youtube.com/watch?v=otbnC2zE2rw
          </a>
          . Source for the backward-from-target-economics method and channel math.
        </p>
        <p>
          Cohen, J. (2025). Max MRR: Your growth ceiling. A Smart Bear.{" "}
          <a href="https://longform.asmartbear.com/max-mrr/">
            longform.asmartbear.com/max-mrr/
          </a>
          . Source for the Max MRR formula and the leading-indicator argument.
        </p>
        <p>
          Duke, A. (2023). Author talks: What poker pro Annie Duke can teach
          you about quitting on time. McKinsey Author Talks.{" "}
          <a href="https://www.youtube.com/watch?v=4FgMjah6qQI">
            youtube.com/watch?v=4FgMjah6qQI
          </a>
          . Source for the kill-criteria framework and pre-committed exit
          conditions.
        </p>
        <p>
          Lavingia, S. (2019). Reflecting on my failure to build a
          billion-dollar company.{" "}
          <a href="https://sahillavingia.com/reflecting">
            sahillavingia.com/reflecting
          </a>
          . Source for the Gumroad case study of absent operating discipline.
        </p>
        <p>
          Poyar, K. (2026). A new look at free-to-paid conversion: Insights from
          a survey of 200 software products. Growth Unhinged.{" "}
          <a href="https://www.growthunhinged.com/p/free-to-paid-conversion-report">
            growthunhinged.com/p/free-to-paid-conversion-report
          </a>
          . Source for CC-required trial conversion benchmarks used in the channel
          math.
        </p>
        <p>
          Ries, E. (2009). Why vanity metrics are dangerous. Startup Lessons
          Learned.{" "}
          <a href="http://www.startuplessonslearned.com/2009/12/why-vanity-metrics-are-dangerous.html">
            startuplessonslearned.com/2009/12/why-vanity-metrics-are-dangerous.html
          </a>
          . Source for the vanity metric definition applied in the self-deception
          audit.
        </p>
        <p>
          Walling, R. (2015). The stair step method of bootstrapping.{" "}
          <a href="https://robwalling.com/essays/2015/03/26/the-stair-step-method-of-bootstrapping">
            robwalling.com/essays/2015/03/26/the-stair-step-method-of-bootstrapping
          </a>
          . Source for the sequenced-bets argument and the $10K MRR threshold
          as the scale point where paid channels become viable.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk12ReadingSearchBody =
  "10K MRR operating plan weekly cadence Monday report grade last week input metrics output metrics Amazon WBR weekly business review north-star table langobee-intel sequenced bets retention first dollar repeatable channel channel math Max MRR formula kill criteria state-plus-date self-deception audit vanity count bot signup inflation founder dogfooding spike channel math avoidance 12-month view Sahil Lavingia Gumroad Jason Cohen Rob Walling Annie Duke kill criteria operating cadence synthesis week 12";
