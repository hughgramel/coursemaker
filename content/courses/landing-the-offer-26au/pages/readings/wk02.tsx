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
      title="Week 2: resume, GitHub, LinkedIn, and public artifacts"
      kicker="Landing the Offer: SWE Job Search for Senior CS Students · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers four interconnected topics: how the{" "}
          <strong>resume-keyword-screen</strong> works and how to pass it, how
          to write <strong>accomplishment-bullet</strong>s that survive the
          30-second human read, how to build a <strong>github-portfolio</strong>{" "}
          and a <strong>linkedin-presence</strong> that confirm your resume
          rather than contradict it, and how to produce at least one{" "}
          <strong>public-artifact</strong> that frames your{" "}
          <strong>project-narrative</strong> for a recruiter scanning in 30
          seconds. By the end you will be able to audit a resume against an{" "}
          <strong>ats-system</strong> keyword list, rewrite weak bullets as
          accomplishments, and outline the one{" "}
          <strong>positioning</strong> artifact you will ship this term.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You have a working
          understanding of the four-stage hiring funnel (screen, phone, loop,
          offer), the distinction between the formal application channel and
          side-door paths, and the concept of a target-company list. These
          were introduced in Week 1. This reading does not re-teach them.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-two-readers">
        1. Two readers, two very different goals
      </AnchorHeading>
      <p>
        Before a human being sees your resume, an automated system has already
        scored it. Most large employers route applications through an{" "}
        <strong>ATS (Applicant Tracking System)</strong>, a piece of software
        that parses the document into structured fields and measures how well
        the content matches the job description. The ATS does not evaluate
        writing quality, narrative arc, or the impressiveness of the project
        behind a bullet. It counts keyword overlap.
      </p>
      <p>
        If the keyword score falls below the employer&rsquo;s threshold, a
        recruiter may never open the file. At high-volume companies during
        new-grad season, an applicant pool of 10,000 resumes may be reduced to
        300-500 before any human reads a single word. This is not a bug in the
        hiring system from the employer&rsquo;s perspective: it is how they
        manage a funnel they cannot otherwise staff. For you as a candidate, it
        means the first audience you write for is a parser, not a person.
      </p>
      <p>
        The second reader is a recruiter who has passed the threshold items and
        now has roughly 30 seconds to decide whether to move you to the next
        step or not. Tay (2023) reports that recruiters at high-volume
        companies can spend as few as 10-15 seconds on a first pass. In that
        window they are not reading: they are scanning for the contact
        information, the school name, the graduation date, the most recent role
        title, and two or three bullet points near the top. Visual hierarchy
        determines what they see.
      </p>
      <p>
        Writing for both readers at once is possible, but it requires
        understanding what each values. The ATS values keyword presence. The
        recruiter values scannability and signal density. A resume optimized for
        one reader at the expense of the other fails overall.
      </p>

      <AnchorHeading as="h2" id="2-passing-the-ats">
        2. Passing the ATS: keyword strategy and formatting
      </AnchorHeading>
      <p>
        ATS parsers extract text from your resume, segment it into sections,
        and compare the extracted tokens against the job description. The
        simplest and most effective strategy is also the most honest one: use
        the exact technology names that appear in the job description.
      </p>
      <p>
        If the job description says &ldquo;React,&rdquo; do not write
        &ldquo;ReactJS.&rdquo; If it says &ldquo;PostgreSQL,&rdquo; do not
        write &ldquo;Postgres.&rdquo; Some parsers normalize these variants;
        many do not. Tay (2023) recommends listing technologies in a dedicated
        Skills section using the exact strings from the JD, and also weaving
        them into bullet context so the parser finds them in multiple locations.
        Keywords that appear only in a skills list without supporting context
        sometimes score lower than keywords that also appear in action-item
        sentences.
      </p>

      <Callout title="The three-step keyword audit">
        <p>
          (1) Paste the job description into a plain text editor. Highlight
          every technology name and action verb. (2) Compare the highlighted
          list against your resume, section by section. (3) Any keyword that
          appears in the JD but not your resume is a gap. The top three gaps
          are your highest-priority edits before submitting.
        </p>
      </Callout>

      <p>
        Formatting is the second ATS failure mode. Parsers expect plain,
        linear text. Multi-column layouts, tables used to arrange work
        experience, text boxes, headers and footers, and graphics all confuse
        parsers that read documents sequentially. A resume that looks beautiful
        in a PDF viewer may produce garbled output when the ATS parses it,
        which means the keyword matching runs on noise rather than your actual
        content. Use a single-column layout. Use standard section names
        (Education, Experience, Projects, Skills). Export as a standard PDF
        where the text layer is selectable.
      </p>
      <p>
        The formatting rule has one implication that surprises students: a
        clean, plain resume is not less impressive than a designed one. The
        people who evaluate technical candidates at software companies are
        engineers and engineering managers who recognize economy and signal
        density when they see it. Unnecessary design elements suggest the
        author is optimizing for the wrong audience.
      </p>

      <AnchorHeading as="h2" id="3-the-30-second-read">
        3. The 30-second human read
      </AnchorHeading>
      <p>
        Once a resume clears the ATS threshold, the recruiter scan follows a
        predictable path. The top third of the first page gets the most
        attention. Everything else is scanned for supporting evidence after an
        initial impression has formed. This means the ordering and content of
        your first three to five items determines whether the recruiter reads
        further.
      </p>
      <p>
        For a new-grad candidate, the recommended section order is: name and
        contact information, education, experience (internships, research,
        part-time roles), projects, and skills. Education goes near the top
        because it is what a new-grad candidate is currently completing and is
        often the primary hiring qualifier. Once you have two or three years of
        full-time experience, education moves to the bottom. For now, your
        graduation date and degree are the frame a recruiter needs to interpret
        everything else.
      </p>
      <p>
        Visual hierarchy within each section matters as much as section order.
        Consistent date alignment (flush right on every entry), bold used only
        for company or project names (not random phrases mid-bullet), and
        adequate white space between sections all signal that the author edits
        carefully. A dense page with minimal white space reads as an author who
        did not cut enough, not one who has more to say.
      </p>
      <p>
        One page is the standard for candidates with under three years of
        experience. Tay (2023) is direct on this: a two-page resume from a
        new-grad signals that the candidate has not made the hard decisions
        about what to include. The discipline required to fit meaningful work
        into one page is itself a signal. When you cannot fit everything, cut
        the weaker bullets before cutting the page limit.
      </p>

      <AnchorHeading as="h2" id="4-accomplishment-bullets">
        4. Accomplishment bullets: the formula
      </AnchorHeading>
      <p>
        The single highest-leverage change most new-grad resumes need is the
        conversion from task descriptions to accomplishment bullets. A task
        description tells the reader what you were assigned to do. An
        accomplishment bullet tells them what you actually produced, at what
        scale, and with what result.
      </p>
      <p>
        Every accomplishment bullet answers three questions:
      </p>
      <ol>
        <li>
          <strong>What did you do?</strong> The action, described with a
          specific ownership verb (Built, Designed, Implemented, Optimized,
          Reduced, Shipped, Refactored, Deployed) and the technology involved.
        </li>
        <li>
          <strong>At what scale?</strong> A signal that contextualizes the
          work: team size, number of users affected, data volume, time
          constraint, or codebase scope. Scale transforms an anonymous action
          into a specific contribution.
        </li>
        <li>
          <strong>With what result?</strong> A metric (before and after, or an
          absolute number) or a concrete outcome. If you cannot measure the
          result precisely, a scoped claim is better than a vague one.
        </li>
      </ol>
      <p>
        The action verb is the first word of the bullet and the first signal
        of ownership. &ldquo;Implemented&rdquo; and &ldquo;helped
        implement&rdquo; are not equivalent. The first claims authorship; the
        second describes a supporting role. At the new-grad level, where most
        work was done as part of a team, the temptation is to hedge with
        &ldquo;helped&rdquo; or &ldquo;contributed to&rdquo; even when you
        were the primary author. Do not do this. If you built the thing, say
        you built it. If you designed it, say you designed it.
      </p>
      <p>
        Inoue (2020) offers a clear benchmark from her own Netflix resume:
        &ldquo;wrote a unit test suite that increased code coverage from 2% to
        40% and reduced the bug backlog by 50%.&rdquo; The verb is specific
        (wrote, not helped improve). The scale is implicit (a test suite large
        enough to move coverage 38 percentage points). The result is a
        before-and-after metric on two dimensions. Every new-grad bullet can
        aspire to this structure.
      </p>

      <AnchorHeading as="h2" id="5-worked-example">
        5. Worked example: rewriting a weak bullet
      </AnchorHeading>
      <p>
        Here is a real-pattern bullet rewrite. The original:
      </p>
      <pre>{`Helped with optimization work on the backend database layer of our
class project web app.`}</pre>
      <p>
        Apply the three-question test. What did you do? Unclear: &ldquo;helped
        with optimization&rdquo; does not say what kind or whether you were the
        primary engineer. At what scale? Unknown: no team size, no data volume,
        no context for what &ldquo;backend database layer&rdquo; means. With
        what result? None stated.
      </p>
      <p>
        Now suppose the real story is: you identified that three queries were
        running a full table scan on a 500,000-row table, added composite
        indexes, and brought average page load time from 4.1 seconds to 0.9
        seconds. You were the only person who worked on the database layer.
      </p>
      <p>Rewritten bullet:</p>
      <pre>{`Optimized three slow queries on a 500k-row PostgreSQL table by adding
composite indexes; reduced average page load from 4.1s to 0.9s as the
sole backend engineer on a 4-person class project team.`}</pre>
      <p>
        Compare the two. The rewritten bullet names the action (Optimized),
        the technology (PostgreSQL), the mechanism (composite indexes), the
        scale (500k rows, sole backend engineer on a 4-person team), and the
        result (before and after load time). It contains no filler. A recruiter
        scanning it in two seconds understands: this candidate identified a
        performance problem independently, knew how to fix it, and produced a
        4x improvement in a specific metric.
      </p>
      <p>
        The information in the rewrite was all present in the student&rsquo;s
        memory. It was not present in the original bullet. That is the core
        problem: task bullets describe what the student was assigned; they do
        not surface the real work. The rewrite process is a retrieval process
        as much as a writing process. Ask yourself what you actually did, at
        what scale, and with what result, and then write down the answer.
      </p>

      <AnchorHeading as="h2" id="6-github">
        6. GitHub as a portfolio
      </AnchorHeading>
      <p>
        GitHub is the public surface that receives the most scrutiny from
        technical hiring managers. A recruiter who wants to verify that a
        resume is credible has one fast option: open the GitHub profile and
        look at the pinned repositories. What they see in 60 seconds shapes
        their confidence in the resume claims.
      </p>
      <p>
        The GitHub profile page has three components that hiring managers
        notice first: the contribution graph (is this person coding
        regularly?), the pinned repositories (up to six, curated by the
        owner), and the profile README (an optional markdown file displayed
        below the contribution graph). Each is worth brief attention.
      </p>
      <p>
        Pinned repositories are your curated portfolio. Pin 3-6 projects that
        have a working demo or screenshot, contain code you can discuss
        comfortably for 20 minutes in a technical interview, and show range
        across problem types or technologies. Do not pin: forks you did not
        materially change, incomplete coursework with no README, or projects
        whose code you would not want reviewed by a senior engineer.
      </p>
      <p>
        Each pinned repository needs a README that passes what can be called
        the five-question test. A recruiter or hiring manager clicking into a
        repo wants to know: (1) what problem does this solve, (2) who would
        use it, (3) how do I run it right now (a code block, copy-paste
        ready), (4) what does it look like (a screenshot or GIF for UI
        projects), and (5) what is the interesting technical decision. The
        fifth question is the one that opens interview conversations. A README
        that answers the first four but omits the fifth is a missed
        opportunity.
      </p>
      <p>
        Tay (2023) includes GitHub portfolio quality in the checklist for
        FAANG-tier resume preparation, noting that the project descriptions and
        README quality are evaluated alongside the resume itself during
        screening. A resume bullet that says &ldquo;built a distributed cache
        in Go&rdquo; is far more credible when the GitHub repo exists, is
        linked from the resume, and has a README that confirms and deepens the
        claim.
      </p>

      <AnchorHeading as="h2" id="7-linkedin">
        7. LinkedIn for SWE: inbound before outbound
      </AnchorHeading>
      <p>
        LinkedIn&rsquo;s primary value for a new-grad SWE candidate is
        inbound: being discovered by recruiters who are actively searching
        LinkedIn for candidates matching a set of keywords and a graduation
        year. This matters because many recruiters at technical companies use
        LinkedIn Recruiter before they open job board inboxes, and a profile
        that does not match their search query simply does not appear.
      </p>
      <p>
        The highest-leverage edits for inbound discoverability are:
      </p>
      <ul>
        <li>
          <strong>Headline.</strong> LinkedIn defaults your headline to your
          current job title or school. Replace it with a positioning statement:
          your target role plus your strongest technical skill pair. Example:
          &ldquo;New-grad SWE candidate, Python and Go backend, graduating
          June 2027.&rdquo; This is the field recruiters search first.
        </li>
        <li>
          <strong>Skills section.</strong> List the specific technology names
          from your target job descriptions. LinkedIn&rsquo;s recruiter search
          uses Skills as a filter. A skill listed here makes you findable for
          that query even if the technology does not appear in your experience
          bullets.
        </li>
        <li>
          <strong>Open to Work.</strong> During an active search, set the
          &ldquo;Open to Work&rdquo; signal to &ldquo;Recruiters only&rdquo;
          (not visible to your full network). This surfaces your profile in
          the recruiter tool&rsquo;s filter for candidates actively seeking
          roles.
        </li>
      </ul>
      <p>
        The experience section of LinkedIn should mirror your resume bullets,
        not replace them with a prose narrative. Recruiters who click through
        from a search result are scanning the same way they scan a resume. Keep
        bullets short, ownership-verb-first, and metric-bearing.
      </p>
      <p>
        Outbound LinkedIn use (cold messages to recruiters and engineers at
        target companies) is a separate skill covered in Week 9. At this stage,
        optimize for being found, not for reaching out.
      </p>

      <AnchorHeading as="h2" id="8-public-artifacts">
        8. Public artifacts: the narrative layer
      </AnchorHeading>
      <p>
        A public artifact is any piece of work that lives at a public URL,
        demonstrates something about how you think or build, and can be
        discovered without a warm introduction. The category includes technical
        blog posts, live demos with a linked write-up, detailed README files
        that go beyond setup instructions, conference talk slide decks, and
        substantive GitHub issues you opened and resolved.
      </p>
      <p>
        The goal of a public artifact is not completeness. It is narrative.
        Luu (2015) argues that hiring decisions rely heavily on credential
        proxies (school attended, employer pedigree) because they are cheap
        signals to evaluate. A candidate who produces concrete public work
        that demonstrates ability directly can partially bypass this filter,
        because the evidence is visible to anyone willing to look. The artifact
        does not need to be comprehensive to accomplish this. A 500-word
        write-up that answers &ldquo;what problem did I solve, what did I try,
        and what did I learn&rdquo; positions the project&rsquo;s narrative
        more effectively than a 5,000-line codebase with no README.
      </p>
      <p>
        Framing the project narrative for a 30-second scan means structuring
        the artifact around: the problem (what was broken or missing), the
        decision (what you chose to do and why, naming alternatives you
        rejected), and the result (what changed, measured or described
        concretely). This is the same structure as an accomplishment bullet,
        expanded to paragraph form. The &ldquo;decision&rdquo; section is the
        layer that a resume bullet cannot carry: it shows how you reason, not
        just what you shipped.
      </p>
      <p>
        McKenzie (2011) argues that engineers who communicate their work in
        terms of business value created (revenue increased, cost reduced,
        problem solved for a real person) are evaluated differently than
        engineers who describe the same work in purely technical terms. A
        public artifact is an opportunity to apply this framing outside the
        constraints of a one-page resume. Writing one before you are on the
        job market means it is already indexed, linked, and credible by the
        time a hiring manager searches for you.
      </p>

      <AnchorHeading as="h2" id="9-connecting-the-surfaces">
        9. Connecting the four surfaces
      </AnchorHeading>
      <p>
        Resume, GitHub, LinkedIn, and public artifact are four angles on the
        same story. When they are consistent, a recruiter or hiring manager
        moves through them with growing confidence. When they contradict each
        other, each inconsistency costs trust.
      </p>
      <p>
        A concrete consistency check: if your resume bullet says &ldquo;built
        a recommendation engine in Python using collaborative filtering,&rdquo;
        the GitHub repo should exist and be linked, its README should describe
        the problem and the filtering approach, and your LinkedIn skills list
        should include Python and any relevant library names. A hiring manager
        who pulls the GitHub link from your resume and finds an empty repo, or
        a repo with no README, now has evidence that the resume claim is not
        fully supported.
      </p>
      <p>
        Building consistency is not a one-time task. It is a maintenance
        practice. As your projects evolve, your resume and README descriptions
        should evolve with them. The most common gap is a README that was
        accurate at the time of the project but was never updated after you
        added features or fixed the obvious bugs. A six-month-old README that
        describes a half-finished version of the project is a liability, not
        an asset.
      </p>

      <AnchorHeading as="h2" id="10-exercises">10. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          Take one bullet from your current resume draft and apply the
          three-question test: what did you do, at what scale, with what
          result? If you cannot answer all three from memory, write down what
          additional information you would need to retrieve (a metric, a team
          size, a before-and-after comparison). Then retrieve that information
          and write the rewritten bullet.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Paste a real job description for a role you plan to apply to into a
          plain text editor. Highlight every technology name and action verb.
          Compare the highlighted list against your resume. List the three
          largest keyword gaps. For each gap, write one sentence explaining
          whether the gap reflects a missing skill, a skill you have but did
          not name, or a skill you have but named differently from the JD.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Apply the five-question README test to your strongest GitHub project:
          (1) what problem does it solve, (2) who would use it, (3) how do I
          run it right now (copy-paste ready), (4) what does it look like,
          (5) what is the interesting technical decision. Mark each question
          answered or missing. Write the missing sections.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Rewrite your LinkedIn headline as a positioning statement for a
          new-grad SWE search. Include your target role type and your strongest
          technical skill or language pair. Keep it under 120 characters.
          Then check your LinkedIn Skills section: are all the technology names
          from your target job descriptions listed there?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Choose one project you have built and write a 150-250 word
          description of it that follows the problem-decision-result frame.
          Name the problem, name the technical decision you made and one
          alternative you rejected, and describe the result in concrete terms.
          This draft is the raw material for a public artifact you could
          publish as a blog post or detailed README.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="11-going-deeper">11. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section worksheet asks you to
          rewrite three bullets live using the accomplishment formula and sketch
          one public artifact you will ship this term. Bring your current resume
          draft and a real job description to section.
        </li>
        <li>
          <strong>HW 1 (out Week 1, due Week 3).</strong> Resume and portfolio
          audit. The keyword gap audit, bullet rewrites, and README analysis from
          this reading and section are the direct inputs to that assignment. Do
          not wait until Week 3 to start: the section work is the first draft.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers ATS mechanics, the
          30-second read, and accomplishment bullet structure in detail with
          additional examples.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers GitHub portfolio,
          LinkedIn positioning, and public artifacts with worked examples.
        </li>
        <li>
          <strong>Week 7.</strong> Behavioral interviews depend on
          project-narrative skills introduced this week. The STAR story bank
          assignment draws on the same problem-decision-result framing you
          practice here.
        </li>
      </ul>

      <Takeaways>
        <li>
          An ATS scores keyword overlap before any human reads your resume. Use
          the job description&rsquo;s exact technology names, keep formatting
          single-column, and audit for keyword gaps before every submission.
        </li>
        <li>
          The 30-second human read starts at the top third of the first page.
          Section order, consistent date alignment, and white space determine
          what the recruiter sees before they decide whether to read further.
        </li>
        <li>
          Every accomplishment bullet answers three questions: what did you do
          (ownership verb plus technology), at what scale (team, data, users,
          time), and with what result (metric before and after, or a scoped
          concrete claim).
        </li>
        <li>
          GitHub, LinkedIn, and at least one public artifact should tell the
          same story as your resume from four different angles. Consistency
          builds trust; inconsistencies cost it.
        </li>
        <li>
          A public artifact frames your project&rsquo;s narrative for a
          30-second scan. Problem, decision, and result in 300-500 words
          positions you more effectively than a large codebase with no
          explanatory context.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Inoue, Mayuko. &ldquo;Critiquing My Resume that helped me get my
          jobs at Netflix and at a Silicon Valley Startup.&rdquo; 2020.{" "}
          <a href="https://www.youtube.com/watch?v=3oCGpr3bKog">
            youtube.com/watch?v=3oCGpr3bKog
          </a>
          . A practitioner annotation of the resume she used to land roles at
          Netflix, Patreon, and Intuit; covers bullet structure and the balance
          between showing capability and demonstrated impact.
        </p>
        <p>
          Luu, Dan. &ldquo;We only hire the trendiest.&rdquo; 2015.{" "}
          <a href="https://danluu.com/programmer-moneyball/">
            danluu.com/programmer-moneyball/
          </a>
          . Analyzes how hiring decisions rely on credential proxies and why
          concrete public work can partially bypass those filters.
        </p>
        <p>
          McKenzie, Patrick. &ldquo;Don&rsquo;t Call Yourself A Programmer,
          And Other Career Advice.&rdquo; 2011.{" "}
          <a href="https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/">
            kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/
          </a>
          . Argues that engineers are hired to create business value, not to
          write code; covers how positioning and communication skills shape
          career outcomes.
        </p>
        <p>
          Tay, Yangshun. &ldquo;Practical guide to writing FAANG-ready
          software engineer resumes.&rdquo; Tech Interview Handbook, 2023.{" "}
          <a href="https://www.techinterviewhandbook.org/resume/">
            techinterviewhandbook.org/resume/
          </a>
          . Step-by-step guide to resume format, section structure,
          accomplishment bullet writing, and GitHub portfolio; includes a
          FAANG-ready checklist. Companion to the 140k-star GitHub repo.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk02ReadingSearchBody =
  "resume keyword screen ATS applicant tracking system 30-second read accomplishment bullet action verb scale result quantify one page section order GitHub portfolio README five-question test pinned projects LinkedIn headline skills inbound discovery public artifact project narrative positioning problem decision result Week 2 reading landing the offer SWE job search senior CS students";
