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
      id="wk02"
      title="Week 2: Thesis discipline and the fork decision"
      kicker="LangoBee to $10K MRR: Operating a Solo Language App from Zero Revenue · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers what a thesis is, why locked decisions prevent
          drift, how to write falsifiable hypotheses with kill thresholds, and
          how to apply the Ries pivot taxonomy to LangoBee's current strategic
          fork. By the end you will be able to state the premium-library
          thesis and the freemium-shorts thesis as two separate testable
          hypotheses, name the metric each one is judged on, and write the kill
          threshold and decision date for each.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> North-star metric and vanity
          vs actionable metrics from week 1 (Rachitsky, 2021; Ries, 2009).
          De-alting and the AARRR funnel stages from week 1 (McClure, 2007;
          Chen, 2015).
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-what-a-thesis-is">
        1. What a thesis is
      </AnchorHeading>
      <p>
        A thesis is not a vision, a roadmap, or a bet. It is a falsifiable
        claim about a customer, a problem, and a willingness to pay. Every
        word in that definition matters.
      </p>
      <p>
        Falsifiable means that a specific data outcome would prove the claim
        wrong. A claim that cannot be proven wrong by any data is not a thesis;
        it is a story. "LangoBee will help people learn Spanish" cannot be
        falsified. "Self-directed adult Spanish learners will pay $7.99/month
        for a curated library of native-level YouTube content within 60 days of
        discovering the product" can be falsified: if no one pays in 60 days, the
        claim is wrong.
      </p>
      <p>
        The thesis has to name the customer. "Language learners" is not a
        customer. It is a category. A customer is a specific person with a
        specific problem who has already demonstrated some behavior that
        suggests they care. For LangoBee, that person is a self-directed adult
        who has already found comprehensible-input methods through Dreaming
        Spanish, Refold, or a similar source, and who is already consuming
        native-level video content outside the product.
      </p>
      <p>
        The thesis has to name the willingness to pay. Not "users might pay
        something" but a specific number and model. LangoBee's original locked
        thesis: $7.99/month, premium-only, 14-day credit-card-required trial.
        The thesis implies that the value delivered justifies that price for
        that customer. Zero trial_started events in the June 2026 snapshot
        means the thesis has not been tested yet, not that it is wrong. (June
        2026 snapshot)
      </p>

      <AnchorHeading as="h2" id="2-locked-decisions-and-drift">
        2. Locked decisions and drift
      </AnchorHeading>
      <p>
        A locked decision is a decision that is not revisited before a
        specified date. Eric Ries introduced this concept in the context of
        thesis discipline: the purpose of locking a decision is to force
        the experiment to run long enough to produce real signal. (Ries, 2009)
      </p>
      <p>
        Without locking, founders drift. Drift is not a decision; it is the
        slow substitution of one thesis for another without acknowledging that
        a decision is being made. The evidence of drift is subtle: the weekly
        report language changes from "growing the library" to "testing shorts,"
        features are added to the shorts surface while the library's trial
        funnel goes uninstrumented, and the founder describes both directions
        as "what we're working on."
      </p>
      <p>
        LangoBee's June 2026 position is a drift case. The original thesis was
        premium-only library. The June weekly report introduced freemium shorts
        as a direction without a written decision that the original thesis had
        failed or been set aside. Neither direction has a kill threshold. Neither
        has a decision date. The result is two bets running in parallel on one
        founder's time budget.
      </p>

      <Callout title="What 'locked' means and does not mean">
        <p>
          Locked means: you will not reopen the question at next week's
          planning session. You will not run a parallel experiment while the
          current one is active. You will not revise the kill threshold after
          the data comes in.
        </p>
        <p>
          Locked does not mean permanent. The decision expires at the end of
          the time box. At that point you review the evidence and decide
          deliberately, with the option to change direction. The lock is what
          separates a deliberate change from a drift.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-the-thesis-md-discipline">
        3. The THESIS.md discipline
      </AnchorHeading>
      <p>
        A thesis written in a founder's head is not a thesis; it is a
        preference. A preference adjusts under social pressure, fatigue, and
        novelty. A thesis in version-controlled text does not.
      </p>
      <p>
        THESIS.md is a file in the repo root with exactly three parts: the
        locked claim, the win condition, and the kill threshold. Every word
        counts.
      </p>
      <p>
        The <strong>locked claim</strong> is one sentence, falsifiable,
        naming the customer, the problem, and the willingness to pay. For
        LangoBee's library thesis: "Self-directed adult Spanish learners
        pursuing comprehensible-input methods will start a 14-day trial of
        the premium library at a rate above 15% of real signups by August 15,
        2026."
      </p>
      <p>
        The <strong>win condition</strong> is the metric and threshold that
        confirms the thesis. For the library thesis: 10 or more paid
        subscribers by August 15, with a trial-to-paid conversion rate above
        30%. These numbers are calibrated to the thesis, not to external
        benchmarks: 10 subscribers from the current real-user pool of roughly
        50 real humans would represent roughly 20% paid conversion, which at
        $7.99/month produces $80 MRR. That is not $10K, but it is the signal
        that the thesis is worth continuing.
      </p>
      <p>
        The <strong>kill threshold</strong> is the metric and threshold that
        falsifies the thesis. Annie Duke's (2022) framework calls this a
        "state-plus-date condition": a specific state (a metric below a
        number) combined with a specific date. For the library thesis: "If
        fewer than 5 trials have started by July 15 despite 50 real signups
        with onboarding complete, the library thesis is falsified and the
        shorts direction becomes the active test."
      </p>
      <p>
        The discipline is version control. When you change THESIS.md, the
        commit message names what changed and why. A cold future session, or
        a future co-founder, or you in three months can read the git log and
        reconstruct every thesis change with its evidence basis.
      </p>

      <AnchorHeading as="h2" id="4-the-ries-pivot-taxonomy">
        4. The Ries pivot taxonomy
      </AnchorHeading>
      <p>
        Ries (2011) named seven pivot types that cover nearly every strategic
        fork a pre-PMF product faces. Naming the type is not academic. Each
        type has a different evidence requirement, a different build cost, and a
        different failure mode.
      </p>
      <p>
        The seven types: zoom-in (a feature becomes the whole product),
        zoom-out (the product becomes a feature in a larger one), customer
        segment (same problem, different customer), customer need (same
        customer, different problem), platform (app to platform or vice versa),
        business architecture (high-margin/low-volume vs low-margin/high-volume),
        and technology (same positioning, different implementation).
      </p>
      <p>
        For LangoBee, the move from premium library to freemium shorts feed is
        most precisely described as a <strong>zoom-in pivot combined with a
        business-architecture pivot</strong>. The zoom-in part: the shorts
        surface is one feature of the existing product becoming the candidate
        whole product. The business-architecture part: the model shifts from
        premium-only (high willingness-to-pay, low volume) to freemium
        (lower or zero willingness-to-pay, higher volume).
      </p>
      <p>
        The zoom-in pivot has a specific evidence requirement: the feature
        that becomes the whole product must already be outperforming the rest
        of the product on the metrics that matter. In LangoBee's case, the
        shorts surface has 13 real users, 28% completion, and 1 share. The
        library has 17,440 texts, 24% ever-return among real signups, and no
        trial starts. Neither surface has demonstrated strong enough signal
        to justify a unilateral pivot. The honest statement is: the zoom-in
        pivot is a candidate, not a conclusion. (Ries, 2011; June 2026
        snapshot)
      </p>

      <AnchorHeading as="h2" id="5-the-four-lever-framework">
        5. The four-lever framework
      </AnchorHeading>
      <p>
        First Round Review's (2023) analysis of Vanta, Plaid, Clay, and
        Lattice documented a consistent pattern in pre-PMF stagnation: the
        company was misaligned on exactly one of four levers, and recovery
        required a decisive adjustment on that lever rather than incremental
        improvement across all four. The four levers are problem, persona,
        promise, and product.
      </p>
      <p>
        The <strong>problem</strong> lever asks whether the problem is urgent
        and real for the person you are targeting. For the library thesis, the
        problem is "I want to consume native-level Spanish content without
        building my own collection." For the shorts thesis, the problem is "I
        want bite-sized Spanish input that fits my attention span."
      </p>
      <p>
        The <strong>persona</strong> lever asks whether you are targeting the
        right customer for that problem. The Dreaming Spanish / Refold
        community is the right persona for the library problem: they already
        consume native content, already pay for Dreaming Spanish's Patreon,
        and already have the motivation to build comprehensible-input habits.
        The shorts persona is less defined: are they the same committed
        learner, or a more casual learner for whom Spanish is a hobby?
      </p>
      <p>
        The <strong>promise</strong> lever asks whether the product's
        positioning matches what the persona cares about. The library's
        current promise, implied by $7.99/month premium-only, is "the best
        curated library for serious learners." The shorts feed's promise is
        implied but unstated. Without a written promise, the persona cannot
        evaluate whether it is worth their attention.
      </p>
      <p>
        The <strong>product</strong> lever asks whether the product delivers
        on the promise. The library has shipped 17,440 texts and a difficulty
        ranker; the product lever is not the problem. The shorts feed has
        shipped a working surface with 408 impressions; the product lever is
        not the problem there either. For both directions, the gap is earlier
        in the lever sequence: persona clarity and promise articulation.
      </p>
      <p>
        The framework's recommendation: identify the single most misaligned
        lever and make a decisive move on it. For LangoBee's library thesis,
        the most misaligned lever is promise: the product exists but no one
        has entered the trial funnel, which means the promise is not reaching
        the persona convincingly. For the shorts thesis, the most misaligned
        lever is persona: the 13 real users are uncharacterized, and without
        knowing who they are, the promise cannot be written. (First Round
        Review, 2023)
      </p>

      <AnchorHeading as="h2" id="6-the-fork-decision">
        6. The fork decision: premium library vs freemium shorts
      </AnchorHeading>
      <p>
        As of June 2026, LangoBee has two directions and no written decision
        about which one is active. The course treats this as a decision to
        make deliberately in week 2, not a settled question.
      </p>
      <p>
        The two directions stated as falsifiable hypotheses:
      </p>
      <p>
        <strong>Hypothesis A (library):</strong> Self-directed adult Spanish
        learners pursuing comprehensible-input methods will start a 14-day
        premium trial at a rate above 15% of real signups, and at least 10
        will convert to paying subscribers, by August 15, 2026. Win condition:
        10+ paying subscribers, above 15% trial-start rate, by August 15. Kill
        threshold: fewer than 5 trials started by July 15 from 50 real
        non-bot signups with onboarding complete.
      </p>
      <p>
        <strong>Hypothesis B (shorts):</strong> Casual Spanish learners
        discovering the app through the shorts feed will return at a D7
        retention rate above 30% among users who complete 3 or more shorts in
        their first session, reaching 100 real monthly active users by August
        15, 2026. Win condition: 100 real MAU, above 30% D7 retention among
        3-shorts completers. Kill threshold: fewer than 50 real MAU or D7
        retention below 15% by July 15.
      </p>
      <p>
        These are not the only valid ways to state the hypotheses. They are
        examples of the form: specific customer, specific behavior, specific
        threshold, specific date. The section this week asks you to write your
        own versions, calibrated to what you actually believe and what you can
        actually measure.
      </p>
      <p>
        One critical observation: the two hypotheses are not fully independent.
        Building the shorts funnel to run Hypothesis B costs time that is not
        available for the library trial funnel needed to run Hypothesis A.
        The decision about which hypothesis is active is also a decision about
        where the build block goes for the next six weeks.
      </p>

      <Callout title="A note on the June 2026 data">
        <p>
          The shorts surface has 13 real users and 1 share. The 1 share is
          not evidence for the viral potential of the shorts thesis; it is
          evidence that 1 of 13 users performed 1 action. To use share rate
          as a metric in Hypothesis B, you need at minimum 30-50 users to
          observe a rate rather than a count. The kill threshold for shares
          should not be set until the denominator is large enough to produce
          a rate.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="7-a-pivot-vs-an-iteration">
        7. A pivot vs an iteration: what type the shorts direction represents
      </AnchorHeading>
      <p>
        Ries (2009) draws the distinction between a pivot and an iteration
        precisely: an iteration is a small change to an existing experiment,
        adjusting a parameter while the hypothesis stays the same. A pivot
        changes the hypothesis.
      </p>
      <p>
        Adding more texts to the library is an iteration. Changing the trial
        window from 14 days to 7 days is an iteration. Shipping an improved
        reader UI is an iteration. None of these change the core claim: that
        this customer will pay this price for this product.
      </p>
      <p>
        Moving from premium-only library to freemium shorts feed is a pivot.
        The hypothesis changes on at least two dimensions: the customer (from
        committed CI learner to casual learner), and the business model (from
        premium-only to freemium). It may also change the problem: from
        "curated premium library" to "discovery and engagement."
      </p>
      <p>
        The distinction matters because a pivot requires evidence from the
        current thesis that the current direction is not working. An iteration
        does not. As of June 2026, the library thesis has not been tested:
        zero trials have started. Moving to the shorts direction before testing
        the library thesis is not a data-driven pivot; it is a preference
        change. That does not make it wrong, but it means the evidence
        standard for the move is different. The kill threshold for the library
        direction, "fewer than 5 trials started by July 15," is the mechanism
        that produces the evidence. (Ries, 2009; Ries, 2011)
      </p>

      <AnchorHeading as="h2" id="8-time-boxed-experiments">
        8. Time-boxed experiments
      </AnchorHeading>
      <p>
        A time-boxed experiment is an experiment with a fixed end date, a
        pre-specified metric, and a pre-specified kill threshold. Without all
        three, the experiment becomes open-ended building: it continues until
        the founder decides to stop, which means it continues as long as it
        is comfortable.
      </p>
      <p>
        Annie Duke (2022) argues that the most reliable mechanism for making
        kill criteria stick is the pre-mortem: before the experiment begins,
        write down every story you would tell yourself for why the result does
        not count if the metric misses the threshold. Then write a
        counter-story for each one. Set the kill threshold at a level you
        would accept even given the best counter-story.
      </p>
      <p>
        For LangoBee's library thesis, the pre-mortem looks like this. Story
        one: "5 trials in 4 weeks is too low because we haven't done any
        outreach yet." Counter-story: outreach is part of the experiment.
        If the thesis requires outreach to produce 5 trials in 4 weeks and
        the founder cannot do that outreach in the time box, the thesis is
        harder to execute than assumed, which is itself evidence. Story two:
        "The bots in the June 1 batch contaminated the signup count." Counter-
        story: the kill threshold explicitly requires "real non-bot signups
        with onboarding complete," so bot contamination is already controlled.
      </p>
      <p>
        First Round Review (2023) frames the time box from the other direction:
        the experiment should run long enough to produce a rate rather than a
        count. For the library thesis, 4 weeks is the minimum window to
        observe whether a 14-day trial converts, because the trial itself is
        14 days. For the shorts thesis, 4 weeks is the minimum to observe D7
        retention. Six weeks gives one extra cohort to confirm the pattern.
        Eight weeks gives enough data to segment by acquisition channel.
      </p>

      <AnchorHeading as="h2" id="9-exercises">
        9. Exercises
      </AnchorHeading>
      <p>
        Complete these from memory before the section session. Each is
        answerable from this reading alone.
      </p>

      <Exercise n={1}>
        <p>
          State LangoBee's library thesis as a single falsifiable sentence
          using this template: "[customer] will [behavior] at [threshold] by
          [date]." Then write one sentence explaining which AARRR stage the
          thesis is primarily testing. If you cannot identify the stage, name
          the metric you would use to find out.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          LangoBee has 1 share from 13 shorts users. A colleague argues this
          means the shorts feed has viral potential and the freemium-shorts
          thesis is worth testing. Using Ries's (2011) evidence standard for
          a zoom-in pivot, write two sentences: (a) what evidence would be
          required to claim the shorts surface is outperforming the library
          on a meaningful metric, and (b) whether the June 2026 data meets
          that standard.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write a kill threshold for Hypothesis A (the library thesis) as a
          state-plus-date condition: "If [metric] is below [number] on
          [calendar date], the library thesis is falsified." Then run a
          one-step pre-mortem: write the single most convincing story you
          would tell yourself to avoid calling the experiment dead, and then
          write why that story does not override the threshold.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Using the four-lever framework from First Round Review (2023),
          identify which single lever is most misaligned for the library
          thesis as of June 2026. Write one sentence identifying the lever and
          one sentence describing the specific evidence from the June 2026
          snapshot that supports your diagnosis.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          A founder says: "We're not pivoting, we're just adding a shorts
          feature." Using Ries's (2009) distinction between a pivot and an
          iteration, write two sentences explaining whether adding the shorts
          feed while keeping the premium library is an iteration or a pivot,
          and why. Then name the pivot type from Ries's taxonomy that best
          describes the full move from library-only to shorts-primary.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="10-going-deeper">
        10. Going deeper
      </AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet this week:</strong> Write the fork decision
          memo with explicit hypotheses, kill thresholds, and a decision date.
          The reading prepares the theory; the section produces the artifact.
        </li>
        <li>
          <strong>Lecture 1 slides:</strong> What a thesis is for. Covers
          locked decisions, the THESIS.md discipline, and LangoBee's current
          drift case in more depth.
        </li>
        <li>
          <strong>Lecture 2 slides:</strong> Pivot or persevere. Covers the
          full Ries taxonomy, the four-lever framework with case studies, and
          the fork decision memo structure.
        </li>
        <li>
          <strong>Community:</strong> The{" "}
          <a href="https://discord.com/servers/refold-espanol-es-667734565309382657">
            Refold Espa&ntilde;ol Discord
          </a>{" "}
          (~9,500 members) is the highest-signal customer research community
          for the library thesis: these are the committed CI learners that
          Hypothesis A names as the customer. Participate before any product
          mention. Observe what tools they already use and what they pay for.
        </li>
      </ul>

      <Takeaways>
        <li>
          A thesis is a falsifiable claim about a customer, a problem, and a
          willingness to pay. Without falsifiability, it is a preference, and
          preferences adjust under pressure without producing any learning.
        </li>
        <li>
          Drift is not a decision. When the thesis changes without a written
          decision, no learning is produced from the change. THESIS.md in
          version control is the mechanism that separates deliberate changes
          from drift.
        </li>
        <li>
          The Ries pivot taxonomy names seven types. LangoBee's possible move
          from library to shorts is most precisely a zoom-in plus
          business-architecture pivot. Naming the type clarifies the evidence
          standard: a zoom-in pivot requires the feature to already be
          outperforming the rest of the product.
        </li>
        <li>
          The four-lever framework picks the single most misaligned lever
          for each thesis. For the library, the gap is in the promise lever
          (no one is entering the trial). For shorts, the gap is in the
          persona lever (the 13 users are uncharacterized).
        </li>
        <li>
          A time-boxed experiment needs a hypothesis, a metric, a kill
          threshold, and a decision date. The pre-mortem, writing the stories
          you would tell yourself to avoid calling the experiment dead,
          makes the kill threshold stick.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Chen, A. (2015). How to measure if users love your product using
          cohorts and revisit rates.{" "}
          <a href="https://andrewchen.com/how-to-measure-if-users-love-your-product-using-cohorts-and-revisit-rates/">
            andrewchen.com
          </a>
          . Used for cohort and de-alting concepts introduced in week 1 and
          referenced in the retrieval drill.
        </p>
        <p>
          Duke, A., interviewed by Brett Berson. (2022). Why everything
          we&rsquo;ve been taught about quitting is wrong. First Round Review.{" "}
          <a href="https://review.firstround.com/podcast/why-everything-weve-been-taught-about-quitting-is-wrong-annie-duke/">
            review.firstround.com
          </a>
          . Source for the kill-criteria framework, state-plus-date conditions,
          the pre-mortem mechanism, and sunk-cost psychology.
        </p>
        <p>
          First Round Review. (2023). The pivot to product-market fit: how
          Plaid, Clay, Lattice, and other startups broke out.{" "}
          <a href="https://review.firstround.com/the-pivot-to-product-market-fit/">
            review.firstround.com
          </a>
          . Source for the four-lever framework (problem, persona, promise,
          product) and the 200%-on-one-lever finding.
        </p>
        <p>
          June 2026 snapshot. LangoBee operating data. PostHog project 374549,
          Supabase, Stripe. Primary data: 103 registered profiles (~50 real),
          4 real weekly active users, 31 monthly, $0 MRR, 408 shorts
          impressions, 13 real users, 1 share, 17,440 texts, 24% ever-return
          rate, 0 trial_started events.
        </p>
        <p>
          McClure, D. (2007). Startup metrics for pirates: AARRR!! SlideShare.{" "}
          <a href="https://www.slideshare.net/slideshow/startup-metrics-for-pirates-long-version/89026">
            slideshare.net
          </a>
          . Source for AARRR funnel stages, used in week 1 and referenced in
          the retrieval drill for week 2.
        </p>
        <p>
          Rachitsky, L. (2021). Choosing your north star metric. Lenny&rsquo;s
          Newsletter.{" "}
          <a href="https://www.lennysnewsletter.com/p/choosing-your-north-star-metric">
            lennysnewsletter.com
          </a>
          . Source for north-star metric selection, used in week 1 and
          referenced in the retrieval drill for week 2.
        </p>
        <p>
          Ries, E. (2009). Pivot, don&rsquo;t jump to a new vision. Startup
          Lessons Learned.{" "}
          <a href="http://www.startuplessonslearned.com/2009/06/pivot-dont-jump-to-new-vision.html">
            startuplessonslearned.com
          </a>
          . Source for the pivot-vs-iteration distinction, the definition of a
          thesis as structured experiment, and the founding framing of pivot
          discipline.
        </p>
        <p>
          Ries, E. (2011). The Lean Startup: Talks at Google. YouTube.{" "}
          <a href="https://www.youtube.com/watch?v=fEvKo90qBns">
            youtube.com/watch?v=fEvKo90qBns
          </a>
          . Source for the seven pivot types, the pivot-or-persevere decision
          logic, and innovation accounting.
        </p>
        <p>
          Ries, E. (2009). Why vanity metrics are dangerous. Startup Lessons
          Learned.{" "}
          <a href="http://www.startuplessonslearned.com/2009/12/why-vanity-metrics-are-dangerous.html">
            startuplessonslearned.com
          </a>
          . Source for the actionability test used in the retrieval drill.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk02ReadingSearchBody =
  "thesis locked decision THESIS.md drift pivot persevere zoom-in pivot zoom-out pivot customer segment Ries pivot taxonomy four-lever framework problem persona promise product kill threshold time-boxed experiment fork decision memo premium library freemium shorts falsifiable hypothesis pre-mortem state-plus-date Annie Duke kill criteria LangoBee week 2 foundations";
