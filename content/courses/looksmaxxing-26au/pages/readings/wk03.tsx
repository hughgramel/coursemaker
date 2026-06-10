import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk03Reading() {
  return (
    <ReadingPage
      id="wk03-skincare"
      title="Week 3: Skincare from skin biology forward"
      kicker="Looksmaxxing &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading gives you the biological framework you need to evaluate
          any skincare product or claim. By the end you will be able to name
          the four products with the strongest evidence base, explain what each
          one does at the cellular level, and compare sunscreen formulations on
          SPF, UVA protection, and ingredient type. You will also know what
          skincare does not do, which is at least as useful as knowing what it
          does.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You are familiar with
          the <strong>evidence-hierarchy</strong> from Week 1 (the difference
          between peer-reviewed RCTs and forum testimony), with{" "}
          <strong>habit-stacking</strong> from Week 2 (anchoring a new behavior
          to an existing one), and with the idea that some traits are{" "}
          <strong>controllable</strong> while others are fixed. This reading
          introduces seven new concepts: <strong>skin-barrier</strong>,{" "}
          <strong>cleanser-types</strong>, <strong>sunscreen-spf</strong>,{" "}
          <strong>retinoid-tretinoin</strong>,{" "}
          <strong>moisturizer-basics</strong>,{" "}
          <strong>acne-treatment</strong>, and <strong>photoaging</strong>.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="what-skincare-actually-does">
        1. What skincare actually does (and does not do)
      </AnchorHeading>
      <p>
        Start with the ceiling. Skincare does not change bone structure.
        Cheekbone projection, jaw width, and orbital depth are determined by
        your skeleton. No serum, cream, or topical treatment affects them.
        Any product marketed as &ldquo;sculpting&rdquo; or &ldquo;contouring&rdquo; is
        describing a visual effect from light reflection, swelling reduction,
        or improved skin tone, not structural change.
      </p>
      <p>
        The &ldquo;anti-aging&rdquo; category is also largely unregulated in its
        claims. The FDA classifies most skincare products as cosmetics, not
        drugs. Cosmetic products cannot legally claim to alter the structure
        or function of the skin, which means the claims on the packaging are
        written to imply benefit without making the specific biological
        assertions that would require clinical evidence. When a moisturizer
        claims to &ldquo;visibly reduce the appearance of fine lines,&rdquo; that
        phrase is legally distinct from &ldquo;reduces fine lines&rdquo; and carries
        no evidentiary obligation.
      </p>
      <p>
        What skincare can do, with evidence: prevent new UV damage (sunscreen),
        accelerate cell turnover and stimulate collagen synthesis (retinoids),
        reduce inflammatory acne lesions (benzoyl peroxide, salicylic acid,
        tretinoin), and repair a compromised skin barrier (ceramide moisturizers,
        occlusive agents). Those four categories have RCT-level evidence. The rest
        of the shelf is mostly optional.
      </p>

      <AnchorHeading as="h2" id="the-skin-barrier">
        2. The skin barrier
      </AnchorHeading>
      <p>
        The outermost layer of skin, the stratum corneum, is made of flattened,
        dead cells called corneocytes embedded in a lipid matrix. The lipid
        matrix is a mixture of ceramides, cholesterol, and free fatty acids in
        a specific molar ratio. This structure has two jobs: prevent water from
        leaving the body (transepidermal water loss, or TEWL) and block
        irritants, microbes, and allergens from entering.
      </p>
      <p>
        When the lipid matrix is disrupted, water escapes and irritants get in.
        The result is what dermatologists call a compromised barrier: skin that
        feels tight or uncomfortable after cleansing, stings when plain
        moisturizer is applied, flakes without being visibly dry, and reacts
        to products that never caused problems before. This state is common
        and often self-inflicted by routines that overuse surfactants,
        exfoliants, or actives.
      </p>
      <p>
        Dr. Dray (2023) states the repair protocol plainly: stop exfoliants,
        reduce cleansing frequency to once daily if necessary, and use
        ingredients that replace what was stripped. Ceramides replace the
        lipid matrix directly. Niacinamide stimulates ceramide synthesis and
        reduces barrier-associated inflammation. Panthenol (pro-vitamin B5)
        promotes epithelial cell differentiation. These ingredients are
        available in basic drugstore formulations; price is not a reliable
        signal of efficacy for barrier repair.
      </p>

      <Callout title="What &ldquo;sensitive skin&rdquo; usually means">
        <p>
          Most self-reported sensitive skin is barrier-compromised skin that
          has been over-treated. A four-week rest from all actives and exfoliants,
          using only a gentle cleanser and a ceramide moisturizer, resolves the
          &ldquo;sensitivity&rdquo; in many cases. If redness, stinging, or reactivity
          persists after four weeks on this approach, see a dermatologist: it may
          be rosacea, contact dermatitis, or seborrheic dermatitis, which require
          different treatment.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="photoaging">
        3. Photoaging: why sunscreen is the first intervention
      </AnchorHeading>
      <p>
        Ultraviolet radiation from the sun arrives at the skin in two primary
        bands. UVB (wavelengths 290-320 nm) causes sunburn and is the main
        driver of DNA damage and skin cancer. UVA (320-400 nm) penetrates
        more deeply into the dermis, degrades collagen and elastin, and drives
        the visible changes associated with skin aging: fine lines, uneven
        pigmentation, loss of firmness, and the leathery texture seen in
        chronically sun-exposed skin. UVA penetrates window glass. Cloud cover
        reduces UVB significantly but UVA less so.
      </p>
      <p>
        The key property of UV damage is that it accumulates. Each day of sun
        exposure without protection adds to a lifetime total. The damage done
        before age 25 does not disappear; it becomes visible in the 30s and
        40s as collagen continues to degrade. A 22-year-old who starts daily
        sunscreen use has already avoided years of cumulative damage compared
        to peers who do not start until 35.
      </p>
      <p>
        The American Academy of Dermatology recommends SPF 30 or higher,
        broad-spectrum protection (meaning coverage of both UVA and UVB), and
        water resistance. Broad-spectrum is not a marketing term: it is a
        specific FDA testing requirement that any labeled sunscreen must meet
        to use the designation. SPF alone tests only UVB protection.
      </p>
      <p>
        Michelle Wong, PhD (Lab Muffin Beauty Science, 2019) addresses a common
        misconception directly: the claim that SPF 50 is &ldquo;only 1% better than
        SPF 30&rdquo; is numerically true but framed incorrectly. SPF 30 blocks 96.7%
        of UVB; SPF 50 blocks 98.0%. The damage that gets through SPF 30 is
        double the damage that gets through SPF 50. For a daily product worn
        every day for decades, that ratio matters.
      </p>
      <p>
        Application dose is the second variable. SPF testing uses 2 mg per cm
        squared of skin. For the face, that is approximately a quarter teaspoon
        (1.25 mL). Dr. Sam Ellis (2022) cites research showing that most people
        apply 20-50% of this dose. At half the dose, an SPF 50 product delivers
        approximately the square root of its labeled value: roughly SPF 7.
        Applying SPF 50 generously every morning delivers more protection than
        applying SPF 100 sparingly.
      </p>

      <AnchorHeading as="h2" id="cleansers">
        4. Cleansers: what surfactants do and how to choose
      </AnchorHeading>
      <p>
        A cleanser removes sebum, sweat, dead cells, and product residue from
        the skin surface. The active ingredient in almost every liquid cleanser
        is a surfactant: a molecule with a hydrophilic (water-attracting) end
        and a lipophilic (oil-attracting) end. Surfactants emulsify oil so it
        rinses away with water.
      </p>
      <p>
        The problem is that the lipid matrix of the skin barrier is also oil,
        and surfactants do not distinguish between sebum you want removed and
        ceramides you want to keep. The harsher the surfactant, the more
        indiscriminate the stripping. Sodium lauryl sulfate (SLS), found in
        many bar soaps and older formulas, is highly effective at cleaning and
        equally effective at disrupting the lipid matrix and raising skin pH
        above the normal 4.5-5.5 range. Amino acid-derived surfactants
        (sodium cocoyl glutamate, sodium lauroyl sarcosinate) are gentler and
        maintain skin pH better.
      </p>
      <p>
        Bar soap has an alkaline pH of 8-10 regardless of surfactant type.
        This pH is appropriate for hand washing but disrupts the acid mantle of
        facial skin. Switching from bar soap to a pH-balanced liquid cleanser
        is one of the highest-impact, lowest-cost changes in a beginner routine.
        James Welsh (2019) identifies the cleanser as step one of his four-step
        framework for men starting skincare, noting that men&rsquo;s skin is
        thicker and produces more sebum than women&rsquo;s skin on average, making
        appropriate cleansing more important and over-cleansing more common.
      </p>
      <p>
        Cleansing frequency depends on skin type and environment. Twice daily
        (AM and PM) is appropriate for oily and acne-prone skin. Once daily
        (PM only, with a water rinse in the morning) is appropriate for dry,
        normal, or barrier-compromised skin. The morning cleanse removes nothing
        that a water rinse cannot handle if no products were applied overnight
        and sebum production is low.
      </p>

      <AnchorHeading as="h2" id="moisturizer">
        5. Moisturizer: three mechanisms
      </AnchorHeading>
      <p>
        Moisturizers work through three distinct mechanisms, and understanding
        them tells you what to look for on an ingredient list.
      </p>
      <p>
        <strong>Occlusives</strong> form a physical barrier on the skin surface
        that slows transepidermal water loss. Petrolatum (petroleum jelly) is
        the most effective occlusive available and is the benchmark against
        which others are measured. Dimethicone and squalane are lighter
        occlusives with less greasy feel. An occlusive alone does not add
        moisture: it traps whatever water is already in the skin.
      </p>
      <p>
        <strong>Humectants</strong> attract water from the environment and from
        the dermis into the epidermis. Glycerin and hyaluronic acid are the
        most common. In high-humidity environments humectants pull water from
        the air; in low-humidity environments they pull water from the deeper
        skin layers, which can paradoxically worsen dryness if no occlusive is
        present to retain it. This is why humectant-only products sometimes
        make dry skin feel drier: the water they attract escapes quickly without
        an occlusive seal.
      </p>
      <p>
        <strong>Emollients</strong> fill the gaps between corneocytes in the
        stratum corneum, improving flexibility and reducing roughness. Ceramides
        are the most structurally relevant emollient because they directly
        replace the lipids the barrier depends on. Fatty alcohols (cetyl alcohol,
        stearyl alcohol) and shea butter are also effective emollients at lower cost.
      </p>
      <p>
        A complete moisturizer contains all three types. Many expensive products
        are primarily water and humectants without adequate occlusive content.
        For barrier repair, a product with ceramides, petrolatum or dimethicone,
        and glycerin in the first several ingredients is more useful than a
        premium brand with an impressive ingredient count but no occlusive.
      </p>

      <AnchorHeading as="h2" id="retinoids">
        6. Retinoids: mechanism and start protocol
      </AnchorHeading>
      <p>
        Retinoids are vitamin A derivatives. They bind to nuclear receptors in
        skin cells (retinoic acid receptors, RAR, and retinoid X receptors, RXR)
        and alter gene expression. The effects are direct and well-documented:
        they accelerate the transit of cells from the basal layer to the surface
        (increasing turnover), stimulate collagen production in the dermis,
        inhibit the enzymes that break collagen down (matrix metalloproteinases),
        and prevent the formation of comedones by keeping follicular cells from
        clumping together.
      </p>
      <p>
        Tretinoin (all-trans retinoic acid) is the prescription-strength form
        and the most studied. It binds directly to RAR without needing
        conversion. OTC retinol must be converted to retinaldehyde and then
        to retinoic acid within the skin: two enzymatic steps that reduce
        potency and delay onset. Michelle Wong PhD (Lab Muffin, 2019) explains
        this ladder clearly: retinoids are the most evidence-backed topical
        ingredient after sunscreen, addressing photoaging, acne, cell turnover,
        and collagen simultaneously. Retinaldehyde (retinal) sits between retinol
        and tretinoin: one conversion step, stronger than retinol, less irritating
        than tretinoin.
      </p>
      <p>
        The adjustment period is real and expected. When you first start a
        retinoid, receptor upregulation causes a period of increased irritation,
        dryness, and sometimes a temporary increase in breakouts (the purge).
        This is not an allergic reaction and is not a reason to stop. It
        resolves within four to eight weeks. Dr. Dray (2022) recommends the
        following start protocol for tretinoin: begin two nights per week,
        apply to dry skin after cleansing, and buffer with a moisturizer if
        irritation is significant. Increase to three nights per week after
        four weeks if tolerating well, then to nightly over the following
        four to six weeks.
      </p>
      <p>
        During the first month, avoid combining a retinoid in the same PM
        session with exfoliating acids (AHAs like glycolic or lactic acid,
        BHAs like salicylic acid) or vitamin C serums. These combinations
        increase irritation without proportionally increasing benefit.
        Morning sunscreen is not optional when using a retinoid: retinoids
        increase photosensitivity by thinning the upper epidermal layers.
      </p>
      <p>
        Retinoids take time to work. The earliest effects on acne appear in
        eight to twelve weeks. Anti-aging effects require six to twelve months
        of consistent use. Anyone who stops after four weeks because they do
        not see a difference has not given the product enough time to act.
      </p>

      <AnchorHeading as="h2" id="acne-treatment">
        7. Acne treatment: salicylic acid and benzoyl peroxide
      </AnchorHeading>
      <p>
        Acne has two main presentations that require different interventions.
        Comedonal acne (blackheads and whiteheads) is caused by blocked
        follicles without significant bacterial involvement. Inflammatory acne
        (red papules, pustules, nodules, cysts) involves Cutibacterium acnes
        bacteria driving an immune response inside the follicle.
      </p>
      <p>
        Salicylic acid is a beta-hydroxy acid (BHA). It is lipophilic, meaning
        it dissolves in oil and can penetrate the sebum-filled follicle. Once
        inside, it loosens the keratin plug blocking the pore and promotes
        shedding of the follicular lining cells. This makes it comedolytic:
        it prevents and clears blackheads and whiteheads. It has limited effect
        on inflammatory lesions because bacteria are not its primary target.
        Available OTC at 0.5-2%, it is appropriate for mild non-inflammatory
        acne or as a maintenance treatment for congested skin.
      </p>
      <p>
        Benzoyl peroxide (BPO) works differently. It is a strong oxidizing agent
        that kills Cutibacterium acnes by releasing free oxygen radicals into
        the follicle. It is bactericidal, not bacteriostatic, which means it
        kills bacteria rather than merely slowing their growth. Dr. Dray (2020)
        describes it as the most bactericidal OTC ingredient available for acne.
        Available at 2.5-10%, it is most useful for inflammatory papules,
        pustules, and as a maintenance treatment for acne-prone skin. It bleaches
        fabric and is best used with designated white pillowcases and towels.
        At higher concentrations (10%) it is not meaningfully more effective than
        2.5% and causes more irritation.
      </p>
      <p>
        The two treatments can be used together because they work by different
        mechanisms. A common sequence for moderate mixed acne: salicylic acid
        cleanser or toner in the AM, benzoyl peroxide spot treatment in the PM
        (not the same session as a retinoid to avoid over-stacking). For acne
        beyond mild-to-moderate severity, topical tretinoin (which is also
        comedolytic and anti-inflammatory) or oral treatment with a
        dermatologist is appropriate.
      </p>

      <AnchorHeading as="h2" id="worked-example">
        8. Worked example: building a minimum-viable routine
      </AnchorHeading>
      <p>
        Consider a 22-year-old with mildly oily skin, occasional inflammatory
        breakouts along the jawline, and no current skincare routine. He lives
        in a city with moderate sun exposure year-round.
      </p>
      <p>
        <strong>Step 1: identify the priorities.</strong> Prevent future UV
        damage (sunscreen), address the breakouts (acne treatment), and avoid
        disrupting a barrier that is currently functioning adequately. No
        retinoid in week one: introduce one new product at a time so you can
        identify any adverse reaction.
      </p>
      <pre>{`AM routine:
  1. Gentle low-pH cleanser (amino acid surfactant, e.g. CeraVe Foaming)
  2. Lightweight moisturizer with ceramides (optional if skin not dry)
  3. SPF 50 broad-spectrum sunscreen, 1/4 tsp, apply as last step

PM routine:
  1. Same cleanser
  2. Benzoyl peroxide 2.5% as spot treatment on active lesions
  3. Ceramide moisturizer

Week 4 onward (once acne is stable):
  Add tretinoin 0.025% two nights per week in the PM routine,
  before moisturizer. Do not combine with BPO on the same night.`}</pre>
      <p>
        This routine costs less than $50 to assemble entirely from drugstore
        products. It covers the three categories with RCT evidence. It does
        not include a serum, a toner, a vitamin C product, or an eye cream.
        None of those absences represent a gap in the evidence base.
      </p>
      <p>
        <strong>What &ldquo;routine creep&rdquo; looks like.</strong> Three months later
        the same person has added a niacinamide serum, a glycolic acid toner,
        a separate eye cream, a hydrating mist, and a weekly clay mask. His skin
        is now red and reactive. The individual products are all defensible on
        paper, but the combination is over-treating his skin. The correct
        response is not to find a better serum; it is to strip back to the
        original four and reintroduce one product at a time.
      </p>

      <AnchorHeading as="h2" id="exercises">9. Exercises</AnchorHeading>
      <p>Each exercise is answerable from this reading alone.</p>

      <Exercise n={1}>
        <p>
          Your skin feels tight, stings when you apply plain moisturizer, and
          has started reacting to products that never bothered you before. Name
          the likely condition, its cause, and the two-step protocol for
          addressing it before introducing any active ingredients.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          You apply SPF 50 sunscreen every morning, but you use approximately
          half a teaspoon for your face (about twice the recommended dose) while
          your friend applies a thin layer using about 0.6 mL. Using Michelle
          Wong&rsquo;s under-dosing principle, estimate the effective SPF each of you
          is getting. Show your reasoning.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          A skincare product claims to &ldquo;visibly reduce the appearance of
          fine lines in 4 weeks.&rdquo; Using the evidence hierarchy from Week 1
          and what you know from this reading about FDA cosmetic classification,
          explain what this claim does and does not tell you about the product&rsquo;s
          actual effects on skin structure.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          You have moderate inflammatory acne (papules and pustules) and also
          frequent blackheads on your nose. You want to add one OTC active
          ingredient to address both. Is there one product that covers both
          presentations, or should you use two different actives? Justify your
          answer using the mechanisms described in section 7.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          You start tretinoin 0.025% and after two weeks your skin is red,
          flaky, and your acne has briefly gotten worse. List three possible
          explanations for the acne worsening and state whether each is a
          reason to stop the tretinoin or continue. Name the adjustment
          you would make (if any) to your routine.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet (Week 3 section).</strong> Bring your
          current products to the bathroom shelf audit. You will audit each
          product against the framework from this reading and build a written
          AM/PM routine with one justification sentence per product.
        </li>
        <li>
          <strong>Lecture 1 (Skin biology for the impatient).</strong> Covers
          the skin barrier, sebum and acne, photoaging, cell turnover, and
          retinoid mechanism in more depth.
        </li>
        <li>
          <strong>Lecture 2 (The four-product routine).</strong> Covers product
          selection in practice: surfactant types, SPF math, mineral vs chemical
          sunscreen, start protocols for tretinoin, and the salicylic acid vs
          benzoyl peroxide decision.
        </li>
        <li>
          <strong>HW1 (Honest baseline audit) due this week.</strong> Your
          before photos and baseline measurements. A consistent photo is more
          useful than a flattering one.
        </li>
      </ul>

      <Takeaways>
        <li>
          Skincare does not change bone structure. Most &ldquo;anti-aging&rdquo;
          serum claims are unregulated cosmetic language. The ingredients with
          real evidence are sunscreen, retinoids, and specific acne actives.
        </li>
        <li>
          The skin barrier is a lipid matrix. Anything that strips lipids
          or disrupts pH damages it. Repair it before adding actives.
        </li>
        <li>
          Sunscreen application dose matters as much as SPF number. A quarter
          teaspoon for the face delivers the labeled SPF. Under-dosing by half
          cuts effective protection by roughly the square root of the stated value.
        </li>
        <li>
          Retinoids work by binding nuclear receptors, accelerating cell
          turnover, and stimulating collagen. They take 12 weeks minimum to
          show acne results and up to 12 months for anti-aging effects.
          Start two nights per week and increase slowly.
        </li>
        <li>
          Salicylic acid clears comedones (lipophilic, penetrates the follicle).
          Benzoyl peroxide kills acne bacteria (bactericidal). They target
          different parts of the acne pathway and can be used together.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Dr. Andrea Suarez (Dr Dray). &ldquo;SKINCARE RESET 2023: How to HEAL YOUR
          SKIN.&rdquo; YouTube, 2023.
          youtube.com/watch?v=DVerMPTyACk.
          Board-certified dermatologist on barrier repair protocol, ceramides,
          niacinamide, and reducing active-ingredient load during barrier healing.
        </p>
        <p>
          Dr. Andrea Suarez (Dr Dray). &ldquo;Starting tretinoin: WHAT TO USE
          &amp; AVOID.&rdquo; YouTube, 2022.
          youtube.com/watch?v=U7PjrPWp3X0.
          Source for the tretinoin start protocol: twice-weekly introduction,
          moisturizer buffer, avoiding exfoliating acids in the first month.
        </p>
        <p>
          Dr. Andrea Suarez (Dr Dray). &ldquo;SALICYLIC ACID VERSUS BENZOYL
          PEROXIDE.&rdquo; YouTube, 2020.
          youtube.com/watch?v=MyPm5CUfEOU.
          Mechanisms and clinical decision logic for the two main OTC acne
          actives; benzoyl peroxide as the most bactericidal OTC ingredient.
        </p>
        <p>
          Wong, Michelle PhD (Lab Muffin Beauty Science). &ldquo;What Does SPF Mean?
          Is High SPF Sunscreen Better?&rdquo; YouTube, 2019.
          youtube.com/watch?v=5ISHlw7j3t0.
          Source for the SPF math (SPF 30 vs 50 ratio), under-dosing and
          effective-SPF reduction, and the PA/PPD system for UVA protection.
        </p>
        <p>
          Wong, Michelle PhD (Lab Muffin Beauty Science). &ldquo;How to Start on
          Retinoids.&rdquo; YouTube, 2019.
          youtube.com/watch?v=I2XV3nMyb9Y.
          Retinoid ladder from retinol to tretinoin, receptor upregulation and
          the adjustment period, evidence base across photoaging and acne.
        </p>
        <p>
          Dr. Sam Ellis. &ldquo;10 Sunscreen Mistakes to Avoid (How Much Sunscreen
          to Apply &amp; More).&rdquo; YouTube, 2022.
          youtube.com/watch?v=fF4k2hP79j4.
          Source for the under-application statistic (20-50% of recommended dose),
          the resulting real-world SPF, and the quarter-teaspoon quantity for the face.
        </p>
        <p>
          American Academy of Dermatology. &ldquo;How to Select a Sunscreen.&rdquo;
          aad.org, 2023.
          aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-select-sunscreen.
          AAD guidance: SPF 30 minimum, broad-spectrum (UVA &amp; UVB), water
          resistance, and approximately 1 oz for full body coverage.
        </p>
        <p>
          Welsh, James. &ldquo;SIMPLE 4 STEP SKINCARE ROUTINE - Skincare Routine For
          Beginners.&rdquo; YouTube, 2019.
          youtube.com/watch?v=9R7EGdTtTe4.
          Four-product framework for male beginners: cleanser, moisturizer,
          SPF, and one targeted treatment. Source for men&rsquo;s skin characteristics
          (thicker dermis, higher sebum output, post-shave irritation).
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk03ReadingSearchBody =
  "skincare skin biology skin barrier stratum corneum ceramides photoaging UV sunscreen SPF PA broad-spectrum UVA UVB cleanser surfactant moisturizer occlusive humectant emollient retinoid tretinoin retinol cell turnover acne salicylic acid benzoyl peroxide routine men beginners evidence-based dermatology reading Week 3";
