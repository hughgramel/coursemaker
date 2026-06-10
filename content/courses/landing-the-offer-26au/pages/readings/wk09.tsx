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
      title="Week 9: total compensation, leveling, and negotiation"
      kicker="Landing the Offer: SWE Job Search for Senior CS Students &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading has three outcomes. First, you will{" "}
          <strong>apply</strong> total compensation math by computing year-1
          expected value and 4-year expected total from a real offer with base,
          bonus, RSU grant, and signing bonus. Second, you will{" "}
          <strong>analyze</strong> leveling, understand what L3/L4/E3/E4 mean,
          and form a strategy for pushing the level conversation during the
          offer stage. Third, you will{" "}
          <strong>evaluate</strong> specific negotiation moves: how to use a
          competing offer ethically, how to respond when a recruiter says
          &ldquo;this is our best offer,&rdquo; and how to buy time on an
          exploding offer without damaging the relationship.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong>{" "}
          Target-company list, recruiter pipeline, and application channels
          from week 1; positioning from week 2; hiring bar and interview-loop
          anatomy from weeks 7 and 1. You do not need prior negotiation
          experience, but you do need to arrive at the conversation with at
          least one active offer or a realistic expectation of receiving one
          soon.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-comp-components">
        1. The four components of total compensation
      </AnchorHeading>
      <p>
        When a recruiter says your offer is $145,000, they mean your{" "}
        <strong>base salary</strong>. That is one of four components of your
        actual total compensation, and it is often not the largest one over
        a four-year horizon. Comparing offers by base alone is one of the
        most common and expensive mistakes new-grad candidates make.
      </p>
      <p>
        The four components are:
      </p>
      <ol>
        <li>
          <strong>Base salary.</strong> The fixed annual cash payment. Paid
          in regular installments regardless of company performance or your
          own performance rating. The easiest number to compare across
          companies.
        </li>
        <li>
          <strong>Annual bonus.</strong> A discretionary cash payment,
          typically expressed as a target percentage of base (10-20% at most
          large tech companies). Actual payout depends on company and
          individual performance; &ldquo;target&rdquo; means the expected
          value under median performance, not a guarantee.
        </li>
        <li>
          <strong>Equity (RSUs).</strong> Restricted stock units that convert
          to shares of company stock on a vesting schedule. The value at vest
          depends on the stock price at that time, which introduces real
          uncertainty. Public-company RSUs are worth more predictably than
          private-company options because you can see the current price on any
          financial site.
        </li>
        <li>
          <strong>Signing bonus.</strong> A one-time cash payment made at or
          shortly after hire. Not ongoing. Usually clawback-eligible for
          12-24 months, meaning you must return a prorated portion if you
          leave before the clawback period ends. Easier for companies to give
          than a base increase, because it does not affect multi-year budget
          projections.
        </li>
      </ol>
      <p>
        Shibly (Levels.fyi, 2025) describes the mechanic precisely: the
        recruiter leads with base because it is the most favorable-looking
        number for companies with strong equity packages. &ldquo;Don&rsquo;t
        feel obligated to accept your offer right away! Remember negotiation
        is a dialogue, and nothing needs to be decided on the first call.&rdquo;
        The first call is the worst time to evaluate an offer, because you
        have not yet computed the full number.
      </p>

      <AnchorHeading as="h2" id="2-total-comp-math">
        2. Total compensation math: a worked example
      </AnchorHeading>
      <p>
        Here is a realistic new-grad offer from a mid-to-large public tech
        company. Work through the calculation before reading the answer.
      </p>
      <pre>{`Offer terms:
  Base salary:        $145,000 / year
  Annual bonus:       10% target
  RSU grant:          100 units, current stock price $40 / share
  Vesting schedule:   4-year vest, 1-year cliff
  Signing bonus:      $20,000 (clawback for 12 months)`}</pre>
      <p>
        The vesting schedule means: you receive no RSUs for the first 12
        months (the cliff). At the 12-month mark, 25% of the grant vests at
        once (25 units). The remaining 75 units vest in equal monthly or
        quarterly tranches over years 2, 3, and 4.
      </p>
      <p>
        Year-1 expected total compensation:
      </p>
      <pre>{`Base salary:                  $145,000
Bonus (target, 10% of base):  $145,000 x 0.10 = $14,500
RSUs vesting in year 1:       25 units x $40 / unit = $1,000
Signing bonus:                $20,000

Year-1 total:
  $145,000 + $14,500 + $1,000 + $20,000 = $180,500`}</pre>
      <p>
        4-year expected total, with simplifying assumptions (stock price
        flat at $40, bonus at target every year, no additional RSU refresh
        grants):
      </p>
      <pre>{`Base salary (4 years):        $145,000 x 4       = $580,000
Bonus (4 years at target):    $14,500  x 4       =  $58,000
RSU grant (all 100 units):    100      x $40      =   $4,000
Signing bonus (one-time):                         =  $20,000

4-year total:
  $580,000 + $58,000 + $4,000 + $20,000 = $662,000`}</pre>

      <Callout title="State your assumptions explicitly">
        <p>
          Both numbers above depend on assumptions: stock price stays at
          $40, bonus pays at target every year, no refresh grants arrive in
          years 2-4. In a real comparison, you would apply a discount to
          private-company options (illiquid and subject to dilution),
          model the stock with a growth assumption if you have a thesis,
          and check whether the company has a history of annual refresh
          grants. Stating your assumptions out loud when computing these
          numbers is a sign of analytical clarity, not weakness.
        </p>
      </Callout>

      <p>
        Now compare two offers. Offer A: $145,000 base, $20,000 signing,
        100 RSUs. Offer B: $150,000 base, $0 signing, 60 RSUs. With the
        same stock price and bonus structure:
      </p>
      <pre>{`Offer A, year-1:
  $145,000 + $14,500 + $1,000 + $20,000 = $180,500

Offer B, year-1:
  $150,000 + $15,000 + $600  + $0       = $165,600

Offer A, 4-year total:
  $580,000 + $58,000 + $4,000 + $20,000 = $662,000

Offer B, 4-year total:
  $600,000 + $60,000 + $2,400 + $0      = $662,400`}</pre>
      <p>
        Offer B has a higher base but lower year-1 total because it has no
        signing bonus. Over four years the difference is negligible given
        flat stock assumptions. If you believe Company A&rsquo;s stock will
        appreciate, Offer A is better long-term. If you prefer predictable
        cash (perhaps because you have student debt to service), Offer B&rsquo;s
        higher base is more useful.
      </p>
      <p>
        This is the point of the exercise: &ldquo;which offer is better&rdquo;
        has no answer until you define what you are optimizing for. The math
        makes the tradeoff visible.
      </p>

      <AnchorHeading as="h2" id="3-leveling">
        3. Leveling: why your entry level matters more than your starting number
      </AnchorHeading>
      <p>
        Every large tech company uses an internal leveling system. The labels
        differ by company (L3/L4/L5 at Google and Amazon; E3/E4/E5 at Meta;
        SWE I/SWE II/Senior SWE at Microsoft; IC1/IC2/IC3 at Stripe), but
        the underlying structure is the same: each level has a defined
        compensation band (a floor and a ceiling), and promotions move you
        from the ceiling of one band to the floor of the next.
      </p>
      <p>
        For new grads, the typical entry level is L3 at Google, E3 at Meta,
        or SWE I at Microsoft. These are &ldquo;junior&rdquo; designations
        in the company&rsquo;s internal hierarchy even though the total
        compensation at these levels often exceeds $150,000.
      </p>
      <p>
        Shibly (Levels.fyi, 2025) reports the key dynamic: an L3 offer at
        $155,000 is near the top of the L3 band. Your first promotion to L4
        typically starts you at or near the L4 floor, which at Google might
        be $165,000-$170,000. An L4 offer at $155,000 has room to grow
        within the L4 band before you hit the ceiling. Over three to five
        years, the difference in trajectory compounds into a difference of
        $50,000-$100,000 in cumulative earnings.
      </p>
      <p>
        <strong>How to push for a higher level.</strong> The best time to
        have the level conversation is during the offer call, not after you
        have signed. Frame the request in terms of the scope of your prior
        work, not in terms of what you want:
      </p>
      <pre>{`"I noticed this role is listed as L3. Given that I led the
backend infrastructure for [project] end-to-end, including
system design, implementation, and on-call rotation, I wanted
to ask whether there is any flexibility to consider L4 for
this role. I am happy to discuss the scope of that work in
more detail if that would help the leveling conversation."`}</pre>
      <p>
        If they say L3 is standard for all new grads, accept that
        gracefully and ask two follow-up questions: what are the explicit
        promotion criteria from L3 to L4, and what is the typical timeline
        for a strong performer? A company that cannot answer both questions
        clearly is one where promotions are opaque.
      </p>

      <AnchorHeading as="h2" id="4-competing-offers">
        4. Competing offers: the ethical BATNA
      </AnchorHeading>
      <p>
        A <strong>BATNA</strong> (best alternative to a negotiated agreement)
        is your outside option: the offer you will take if this negotiation
        fails. Your competing offer is your BATNA, and it is your single most
        effective piece of leverage. McKenzie (2012) makes this the
        centerpiece of his framework: negotiating as a consistent policy is
        more valuable than case-by-case decisions, because the moment you
        decide in advance to always negotiate, you remove the hesitation from
        your voice.
      </p>
      <p>
        Qureshi (2016, Part 1) frames the competing-offer conversation as
        collaborative problem-solving, not confrontation: &ldquo;Employment
        is just striking a mutual deal in the labor market. Negotiation is a
        skill that can be learned just like any other, and I don&rsquo;t
        believe it&rsquo;s particularly elusive.&rdquo;
      </p>
      <p>
        The ethical constraint is simple: do not fabricate a competing offer
        or inflate its value. The tech industry is small, and recruiters
        occasionally verify claims. A fabricated offer, discovered, ends the
        candidacy immediately and damages your reputation for future
        applications at that company and at affiliated ones.
      </p>
      <p>
        How to raise a competing offer without naming the number first:
      </p>
      <pre>{`"I want to be transparent with you because I am genuinely
excited about this role. I do have another offer I am
considering, and I would love to find a way to make this
work. Is there flexibility on the base or equity component
that would help me make this decision?"`}</pre>
      <p>
        If the recruiter asks for the competing number, you have two options.
        You can share it (which anchors the conversation at that number), or
        you can describe it in relative terms (&ldquo;it is higher on base
        and I want to understand the full picture here before comparing&rdquo;).
        Qureshi (Part 2) recommends sharing the number only if you are
        confident the competing offer is credible and the company you prefer
        is genuinely positioned to match or beat it.
      </p>
      <p>
        Qureshi (Part 2) also states the underlying power dynamic clearly:
        &ldquo;Everything is stacked in your favor. It doesn&rsquo;t feel
        that way, but it absolutely is. Realize that when you are agonizing
        over whether to ask for another few thousand dollars, what they&rsquo;re
        doing is praying with bated breath that you&rsquo;ll sign the offer.&rdquo;
      </p>

      <AnchorHeading as="h2" id="5-best-offer-pushback">
        5. The &ldquo;best offer&rdquo; pushback
      </AnchorHeading>
      <p>
        &ldquo;This is our best offer&rdquo; is the single most common
        recruiter response to a counter. It sounds like a door closing. It
        is usually not.
      </p>
      <p>
        McKenzie (2012) explains why: the recruiter saying &ldquo;best
        offer&rdquo; does not always have the authority to make that
        determination. They may have consulted their own approval budget but
        not their manager&rsquo;s, the hiring manager&rsquo;s, or HR&rsquo;s
        discretionary band. &ldquo;Best offer&rdquo; often means &ldquo;the
        best offer I can approve right now without further escalation.&rdquo;
        Asking a narrow, specific question can escalate the conversation
        without making it adversarial.
      </p>
      <p>
        McKenzie&rsquo;s core claim: &ldquo;Negotiating never makes worthwhile
        offers worse. This means you need what political scientists call a
        commitment strategy: you always, as a matter of policy, negotiate all
        offers.&rdquo; If a company rescinds an offer because a candidate
        asked politely for a higher number, that is not a company you want
        to work for.
      </p>
      <p>
        The response script:
      </p>
      <pre>{`"I appreciate that, and I want you to know I am genuinely
excited about this role. I understand you may be at the
limit of what you can approve. Is there any flexibility
at all on the equity component, even a small increase in
the RSU grant? Or alternatively, is there room on the
signing bonus? I just want to make sure I have explored
all the options before I give you a final answer."`}</pre>
      <p>
        Three moves in that script. First, acknowledge the recruiter&rsquo;s
        position without accepting it as final. Second, reaffirm genuine
        enthusiasm (this tells the recruiter the relationship is not at risk).
        Third, ask a specific, narrow question about one component (equity or
        signing, not &ldquo;everything&rdquo;), which is easier to escalate
        internally because it is a bounded ask.
      </p>
      <p>
        Qureshi (Part 2) adds the practical mechanic: signing bonuses are
        easier to give than base because they are a one-time accounting event,
        not a recurring budget commitment. When base is stuck, pivot to signing.
      </p>

      <AnchorHeading as="h2" id="6-exploding-offers">
        6. Exploding offers: buying time ethically
      </AnchorHeading>
      <p>
        An <strong>exploding offer</strong> is one with an artificially short
        deadline, typically 24-72 hours, designed to prevent the candidate
        from comparing alternatives. Qureshi (Part 2) is direct about this:
        exploding offers are a pressure tactic, and a company that uses them
        aggressively is telling you something about how it treats employees.
        A reasonable company understands that a candidate making a major
        life decision needs time to make an informed choice.
      </p>
      <p>
        The practical goal is to buy one to two weeks without burning the
        relationship. The key to doing this is giving the recruiter a reason
        that is honest, specific, and framed around the decision quality
        rather than the competing process:
      </p>
      <pre>{`"Thank you for the offer. I am genuinely excited. I want
to be transparent: I have another interview process that
is about one week from completing, and I want to give you
a definitive answer rather than a provisional one. Would
it be possible to extend the deadline to [specific date]?
I am not trying to use the time to shop your offer around;
I just want to make the most informed decision I can, which
I think is better for both of us."`}</pre>
      <p>
        The phrase &ldquo;definitive answer rather than a provisional one&rdquo;
        matters. It frames the extension as a benefit to the recruiter, not
        just to you. A candidate who signs under pressure and then reneges
        costs the company weeks of recruiting work. A candidate who takes
        time and then signs with conviction is more likely to show up.
      </p>
      <p>
        Qureshi (Part 2) gives the same advice: &ldquo;companies would rather
        have the delay than a bad hire,&rdquo; and most will grant an extension
        if asked courteously and specifically. What does not work is a vague
        request (&ldquo;I need more time&rdquo;) without a specific date or a
        reason.
      </p>
      <p>
        Simultaneously, once you have the extension, contact the other company
        to accelerate their timeline. The script is simpler:
      </p>
      <pre>{`"I have received an offer with a deadline of [date] and I am
genuinely most interested in [your company]. Is there any
way to accelerate the timeline so I can include you in my
final decision? I want to make sure I am comparing the full
picture before I decide."`}</pre>

      <AnchorHeading as="h2" id="7-negotiation-as-policy">
        7. Negotiation as a policy, not a decision
      </AnchorHeading>
      <p>
        The deepest point in McKenzie (2012) is not a script. It is a frame.
        Most candidates approach negotiation as a case-by-case judgment: is
        this offer worth pushing back on? Is the gap large enough? Will they
        rescind if I ask?
      </p>
      <p>
        McKenzie argues that this framing is the source of the hesitation and
        the money left on the table. If you decide in advance that you will
        always negotiate, case-by-case judgment is no longer required. You
        do not need to overcome the hesitation on each individual offer
        because the decision has already been made.
      </p>
      <p>
        The financial arithmetic supports this. If you negotiate one offer per
        job search and achieve a $5,000 increase, and you conduct roughly seven
        job searches over a 30-year career, you gain $35,000 in pre-tax income.
        But base salary compounds: the next offer you negotiate will anchor
        partly on your current salary, and raises are typically expressed as
        percentages of base. McKenzie estimates that a $5,000 gain early in
        a career compounds to $50,000-$100,000 in lifetime earnings, which is
        why he opens the essay by describing negotiation as &ldquo;the highest
        hourly rate activity you will ever engage in.&rdquo;
      </p>
      <p>
        Qureshi (Part 1) reinforces the social dimension: most candidates who
        avoid negotiation do so because they fear it will make them look
        difficult or ungrateful. The evidence does not support this fear.
        Qureshi observes that recruiters negotiate offers constantly; it is
        a normal part of their job. A candidate who negotiates professionally
        and maintains a positive tone throughout the process does not
        damage the relationship. A candidate who negotiates badly (demands,
        ultimatums, hostility) does. The skill is in the execution, not the
        decision to negotiate.
      </p>

      <AnchorHeading as="h2" id="8-exercises">8. Exercises</AnchorHeading>
      <p>Work these before section this week.</p>

      <Exercise n={1}>
        <p>
          You receive an offer: $138,000 base, 10% annual bonus, 80 RSUs
          vesting over 4 years with a 1-year cliff, current stock price $35,
          and a $15,000 signing bonus. Compute your expected year-1 total
          compensation. Then compute your expected 4-year total under the
          assumption that stock price stays flat. State every assumption you
          make.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Compare the offer in exercise 1 against a second offer: $148,000
          base, 10% annual bonus, 40 RSUs, same stock price, no signing
          bonus, same vesting schedule. Which offer is better in year 1?
          Which is better over four years? Under what stock-price assumption
          does offer 1 become better than offer 2 over four years?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          A recruiter tells you: &ldquo;We have done everything we can; this
          is our best offer.&rdquo; Write out the exact words you would say
          in response. Your answer must: (a) acknowledge the recruiter&rsquo;s
          statement, (b) reaffirm your enthusiasm for the role, and (c) ask
          one specific narrow question about a single compensation component.
          It should be no more than four sentences.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          You have an offer from Company A expiring in 48 hours. You are
          three days from receiving an offer from Company B, which is your
          first choice. Draft the email to Company A asking for a two-week
          extension. Draft the email to Company B asking them to accelerate.
          Both emails should be under 100 words each.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          You are entering a job at a company as L3 (new-grad level). The
          L3 band is $130,000-$160,000. The L4 band is $155,000-$195,000.
          You have a project from your senior year where you were the sole
          engineer on a system used by 500 people. Draft the one-paragraph
          pitch you would deliver to the recruiter asking to be considered
          for L4. What evidence do you cite, and what question do you ask
          at the end?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="9-going-deeper">9. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section worksheet runs a
          live pipeline triage and a negotiation role-play in pairs. The
          role-play includes the &ldquo;best offer&rdquo; line and an
          exploding-offer scenario. Bring the scripts from exercises 3 and 4
          to use in the role-play.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the pipeline side:
          cold messages, referral paths, application cadence, take-homes,
          on-site logistics, and the post-on-site follow-up.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers leveling, total
          compensation mechanics, and the multi-offer conversation in more
          depth with worked examples.
        </li>
        <li>
          <strong>Week 10.</strong> Capstone week: application sprint, full
          mock loop, and one unconventional move. The pipeline you triage in
          section this week becomes the sprint inputs for week 10.
        </li>
        <li>
          <strong>HW 5 (due this week).</strong> STAR story bank of 12
          stories. The story bank supports the behavioral rounds you will
          face as part of the on-site loops described in lecture 1.
        </li>
      </ul>

      <Takeaways>
        <li>
          Total compensation has four components: base, bonus, RSUs, and
          signing bonus. Compute the year-1 and 4-year numbers before
          comparing offers; base alone understates the real difference
          between packages.
        </li>
        <li>
          Level matters more than starting salary. Entering at a higher level
          sets your promotion baseline higher for the first several years.
          Ask for the level conversation explicitly during the offer call,
          backed by specific evidence of scope.
        </li>
        <li>
          A competing offer is your BATNA. Raise it positively, do not name
          the number first, and never fabricate. The goal is a collaborative
          conversation, not a threat.
        </li>
        <li>
          &ldquo;This is our best offer&rdquo; is a negotiating position,
          not a final fact. Acknowledge it, reaffirm enthusiasm, and ask one
          narrow specific question about a single component such as equity
          or signing bonus.
        </li>
        <li>
          Negotiate as a policy, not a case-by-case decision. McKenzie (2012):
          the hesitation in your voice disappears when the decision has
          already been made in advance.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          McKenzie, Patrick (patio11). &ldquo;Salary Negotiation: Make More
          Money, Be More Valued.&rdquo; kalzumeus.com, 2012.{" "}
          <a href="https://www.kalzumeus.com/2012/01/23/salary-negotiation/">
            kalzumeus.com/2012/01/23/salary-negotiation/
          </a>
          . The canonical practitioner essay on salary negotiation. The
          commitment-strategy framing and the &ldquo;never make a worthwhile
          offer worse&rdquo; principle are the organizing ideas for sections
          5 and 7 of this reading.
        </p>
        <p>
          Qureshi, Haseeb. &ldquo;Ten Rules for Negotiating a Job Offer.&rdquo;
          haseebq.com, 2016.{" "}
          <a href="https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/">
            haseebq.com/my-ten-rules-for-negotiating-a-job-offer/
          </a>
          . Part 1 of Qureshi&rsquo;s two-part negotiation guide, covering the
          foundational rules: get everything in writing, always keep the door
          open, information is power, stay positive, and do not be the sole
          decision-maker. The &ldquo;employment as a mutual deal&rdquo; framing
          in section 4 comes directly from this essay.
        </p>
        <p>
          Qureshi, Haseeb. &ldquo;How Not to Bomb Your Offer Negotiation.&rdquo;
          haseebq.com, 2016.{" "}
          <a href="https://haseebq.com/how-not-to-bomb-your-offer-negotiation/">
            haseebq.com/how-not-to-bomb-your-offer-negotiation/
          </a>
          . Part 2 covers the back-and-forth mechanics: competing offers,
          signing bonuses, exploding offers, and maintaining the relationship.
          The &ldquo;stacked in your favor&rdquo; passage in section 4 and the
          exploding-offer script in section 6 draw on this essay.
        </p>
        <p>
          Shibly, Hakeem (Levels.fyi). &ldquo;Levels.fyi Ultimate Negotiation
          Guide.&rdquo; levels.fyi, 2025.{" "}
          <a href="https://www.levels.fyi/blog/ultimate-negotiation-guide.html">
            levels.fyi/blog/ultimate-negotiation-guide.html
          </a>
          . Covers compensation structure, avoiding early anchoring, and using
          competing offers. The leveling discussion in section 3 and the
          four-component compensation framework in section 1 draw on this
          guide.
        </p>
        <p>
          Orosz, Gergely and Stockman, Blake. &ldquo;Confessions of a Big Tech
          Recruiter.&rdquo; The Pragmatic Engineer, 2025.{" "}
          <a href="https://newsletter.pragmaticengineer.com/p/confessions-of-a-big-tech-recruiter">
            newsletter.pragmaticengineer.com/p/confessions-of-a-big-tech-recruiter
          </a>
          . Candid recruiter perspectives on cold outreach, referral routing,
          and phone screen evaluation. Informs lecture 1 of this week; cited
          in the slides for the cold-message section.
        </p>
        <p>
          Tay, Yangshun. &ldquo;Ten Rules of Negotiation.&rdquo; Tech Interview
          Handbook, 2023.{" "}
          <a href="https://www.techinterviewhandbook.org/negotiation-rules/">
            techinterviewhandbook.org/negotiation-rules/
          </a>
          . A scannable checklist distillation of the Qureshi framework. Useful
          as a pre-call reference the night before a negotiation conversation.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk09ReadingSearchBody =
  "total compensation base salary annual bonus RSU equity vesting signing bonus year-1 computation 4-year total leveling L3 L4 E3 E4 level matters competing offers BATNA best offer pushback exploding offer deadline extension negotiation policy commitment strategy patio11 McKenzie Qureshi Haseeb levels fyi recruiter conversation Week 9 reading landing the offer";
