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

export function Wk01Reading() {
  return (
    <ReadingPage
      id="wk01"
      title="Week 1: how the hiring funnel works and where you fit"
      kicker="Landing the Offer: SWE Job Search for Senior CS Students · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers four things: how the SWE{" "}
          <strong>hiring-funnel</strong> is structured and where candidates get
          cut, what distinguishes the formal funnel from the{" "}
          <strong>side-door-paths</strong> that bypass it, how the{" "}
          <strong>new-grad-vs-experienced</strong> distinction shapes which
          track you are on, and how to construct a{" "}
          <strong>target-company-list</strong> that gives you traction on all
          fronts. By the end you will be able to name the four stages of the
          typical new-grad funnel, explain where applicants get filtered at each
          stage, and map your own situation onto a tiered list of 30-50 target
          companies.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> None. This is week 1. We
          assume you have written some code, have a GitHub account, and intend
          to apply for new-grad SWE roles. No prior knowledge of recruiting or
          interviewing is required.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-funnel-anatomy">
        1. Funnel anatomy: the four stages
      </AnchorHeading>
      <p>
        Every SWE hiring process, whether at a five-person startup or a
        company with 50,000 engineers, passes candidates through the same basic
        sequence. The{" "}
        <strong>recruiter-pipeline</strong> that governs this sequence has four
        stages:
      </p>
      <ol>
        <li>
          <strong>Application screen.</strong> Your resume enters the system,
          often through an online portal. At large companies an ATS (applicant
          tracking system) filters for keywords before a human reads anything.
          At smaller companies a recruiter or hiring manager reads every resume,
          but may spend only 20-30 seconds on each. The cut here is high: at
          a well-known tech company, a single new-grad role may receive
          200-500 applications, and the screen passes 10-15% to the next stage.
        </li>
        <li>
          <strong>Recruiter screen.</strong> A 15-30 minute phone or video call
          with a recruiter. The recruiter is checking that the resume was
          accurate, confirming basic communication skills, and verifying that
          you are in the right role and location. This stage cuts on mismatch,
          not on technical skill.
        </li>
        <li>
          <strong>Technical interviews.</strong> The{" "}
          <strong>interview-loop-anatomy</strong> varies by company, but
          typically includes one or more coding rounds (45-60 minutes each),
          sometimes a system design round, and sometimes a take-home project.
          This is where the largest absolute number of candidates exit, and
          where preparation time has the highest return. At a mid-size company,
          expect two to four technical rounds plus one behavioral round.
        </li>
        <li>
          <strong>Offer and close.</strong> A small fraction of candidates who
          enter the technical stage receive an offer. The offer stage involves
          leveling, compensation discussion, and timeline negotiation. Cuts at
          this stage are uncommon but happen: leveling mismatches, competing
          timelines, and headcount freezes are the main causes.
        </li>
      </ol>

      <Mermaid
        alt="Four-stage hiring funnel: application screen, recruiter screen, technical interviews, offer and close"
        chart={`flowchart LR
  A[Application screen] --> B[Recruiter screen] --> C[Technical interviews] --> D[Offer and close]`}
      />

      <p>
        The key insight from this structure is that each stage has a different
        filter mechanism. Stage 1 filters on credentials and keywords. Stage 2
        filters on fit and communication. Stage 3 filters on technical skill and
        problem-solving under pressure. Stage 4 filters on logistics. Preparing
        exclusively for stage 3, which most students do, optimizes for only one
        of the four filters. Orosz (2020) makes exactly this point: most
        interview preparation materials focus almost entirely on the coding
        interview, leaving candidates unprepared for the surrounding stages of
        the loop.
      </p>

      <AnchorHeading as="h2" id="2-where-applicants-die">
        2. Where applicants get filtered
      </AnchorHeading>
      <p>
        The phrase &ldquo;where applicants die&rdquo; sounds blunt, but it is
        the accurate framing. At each stage, a decision is made with imperfect
        information, usually quickly, and the default answer is no. Understanding
        the specific failure mode at each stage tells you where to spend the
        next hour of preparation.
      </p>
      <p>
        At stage 1, the most common failure is keyword mismatch. ATS systems
        scan for terms that appear in the job description. A resume that does
        not use the same vocabulary fails even if the underlying skills are
        present. A second failure: the resume passes ATS but fails the 30-second
        human read because it does not signal the relevant accomplishments
        quickly enough. Luu (2015) describes a related problem from the
        company&rsquo;s side: recruiters are systematically biased toward
        candidates from a narrow set of schools and employers, which means that
        resumes from candidates outside that set are disadvantaged even when the
        underlying skill is equivalent. The implication for you as a candidate:
        the formal screen at stage 1 penalizes anything unusual, and you need
        either to meet the credential signal or to bypass stage 1 entirely.
      </p>
      <p>
        At stage 2, the most common failure is a mismatch between the role you
        applied for and the role the recruiter is actually filling. This happens
        when students apply broadly without reading job descriptions carefully,
        or when they apply for experienced-hire roles when a new-grad role
        exists. The recruiter screen is easy to pass if you are in the right
        role and can describe your background clearly.
      </p>
      <p>
        At stage 3, failures cluster in two places: candidates who have not
        practiced enough to solve medium-difficulty coding problems under time
        pressure, and candidates who solve the problem but communicate poorly
        while doing it. The second failure is underappreciated. An interviewer
        who cannot follow your reasoning cannot assess your skill. Weeks 3-5 of
        this course address both failure modes directly.
      </p>

      <AnchorHeading as="h2" id="3-swe-roles">
        3. What SWE roles actually are
      </AnchorHeading>
      <p>
        The term &ldquo;SWE role&rdquo; covers a wide range of jobs, and{" "}
        <strong>swe-roles</strong> differ from each other in ways that matter
        for your application strategy. The main dimensions:
      </p>
      <ul>
        <li>
          <strong>Product vs. infrastructure vs. platform.</strong> A product
          engineer ships user-facing features and is evaluated on velocity and
          user impact. An infrastructure engineer builds and maintains the
          systems that other engineers run their code on. A platform engineer
          sits between the two, building internal tools and APIs. These roles
          have different interview shapes and different day-to-day work.
        </li>
        <li>
          <strong>Frontend vs. backend vs. full-stack.</strong> Most new-grad
          roles are full-stack or backend at companies below a certain size.
          At large companies, specialization starts earlier. Know which you are
          applying for and tailor your project descriptions accordingly.
        </li>
        <li>
          <strong>Domain-specific roles.</strong> Security engineering, ML
          engineering, developer tools, and reliability engineering all have
          distinct interview formats. If you are targeting a domain-specific
          role, research its specific format before applying.
        </li>
      </ul>
      <p>
        McKenzie (2011) offers a useful reframe: engineers are hired to increase
        revenue or reduce costs. The role title is a label for which part of
        the business you do that in. When you read a job description, the
        underlying question is: what problem is this team trying to solve, and
        do you have evidence that you can help solve it? That question is more
        tractable than trying to pattern-match against a list of required
        technologies.
      </p>

      <AnchorHeading as="h2" id="4-side-door-paths">
        4. The side-door paths
      </AnchorHeading>
      <p>
        The formal funnel is the path most students take. It is also the most
        competitive path, because every candidate who does not have a side door
        uses it. The{" "}
        <strong>application-channels</strong> available to you include both the
        formal funnel and several side-door alternatives that exist at every
        stage.
      </p>
      <p>
        A <strong>referral</strong> is the most commonly cited side door. A
        current employee submits your resume directly to a recruiter, bypassing
        the ATS entirely. Referred resumes are reviewed by a human almost
        universally. At many companies, referred candidates pass to the
        recruiter screen at rates of 40-60%, compared to 5-15% for cold portal
        applications. The referral does not change the technical bar. It changes
        the probability that you reach the stage where the technical bar is
        applied.
      </p>
      <p>
        <strong>Open-source contribution</strong> is a side door at stage 1 and
        stage 3. A meaningful commit to a project the company maintains is a
        public demonstration of your ability to read unfamiliar code, understand
        a codebase&rsquo;s conventions, and ship a working change. For companies
        that heavily use an open-source project, a contributor has demonstrated
        technical skill before the interview starts. The interviewer begins with
        a positive signal rather than a neutral one.
      </p>
      <p>
        <strong>Prior public work</strong> operates similarly. A blog post, a
        demo, a write-up, or a side project that a hiring manager finds through
        their own research creates a relationship before you apply. This is
        particularly effective in domains with active online communities:
        compilers, databases, networking, security, and ML infrastructure all
        have spaces where public technical writing gets read by practitioners.
      </p>
      <p>
        <strong>Unpaid stints</strong> are the most aggressive side door and
        the most underused by students who have other options. The premise is
        simple: offer to work on a specific problem at a company for a short
        period with no pay. The company gets zero-cost labor on a defined task.
        You get the equivalent of a reference from a team you have worked with.
        This path is not appropriate for every situation, but for a student who
        has failed to get traction through other channels, it is worth
        evaluating seriously.
      </p>
      <p>
        <strong>Find-a-problem</strong> is a variant of the unpaid stint that
        does not require permission first. You identify a real problem at a
        target company, build a solution or write a proposal, and surface it to
        someone inside the company. If the work is good, it becomes a
        conversation starter. The Tech Interview Handbook (Tay, 2023) describes
        the principle: demonstrate that you can create value, and the
        conversation shifts from &ldquo;can this candidate pass our bar&rdquo;
        to &ldquo;how do we get this person in the door.&rdquo;
      </p>

      <Callout title="The side-door principle">
        <p>
          Side doors do not lower the technical bar. They change the prior with
          which your technical performance is evaluated. A candidate with a
          referral or a public contribution enters the technical interview with
          a positive signal already established. An anonymous portal application
          enters with no signal. Both face the same questions. The outcomes
          differ because the interviewer&rsquo;s prior differs.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="5-new-grad-pipeline">
        5. The new-grad pipeline and intern conversion
      </AnchorHeading>
      <p>
        <strong>Intern-conversion</strong> is the highest-probability path to a
        new-grad offer. Companies that run internship programs convert interns
        to full-time offers at rates of 60-80% at major tech companies. The
        intern interview is structured identically to the new-grad interview:
        you are being evaluated on the same technical bar. The difference is
        that interns who perform well during the summer have three months of
        demonstrated on-the-job performance in addition to their interview
        results. That additional signal changes the math significantly.
      </p>
      <p>
        If you have done a prior internship at a company on your target list and
        received a positive performance review, activating the return offer path
        should be your first move, not your fallback. The recruiter who managed
        your internship placement already knows your name. The team you worked
        with already has an opinion. The formal application is a formality.
      </p>
      <p>
        If you have not done a prior internship at any target company, your
        situation is the norm for a large fraction of new-grad applicants. The
        formal funnel and the side doors described above are your primary paths.
        The recruiting calendar matters here: large-company applications for
        new-grad roles open in August for the following May graduation. If you
        are a senior in the autumn term, some of these windows are open now and
        will close by October. A missed window at a large company means waiting
        a year.
      </p>
      <p>
        Mid-size companies (50-500 engineers) have more flexible timelines.
        Applications typically open in October through January, and offers
        arrive in February through April. Startups are rolling: roles appear
        and fill throughout the year, but many roles are budget-dependent and
        can close quickly. A target list that spans all three categories gives
        you optionality across the calendar.
      </p>

      <AnchorHeading as="h2" id="6-target-company-list">
        6. Building the target-company-list
      </AnchorHeading>
      <p>
        A target-company-list is a structured document, not a mental note about
        companies you have heard of. The structure matters because it forces
        honest self-assessment about tier placement and concrete planning about
        next steps.
      </p>
      <p>
        The three tiers are: reach, match, and safety. A{" "}
        <strong>reach company</strong> is one where you would be thrilled and
        somewhat surprised to receive an offer, because their typical new-grad
        hire has credentials or experience you currently lack. A{" "}
        <strong>match company</strong> is one where you are a plausible hire:
        their typical new-grad hire looks like you, or will look like you after
        a strong final semester. A <strong>safety company</strong> is one where
        you are confident you can advance to offer stage and would accept the
        offer if no better option materialized.
      </p>
      <p>
        A well-calibrated list has roughly 8-12 companies at each tier. A list
        with 20 reach companies and 2 safeties is a lottery ticket strategy: it
        depends on the variance of the process to produce an outcome, rather
        than on skill and preparation. A list with only safety companies is
        unnecessarily conservative and leaves potential offer value on the table.
        The 30-50 company range gives you enough volume to run a real pipeline
        without creating so many parallel tracks that you cannot prepare
        adequately for each one.
      </p>
      <p>
        Each company in the list should have a side-door tag: referral, open
        source, prior intern, public artifact, or none. A company tagged
        &ldquo;none&rdquo; is one you will approach through the portal only.
        That is not a reason to remove it, but it is a reason to ask whether
        you could create a side door before you apply. A side-door tag changes
        the expected value of the application significantly, and creating one is
        often less work than it appears.
      </p>

      <AnchorHeading as="h2" id="7-worked-example">
        7. A worked example: building two rows of the list
      </AnchorHeading>
      <p>
        Here is what two rows of a well-built target list might look like. The
        student in this example has one summer internship at a Series B startup,
        a strong GPA, two personal projects on GitHub (one of which uses a
        popular open-source data processing library), and no prior contact at
        either of these companies.
      </p>
      <pre>{`Company:          Stripe
Tier:             Reach
Why this tier:    Their new-grad hires typically have FAANG or top-20 school signal.
                  My internship is at a startup they would recognize but not weight heavily.
Side-door tag:    Open source
                  Stripe contributes to and uses several OSS projects I use in my own work.
                  I can find a small issue in one of their public repos and submit a fix.
Next action:      Review stripe/veneur and stripe/sequins on GitHub this week.
                  Find one open issue labeled "good first issue."

Company:          Plaid
Tier:             Match
Why this tier:    Their new-grad profile matches mine closely: startup internship,
                  strong school, demonstrated interest in fintech or infrastructure.
Side-door tag:    Referral
                  A TA from my databases course joined Plaid six months ago.
                  I can email them this week and ask for a conversation about the role.
Next action:      Email [TA name] by Friday with a specific ask:
                  would they be willing to pass my resume to the recruiter?`}</pre>
      <p>
        Two observations about this example. First, the side-door tag for Stripe
        is concrete: not &ldquo;look into open source&rdquo; but a specific
        next action on a specific repository. Second, the referral for Plaid is
        a warm contact, not a cold ask. The TA already knows this student. The
        ask is low-friction for both parties.
      </p>
      <p>
        Compare this to a weaker version of the same two rows:
      </p>
      <pre>{`Company:          Stripe
Tier:             Reach (because they are a well-known company)
Side-door tag:    None
Next action:      Apply through portal

Company:          Plaid
Tier:             Match (because I like fintech)
Side-door tag:    None
Next action:      Apply through portal`}</pre>
      <p>
        The weaker version has the same companies but no actionable information.
        The tier reasoning is based on brand recognition, not on a comparison
        between the student&rsquo;s profile and the company&rsquo;s typical
        hire. The side-door tags are empty because the student did not look for
        them. The next actions are the lowest-yield move available. This is the
        default behavior. The section workshop this week is designed to get you
        off this default.
      </p>

      <AnchorHeading as="h2" id="8-exercises">8. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          Draw the four-stage hiring funnel from memory. At each stage, name
          the primary filter mechanism (what gets candidates cut) and the
          primary side-door that bypasses that filter. Where in the funnel does
          preparation time pay off most for a candidate at your current level?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Pick two companies you are genuinely interested in. For each one, find
          evidence of what their typical new-grad hire looks like: check
          LinkedIn for recent new-grad hires, read Glassdoor or Blind for
          interview reports, and look at the job description for explicit
          requirements. Based on that evidence, assign each company a tier
          (reach, match, or safety) and write two sentences explaining why.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          For one company on your target list, find at least one side-door path
          that is not a portal application. The side door can be a referral
          contact, an open-source project, a prior intern relationship, or a
          public artifact. For whichever path you identify, write the one
          concrete next action you would take to activate it, specific enough
          to complete in under an hour.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Orosz (2025) argues that junior developers struggle to get hired not
          because jobs don&rsquo;t exist but because the bar for what counts as
          &ldquo;junior&rdquo; has risen. What does that mean for how you should
          present yourself on your target-company list? Name two things you
          would do differently in your list construction given that framing.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Map the recruiting calendar for three companies on your list. When do
          their applications open? When do offers typically expire? Given today&rsquo;s
          date, which of the three has the most urgent next action? Write that
          action and the date it needs to happen by.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="9-going-deeper">9. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section workshop asks you to
          build your target-company list to 30+ rows, with tier and side-door
          tags for every company. Bring any draft list you have, even a short
          one. You will build it out during the session.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the four-stage funnel
          and where applicants get filtered in more depth, including drop-off
          rate estimates at each stage.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers the university
          recruiting calendar, intern conversion, and the mechanics of building
          a tiered list in practice.
        </li>
        <li>
          <strong>HW 1 (out this week, due Week 3).</strong> Resume and
          portfolio audit. The target-company list you build this week will
          inform which keywords and project descriptions matter most for your
          resume. Start on HW 1 with your target list in hand.
        </li>
        <li>
          <strong>Week 2.</strong> Covers resume and portfolio positioning:
          how to rewrite your existing materials so they pass both the ATS
          keyword screen and the 30-second human read. The concepts from this
          week&rsquo;s reading (funnel stages, keyword filters, side-door
          signals) are the foundation for Week 2.
        </li>
      </ul>

      <Takeaways>
        <li>
          The hiring funnel has four stages: application screen, recruiter
          screen, technical interviews, and offer close. Each stage has a
          different filter mechanism, and preparing exclusively for stage 3
          optimizes for only one of the four.
        </li>
        <li>
          Side-door paths (referrals, open-source contributions, prior public
          work, unpaid stints, and find-a-problem moves) do not lower the
          technical bar. They change the prior with which your performance is
          evaluated, which changes the probability you reach the stage where the
          bar is applied.
        </li>
        <li>
          Intern conversion is the highest-probability path to a new-grad offer.
          If you have a prior relationship at a target company, activate it
          first. If you do not, your path runs through the same funnel your
          competitors use, with or without side doors.
        </li>
        <li>
          A well-calibrated target list has 8-12 companies at each of reach,
          match, and safety, with a side-door tag and a concrete next action
          for each top-10 company. A list without this structure is a wish list,
          not a pipeline.
        </li>
        <li>
          The recruiting calendar has hard windows. Large-company new-grad
          applications open in August. Missing a window is recoverable, but
          only if you know it happened and adjust your target list accordingly.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Luu, Dan. &ldquo;We only hire the trendiest.&rdquo; 2015.{" "}
          <a href="https://danluu.com/programmer-moneyball/">
            danluu.com/programmer-moneyball/
          </a>
          . Argues that tech companies&rsquo; credential-based hiring biases
          create exploitable inefficiencies for candidates who can bypass the
          credential signal.
        </p>
        <p>
          McKenzie, Patrick. &ldquo;Don&rsquo;t call yourself a programmer, and
          other career advice.&rdquo; 2011.{" "}
          <a href="https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/">
            kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/
          </a>
          . Frames engineers as value creators for businesses; argues that
          networking through relationships is the primary driver of hiring
          outcomes.
        </p>
        <p>
          Orosz, Gergely. &ldquo;The tech interview inside out.&rdquo; 2020.{" "}
          <a href="https://blog.pragmaticengineer.com/the-tech-interview-inside-out/">
            blog.pragmaticengineer.com/the-tech-interview-inside-out/
          </a>
          . Provides a hiring manager&rsquo;s view of the full interview loop
          and argues that most candidates prepare for only one of its stages.
        </p>
        <p>
          Orosz, Gergely. &ldquo;Gergely Orosz on tech&rsquo;s entry-level
          crisis and what comes next.&rdquo; 2025.{" "}
          <a href="https://www.youtube.com/watch?v=o7Asyo9s2_M">
            youtube.com/watch?v=o7Asyo9s2_M
          </a>
          . Discusses why the new-grad hiring market has tightened and what
          candidates can do to differentiate in a market where traditional paths
          are saturating.
        </p>
        <p>
          Tay, Yangshun. Tech Interview Handbook. 2023.{" "}
          <a href="https://github.com/yangshun/tech-interview-handbook">
            github.com/yangshun/tech-interview-handbook
          </a>
          . A free, community-maintained reference covering every phase of the
          SWE interview process, from resume preparation to offer negotiation.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk01ReadingSearchBody =
  "hiring funnel anatomy application screen recruiter screen technical interviews offer close side-door paths referral open source prior public work unpaid stint find-a-problem new-grad vs experienced intern conversion target company list reach match safety tier side-door tag application channels recruiter pipeline interview loop anatomy swe roles Week 1 reading landing the offer";
