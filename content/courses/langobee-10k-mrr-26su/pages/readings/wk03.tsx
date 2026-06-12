import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk03Reading() {
  return (
    <ReadingPage
      id="wk03"
      title="Week 3: The broken-vacuum bar and the guided first session"
      kicker="LangoBee to $10K MRR · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers two problems that sit between you and retention: product breakage
          that users experience but never report, and an onboarding path so long that most users
          leave before they reach the thing you built for them. By the end you will be able to
          write a must-work checklist, run it against a live product, and design a guided first
          session that reaches the aha moment in under 60 seconds.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> AARRR funnel (week 1), activation rate
          definition (week 1), cohort analysis (week 1), pivot vs iteration (week 2),
          kill thresholds (week 2).
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-the-broken-vacuum">
        1. The broken-vacuum problem
      </AnchorHeading>
      <p>
        In June 2026, LangoBee&rsquo;s founder described the state of the early Discord
        recruiting effort: &ldquo;If your thesis is people will buy a vacuum and you hand them
        a broken one, nobody tells a friend, nobody comes back.&rdquo; The early recruits were
        handed a debugging task, not a product. They encountered captions that failed to render,
        word-tap popups that opened blank, and an onboarding path designed for a founder who
        already knew where everything was. Nobody said so out loud. They just did not return.
      </p>
      <p>
        The broken-vacuum problem is not the same as a bad product. The product can be well
        designed and genuinely valuable while still failing the broken-vacuum test. The test has
        one question: does the core function work, every time, for a new user, without guidance
        from the founder? A product that works for power users but fails for first-timers is
        broken in the only sense that matters for retention. The first visit is the only visit
        that decides whether there is a second visit.
      </p>
      <p>
        Michael Seibel&rsquo;s framing at YC is exactly this: launch something that actually
        works for the narrow first use case. The MVP bar is not polish or delight. It is
        functional completion of the core loop. (Seibel, 2019) For LangoBee, the core loop
        is: watch a short video with captions, tap a word, see a definition. If that loop fails
        on the device the user actually has, the rest of the product does not matter.
      </p>

      <AnchorHeading as="h2" id="2-why-founders-miss-breakage">
        2. Why founders miss breakage
      </AnchorHeading>
      <p>
        LangoBee&rsquo;s June 2026 PostHog data shows 223 rageclicks in 30 days across
        31 monthly active users. That is roughly 7 frustrated interactions per active user per
        month. The founder did not experience most of those. The reason is structural.
      </p>
      <p>
        Dogfooding catches regressions: features that worked before and broke after a deploy.
        It does not catch onboarding breakage, because the founder has not run the onboarding
        as a new user in months. The founder&rsquo;s session starts from saved credentials, a
        device with the PWA already installed, and a mental model of how the product works.
        None of those conditions apply to the first-time user arriving from a Google search on
        an iPhone they have never used with the app.
      </p>
      <p>
        Jakob Nielsen&rsquo;s usability research established that a single 5-user qualitative
        session uncovers approximately 85% of usability problems. (Nielsen, 2000) The implication
        for a solo founder is not that you need a user research team. It is that five observations
        by someone who is not you, on a device that is not yours, will surface nearly everything
        that is broken. Session recordings in PostHog are the asynchronous equivalent: watch five
        sessions from real users, in full, and you will see what they see.
      </p>
      <p>
        The specific observation protocol matters. Open PostHog, filter session recordings by
        rageclick, exclude your own account, and watch five recordings from beginning to end.
        Write down: (a) the URL when the rageclick fires, (b) the element, (c) whether the
        session ends within 10 seconds of the rageclick. If most sessions end shortly after
        the rageclick, the rageclick is the cause of churn, not a symptom.
      </p>

      <AnchorHeading as="h2" id="3-must-work-checklists">
        3. Must-work checklists
      </AnchorHeading>
      <p>
        A must-work checklist is a binary list of the conditions that must be true before you
        invite anyone to your product. Every item is pass or fail. There is no partial credit.
        A single fail means the checklist does not pass, and the product is not ready for new
        users.
      </p>

      <Callout title="The difference between must-work and nice-to-work">
        <p>
          Must-work items are load-bearing: if they fail, the core loop breaks. A caption that
          does not render means no word to tap. A blank popup means no definition. A failed
          signup means no user at all. Nice-to-work items improve the experience but do not
          break it: better word difficulty sorting, smoother scroll animation, a more accurate
          comprehension score.
        </p>
        <p>
          The must-work checklist contains only load-bearing items. If you find yourself
          adding &ldquo;looks good on desktop&rdquo; or &ldquo;dark mode works,&rdquo; you
          have drifted into nice-to-work territory.
        </p>
      </Callout>

      <p>
        Rahul Vohra&rsquo;s account of building Superhuman describes a similar concept applied
        at a later stage. When Superhuman found it had only 22% PMF (below the 40% Ellis
        threshold), the team segmented users by their &ldquo;very disappointed&rdquo; response,
        identified what blocked near-converts from becoming fans, and rebuilt the onboarding to
        remove those barriers. The onboarding rebuild was not about adding features. It was
        about removing friction from the path to the moment users already said they loved.
        (Vohra, 2018) The must-work checklist is the earlier, simpler version of that same
        diagnostic: before you ask what users love, make sure the product works at all.
      </p>
      <p>
        For LangoBee, the checklist must cover five surfaces:
      </p>
      <ul>
        <li>
          <strong>Signup:</strong> completes without error on iPhone Safari PWA and desktop Chrome.
        </li>
        <li>
          <strong>Feed:</strong> loads at least 5 videos within 3 seconds on Wi-Fi; first video
          autoplays or requires at most one tap.
        </li>
        <li>
          <strong>Captions:</strong> render on-screen, are legible, and are correctly segmented
          (words do not bleed together).
        </li>
        <li>
          <strong>Word tap:</strong> popup opens within 500 ms and shows a definition, not a
          loading spinner or blank card. Tapping marks the word as learning and the state
          persists on reload.
        </li>
        <li>
          <strong>Content supply:</strong> scrolling shows at least 10 distinct videos without
          hitting an empty state; watch-next loads a different video after completion.
        </li>
      </ul>
      <p>
        Run the checklist on a real iPhone (not the Simulator) and on a laptop Chrome session.
        File a GitHub issue for every fail or intermittent result before moving to the next item.
        Items in the signup and word-tap rows are ship-blockers: they stop the user from
        experiencing the product at all. Items in the feed, captions, and content rows are
        high priority but not immediate ship-blockers.
      </p>

      <AnchorHeading as="h2" id="4-reading-rageclicks">
        4. Reading rageclicks and session recordings
      </AnchorHeading>
      <p>
        A rageclick is three or more rapid clicks on the same element in quick succession.
        It is almost never a user who misclicked once. It is a user who expected something
        to happen, it did not, and they tried again. The rageclick is the moment frustration
        exceeds tolerance. Sessions that end shortly after a rageclick confirm the element
        caused the exit.
      </p>
      <p>
        LangoBee&rsquo;s 223 rageclicks in 30 days represent a meaningful signal at the current
        scale of 31 monthly active users. The ratio is roughly 7 per user per month. For
        comparison, a product with a well-functioning core loop typically generates fewer than
        1 rageclick per user per month. The delta is not a quirk of measurement; it points to
        specific elements that are failing to respond as users expect.
      </p>
      <p>
        The diagnostic protocol is not statistical. You are not averaging rageclick rates or
        running significance tests. You are watching recordings to understand what specific
        element the user expected to behave differently. Five recordings will show you the
        pattern. (Nielsen, 2000) The question for each recording is: if I could add one
        sentence of text or one visual affordance to this screen, would this rageclick have
        happened?
      </p>

      <AnchorHeading as="h2" id="5-time-to-value">
        5. Time-to-value
      </AnchorHeading>
      <p>
        Time-to-value is the elapsed time from first page load to the moment a new user
        experiences the core value of the product. The clock starts before signup, not after.
        Every step in the onboarding path, including the signup form, language selection, and
        any tutorial screens, counts against time-to-value.
      </p>
      <p>
        LangoBee&rsquo;s June 2026 median session is 34 seconds. If the path from first page
        load to the first word tap takes 45 seconds under ideal conditions, then half of all
        users leave before they ever encounter the product&rsquo;s core value. This is not
        primarily a retention problem. It is a time-to-value problem. The users are not
        experiencing the product long enough to form a retention signal either way.
      </p>
      <p>
        Lenny Rachitsky&rsquo;s framework for activation metrics identifies time-to-value as
        the most actionable lever at the onboarding stage. The practical process: instrument
        the candidate aha moment (for LangoBee, <code>word_lookup_opened</code>), then
        measure what percentage of new users reach that moment within 24 hours of signup.
        Every barrier in the path that does not contribute to reaching that moment is a
        candidate for removal. (Rachitsky, 2022)
      </p>

      <AnchorHeading as="h2" id="6-defining-activation">
        6. Defining activation: word_lookup_opened
      </AnchorHeading>
      <p>
        Activation is the earliest action that predicts long-term retention. Signup is not
        activation. A user who signed up and never tapped a word has not experienced the
        product. A user who tapped a word and saw a definition has evidence that the product
        works for them. These are meaningfully different states.
      </p>
      <p>
        For LangoBee, <code>word_lookup_opened</code> is the right activation event. It is
        the top product action in the June 2026 snapshot at 5,225 events in 30 days. More
        importantly, it requires the full core loop to be working: the feed loads, a video
        plays, captions render, a word is tappable, and the popup returns a definition. A user
        who fires <code>word_lookup_opened</code> once has completed the loop. A user who has
        not fired it has not yet seen the product at its intended function.
      </p>
      <p>
        The three-step empirical framework from Rachitsky (2022) for confirming an activation
        event: (1) identify candidate aha moments from product usage data, (2) run regression
        analysis correlating each candidate with week-4 retention, (3) run controlled experiments
        to confirm causality. At LangoBee&rsquo;s current scale (31 MAU, bot-excluded), step 2
        is not statistically meaningful. Use the logical criterion instead: does completing this
        action require the entire core loop to function? <code>word_lookup_opened</code> satisfies
        that test. Earlier events (session starts, feed loads) do not.
      </p>
      <p>
        Rachitsky and Timen (2022) surveyed 500+ products and found a median activation rate of
        25%, mean 34%. Good is 30%; great is 45%. A rate below 25% signals a broken onboarding
        path, not a broken product. Before diagnosing the product, confirm that users are actually
        reaching it.
      </p>

      <AnchorHeading as="h2" id="7-the-guided-first-session">
        7. The guided first session
      </AnchorHeading>
      <p>
        A guided first session is an intentionally constrained first-run experience that removes
        every decision not required to reach the aha moment. It is not a tutorial. Tutorials
        teach features. A guided first session gets the user to the one moment that makes the
        product worth returning to, and defers everything else.
      </p>
      <p>
        Samuel Hulick&rsquo;s onboarding teardowns frame this as the product&rsquo;s job: guide
        the user to their personal transformation as quickly as possible. The Mario-mushroom
        framing is useful here: the user is Mario, the product is the mushroom, and the job of
        onboarding is to put the mushroom in front of Mario as fast as possible. Every screen
        that is not the mushroom is a risk that Mario never gets there. (Hulick, 2013)
      </p>
      <p>
        For LangoBee, the mushroom is a Spanish word tapped and understood. The guided first
        session ends the moment <code>word_lookup_opened</code> fires. Every step before that
        moment must justify its existence by contributing to that outcome. The test for each
        step: if you removed it, would the user still reach the first word tap? If yes, the
        step is a candidate for removal or deferral.
      </p>

      <Callout title="Designing the 60-second path">
        <p>
          Start at <code>word_lookup_opened</code> and work backward. What must be true one
          step earlier? A word must be tappable on screen. What must be true before that?
          Captions must be visible. Before that? A video must be playing. Before that? The feed
          must be open. Before that? The user must have an account (or bypassed signup).
        </p>
        <p>
          That is the entire path: account, feed, video, captions, tap. Each step has one job.
          Remove everything that does not serve one of those five steps. Spanish can default.
          Profile photo can wait. The quiz can wait. Push notifications can wait until day 3.
        </p>
        <p>
          Time the path with a stopwatch, starting at the landing page. If it exceeds 60 seconds,
          remove one more step. Repeat until it fits.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="8-activation-rate-benchmarks">
        8. Activation rate benchmarks and what they tell you
      </AnchorHeading>
      <p>
        The 25% median benchmark from Rachitsky and Timen (2022) is calibrated against 500+
        consumer and SaaS products across categories. For a consumer app in a hobbyist
        category (language learning), activation rates tend to be lower than the aggregate
        median because the motivation to continue requires personal investment that not every
        signup shares.
      </p>
      <p>
        LangoBee&rsquo;s May cohort data provides a signal: the May 18 week showed 12 activations
        from 15 real signups, an 80% activation rate. The May 25 week showed 7 activations from
        19 real signups, a 37% rate. The June 1 week showed 1 activation from what appeared to
        be 52 signups but were almost entirely bot registrations. The bot-excluded view of June
        shows no meaningful signal. The usable data is from May.
      </p>
      <p>
        The May 18 cohort&rsquo;s 80% activation rate looks strong. But six of those 12 activated
        users returned in later weeks, not all 12. The activation rate is not the retention rate.
        A user who fires <code>word_lookup_opened</code> once and never returns has activated
        but not retained. The activation event is useful precisely because it identifies users
        who experienced the core loop at least once. Whether they come back is a separate
        question that requires day-7 and day-30 retention data.
      </p>

      <AnchorHeading as="h2" id="9-the-pmf-survey-connection">
        9. The PMF survey as a broken-vacuum diagnostic
      </AnchorHeading>
      <p>
        Vohra&rsquo;s Superhuman case study establishes a connection between the must-work
        standard and the PMF survey. Superhuman found that 22% of users would be &ldquo;very
        disappointed&rdquo; if the product disappeared, below the 40% Ellis threshold. The
        team did not rebuild the product. They identified what blocked near-converts from
        joining the &ldquo;very disappointed&rdquo; group, and rebuilt the onboarding to remove
        those barriers. After three quarters, the score reached 58%. (Vohra, 2018)
      </p>
      <p>
        The mechanism is direct: most barriers to becoming a fan of a product are onboarding
        barriers. A user who would have loved the product if they had reached the aha moment
        is indistinguishable from a user who tried the product and found it unhelpful if they
        never reached the aha moment. The PMF survey captures both in the same &ldquo;somewhat
        disappointed&rdquo; or &ldquo;not disappointed&rdquo; bucket.
      </p>
      <p>
        At LangoBee&rsquo;s current scale (31 MAU), running the PMF survey is premature. The
        sample is too small to be meaningful. But the diagnostic logic applies: before asking
        whether users love the product, confirm that users are reaching the part of the product
        there is to love. The must-work checklist and the guided first session are the prerequisite
        to a meaningful PMF survey. Run them first.
      </p>

      <AnchorHeading as="h2" id="exercises">Exercises</AnchorHeading>
      <p>
        These are retrieval practice. Answer from memory before checking the reading.
      </p>

      <Exercise n={1}>
        <p>
          The broken-vacuum problem distinguishes between a broken product and a broken-vacuum
          product. Write one sentence defining each and give a concrete example of each using
          LangoBee&rsquo;s June 2026 data (223 rageclicks, 34-second median session,
          word_lookup_opened as the aha action).
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          LangoBee&rsquo;s must-work checklist has five surfaces: signup, feed, captions, word
          tap, and content supply. For each surface, write the one item that, if it failed,
          would prevent a new user from ever reaching the aha moment. Write only the
          load-bearing item for each surface.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Rachitsky and Timen (2022) define three activation rate thresholds: broken onboarding
          (below 25%), mediocre (25-34%), and competitive (45%+). The May 25 cohort had
          19 real signups and 7 activations. Calculate the activation rate. Which threshold
          does it fall in? Write one sentence on what that threshold implies about where to
          invest next.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          The guided first session must reach <code>word_lookup_opened</code> in under
          60 seconds. Write the steps in the current onboarding path (from memory or from
          walking through the app). Identify two steps that could be removed or deferred
          without preventing the user from reaching the first word tap.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Nielsen (2000) argues that 5-user usability sessions uncover 85% of usability
          problems. PostHog session recordings serve the same function asynchronously.
          Write the three-step protocol for extracting the broken-vacuum diagnosis from
          PostHog: what filter to apply, what to watch for in each recording, and what
          to write down.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet this week:</strong> Run the must-work checklist against
          the live app on a real iPhone and a desktop Chrome session. File every defect as a
          GitHub issue before leaving section.
        </li>
        <li>
          <strong>Lecture 2 this week:</strong> Onboarding to first aha. Covers the guided
          first session design in detail and how to measure activation rate in PostHog.
        </li>
        <li>
          <strong>HW2 (out this week):</strong> MVP-grade plus the cohort test. Ship the
          guided first session and measure activation rate before and after.
        </li>
        <li>
          <strong>Samuel Hulick, User Onboarding Teardowns:</strong> The Duolingo teardown
          specifically models what a language-app guided first session looks like in practice.
          Annotate LangoBee&rsquo;s flow in the same format.{" "}
          <a href="https://www.useronboard.com/user-onboarding-teardowns/">
            useronboard.com/user-onboarding-teardowns
          </a>
        </li>
        <li>
          <strong>Community:</strong> The Refold Espanol Discord (~9,500 members) is the
          highest-signal community for LangoBee&rsquo;s exact user: comprehensible-input
          Spanish learners who already have opinions about tool stacks. Observe their tool
          discussions before building. They will tell you what the must-work bar is for
          this audience without being asked.{" "}
          <a href="https://discord.com/servers/refold-espanol-es-667734565309382657">
            discord.com/servers/refold-espanol-es
          </a>
        </li>
      </ul>

      <Takeaways>
        <li>
          The broken-vacuum test is binary: does the core loop (watch, tap, understand) work
          for a new user on their device without founder guidance? A single broken step in that
          loop means no word of mouth and no retention.
        </li>
        <li>
          Dogfooding catches regressions. It does not catch onboarding breakage. Session
          recordings from five real users, filtered by rageclick, will show you what breaks
          for people who are not you.
        </li>
        <li>
          The must-work checklist covers signup, feed, captions, word tap, and content supply.
          Every item is pass or fail. Signup and word-tap failures are ship-blockers; field
          and content failures are high priority.
        </li>
        <li>
          word_lookup_opened is LangoBee&rsquo;s activation event: it requires the full core
          loop to work and delivers the first experience of the learning value. Activation rate
          below 25% means fix onboarding first, before diagnosing the product.
        </li>
        <li>
          A guided first session removes every step not required to reach word_lookup_opened.
          Design backward from the aha moment, time the path with a stopwatch, and remove steps
          until it fits in 60 seconds.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Hulick, S. (2013). User onboarding teardowns. UserOnboard.{" "}
          <a href="https://www.useronboard.com/user-onboarding-teardowns/">
            useronboard.com/user-onboarding-teardowns
          </a>
          . Annotated teardowns of consumer onboarding flows; the Duolingo teardown models
          language-app time-to-value design.
        </p>
        <p>
          Nielsen, J. (2000). Why you only need to test with 5 users. Nielsen Norman Group.{" "}
          <a href="https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/">
            nngroup.com/articles/why-you-only-need-to-test-with-5-users
          </a>
          . The mathematical argument that 5 qualitative observations find 85% of usability
          problems; licenses using 5 session recordings rather than a full user panel.
        </p>
        <p>
          Rachitsky, L. (2022). How to determine your activation metric. Lenny&rsquo;s Newsletter.{" "}
          <a href="https://www.lennysnewsletter.com/p/how-to-determine-your-activation">
            lennysnewsletter.com/p/how-to-determine-your-activation
          </a>
          . Three-step empirical framework for identifying the action that predicts long-term
          retention; defines activation as distinct from signup.
        </p>
        <p>
          Rachitsky, L. and Timen, Y. (2022). What is a good activation rate. Lenny&rsquo;s
          Newsletter.{" "}
          <a href="https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate">
            lennysnewsletter.com/p/what-is-a-good-activation-rate
          </a>
          . Survey of 500+ products establishing the 25% median and 45% great thresholds;
          the external calibration for diagnosing broken vs mediocre onboarding.
        </p>
        <p>
          Seibel, M. (2019). How to plan an MVP. Y Combinator Startup School.{" "}
          <a href="https://www.youtube.com/watch?v=1hHMwLxN6EM">
            youtube.com/watch?v=1hHMwLxN6EM
          </a>
          . The quality bar for a narrow first use case: it must actually work for the use
          case it covers; the must-work standard applied to MVPs.
        </p>
        <p>
          Vohra, R. (2018). How Superhuman built an engine to find product/market fit. First
          Round Review.{" "}
          <a href="https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/">
            review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit
          </a>
          . The PMF engine that identified onboarding barriers as the primary blocker for
          near-converts; the mechanism connecting must-work checklists to PMF score improvement.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk03ReadingSearchBody =
  "broken vacuum quality binary must-work checklist session recordings rageclicks time-to-value guided first session activation word_lookup_opened word tap onboarding 60 seconds LangoBee iPhone Safari PWA desktop Chrome defects GitHub issues activation rate benchmark 25 percent Superhuman PMF onboarding teardown reading Week 3 retention phase";
