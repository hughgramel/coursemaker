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
      title="Week 8: brand identity for product builders"
      kicker="Design for Builders: Ship Beautiful Products as a Founder · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers three outcomes. First, you will{" "}
          <strong>create</strong>: produce a wordmark and a paired mark for your
          product by working through the logo design process from concept to
          Figma. Second, you will <strong>explain</strong>: describe what makes
          a logo work at favicon size and at billboard size, using the silhouette
          test and the size-reduction test as your criteria. Third, you will{" "}
          <strong>apply</strong>: build a one-page brand sheet in Figma that
          contains logo lockups, color, typography, image direction, and a voice
          summary.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Type anatomy and typeface
          classification from Week 3 (x-height, stroke contrast, humanist vs
          geometric, type voice). Typeface pairing from Week 3. Color ramp
          construction from Week 4 (HSL/OKLCH, 9-step ramps, semantic tokens).
          Design tokens from Week 1 (Figma variables, styles, team library
          structure).
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-three-logo-types">
        1. Three logo types
      </AnchorHeading>
      <p>
        Every logo you have ever seen is one of three types, and the choice
        between them has a logic that is independent of taste.
      </p>
      <p>
        A <strong>wordmark</strong> is the product name set in a typeface, with
        or without deliberate modifications to individual letterforms. Google,
        Figma, Slack, and FedEx are wordmarks. The type carries all the
        identity. There is no separate symbol to recognize.
      </p>
      <p>
        A <strong>logo mark</strong> (also called a pictorial mark or symbol) is
        an abstract or representational image that stands completely independent
        of the product name. The Apple logo, the Nike swoosh, and the Twitter
        bird are marks. The symbol communicates identity without text.
      </p>
      <p>
        A <strong>combo mark</strong> is a wordmark and a mark used together,
        with defined rules for when each appears alone. Spotify, Airbnb, and
        GitHub all have combo marks. The wordmark and the symbol can be used
        independently once the brand has enough recognition to support both.
      </p>
      <p>
        The choice between these three types is a question of visual equity: how
        much recognition has the brand already built? A mark earns independence
        from the name only after audiences already associate the symbol with the
        product. Before that point, a standalone mark is just a shape. It
        communicates nothing about the product to someone who has not seen it
        before. A wordmark communicates the name everywhere it appears, at every
        size, to every viewer (Chris Do, The Futur 2022).
      </p>
      <p>
        For a product at zero existing audience, a wordmark is almost always the
        right choice. The exceptions are narrow: product names that are
        genuinely difficult to set legibly at small sizes, products that operate
        across languages where the name does not translate, and products where
        the app icon is the primary surface and the name appears nowhere in the
        interface. Most SaaS founders and indie hackers are not in any of these
        cases.
      </p>

      <AnchorHeading as="h2" id="2-what-makes-a-wordmark">
        2. What makes a wordmark
      </AnchorHeading>
      <p>
        A wordmark is not just the product name in a typeface. Any type choice
        is a wordmark in that sense. A deliberate wordmark uses the typeface as
        a starting point and makes considered choices about letter-spacing,
        weight, modifications to individual letterforms, and the overall
        proportions of the mark.
      </p>
      <p>
        The word itself constrains the design. A short name (two to four
        characters) has room for individual letterform attention. A long name
        (eight or more characters) depends on the typeface&rsquo;s overall
        rhythm rather than individual characters. Letter-spacing plays a larger
        role in long names: tight tracking creates a compact, confident mark;
        wide tracking creates an airy, premium or fashion-adjacent feel.
      </p>
      <p>
        The most effective wordmark modifications are small. Zimri Mayfield
        (2022) describes a process of geometric construction where individual
        letterforms are adjusted to share construction lines: the same circle
        radius for the O and the C, consistent stroke endpoints where two
        letters meet at a narrow gap. These adjustments are invisible to most
        viewers, but their absence is visible as irregularity. The eye notices
        when something is slightly off even when it cannot name what.
      </p>
      <p>
        Three modifications worth attempting in the logo studio this week:
      </p>
      <ul>
        <li>
          <strong>Letter-spacing adjustment.</strong> Convert the type to
          outlines and adjust the spacing between specific letter pairs (kerning
          pairs) to eliminate optical gaps that the typeface&rsquo;s default
          kerning misses.
        </li>
        <li>
          <strong>Weight contrast.</strong> Set the first letter or a key letter
          in a heavier weight than the rest of the name. This creates a visual
          anchor that the eye enters from.
        </li>
        <li>
          <strong>Counter modification.</strong> The enclosed space inside
          letters like O, e, a, g, and d is the counter. Modifying the counter
          shape, making it rounder, squarer, or more open, changes the feel of
          the letter without changing its legibility.
        </li>
      </ul>
      <p>
        One modification, applied consistently, is a wordmark decision. Three
        different modifications applied to three different letters is noise.
      </p>

      <AnchorHeading as="h2" id="3-silhouette-and-negative-space">
        3. Silhouette and negative space
      </AnchorHeading>
      <p>
        The <strong>silhouette test</strong> is the most direct way to evaluate
        whether a logo has visual identity independent of its typeface rendering.
        Fill every layer of the logo with solid black. Look at the resulting
        shape. The question is not whether it looks good in silhouette. The
        question is whether it has a distinct, recognizable form.
      </p>
      <p>
        Most wordmarks fail this test in an uninteresting way: they produce a
        flat rectangle of solid black with a slightly irregular top edge from the
        letterforms. That silhouette looks like every other wordmark. It has no
        character the viewer can hold onto.
      </p>
      <p>
        A wordmark passes the silhouette test when one of its features creates a
        distinctive shape: a tall ascender on the first letter, a descender that
        drops below the baseline, a mark or form attached to the text that
        changes the outer edge, or extreme letter-spacing that makes the
        silhouette airy rather than compact. None of these require visual
        complexity. They require a shape decision that is intentional rather than
        default.
      </p>
      <p>
        <strong>Negative space</strong> is the area inside and around the
        letterforms that the designer controls without adding ink. The most
        discussed example in logo history is the FedEx arrow: the negative space
        between the E and x creates an arrow pointing forward, and it is never
        drawn explicitly. The Carrefour logo conceals a C in the negative space
        between two colored wedges. These are celebrated examples because the
        negative space carries a second layer of meaning.
      </p>
      <p>
        For a product wordmark, the goal is not a hidden symbol. The goal is
        negative space that looks deliberate rather than accidental. Accidental
        negative space looks like two letters that are slightly too close or too
        far apart, or a counter that is too small relative to the surrounding
        space. Deliberate negative space has consistent rhythm: the gaps between
        letters, the counters inside letters, and the space around the mark all
        feel like they belong to the same system.
      </p>

      <Callout title="The two tests every wordmark must pass">
        <p>
          Run both of these before committing to a direction. First: fill
          everything solid black and look at the silhouette. Does the shape have
          character, or is it a featureless rectangle? Second: scale the
          wordmark to 16px tall. Can you read it, or has it collapsed into grey
          noise? A wordmark that fails the favicon test needs a companion mark
          for small-size contexts. A wordmark that fails the silhouette test
          has no visual identity outside its typeface rendering.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-designing-for-size">
        4. Designing for two extremes: favicon and billboard
      </AnchorHeading>
      <p>
        Every logo appears across an enormous range of sizes, from the 16x16
        pixel favicon to a sign on a building. Most logo decisions happen at a
        comfortable middle size, between 200px and 800px wide, where everything
        looks fine. The logo&rsquo;s real quality shows at the extremes.
      </p>
      <p>
        The <strong>favicon</strong> renders at 16x16 device-independent pixels.
        At that size, a wordmark of six or more characters is almost always
        illegible. The letterforms merge into a grey band. The readable favicon
        is one or two characters: the product initial, or the first two
        characters if they produce a distinctive shape together.
      </p>
      <p>
        The rules for the favicon:
      </p>
      <ul>
        <li>Maximum two characters. One is better if the character is visually strong.</li>
        <li>No hairline strokes. Any stroke thinner than two pixels disappears at 16x16.</li>
        <li>No serifs on small letterforms. The serifs merge with the surrounding shape.</li>
        <li>High contrast between the letterform and the background. A medium grey on white fails.</li>
        <li>Test the favicon in a real browser tab row, next to Google, Figma, and whatever the user keeps open. If yours disappears, the form is not distinct enough.</li>
      </ul>
      <p>
        The favicon is not a scaled-down version of the wordmark. It is a
        separate asset derived from the same brand. The mark or the initial
        handles the favicon. The wordmark handles everything else.
      </p>
      <p>
        The <strong>OG image</strong> (Open Graph image) appears when a URL is
        shared on social media, in Slack, in iMessage. It renders at 1200x630
        pixels and collapses to a 300x157 thumbnail in most contexts. The
        design challenge here is opposite to the favicon: you have room, but
        it must still work small.
      </p>
      <p>
        Effective OG images use brand color as the background rather than white.
        The logo placed on a white background in the center of 1200x630 pixels
        reads as low-effort at thumbnail scale. Using the brand color fills the
        frame and makes the image immediately recognizable as a unit. A short
        tagline or the product category as a subtitle below the wordmark adds
        context without crowding.
      </p>
      <p>
        Test the OG image at 25% scale. If the wordmark and the context line are
        legible and the overall image reads as intentional at that size, the
        design works. If it reads as a mostly-blank rectangle with a small logo
        centered in it, the layout needs more weight.
      </p>

      <AnchorHeading as="h2" id="5-lockups">
        5. Logo lockups
      </AnchorHeading>
      <p>
        A <strong>logo lockup</strong> is a predefined arrangement of the
        wordmark and mark, set to proportions the designer has approved. Without
        defined lockups, every contributor assembles the logo differently: the
        mark too large relative to the wordmark in one context, the spacing
        between them inconsistent in another, the wrong version on a dark
        background because no one specified which version to use.
      </p>
      <p>
        Three lockups cover almost every case:
      </p>
      <ul>
        <li>
          <strong>Horizontal lockup</strong>: mark to the left, wordmark to the
          right, vertically centered. Used in wide, horizontal contexts: website
          headers, email footers, presentation headers.
        </li>
        <li>
          <strong>Stacked lockup</strong>: mark above, wordmark below, both
          centered. Used in square or near-square contexts: social profile
          images at larger sizes, slide title areas with room to breathe.
        </li>
        <li>
          <strong>Icon-only</strong>: mark alone, no wordmark. Used for the
          favicon, app icon, loading spinner, and any context where the mark
          has enough brand equity to stand alone.
        </li>
      </ul>
      <p>
        Each lockup needs a dark-background version in addition to the
        light-background default. Do not create the dark version by inverting
        all colors. Test it explicitly: the colors that work on white do not
        always pass contrast on a dark background, and the mark proportions
        sometimes need adjustment when the light/dark relationship inverts.
      </p>
      <p>
        A clear-space rule prevents the logo from touching its container edges.
        The simplest rule is to use the cap height of the wordmark as the minimum
        margin on all four sides. Define this rule once, put it on the brand
        sheet, and never answer the question again.
      </p>

      <AnchorHeading as="h2" id="6-brand-system">
        6. The brand system beyond the logo
      </AnchorHeading>
      <p>
        A brand is not a logo. A brand is the sum of every impression a person
        has of a product across every surface they encounter it on. The logo is
        on four surfaces. Copy, color, photography, and illustration are on
        every other surface.
      </p>
      <p>
        <strong>Brand voice</strong> is the consistent personality your product
        communicates through language. It is fixed: your voice is &ldquo;direct
        and warm&rdquo; on the error message page and in the marketing hero. What
        changes is <strong>tone</strong>: the error message might be
        direct-and-reassuring while the marketing hero is direct-and-confident.
        Voice is the personality. Tone is how that personality responds to
        context.
      </p>
      <p>
        A voice guide does not need to be long. Three to five adjectives, three
        &ldquo;we say / we don&rsquo;t say&rdquo; examples, and one paragraph of
        example copy are enough. The test for a voice guide is whether a
        contractor who has never worked with you can write a new email that
        sounds right on the first draft.
      </p>
      <p>
        <strong>Brand colors vs UI colors</strong> is a distinction that most
        builder-made products skip, with predictable results. Brand colors are
        chosen for identity and impact, at full saturation, in marketing
        contexts. UI colors are derived from the same hue family but adjusted
        for usability: lower saturation to avoid interaction fatigue, adjusted
        lightness to pass WCAG contrast requirements at small text sizes.
      </p>
      <p>
        The vivid orange or electric blue you chose as your brand primary because
        it looked great in the logo is often too saturated to use on a button
        that appears 200 times per session. Take the brand hue. Desaturate by
        20-30%. Adjust lightness to pass 4.5:1 contrast against white or dark
        backgrounds. Use that for interactive elements. Reserve the full
        saturation for the logo and hero sections.
      </p>
      <p>
        <strong>Photography and illustration style</strong> determines more of
        the visual identity than the logo does, because it covers more surface
        area. A product with a warm humanist wordmark that uses cold, high-key
        stock photography has a contradictory visual identity. The type says one
        thing. The images say another.
      </p>
      <p>
        Define photography style on four axes: subjects (people in context vs
        abstract objects vs no photography), lighting (natural and warm vs studio
        and clean), color treatment (desaturated vs saturated, processed vs
        neutral), and staging (candid vs composed). One sentence per axis, four
        sentences total. That is a photography brief that any image contributor
        can execute consistently.
      </p>

      <AnchorHeading as="h2" id="7-the-brand-sheet">
        7. The one-page brand sheet
      </AnchorHeading>
      <p>
        A <strong>brand sheet</strong> is a single Figma frame that gives any
        contributor everything they need to work with the brand correctly. It is
        not a 40-page brand guidelines document. It is one page, exportable as a
        PNG or PDF, shareable as a link.
      </p>
      <p>
        The five sections, in order:
      </p>
      <ol>
        <li>
          <strong>Logo lockups.</strong> The three lockup variants (horizontal,
          stacked, icon-only) in both light and dark versions. Include a minimum
          size label below each and the clear-space rule as a diagram or note.
        </li>
        <li>
          <strong>Color palette.</strong> The brand primary and its 9-step ramp,
          the neutral ramp, and any accent color. Show hex values and the OKLCH
          values you used to build the ramp. If you have semantic token names
          defined, show them alongside the raw values.
        </li>
        <li>
          <strong>Typography.</strong> The display typeface and the body
          typeface, each shown at their primary sizes with a live specimen
          (&ldquo;The quick brown fox&rdquo; is fine; actual product copy is
          better). Show the scale steps you defined in Week 3.
        </li>
        <li>
          <strong>Image direction.</strong> Three curated images that exemplify
          the intended visual style, with one sentence of guidance below. The
          images should be immediately usable as reference for finding new images
          in the same style.
        </li>
        <li>
          <strong>Voice summary.</strong> Three to five voice adjectives, three
          &ldquo;we say / we don&rsquo;t say&rdquo; pairs, and one example
          sentence. Short enough to read in 30 seconds.
        </li>
      </ol>
      <p>
        In Figma, the brand sheet is one top-level auto-layout frame with
        vertical flow. Each section is a nested frame. Every color swatch
        references a variable from your Week 4 collection. Every text specimen
        uses a style from your Week 3 type system. If you hardcode a hex value
        or a pixel size on the brand sheet, your design system has drifted and
        the brand sheet is documenting an inconsistency rather than a truth.
      </p>

      <AnchorHeading as="h2" id="8-worked-example">
        8. A worked example: building a wordmark for a note-taking product
      </AnchorHeading>
      <p>
        The product is called &ldquo;Luma&rdquo;. The brand adjectives are:
        calm, thoughtful, personal. The audience is knowledge workers who take
        too many notes and organize too few.
      </p>
      <p>
        Step 1: typeface selection. The adjectives point toward a humanist
        sans-serif: approachable, warm, readable at small sizes. Candidates from
        Google Fonts: Lato, Source Sans 3. A serif option that fits: Fraunces
        (optically-sized variable font, old-style warmth). Three drafts:
      </p>
      <pre>{`Draft A: "Luma" in Lato Light, tracking +5 (wide, airy, calm)
Draft B: "Luma" in Fraunces 400 (warm, editorial, thoughtful)
Draft C: Draft A with the ascender of "l" extended and the counter
         of "a" opened to match: one consistent modification`}</pre>
      <p>
        Step 2: silhouette test. Draft A produces a flat rectangle with a slight
        notch from the &ldquo;l&rdquo; ascender. Draft B has more shape from the
        serifs and the curved forms of the Fraunces glyphs. Draft C has the same
        silhouette as A but with a taller first element, making the overall form
        more top-heavy and asymmetric.
      </p>
      <p>
        Step 3: favicon test at 16x16. &ldquo;Luma&rdquo; in any of the three
        drafts is four characters, which is borderline at 16px. The initial
        &ldquo;L&rdquo; alone is clean and distinctive. The decision: use
        &ldquo;L&rdquo; as the favicon, derived from the letterform modifications
        in Draft C.
      </p>
      <p>
        Step 4: lockup definition. The horizontal lockup uses the full wordmark.
        The stacked lockup places the stylized &ldquo;L&rdquo; above the
        wordmark at 1.5x the cap height. The icon-only lockup is the stylized
        &ldquo;L&rdquo; alone.
      </p>
      <p>
        Step 5: brand sheet. The selected wordmark (Draft C) and its three
        lockups occupy the first section. The Week 4 color variables populate
        the second section. The Week 3 type styles (Lato + Fraunces as a pairing
        with Lato for UI and Fraunces for marketing display) populate the third
        section. Three photography examples showing warm-lit natural light
        desktop scenes populate the fourth section. &ldquo;Calm, thoughtful,
        personal. We write &lsquo;your notes&rsquo; not &lsquo;user data.&rsquo;
        We write &lsquo;good morning&rsquo; not &lsquo;hello.&rsquo;&rdquo;
        populates the fifth section.
      </p>
      <p>
        Total time to build the brand sheet from three wordmark drafts: three
        hours, assuming the Week 3 and Week 4 work is already in the file. If
        those systems do not exist yet, the brand sheet takes five to seven hours
        because you are building the underlying system at the same time.
      </p>

      <AnchorHeading as="h2" id="9-exercises">9. Exercises</AnchorHeading>
      <p>Work these before or during the logo studio section this week.</p>

      <Exercise n={1}>
        <p>
          Take any five logos you encounter today: in your browser tabs, on
          product packaging, on the apps on your phone. Classify each as
          wordmark, mark, or combo. For each combo mark, name which component
          (wordmark or symbol) has more visual equity at the moment. Which one
          could you remove and still have people recognize the brand?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Write the name of your product. Write three adjectives that describe
          its voice. Using the typeface classification vocabulary from Week 3
          (humanist, geometric, grotesque, transitional serif, etc.), name the
          classification that best matches your three adjectives. Search Google
          Fonts filtered to that classification. Pick two candidates. Set your
          product name in both at 48px in Figma. Which one matches your
          adjectives more closely in feel?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Take one of your two typeface candidates from Exercise 2. Set your
          product name in it. Run the silhouette test: select all layers, fill
          solid black. Describe the resulting silhouette in writing: what is its
          outline shape? Is there a distinctive feature (a tall ascender, an
          open counter, a descending letter), or does it read as a flat
          rectangle? If it reads as a flat rectangle, identify one letterform
          modification that would change the silhouette.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Your product name is set as a wordmark at 200px wide. You need a
          favicon at 16x16. Describe the favicon you would create: how many
          characters, which character or characters, and what specific feature
          (weight, form, color) makes it identifiable in a browser tab row next
          to Google, Gmail, and Figma.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Look at the color you have been using as your brand primary in your
          Week 4 and Week 6 work. Convert it to OKLCH. Now derive a button
          color from it: reduce the chroma by 25%, then adjust the lightness
          until it passes 4.5:1 contrast against white (use the WebAIM contrast
          checker). Is the derived button color still recognizably related to the
          brand primary? Does it feel like the same brand, or does it feel like a
          different product?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="10-going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The logo studio asks you to produce
          three distinct wordmark drafts, run the favicon and silhouette tests on
          each, receive a peer critique, and select one with a written rationale.
          The draft you select becomes the logo for your HW4 brand sheet.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers wordmarks, marks, combo
          marks, the silhouette test, negative space, favicon vs OG image
          constraints, and lockup variants in detail with worked visual examples.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers voice and tone, brand
          colors vs UI colors, photography and illustration style, and the
          five-section brand sheet structure with a Figma build walkthrough.
        </li>
        <li>
          <strong>HW4 (brand sheet).</strong> Now out. Due Week 9. Your finished
          brand sheet must contain: three lockup variants, a color palette
          referencing your Week 4 variables, a type specimen referencing your
          Week 3 styles, image direction, and a voice summary.
        </li>
        <li>
          <strong>Optional video.</strong> Zimri Mayfield, &ldquo;Design a
          Perfect Original Logo with These Steps&rdquo; (approx. 15 min) at{" "}
          <a href="https://www.youtube.com/watch?v=ZPEiw_CeHxo">
            youtube.com/watch?v=ZPEiw_CeHxo
          </a>
          . Covers the eight-step logo process Mayfield uses with clients:
          research, concept sketching, geometric construction, type selection,
          color, and refinement. The &ldquo;think before you click&rdquo;
          argument is particularly useful before the logo studio session.
        </li>
      </ul>

      <Takeaways>
        <li>
          A wordmark is almost always right for an early-stage product. A mark
          earns independence only after the audience already associates the
          symbol with the name. Before that point, a mark is just a shape.
        </li>
        <li>
          The silhouette test (fill everything black, evaluate the shape) and
          the favicon test (scale to 16px, evaluate legibility) are the two
          criteria that separate considered logos from defaults. Run both before
          committing to a direction.
        </li>
        <li>
          Negative space is the area you control without adding ink. The goal
          is not a hidden symbol. The goal is consistent rhythm in the gaps and
          counters that makes the space feel deliberate rather than accidental.
        </li>
        <li>
          Brand colors and UI colors are different systems. The vivid brand
          primary is almost never the right button color. Derive a functional
          color: same hue, lower chroma, adjusted lightness to pass 4.5:1
          contrast.
        </li>
        <li>
          The one-page brand sheet covers five sections: logo lockups, color
          palette, typography specimen, image direction, and voice summary.
          Build it in Figma with references to your existing tokens and styles.
          Hardcoded values on the brand sheet mean the system has drifted.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Chris Do. &ldquo;The Power of Design: Chris Do on Brand Logos.&rdquo;
          The Futur, 2022.{" "}
          <a href="https://thefutur.com/content/the-power-of-design-chris-do-on-brand-logos">
            thefutur.com/content/the-power-of-design-chris-do-on-brand-logos
          </a>
          . Covers what makes logos work at small sizes, the silhouette test,
          and the principles behind marks that function without the name attached.
        </p>
        <p>
          Mayfield, Zimri. &ldquo;Design a Perfect Original Logo with These
          Steps.&rdquo; YouTube, 2022.{" "}
          <a href="https://www.youtube.com/watch?v=ZPEiw_CeHxo">
            youtube.com/watch?v=ZPEiw_CeHxo
          </a>
          . Eight-step logo design process covering research, concept sketching,
          geometric construction, type selection, color, and refinement. The
          process-before-software argument is the most useful part for builders
          who reach for Figma before they have thought through the concept.
        </p>
        <p>
          Unknown (community educator). &ldquo;How to Build a Brand Guidelines
          System in Figma.&rdquo; YouTube, November 2024.{" "}
          <a href="https://m.youtube.com/watch?v=v2wKJTppDOA">
            youtube.com/watch?v=v2wKJTppDOA
          </a>
          . Demonstrates building a complete brand guidelines document in Figma:
          logo lockups, color palette display, typography specimens, photography
          direction, and voice section. Maps directly to the HW4 brand sheet
          deliverable.
        </p>
        <p>
          Unknown (community educator). &ldquo;Wordmark Logo Design in
          Figma.&rdquo; YouTube, January 2023.{" "}
          <a href="https://www.youtube.com/watch?v=jxjVidIzDVU">
            youtube.com/watch?v=jxjVidIzDVU
          </a>
          . Step-by-step walkthrough of designing a wordmark in Figma: typeface
          selection, letter-spacing adjustment, converting to outlines for
          letterform modification, and preparing exports. A direct technical
          companion to the logo studio section.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk08ReadingSearchBody =
  "wordmark mark combo mark logo lockup silhouette test favicon OG image negative space brand sheet voice tone brand colors UI colors photography illustration style letter-spacing counter modification type-anatomy typeface-pairing brand identity one-page brand guidelines Figma Week 8 reading design for builders founders engineers";
