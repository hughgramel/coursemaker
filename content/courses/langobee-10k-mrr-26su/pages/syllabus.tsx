import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

export function SyllabusPage() {
  return (
    <>
      <AnchorHeading as="h1" id="syllabus">Syllabus</AnchorHeading>
      <p>
        You arrive with a real product that has roughly 50 genuine users, 4 real weekly
        actives, zero revenue, and one manual acquisition channel. You leave twelve weeks
        later with honest instrumentation, a measured retention bar, a first paying
        customer (or a precise diagnosis of why not), a tested distribution engine, and a
        weekly operating cadence that an agent can audit. Every section and assignment in
        this course executes on LangoBee itself. There is no toy data anywhere.
      </p>

      <AnchorHeading as="h2" id="what-this-course-is-about">What this course is about</AnchorHeading>
      <p>
        This is an operator course for one specific company at one specific moment.
        LangoBee (langobee.com) is a comprehensible-input language-learning PWA with a
        17,440-item video catalog, a per-content comprehension score as its product wedge,
        and a fully wired Stripe subscription ($7.99/mo or $49/yr, premium-only, 14-day
        card-required trial) that no human has ever entered. The June 2026 data says the
        product acquires adequately when pushed by hand, activates about half of real
        signups, and then loses them: roughly 24% ever return, the median activated user
        spends about two minutes total, and the median session lasts 34 seconds.
      </p>
      <p>
        The course bias follows from that data: retention before acquisition, first dollar
        before scale, and distribution last because channels burn. The sequencing is the
        curriculum. Weeks 1-2 establish ground truth and decide the strategic fork on
        purpose. Weeks 3-5 fix the leak. Weeks 6-8 prove a human will pay and derive the
        $10K arithmetic. Weeks 9-11 build distribution: community launch, the creator
        channel (including the standing 50%-partner question), and owned content loops.
        Week 12 turns it all into a weekly machine.
      </p>

      <AnchorHeading as="h2" id="fundamentals">The five fundamentals</AnchorHeading>
      <ol>
        <li><strong>Numbers are de-alted or they are lies.</strong> Founder dogfooding produced 59% of recent events and one bot wave produced 52 fake signups in a week. Every metric in this course excludes internal accounts, bots, and anonymous crawlers before it is read.</li>
        <li><strong>Fix the leak before opening the taps.</strong> Driving traffic into a product that 24% return to wastes the traffic and burns the channel. Retention work precedes every launch.</li>
        <li><strong>A dollar of evidence beats a thousand visitors of hope.</strong> The single most informative event available to this business is one stranger starting one trial. Monetization is tested, not assumed.</li>
        <li><strong>Decisions are written before outcomes are known.</strong> Pivot criteria, kill thresholds, and time boxes get committed to paper first, so the decision is made by the version of you with clear eyes.</li>
        <li><strong>The machine runs weekly.</strong> Grade last week, read the input metrics, place one bet. A solo founder's edge is cadence plus agents, not headcount.</li>
      </ol>

      <AnchorHeading as="h2" id="roadmap">The roadmap</AnchorHeading>
      <h3>Foundations (weeks 1-2)</h3>
      <p>
        Establish the honest baseline: rebuild the de-alted funnel from raw PostHog and
        Supabase queries, dissect the June bot-signup spike, choose a north-star metric,
        and write the premium-library vs freemium-shorts fork as two falsifiable
        hypotheses with kill thresholds and a decision date.
      </p>
      <h3>Retention (weeks 3-5)</h3>
      <p>
        Reach the broken-vacuum bar: a must-work checklist run on real devices, a
        60-second guided first session ending in a first word tap, one shipped retention
        hook, and a hand-recruited cohort of 10-15 properly onboarded users measured
        against a D1 bar of 30% with paired qualitative evidence.
      </p>
      <h3>Monetization (weeks 6-8)</h3>
      <p>
        Prove the dollar: fire the first trial end to end, run willingness-to-pay
        interviews, move the paywall to the moment of demonstrated value (the
        comprehension score), and build the $10K model: subscriber counts, churn
        ceilings, and the visitor arithmetic for three channel scenarios.
      </p>
      <h3>Distribution (weeks 9-11)</h3>
      <p>
        Build the engine: a norms-respecting community launch (Reddit, Show HN) gated on
        retention, a 20-YouTuber outreach wave with the 50%-partner question answered in
        expected value, and one owned channel fed by the existing clip pipeline, with the
        share loop measured honestly.
      </p>
      <h3>Synthesis (week 12)</h3>
      <p>
        Run the operating system: the Monday cadence executed end to end, the twelve weeks
        graded against the mission, and the capstone operating plan presented and
        red-teamed against its own kill criteria.
      </p>

      <AnchorHeading as="h2" id="prerequisites">Prerequisites</AnchorHeading>
      <ul>
        <li>The live product and its data stack: PostHog (project 374549), Supabase, Stripe, Vercel.</li>
        <li>The langobee-intel business brain (THESIS.md, GROWTH.md, snapshots) and the Monday report habit it hosts.</li>
        <li>Ability to run SQL and HogQL queries directly or through agents.</li>
        <li>Roughly 15-20 hours per week of founder time; agents absorb the mechanical work.</li>
      </ul>

      <AnchorHeading as="h2" id="how-the-work-flows">How the work flows</AnchorHeading>
      <p>
        Each week: two lectures (with slide PDFs), one reading (the durable textbook
        chapter), and one hands-on section that ships something real on the business that
        same week. Four assignments and a capstone run underneath, each out for two to
        four weeks. The tasks page tracks all of it; the weekly report in langobee-intel
        records what actually happened. Sections open with a five-minute retrieval drill
        on the prior week and deliberately interleave concepts from two to three weeks
        back.
      </p>

      <AnchorHeading as="h2" id="how-you-are-evaluated">How you are evaluated</AnchorHeading>
      <p>
        Exact weights are confirmed before the term begins; the structure below is fixed.
        Every component is graded on evidence from the live business, with honesty of the
        underlying numbers weighing above the magnitude of any result.
      </p>
      <ul>
        <li><strong>Weekly milestones.</strong> The per-week shipped artifacts tracked on the tasks page.</li>
        <li><strong>HW1, The honest dashboard.</strong> De-alted source-of-truth metrics plus a bottleneck memo.</li>
        <li><strong>HW2, MVP-grade plus the cohort test.</strong> The checklist, the guided first session, and a measured 10-15 user cohort.</li>
        <li><strong>HW3, First dollar.</strong> The trial fires, five willingness-to-pay interviews, a positioning one-pager.</li>
        <li><strong>HW4, The launch and the creator wave.</strong> One community launch executed or explicitly no-go'd, 20 creator emails, the 50%-partner memo.</li>
        <li><strong>Capstone, The $10K operating plan.</strong> Sequenced bets, channel math, kill criteria, and the weekly cadence spec.</li>
      </ul>

      <AnchorHeading as="h2" id="policies">Policies</AnchorHeading>
      <h3>Late work</h3>
      <p>
        The calendar serves the business, not the reverse. If a live experiment needs
        another week of data, slip the assignment and write one sentence in the weekly
        report saying why. Slipping without recording the reason is the only way to be
        late in this course.
      </p>
      <h3>AI use</h3>
      <p>
        Expected and unlimited. This is a one-founder-plus-agents company; routing work
        through agents is the operating model, not a shortcut. Two constraints: you
        personally read every number before acting on it, and you personally talk to
        users. Judgment and relationships do not delegate.
      </p>

      <AnchorHeading as="h2" id="reading-list">Reading list</AnchorHeading>
      <p>
        There is no required external textbook. The weekly readings on this site are the
        textbook, written against a vetted source library. Books worth owning for depth:
      </p>
      <ul>
        <li><a href="https://www.momtestbook.com/" target="_blank" rel="noopener noreferrer">The Mom Test</a> (Rob Fitzpatrick): how to interview users without harvesting compliments.</li>
        <li><a href="https://www.penguinrandomhouse.com/books/670465/quit-by-annie-duke/" target="_blank" rel="noopener noreferrer">Quit</a> (Annie Duke): kill criteria and quitting on time.</li>
        <li><a href="https://www.harpercollins.com/products/the-cold-start-problem-andrew-chen" target="_blank" rel="noopener noreferrer">The Cold Start Problem</a> (Andrew Chen): network effects and loop design.</li>
        <li><a href="https://workingbackwards.com/" target="_blank" rel="noopener noreferrer">Working Backwards</a> (Colin Bryar and Bill Carr): the Weekly Business Review chapter alone justifies it.</li>
        <li><a href="https://robwalling.com/books/" target="_blank" rel="noopener noreferrer">The SaaS Playbook</a> (Rob Walling): bootstrapper economics end to end.</li>
      </ul>

      <AnchorHeading as="h2" id="communities">Where to find people who aren't this site</AnchorHeading>
      <p>
        Wisdom comes from communities, not courseware. Two kinds matter here: founder
        peers who will critique your numbers, and the language-learning communities where
        LangoBee's customers already live (learn their norms long before any launch post).
      </p>
      <ul>
        <li><a href="https://www.indiehackers.com/" target="_blank" rel="noopener noreferrer">Indie Hackers</a>: revenue milestones and launch retrospectives among bootstrappers.</li>
        <li><a href="https://microconf.com/connect" target="_blank" rel="noopener noreferrer">MicroConf Connect</a>: vetted, paid, highest-trust peer group for pricing and funnel teardowns.</li>
        <li><a href="https://www.reddit.com/r/SaaS/" target="_blank" rel="noopener noreferrer">r/SaaS</a>: story-led metric posts; mind the 60-day self-promo cap.</li>
        <li><a href="https://www.reddit.com/r/EntrepreneurRideAlong/" target="_blank" rel="noopener noreferrer">r/EntrepreneurRideAlong</a>: the native home for a public $0-to-$10K ride-along thread.</li>
        <li><a href="https://www.reddit.com/r/languagelearning/" target="_blank" rel="noopener noreferrer">r/languagelearning</a>: 3.4M learners, LangoBee's category; strict self-promotion rules, participate first.</li>
        <li><a href="https://www.reddit.com/r/Spanish/" target="_blank" rel="noopener noreferrer">r/Spanish</a>: the primary Spanish-learner venue; build karma before any mention.</li>
        <li><a href="https://discord.com/servers/refold-espanol-es-667734565309382657" target="_blank" rel="noopener noreferrer">Refold Espanol Discord</a>: the most methodologically sophisticated comprehensible-input learners; the highest-signal customer research room available.</li>
        <li><a href="https://www.patreon.com/DreamingSpanish" target="_blank" rel="noopener noreferrer">Dreaming Spanish community</a>: people already paying for comprehensible input; exactly the early-adopter profile.</li>
      </ul>
      <p>
        The full annotated list lives in the course's <code>communities.json</code>; the
        readings point to the most relevant entry each week. See also
        the <a href={`${base}/glossary`}>glossary</a> for the course's canonical language.
      </p>
    </>
  );
}

export const syllabusSearchBody =
  "Syllabus LangoBee $10K MRR operator course fundamentals de-alted retention before acquisition first dollar pivot criteria weekly cadence roadmap foundations retention monetization distribution synthesis prerequisites policies AI use reading list communities Indie Hackers MicroConf r/SaaS r/languagelearning Refold Dreaming Spanish";
