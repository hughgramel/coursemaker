import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk08Reading() {
  return (
    <ReadingPage
      id="wk08"
      title="Week 8: the unconventional path"
      kicker="Landing the Offer: SWE Job Search for Senior CS Students · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers four moves that sit outside the standard
          application funnel: open-source contribution as a portfolio artifact,
          unpaid trial stints and when they are worth the opportunity cost,
          finding a real problem at a target company and solving it without
          asking permission, and using public shipping to compound visibility
          before you apply. By the end you will be able to find a project and
          open a meaningful first pull request, decide whether an unpaid stint
          is rational for your specific situation, and produce an artifact
          targeted at a company that no other applicant will have.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Target-company list and basic
          side-door path awareness from week 1, positioning and public-artifact
          framing from week 2. You should have at least a draft list of target
          companies and some sense of what skills or projects you would cite in
          an application.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-why-unconventional-moves-work">
        1. Why unconventional moves work
      </AnchorHeading>
      <p>
        The standard application funnel selects for candidates who are good at
        being candidates: polished resumes, practiced interview answers, on-time
        submissions through the right portals. Unconventional moves select for
        something different: candidates who can identify a real problem, do
        something about it without being asked, and produce evidence that is
        verifiable. These are exactly the properties that make a good engineer.
      </p>
      <p>
        Graham (2013) makes the structural argument in the startup context: the
        most effective early moves are the ones that do not scale. Recruiting
        users one by one, building something for free to prove value, reaching
        out directly with a specific solution rather than a generic pitch. The
        same logic applies to a job search. A cold email that names a specific
        problem and offers a working fix is doing something no job application
        portal does: it proves you can ship before you are paid to ship.
      </p>
      <p>
        None of these moves replaces the formal pipeline. They run in parallel
        with it. The goal is to show up at the final interview already known to
        someone on the team, with a public artifact that preceded you, or with
        a contribution history the hiring manager can verify. That is a
        different position than arriving as resume number 847 in a queue.
      </p>

      <AnchorHeading as="h2" id="2-open-source-as-resume">
        2. Open source as resume
      </AnchorHeading>
      <p>
        An open-source contribution is one of the few job-search artifacts that
        is independently verifiable. The reviewer can read the PR, read the
        review comments, see how you responded to feedback, and judge the
        quality of the code against a live production codebase. No resume bullet
        does any of that.
      </p>
      <p>
        The first question is which project. Popularity alone is not the filter.
        A contribution to a project that your target companies use, maintain, or
        reference in their engineering blogs is worth substantially more than a
        contribution to a large but unrelated project. Start with your
        target-company list. For each company, ask: what open-source projects
        does their engineering team maintain? Which projects appear in their job
        descriptions? Which projects do their engineers contribute to publicly?
        A project that appears on all three lists is the right one.
      </p>
      <p>
        After identifying the project, read for health signals before writing
        any code. The GitHub Open Source Guides (2023) describe what a
        contributor-friendly project looks like: recent commit activity,
        maintainers who respond to issues and PRs within a reasonable window, a
        labeled issue tracker where new contributors can find triage-ready work,
        and a CONTRIBUTING.md that is actually maintained. A project with 15,000
        stars but no commits in eight months and unanswered PRs from two years
        ago is not a healthy project. A project with 400 stars where maintainers
        respond within a week is.
      </p>

      <Callout title="What CONTRIBUTING.md tells you">
        <p>
          Every contribution guide worth reading answers five questions: how to
          set up the development environment locally, whether you need to file or
          link an issue before opening a PR, what commit message format the
          project uses, which tests you are expected to run, and who reviews PRs.
          Read the guide before you fork. Read it again before you open the PR.
          Skipping it is the most common reason first contributions get closed
          without review.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-the-first-pr-workflow">
        3. The first PR workflow
      </AnchorHeading>
      <p>
        The first-contributions repository (Jossey et al., 2017) distills the
        mechanics into a repeatable sequence: fork the repository to your own
        account, clone your fork locally, create a branch named for the specific
        issue you are addressing, make one atomic change, run the full test suite
        locally, push to your fork, and open a PR from your fork&rsquo;s branch
        to the upstream main. The sequence is not complicated, but first-time
        contributors often skip steps, particularly cloning their fork rather
        than the upstream directly, and running the test suite before pushing.
      </p>
      <p>
        The PR description is where most first contributions succeed or fail. A
        description that helps the reviewer does three things. First, it names
        the problem: &ldquo;Fixes #123: the login handler throws a null pointer
        when the session token is missing.&rdquo; Second, it describes the
        change at the level of a code review: &ldquo;Added a null check before
        dereferencing the token on line 47 of <code>auth/session.go</code>.
        Returns a 401 with a descriptive error message instead of a 500.&rdquo;
        Third, it shows evidence: &ldquo;Ran the full test suite locally,
        all tests pass. Added one unit test covering the null token case.&rdquo;
        A description that covers all three makes the reviewer&rsquo;s job
        easier. Easier reviews get done faster.
      </p>
      <p>
        One PR, one change. Do not bundle two unrelated fixes in the same PR
        because they both seemed small. Maintainers merge focused PRs faster
        because each one can be evaluated on its own merits, reverted
        independently if it causes a regression, and understood by a future
        reader looking at the git log. The impulse to include a second fix while
        you have the file open is real. Resist it: open a second issue instead
        and reference it in the PR description.
      </p>

      <AnchorHeading as="h2" id="4-becoming-a-regular-contributor">
        4. Becoming a regular contributor
      </AnchorHeading>
      <p>
        One merged PR is a line on a resume. A pattern of contributions is a
        relationship with a maintainer. The difference matters in a job search
        because a maintainer who knows your work is a referral surface, not
        just a contribution history.
      </p>
      <p>
        The transition from one-time contributor to regular contributor does not
        require large contributions. The GitHub Open Source Guides (2023) point
        out that documentation, bug triage, issue labeling, and review comments
        on other contributors&rsquo; PRs all count as active participation. A
        realistic cadence for a student is one PR per month plus 20 minutes a
        week reading the issue tracker and leaving substantive comments on open
        issues or draft PRs. That volume is enough to stay visible to
        maintainers without requiring the time of a full-time contributor.
      </p>
      <p>
        After a first merge, a brief comment on the PR thread asking what
        higher-priority issues the team would find most useful is not
        presumptuous. Maintainers appreciate contributors who ask before
        charging ahead on the next thing. The answer will point you to the work
        that matters most to the project, which is also the work that will make
        the strongest impression when you eventually cite it in an interview.
      </p>

      <AnchorHeading as="h2" id="5-unpaid-stints">
        5. Unpaid stints: the decision framework
      </AnchorHeading>
      <p>
        An unpaid two-week trial at a startup occupies an unusual position in
        job-search strategy. Done right, it is one of the fastest ways to convert
        genuine interest into a full-time offer at a company too small to have a
        formal recruiting process. Done wrong, it is free labor with no upside
        and a real opportunity cost.
      </p>
      <p>
        The move is rational when four conditions are all true at the same time.
        First, the company is small enough that the founders or a senior engineer
        make hiring decisions directly. At a company with a dedicated HR
        department and a formal headcount process, a two-week trial is unlikely
        to convert into anything, because the offer process requires sign-offs
        that a two-week sprint does not trigger. Second, you genuinely want to
        work there and have no other path in. If there is a warm introduction
        available, use that instead. Third, you can financially sustain two weeks
        without income. The opportunity cost is real. Fourth, the conversion
        path is explicit before you start: &ldquo;if the two weeks go well, we
        will make you an offer&rdquo; is a sentence you should hear stated, not
        assumed.
      </p>
      <p>
        The move is a bad deal when any of those conditions is absent. A company
        large enough to have an established budget should pay you, even for a
        short-term role. A trial with no stated conversion criteria is free
        labor. An arrangement that works for the company but that you cannot
        sustain financially is not an opportunity. If a trial extends past two
        weeks without a clear decision point, that is a signal about the
        company&rsquo;s decision-making culture, not just the hiring timeline.
      </p>
      <p>
        The practical test before sending the email: write down the four
        conditions and check each one honestly. If all four are true, proceed.
        If one is absent, ask whether the cold-email approach without the
        free-trial framing might get further.
      </p>

      <AnchorHeading as="h2" id="6-cold-emailing-to-work-free">
        6. The cold email
      </AnchorHeading>
      <p>
        A cold email offering to work free for two weeks is not a job
        application. It is a specific offer to solve a specific problem. That
        distinction matters because it determines the structure of the message.
        A job application leads with the applicant. This email leads with the
        problem.
      </p>
      <p>
        The message structure that gets replies: under 150 words, no attachment.
        The subject line names the problem, not the person. The first sentence
        proves you use the product by naming the specific friction you
        encountered. The second sentence gives the minimum relevant context
        about you. The third sentence names exactly what you would build in two
        weeks. The fourth sentence makes the ask: a 15-minute call to see if it
        makes sense. A GitHub link or portfolio URL at the bottom replaces the
        resume attachment.
      </p>
      <p>
        Each element of this structure serves a specific purpose. The specific
        problem in the subject line tells the recipient whether the email is
        relevant to them before they open it. The first-sentence proof that you
        use the product establishes that you are not a mass-applying candidate
        sending the same message to a hundred companies. The limited ask (a
        15-minute call, not a job) lowers the cost of saying yes. The absence of
        a resume attachment removes a friction point. The GitHub link provides a
        faster credibility signal than any resume format.
      </p>
      <p>
        Graham (2013) makes the structural point that applies here: the moves
        that look unscalable, reaching out personally to one company at a time
        with a message tailored to a specific problem, are the moves that
        actually work. Sending a hundred generic applications is scalable. It is
        also the approach every other applicant is taking.
      </p>

      <AnchorHeading as="h2" id="7-find-a-problem-and-solve-it">
        7. Find a problem and solve it
      </AnchorHeading>
      <p>
        The find-a-problem move is the purest expression of the unconventional
        path. You identify a real friction in a target company&rsquo;s product
        or codebase, build the fix or a credible prototype of it, and send the
        artifact to a real person at that company. You do this without asking
        permission first.
      </p>
      <p>
        Graham (2023) frames the general principle: &ldquo;If you&rsquo;re
        excited about some possibility that everyone else ignores, and you have
        enough expertise to say precisely what they&rsquo;re all overlooking,
        that&rsquo;s as good a bet as you&rsquo;ll find.&rdquo; The job-search
        application is direct. Most applicants present credentials and wait to
        be evaluated. The find-a-problem applicant presents a solution to a
        problem the company has not yet prioritized and waits to be thanked.
        Those are different conversations.
      </p>
      <p>
        Finding the right problem requires using the product with deliberate
        attention. Note every point where you work around a limitation, where
        the interface does something you did not expect, or where a feature you
        want clearly exists in the codebase but is not exposed. Read the public
        issue tracker if one exists: issues that have been open for several
        months with user engagement but no assigned engineer are problems the
        team knows about and has not gotten to. Read the engineering blog: posts
        about how the team solved one problem often signal what the adjacent
        unsolved problem is. Read user forums and support threads where real
        users complain in plain language.
      </p>
      <p>
        The right problem is specific enough that your fix is unambiguous.
        &ldquo;Improve the onboarding experience&rdquo; is not a problem you
        can solve in a weekend. &ldquo;The signup form loses all entered data
        when a validation error fires on the password field&rdquo; is a problem
        with a two-hour fix and a clear test case. Specificity is the
        difference between an artifact that proves you understand the codebase
        and a slide deck that proves you can write bullet points.
      </p>

      <AnchorHeading as="h2" id="8-build-in-public">
        8. Build-in-public as attention leverage
      </AnchorHeading>
      <p>
        Levels (2019) describes the build-in-public approach from the startup
        context: ship before the product is ready, use transparency and
        community engagement as the growth engine, and treat the act of building
        as a public performance that compounds visibility over time. The same
        logic applies to the job-search artifact.
      </p>
      <p>
        An artifact you ship publicly works in two directions simultaneously.
        The direct direction is the one you control: you send the artifact link
        to a specific person at a target company with a short note explaining
        what you built and why. The inbound direction is the one you cannot
        fully control but can set up: a public GitHub repository, a blog post,
        or an X thread describing the problem and the fix can reach engineers at
        the target company before you send them anything. They may find it
        through a search, through a colleague who shared it, or because you
        tagged the company&rsquo;s engineering account.
      </p>
      <p>
        The inbound direction is high-leverage because it arrives with social
        proof. An artifact that two engineers at a target company have already
        engaged with has a different starting position than an artifact you
        send cold. You cannot guarantee the inbound path, but you can make it
        possible by publishing the artifact rather than keeping it private.
      </p>
      <p>
        The practical sequence: identify the problem, build the artifact (two
        days to one week of focused work), publish it publicly on GitHub with a
        clear README that names the problem and the solution, write a short
        blog post or X thread that describes what you built and why (one to two
        paragraphs, link to the repo), then send the artifact link to a specific
        person at the company with a short note. The public step is optional but
        costs almost nothing relative to the potential upside.
      </p>

      <AnchorHeading as="h2" id="9-worked-example">
        9. A worked example: one artifact, one company
      </AnchorHeading>
      <p>
        Target company: a mid-size startup with a public API and a developer-
        facing product. The applicant uses the API to build a personal project
        and notices that rate-limit error responses return a 429 status but
        include no <code>Retry-After</code> header, which means every client
        library must implement its own backoff with no guidance. This is a
        documented issue in the GitHub tracker, open for seven months with four
        user comments and no assigned engineer.
      </p>
      <p>
        The fix: a pull request against the company&rsquo;s open-source SDK
        repository that adds <code>Retry-After</code> to the error response
        schema and updates the relevant client-side error handler to read it.
        The PR description names the issue, describes the change, shows a
        before-and-after in the test output, and asks one clarifying question
        about whether the header value should represent seconds or an ISO
        timestamp.
      </p>
      <p>
        The artifact: the PR itself plus a short write-up published as a
        personal blog post: &ldquo;How I contributed to [Company] SDK and what
        I learned about rate-limit handling.&rdquo; The post names the problem,
        walks through the fix, and includes the PR link. This goes on GitHub
        Pages and gets shared in one X thread tagging the company&rsquo;s
        developer-relations account.
      </p>
      <p>
        The cold email: sent to the engineering manager of the platform team,
        found via LinkedIn. 120 words. Subject line: &ldquo;PR for the
        Retry-After gap in the SDK rate-limit response.&rdquo; First sentence
        names the specific issue number. Second sentence is one line of
        background. Third sentence links to the PR and the blog post. Final
        sentence asks for a 15-minute call if they find it useful.
      </p>
      <p>
        The sequence takes two weekends and two cold emails. Most applicants for
        the same role sent a resume through the careers portal.
      </p>

      <AnchorHeading as="h2" id="10-exercises">10. Exercises</AnchorHeading>
      <p>Work these before section. The section triage decision builds on exercises 1 and 2.</p>

      <Exercise n={1}>
        <p>
          Pick one company on your target list. Find two open-source projects
          that company maintains or depends on. For each, identify: (a) the
          date of the most recent commit, (b) whether a CONTRIBUTING.md exists,
          (c) whether any issues are labeled &ldquo;good first issue&rdquo; or
          &ldquo;help wanted,&rdquo; and (d) the average time between a new
          issue being filed and a maintainer first commenting. Write one
          paragraph per project summarizing what you found and whether you
          would contribute to it.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Use one of your target companies&rsquo; products for 30 minutes with
          deliberate attention. Write down every point of friction, unexpected
          behavior, or missing feature you encounter. Then rank your list by
          specificity: which items are specific enough to have a two-day fix?
          Pick one and describe what that fix would look like.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Apply the unpaid stint decision framework to one company on your list.
          Write down your honest answer to each of the four conditions: (1) is
          the company small enough that founders control hiring? (2) Do you
          genuinely want to work there with no other path in? (3) Can you
          sustain two weeks without income? (4) Would there be an explicit
          conversion path? What is your conclusion?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Write a cold email under 150 words to a real person at a target
          company offering to spend two weeks solving one specific problem you
          identified in exercise 2. Include a subject line, a first sentence
          that proves you use the product, a description of exactly what you
          would build, and a request for a 15-minute call. Do not attach a
          resume. Do include a GitHub link.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Write a one-paragraph PR description for the fix you identified in
          exercise 2, as if you had already built it. The description should
          name the problem (with an issue number if one exists), describe the
          change at the level of a code review, and state how you tested it.
          Then write one clarifying question you would ask the maintainer about
          a part of the implementation you are not sure about.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="11-going-deeper">11. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week: triage and ship.</strong> You pick one move
          (OSS PR draft, three cold emails, or one public artifact) and execute
          it before section. The section is a peer critique of what you already
          shipped, not a planning session for what you will eventually ship.
        </li>
        <li>
          <strong>Lecture 1 this week.</strong> Covers finding the right
          project, reading the contribution guide, the first PR workflow, and
          how to cite open-source work in interviews.
        </li>
        <li>
          <strong>Lecture 2 this week.</strong> Covers the unpaid stint decision
          framework, the cold-email structure, the find-a-problem sequence, and
          build-in-public mechanics.
        </li>
        <li>
          <strong>HW 4 (system design write-up) is due this week.</strong> Submit
          it before section.
        </li>
        <li>
          <strong>Week 9 (next week).</strong> Covers the formal pipeline:
          recruiter conversations, application cadence, and negotiation. The
          unconventional moves you make this week compound into the formal
          pipeline by creating warm introductions.
        </li>
        <li>
          <strong>Week 10 capstone.</strong> One unconventional move is a
          required component of the capstone. This week&rsquo;s section work
          is the first iteration of that deliverable.
        </li>
      </ul>

      <Takeaways>
        <li>
          Open-source contributions are independently verifiable portfolio
          artifacts. A merged PR with a clear description, test coverage, and
          good review engagement tells a hiring manager more than any resume
          bullet can.
        </li>
        <li>
          An unpaid stint is rational only when all four conditions are true:
          small company, genuine interest, financial sustainability, and an
          explicit conversion path agreed before you start. One condition absent
          makes the deal bad.
        </li>
        <li>
          A cold email leads with a specific problem, offers a specific
          deliverable, and asks for a 15-minute call. It is not a job
          application. The distinction determines whether the recipient reads it
          as an offer or as noise.
        </li>
        <li>
          The find-a-problem artifact must be specific enough that your fix is
          unambiguous. A patch, a script, or a precise technical write-up beats
          a slide deck or a redesign mockup every time.
        </li>
        <li>
          Shipping publicly doubles the artifact&rsquo;s surface area: it can
          arrive at the target company through the direct email you send and
          through the inbound channel you opened by publishing it.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          GitHub (Open Source Guides). &ldquo;How to Contribute to Open
          Source.&rdquo; 2023.{" "}
          <a href="https://opensource.guide/how-to-contribute/">
            opensource.guide/how-to-contribute/
          </a>
          . The canonical guide to choosing a project, reading contribution
          guides, and navigating the PR review cycle. Source for the community
          structure description and the point that documentation is often the
          most neglected contribution surface.
        </p>
        <p>
          Graham, Paul. &ldquo;Do Things that Don&rsquo;t Scale.&rdquo; 2013.{" "}
          <a href="https://paulgraham.com/ds.html">paulgraham.com/ds.html</a>.
          Source for the argument that manually recruiting users, doing things
          for free to prove value, and reaching out directly with specific
          solutions are the moves that actually work at the early stage.
        </p>
        <p>
          Graham, Paul. &ldquo;How to Do Great Work.&rdquo; 2023.{" "}
          <a href="https://paulgraham.com/greatwork.html">
            paulgraham.com/greatwork.html
          </a>
          . Source for the framing that noticing what others overlook and
          pursuing it without waiting for permission is one of the best bets
          available.
        </p>
        <p>
          Jossey, Roshan, et al. <em>first-contributions</em>. GitHub, 2017.{" "}
          <a href="https://github.com/firstcontributions/first-contributions">
            github.com/firstcontributions/first-contributions
          </a>
          . A hands-on tutorial that teaches the full contribution workflow
          (fork, clone, branch, commit, push, PR) by having contributors do it
          for real. Source for the mechanical description of the PR workflow.
        </p>
        <p>
          Levels, Pieter (@levelsio). &ldquo;Turning side projects into
          profitable startups.&rdquo; 2019.{" "}
          <a href="https://levels.io/startups">levels.io/startups</a>. Source
          for the build-in-public philosophy and the argument that shipping
          publicly before the product is ready generates attention and community
          engagement that a private build cannot.
        </p>
        <p>
          Orosz, Gergely / A Life Engineered. &ldquo;Gergely Orosz on
          Tech&rsquo;s Entry-Level Crisis and What Comes Next.&rdquo; YouTube,
          2025.{" "}
          <a href="https://www.youtube.com/watch?v=o7Asyo9s2_M">
            youtube.com/watch?v=o7Asyo9s2_M
          </a>
          . Contextualizes why the bar for what counts as junior has risen and
          why candidates who can show they operate with less hand-holding are
          the ones landing roles.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk08ReadingSearchBody =
  "open source contribution first pull request PR fork branch CONTRIBUTING.md good first issue maintainer health unpaid stint cold email find a problem solve it build in public attention leverage permissionless work artifact portfolio unconventional path open source resume Week 8 reading landing the offer";
