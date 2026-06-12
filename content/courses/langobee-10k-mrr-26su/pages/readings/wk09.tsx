import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk09Reading() {
  return (
    <ReadingPage
      id="wk09"
      title="Week 9: Community launch and channel fit"
      kicker="LangoBee to $10K MRR · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers how to select and rank distribution communities by
          channel fit, how to write posts that survive moderation and earn genuine
          engagement, how UTM discipline turns a community launch into a
          measurable experiment, and why launching into a product with weak
          retention burns the channel rather than builds the business.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> D1-retention work from week 4
          (you know LangoBee's current cohort return rate). The MRR model from
          week 8 (you know the subscriber math and the churn ceiling). Manual
          recruiting experience from week 5 (you have written cold outreach before
          and know what message-match failure looks like).
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-where-learners-gather">
        1. Where language learners actually gather
      </AnchorHeading>
      <p>
        The biggest language-learning community on the internet is
        r/languagelearning, with 3.4 million members. It is not the most useful
        launch venue for LangoBee. That distinction belongs to smaller, more
        ideologically coherent communities: r/dreamingspanish, the Refold
        Espanol Discord, and the r/Spanish subreddit. Size and fit are different
        dimensions.
      </p>
      <p>
        Rachitsky's study of 40+ consumer apps found that the founders who
        acquired their first 1,000 users most efficiently picked one or two
        kickstart channels and executed them intensely rather than spreading
        effort across many. The pattern held across Tinder (campus parties),
        Superhuman (exclusive waitlist), and DoorDash (Yelp scraping and flyer
        drops in Palo Alto). The channel differed; the concentration principle
        held. (Rachitsky, 2020)
      </p>
      <p>
        For LangoBee, the concentration principle points to the
        comprehensible-input (CI) community first. CI learners are predisposed
        to LangoBee's thesis. They already believe that native content is the
        right input. They are already paying for Dreaming Spanish's Patreon. The
        only question is whether LangoBee's specific implementation of the thesis
        is better than the tool stack they currently use (Language Reactor, LingQ,
        mpv scripts, or nothing).
      </p>

      <AnchorHeading as="h2" id="2-community-norms">
        2. Community norms: the gate before the audience
      </AnchorHeading>
      <p>
        Every Reddit community enforces rules that function as a moderation gate.
        Understanding those rules is not optional; a post that fails the gate is
        removed before the audience sees it, and the attempted post is counted
        against the account's credibility.
      </p>
      <p>
        r/languagelearning removes direct app-launch posts from accounts without
        established karma. The rule exists because the community receives a
        constant stream of founders who have never participated in the community
        treating it as a free advertising slot. The moderation team has seen this
        pattern thousands of times and responds accordingly.
      </p>
      <p>
        r/Spanish has the same dynamic with a different flavor. Dreaming Spanish
        is discussed organically; the community already has opinions about CI
        tools. A mention of LangoBee in a thread about "what should I watch at
        B1 level?" is legitimate. A standalone post announcing LangoBee is not.
      </p>
      <p>
        r/SaaS enforces a once-per-60-days self-promotion cap as of April 2026.
        Repeat violations result in a URL blacklist. The enforcement is automated
        and unforgiving.
      </p>

      <Callout title="The karma runway problem">
        <p>
          Building a karma base in r/languagelearning or r/Spanish takes 4-8
          weeks of genuine participation: answering questions, sharing resources,
          contributing to discussions that do not involve LangoBee at all. This
          is not a workaround; it is the correct sequence. The launch post is the
          last step in a community relationship, not the first.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-channel-fit">
        3. Ranking channels by fit
      </AnchorHeading>
      <p>
        Channel fit has three dimensions: audience overlap (what fraction of the
        community are your target users), platform norms (how permissive the
        community is toward product mentions), and prior tool-launch reception
        (how similar launches have been received).
      </p>
      <p>
        Weinberg's Bullseye framework suggests a three-ring approach: brainstorm
        all candidate channels, run cheap tests on the 2-3 most promising, then
        double down on the single winner. The community launch is the cheapest
        test available because the only cost is time. But cheap does not mean
        free: a poorly executed community launch burns the channel in ways that
        take months to repair. (Weinberg, 2015)
      </p>
      <p>
        Applying the three dimensions to LangoBee's four candidate communities:
      </p>
      <p>
        <strong>r/dreamingspanish.</strong> Audience overlap: high (CI Spanish
        learners, exactly LangoBee's target). Platform norms: moderately
        permissive after genuine participation. Prior tool reception: the
        community discusses Language Reactor and LingQ regularly; a new CI tool
        that improves on the word-tracking experience has a legitimate opening.
        Assessment: launch here first, after participation.
      </p>
      <p>
        <strong>Show HN.</strong> Audience overlap: moderate (technically
        literate users, not primarily language learners). Platform norms:
        permissive for interactive projects with frictionless tryout. Prior tool
        reception: language-learning tools appear regularly and are received
        well when technically credible. Assessment: launch here in parallel with
        r/dreamingspanish; different audience, complementary signal.
      </p>
      <p>
        <strong>r/Spanish.</strong> Audience overlap: high (Spanish learners).
        Platform norms: self-promotion discouraged except in specific threads.
        Prior tool reception: Dreaming Spanish is discussed organically; the
        community already has opinions. Assessment: requires karma runway. Target
        for week 11 after retention validates.
      </p>
      <p>
        <strong>r/languagelearning.</strong> Audience overlap: broad (all
        language learners, not Spanish-specific). Platform norms: strict; launch
        posts without karma removed. Prior tool reception: many tools have been
        posted; survival depends on community standing. Assessment: requires the
        longest karma runway. Target after a validated conversion rate from
        earlier channels.
      </p>

      <AnchorHeading as="h2" id="4-show-hn-mechanics">
        4. Show HN mechanics
      </AnchorHeading>
      <p>
        Show HN is Hacker News's submission track for interactive, runnable
        projects. The official guidelines from Y Combinator define what
        qualifies: the project must be interactive, something people can try.
        Not a blog post, not a signup page, not a landing page. The product
        must be live and tryable at the moment of submission. (Y Combinator,
        2012)
      </p>
      <p>
        LangoBee qualifies on these criteria. It is live, it has content, and
        a visitor can read a Spanish text and tap words without creating an
        account (or with a minimal friction signup). The qualifying test is
        whether a skeptical stranger can reach the product's core value in under
        two minutes without needing to enter a credit card.
      </p>
      <p>
        The submission process: Show HN posts appear first on the shownew page
        (news.ycombinator.com/shownew) before accumulating enough upvotes to
        reach the main show page (news.ycombinator.com/show). The window between
        submission and main-page placement is roughly 30-60 minutes. During that
        window, the founder's engagement with early comments determines whether
        the post climbs or stalls.
      </p>
      <p>
        Three behaviors that consistently improve Show HN reception: (a) a top
        comment that offers frictionless access and states the honest stage of
        the product; (b) specific engagement with critical comments rather than
        defensive deflection; (c) submission timing at peak HN traffic, Tuesday
        through Thursday between 8 AM and 11 AM US Eastern. (Y Combinator, 2012)
      </p>

      <Callout title="Show HN is a community launch, not a press launch">
        <p>
          The HN audience is technically sophisticated and skeptical. They will
          find the "17,440 texts" claim and ask about content quality. They will
          try to break the word-lookup popup. They will ask about the revenue
          model. Answer every one of these questions directly and honestly. A
          founder who engages thoughtfully with a 3-comment thread will see more
          traction than one who posts and disappears.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="5-utm-discipline">
        5. UTM discipline: making the launch readable
      </AnchorHeading>
      <p>
        A community launch without UTM tags produces useless data. Without tags,
        PostHog groups every community visitor under "direct" or "referral"
        without distinguishing which community sent them. You cannot tell whether
        the Show HN visitor signed up at the same rate as the r/dreamingspanish
        visitor. You cannot decide which community deserves a follow-up post.
      </p>
      <p>
        UTM parameters are query string additions that PostHog reads on every
        page load. The three parameters needed for a community launch:
        utm_source (the platform), utm_medium (the content type), and
        utm_campaign (the specific launch event). Every link you post to any
        community this week gets a unique tag set.
      </p>
      <p>
        Alstromer's lecture on first-customer acquisition makes the UTM case
        directly: the founders who understand which community converts are the
        ones who concentrated their effort correctly in the next phase. Without
        attribution, you are flying blind when it comes time to decide where to
        run the second wave. (Alstromer, 2022)
      </p>
      <p>
        The observation window matters as much as the tagging. Set it before the
        post goes live: you will read the attributed results 7 days after each
        post. Not 24 hours (too early; the long tail of upvotes and traffic
        continues for days). Not 30 days (too late to act on the signal for the
        next launch cycle).
      </p>

      <AnchorHeading as="h2" id="6-message-match">
        6. Landing page message match
      </AnchorHeading>
      <p>
        Message match is the degree of continuity between the text that made a
        visitor click and the text they see after they land. When these two match,
        the visitor's expectation is confirmed and trust is established. When they
        do not match, the visitor experiences a small but measurable violation of
        their expectation, and many leave immediately.
      </p>
      <p>
        The three-point chain for a community launch: (1) the post title or Show
        HN title creates a specific expectation; (2) the landing page headline
        confirms that expectation; (3) the first call to action (CTA) is aligned
        with the value the visitor was promised, not a generic conversion prompt.
      </p>
      <p>
        A Show HN title that says "A Spanish video player that tracks your
        vocabulary as you watch" creates a specific promise. A landing page
        headline that says "Learn Spanish faster" does not confirm it. The visitor
        arrived expecting to see a vocabulary-tracking video player; they see a
        generic language-learning claim. The mismatch is small but costs
        conversions in the most important section of the funnel.
      </p>
      <p>
        The CTA must also match the stage of the visitor relationship. A first-time
        Show HN visitor has not yet received the core value. Presenting them with
        a credit-card-required trial prompt before they have tapped a single word
        is a reliable way to produce near-100% bounce at the conversion step.
        The CTA for a first-time community visitor should be "Try it now" (no
        account required), not "Start your 14-day trial."
      </p>
      <p>
        Manalac's multi-launch framework emphasizes message-match discipline
        across phases: each phase reaches a different audience, so the message
        must be recalibrated for each phase, not reused. The Show HN audience
        cares about technical credibility; the r/dreamingspanish audience cares
        about comprehensible-input philosophy. Same product, different first
        sentence. (Manalac, 2019)
      </p>

      <AnchorHeading as="h2" id="7-burn-risk">
        7. Burn risk: why retention gates the launch
      </AnchorHeading>
      <p>
        Burn risk is the cost of driving traffic into a product that cannot retain
        it. The cost is not the traffic itself; traffic is cheap. The cost is the
        channel. Communities remember bad experiences with tools. A product that
        sends 1,000 visitors through r/languagelearning, converts 10 of them, and
        retains 2, has taught the entire community that LangoBee is not worth
        trying. That impression lasts longer than the upvotes from the original
        post.
      </p>
      <p>
        LangoBee's June 2026 retention data makes the arithmetic concrete.
        Approximately 24% of real signups ever return. Median activated user has
        1 active day and roughly 2 minutes of total session time. If a community
        post sends 1,000 visitors:
      </p>
      <pre>{`1,000 visitors
  x  10% signup rate    = 100 signups
  x  24% ever-return    =  24 users who return once
  x  ~5% trial-started  =   1-2 trial starts (optimistic)
  x  25-35% trial-paid  =   0-1 paying customers`}</pre>
      <p>
        The channel post is used. The 976 non-converting visitors are gone. And
        the community has observed that this tool produces low retention among the
        few people who tried it, because those 24 returning users will not be
        vocal advocates.
      </p>
      <p>
        The founder deferred a broad community launch in June 2026 when the June
        1 cohort showed 52 apparent signups with 1 activation (a bot-dominated
        week). That decision was correct. The arithmetic above explains why:
        if nearly every signup disappears before the second session, driving a
        volume event produces costs (channel reputation, post slot, founder time)
        with no compounding return. A community post that produces 24 users who
        each return once is not an acquisition channel. It is an advertisement
        for a product that does not yet retain.
      </p>

      <Callout title="The retention gate for this launch">
        <p>
          Two conditions must be true before a volume-generating community post:
          (1) at least one cohort week with minimum 10 real users shows a day-7
          return rate above 30%; (2) the must-work checklist passes on a mobile
          browser without a registered account. Both conditions. Not one.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="8-launch-as-instrument">
        8. The launch as a repeatable instrument
      </AnchorHeading>
      <p>
        Manalac's core argument from the YC Startup School lecture is that
        founders make a mistake treating launch as a singular high-stakes event.
        The best founders she worked with treated launch as an experiment they
        ran repeatedly. Each launch targeted a different audience, used distinct
        message-match copy, and produced a signal that informed the next launch.
        (Manalac, 2019)
      </p>
      <p>
        The multi-phase framework she describes: soft launch (close network),
        community launch (HN, niche forums), press launch, and broad launch. Each
        phase has a distinct audience, a distinct message, and a distinct
        success criterion. Moving from one phase to the next is gated on the
        signal from the prior phase, not on a calendar date.
      </p>
      <p>
        For LangoBee in summer 2026, the sequencing is: Discord (already
        complete, ~30 users recruited), Show HN plus r/dreamingspanish (this
        week, if retention gate clears), r/Spanish (after one validated cohort
        week from the prior phase), r/languagelearning (after a conversion rate
        from r/Spanish is confirmed).
      </p>
      <p>
        A launch becomes a repeatable instrument when it satisfies three
        conditions: every link is tagged so the source is attributable, the
        message is consistent within a phase so channel performance is
        distinguishable from copy performance, and the observation window is
        set in advance so the analysis runs at a fixed point and produces
        comparable data across phases.
      </p>

      <AnchorHeading as="h2" id="9-write-the-post">
        9. Writing a post that survives
      </AnchorHeading>
      <p>
        Most community posts from founders fail the give-before-ask test because
        they lead with the product rather than the problem. The post that
        survives r/dreamingspanish is the one that starts with the learner's
        experience, not the founder's product.
      </p>
      <p>
        A post that starts with "I built a tool..." is a founder's
        announcement. A post that starts with "I've been watching CI Spanish
        for two years and I never knew what percentage of words I actually
        understood until I tracked them..." is a learner's story that happens to
        lead to a tool. The difference is real and the community can sense it.
      </p>
      <p>
        Alstromer's lecture on getting first customers teaches how to craft
        message-match copy for community posts: the core claim must be stated in
        the vocabulary of the community, not the vocabulary of the product spec.
        "Word-level status tracking with comprehension RPC" is product
        vocabulary. "Every video tells you what percentage of words you already
        know before you start" is learner vocabulary. (Alstromer, 2022)
      </p>
      <p>
        The ask at the end of the post must be specific. "Let me know what you
        think" produces no signal. "Does the difficulty matching feel right for
        your level, or does the comprehension score seem off?" produces a
        specific answer to a specific question. The second version also signals
        that the founder is not just seeking validation; they are trying to
        calibrate something.
      </p>

      <AnchorHeading as="h2" id="10-the-ci-community-ideological-home">
        10. The comprehensible-input community as ideological home
      </AnchorHeading>
      <p>
        The comprehensible-input community (Dreaming Spanish, Refold, and their
        adjacent communities) is predisposed to LangoBee's thesis in a way that
        no general language-learning community is. CI learners already believe
        that native content is the right input. They already know who Stephen
        Krashen is. They are not skeptical of the core premise; they are
        skeptical of whether any specific tool actually serves the premise better
        than the tool stack they already have.
      </p>
      <p>
        That is a much easier objection to address than "why should I watch
        Spanish videos at all?" It is also a much more demanding audience. A CI
        learner who encounters LangoBee's comprehension score will compare it
        against Language Reactor's word-highlighting immediately. The question is
        not "is this interesting?" but "is this better than what I use?"
      </p>
      <p>
        The Refold Espanol Discord (~9,500 members) is the most sophisticated CI
        practitioner community available. It is not primarily a launch venue. It
        is a research venue. Understanding which tools CI learners already use,
        what they find frustrating about those tools, and what features they wish
        existed is more valuable than any conversion from a cold post. The
        research phase in the Discord precedes and informs the launch post.
      </p>
      <p>
        Rachitsky's consumer-business series documents how the most effective
        kickstarts for identity-driven consumer audiences involve enlisting
        respected community voices, not broadcasting at members. A single
        post from a recognized Refold community member saying "I tried this and
        the comprehension-score feature is genuinely useful" is worth more than
        100 direct founder posts. The path to that endorsement is genuine
        participation, not a cold outreach message. (Rachitsky, 2022)
      </p>

      <AnchorHeading as="h2" id="exercises">Exercises</AnchorHeading>
      <p>
        Complete these from memory before the section worksheet. Do not look up
        answers.
      </p>

      <Exercise n={1}>
        <p>
          Name the three dimensions of channel fit. For each one, write a
          one-sentence definition. Then rank r/dreamingspanish and Show HN on
          each dimension from 1 (low fit) to 5 (high fit) and explain the score
          for the lowest-scoring dimension of each.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          LangoBee's June 2026 data shows approximately 24% of real signups ever
          return. A community post sends 800 visitors to the site. Using a 10%
          signup rate and the 24% ever-return figure, calculate: (a) how many
          users will sign up, (b) how many will return at least once, (c) how
          many trial starts you can expect at 5% trial-started rate. Show your
          work.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Manalac's multi-launch framework has four phases. Name them in order
          and state what distinguishes each phase from the next. Then place
          LangoBee in the correct phase for summer 2026, with one sentence
          explaining why.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Write the three UTM parameters for a Show HN post. Then write the
          full tagged URL for a post linking to langobee.com using those
          parameters. Use the naming convention from the lecture slides.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          A hostile commenter on your Show HN post says: "The catalog is just
          YouTube embeds. I can use YouTube directly." Write a 3-sentence
          response that is honest, specific, and names the concrete difference
          that YouTube alone cannot provide. Do not use the phrase "better than."
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet this week:</strong> Draft the Reddit post and
          Show HN post; pre-mortem the top ten hostile comments; run the
          must-work checklist. The worksheet is the implementation of everything
          in this reading.
        </li>
        <li>
          <strong>Show HN Guidelines (Y Combinator, 2012).</strong> Read the
          full text before drafting your submission. The guidelines are short
          (~400 words) and contain the exact framing that separates posts that
          reach the main show page from those that stall on shownew.{" "}
          <a href="https://news.ycombinator.com/showhn.html">
            news.ycombinator.com/showhn.html
          </a>
        </li>
        <li>
          <strong>Refold Espanol Discord:</strong>{" "}
          <a href="https://discord.com/servers/refold-espanol-es-667734565309382657">
            discord.com/servers/refold-espanol-es-667734565309382657
          </a>
          . Join as a participant first. Read the channel rules on join. Do not
          post about LangoBee until you have read 20+ threads and understand the
          tool-comparison culture.
        </li>
        <li>
          <strong>HW4 "The launch and the creator wave" goes out this week.</strong>{" "}
          The assignment asks you to execute the community launch plan and
          document the results. The section worksheet is the preparation; HW4 is
          the execution and debrief.
        </li>
        <li>
          <strong>Next week (week 10):</strong> Creator partnerships. The
          channel you open with community launch becomes the foundation for
          creator-partnership outreach in week 10. A Show HN that reaches
          language-learning YouTubers is the most efficient path to that
          introduction.
        </li>
        <li>
          <strong>Community:</strong> The Indie Hackers community (
          <a href="https://www.indiehackers.com/">indiehackers.com</a>) is the
          best venue for documenting your launch story with real numbers. Post a
          launch retrospective there after the 7-day observation window closes.
          The build-in-public culture means transparent data is welcomed.
        </li>
      </ul>

      <Takeaways>
        <li>
          Channel fit has three dimensions: audience overlap, platform norms, and
          prior tool-launch reception. Rank every candidate community on all three
          before deciding the launch order.
        </li>
        <li>
          Community norms are the gate before the audience. A post that fails the
          karma or rule check is removed before anyone reads it. Build the karma
          runway first; the launch post is the last step in a community
          relationship.
        </li>
        <li>
          UTM discipline turns a community launch into a readable experiment.
          Every link gets a unique tag set; results are read at a fixed 7-day
          window; the data informs the next phase.
        </li>
        <li>
          Burn risk is arithmetic. Sending volume into a 24%-ever-return product
          wastes the channel. The retention gate (day-7 return rate above 30% for
          a real cohort, plus a passing must-work checklist) must clear before any
          volume-generating post.
        </li>
        <li>
          A launch is a repeatable instrument when it produces a reading. Set the
          UTM tags, set the observation window, and set the specific question you
          are answering before pressing submit.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Alstromer, G. (2022). How to get your first customers. Y Combinator
          Startup School.{" "}
          <a href="https://www.youtube.com/watch?v=hyYCn_kAngI">
            youtube.com/watch?v=hyYCn_kAngI
          </a>
          . Founder-led outreach mechanics, message-match copy, UTM discipline
          from 600+ YC company patterns.
        </p>
        <p>
          Manalac, K. (2019). How to launch (again and again). Y Combinator
          Startup School.{" "}
          <a href="https://www.youtube.com/watch?v=3xU050kMbHM">
            youtube.com/watch?v=3xU050kMbHM
          </a>
          . Multi-phase launch framework; UTM discipline and small-batch
          launching; distinct audience-message pairs per phase.
        </p>
        <p>
          Rachitsky, L. (2020). How the biggest consumer apps got their first
          1,000 users.{" "}
          <a href="https://www.lennysnewsletter.com/p/how-the-biggest-consumer-apps-got">
            lennysnewsletter.com/p/how-the-biggest-consumer-apps-got
          </a>
          . Seven early-user kickstart strategies across 40+ consumer apps;
          community-oriented tactics with concrete case studies.
        </p>
        <p>
          Rachitsky, L. (2022). How to kickstart and scale a consumer business:
          Step 4, Find your early adopters.{" "}
          <a href="https://www.lennysnewsletter.com/p/consumer-business-find-first-users">
            lennysnewsletter.com/p/consumer-business-find-first-users
          </a>
          . Influencer partnerships as one of the two most effective kickstarts
          for identity-driven consumer audiences.
        </p>
        <p>
          Weinberg, G. (2015). The Bullseye Framework for getting traction.{" "}
          <a href="https://medium.com/@yegg/the-bullseye-framework-for-getting-traction-ef49d05bfd7e">
            medium.com/@yegg/the-bullseye-framework-for-getting-traction-ef49d05bfd7e
          </a>
          . Three-ring channel test: brainstorm, cheap test, double down. Each
          test under $1,000 and under one month.
        </p>
        <p>
          Y Combinator. (2012). Show HN guidelines.{" "}
          <a href="https://news.ycombinator.com/showhn.html">
            news.ycombinator.com/showhn.html
          </a>
          . Authoritative rules for Show HN submissions: what qualifies, shownew
          queue mechanics, community norms.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk09ReadingSearchBody =
  "community launch channel fit message match UTM discipline burn risk retention gate r/languagelearning r/Spanish r/dreamingspanish Show HN Hacker News give-before-ask karma runway comprehensible input CI community Refold Dreaming Spanish subreddit norms self-promotion launch repeatable instrument Manalac Rachitsky Weinberg Alstromer week 9 distribution";
