import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk05Reading() {
  return (
    <ReadingPage
      id="wk05"
      title="Week 5: spacing, grids, and layout"
      kicker="Design for Builders: Ship Beautiful Products as a Founder · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers three outcomes. First, you will{" "}
          <strong>apply</strong> a four-or-eight-point spacing scale to every
          element on a screen, using spacing tokens with T-shirt size names so
          your decisions are reproducible. Second, you will{" "}
          <strong>apply</strong> a 12-column responsive layout in Figma,
          combining auto-layout with constraints and breakpoint frames. Third,
          you will <strong>analyze</strong> layouts that feel off, name the
          specific spacing or alignment violation causing the discomfort, and
          prescribe the correction.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Figma frames and auto-layout
          from Week 1. Visual hierarchy and the CRAP alignment principle from
          Week 2. Design tokens as a concept from Week 1 (styles and variables).
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-why-8px">
        1. Why 8px and not some other number
      </AnchorHeading>
      <p>
        The 8-point grid originates in a practical constraint: most device
        screens render at pixel densities that are multiples of 8. An iPhone at
        2x retina density scales 1 logical pixel to 2 physical pixels. A
        high-DPI display at 3x scales 1 logical pixel to 3 physical pixels.
        When you place a spacing value at, say, 9px, the device must decide how
        to distribute that 9px across an even number of physical pixels. The
        result is a sub-pixel render: a slightly blurry edge, a fractional
        pixel, a value that rounds differently on different devices. Values that
        are multiples of 8 divide evenly into 2 and 4 and 8, so they render
        cleanly at every common pixel density with no rounding required.
      </p>
      <p>
        The Spec Network (2016) article describes this as the core motivation:
        &ldquo;When you use multiples of 8 to size and space, you are working
        within a system that maps cleanly to all device resolutions currently
        on the market.&rdquo; The practical effect is that your layouts look
        sharp on every screen without any per-device adjustment.
      </p>
      <p>
        Beyond pixel density, 8px has a second advantage: it is large enough to
        be perceptibly different from 0px and from neighboring values, but small
        enough to serve as a fine-grained spacing unit. The difference between
        16px and 24px is visible to the eye. The difference between 17px and
        18px is not. A grid that uses 8px steps gives you enough gradations to
        build a complete spacing vocabulary without giving you so many options
        that you can no longer tell which one to use.
      </p>

      <AnchorHeading as="h2" id="2-four-point-half-steps">
        2. When to use 4px: the half-step
      </AnchorHeading>
      <p>
        The 8-point grid is not the only valid grid. The 4-point grid is its
        refinement: every value is a multiple of 4, which means every 8-point
        value is also a valid 4-point value. The half-steps that 4px introduces
        (4, 12, 20, 28, 36) fill gaps the 8-point grid leaves open.
      </p>
      <p>
        The right choice between 8px and 4px depends on context. The 8-point
        grid works well for outer spacing: the margin between a card and the
        layout column that contains it, the gap between sections on a page, the
        padding inside a large container. These are relationships between
        components, and the 8px step is coarse enough to create clear visual
        separation.
      </p>
      <p>
        The 4-point grid is better for inner spacing: the padding inside a
        small button, the gap between an icon and its label, the space between
        a form field and its helper text. These are relationships within a
        component, where tighter control matters and an 8px step may be too
        large.
      </p>
      <p>
        A practical rule: use the 8-point grid for anything that separates
        components or sections, and permit 4-point half-steps for padding and
        gaps inside a single component. Apply this rule consistently within one
        component; mixing 8px and 4px at the same level of nesting will
        produce the same visual inconsistency you were trying to prevent.
      </p>

      <Callout title="The soft grid vs the hard grid">
        <p>
          The Spec Network (2016) article names two variants. The{" "}
          <strong>hard grid</strong> means every element snaps to visible grid
          lines. The <strong>soft grid</strong> means you measure the distance
          between elements in 8px increments but do not snap to a visible grid.
          Most UI work uses the soft grid: the grid is a measuring discipline,
          not a rigid overlay. The hard grid is more common in print-derived
          work. Both approaches produce the same spacing values; they differ
          only in how strictly the grid is enforced during placement.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-spacing-tokens">
        3. Spacing tokens and T-shirt sizing
      </AnchorHeading>
      <p>
        A <strong>spacing token</strong> is a named reference to a specific
        pixel value. Instead of typing 16px into a Figma padding field, you
        assign a variable named <code>space-md</code> whose value is 16. The
        token is what you use everywhere in your design; the pixel value is what
        the token resolves to. If you later decide that medium spacing should be
        20px instead of 16px, you change the token once and every component that
        uses <code>space-md</code> updates automatically.
      </p>
      <p>
        Tailwind CSS demonstrates this approach in its spacing scale: every
        utility class from <code>p-1</code> (4px) to <code>p-96</code> (384px)
        is a named token that resolves to a specific rem value. Tailwind&rsquo;s
        documentation (Tailwind Labs, 2024) states the base unit: &ldquo;By
        default, 1 spacing unit equals 0.25rem, which translates to 4px at the
        default browser font size.&rdquo; Every even-numbered step in the
        Tailwind scale (p-2, p-4, p-6, p-8) lands on the 8-point grid. The
        scale is the grid expressed in code.
      </p>
      <p>
        T-shirt sizing is a naming convention that maps human-scale labels to
        specific token values. A typical scale for a product might look like
        this:
      </p>
      <pre>{`xs  =  4px   (fine detail: icon gap, help-text offset)
sm  =  8px   (tight inner padding: chip, badge, dense list)
md  = 16px   (standard inner padding: card, input, button)
lg  = 24px   (comfortable outer padding, section subgroups)
xl  = 32px   (major layout gaps, hero padding)
2xl = 48px   (section-level separation on marketing pages)
3xl = 64px   (page-level vertical rhythm)`}</pre>
      <p>
        The exact values depend on the product. A dense data dashboard might
        set <code>md</code> to 12px. A consumer app with generous whitespace
        might set it to 20px. The point is that once the scale is defined, you
        do not deviate from it. Every spacing decision in the product is either
        a valid token or a bug.
      </p>

      <AnchorHeading as="h2" id="4-inner-padding-vs-outer-margin">
        4. Inner padding vs outer margin
      </AnchorHeading>
      <p>
        The most common spacing mistake in early product design is confusing two
        distinct kinds of space. <strong>Inner padding</strong> is the space
        between a component&rsquo;s boundary and its content. If you have a
        card, inner padding is the distance from the card&rsquo;s edge to the
        text and images inside it. <strong>Outer margin</strong> (or gap, in
        auto-layout terms) is the space between a component and the things
        around it: the space between two cards in a row, the space between a
        button and the input field above it.
      </p>
      <p>
        These two kinds of space should come from different parts of the spacing
        scale. Inner padding is usually smaller because it governs the visual
        density of the component itself. Outer margin is usually larger because
        it governs the relationship between components, and those relationships
        need to be visually distinct from the internal relationships.
      </p>
      <p>
        A practical test: if you change the inner padding of a card, the card
        changes size. If you change the outer margin of a card, only the card&rsquo;s
        position relative to its neighbors changes. This distinction maps to
        CSS&rsquo;s <code>padding</code> and <code>margin</code> properties
        exactly, and to Figma&rsquo;s auto-layout &ldquo;padding&rdquo; and
        &ldquo;gap&rdquo; fields.
      </p>
      <p>
        When a layout feels claustrophobic, the cause is almost always
        insufficient outer margin: components are sitting too close to each
        other. When a layout feels disconnected or scattered, the cause is
        usually excessive outer margin: too much space between components that
        belong together. The 8-point grid constrains the values, but the
        designer still has to choose which token to apply. Choosing correctly
        requires the visual literacy from Week 2, specifically the proximity
        principle: elements that belong together should be spaced closer than
        elements that are distinct.
      </p>

      <AnchorHeading as="h2" id="5-layout-grid">
        5. The 12-column layout grid
      </AnchorHeading>
      <p>
        A <strong>layout grid</strong> is a set of columns with defined widths,
        gutters (the gaps between columns), and margins (the space from the
        column edge to the frame edge). The 12-column grid is the default for
        web UI because 12 divides evenly into 2, 3, 4, and 6, giving you four
        possible column spans for symmetric layouts: half-width (6 columns),
        third-width (4 columns), quarter-width (3 columns), and sixth-width
        (2 columns).
      </p>
      <p>
        The values at each breakpoint scale with the viewport. A common desktop
        setup at 1440px might use 80px margins, 24px gutters, and a resulting
        column width of around 72px. A tablet frame at 768px might use 32px
        margins, 16px gutters, and a column width around 48px. A mobile frame
        at 390px might use 16px margins, 12px gutters, and a column width
        around 24px. The margins and gutters should always be on the 8-point
        grid; the column width is derived, not chosen.
      </p>
      <p>
        In Figma, you add a layout grid to a frame by clicking the &ldquo;+&rdquo;
        icon next to &ldquo;Layout grid&rdquo; in the right panel, then
        switching the grid type from &ldquo;Grid&rdquo; to &ldquo;Columns.&rdquo;
        Set the count to 12, set the margin and gutter values, and choose
        &ldquo;Stretch&rdquo; so the columns fill the frame width automatically.
      </p>

      <AnchorHeading as="h2" id="6-constraints-and-auto-layout">
        6. Constraints and auto-layout together
      </AnchorHeading>
      <p>
        Auto-layout and constraints are both responsive behavior tools in Figma,
        and they operate at different levels of the hierarchy. Understanding
        which to use when is one of the more confusing parts of Figma for
        developers who already know CSS.
      </p>
      <p>
        Auto-layout governs how a frame distributes its children: in a row, in
        a column, wrapped in a grid. It controls padding (the space inside the
        frame before the first child) and gap (the space between children). It
        also controls how each child resizes: a child set to &ldquo;Fill&rdquo;
        expands to fill available space; a child set to &ldquo;Hug&rdquo;
        shrinks to fit its content; a child set to &ldquo;Fixed&rdquo; stays at
        a defined size regardless of the container.
      </p>
      <p>
        Constraints govern how a frame behaves inside its parent when the parent
        is resized manually. Constraints apply to frames that are{" "}
        <em>not</em> inside auto-layout containers, or to the auto-layout
        container itself within a parent that is not using auto-layout. A common
        pattern: a page-level auto-layout frame handles the vertical stack of
        sections. Inside each section, a horizontal auto-layout frame handles
        the column layout. Inside each column, a component uses auto-layout for
        its internal padding and gap. At no point do you manually position
        anything.
      </p>
      <p>
        Constraints become relevant when a child frame needs to stay pinned to
        a corner or edge of a non-auto-layout parent. A sticky header that
        should always sit at the top of a frame, pinned left and right, uses
        constraints. The header itself might be an auto-layout frame internally,
        but its relationship to the page frame is governed by constraints.
      </p>
      <p>
        The guidance from Figma (2023): &ldquo;Use auto layout when you want
        children to rearrange in response to content changes. Use constraints
        when you want children to pin or stretch in response to frame size
        changes.&rdquo; Most layouts need both.
      </p>

      <AnchorHeading as="h2" id="7-responsive-breakpoints">
        7. Responsive breakpoints and what changes between them
      </AnchorHeading>
      <p>
        A <strong>responsive breakpoint</strong> is a viewport width at which
        the layout reorganizes to fit the available space. Three breakpoints
        cover the most common design decisions: 1440px (desktop), 768px
        (tablet), and 390px (mobile). Some products add a 1280px laptop
        breakpoint or a 320px minimum mobile; for most product UI, three frames
        are enough to test the layout.
      </p>
      <p>
        The decisions that change between breakpoints are predictable. From
        desktop to tablet: the number of columns in a grid often halves (a
        3-column feature grid becomes 2-column or 1-column). Margins narrow.
        Gutters narrow. Typography may stay the same or scale down by one step.
        Navigation usually collapses from a top bar to a hamburger menu. From
        tablet to mobile: most layouts become single-column. Horizontal padding
        (the margin from content to screen edge) narrows to 16px or 12px. Touch
        targets grow to at least 44px tall.
      </p>
      <p>
        In Figma, the practice is to create three separate frames (not three
        artboards in a sequence, but three distinct design targets) and design
        each one with the appropriate layout grid. Do not try to design all
        three breakpoints in one pass. Design the desktop frame first, extract
        and clean up components, then adapt to tablet and mobile. Components
        that respond correctly to their container&rsquo;s width (children set to
        Fill) will adapt with less manual adjustment.
      </p>

      <AnchorHeading as="h2" id="8-macro-vs-micro-grid">
        8. Macro-grid vs micro-grid
      </AnchorHeading>
      <p>
        A layout always operates at two scales simultaneously, and confusing
        them is the source of most spacing inconsistency. The{" "}
        <strong>macro-grid</strong> is the page-level structure: the 12-column
        column layout, the vertical spacing between sections, the horizontal
        margin from content to viewport edge. The macro-grid determines where
        major content regions sit on the page and how much space separates them.
      </p>
      <p>
        The <strong>micro-grid</strong> is the component-level structure: the
        padding inside a card, the gap between items in a navigation bar, the
        spacing between a label and its input field. The micro-grid operates at
        smaller values (4-16px) and governs the visual density of individual
        components.
      </p>
      <p>
        Both grids must use the same base unit. If the macro-grid uses 8px
        steps and the micro-grid switches to 5px steps, the spacing values
        across the design will not share any common factors, and the layout will
        feel incoherent even when each individual component looks fine. The
        8-point grid works because it applies at both scales: 8px (micro) and
        64px (macro) are both multiples of 8.
      </p>
      <p>
        A component that is built on the micro-grid should slot correctly into
        the macro-grid without adjustment. A 16px padded card in a column with
        24px gutter spacing produces a total relationship of 16 + 24 + 16 = 56px
        between card content areas. All three values are 8-point compliant. If
        the card used 14px padding instead, the 14 + 24 + 14 = 52px total would
        not match any natural 8-point measurement and would require compensating
        adjustments somewhere else in the layout.
      </p>

      <AnchorHeading as="h2" id="9-diagnosing-a-broken-layout">
        9. Diagnosing a layout that feels off
      </AnchorHeading>
      <p>
        When a layout feels wrong but the designer cannot name why, the problem
        is almost always one of four things: inconsistent spacing, wrong
        proximity signal, misaligned axes, or scale confusion.
      </p>
      <p>
        <strong>Inconsistent spacing</strong> is the most common. Elements at
        the same logical level of the hierarchy use different spacing values.
        Two cards in the same row have different outer margins. A button&rsquo;s
        horizontal and vertical padding use different token sizes. The fix is to
        audit the spacing values, identify the token each value should have
        used, and apply the tokens consistently.
      </p>
      <p>
        <strong>Wrong proximity signal</strong> means the spacing between
        related elements is larger than the spacing between unrelated elements.
        A label and its input field should be closer together than the input
        field and the next form group. If those distances are reversed, the
        layout is grouping things incorrectly. The fix is to adjust spacing so
        that elements that belong together have smaller gaps than elements that
        are separate.
      </p>
      <p>
        <strong>Misaligned axes</strong> means elements that should share a
        horizontal or vertical axis do not. A set of cards whose left edges sit
        at 0, 1, and 0 pixels from the column edge, respectively. A headline
        that is indented 16px while body text is indented 14px. These are often
        caused by mixing absolute positioning with auto-layout, or by
        components that have asymmetric padding built in. The fix is to audit
        alignment using Figma&rsquo;s layout grid overlay and correct any
        element that does not sit on the grid.
      </p>
      <p>
        <strong>Scale confusion</strong> means the spacing values are on-grid
        but the scale relationships are wrong: a component&rsquo;s outer margin
        is smaller than its inner padding, making the component look surrounded
        by its own padding rather than floating in the layout. The fix is to
        ensure that outer spacing is always larger than inner spacing at the
        same level of the hierarchy.
      </p>

      <AnchorHeading as="h2" id="10-worked-example">
        10. A worked example: the 8-point grid on a real card
      </AnchorHeading>
      <p>
        Consider a pricing card with an icon at the top, a plan name, a price,
        a feature list, and a CTA button. Apply the 8-point token scale from
        section 3:
      </p>
      <pre>{`Card outer container
  padding: md (16px) all sides          ← inner padding
  gap between children: md (16px)       ← vertical gap

  Icon (24x24px)
  Plan name: body-lg, weight 600
  Price: heading, weight 700
  Feature list
    gap between items: sm (8px)         ← tighter, within a sub-group
    icon + label gap: xs (4px)          ← tightest, within a leaf item
  CTA button
    padding: sm (8px) top/bottom
             md (16px) left/right       ← asymmetric but on-grid

Cards in a row
  gap between cards: lg (24px)          ← outer gap, one step above md`}</pre>
      <p>
        Note that inner padding (<code>md = 16px</code>) is smaller than the
        gap between cards (<code>lg = 24px</code>). This is deliberate: the
        whitespace between cards must be larger than the whitespace inside a
        card or the layout will read the gap as an interior space, not a
        separation.
      </p>
      <p>
        The feature list uses <code>sm = 8px</code> between items because the
        list is a sub-group within the card. The <code>xs = 4px</code> between
        the icon and its label is the tightest value because the icon and label
        are a single semantic unit, nearly a compound glyph. The scale of the
        gap signals the scale of the relationship: smaller gap, tighter bond.
      </p>
      <p>
        Now consider what happens if a developer implements this card with 14px
        inner padding because &ldquo;16px looked too big.&rdquo; The card&rsquo;s
        content area shrinks. If the gap between cards stays at 24px, the ratio
        of inner space to outer space changes. What the eye previously read as
        &ldquo;breathing room within the card&rdquo; is now slightly tighter
        than expected, and the 24px gap now dominates. The card feels like it
        has too much space around it and not enough inside it. That is the visual
        cost of a single 2px deviation from the grid.
      </p>

      <AnchorHeading as="h2" id="11-exercises">11. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          Take any screen from an app on your phone. Write down ten spacing
          values you can identify (padding, gaps, margins). For each value,
          classify it as an 8-point grid value, a 4-point half-step, or
          off-grid. What percentage of the values are on-grid? If any values are
          off-grid, do you think they are intentional design decisions or
          unnoticed inconsistencies?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Define a spacing token scale for a product you are building or have
          built. Write out the names and pixel values for at least five tokens
          (xs through xl). Then pick one existing component in your product and
          annotate it: which token does each padding and gap value correspond to?
          Where did you find yourself deviating from the scale?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          In Figma, create a 1440px frame and set up a 12-column layout grid with
          80px margins and 24px gutters. Calculate the column width. Now create a
          768px frame with 32px margins and 16px gutters. Calculate the column
          width. Express both column widths as multiples of 8 (or note how close
          they are). Does the column width need to be on the 8-point grid, or only
          the margins and gutters?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Find a UI that feels visually cluttered or scattered (not just
          aesthetically uninteresting, but specifically uncomfortable to look at).
          Name which of the four diagnostic categories from section 9 applies:
          inconsistent spacing, wrong proximity signal, misaligned axes, or scale
          confusion. Describe the specific evidence that supports your
          classification.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Look at the pricing card worked example in section 10. The CTA
          button uses asymmetric padding (8px top/bottom, 16px left/right). Is
          this consistent with the 8-point grid? Explain why a button uses
          different horizontal and vertical padding, and describe what would
          happen visually if you made both 16px instead.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="12-going-deeper">12. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The pixel-grid drill asks you to
          rebuild three real product screens on the 8-point grid, audit spacing
          violations, and annotate what each violation costs visually.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the 8-point grid
          rationale, when to use 4px half-steps, spacing token naming, and the
          inner-padding-vs-outer-margin distinction in detail.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers the 12-column grid in
          Figma, constraints and auto-layout together, responsive breakpoints,
          and the macro-grid vs micro-grid distinction.
        </li>
        <li>
          <strong>HW2 due this week.</strong> Your type-only redesign is due.
          Bring it to section for a check-in before submitting.
        </li>
        <li>
          <strong>Next week (Week 6).</strong> Landing-page anatomy uses the
          spacing scale and layout grid you learned this week as the structural
          foundation for a complete page design.
        </li>
      </ul>

      <Takeaways>
        <li>
          The 8-point grid works because multiples of 8 divide evenly into
          common pixel densities, eliminating sub-pixel rounding. Use it for
          outer spacing between components. Use 4-point half-steps for inner
          padding inside dense components.
        </li>
        <li>
          Spacing tokens with T-shirt size names (xs through xl) make
          spacing decisions reproducible and refactorable. Every spacing value
          in the product should resolve to a named token; arbitrary pixel values
          are bugs.
        </li>
        <li>
          Inner padding governs how dense a component looks. Outer margin governs
          how components relate to each other. Outer spacing should always be
          larger than inner spacing at the same level of the hierarchy.
        </li>
        <li>
          The 12-column layout grid gives you a shared coordinate system for
          page-level decisions. Auto-layout handles component-level flow.
          Constraints handle pinning behavior when a frame is resized manually.
          All three work together.
        </li>
        <li>
          Most layout discomfort traces to one of four violations: inconsistent
          spacing values, wrong proximity signal, misaligned axes, or inner
          spacing larger than outer spacing. Name the violation before reaching
          for a fix.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Figma. &ldquo;Guide to Auto Layout.&rdquo; Figma Help Center, 2023.{" "}
          <a href="https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout">
            help.figma.com/hc/en-us/articles/360040451373
          </a>
          . Covers padding, gap, resizing behaviors (Hug, Fill, Fixed, Min/Max),
          and how auto-layout nesting enables responsive design.
        </p>
        <p>
          Spec Network. &ldquo;The 8-Point Grid.&rdquo; Spec.fm, 2016.{" "}
          <a href="https://spec.fm/specifics/8-pt-grid">
            spec.fm/specifics/8-pt-grid
          </a>
          . The foundational article on 8-point grid methodology: the hard grid vs
          soft grid distinction, why multiples of 8 work across device resolutions,
          and how the system bridges design and development.
        </p>
        <p>
          Tailwind Labs. &ldquo;Customizing Spacing.&rdquo; Tailwind CSS
          Documentation, 2024.{" "}
          <a href="https://tailwindcss.com/docs/customizing-spacing">
            tailwindcss.com/docs/customizing-spacing
          </a>
          . Documents Tailwind&rsquo;s spacing scale (1 unit = 0.25rem = 4px), showing
          how the scale is an 8-point grid at every even step and how
          spacing tokens map directly to design decisions.
        </p>
        <p>
          Wathan, Adam, and Steve Schoger. &ldquo;7 Practical Tips for Cheating
          at Design.&rdquo; 2018.{" "}
          <a href="https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886">
            medium.com/refactoring-ui/7-practical-tips
          </a>
          . Demonstrates the visual impact of spacing consistency, including tip 4
          (don&rsquo;t use grey borders when whitespace alone can do the job) which
          directly illustrates the proximity principle applied to layout spacing.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk05ReadingSearchBody =
  "8-point grid spacing tokens T-shirt sizing xs sm md lg xl inner padding outer margin 4-point half-step layout grid 12-column responsive breakpoints auto-layout constraints macro-grid micro-grid alignment discipline spacing scale spacing violations proximity signal misaligned axes scale confusion Week 5 reading design for builders founders engineers";
