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
      title="Week 5: The 10-user test"
      kicker="LangoBee to $10K MRR: Operating a Solo Language App from Zero Revenue · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers how to recruit 10 real users by hand, run a
          concierge onboarding session with each of them, ask questions that
          produce honest data, and read the resulting tiny cohort without
          fooling yourself. By the end you will be able to write an outreach
          message that does not get ignored, run a 30-minute live onboarding
          session, and interpret a 10-user retention table directionally.
        </p>
        <p>
          <strong>Prerequisites.</strong> Week 3 introduced the
          must-work-checklist and the guided-first-session template. Week 4
          introduced the retention hook and D1 retention as a threshold
          metric. Both are assumed here. If LangoBee&rsquo;s D1 return rate
          is below 30%, the diagnosis in this reading applies directly to
          your situation.
        </p>
      </ReadingFraming>

      {/* ---- SECTION 1 ---- */}
      <AnchorHeading as="h2" id="the-10-user-test">
        1. The 10-user test and why founders skip it
      </AnchorHeading>
      <p>
        Paul Graham&rsquo;s 2013 essay &ldquo;Do Things That Don&rsquo;t
        Scale&rdquo; makes a claim that most founders read, nod at, and then
        ignore: the right way to get your first users is to go get them
        manually, one at a time, by finding people who have the problem and
        asking them to try the product. It is not a workaround for a missing
        growth channel. It is the structure. Founders who wait for organic
        traction are not conserving their energy for scale. They are
        postponing the moment the product meets real humans under real
        conditions. (Graham, 2013)
      </p>
      <p>
        LangoBee&rsquo;s acquisition history makes this concrete. As of June
        2026, 174 people have signed up through direct-attributed paths.
        Every one of them came from the founder posting or DMing in Discord
        communities. Zero came from search, zero from paid ads, zero from
        organic referral. That is not a channel. It is a founder behavior.
        The day the founder stopped posting in Discord, the signups stopped.
      </p>
      <p>
        This is exactly the pattern Graham describes. The 174 people did not
        find LangoBee. The founder found them. That is the correct behavior
        at zero MRR, not a temporary embarrassment to be replaced with a
        growth loop as soon as possible. Understanding this distinction
        matters because it changes what you optimize. If the 174 signups
        feel like a sign that the channel works, the next question is: which
        Discord messages converted best, and how do you repeat them at
        higher volume? If they feel like a workaround, the next question is:
        when can I stop doing this? The second framing is wrong and will
        cause you to stop recruiting before you have enough signal to act on.
      </p>
      <p>
        The passive-traction fallacy is the belief that a product that is
        good enough will eventually accumulate users on its own. It is false
        at this stage for a structural reason: no product meets real humans
        under real conditions until real humans use it under real conditions.
        Waiting for them to arrive means the product never gets the feedback
        that would make it worth arriving for.
      </p>

      {/* ---- SECTION 2 ---- */}
      <AnchorHeading as="h2" id="the-collison-installation">
        2. The Collison installation
      </AnchorHeading>
      <p>
        Graham describes a tactic used by Patrick and John Collison, the
        founders of Stripe, that became one of the most cited examples in
        &ldquo;Do Things That Don&rsquo;t Scale.&rdquo; When a prospect
        agreed to try Stripe, the Collisons did not send a link and wait.
        They said &ldquo;can you open your laptop?&rdquo; and integrated
        Stripe for the user on the spot, in that conversation. Graham named
        this the Collison installation. (Graham, 2013)
      </p>
      <p>
        The principle is simple. When someone agrees to try your product,
        do not give them homework. Do it with them, immediately, while they
        are present and motivated. The moment they close the tab to handle
        something else, the window is gone. Most early-stage products lose
        50 to 80 percent of interested users in the gap between &ldquo;I
        will check it out&rdquo; and actually checking it out.
      </p>
      <p>
        For LangoBee, the Collison installation has a specific shape. The
        gap is between &ldquo;I DMed them a link&rdquo; and &ldquo;I stayed
        on a voice or video call while they opened the app, completed the
        language setup, and read through their first three shorts.&rdquo;
        That gap is the difference between a signup and an activated user.
      </p>
      <p>
        LangoBee&rsquo;s founder diagnosis is accurate: the May cohort was
        handed a debugging task. Onboarding had a broken first-session flow
        and users who arrived at the product alone encountered friction that
        the founder could have walked them past in 90 seconds. The Collison
        installation closes that gap. It is not a shortcut to avoid fixing
        the product. It is a technique that generates the observation needed
        to know what to fix. You cannot learn what breaks unless someone
        breaks it in front of you.
      </p>

      {/* ---- SECTION 3 ---- */}
      <AnchorHeading as="h2" id="recruiting-from-discord">
        3. Recruiting from Discord: give before you ask
      </AnchorHeading>
      <p>
        The only acquisition channel with a proven track record for LangoBee
        is comprehensible-input communities, primarily the Refold
        Espa&ntilde;ol Discord server and similar language-learning
        communities organized around input-first methodology. This is not an
        accident. These communities are populated by people who are already
        practicing the behavior LangoBee is built around: consuming native
        content in the target language to acquire vocabulary through
        repeated exposure. The problem-solution fit is close enough that
        members recognize it.
      </p>
      <p>
        Community norms in these servers are strict about promotional
        content. A post that opens with a product pitch or a sign-up link
        gets ignored at best, removed at worst. The people who moderate
        these servers built them around a methodology, not around tools.
        They protect the signal-to-noise ratio aggressively.
      </p>
      <p>
        The tactic that works is the same one that works in every
        high-trust community: give value before you ask for anything.
        Concrete forms of giving value in a comprehensible-input server:
        share a data point about word-frequency distribution in the content
        catalog (&ldquo;the top 500 lemmas cover 72% of token occurrences
        in this set of Spanish YouTube shorts&rdquo;), answer a question
        about acquisition speed at different Zipf-score thresholds, post a
        finding about which content genres have the highest density of
        high-frequency vocabulary. These are things the community finds
        useful independent of whether LangoBee exists. The product
        mention, if it belongs at all, is the last sentence: &ldquo;this
        is data I pulled from the catalog in LangoBee, which you can try
        here.&rdquo;
      </p>
      <p>
        Eric Migicovsky&rsquo;s &ldquo;How to Talk to Users&rdquo; makes a
        point that applies directly to recruiting: the goal is to find people
        who have the problem you are solving, not just anyone willing to talk.
        (Migicovsky, 2019) A server full of English speakers learning Spanish
        through comprehensible input is a concentrated pool of people with
        the exact problem. The challenge is earning the right to ask them to
        try your solution.
      </p>

      {/* ---- CALLOUT ---- */}
      <Callout title="Why 10-15 users, not 100?">
        <p>
          Jakob Nielsen&rsquo;s research on usability testing found that five
          users uncover approximately 85 percent of usability problems. Adding
          more users past that point finds diminishing numbers of new issues
          while the cost of sessions rises linearly. (Nielsen, 2000)
        </p>
        <p>
          For a retention study rather than a usability test, the logic is
          slightly different. Ten to fifteen users give you directional signal
          without the statistical noise of a larger sample obscuring the
          pattern. At n=12, one user returning or not changes your D1 rate
          by 8 percentage points. That is too sensitive for statistical
          inference. It is not too sensitive for a pattern read. Are the
          users who returned doing the same thing? Are they from the same
          community? Do they have the same level?
        </p>
        <p>
          The goal at this stage is not statistical significance. It is a
          pattern clear enough to act on. Ten to fifteen users, observed
          closely, produce that pattern. A hundred users, observed through
          an analytics dashboard alone, produce percentages that feel
          authoritative but hide the story.
        </p>
      </Callout>

      {/* ---- SECTION 4 ---- */}
      <AnchorHeading as="h2" id="concierge-onboarding">
        4. Concierge onboarding: what it looks like in practice
      </AnchorHeading>
      <p>
        Concierge onboarding is the Collison installation applied to the
        full first session. The founder is present, live, while the user
        does the thing the product is supposed to help them do. It has three
        phases.
      </p>
      <p>
        <strong>Phase one: pre-session setup.</strong> Before the call, the
        founder selects a text or a shorts queue at the right difficulty for
        this user&rsquo;s level. For a beginner Spanish learner, that means
        content with a high proportion of known words and a manageable number
        of unknowns per minute. The word popup should be tested and working.
        The guided-first-session template from week 3 is the checklist for
        this phase. If anything on that checklist is broken, fix it before
        the call, not during.
      </p>
      <p>
        <strong>Phase two: live walkthrough.</strong> The founder stays on
        the call while the user opens the app, sets their language, and
        reads through at least two content items. The founder explains the
        word-status coloring (unknown words in one color, learning words in
        another, known words unmarked) without prompting the user to do
        anything specific. The goal is observation, not demonstration. Watch
        where they pause, what they tap, what they skip. Do not explain
        features before the user encounters them. Wait until they encounter
        friction, then address it.
      </p>
      <p>
        <strong>Phase three: post-session interview.</strong> After 15 to 20
        minutes of the product, spend 10 minutes asking Mom Test questions
        (covered in section 6). The user has now had a concrete experience to
        talk about. Abstract questions about hypothetical use produce useless
        answers. Questions about what just happened produce useful ones.
      </p>
      <p>
        What not to do: send a sign-up link and wait. Do not ask &ldquo;what
        do you think?&rdquo; at the end. Do not demo features unprompted
        because you are proud of them. The concierge session is a structured
        observation, not a product demo. The moment it becomes a demo, you
        lose the signal.
      </p>

      {/* ---- SECTION 5 ---- */}
      <AnchorHeading as="h2" id="reading-tiny-cohorts">
        5. Reading tiny cohorts: directional metrics at n=12
      </AnchorHeading>
      <p>
        LangoBee&rsquo;s May cohort data: the May 18 week had 12 activated
        users and 6 returned later, a 50 percent return rate. The May 25
        week had 7 activated and 3 returned, a 43 percent return rate. The
        overall return rate across both weeks is approximately 24 percent.
      </p>
      <p>
        What does D1 return rate of 50 percent mean at a sample size of 12?
        It means six users came back. Seven users returning would be 58
        percent. Five returning would be 42 percent. A single user&rsquo;s
        decision shifts the number by 8 percentage points. This is not a
        defect in the data. It is the nature of small samples. Do not read
        the percentage as if it were precise.
      </p>
      <p>
        What to read instead: the pattern. Do the users who returned share
        something? LangoBee has two stickiest users in the real-user cohort
        as of June 2026. One returns consistently for shorts and has 7 active
        days. One returns for long-form video. Those two users represent the
        beginning of a content-type segmentation. They are not a coincidence
        and they are not a sample size problem. They are a signal that the
        product has two distinct use cases and that the retention profile
        may differ between them.
      </p>
      <p>
        Rahul Vohra&rsquo;s account of how Superhuman found product-market
        fit is useful here. Vohra describes running the &ldquo;very
        disappointed&rdquo; PMF survey at sample sizes of 20 to 30 and
        finding a pattern: the users who would be very disappointed clustered
        around a specific use case (fast email for power users) and had
        specific reasons for loving it. The insight was not derived from the
        percentage. It was derived from what those users said. (Vohra, 2018)
        At n=12, the same principle applies. Look for the cluster, not the
        average.
      </p>
      <p>
        The median activated LangoBee user has 1 active day and approximately
        2 minutes of total session time. That is a signal too. It says that
        activation is happening (the user opens the app and tries the
        content) but the experience is not yet long enough to form a habit.
        The retention hook from week 4 is built to address this. But the
        habit cannot form if the session ends in 2 minutes because the user
        ran into a bug or did not understand what to do next. Concierge
        onboarding is what gets the session past 10 minutes so the retention
        hook has something to work with.
      </p>

      {/* ---- SECTION 6 ---- */}
      <AnchorHeading as="h2" id="the-mom-test">
        6. The Mom Test: asking without contaminating
      </AnchorHeading>
      <p>
        Rob Fitzpatrick&rsquo;s <em>The Mom Test</em> is a short book with
        one core claim: most founder-user conversations produce useless data
        because the questions are wrong. The fix is three rules. (Fitzpatrick,
        2013)
      </p>
      <p>
        <strong>Rule one: talk about their life, not your idea.</strong> The
        conversation should be about the user&rsquo;s experience learning the
        language, not about your feature set. If you spend half the interview
        explaining what LangoBee does, you are not interviewing the user.
        You are pitching them. A pitch produces compliments, not data.
      </p>
      <p>
        <strong>Rule two: ask about specifics in the past, not opinions
        about the future.</strong> &ldquo;Would you use this?&rdquo; is a
        question about a hypothetical future. It produces hypothetical
        answers. &ldquo;How did you practice vocabulary last week?&rdquo;
        is a question about actual past behavior. It produces actual data.
        Past behavior predicts future behavior. Stated intentions do not.
      </p>
      <p>
        <strong>Rule three: talk less, listen more.</strong> If you are
        filling silence, you are coaching the answers. Silence is where the
        honest observations live. Let it sit.
      </p>
      <p>
        The three bad-data patterns Fitzpatrick names:
      </p>
      <ul>
        <li>
          <strong>Compliments.</strong> &ldquo;That sounds great!&rdquo;
          &ldquo;I love what you&rsquo;re building.&rdquo; These tell you
          nothing about whether the user will change their behavior. People
          are polite. Politeness is not a purchase signal.
        </li>
        <li>
          <strong>Hypothetical fluff.</strong> &ldquo;I would probably use
          that.&rdquo; &ldquo;I could see myself doing that.&rdquo; These
          are not commitments. They are social responses to a perceived
          request for encouragement. They do not predict usage.
        </li>
        <li>
          <strong>Wishlists.</strong> &ldquo;It would be cool if it had a
          streak counter.&rdquo; &ldquo;You should add a spaced repetition
          mode.&rdquo; Feature requests from non-paying users are infinite
          and cheap. They are not validated needs. A user who says &ldquo;I
          would pay for it if it had X&rdquo; is not a paying user. A user
          who pays is a paying user.
        </li>
      </ul>
      <p>
        Five Mom Test-compliant questions for a LangoBee concierge session:
      </p>
      <ol>
        <li>
          &ldquo;Walk me through how you practiced Spanish in the last week.
          What did you actually do?&rdquo; (Past behavior, open.)
        </li>
        <li>
          &ldquo;The last time you tried to watch a Spanish video and gave
          up, what happened?&rdquo; (Specific past failure, reveals
          friction.)
        </li>
        <li>
          &ldquo;What do you do when you hit a word you don&rsquo;t know
          while reading?&rdquo; (Current workaround, reveals competing
          behavior.)
        </li>
        <li>
          &ldquo;How long do you usually spend on language practice in a
          sitting before you stop?&rdquo; (Session length benchmark,
          baseline for retention hook.)
        </li>
        <li>
          &ldquo;Tell me about the last time you felt like you made real
          progress. What were you doing?&rdquo; (Positive experience
          anchor, reveals what the product needs to replicate.)
        </li>
      </ol>

      {/* ---- SECTION 7 ---- */}
      <AnchorHeading as="h2" id="two-unprompted-praise">
        7. The two-unprompted-praise bar
      </AnchorHeading>
      <p>
        Qualitative evidence from a user session is valid only when it
        arrives without prompting. A user who says &ldquo;I really like the
        word popup&rdquo; after you demonstrated the word popup and said
        &ldquo;notice how the popup works&rdquo; is reporting your demo back
        to you. That is not a signal about their experience. It is a signal
        about your persuasion.
      </p>
      <p>
        The bar for a positive qualitative signal in a concierge session is
        two pieces of unprompted, specific praise in the same session. One
        is not enough because one can be politeness. Two specific unprompted
        observations about the same aspect of the product are harder to
        explain as social courtesy.
      </p>
      <p>
        How to track this in practice: take verbatim notes during the
        session. Do not paraphrase. After the session, go through your notes
        and mark each positive comment with a P. Then mark whether it was
        prompted (you showed or mentioned the feature) or unprompted (the
        user noticed it without being directed to it). Count only the
        unprompted Ps toward your qualitative signal.
      </p>
      <p>
        Gustaf Alstromer, speaking at Y Combinator Startup School in 2022,
        described the confirmation bias problem directly: founders hear what
        they want to hear in user interviews, and the structure of most
        interviews makes this easy because the founder controls the
        questions, the framing, and the pace. (Alstromer, 2022) The
        unprompted rule is a mechanical guard against this. It does not
        require the founder to be objective. It requires the user to
        volunteer the observation.
      </p>
      <p>
        The inverse also applies. Unprompted negative observations
        (complaints, confusion moments, abandonment of a feature mid-use)
        are extremely high-signal. A user who says &ldquo;wait, what is
        this color supposed to mean?&rdquo; without being asked is giving
        you more useful information than ten users who answered &ldquo;did
        you understand the color coding?&rdquo; with &ldquo;yeah, I think
        so.&rdquo;
      </p>

      {/* ---- SECTION 8 ---- */}
      <AnchorHeading as="h2" id="segmenting-by-content-type">
        8. Segmenting stickiness by content type
      </AnchorHeading>
      <p>
        LangoBee has three content surfaces: shorts (vertical-scroll short
        video clips), long-form video (YouTube-style content read with the
        reader), and text articles. The two stickiest real users in the June
        2026 cohort split directly along content-type lines. One has 7
        active days and returns for shorts. One returns for long-form video.
        No sticky user has been identified who primarily uses text articles.
      </p>
      <p>
        This matters because the three surfaces are different products from
        a retention-habit perspective. Shorts deliver a 30 to 90 second
        loop: tap, read, status update, next clip. The loop is tight and
        repeatable. It resembles the TikTok engagement loop more than it
        resembles a reading session. Long-form video delivers a 10 to 30
        minute session: deeper vocabulary acquisition per session but a
        higher activation cost (you have to choose a video and commit to it).
      </p>
      <p>
        If one content type drives all the retention and the other two drive
        none, building more features for the zero-retention surfaces is
        expensive and misdirected. Before making that call, the data needs
        to be segmented.
      </p>
      <p>
        How to run the segmentation in PostHog: filter
        <code>reading_events</code> by content type (shorts vs. long-form
        video vs. article), then plot the D1 retention curve for each
        sub-cohort separately. If the shorts sub-cohort returns at 40
        percent and the long-form sub-cohort returns at 35 percent and the
        article sub-cohort returns at 5 percent, you have a finding: shorts
        and long-form video are the product and articles are not.
      </p>
      <p>
        What to do with the finding in the next recruiting cycle: label the
        content-type intent of each recruit before the session. Deliberately
        recruit 5 users who say they prefer short-form content and 5 who say
        they prefer longer videos. Run the concierge session with each group
        using the appropriate content type as the first-session material.
        The segmented cohort will give you a retention signal you can trust
        more than an unsegmented one, because the two groups have different
        habits and should not be averaged together.
      </p>

      {/* ---- EXERCISES ---- */}
      <AnchorHeading as="h2" id="exercises">Exercises</AnchorHeading>
      <p>
        Complete these before or during section. Each is answerable from this
        reading alone.
      </p>

      <Exercise n={1}>
        <p>
          Write the three rules of the Mom Test from memory. Then write one
          example of a bad question and its Mom Test replacement for a
          language-learning app context. The bad question should fall into
          one of Fitzpatrick&rsquo;s three bad-data patterns. Label which
          pattern it represents.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          LangoBee&rsquo;s May 18 cohort: 12 activated, 6 returned. Calculate
          the D1 return rate as a percentage. Does it meet the week 4
          threshold of 30 percent? What is the minimum number of users who
          would need to return from a fresh 10-user cohort to meet the 30
          percent bar? Show your arithmetic.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Paul Graham lists several unscalable tactics in &ldquo;Do Things
          That Don&rsquo;t Scale.&rdquo; Name at least three from memory.
          Which one does concierge onboarding map to most directly? Write one
          sentence explaining why.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Your 10-user cohort: 3 users return. Two returned on day 1 after
          using shorts. One returned on day 3 after a long-form video
          session. Write the two-sentence content-type segmentation finding
          in plain language. Then write the follow-up recruiting instruction:
          how would you split the next cohort of 10 users?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          A user says &ldquo;I really liked how fast the videos load.&rdquo;
          Apply the Mom Test: is this signal, noise, or neither? Did you
          prompt this comment or did it arrive unprompted? Write the
          follow-up question you would ask next to determine whether this
          observation reflects a genuine pain point the user had with
          previous tools.
        </p>
      </Exercise>

      {/* ---- GOING DEEPER ---- */}
      <AnchorHeading as="h2" id="going-deeper">Going deeper (optional)</AnchorHeading>
      <p>
        The following resources go further on the concepts introduced this
        week and are useful if you want a second perspective or a more
        extended treatment before the section session.
      </p>
      <ul>
        <li>
          <strong>Section worksheet this week:</strong> the outreach script
          and interview guide. These are the templates you will use to
          recruit your 10 users and run the post-session interview. Complete
          the outreach script before Monday.
        </li>
        <li>
          <strong>Lecture 2 slides:</strong> reading tiny cohorts. These
          cover the content-type segmentation technique and the directional
          vs. definitive distinction in more depth, with worked examples from
          the LangoBee cohort data.
        </li>
        <li>
          <strong>Refold Espa&ntilde;ol Discord:</strong>{" "}
          <a href="https://discord.com/servers/refold-espanol-es-667734565309382657">
            discord.com/servers/refold-espanol-es-667734565309382657
          </a>
          . The primary recruiting community. Participate before you post a
          pitch. Read the pinned methodology posts, answer at least one
          question in the community, then make your ask.
        </li>
      </ul>

      <Takeaways>
        <li>
          Manual recruiting is not a workaround for a missing growth channel.
          It is the channel at this stage. All 174 LangoBee signups came from
          the founder recruiting by hand, and the moment the founder stopped,
          the channel stopped. That is the structure, not a limitation.
        </li>
        <li>
          The Collison installation means staying on the call while the user
          does the thing, not sending a link and waiting. The gap between
          those two behaviors is the gap between a signup and an activated
          user. Concierge onboarding is the structured version of this for
          a full first session.
        </li>
        <li>
          D1 retention at n=10-15 is directional, not definitive. Read the
          pattern (which users returned, doing what, from which community)
          rather than the percentage. One user&rsquo;s decision moves the
          number by 8 to 10 points at this sample size.
        </li>
        <li>
          Mom Test questions ask about past behavior and actual life. They do
          not ask for opinions about the product. Compliments, hypothetical
          fluff, and wishlists arrive in response to bad questions and are not
          data. Only unprompted, specific observations count as qualitative
          signal.
        </li>
        <li>
          Segment stickiness by content type from the first cohort. If one
          surface drives all the retention, building more of the other
          surfaces is misdirected. Recruit the next cohort with a
          content-type label so the segmentation is deliberate.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Alstromer, G. (2022). How to talk to users (Startup School 2022). Y Combinator.{" "}
          <a href="https://www.youtube.com/watch?v=z1iF1c8w5Lg">
            youtube.com/watch?v=z1iF1c8w5Lg
          </a>
        </p>
        <p>
          Fitzpatrick, R. (2013). The Mom Test. Self-published.{" "}
          <a href="https://www.momtestbook.com/">momtestbook.com</a>
        </p>
        <p>
          Graham, P. (2013). Do things that don&rsquo;t scale.{" "}
          <a href="https://www.paulgraham.com/ds.html">paulgraham.com/ds.html</a>
        </p>
        <p>
          Migicovsky, E. (2019). How to talk to users. Y Combinator.{" "}
          <a href="https://www.youtube.com/watch?v=MT4Ig2uqjTc">
            youtube.com/watch?v=MT4Ig2uqjTc
          </a>
        </p>
        <p>
          Nielsen, J. (2000). Why you only need to test with 5 users. Nielsen Norman Group.{" "}
          <a href="https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/">
            nngroup.com/articles/why-you-only-need-to-test-with-5-users/
          </a>
        </p>
        <p>
          Vohra, R. (2018). How Superhuman built an engine to find product/market fit. First Round Review.{" "}
          <a href="https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/">
            review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/
          </a>
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk05ReadingSearchBody =
  "10-user test manual recruiting concierge onboarding Collison installation Mom Test qualitative interviews Discord recruiting comprehensible input Refold Espanol D1 retention tiny cohorts directional metrics content type segmentation shorts long-form video stickiness unprompted praise confirmation bias Paul Graham do things that don't scale Rob Fitzpatrick The Mom Test Jakob Nielsen usability testing Superhuman product market fit PMF survey week 5 LangoBee";
