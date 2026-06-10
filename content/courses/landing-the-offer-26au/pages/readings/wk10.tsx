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

export function Wk10Reading() {
  return (
    <ReadingPage
      id="wk10"
      title="Week 10: your personal hiring playbook"
      kicker="Landing the Offer: SWE Job Search for Senior CS Students &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading is the capstone synthesis for the course. By the end you
          will have assembled three things. First, a template for running a
          one-week application sprint: 15 quality applications, 5 referral
          activations, and one unconventional move, tracked against a daily
          cadence. Second, a framework for critiquing your own recorded mock
          loop and identifying the single highest-leverage improvement before
          your first real on-site. Third, a complete personal hiring playbook
          that you can update and reuse in every future search. The reading does
          not teach new mechanics. It weaves together the formal and side-door
          tracks you have been building since week 1 and gives you the template
          to run them together.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Weeks 1-9 of this course: the
          hiring funnel and side-door paths (w1), resume and public artifact
          construction (w2), coding interview patterns including hash map,
          two-pointer, sliding window, BFS, DFS, and DP (w3, w4, w5),
          interview communication and think-aloud technique (w5), system design
          rubric and tradeoffs (w6), STAR behavioral stories (w7),
          open-source contribution and find-a-problem moves (w8), application
          cadence and offer negotiation (w9). This reading synthesizes all of
          those into one executable plan.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-two-track-playbook">
        1. The two-track playbook
      </AnchorHeading>
      <p>
        Every effective SWE job search runs two tracks in parallel. The{" "}
        <strong>formal track</strong> is the visible machinery: portal
        applications, recruiter outreach, and take-home assignments that flow
        through official channels. The <strong>side-door track</strong> is
        everything that bypasses the queue: referrals from warm contacts,
        open-source contributions that surface you to engineers, cold emails
        paired with a specific artifact, and find-a-problem moves that
        demonstrate you understand a company&rsquo;s actual work.
      </p>
      <p>
        The two tracks are not alternatives. They reinforce each other. A
        side-door move that produces a warm introduction makes the formal
        application more likely to reach a phone screen. The formal application
        gives the side-door contact something specific to reference when they
        make the introduction. Candidates who run only the formal track compete
        against every other applicant in the same queue. Candidates who run
        both tracks create a second path that most of the queue cannot see.
      </p>

      <Mermaid
        alt="The two-track playbook: formal track (portal, recruiter, take-home) runs in parallel with the side-door track (referral, open source, cold artifact, find-a-problem), both converging on a live conversation"
        chart={`flowchart LR
  A["Formal track\\nPortal · Recruiter · Take-home"] --> C["Live conversation"]
  B["Side-door track\\nReferral · OSS PR · Cold artifact · Find-a-problem"] --> C
  C --> D["Phone screen"] --> E["On-site"] --> F["Offer"]
  A:::track
  B:::track
  C:::conv
  D:::conv
  E:::conv
  F:::conv
  classDef track fill:#f0f4ff,stroke:#4f6ef7,color:#1a1a2e
  classDef conv fill:#efffef,stroke:#4caf50,color:#1a1a2e`}
      />

      <p>
        Graham (2013) describes the logic of the side-door track without naming
        it as such: &ldquo;Actually startups take off because the founders make
        them take off. There may be a handful that just grew by themselves, but
        usually it takes some sort of push to get them going.&rdquo; The same
        dynamic applies to a job search. A search that waits for the formal
        track to produce results is a search that waits for someone else to
        decide to push. The side-door moves are the push you control.
      </p>
      <p>
        The pattern across successful searches is consistent. The candidates who
        converted the most conversations to offers knew something specific about
        their target companies that generic applicants did not, used that
        knowledge to do something specific (a PR, a message, an artifact), and
        the specific thing gave a person at the company a reason to respond.
        The formal channel confirmed the candidacy. The side door created the
        introduction.
      </p>

      <AnchorHeading as="h2" id="2-sprint-template">
        2. The one-week application sprint as a unit of work
      </AnchorHeading>
      <p>
        A one-week application sprint is a concentrated period in which you run
        both tracks at maximum intensity for five working days. The sprint has
        a fixed template: 15 quality applications, 5 referral activations, and
        1 unconventional move. The sprint ends when you have at least three
        live conversations in progress.
      </p>
      <p>
        The numbers are chosen to be achievable without being trivial. Fifteen
        quality applications means 15 companies where you have a referral, a
        specific artifact, or a tailored message that names the team or problem.
        It does not mean 15 generic portal submissions. Five referral activations
        means five messages to specific people in your network asking directly
        for an introduction or a referral. One unconventional move means one
        thing that the rest of the applicant pool cannot or will not do: a
        merged PR, a cold email with a real artifact attached, a public piece of
        work that targets one specific company&rsquo;s problem.
      </p>
      <p>
        The daily structure within the sprint is rigid by design:
      </p>
      <pre>{`ONE-WEEK SPRINT TEMPLATE

DAILY CADENCE (repeat each working day)
  Morning (30 min): pipeline review
    - Read every open thread
    - Send one follow-up for any thread cold > 48 hours
    - Move any advanced thread onto your calendar
  Midday (60 min): outreach block
    - 2-3 new messages, each targeting a specific person
    - No template blasts; name the team or the problem
  Afternoon (45 min): practice block (maintenance only)
    - One timed coding problem OR one 20-min design sketch
    - Narrate aloud; simulate interview conditions

SPRINT TARGETS
  Quality applications:   15
  Referral activations:    5
  Unconventional moves:    1
  Live conversations:      3 (minimum to declare sprint success)

SEQUENCING
  Day 1-2: activate warm contacts (most lead time needed)
  Day 1-3: submit portal applications with tailored messages
  Day 2-4: execute the unconventional move
  Day 3-5: follow up on cold threads; respond same-day to replies`}</pre>
      <p>
        The pipeline review each morning is the most important block. Without
        it, threads go cold and the sprint&rsquo;s output collapses to
        applications sent rather than conversations opened. A thread that has
        gone cold for 48 hours is a thread that needs a follow-up today, not
        tomorrow.
      </p>

      <AnchorHeading as="h2" id="3-mock-loop-mirror">
        3. The mock loop as honest mirror
      </AnchorHeading>
      <p>
        Recording yourself in a mock loop and watching the recording is the
        highest-return preparation activity available at week 10. Not because
        you will discover that you are worse than you thought, but because you
        will discover exactly where your execution breaks down, in a way that
        vague self-assessment cannot.
      </p>
      <p>
        Watch each round twice. The first pass is for the overall picture: how
        did it feel, where did the energy drop, what was the general impression.
        The second pass is diagnostic. Watch with a stopwatch and note the exact
        minute you stopped narrating your reasoning, any clarifying question you
        should have asked at the start, any moment you restarted a solution
        without explaining why, and how much time remained when you declared
        done.
      </p>
      <p>
        Graham (2023) frames the mechanism precisely: &ldquo;Curiosity is the
        key to all four steps in doing great work: it will choose the field for
        you, get you to the frontier, cause you to notice the gaps in it, and
        drive you to explore them.&rdquo; Applied to a mock loop critique, the
        curiosity is about your own performance: what is actually happening in
        those recordings, not what you imagine is happening.
      </p>
      <p>
        The highest-leverage fix in a mock loop is almost always a communication
        gap rather than a knowledge gap. The most common patterns:
      </p>
      <ul>
        <li>
          <strong>Silent stretches.</strong> The candidate stops narrating at
          minute 15-20 of a 45-minute problem. The interviewer has no signal
          about what is happening. Even if the solution is correct, the silence
          creates uncertainty about process.
        </li>
        <li>
          <strong>Skipped requirements clarification.</strong> The candidate
          treats the problem statement as complete and begins coding immediately.
          In a real interview, clarifying questions demonstrate systems thinking
          and prevent wasted time on a solution to the wrong problem.
        </li>
        <li>
          <strong>Missing the result in a behavioral story.</strong> The STAR
          structure lands hard on Situation and Task, runs short on Action, and
          forgets the Result entirely. The result is what the interviewer is
          waiting for: it tells them whether the action worked.
        </li>
        <li>
          <strong>Finishing without testing.</strong> The candidate writes a
          correct solution, declares it done, and stops. In a real interview,
          walking through a test case at the end demonstrates correctness and
          signals attention to detail.
        </li>
      </ul>
      <p>
        Identify the one fix that would have the highest impact across all four
        rounds. One fix practiced consistently before your first real on-site is
        worth more than ten vague improvements.
      </p>

      <Callout title="The critique is not a score">
        <p>
          The goal of the mock loop critique is not to grade your performance.
          It is to identify one specific, actionable fix. A critique that
          produces the note &ldquo;I need to communicate better&rdquo; has
          failed. A critique that produces the note &ldquo;I stopped narrating
          at minute 18 of Round 2 and the interviewer asked what I was doing;
          I will practice narrating every 2 minutes for the next three sessions&rdquo;
          has succeeded.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-personal-playbook">
        4. What a personal hiring playbook contains
      </AnchorHeading>
      <p>
        A personal hiring playbook is the document you build from one search
        and bring to the next. Its purpose is to make every subsequent search
        start at the quality level of this one&rsquo;s final week, rather than
        starting over from scratch. Graham (2023) describes the compounding
        logic: consistency over time produces results that any single sprint
        cannot. The playbook is the consistency mechanism.
      </p>
      <p>
        A complete playbook has five components:
      </p>
      <p>
        <strong>1. Target list with reasoning.</strong> The companies you
        targeted, the tier each was in, the side-door surface each had, and a
        one-sentence note on why each was or was not worth the time. Not a list
        of company names: a decision record. When you run the next sprint, you
        start from this list rather than rebuilding it.
      </p>
      <p>
        <strong>2. Story bank.</strong> Twelve to fifteen STAR stories indexed
        by leadership signal: ownership, conflict, failure, cross-functional
        collaboration, learning under pressure. Each story updated after the
        search to reflect which versions landed and which needed revision. The
        story bank grows with your career. Stories from a new-grad search become
        the foundation for the stories you will tell as a mid-level engineer.
      </p>
      <p>
        <strong>3. Design preparation notes.</strong> Two or three system design
        problems you can run confidently end to end: the components, the data
        flow, the storage choice and its reasoning, the primary tradeoff. One
        tradeoff you know well enough to defend under probing questions. These
        notes are not a transcript of a design session; they are the three-line
        version of your reasoning that you can reconstruct from memory.
      </p>
      <p>
        <strong>4. Sprint cadence with annotations.</strong> The daily template
        from week 10, annotated with what you adjusted and why. Which block was
        the hardest to maintain. What day the pipeline review started revealing
        threads that needed follow-up. These annotations are what make the
        template yours rather than a generic document.
      </p>
      <p>
        <strong>5. What worked and what to repeat.</strong> One paragraph per
        channel: formal applications, referral activations, and unconventional
        moves. Honest about the conversion rate you actually saw, not the rate
        you hoped for. The paragraph on unconventional moves is the most
        important: it names the move, the company, the artifact, and the
        response. If the response was silence, it still belongs in the playbook
        as evidence.
      </p>
      <pre>{`PERSONAL HIRING PLAYBOOK TEMPLATE

1. TARGET LIST
   Rows: company | tier | side-door surface | outcome | one-line note
   Update after each sprint.

2. STORY BANK
   Rows: signal | situation (1 sentence) | action (2 sentences) | result (1 sentence)
   Index: ownership, conflict, failure, cross-functional, learning
   Note: which version landed, which needed revision

3. DESIGN NOTES
   Entry per problem: components | data flow | storage choice | key tradeoff
   Format: 3-line version you can reconstruct from memory

4. SPRINT CADENCE (annotated)
   Copy of the week 10 daily template
   Annotations: what you adjusted, what broke down, what you would change

5. WHAT WORKED
   Formal track: conversion rate, what made the difference
   Referral track: which contacts converted, the ask that worked
   Unconventional move: the move, the artifact, the response`}</pre>

      <AnchorHeading as="h2" id="5-after-week-10">
        5. What happens after week 10
      </AnchorHeading>
      <p>
        The skills you built this term decay if you do not maintain them.
        The maintenance task is smaller than the acquisition task: two coding
        problems per week narrated aloud, one system design sketch per month,
        and one new story added to the bank every time you do something worth
        remembering. The NeetCode roadmap covers the problem set to continue
        from; the system design habit needs no external structure, just a
        20-minute block and a blank page.
      </p>
      <p>
        McKenzie (2012) makes the negotiation point that generalizes to the
        steady-state habit: &ldquo;You can trivially pick up $5,000 in salary
        negotiations just by sucking less.&rdquo; The same arithmetic applies
        to the maintenance habit. A candidate who does two problems per week
        for six months after this course will be materially sharper in their
        first on-site than one who stopped entirely. The gap is not large per
        week; it compounds over months.
      </p>
      <p>
        Stop sending new applications when you have a signed offer from a
        company you are genuinely excited about, or when you have three active
        on-site processes in progress (more than three creates scheduling
        conflicts that hurt all of them). Do not stop because the search feels
        difficult. Difficult is the baseline for a competitive market. Stop
        because you have a good reason.
      </p>
      <p>
        Between signing and the start date, the work continues. Read the
        onboarding documentation before day one. Talk to at least one engineer
        who joined in the last year: ask what they wish they had known. Decide
        on one technical skill to strengthen in the gap and work on it
        consistently, not in a sprint. The start date is not the end of the
        search; it is the beginning of the next compounding period.
      </p>
      <p>
        The playbook you write this week is the version you start from, not the
        version you end with. Every search adds evidence. Every sprint teaches
        you something about what works for you specifically, at this stage of
        your career, in this market. The candidates who negotiate well, move
        well, and keep the habit alive between searches are not more talented
        than the ones who do not. They are more systematic.
      </p>

      <AnchorHeading as="h2" id="6-worked-example">
        6. A worked example: assembling the playbook
      </AnchorHeading>
      <p>
        Here is a condensed example of a completed playbook for a hypothetical
        candidate finishing this course. The example is abbreviated; your
        version should expand each section with specific company names, story
        details, and real annotations.
      </p>
      <pre>{`CANDIDATE: Senior CS student, two internships (one in fintech, one in infra)
SEARCH TARGET: backend or infra SWE, new-grad or entry-level
SPRINT RESULT: 3 phone screens initiated in 5 days

TARGET LIST (excerpt)
  Stripe     | reach  | OSS contribution (stripe-mock) | phone screen scheduled
  Linear     | match  | cold email + artifact          | replied, intro pending
  Cloudflare | match  | referral (classmate, interned) | application referred
  Retool     | match  | portal + tailored message      | no reply after 1 week
  Render     | safety | portal                          | phone screen scheduled

STORY BANK (excerpt)
  Ownership: "Rewrote the batch-export pipeline to cut P99 latency from
  4s to 800ms after a customer escalation." Worked at infra internship.
  Result: customer renewed, team adopted the pattern.

  Failure: "Merged a migration without a rollback path; caused 20-min
  downtime. Led the post-mortem, wrote the checklist that prevented
  recurrence." Result landed well in two interviews.

DESIGN NOTES
  Rate limiter: token bucket (write to Redis, atomic decrement) vs.
  sliding window (log per key). Choose token bucket for simplicity at
  moderate scale; add sliding window if per-second precision matters.
  Key tradeoff: Redis single-point-of-failure vs. distributed rate limit.

SPRINT CADENCE (annotated)
  Pipeline review: critical. Found two cold threads on day 3 that needed
  follow-up. Without the review block I would have missed them.
  Practice block: dropped to 30 min by day 4. Fatigue is real.
  Adjustment: move practice block to morning next sprint; do outreach
  after lunch when energy is lower.

WHAT WORKED
  Unconventional move (stripe-mock PR): the engineer who reviewed the PR
  sent a direct message asking about my background. Converted to a phone
  screen. Highest-return action of the sprint.
  Referral (Cloudflare): classmate made intro within 24 hours of ask.
  Generic portal (Retool): no reply after 1 week. Low priority next sprint.`}</pre>

      <AnchorHeading as="h2" id="7-exercises">7. Exercises</AnchorHeading>
      <p>
        These exercises build the capstone components. Complete them in order
        before section.
      </p>

      <Exercise n={1}>
        <p>
          Write your one-week sprint plan using the template in section 2. Name
          the 15 companies, identify which have a referral, artifact, or
          tailored-message path, and describe your one unconventional move in
          one paragraph. The unconventional move must name the company, the
          artifact or action, and the specific person or team you are targeting.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Watch your recorded mock loop from the capstone. Run the two-pass
          critique described in section 3: first pass for overall picture,
          second pass with timestamps. Write down the exact minute in each
          round where your performance was weakest. Then name one fix: specific,
          actionable, with a practice method attached.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write the five components of your personal hiring playbook using the
          template in section 4. For the &ldquo;what worked&rdquo; section, be
          honest about conversion rates: how many formal applications reached a
          phone screen, how many referral asks produced a response, and what
          happened with your unconventional move. If a channel produced zero
          responses, say so and name a hypothesis for why.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Write the exact sentence you will say to a recruiter after receiving a
          verbal offer, before you have the details in writing. Then write the
          exact sentence you will say when you call back to negotiate after
          reviewing the written offer. Use McKenzie&rsquo;s (2012) framing as
          a starting point but make the language your own. Read both sentences
          aloud until they sound natural.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Write your steady-state maintenance plan for the three months after
          this course ends. Name the specific problem set you will continue from
          (cite the NeetCode roadmap section), the frequency of design sketches,
          and the trigger condition for adding a new story to the bank. The plan
          must be specific enough that you can evaluate in three months whether
          you followed it.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="8-going-deeper">8. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> Mock interview marathon: four
          back-to-back rounds with a partner, followed by a structured debrief.
          The debrief asks the same question the mock loop critique asks: which
          round degraded most, and what is the one fix?
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> The application sprint in
          depth: daily cadence, pipeline review mechanics, and how to sequence
          the formal and side-door tracks in one week.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Demo day and personal
          playbook: loop review methodology, what worked across channels, and
          the negotiation reminder.
        </li>
        <li>
          <strong>Ongoing DSA practice.</strong> After this course, continue
          from the NeetCode roadmap at{" "}
          <a href="https://neetcode.io/roadmap">neetcode.io/roadmap</a>. Two
          mediums per week narrated aloud is the maintenance dose. The roadmap
          covers patterns you have not yet seen; work through them at the
          steady-state pace, not the sprint pace.
        </li>
        <li>
          <strong>Capstone (due this week).</strong> All three components:
          application sprint log showing at least three live conversations
          initiated, recorded mock loop with written critique naming one
          highest-leverage fix, and documentation of one unconventional move
          targeting one specific company.
        </li>
      </ul>

      <Takeaways>
        <li>
          Run both tracks in parallel. The formal track confirms the candidacy;
          the side-door track creates the introduction. Candidates who run only
          one track compete in a harder contest.
        </li>
        <li>
          The one-week sprint template has fixed targets: 15 quality
          applications, 5 referral activations, 1 unconventional move, a
          daily pipeline review. The targets are chosen to be achievable and to
          force quality over volume.
        </li>
        <li>
          The highest-leverage fix in a mock loop is almost always a
          communication gap: stopping narration, skipping requirements
          clarification, or forgetting the result in a STAR story. One fix
          practiced consistently beats ten vague improvements.
        </li>
        <li>
          A personal hiring playbook with five components (target list, story
          bank, design notes, sprint cadence, and what worked) means the next
          search starts at week 10 quality rather than week 1.
        </li>
        <li>
          Negotiate every offer, as a policy. Maintain the coding and design
          habit after the course ends. The candidates who do are not more
          talented; they are more systematic.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Graham, Paul. &ldquo;Do Things That Don&rsquo;t Scale.&rdquo; 2013.{" "}
          <a href="https://paulgraham.com/ds.html">paulgraham.com/ds.html</a>.
          Graham argues that the most effective early moves are the ones that
          cannot scale: direct outreach, doing things for free to prove value,
          solving specific problems without asking permission. The essay frames
          the side-door track&rsquo;s logic and the one unconventional move
          that the capstone requires.
        </p>
        <p>
          Graham, Paul. &ldquo;How to Do Great Work.&rdquo; 2023.{" "}
          <a href="https://paulgraham.com/greatwork.html">
            paulgraham.com/greatwork.html
          </a>
          . Graham&rsquo;s framework for choosing work that matches deep
          interests, noticing gaps others overlook, and pursuing them without
          waiting for permission. The final sections on consistency and
          long-term compounding inform the steady-state habit and the personal
          playbook logic.
        </p>
        <p>
          McKenzie, Patrick (patio11). &ldquo;Salary Negotiation: Make More
          Money, Be More Valued.&rdquo; 2012.{" "}
          <a href="https://www.kalzumeus.com/2012/01/23/salary-negotiation/">
            kalzumeus.com/2012/01/23/salary-negotiation/
          </a>
          . The canonical practitioner essay on salary negotiation. The
          commitment-strategy framing (negotiate every offer, as a policy) and
          the multi-dimension trading framework (base, signing, equity, vesting
          schedule) are directly applicable to the first offer every student in
          this course will receive.
        </p>
        <p>
          Qureshi, Haseeb. &ldquo;How Not to Bomb Your Offer
          Negotiation.&rdquo; 2016.{" "}
          <a href="https://haseebq.com/how-not-to-bomb-your-offer-negotiation/">
            haseebq.com/how-not-to-bomb-your-offer-negotiation/
          </a>
          . Covers the back-and-forth mechanics of a real negotiation: how to
          communicate a competing offer, how to ask for a signing bonus when
          base is fixed, and how to maintain the relationship throughout. The
          companion to McKenzie (2012) for candidates facing an active offer.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk10ReadingSearchBody =
  "personal hiring playbook two-track formal side-door application sprint template quality applications referral unconventional move daily cadence pipeline review mock loop critique highest-leverage fix communication gap STAR story bank system design notes sprint cadence steady-state habit negotiation patio11 Paul Graham NeetCode post-offer transition capstone synthesis Week 10 reading landing the offer";
