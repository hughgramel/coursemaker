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
      title="Week 2: visual literacy, CRAP, and Gestalt"
      kicker="Design for Builders: Ship Beautiful Products as a Founder &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers how to see an interface the way a trained designer
          sees it. By the end you will be able to name the four CRAP principles
          (Contrast, Repetition, Alignment, Proximity) in any real interface,
          decompose a screenshot into its visual hierarchy and explain why your
          eye moves in the order it does, and apply Gestalt grouping to fix a
          cluttered layout.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Frames, auto-layout, and
          components from Week 1. You should be able to place and resize elements
          in Figma and understand the difference between a group and a frame. No
          prior design theory is required.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-what-you-should-be-able-to-do">
        1. What you should be able to do after this reading
      </AnchorHeading>
      <p>
        Three things. First, look at any screenshot and name the visual
        hierarchy: rank the elements in the order your eye encounters them and
        identify which CRAP principle or Gestalt mechanism explains each
        transition. Second, find the single CRAP violation most responsible for
        a layout feeling &ldquo;off&rdquo; and name the fix in one sentence.
        Third, identify at least one Gestalt grouping in a real UI and explain
        whether it supports or contradicts the intended information structure.
      </p>
      <p>
        The exercises at the end of this reading test all three. The section
        this week asks you to do the first out loud, in public, with real
        screenshots.
      </p>

      <AnchorHeading as="h2" id="2-visual-hierarchy">
        2. Visual hierarchy: where the eye goes first
      </AnchorHeading>
      <p>
        <strong>Visual hierarchy</strong> is the order in which a viewer
        perceives elements in a composition. It is not the order the designer
        intended or the order the information is logically structured. It is the
        order the visual properties of the layout actually produce in a human
        eye.
      </p>
      <p>
        Gordon (2020) describes hierarchy as the tool that &ldquo;helps users
        navigate complex sets of information without getting overwhelmed.&rdquo;
        When hierarchy works, the viewer reaches the most important element
        first, understands the relationship between elements without reading
        every label, and can scan for what they need. When it fails, everything
        competes equally and the viewer either reads everything slowly or gives
        up.
      </p>
      <p>
        The primary drivers of visual hierarchy are <strong>contrast</strong>,
        which governs what the eye perceives as most prominent, and{" "}
        <strong>proximity</strong>, which governs what the eye perceives as
        related. Both are CRAP principles. Neither requires color or decoration
        to function. A layout can establish strong hierarchy using only size,
        weight, and whitespace.
      </p>
      <p>
        Simon (DesignCourse, 2022) makes the failure mode explicit: &ldquo;Your
        design looks amateurish because it has no hierarchy. Everything is the
        same size, the same weight, competing for attention equally.&rdquo; The
        fix is not adding more visual elements. It is differentiating the ones
        already present.
      </p>

      <AnchorHeading as="h2" id="3-contrast">
        3. Contrast: directing attention before the user reads anything
      </AnchorHeading>
      <p>
        <strong>Contrast</strong> is the measurable difference in visual
        properties between two elements. High contrast between an element and
        its surroundings pulls the eye. Low contrast causes an element to
        recede.
      </p>
      <p>
        The four contrast tools available in any layout are:
      </p>
      <ul>
        <li>
          <strong>Size contrast:</strong> a 32px heading next to 14px body copy
          creates a 2x size ratio. The heading reads first. A 16px heading next
          to 14px body copy creates a barely perceptible ratio. The eye is not
          directed.
        </li>
        <li>
          <strong>Weight contrast:</strong> bold text reads before regular
          weight text at identical sizes. This is why &ldquo;font-weight:
          700&rdquo; is the standard for emphasis even when the size does not
          change.
        </li>
        <li>
          <strong>Color contrast:</strong> a saturated accent color on a neutral
          field draws the eye before the viewer decides to look. This is the
          mechanism behind primary button design: the button should be the most
          visually prominent element on any page that has one.
        </li>
        <li>
          <strong>Space contrast:</strong> an element surrounded by whitespace
          reads as isolated and therefore important. A page title with 48px
          above it and 24px below it commands more weight than the same title
          with 8px above and below.
        </li>
      </ul>
      <p>
        Wathan and Schoger (2018) state this as a rule: &ldquo;When nothing is
        emphasized, nothing is emphasized.&rdquo; A layout where every element
        has roughly equal size, weight, and color has no hierarchy. The user
        must read every element to understand the structure of the page.
      </p>

      <Callout title="Visual weight is relative">
        <p>
          A 24px heading reads as important only if the body copy below it is
          smaller. If your body copy is also 24px, the heading has no contrast
          advantage. Hierarchy is always a ratio, not an absolute value. This
          is why a design system built on a type scale (covered in Week 3)
          is so effective: every level of the scale exists to establish a
          contrast ratio with the levels above and below it.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-repetition">
        4. Repetition: consistency as communication
      </AnchorHeading>
      <p>
        <strong>Repetition</strong> means applying the same visual treatment
        every time the same type of element appears. Every button of a given
        type looks the same. Every card looks the same. Every H2 heading looks
        the same.
      </p>
      <p>
        Repetition communicates category before the user reads any content. When
        the eye encounters a visual pattern it has already seen, it immediately
        classifies the new element as the same type as the previous one. This
        classification happens before conscious attention. Wathan and Schoger
        (2018) call this the mechanism by which design systems produce
        &ldquo;a look that says: this is a professional product.&rdquo;
      </p>
      <p>
        Broken repetition creates a different problem than no repetition. When
        most elements of a type share a visual treatment but one does not, the
        eye reads the exception as intentional. A card in a list that has a
        different background color reads as featured or selected, even if the
        difference was accidental. Unintentional exceptions teach users to
        distrust the system.
      </p>
      <p>
        The practical audit: open your product and count how many distinct
        button treatments exist. Count how many distinct card treatments exist.
        Count how many distinct paragraph styles exist. The correct number for
        any of these is small: two or three at most. More than five is a
        repetition violation. The fix is not removing elements; it is
        consolidating their treatments into a smaller set.
      </p>

      <AnchorHeading as="h2" id="5-alignment">
        5. Alignment: the invisible grid
      </AnchorHeading>
      <p>
        <strong>Alignment</strong> means that every element in a layout shares
        an edge, center, or baseline with at least one other element. The grid
        does not have to be visible. It is inferred by the viewer from the
        consistent placement of elements.
      </p>
      <p>
        Gordon (2020) explains the mechanism: &ldquo;When elements are aligned
        on a page, the result is a stronger cohesive unit.&rdquo; A viewer who
        encounters a column of left-aligned text, headings, and icons builds a
        mental model of the left edge. When a single element breaks that edge
        by even 4 pixels, the viewer&rsquo;s model is disrupted. The disruption
        registers as unease even when the viewer cannot name its cause.
      </p>
      <p>
        Alignment is the CRAP principle most frequently violated by builders,
        and the one most commonly defended with &ldquo;it looks fine to me.&rdquo;
        The reason it looks fine is that the brain corrects small offsets
        during casual viewing. The same brain, given a longer inspection or a
        higher-stakes judgment (e.g., &ldquo;can I trust this product?&rdquo;),
        registers the accumulated offsets as evidence of carelessness.
      </p>
      <p>
        The grid overlay test: after placing every element in a layout, turn on
        the layout grid in Figma. If you cannot explain which grid line each
        element snaps to, that element is floating. Floating elements are
        alignment violations. The fix is always: pick a grid line and snap to
        it.
      </p>

      <AnchorHeading as="h2" id="6-proximity">
        6. Proximity: whitespace as a grouping tool
      </AnchorHeading>
      <p>
        <strong>Proximity</strong> means that elements placed close together
        are perceived as one group. The gap between two groups must be
        visibly larger than the gap within a group.
      </p>
      <p>
        The principle requires no shared visual property. Two elements with
        different colors, sizes, and shapes read as related if they are close
        together. Two identical elements read as separate if they are far apart.
        This makes proximity the cheapest grouping tool in the layout toolkit:
        it costs only spacing, and it works without any additional visual
        decoration.
      </p>
      <p>
        The most common proximity failure in builder-made interfaces is uniform
        spacing throughout a layout. When every gap between elements is
        identical, the viewer cannot infer any grouping from position. The
        layout reads as one undifferentiated block of content.
      </p>
      <p>
        The fix is a two-tier spacing system. Decide which elements belong
        together (label and its input field, title and its description, icon and
        its caption). Set the gap between related elements to a small value: 4
        to 8 pixels. Set the gap between unrelated sections to a larger value:
        24 to 48 pixels. The ratio of outer-to-inner gap should be visible at a
        glance. Wathan and Schoger (2018) call this &ldquo;the single change
        that most improves cluttered layouts.&rdquo;
      </p>

      <AnchorHeading as="h2" id="7-gestalt">
        7. Gestalt: how perception groups what you did not explicitly group
      </AnchorHeading>
      <p>
        Gestalt psychology describes how the brain perceives whole patterns from
        partial information. Four Gestalt principles appear constantly in
        product UI and explain most of what goes wrong in cluttered layouts.
      </p>
      <p>
        <strong>Proximity grouping</strong> (described above in section 6) is
        the strongest Gestalt signal. The NN/G Gestalt video (2020) shows it as
        the first principle to apply when reorganizing a confusing layout.
      </p>
      <p>
        <strong>Similarity grouping:</strong> elements that share a visual
        property (color, size, shape, or style) are perceived as belonging to
        the same category. This is why navigation bars work without explicit
        labels: every nav item has the same weight, size, and padding, so they
        read as a set. It is also why one off-brand element in a list reads as
        broken rather than accidental. The similarity signal was established by
        the other elements; the exception contradicts it.
      </p>
      <p>
        <strong>Closure:</strong> the brain perceives a complete shape even
        when part of it is missing, as long as enough information is present to
        infer the rest. The FedEx logo&rsquo;s arrow is formed entirely by
        negative space between two letterforms. Progress indicators use
        incomplete circles to communicate partial completion. Closure allows
        designers to suggest shapes without drawing them fully, reducing visual
        noise without reducing communication.
      </p>
      <p>
        <strong>Continuity:</strong> the eye follows smooth implied paths even
        when no continuous line is drawn. Elements aligned on a shared baseline
        read as a row even when they are separated by large gaps. Navigation
        breadcrumbs read as a path because the separators imply continuation.
        Continuity lets layout structure be implied rather than explicit.
      </p>
      <p>
        <strong>Figure-ground:</strong> every visual composition separates into
        a figure (the shape being perceived as the object) and a ground (what
        the figure sits against). Gordon (2020) identifies this as the
        mechanism behind every modal, tooltip, dropdown, and overlay pattern in
        product UI. When figure-ground separation fails, usually because the
        card background matches the page background, the user cannot resolve
        where the interactive surface begins.
      </p>

      <AnchorHeading as="h2" id="8-worked-example">
        8. Worked example: auditing a settings panel
      </AnchorHeading>
      <p>
        The example below is a hypothetical settings panel. The component
        contains three settings, each with a label, a short description, and a
        toggle. The original layout uses 16px between every element throughout.
        The reporter says it &ldquo;looks fine but feels busy.&rdquo;
      </p>
      <p>
        Run the CRAP audit:
      </p>
      <pre>{`CONTRAST
  Label text: 14px, weight 600, color #111
  Description: 12px, weight 400, color #777
  Toggle: 20px wide, accent color when on, gray when off
  Result: label vs. description has contrast. Toggle state
  has contrast. Pass.

REPETITION
  Three settings items. Check: all three labels same
  size and weight? Yes. All three toggles same size and
  position? Yes. All three descriptions same color? Yes.
  Pass.

ALIGNMENT
  Labels left-aligned to a 16px left inset.
  Toggles right-aligned to a 16px right inset.
  Descriptions left-aligned to the same 16px inset.
  No floating elements. Pass.

PROXIMITY
  Gap between label and description: 4px. (Good: related.)
  Gap between description and the next setting's label: 16px.
  Gap between settings is same as gap between groups. FAIL.
  The three settings read as one block, not three items.

  Fix: increase the gap between settings to 32px. The
  outer gap (32px) is now 8x the inner gap (4px). The
  three settings now read as three separate decisions.`}</pre>
      <p>
        Now run the Gestalt audit on the same panel:
      </p>
      <pre>{`PROXIMITY: Fails for the same reason as the CRAP audit.
  Fix: same 32px gap above.

SIMILARITY: All three settings have the same treatment.
  They read as one category: settings. Pass.

CLOSURE: Toggle is a rounded rectangle with a circle
  inside. The circle implies it can slide. The implied
  motion is clear without animation. Pass.

FIGURE-GROUND: The panel sits on a white page. The
  panel has no border and no background color difference.
  The panel does not read as a distinct surface.

  Fix: add a subtle background (#F9F9F9) or a 1px border
  at 10% opacity. The panel now reads as a figure on
  the page ground.`}</pre>
      <p>
        Two fixes: increase the inter-setting gap and add a panel background.
        The layout did not change; the grouping and surface separation did.
      </p>

      <AnchorHeading as="h2" id="9-exercises">9. Exercises</AnchorHeading>
      <p>
        Work these before section. The critique lab this week builds directly
        on exercises 1 and 2.
      </p>

      <Exercise n={1}>
        <p>
          Open any app on your phone to a screen you use daily. Without reading
          any text, identify the element your eye reaches first. Name the
          contrast signal that produced that result: size, weight, color, or
          space. Then identify the element your eye reaches second. Name the
          contrast or proximity signal that produced that transition.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Take a screenshot of a layout you find visually cluttered (your own
          product counts). Run the CRAP audit: for each of the four principles,
          write one sentence saying whether it passes or fails. If it fails,
          name the specific fix in one sentence.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Open the Figma starter kit from Week 1. Find one card component. Run
          the proximity rule: measure the gap between elements within the card
          and the gap between the card and adjacent elements. Is the outer gap
          at least twice the inner gap? If not, fix it.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Find one logo or icon you use daily. Identify whether it uses closure
          (an implied shape with a missing section) or continuity (an implied
          path). Describe what the designer left out and what visual information
          the eye uses to complete it.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Pick a card component in your product. Turn off the card&rsquo;s
          background color or border in Figma and view it against the page
          background. Does the card still read as a distinct surface, or does
          it dissolve into the page? Name the figure-ground mechanism and
          describe the minimum change that would restore separation.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="10-going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week: Design critique.</strong> Bring three
          screenshots of real interfaces. You will annotate and present the
          visual hierarchy of one of them using the CRAP and Gestalt vocabulary
          from this reading.
        </li>
        <li>
          <strong>Lecture 1 this week</strong> covers Contrast, Repetition,
          Alignment, and Proximity with worked before/after examples. Watch the
          slides or attend before running exercise 2 above.
        </li>
        <li>
          <strong>Lecture 2 this week</strong> covers proximity grouping,
          similarity grouping, closure, continuity, and figure-ground in depth.
          The Gestalt sections of this reading (section 7) are the reading
          companion to that lecture.
        </li>
        <li>
          <strong>Week 3</strong> applies visual hierarchy to typography: type
          scale as a contrast system, line-height as a proximity signal, and
          spacing between paragraphs as a grouping mechanism.
        </li>
        <li>
          <strong>Optional: Steve Schoger, Refactoring UI at CSS Day 2019.</strong>{" "}
          <a href="https://www.youtube.com/watch?v=7Z9rrryIOC4">
            Watch the conference talk at YouTube (~37 min)
          </a>
          . Schoger runs live UI makeovers showing contrast, whitespace, and
          hierarchy fixes in real time. The &ldquo;before&rdquo; screens are
          identical to problems you will encounter in your own product.
        </li>
        <li>
          <strong>Optional: Michal Malewicz, Master Visual Hierarchy.</strong>{" "}
          <a href="https://www.youtube.com/watch?v=LfkDiDyn6nU">
            Watch on YouTube (~15 min)
          </a>
          . Fast, opinionated walkthrough of contrast and hierarchy with
          annotated real interfaces.
        </li>
      </ul>

      <Takeaways>
        <li>
          Visual hierarchy is the order the visual properties of your layout
          produce in the viewer&rsquo;s eye. You control it through contrast and
          proximity, not through content or labels.
        </li>
        <li>
          The four CRAP principles (Contrast, Repetition, Alignment, Proximity)
          cover almost every visual decision in a layout. Running a CRAP audit
          on any screen will find the violation responsible for it feeling off.
        </li>
        <li>
          Gestalt grouping happens before conscious attention. Proximity is the
          strongest grouping signal. Inconsistent spacing is the single most
          common source of perceived clutter in builder-made interfaces.
        </li>
        <li>
          Similarity encodes category. When similar elements have different
          visual treatments, the viewer assumes the difference is intentional.
          Unintentional similarity violations teach users to distrust your
          interface.
        </li>
        <li>
          Figure-ground separation is the foundation of every card, modal, and
          overlay pattern. Insufficient contrast between a surface and its
          background produces layouts that feel unresolved even when every
          element is individually correct.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Gordon, Kelley. &ldquo;5 Principles of Visual Design in UX.&rdquo; Nielsen
          Norman Group, 2020.{" "}
          <a href="https://www.nngroup.com/articles/principles-visual-design/">
            nngroup.com/articles/principles-visual-design/
          </a>
          . The canonical NN/G article on scale, visual hierarchy, balance,
          contrast, and Gestalt principles through real product examples.
        </p>
        <p>
          Malewicz, Michal. &ldquo;Master Visual Hierarchy: Principles of Visual
          Design.&rdquo; YouTube, 2022.{" "}
          <a href="https://www.youtube.com/watch?v=LfkDiDyn6nU">
            youtube.com/watch?v=LfkDiDyn6nU
          </a>
          . Fast, practitioner-direct walkthrough of contrast, scale, and
          visual weight with annotated real UI examples.
        </p>
        <p>
          Nielsen Norman Group. &ldquo;The Gestalt Principles for User Interface
          Design.&rdquo; Video, 2020.{" "}
          <a href="https://www.nngroup.com/videos/the-gestalt-principles-intro/">
            nngroup.com/videos/the-gestalt-principles-intro/
          </a>
          . Introduction to proximity, similarity, closure, continuity, and
          figure-ground with annotated real interface examples. ~8 minutes.
        </p>
        <p>
          Schoger, Steve. &ldquo;Refactoring UI.&rdquo; CSS Day Conference. YouTube,
          2019.{" "}
          <a href="https://www.youtube.com/watch?v=7Z9rrryIOC4">
            youtube.com/watch?v=7Z9rrryIOC4
          </a>
          . Live UI makeovers demonstrating contrast, whitespace, hierarchy, and
          shadow decisions. The before/after format models the section critique
          format used this week.
        </p>
        <p>
          Simon, Gary (DesignCourse). &ldquo;Typographic Visual Hierarchy in UI
          Design (4 Examples).&rdquo; YouTube, 2022.{" "}
          <a href="https://www.youtube.com/watch?v=u9XSmlZhYq4">
            youtube.com/watch?v=u9XSmlZhYq4
          </a>
          . Four real interface walkthroughs showing how font size, weight,
          color, and spacing create or destroy visual hierarchy.
        </p>
        <p>
          Wathan, Adam, and Steve Schoger. &ldquo;7 Practical Tips for Cheating at
          Design.&rdquo; Refactoring UI, 2018.{" "}
          <a href="https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886">
            medium.com/refactoring-ui
          </a>
          . The essay that introduced the Refactoring UI philosophy: hierarchy
          through color and weight instead of size alone, and every other
          immediately actionable visual fix.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk02ReadingSearchBody =
  "visual literacy CRAP principles contrast repetition alignment proximity visual hierarchy Gestalt proximity grouping similarity grouping closure continuity figure-ground visual weight whitespace layout cluttered interface screenshot audit Week 2 reading design for builders";
