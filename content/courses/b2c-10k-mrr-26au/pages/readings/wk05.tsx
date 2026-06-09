import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk05Reading() {
  return (
    <ReadingPage
      id="wk05"
      title="Week 5 — Experimentation + release management"
      kicker="B2C to $10k MRR: A 10-Week Growth Manual · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the mechanics of running experiments you can
          trust and shipping changes you can reverse. By the end you will be
          able to compute whether you have enough traffic to run a valid A/B
          test, explain why reading results early inflates your false-positive
          rate, install a feature flag for a phased rollout, and write a
          kill-switch runbook you can execute in under five minutes. You will
          also complete the mid-course pivot/persevere check on Friday as a
          60-minute written exercise.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Concepts from weeks 1-4:
          the <strong>AAARRR funnel</strong>, your product&rsquo;s{" "}
          <strong>activation event</strong> and{" "}
          <strong>activation rate</strong>, and how your{" "}
          <strong>hard paywall</strong> or <strong>soft paywall</strong> is
          currently configured. You do not need any prior knowledge of
          statistics beyond what is introduced in this reading.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-week-at-a-glance">1. Your week at a glance</AnchorHeading>
      <p>
        Week 5 sits at the boundary between building and scaling. You have
        been shipping for a month. You have some activation data, some
        retention signal, and at least a hypothesis about what is holding
        your numbers back. This week you build the infrastructure to test
        those hypotheses without fooling yourself, and you do the first
        honest reckoning with whether the overall direction is right.
      </p>
      <p>The three Bloom outcomes for this week:</p>
      <ul>
        <li><strong>Apply:</strong> configure feature flags and a phased rollout for one feature in production.</li>
        <li><strong>Analyze:</strong> decide whether you have enough traffic to A/B test, with sample-size math shown.</li>
        <li><strong>Create:</strong> write a 1-page kill-switch and rollback runbook tested in a live drill.</li>
      </ul>
      <p>The five metrics you will track this week:</p>
      <ul>
        <li>Deploys this week (target: at least 3 green deploys)</li>
        <li>Time-to-rollback in your drill (target: under 5 minutes)</li>
        <li>Sample size needed for your current test (computed, shown on paper)</li>
        <li>MRR delta (same as every week)</li>
        <li>Public outputs shipped (every weekday, one each)</li>
      </ul>
      <p>Milestones due by end of week:</p>
      <ul>
        <li>Feature-flag system installed (PostHog, Statsig, or hand-rolled).</li>
        <li>One real A/B test running OR a written &ldquo;why I&rsquo;m not testing this&rdquo; memo.</li>
        <li>CI/CD pipeline that auto-deploys on green main.</li>
        <li>Rollback runbook: 1-page doc, 5 minutes from decision to reverted prod.</li>
        <li>Mid-course check-in completed (keep / pivot product / pivot channel / pivot price).</li>
      </ul>

      <AnchorHeading as="h2" id="2-day-by-day">2. Your week, day by day</AnchorHeading>
      <p>
        Each day has four slots. The build block does not open until the
        morning growth move and customer hour are done.
      </p>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Morning growth (30 min)</th>
              <th>Customer hour (60 min)</th>
              <th>Build block (3.5 hr)</th>
              <th>Measure + reflect (15 min)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Mon</strong></td>
              <td>Public post: &ldquo;here&rsquo;s the experiment I&rsquo;m running this week and what I expect.&rdquo;</td>
              <td>Audit last 5 releases: which ones moved metrics, which were noise?</td>
              <td>Install PostHog feature flags (or Statsig).</td>
              <td>Do you have enough traffic to A/B test?</td>
            </tr>
            <tr>
              <td><strong>Tue</strong></td>
              <td>Build-in-public on your release pipeline; ask for advice.</td>
              <td>Talk to 1 user who was affected by your last release.</td>
              <td>CI/CD: auto-deploy on green main.</td>
              <td>How long is your deploy cycle now?</td>
            </tr>
            <tr>
              <td><strong>Wed</strong></td>
              <td>Post a &ldquo;painted door&rdquo; you&rsquo;ll run instead of an A/B test, if you don&rsquo;t have traffic.</td>
              <td>Read 10 power-user tickets for hidden feature requests.</td>
              <td>Ship the experiment (A/B or painted door).</td>
              <td>Sample size if A/B: when will you call it?</td>
            </tr>
            <tr>
              <td><strong>Thu</strong></td>
              <td>Public &ldquo;rollback drill&rdquo; post; show your runbook.</td>
              <td>Watch how a user reacts to the new variant via session replay.</td>
              <td>Practice a rollback. Time it. Document.</td>
              <td>Was 5 minutes realistic?</td>
            </tr>
            <tr>
              <td><strong>Fri</strong></td>
              <td>Mid-course pivot/persevere check: 60 min written exercise. Post the conclusion.</td>
              <td>Skip. Spend it on the pivot exercise.</td>
              <td>No new features. Clean up experiment infrastructure.</td>
              <td>Keep / pivot product / pivot channel / pivot price?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AnchorHeading as="h2" id="3-plan-card">3. This week&rsquo;s plan card</AnchorHeading>
      <Callout title="Fill this in on Sunday or Monday AM (15 min)">
        <p><strong>Last week&rsquo;s three milestones:</strong> scored shipped / partial / not. One sentence on what compounded and one on what to drop.</p>
        <p><strong>This week&rsquo;s three milestones:</strong></p>
        <ol>
          <li>___</li>
          <li>___</li>
          <li>___</li>
        </ol>
        <p><strong>Repeating growth move this week:</strong> one verb + one noun (e.g. &ldquo;post experiment hypothesis&rdquo;).</p>
        <p><strong>The friction that will derail me:</strong> name it now so you can plan around it.</p>
        <p><strong>Friday pivot check:</strong> keep / pivot product / pivot channel / pivot price. Write the answer before you open your build block.</p>
      </Callout>

      <AnchorHeading as="h2" id="4-daily-rules">4. Daily rules</AnchorHeading>
      <ul>
        <li>The build block does not open until the morning growth move and customer hour are done. No exceptions.</li>
        <li>Build-block scope is one sentence. If you can&rsquo;t write it in one sentence, the scope is too big. Split it.</li>
        <li>No new features that are not on this week&rsquo;s milestone list. Period.</li>
        <li>Friday review is non-negotiable. Skipping it means the week didn&rsquo;t count.</li>
        <li>If the growth move feels uncomfortable, that&rsquo;s evidence it&rsquo;s the right one.</li>
      </ul>

      <AnchorHeading as="h2" id="5-ab-test">5. What an A/B test actually controls for</AnchorHeading>
      <p>
        An <strong>A/B test</strong> is a randomized controlled experiment. You
        randomly assign users to a control group (what they see today) or a
        variant group (the change you want to evaluate), then measure one primary
        metric for both groups simultaneously. The random assignment is what
        makes the result causal rather than merely correlational.
      </p>
      <p>
        Without random assignment, any difference you observe could be explained
        by selection effects: the users who happened to see the new version might
        be newer users, users on certain devices, or users who signed up during
        a different marketing campaign. With random assignment, those confounds
        are balanced across groups by design. Kohavi, Tang &amp; Xu write: &ldquo;Controlled
        experiments are the gold standard for establishing causal relationships
        and for testing product changes at scale.&rdquo;
      </p>
      <p>
        Three requirements for a valid A/B test: random assignment (enforced by
        a feature flag or experiment platform), one change at a time, and one
        pre-declared primary metric. Changing two things simultaneously means
        you cannot tell which change caused the outcome. Measuring ten metrics
        and reporting the one that happened to show significance is p-hacking,
        which the next section covers.
      </p>
      <p>
        The PostHog engineering guide describes the five-component framework:
        clear measurable goals, a well-formed hypothesis, minimal changes,
        adequate sample sizes, and sufficient duration. The duration component
        is often the one that kills solo-founder experiments: tests run for
        three days on a product with low traffic are almost always invalid.
      </p>

      <AnchorHeading as="h2" id="6-sample-size">6. Sample-size math: the formula you can do on paper</AnchorHeading>
      <p>
        The <strong>sample size</strong> for a binary metric (conversion rate,
        activation rate, click-through rate) at 80% statistical power and a 5%
        false-positive rate follows a standard approximation:
      </p>
      <pre>{`n per variant = 16 × variance / MDE²

where:
  variance = baseline × (1 - baseline)
  MDE      = minimum detectable effect (absolute pp change)
  n        = users needed in each arm of the test`}</pre>
      <p>
        The factor of 16 encodes the 80/5 power/alpha combination. If you want
        90% power (a higher bar), use 21 instead of 16. If you are comfortable
        with a 10% false-positive rate (lower bar), use 10.5. For most product
        experiments, 16 is the right number.
      </p>
      <p>
        A worked example: your activation rate is 18% and you want to detect an
        improvement of 3 percentage points (you would act on anything that moves
        the metric by at least 3pp). Then:
      </p>
      <pre>{`variance = 0.18 × (1 - 0.18) = 0.18 × 0.82 = 0.1476
MDE²    = (0.03)² = 0.0009
n       = 16 × 0.1476 / 0.0009 = 2.3616 / 0.0009 = 2,624 per variant
total   = 2 × 2,624 = 5,248 users`}</pre>
      <p>
        If your product gets 600 unique users per week who could enter the test,
        you need 5,248 / 600 = 8.7 weeks. That is too long. Tests longer than
        four weeks are unreliable because user behavior, seasonality, and product
        state all drift. The honest answer: you cannot run a valid A/B test on
        this change with your current traffic.
      </p>
      <p>
        The PostHog guide confirms this directly: it lists &ldquo;insufficient traffic&rdquo;
        as the first reason not to A/B test. Vanagas (PostHog, 2023) adds that even
        Bing, with enormous traffic, sees only a 10-20% success rate on experiments.
        Most experiments at scale fail to show a significant improvement. At early
        stage, the realistic expectation is that you are learning, not optimizing.
      </p>

      <AnchorHeading as="h2" id="7-painted-door">7. The painted-door test</AnchorHeading>
      <p>
        When you do not have enough traffic for a valid A/B test, the{" "}
        <strong>painted-door test</strong> is the practical alternative. The
        mechanic: place a button, link, or feature in your product that does
        not yet exist. Measure how many users click it. After the click, show
        a &ldquo;coming soon&rdquo; message or a waitlist form. The click rate is
        a proxy for demand.
      </p>
      <p>
        Ries (2011) introduced this under the label &ldquo;concierge MVP&rdquo; and
        related techniques, but the painted-door framing is more precise: you
        are not delivering the value manually, you are measuring whether users
        would seek it out. The PostHog guide lists it under &ldquo;alternatives to
        A/B testing for low-traffic products.&rdquo;
      </p>
      <p>
        Three rules for an honest painted-door test. First, always close the
        loop: after the click, tell users what they clicked on and what happens
        next. An unexplained dead end is a bad user experience, not an
        experiment. Second, ask one question after the click: &ldquo;what would you
        use this for?&rdquo; The qualitative data often outweighs the click rate.
        Third, treat click rate as directional, not causal. A 15% click rate
        on a hypothetical &ldquo;team collaboration&rdquo; feature tells you that some
        users want this; it does not tell you that shipping it will increase
        retention by 15%.
      </p>
      <p>
        A useful threshold from practice: if fewer than 8-10% of exposed users
        click a painted-door feature, the demand signal is weak. If more than
        25% click, the signal is strong enough to move the feature up the
        backlog. Between those numbers, qualitative follow-up is the next step.
      </p>

      <AnchorHeading as="h2" id="8-p-hacking">8. P-hacking and why it matters for solo founders</AnchorHeading>
      <p>
        <strong>P-hacking</strong> is the practice of running analyses until
        you find a statistically significant result, then reporting only that
        result. It is not usually intentional fraud. It is usually the product
        of checking results too early (the peeking problem), switching the
        primary metric after seeing the data, or running many variants and only
        publishing the winner.
      </p>
      <p>
        The peeking problem works like this: the standard p &lt; 0.05 threshold
        assumes you run the test to completion and look at the result once. If
        you check results every day and stop whenever p drops below 0.05, your
        actual false-positive rate is much higher than 5%, because you are
        effectively running a new hypothesis test with each peek. Vanagas
        (PostHog, 2023) notes that Airbnb discovered this problem at scale and
        had to retrofit sequential testing into their platform. The peeking
        problem matters at any scale.
      </p>
      <p>
        The fix: pre-register before you start. Write down the primary metric,
        the MDE, the planned run duration, and the decision rule before you
        touch any code. &ldquo;I will call variant the winner if p &lt; 0.05 AND the
        observed effect is at least MDE in absolute terms, at the end of
        [specific date].&rdquo; Then set a calendar reminder for that date and
        do not look at variant-level breakdowns before it arrives.
      </p>
      <p>
        Sequential testing is the rigorous alternative if you need the option
        to stop early. Both Statsig and PostHog support sequential tests that
        adjust the significance threshold continuously so that peeking is
        valid. For a solo founder running one or two experiments at a time,
        the simpler path is pre-registration and patience.
      </p>

      <AnchorHeading as="h2" id="9-feature-flags">9. Feature flags: the infrastructure that makes everything else possible</AnchorHeading>
      <p>
        A <strong>feature flag</strong> is a conditional in your code whose
        value is controlled by an external config rather than a code deploy.
        The control path looks like this: your code checks a flag key against
        a flag service; the flag service returns true or false for that user;
        your code branches accordingly. Changing the flag percentage from 0 to
        10 to 100 happens in a dashboard or API call, not in a deploy.
      </p>
      <p>
        PostHog&rsquo;s phased-rollout documentation describes three steps for setup:
        create the flag with a name and key, set the rollout condition (percentage
        of users, or a user property filter), implement the SDK call in your code,
        then adjust the percentage as you gain confidence. The rollback procedure
        is the same step in reverse: set the percentage to 0. No revert commit,
        no emergency deploy.
      </p>
      <p>
        Statsig distinguishes three patterns for feature flags. The kill switch
        is a flag held at 100% that you can instantly drop to 0% when something
        breaks. The phased rollout is a flag you advance from 1% to 10% to 100%
        over days. The A/B test is a flag that randomly assigns users to control
        or variant, with result tracking. All three are the same database row
        with different configurations.
      </p>
      <p>
        Statsig (2026) warns about toggle sprawl: if you accumulate feature flags
        and never clean them up, your codebase becomes unreadable and your flag
        service becomes a maintenance burden. The rule: once a flag reaches 100%
        for 30 days without incident, hardcode the winning path and delete the
        flag. Once a flag is pulled back to 0% permanently, delete it. A healthy
        codebase has flags that are temporary scaffolding, not permanent
        infrastructure.
      </p>

      <AnchorHeading as="h2" id="10-phased-rollout">10. Phased rollouts: 1% to 10% to 100%</AnchorHeading>
      <p>
        A <strong>phased rollout</strong> is a controlled increase in the
        percentage of users who see a new feature, with explicit gates between
        each phase. The goal is to catch problems at small scale before they
        become large-scale incidents.
      </p>
      <p>
        PostHog recommends starting at 5-10% of users and monitoring error rates
        and key metrics before advancing. For a solo founder with a smaller user
        base, the percentages can be adjusted: 1% might mean 5 users, which is
        too small to see statistical signal but enough to catch crash loops and
        broken flows. The phases that matter in practice:
      </p>
      <ul>
        <li>
          <strong>1% (or internal users):</strong> you and your beta testers.
          Watch for crashes, broken flows, obvious UI problems. Run for 24 hours.
        </li>
        <li>
          <strong>10%:</strong> a random slice of your real user base. Watch
          activation rate, error rate, and session replays for confusion. Run
          for 24-48 hours.
        </li>
        <li>
          <strong>100%:</strong> only after the 10% gate is clean. At this point,
          the flag becomes a kill switch: keep it in place for 30 days before
          hardcoding the path.
        </li>
      </ul>
      <p>
        Write the rollback criteria before you set the 1% rollout, not after
        something breaks. &ldquo;I will revert if error rate on the affected flow
        rises above 2%, or if activation rate for users in the variant drops
        more than 3 percentage points below baseline.&rdquo; Written criteria mean
        you decide when you are calm. They also mean you know when you are safe
        to advance: if the criteria are not triggered, you move forward.
      </p>

      <AnchorHeading as="h2" id="11-kill-switch">11. Kill switches and the rollback runbook</AnchorHeading>
      <p>
        A <strong>kill switch</strong> is a feature flag held at 100% during
        normal operation. If a production problem appears, you set it to 0%
        and the feature disappears for all users immediately, without a
        revert commit or a redeployment. Statsig (2026) notes that the key
        property of a kill switch is that it acts faster than a deploy cycle.
        If your deploy pipeline takes 8 minutes, a kill switch can revert in
        under 60 seconds.
      </p>
      <p>
        The kill switch only works if you have a runbook: a written document
        that tells you exactly what to do when something breaks. A minimal
        runbook answers four questions:
      </p>
      <ol>
        <li>
          <strong>Decision threshold:</strong> what metric or signal tells you
          to revert? (Error rate above X%, a spike in support messages, your
          own observation during a deploy-day monitoring window.)
        </li>
        <li>
          <strong>Action:</strong> the exact step to revert. For a feature
          flag: open dashboard, find flag, set to 0%, click save. Write the
          URL of the dashboard. Write the flag key. No ambiguity.
        </li>
        <li>
          <strong>Confirmation:</strong> how do you know the rollback worked?
          Check one metric in your analytics dashboard or one health endpoint
          that should return to baseline within 5 minutes.
        </li>
        <li>
          <strong>Communication:</strong> what do you post to users if they
          were affected? One sentence on your status page or in your app.
          Silence during an incident is worse than a brief honest update.
        </li>
      </ol>
      <p>
        The Shape Up methodology (Singer, 2019) grounds the philosophy here:
        &ldquo;done means deployed.&rdquo; A feature that ships without a kill switch and
        runbook is not done. It is done-ish, and done-ish features create
        done-ish incidents.
      </p>

      <AnchorHeading as="h2" id="12-ci-cd">12. CI/CD for one person</AnchorHeading>
      <p>
        <strong>CI/CD for one</strong> means your main branch deploys
        automatically when all checks pass. No manual deploy steps. No
        &ldquo;I need to remember to push to production.&rdquo; The minimal setup
        for a web product on Vercel or Fly: a GitHub Actions workflow that
        runs lint, build, and tests on every push to main, then triggers
        the deployment if all three pass.
      </p>
      <p>
        Singer&rsquo;s Shape Up describes the discipline behind this: integrate one
        slice at a time, and &ldquo;done means deployed&rdquo; is the only definition of
        shipped. A feature that passes tests locally but lives in a branch for
        three weeks is not shipped. The CI/CD pipeline enforces this by making
        the path from code to production frictionless for correct code and
        impossible for broken code.
      </p>
      <p>
        Statsig (2026) and PostHog (2024) both treat CI/CD as the foundation
        that makes feature flags valuable: flags only help if you can deploy
        quickly enough to use them. A deploy cycle of 8-15 minutes is normal
        for a modern web stack on Vercel or Railway. A deploy cycle of 2 hours
        defeats the purpose of a kill switch.
      </p>
      <p>
        For mobile (iOS/Android), the equivalent of green-main auto-deploy is
        a build that automatically uploads to TestFlight or the Play internal
        testing track on every merge to main. The App Store and Play Store
        review times mean you cannot use them as kill switches, which is why
        feature flags inside the app are more important for mobile than for web.
      </p>

      <AnchorHeading as="h2" id="13-case-study">13. Case study: the painted door that shipped a product feature</AnchorHeading>
      <p>
        PostHog&rsquo;s onboarding drop-off guide (Amorim, 2025) describes a
        nine-step process for diagnosing and fixing onboarding problems.
        Step eight is &ldquo;roll out with feature flags.&rdquo; The case that motivates
        the whole sequence: a product team noticed a 40% drop-off rate at a
        specific onboarding step. Before rebuilding the step, they ran a
        painted-door test: they added a button labeled &ldquo;see an example&rdquo; to
        the step that dropped users.
      </p>
      <p>
        32% of users clicked it. The button linked to a blank screen with
        &ldquo;example coming soon.&rdquo; The team now knew two things: the drop-off
        was not because users rejected the product concept, it was because
        they did not know what to do next. And they had a signal strong enough
        to justify building the example. They shipped the real feature behind
        a feature flag at 10%, watched the drop-off rate fall from 40% to
        18%, and rolled to 100%.
      </p>
      <p>
        The lessons from this case study apply directly to your product. First,
        a painted-door test answers a different question than an A/B test: it
        measures demand, not causal effect. Second, the flag let them validate
        the fix at 10% before committing to 100%. Third, the primary metric
        (onboarding drop-off rate) was defined in advance. They did not change
        the metric after seeing partial results.
      </p>
      <p>
        The metric that motivated the test, onboarding drop-off, connects
        directly to your <strong>activation rate</strong> from week 2. If your
        activation funnel has a step with a drop-off rate above 30-35%, it is
        a candidate for exactly this sequence: observe, hypothesize, painted-door
        to validate demand, flag the fix, measure.
      </p>

      <AnchorHeading as="h2" id="14-pivot-check">14. Friday: the mid-course pivot/persevere check (60 min)</AnchorHeading>
      <p>
        At the halfway point of the course you do a written reckoning. Not a
        retrospective on the course itself, but a strategic review of whether
        you are building the right thing, in the right way, on the right
        channel. The output is one of four decisions: keep, pivot product,
        pivot channel, pivot price.
      </p>
      <p>
        This is drawn from Ries&rsquo;s pivot-or-persevere framing in{" "}
        <em>The Lean Startup</em> (2011), updated here for the specific
        vocabulary of this course: you are not just deciding whether to
        pivot the product, you are deciding whether the funnel leak is in
        the product, the channel, or the price. A course correction that
        changes the wrong variable is still a failed correction.
      </p>
      <p>
        Block 60 minutes on Friday. Find a quiet place. Write answers to the
        following seven prompts. Write long-form prose, not bullet lists.
        The discipline of writing in complete sentences forces you to notice
        where your logic breaks down. After you finish writing, post your
        conclusion (keep / pivot X) publicly as your morning growth output.
      </p>
      <p><strong>The seven prompts:</strong></p>
      <ol>
        <li>
          <strong>What is your MRR right now, and what was it at the start of week 1?</strong>
          {" "}Write the two numbers. Compute the growth rate. If MRR is $0, write
          the count of users who have completed the activation event. Is the
          number moving in the direction you expected at this point in the
          10 weeks? Why or why not?
        </li>
        <li>
          <strong>What evidence do you have that you are building the right thing?</strong>
          {" "}List only evidence, not wishes. Evidence means: paying customers
          who renewed, activation events completed by users who did not know
          you personally, unsolicited positive messages, or retention curves
          that flatten above zero. If you have none of these, write that.
          &ldquo;I believe in the product&rdquo; is not evidence.
        </li>
        <li>
          <strong>What is the single biggest friction point in your funnel right now?</strong>
          {" "}Name the specific step in the AAARRR funnel where users fall out
          at the highest rate. Use numbers: not &ldquo;people don&rsquo;t activate,&rdquo;
          but &ldquo;activation rate is 12% and the drop-off happens between step 2
          and step 3 of onboarding.&rdquo; If you do not know which step, write
          down how you will find out this week.
        </li>
        <li>
          <strong>If you were to pivot the product, what would you change?</strong>
          {" "}Describe the alternative product hypothesis in one paragraph.
          It does not have to be the answer you choose. Write it as concretely
          as you can: what the product does differently, for whom, and which
          metric you expect to improve. If you genuinely cannot imagine a
          better product direction, write that clearly and explain why the
          current direction is correct despite the friction you named in
          prompt 3.
        </li>
        <li>
          <strong>If you were to pivot the channel, what would you change?</strong>
          {" "}Which acquisition channel have you been using primarily for the
          first five weeks? What evidence do you have that it is working or
          not working (cost per activated user, volume, quality of users)? Name
          one alternative channel you have not yet tried seriously. What would
          it take to test that channel properly in weeks 6-10?
        </li>
        <li>
          <strong>If you were to pivot the price, what would you change?</strong>
          {" "}Is your paywall a hard paywall or a soft paywall? What is your
          current price point? What is the evidence that users are willing
          to pay it (conversion rate from trial to paid, churn rate after
          first payment)? Would raising or lowering the price, or switching
          from hard to soft paywall, address the friction you named in
          prompt 3?
        </li>
        <li>
          <strong>What would force you to quit entirely?</strong>
          {" "}Write the threshold. Not &ldquo;if things don&rsquo;t work out&rdquo; but a
          specific condition: &ldquo;if MRR is below $X at the end of week 8,&rdquo;
          or &ldquo;if I still have zero paying customers after week 7,&rdquo; or
          &ldquo;if my activation rate does not reach Y% by the end of week 6.&rdquo;
          Writing the quit threshold now, while you are not in crisis, means
          you decide from a position of clarity rather than exhaustion.
          The threshold is not a prediction. It is a commitment to honest
          evaluation.
        </li>
      </ol>
      <p>
        After you finish all seven, read them back. Then make one decision:
        keep, pivot product, pivot channel, or pivot price. Write it as a
        single sentence. Post it publicly (Twitter/X, Indie Hackers, LinkedIn,
        wherever your build-in-public output lives). The public post is not
        optional: accountability to an audience, even a small one, makes
        the commitment real.
      </p>
      <p>
        This check-in connects to the next course milestone at week 8 (the
        capstone scaffold). The decision you make on Friday of week 5 should
        aim weeks 6-8 at the right target. If you decide to keep, weeks 6-10
        are optimization within the current frame. If you decide to pivot,
        you have five weeks to execute the pivot and show results. The worst
        outcome is neither: staying in the current frame while secretly
        believing it is wrong.
      </p>

      <AnchorHeading as="h2" id="15-exercises">15. Exercises</AnchorHeading>
      <p>These are answerable from the reading and your own product data.</p>

      <Exercise n={1}>
        <p>
          Your product&rsquo;s checkout conversion rate is 6% (6 out of every 100
          users who reach the paywall complete a purchase). You want to detect
          a 2 percentage-point improvement. Using the heuristic{" "}
          <code>n = 16 × (p × (1 - p)) / MDE²</code>, compute n per variant
          and total n. Your product gets 350 unique users per week to the
          paywall page. How many weeks does this test need to run? Is it
          feasible?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          You want to test whether changing your onboarding from a 5-step
          wizard to a 2-step wizard increases activation rate. Explain in
          your own words why you should define the primary metric, the MDE,
          and the end date before touching any code. What goes wrong if you
          check results after 4 days and stop because the variant looks better?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          You do not have enough traffic to run a valid A/B test on your
          pricing page. Design a painted-door test. Describe: what users
          will see, what happens when they click, what metric you will use
          to evaluate the test, and what click rate would be strong enough
          to justify building the full feature.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Write a 1-page rollback runbook for the feature you are shipping
          this week (or, if you are not shipping anything new, for the most
          recent feature you shipped). Answer the four questions: decision
          threshold, action, confirmation, communication. Set a 5-minute
          timer and try to execute it end-to-end in your staging or
          production environment. Did it work? What would you change?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Work through all seven prompts of the mid-course pivot/persevere
          check before Friday. On Friday, read your drafts and make the
          keep-or-pivot decision. Post the conclusion publicly. Paste the
          URL of your public post here.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="16-going-deeper">16. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet (this week).</strong> The section asks you
          to compute sample sizes for your own product and either ship an A/B
          test or write the &ldquo;why I&rsquo;m not testing this&rdquo; memo. Bring the
          arithmetic on paper.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> A/B testing rigor: the
          peeking problem, sequential testing, and what to test in weeks 1-10.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Release management: CI/CD
          for one person, feature flags, phased rollouts, kill switches, and
          a walkthrough of the rollback drill.
        </li>
        <li>
          <strong>Week 6 reading.</strong> Channel selection. The Friday
          pivot check this week feeds directly into the channel decision you
          lock in week 6.
        </li>
      </ul>

      <Takeaways>
        <li>
          A valid A/B test requires random assignment, one change at a time,
          and a pre-registered primary metric. Without these, you have an
          observation, not a controlled experiment.
        </li>
        <li>
          Compute <code>n = 16 × variance / MDE²</code> before setting up any
          test. If the required run time exceeds four weeks given your traffic,
          use a painted-door test or qualitative research instead.
        </li>
        <li>
          Peeking at A/B test results before the pre-registered end date inflates
          your false-positive rate well above 5%. Write the decision rule before
          you start and look only at the end.
        </li>
        <li>
          Feature flags, phased rollouts, and kill switches are the same
          mechanism at different percentages. A kill switch is a flag at 0%.
          A rollback runbook makes the kill switch useful under pressure.
        </li>
        <li>
          The mid-course pivot/persevere check is not optional. Writing the seven
          prompts in full sentences, then posting your decision publicly, is how
          you commit to the correct direction for the second half of the course.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Amorim, Natalia. &ldquo;App onboarding: How to fix drop-off points.&rdquo;
          PostHog blog, 2025.{" "}
          <a href="https://posthog.com/blog/how-to-find-and-fix-app-onboarding-drop-off">
            posthog.com/blog/how-to-find-and-fix-app-onboarding-drop-off
          </a>
          . Nine-step recipe for diagnosing onboarding drop-offs using funnels,
          session replays, and feature flags.
        </p>
        <p>
          Kohavi, Ron, Diane Tang, and Ya Xu. <em>Trustworthy Online Controlled
          Experiments: A Practical Guide to A/B Testing.</em> Cambridge University
          Press, 2020.{" "}
          <a href="https://www.cambridge.org/core/books/trustworthy-online-controlled-experiments/D97B26382EB0EB2DC2019A7A7B518F59">
            cambridge.org/core/books/trustworthy-online-controlled-experiments
          </a>
          . The authoritative practitioner reference for online experiments;
          covers sample sizing, peeking, p-hacking, and sequential testing.
        </p>
        <p>
          Neu-ner, Lior. &ldquo;A software engineer&rsquo;s guide to A/B testing.&rdquo;
          PostHog product engineering blog, 2023.{" "}
          <a href="https://posthog.com/product-engineers/ab-testing-guide-for-engineers">
            posthog.com/product-engineers/ab-testing-guide-for-engineers
          </a>
          . Five-component framework for valid A/B tests; covers feature flag
          implementation and when not to test.
        </p>
        <p>
          PostHog team. &ldquo;How to do a phased rollout.&rdquo; PostHog docs, 2024.{" "}
          <a href="https://posthog.com/docs/feature-flags/phased-rollout">
            posthog.com/docs/feature-flags/phased-rollout
          </a>
          . Step-by-step guide to creating flags, setting percentage conditions,
          and rolling back by setting percentage to 0.
        </p>
        <p>
          Ries, Eric. <em>The Lean Startup.</em> Crown Business, 2011.{" "}
          <a href="https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898">
            amazon.com (ISBN 0307887898)
          </a>
          . Foundational text for build-measure-learn feedback loops, validated
          learning, and the pivot-or-persevere decision. Optional deeper reading.
        </p>
        <p>
          Ries, Eric. &ldquo;Vanity Metrics vs. Actionable Metrics.&rdquo; Tim Ferriss
          blog, 2009.{" "}
          <a href="https://tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/">
            tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/
          </a>
          . Original source for the three-A test: actionable, accessible, auditable;
          introduces split-tests as the mechanism for actionable measurement.
        </p>
        <p>
          Singer, Ryan. <em>Shape Up: Stop Running in Circles and Ship Work that
          Matters.</em> Basecamp, 2019.{" "}
          <a href="https://basecamp.com/shapeup">basecamp.com/shapeup</a>
          . Six-week cycles with fixed time and flexible scope; &ldquo;done means
          deployed&rdquo; as the discipline behind CI/CD and kill-switch thinking.
        </p>
        <p>
          Statsig team. &ldquo;Kill Switches and Rollouts: When Feature Flags Are
          Overkill.&rdquo; Statsig Perspectives, 2026.{" "}
          <a href="https://www.statsig.com/perspectives/kill-switches-rollouts-feature-flags-overkill-techniques">
            statsig.com/perspectives/kill-switches-rollouts-feature-flags-overkill-techniques
          </a>
          . Distinguishes kill switches, phased rollouts, and A/B tests; covers
          toggle sprawl and when to hardcode the winning path.
        </p>
        <p>
          Vanagas, Ian. &ldquo;10 things we&rsquo;ve learned about A/B testing for
          startups.&rdquo; PostHog newsletter, 2023.{" "}
          <a href="https://posthog.com/newsletter/what-we've-learned-about-ab-testing">
            posthog.com/newsletter/what-we&rsquo;ve-learned-about-ab-testing
          </a>
          . The peeking problem at Airbnb, proposal systems, sequential testing,
          and why most experiments fail.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk05ReadingSearchBody =
  "A/B test sample size MDE minimum detectable effect variance peeking problem p-hacking sequential testing feature flag phased rollout kill switch rollback runbook CI/CD continuous deployment painted door test pivot persevere mid-course check activation rate AAARRR funnel hard paywall soft paywall week 5 reading B2C growth MRR experimentation release management";
