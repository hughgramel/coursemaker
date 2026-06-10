import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Callout,
} from "@/components/ReadingPage";

export function Wk03SectionPage() {
  return (
    <ReadingPage
      id="wk03-section"
      title="Week 3 section: Bathroom shelf audit"
      kicker="Looksmaxxing &middot; Autumn 2026 &middot; Hands-on worksheet"
    >
      <ReadingFraming>
        <p>
          By the end of this section you will have a written AM and PM routine
          built from what is already on your shelf, or a clear shopping list
          for what you need. You will be able to name a mechanism for each
          product you keep. Products you cannot justify stay off the routine.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You have attended both Week 3
          lectures and read the Week 3 reading. You know what the skin barrier
          is, how sunscreen SPF works, and the difference between retinol and
          tretinoin. Bring your current products, or a photo of your shelf.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="part-1-audit">Part 1: Audit what you have (15 minutes, solo)</AnchorHeading>
      <p>
        Take every product currently in your bathroom routine and lay it out.
        Include anything you use on your face, from soap to serums. For each
        product, fill in the table below. If you do not use any skincare at all,
        skip to Part 2 and come back here once you have a draft routine on paper.
      </p>
      <ol>
        <li>
          <strong>Product name and category.</strong> Choose one: cleanser /
          moisturizer / sunscreen / retinoid / acne treatment / toner /
          exfoliant / serum / other. If it does not fit any of the first five,
          it goes in &ldquo;other.&rdquo;
        </li>
        <li>
          <strong>Key active ingredients.</strong> List the first three
          ingredients in the INCI list that are not water or a common filler.
          If you cannot find the ingredients list, put a question mark.
        </li>
        <li>
          <strong>Claimed purpose.</strong> What does the packaging say it does?
          One phrase is enough.
        </li>
        <li>
          <strong>Mechanism or evidence.</strong> Can you name a mechanism from
          the Week 3 lecture or reading that explains why this product would
          work? Write it in one sentence. If you cannot, write &ldquo;no mechanism
          known.&rdquo; This is not a grade; it is information.
        </li>
        <li>
          <strong>Keep / drop / replace?</strong> Based on the above, decide
          whether this product earns a place in your routine. Products with no
          known mechanism and no clear role are candidates for dropping.
        </li>
      </ol>

      <Callout title="Serums are optional">
        <p>
          Serums are not part of the core four. Most serums add cost and
          complexity without adding meaningfully to the results that a
          cleanser, moisturizer, sunscreen, and retinoid already provide. If
          a serum has a clear mechanism and does not conflict with your other
          products, it may be worth keeping. If you are unsure, drop it for
          four weeks and see whether anything changes.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="part-2-routine">Part 2: Build your written routine (20 minutes, solo)</AnchorHeading>
      <p>
        Using your audit from Part 1, write out a specific AM routine and a
        specific PM routine. The goal is four products total across both
        routines, though some products appear in both. Write each step in
        order and give a one-sentence justification for each product.
      </p>
      <ol>
        <li>
          <strong>AM routine.</strong> The minimal AM routine is: (1) cleanser
          or water rinse, (2) moisturizer if your skin is dry, (3) sunscreen
          with SPF 30 or higher, broad-spectrum. Sunscreen goes last before
          makeup or nothing. If you have active acne, you may add a spot
          treatment before moisturizer.
        </li>
        <li>
          <strong>PM routine.</strong> The minimal PM routine is: (1) cleanser,
          (2) retinoid if you are using one, applied to dry skin, (3) moisturizer.
          If you are introducing tretinoin for the first time, follow the Dr. Dray
          start protocol: two nights per week maximum for the first month, buffered
          with moisturizer if irritation occurs.
        </li>
        <li>
          <strong>Write the justification.</strong> For each product in your
          final routine, write one sentence that names a mechanism. Example:
          &ldquo;SPF 50 broad-spectrum sunscreen blocks both UVA and UVB, reducing
          cumulative photoaging and lowering long-term skin cancer risk.&rdquo;
          That is a justification. &ldquo;It moisturizes&rdquo; is not.
        </li>
        <li>
          <strong>Flag the gaps.</strong> If your routine is missing a category
          you need (for example, no sunscreen), write it as a gap. You will
          address gaps in Part 3.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-compare">Part 3: Sunscreen comparison (15 minutes, pairs)</AnchorHeading>
      <p>
        Each pair looks up two sunscreens: one mineral (zinc oxide or titanium
        dioxide as the only active) and one chemical (any organic UV filter).
        Use the product&rsquo;s official page or a retailer listing. Fill in the
        comparison table below for each.
      </p>
      <ol>
        <li>
          <strong>SPF number.</strong> Record the labeled SPF. Note that Michelle
          Wong (Lab Muffin, 2019) showed that under-application at 50% of the
          recommended dose reduces effective SPF to the square root of the labeled
          value. SPF 50 becomes roughly SPF 7 at typical real-world application
          thickness. The number on the bottle assumes a 2 mg/cm&sup2; application.
        </li>
        <li>
          <strong>UVA rating.</strong> Look for PA+++ (Japanese system) or PPD
          rating. If neither is listed, look for the EU broad-spectrum star
          rating or a UVA seal. If none is present, the UVA protection is unknown.
        </li>
        <li>
          <strong>Active ingredients.</strong> List the UV filters in the active
          ingredients section. Zinc oxide and titanium dioxide are mineral filters.
          Avobenzone, octinoxate, Tinosorb S and M, and Uvinul filters are chemical.
        </li>
        <li>
          <strong>Which would you use daily and why?</strong> This is a judgment
          call. Texture, finish, and price all count. State your reasoning in two
          sentences.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-retinoid">Part 4: Retinoid decision (10 minutes, whole room)</AnchorHeading>
      <p>
        Retinoids are the most evidence-supported topical treatment after
        sunscreen, but they are not for everyone to start immediately. Work
        through the following decision tree as a group. The instructor or TA
        takes a show of hands at each branch.
      </p>
      <ol>
        <li>
          <strong>Is your skin barrier currently damaged?</strong> Signs include
          persistent redness, stinging when you apply a plain moisturizer, or
          flaking that does not go away with hydration. If yes: repair the barrier
          first (three to four weeks of gentle cleanser and a ceramide moisturizer,
          no actives), then return to this decision.
        </li>
        <li>
          <strong>Do you have access to prescription tretinoin?</strong> If yes,
          start at 0.025% and follow the Dr. Dray ramp-up protocol: two nights per
          week, increasing to nightly over four to six weeks. If no, OTC retinol at
          0.1-0.3% is a reasonable starting point.
        </li>
        <li>
          <strong>When will you introduce it?</strong> Retinoids go in the PM
          routine after cleansing, on dry skin, before moisturizer. You cannot
          use retinoids in the morning without risk of increased photosensitivity.
          Sunscreen in the AM is not optional if you are on a retinoid.
        </li>
      </ol>

      <AnchorHeading as="h2" id="deliverables">What to ship</AnchorHeading>
      <ul>
        <li>
          Your completed shelf audit table: one row per product with category,
          key actives, claimed purpose, mechanism or &ldquo;no mechanism known,&rdquo;
          and keep/drop/replace decision.
        </li>
        <li>
          Your written AM routine and PM routine: products in order, one
          justification sentence per product.
        </li>
        <li>
          Your sunscreen comparison: two products, SPF, UVA rating, active
          ingredients, and your daily-use pick with a reason.
        </li>
        <li>
          One written sentence on your retinoid plan: starting, not starting
          yet (and why), or already using one (and what protocol).
        </li>
      </ul>
    </ReadingPage>
  );
}

export const wk03SectionSearchBody =
  "bathroom shelf audit skincare routine AM PM cleanser sunscreen moisturizer retinoid tretinoin serums acne treatment SPF PA UVA mineral chemical sunscreen section Week 3 skin barrier";
