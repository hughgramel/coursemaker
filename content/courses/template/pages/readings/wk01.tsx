import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
} from "@/components/ReadingPage";

export function Wk01Reading() {
  return (
    <ReadingPage
      id="wk01"
      title="Week 1: a sample reading"
      kicker="Sample Course Template · Sample term · Reading"
    >
      <ReadingFraming>
        <p>
          This is what a reading looks like in coursemaker. Readings are TSX
          pages, not PDFs. They render at <code>/c/&lt;slug&gt;/readings/wkNN</code>.
          The framing block (this one) is the abstract: state the mission, the
          prerequisites assumed, and what the learner will be able to do by the
          end.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> None for a sample. In a real
          course, list the specific prior weeks or external knowledge a learner
          must bring before reading this.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-section-one">
        1. A section opens with the argument
      </AnchorHeading>
      <p>
        The first sentence of each section makes the section&rsquo;s claim. The
        rest of the section supports that claim with evidence, examples, or a
        worked derivation. Sections are 200 to 400 words. Three to seven
        sentences per paragraph.
      </p>
      <p>
        Inline citations are author plus year, e.g. Shannon (1948), with the
        full reference in the bibliography at the end. <strong>Bold</strong>{" "}
        marks vocabulary the learner should be able to define from this reading.
      </p>

      <AnchorHeading as="h2" id="2-worked-example">
        2. A worked example earns the abstraction
      </AnchorHeading>
      <p>
        Show the concept in motion before you generalize. A reading that defines{" "}
        <strong>entropy</strong> in symbols only is teaching the symbol. A
        reading that computes the entropy of three concrete distributions and
        then writes the symbol is teaching the idea.
      </p>

      <Exercise n={1}>
        Skim a reading from one of the live courses (<a href="/c/grow-on-x-26au/readings/wk01">Grow on X, week 1</a>{" "}
        or <a href="/c/b2c-10k-mrr-26au/readings/wk01">B2C to $10k MRR, week 1</a>).
        Identify its framing, two body sections, and its closing takeaways.
      </Exercise>

      <Exercise n={2}>
        Write a one-paragraph framing block for a reading you would teach on a
        topic you already know. Lead with the mission, not the throat-clearing.
      </Exercise>

      <Takeaways>
        <li>Readings are TSX pages rendered as web pages, not PDFs.</li>
        <li>Open every section with the argument, not a restatement of the heading.</li>
        <li>Worked examples come before abstractions, not after.</li>
        <li>End every reading with 2 to 5 exercises and 3 to 5 numbered takeaways.</li>
      </Takeaways>

      <Bibliography>
        <p>
          Shannon, C. E. (1948). A Mathematical Theory of Communication.{" "}
          <em>Bell System Technical Journal</em>, 27(3), 379&ndash;423.
        </p>
        <p>
          This bibliography block is here so you can see one rendered. Real
          readings cite real sources from the vetted source library produced
          by the <code>coursemaker-create</code> skill.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk01ReadingSearchBody =
  "Week 1 sample reading framing worked example exercises takeaways bibliography template";
