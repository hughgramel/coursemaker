import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk01Reading() {
  return (
    <ReadingPage
      id="wk01"
      title="Week 1: Figma as your design environment"
      kicker="Design for Builders: Ship Beautiful Products as a Founder · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the four mechanics that make Figma tractable for
          engineers who already think in components and layout: the frame as
          a layout container, auto-layout as a CSS flexbox equivalent,
          components and variants as a prop system for design, and the
          difference between styles (static values) and variables (dynamic,
          mode-aware tokens). By the end you will be able to build a
          multi-screen file with no absolute positioning, extract a repeated
          element into a reusable component, and make an informed decision
          about when to reach for a style versus a variable.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> None. This is week 1. You
          need a Figma account (the free plan is sufficient) and enough
          comfort with CSS to know what <code>display: flex</code>,{" "}
          <code>gap</code>, and <code>padding</code> do.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-the-frame">
        1. The frame: Figma&rsquo;s layout primitive
      </AnchorHeading>
      <p>
        Every layout decision in Figma flows through one object: the{" "}
        <strong>frame</strong>. A frame is a rectangular container with
        explicit dimensions, its own background fill, clipping behavior, and
        the ability to host auto-layout. It maps to a <code>&lt;div&gt;</code>{" "}
        in HTML more closely than anything else in Figma&rsquo;s layer panel.
      </p>
      <p>
        The most common confusion for new Figma users is the difference between
        a frame and a <strong>group</strong>. A group is a selection shortcut:
        it has no layout rules of its own, it does not clip its contents, and
        it cannot use auto-layout. Its bounds are calculated from its children
        and cannot be set independently. You reach for a group when you want to
        move several layers together; you reach for a frame when you want to
        define a container with layout behavior.
      </p>
      <p>
        Top-level frames are the screens of your design. When you choose a
        device preset from the frame tool (F), Figma creates a frame sized to
        that device: 390 &times; 844 for an iPhone 14, 1440 &times; 900 for a
        desktop viewport. Everything inside a screen is a nested frame or a
        leaf element (text, vector, image). The hierarchy is:
        screen frame &rarr; section frames &rarr; component frames &rarr; text
        and shapes.
      </p>
      <p>
        Frames can clip their children (the default behavior) or let them
        overflow. Clipping is equivalent to <code>overflow: hidden</code>. You
        will want clipping on image containers where the image should not bleed
        outside its box, and you will want to turn it off on menus or tooltips
        that extend beyond their parent frame. The setting lives in the design
        panel under &ldquo;Clip content.&rdquo;
      </p>

      <AnchorHeading as="h2" id="2-auto-layout">
        2. Auto-layout: flexbox in Figma
      </AnchorHeading>
      <p>
        Auto-layout is Figma&rsquo;s implementation of a flex container. The
        mapping to CSS is nearly one-to-one (Figma, 2023):
      </p>
      <pre>{`Figma                        CSS
-----------                  ------
Direction: Horizontal     -> flex-direction: row
Direction: Vertical       -> flex-direction: column
Gap                       -> gap
Horizontal padding        -> padding-left / padding-right
Vertical padding          -> padding-top / padding-bottom
Align items: Start        -> align-items: flex-start
Align items: Center       -> align-items: center
Align items: End          -> align-items: flex-end
Wrap                      -> flex-wrap: wrap`}</pre>
      <p>
        You add auto-layout to any selected frame or group with Shift+A. The
        frame immediately becomes a flex container. Its children become flex
        items.
      </p>
      <p>
        The one concept that trips up developers is Figma&rsquo;s{" "}
        <strong>resizing modes</strong> for both the container and its children.
        There are four:
      </p>
      <ul>
        <li>
          <strong>Fixed</strong>: an explicit pixel dimension. Equivalent to
          setting <code>width: 320px</code> or <code>height: 48px</code>. The
          frame or child does not grow or shrink regardless of content.
        </li>
        <li>
          <strong>Hug</strong>: the frame shrinks to exactly contain its
          children. On the main axis this is <code>width: fit-content</code>;
          on the cross axis with auto-layout enabled it is the natural height
          of the content stack.
        </li>
        <li>
          <strong>Fill</strong>: the frame expands to fill its parent. This is{" "}
          <code>flex: 1</code> in CSS. It only applies to children inside an
          auto-layout parent; a top-level frame cannot use Fill.
        </li>
        <li>
          <strong>Min/Max (constrained fill)</strong>: Fill with explicit lower
          and upper bounds. Equivalent to{" "}
          <code>flex: 1; min-width: 200px; max-width: 480px</code>.
        </li>
      </ul>
      <p>
        In practice, most layout bugs in Figma come from a child that is Fixed
        when it should be Fill, or a parent that is Hug when it should be Fixed.
        The rule of thumb: leaf elements (text, icons) should usually Hug;
        container elements should Fill their parent if they are one of several
        siblings, or be Fixed if they need a specific size that does not depend
        on siblings.
      </p>

      <Callout title="Auto-layout and absolute positioning">
        <p>
          Figma does support absolute positioning inside an auto-layout frame:
          hold Cmd (Mac) or Ctrl (Windows) while dragging a child, and it
          detaches from the flow and becomes position-absolute relative to the
          parent. Use this for overlays, badges, and tooltips that sit on top
          of the normal flow. Avoid it for structural layout: it creates frames
          that break when content changes, exactly as absolute positioning does
          in CSS.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-components-and-variants">
        3. Components, variants, and component properties
      </AnchorHeading>
      <p>
        A <strong>component</strong> in Figma is a master definition that you
        create once and reuse any number of times as instances. The relationship
        maps directly to a React component: the main component is the function
        definition, each instance is a call to that function. Change the main
        component and all instances update. Override a property on an instance
        and that override persists through future main-component changes, unless
        the underlying property is removed.
      </p>
      <p>
        Frost (2016) describes this layered model in terms of atomic design:
        atoms (a single button, a single icon) combine into molecules (an input
        with a label and an error message), which combine into organisms (a
        signup form). The same hierarchy appears in Figma as nested components.
        An icon component sits inside a button component, which sits inside a
        form component. The nesting works in Figma exactly as it works in React:
        inner components are independent and reusable; their composition into
        larger structures is a separate concern.
      </p>
      <p>
        <strong>Variants</strong> are named, grouped alternatives inside one
        component. Where React uses props to produce different renderings, Figma
        uses variants. A button with <code>size</code> (sm, md, lg) and{" "}
        <code>variant</code> (primary, secondary, ghost) produces nine variant
        combinations. In the canvas, they appear as a grid where each axis is
        one property. Selecting an instance and switching its variant in the
        design panel is equivalent to passing a different prop value.
      </p>
      <p>
        Three types of <strong>component properties</strong> handle the cases
        variants cannot:
      </p>
      <ul>
        <li>
          <strong>Boolean property</strong>: shows or hides a specific child
          layer. Use this for optional elements like a leading icon, a trailing
          badge, or a loading spinner.
        </li>
        <li>
          <strong>Text property</strong>: exposes a text layer&rsquo;s content
          as an overridable field in the design panel, without requiring the
          user to enter edit mode. Use this for button labels, card titles, and
          any text that changes per instance.
        </li>
        <li>
          <strong>Instance swap property</strong>: lets the user replace a
          nested component with another component from the same library. Use
          this for icon slots where the icon varies by context.
        </li>
      </ul>
      <p>
        Understanding where the component abstraction breaks is as important as
        knowing how to use it. Figma components have no conditional rendering:
        the equivalent of <code>if (loading) return &lt;Spinner /&gt;</code>{" "}
        requires two variants (default and loading) and a manual variant switch.
        There is no <code>children</code> prop: you cannot pass arbitrary
        content into a component slot. State-based behavior (hover, focus,
        active) requires interactive prototyping connections between variants,
        not CSS pseudo-classes. These limits are not problems to solve in this
        course; they are the boundaries of the abstraction you need to know
        before you design a 50-component library.
      </p>

      <AnchorHeading as="h2" id="4-styles-vs-variables">
        4. Styles vs variables: static values and dynamic tokens
      </AnchorHeading>
      <p>
        Figma has two ways to give a named value to a visual property:{" "}
        <strong>styles</strong> (available since 2018) and{" "}
        <strong>variables</strong> (introduced at Figma Config 2023). They are
        not interchangeable.
      </p>
      <p>
        A style gives a name to a complete set of properties: a fill style
        encodes a color, a text style encodes a font family, size, weight, and
        line height, an effect style encodes a shadow or blur. Applying a style
        to a layer links it to the style definition. Change the style and every
        layer using it updates. Styles are static: a fill style named
        &ldquo;brand/primary&rdquo; always resolves to the same hex value
        regardless of which frame it is in.
      </p>
      <p>
        A variable stores a single value (color, number, string, or boolean)
        in a named collection. The collection can have multiple{" "}
        <strong>modes</strong>: Light and Dark, Desktop and Mobile, English and
        French. When you switch the mode on a frame, every variable inside it
        resolves to its mode-specific value. This is how one-click light-to-dark
        mode works. A variable named <code>color/surface/base</code> resolves
        to <code>#FFFFFF</code> in Light mode and <code>#1A1A1A</code> in Dark
        mode. No layer duplication required (Figma, 2023).
      </p>
      <p>
        Figma (2024) describes a three-layer token model that reflects
        industry practice: primitive tokens (raw values, e.g.{" "}
        <code>blue-500: #3B82F6</code>), semantic tokens (role names, e.g.{" "}
        <code>color-interactive-primary: blue-500</code>), and component tokens
        (scoped to a component, e.g. <code>button-bg-default</code>). The
        primitive layer is a variable collection containing all your raw values.
        The semantic layer is a second collection referencing the primitives.
        Your components reference semantic tokens. When you redesign the palette,
        you change the primitive layer and the semantic layer propagates the
        changes automatically.
      </p>
      <p>
        For week 1, the practical recommendation is: use color styles for your
        palette (they work on the free plan and are sufficient for a starter kit)
        and plan to migrate the most dynamic values to variables when you tackle
        dark mode in week 4. Text styles and effect styles are always styles, not
        variables: Figma variables do not (as of mid-2026) support multi-property
        values like a full text style.
      </p>

      <AnchorHeading as="h2" id="5-file-structure-and-libraries">
        5. File structure and team libraries
      </AnchorHeading>
      <p>
        A Figma file that is easy to work in and easy to hand off follows a
        four-page structure used by most professional teams (Figma, 2023):
      </p>
      <ul>
        <li>
          <strong>Cover</strong>: file title, last-updated date, owner, status
          label (Draft / In Review / Ready for Dev / Archived). The first thing
          anyone sees when they open the file.
        </li>
        <li>
          <strong>Flows</strong>: all screens and in-progress designs. Top-level
          frames named with a consistent pattern: <code>Screen / State</code>,
          e.g. <code>Pricing / Default</code>,{" "}
          <code>Pricing / Annual selected</code>.
        </li>
        <li>
          <strong>Components</strong>: main components before they are published
          to a library. This page holds work-in-progress components and serves
          as the staging area.
        </li>
        <li>
          <strong>Archive</strong>: old designs kept for reference. Moving
          outdated work here rather than deleting it preserves design history
          without cluttering the active flows.
        </li>
      </ul>
      <p>
        A <strong>team library</strong> is a published version of a file&rsquo;s
        components and styles, made available to other files in the same team.
        Publishing is a deliberate act: you choose which changes to include, you
        write a description, and you click Publish. Consumers in other files see
        a &ldquo;review updates&rdquo; notification and choose whether to accept
        them. The Figma best-practices guide (Figma, 2023) recommends treating
        library publishing like releasing a software version: do not rename or
        delete published components without giving consumers a migration window.
        Add the new component alongside the old one, communicate the deprecation,
        and remove the old one in a later release.
      </p>

      <AnchorHeading as="h2" id="6-worked-example">
        6. Worked example: building a three-card feature section
      </AnchorHeading>
      <p>
        This example walks through building the kind of section you will
        encounter in section this week: three feature cards in a horizontal row
        on a 1440px desktop frame. The target layout has a heading above the
        cards, a 32px gap between cards, 48px horizontal padding on the outer
        section, and 24px of vertical padding inside each card.
      </p>
      <p>
        <strong>Step 1: outer section frame.</strong> Create a frame (F) and
        set its width to 1440px. Add auto-layout (Shift+A). Set direction to
        Vertical, vertical padding to 80px, horizontal padding to 48px. Set the
        frame height to Hug so it grows with its content.
      </p>
      <pre>{`Section frame
  direction: vertical
  padding: 80px top/bottom, 48px left/right
  gap: 40px
  width: 1440px (Fixed)
  height: Hug`}</pre>
      <p>
        <strong>Step 2: section heading.</strong> Add a text layer inside the
        section frame. It will be the first child in the vertical flow. Set its
        width to Fill so it stretches across the available width. Set alignment
        to center.
      </p>
      <p>
        <strong>Step 3: cards row frame.</strong> Add a new frame inside the
        section frame. Add auto-layout, set direction to Horizontal, gap to
        32px. Set width to Fill (it should span the full content width) and
        height to Hug. This frame holds the three cards.
      </p>
      <pre>{`Cards row frame
  direction: horizontal
  gap: 32px
  width: Fill
  height: Hug`}</pre>
      <p>
        <strong>Step 4: one card.</strong> Add a frame inside the cards row.
        Add auto-layout, set direction to Vertical, gap to 16px, padding to
        24px on all sides. Set width to Fill (one-third of the row) and height
        to Hug. Add children: an icon frame (Fixed 40 &times; 40), a title text
        (Fill width, Hug height), and a body text (Fill width, Hug height).
      </p>
      <pre>{`Card frame
  direction: vertical
  padding: 24px all sides
  gap: 16px
  width: Fill
  height: Hug

  ├── Icon (Fixed 40x40)
  ├── Title text (Fill width, Hug height)
  └── Body text (Fill width, Hug height)`}</pre>
      <p>
        <strong>Step 5: create a component.</strong> Select the card frame.
        Press Cmd+Alt+K. Name it <code>FeatureCard/Default</code>. Copy the
        main component twice to create two more instances. All three cards are
        now instances of the same component. Change the title text on the main
        component and the name changes. Override the title text on each instance
        to give them distinct labels.
      </p>
      <p>
        <strong>Step 6: resize the section.</strong> Drag the section
        frame&rsquo;s right edge to 1200px. Each card&rsquo;s Fill width
        rebalances: three cards share the new content width equally. The cards
        do not overflow. The text wraps within its Fill-width containers. The
        section height adjusts via Hug. This is auto-layout behaving the way
        a flex row behaves in a browser.
      </p>

      <AnchorHeading as="h2" id="7-exercises">7. Exercises</AnchorHeading>
      <p>Work through these before section this week.</p>

      <Exercise n={1}>
        <p>
          Create a Figma file with a 1440px desktop frame. Inside it, build a
          navigation bar using auto-layout: a logo text on the left, three nav
          links in the center, and a &ldquo;Sign up&rdquo; button on the right.
          The nav bar should stay attached to the top of the frame. How do you
          make the center links expand to fill available space while the logo
          and button stay at their natural sizes? What combination of Fill and
          Hug achieves this?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Build a card component with two boolean properties: one for a leading
          icon (show/hide) and one for a footer link (show/hide). Test all four
          combinations of the two boolean properties. Does the card height
          behave correctly in each case? If not, which resizing setting is wrong
          and why?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Create a color style named <code>brand/primary</code> and apply it to
          three rectangles. Now create a color variable in a collection named
          <code>Primitive</code> with the same hex value, and a second variable
          in a collection named <code>Semantic</code> that references the
          primitive. Apply the semantic variable to three more rectangles. Change
          the primitive value. Which rectangles update? What does this tell you
          about the difference between editing a style and editing a primitive
          variable?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Using the four-page file structure from section 5, set up a file for
          your product. Write a cover page with your file title, today&rsquo;s
          date, and a status label. On the flows page, add three named frames:
          Home (Desktop), Pricing (Desktop), and Sign-up (Desktop). Leave them
          empty for now. How does having named frames in a structured file change
          the way you think about your design work?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Frost (2016) argues that a design system is not a deliverable but a
          practice: the ongoing work of maintaining a shared vocabulary of
          components. Identify three places where your current product (or a
          product you use) has inconsistent instances of the same UI element
          (three slightly different button styles, two different card layouts for
          the same content type). How would extracting each into a component
          reduce that inconsistency?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="8-going-deeper">8. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section worksheet asks you to
          rebuild a real landing-page section pixel-for-pixel using auto-layout
          and components. Use the step-by-step structure from section 6 of this
          reading as a guide.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers frames, auto-layout,
          components, and styles vs variables with live demos in Figma.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers file structure, team
          libraries, and plugins. The keyboard shortcuts from that lecture will
          speed up the section worksheet.
        </li>
        <li>
          <strong>HW 1 (out this week).</strong> Build a 12-component Figma
          starter kit for your product. This reading is the direct preparation
          for that assignment: every concept in sections 2-5 applies directly.
        </li>
      </ul>

      <Takeaways>
        <li>
          Frames are layout containers. Groups are selection shortcuts. Use
          frames for anything that needs auto-layout, clipping, or defined
          dimensions.
        </li>
        <li>
          Auto-layout maps directly to CSS flexbox. The four resizing modes
          (Fixed, Hug, Fill, Min/Max) correspond to explicit sizing,
          fit-content, flex: 1, and constrained flex respectively.
        </li>
        <li>
          Components with variants and component properties give you a prop
          system for design. The abstraction mirrors React components closely
          but does not support conditional rendering, a children prop, or
          CSS pseudo-class state.
        </li>
        <li>
          Styles are static named values. Variables are dynamic and mode-aware.
          Use styles for your type scale and effect styles; use variables for
          color tokens that need to change across light and dark modes.
        </li>
        <li>
          A four-page file structure (cover, flows, components, archive) and a
          consistent frame-naming convention are the minimum habits that make a
          Figma file usable by anyone other than you.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Figma. &ldquo;Guide to Auto Layout.&rdquo; 2023.{" "}
          <a href="https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout">
            help.figma.com: Guide to auto layout
          </a>
          . Official reference covering flow direction, padding, gap, and all
          four resizing modes. Includes interactive examples.
        </p>
        <p>
          Figma. &ldquo;Introduction to Design Systems.&rdquo; 2023.{" "}
          <a href="https://help.figma.com/hc/en-us/sections/14548397990423-Introduction-to-design-systems">
            help.figma.com: Introduction to design systems
          </a>
          . Three-lesson course covering styles, variables, and component
          library construction.
        </p>
        <p>
          Figma. &ldquo;Components, Styles, and Shared Library Best
          Practices.&rdquo; 2023.{" "}
          <a href="https://www.figma.com/best-practices/components-styles-and-shared-libraries/">
            figma.com: components, styles, and shared library best practices
          </a>
          . Official guide to naming conventions, publishing workflow, and
          managing breaking changes in a team library.
        </p>
        <p>
          Figma. &ldquo;Tokens, Variables, and Styles.&rdquo; 2023.{" "}
          <a href="https://www.youtube.com/watch?v=JyCmacSyDY4">
            YouTube: Tokens, Variables, and Styles (Figma)
          </a>
          . Twenty-minute video explaining the difference between styles and
          Config 2023 variables, including mode switching for light/dark mode.
        </p>
        <p>
          Figma. &ldquo;Design Tokens: How to Sync Design and Code in
          Figma.&rdquo; 2024.{" "}
          <a href="https://www.figma.com/resource-library/design-tokens/">
            figma.com: design tokens resource library
          </a>
          . Explains the primitive/semantic/component token layer model and how
          variables export to CSS custom properties.
        </p>
        <p>
          Figma. &ldquo;Lesson 3: Build Your Design System.&rdquo; 2023.{" "}
          <a href="https://help.figma.com/hc/en-us/articles/14548865734679-Lesson-3-Build-your-design-system">
            help.figma.com: Lesson 3 &mdash; Build your design system
          </a>
          . Hands-on project for building color styles, text styles, and a
          component library from scratch.
        </p>
        <p>
          Frost, Brad. &ldquo;Atomic Design Methodology.&rdquo; Chapter 2.
          2016.{" "}
          <a href="https://atomicdesign.bradfrost.com/chapter-2/">
            atomicdesign.bradfrost.com: chapter 2
          </a>
          . Foundational treatment of atoms, molecules, and organisms as a
          mental model for component hierarchies in design systems.
        </p>
        <p>
          Simon, Gary (DesignCourse). &ldquo;Figma&rsquo;s Updated Auto-Layout:
          Tutorial with Responsive Components.&rdquo; 2022.{" "}
          <a href="https://www.youtube.com/watch?v=3-Vv3HLX2OU">
            YouTube: Figma&rsquo;s Updated Auto-Layout (DesignCourse)
          </a>
          . Seventeen-minute walkthrough building a card component with
          auto-layout and variants, aimed at developers with a CSS flexbox
          background.
        </p>
        <p>
          Ziroll, Bob (Scrimba). &ldquo;Intro to Figma for Developers.&rdquo;
          2022.{" "}
          <a href="https://www.youtube.com/watch?v=ybc2gkvjMDs">
            YouTube: Intro to Figma for Developers (Scrimba)
          </a>
          . Thirty-minute crash course mapping every Figma concept to its code
          equivalent, aimed at developers opening Figma for the first time.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk01ReadingSearchBody =
  "Figma frame group auto-layout flexbox direction gap padding hug fill fixed min max resizing component variant component properties boolean text instance swap styles variables design tokens primitive semantic team library publishing file structure page organization cover flows components archive starter kit Week 1 reading design for builders founders engineers";
