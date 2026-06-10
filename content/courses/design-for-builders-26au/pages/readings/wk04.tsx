import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk04Reading() {
  return (
    <ReadingPage
      id="wk04"
      title="Week 4: color, palettes, contrast, and dark mode"
      kicker="Design for Builders: Ship Beautiful Products as a Founder · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading has three outcomes. First, you will{" "}
          <strong>apply</strong> what you learn by building a 9-step neutral
          ramp and a 9-step accent ramp using HSL or OKLCH. Second, you will{" "}
          <strong>evaluate</strong> any text-on-background pair for WCAG AA and
          AAA contrast and correct failures. Third, you will{" "}
          <strong>create</strong> a dark-mode palette that derives from your
          light-mode choices rather than inverting them. By the end you will
          have a working color system, not just a pleasing collection of shades.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Design tokens and Figma
          variables (week 1), visual hierarchy and the role of contrast in
          directing attention (week 2). We assume you have a starter kit file
          with at least one card, button, and text component.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-two-color-models">
        1. Two color models worth knowing
      </AnchorHeading>
      <p>
        Screen color can be described in many coordinate systems, but two are
        useful for product designers: HSL and OKLCH. Both let you reason about
        a color in terms a human can manipulate, rather than as a raw hex
        string.
      </p>
      <p>
        <strong>HSL</strong> stands for Hue, Saturation, and Lightness. Hue is
        an angle on a color wheel (0&deg; is red, 120&deg; is green, 240&deg;
        is blue). Saturation is how vivid the color is: 0% is a neutral gray at
        any hue, 100% is the most vivid version of that hue. Lightness is how
        light or dark the color appears: 0% is always black, 100% is always
        white. HSL is the model you&rsquo;ll find in CSS{" "}
        <code>hsl()</code> syntax, in Figma&rsquo;s color picker when you
        switch to HSB (which replaces Lightness with Brightness, a related but
        distinct dimension), and in most design tool documentation.
      </p>
      <p>
        The important limitation of HSL is that equal steps in lightness do not
        produce equal steps in perceived brightness. A yellow at HSL(60, 100%,
        50%) looks far lighter on screen than a blue at HSL(240, 100%, 50%),
        even though their HSL lightness values are identical. Koopersmith and
        Miner (Stripe, 2019) discovered this directly: their original brand
        palette used colors with equal HSL lightness, yet some colors appeared
        much brighter than others at the same step. This means a ramp generated
        by incrementing HSL lightness by a fixed amount will often look uneven.
        The fix is either to adjust individual stops by eye or to use a
        perceptually uniform color model.
      </p>
      <p>
        <strong>OKLCH</strong> is a perceptually uniform model defined in CSS
        Color Level 4. Its three channels are Lightness (L), Chroma (C), and
        Hue (H). The key property: equal steps in L produce approximately equal
        steps in perceived brightness across different hues. A neutral gray and
        a vivid blue at L = 0.6 will appear closer in brightness to each other
        than they would at HSL lightness 60%. OKLCH is the better foundation
        for automated ramp generation because the perceptual uniformity reduces
        the amount of manual correction needed.
      </p>
      <p>
        For this course you may use either model. HSL is more familiar and
        available in all current design tools. OKLCH is available in Figma as
        of 2024 (enter{" "}
        <code>oklch(0.6 0.12 240)</code> in the hex field) and in Chrome
        DevTools. When building a ramp, prefer OKLCH if you want automated
        steps to look consistent without adjustment. Use HSL if you prefer to
        tune each stop manually, which is the approach Wathan and Schoger
        (Refactoring UI, 2019) advocate.
      </p>

      <AnchorHeading as="h2" id="2-why-avoid-pure-extremes">
        2. Why pure black and pure white are wrong for UI
      </AnchorHeading>
      <p>
        Pure black (#000000, HSL(0, 0%, 0%)) and pure white (#ffffff, HSL(0,
        0%, 100%)) appear in almost no successful product palette. The reason is
        perceptual: pure black creates a harsh halation effect against
        light-colored text, and pure white generates a similar glare that makes
        long reading uncomfortable. More practically, the visual weight of
        #000000 is so absolute that it can only serve one purpose (maximum
        foreground emphasis), leaving you no room to add darker states for
        hover, pressed, or disabled variants.
      </p>
      <p>
        A neutral ramp that spans from a near-white (Neutral/50, roughly
        HSL(220, 9%, 97%)) to a near-black (Neutral/950, roughly HSL(220, 9%,
        6%)) gives you nine usable steps for text, backgrounds, borders, and
        dividers without any step reading as harsh. Wathan and Schoger
        (Refactoring UI, 2019) put this simply: &ldquo;When you actually grab
        the eyedropper and inspect those dark text colors, they&rsquo;re usually
        a very dark navy or brown, not black.&rdquo; The same applies to
        backgrounds: near-white tinted slightly warm or cool reads as cleaner
        than stark white.
      </p>
      <p>
        Tinting your neutral ramp toward your brand hue also produces a subtle
        color harmony across the whole product. A product built on a blue accent
        color feels more coherent when its neutrals carry a small blue tint
        (HSL around 220-230 for the hue component, saturation 6-10%) than when
        they use a pure gray (hue 0, saturation 0%).
      </p>

      <AnchorHeading as="h2" id="3-building-a-ramp">
        3. Building a 9-step ramp
      </AnchorHeading>
      <p>
        Wathan and Schoger (Refactoring UI, 2019) describe the process in three
        steps: choose a middle base, define the endpoint use cases, then fill
        the stops. The section ramp exercise below follows this structure.
      </p>
      <p>
        Step one: choose your base. For a neutral ramp, the base is usually
        step 400 or 500, a mid-gray that reads as plainly neutral on both light
        and dark surfaces. For an accent ramp, the base is your brand color. If
        your brand color is very dark or very light, step 500 may not be the
        right visual center; adjust the base toward the visual middle of the
        ramp rather than always landing exactly at 500.
      </p>
      <p>
        Step two: define the use cases at each end. Step 100 should be the
        lightest value you would use as a tinted surface or a badge background.
        Step 900 should be the darkest value you would use as a foreground color
        on a near-white surface. Both should be distinct from pure white and
        pure black.
      </p>
      <p>
        Step three: fill the intermediate stops. Place step 200 between 100 and
        400, step 300 between 200 and 400, and so on. The steps should progress
        at a rate that looks approximately even. In HSL you will often find that
        you need to change lightness by larger amounts at the lighter end of the
        ramp and smaller amounts at the darker end to get an even-looking
        progression. Trust the visual result over arithmetic consistency.
      </p>
      <p>
        The completed ramp looks like this in simplified HSL notation (neutral
        ramp, blue-gray family):
      </p>
      <pre>{`
  Neutral/50:  hsl(220,  9%, 97%)   -- near-white tinted surface
  Neutral/100: hsl(220,  9%, 94%)
  Neutral/200: hsl(220,  9%, 88%)
  Neutral/300: hsl(220,  9%, 78%)
  Neutral/400: hsl(220,  9%, 65%)
  Neutral/500: hsl(220,  9%, 52%)   -- mid-gray base
  Neutral/600: hsl(220,  9%, 40%)
  Neutral/700: hsl(220,  9%, 30%)
  Neutral/800: hsl(220,  9%, 20%)
  Neutral/900: hsl(220,  9%, 12%)   -- near-black foreground
  `}</pre>
      <p>
        The accent ramp follows the same shape but with higher saturation. At
        step 500, saturation might be 85-100% depending on the hue. Saturation
        typically decreases toward 100 (more pastel) and may also decrease
        slightly toward 900 (more muted dark shade). Koopersmith and Miner
        (Stripe, 2019) show that perceptual brightness varies more steeply for
        high-saturation colors, so saturated ramps often need more manual
        correction than neutral ones.
      </p>

      <Callout title="Ramp generators are a starting point, not a finish line">
        <p>
          Tools like Tailwind&rsquo;s palette, Radix Colors, and
          ColorBox.io generate ramps from a base color automatically. Use
          them to get your first draft quickly. Then examine every stop
          visually: does each step read as meaningfully different from the
          next? Does the ramp feel consistent in weight? Adjust any stop
          that looks out of place. A generator that produces nine numbers is
          only as good as the hand-tuning that follows it.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-wcag-contrast">
        4. WCAG contrast: the numbers that matter
      </AnchorHeading>
      <p>
        WCAG 2 contrast requirements come from a formula that produces a ratio
        between 1:1 (identical colors) and 21:1 (pure black on pure white). The
        formula uses the relative luminance of each color, a value that weights
        the RGB channels to match human perceptual sensitivity. You do not need
        to calculate this by hand: every contrast checker (WebAIM&rsquo;s
        online checker, the Figma Contrast plugin, browser DevTools) computes it
        for you. What you do need to know are the thresholds.
      </p>
      <p>
        WebAIM (2021) summarizes the three relevant criteria from WCAG 2:
      </p>
      <pre>{`
  WCAG 1.4.3 (Level AA):
    Normal text (< 18pt / < 14pt bold): 4.5:1 minimum
    Large text (>= 18pt / >= 14pt bold): 3:1 minimum

  WCAG 1.4.6 (Level AAA, enhanced):
    Normal text: 7:1 minimum
    Large text: 4.5:1 minimum

  WCAG 1.4.11 (Non-text contrast):
    UI components (button borders, input borders): 3:1 minimum
    Graphical objects (chart lines, icons): 3:1 minimum
  `}</pre>
      <p>
        For most products, WCAG AA is the target. AAA is worth aiming for body
        text and primary headings because it significantly improves readability
        in poor lighting and for users with low vision. AA is the legal
        threshold in most jurisdictions that have adopted WCAG 2.1 or 2.2.
      </p>
      <p>
        The most common failure pattern for product teams is using step 400 or
        500 for text on a light background. A neutral at step 500 typically
        achieves a ratio around 3.5:1 against a near-white background: passing
        AA for large text but failing for normal-weight body text. Moving text
        to step 600 or 700 usually clears AA. If the visual weight of step 700
        reads as too heavy in context, that is a sign your neutral ramp&rsquo;s
        step spacing is too compressed at the darker end.
      </p>
      <p>
        A secondary failure: using an accent color as text on a white
        background. Saturated mid-range colors (hue 200-260, the blue-teal
        family) can pass AA at step 600 or 700, but saturated reds and oranges
        at the same step often fail because their luminance is lower than blue
        at equivalent HSL lightness. Always test; never assume.
      </p>

      <AnchorHeading as="h2" id="5-semantic-tokens">
        5. Semantic color tokens: naming colors by function
      </AnchorHeading>
      <p>
        A color system has two layers. The <strong>primitive layer</strong>{" "}
        names what a color is: Neutral/700, Accent/500, Red/600. The{" "}
        <strong>semantic layer</strong> names what a color does:{" "}
        <code>text-primary</code>, <code>accent-default</code>,{" "}
        <code>surface-base</code>, <code>danger-default</code>. Each semantic
        token references exactly one primitive value. When you change a
        component&rsquo;s fill from a hardcoded hex to a semantic token, that
        component can change its appearance by switching modes rather than by
        editing individual components.
      </p>
      <p>
        Khamatov (Smashing Magazine, 2023) calls this a two-dimensional color
        model: one dimension is the palette (what colors exist), the other is
        the scheme (how those colors are assigned to roles). Material Design and
        Fluent UI both use explicit two-dimensional models of this kind. The
        practical benefit: adding dark mode requires only populating new values
        in the scheme layer. The primitives do not change; only the semantic
        assignments do.
      </p>
      <p>
        A minimal semantic layer for a product UI covers eight roles:
      </p>
      <pre>{`
  surface-base       -- page or panel background
  surface-elevated   -- card or modal background
  text-primary       -- headings and high-emphasis body text
  text-secondary     -- supporting text, labels, captions
  accent-default     -- primary interactive color (buttons, links)
  accent-subtle      -- tinted backgrounds for accent elements
  border-default     -- dividers and input outlines
  danger-default     -- error states, destructive actions
  `}</pre>
      <p>
        In light mode, <code>surface-base</code> might map to Neutral/50,{" "}
        <code>text-primary</code> to Neutral/900, and{" "}
        <code>accent-default</code> to Accent/600 (often one step darker than
        the visual center to ensure contrast). In dark mode, the same semantic
        names map to different primitives: <code>surface-base</code> moves to
        Neutral/950, <code>text-primary</code> to Neutral/50, and{" "}
        <code>accent-default</code> may move to Accent/400 to maintain contrast
        against the dark background. The component does not change; only the
        mode assignment does.
      </p>
      <p>
        Figma implements semantic tokens through variable collections with
        multiple modes. The primitive values live in one collection (or one
        group within a collection), and the semantic assignments live in a
        second collection whose values reference the first. Miao (Figma, 2022)
        describes the same architecture for Figma&rsquo;s own design system:
        five dimensions of token naming, all resolving to primitives, allowing a
        single mode switch to update thousands of color values simultaneously.
      </p>

      <AnchorHeading as="h2" id="6-dark-mode-as-parallel-system">
        6. Dark mode as a parallel system
      </AnchorHeading>
      <p>
        Dark mode is not an inversion of light mode. Inverting the lightness of
        every color in your palette produces surfaces with the wrong visual
        weight and text with the wrong contrast. A near-black background
        (Neutral/950) with near-white text (Neutral/50) is correct; but the
        mathematical inverse of Neutral/100 is not Neutral/900 in visual terms
        because the perceptual distance between adjacent steps is not symmetric.
      </p>
      <p>
        The correct approach is to treat dark mode as a fresh set of semantic
        assignments that happen to reuse the same primitives. For each semantic
        token, ask: given a dark surface, what primitive value serves this role
        well? The answer will often mirror the light assignment in structure but
        not in direction.
      </p>
      <p>
        Miao (Figma, 2022) describes several challenges Figma encountered during
        their &ldquo;Dark Mode Week&rdquo;: some component backgrounds that
        looked fine in light mode appeared too saturated in dark mode; some
        accent colors that passed contrast on white failed against dark surfaces
        at the same step. The fix in each case was to choose a different
        primitive rather than to change the semantic token name or the component
        structure. This is the value of the two-layer system: the semantic layer
        absorbs the complexity of mode differences while leaving component
        structure intact.
      </p>
      <p>
        Practical rules for assigning dark-mode primitives:
      </p>
      <pre>{`
  surface-base:      use Neutral/950 or Neutral/900 (not inverted Neutral/50)
  surface-elevated:  use Neutral/900 or Neutral/850 (one step lighter than base)
  text-primary:      use Neutral/50 or Neutral/100 (high contrast on dark)
  text-secondary:    use Neutral/300 or Neutral/400 (NOT Neutral/600; check contrast)
  accent-default:    test Accent/400 -- Accent/600 may fail against dark bg
  border-default:    use Neutral/700 or Neutral/800 (subtle on dark surface)
  `}</pre>
      <p>
        The rule for <code>text-secondary</code> deserves emphasis. In light
        mode, Neutral/600 on Neutral/50 typically achieves a contrast ratio
        around 5.5:1, passing AA. In dark mode, the na&iuml;ve assignment of
        Neutral/600 on Neutral/950 achieves only about 2.5:1, failing AA for
        any text size. Moving <code>text-secondary</code> to Neutral/300 in
        dark mode usually clears AA and often clears AAA. This is one of the
        most common dark-mode contrast failures in production products.
      </p>

      <AnchorHeading as="h2" id="7-worked-example">
        7. A worked example: building a palette from a brand blue
      </AnchorHeading>
      <p>
        This example builds a complete color system for a fictional SaaS product
        whose brand color is a medium blue at hsl(216, 80%, 52%). We will build
        the accent ramp, a complementary neutral ramp, assign the semantic layer
        for light mode, then derive dark-mode assignments and test contrast.
      </p>
      <p>
        <strong>Step 1: the accent base.</strong> Our base is hsl(216, 80%, 52%)
        &mdash; a clear, fairly saturated blue. We name this Accent/500.
      </p>
      <p>
        <strong>Step 2: define the endpoints.</strong> Accent/100 will be used
        as a tinted badge background (very light blue). Accent/900 will be used
        as a deep foreground on light surfaces (uncommon, but available).
        Accent/100: hsl(216, 80%, 95%). Accent/900: hsl(216, 80%, 18%).
      </p>
      <p>
        <strong>Step 3: fill the intermediate steps.</strong> Working outward
        from 500:
      </p>
      <pre>{`
  Accent/100: hsl(216, 80%, 95%)   -- tinted surface, badge bg
  Accent/200: hsl(216, 80%, 88%)
  Accent/300: hsl(216, 80%, 76%)
  Accent/400: hsl(216, 80%, 65%)
  Accent/500: hsl(216, 80%, 52%)   -- brand color (base)
  Accent/600: hsl(216, 80%, 42%)
  Accent/700: hsl(216, 80%, 33%)
  Accent/800: hsl(216, 80%, 24%)
  Accent/900: hsl(216, 80%, 18%)   -- dark foreground
  `}</pre>
      <p>
        Checking visually: steps 100-300 are distinctly lighter; steps 700-900
        are distinctly darker; the progression looks approximately even. If
        steps 400 and 500 look too similar, expand the lightness gap between
        them.
      </p>
      <p>
        <strong>Step 4: the neutral ramp.</strong> We tint toward hue 220 (close
        to the accent hue) at low saturation:
      </p>
      <pre>{`
  Neutral/50:  hsl(220,  9%, 97%)   -- page background
  Neutral/100: hsl(220,  9%, 93%)
  Neutral/200: hsl(220,  9%, 87%)
  Neutral/300: hsl(220,  9%, 76%)
  Neutral/400: hsl(220,  9%, 62%)
  Neutral/500: hsl(220,  9%, 50%)
  Neutral/600: hsl(220,  9%, 39%)
  Neutral/700: hsl(220,  9%, 28%)
  Neutral/800: hsl(220,  9%, 18%)
  Neutral/900: hsl(220,  9%, 11%)   -- primary foreground
  `}</pre>
      <p>
        <strong>Step 5: light-mode semantic assignments.</strong>
      </p>
      <pre>{`
  surface-base:     Neutral/50   -- hsl(220,  9%, 97%)
  surface-elevated: Neutral/100  -- hsl(220,  9%, 93%)
  text-primary:     Neutral/900  -- hsl(220,  9%, 11%)
  text-secondary:   Neutral/600  -- hsl(220,  9%, 39%)
  accent-default:   Accent/600   -- hsl(216, 80%, 42%)   (one step darker for contrast)
  accent-subtle:    Accent/100   -- hsl(216, 80%, 95%)
  border-default:   Neutral/200  -- hsl(220,  9%, 87%)
  danger-default:   hsl(4, 74%, 48%)                     (defined separately)
  `}</pre>
      <p>
        <strong>Step 6: contrast checks (light mode).</strong>
      </p>
      <pre>{`
  text-primary on surface-base:
    Neutral/900 (#1a1f26) on Neutral/50 (#f5f6f8)
    Contrast ratio: approximately 16.2:1   -- passes AAA

  text-secondary on surface-base:
    Neutral/600 (#586170) on Neutral/50 (#f5f6f8)
    Contrast ratio: approximately 5.9:1    -- passes AA

  accent-default on surface-base:
    Accent/600 (#1e63b8) on Neutral/50 (#f5f6f8)
    Contrast ratio: approximately 6.8:1    -- passes AA
  `}</pre>
      <p>
        <strong>Step 7: dark-mode semantic assignments.</strong>
      </p>
      <pre>{`
  surface-base:     Neutral/900  -- hsl(220,  9%, 11%)
  surface-elevated: Neutral/800  -- hsl(220,  9%, 18%)
  text-primary:     Neutral/50   -- hsl(220,  9%, 97%)
  text-secondary:   Neutral/300  -- hsl(220,  9%, 76%)   (NOT 600: would fail)
  accent-default:   Accent/400   -- hsl(216, 80%, 65%)   (lighter for dark bg)
  accent-subtle:    Accent/900   -- hsl(216, 80%, 18%)
  border-default:   Neutral/700  -- hsl(220,  9%, 28%)
  danger-default:   hsl(4, 74%, 64%)                     (lighter for dark bg)
  `}</pre>
      <p>
        <strong>Step 8: contrast checks (dark mode).</strong>
      </p>
      <pre>{`
  text-primary on surface-base:
    Neutral/50 (#f5f6f8) on Neutral/900 (#1a1f26)
    Contrast ratio: approximately 16.2:1   -- passes AAA

  text-secondary on surface-base:
    Neutral/300 (#b8bec8) on Neutral/900 (#1a1f26)
    Contrast ratio: approximately 7.1:1    -- passes AAA

  accent-default on surface-base:
    Accent/400 (#4a91e0) on Neutral/900 (#1a1f26)
    Contrast ratio: approximately 5.2:1    -- passes AA
  `}</pre>
      <p>
        Notice that <code>text-secondary</code> moved from Neutral/600 (light
        mode) to Neutral/300 (dark mode). Using Neutral/600 in dark mode would
        have produced a ratio around 2.4:1, a clear AA failure. The semantic
        layer absorbed this difference: the component using{" "}
        <code>text-secondary</code> did not change; only the dark-mode
        assignment of that token changed.
      </p>

      <AnchorHeading as="h2" id="8-exercises">8. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          Pick any three colors from the Tailwind CSS default palette (for
          example, Slate/500, Blue/500, and Orange/500). Convert each to HSL
          using a browser DevTools color picker or an online converter. All
          three will have HSL lightness values around 45-55%. Now place each
          swatch next to a mid-gray (#888888) and assess which looks lighter and
          which looks darker. Do their HSL lightness values accurately predict
          their perceived brightness? What does this tell you about relying on
          HSL lightness alone when building a ramp?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Choose a brand color for your product. Using the process in section 3,
          build a 9-step accent ramp (steps 100 through 900) in HSL. Then
          evaluate the ramp: do the steps progress at a visually even rate? Are
          any two adjacent steps indistinguishable at a glance? Are the end
          steps truly distinct from pure black and pure white? Document the HSL
          values for each step and note which stops you adjusted from your first
          pass and why.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Open any product you use regularly. Find one text-on-background pair
          where you suspect the contrast may be low (a caption, a placeholder,
          a secondary label). Use the WebAIM contrast checker at{" "}
          <a href="https://webaim.org/resources/contrastchecker/">
            webaim.org/resources/contrastchecker/
          </a>{" "}
          to measure the ratio. Does it pass WCAG AA for normal-weight text
          (4.5:1)? If not, what is the minimum adjustment to one of the two
          colors that achieves a passing ratio? Express the answer as a specific
          new hex value or HSL change.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Write the semantic token assignments for the light mode of your
          product using the eight-token model from section 5. Then write the
          dark-mode assignments. For each token where the dark-mode assignment
          is not the obvious step-for-step mirror of the light assignment,
          write one sentence explaining why you chose that particular primitive
          value.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          In section 6 the reading states that <code>text-secondary</code>{" "}
          on a dark surface is the most common contrast failure. Using the neutral
          ramp from the worked example (or your own ramp), calculate the contrast
          ratio of Neutral/600 on Neutral/900. Does it pass WCAG AA for normal
          text? Now find the lightest step in the neutral ramp (closest to the
          dark end, i.e. the highest step number that is not the background
          itself) that achieves a passing AA ratio against Neutral/900. Which
          step is it?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="9-going-deeper">9. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section worksheet asks you to
          build your primitive and semantic variable collections in Figma, test
          three contrast pairs in each mode, and apply semantic tokens to your
          entire starter kit. Bring your Figma file with the ramp drafted before
          section.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers HSL, OKLCH, hue
          rotation, and the two-ramp palette structure in more depth, with
          live Figma examples.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers WCAG contrast,
          semantic token naming, and dark mode as a parallel semantic system,
          with the Figma variable modes workflow.
        </li>
        <li>
          <strong>Week 5 (next week).</strong> Spacing and the 8-point grid
          build on the same token infrastructure you set up this week. The
          semantic variable collection you finish in section will grow to
          include spacing tokens in week 5.
        </li>
      </ul>

      <Takeaways>
        <li>
          HSL and OKLCH both let you reason about color in human terms, but
          OKLCH is perceptually uniform: equal steps in lightness produce
          approximately equal steps in perceived brightness across different
          hues. HSL ramps often need manual adjustment to look even.
        </li>
        <li>
          Pure black and pure white belong in almost no production UI palette.
          Near-black and near-white with a slight hue tint give you the full
          range of contrast while avoiding harshness and leaving room for
          interactive states.
        </li>
        <li>
          WCAG AA requires 4.5:1 for normal text and 3:1 for large text. The
          most common failures are mid-range accent colors as text on light
          backgrounds and any semantic color that was not explicitly retested
          in dark mode.
        </li>
        <li>
          Semantic tokens separate what a color is (primitive: Neutral/600)
          from what it does (semantic: text-secondary). With a primitive and
          semantic layer in Figma variables, dark mode becomes a new set of
          semantic assignments rather than a redesign.
        </li>
        <li>
          Dark mode is a parallel system, not an inversion. The most dangerous
          na&iuml;ve assumption is that <code>text-secondary</code> can stay at
          the same ramp step in both modes; it almost always needs to move two
          or three steps lighter in dark mode to maintain contrast.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Koopersmith, Daryl, and Wilson Miner. &ldquo;Designing Accessible
          Color Systems.&rdquo; Stripe Design Blog, 2019.{" "}
          <a href="https://stripe.com/blog/accessible-color-systems">
            stripe.com/blog/accessible-color-systems
          </a>
          . Explains how Stripe&rsquo;s original palette failed WCAG at small
          text sizes and describes the perceptual color space tooling they built
          using CIELAB to produce vibrant, accessible ramps simultaneously.
        </p>
        <p>
          Wathan, Adam, and Steve Schoger. &ldquo;Building Your Color
          Palette.&rdquo; Refactoring UI, 2019.{" "}
          <a href="https://refactoringui.com/previews/building-your-color-palette/">
            refactoringui.com/previews/building-your-color-palette/
          </a>
          . Introduces the three-step ramp construction process (choose base,
          define endpoints, fill by eye) and the 9-shade palette structure that
          Tailwind CSS&rsquo;s color system is built on.
        </p>
        <p>
          Miao, Shirley. &ldquo;Illuminating Dark Mode.&rdquo; Figma
          Engineering Blog, 2022.{" "}
          <a href="https://www.figma.com/blog/illuminating-dark-mode/">
            figma.com/blog/illuminating-dark-mode/
          </a>
          . A practitioner case study of Figma&rsquo;s own dark mode
          implementation, covering the five-dimension semantic token naming
          system and why dark mode requires independent primitive assignments
          rather than inversion.
        </p>
        <p>
          WebAIM. &ldquo;Contrast and Color Accessibility: Understanding WCAG
          2.&rdquo; 2021.{" "}
          <a href="https://webaim.org/articles/contrast/">
            webaim.org/articles/contrast/
          </a>
          . Authoritative reference for WCAG 2 contrast criteria 1.4.3, 1.4.6,
          and 1.4.11, including the ratio thresholds, the contrast formula, and
          exceptions for logotypes and incidental text.
        </p>
        <p>
          Khamatov, Adel. &ldquo;Color Mechanics in UI Kits.&rdquo; Smashing
          Magazine, 2023.{" "}
          <a href="https://www.smashingmagazine.com/2023/04/color-mechanics-ui-kits/">
            smashingmagazine.com/2023/04/color-mechanics-ui-kits/
          </a>
          . Analyzes the two-dimensional color model in Material UI and Fluent
          UI: palette (what colors exist) versus scheme (how colors are used
          semantically), explaining why the separation is necessary for dark
          mode support.
        </p>
        <p>
          Tailwind Labs. &ldquo;Colors.&rdquo; Tailwind CSS Documentation,
          2024.{" "}
          <a href="https://tailwindcss.com/docs/customizing-colors">
            tailwindcss.com/docs/customizing-colors
          </a>
          . Reference for Tailwind&rsquo;s 9-shade color palette (steps 50
          through 950) and how CSS custom properties expose each step as{" "}
          <code>--color-*</code>. Useful for mapping Figma primitives to
          Tailwind tokens during handoff.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk04ReadingSearchBody =
  "HSL OKLCH color models hue rotation perceptual uniformity pure black white neutral ramp accent ramp 9-step palette WCAG contrast AA AAA semantic color tokens dark mode parallel system Figma variables primitive semantic layer product design color system Week 4 reading design for builders founders engineers";
