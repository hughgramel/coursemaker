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

export function Wk06Reading() {
  return (
    <ReadingPage
      id="wk06"
      title="Week 6: your 90-day playbook to 10,000 followers"
      kicker="Grow on X: From Zero to 10,000 Followers · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading is a capstone workbook. By the end you will have built
          three things. First, a complete 90-day playbook with phased milestones
          (0&rarr;1k, 1k&rarr;5k, 5k&rarr;10k), a weekly posting system, and a
          first-30-days posting plan. Second, a framework for critiquing a
          peer&rsquo;s playbook against the growth roadmap and naming the single
          highest-risk assumption in it. Third, a revenue projection at 10k
          followers grounded in data from Welsh, Barry, and Jin, matched to the
          specific monetization path that fits your audience&rsquo;s trust
          level. The capstone document you bring to section this week is the
          direct output of this reading.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Weeks 1-5 of this course: the
          follower funnel, niche positioning, bio craft, content formats, the
          posting calendar, the reply strategy and engagement loops, the
          collaboration framework, signal metrics, and the iteration system.
          This reading synthesizes all of those into a single executable plan.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-three-phases">
        1. Three phases, three different games
      </AnchorHeading>
      <p>
        Growth from zero to 10,000 followers does not follow a straight line. It
        follows three distinct curves, each with different winning conditions.
        Understanding which curve you are on changes everything: the posts you
        write, the accounts you reply to, the metrics you watch, and the
        collaborations you pursue.
      </p>
      <p>
        Welsh (2023) describes five phases of solopreneurship: Survival, Systems,
        Growth, Defense, and Automation. The three follower-count phases in this
        course map onto his framework, but the follower numbers are the more
        useful frame for deciding what to do next. Phase 1 (0&rarr;1k) is about
        proving that a specific audience will read you. Phase 2 (1k&rarr;5k) is
        about making that audience replicate itself. Phase 3 (5k&rarr;10k) is
        about leveraging the social proof and distribution you have built to
        accelerate the final stretch.
      </p>

      <Mermaid
        alt="The three X growth phases: 0 to 1k proves the niche, 1k to 5k compounds distribution, 5k to 10k uses network leverage"
        chart={`flowchart LR
  A["Phase 1\\n0 → 1k\\nProve the niche"] --> B["Phase 2\\n1k → 5k\\nCompound distribution"] --> C["Phase 3\\n5k → 10k\\nNetwork leverage"]
  A:::phase
  B:::phase
  C:::phase
  classDef phase fill:#f0f4ff,stroke:#4f6ef7,color:#1a1a2e`}
      />

      <p>
        The most common mistake is treating the three phases as one. A creator
        who applies phase 1 tactics at 6,000 followers, posting heavily in
        reply threads and relying on borrowed distribution, is playing the wrong
        game. By 5,000 followers you have enough social proof that original
        posts can carry real reach. Continuing to reply-farm at that stage is
        effort with low return. Conversely, a creator at 300 followers who tries
        to &ldquo;go viral&rdquo; with ambitious original content before
        establishing niche credibility is asking the algorithm to distribute
        content it has no signal for. The phases are not arbitrary. They reflect
        real shifts in how the platform&rsquo;s algorithm weighs your signal.
      </p>

      <AnchorHeading as="h2" id="2-phase-one">
        2. Phase 1: proving the niche (0&rarr;1k)
      </AnchorHeading>
      <p>
        Phase 1 has one goal: find the exact topic, format, and framing that
        causes a specific reader to follow you because they do not want to miss
        the next one. Everything else is subordinate to that goal.
      </p>
      <p>
        In this phase, your organic reach is tiny. The only way to grow is
        through <strong>borrowed distribution</strong>: replies to posts by
        larger accounts in your niche, quote-posts that add real value, direct
        collaborations with creators at your same size. Each of these moves
        puts your handle in front of an audience that already exists and already
        cares about your topic. Your job is to say something there that makes
        10% of those readers curious enough to click your profile.
      </p>
      <p>
        The content discipline in phase 1 is constraint, not volume. Post one
        thing per day that teaches a specific reader one specific thing. Not two
        things. Not a thread that covers an entire subject. One clear idea, one
        clear payoff. Barry (2019) describes this as moving up the value ladder:
        &ldquo;Making money is a skill, like playing the drums or piano, that
        you can get better at over time.&rdquo; The same is true of content
        quality. The phase 1 creator is learning their craft, and craft improves
        fastest under constraint.
      </p>
      <p>
        The <strong>first-milestone signal</strong> in phase 1 is not 1,000
        followers. It is the first post that earns 10 follows from people you
        have never met. That post tells you something specific: this topic, this
        framing, this level of detail, in this format, reached people outside
        your existing network. Write more posts like that one.
      </p>
      <p>
        Realistic phase 1 timeline: 4-6 months for a creator posting 5 times
        per week who iterates on feedback. Some creators reach 1k in 6 weeks
        with an exceptionally clear niche and one viral post. Others take a year
        because they resist narrowing the niche. The median is closer to 4-6
        months. Peer comparisons outside your niche are noise.
      </p>

      <AnchorHeading as="h2" id="3-phase-two">
        3. Phase 2: compounding distribution (1k&rarr;5k)
      </AnchorHeading>
      <p>
        At 1,000 followers you have a base. Phase 2 is about making that base
        work for you. When your followers share a post, the algorithm treats
        that share as a signal that the content deserves wider distribution. The
        more consistently you earn shares from your existing audience, the more
        reach each new post gets. This is the compounding mechanism Barry (2023)
        calls the creator flywheel: &ldquo;Each rotation is easier than the
        previous rotation and produces more results.&rdquo;
      </p>
      <p>
        Two moves define phase 2. First, you convert the audience off-platform.
        An email list is not a vanity metric in phase 2; it is an insurance
        policy and a trust signal. Welsh&rsquo;s newsletter grew to 185,000
        subscribers as a direct result of his X presence (Welsh, 2023). Newton
        (2025) built Platformer on this same principle: the newsletter became
        the product, with X as the distribution channel. If X reduces your
        reach tomorrow, the email list survives. Start building it now, before
        you need it.
      </p>
      <p>
        Second, you upgrade your collaboration targets. In phase 1, you
        collaborated with peers at your size because you had no social proof for
        larger creators to say yes. At 1k-5k followers, you have evidence. A
        creator at 15k-20k will consider a guest thread or a swap repost if your
        content quality is high and your niche is adjacent. One repost from a
        15k creator can deliver 500-1,000 profile visits. Even at a 15% follow
        rate, that is 75-150 new followers from a single collaboration.
      </p>
      <p>
        Realistic phase 2 timeline: 6-12 months. The compounding effect is
        real, but it takes 3-4 months of consistent posting to appear in the
        data. Creators who expect the flywheel to spin immediately in phase 2
        get discouraged and slow down at exactly the moment they should
        accelerate. The metric to watch in phase 2 is not follower count but
        the ratio of organic reach (follows from non-reply posts) to paid or
        borrowed reach (follows from replies and collaborations). As phase 2
        progresses, organic should grow as a share of total.
      </p>

      <AnchorHeading as="h2" id="4-phase-three">
        4. Phase 3: network leverage (5k&rarr;10k)
      </AnchorHeading>
      <p>
        Phase 3 is the fastest phase for most creators, often taking 3-6 months
        compared to the 6-12 months of phase 2. The reason is that at 5,000
        followers, second-degree distribution becomes real: your followers
        share your posts with their followers, some of whom follow you, some of
        whom share with their followers. The network effect is modest at 5k but
        meaningful by 8k-9k.
      </p>
      <p>
        The primary new move in phase 3 is <strong>proactive network
        targeting</strong>. Identify the 10-15 creators in your niche who have
        50k-200k followers. These are not your direct competitors. They are your
        potential distribution partners. Your goal is to be genuinely useful to
        their audience in their comment sections, not to self-promote. Over
        3-4 months of consistent, substantive replies, a meaningful percentage
        of their audience will follow you. If even one of those large creators
        reposts you or mentions you directly, the acceleration is significant.
      </p>
      <p>
        Phase 3 is also where the <strong>stall at 8k</strong> appears. At
        8,000 followers, many creators have settled into a comfortable routine:
        the same formats, the same cadence, the same framing. The algorithm
        reads consistent-but-flat as a signal that the content is no longer
        generating new engagement, and it reduces distribution. The remedy is
        deliberate disruption: one new format per month, a post that takes a
        position you have not taken before, a collaboration with a creator from
        an adjacent niche who brings a different reader. The goal is to show the
        algorithm (and the audience) that the account is still producing signal,
        not just maintaining it.
      </p>

      <AnchorHeading as="h2" id="5-milestone-plan">
        5. Building your milestone plan
      </AnchorHeading>
      <p>
        A milestone plan converts a 90-day ambition into a 30-day decision
        framework. The key insight from week 1 of this course still applies:
        follower count is a lagging indicator. The milestone plan tracks the
        leading indicators that predict follower growth, and sets phase-specific
        targets for each.
      </p>
      <p>
        Structure your plan around three 30-day blocks. Each block has a target
        follower count, a target for one leading indicator, and a trigger
        condition that tells you what to investigate if the target is missed.
      </p>
      <pre>{`30-DAY MILESTONE PLAN TEMPLATE

BLOCK 1 (days 1-30)
Current followers: ___
Target followers: ___
Phase: ___
Leading indicator target: profile-click-to-follow rate above 20%
Trigger: if target missed by >25%, audit bio and pinned post first

BLOCK 2 (days 31-60)
Target followers: ___
Phase: ___
Leading indicator target: organic share rate above 10% of posts
Trigger: if target missed by >25%, audit top 3 posts for format fit

BLOCK 3 (days 61-90)
Target followers: ___
Phase: ___
Leading indicator target: one collaboration yielding >50 profile visits
Trigger: if target missed by >25%, review collaboration targeting`}</pre>
      <p>
        The trigger condition is the part most playbooks omit. Without a
        pre-written diagnostic, creators who miss a target either panic and
        change everything or rationalize and change nothing. The trigger tells
        you specifically what variable to examine first, which keeps the
        iteration productive rather than reactive.
      </p>
      <p>
        Setting realistic targets requires honest benchmarking against accounts
        in your niche at the same stage. A creator in B2B SaaS with 200 starting
        followers should not set the same 30-day target as a creator in
        lifestyle or fitness, where viral mechanics operate differently.
        Peer-within-niche comparisons are the only useful benchmarks.
      </p>

      <Callout title="The 30-day target is a conversation, not a contract">
        <p>
          A milestone target you set today is based on incomplete information.
          Commit to the process, not the number. The point of the target is to
          force a diagnostic when you miss it. A target you meet without
          understanding why is not more valuable than a target you miss and
          diagnose correctly.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="6-weekly-system">
        6. The weekly system
      </AnchorHeading>
      <p>
        A weekly system is the operational backbone of a 90-day playbook. Without
        it, the playbook is a strategy document that sits untouched. The system
        converts strategy into repeatable action.
      </p>
      <p>
        The design principle for a weekly system is constraint: define the
        minimum number of actions that keeps your account growing, and build the
        system around that minimum. Welsh (2023) describes this as the
        &ldquo;Defense&rdquo; phase specifically: once you have found what works,
        your job is to protect and systematize it, not to add more. Barry (2023)
        calls it the flywheel: the wheel should spin at a sustainable speed, not
        as fast as possible.
      </p>
      <p>
        A minimum viable week for most creators in this course looks like:
      </p>
      <ul>
        <li>
          <strong>5 original posts.</strong> Written in one 90-minute batch
          session on Sunday or Monday. Scheduled ahead. Not written daily.
        </li>
        <li>
          <strong>10-15 substantive replies.</strong> 2-3 replies per day on
          weekdays. Not &ldquo;great post&rdquo; replies: replies that add a
          specific take, a counterexample, or a data point.
        </li>
        <li>
          <strong>1 metric check.</strong> One 15-minute session per week to
          check the leading indicators from the milestone plan. Not a daily
          follower-count check.
        </li>
        <li>
          <strong>1 iteration note.</strong> One sentence in a running doc about
          what performed above or below expectation this week and why.
        </li>
      </ul>
      <p>
        The iteration note is the piece creators most often skip, and it is the
        piece that compounds fastest. A creator with 52 weekly iteration notes
        at the end of a year knows their audience better than any creator who
        posts without reflection. The note does not have to be long. It has to
        be honest and specific.
      </p>

      <AnchorHeading as="h2" id="7-first-30-days">
        7. The first-30-days posting plan
      </AnchorHeading>
      <p>
        The first-30-days plan is the most concrete and most uncomfortable piece
        of the capstone. It asks you to commit, in advance, to the hooks or post
        titles for 30 posts. Most creators resist this because it feels
        constraining. It is actually liberating: when you sit down to post on
        day 14, you already know what you are writing. The decision has been
        made. You execute.
      </p>
      <p>
        Structure the 30 posts across four format categories. The section rubric
        requires at least four distinct formats, and the requirement exists
        because format diversity is how you discover which format your audience
        responds to most. The four categories that cover most niches:
      </p>
      <ol>
        <li>
          <strong>Teaching posts.</strong> One clear insight, one clear
          implication, one clear example. The format you use most in phase 1.
          Target: 12-15 of your 30 posts.
        </li>
        <li>
          <strong>Story posts.</strong> A before/after or a decision you made
          with a specific outcome. These build emotional connection with the
          audience that teaching posts alone do not create. Target: 6-8 posts.
        </li>
        <li>
          <strong>Engagement posts.</strong> A question, a poll, or a
          &ldquo;which of these two?&rdquo; post designed to generate replies.
          Replies boost distribution. Target: 4-6 posts.
        </li>
        <li>
          <strong>Curated posts.</strong> A quote-post, a reply turned into a
          standalone post, or a link to something genuinely useful with your
          specific take added. These build goodwill in the community without
          requiring original ideas every time. Target: 3-5 posts.
        </li>
      </ol>
      <p>
        When writing hooks for the first-30-days plan, apply the principle from
        week 2: the hook makes a specific promise and implies a payoff worth the
        reader&rsquo;s time. Vague hooks (&ldquo;some thoughts on
        consistency&rdquo;) do not convert impressions to reads. Specific hooks
        (&ldquo;I posted every day for 60 days. Here is what changed at day 45
        that I didn&rsquo;t expect&rdquo;) create a curiosity gap that pulls the
        reader forward.
      </p>

      <AnchorHeading as="h2" id="8-monetization">
        8. Projecting revenue at 10k: three paths
      </AnchorHeading>
      <p>
        Ten thousand followers is a meaningful threshold for monetization, but
        the revenue potential varies significantly by path. The data from Welsh,
        Barry, and Jin lets you project realistic year-one revenue before you
        reach 10k, which changes the decisions you make now about which path to
        prepare for.
      </p>
      <p>
        <strong>Path A: digital products.</strong> Welsh built his creator
        business on digital products priced at $250-300, with a 185,000-person
        newsletter as the distribution engine. The mechanics at 10k scale are
        smaller but structurally identical. Assume a 20% email conversion from
        your X following: 2,000 email subscribers. A product launch to 2,000
        subscribers at a 1% conversion rate and a $97 price point generates
        roughly $1,940 per launch. Two launches per year: $3,880. Add a second
        product at a higher price point ($197) with a smaller conversion rate
        (0.5%) and you approach $5,000-6,000 in year one. This path requires
        product creation time upfront, but the revenue is not tied to ongoing
        time investment after launch.
      </p>
      <p>
        <strong>Path B: sponsorships.</strong> At 10k followers with a
        well-defined niche, micro-sponsorship rates typically run $200-500 per
        post. Two sponsored posts per month at $300 generates $7,200 per year.
        Barry (2023) reports that Sahil Bloom&rsquo;s flywheel reached $22,000
        per month in sponsorships, but Bloom had 10k&rarr;30k+ newsletter
        subscribers driving that figure. The 10k-follower rate is genuinely in
        the $200-500 range for most niches. The constraint on this path is the
        trust battery (Clouse, 2023): sponsorships that are misaligned with your
        niche drain the audience&rsquo;s trust faster than they refill your
        bank account.
      </p>
      <p>
        <strong>Path C: newsletter with paid tier.</strong> Newton (2025) kept
        Platformer&rsquo;s price flat for five years at a level he calls
        &ldquo;low enough to be a non-decision&rdquo; for readers who value the
        work. The result: thousands of paid subscribers, 200,000 weekly free
        readers, and a business that did not depend on X&rsquo;s algorithm. At
        10k followers with 2,000 email subscribers, converting 5% to a $7/month
        paid tier generates $8,400/year. This path requires the most consistent
        effort (weekly long-form content) but produces the most predictable
        revenue. Newton&rsquo;s five-year data point is the strongest evidence
        that patience and consistency on this path pay more than chasing short-term
        monetization.
      </p>
      <p>
        The three paths are not mutually exclusive. Welsh and Barry both combine
        digital products with a newsletter. But spreading across all three in
        year one dilutes the trust-building that makes any one path work. Jin
        (2020) offers the diagnostic framing: tier your audience into free
        readers, patrons, and superfans. The path you choose should match where
        your audience&rsquo;s trust is deepest, not where the potential revenue
        is highest. A teaching-heavy niche with high reply rates is likely to
        convert to digital products. A niche with strong opinion-following and
        high DM volume is likely to convert to a paid newsletter. A niche with
        brand-adjacent content is likely to convert to sponsorships.
      </p>

      <AnchorHeading as="h2" id="9-trust-battery">
        9. The trust battery and audience loyalty
      </AnchorHeading>
      <p>
        Clouse (2023) describes the trust battery as the most important asset a
        creator has, and the one most easily destroyed. Every post that delivers
        on its promise charges the battery. Every post that disappoints,
        misleads, or promotes something the audience does not need drains it.
        Every monetization move draws from the battery. If the battery is full,
        the audience accepts the offer. If it is empty, the same offer generates
        backlash or silence.
      </p>
      <p>
        The trust battery frames the Kelly-Jin argument in operational terms.
        Kelly (2008) wrote: &ldquo;To make a living as a craftsperson,
        photographer, musician, designer, author, animator, app maker,
        entrepreneur, or inventor you need only thousands of true fans.&rdquo;
        Jin (2020) tightened this: 100 superfans at $1,000 each also works.
        Both arguments assume a full trust battery. A creator who rushes to
        monetize at 5,000 followers before charging the battery will find that
        the audience does not convert to paying customers at the rates Kelly and
        Jin describe.
      </p>
      <p>
        The practical implication: before you monetize, check the battery.
        Signals that the battery is charged: high reply rate, the same names
        appearing in your comments across multiple posts, direct messages asking
        how you can help. Signals that the battery is low: declining engagement
        per post as your follower count grows, replies that are transactional
        rather than conversational, low click rates on links in your posts.
      </p>
      <p>
        Newton (2025) took the long view: no price increases for five years, no
        format changes, no pivots to chasing virality. The payoff was an audience
        that trusted Platformer to be worth reading every week. That trust
        became the product&rsquo;s primary competitive advantage: &ldquo;The
        newsletter economy has managed to do what nothing else has over the same
        time period: create a popular, lucrative, replicable, stable format for
        journalism.&rdquo;
      </p>

      <AnchorHeading as="h2" id="10-worked-example">
        10. A worked example: assembling a playbook
      </AnchorHeading>
      <p>
        Here is a concrete example of a completed playbook for a hypothetical
        creator starting at 150 followers in a B2B niche (operations for
        early-stage startups). The example is abbreviated for space; your
        capstone document should expand each section.
      </p>
      <pre>{`CREATOR: Operations lead at a Series A startup
NICHE: Systems and processes for early-stage ops teams
STARTING FOLLOWERS: 150
TARGET: 1,000 followers at day 90

PHASE AT START: Phase 1 (proving the niche)

BLOCK 1 (days 1-30) | Target: 400 followers
- Leading indicator: profile-click-to-follow rate above 20%
- Primary move: 10 substantive replies/day to accounts in
  ops/startup niche; 5 original teaching posts/week
- Trigger: if below 300 followers at day 30, audit bio and
  pinned post before changing content

BLOCK 2 (days 31-60) | Target: 650 followers
- Leading indicator: 2+ posts earning shares from
  followers with 1k+ followers
- Primary move: one collaboration with a peer-level creator;
  start newsletter landing page
- Trigger: if below 550, review last 20 posts for format
  concentration (likely too many of same type)

BLOCK 3 (days 61-90) | Target: 1,000 followers
- Leading indicator: email list at 100 subscribers
- Primary move: one thread series (3-part) on a topic that
  gets reposted; begin writing first digital product outline
- Trigger: if below 850, return to phase 1 reply strategy
  for 2 weeks before resuming original-content focus

WEEKLY SYSTEM (minimum viable week):
- Sunday: batch-write 5 posts (90 min)
- Mon-Fri: 2-3 substantive replies per day (20 min/day)
- Friday: 15-min metric check + one-sentence iteration note

MONETIZATION PATH MATCH:
Teaching-heavy niche, high reply rate expected.
Path A (digital products) at 10k.
First product concept: a 30-day onboarding checklist
for ops hires at pre-Series B companies. Price: $97.`}</pre>
      <p>
        The example shows the structure, not the detail. Your version should
        include 30 actual post hooks, a specific niche statement, and a revenue
        projection that uses real numbers from the monetization section above.
        The worked example is a scaffold; the capstone is the building.
      </p>

      <AnchorHeading as="h2" id="11-exercises">11. Exercises</AnchorHeading>
      <p>
        These exercises are the capstone document. Complete all five before
        section. They are designed to be done in order.
      </p>

      <Exercise n={1}>
        <p>
          Write your three-block milestone plan using the template in section 5.
          For each block: name your target follower count, your phase (1, 2, or
          3), one leading indicator target, and a specific trigger condition. The
          targets must be grounded in your niche&rsquo;s realistic growth rates,
          not in aspirational round numbers.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Write your weekly system as a named schedule. Name the days and times
          for your batch-writing session, your reply windows, your metric check,
          and your iteration note. Then stress-test it: which week in the next
          90 days will be the hardest to maintain this system? What is your
          contingency for that week?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write 30 post hooks organized by week and by format. Each week should
          contain at least two teaching posts and one engagement or story post.
          At least four different formats must appear across the 30 posts. For
          each hook, write one sentence explaining the specific payoff the reader
          will get.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Project your year-one revenue at 10k followers. Choose one of the
          three paths from section 8 (digital products, sponsorships, or paid
          newsletter). Show the arithmetic: your email conversion assumption,
          your price point, your conversion rate on a launch or subscription
          ask, and the annual total. Then name one assumption in your projection
          that is highest-risk and explain how you would test it before you reach
          10k.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Exchange your playbook draft with one peer before section. Read their
          playbook and identify the single highest-risk assumption in their plan.
          Write one paragraph explaining why it is the highest-risk assumption
          and what evidence would either confirm or refute it. Bring both your
          playbook and your peer critique to section.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="12-going-deeper">12. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> Capstone demo day. You present
          your full playbook to two peers and receive structured feedback on
          your milestone targets, weekly system, and first 30 post hooks.
          Arrive with all six components of the capstone document completed.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the three phases in
          depth, including the stall points at 500, 2k, and 8k. Review the
          follow-up questions from lecture before section: they help you
          anticipate the peer feedback you will receive.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers sustainable cadence,
          the trust battery, and the monetization projections in more detail.
          The worked examples in lecture 2 include Sahil Bloom&rsquo;s flywheel
          numbers and Casey Newton&rsquo;s five-year Platformer data.
        </li>
        <li>
          <strong>Optional video.</strong> Justin Welsh&rsquo;s talk
          &ldquo;How I Built an $8M Business with 0 Employees&rdquo; covers his
          full solopreneurship arc from the inside. The five-phase framework from
          Welsh (2023) is easier to understand after watching his account of
          each phase firsthand. About 43 minutes:{" "}
          <a href="https://www.youtube.com/watch?v=ZkwYxYfkfYU">
            youtube.com/watch?v=ZkwYxYfkfYU
          </a>
          .
        </li>
        <li>
          <strong>Optional video.</strong> Jay Clouse&rsquo;s talk &ldquo;How
          I Made $300,000+ Last Year in the Creator Economy&rdquo; applies the
          trust battery and product ladder concepts to a real creator&rsquo;s
          financials. About 25 minutes:{" "}
          <a href="https://www.youtube.com/watch?v=d_o2rZbF_KI">
            youtube.com/watch?v=d_o2rZbF_KI
          </a>
          .
        </li>
      </ul>

      <Takeaways>
        <li>
          Growth from zero to 10k is three separate games. Phase 1 proves the
          niche through borrowed distribution. Phase 2 compounds that proof into
          organic reach. Phase 3 uses network leverage and original distribution
          to close the final gap.
        </li>
        <li>
          A milestone plan with a trigger condition beats a milestone plan with
          only a target number. The trigger tells you what variable to examine
          when you miss, which keeps iteration productive rather than reactive.
        </li>
        <li>
          The weekly system should be designed for your hardest week, not your
          easiest. A minimum viable week of 5 posts plus 10-15 replies plus one
          metric check is sustainable for most creators with a day job.
        </li>
        <li>
          Year-one revenue at 10k is $5,000-8,000 on any single path if the
          trust battery is charged. The monetization path that fits best is the
          one that matches your audience&rsquo;s existing behavior, not the one
          with the highest theoretical ceiling.
        </li>
        <li>
          The capstone playbook you build this week is a living document. The
          version you submit is the version you start from, not the version you
          end with.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Barry, Nathan. &ldquo;Creator Flywheels.&rdquo; 2023.{" "}
          <a href="https://nathanbarry.com/creator-flywheels/">
            nathanbarry.com/creator-flywheels/
          </a>
          . Documents the compounding mechanics of the creator flywheel,
          including Sahil Bloom&rsquo;s revenue numbers and the role of email
          in converting X followers to recurring income.
        </p>
        <p>
          Barry, Nathan. &ldquo;Ladders of Wealth Creation.&rdquo; 2019.{" "}
          <a href="https://nathanbarry.com/wealth-creation/">
            nathanbarry.com/wealth-creation/
          </a>
          . Describes five rungs from time-for-money to recurring software; the
          framework for thinking about product-path sequencing at each growth
          phase.
        </p>
        <p>
          Clouse, Jay. &ldquo;The Audience Trust Battery.&rdquo; Creator Science,
          2023.{" "}
          <a href="https://creatorscience.com/trust-battery/">
            creatorscience.com/trust-battery/
          </a>
          . The operational model for audience trust: what charges it, what drains
          it, and how monetization decisions interact with it.
        </p>
        <p>
          Jin, Li. &ldquo;1,000 True Fans? Try 100.&rdquo; Andreessen Horowitz,
          2020.{" "}
          <a href="https://a16z.com/1000-true-fans-try-100/">
            a16z.com/1000-true-fans-try-100/
          </a>
          . Updates the Kelly framework with a tiered audience model: free readers,
          patrons, and superfans. The diagnostic for choosing a monetization path.
        </p>
        <p>
          Kelly, Kevin. &ldquo;1,000 True Fans.&rdquo; 2008.{" "}
          <a href="https://kk.org/thetechnium/1000-true-fans/">
            kk.org/thetechnium/1000-true-fans/
          </a>
          . The foundational argument that a small number of dedicated fans is
          sufficient to sustain a creative career. The starting point for all
          creator-economy revenue thinking.
        </p>
        <p>
          Newton, Casey. &ldquo;What I Learned in the First Five Years of
          Platformer.&rdquo; 2025.{" "}
          <a href="https://www.platformer.news/platformer-year-five-lessons/">
            platformer.news/platformer-year-five-lessons/
          </a>
          . Five years of data on a subscription newsletter built on consistent
          publishing, flat pricing, and audience loyalty. The strongest available
          evidence for the patient, trust-first monetization approach.
        </p>
        <p>
          Welsh, Justin. &ldquo;The 5 Phases of Solopreneurship.&rdquo; 2023.{" "}
          <a href="https://www.justinwelsh.me/newsletter/the-5-phases-of-solopreneurship">
            justinwelsh.me/newsletter/the-5-phases-of-solopreneurship
          </a>
          . Welsh&rsquo;s framework for the survival-to-automation arc of a solo
          creator business, with his own financials ($250-300 digital products,
          185k newsletter subscribers) as the worked example.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk06ReadingSearchBody =
  "90-day playbook three growth phases 0 to 1k 1k to 5k 5k to 10k milestone plan weekly system first 30 posts monetization digital products newsletter sponsorships trust battery Kelly Jin Barry Welsh Newton audience loyalty creator flywheel stall points 500 2k 8k borrowed distribution compounding organic reach network leverage capstone Week 6 reading";
