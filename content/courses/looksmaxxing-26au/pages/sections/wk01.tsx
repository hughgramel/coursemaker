import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk01SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="annotate-forum-posts">
        Section: Annotate three looksmaxxing forum posts
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 1 &middot; Hands-on worksheet</p>

      <p>
        This section puts the evidence hierarchy from lecture into practice.
        You will read three real forum posts, locate the factual claims inside
        them, and label each claim as <strong>supported</strong> (consistent
        with peer-reviewed evidence), <strong>suggestive</strong> (plausible
        but not yet tested), or <strong>unfounded</strong> (contradicted by
        evidence or resting on a reversed burden of proof).
      </p>

      <p>
        Work in pairs. Each pair reads the same three posts independently,
        then compares labels before the group debrief. Disagreements are the
        interesting part: write down what evidence you would need to resolve
        the dispute.
      </p>

      <AnchorHeading as="h2" id="part-1-three-labels">
        Part 1: The three labels
      </AnchorHeading>

      <p>
        Before you open any post, agree on what the labels mean. Use these
        definitions exactly:
      </p>

      <ol>
        <li>
          <strong>Supported:</strong> At least one peer-reviewed study or
          professional guideline from a recognized body directly tests the
          claim and finds a positive result. The study does not need to be
          perfect, but it must exist and be cited by the post or findable
          within two minutes of searching PubMed or a professional-body site.
        </li>
        <li>
          <strong>Suggestive:</strong> The mechanism is biologically plausible
          and consistent with adjacent research, but the specific claim has not
          been tested directly, or the only available evidence is case reports
          and before-and-after photos with no control group.
        </li>
        <li>
          <strong>Unfounded:</strong> The claim is either contradicted by
          existing evidence, relies on a reversed burden of proof
          (&ldquo;no one has proved it doesn&rsquo;t work, so it works&rdquo;),
          or is based solely on anecdote with no plausible mechanism.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-post-a">
        Part 2: Post A &mdash; bonesmashing thread (looksmax.org, 2022)
      </AnchorHeading>

      <p>
        Read the thread at:{" "}
        <a href="https://looksmax.org/threads/theres-no-good-evidence-against-bonesmashing.1051845/">
          looksmax.org &mdash; &ldquo;There&rsquo;s no good evidence against bonesmashing&rdquo;
        </a>
      </p>

      <ol>
        <li>
          <strong>List every factual claim in the opening post.</strong> Write
          each claim as a single sentence. A claim is any statement about the
          world that could in principle be true or false (for example: &ldquo;blunt
          trauma stimulates periosteal bone remodeling&rdquo;). Ignore opinions
          and questions.
        </li>
        <li>
          <strong>Label each claim.</strong> For each claim you listed, write
          S (supported), SG (suggestive), or U (unfounded). Write one sentence
          justifying the label. If you label something U, identify whether the
          error is a reversed burden of proof, a contradiction, or an anecdote
          with no mechanism.
        </li>
        <li>
          <strong>Identify the core epistemological error.</strong> The title
          of the thread makes an argument. Write one sentence describing the
          logical structure of that argument and why it is flawed. The evidence
          hierarchy from lecture has a name for this type of error.
        </li>
        <li>
          <strong>Pair debrief.</strong> Compare your labels. Where did you
          disagree? What evidence would turn a U into an SG or a SG into an S?
          Write one sentence per disagreement.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-post-b">
        Part 3: Post B &mdash; mewing thread (instructor-selected)
      </AnchorHeading>

      <p>
        Your instructor will project or share a representative mewing thread
        claiming that consistent tongue posture reshapes the midface and jaw
        in adults. Read the selected post.
      </p>

      <ol start={5}>
        <li>
          <strong>List the factual claims.</strong> Focus on claims about
          structural change (bone, cartilage, palate shape) rather than claims
          about muscle tone, which have a different evidence base.
        </li>
        <li>
          <strong>Label each claim.</strong> Use the same three-label system.
          For the &ldquo;bone changes in adults&rdquo; claims, your primary
          counterevidence source is the American Association of Orthodontists
          (2023). Note: the AAO reviewed the available literature and found
          zero peer-reviewed studies supporting structural change from mewing
          in adults.
        </li>
        <li>
          <strong>Distinguish the two populations.</strong> Mewing claims
          sometimes hold up better for growing children than for adult men.
          Write two sentences: one describing what evidence (if any) exists
          for palatal expansion in growing adolescents, and one describing
          the status of the evidence for post-growth adults. They are not the
          same claim.
        </li>
        <li>
          <strong>Identify what the poster would need to submit</strong> for
          you to upgrade their main claim from U to SG. Write this as a
          one-sentence study design: &ldquo;An RCT of N adults practicing
          tongue posture for X weeks, measuring Y with Z imaging method,
          would be needed.&rdquo;
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-post-c">
        Part 4: Post C &mdash; a softmaxxing claim (instructor-selected)
      </AnchorHeading>

      <p>
        Your instructor will share a third post making a claim in the softmaxxing
        category: something behavioral or habit-based (skincare, sleep, diet,
        exercise, posture). This post should include at least one claim that is
        genuinely supported and at least one that is unfounded, so you can
        practice distinguishing them within the same post.
      </p>

      <ol start={9}>
        <li>
          <strong>List the factual claims.</strong> Aim for at least five
          discrete claims. Include claims about mechanism (&ldquo;sleep
          increases collagen synthesis&rdquo;) as well as claims about outcome
          (&ldquo;sleeping eight hours improves how you look&rdquo;).
        </li>
        <li>
          <strong>Label each claim.</strong> At least one claim in this post
          is supported by peer-reviewed evidence. Identify it and cite the
          evidence by author and year. At least one claim is unfounded. Name it
          and explain the error in one sentence.
        </li>
        <li>
          <strong>Notice the mixed-evidence post.</strong> Real forum posts
          rarely consist entirely of one label. Write two sentences explaining
          why a post that contains supported claims is not thereby trustworthy
          on all its claims. What rhetorical move does mixing accurate and
          inaccurate claims accomplish?
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-5-group-debrief">
        Part 5: Group debrief
      </AnchorHeading>

      <ol start={12}>
        <li>
          <strong>Report to the room.</strong> Each pair reports: (a) the
          claim they disagreed on most, (b) what evidence would resolve it,
          and (c) one claim they unanimously labeled supported and one they
          unanimously labeled unfounded.
        </li>
        <li>
          <strong>Class-level tally.</strong> Your instructor will collect the
          labels. For each claim where the class is split, discuss: is the
          disagreement about the evidence, or about the label definitions?
          Resolving label-definition disputes first is a real skill in
          evidence-based reasoning.
        </li>
        <li>
          <strong>Apply to your own searches.</strong> Think of one claim you
          have seen in a looksmaxxing context outside this class. Write the
          claim as a sentence, give it a label, and write one sentence
          explaining the label. You will refer to this in your HW1 baseline
          audit.
        </li>
      </ol>

      <AnchorHeading as="h2" id="what-to-ship">What to ship</AnchorHeading>
      <ul>
        <li>
          A completed annotation sheet for all three posts: each claim as a
          sentence, a label (S / SG / U), and a one-sentence justification.
        </li>
        <li>
          For Post A: one sentence naming the epistemological error in the
          bonesmashing thread title.
        </li>
        <li>
          For Post B: the one-sentence study design that would upgrade the
          main mewing claim from U to SG.
        </li>
        <li>
          For Post C: two sentences on why mixed-evidence posts are not
          uniformly trustworthy.
        </li>
        <li>
          One personal claim from outside class, labeled and justified.
        </li>
      </ul>
    </>
  );
}

export const wk01SectionSearchBody =
  "annotation forum posts looksmaxxing evidence hierarchy supported suggestive unfounded bonesmashing mewing claims critique peer review burden of proof section worksheet week 1";
