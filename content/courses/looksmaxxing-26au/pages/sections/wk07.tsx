import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Callout,
} from "@/components/ReadingPage";

export function Wk07SectionPage() {
  return (
    <ReadingPage
      id="wk07-section"
      title="Week 7 section: Wardrobe audit"
      kicker="Looksmaxxing &middot; Autumn 2026 &middot; Hands-on worksheet"
    >
      <ReadingFraming>
        <p>
          This session is a Tinder-style wardrobe audit. You will photograph
          every top in your closet, apply the four-point fit check from
          Lecture 1, score each garment, and decide what stays and what goes.
          The goal is a smaller, better-fitting collection, not a bigger one.
        </p>
        <p>
          <strong>Before you arrive.</strong> Read the Week 7 reading. Bring
          your phone charged. If you can, bring two or three tops you are
          unsure about. You do not need to have completed HW4 yet, but you
          should have started thinking about your five looks.
        </p>
      </ReadingFraming>

      <Callout title="The only rule: fit before brand">
        <p>
          A well-fitting item from a budget retailer beats a poorly fitting
          designer piece every time. Score garments on fit, not on what you
          paid for them or what the label says.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="part-1-photograph">Part 1: photograph your tops</AnchorHeading>
      <p>
        You need one photo per top. The photo should show the full garment on
        your body, taken at chest height by a classmate or propped against a
        wall, with consistent neutral lighting. If you did not bring tops,
        photograph items from the shared clothing rack provided by the
        instructor.
      </p>
      <ol>
        <li>
          <strong>Set up your photo station.</strong> Stand in front of a
          plain wall. Ask a classmate to take the photo from about six feet
          away at chest height. Use natural light if available; avoid strong
          overhead light that creates shadows in the shoulder and armhole.
        </li>
        <li>
          <strong>Photograph each top.</strong> Arms slightly away from your
          sides so the chest and side seam are visible. Take one front photo
          and one side photo per garment. Side photos reveal how the back
          hangs and whether the hem rides up.
        </li>
        <li>
          <strong>Label each photo.</strong> In your phone&rsquo;s notes or
          a simple spreadsheet, record: garment name, brand (optional), and
          photo number. You will add scores in Part 2.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-score">Part 2: apply the four-point fit check</AnchorHeading>
      <p>
        For each top, evaluate the four points from Lecture 1. Score each
        point Pass or Fail. A garment with two or more Fails is a cull
        candidate unless a tailor can fix it cheaply.
      </p>
      <ol>
        <li>
          <strong>Shoulder seam.</strong> The seam should sit right at the
          edge of your natural shoulder, where it starts to slope toward your
          arm. If the seam falls onto your upper arm, the garment is too
          large. If it pulls inward toward your neck, it is too small. Shoulder
          seams cannot be moved without a near-complete rebuild of the
          garment, so a failing shoulder is almost always a cull.
        </li>
        <li>
          <strong>Chest.</strong> With your arms at your sides, you should be
          able to pinch about one inch of fabric on each side of the chest. If
          you cannot pinch anything, it is too tight. If you can grab a fistful,
          it is too loose. Chest width can be taken in by a tailor; letting out
          a too-small chest requires enough seam allowance in the existing
          garment.
        </li>
        <li>
          <strong>Sleeve length.</strong> For a dress shirt or casual button-up,
          the sleeve should end at the base of your thumb when your arm hangs
          naturally. For a t-shirt, the sleeve hem should fall at or just below
          the mid-bicep. Sleeves can be shortened by a tailor for a low cost;
          lengthening requires sufficient seam allowance.
        </li>
        <li>
          <strong>Shirt length and hem.</strong> A casual shirt worn untucked
          should end roughly at the middle of the fly. A tucked dress shirt
          should have enough length to stay tucked when you move. Hem length is
          easy and inexpensive to alter.
        </li>
      </ol>

      <p>
        Record your scores in a simple table. Here is the format:
      </p>
      <table>
        <thead>
          <tr>
            <th>Garment</th>
            <th>Shoulder</th>
            <th>Chest</th>
            <th>Sleeve</th>
            <th>Hem</th>
            <th>Decision</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>White Oxford</td>
            <td>Pass</td>
            <td>Pass</td>
            <td>Fail (too long)</td>
            <td>Pass</td>
            <td>Tailor (shorten sleeves)</td>
          </tr>
          <tr>
            <td>Navy crewneck</td>
            <td>Fail (too wide)</td>
            <td>Fail (too loose)</td>
            <td>Pass</td>
            <td>Pass</td>
            <td>Cull</td>
          </tr>
        </tbody>
      </table>

      <AnchorHeading as="h2" id="part-3-swipe">Part 3: swipe left or right</AnchorHeading>
      <p>
        After scoring, make a final decision for each garment. There are three
        options: keep as-is, send to a tailor, or cull. Use this
        decision rule:
      </p>
      <ol>
        <li>
          <strong>Keep as-is:</strong> three or four Pass scores, no structural
          issues.
        </li>
        <li>
          <strong>Tailor:</strong> one or two Fail scores, all on alterable
          points (chest width, sleeve length, hem). The alteration should cost
          less than 30% of what you would pay for a replacement.
        </li>
        <li>
          <strong>Cull:</strong> failing shoulder seam, or two or more Fails on
          non-alterable points, or the garment is not part of any of your five
          planned capsule looks.
        </li>
      </ol>
      <p>
        Culled items do not need to be thrown away. Donate, sell, or store
        them. The goal is that every item left in your active wardrobe earns
        its place by fitting well and being worn.
      </p>

      <Callout title="A note on budget">
        <p>
          If you are culling a large number of items and need to replace them,
          do not replace everything at once. Use the capsule framework from
          Lecture 2: identify the one or two items that unlock the most looks
          in your five-look plan and buy those first. A well-fitting $30 shirt
          beats a poorly fitting $200 one.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="part-4-capsule">Part 4: sketch your five-look capsule</AnchorHeading>
      <p>
        In the last 20 minutes of section, draft the five looks for HW4.
        Each look should be a complete outfit suited to a specific context
        in your actual life. Use the template below.
      </p>
      <ol>
        <li>
          <strong>Name the context.</strong> For example: lectures / daily
          errands, casual weekend, first date, job interview, evening out.
          Pick five that reflect your real life.
        </li>
        <li>
          <strong>List the garments.</strong> For each look, write down every
          item: top, bottom, outerwear (if needed), shoes. Be specific. Do not
          write &ldquo;nice shoes&rdquo;; write &ldquo;white leather
          sneakers&rdquo; or &ldquo;brown leather Chelsea boots.&rdquo;
        </li>
        <li>
          <strong>Mark what you own vs. what you need to buy.</strong> Items
          you already own and that passed the fit check are free. Budget only
          for new items.
        </li>
        <li>
          <strong>Apply the three-color rule per look.</strong> Count the
          distinct colors in each look. If you have more than three, pick
          which one to remove or replace with a neutral already in the outfit.
        </li>
        <li>
          <strong>Total your estimated cost.</strong> If the total is over
          $300, identify which items can be swapped for cheaper alternatives
          that still pass the fit check. Fit is the constraint, not brand.
        </li>
      </ol>

      <AnchorHeading as="h2" id="what-to-ship">What to ship</AnchorHeading>
      <ul>
        <li>
          A completed fit-check table for every top you photographed, with a
          keep / tailor / cull decision for each.
        </li>
        <li>
          A five-look capsule plan with each look&rsquo;s context, garment
          list, own/buy status, color count, and estimated cost. This is your
          HW4 first draft.
        </li>
        <li>
          One sentence per look explaining why the color combination works for
          your undertone and contrast level.
        </li>
      </ul>
    </ReadingPage>
  );
}

export const wk07SectionSearchBody =
  "wardrobe audit fit check shoulder seam chest sleeve hem pant rise break tinder swipe cull tailor keep capsule wardrobe five looks three-color rule context dressing budget $300 color undertone contrast Week 7 section looksmaxxing";
