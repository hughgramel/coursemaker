import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Callout,
} from "@/components/ReadingPage";

export function Wk03SectionPage() {
  return (
    <ReadingPage
      id="wk03-section"
      title="Week 3 section: Pricing experiment"
      kicker="B2C to $10k MRR &middot; Autumn 2026 &middot; Section"
    >
      <ReadingFraming>
        <p>
          By the end of this section you will have a one-page pricing brief in
          hand, two rounds of peer critique on record, and one concrete change
          committed for this week. The session has three parts: brief writing
          (solo), peer critique (pairs), and commit (whole room).
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You have read the Week 3
          reading, attended both lectures, and have at least a working theory
          of your pricing model. You do not need a live Stripe integration yet
          — that is the build-block milestone for Tuesday.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="part-1-brief">Part 1: Write your pricing brief (20 minutes, solo)</AnchorHeading>
      <p>
        Open a blank doc or paper. Write four numbered sections. Do not spend
        more than five minutes per section.
      </p>
      <ol>
        <li>
          <strong>Model.</strong> Circle one: free / freemium / one-time / monthly
          subscription / annual subscription / hybrid. In one sentence, state the
          rule that drove your choice (Tony Dinh&rsquo;s rule: &ldquo;if there are
          no recurring costs to maintain the software, I don&rsquo;t charge recurring
          costs&rdquo; is a valid model; so is the opposite).
        </li>
        <li>
          <strong>Anchor.</strong> State the exact price and the anchor you are
          placing above it. If you have a single tier, your anchor is the mental
          reference point the user had before arriving at your paywall (a
          competitor price, a category norm, or a decoy plan you show and
          cross out). Write that number down.
        </li>
        <li>
          <strong>Trial mechanics.</strong> Will you offer a trial? If yes: length
          in days, what is gated, and what stays free during the trial. If no:
          explain why a hard paywall is the better bet given your aha-moment
          timing and the RevenueCat benchmark (hard paywall apps convert at
          12.11% on day 35; freemium at 2.18%).
        </li>
        <li>
          <strong>Paywall placement.</strong> Name the exact screen, action, or
          usage threshold where the paywall appears. Explain why that moment
          follows the aha-moment rather than preceding it.
        </li>
      </ol>

      <Callout title="One-page rule">
        <p>
          The brief must fit one page (or one screen). If you cannot, you have
          not made decisions yet — you have listed options. Collapse to decisions
          and rewrite.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="part-2-critique">Part 2: Peer critique (25 minutes, pairs)</AnchorHeading>
      <p>
        Swap briefs with two different classmates. For each brief you review,
        write exactly three things: one thing you would not change, one thing
        you would change and why, and one question you would ask the founder
        before you changed anything. Post your critique in the shared doc next
        to the author&rsquo;s brief.
      </p>
      <ol>
        <li>
          <strong>Read (5 minutes).</strong> Read the brief once without writing
          anything. Form a first impression.
        </li>
        <li>
          <strong>Question the model (5 minutes).</strong> Does the model choice
          follow from the stated rule? If the founder says &ldquo;subscription
          because everyone does subscriptions,&rdquo; that is not a rule. Push for
          a falsifiable criterion.
        </li>
        <li>
          <strong>Test the anchor (5 minutes).</strong> Is the anchor number
          grounded in a real competitor price, a willingness-to-pay signal, or
          a data point from the RevenueCat or Paddle research? If not, flag it.
          A made-up anchor is still an anchor, but the founder should know it
          is made up.
        </li>
        <li>
          <strong>Write your critique (10 minutes).</strong> Keep positive,
          change, and question to one sentence each. No paragraph critiques.
          Specificity beats length.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-commit">Part 3: Commit (10 minutes, whole room)</AnchorHeading>
      <p>
        Each founder states one specific change they will make this week based
        on the critique they received. The change must be:
      </p>
      <ol>
        <li>
          <strong>Specific.</strong> &ldquo;I will change my price from $12/month
          to $9/month&rdquo; is specific. &ldquo;I will think more about pricing&rdquo;
          is not a commit.
        </li>
        <li>
          <strong>Shipped by Friday.</strong> The change must be live in your
          product by Friday&rsquo;s review. If it cannot ship in four days, it
          is too big. Break it down.
        </li>
        <li>
          <strong>Measurable.</strong> State the one number you will look at on
          Friday to know whether the change worked. Acceptable: trial start
          rate, trial-to-paid rate, MRR delta, number of checkout page visits.
          Not acceptable: &ldquo;feedback&rdquo; or &ldquo;feel.&rdquo;
        </li>
      </ol>
      <p>
        The section facilitator records each commit in the shared doc. Friday
        review will open with a five-minute accountability read-back.
      </p>

      <AnchorHeading as="h2" id="deliverables">Deliverables</AnchorHeading>
      <ul>
        <li>Your one-page pricing brief, posted in the shared doc before you leave.</li>
        <li>Two written peer critiques, posted next to the author&rsquo;s brief.</li>
        <li>One commit (specific change + Friday metric), recorded in the shared doc.</li>
      </ul>
    </ReadingPage>
  );
}

export const wk03SectionSearchBody =
  "pricing brief model anchor trial mechanics paywall placement peer critique commit section Week 3 freemium hard paywall subscription one-time";
