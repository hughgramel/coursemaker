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

export function Wk03Reading() {
  return (
    <ReadingPage
      id="wk03"
      title="Week 3: the X algorithm and the reply game"
      kicker="Grow on X: From Zero to 10,000 Followers · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers how the X recommendation algorithm works, what
          signals it weighs, and how to use the reply game as the primary
          growth lever at zero followers. By the end you will be able to
          describe the three-stage X For You pipeline and the relative weights
          of replies, retweets, and likes; run a 10-reply sprint to target
          accounts 10-100x your size and track profile clicks the next day; and
          decide for any given account whether replying or DMing is the
          higher-leverage move, with the signal weights as justification.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Hook economics (what makes a
          first line earn the click), single-post anatomy, thread structure, and
          profile conversion (bio as a landing page). All four were introduced in
          weeks 1 and 2. This reading builds on them by explaining the
          distribution layer that sits beneath your content.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-the-pipeline">
        1. The three-stage recommendation pipeline
      </AnchorHeading>
      <p>
        X publishes roughly 500 million posts per day. When you open the For You
        tab, the platform does not show you a random sample. It runs a three-stage
        pipeline to select, score, and rank a small set of candidates before
        anything reaches your screen (X Engineering 2023).
      </p>
      <p>
        The first stage is <strong>candidate sourcing</strong>. The system pulls
        roughly 1,500 posts from the full corpus for each user. These candidates
        come from two pools: posts by accounts you follow, and posts by accounts
        you do not. About half of any For You feed comes from unfollowed accounts
        (Hurler 2023). Getting into the candidate pool at all requires meeting a
        minimum engagement threshold in the minutes after posting. A post with
        zero early signals may never enter the pool.
      </p>
      <p>
        The second stage is the <strong>light ranker</strong>. It applies fast,
        inexpensive filters to the 1,500 candidates: duplicate detection, spam
        removal, and rough relevance scoring. Posts that fail here are dropped
        without ever reaching the expensive stage.
      </p>
      <p>
        The third stage is the <strong>heavy ranker</strong>: a neural network
        that assigns engagement probability labels to each remaining candidate
        (X Engineering 2023). The heavy ranker considers both{" "}
        <strong>explicit signals</strong> (likes, replies, reposts) and{" "}
        <strong>implicit signals</strong> (profile clicks, tweet clicks, dwell
        time). Its output determines the order of posts in your For You feed.
      </p>

      <Mermaid
        alt="The three-stage X recommendation pipeline from 500M daily posts to the For You feed"
        chart={`flowchart TD
  A["500M daily posts"] --> B["Candidate sourcing\\n~1,500 per user"]
  B --> C["Light ranker\\nfast filters"]
  C --> D["Heavy ranker\\nneural network"]
  D --> E["For You feed"]`}
      />

      <p>
        The pipeline matters for creators because most posts never reach the
        heavy ranker. The sourcing stage is the gate. A post with no early
        engagement does not fail at ranking: it fails before ranking begins.
        This is why the first 30 minutes after publishing determine total reach.
      </p>

      <AnchorHeading as="h2" id="2-signal-weights">
        2. Signal weights: what the algorithm actually rewards
      </AnchorHeading>
      <p>
        Not all engagement signals carry equal weight. Hashmeta (2025) published
        a breakdown of the relative weights the algorithm applies to explicit
        engagement signals, derived from the open-sourced algorithm code:
      </p>
      <pre>{`Retweet:     20x baseline
Quote tweet: 15x baseline
Reply:       13.5x baseline
Like:        1x baseline (floor)`}</pre>
      <p>
        One retweet is algorithmically equivalent to 20 likes. One reply is
        worth 13.5 likes. These numbers have a direct practical implication: a
        post that earns 5 replies and 2 retweets (&ldquo;5 &times; 13.5 + 2
        &times; 20 = 107.5 units&rdquo;) outperforms a post with 100 likes
        (&ldquo;100 units&rdquo;) by a factor of roughly 1.07. The post with
        fewer total interactions but higher-weight signals wins.
      </p>
      <p>
        Implicit signals add another layer. The heavy ranker tracks profile
        clicks (did the reader find you interesting enough to investigate
        further?), tweet clicks and &ldquo;show more&rdquo; presses (did the
        reader want more?), and dwell time (did the reader stop and read, or
        scroll past?). These signals cannot be purchased or gamed at scale.
        They reflect genuine reader behavior. A post that generates dwell time
        builds a quality score that persists in the algorithm&rsquo;s model of
        your account.
      </p>
      <p>
        Two signal types actively hurt reach. External links receive a 30-50%
        reach penalty (Hashmeta 2025). Mentions of out-of-network URLs and
        competitor platforms are deboosted further (Hutchinson 2023). X is
        testing an in-app browser specifically to preserve dwell-time signals
        when readers follow links (Hutchinson 2025). The practical response:
        move links to the first reply rather than the post body.
      </p>
      <p>
        Premium accounts also receive a structural advantage: 40-80% initial
        reach to followers in the first algorithmic push, compared to 10-20%
        for free accounts (Hashmeta 2025). For free-tier creators, this makes
        early replies from existing followers especially critical. The first few
        replies from people who already follow you are the seed that triggers
        wider candidate sourcing.
      </p>

      <AnchorHeading as="h2" id="3-engagement-velocity">
        3. Engagement velocity and the first 30 minutes
      </AnchorHeading>
      <p>
        <strong>Engagement velocity</strong> is the rate at which a post
        accumulates high-weight signals immediately after publishing. The
        algorithm uses this velocity to decide how widely to distribute the post
        in subsequent batches. Publish to a small test sample, observe velocity,
        expand or suppress accordingly. The whole cycle runs in under an hour.
      </p>
      <p>
        Timing affects velocity directly because velocity requires an online
        audience. Metricool&rsquo;s 2024 study of 23,561 accounts and 2.1
        million posts found that 9pm on Tuesday and Wednesday showed the highest
        connected-user density. The study also found that posting frequency
        correlates with account size: &ldquo;The higher the posting frequency,
        the larger the account size.&rdquo; These two findings interact. Posting
        frequently at low-traffic times produces less velocity than posting less
        frequently at peak-density windows.
      </p>
      <p>
        Your own behavior in the 30-minute window matters too. Responding to
        replies on your post within the first 30 minutes keeps the thread active
        and signals ongoing conversation quality. A reply from the original
        poster counts as a reply signal on the post, which lifts its score.
        This is one of the few levers you can pull after publishing.
      </p>

      <Callout title="Worked example: scoring two posts">
        <p>
          Post A gets 15 likes and 0 replies in its first 30 minutes. Post B
          gets 2 replies and 1 retweet, and 3 likes. Scoring by weights:
        </p>
        <pre>{`Post A: (15 × 1) = 15 units
Post B: (2 × 13.5) + (1 × 20) + (3 × 1) = 27 + 20 + 3 = 50 units`}</pre>
        <p>
          Post B scores 3.3 times higher despite fewer total interactions. The
          algorithm distributes it to a larger second batch. Post A stalls.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-time-decay">
        4. Time decay and the second wave
      </AnchorHeading>
      <p>
        The heavy ranker applies a time-decay penalty as posts age. Most posts
        peak within two hours and receive negligible distribution after six.
        This is the normal lifecycle. But some posts experience a second wave:
        a resurgence of distribution 12-48 hours after the initial peak.
      </p>
      <p>
        Second waves occur when a post reaches a new node in the network after
        the initial velocity window closes. The most common trigger is a repost
        from a large account that did not see the post in the first wave. Their
        followers have not encountered the post, so to that subnetwork it is
        fresh. The algorithm treats the new engagement as a fresh signal and
        re-enters the post into candidate sourcing for a new audience.
      </p>
      <p>
        Chen (2023) describes the broader pattern: &ldquo;Creator traffic is
        driven by social feed algos, which lends itself to big spikes in traffic
        that appear and then go away.&rdquo; A second wave is the second spike.
        You cannot manufacture it, but you can write posts that accumulate
        quality scores (dwell time, show-more clicks) during the first wave, so
        that when a second-wave trigger arrives, the algorithm has reason to
        distribute the post again.
      </p>

      <AnchorHeading as="h2" id="5-distribution-problem">
        5. The distribution problem at zero followers
      </AnchorHeading>
      <p>
        Understanding the pipeline makes the new creator&rsquo;s problem precise.
        At zero followers, a published post reaches the initial test sample,
        finds near-zero engagement (there is no existing audience to seed it),
        fails the velocity check, and stalls in candidate sourcing. The cycle
        reinforces itself: low distribution, low engagement, lower distribution
        still.
      </p>
      <p>
        Posting more frequently does not solve this. Posting better content does
        not solve it either, at least not immediately, because better content
        still needs a seed audience to generate velocity. The standard levers
        (hooks, format, timing) are necessary but not sufficient when the
        audience base is zero.
      </p>
      <p>
        The only format that escapes this constraint is the reply. When you
        reply to a post by a large account, your reply appears below theirs in
        the thread. Readers of the original post, who came because of that
        account&rsquo;s distribution, see your name and handle. A reply with
        genuine value earns profile clicks from an audience that never
        encountered you through the algorithm. You borrowed their distribution.
      </p>

      <AnchorHeading as="h2" id="6-borrowed-distribution">
        6. Borrowed distribution and the reply-to-follow funnel
      </AnchorHeading>
      <p>
        <strong>Borrowed distribution</strong> is the practice of using another
        account&rsquo;s existing reach as the stage for your own content. The
        reply is the primary vehicle. A well-placed reply on a post by an
        account with 25,000 followers exposes your name to thousands of readers
        who are already engaged in that thread. The distribution difference
        between a cold post (reaching 0-20 people at zero followers) and a reply
        on a thread with active readers (reaching thousands) is 2-3 orders of
        magnitude.
      </p>
      <p>
        The funnel from reply to follow has four steps. First, you post a reply
        that adds specific value. Second, a reader in the thread finds it
        interesting and clicks your profile. Third, your bio converts the profile
        click into a follow. Fourth, the follow raises your baseline reach on the
        next post, slightly improving your velocity for organic distribution.
      </p>

      <Mermaid
        alt="The reply-to-follow funnel: from reply in a thread to profile click to follow to improved reach"
        chart={`flowchart LR
  A["Substantive reply\\nin target's thread"] --> B["Reader clicks\\nyour profile"]
  B --> C["Bio converts\\nclick to follow"]
  C --> D["Follow raises\\nbaseline reach"]`}
      />

      <p>
        Each step in this funnel depends on earlier course material. The reply
        must add enough value that a reader acts (hook economics, single-post
        anatomy). The profile click must convert (bio craft, profile conversion
        from week 1). The funnel is not new mechanics: it is the combination
        of mechanics already introduced, applied in the context of borrowed
        distribution rather than cold posting.
      </p>

      <AnchorHeading as="h2" id="7-do-things-that-dont-scale">
        7. Do things that don&rsquo;t scale
      </AnchorHeading>
      <p>
        Paul Graham&rsquo;s 2013 essay &ldquo;Do Things that Don&rsquo;t
        Scale&rdquo; was written about startups, but the central argument
        applies directly to creator growth. Graham writes: &ldquo;The most
        common unscalable thing founders have to do at the start is to recruit
        users manually.&rdquo; The startup equivalent of manually finding target
        posts and writing specific replies is exactly that: manual user
        recruitment, one conversation at a time.
      </p>
      <p>
        The reason manual outreach works is the reason it feels inefficient:
        it cannot be automated or faked at volume. A generic reply bot produces
        generic replies that earn zero profile clicks. A manually written,
        specific reply to a specific post by a specific person in your niche
        earns attention precisely because it is not a bot. The effort is the
        signal.
      </p>
      <p>
        Graham&rsquo;s essay describes early-stage Facebook: the platform
        launched at Harvard only, not because Harvard was the target market, but
        because intensity within a small defined community produces word-of-mouth
        that a diluted broad launch never does. The first 500 followers of any
        creator grow the same way: one reply, one DM, one specific conversation.
        That base then compounds through the algorithm.
      </p>
      <p>
        The practical implication: plan for the reply game to require more time
        per new follower than posting cold. That is not a flaw. It is the
        correct sequencing. Manual effort in weeks 1-6 buys organic reach in
        weeks 7-12, when the account has enough followers to seed velocity on
        its own.
      </p>

      <AnchorHeading as="h2" id="8-targets-and-patterns">
        8. Choosing targets and writing replies that work
      </AnchorHeading>
      <p>
        Target accounts 10 to 100 times your current follower count, in the
        same niche. The 10x-100x range is not arbitrary. Accounts 10x your size
        have active comment sections where your reply is visible, but small
        enough that the original poster occasionally responds. Accounts 100x or
        more produce threads with hundreds of replies; your contribution
        disappears in the noise, and the original poster almost never engages
        with new voices.
      </p>
      <p>
        Good target accounts post at least three times per week (giving you
        regular opportunities), have active reply sections (evidence that their
        audience engages in threads), and address the same reader you are
        building for (their followers are your potential followers). Remove
        accounts that never respond to comments or that post only viral memes
        with audiences too broad to convert into your niche followers.
      </p>
      <p>
        Three reply patterns generate profile clicks. The first is the{" "}
        <strong>specific addition</strong>: cite a number, name, or example the
        original post did not include. The second is the{" "}
        <strong>complication</strong>: name one condition under which the claim
        does not hold. The third is the <strong>direct answer</strong>: if the
        post asks or implies a question, answer it briefly and specifically.
      </p>
      <p>
        Three patterns generate nothing: generic agreement (&ldquo;great
        point!&rdquo; or any variant), self-promotion (putting your own link or
        content in the reply body), and content-free questions (&ldquo;have you
        considered X?&rdquo; where X requires the other person to do work).
        None of these give the reader a reason to click your name.
      </p>
      <p>
        Length: 2-4 sentences. Long enough to show substance; short enough to
        read in a thread without clicking &ldquo;show more.&rdquo; A reply is
        not a mini-essay. It is a specific thing said clearly to a specific
        person, overheard by their audience.
      </p>

      <AnchorHeading as="h2" id="9-dms">
        9. DMs and follow-firsts
      </AnchorHeading>
      <p>
        A DM is the right move when a public reply cannot carry the weight of
        what you want to say, when you have something genuinely personal and
        specific to share, or when you want to start a relationship rather than
        just earn a profile click. The test is simple: could this message have
        been sent to any account in the niche, or does it require knowing
        something specific about this person&rsquo;s recent work?
      </p>
      <p>
        A DM that earns a response has three elements: a specific observation
        about their recent content (not their account in general), one sentence
        connecting it to your own work or thinking (showing you are a peer, not
        a supplicant), and no ask. No follow-back request. No link to your
        content. No collaboration pitch. The message ends when you have said
        the specific thing. One or two sentences is enough.
      </p>
      <p>
        Following an account before replying or DMing costs nothing and frames
        the interaction. The account receives the follow notification and may
        check your profile before you ever write a word. A profile they see
        before your reply is a warmer context for the reply when it arrives.
        The sequence: follow first, reply within 24 hours, DM within 48 if
        you have something specific to say. That order reads as organic to the
        account and to anyone watching the thread.
      </p>

      <AnchorHeading as="h2" id="10-reply-or-dm">
        10. Evaluating the higher-leverage move: reply versus DM
      </AnchorHeading>
      <p>
        For any given account, one question determines whether reply or DM is
        the better first move: is the value you can add better delivered
        publicly or privately?
      </p>
      <p>
        A public reply earns profile clicks from the thread audience. That
        audience is already warm (they chose to be in this conversation) and
        already in your niche. If your reply is substantive, every reader who
        sees it is a potential follower. The reach is broad and immediate. The
        downside: public replies on large accounts disappear in thread noise if
        the account has hundreds of replies. At signal weights, the reply still
        counts toward the algorithm regardless of how many humans read it.
      </p>
      <p>
        A DM reaches one person. If that person is an account whose amplification
        would be valuable (a repost from them carries 20x weight), one
        well-placed DM that starts a real relationship may produce more long-term
        reach than 50 public replies. The trade-off: DMs are zero-sum for
        immediate profile clicks, but high-value for relationship quality.
      </p>
      <p>
        The practical decision rule: use a public reply when the thread audience
        is your target audience and when your reply adds something all of them
        would benefit from seeing. Use a DM when the value you want to deliver
        is personal, specific, and would be weakened by being public. At the
        start, most interactions should be public replies: they build the
        algorithm signal and the profile-click funnel simultaneously.
      </p>

      <AnchorHeading as="h2" id="11-worked-example">
        11. A worked example: running a reply sprint
      </AnchorHeading>
      <p>
        The section worksheet asks you to run a reply sprint. Here is a
        concrete walk-through of the mechanics.
      </p>
      <p>
        Suppose your niche is personal finance for recent college graduates and
        you have 150 followers. You identify 10 target accounts with 2,000 to
        15,000 followers who post about budgeting, student loans, or investing
        for beginners. You turn on X notifications for each and set a daily
        reminder to check their profiles each morning.
      </p>
      <p>
        At 7am, one of your targets posts: &ldquo;The 50/30/20 budget rule is
        outdated. Fight me.&rdquo; You reply within 45 minutes: &ldquo;The
        50/30/20 was developed by Elizabeth Warren in 2005, when housing costs
        were 28% of median income. In 2024 they&rsquo;re over 40% in most metro
        areas. The math assumes a rent burden that no longer exists for most
        people under 35. The rule isn&rsquo;t wrong, it just dates from a
        different cost structure.&rdquo;
      </p>
      <p>
        That reply: cites a specific person (Warren), a specific date (2005), a
        specific number (28% vs 40%), and a specific population (under 35). It
        complicates the original claim without dismissing it. Anyone interested
        in personal finance who reads the thread sees a name who knows the
        numbers. Some of them click your profile.
      </p>
      <p>
        The next day you check X Analytics. Profile visits went from a baseline
        of 12/day to 31/day. One specific reply on one active thread moved the
        leading indicator. You do the same thing nine more times that week.
      </p>

      <AnchorHeading as="h2" id="12-exercises">12. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          A post gets 20 likes and 0 replies in its first 30 minutes. A second
          post gets 2 replies and 1 retweet, plus 4 likes. Using the Hashmeta
          (2025) weights (retweets 20x, replies 13.5x, likes 1x), calculate the
          weighted score for each post. Which one will the algorithm distribute
          more widely? Show the arithmetic.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Find a post published within the last two hours by an account with
          10,000 to 50,000 followers in your niche. Write two replies: one
          sycophantic (&ldquo;great point!&rdquo; or equivalent) and one
          substantive (specific addition, complication, or direct answer). Write
          one paragraph explaining what makes the second reply likely to generate
          a profile click and the first unlikely to do so.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          List 10 accounts in your niche with 10,000 to 200,000 followers.
          For each one, note: follower count, posting frequency, and whether
          their comment sections are active. Mark which five you would target
          first and why.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Apply the reply-vs-DM decision rule to two accounts on your target
          list. For each one, state which move is higher leverage and justify
          your answer using at least one signal weight from the reading. Your
          justification should differ between the two accounts.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Read Graham (2013). Identify one specific example from the essay that
          maps directly onto creator growth strategy (not startup user
          acquisition). Write 3-4 sentences explaining the mapping.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="13-going-deeper">13. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The reply sprint worksheet asks
          you to execute 10 replies across target accounts, DM 5 of them, and
          track profile clicks. Bring your debrief to section.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the algorithm pipeline
          and signal weights with worked examples and discussion of the
          Premium-vs-free reach asymmetry.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers the reply game in
          depth: target selection, reply patterns, DM structure, and the
          Paul Graham framing.
        </li>
        <li>
          <strong>HW2 (twenty posts):</strong> due this week. The reply sprint
          counts toward your practice volume.
        </li>
        <li>
          <strong>Optional video: Paul Graham, &ldquo;What does it mean to do
          things that don&rsquo;t scale?&rdquo;</strong> (Y Combinator, ~5 min){" "}
          at{" "}
          <a href="https://www.youtube.com/watch?v=5-TgqZ8nado">
            youtube.com (5 min)
          </a>
          . Graham talks through the principle in his own words.
        </li>
        <li>
          <strong>Optional video: Kallaway, &ldquo;How I Grew From 0 to 10,000
          Followers on Twitter/X in 6 Months&rdquo;</strong> (~15 min) at{" "}
          <a href="https://www.youtube.com/watch?v=boveK2V7PpE">
            youtube.com (15 min)
          </a>
          . Practitioner account of the exact growth arc this course covers.
        </li>
        <li>
          <strong>Optional video: Kallaway, &ldquo;How To Grow From 0 to 5,000
          Followers On X/Twitter (FAST)&rdquo;</strong> (~12 min) at{" "}
          <a href="https://www.youtube.com/watch?v=gSgvnr4HtZg">
            youtube.com (12 min)
          </a>
          . Companion video covering the early-stage tactics in this reading.
        </li>
      </ul>

      <Takeaways>
        <li>
          The X For You pipeline has three stages: candidate sourcing
          (1,500 posts from 500M daily), light ranker, and heavy ranker (neural
          network). Most posts are eliminated at sourcing, before any ranking
          occurs.
        </li>
        <li>
          Signal weights from the open-sourced algorithm (Hashmeta 2025):
          retweets 20x, quotes 15x, replies 13.5x, likes 1x. A post with two
          replies and one retweet outscores a post with 100 likes.
        </li>
        <li>
          Engagement velocity in the first 30 minutes determines whether the
          algorithm expands or suppresses distribution. Post at peak-density
          times (9pm Tuesday/Wednesday per Metricool 2024) and respond to your
          own replies within the window.
        </li>
        <li>
          At zero followers, replies to accounts 10x-100x your size are the
          only way to access meaningful distribution without paying for it.
          Borrowed distribution escapes the cold-start constraint that affects
          all other formats.
        </li>
        <li>
          Graham&rsquo;s &ldquo;do things that don&rsquo;t scale&rdquo;
          principle explains exactly why the reply game works: manual, specific
          outreach cannot be automated, so the effort itself signals authenticity.
          The first 500 followers require one-to-one work.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Chen, Andrew. &ldquo;Creator Economy 2.0.&rdquo; 2023.{" "}
          <a href="https://andrewchen.com/creator-economy-20/">
            andrewchen.com/creator-economy-20/
          </a>
          . Analysis of how algorithmic distribution creates spike-and-fade
          traffic patterns for creators; context for understanding second-wave
          dynamics.
        </p>
        <p>
          Graham, Paul. &ldquo;Do Things that Don&rsquo;t Scale.&rdquo; 2013.{" "}
          <a href="https://paulgraham.com/ds.html">paulgraham.com/ds.html</a>.
          Argues that manually recruiting early users is not a temporary workaround
          but the correct early-stage strategy. The foundational text for the
          reply-game framework in this course.
        </p>
        <p>
          Hashmeta. &ldquo;Major Twitter Algorithm Changes in 2025.&rdquo; 2025.{" "}
          <a href="https://hashmeta.com/insights/twitter-algorithm-changes-2025">
            hashmeta.com/insights/twitter-algorithm-changes-2025
          </a>
          . Source for the engagement-signal weights (retweets 20x, quotes 15x,
          replies 13.5x, likes 1x), external-link penalties, and the
          Premium-vs-free initial reach asymmetry.
        </p>
        <p>
          Hurler, Kevin. &ldquo;Twitter&rsquo;s Recommendation Algorithm Is Now
          Open Source.&rdquo; Gizmodo, 2023.{" "}
          <a href="https://gizmodo.com/twitter-algorithm-open-source-github-elon-musk-1850289155">
            gizmodo.com/twitter-algorithm-open-source-github-elon-musk-1850289155
          </a>
          . Reports the 50/50 followed-vs-unfollowed split in the For You feed
          and summarizes the algorithm&rsquo;s multi-feature engagement scoring.
        </p>
        <p>
          Hutchinson, Andrew. &ldquo;X is Limiting the Reach of Some Links and
          Mentions in Posts.&rdquo; Social Media Today, 2023.{" "}
          <a href="https://www.socialmediatoday.com/news/x-limiting-the-reach-some-links-mentions-posts/690980/">
            socialmediatoday.com/news/x-limiting-the-reach&hellip;
          </a>
          . Documents the reach penalty for out-of-network URLs and competitor
          platform mentions.
        </p>
        <p>
          Hutchinson, Andrew. &ldquo;X Is Testing a New Way To Handle Links in
          Posts.&rdquo; Social Media Today, 2025.{" "}
          <a href="https://www.socialmediatoday.com/news/x-is-testing-a-new-way-to-handle-links-in-posts/803176/">
            socialmediatoday.com/news/x-is-testing-a-new-way&hellip;
          </a>
          . Reports X&rsquo;s in-app browser test in October 2025, motivated by
          dwell-time signal preservation.
        </p>
        <p>
          Metricool. &ldquo;2024 X/Twitter Study.&rdquo; 2024.{" "}
          <a href="https://metricool.com/twitter-study/">
            metricool.com/twitter-study/
          </a>
          . Dataset of 23,561 accounts and 2.1 million posts. Source for peak
          posting times (9pm Tuesday/Wednesday) and frequency-size correlation.
        </p>
        <p>
          X Engineering. &ldquo;Source code for the X Recommendation
          Algorithm.&rdquo; GitHub, 2023.{" "}
          <a href="https://github.com/twitter/the-algorithm">
            github.com/twitter/the-algorithm
          </a>
          . Primary source for the three-stage pipeline (candidate sourcing,
          light ranker, heavy ranker) and the distinction between explicit and
          implicit engagement signals.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk03ReadingSearchBody =
  "X recommendation algorithm pipeline candidate sourcing light ranker heavy ranker signal weights retweets replies likes dwell time engagement velocity first 30 minutes time decay second wave borrowed distribution reply game do things that don't scale Paul Graham DMs follow-firsts profile clicks target accounts reply sprint manual outreach external links reach penalty Premium free account Week 3 reading";
