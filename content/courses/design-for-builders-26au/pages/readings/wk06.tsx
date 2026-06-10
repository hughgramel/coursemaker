import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk06Reading() {
  return (
    <ReadingPage
      id="wk06"
      title="Week 6: the anatomy of a converting landing page"
      kicker="Design for Builders: Ship Beautiful Products as a Founder &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading gives you a reusable framework for composing a landing
          page that converts visitors into customers. By the end, you can name
          and place every section of a standard SaaS landing page, compose a
          hero section with correct visual hierarchy, and diagnose why a specific
          hero section fails to convert. The reading directly prepares you for
          the section critique and for HW3, where you design a full landing page
          for your own product.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Type scale and modular
          typography (Week 3), color ramp and semantic color tokens (Week 4),
          spacing scale and 8-point grid (Week 5), component variants and
          auto-layout (Week 1). This week applies all of those in a single
          composition context.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-the-standard-anatomy">
        1. The standard anatomy
      </AnchorHeading>
      <p>
        Most converting SaaS landing pages use the same five-section structure.
        The order is not arbitrary: each section handles one objection the
        visitor carries as they scroll. Understanding what each section must
        accomplish tells you exactly what to design and what to leave out.
      </p>
      <p>
        The five sections, in canonical order:
      </p>
      <ol>
        <li>
          <strong>Hero.</strong> States the outcome the product delivers, for
          whom, and what to do next. Handles the first objection: &ldquo;what
          is this?&rdquo;
        </li>
        <li>
          <strong>Social proof band.</strong> Shows logos of known customers or
          a short testimonial pull-quote. Handles: &ldquo;has anyone I trust
          used this?&rdquo;
        </li>
        <li>
          <strong>Features (or benefits) section.</strong> Explains how the
          product delivers the outcome. Usually three columns. Handles:
          &ldquo;how does it actually work?&rdquo;
        </li>
        <li>
          <strong>FAQ or objection section.</strong> Answers the three or four
          questions that prevent purchase. Handles: &ldquo;what&rsquo;s the
          catch?&rdquo;
        </li>
        <li>
          <strong>Bottom CTA.</strong> Repeats the primary call to action for
          visitors who scrolled the whole page. Handles: &ldquo;I&rsquo;m
          convinced, now what?&rdquo;
        </li>
      </ol>
      <p>
        Segall (Flux Academy, 2023) describes the mental model as a series of
        thresholds: each section must get the visitor past one threshold before
        the next section has any leverage. A visitor who is not yet past
        &ldquo;what is this?&rdquo; will not be moved by your feature triplet.
        The hero must do its job before anything else matters.
      </p>

      <AnchorHeading as="h2" id="2-the-hero-section">
        2. The hero section
      </AnchorHeading>
      <p>
        The hero is the one section every visitor sees. Eye-tracking studies
        show that visitors scan the hero in an F-pattern: across the headline,
        then down the left edge. Your headline occupies the first horizontal
        stroke of the F. Your CTA sits near the fold, catching the eye before
        the visitor decides whether to continue.
      </p>
      <p>
        Three hero layouts dominate SaaS products, each with different strengths:
      </p>
      <p>
        <strong>Centered text.</strong> Headline, subhead, and CTA stacked on
        a centered axis. Optional product screenshot or illustration below the
        fold. Works best for products with a short, high-confidence headline
        that needs no visual reinforcement. The centered layout gives the
        headline maximum visual weight because nothing competes with it on
        either side.
      </p>
      <p>
        <strong>Text-left, product-right split.</strong> Copy column on the
        left, product screenshot or UI on the right. The split layout answers
        &ldquo;what is this?&rdquo; with copy and &ldquo;what does it look
        like?&rdquo; with imagery simultaneously. Works best when the product
        UI is distinctive enough to be immediately recognizable as different
        from competitors.
      </p>
      <p>
        <strong>Full-bleed product shot.</strong> The product screenshot fills
        the entire hero, with copy overlaid or adjacent. Works best when the
        product visual is the most persuasive element, often for design tools,
        dashboards, or consumer apps with high visual appeal.
      </p>
      <p>
        Schoger (CSS Day, 2019) demonstrates in his live makeovers that the
        most common hero failure is not poor copy, it is poor hierarchy. The
        headline, subhead, and CTA compete at equal visual weight because the
        designer treated them as equal elements. They are not equal. The
        headline should be unmistakably dominant. The subhead should be
        readable but clearly secondary. The CTA should be the only interactive
        element that registers as a button.
      </p>

      <AnchorHeading as="h2" id="3-the-headline">
        3. Writing the headline as a design decision
      </AnchorHeading>
      <p>
        A landing-page headline is a design element as much as it is a copy
        element. Its word count determines how many type sizes are available to
        you. A seven-word headline can occupy a single line at 64px and
        dominate the page. A twenty-word headline forces either a smaller size,
        which reduces visual weight, or awkward line breaks, which slow reading.
      </p>
      <p>
        The content rule that makes headlines work in design: state a specific
        outcome for a specific customer. &ldquo;Ship faster&rdquo; is not a
        specific outcome. &ldquo;Ship your first feature in a day, not a
        sprint&rdquo; is. The specificity does two things: it tells the right
        customer they are in the right place, and it gives you a concrete visual
        anchor for the rest of the hierarchy. Every other element on the page
        supports that specific claim.
      </p>
      <p>
        When you write a headline for your Figma file, write three variants
        first. Measure each one in your type scale. A variant that fits cleanly
        at your h1 size with good line breaks is a better design candidate than
        a more clever headline that wraps awkwardly at three lines.
      </p>

      <Callout title="The subhead as proof">
        <p>
          The subhead has one job: answer the implicit question the headline
          raises. If the headline says &ldquo;Ship your first feature in a day,
          not a sprint,&rdquo; the implicit question is &ldquo;how?&rdquo; or
          &ldquo;why should I believe that?&rdquo; The subhead answers in one
          sentence. It should not restate the headline, it should advance it.
          Subheads that describe the product category (&ldquo;A modern project
          management tool for teams&rdquo;) instead of proving the headline are
          missed opportunities.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-cta-design">
        4. CTA design: button, copy, and context
      </AnchorHeading>
      <p>
        The call-to-action button is the only element on the page with a single
        measurable job: get clicked. Every design decision about the button
        should serve that job.
      </p>
      <p>
        <strong>Button copy.</strong> Generic copy (&ldquo;Get started,&rdquo;
        &ldquo;Sign up,&rdquo; &ldquo;Learn more&rdquo;) tells the visitor
        nothing about what happens next. Specific copy names the action
        (&ldquo;Start your free trial,&rdquo; &ldquo;See a live
        demo,&rdquo; &ldquo;Build your first page&rdquo;). Specific copy also
        reduces anxiety: the visitor knows what clicking commits them to.
        Wathan and Schoger&rsquo;s argument in &ldquo;Labels Are a Last
        Resort&rdquo; (2019) applies here: if your button label requires the
        surrounding context to be understood, the button copy is doing too
        little work.
      </p>
      <p>
        <strong>Button color.</strong> The primary CTA should use your primary
        accent color from the color ramp you built in Week 4. No other
        interactive element on the hero should share that color. If your
        navigation links, secondary CTAs, or any decorative element uses the
        same hue, the button&rsquo;s visual singularity disappears.
      </p>
      <p>
        <strong>Button size and padding.</strong> A button sized on an 8-point
        grid with 16px vertical padding and 32px horizontal padding sits at a
        height of roughly 48-56px, which is the touch-safe minimum and also
        the size that reads as a primary action at desktop scale. Smaller
        buttons read as secondary. Larger buttons can overwhelm short headlines.
        Measure the button against the headline: the button&rsquo;s visual
        weight should be second after the headline, not equal to it.
      </p>
      <p>
        <strong>Surrounding whitespace.</strong> Schoger&rsquo;s CSS Day (2019)
        makeovers consistently show that the most underused lever for CTA
        visibility is whitespace around the button. A button surrounded by
        other elements at 8px spacing reads as one element in a group. The same
        button with 48px of clear space above and below reads as the primary
        action on the page. Add the whitespace before you change the color.
      </p>

      <AnchorHeading as="h2" id="5-social-proof-band">
        5. The social proof band
      </AnchorHeading>
      <p>
        The social proof band sits immediately below the hero fold. Its job is
        to answer the first objection a skeptical visitor carries after reading
        the hero: &ldquo;has anyone I recognize used this?&rdquo; The band
        does not need to be large. Five to eight logos in a horizontal row at
        low opacity (40-60% opacity on a white background) communicates the
        claim without competing with the hero above it.
      </p>
      <p>
        Design rules for the band:
      </p>
      <ul>
        <li>
          Use grayscale logos, not color. Color logos compete visually with
          each other and with the hero. Grayscale keeps the band as a single
          quiet band of credibility rather than a distracting row of branded
          colors.
        </li>
        <li>
          Maintain equal visual weight across logos by constraining them to a
          fixed height (24-32px) rather than a fixed width. A wide wordmark at
          32px height and a small mark at 32px height read as equally weighted.
        </li>
        <li>
          Add a one-line label above the logos: &ldquo;Trusted by
          teams at&rdquo; or &ldquo;Used by builders at&rdquo;. The label tells
          the visitor what to make of the logos; without it, a visitor
          unfamiliar with the brands cannot extract meaning.
        </li>
      </ul>
      <p>
        If you do not yet have recognizable customer logos, use testimonial
        pull-quotes instead. One quote, attributed to a real name and job title,
        with the customer&rsquo;s photo, outperforms a band of unknown logos.
        The quote must describe a specific outcome, not give general praise. A
        quote that says &ldquo;This changed how our team ships&rdquo; with no
        specifics is nearly worthless. A quote that says &ldquo;We cut our
        sprint planning time from four hours to forty minutes in the first
        week&rdquo; is a claim the visitor can evaluate.
      </p>

      <AnchorHeading as="h2" id="6-feature-triplets">
        6. Feature triplets
      </AnchorHeading>
      <p>
        Three columns is the dominant layout for feature sections because it
        maps to the natural reading width of a desktop browser, distributes
        visual weight evenly, and creates a sense of completeness (three items
        read as a list; two items read as a choice; four or more items read as
        a catalog). Each column has an icon, a short heading, and one to two
        sentences of body copy.
      </p>
      <p>
        Design rules for the triplet:
      </p>
      <p>
        <strong>Icon choice.</strong> Use icons from a single set at a single
        size. Mixing Lucide icons at 24px with Phosphor icons at 20px creates
        inconsistency that the eye registers even if the visitor cannot name it.
        The icons should be outline style at equal stroke weight. Filled icons
        read as heavier and compete with the feature heading. At 24-32px the
        icon communicates category, not detail. Pick icons that suggest the
        concept, not icons that literally represent it.
      </p>
      <p>
        <strong>Heading copy.</strong> Feature headings should name a benefit,
        not a capability. &ldquo;Automated scheduling&rdquo; is a capability.
        &ldquo;Your week plans itself&rdquo; is a benefit. The heading must
        be short enough to fit on one line at your h4 or h5 type scale so the
        three columns maintain equal horizontal rhythm.
      </p>
      <p>
        <strong>Body copy discipline.</strong> Two sentences maximum. The first
        sentence extends the heading with a specific claim. The second sentence
        names the consequence or the customer context. Anything beyond two
        sentences belongs in a feature detail page, not the landing page.
      </p>
      <p>
        Spacing between columns uses a column gap of 32-48px (4-6 grid units)
        and vertical rhythm between the icon, heading, and body of 8-16px each.
        The entire triplet section should have 64-80px of top and bottom
        padding to read as a distinct section rather than content that runs
        into the hero above or the FAQ below.
      </p>

      <AnchorHeading as="h2" id="7-the-bottom-cta">
        7. The bottom CTA
      </AnchorHeading>
      <p>
        The bottom CTA is the page&rsquo;s closing argument. A visitor who
        scrolled the full page has passed every section and is either convinced
        or close to it. The bottom CTA should be the simplest and most direct
        element on the page: a short headline that restates the outcome, the
        same primary CTA button from the hero, and nothing else.
      </p>
      <p>
        Common mistakes:
      </p>
      <ul>
        <li>
          Repeating the hero copy verbatim. The visitor has already read it.
          The bottom CTA should use a shorter version of the outcome statement,
          not a copy-paste of the hero headline.
        </li>
        <li>
          Adding secondary links, a newsletter form, and social media icons in
          the same section. A bottom CTA with five possible actions has the same
          problem as a menu with twelve items: too many choices produce no
          choice. One button.
        </li>
        <li>
          Designing the bottom CTA as an afterthought with inconsistent spacing.
          The bottom CTA should have the same vertical padding as the hero. If
          the hero is 480px tall, the bottom CTA should be close to that. The
          symmetry signals that the page was designed with intention.
        </li>
      </ul>

      <AnchorHeading as="h2" id="8-vertical-rhythm">
        8. Vertical rhythm between sections
      </AnchorHeading>
      <p>
        A landing page is a vertical sequence. The spacing between sections
        does as much communicative work as the content of each section. Too
        little spacing makes the page read as one undifferentiated block. Too
        much spacing creates a disconnected series of unrelated screens. The
        right spacing creates a rhythm: the visitor feels the page as a
        coherent argument, not a collection of parts.
      </p>
      <p>
        A practical system for section spacing on an 8-point grid:
      </p>
      <pre>{`Section separators
  Between sections:          96px  (12 units)
  Within a section:          64px  (8 units)
  Between a heading and body: 24px (3 units)
  Between body paragraphs:   16px  (2 units)

Hero height (desktop 1440px wide)
  Minimum:   480px  (60 units)
  Typical:   600px  (75 units)
  Maximum:   800px  (100 units)`}</pre>
      <p>
        These are starting values, not rules. Apply them in your Figma file
        and then adjust by eye. The goal is that each section reads as clearly
        separated from the sections above and below it, and the page reads as
        a single continuous scroll rather than a sequence of separate pages
        stacked on top of each other.
      </p>

      <AnchorHeading as="h2" id="9-hero-imagery">
        9. Hero imagery: product shot vs. illustration
      </AnchorHeading>
      <p>
        The choice between a product screenshot and an illustration in the hero
        is not primarily an aesthetic decision. It is a question about what
        evidence the visitor needs to cross the &ldquo;what is this?&rdquo;
        threshold.
      </p>
      <p>
        <strong>Use a product screenshot</strong> when the UI is clean enough
        to be self-explanatory at small sizes, when the product is in a
        category where the visitor wants evidence before they believe the
        headline, and when your competitors use illustrations. A real screenshot
        is the strongest form of social proof available in a hero section
        because it shows the visitor exactly what they would see if they signed
        up. It cannot be faked with stock imagery.
      </p>
      <p>
        <strong>Use an illustration</strong> when the product&rsquo;s core
        value is abstract (a workflow, a concept, a relationship between
        systems) and a screenshot of the UI would not communicate that value.
        Illustration also works when the product is early-stage and the UI is
        not yet polished enough to be persuasive. An illustration signals the
        aspiration; a screenshot of an unfinished product signals the
        current state.
      </p>
      <p>
        <strong>Use an abstract background</strong> (gradient, texture, or
        decorative pattern) when the copy alone is sufficient and imagery would
        add visual noise without adding meaning. This is the rarest case. Most
        products have a UI or a concept worth showing. A gradient background
        with no imagery says &ldquo;we couldn&rsquo;t decide what to put
        here&rdquo; unless the product truly operates in an abstract domain.
      </p>
      <p>
        Whichever you choose, the imagery must not compete with the headline for
        visual dominance. If a visitor&rsquo;s eye lands on the product
        screenshot before the headline, the hierarchy is wrong. Fix it with
        reduced image opacity, increased headline size, or additional whitespace
        between the copy block and the image.
      </p>

      <AnchorHeading as="h2" id="10-worked-example">
        10. A worked example: critiquing and rebuilding a hero
      </AnchorHeading>
      <p>
        The following example walks through the critique-and-rebuild process
        using a hypothetical SaaS hero. The structure mirrors what you will do
        in the section workshop.
      </p>
      <p>
        Suppose the hero has this content:
      </p>
      <pre>{`Headline (24px, semi-bold):
  "The best way to manage your team's work"

Subhead (16px, regular):
  "Collaborate, track, and ship projects with confidence."

CTA button (14px, medium weight, outline style,
  gray border, gray text):
  "Get started"

Background: light gray (#F5F5F5)
Hero image: right column, a screenshot at 100% opacity`}</pre>
      <p>
        Five-point critique:
      </p>
      <pre>{`Headline: 1/3
  No specific outcome for a specific customer.
  "Best way" is a superlative claim with no evidence.
  "Manage your team's work" describes a category,
  not a benefit.

Subhead: 1/3
  Restates the headline in different words.
  Does not advance or prove the headline.
  "With confidence" is vague.

CTA: 1/3
  Copy is generic ("Get started" tells the visitor
  nothing about what happens next).
  Outline style at gray signals secondary action,
  not primary.
  No whitespace isolation.

Hero imagery: 2/3
  Screenshot is real, which is good.
  But at 100% opacity it has more visual weight
  than the headline.

Overall hierarchy: 1/3
  Headline and subhead are the same visual size.
  CTA is lighter than the body copy.
  Eye lands on the screenshot first.`}</pre>
      <p>
        Rebuild decisions:
      </p>
      <pre>{`1. Headline: increase to 56px, bold weight.
   Rewrite: "Ship your sprint backlog in half the time."
   (specific outcome, specific customer context)

2. Subhead: increase size gap from headline.
   Rewrite: "Built for engineering teams that are
   tired of status meetings replacing actual work."
   (answers "why you?" with audience specificity)

3. CTA: switch from outline to filled button.
   Use primary accent (blue-600 from color ramp).
   Increase padding to 16px/32px.
   Add 48px whitespace above and below.
   Rewrite copy: "Start your 14-day trial"

4. Screenshot: reduce opacity to 80%.
   Add 8px border-radius and a subtle drop shadow
   so it reads as a contained object, not a
   background element.`}</pre>
      <p>
        The rebuild addresses every low score with a specific change grounded
        in a principle from the lecture. This is the standard the section
        annotation notes must meet.
      </p>

      <AnchorHeading as="h2" id="11-exercises">11. Exercises</AnchorHeading>

      <Exercise n={1}>
        <p>
          Find a SaaS landing page in a market you know. Identify the five
          sections from section 1 of this reading. If any section is missing,
          name it and write one sentence explaining what objection the page
          leaves unanswered as a result. If any section appears in a different
          order, write one sentence explaining the tradeoff.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Apply the five-point critique framework from the worked example to
          the hero section of the same page. Score each of the five dimensions
          from 1 to 3 and write one sentence of evidence for each score.
          Evidence must name a specific element, not offer a general impression.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write three headline variants for your own product. Each variant
          must be 10 words or fewer. For each variant, measure it in your Figma
          type scale: at what font size does it fit cleanly on two lines or
          fewer at 600px wide? Which variant gives you the most design
          flexibility? Which one communicates the most specific outcome?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Build the skeleton of a landing page for your product in Figma using
          gray rectangles only, no color and no real copy. Place all five
          sections at correct proportions on an 8-point grid. Measure the
          height of the hero, the height of the social proof band, and the
          spacing between each section. Annotate each section with its name
          and the objection it handles.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Design the hero section from exercise 4 with real content. Use your
          type scale, your color ramp, and your spacing scale. Apply the four
          CTA design decisions from section 4 of this reading. Then place the
          hero next to the original page you critiqued in exercise 2. Name one
          decision the original page made that you chose to keep, and one you
          chose to change. Explain both choices using lecture vocabulary.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="12-going-deeper">12. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> Hero-section critique and rebuild
          workshop. You will apply the five-point framework from this reading
          to three real SaaS heroes and rebuild the weakest one in Figma.
          Arrive with screenshots and your critique sheet completed.
        </li>
        <li>
          <strong>HW3 (out this week).</strong> Design a full landing page for
          your product in Figma. All five sections, on an 8-point grid, using
          your type scale and color ramp. The exercises in this reading are
          the direct warmup for HW3.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> The full landing-page
          anatomy: each section&rsquo;s structure, placement rules, and the
          most common design failures in each.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Designing the hero section in
          detail: headline and subhead copy strategy, CTA design, and imagery
          choice. Includes live critique of real hero sections using the
          five-point framework.
        </li>
      </ul>

      <Takeaways>
        <li>
          A landing page is a sequence of objection handlers. The hero answers
          &ldquo;what is this?&rdquo;, the social proof band answers &ldquo;has
          anyone I trust used this?&rdquo;, and so on. Designing without
          knowing what objection a section handles produces sections that look
          complete but do no work.
        </li>
        <li>
          Hero hierarchy has one rule: the headline must have more visual weight
          than everything else on the page. If the eye lands on the product
          screenshot or the navigation before the headline, the hierarchy is
          wrong. Fix it with font size, weight, or whitespace before you reach
          for color.
        </li>
        <li>
          CTA design is not just button color. Specific copy, filled style,
          correct padding, and 48px of surrounding whitespace all contribute to
          whether the button reads as the primary action on the page.
        </li>
        <li>
          Feature triplets work because three items read as a complete set.
          Each column has one icon, one benefit heading, and two sentences of
          body copy. More than that is a feature list, not a feature triplet.
        </li>
        <li>
          Vertical rhythm between sections communicates the intention behind the
          layout. Consistent section spacing (96px between, 64px within, on an
          8-point grid) makes the page read as a designed argument rather than
          assembled parts.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Segall, Ran (Flux Academy). &ldquo;How to Design a Landing Page
          &mdash; Live Design Session.&rdquo; 2023.{" "}
          <a href="https://www.youtube.com/watch?v=akLlA0wcOlQ">
            youtube.com/watch?v=akLlA0wcOlQ
          </a>
          . Live Figma session designing a complete SaaS landing page, narrating
          every decision from hero copy strategy to bottom CTA treatment. The
          primary source for the section structure and hero hierarchy principles
          in this reading.
        </p>
        <p>
          Schoger, Steve (CSS Day Conference). &ldquo;Refactoring UI.&rdquo;
          2019.{" "}
          <a href="https://www.youtube.com/watch?v=7Z9rrryIOC4">
            youtube.com/watch?v=7Z9rrryIOC4
          </a>
          . Conference talk demonstrating live UI makeovers: whitespace, contrast,
          shadow, and CTA visibility. The before-and-after format models the
          critique discipline this reading teaches.
        </p>
        <p>
          Wathan, Adam, and Steve Schoger (Refactoring UI). &ldquo;Labels Are
          a Last Resort.&rdquo; 2019.{" "}
          <a href="https://refactoringui.com/previews/labels-are-a-last-resort/">
            refactoringui.com/previews/labels-are-a-last-resort/
          </a>
          . The argument that UI elements should communicate through format and
          context before adding a label. Applied in this reading to CTA button
          copy.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk06ReadingSearchBody =
  "landing page anatomy hero social proof band feature triplet CTA bottom CTA vertical rhythm section structure objection handler headline subhead copywriting product screenshot illustration hero imagery 8-point grid type scale color ramp visual hierarchy converting landing page SaaS founders engineers Week 6 reading design for builders";
