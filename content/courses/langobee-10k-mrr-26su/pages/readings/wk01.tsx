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
      id="wk01-ground-truth"
      title="Week 1: Ground truth and the de-alted dashboard"
      kicker="LangoBee to $10K MRR · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers why vanity metrics destroy decision-making for solo founders,
          how to strip founder, alt, and bot accounts from your counts before drawing any
          conclusion, how to build a cohort table that tells an honest story about real user
          behavior, and how to select a north-star metric for a comprehensible-input app.
          By the end you will be able to state LangoBee&rsquo;s true WAU, MAU, and cohort
          retention in plain numbers, and explain why the raw dashboard overstates each one.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> This is week 1; no prior concepts from
          this course are assumed. You should have PostHog (project 374549) and Supabase
          access. The June 2026 snapshot numbers used throughout come from live data, not
          hypothetical examples.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-the-vanity-metric-trap">1. The vanity metric trap</AnchorHeading>
      <p>
        A vanity metric is a number that trends up regardless of whether your product is
        working. Eric Ries named the concept in a 2009 guest post: &ldquo;Vanity metrics
        allow us to form different conclusions. When the numbers go up, developers think
        it&rsquo;s because of their work. When the numbers go down, marketing thinks
        it&rsquo;s because of the bad economy.&rdquo; (Ries, 2009a) The problem is not
        that the number is imprecise. The problem is that it produces divergent private
        realities: two people in the same company reach opposite conclusions from the same
        dashboard, and neither is provably wrong.
      </p>
      <p>
        LangoBee&rsquo;s raw dashboard shows 103 registered profiles. That number is not
        false. It is the count of rows in the <code>auth.users</code> table. But it includes
        the founder&rsquo;s own account, which generated 59% of all PostHog events in the
        last 30 days. It includes the ~50 bot accounts that arrived in the June 1 cohort
        week. It includes users who signed up once and never returned. The number goes up
        every time anyone reaches the signup form, regardless of intent or behavior afterward.
      </p>
      <p>
        The damage from optimizing for a vanity metric is concrete. If you believe 103
        profiles represents 103 potential customers, you conclude the conversion-to-paid
        problem is a pricing or paywall problem. You spend time tuning the trial flow for
        users who are not real humans, will never return, and cannot pay. The real problem,
        that approximately 4 real humans actively use the product each week, stays invisible.
      </p>

      <Callout title="The three-A test (Ries, 2009a)">
        <p>
          A metric passes the three-A test if it is:
        </p>
        <ul>
          <li><strong>Actionable:</strong> a specific action you took caused an observable change in the number.</li>
          <li><strong>Accessible:</strong> any team member can understand it without statistical training.</li>
          <li><strong>Auditable:</strong> it can be re-derived from raw data at any time, by anyone.</li>
        </ul>
        <p>
          Total registered profiles: actionable (no: the number rises with bots, with the
          founder, with test accounts), accessible (yes), auditable (yes). Two out of three
          is not passing.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="2-de-alting">2. De-alting: what it is and why it matters</AnchorHeading>
      <p>
        De-alting is the practice of removing internal accounts from all metrics before any
        analysis. The accounts to remove fall into three categories.
      </p>
      <p>
        <strong>Founder accounts</strong> inflate engagement metrics because founders use the
        product at rates no real user matches. At LangoBee, one founder account generated
        59% of all events in the last 30 days. A de-alted WAU number excludes this account.
        The raw WAU is meaningless for tracking whether users find value; the de-alted WAU
        is the signal.
      </p>
      <p>
        <strong>Alt and test accounts</strong> inflate activation rates. When a founder
        creates a test account to check onboarding, they almost always complete the onboarding
        flow, because they know exactly what to do. Real users do not. An activation rate
        computed including test accounts overstates how well onboarding works for strangers.
      </p>
      <p>
        <strong>Bot and spam registrations</strong> inflate signup counts. The June 1, 2026
        cohort week is the clearest example at LangoBee: 52 signups, 1 activated. The 51
        non-activating accounts share three characteristics: email addresses on junk domains
        like a7gi.ru and host315.net, password-only authentication (no OAuth), and zero
        activity after signup. Andrew Chen&rsquo;s framework for building retention cohort
        tables names this explicitly: strip founder and test accounts from the cohort before
        you run the table so the retention curve reflects real learners, not internal noise.
        (Chen, 2015)
      </p>
      <p>
        Applied to LangoBee: the raw signup count for the June 1 week is 52. The de-alted,
        bot-filtered count is 1. The difference is not a rounding error. It is the difference
        between believing you had a good acquisition week and understanding that your signup
        endpoint was targeted by a spam script.
      </p>

      <AnchorHeading as="h2" id="3-aarrr-mapped-to-langobee">3. The AARRR funnel mapped to LangoBee</AnchorHeading>
      <p>
        Dave McClure&rsquo;s AARRR framework, introduced in a 2007 SlideShare deck with over
        1.2 million views, defines five stages that every user passes through on the way from
        stranger to paying customer: acquisition, activation, retention, revenue, and referral.
        Each stage is a conversion rate, not a count. The value of the framework is forcing
        you to name which stage leaks the most. (McClure, 2007)
      </p>
      <p>
        Mapping LangoBee&rsquo;s PostHog events to the five stages reveals the following
        picture as of June 2026:
      </p>
      <ul>
        <li>
          <strong>Acquisition:</strong> pageviews on langobee.com, attributed to direct
          (Discord recruiting), google.com, and t.co. 174 direct, 21 from Google, 5 from
          Twitter in the last 30 days. The only proven channel is founder-driven
          hand-recruitment.
        </li>
        <li>
          <strong>Activation:</strong> first <code>reading_event</code> with kind equal to
          a reading-type event. The May 18 cohort activated 12 of 15 signups (80%). The
          June 1 cohort activated 1 of 52 (2%, and that one was real; the rest were bots).
        </li>
        <li>
          <strong>Retention:</strong> a <code>reading_event</code> more than 7 days after
          signup. Approximately 24% of real signups ever return. Median activated user has
          1 active day and approximately 2 minutes total reading time.
        </li>
        <li>
          <strong>Revenue:</strong> <code>trial_started</code> event. Zero events ever. The
          Stripe checkout, trial, and webhook are wired. No human has entered the trial flow.
        </li>
        <li>
          <strong>Referral:</strong> share action on the shorts feed. One event in 30 days
          across 408 shorts impressions.
        </li>
      </ul>
      <p>
        The revenue stage has zero signal. This is the most important fact on the dashboard.
        It does not mean the product is broken. It means the funnel breaks before the paywall
        and no pricing experiment can produce useful data until activation and retention are
        strong enough to route real users to the trial screen.
      </p>

      <AnchorHeading as="h2" id="4-cohort-analysis">4. Cohort analysis: reading the honest table</AnchorHeading>
      <p>
        Cohort analysis groups users by when they signed up and tracks each group separately
        over time. Aggregate analysis pools all users together. The aggregate retention number
        is almost always misleading for an early-stage product because newer cohorts (which
        are larger if the product is growing) dominate the average and can mask deterioration.
      </p>
      <p>
        Andrew Chen explains: the most telling metric is how many users become dedicated,
        repeat users, and this is only visible at the cohort level. A retention curve at the
        aggregate level blends cohorts that had very different experiences. (Chen, 2015)
      </p>
      <p>
        LangoBee&rsquo;s three cohort weeks tell three different stories:
      </p>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9em" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Cohort week</th>
              <th style={{ textAlign: "right", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Signups</th>
              <th style={{ textAlign: "right", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Activated</th>
              <th style={{ textAlign: "right", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Returned</th>
            </tr>
          </thead>
          <tbody>
            {[
              { week: "May 18", signups: 15, activated: "12 (80%)", returned: "6 (40%)" },
              { week: "May 25", signups: 19, activated: "7 (37%)", returned: "3 (16%)" },
              { week: "Jun 1", signups: 52, activated: "1 (2%)", returned: "unknown" },
            ].map((row) => (
              <tr key={row.week}>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", fontWeight: 600 }}>{row.week}</td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", textAlign: "right" }}>{row.signups}</td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", textAlign: "right" }}>{row.activated}</td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", textAlign: "right" }}>{row.returned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        The May 18 cohort is the most important row in the table. It shows the product
        working for real humans: 80% activation and 40% return at this scale is
        strong signal from an audience that includes comprehensible-input learners who came
        through targeted Discord recruiting. These users tap words, open the dictionary
        popup, and return for more sessions.
      </p>
      <p>
        The May 25 cohort shows lower activation (37%) and lower return (16%). This likely
        reflects a broader, lower-intent recruitment effort. The drop from 80% to 37%
        activation is not a product regression. It is an audience-quality regression.
      </p>
      <p>
        The June 1 cohort is noise. Exclude it from all retention and activation analyses.
        Its presence in the aggregate numbers makes the overall activation rate look
        dramatically worse than it is for real users.
      </p>

      <AnchorHeading as="h2" id="5-what-the-engagement-data-shows">5. What the engagement data shows</AnchorHeading>
      <p>
        The top product action in the last 30 days is <code>word_lookup_opened</code> at
        5,225 events. This is the tap-a-word loop: a user taps a word in the reader or
        video viewer, a popup opens with a definition and word status controls, they mark
        it learning or known. The loop works. Users who activate use it repeatedly.
      </p>
      <p>
        The engagement shape also shows 223 rageclicks in 30 days. Rageclicks (rapid
        repeated clicks on an element) are a UX breakage signal: a user expected something
        to happen, it did not, they clicked faster. At this scale, 223 rageclicks against
        5,225 word lookups means roughly one rageclick for every 23 productive actions.
        That ratio is worth tracking but not yet a crisis.
      </p>
      <p>
        Video dominates over text: 21 of 24 monthly active readers use the video surfaces.
        The shorts feed had 408 impressions and 101 completions across 13 real users in 30
        days, with a 28% completion rate and 63% skip rate. This surface is pre-validation:
        the data does not yet confirm whether shorts drive the word-lookup loop or merely
        provide passive entertainment.
      </p>
      <p>
        The median session is 34 seconds. The median activated user has approximately 2
        minutes of total time in the product. These numbers describe dipping behavior,
        not study-session behavior. The product has not yet converted occasional visitors
        into the daily-habit users a language-learning subscription requires.
      </p>

      <AnchorHeading as="h2" id="6-north-star-metric">6. Choosing a north-star metric</AnchorHeading>
      <p>
        The north-star metric (NSM) is the single number that best represents the value
        your product delivers to users. Lenny Rachitsky&rsquo;s 2021 survey of over 40
        growth-stage companies produced a six-category taxonomy: revenue, customer growth,
        consumption growth, engagement, growth efficiency, and user experience. The right
        category depends on business model and what drives long-term retention. (Rachitsky, 2021)
      </p>
      <p>
        For a language-learning subscription product, revenue and customer growth are lagging
        indicators: they reflect what happened, not what is happening. Consumption growth
        (words or minutes of target-language content encountered) is a leading indicator:
        a user consuming more content is learning more, building vocabulary, and developing
        the habit that drives subscription renewal.
      </p>
      <p>
        Adora Cheung&rsquo;s framework for primary KPIs from YC Startup School: your primary
        metric should be the best proxy for whether you are delivering value to your users.
        If it goes up, you are doing the right things. (Cheung, 2019) For LangoBee, the
        candidate proxies for value delivery are:
      </p>
      <ul>
        <li>
          <strong>Words encountered per week (de-alted):</strong> measures target-language
          exposure volume. Measurable via <code>reading_events</code> where the event records
          words read.
        </li>
        <li>
          <strong>Days with at least one reading session per week (de-alted):</strong> measures
          habit formation. A user reading on 4 of 7 days is forming a different habit than one
          reading for 2 hours on one day.
        </li>
        <li>
          <strong>word_lookup_opened events per WAU:</strong> measures depth of vocabulary
          engagement per active user. Users who look up words are actively engaging with the
          learning loop, not passively watching.
        </li>
      </ul>
      <p>
        John Cutler and the Amplitude team&rsquo;s North Star Playbook adds the input-metrics
        decomposition: once you have chosen the NSM, identify 3-4 input metrics whose movement
        causes the NSM to move. (Cutler and Amplitude, 2019) For a consumption-growth NSM,
        the inputs are activation rate (did the user start reading at all), session frequency
        (how often they return), and content discovery (did they find something worth reading
        each session).
      </p>
      <p>
        Do not pick a candidate NSM and then never revisit it. The North Star Playbook
        emphasizes that the right NSM changes as the product matures. In weeks 1-4 you are
        establishing a baseline; the NSM decision is revisable once you have four cohort weeks
        of data.
      </p>

      <AnchorHeading as="h2" id="7-the-intel-repo">7. The intel repo: turning decisions into greppable artifacts</AnchorHeading>
      <p>
        A decision made without a record is a decision that gets made again. In a solo-founder
        AI-native workflow, the cost of re-deriving context is high: a new session starts cold
        and must reconstruct every prior decision from scratch unless those decisions are stored
        in a greppable file.
      </p>
      <p>
        The intel repo is a directory of dated plaintext files, one per week, each containing:
        the metric values observed, the cause identified (or hypothesized), and the decision
        made. Example:
      </p>
      <pre>{`# 2026-06-09

de-alted WAU: 4
de-alted MAU: 31
MRR: $0

Jun-1 cohort spike: 52 signups, 1 real. Cause: bot registration
script targeting the signup endpoint. Filter applied:
exclude emails matching /(a7gi\\.ru|host315\\.net)/i.

Decision: no acquisition spend until de-alted WAU reaches 10
for two consecutive weeks.`}</pre>
      <p>
        This file takes three minutes to write. It saves the next session from re-pulling
        the same queries to understand why no ads ran in June. It also enforces honesty:
        writing the decision down before seeing the next week&rsquo;s numbers prevents
        post-hoc rationalization.
      </p>

      <AnchorHeading as="h2" id="8-the-june-2026-snapshot">8. The June 2026 snapshot in full</AnchorHeading>
      <p>
        These are the live numbers from PostHog project 374549 and Supabase as of June 12,
        2026. They are the baseline every subsequent week measures against.
      </p>
      <ul>
        <li>Catalog: 17,440 texts, 98% video. Content supply is not the constraint.</li>
        <li>Real users: approximately 50 humans out of 103 registered profiles.</li>
        <li>De-alted WAU: 4. De-alted MAU: 31.</li>
        <li>MRR: $0. Zero trial_started events ever. Stripe is wired but unused.</li>
        <li>Top action: word_lookup_opened, 5,225 events in 30 days. The learning loop works.</li>
        <li>Rageclicks: 223 in 30 days. UX breakage signal, not a crisis at this ratio.</li>
        <li>Acquisition channel: direct (founder-recruited Discord), only proven channel.</li>
        <li>Shorts feed: pre-validation. 408 impressions, 28% completion, 1 share.</li>
      </ul>
      <p>
        The snapshot is honest. 4 WAU and $0 MRR describe a product that works for a small
        cohort of real users but has not yet converted dipping behavior into daily habit or
        habit into subscription revenue. This is the starting line. The course works forward
        from here.
      </p>

      <AnchorHeading as="h2" id="exercises">Exercises</AnchorHeading>
      <p>Answer from memory first, then check.</p>

      <Exercise n={1}>
        <p>
          Write the three criteria of Ries&rsquo;s three-A test from memory. Then apply each
          criterion to the metric &ldquo;103 registered profiles.&rdquo; Which criteria does
          it fail, and what is the actionable replacement?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Without opening any dashboard: what is LangoBee&rsquo;s de-alted WAU? What fraction
          of all PostHog events in the last 30 days came from the founder account? How do these
          two numbers together explain why you must de-alt before drawing any conclusions?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          The June 1 cohort week shows 52 signups and 1 activation. Name three specific
          signals (from this reading) that identify the other 51 accounts as bots rather than
          real humans who simply did not activate.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          LangoBee has word_lookup_opened as its top product action at 5,225 events in 30
          days. Using Rachitsky&rsquo;s (2021) six NSM categories, classify this metric and
          explain in one sentence why it is a better leading indicator of subscription
          revenue than total registered profiles.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Write a two-sentence intel-repo entry for this week. It must include: (a) the
          de-alted WAU and MAU values, (b) the cause of the June 1 spike, and (c) one
          decision you are making based on these numbers. Use the format from section 7.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet:</strong> Rebuild the de-alted dashboard from raw HogQL
          and SQL (this week&rsquo;s section). The hands-on implementation of every concept
          in this reading.
        </li>
        <li>
          <strong>Lecture 2 slides:</strong> LangoBee&rsquo;s funnel, audited. Covers the
          full June 2026 snapshot, the AARRR event mapping, and the NSM decision.
        </li>
        <li>
          <strong>Dave McClure (2007),</strong> Startup Metrics for Pirates: AARRR!!{" "}
          <a href="https://www.slideshare.net/slideshow/startup-metrics-for-pirates-long-version/89026">
            slideshare.net
          </a>
          . The primary source for the AARRR framework. Slides 10-30 cover the stage-by-stage
          breakdown most applicable to LangoBee.
        </li>
        <li>
          <strong>Eric Ries (2009),</strong> Vanity Metrics vs. Actionable Metrics.{" "}
          <a href="https://tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/">
            tim.blog
          </a>
          . The four tools for building actionable metrics, including the cohort funnel
          approach this section implements.
        </li>
        <li>
          <strong>Refold Espa&ntilde;ol Discord</strong> (community). The 9,500-member
          comprehensible-input community is LangoBee&rsquo;s highest-signal audience pool
          and the source of the May 18 cohort&rsquo;s best users. Participating before any
          product post is the rule.{" "}
          <a href="https://discord.com/servers/refold-espanol-es-667734565309382657">
            discord.com/servers/refold-espanol-es
          </a>
        </li>
      </ul>

      <Takeaways>
        <li>Vanity metrics trend up regardless of product quality and produce divergent private realities: two founders reach opposite conclusions from the same number because neither is grounded in causal evidence.</li>
        <li>De-alting removes founder events, alt accounts, and bot registrations before any metric is computed. At LangoBee, not de-alting inflates raw WAU by approximately 15x (59% founder events plus ~50 bot accounts).</li>
        <li>Cohort analysis separates three completely different stories hidden in the same aggregate. The May 18 cohort (80% activation, 40% return) and the June 1 cohort (2% activation, all bots) are not the same signal at different intensity.</li>
        <li>The AARRR revenue stage has zero events: no human has entered the trial flow. This is the primary diagnostic fact. Acquisition or pricing experiments before activation and retention are fixed are spending ahead of learning.</li>
        <li>The north-star metric for a comprehensible-input app should sit in the consumption-growth or engagement category: a leading indicator of habit formation, not a lagging count of registrations. word_lookup_opened per WAU is the strongest current candidate.</li>
      </Takeaways>

      <Bibliography>
        <p>
          Chen, A. (2015). How to measure if users love your product using cohorts and
          revisit rates.{" "}
          <a href="https://andrewchen.com/how-to-measure-if-users-love-your-product-using-cohorts-and-revisit-rates/">
            andrewchen.com
          </a>
          . Practical how-to for de-alting and building retention cohort tables.
        </p>
        <p>
          Cheung, A. (2019). How to set KPIs and goals. Y Combinator Startup School.{" "}
          <a href="https://www.youtube.com/watch?v=lL6GdUHIBsM">
            youtube.com/watch?v=lL6GdUHIBsM
          </a>
          . Primary KPI framework; de-alting as a health-metric discipline.
        </p>
        <p>
          Cutler, J. and Amplitude team. (2019). The North Star Playbook.{" "}
          <a href="https://amplitude.com/books/north-star/amplitudes-north-star-metric-and-inputs">
            amplitude.com/books/north-star
          </a>
          . NSM definition, input-metric decomposition, and how to change the NSM as the
          product matures.
        </p>
        <p>
          LangoBee June 2026 snapshot. Primary data from PostHog project 374549 and Supabase
          production, queried June 12, 2026. All figures cited in this reading.
        </p>
        <p>
          McClure, D. (2007). Startup metrics for pirates: AARRR!!{" "}
          <a href="https://www.slideshare.net/slideshow/startup-metrics-for-pirates-long-version/89026">
            slideshare.net
          </a>
          . The canonical AARRR framework: five stages, five conversion rates, one funnel.
        </p>
        <p>
          Rachitsky, L. (2021). Choosing your north star metric.{" "}
          <a href="https://www.lennysnewsletter.com/p/choosing-your-north-star-metric">
            lennysnewsletter.com
          </a>
          . Six NSM categories with real-company examples; the strategy-made-concrete
          framing.
        </p>
        <p>
          Ries, E. (2009a). Why vanity metrics are dangerous.{" "}
          <a href="http://www.startuplessonslearned.com/2009/12/why-vanity-metrics-are-dangerous.html">
            startuplessonslearned.com
          </a>
          . Original argument that vanity metrics produce divergent private realities and
          block shared diagnosis.
        </p>
        <p>
          Ries, E. (2009b). Vanity metrics vs. actionable metrics.{" "}
          <a href="https://tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/">
            tim.blog
          </a>
          . Four tools for actionable metrics including the three-A test and cohort funnels.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk01ReadingSearchBody =
  "vanity metrics actionable metrics de-alting bot filtering three-A test cohort analysis AARRR funnel LangoBee June 2026 snapshot WAU MAU MRR north star metric word_lookup_opened intel repo PostHog HogQL Supabase SQL comprehensible input week 1 foundations ground truth";
