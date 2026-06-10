import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk10Reading() {
  return (
    <ReadingPage
      id="wk10"
      title="Week 10: synthesis, handoff, and what comes next"
      kicker="Design for Builders: Ship Beautiful Products as a Founder &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading closes the course. It does three things. First, it traces
          the arc from Week 1 through Week 9 so you can see the whole shape of
          what you built. Second, it covers the design-to-code handoff in
          enough depth that you can actually execute it: tokens as CSS variables,
          the component spec, and the decisions you must make before you hand
          anything off. Third, it describes how to keep improving after the course
          ends: a critique habit, a learning habit, and the weekly practice that
          separates builders who stay sharp from builders who drift back to
          guessing.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> The full course: Figma
          fundamentals (frames, auto-layout, components, variants, design tokens,
          team libraries), visual hierarchy, CRAP principles, Gestalt grouping,
          type scale, typeface pairing, measure and line-height, color ramps,
          WCAG contrast, semantic color tokens, dark-mode palette, the 8-point
          grid, spacing scale, 12-column layout, landing-page anatomy, hero
          patterns, CTA design, component library, screen flow, interaction
          states, wordmark, logo lockup, brand sheet, App Store screenshots,
          OG images, and asset licenses.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-course-arc">
        1. The arc of the course
      </AnchorHeading>
      <p>
        The course moved through five phases, each one adding a layer that the
        next phase assumed. If you take a moment to look back, the shape is
        clearer than it felt week by week.
      </p>
      <p>
        <strong>Tool (Weeks 1-2).</strong> Figma as a design environment, visual
        vocabulary as a shared language. The point was to turn Figma from a blank
        canvas that freezes most builders into a constraint-generating tool with
        a keyboard-driven workflow. Frames, auto-layout, components, variants,
        and styles went from opaque to automatic. At the same time, the visual
        vocabulary of hierarchy, contrast, repetition, alignment, proximity, and
        Gestalt grouping gave you words for what your eye was already noticing.
        You can&rsquo;t fix what you can&rsquo;t name.
      </p>
      <p>
        <strong>Vocabulary (Weeks 3-5).</strong> Typography, color, and layout
        as systems you build on purpose. The three core mechanics. Typography:
        anatomy, modular type scales, typeface pairing, measure, line-height.
        Color: HSL and OKLCH ramps, WCAG contrast ratios, semantic tokens, dark
        mode as a parallel system. Layout: the 8-point grid, spacing scales as
        tokens, the 12-column responsive layout, and the discipline of treating
        pixels off the grid as bugs rather than acceptable imprecision.
      </p>
      <p>
        <strong>Mechanics into composition (Weeks 6-7).</strong> The two
        artifacts every founder eventually ships: a landing page and an app UI.
        The landing-page phase wired together what you had learned about
        hierarchy, type, color, and spacing into a single persuasive sequence:
        hero, social proof, feature triplets, CTA. The app UI phase did the same
        for five connected screens and a reusable component library with
        interaction states.
      </p>
      <p>
        <strong>Frontier (Weeks 8-9).</strong> Brand identity and marketing
        assets. Wordmarks, marks, lockups, the brand sheet, voice and tone.
        Then App Store screenshots, OG images, favicons, social-share cards, and
        the license literacy that separates builders who ship with confidence from
        builders who hope nobody asks about the fonts.
      </p>
      <p>
        <strong>Synthesis (Week 10).</strong> The launch package. All of the
        above, derived from the same tokens, assembled into a coherent artifact,
        then handed off to code. This week is not a new chapter. It is the point
        at which the earlier chapters become a system.
      </p>

      <AnchorHeading as="h2" id="2-five-fundamentals">
        2. The five fundamentals in practice
      </AnchorHeading>
      <p>
        The syllabus named five non-negotiable fundamentals at the start. They
        deserve a second look now that you have ten weeks of work behind you.
        Each one looked different in practice from how it sounded in theory.
      </p>
      <p>
        <strong>Reuse, do not redo.</strong> In Week 1, this meant making a
        component before copy-pasting the same button twice. By Week 7, it meant
        building a library where a single button component covered all four states
        (default, hover, pressed, disabled) and two sizes (small, large) through
        variants and auto-layout rather than six separate objects. By Week 10, it
        means your landing page, your app screens, and your App Store screenshots
        all pull from the same color tokens and spacing tokens, which means a
        single token change propagates everywhere at once. Reuse is the force
        that keeps a design system from fracturing as it grows.
      </p>
      <p>
        <strong>Hierarchy is a thing you can see.</strong> Early in the course
        this felt abstract. By Week 2, after the design critique section, it
        became concrete: if you cannot point at the primary message and the
        primary action on a screen and explain why your eye lands there first,
        the hierarchy is broken. The specific tools you learned for fixing it
        were type size and weight contrast (Week 3), color emphasis against a
        neutral background (Week 4), and generous whitespace to separate groups
        (Week 5). Those three are still the primary levers. Hierarchy is not a
        feeling. It is a measurement.
      </p>
      <p>
        <strong>Grid before vibes.</strong> The 8-point grid felt bureaucratic in
        Week 5. By Week 6, when you tried to lay out a full landing page, it
        became useful: the grid gave you a decision rule for every spacing
        question, which meant you spent time on composition rather than on
        pixel-nudging. Tailwind&rsquo;s spacing scale, where one unit equals 4
        pixels and every even step is an 8-point grid value, shows how deeply
        this principle is embedded in the tools builders already use (Tailwind
        Labs, 2024). The grid is not a constraint. It is a compression algorithm
        for spacing decisions.
      </p>
      <p>
        <strong>One typeface, one palette, on purpose.</strong> This is the
        fundamental beginners resist most. The instinct is to add variety to
        avoid boredom. The result is noise. One typeface across your product
        creates cohesion that variety cannot buy back. One palette, built from
        a 9-step neutral ramp and a 9-step accent ramp with clear semantic roles,
        gives every element the same visual grammar. Restraint looks expensive
        because it signals deliberate choice rather than accumulated accident.
      </p>
      <p>
        <strong>Ship every week.</strong> The artifact is the point. A Figma
        file at the end of each week beats a notebook full of principles. The
        dependency chain of the course was designed so that each week&rsquo;s
        artifact became the starting material for the next week&rsquo;s artifact.
        The starter kit from Week 1 became the foundation for the type system in
        Week 3 and the color system in Week 4. The landing page from Week 6 used
        the component library started in Week 1 and expanded in Week 7. The
        brand sheet from Week 8 sourced its palette and typeface from Weeks 3
        and 4. Shipping every week is not a productivity rule. It is a
        prerequisite for the course&rsquo;s internal dependencies to work.
      </p>

      <AnchorHeading as="h2" id="3-what-tokens-are">
        3. What design tokens actually are
      </AnchorHeading>
      <p>
        A <strong>design token</strong> is a named value that stores a design
        decision. Instead of hardcoding <code>#1a1a2e</code> everywhere you want
        a dark text color, you define a token named
        <code>color/text/primary</code> that holds that value. Every place in
        your design that uses primary text color references the token, not the
        hex value. When you change the token, everything updates at once.
      </p>
      <p>
        Figma implements tokens through its Variables system, introduced at
        Config 2023. A Figma variable is a named slot that can hold a color,
        number, string, or boolean, and that can have multiple modes (light and
        dark, compact and comfortable, brand A and brand B). When you publish a
        variable to a team library, every file that connects to that library can
        reference it (Figma, 2024).
      </p>
      <p>
        Tokens follow a three-layer structure. The names come from different
        design systems but the logic is the same everywhere.
      </p>
      <pre>{`PRIMITIVE TOKENS (raw values, no semantic meaning)
  color/neutral/100   = #f8f9fa
  color/neutral/500   = #6b7280
  color/neutral/900   = #111827
  color/brand/500     = #4f6ef7
  space/1             = 4px
  space/2             = 8px
  space/4             = 16px

SEMANTIC TOKENS (map primitives to roles)
  color/text/primary       = color/neutral/900   (light mode)
  color/text/primary       = color/neutral/100   (dark mode)
  color/surface/base       = color/neutral/100   (light mode)
  color/surface/base       = color/neutral/900   (dark mode)
  color/action/primary     = color/brand/500

COMPONENT TOKENS (map semantics to specific components)
  button/background/default  = color/action/primary
  button/text/default        = white
  button/padding/x           = space/4
  button/padding/y           = space/2`}</pre>
      <p>
        The value of the three layers is that a rebrand touches only the
        primitive layer. A mode change (light to dark) touches only the semantic
        layer. A component redesign touches only the component layer. None of
        these changes requires touching every frame in your Figma file or every
        class in your CSS.
      </p>

      <AnchorHeading as="h2" id="4-tokens-to-css">
        4. From Figma tokens to CSS variables
      </AnchorHeading>
      <p>
        CSS custom properties are the code equivalent of design tokens. The
        mapping is direct: a Figma variable named <code>color/brand/500</code>
        becomes a CSS property named <code>--color-brand-500</code>. A variable
        named <code>space/4</code> becomes <code>--space-4</code>.
      </p>
      <p>
        The anclist.com tutorial (2024) traces the full pipeline from Figma to
        Tailwind config, which is the most common handoff path for the builders
        in this course. The steps are:
      </p>
      <ol>
        <li>
          Define primitive and semantic variables in Figma, organized in
          collections. Use a naming convention consistent with how you will name
          CSS custom properties (kebab-case, slash-separated hierarchy).
        </li>
        <li>
          Export variable values as JSON. The Figma Variables REST API lets you
          pull a file&rsquo;s variables programmatically. Tokens Studio is a
          Figma plugin that adds a UI layer over this export and handles
          multi-mode collections cleanly.
        </li>
        <li>
          Transform the exported JSON with Style Dictionary, an open-source
          transformer from Amazon that converts token JSON into any output format:
          CSS custom properties, Tailwind config objects, Swift constants, Kotlin
          constants, and more.
        </li>
        <li>
          Wire the generated CSS file into your project. For Tailwind, point the
          theme config at the CSS custom property names. Tailwind&rsquo;s own
          color docs show exactly how <code>--color-*</code> properties slot into
          the Tailwind theme (Tailwind Labs, 2024).
        </li>
      </ol>
      <p>
        The result is a code-side system where Tailwind utility classes like
        <code>bg-brand-500</code> and <code>text-neutral-900</code> resolve to the
        same values your Figma design uses. When your designer (or future-you)
        updates a token in Figma and re-exports, the change flows into the
        codebase through the same pipeline without requiring manual search-and-replace
        across component files.
      </p>

      <Callout title="Naming is the contract">
        <p>
          Token names are the interface between design and code. Once you name a
          token and both the Figma file and the codebase reference it, renaming
          it is a breaking change on both sides simultaneously. Choose names that
          describe the role, not the value. <code>color/text/primary</code> ages
          well. <code>color/dark-blue-text</code> breaks the moment you go
          light-on-dark. Settle on a naming convention before you build the
          semantic layer and do not change it without coordinating with whoever
          owns the code.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="5-what-lives-in-design">
        5. What lives in design vs what lives in code
      </AnchorHeading>
      <p>
        Not every design decision belongs in a token. Some decisions are better
        expressed in code. Drawing the boundary clearly before handoff prevents
        the most common handoff failure: a developer who has to guess what you
        intended.
      </p>
      <p>
        <strong>What lives in design (and should be tokenized):</strong> all
        color values, all spacing values that appear more than once, all
        typographic values (font family, font size, line-height, letter-spacing),
        all border-radius values, and all shadow definitions. These are the
        decisions that repeat across your product. Tokenizing them is how you
        enforce consistency without rules.
      </p>
      <p>
        <strong>What lives in code but not in tokens:</strong> animation timing
        (unless you have a motion design system), layout algorithms (the CSS
        grid template, the flexbox direction), responsive breakpoint behavior,
        and state transitions (hover effects, focus rings). These are behaviors
        that Figma can approximate in prototypes but cannot specify with enough
        precision to replace a CSS rule.
      </p>
      <p>
        <strong>What lives in the component spec (documented separately):</strong>
        anything the developer needs that is not a token value. The component
        spec is a written document, not a Figma frame. It covers the four
        interaction states and which tokens are active in each, the accessible
        name and ARIA role, the keyboard behavior, and any edge cases (what
        happens to a button label if it exceeds one line, what happens to a card
        if its image fails to load).
      </p>
      <p>
        Femke van Schoonhoven (2022) describes this boundary in terms of
        developer communication: &ldquo;the Figma file is not the spec; it is
        the starting point for a conversation that produces the spec.&rdquo; Figma
        Dev Mode surfaces CSS values from your design, but it cannot infer
        intent. The component spec is where you supply intent: the &ldquo;why&rdquo;
        behind the spacing, the &ldquo;what happens when&rdquo; for each state.
      </p>

      <AnchorHeading as="h2" id="6-component-spec">
        6. Writing a component spec
      </AnchorHeading>
      <p>
        A component spec answers exactly four questions for every component: what
        are the visual states, what tokens govern each state, what spacing rules
        apply, and what behavior does the developer need to implement that the
        design cannot show. Here is a worked example for the primary button.
      </p>
      <pre>{`COMPONENT SPEC: Primary Button
Version: 1.0 | Week 10 capstone

STATES AND TOKENS
  Default
    background:  button/background/default  (= color/action/primary = #4f6ef7)
    text:        button/text/default         (= white)
    border:      none
    shadow:      none

  Hover
    background:  color/brand/600            (= #3d5de6)
    cursor:      pointer
    transition:  background 150ms ease

  Pressed
    background:  color/brand/700            (= #2d4dd5)
    transform:   scale(0.98)

  Disabled
    background:  color/neutral/300
    text:        color/neutral/500
    cursor:      not-allowed
    opacity:     0.6

SPACING
  padding-x:  button/padding/x  (= space/4 = 16px)
  padding-y:  button/padding/y  (= space/2 = 8px)
  gap (icon to label):  space/1 (= 4px)
  border-radius:  radius/md (= 6px)

TYPOGRAPHY
  font-family:  type/family/base  (= Inter, system-ui, sans-serif)
  font-size:    type/size/sm      (= 14px)
  font-weight:  type/weight/medium (= 500)
  line-height:  1     (buttons do not need multi-line leading)

ACCESSIBILITY
  role:        button
  focusable:   yes, visible focus ring using color/action/focus
  aria-disabled: set when disabled, do not use the disabled attribute
                 alone (keeps the element focusable for screen readers)

EDGE CASES
  Long label: truncate with ellipsis at one line, do not wrap.
  Icon-only:  use a square aspect ratio, min-width = height.
  Loading:    replace label with a spinner; keep the button width fixed
              so layout does not shift.`}</pre>
      <p>
        A developer reading only this spec can implement the component without
        opening the Figma file. That is the test. If any row requires guessing,
        the spec is incomplete.
      </p>

      <AnchorHeading as="h2" id="7-keeping-your-eye-sharp">
        7. Keeping your eye sharp after the course
      </AnchorHeading>
      <p>
        Visual design is a perceptual skill. Like any perceptual skill, it
        degrades if you stop using it and sharpens if you practice deliberately.
        The course gave you the vocabulary and the mechanics. What keeps both
        alive after the course ends is a critique habit.
      </p>
      <p>
        A critique habit has two parts. The first is looking at other products
        with the vocabulary active. Every interface you use is a free specimen.
        Ask the four questions: Where does my eye land first? Is that the primary
        action? Is the hierarchy broken? If it is broken, which lever would fix
        it: type scale, color contrast, spacing, or grouping? You do not need to
        write these down. You need to ask them until the questions fire
        automatically.
      </p>
      <p>
        The second part is critiquing your own work with a delay. Looking at your
        own design immediately after making it is nearly useless because your
        working memory is still full of the decisions you just made. Come back
        to it 24 hours later and ask: where does my eye land? Does the hierarchy
        match the product&rsquo;s priority? Does the spacing look intentional or
        accidental? Print it out, if you have access to a printer. The change in
        medium exposes problems the screen hides.
      </p>
      <p>
        The resources that help most are not courses. They are specimens of work
        you admire. Collect them. Keep a Figma file (or a simple folder) of
        screenshots from products whose design you trust. When you are stuck on
        a decision, look at the collection. Ask not &ldquo;what does this
        product look like?&rdquo; but &ldquo;what specific decision did this
        designer make, and why does it work?&rdquo;
      </p>
      <p>
        The Scrimba crash course for developers (Ziroll, 2022) is useful
        after the course for a different reason than it was useful before: you
        now have the vocabulary to hear what he is describing and map it to your
        own decisions. Courses you have already taken are worth revisiting six
        months later. You will hear different things.
      </p>

      <AnchorHeading as="h2" id="8-where-to-keep-learning">
        8. Where to keep learning
      </AnchorHeading>
      <p>
        The reading list in the syllabus named four books worth owning after the
        course. The two most relevant for what comes immediately after are
        Refactoring UI (Wathan and Schoger) and Butterick&rsquo;s Practical
        Typography (Butterick). Both are available now, both are grounded in
        practice rather than theory, and both cover depth the course did not
        have room for.
      </p>
      <p>
        Figma&rsquo;s own official video on tokens, variables, and styles (Figma,
        2023) is worth watching again now that you have the context to understand
        the three-layer model in practice. Before the course, the video was
        abstract. After ten weeks of building with variables, the specific design
        decisions Figma made about how variables compose become readable.
      </p>
      <p>
        The Figma variable modes tutorial (2023) covers the light/dark mode
        workflow in more depth than the course did. If your product needs dark
        mode and you want to implement the full semantic-token pipeline, that
        tutorial is the practical guide. Femke van Schoonhoven&rsquo;s channel
        covers handoff and file organization for professional use, which becomes
        relevant the moment you are working with a developer or a second designer.
      </p>
      <p>
        Beyond Figma, the design decision that has the highest return for most
        builder-designers after this course is deepening their typography
        knowledge. Typography is the lever that accounts for the largest share of
        perceived quality in most web products, and it is the lever with the
        steepest skill curve. The body of work on the web (Butterick, Smashing
        Magazine&rsquo;s typographic writing, the CSS typography specification
        itself) rewards slow, repeated reading more than most design subjects.
      </p>

      <AnchorHeading as="h2" id="9-exercises">9. Exercises</AnchorHeading>
      <p>
        Complete these before section. Exercises 1 through 3 prepare your
        capstone for demo day. Exercises 4 and 5 begin the post-course practice.
      </p>

      <Exercise n={1}>
        <p>
          Open your launch package Figma file. List every color value used
          anywhere in the file. For each value, write the token name it should
          map to in the three-layer structure from section 3 (primitive, semantic,
          component). If you find any color that has no token counterpart, add
          the token now. A design with ungoverned color values will not survive
          handoff intact.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Write a component spec for one component in your library other than
          the primary button. Use the same format as section 6: states and tokens,
          spacing, typography, accessibility, edge cases. Choose a component that
          has at least three interaction states (for example, a form input with
          default, focused, and error states).
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Prepare your five-minute demo-day presentation. Structure it as follows:
          one sentence naming the product and its primary user; your three most
          deliberate design decisions and the course vocabulary that justifies
          each; one decision you are not satisfied with and what you would change
          with more time. Practice saying it out loud before section. The
          constraint on brevity forces you to choose what matters.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Pick one screen from a product you use every day. Spend ten minutes
          critiquing it using the course vocabulary: name the hierarchy (where
          does your eye go first, and is that the primary action?), the type
          system (how many distinct type sizes, are they on a scale?), and the
          spacing (does it feel like a grid or does it feel arbitrary?). Write
          three specific observations. Do not describe what you see. Describe
          what the designer decided and whether the decision works.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Trace the full token pipeline for your product&rsquo;s primary brand
          color: starting from the Figma primitive variable, through the semantic
          variable, through the component token where it is used in a button
          background, through the CSS custom property it would become, through
          the Tailwind config value it would map to. Write out each step as a
          named value. If any step in the chain is missing or inconsistent, fix
          it now.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="10-going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> Mutual critique: review every
          classmate&rsquo;s launch package in pairs. Bring the vocabulary of the
          course to each critique: hierarchy, type system, color system, spacing
          system, component system. You will receive the same vocabulary applied
          to your work. Arrive with your capstone complete and with your component
          spec for at least one component written out.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Demo day: presenting your
          launch package to the room, defending choices with vocabulary, receiving
          critique, and iterating in public. The follow-up questions from Lecture
          1 are worth completing before section: they prepare you for the specific
          critique format you will encounter.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Design to code: design tokens,
          the Figma Variables API, Tokens Studio, Style Dictionary, the component
          spec, and the design-vs-code boundary. The two required readings for
          Lecture 2 are{" "}
          <a href="https://www.figma.com/resource-library/design-tokens/">
            Figma&rsquo;s design tokens resource (2024)
          </a>{" "}
          and the{" "}
          <a href="https://www.anclist.com/blog/posts/design-tokens-in-practice">
            anclist.com Figma-to-Tailwind tutorial (2024)
          </a>
          .
        </li>
        <li>
          <strong>Figma variables and modes.</strong> The Figma variable modes
          tutorial (2023) at{" "}
          <a href="https://www.youtube.com/watch?v=fB-4ikrt3mk">
            youtube.com/watch?v=fB-4ikrt3mk
          </a>{" "}
          covers the full light/dark token pipeline in a 25-minute walkthrough.
          Useful immediately after the course if your product needs dark mode.
        </li>
        <li>
          <strong>Femke van Schoonhoven on handoff and file organization.</strong>{" "}
          Her channel at{" "}
          <a href="https://www.youtube.com/c/femkedesign">
            youtube.com/c/femkedesign
          </a>{" "}
          covers professional Figma file organization and developer handoff from
          a senior product designer&rsquo;s perspective. Recommended once you
          are working with a second person on the same file.
        </li>
      </ul>

      <Takeaways>
        <li>
          The course arc was tool, vocabulary, mechanics, composition, frontier,
          synthesis. Each phase added a layer the next phase assumed. The launch
          package is the first artifact that uses all the layers at once.
        </li>
        <li>
          A design token is a named value for a design decision. The three-layer
          structure (primitive, semantic, component) lets you change one thing in
          one place and have it propagate everywhere that references it, in both
          design and code.
        </li>
        <li>
          The design-to-code boundary requires deliberate decisions: tokens for
          all repeating values, component specs for anything the developer needs
          that a token cannot express, and code for behavior that Figma cannot
          specify precisely.
        </li>
        <li>
          A critique habit is the practice that keeps visual judgment sharp after
          the course ends. Ask four questions about every interface you use: where
          does my eye land, is that the primary action, is the hierarchy broken,
          and which lever would fix it.
        </li>
        <li>
          Restraint compounds. One typeface, one palette, every pixel on the grid,
          and a reuse discipline that eliminates duplication: these are the five
          decisions that make a product look more considered with less total work.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          anclist.com. &ldquo;Design Tokens in Practice: From Figma to
          Tailwind.&rdquo; 2024.{" "}
          <a href="https://www.anclist.com/blog/posts/design-tokens-in-practice">
            anclist.com/blog/posts/design-tokens-in-practice
          </a>
          . A step-by-step walkthrough of the complete Figma-to-Tailwind token
          pipeline: Figma Variables export, Style Dictionary transformation, and
          Tailwind config wiring. Written for developers who already use Tailwind,
          which is the audience for this course.
        </p>
        <p>
          Figma. &ldquo;Design Tokens: How to Sync Design and Code in
          Figma.&rdquo; Figma Resource Library, 2024.{" "}
          <a href="https://www.figma.com/resource-library/design-tokens/">
            figma.com/resource-library/design-tokens/
          </a>
          . The official conceptual reference for design tokens in Figma: what
          they are, how variables implement them, and how they map to CSS custom
          properties and Tailwind config values.
        </p>
        <p>
          Figma. &ldquo;Tokens, Variables, and Styles.&rdquo; Introduction to
          Design Systems, Figma Learn, 2023.{" "}
          <a href="https://www.youtube.com/watch?v=JyCmacSyDY4">
            youtube.com/watch?v=JyCmacSyDY4
          </a>
          . Official Figma video explaining how styles, variables, and tokens
          differ and how variables enable one-click light/dark switching.
          Approximately 20 minutes.
        </p>
        <p>
          Tailwind Labs. &ldquo;Colors.&rdquo; Tailwind CSS Documentation,
          2024.{" "}
          <a href="https://tailwindcss.com/docs/customizing-colors">
            tailwindcss.com/docs/customizing-colors
          </a>
          . Shows how Tailwind exposes its 9-shade color families as CSS custom
          properties and how to wire custom token values into the Tailwind theme.
        </p>
        <p>
          Tailwind Labs. &ldquo;Customizing Spacing.&rdquo; Tailwind CSS
          Documentation, 2024.{" "}
          <a href="https://tailwindcss.com/docs/customizing-spacing">
            tailwindcss.com/docs/customizing-spacing
          </a>
          . Documents Tailwind&rsquo;s spacing scale (1 unit = 0.25rem = 4px),
          which makes every even step an 8-point grid value and connects the
          course&rsquo;s spacing tokens directly to code.
        </p>
        <p>
          Unknown (community educator). &ldquo;Figma Variable Modes: Step-by-Step
          (Config 2023 / Design Tokens).&rdquo; 2023.{" "}
          <a href="https://www.youtube.com/watch?v=fB-4ikrt3mk">
            youtube.com/watch?v=fB-4ikrt3mk
          </a>
          . A 25-minute tutorial for Figma&rsquo;s variable modes, showing how
          to build primitive and semantic color collections and wire them for
          one-switch light/dark mode.
        </p>
        <p>
          van Schoonhoven, Femke. &ldquo;How to Set Up Your Figma File for
          Product Design (Handoff &amp; Specs).&rdquo; femke.design, 2022.{" "}
          <a href="https://www.youtube.com/c/femkedesign">
            youtube.com/c/femkedesign
          </a>
          . Professional Figma file organization and developer handoff from a
          senior product designer: page structure, frame naming, spec layers,
          component annotation, and handoff via Dev Mode. Approximately 20
          minutes.
        </p>
        <p>
          Ziroll, Bob (Scrimba). &ldquo;Intro to Figma for Developers.&rdquo;
          2022.{" "}
          <a href="https://www.youtube.com/watch?v=ybc2gkvjMDs">
            youtube.com/watch?v=ybc2gkvjMDs
          </a>
          . A developer-fluent crash course on Figma, mapping every concept to
          its code equivalent. Approximately 30 minutes. Useful as a review
          after the course with the vocabulary now in place.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk10ReadingSearchBody =
  "Week 10 synthesis capstone design tokens CSS variables Tailwind handoff component spec design to code five fundamentals reuse hierarchy grid typeface palette ship every week token pipeline primitive semantic component layers Figma variables modes Style Dictionary Tokens Studio critique habit visual judgment post-course learning launch package brand sheet landing page app screens App Store screenshots OG image design for builders founders engineers autumn 2026";
