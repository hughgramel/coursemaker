import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";
import { Mermaid } from "@/components/Mermaid";

export function Wk05Reading() {
  return (
    <ReadingPage
      id="wk05"
      title="Week 5: analytics, experiments, and iteration on X"
      kicker="Grow on X: From Zero to 10,000 Followers · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers three outcomes. First, you will{" "}
          <strong>apply</strong>: calculate your impressions-per-follower and
          profile-visit-to-follow rate directly from your own analytics. Second,
          you will <strong>analyze</strong>: classify your last ten posts by hook
          pattern and format, then identify which combinations correlate with
          above-baseline performance. Third, you will <strong>evaluate</strong>:
          distinguish vanity metrics from signal metrics for any creator-economy
          claim, and recognize p-hacking when you see it in your own data or
          someone else&rsquo;s.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> The follower funnel (impression,
          profile click, follow) from Week 1. The concept of a leading versus
          lagging indicator from Week 1. Hook writing and post formats from Weeks
          2-3. The content calendar and posting discipline from Week 4.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-two-kinds-of-metrics">
        1. Two kinds of metrics: vanity and signal
      </AnchorHeading>
      <p>
        Every number on your analytics dashboard belongs to one of two
        categories. A <strong>vanity metric</strong> is a number that goes up
        when things go well and down when things go wrong, but cannot tell you
        why or what to do next. A <strong>signal metric</strong> is a number
        tied to a specific stage of the funnel, actionable in the sense that a
        change in the number implies a specific response. The distinction comes
        from Ries (2009), who wrote: &ldquo;Vanity metrics: good for feeling
        awesome, bad for action. The only metrics that entrepreneurs should
        invest energy in collecting are those that help them make
        decisions.&rdquo;
      </p>
      <p>
        For a creator on X, the canonical vanity metrics are total follower
        count, total lifetime impressions, and total likes. Each of these
        numbers grows over time for almost any account that posts consistently.
        A rising total impressions number does not tell you whether your recent
        posts are performing well or whether a single post from six months ago
        is still being served by the algorithm. Chen (2018) put this directly:
        &ldquo;A rising curve tells you nothing predictive.&rdquo; The curve
        tells you what happened. It does not tell you what to do.
      </p>
      <p>
        Signal metrics for a creator sit at the transitions between funnel
        stages. The transition from impression to engagement (did someone stop
        scrolling?) is captured by the engagement rate on a given post. The
        transition from post to profile (did they want to know more?) is
        captured by profile visits per post. The transition from profile visit
        to follow (did the profile convert?) is captured by the
        profile-visit-to-follow rate. Each of these is actionable: a low
        engagement rate points to the hook; a low profile-visit-to-follow rate
        points to the bio and pinned post.
      </p>
      <p>
        Welsh (2023) frames this in terms of the full creator funnel: top
        (impressions, follows), middle (newsletter signups, link clicks), and
        bottom (purchases, revenue). He writes: &ldquo;The average creator never
        stops focusing on the top of their funnel. To build a real business, you
        have to move people from the top down to the bottom.&rdquo; Even if your
        current goal is 10,000 followers, designing your metrics around
        top-of-funnel vanity numbers trains you to optimize for the wrong
        thing. The practices that drive genuine follower growth are the same ones
        that later drive revenue: clear positioning, content that serves a
        specific reader, a profile that converts visitors.
      </p>

      <AnchorHeading as="h2" id="2-impressions-per-follower">
        2. Impressions per follower: a per-post quality gauge
      </AnchorHeading>
      <p>
        Raw impression counts are difficult to interpret because they scale with
        follower count. An account with 50,000 followers will get more
        impressions than one with 500 on the same day, almost regardless of
        content quality. <strong>Impressions per follower</strong> divides out
        audience size so you can compare individual posts across time and,
        roughly, across accounts of different sizes.
      </p>
      <pre>{`Impressions per follower = post impressions / follower count at time of posting`}</pre>
      <p>
        A ratio above 1.0 means the post reached more people than your follower
        count. The algorithm served it to non-followers, either because of
        algorithmic amplification or because followers shared it into their
        networks. A ratio below 0.5 means the post did not earn distribution
        even among your existing followers. That is the signal to look at the
        hook and format.
      </p>
      <p>
        Rough benchmarks for a growing account (under 10,000 followers):
      </p>
      <ul>
        <li>Below 0.5x: hook or format is not working. Study and revise.</li>
        <li>0.5x to 1.0x: your followers saw it. Little algorithmic lift.</li>
        <li>1.0x to 3.0x: algorithmic amplification. Worth understanding why.</li>
        <li>Above 3.0x: a genuine spread event. Extract the pattern immediately.</li>
      </ul>
      <p>
        Track this ratio per post, not as a monthly average. The monthly average
        hides the variance, and the variance is where the learning is. A month
        where your average is 0.9x could contain three posts at 0.1x and one post
        at 3.8x. The three failures and the one success are telling very different
        stories, and the average obscures both.
      </p>

      <AnchorHeading as="h2" id="3-profile-visit-to-follow-rate">
        3. Profile-visit-to-follow rate: the leading indicator
      </AnchorHeading>
      <p>
        Every time a reader visits your profile, they make a binary decision:
        follow or leave. The <strong>profile-visit-to-follow rate</strong> is
        the percentage of profile visits that result in a follow over a given
        window (28 days is the standard).
      </p>
      <pre>{`Profile-visit-to-follow rate = new followers / profile visits × 100`}</pre>
      <p>
        Statweestics (2026) identifies this as &ldquo;the strongest leading
        indicator of growth momentum.&rdquo; A healthy rate for a growing
        account is around 5%. A rate below 1% means your profile is not
        converting visitors who already expressed interest by clicking. That is
        a different problem than getting too few impressions.
      </p>
      <p>
        The two ratios together form a diagnostic pair:
      </p>
      <ul>
        <li>
          High impressions-per-follower, low profile-visit-to-follow rate: your
          content is getting seen, but the profile is failing to close. Fix the
          bio, the pinned post, and the header.
        </li>
        <li>
          Low impressions-per-follower, high profile-visit-to-follow rate: your
          profile converts well, but your content is not reaching new people. Fix
          hooks, engagement cadence, and posting time.
        </li>
        <li>
          Both low: content and profile both need work. Start with the profile,
          because improving hooks while the profile fails to convert is like
          filling a leaking bucket.
        </li>
        <li>
          Both high: the account is growing at capacity. The constraint is now
          volume and consistency.
        </li>
      </ul>

      <AnchorHeading as="h2" id="4-growth-loops-vs-funnels">
        4. Growth loops, not just funnels
      </AnchorHeading>
      <p>
        The follower funnel from Week 1 (impression to profile click to follow)
        is a useful diagnostic tool, but it describes one-way flow. Balfour,
        Winters, Kwok, and Chen (2018) at Reforge argue that the most useful
        frame for durable growth is not a funnel but a loop: a system where the
        output of one cycle feeds the input of the next. They write:
        &ldquo;The fastest-growing products are better represented as a system
        of loops, not funnels.&rdquo;
      </p>
      <p>
        For a creator on X, the loop version looks like this:
      </p>
      <Mermaid
        alt="The creator growth loop: post earns impressions, impressions drive profile visits, profile visits produce follows, follows increase reach of next post"
        chart={`flowchart LR
  A[Post published] --> B[Impressions earned]
  B --> C[Profile visits]
  C --> D[New followers]
  D --> E[Larger reach on next post]
  E --> A`}
      />
      <p>
        The funnel view says: &ldquo;get more impressions to get more
        followers.&rdquo; The loop view says: &ldquo;improve the quality of each
        post so that each cycle compounds on the last.&rdquo; The loop also
        makes clear where the system can break: if each post does not drive
        profile visits (because the hook fails), if profile visits do not
        convert (because the bio fails), or if new followers do not increase
        reach (because engagement is too low to signal quality to the
        algorithm), the loop stalls. Analytics tell you which step is broken.
      </p>
      <p>
        Rachitsky (2021) applies a similar logic in the product context: &ldquo;Which
        metric, if it were to increase today, would most accelerate my
        business&rsquo; flywheel?&rdquo; That question is worth asking every week:
        given your current numbers, which one metric improvement would have the
        largest downstream effect on the whole loop?
      </p>

      <AnchorHeading as="h2" id="5-ab-testing-posts">
        5. A/B testing posts: same idea, two hooks
      </AnchorHeading>
      <p>
        A post A/B test means publishing the same core idea twice, with exactly
        one element changed. The element you change is almost always the hook.
        Every other variable, the insight, the examples, the structure, the
        format, stays constant. This controls for topic and content quality so
        that the difference in performance can be attributed to the hook alone.
      </p>
      <p>
        The practical process has three steps. Write the body of the post first
        and lock it in. Write five candidate hooks without filtering, aiming for
        variety across hook types (question, bold claim, statistic, personal
        story opener, contrarian take). Then pick the two that are most different
        from each other in type or framing. Two hooks that are subtly similar will
        produce an inconclusive test even if one slightly outperforms the other.
      </p>

      <Callout title="The single-variable rule">
        <p>
          Change exactly one element per test. If you change the hook and the
          format in the same comparison, you cannot attribute the result to
          either variable. A test that changes two things at once teaches you
          nothing you can act on.
        </p>
      </Callout>

      <p>
        Basilio (2023), writing about Dickie Bush&rsquo;s process, describes a
        version of this: &ldquo;He puts the idea out as a single tweet to
        validate resonance before committing resources.&rdquo; The principle is
        the same: cheap validation before expensive execution. For a post, the
        cheap validation is a hook test; for a content series, it is a single
        post; for a product, it is a waitlist or a pre-sale.
      </p>

      <AnchorHeading as="h2" id="6-sample-sizes">
        6. Sample sizes for solo creators
      </AnchorHeading>
      <p>
        Academic A/B testing requires hundreds of conversions per variant to
        reach conventional significance thresholds. A solo creator posting twice
        a day has roughly 20-30 comparable posts per month. That is not enough
        for textbook significance, and waiting for a statistically significant
        result before acting means never acting at all.
      </p>
      <p>
        The right frame for a creator is not significance testing. It is{" "}
        <strong>directional evidence plus replication</strong>. Run each hook
        variant at least three times before drawing a conclusion. Three matched
        pairs (six posts total) gives you a directional read: if the same hook
        type wins in two out of three pairs, you have a betting belief. You act
        on that belief, keep running the test, and update when new data arrives.
        A 2-1 split means you need a fourth pair before acting.
      </p>
      <p>
        Several variables can override your hook effect entirely. To control for
        them:
      </p>
      <ul>
        <li>
          Post both variants at the same time of day, on different days of the
          same week.
        </li>
        <li>
          Avoid one variant landing on a Monday and the other on a Saturday.
          Weekday versus weekend can shift impressions by 30-50% on many accounts.
        </li>
        <li>
          Note any major news events or platform issues. If X had a known outage
          or a major news event dominated the feed, mark that result as
          contaminated.
        </li>
        <li>
          Space the two posts at least 48 hours apart to avoid audience overlap
          from the same people seeing both.
        </li>
      </ul>
      <p>
        Write down the posting conditions each time. You cannot control for
        factors you did not record.
      </p>

      <AnchorHeading as="h2" id="7-weekly-retrospective">
        7. The weekly retrospective: keep, kill, or double down
      </AnchorHeading>
      <p>
        The <strong>weekly retrospective</strong> is a five-minute review of the
        past seven days&rsquo; posts, run on the same day each week. Its output
        is a classification of each post into one of three buckets.
      </p>
      <ul>
        <li>
          <strong>Keep:</strong> the post performed at or above your 28-day
          median impressions-per-follower. The hook type and format are worth
          repeating.
        </li>
        <li>
          <strong>Kill:</strong> the post performed below median for the second
          or third time with this hook pattern or format. Retire it from the
          rotation.
        </li>
        <li>
          <strong>Double down:</strong> the post performed at 1.5x or more above
          median. Extract the hook type, the format, the topic, and the posting
          time. Replicate the pattern next week with a different idea.
        </li>
      </ul>
      <p>
        Your <strong>personal baseline</strong> is the median impressions-per-follower
        across all posts in the past 28 days. Calculate it fresh each month.
        Early in your account growth the baseline will shift quickly as you
        improve; after 6-12 months it stabilizes. Do not compare your numbers
        to another creator&rsquo;s account. Their audience, topic, and posting
        history are different. The only fair comparison is your own past.
      </p>
      <p>
        Keep a simple log. One row per post is enough:
      </p>
      <pre>{`Date | Hook type | Format | Topic | Impr/follower | Verdict
Mon  | Question  | Thread | Sales | 2.4x          | Double down
Tue  | Statistic | Single | Sales | 0.6x          | Kill
Wed  | Story     | Thread | Ops   | 1.1x          | Keep`}</pre>
      <p>
        After four weeks of this log, a pattern becomes visible without any
        statistical analysis. After eight weeks, you have a content strategy
        grounded in your own data, not in generic advice from someone else&rsquo;s
        account.
      </p>

      <AnchorHeading as="h2" id="8-p-hacking">
        8. Avoiding p-hacking your own posting data
      </AnchorHeading>
      <p>
        <strong>P-hacking</strong> is the practice of adjusting your analysis
        after the fact until the result tells the story you already wanted. In
        academic research it means trying multiple statistical tests until one
        crosses the significance threshold. For a solo creator it sounds more
        like: &ldquo;That post flopped but the timing was bad, so I won&rsquo;t
        count it,&rdquo; or &ldquo;I&rsquo;ll look at engagements instead of
        impressions because this post got great replies,&rdquo; or &ldquo;My
        hook style is working, I just need to exclude the posts from that weird
        week.&rdquo;
      </p>
      <p>
        Each individual exception may seem reasonable. Together, they narrow the
        dataset toward the conclusion you already believed. The result is a
        confident creator who is optimizing for something that only appears to
        work in a selectively filtered view of their own data.
      </p>
      <p>
        The single most effective protection against this is the{" "}
        <strong>pre-commitment discipline</strong>: before you post, write down
        two things. First, the hypothesis ("I believe a question hook will
        outperform a bold claim for this topic"). Second, the metric and window
        you will use to judge it ("impressions-per-follower at 48 hours"). Commit
        to both before the post goes live. Once you see the result, you are not
        allowed to switch metrics or extend the window to get a better number.
        This is the equivalent of pre-registering a study.
      </p>
      <p>
        There are two legitimate reasons to override a test result after the
        fact. First, an external event clearly affected the posting window: a
        major news story, a platform outage, or a trending topic that had nothing
        to do with your content. Note this in the log and mark the result as
        contaminated, not as evidence. Second, the result directly conflicts with
        a clear pattern across ten or more previous posts. In that case, treat it
        as an outlier, run the test again, and see if it replicates. Everything
        else is motivated reasoning.
      </p>
      <p>
        Surprise findings are the most valuable ones. When a post outperforms
        your expectations, that is information about your audience that your
        prior beliefs did not contain. When a post underperforms a format you
        believed in, that is also information. Accepting both without
        rationalization is the habit that separates creators who improve from
        creators who just post more.
      </p>

      <AnchorHeading as="h2" id="9-worked-example">
        9. A worked example: one month of retrospectives
      </AnchorHeading>
      <p>
        Suppose your 28-day median impressions-per-follower is 0.8x. You post
        twelve times in the month, and your retrospective log shows the following
        pattern:
      </p>
      <pre>{`Week 1: 3 posts at 0.4x, 0.7x, 2.1x  (keep 1, kill 1, double down 1)
Week 2: 3 posts at 1.3x, 0.5x, 1.6x  (keep 2, kill 1)
Week 3: 3 posts at 0.3x, 0.9x, 3.2x  (keep 1, kill 1, double down 1)
Week 4: 3 posts at 1.1x, 0.6x, 1.9x  (keep 2, kill 1)`}</pre>
      <p>
        Your two &ldquo;double down&rdquo; posts (2.1x and 3.2x) were both
        threads with a personal story hook about a lesson learned through failure.
        Your three &ldquo;kill&rdquo; results were all single-tweet bold claim
        posts about the same topic area as the high performers.
      </p>
      <p>
        The conclusion is directional, not certain. The thread format with a
        personal story hook appears to outperform the single tweet with a bold
        claim. The next step is to run a controlled test: publish the same idea
        in both formats, post them on comparable days, and track
        impressions-per-follower at 48 hours. Do this three times over the next
        three weeks. If threads win in at least two of the three pairs, you have
        a betting belief strong enough to shift your content calendar.
      </p>
      <p>
        Also note: your profile-visit-to-follow rate for the same 28 days is 3%.
        The benchmark is 5%. Your content is getting seen (your impressions-per-follower
        on the strong posts is healthy), but your profile is not converting
        visitors at full capacity. Before running more post tests, rewrite the
        bio and pinned post. Improve the profile-visit-to-follow rate first,
        then resume post testing. Improving hooks while the profile leaks is the
        wrong order of operations.
      </p>

      <AnchorHeading as="h2" id="10-exercises">10. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          Open your X analytics for the past 28 days. Calculate your median
          impressions-per-follower across all posts from that period (total
          impressions divided by follower count at the time of each post, then
          find the median value). Calculate your profile-visit-to-follow rate
          (new followers divided by profile visits times 100). Write both numbers
          down. Which is above benchmark and which is below?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Take your ten most recent posts. For each one, label the hook type
          (question, bold claim, statistic, personal story, contrarian take, or
          other) and the format (single tweet, short thread under five posts, long
          thread over five posts, or list post). Then mark each post as above
          or below your 28-day median impressions-per-follower. Do you see any
          combination of hook type and format that appears more often in the
          above-median group?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Take one idea you have been meaning to post. Write the body of the
          post, lock it in, then write five candidate hooks without filtering.
          Pick the two most different from each other. Plan which days you will
          post each variant, what metric you will use to judge the result (write
          it down before posting), and what counts as a win.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Read the following claim: &ldquo;My question hooks always outperform
          my bold claim hooks. Last month, three of my top five posts used
          question hooks.&rdquo; Identify at least two ways this reasoning could
          be an example of p-hacking or confirmation bias. What additional
          information would you need to evaluate the claim fairly?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Look at your analytics and find one post that significantly
          underperformed your expectations. Do not explain it away. What does the
          data actually say happened at the impression level, the engagement level,
          and the profile-visit level? What is the most charitable honest
          interpretation of why it failed?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="11-going-deeper">11. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section worksheet asks you to
          pull 30 days of X analytics, classify your top 10 posts by hook pattern
          and format, identify two patterns to double down on, and retire one
          pattern that has repeatedly underperformed.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers vanity versus signal
          metrics, impressions-per-follower, and profile-visit-to-follow rate
          in detail with worked dashboard examples.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers the A/B testing process,
          sample sizes for solo creators, the weekly retrospective framework, and
          the pre-commitment discipline in detail.
        </li>
        <li>
          <strong>HW4 (30-day growth experiment).</strong> Now out. Your
          experiment design is due next week. The metrics work in this reading
          is the direct input to the experiment design section of that assignment.
        </li>
        <li>
          <strong>Optional video.</strong> Kallaway, &ldquo;Twitter Marketing:
          How To Grow An Audience On X In 2026&rdquo; (approx. 18 min) at{" "}
          <a href="https://www.youtube.com/watch?v=7hqGOI5wba8">
            youtube.com/watch?v=7hqGOI5wba8
          </a>
          . Covers a practitioner&rsquo;s view of the current X algorithm and
          what metrics practitioners actually track in 2026.
        </li>
      </ul>

      <Takeaways>
        <li>
          Vanity metrics (total followers, total impressions) feel meaningful but
          cannot drive decisions. Signal metrics (impressions-per-follower,
          profile-visit-to-follow rate) sit at funnel transitions and imply
          specific actions.
        </li>
        <li>
          Impressions-per-follower controls for audience size and measures
          per-post quality. Track it per post, not as a monthly average. The
          variance is where the learning is.
        </li>
        <li>
          Profile-visit-to-follow rate is the leading indicator of growth
          momentum. A rate below 1% means a profile problem, not a content
          problem. Fix the profile before optimizing hooks.
        </li>
        <li>
          The weekly retrospective (keep, kill, double down) turns raw analytics
          into a content strategy. After eight weeks of logs, the pattern is
          visible without any statistical analysis.
        </li>
        <li>
          P-hacking corrupts self-analytics. Pre-commit to your hypothesis and
          metric before posting. Surprise findings are the most useful ones.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Balfour, Brian, Casey Winters, Kevin Kwok, and Andrew Chen.
          &ldquo;Growth Loops Are the New Funnels.&rdquo; Reforge, 2018.{" "}
          <a href="https://www.reforge.com/blog/growth-loops">
            reforge.com/blog/growth-loops
          </a>
          . Argues that the fastest-growing products are best understood as
          compounding loops rather than one-directional funnels.
        </p>
        <p>
          Basilio, Jake. &ldquo;Dickie Bush: Growth in Reverse.&rdquo; 2023.{" "}
          <a href="https://growthinreverse.com/dickie-bush/">
            growthinreverse.com/dickie-bush/
          </a>
          . Profiles Dickie Bush&rsquo;s iterative validation process for content
          and products, including the single-tweet test before committing to a
          full series.
        </p>
        <p>
          Chen, Andrew. &ldquo;The Investor Metrics Deck.&rdquo; 2018.{" "}
          <a href="https://andrewchen.com/investor-metrics-deck/">
            andrewchen.com/investor-metrics-deck/
          </a>
          . On the limits of aggregate growth curves as predictive signals and
          the value of cohort-level and conversion-rate data.
        </p>
        <p>
          Rachitsky, Lenny. &ldquo;Choosing Your North Star Metric.&rdquo;
          Lenny&rsquo;s Newsletter, 2021.{" "}
          <a href="https://www.lennysnewsletter.com/p/choosing-your-north-star-metric">
            lennysnewsletter.com/p/choosing-your-north-star-metric
          </a>
          . Framework for selecting the single metric that, if improved today,
          most accelerates the business flywheel.
        </p>
        <p>
          Ries, Eric. &ldquo;Vanity Metrics vs. Actionable Metrics.&rdquo; Tim
          Ferriss Blog, 2009.{" "}
          <a href="https://tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/">
            tim.blog/2009/05/19/vanity-metrics-vs-actionable-metrics/
          </a>
          . The original articulation of the vanity versus actionable metrics
          distinction for startup founders; directly applicable to solo creators.
        </p>
        <p>
          Statweestics. &ldquo;The Metrics That Actually Predict Account
          Growth.&rdquo; 2026.{" "}
          <a href="https://statweestics.com/blog/twitter-x-analytics-dashboard-the-metrics-that-actually-predict-account-growth/">
            statweestics.com/blog/...
          </a>
          . Data-driven analysis of X analytics identifying profile-visit-to-follow
          rate as the strongest leading indicator of growth momentum.
        </p>
        <p>
          Welsh, Justin. &ldquo;Metrics that Matter: Going Beyond Followers and
          Likes.&rdquo; 2023.{" "}
          <a href="https://www.justinwelsh.me/newsletter/metrics-that-matter-going-beyond-followers-likes">
            justinwelsh.me/newsletter/metrics-that-matter-going-beyond-followers-likes
          </a>
          . Describes the three-layer creator funnel and the limits of top-of-funnel
          vanity metrics for building a creator business.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk05ReadingSearchBody =
  "vanity metrics signal metrics impressions per follower profile visit to follow rate ab testing posts iteration loop weekly retrospective keep kill double down p-hacking pre-commitment confirmation bias growth loops funnels analytics dashboard experiment design solo creator sample size Week 5 reading X Twitter growth";
