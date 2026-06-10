import { AnchorHeading } from "@/components/AnchorHeading";

export function SyllabusPage() {
  return (
    <>
      <AnchorHeading as="h1" id="syllabus">Syllabus</AnchorHeading>
      <p>
        You arrive able to ship code but freezing the second you open Figma.
        You leave with a brand, a landing page, an app UI, and the App Store
        assets for a real product, all designed in Figma, on a grid, in a
        palette you chose for a reason. You also leave with the vocabulary to
        defend each choice out loud.
      </p>

      <AnchorHeading as="h2" id="what-this-course-is-about">What this course is about</AnchorHeading>
      <p>
        Design as a skill for builders. Not design as a career, not design as
        theory. The kind of design a solo founder or two-person team needs to
        stop shipping ugly product and start shipping product that gets
        screenshotted. The bias is practical: every week produces a Figma
        artifact tied to a real product. Principles are taught only in service
        of the artifact, never in the abstract.
      </p>
      <p>
        The course assumes you can already build and deploy a basic web app.
        It does not assume you have ever opened Figma, mixed a color palette,
        or set a body font. By week 10 you can do all three with intent.
      </p>

      <AnchorHeading as="h2" id="fundamentals">The five fundamentals</AnchorHeading>
      <p>Non-negotiable across every week of the course.</p>
      <ol>
        <li>
          <strong>Reuse, do not redo.</strong> Components, variants, styles,
          and tokens are how you keep work small. If you are copy-pasting the
          same rectangle twice, stop and make it a component first.
        </li>
        <li>
          <strong>Hierarchy is a thing you can see.</strong> Every screen has
          one primary message and one primary action. If your eye does not
          land there first, the hierarchy is broken and no amount of color
          will fix it.
        </li>
        <li>
          <strong>Grid before vibes.</strong> Spacing comes from a scale, not
          from nudging. Alignment comes from auto-layout, not from
          eyeballing. Pixels off the grid are a bug.
        </li>
        <li>
          <strong>One typeface, one palette, on purpose.</strong> Beginners
          pick ten of each. Pros pick one of each and use it everywhere.
          Restraint looks expensive.
        </li>
        <li>
          <strong>Ship every week.</strong> The point of the course is the
          artifact. A frame in your Figma file at the end of every week beats
          a notebook full of theory.
        </li>
      </ol>

      <AnchorHeading as="h2" id="roadmap">The roadmap</AnchorHeading>

      <h3>Foundations (weeks 1-2)</h3>
      <p>
        Figma as your design environment: frames, auto-layout, components,
        variants, styles, and the keyboard shortcuts that turn it from a toy
        into a tool. Then visual literacy: the CRAP principles (contrast,
        repetition, alignment, proximity), Gestalt grouping, and visual
        hierarchy as something you can name and point at in a real interface.
      </p>

      <h3>Core mechanics (weeks 3-5)</h3>
      <p>
        The three levers that do 80% of the work: typography (anatomy,
        scales, pairings, measure, line-height), color (HSL/OKLCH ramps, WCAG
        contrast, dark mode as a parallel system), and layout (the 8-point
        grid, 12-column responsive, spacing scales). You leave this phase
        with a starter kit for your product that uses all three on purpose.
      </p>

      <h3>Composition (weeks 6-7)</h3>
      <p>
        The two artifacts every founder eventually ships: a landing page
        (hero, social proof, feature triplets, CTA) and an app UI (component
        library, connected screens, empty states, interaction states). You
        design both for your own product.
      </p>

      <h3>Frontier (weeks 8-9)</h3>
      <p>
        Brand identity and marketing assets. Wordmarks, marks, lockups, brand
        sheets, voice and tone. Then App Store screenshots, OG images,
        favicons, and the legal question every builder eventually asks: where
        do I get fonts, icons, photos, and illustrations without paying
        enterprise prices or stealing.
      </p>

      <h3>Synthesis (week 10)</h3>
      <p>
        Capstone: a complete launch package. Brand sheet, landing-page
        design, five connected app screens, App Store assets, OG image, all
        derived from the same tokens. Then design-to-code: how to hand the
        design off to Tailwind or to a teammate without losing what made it
        work.
      </p>

      <AnchorHeading as="h2" id="prerequisites">Prerequisites</AnchorHeading>
      <ul>
        <li>You have built and deployed a basic web app, at minimum HTML and CSS.</li>
        <li>You have a product idea in mind, even rough. Every weekly artifact is for your product, so come with a target.</li>
        <li>You can install software and sign up for free SaaS accounts. Figma is free for personal use.</li>
        <li>You do not need to know color theory, typography, or design history. The course teaches them in service of what you ship.</li>
      </ul>

      <AnchorHeading as="h2" id="how-the-work-flows">How the work flows</AnchorHeading>
      <p>
        Each week has the same rhythm. Read the week&rsquo;s reading first,
        it sets up the vocabulary the lectures assume. Then watch or follow
        both lectures, each paired with its slide deck. Then do the section,
        which is always hands-on in Figma. Then make the touchpoint on the
        active assignment, whether that is starting it, working it, or
        submitting it.
      </p>
      <p>
        Plan time in two slots per week: a 90-minute slot for lectures plus
        reading, and a 2-hour slot for the section plus the active
        assignment. Self-paced, but the calendar exists for a reason: the
        dependency graph is linear from week 1 to week 10.
      </p>

      <AnchorHeading as="h2" id="how-you-are-evaluated">How you are evaluated</AnchorHeading>
      <p>
        Exact weights are confirmed before the term begins; the structure
        below is fixed. Evaluation is artifact-driven: you submit Figma files
        (or public Figma share links) and short written justifications.
      </p>
      <ul>
        <li><strong>Weekly section deliverable.</strong> One Figma frame per week, submitted at the end of the week, demonstrating the section&rsquo;s skill.</li>
        <li><strong>HW1, Figma starter kit.</strong> A 12-component starter file for your product.</li>
        <li><strong>HW2, Type-only redesign.</strong> A redesign of a competitor&rsquo;s landing page using only Inter, color, and spacing.</li>
        <li><strong>HW3, Landing page design.</strong> A full landing page for your product, hero through footer.</li>
        <li><strong>HW4, Brand sheet.</strong> Logo lockups, color, type, voice on a single page.</li>
        <li><strong>Capstone, Launch package.</strong> Brand sheet, landing page, five app screens, App Store screenshots, OG image, presented at demo day.</li>
      </ul>

      <AnchorHeading as="h2" id="policies">Policies</AnchorHeading>
      <h3>Late work</h3>
      <p>
        Sections are due at the end of each week; assignments are due as
        listed on the calendar. Sliding a deadline by a day is fine. Sliding
        it by a week means you are losing the dependency chain into the next
        week, so catch up before the following week&rsquo;s lecture begins.
        Capstone day is fixed.
      </p>
      <h3>AI use</h3>
      <p>
        AI is welcome for ideation, copy drafts, and asset generation, with
        one rule: you make the final design choices and you can defend them.
        If a reviewer asks why your hero uses a serif and your body uses a
        sans, the answer cannot be &ldquo;the AI suggested it.&rdquo; The
        answer is the vocabulary you learned this term.
      </p>

      <AnchorHeading as="h2" id="reading-list">Reading list</AnchorHeading>
      <p>
        There is no required external textbook. The weekly readings on this
        site ARE the textbook. The books below are worth owning if you want
        to go deeper after the course ends.
      </p>
      <ul>
        <li><a href="https://www.refactoringui.com/book" target="_blank" rel="noopener noreferrer">Refactoring UI</a> by Adam Wathan and Steve Schoger. The closest thing to a builder&rsquo;s design textbook.</li>
        <li><a href="https://practicaltypography.com/" target="_blank" rel="noopener noreferrer">Butterick&rsquo;s Practical Typography</a> by Matthew Butterick. Free online. The clearest typography book aimed at non-designers.</li>
        <li><a href="https://atomicdesign.bradfrost.com/" target="_blank" rel="noopener noreferrer">Atomic Design</a> by Brad Frost. Free online. The vocabulary for component systems.</li>
        <li><a href="https://www.basicbooks.com/titles/don-norman/the-design-of-everyday-things/9780465050659/" target="_blank" rel="noopener noreferrer">The Design of Everyday Things</a> by Don Norman. The foundational text on user-centered design.</li>
        <li><a href="https://learn.figma.com/" target="_blank" rel="noopener noreferrer">Figma Learn</a>. Free official courses on Figma fundamentals and design systems.</li>
      </ul>
    </>
  );
}

export const syllabusSearchBody =
  "Syllabus Design for Builders ten week course Figma typography color layout landing pages app UI brand identity marketing assets capstone launch package shipping every week";
