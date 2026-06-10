import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk03Reading() {
  return (
    <ReadingPage
      id="wk03"
      title="Week 3: typography for product builders"
      kicker="Design for Builders: Ship Beautiful Products as a Founder · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers how type works at a mechanical level, how to
          build a five-step modular type scale for a product, how to set
          line-height and measure so body text is comfortable to read, and how
          to choose and pair typefaces whose voice matches a brand. By the end
          you will be able to build a complete type system for a product from a
          single base size and ratio; critique any typeface pairing using terms
          like x-height, stroke contrast, and voice; and identify the specific
          measurements that make body text comfortable or uncomfortable to read.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Visual hierarchy, contrast,
          and proximity from weeks 1 and 2 (visual-hierarchy, crap-principles,
          gestalt-grouping). This reading builds on those concepts by showing
          how type is the primary tool for establishing hierarchy in a product
          UI. You should also have a working Figma file from week 1, since the
          exercises ask you to implement a type scale as Figma text styles.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-why-type-is-the-80-percent-lever">
        1. Why type is the 80% lever
      </AnchorHeading>
      <p>
        Most builder products look amateur for one reason above all others: the
        typography was never chosen, only defaulted. The developer opened a code
        editor, reached for <code>font-family: sans-serif</code> or whatever
        the CSS framework provided, and shipped. The type is legible. But
        legibility is not the goal. Legibility is the floor.
      </p>
      <p>
        Simon (DesignCourse, 2022) demonstrates this directly: take a real
        product UI, change nothing except the typeface and its sizing, and the
        perceived quality shifts more than any other single change. Spacing
        matters. Color matters. But type is the first thing a reader sees and
        the last thing they consciously notice. It sets the tone before a
        single word is processed.
      </p>
      <p>
        Hoffmann (2022) frames typography as &ldquo;the spoken language in
        visual form.&rdquo; Before a reader reads your headline, they have
        already heard whether your product sounds authoritative, friendly,
        technical, or cheap. That impression comes from the typeface,
        not the words.
      </p>
      <p>
        This week focuses on the mechanics that give you control over that
        impression: anatomy, classification, voice, scales, line-height, and
        measure. Each section builds on the last.
      </p>

      <AnchorHeading as="h2" id="2-type-anatomy">
        2. Type anatomy: the terms you need
      </AnchorHeading>
      <p>
        You do not need the full vocabulary of a type designer. You need the
        subset of terms that explain why fonts behave the way they do in
        product UI.
      </p>
      <p>
        The <strong>baseline</strong> is the invisible horizontal line most
        letters sit on. Descending letters like g, y, and p extend below the
        baseline. Ascending letters like h, l, and k extend above the
        x-height. The baseline is the anchor for vertical alignment in text
        layout.
      </p>
      <p>
        The <strong>x-height</strong> is the height of a lowercase letter x,
        measured from baseline to the top of the letter. X-height is the single
        most important anatomical property for product UI, because it controls
        apparent size. Two typefaces set at 16px that have different x-heights
        look different sizes. Inter has a large x-height relative to its cap
        height. Georgia has a smaller one. At 16px, Inter looks larger.
      </p>
      <p>
        The <strong>cap height</strong> is the height of uppercase letters like
        H, I, and T. It is always taller than the x-height in text typefaces.
        The ratio of x-height to cap height is one measure of a
        typeface&rsquo;s visual density.
      </p>
      <p>
        <strong>Stroke contrast</strong> is the ratio of thick strokes to thin
        strokes within a single letterform. A letter O in Garamond has thick
        vertical strokes and thin horizontal strokes: high contrast. The same
        letter in Helvetica has near-uniform stroke width: low contrast.
        High-contrast typefaces carry more visual tension and tend to read as
        formal or editorial. Low-contrast typefaces read as neutral or
        technical (Hoffmann 2022).
      </p>
      <p>
        <strong>Stress</strong> is the angle of the thinnest part of a rounded
        letter. If you draw a line through the thinnest points of the letter O,
        the angle of that line is the stress axis. A diagonal stress (the line
        tilts like a forward slash) is characteristic of humanist and old-style
        typefaces descended from handwriting. A vertical stress (the line runs
        straight up) is characteristic of transitional and modern typefaces
        designed with more geometric precision.
      </p>

      <Callout title="Key term: x-height">
        <p>
          X-height is why &ldquo;set everything to 16px&rdquo; is not a type
          system. Two fonts at 16px may produce apparent sizes of 12px and
          18px depending on their x-height ratios. When building a scale,
          always check visual size in context, not just the pixel value.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-classification-and-voice">
        3. Classification and voice
      </AnchorHeading>
      <p>
        Type classification systems list dozens of categories. For product
        work, three do the practical work: serif, sans-serif, and display.
        Within those categories, subtypes carry specific voices.
      </p>
      <p>
        <strong>Serif typefaces</strong> end each stroke with a small
        cross-line called a serif. The serif subfamily that matters most for
        product work has four subtypes.
      </p>
      <p>
        Old-style serifs (Garamond, EB Garamond) have diagonal stress, low-to-
        moderate contrast, and bracketed serifs that flow from the main stroke.
        They sound warm, literary, and traditional. They suit a personal blog,
        a reading app, or a brand with a long history it wants to invoke.
      </p>
      <p>
        Transitional serifs (Georgia, Libre Baskerville) have more vertical
        stress and higher contrast than old-style. They sound authoritative
        and editorial, closer to a newspaper or textbook than a manuscript.
        Many fintech and legal-adjacent products reach for a transitional serif
        to signal trust.
      </p>
      <p>
        Modern serifs, also called Didone (Playfair Display, Cormorant) have
        extreme contrast between thick and thin strokes and fully vertical
        stress. They sound elegant, fashion-forward, and high-end. They are
        difficult to read at small sizes because the thin strokes disappear.
        Use them for display headlines only.
      </p>
      <p>
        Slab serifs (Roboto Slab, Courier New) have low contrast and blocky,
        unbracketed serifs. They sound industrial, technical, or retro
        depending on execution. Developer tools and typewriter-aesthetic
        products often reach for them.
      </p>
      <p>
        <strong>Sans-serif typefaces</strong> have no serifs. The four subtypes
        most useful in product work each carry distinct signals.
      </p>
      <p>
        Grotesque sans (Helvetica, Akzidenz-Grotesk) were the workhorses of
        20th-century Swiss graphic design. They sound neutral and corporate.
        Helvetica in particular carries a legacy of institutional authority that
        cuts both ways: trustworthy and possibly stiff.
      </p>
      <p>
        Neo-grotesque sans (Arial, Roboto, Inter) are cleaned-up grotesques
        optimized for screen rendering. Inter was designed specifically for UI.
        They sound professional and digital-native. Most SaaS products use a
        neo-grotesque for body text because it reads clearly at 13-16px on
        screen and carries no strong personality that competes with the
        product&rsquo;s own brand (Segall 2024).
      </p>
      <p>
        Humanist sans (Gill Sans, Fira Sans, Lato) are influenced by calligraphy
        and old-style letterforms. They have variable stroke width, more
        personality than neo-grotesques, and wider letter spacing. They sound
        approachable and human. A journaling app or mental health product often
        reaches for a humanist sans over a neutral neo-grotesque.
      </p>
      <p>
        Geometric sans (Futura, Nunito, Poppins) are constructed from circles
        and straight lines. They sound friendly, modern, and brand-forward.
        Their consistent geometry is visually satisfying in display sizes. At
        body sizes, the geometric construction can become monotonous for long
        reads because the letters are less differentiated from each other than
        humanist alternatives.
      </p>
      <p>
        <strong>Display typefaces</strong> are designed to be used at headline
        sizes (40px and above). They often have extreme contrast, unusual
        letterforms, or very tight spacing that looks right at large sizes and
        breaks down at small ones. Never use a display typeface for body text.
        The category name is the use instruction.
      </p>
      <p>
        Segall (2024) describes a practical three-step process for choosing a
        typeface that matches a brand: write three adjectives that describe
        the brand, map those adjectives to a classification, and then test
        the candidate typeface with real copy at real sizes in context. The
        context test matters because a typeface that looks right in a specimen
        gallery may look wrong when it says your actual product name.
      </p>

      <AnchorHeading as="h2" id="4-modular-type-scales">
        4. Modular type scales
      </AnchorHeading>
      <p>
        A <strong>modular type scale</strong> is a sequence of type sizes
        derived from a single base size and a single ratio. Every size in the
        scale relates to every other size by the same multiplier. The result
        is a set of sizes with consistent visual relationships, which is why
        scaled text looks designed rather than arbitrary.
      </p>
      <p>
        The most common scales in product work use ratios between 1.125
        (a Major Second interval) and 1.5 (a Perfect Fifth interval). Smaller
        ratios produce tighter scales suited to dense UIs like data tables and
        dashboards. Larger ratios produce more dramatic size differences suited
        to marketing pages and editorial layouts.
      </p>
      <p>
        A five-step scale starting from 16px at the 1.25 (Major Third) ratio
        produces these sizes:
      </p>
      <pre>{`Base:    16px
Step +1: 16 × 1.25   = 20px
Step +2: 16 × 1.25²  = 25px
Step +3: 16 × 1.25³  = 31.25px  (round to 31px)
Step +4: 16 × 1.25⁴  = 39.06px  (round to 39px)

Step −1: 16 ÷ 1.25   = 12.8px   (round to 13px)
Step −2: 16 ÷ 1.25²  = 10.24px  (round to 10px)`}</pre>
      <p>
        The five working sizes for a typical product UI using this scale: 13px
        (labels, captions), 16px (body), 20px (card titles, subheads), 25px
        (section headings), 39px (page headlines). Each step is 25% larger
        than the one below it. The visual difference between adjacent levels is
        perceptible but not jarring. The difference between the extremes (13px
        to 39px) is clear enough to establish unambiguous hierarchy.
      </p>
      <p>
        Figma (2023) recommends registering these sizes as text styles named by
        role rather than by pixel value. Name the styles <code>text/body</code>,
        <code>text/subhead</code>, <code>text/heading</code>, and so on, not{" "}
        <code>text/16</code>, <code>text/20</code>. Role-based names survive
        a base size change without requiring a rename of every style. When you
        decide to shift the base from 16px to 15px, you re-derive the scale and
        update the pixel values. The style names stay the same. Every component
        that uses <code>text/body</code> updates automatically.
      </p>
      <p>
        A five-step scale is usually sufficient. If a product appears to need
        more than five distinct type sizes, the first diagnosis should be
        hierarchy, not scale. Adding a sixth or seventh step usually papers
        over a structural problem: too many competing levels of importance that
        should instead be resolved by merging levels or improving layout.
      </p>

      <AnchorHeading as="h2" id="5-line-height">
        5. Line-height
      </AnchorHeading>
      <p>
        <strong>Line-height</strong> (also called leading, from the strips of
        lead type compositors placed between lines) controls the vertical space
        between lines of text. In CSS it is a unitless multiplier: a
        line-height of 1.5 on 16px text produces 24px of space from one
        baseline to the next.
      </p>
      <p>
        The browser default of 1.2 is appropriate for headlines. It is too
        tight for body text. Butterick (2019) establishes the optimal range for
        most body text as 120-145% of point size (line-height 1.2 to 1.45 in
        CSS notation). The common advice to &ldquo;always use 1.5&rdquo; is not
        calibrated to size or context.
      </p>
      <p>
        Wathan and Schoger (2019) add that line-height should scale inversely
        with font size: small text needs more leading because the lines are
        harder to distinguish, while large text needs less because the size
        itself provides enough separation. The practical table:
      </p>
      <pre>{`12–14px (captions, labels):   line-height 1.5–1.7
15–18px (body text):          line-height 1.4–1.5
20–24px (subheads):           line-height 1.25–1.35
28–36px (section headings):   line-height 1.1–1.2
40px+  (page headlines):      line-height 1.0–1.1`}</pre>
      <p>
        A 48px headline with line-height 1.5 looks like a double-spaced
        document. A 13px caption with line-height 1.1 looks like the lines are
        stacked on top of each other. Both of these appear in real products
        shipped by competent developers who never examined the relationship
        between their font size and their line-height.
      </p>
      <p>
        One additional interaction: line-height and column width are not
        independent. Wathan and Schoger (2019) show that a narrow column can
        tolerate tighter leading because the short line length creates a natural
        rhythm for the eye. A wide column needs more leading to help the eye
        track back from the end of one line to the start of the next. Set
        measure first, then calibrate line-height to the column width.
      </p>

      <AnchorHeading as="h2" id="6-measure">
        6. Measure: the 45-75ch rule
      </AnchorHeading>
      <p>
        <strong>Measure</strong> is the width of a column of text, expressed in
        characters per line. The comfortable range for body text is 45-75
        characters (Butterick 2019). Below 45, the eye makes too many jumps
        between lines and reading pace drops. Above 75, the eye struggles to
        locate the beginning of the next line at the end of the current one.
        Reading fatigue increases, and readers are more likely to re-read lines
        or lose their place.
      </p>
      <p>
        In CSS, the <code>ch</code> unit equals the width of the &ldquo;0&rdquo;
        character in the current font at the current size. Setting{" "}
        <code>max-width: 65ch</code> on a paragraph element constrains the
        column to approximately 65 characters per line, which falls comfortably
        within the optimal range. The actual character count varies slightly by
        typeface because character widths differ, but <code>65ch</code> is a
        reliable starting point for any body typeface at body size.
      </p>
      <p>
        Most product landing pages violate the measure rule in the opposite
        direction from what you might expect. They are too wide. A full-width
        text block in a 1200px container at 16px Inter runs approximately
        120-140 characters per line: nearly double the maximum comfortable
        measure. The reader&rsquo;s eye drifts. The experience of reading the
        page is subtly exhausting in a way the reader cannot name, but which
        they correctly attribute to the page &ldquo;feeling hard to read.&rdquo;
        Setting <code>max-width: 65ch</code> on body copy solves this entirely,
        with one line of CSS.
      </p>
      <p>
        The measure rule applies to body text and long-form copy. Headings,
        labels, navigation, and single-line UI elements are not constrained by
        it. The rule governs reading experience, not layout.
      </p>

      <AnchorHeading as="h2" id="7-typeface-pairing">
        7. Typeface pairing
      </AnchorHeading>
      <p>
        Most products benefit from one typeface used well, rather than two
        typefaces used carelessly. But a two-typeface system is useful when the
        body face and the display face need to do different jobs: a body face
        optimized for legibility at 15-16px often lacks the presence to carry a
        40px marketing headline, while a dramatic display face would be
        impossible to read at body size.
      </p>
      <p>
        Pairs that work share one characteristic and contrast on another (Segall
        2024). The most common successful pairing strategy is serif headline
        with sans-serif body, or vice versa. The classification contrast gives
        the reader an immediate visual signal that these are different kinds of
        text playing different roles. Within that contrast, a shared x-height
        ratio or a shared era of design keeps the two typefaces from looking
        like they came from different files.
      </p>
      <p>
        The pairing failure mode most common in builder products is not
        too much contrast, but too little. Two geometric sans-serif typefaces
        from the same decade look nearly identical on the page. The reader
        cannot tell why there are two typefaces. The result is not a system:
        it is noise. Two typefaces from the same classification and the same
        personality register as a mistake, not a decision.
      </p>
      <p>
        A secondary failure mode is pairing typefaces with clashing voices.
        A high-contrast editorial serif with a playful rounded geometric sans
        sends two conflicting signals about the brand. Each typeface is
        individually appropriate for some product. Together, they produce
        confusion about what this product is.
      </p>
      <p>
        The practical test for a pair: print both typefaces large on the same
        page, with real copy from your product. From one meter away, can you
        immediately tell they are different? Good. Do they feel like they
        come from the same world? Also good. If the answer to either question
        is no, try a different pair.
      </p>

      <AnchorHeading as="h2" id="8-worked-example">
        8. Worked example: building a type system from scratch
      </AnchorHeading>
      <p>
        Suppose you are building a project management tool for small engineering
        teams. The brand adjectives you land on are: focused, professional,
        calm. Here is a complete type system built from those adjectives, using
        the process from this reading.
      </p>
      <p>
        <strong>Step 1: choose a body typeface.</strong> The adjectives point
        toward a neo-grotesque or humanist sans. &ldquo;Focused&rdquo; and
        &ldquo;professional&rdquo; suggest a clean, neutral face. &ldquo;Calm&rdquo;
        rules out anything geometric or rounded. Inter is the leading candidate:
        it is a neo-grotesque with a large x-height, designed for screen UI,
        with excellent legibility at 14-16px.
      </p>
      <p>
        <strong>Step 2: choose a display typeface (or skip it).</strong> For an
        app UI, a single typeface with a wide weight range often does the work
        of two. Inter at weights 400 (regular) and 600 (semibold) or 700
        (bold) creates enough visual hierarchy without a second typeface. If
        a marketing landing page needs a second face, a transitional serif like
        Charter or Libre Baskerville pairs well with Inter: the classification
        contrast (serif vs. sans) is clear, both have similar x-heights, and
        both read as professional.
      </p>
      <p>
        <strong>Step 3: build the scale.</strong> Base at 15px with a 1.25
        ratio (the product is dense UI, not marketing):
      </p>
      <pre>{`xs:    15 ÷ 1.25²  = 9.6px   (use 10px for labels)
sm:    15 ÷ 1.25   = 12px
base:  15px               (body text)
lg:    15 × 1.25   = 18.75px (use 19px for card titles)
xl:    15 × 1.25²  = 23.4px  (use 23px for section heads)
2xl:   15 × 1.25³  = 29.3px  (use 29px for page headlines)`}</pre>
      <p>
        <strong>Step 4: set line-height.</strong> Body text at 15px: use 1.5
        (within Butterick&rsquo;s 1.2-1.45 range, slightly above because the
        app has dense content and benefits from breathing room). Section
        headings at 23px: use 1.2. Page headline at 29px: use 1.15.
      </p>
      <p>
        <strong>Step 5: set measure.</strong> The app dashboard has a sidebar
        that narrows the content area. Body text in card descriptions and
        comments: <code>max-width: 60ch</code>. The landing page hero text:
        <code>max-width: 55ch</code> (shorter lines, more impactful).
      </p>
      <p>
        <strong>Step 6: register in Figma.</strong> Create text styles:
        <code>text/label</code> (10px / 1.4), <code>text/caption</code>
        (12px / 1.45), <code>text/body</code> (15px / 1.5),
        <code>text/card-title</code> (19px / 1.3), <code>text/heading</code>
        (23px / 1.2), <code>text/page-headline</code> (29px / 1.15). Apply
        them consistently across every component in the file.
      </p>
      <p>
        The full process takes about two hours the first time. Once the styles
        exist, applying them is a matter of selecting text and clicking a style
        name. The decision is made once. Every screen that follows inherits it.
      </p>

      <AnchorHeading as="h2" id="9-exercises">9. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          Build a five-step type scale in Figma starting at 16px with a 1.333
          ratio (Perfect Fourth). Calculate each step to two decimal places,
          then round to the nearest whole pixel. What are the five sizes? Now
          identify a real product and check whether any of its five most common
          text sizes approximately match your scale. What is the closest ratio
          to what that product is actually using?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Inspect the body text on any product landing page using browser
          DevTools. Record: font-family, font-size in px, line-height (the
          Computed panel shows the rendered value in px, which you can divide
          by font-size to get the ratio), and the approximate character count
          per line. Is the line-height in Butterick&rsquo;s (2019) recommended
          range of 1.2-1.45? Is the measure in the 45-75ch range? If not,
          write one specific CSS change that would bring each into range.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Choose two typefaces from Google Fonts to pair for a product of your
          choice. One should be the body face, one the display face. Write a
          paragraph justifying the pairing using the following terms: x-height,
          stroke contrast, classification (serif or sans-serif subtype), and
          voice. Then write one sentence naming what the two faces share and
          one sentence naming how they contrast.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Hoffmann (2022) names six variables for typographic hierarchy:
          proximity and space, weight, size, combined size and weight, color,
          and visual punctuation. Open a product you use daily. Identify which
          three of these six variables the product relies on most heavily to
          communicate hierarchy. Which one is absent? Would adding it improve
          clarity or add noise?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          A product has body text at 16px with line-height 1.2 and a column
          that measures approximately 110 characters wide. Identify the two
          typography problems this represents. For each problem, write the
          exact CSS property and value you would change, and the specific range
          or principle from this week&rsquo;s reading that justifies your choice.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="10-going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The typography audit worksheet
          asks you to measure the font sizes, line-height, and measure on your
          own product or landing page, identify the top three problems, and
          implement one fix. Bring before-and-after screenshots.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers type anatomy,
          classification, and voice with worked examples from real product
          typeface choices.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers type scales,
          line-height calibration, the measure rule, and typeface pairing
          strategies.
        </li>
        <li>
          <strong>HW2 assigned this week</strong> and due Week 5: type-only
          redesign. You will rebuild a competitor&rsquo;s landing page using
          only Inter, color, and spacing. This reading is the preparation for
          that assignment.
        </li>
        <li>
          <strong>Figma typography systems guide.</strong> Figma (2023) shows
          exactly how to register a type scale as text styles and wire them to
          variables in{" "}
          <a href="https://www.figma.com/best-practices/typography-systems-in-figma/">
            Figma&rsquo;s best-practices documentation
          </a>
          .
        </li>
        <li>
          <strong>Butterick&rsquo;s Practical Typography.</strong> Butterick
          (2019) covers font size, line spacing, measure, and typeface choice
          in short, opinionated chapters at{" "}
          <a href="https://practicaltypography.com/">practicaltypography.com</a>
          . The whole site is free to read.
        </li>
      </ul>

      <Takeaways>
        <li>
          X-height determines apparent size, not point size. Always check how
          a typeface looks in context, not just in a specimen panel.
        </li>
        <li>
          A modular type scale derives every size from one base and one ratio.
          Five steps cover all the hierarchy most products need. Name Figma
          styles by role, not by pixel value.
        </li>
        <li>
          Line-height scales inversely with font size. Body text at 15-16px
          works best at 1.4-1.5. Headlines at 40px need 1.0-1.1. The universal
          1.5 rule is wrong for both ends.
        </li>
        <li>
          Body text measure should be 45-75 characters per line.{" "}
          <code>max-width: 65ch</code> implements this in one CSS line and
          solves the most common readability failure in builder products.
        </li>
        <li>
          Typeface pairs work when they contrast on classification or voice and
          share x-height or era. Two faces from the same category at the same
          size create confusion, not hierarchy.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Butterick, Matthew. &ldquo;Line Spacing.&rdquo; Butterick&rsquo;s
          Practical Typography, 2019.{" "}
          <a href="https://practicaltypography.com/line-spacing.html">
            practicaltypography.com/line-spacing.html
          </a>
          . Establishes the 120-145% optimal line-height range for body text
          and debunks the universal 1.5 rule.
        </p>
        <p>
          Figma. &ldquo;Typography Systems in Figma.&rdquo; Figma Best
          Practices, 2023.{" "}
          <a href="https://www.figma.com/best-practices/typography-systems-in-figma/">
            figma.com/best-practices/typography-systems-in-figma/
          </a>
          . Guide to building a type scale as Figma text styles and variables.
        </p>
        <p>
          Hoffmann, Alma. &ldquo;Typographic Hierarchies.&rdquo; Smashing
          Magazine, 2022.{" "}
          <a href="https://www.smashingmagazine.com/2022/10/typographic-hierarchies/">
            smashingmagazine.com/2022/10/typographic-hierarchies/
          </a>
          . Covers six variables for establishing typographic hierarchy and the
          relationship between type, voice, and visual composition.
        </p>
        <p>
          Segall, Ran. &ldquo;How to Choose Fonts: Step by Step.&rdquo; Flux
          Academy, 2024.{" "}
          <a href="https://www.youtube.com/watch?v=OUp7ale49lI">
            youtube.com/watch?v=OUp7ale49lI
          </a>
          . Walks through a practical typeface selection process: brand voice
          adjectives, classification mapping, and context testing.
        </p>
        <p>
          Simon, Gary. &ldquo;Typographic Visual Hierarchy in UI Design
          (4 Examples).&rdquo; DesignCourse, 2022.{" "}
          <a href="https://www.youtube.com/watch?v=u9XSmlZhYq4">
            youtube.com/watch?v=u9XSmlZhYq4
          </a>
          . Four real UI examples demonstrating how font size, weight, color,
          and spacing create or destroy visual hierarchy.
        </p>
        <p>
          Wathan, Adam and Steve Schoger. &ldquo;Line-height Is
          Proportional.&rdquo; Refactoring UI, 2019.{" "}
          <a href="https://refactoringui.com/previews/line-height-is-proportional">
            refactoringui.com/previews/line-height-is-proportional
          </a>
          . Shows the inverse relationship between font size and optimal
          line-height, and the interaction between line-height and column width.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk03ReadingSearchBody =
  "typography type anatomy x-height cap height baseline ascender descender stroke contrast stress axis serif sans-serif display classification humanist transitional geometric grotesque neo-grotesque voice modular type scale ratio line-height leading measure ch column width 45 75 characters typeface pairing Figma text styles design tokens body text headline Inter Google Fonts Week 3 reading design for builders founders engineers";
