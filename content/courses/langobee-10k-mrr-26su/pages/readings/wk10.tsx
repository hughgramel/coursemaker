import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk10Reading() {
  return (
    <ReadingPage
      id="wk10-creator-channel"
      title="Week 10: Sponsorship, affiliate, or equity-partner?"
      kicker="LangoBee to $10K MRR · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading answers a specific question: "Do I need a YouTuber partner to give
          50% of the business to?" The answer is almost certainly no, and this chapter
          shows the math. By the end you will be able to price a creator sponsorship,
          compare three deal structures using expected-value arithmetic, and write a
          defensible recommendation on the equity question grounded in FAST agreement
          norms and LangoBee's June 2026 unit economics.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Channel fit and Bullseye testing from
          week 9; LTV and CAC from week 8. This reading uses the CAC ceiling from week 8
          as an input. If you have not yet calculated LTV, use the floor assumption:
          $7.99/mo, 5% monthly churn, LTV = $159.80.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-the-watering-hole">
        1. Language-learning YouTube as the watering hole
      </AnchorHeading>
      <p>
        Most consumer apps face a diffuse audience problem: potential users are scattered
        across many communities with different vocabularies, habits, and discovery
        patterns. Language learners, and specifically comprehensible-input learners, do
        not have this problem. They concentrate.
      </p>
      <p>
        The comprehensible-input methodology, rooted in Stephen Krashen's input
        hypothesis, holds that fluency comes from consuming massive amounts of
        target-language content just above the learner's current level. A small set of
        YouTube creators produce the canonical content for this method: Dreaming Spanish
        (Spanish), Comprehensible Russian, Comprehensible Italian, and a handful of
        others. These creators have built audiences of learners who already consume
        native-level video content daily. That is exactly the behavior LangoBee is
        selling access to.
      </p>
      <p>
        Lenny Rachitsky's analysis of 40+ consumer app launches found that influencer
        partnerships, specifically enlisting respected community voices before paying for
        ads, is one of the two highest-impact kickstarts for apps with a specific
        hobbyist or identity-driven audience. The citation data comes from Tinder, which
        used sorority-and-fraternity president outreach before any paid acquisition;
        Superhuman, which used invitation-only early access through respected email power
        users; and TikTok, which struck music-creator partnerships before the platform
        had a meaningful paying audience. The pattern holds across categories: find the
        person whose endorsement the target community trusts, and reach them first.
        (Rachitsky, 2022)
      </p>
      <p>
        For LangoBee, the watering hole is clear. The question is not whether to use the
        creator channel. The question is what structure and at what price.
      </p>

      <AnchorHeading as="h2" id="2-micro-vs-macro">
        2. Micro vs macro: which tier makes sense
      </AnchorHeading>
      <p>
        The conventional wisdom is that a larger creator means more reach. For an
        early-stage app with unvalidated conversion rates, this logic is backwards. A
        macro creator at 1M subscribers costs $20,000-50,000 per video (Influencer
        Marketing Hub, 2024). At LangoBee's $7.99/mo price and an estimated 5% trial-to-paid
        conversion rate, that video needs to produce roughly 1,260 paying customers to
        break even against the LTV:CAC 3:1 target. No unvalidated app should spend
        $20,000 on a single channel experiment.
      </p>
      <p>
        The micro creator tier (10,000-100,000 subscribers) charges $200-1,000 per video
        (Influencer Marketing Hub, 2024). At $500 flat fee, the break-even is 10 paying
        customers at the 3:1 LTV:CAC ceiling, which requires approximately 200 trial
        starts. That is a test that produces meaningful data without betting four months
        of runway on one experiment.
      </p>
      <p>
        Engagement rate reinforces the micro preference. Micro creators in niche topics
        routinely achieve 3-8% engagement (comments plus likes divided by views). Macro
        creators in the same topic typically achieve under 1%. The comprehensible-input
        audience is small and highly engaged. A creator with 30,000 subscribers and a 6%
        engagement rate has a more responsive audience for a learning-tool pitch than a
        creator with 300,000 subscribers and a 0.8% rate.
      </p>
      <p>
        Andrew Chen observed that every marketing channel starts at high clickthrough and
        degrades toward near-zero as the audience scales and novelty fades. (Chen, 2012)
        The implication for creator timing: a micro creator's audience has not yet been
        saturated by sponsorship pitches. The authenticity of the first few creator
        endorsements, before the channel feels commercial, is the highest-value window.
      </p>

      <AnchorHeading as="h2" id="3-market-rates">
        3. Market rates: CPM, flat fee, and affiliate
      </AnchorHeading>
      <p>
        Three structures exist. Understanding all three is necessary before entering any
        negotiation.
      </p>

      <Callout title="Rate reference (Influencer Marketing Hub, 2024)">
        <p>
          Flat-fee rates by subscriber tier: nano (1k-10k) $20-200; micro (10k-100k)
          $200-1,000; mid-tier (100k-500k) $1,000-10,000; macro (500k-1M) $10,000-20,000;
          mega (1M+) $20,000-50,000. These are per-video rates for a standard integrated
          sponsorship segment (60-90 seconds). Rates vary by engagement rate, niche
          specificity, content format, and usage rights.
        </p>
        <p>
          CPM benchmarks: $15-30 per 1,000 views for niche educational content. A 30,000-view
          video at $20 CPM has a market value of $600 for the sponsorship slot.
        </p>
      </Callout>

      <p>
        <strong>Flat-fee sponsorships</strong> pay the creator a fixed amount regardless
        of conversion outcome. The founder bears all conversion risk. This structure is
        correct for the first test because it is fully reversible: one video, one payment,
        data collected, no ongoing obligation. If the video produces zero trial starts, the
        cost is bounded at the flat fee. The creator has no claim on future revenue.
      </p>
      <p>
        <strong>Affiliate commissions</strong> pay the creator a percentage of each
        conversion attributable to their tracked link. The typical range for consumer
        software is 20-30% of the first payment. This aligns incentives: the creator earns
        more when the content converts, which creates an incentive to produce high-quality,
        authentic promotions rather than generic sponsor reads. The downside is that some
        creators optimize for click volume rather than conversion quality, sending
        incentivized traffic that starts a trial with no intent to subscribe. UTM
        discipline and a UTM-tagged link with a 30-day attribution window are essential for
        measuring this honestly.
      </p>
      <p>
        <strong>Milestone-based equity</strong> is the structure that makes sense when a
        creator is willing to work long-term and has demonstrated conversion. The correct
        architecture is: affiliate commission first, cash bonus at a conversion milestone,
        then equity vesting that begins only after the creator has delivered a defined
        subscriber count. The equity should vest monthly over 24 months and should never
        start until the delivery milestone is hit. A reasonable structure: 25% affiliate
        commission from day one, $500 cash bonus at 100 paying conversions, 1-2% equity
        vesting beginning only after 500 paying subscribers delivered over 12 months.
      </p>
      <p>
        Rob Walling's criteria for when to add equity to a creator relationship: paid
        channels and equity-heavy deals are premature until at least one organic or
        affiliate channel is validated. Equity before validation is giving away permanent
        value based on potential, not proof. (Walling, 2022)
      </p>

      <AnchorHeading as="h2" id="4-the-50-percent-question">
        4. The 50% question
      </AnchorHeading>
      <p>
        The question at the top of this chapter is real and specific: some founders are
        approached by creators offering to "partner" in exchange for 50% of the company,
        or are considering making such an offer themselves. This section answers whether
        that structure is appropriate.
      </p>
      <p>
        50% equity is co-founder territory. It implies permanent equal ownership of every
        future dollar the business generates, every future investor dilution, and every
        future exit negotiation. A co-founder at 50% has veto power over the business
        direction by default. The decision to give 50% is irreversible in the same way
        that issuing stock is irreversible: you can buy it back, but at a negotiated price,
        not at the original grant value.
      </p>
      <p>
        The Founder Institute's FAST agreement defines market norms for advisor equity
        explicitly. An expert advisor at the idea stage receives at most 1%, vesting over
        two years with a three-month cliff. A standard advisor at the growth stage receives
        0.15%. These advisors provide introductions, strategic guidance, and monthly calls.
        (FAST Agreement, Founder Institute, 2020)
      </p>
      <p>
        A creator who posts one sponsored video, or even a series of sponsored videos over
        twelve months, is not performing the work of a co-founder. They are performing the
        work of a distribution partner. The FAST ceiling for the most engaged expert advisor
        is 1%. A 50% equity offer is 50 times that ceiling.
      </p>
      <p>
        The question to ask about any potential co-founder, creator or otherwise: would this
        person work on this problem for five years if the payout were 10 years away? Would
        they be willing to pivot the product if the first thesis failed? Would they engage
        actively in product direction, not just distribution? If the answer to any of these
        is no, the relationship is not a co-founder relationship. It is a distribution
        relationship, and distribution relationships have market rates that are far below 50%.
      </p>

      <AnchorHeading as="h2" id="5-the-ev-model">
        5. Expected-value math: comparing the three structures
      </AnchorHeading>
      <p>
        The decision between flat-fee, affiliate, and equity is an expected-value problem.
        The correct framework: compute the expected value of each structure under a range of
        outcomes and compare the upside ceiling against the downside floor.
      </p>

      <Callout title="LangoBee unit economics (June 2026 floor assumptions)">
        <p>
          Price: $7.99/mo. Monthly churn assumption: 5% (no data; this is the floor).
          Average lifetime: 20 months. LTV per paying customer: $159.80. LTV:CAC target:
          3:1. Maximum defensible CAC: $53.27. Trial-to-paid conversion: 5% (no trials
          ever started; this is the floor). Break-even paying customers per $500 sponsorship:
          10. Break-even trial starts required: 200.
        </p>
      </Callout>

      <p>
        The flat-fee structure ($500 test):
      </p>
      <pre>{`If the video produces 0 paid conversions:
  Cost = -$500 (bounded)
  Equity given = 0%

If the video produces 10 paid conversions (break-even):
  Revenue = 10 × $159.80 LTV = $1,598
  Cost = $500
  Net = +$1,098
  Equity given = 0%

If the video produces 50 paid conversions (best case for micro):
  Revenue = 50 × $159.80 = $7,990
  Cost = $500
  Net = +$7,490
  Equity given = 0%`}</pre>

      <p>
        The 50% equity structure (assuming same video outcomes):
      </p>
      <pre>{`If the business reaches $10K MRR (roughly 1,253 subscribers):
  At a 10x revenue multiple, company value ≈ $1.2M
  Creator's 50% share ≈ $600K
  Founder's 50% share ≈ $600K (vs $1.2M with 0 equity given)

If the business does not reach PMF:
  Company value = $0
  Creator's 50% share = $0
  Founder gave away 50% for nothing

Equity given = 50% permanently, regardless of outcome`}</pre>

      <p>
        The asymmetry is stark. The flat-fee structure has a bounded downside ($500) and
        retains 100% of the upside. The equity structure has a zero cash downside but
        permanently gives away half the upside. At $0 MRR and 0 trials, the expected value
        of a flat-fee test dominates the equity grant under every plausible distribution
        of outcomes.
      </p>
      <p>
        The affiliate structure sits between the two. Zero upfront cash cost, but the
        creator earns a fraction of every conversion in perpetuity (while the relationship
        lasts). At 25% commission, the creator earns $2 per month per paying subscriber they
        brought in. At 100 paying subscribers, that is $200/month ongoing. This is a real
        cost but it is proportional to delivery and it does not dilute the equity cap table.
      </p>

      <AnchorHeading as="h2" id="6-langobee-prospecting-asset">
        6. The prospecting asset: 2,773 catalogued creators
      </AnchorHeading>
      <p>
        LangoBee has an asset no competitor has at this stage: 2,773 YouTube creators
        already catalogued in the database. These are not cold prospects. Their content is
        in the app. LangoBee's users are watching their videos to study. The outreach email
        can open with a specific, honest, verifiable fact rather than a generic pitch.
      </p>
      <p>
        The June 2026 snapshot: 17,440 texts, 98% video, Spanish 8,310 clips across 2,773
        catalogued creators. The `youtube_creators` table and the `texts` table together
        provide clip count per creator, average difficulty score, and the earliest and most
        recent clip dates. A single SQL query builds a ranked prospect list in minutes.
      </p>
      <p>
        Prospecting from internal data is faster and more targeted than building a list from
        YouTube search. The creator who appears 15 times in the LangoBee catalog has already
        demonstrated sustained production of the type of content the app uses. The creator
        who appears twice has not. Clip count is not the only signal (a creator with 20 clips
        of very easy content may be less useful than one with 5 clips of intermediate content),
        but it is a strong first filter.
      </p>
      <p>
        The personalized opening line that this asset enables: "Your video '[Title]' is one
        of the most-watched clips in LangoBee's Spanish catalog. Learners are using it to
        study right now." This is true. It is specific. It is not flattery. It is a fact the
        creator can verify by searching their channel title on the platform. That specificity
        is what separates a real outreach email from a template blast, and it is what prevents
        the clickthrough decay Andrew Chen describes. (Chen, 2012)
      </p>

      <AnchorHeading as="h2" id="7-the-outreach-wave">
        7. Structuring the outreach wave
      </AnchorHeading>
      <p>
        An outreach wave is not a mass email. It is a series of personalized contacts sent
        over a defined window, with a tracking system that records status for each contact.
        The discipline that makes it an experiment rather than a hope: every creator in the
        wave gets a UTM-tagged link so that trial starts are attributed to the correct source,
        and the wave has a defined end date after which you evaluate conversion and decide
        whether to expand.
      </p>
      <p>
        The Bullseye framework (Weinberg, 2015) specifies that a valid channel test should
        cost under $1,000 and produce results within 30 days. A 20-creator outreach wave,
        with 5 flat-fee conversions at $200-500 per video, fits within that budget. The
        remaining 15 contacts in the wave are affiliate outreach (zero upfront cost) that
        run in parallel and extend the data window.
      </p>
      <p>
        Response tracking is minimal but necessary. A spreadsheet with five columns is
        sufficient: creator name, channel URL, outreach date, response (yes/no/no response),
        and UTM link. Status should be updated within 48 hours of any response. A wave that
        produces 0 responses from 20 contacts over 30 days is a signal about message-match,
        not about the creator channel as a category. Before declaring the channel invalid,
        test an alternative subject line and opening paragraph with the next 20.
      </p>

      <AnchorHeading as="h2" id="8-the-recommendation">
        8. The recommendation
      </AnchorHeading>
      <p>
        The question: "Do I need a YouTuber partner to give 50% of LangoBee to in order to
        reach $10K MRR?"
      </p>
      <p>
        The answer: no. The expected-value math shows that a flat-fee test at $500 retains
        full equity while producing meaningful conversion data. If the test succeeds, you can
        offer an affiliate commission that aligns incentives without diluting equity. If that
        affiliate relationship demonstrates sustained delivery over 6-12 months, you can
        structure milestone-based equity at 1-2%, vesting against continued delivery. At no
        point in this sequence is 50% the right number.
      </p>
      <p>
        The bar for giving 50% to any person, creator or otherwise, is: would this person
        work like a co-founder for years, engage actively in product decisions, and still be
        the right partner after a pivot? If the honest answer is yes, the structure is a
        co-founder agreement with full vesting schedule (typically a four-year vest, one-year
        cliff). If the honest answer is no or maybe, the right structure starts with affiliate.
      </p>
      <p>
        Rob Walling's principle applies cleanly here: equity-heavy creator deals are premature
        before validation. LangoBee has not yet demonstrated that any acquisition channel
        converts. The correct sequence is: test first, validate conversion, then reward delivery
        with progressively more commitment. Equity is the last step, not the first. (Walling, 2022)
      </p>

      <AnchorHeading as="h2" id="exercises">9. Exercises</AnchorHeading>
      <p>Recall from memory. Do not look at the reading.</p>

      <Exercise n={1}>
        <p>
          Name the three deal structures for creator partnerships in order from most
          reversible to least. For each, state one condition that makes it the right
          structure. The FAST agreement tops out at what equity percentage for an expert
          advisor at the idea stage?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          LangoBee's LTV is estimated at $159.80 (5% monthly churn floor). At the 3:1
          LTV:CAC target, what is the maximum defensible CAC? If a micro-creator
          sponsorship costs $500, how many paying customers does it need to produce to
          be defensible? How many trial starts is that at a 5% trial-to-paid conversion
          rate?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          A creator with 80,000 subscribers asks for 50% equity in exchange for
          promoting LangoBee in one video per month for six months. Using the market
          rate data from this reading and the FAST agreement ceiling, write two sentences
          showing why this offer is structurally mismatched. Then propose an alternative
          structure that captures the same distribution value without the equity cost.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          In Andrew Chen's Law of Shitty Clickthroughs, three forces drive channel
          decay. Name all three. Then explain in one sentence why the "your videos are
          already in the catalog" opening line resists these forces better than a
          standard sponsorship template.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Write the expected-value comparison for two scenarios: (A) $500 flat-fee
          sponsorship that produces 10 paying customers; (B) 50% equity grant that
          produces the same 10 paying customers. Show the net value to the founder in
          each scenario. Which structure produces higher founder net value, and why?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          Section worksheet this week: build the 50-creator prospect list from the
          catalog, write and personalize the first five outreach emails, and write
          your equity recommendation.
        </li>
        <li>
          Week 10 Lecture 2: "Partner, sponsor, or affiliate" covers the milestone-based
          equity structure in detail and walks through the expected-value model live.
        </li>
        <li>
          The Refold Espanol Discord is the highest-signal community for reaching
          comprehensible-input Spanish learners directly. Before any creator outreach,
          spend one week in this community understanding what creators they already trust
          and what language they use to describe their learning practice. Those are the
          creators and frames to prioritize in the outreach list.
          ({" "}<a href="https://discord.com/servers/refold-espanol-es-667734565309382657">Refold Espanol Discord</a>)
        </li>
        <li>
          FAST Agreement full template at fi.co/fast. Read the explanation section, not
          just the equity table. The rationale for the cliff and vesting schedule applies
          equally to milestone-based creator equity.
        </li>
        <li>
          HW4 is in flight, due week 11. This week's section output (the equity
          recommendation and the outreach list) feeds directly into HW4's channel
          validation component.
        </li>
      </ul>

      <Takeaways>
        <li>Language-learning YouTube concentrates the target audience more than any other channel. Comprehensible-input creators have pre-qualified, methodologically aligned audiences. Go there first.</li>
        <li>Micro creators (10k-100k subscribers) offer the best cost-per-engaged-viewer for an unvalidated app. At $200-1,000 flat fee, a test produces meaningful data without betting runway on a single experiment.</li>
        <li>Three structures in order of commitment: flat-fee sponsorship (reversible, test first), affiliate commission (incentive-aligned, no upfront cash), milestone-based equity (earned against delivered results). Never skip the sequence.</li>
        <li>FAST advisor norms top out at 1% for an expert advisor at the idea stage. 50% is co-founder territory and is irreversible. The bar is "would this person work like a co-founder for years?" not "can they send one traffic spike?"</li>
        <li>The expected-value math at $0 MRR and 0 trials strongly favors the $500 flat-fee test over any equity grant. Validate conversion first, then reward delivery with progressively more commitment.</li>
      </Takeaways>

      <Bibliography>
        <p>
          Chen, A. (2012). The Law of Shitty Clickthroughs.{" "}
          <a href="https://andrewchen.com/the-law-of-shitty-clickthroughs/">
            andrewchen.com/the-law-of-shitty-clickthroughs/
          </a>{" "}
          Explains the three forces that decay every marketing channel toward zero clickthrough
          and what that implies for timing creator outreach.
        </p>
        <p>
          Founder Institute. (2020). FAST Agreement (Founder/Advisor Standard Template), Version 2.{" "}
          <a href="https://fi.co/fast">fi.co/fast</a>{" "}
          Market-rate equity norms for advisor relationships: 0.15-1% by stage and engagement
          level, two-year vest, three-month cliff.
        </p>
        <p>
          Influencer Marketing Hub editorial team. (2024). YouTube Influencer Rates: A Cost Guide for Brands.{" "}
          <a href="https://influencermarketinghub.com/youtube-influencer-rates/">
            influencermarketinghub.com/youtube-influencer-rates/
          </a>{" "}
          Flat-fee rates by creator tier and CPM benchmarks for niche content.
        </p>
        <p>
          Rachitsky, L. (2022). How to kickstart and scale a consumer business: Step 4, Find your early adopters.{" "}
          <a href="https://www.lennysnewsletter.com/p/consumer-business-find-first-users">
            lennysnewsletter.com/p/consumer-business-find-first-users
          </a>{" "}
          Seven acquisition strategies for consumer apps; influencer partnerships as the highest-impact
          kickstart for identity-driven audiences.
        </p>
        <p>
          Walling, R. (2022). Early Stage SaaS Marketing Overview (MicroConf Remote 2021).{" "}
          <a href="https://www.youtube.com/watch?v=BgC-yiNYsR4">
            youtube.com/watch?v=BgC-yiNYsR4
          </a>{" "}
          Criteria for structuring affiliate vs sponsorship vs equity deals; the principle that
          equity-heavy creator deals are premature before validation.
        </p>
        <p>
          Weinberg, G. (2015). The Bullseye Framework for Getting Traction.{" "}
          <a href="https://medium.com/@yegg/the-bullseye-framework-for-getting-traction-ef49d05bfd7e">
            medium.com/@yegg/the-bullseye-framework-for-getting-traction-ef49d05bfd7e
          </a>{" "}
          Three-ring channel testing framework; budget and time ceiling for a valid channel experiment.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk10ReadingSearchBody =
  "creator channel sponsorship affiliate equity partner 50 percent YouTuber FAST agreement advisor equity market rates CPM flat fee micro macro creators LTV CAC break-even expected value EV model 2773 creators catalog youtube_creators outreach wave UTM tracking milestone vesting comprehensible input Dreaming Spanish Bullseye framework week 10 distribution";
