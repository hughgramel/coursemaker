import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk01Reading() {
  return (
    <ReadingPage
      id="wk01-b2c-funnel"
      title="Week 1: The B2C funnel and what &lsquo;real&rsquo; numbers look like"
      kicker="B2C to $10k MRR · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the full AAARRR funnel, how to define your
          activation event, what MRR actually measures (and what it hides),
          and why cohort analysis is the only honest way to read retention data.
          By the end you will be able to write down your current MRR, name
          your activation event in one sentence, and point to the leakiest
          stage in your funnel.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> This is week 1; no prior
          concepts from this course are assumed. You should have a shipped
          product with at least some signups. If your MRR is $0 today, that
          is fine and expected.
        </p>
      </ReadingFraming>

      {/* ---- YOUR WEEK AT A GLANCE ---- */}
      <AnchorHeading as="h2" id="week-at-a-glance">Your week at a glance</AnchorHeading>

      <AnchorHeading as="h3" id="learning-goals">Learning goals</AnchorHeading>
      <ul>
        <li>Explain the AAARRR funnel and name which stage your product is leakiest at.</li>
        <li>Define the activation event for your specific product in one sentence.</li>
        <li>Distinguish vanity from actionable metrics on your own dashboard.</li>
        <li>State your current MRR, even if it&rsquo;s $0, and the date you measured it.</li>
      </ul>

      <AnchorHeading as="h3" id="milestones">Milestones</AnchorHeading>
      <ul>
        <li>PostHog (or equivalent) installed and verified with a test event in production.</li>
        <li>One <code>activation</code> event firing in production code.</li>
        <li>A single-screen dashboard: acquisition &rarr; install &rarr; activation &rarr; paid.</li>
        <li>First MRR number written in your founder journal.</li>
      </ul>

      <AnchorHeading as="h3" id="outcomes">Bloom-tagged outcomes</AnchorHeading>
      <ul>
        <li><strong>Apply:</strong> Instrument the AAARRR funnel on your product with a single-screen dashboard.</li>
        <li><strong>Analyze:</strong> Distinguish vanity from actionable metrics on your own product&rsquo;s dashboard.</li>
        <li><strong>Evaluate:</strong> Judge whether your current MRR snapshot reflects revenue you can repeat.</li>
      </ul>

      <AnchorHeading as="h3" id="metrics">Metrics to track this week</AnchorHeading>
      <ul>
        <li>Daily signups</li>
        <li>Daily activation rate</li>
        <li>MRR (Friday snapshot)</li>
        <li>Public outputs shipped this week</li>
      </ul>

      {/* ---- YOUR WEEK DAY BY DAY ---- */}
      <AnchorHeading as="h2" id="week-day-by-day">Your week, day by day</AnchorHeading>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9em" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Day</th>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Morning growth move (30 min)</th>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Customer hour (60 min)</th>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Build block (3.5 hr)</th>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Measure + reflect (15 min)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", fontWeight: 600 }}>Mon</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Write 3 sentences defining your product&rsquo;s activation event; post publicly.</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Pull up 3 recent signups, read every event they triggered.</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Install PostHog (or equivalent).</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Yesterday&rsquo;s MRR + today&rsquo;s signups.</td>
            </tr>
            <tr>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", fontWeight: 600 }}>Tue</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Build-in-public post about your funnel hypothesis.</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>DM the 3 newest paying users one question each.</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Define + emit your activation event in code.</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Did the morning post get any signal? What would you change?</td>
            </tr>
            <tr>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", fontWeight: 600 }}>Wed</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>1-paragraph teardown of a competitor&rsquo;s funnel from a fresh browser.</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Live-watch one user via session replay end-to-end.</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Ship the dashboard: acquisition &rarr; install &rarr; activation chart.</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Gap between guessed and actual activation rate.</td>
            </tr>
            <tr>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", fontWeight: 600 }}>Thu</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Cold-DM 5 people in your audience asking for a 10-min call.</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>One interview, or read 10 support tickets and tag themes.</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Add MRR query to the dashboard.</td>
              <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>Did instrumenting change what you&rsquo;d build tomorrow?</td>
            </tr>
            <tr>
              <td style={{ padding: "6px 10px", fontWeight: 600 }}>Fri</td>
              <td style={{ padding: "6px 10px" }}>Public &ldquo;what I learned this week&rdquo; thread/post.</td>
              <td style={{ padding: "6px 10px" }}>List every user who churned in the past 30 days; count them.</td>
              <td style={{ padding: "6px 10px" }}>No new features. Fix one bug discovered while watching users.</td>
              <td style={{ padding: "6px 10px" }}>Did this week&rsquo;s build sprawl or stay constrained?</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ---- PLAN CARD ---- */}
      <AnchorHeading as="h2" id="plan-card">This week&rsquo;s plan card</AnchorHeading>

      <Callout title="Weekly plan (fill in before Monday AM)">
        <p><strong>Milestone 1:</strong> _______________________________________________</p>
        <p><strong>Milestone 2:</strong> _______________________________________________</p>
        <p><strong>Milestone 3:</strong> _______________________________________________</p>
        <p><strong>Repeating growth move (daily):</strong> ____________________________</p>
        <p><strong>Friction to watch:</strong> ________________________________________</p>
      </Callout>

      {/* ---- DAILY RULES ---- */}
      <AnchorHeading as="h2" id="daily-rules">Daily rules</AnchorHeading>

      <Callout variant="warn" title="Anti-trap rules (non-negotiable)">
        <ul>
          <li>The build block does not open until the morning growth move + customer hour are done. No exceptions.</li>
          <li>If the week&rsquo;s growth move feels uncomfortable, that&rsquo;s evidence it&rsquo;s the right one.</li>
          <li>Friday review is non-negotiable. Skipping it means the week didn&rsquo;t count.</li>
          <li>Build-block scope is one sentence. If you can&rsquo;t write it in one sentence, the scope is too big: split it.</li>
          <li>No new features that aren&rsquo;t on this week&rsquo;s milestone list. Period.</li>
          <li><strong>Public-output rule:</strong> Every weekday you ship one piece of public output (tweet, LinkedIn post, Reddit comment, IH update, Discord post, TikTok, YT short, blog draft). Anything in front of an audience that isn&rsquo;t you. Target: 50+ weekday outputs by end of course.</li>
        </ul>
      </Callout>

      {/* ---- TEXTBOOK CONTENT ---- */}

      <AnchorHeading as="h2" id="the-aaarrr-funnel">1. The AAARRR funnel</AnchorHeading>
      <p>
        Dave McClure introduced the <strong>AAARRR framework</strong> in 2007 as a taxonomy for the
        stages every user passes through on the way from stranger to paying customer to advocate.
        The five stages are acquisition, activation, retention, revenue, and referral. Each stage
        is a conversion rate, not a raw count.
      </p>
      <p>
        The framework&rsquo;s utility is not in memorizing its five letters. It is in forcing you to
        ask: at which stage does my funnel lose the most people? A product with 10,000 signups
        and 3% activation has a different problem from one with 500 signups and 60% activation.
        The AAARRR framework makes that difference visible.
      </p>
      <p>
        <strong>Acquisition</strong> is the moment a stranger first encounters your product: a search
        result, a tweet, a referral from a friend. Acquisition ends when they arrive at a page you control.
      </p>
      <p>
        <strong>Activation</strong> is the moment that stranger has a genuinely good first experience.
        This is the most important stage for early-stage founders because it is the hardest to observe
        without instrumentation, and the one most correlated with long-term retention.
      </p>
      <p>
        <strong>Retention</strong> is whether that person comes back. For most B2C products, retention
        is measured at day 1, day 7, and day 30 after signup. A product with good acquisition but
        poor retention is filling a leaky bucket.
      </p>
      <p>
        <strong>Revenue</strong> is the conversion to paying customer. In freemium models, this
        comes after activation and retention. In trial-to-paid models, it comes at or near the end
        of a trial window.
      </p>
      <p>
        <strong>Referral</strong> is the rate at which existing users bring new users. Referral
        at the end of the funnel is not where most early-stage founders should focus. Gustaf
        Alstromer&rsquo;s research at Airbnb and YC found that referral loops only compound
        reliably once retention is already strong. (Alstromer, 2019)
      </p>
      <p>
        The canonical advice from PostHog&rsquo;s Andy Vandervell: &ldquo;A product that retains
        users well is also better positioned for viral growth. Retention dynamics matter more than
        sharing dynamics in most products.&rdquo; (Vandervell, 2023)
      </p>

      <AnchorHeading as="h2" id="activation-event">2. Defining your activation event</AnchorHeading>
      <p>
        The <strong>activation event</strong> is the single action a new user must take, within a
        defined timeframe, to qualify as &ldquo;activated.&rdquo; Until you name it precisely,
        your funnel has a gap you cannot measure.
      </p>
      <p>
        Most founders initially define activation too loosely: &ldquo;they used the app,&rdquo; or
        &ldquo;they logged in twice.&rdquo; These definitions let users count as activated when
        they have not yet experienced the core value. The result: an activation rate that looks
        acceptable while revenue remains flat.
      </p>
      <p>
        A well-formed activation event statement:
      </p>
      <pre>{`"A user has activated when they have [specific action] within [timeframe] of signing up."`}</pre>
      <p>
        Examples from real products:
      </p>
      <ul>
        <li>Dropbox: uploaded at least one file within 24 hours.</li>
        <li>Slack: sent 2,000 messages as a team (historically, within a trial period).</li>
        <li>A fitness app: completed their first workout session within 48 hours of install.</li>
        <li>A budgeting app: connected at least one bank account within 72 hours of signup.</li>
      </ul>
      <p>
        The timeframe matters because a user who activates on day 30 has a very different
        engagement pattern from one who activates on day 1. PostHog&rsquo;s retention documentation
        defines the activation event as the &ldquo;baseline event&rdquo; and the timeframe as the
        window within which the baseline event is expected to occur for retained users. (PostHog, 2024)
      </p>
      <p>
        Paul Graham observed in &ldquo;Do Things That Don&rsquo;t Scale&rdquo; that the founders
        who best understand their activation event are those who have personally walked dozens of
        new users through onboarding and watched exactly where they got lost, succeeded, or gave
        up. (Graham, 2013) The customer hour ritual in this course is designed to produce that
        observation at scale over ten weeks.
      </p>
      <p>
        Your first version of the activation event definition will be wrong. That is expected.
        Write it down today, instrument it this week, and revise it once you have two weeks of
        data. The goal is not precision; it is a starting measurement.
      </p>

      <AnchorHeading as="h2" id="mrr">3. MRR: what it measures and what it hides</AnchorHeading>
      <p>
        <strong>Monthly recurring revenue</strong> (MRR) is the predictable recurring income
        normalized to one month. Stripe defines it as &ldquo;the total revenue generated from
        all active subscriptions in a given month, excluding one-time payments and fees.&rdquo;
        (Stripe, 2026)
      </p>
      <p>
        The formula is straightforward:
      </p>
      <pre>{`MRR = (number of active customers) × (average monthly revenue per customer)`}</pre>
      <p>
        A customer on an annual plan at $120/year contributes $10 to MRR, not $120. Treating
        annual payments as monthly revenue inflates MRR and creates a false picture of growth
        velocity.
      </p>
      <p>
        MRR matters because it strips away one-time revenue spikes that cannot recur. A single
        lifetime deal at $500 is not MRR. A launch promotion that generated $3,000 in a week is
        not MRR. These are gross revenue events. MRR is the fraction you can count on repeating
        next month without doing anything new.
      </p>
      <p>
        Two metrics commonly confused with MRR:
      </p>
      <ul>
        <li>
          <strong>ARR (Annual Recurring Revenue)</strong> is MRR multiplied by 12. It is a
          reporting convention for investors and board meetings. At $800 MRR, your ARR is $9,600.
          This number looks close to your $10k target and will tempt you to slow down. Do not use
          ARR as an operational metric until you are past $50k MRR.
        </li>
        <li>
          <strong>Gross revenue</strong> includes everything collected, recurring or not. It is
          the right number for your tax return. It is the wrong number for tracking growth.
        </li>
      </ul>
      <p>
        Once you have at least 10 paying customers, decompose MRR into its components: new MRR
        (from new customers this month), expansion MRR (from upgrades), churned MRR (from
        cancellations), and contraction MRR (from downgrades). The net of these four tells you
        whether your business is growing, flat, or shrinking in a way that total MRR can obscure
        when new customers are masking churn.
      </p>
      <p>
        Anu Hariharan&rsquo;s YC Startup School lecture on business model metrics adds an
        important nuance for consumer products: &ldquo;For consumer businesses, you should pay
        attention to user retention, not necessarily dollar retention, because the volume of users
        matters.&rdquo; (Hariharan, 2019) This means MRR is a lagging indicator for early B2C
        founders. Leading indicators are activation rate and day-7 retention.
      </p>

      <AnchorHeading as="h2" id="vanity-vs-actionable">4. Vanity vs actionable metrics</AnchorHeading>
      <p>
        Eric Ries introduced the distinction between vanity metrics and actionable metrics in a
        2009 guest post on Tim Ferriss&rsquo;s blog. The definition he gave has not been improved
        upon: a metric is actionable if you can link a specific action to an observed change in
        the number. If you cannot, it is vanity. (Ries, 2009)
      </p>
      <p>
        The canonical vanity metrics for early-stage consumer products:
      </p>
      <ul>
        <li>
          <strong>Total registered users.</strong> This number only goes up. It includes users who
          signed up with a throwaway email, users who never returned after day 1, your own test
          accounts, and competitors scouting your onboarding. It rises whether the product is
          improving or not.
        </li>
        <li>
          <strong>Pageviews.</strong> Includes bots, your own team&rsquo;s visits, and users who
          bounced in 3 seconds. Rises with any traffic source, regardless of intent.
        </li>
        <li>
          <strong>App Store downloads.</strong> Free to acquire; no intent to pay; no activation
          required. A spike from being featured tells you nothing about retention.
        </li>
        <li>
          <strong>Social followers.</strong> Correlate weakly with revenue for most products.
        </li>
      </ul>
      <p>
        Ries proposed three tests for actionability: actionable (a specific action caused the
        change), accessible (any team member can understand it), and auditable (it can be
        re-derived from raw data). A metric that fails any one of the three is a vanity metric
        regardless of how impressive it sounds in a pitch.
      </p>
      <p>
        The practical replacement rule: every vanity metric has an actionable counterpart.
        &ldquo;Total users&rdquo; becomes &ldquo;weekly active users.&rdquo; &ldquo;Total
        downloads&rdquo; becomes &ldquo;signup-to-activation rate.&rdquo; &ldquo;Pageviews&rdquo;
        becomes &ldquo;pages per activated session.&rdquo; The shift is from counts to rates and
        from aggregate totals to per-user figures.
      </p>
      <p>
        Rahul Vohra&rsquo;s account of building Superhuman illustrates the cost of optimizing
        for the wrong metric. Before introducing the PMF survey, the Superhuman team was watching
        growth metrics that felt encouraging but did not distinguish users who genuinely loved
        the product from those who were merely curious. Switching to the &ldquo;very disappointed&rdquo;
        survey and acting on that signal changed their product roadmap entirely. (Vohra, 2018)
      </p>

      <AnchorHeading as="h2" id="cohort-vs-aggregate">5. Cohort thinking: why aggregate retention curves deceive</AnchorHeading>
      <p>
        <strong>Cohort analysis</strong> groups users by when they signed up (or activated) and
        tracks each group separately over time. <strong>Aggregate analysis</strong> pools all
        users together regardless of when they signed up.
      </p>
      <p>
        The aggregate retention curve is the most commonly misread chart in early-stage analytics.
        Here is how it deceives: suppose your product launched in January. You have four months
        of signups. You pull a retention curve that shows 35% of users retained at day 30. That
        looks reasonable.
      </p>
      <p>
        But the aggregate hides the cohort-level story. The January cohort (your earliest users,
        acquired before the product was ready) has 12% day-30 retention. The April cohort
        (acquired after you shipped the redesigned onboarding) has 58% day-30 retention. The
        aggregate of 35% is not wrong, but it tells you nothing about whether the product is
        getting better or worse.
      </p>
      <p>
        The cohort table is the honest version of the same data. PostHog&rsquo;s retention docs
        describe it as a table where day 0 is always 100% (every cohort starts with all its
        members) and each subsequent column shows what percentage returned. (PostHog, 2024) Reading
        down a column across cohorts shows you whether retention is improving across cohorts.
        Reading across a row for a single cohort shows the retention curve for users who started
        at the same time.
      </p>
      <p>
        A common misread: a product that is adding users quickly will see its aggregate curve
        flatten even if individual cohort retention is declining. The newer (larger) cohorts
        dominate the average. Without cohort analysis, a growing product can appear to have
        stable retention while actually deteriorating.
      </p>

      <AnchorHeading as="h2" id="north-star-metric">6. The north-star metric</AnchorHeading>
      <p>
        The <strong>north-star metric</strong> is the single number that best represents the
        value your product delivers to users. Every team member should be able to state it
        from memory. Every week&rsquo;s build block should be aimed at moving it.
      </p>
      <p>
        Choosing a north-star metric requires honesty about what your product actually does for
        users. PostHog&rsquo;s Andy Vandervell describes six types of north-star metrics across
        product categories: revenue-based (for e-commerce), consumption (for media), engagement
        (for social), growth efficiency (for platforms), customer growth (for marketplaces), and
        user experience (for tools). (Vandervell, 2022)
      </p>
      <p>
        The common mistake is choosing revenue as the north star. Revenue is a lagging indicator:
        it reflects what users did last month, not what they are doing today. A north-star metric
        should be a leading indicator of revenue. PostHog&rsquo;s own north star is
        &ldquo;Discoveries&rdquo; (users analyzing an insight for at least 10 seconds). Users
        who hit this metric retained 2.3x more than those who did not, and it predicted revenue
        far better than daily active users did.
      </p>
      <p>
        Adora Cheung&rsquo;s framework for primary metrics from YC Startup School: &ldquo;Your
        primary metric should be the best proxy for whether you are delivering value to your
        users. If it goes up, you&rsquo;re doing the right things.&rdquo; (Cheung, 2019) The
        north-star metric is this primary metric.
      </p>
      <p>
        For most early-stage B2C products, the north-star metric is either daily active users
        divided by monthly active users (DAU/MAU ratio, a measure of how sticky the product is)
        or a specific in-product action that correlates with long-term retention. You will not
        know which action to use until you have three or four weeks of cohort data. For now,
        name a candidate and measure it. Revise it in week 4 when you have enough data.
      </p>
      <p>
        Sam Altman&rsquo;s Startup Playbook distills the north-star principle to its core:
        &ldquo;The most important thing to do is to make something people want. If you do that,
        almost everything else will take care of itself.&rdquo; (Altman, 2015) The north-star
        metric is your weekly test of whether you are making something people want.
      </p>

      {/* ---- CASE STUDY ---- */}
      <AnchorHeading as="h2" id="case-study">Case study: Pieter Levels and the honest funnel</AnchorHeading>
      <p>
        Pieter Levels (known as @levelsio) is one of the most-studied solo technical founders in
        the B2C space. His best-known product, Nomad List, went from zero to over $1 million in
        annual revenue as a one-person business. His approach to metrics is a useful case study
        in funnel honesty.
      </p>
      <p>
        Levels publishes his revenue numbers in real time on a public dashboard. This practice
        is notable not because the numbers are impressive but because the practice forces
        honesty. When revenue is public, you cannot rationalize a flat week as &ldquo;hockey
        stick in progress.&rdquo; The number either went up or it did not.
      </p>
      <p>
        In interviews and public posts, Levels has described his early process for finding the
        activation event for Nomad List: he looked at which users renewed their membership and
        traced back their behavior in the first 48 hours. The users who renewed had, in almost
        every case, posted at least one piece of content (a city review, a forum post, a salary
        entry) within two days of joining. Users who only browsed and never posted churned at
        far higher rates. This gave him an activation event: &ldquo;posted at least one piece
        of user-generated content within 48 hours of signup.&rdquo;
      </p>
      <p>
        Once he had that definition, he could measure it. He changed the onboarding to prompt
        new users to contribute immediately. Activation rate rose. Retention rose. Revenue
        followed.
      </p>
      <p>
        Paul Graham&rsquo;s &ldquo;Do Things That Don&rsquo;t Scale&rdquo; describes exactly
        this pattern: the discovery of the activation event happens through labor-intensive,
        unscalable observation of individual users. &ldquo;You&rsquo;ll be doing different
        things when you&rsquo;re acquiring users a thousand at a time. But if the market exists,
        you can usually start by recruiting users manually and then gradually switch to less
        manual methods.&rdquo; (Graham, 2013)
      </p>
      <p>
        The Nomad List story is a clean illustration of the AAARRR funnel working correctly.
        Levels did not optimize acquisition first. He fixed activation. Retention improved. Only
        then did growth compound. Gustaf Alstromer&rsquo;s data from 600+ YC startups confirms
        this sequence: &ldquo;Growth before product-market fit is the leading cause of startup
        death. Retention is the only honest signal.&rdquo; (Alstromer, 2019)
      </p>

      {/* ---- EXERCISES ---- */}
      <AnchorHeading as="h2" id="exercises">Exercises</AnchorHeading>
      <p>Complete these before or during section. Each is answerable from this reading alone.</p>

      <Exercise n={1}>
        <p>
          Write your activation event definition in the exact format from section 2:
          &ldquo;A user has activated when they have [specific action] within [timeframe] of
          signing up.&rdquo; Then write one sentence explaining why you chose that action rather
          than an easier-to-measure proxy like &ldquo;logged in twice.&rdquo;
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Your dashboard shows three numbers: 8,400 total registered users, 320 monthly active
          users, and 22 paying customers. Using Ries&rsquo;s three-A test (actionable, accessible,
          auditable), classify each number as vanity or actionable. For the vanity ones, write
          the actionable alternative you would replace them with.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          You have four months of user data. Your aggregate day-30 retention is 28%. Your cohort
          table shows: January cohort 14%, February 21%, March 33%, April 41%. Write two
          sentences: (a) what the aggregate number suggests about the product, and (b) what the
          cohort table reveals that the aggregate hides. Which number would you report to an
          investor and why?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Calculate MRR for the following situation: 15 customers on a $19/month plan, 4 customers
          on a $49/month plan, and 1 customer on a lifetime deal who paid $299 six months ago. Show
          your work. Then write your actual product&rsquo;s MRR as of today, with the date.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Name a candidate north-star metric for your product. It must be (a) a leading indicator
          of revenue rather than revenue itself, (b) something users do (not something you do), and
          (c) measurable with PostHog or a SQL query. Write the PostHog event name or SQL expression
          you would use to track it.
        </p>
      </Exercise>

      {/* ---- GOING DEEPER ---- */}
      <AnchorHeading as="h2" id="going-deeper">Going deeper (optional)</AnchorHeading>
      <p>
        The following sources are optional. They go deeper on the concepts introduced this week
        and are useful if you want a second perspective or extended treatment.
      </p>
      <ul>
        <li>
          <strong>The Lean Startup</strong> by Eric Ries (2011). The foundational text for
          build-measure-learn loops and the original vocabulary of validated learning. Chapter 7
          (&ldquo;Measure&rdquo;) is the most directly relevant to this week. Available in most
          libraries. (Ries, 2011)
        </li>
        <li>
          <strong>Gustaf Alstr&ouml;mer, &ldquo;Growth for Startups,&rdquo;</strong> YouTube,
          46 min. The companion video to the YC Library text version. Alstr&ouml;mer walks
          through measuring PMF via retention curves, why premature growth kills startups, and the
          metrics that give false PMF signals. Watch the first 20 minutes as a Week 1 primer.{" "}
          <a href="https://www.youtube.com/watch?v=6lY9CYIY4pQ">youtube.com/watch?v=6lY9CYIY4pQ</a>
        </li>
        <li>
          <strong>Adora Cheung, &ldquo;How to Set KPIs and Goals,&rdquo;</strong> YC Startup School 2019, 29 min.
          Covers common mistakes (gaming metrics, vanity metrics) and a framework for weekly
          goal-setting.{" "}
          <a href="https://www.youtube.com/watch?v=lL6GdUHIBsM">youtube.com/watch?v=lL6GdUHIBsM</a>
        </li>
        <li>
          <strong>Section worksheet:</strong> Wire your funnel (this week&rsquo;s section). The
          hands-on implementation of everything in this reading.
        </li>
        <li>
          <strong>Lecture 2 slides:</strong> Reading metrics honestly. Covers the MRR decomposition
          and cohort table interpretation in more depth, with worked examples.
        </li>
      </ul>

      <Takeaways>
        <li>The AAARRR funnel has five stages; fix activation and retention before spending on acquisition, because adding users to a leaky funnel accelerates loss.</li>
        <li>Your activation event is the most important thing to name and instrument this week. Write it in one sentence and get it firing in production code before Friday.</li>
        <li>MRR is predictable recurring revenue only. Exclude one-time payments, lifetime deals, and usage spikes. $0 is a valid and honest MRR number.</li>
        <li>Cohort analysis is the only honest way to read retention data. Aggregate curves hide whether the product is improving or deteriorating.</li>
        <li>Your north-star metric is a leading indicator of whether users are getting value. Name a candidate now and revise it once you have four weeks of cohort data.</li>
      </Takeaways>

      <Bibliography>
        <p>
          Alstromer, G. (2019). Growth for startups. Y Combinator Library.{" "}
          <a href="https://www.ycombinator.com/library/6k-growth-for-startups">ycombinator.com/library/6k-growth-for-startups</a>
        </p>
        <p>
          Altman, S. (2015). Startup playbook.{" "}
          <a href="https://playbook.samaltman.com/">playbook.samaltman.com</a>
        </p>
        <p>
          Cheung, A. (2019). How to set KPIs and goals. Y Combinator Startup School.{" "}
          <a href="https://www.youtube.com/watch?v=lL6GdUHIBsM">youtube.com/watch?v=lL6GdUHIBsM</a>
        </p>
        <p>
          Graham, P. (2013). Do things that don&rsquo;t scale.{" "}
          <a href="http://paulgraham.com/ds.html">paulgraham.com/ds.html</a>
        </p>
        <p>
          Hariharan, A. (2019). Nine business models and the metrics investors want. Y Combinator Startup School.{" "}
          <a href="https://www.startupschool.org/videos/66">startupschool.org/videos/66</a>
        </p>
        <p>
          PostHog team. (2024). Users who come back: Tracking retention with PostHog.{" "}
          <a href="https://posthog.com/docs/new-to-posthog/retention">posthog.com/docs/new-to-posthog/retention</a>
        </p>
        <p>
          Ries, E. (2009). Vanity metrics vs. actionable metrics. Tim Ferriss Blog.{" "}
          <a href="https://tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/">tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/</a>
        </p>
        <p>
          Stripe. (2026). What is monthly recurring revenue (MRR)? How to calculate, increase, and use MRR to guide growth.{" "}
          <a href="https://stripe.com/resources/more/what-is-monthly-recurring-revenue">stripe.com/resources/more/what-is-monthly-recurring-revenue</a>
        </p>
        <p>
          Vandervell, A. (2022). Finding your north star metric and why it matters. PostHog.{" "}
          <a href="https://posthog.com/founders/north-star-metrics">posthog.com/founders/north-star-metrics</a>
        </p>
        <p>
          Vandervell, A. (2023). In-depth: The AARRR pirate funnel explained. PostHog.{" "}
          <a href="https://posthog.com/product-engineers/aarrr-pirate-funnel">posthog.com/product-engineers/aarrr-pirate-funnel</a>
        </p>
        <p>
          Vohra, R. (2018). How Superhuman built an engine to find product/market fit. First Round Review.{" "}
          <a href="https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/">review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/</a>
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk01ReadingSearchBody =
  "AAARRR funnel acquisition activation retention revenue referral B2C funnel MRR monthly recurring revenue vanity metrics actionable metrics cohort analysis north star metric activation event PostHog instrumentation dashboard week 1 foundations";
