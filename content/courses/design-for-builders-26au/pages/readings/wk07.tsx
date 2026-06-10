import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";
import { Mermaid } from "@/components/Mermaid";

export function Wk07Reading() {
  return (
    <ReadingPage
      id="wk07"
      title="Week 7: app screens, states, and component systems"
      kicker="Design for Builders: Ship Beautiful Products as a Founder · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading has three outcomes. First, you will{" "}
          <strong>apply</strong> what you learn by designing at minimum five
          connected app screens (sign-in, empty state, primary task, success,
          error) in Figma. Second, you will{" "}
          <strong>create</strong> a reusable component library containing a
          button, a text input, a card, and a modal, each with interaction
          states. Third, you will{" "}
          <strong>apply</strong> the component library consistently across both
          a desktop and a mobile frame, using only your color, type, and spacing
          tokens from weeks 3-5. By the end you will have a working design
          system fragment, not just a collection of screens.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Figma components and variants
          (week 1), visual hierarchy and spacing (weeks 2 and 5), type scale
          (week 3), color ramp and semantic color tokens (week 4), 8-point
          spacing scale (week 5), and landing-page composition (week 6). This
          week applies all five preceding systems to the app UI context, where
          the same tokens and components must work across many screens rather
          than one page.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-from-pages-to-systems">
        1. From pages to systems
      </AnchorHeading>
      <p>
        A landing page is designed once and deployed. An app UI is a system:
        the same button appears on thirty screens, the same input appears in
        eight forms, and the same card appears in five different list contexts.
        If that button is a one-off rectangle in each frame, a color change
        requires thirty edits. If it is a component, one edit propagates
        everywhere.
      </p>
      <p>
        Brad Frost (2016) coined the term <strong>atomic design</strong> to
        describe this shift from page-level to system-level thinking. His five
        levels map directly to Figma:
      </p>
      <pre>{`Level       Figma equivalent
Atoms       Color, type, spacing, and icon tokens
Molecules   Single-purpose components: Button, Input, Badge
Organisms   Composed sections: Form, Card list, Navigation bar
Templates   Screen layouts without real content
Pages       Templates filled with real content`}</pre>
      <p>
        The key insight is that systems are not built top-down. You define your
        tokens (atoms), combine them into components (molecules), compose those
        components into sections (organisms), then lay out screens (templates
        and pages). Starting from screens and working backward produces
        inconsistency, because each screen makes independent decisions that
        accumulate into an incoherent whole.
      </p>
      <p>
        Figma&rsquo;s component model enforces this discipline. A master
        component is the single source of truth. Every instance on every screen
        inherits from it. When you change the master, all instances update.
        This is the same contract as a React component: a prop change in one
        place affects every render.
      </p>

      <AnchorHeading as="h2" id="2-navigation-patterns">
        2. Navigation patterns
      </AnchorHeading>
      <p>
        Navigation is the first architectural decision in any app design. It
        determines how many frames you need, what the persistent chrome looks
        like on every screen, and how much horizontal space the content area
        has. Choose the wrong pattern and you will redesign twenty screens.
      </p>
      <p>
        There are three patterns that cover the majority of product UIs. Each
        has a specific context where it earns its cost.
      </p>
      <p>
        <strong>Sidebar navigation</strong> puts four to eight destinations in
        a persistent left rail. It suits desktop-first tools where users switch
        destinations frequently and need spatial orientation (dashboards, admin
        tools, productivity apps). The cost is horizontal space: a standard
        sidebar consumes 240-280px of a 1440px desktop frame. A collapsible
        sidebar (icon-only state, 64px wide) recovers that space without
        abandoning the pattern. Never use a sidebar with more than eight
        top-level items. Above eight, the problem is information architecture,
        not navigation design.
      </p>
      <p>
        <strong>Top bar navigation</strong> runs a row of tabs across the top
        of the content area. It suits desktop contexts with two to five
        destinations and infrequent switching. The pattern works at compressed
        viewport widths where a sidebar would collapse entirely. Figma uses top
        bar navigation for its view modes (Design, Prototype, Inspect) because
        those three modes are the entire destination set and users switch
        between them deliberately.
      </p>
      <p>
        <strong>Bottom tab navigation</strong> is the native mobile pattern.
        It places three to five primary destinations within thumb reach at the
        bottom of the screen. The iOS Human Interface Guidelines and Material
        Design both set five as the maximum. Above five tabs, the labels become
        unreadable at 375px width. Active state must be unambiguous: a filled
        icon, an accent color, or both. An active tab that is only slightly
        bolder than an inactive tab fails WCAG 1.4.11 for non-text contrast.
      </p>

      <Callout title="Navigation and the content area">
        <p>
          Every navigation pattern changes the available content area. A sidebar
          at 240px leaves 1200px at 1440px desktop width. Bottom tabs at 56px
          height leave roughly 736px of vertical space on a 812px iPhone.
          Define your content area before you design components. Components
          built for a 1200px canvas will overflow a 375px frame if you add
          mobile later.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-the-five-required-screens">
        3. The five screens every app must design before launch
      </AnchorHeading>
      <p>
        Most early-stage products are designed along the happy path: user
        completes the primary task, everything works, they succeed. The happy
        path is one scenario. The five screens below cover the full range of
        states a user encounters before, during, and around that path.
      </p>

      <Mermaid
        alt="The five required screens in order: sign-in leads to empty state or primary task, primary task leads to success or error"
        chart={`flowchart LR
  A["Sign-in"] --> B["Empty state\n(first-time user)"]
  A --> C["Primary task\n(returning user)"]
  B --> C
  C --> D["Success"]
  C --> E["Error"]
  D --> C
  E --> C`}
      />

      <p>
        <strong>Sign-in.</strong> This is the first screen most users see. It
        establishes whether your product feels trustworthy or unfinished. At
        minimum: an email field, a password field, a submit button, and a
        secondary link to password recovery. The error state for wrong
        credentials is part of this screen design, not an afterthought. A
        generic &ldquo;incorrect email or password&rdquo; message protects
        account privacy. A message that says &ldquo;this email is not
        registered&rdquo; tells an attacker which emails exist in your database.
        Design the language of the error message alongside the visual design of
        the error state.
      </p>
      <p>
        <strong>Empty state.</strong> The empty state is the screen a new user
        sees when they have not yet created data. It is the most underdesigned
        screen in most products. A blank content area with no label says
        nothing: the user cannot tell whether the feature is broken, unfinished,
        or waiting for them. An empty state has three required elements: a
        brief explanation of why the area is empty, a headline that tells the
        user what to do next, and a primary call-to-action button. The
        Refactoring UI maxim applies here: &ldquo;labels are a last
        resort&rdquo; (Wathan and Schoger, 2019), but an empty state needs
        at least a headline because there is no content to speak for itself.
      </p>
      <p>
        <strong>Primary task screen.</strong> This is the screen the product
        exists to serve. Design it after the other four, because the primary
        task screen is where all constraints converge: the navigation pattern
        is fixed, the component library is complete, and the spacing tokens
        are verified. A primary task screen built before the component library
        is a prototype, not a design. Build the system first, then build the
        screen.
      </p>
      <p>
        <strong>Success.</strong> Success screens close the feedback loop. When
        a user completes an action, the product must confirm it clearly. Three
        elements: what was completed (in plain language), what the user now has
        or what will happen next, and where to go from here. A success screen
        that says only &ldquo;Done&rdquo; fails all three. &ldquo;Your invoice
        was sent to alex@example.com. You&rsquo;ll receive a confirmation
        email.&rdquo; passes all three.
      </p>
      <p>
        <strong>Error.</strong> Error screens are the most trust-critical
        screens in your product. When something fails, the user is already
        frustrated. An error that explains nothing amplifies that frustration
        and damages trust. Three required elements: what went wrong (not an
        error code), why it happened if you can explain it simply, and what to
        do next (a recoverable action or a path back to safety). Design the
        error screen alongside the action that can fail. An error state designed
        weeks after the feature is built will read like a different product.
      </p>

      <AnchorHeading as="h2" id="4-loading-and-error-states">
        4. Loading and error states as component variants
      </AnchorHeading>
      <p>
        Every network call has three outcomes: success, failure, and waiting.
        Most product screens are designed for one outcome. The other two are
        discovered during QA or, worse, by users.
      </p>
      <p>
        The correct design approach is to treat loading and error as variants
        of your primary component, not as separate frames. A card that can show
        a skeleton loading state is a complete card component. A card that
        requires a separate skeleton frame is two components that will drift
        apart over time.
      </p>
      <p>
        <strong>Skeleton screens</strong> hold the layout during a load. They
        replace content with gray placeholder shapes that match the structure
        of the incoming data. A skeleton card has a gray rectangle where the
        image will be and two shorter gray lines where the title and body text
        will be. The user sees the layout before the content arrives, which
        reduces perceived wait time compared to a spinner. Use skeleton screens
        for content that has a known, stable structure: card lists, profile
        pages, dashboards.
      </p>
      <p>
        <strong>Spinners</strong> are for short, bounded waits where the
        layout will not change after loading. A button that triggers a form
        submission should show a spinner in the button, not replace the whole
        form with a skeleton. The spinner tells the user: &ldquo;the action
        registered, the result is coming.&rdquo; It does not need to hold
        layout because no layout changes are pending.
      </p>
      <p>
        The practical rule: use a skeleton when the result will fill a
        predetermined space. Use a spinner when the result will close a dialog,
        redirect, or change a button state.
      </p>

      <AnchorHeading as="h2" id="5-building-the-button-component">
        5. Building the button component
      </AnchorHeading>
      <p>
        The button is the molecule every screen shares. Designing it carefully
        once saves time on every subsequent screen.
      </p>
      <p>
        A complete button component has two axes of variation: hierarchy and
        state. Hierarchy determines visual weight (primary, secondary, ghost).
        State determines the interaction moment (default, hover, pressed,
        disabled, loading). Together they produce fifteen distinct variants for
        a three-hierarchy, five-state button. Figma&rsquo;s variant grid
        handles this without fifteen separate components: one master component
        with two variant properties.
      </p>
      <pre>{`Hierarchy: Primary | Secondary | Ghost
State:     Default | Hover | Pressed | Disabled | Loading`}</pre>
      <p>
        Every fill and stroke in the button references a semantic color token.
        A token named <code>color/interactive/primary/default</code> for the
        primary button background survives a rebrand; a hardcoded{" "}
        <code>#0050FF</code> does not. Figma&rsquo;s dark-mode case study
        (Miao, 2022) shows how Figma built their own dark mode on semantic
        tokens with five dimensions: type, UI element, color role, prominence,
        and interaction state. The button is the first place that five-dimension
        system becomes visible.
      </p>
      <p>
        The loading state deserves specific attention. When the button enters
        loading state, the text label typically disappears and a spinner
        replaces it. If the button is sized to hug its content, removing the
        label collapses the button width. This breaks the layout. Set the
        button to a fixed width or to fill its container so it holds its size
        regardless of content. This is one of the edge cases that separates a
        designed component from a drawn shape.
      </p>
      <p>
        Figma Learn&rsquo;s interactive button tutorial (2023) walks through
        building this component step by step. Follow it once with an empty file.
        The tutorial teaches more about auto-layout behavior under variant
        switching than any amount of reading can.
      </p>

      <AnchorHeading as="h2" id="6-building-form-inputs">
        6. Building form inputs
      </AnchorHeading>
      <p>
        Form inputs are the most complex molecules in most product libraries.
        A text input is not one component: it is a component with at least four
        states (default, focused, error, disabled) and potentially additional
        variants for size, with-prefix, with-suffix, and with-label-inline.
        Start with the minimal viable input and add variants only when a screen
        requires them.
      </p>
      <pre>{`State      Border           Label color    Helper text
Default    neutral/border   neutral/label  hidden
Focused    accent/border    neutral/label  hidden
Error      error/border     neutral/label  error/text (visible)
Disabled   neutral/muted    neutral/muted  hidden`}</pre>
      <p>
        Label placement is a design decision with real usability consequences.
        Labels above inputs are always visible, work at all viewport widths,
        and give users a reference point when reviewing a completed form. Floating
        labels (placeholder-style text that animates up on focus) are visually
        compact but create ambiguity: a pre-filled field with a floating label
        can look identical to an empty field from a distance. Unless you have a
        specific reason to use floating labels, default to labels above inputs.
      </p>
      <p>
        Checkboxes and radio buttons are the inputs most often copied from a
        UI kit without proper variant coverage. Build them from scratch at least
        once to understand what &ldquo;checked&rdquo; means as a Figma layer
        state. The check mark and the radio dot must be part of the component
        definition, not drawn on top of the component per instance. An instance
        that requires you to draw on top of it is not a component; it is a frame
        wearing component clothes.
      </p>

      <AnchorHeading as="h2" id="7-cards-as-a-primitive">
        7. Cards as a primitive
      </AnchorHeading>
      <p>
        A card is the most reused component in most product UIs. It appears as
        a list item, a dashboard tile, a notification, a grid cell, and a modal
        content block. The reason one component can fill all of these roles is
        that a card is structure, not content. The structure (a bounded
        container with rounded corners, a shadow or border, padding, and a
        vertical content slot) stays constant. The content varies by context.
      </p>
      <p>
        Two boolean component properties cover most card variants without
        requiring separate master components:
      </p>
      <pre>{`Property      False (hidden)    True (visible)
Has image     text-only card    image slot at top
Has action    no action row     ghost button row at bottom`}</pre>
      <p>
        Two boolean properties produce four configurations from one master
        component. Adding a third boolean (Has meta, for a timestamp or tag
        row) produces eight configurations. This is the practical payoff of
        atomic design: a well-structured master component eliminates the need
        for multiple one-off frames that would each need to be updated
        independently when the design system changes.
      </p>
      <p>
        The card surface color is one of the most important semantic token
        uses in an app design system. In light mode, the card surface is
        typically slightly off-white against a page background that is slightly
        more gray, creating a low-contrast elevation signal. In dark mode, the
        same relationship inverts: the page background is dark and the card
        surface is lighter. A token named <code>color/surface/card</code>{" "}
        handles both modes through Figma variable modes. A hardcoded{" "}
        <code>#FFFFFF</code> card surface requires manual updates in every
        dark-mode frame. Figma&rsquo;s Shirley Miao (2022) describes exactly
        this problem in Figma&rsquo;s own dark mode build: the absence of
        semantic tokens at the start of the project meant 5,100 color variables
        had to be retooled in &ldquo;Dark Mode Week.&rdquo;
      </p>

      <AnchorHeading as="h2" id="8-modals-and-overlays">
        8. Modals and overlays
      </AnchorHeading>
      <p>
        A modal is an interruption. It removes the user from their current
        context and demands attention before they can continue. That cost is
        worth paying when the task requires focused attention or a binary
        decision. It is not worth paying when the content is primarily
        informational, when the task is long, or when the user initiated a
        navigation action.
      </p>
      <p>
        The three contexts where a modal earns its cost:
      </p>
      <ol>
        <li>
          <strong>Destructive confirmation.</strong> Deleting data, revoking
          access, canceling a subscription. The modal forces acknowledgment
          before an irreversible action. The confirm button must be visually
          distinct (typically a destructive red) and the cancel button must be
          equally prominent.
        </li>
        <li>
          <strong>Focused task on a preserved background.</strong> Adding an
          item to a list, editing a record, uploading a file. The user initiated
          a bounded task and will return to the background context when done.
          The modal makes the task surface-level without navigating away.
        </li>
        <li>
          <strong>Short decision that requires context from the page.</strong>{" "}
          Moving a file, assigning a user, selecting a date. The user needs to
          see the background page to make the decision. A new page would lose
          that context.
        </li>
      </ol>
      <p>
        A modal component has three structural layers: a backdrop (full-viewport
        semi-transparent overlay, separate component), a container (white or
        surface background, rounded corners, shadow, max-width 480px for
        desktop), and three internal sections (header with title and close
        button, scrollable body, action row with primary and secondary buttons).
        The action row is right-aligned on desktop: primary action rightmost,
        secondary to its left. This places the confirm button in the lower-right
        corner where the user&rsquo;s eye arrives after reading the modal content.
      </p>

      <AnchorHeading as="h2" id="9-desktop-and-mobile-consistency">
        9. Desktop and mobile: one token set, two layouts
      </AnchorHeading>
      <p>
        The week&rsquo;s third outcome asks you to design for both desktop and
        mobile with consistent hierarchy and shared tokens. The operative phrase
        is &ldquo;shared tokens.&rdquo; You do not need two component libraries.
        You need one token set and two layout strategies.
      </p>
      <p>
        Tokens are screen-size agnostic. A semantic color token applies
        identically on a 375px mobile frame and a 1440px desktop frame. A type
        scale token for body text (16px, 1.5 line-height) reads the same. The
        only tokens that sometimes change between breakpoints are spacing tokens:
        section padding that is 64px on desktop may be 24px on mobile, and
        component padding that is 24px on desktop may be 16px on mobile.
      </p>
      <p>
        Navigation patterns change between breakpoints because the same
        physical space does not exist on mobile. A sidebar navigation on
        desktop becomes a bottom tab bar on mobile. This is not a different
        product; it is the same information architecture adapted to the
        available chrome. Design both versions as component instances, not
        as separate drawn shapes, so that a navigation label change propagates
        to both breakpoints.
      </p>
      <p>
        The most common mobile layout failure for builders coming from desktop
        design is tap target size. WCAG 2.5.5 recommends 44x44px minimum tap
        targets. A 24px icon button that works on desktop (where users click
        with a precise pointer) fails on mobile (where users tap with an
        imprecise finger). Build tap target size into your icon button component
        as a minimum-height constraint, not as a post-hoc rule applied during
        QA.
      </p>

      <AnchorHeading as="h2" id="10-worked-example">
        10. A worked example: building the sign-in screen from components
      </AnchorHeading>
      <p>
        Here is a concrete sequence for building a sign-in screen from a
        component library that does not yet exist. The sequence follows the
        atomic design order: tokens, molecules, organisms, template.
      </p>
      <p>
        <strong>Step 1: verify tokens exist.</strong> Before touching any
        screen, confirm your Figma file has: a color collection with at minimum
        <code>color/surface/page</code>, <code>color/surface/card</code>,{" "}
        <code>color/text/primary</code>, <code>color/text/secondary</code>,{" "}
        <code>color/interactive/primary/default</code>,{" "}
        <code>color/interactive/primary/hover</code>,{" "}
        <code>color/status/error</code>; a type style for each step on your
        scale (heading/lg, heading/md, body/md, label/md, caption/sm); and
        spacing tokens for space-2 (8px) through space-8 (32px).
      </p>
      <p>
        <strong>Step 2: build the input molecule.</strong> Create a text input
        component. Add a State variant property with Default, Focused, Error,
        and Disabled values. Apply token-referenced colors to the border, label,
        and helper text layers. Verify the error state visually: red border, red
        helper text, no change to label.
      </p>
      <p>
        <strong>Step 3: build the button molecule.</strong> Create a button
        component. Add Hierarchy (Primary, Secondary) and State (Default,
        Hover, Disabled, Loading) variant properties. The loading variant
        replaces the label with a spinner. Fix the button width to prevent
        collapse on loading state.
      </p>
      <p>
        <strong>Step 4: assemble the sign-in organism.</strong> Create a
        sign-in form organism: a card component instance, two input instances
        (email and password), a primary button instance, and a ghost text link
        for password recovery. Use auto-layout with space-4 (16px) gaps. The
        organism is not the screen; it is the form section that will sit inside
        a screen frame.
      </p>
      <p>
        <strong>Step 5: lay out the sign-in screen template.</strong> Create a
        1440px desktop frame with the surface/page color token as background.
        Center the sign-in organism horizontally and place it at roughly 35% of
        the vertical height (slightly above center reads better than dead
        center). Add your logo or wordmark above the form. This is the template.
      </p>
      <p>
        <strong>Step 6: apply real content to produce the page.</strong> Replace
        placeholder labels with real field labels. Replace the placeholder
        button text with your actual CTA copy. Add a product name or tagline
        above the form if your sign-in screen is also a first-impression surface
        for new users. The template becomes a page.
      </p>
      <p>
        Total working time for a first sign-in screen built this way: roughly
        90 minutes for the first pass through all six steps. A second sign-in
        screen in a different product takes 20 minutes because steps 1-3 are
        already done.
      </p>

      <AnchorHeading as="h2" id="11-exercises">11. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          Open three apps you use daily. For each one, identify: which
          navigation pattern it uses (sidebar, top bar, bottom tabs, or hybrid),
          how many top-level destinations the navigation exposes, and whether the
          active state is visually distinct enough to pass WCAG 1.4.11 (3:1
          contrast for non-text elements). Write your findings as a three-row
          table. Which pattern is most common in your set? What does that tell
          you about the primary device context of those products?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Find the empty state in a product you use. Does it include all three
          required elements: a reason the area is empty, a headline directing
          the user, and a primary call-to-action? If any element is missing,
          redesign the empty state in Figma with all three. If all three are
          present, identify which element is weakest and propose a revision.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Build a text input component in Figma with four state variants:
          Default, Focused, Error, and Disabled. Use your semantic color tokens
          (not hardcoded hex values) for every fill and stroke. For the error
          state, include a helper text layer below the input that reads
          &ldquo;This field is required.&rdquo; Check that the error border color
          passes WCAG AA (4.5:1) against the page background for the label text,
          and 3:1 for the border stroke itself.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Frost (2016) argues that the move from template to page is where
          design problems surface. Take a sign-in template you have seen or
          built and replace all placeholder content with real content for your
          own product. What breaks? List at minimum two things that worked at
          placeholder length but failed with your real copy or real product
          name.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Design an error state for a form submission that failed because the
          server was unavailable. The error must include what went wrong, why it
          happened, and what the user should do next. Then design the same error
          state for a form submission that failed because the user&rsquo;s
          credit card was declined. How do the two designs differ? Should they
          use the same component with different content, or different components
          with different visual weight?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="12-going-deeper">12. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section worksheet asks you to
          build a complete five-screen flow in Figma using a component library
          you assemble during the session. Bring your token file from weeks 3-5
          so you can reference it.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers navigation patterns
          and the five required screens in more depth, with real-world examples
          of each screen type.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers the component system
          in detail: building the button, input, card, and modal from scratch.
        </li>
        <li>
          <strong>HW 3 due this week.</strong> Your full landing page design
          is due. The component library you build in section this week becomes
          the starting point for the capstone.
        </li>
        <li>
          <strong>Capstone out this week.</strong> The launch package
          assignment includes five app screens as a required deliverable. The
          five screens you build in section are the first draft of that
          deliverable.
        </li>
        <li>
          <strong>Week 8.</strong> Brand identity builds on the component
          system: your wordmark and logo system will need to coexist with the
          UI components you define this week.
        </li>
      </ul>

      <Takeaways>
        <li>
          Design systems are built bottom-up: tokens first, components second,
          screens third. Starting from screens and working backward produces
          inconsistency that costs time to fix on every subsequent screen.
        </li>
        <li>
          Every app needs five screens before launch: sign-in, empty state,
          primary task, success, and error. Designing all five reveals
          constraints that single-screen design hides.
        </li>
        <li>
          Loading and error states belong inside component variants, not in
          separate frames. A card with a skeleton loading variant is a complete
          component. A card that requires a separate skeleton frame is two
          components drifting apart.
        </li>
        <li>
          Semantic color tokens are the difference between a dark mode that
          takes one afternoon and a dark mode that takes a week. Token the card
          surface, button states, and form borders now. Hardcoded values compound
          into a significant refactor later.
        </li>
        <li>
          Desktop and mobile share tokens and components. What changes between
          breakpoints is the navigation pattern and occasionally the spacing
          scale. Build both breakpoints from the same library, not from
          duplicated frames.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Frost, Brad.{" "}
          <em>Atomic Design</em>, chapter 2. Brad Frost Web, 2016.{" "}
          <a href="https://atomicdesign.bradfrost.com/chapter-2/">
            atomicdesign.bradfrost.com/chapter-2/
          </a>
          . Defines the five levels of atomic design (atoms, molecules,
          organisms, templates, pages) and explains why the hierarchy is a
          mental model for traversing between abstract tokens and concrete
          screens, not a strict build order.
        </p>
        <p>
          Figma. &ldquo;Components, Styles, and Shared Library Best
          Practices.&rdquo; Figma, 2023.{" "}
          <a href="https://www.figma.com/best-practices/components-styles-and-shared-libraries/">
            figma.com/best-practices/components-styles-and-shared-libraries/
          </a>
          . Covers naming conventions, nesting, publishing, and managing
          breaking changes in team libraries. The authoritative reference for
          building a component library that survives real-world use.
        </p>
        <p>
          Figma. &ldquo;Design an Interactive Button Component.&rdquo; Figma
          Learn, 2023.{" "}
          <a href="https://help.figma.com/hc/en-us/articles/20953528101783-Design-an-interactive-button-component">
            help.figma.com/hc/en-us/articles/20953528101783
          </a>
          . Step-by-step project for building a button with auto-layout, variant
          properties, and all five interaction states. The most direct
          preparation for section this week.
        </p>
        <p>
          Figma. &ldquo;Introduction to Design Systems.&rdquo; Figma Learn,
          2023.{" "}
          <a href="https://help.figma.com/hc/en-us/sections/14548397990423-Introduction-to-design-systems">
            help.figma.com/hc/en-us/sections/14548397990423
          </a>
          . Three-lesson official course covering what design systems are, the
          difference between styles, variables, and tokens, and how to build a
          reusable component library.
        </p>
        <p>
          Miao, Shirley. &ldquo;Illuminating Dark Mode.&rdquo; Figma
          Engineering Blog, 2022.{" "}
          <a href="https://www.figma.com/blog/illuminating-dark-mode/">
            figma.com/blog/illuminating-dark-mode/
          </a>
          . Describes how Figma built their dark mode using semantic color tokens
          with five dimensions. A practitioner case study for why semantic
          tokens matter.
        </p>
        <p>
          Wathan, Adam and Steve Schoger. &ldquo;Labels Are a Last
          Resort.&rdquo; Refactoring UI, 2019.{" "}
          <a href="https://refactoringui.com/previews/labels-are-a-last-resort/">
            refactoringui.com/previews/labels-are-a-last-resort/
          </a>
          . Argues that format, context, and positioning can replace explicit
          labels in many UI contexts. Informs the empty state and form design
          sections of this reading.
        </p>
        <p>
          Khamatov, Adel. &ldquo;Color Mechanics in UI Kits.&rdquo; Smashing
          Magazine, 2023.{" "}
          <a href="https://www.smashingmagazine.com/2023/04/color-mechanics-ui-kits/">
            smashingmagazine.com/2023/04/color-mechanics-ui-kits/
          </a>
          . Examines how Material UI and Fluent UI separate color palettes from
          color schemes. Background on the primitive/semantic/component token
          layer structure.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk07ReadingSearchBody =
  "app UI screens states component systems atomic design navigation sidebar top bar bottom tabs five screens sign-in empty state primary task success error loading skeleton spinner button input card modal variants interaction states semantic color tokens desktop mobile breakpoints Frost Figma Refactoring UI Week 7 reading design for builders founders engineers";
