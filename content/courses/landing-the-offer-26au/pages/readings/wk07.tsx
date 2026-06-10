import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk07Reading() {
  return (
    <ReadingPage
      id="wk07"
      title="Week 7: STAR structure, leadership principles, and your story bank"
      kicker="Landing the Offer: SWE Job Search for Senior CS Students &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers three things: the STAR structure in enough
          depth to produce stories that score well, a full worked example
          showing a weak version and a strong version of the same story, and a
          mapping of twelve common CS-undergrad experiences to the leadership
          principle buckets most companies assess. By the end you will be able
          to write a STAR story from any project in your history that lands on
          a specific leadership signal in under three minutes.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Interview loop anatomy from
          week 1 (the four stages of the funnel and what each round tests),
          project narrative from week 2 (accomplishment bullets and how to
          frame ownership), and positioning from week 2 (how you present
          yourself on paper and in conversation). You should have at least one
          draft STAR story before reading this.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-why-behavioral">
        1. Why behavioral interviews exist and what they actually test
      </AnchorHeading>
      <p>
        Behavioral interviews are not personality assessments. They are a
        structured method for collecting evidence about past behavior under
        the assumption that past behavior predicts future behavior. Every
        interviewer walks in with a scorecard: a set of named principles
        they are responsible for evaluating. At Amazon, the scorecard is
        public: sixteen leadership principles, each defined and published on
        amazon.jobs. At Google, Meta, and Microsoft, the labels differ but
        the underlying behaviors overlap substantially with Amazon&rsquo;s.
      </p>
      <p>
        Joel Spolsky, writing from the interviewer&rsquo;s chair in his
        Guerrilla Guide to Interviewing, reduces the evaluation to a
        two-variable test: is this person smart, and do they get things done?
        The coding interview tests the first variable. The behavioral interview
        tests the second. Specifically, it tests whether the candidate has
        made real decisions, owned real consequences, and learned from real
        mistakes -- or whether they have only ever followed instructions and
        then used collective language (&ldquo;we decided&rdquo;) to obscure
        that fact. Spolsky&rsquo;s phrasing is blunt: &ldquo;It is much, much
        better to reject a good candidate than to accept a bad candidate.&rdquo;
        That asymmetry shapes what the interviewer is looking for: clear
        evidence of individual ownership, not impressionistic signals.
      </p>
      <p>
        Gergely Orosz, drawing on his time as an engineering manager at Uber,
        makes a related point in his essay &ldquo;The Tech Interview Inside
        Out.&rdquo; Most prep materials spend almost all their attention on
        the coding round while treating behavioral as an afterthought. In
        practice, a strong behavioral round can tip a borderline candidate to
        hire. A weak behavioral round can sink a strong coder. The rounds are
        not ranked; they are parallel evidence streams feeding the same
        debrief.
      </p>

      <AnchorHeading as="h2" id="2-leadership-principles">
        2. Leadership principles as a public scoring rubric
      </AnchorHeading>
      <p>
        Amazon&rsquo;s sixteen leadership principles are a useful reference
        regardless of which company you target, because they are the most
        explicitly documented version of what most large tech companies assess.
        The principles are: Customer Obsession, Ownership, Invent and
        Simplify, Are Right a Lot, Learn and Be Curious, Hire and Develop
        the Best, Insist on the Highest Standards, Think Big, Bias for
        Action, Frugality, Earn Trust, Dive Deep, Have Backbone and Disagree
        and Commit, Deliver Results, Strive to be Earth&rsquo;s Best Employer,
        and Success and Scale Bring Broad Responsibility.
      </p>
      <p>
        For a new-grad role, the principles most commonly assessed are a
        subset of these. Customer Obsession, Ownership, Bias for Action,
        Deliver Results, Earn Trust, and Learn and Be Curious appear in
        virtually every new-grad loop at companies that use the Amazon model
        or a close variant. Three of these deserve extra attention because
        they are the ones CS undergrads most often mis-demonstrate:
      </p>
      <ul>
        <li>
          <strong>Ownership.</strong> This principle asks whether you treat
          problems as yours to solve regardless of whether they are technically
          your responsibility. A story about fixing a bug in someone
          else&rsquo;s code without being asked, taking over a project when
          the original owner dropped out, or staying with an incident through
          resolution when you could have handed off: these demonstrate
          Ownership. A story about completing your assigned tasks on schedule
          does not.
        </li>
        <li>
          <strong>Bias for Action.</strong> This principle asks whether you
          act with incomplete information rather than waiting for consensus or
          permission. The key word in Amazon&rsquo;s definition is
          &ldquo;speed.&rdquo; A story where you proposed a solution in a
          meeting and then waited three weeks for approval does not demonstrate
          this principle. A story where you built a prototype over a weekend
          to test a hypothesis before the team had decided to investigate it
          does.
        </li>
        <li>
          <strong>Earn Trust.</strong> This principle asks whether you
          disclosed a mistake, repaired a damaged working relationship, or
          delivered bad news transparently. Most CS undergrads have this story
          -- a group project that fell apart, a demo that failed publicly, a
          wrong estimate they had to own -- but do not frame it in these
          terms. The story does not need to end well. It needs to show that
          you told the truth and cleaned up after yourself.
        </li>
      </ul>
      <p>
        Amazon states it directly: &ldquo;We use our Leadership Principles
        every day, whether we&rsquo;re discussing ideas for new projects or
        deciding on the best way to solve a problem.&rdquo; For the candidate,
        this means the principles are not interview theater. They describe the
        behaviors the company uses to make decisions. A candidate who
        demonstrates genuine alignment with a principle in a story is
        describing how they already work.
      </p>

      <AnchorHeading as="h2" id="3-star-structure">
        3. The STAR structure in detail
      </AnchorHeading>
      <p>
        STAR stands for Situation, Task, Action, Result. The structure is not
        a script. It is a scaffold that ensures the interviewer can follow
        your story and score it against the principle they were assigned. Each
        section has a specific job:
      </p>
      <ul>
        <li>
          <strong>Situation:</strong> the context. Where were you, when, with
          what team, with what constraints? Two sentences maximum. The
          Situation is the least important section, but candidates spend the
          most time on it. Keep it short.
        </li>
        <li>
          <strong>Task:</strong> your specific responsibility. Not the
          team&rsquo;s goal -- yours. What were you personally responsible
          for delivering or deciding? One or two sentences.
        </li>
        <li>
          <strong>Action:</strong> the three to five concrete steps you
          took. This section is the body of the story. It should use
          first-person singular throughout: &ldquo;I decided,&rdquo;
          &ldquo;I built,&rdquo; &ldquo;I escalated.&rdquo; Each action
          should be a decision or a step that advances the story toward the
          result. Avoid process descriptions (&ldquo;I attended stand-ups
          and reported progress&rdquo;) in favor of decision descriptions
          (&ldquo;I decided to cut the feature and ship the smaller
          version&rdquo;).
        </li>
        <li>
          <strong>Result:</strong> what happened, in numbers if possible.
          A result without a number is a claim without evidence. If you
          reduced latency, say by how much. If retention improved, say by
          what percentage. If you cannot name a number, name the closest
          proxy you have: the feature shipped on schedule, the team adopted
          the new process, the client renewed the contract.
        </li>
      </ul>
      <p>
        Total delivery time: under three minutes. If you run longer, you are
        over-explaining the Situation or padding the Action with process detail
        that does not advance the story. Three minutes is a constraint that
        forces compression. Compression is what makes stories memorable.
      </p>

      <Callout title="The two-minute test">
        <p>
          Tell your story to a peer. At two minutes the peer says
          &ldquo;time.&rdquo; If your story is not complete at two minutes,
          you have a Situation problem (too long) or an Action problem (too
          many steps). Cut the Situation to one sentence and cut the Action
          to the three most consequential steps.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-worked-example">
        4. Worked example: Ownership
      </AnchorHeading>
      <p>
        The following two versions of the same story illustrate the difference
        between a story that scores and a story that does not. The experience
        is the same: a production outage during a summer internship.
      </p>

      <AnchorHeading as="h3" id="4a-weak">
        4a. Weak version
      </AnchorHeading>
      <pre>{`Situation: I was an intern on the payments team at a startup last summer.
We had a production outage that affected some users.

Task: My manager asked me to help with the investigation.

Action: I looked at the logs with the rest of the team. We found the
issue eventually. It was a configuration error in the deployment script.
We fixed it and deployed a patch. I helped write the post-mortem.

Result: The system came back online and the users were notified. Everyone
was glad it was resolved.`}</pre>
      <p>
        This story fails on every dimension. The Situation is vague
        (&ldquo;some users&rdquo;). The Task is passive (the manager asked me
        to help). The Action is full of collective language (&ldquo;we
        found,&rdquo; &ldquo;we fixed&rdquo;) with no individual decision.
        The Result has no number and no learning. An interviewer scoring
        Ownership would write: &ldquo;Candidate described group activity.
        No evidence of individual ownership.&rdquo; The vote is no hire on
        this principle.
      </p>

      <AnchorHeading as="h3" id="4b-strong">
        4b. Strong version
      </AnchorHeading>
      <pre>{`Situation: During my internship on the payments team at a 40-person
startup, we had a production outage at 2 AM that blocked 3,000 users
from completing transactions.

Task: I was on call that week. My manager was traveling and unreachable.
The decision of whether to rollback or patch forward was mine.

Action: I pulled the last three deploys from our CI logs, found a
configuration flag introduced in the most recent build, and confirmed
it was the cause by reproducing the error in staging. I made the call
to roll back rather than patch forward -- the risk of a bad patch at
2 AM outweighed the 20-minute cost of the rollback. After the system
recovered, I drafted the incident report and sent it to the team before
my manager woke up, so no one was surprised.

Result: Downtime was 22 minutes, compared to the prior incident which
ran 2.5 hours under a more senior engineer. My manager used the incident
report as a template for the team's on-call playbook.`}</pre>
      <p>
        This version demonstrates Ownership at every step. The Situation
        gives concrete numbers (3,000 users, 2 AM, 40-person startup). The
        Task names a specific decision that was the candidate&rsquo;s alone.
        The Action uses first-person singular throughout and names a decision
        (rollback vs. patch forward) with a stated rationale. The Result
        includes a specific number (22 minutes vs. 2.5 hours) and a named
        consequence (the report became a template). An interviewer scoring
        Ownership would write: &ldquo;Candidate owned a time-critical
        decision without supervision, communicated proactively, and the
        outcome was measurable. Strong hire on Ownership.&rdquo;
      </p>
      <p>
        The difference between the two versions is not the experience. The
        experience is the same. The difference is specificity and individual
        ownership language. The strong version requires only that you
        remember what you actually did and say it out loud with
        &ldquo;I&rdquo; as the subject.
      </p>

      <AnchorHeading as="h2" id="5-story-sources">
        5. Twelve story sources from a typical CS undergrad&rsquo;s history
      </AnchorHeading>
      <p>
        The following table maps twelve common experiences from a
        CS undergrad&rsquo;s career to the leadership principle buckets
        they most naturally demonstrate. This is a starting point, not a
        prescription. The same experience can demonstrate different
        principles depending on which decision you put in the Action section.
      </p>

      <AnchorHeading as="h3" id="5a-table">
        5a. The mapping table
      </AnchorHeading>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Experience</th>
              <th>Primary principle</th>
              <th>What makes it score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Group project conflict (technical disagreement)</td>
              <td>Have Backbone; Disagree and Commit</td>
              <td>You disagreed, argued your position with data, then committed to the group&rsquo;s decision</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Group project conflict (interpersonal)</td>
              <td>Earn Trust</td>
              <td>You named the tension directly instead of avoiding it, and the relationship recovered</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Intern project that shipped</td>
              <td>Deliver Results</td>
              <td>You shipped something with a measurable outcome despite a limited timeline</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Intern mistake you disclosed</td>
              <td>Earn Trust</td>
              <td>You told your manager before they found out; you described the fix</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Intern: scope beyond your assignment</td>
              <td>Ownership</td>
              <td>You found a problem outside your task and fixed it without being asked</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Hackathon build under a tight deadline</td>
              <td>Bias for Action</td>
              <td>You cut scope and shipped a working demo in 24 hours with incomplete information</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Side project you built alone</td>
              <td>Ownership + Invent and Simplify</td>
              <td>You defined the problem, chose the architecture, shipped it, and iterated on user feedback</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Course where you failed or nearly failed</td>
              <td>Learn and Be Curious</td>
              <td>You identified what went wrong, changed your approach, and the outcome improved</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Course project: technical approach you championed</td>
              <td>Are Right a Lot</td>
              <td>You collected evidence before deciding, your prediction was correct or you updated when wrong</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Mentored a younger student or onboarded a new teammate</td>
              <td>Hire and Develop the Best</td>
              <td>You actively improved someone else&rsquo;s capability, not just your own output</td>
            </tr>
            <tr>
              <td>11</td>
              <td>High-stakes deadline you met despite obstacles</td>
              <td>Deliver Results + Insist on the Highest Standards</td>
              <td>You did not cut quality to make the deadline; you found a path that did both</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Open-source contribution or public technical artifact</td>
              <td>Customer Obsession + Think Big</td>
              <td>You shipped something for strangers with no obligation to; you iterated on their feedback</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AnchorHeading as="h3" id="5b-gaps">
        5b. Common gaps and how to fill them
      </AnchorHeading>
      <p>
        Most CS undergrads have strong coverage of Deliver Results, Ownership,
        and Bias for Action from internship and hackathon experiences. The
        principles with the fewest stories are usually Have Backbone and
        Disagree and Commit, Earn Trust, and Hire and Develop the Best.
      </p>
      <p>
        Have Backbone is not about being difficult. It is about arguing a
        position with evidence when others disagree, then committing to the
        group decision once it is made. A technical disagreement in a group
        project is exactly this story, provided you stated your view clearly
        before deferring. If you always deferred silently, the story does not
        score.
      </p>
      <p>
        Earn Trust requires a mistake or a conflict that you disclosed rather
        than hid. Almost every student has this story. The barrier is
        discomfort: candidates want to tell stories where they look good.
        Earn Trust stories look good when the candidate owns the mistake
        clearly and describes specific corrective action. The embarrassment of
        admitting the mistake is the evidence the interviewer is looking for.
      </p>
      <p>
        Hire and Develop the Best is the rarest story at the undergrad level
        because most students have not managed anyone. But tutoring, TA work,
        pair programming with a struggling teammate, or onboarding a new
        project member all count. The question is whether you actively
        improved someone else&rsquo;s capability, not just helped them
        complete a task.
      </p>

      <AnchorHeading as="h2" id="6-calibration">
        6. How interviewers calibrate and what that means for your stories
      </AnchorHeading>
      <p>
        Gergely Orosz explains in &ldquo;Confessions from a Big Tech Hiring
        Manager&rdquo; that after each interview, the interviewer writes a
        detailed feedback packet: the questions they asked, verbatim quotes
        from the candidate&rsquo;s answers, a vote (strong hire, hire, no
        hire, strong no hire), and a written justification. The hiring
        committee reads every packet before anyone speaks in the debrief.
      </p>
      <p>
        Two things follow from this. First, the committee compares your
        stories across interviewers. If three different interviewers all write
        that your Action sections used &ldquo;we,&rdquo; the committee will
        note a pattern. If three different interviewers write that your
        results were specific and quantified, they will note that pattern
        instead. The pattern across rounds matters as much as any single story.
      </p>
      <p>
        Second, the committee cannot verify claims they cannot evaluate. A
        story that says &ldquo;the team was really happy with how it turned
        out&rdquo; is not evidence. A story that says &ldquo;monthly active
        users went from 200 to 1,400 in six weeks&rdquo; is evidence. The
        committee reads your verbatim words and decides whether they can point
        to them as evidence of the principle. Vague stories make the
        committee&rsquo;s job impossible.
      </p>
      <p>
        Orosz&rsquo;s key observation is direct: &ldquo;The behavioral
        interview is not a test of your storytelling. It&rsquo;s a test of
        whether you&rsquo;ve actually been in hard situations and learned from
        them. Practiced answers sound practiced -- and that is
        disqualifying.&rdquo; The goal is not to memorize a script. The goal
        is to internalize your own history so clearly that the story comes
        out in specific, first-person terms naturally.
      </p>

      <AnchorHeading as="h2" id="7-exercises">7. Exercises</AnchorHeading>
      <p>Work these before section this week.</p>

      <Exercise n={1}>
        <p>
          Take one experience from the mapping table in section 5. Write both
          a weak version and a strong version of the STAR story for that
          experience, following the structure in section 4. The weak version
          should use collective language and a vague result. The strong version
          should use first-person singular in the Action section and name a
          specific number in the Result. What exactly did you change between
          the two versions?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          List the twelve experiences from the mapping table. For each one,
          decide whether you have a real story from your own history that fits
          it. Mark each one: Yes (have a story), Partial (have an experience
          but the story is thin), or No (no experience in this category). What
          pattern do you see? Which principle buckets are uncovered?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Pick the principle Bias for Action. Read Amazon&rsquo;s definition
          on amazon.jobs. Write a one-sentence definition in your own words.
          Then write a one-sentence description of an experience from your
          history that fits. Now write the full STAR story for that
          experience. Check: does the Action section show a decision you made
          with incomplete information? If not, find a different experience.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Tell one of your STAR stories to a friend, classmate, or phone
          camera and record it. Play it back and time it. If it runs over two
          minutes, identify which section is too long. Cut it and record it
          again. What changed?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Orosz argues that practiced answers sound practiced and that this
          is disqualifying. What is the difference between a story you have
          practiced and a story you have internalized? Write two or three
          sentences describing how you would recognize the difference if you
          were the interviewer reading a feedback packet.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="8-going-deeper">8. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section worksheet asks you
          to draft all 12 stories and stress-test three under timed peer
          review. Bring the list from Exercise 2 as your input.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the full behavioral
          interview structure, including the hiring bar and bar raiser role,
          in more depth than this reading.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers the full interview
          loop from phone screen to debrief and what the hiring committee reads.
        </li>
        <li>
          <strong>HW 5 (due week 9).</strong> The STAR story bank: 12 stories
          in the four-section format, mapped to principles, with a triage
          assessment for each. Section this week is where you draft the bank.
        </li>
        <li>
          <strong>Capstone (due week 10).</strong> Includes a full mock loop
          with a 30-minute behavioral round. Your story bank from HW 5 is the
          preparation for that round.
        </li>
      </ul>

      <Takeaways>
        <li>
          Behavioral interviews score named leadership principles using
          evidence from your stories. The scorecard is usually public; read it
          before your interview.
        </li>
        <li>
          The STAR structure ensures the interviewer can follow and score your
          story. Keep Situation short, put most of the story in Action, and
          name a number in Result.
        </li>
        <li>
          First-person singular language in the Action section (&ldquo;I
          decided,&rdquo; &ldquo;I shipped&rdquo;) is what makes a story
          scoreable. Collective language (&ldquo;we decided&rdquo;) hides
          individual ownership.
        </li>
        <li>
          Twelve common CS-undergrad experiences map naturally to the principle
          buckets most companies test. The gaps are usually Earn Trust, Have
          Backbone, and Hire and Develop the Best -- all of which exist in
          your history if you look for them.
        </li>
        <li>
          The hiring committee reads verbatim quotes from your stories. Specific
          numbers and named decisions give the committee something to point to
          as evidence. Vague impressions give them nothing.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Amazon. &ldquo;Amazon Leadership Principles.&rdquo; 2024.{" "}
          <a href="https://www.amazon.jobs/content/en/our-workplace/leadership-principles">
            amazon.jobs/content/en/our-workplace/leadership-principles
          </a>
          . The primary document defining the 16 principles Amazon interviewers
          use as a scoring rubric. Reading the full definitions before any
          Amazon interview (or any interview at a company that uses a similar
          framework) is not optional.
        </p>
        <p>
          Orosz, Gergely. &ldquo;The Tech Interview Inside Out.&rdquo; 2020.{" "}
          <a href="https://blog.pragmaticengineer.com/the-tech-interview-inside-out/">
            blog.pragmaticengineer.com/the-tech-interview-inside-out/
          </a>
          . A hiring-manager perspective on the full loop: what each round tests,
          how the debrief works, and why most prep materials fail candidates by
          ignoring everything outside the coding round.
        </p>
        <p>
          Orosz, Gergely. &ldquo;Confessions from a Big Tech Hiring Manager: Tips for
          Software Engineering Interviews.&rdquo; 2023.{" "}
          <a href="https://www.youtube.com/watch?v=vFOw_m5zNCs">
            youtube.com/watch?v=vFOw_m5zNCs
          </a>
          . A 30-minute video on what hiring committees read in feedback packets,
          how behavioral interview answers reveal self-awareness, and what
          distinguishes a practiced answer from an internalized one.
        </p>
        <p>
          Spolsky, Joel. &ldquo;The Guerrilla Guide to Interviewing (version 3.0).&rdquo;
          2006.{" "}
          <a href="https://www.joelonsoftware.com/2006/10/25/the-guerrilla-guide-to-interviewing-version-30/">
            joelonsoftware.com/2006/10/25/the-guerrilla-guide-to-interviewing-version-30/
          </a>
          . The interviewer&rsquo;s mental model for what constitutes a hire,
          written from the other side of the table. Reading this as a candidate
          gives you the rubric the interviewer is applying before you answer
          your first question.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk07ReadingSearchBody =
  "STAR structure behavioral interview leadership principles Ownership Bias for Action Earn Trust Deliver Results Have Backbone situation task action result worked example story bank 12 stories CS undergrad story sources hiring bar calibration feedback packet debrief Joel Spolsky Gergely Orosz Amazon leadership principles Week 7 reading landing the offer";
