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
      title="Week 4: hair, hair loss, and a haircut that fits your face"
      kicker="Evidence-Based Looksmaxxing · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the biology of how hair grows and how androgenetic
          alopecia works; the clinical evidence for the two FDA-approved
          treatments, minoxidil and finasteride, including the side-effect data
          that online forums frequently misrepresent; the Andre Walker hair
          typing system and what it implies for washing and product use; and the
          face-shape framework for matching a haircut to your proportions. By the
          end, you will be able to explain the mechanism of hair loss, evaluate
          the evidence for each treatment honestly, identify your own hair type,
          and brief a barber with a specific and achievable cut goal.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Evidence hierarchy
          (<code>evidence-hierarchy</code>), the difference between peer-reviewed
          trials and forum claims, and habit-stacking
          (<code>habit-stacking</code>) from weeks 1 and 2. This reading
          introduces: <code>hair-growth-cycle</code>,{" "}
          <code>androgenetic-alopecia</code>, <code>minoxidil</code>,{" "}
          <code>finasteride</code>, <code>hair-typing</code>,{" "}
          <code>wash-frequency</code>, <code>face-shape</code>, and{" "}
          <code>styling-products</code>.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-the-hair-growth-cycle">
        1. The hair growth cycle
      </AnchorHeading>
      <p>
        Every hair on your scalp cycles independently through three phases.
        During anagen, the growth phase, the hair matrix at the base of the
        follicle divides rapidly and the hair shaft extends. For scalp hair,
        anagen lasts two to seven years and determines how long your hair can
        grow. At any moment, roughly 85 to 90 percent of your scalp follicles
        are in anagen. During catagen, a two-to-three-week transition phase,
        cell division stops and the follicle contracts. During telogen, a
        resting phase lasting approximately three months, the old hair sits
        loosely in the follicle until a new anagen cycle displaces it. Shedding
        50 to 100 hairs per day is normal telogen turnover.
      </p>
      <p>
        The length of anagen determines the maximum terminal length of each
        hair. People whose anagen phase runs long can grow hair to their waist;
        people with a shorter anagen phase reach a shorter natural maximum. This
        is genetic, not a product of nutrition or scalp massage, though severe
        nutritional deficiency can shorten anagen.
      </p>
      <p>
        Understanding this cycle matters for two reasons. First, it explains
        why treatments for hair loss take months to show results: you are
        waiting for new anagen cycles to produce thicker hairs, and those cycles
        run on their own timeline. Second, it contextualizes the early shedding
        that minoxidil users often experience. When minoxidil prolongs anagen
        and pushes resting follicles into a new growth cycle, the old telogen
        hairs shed to make room. That initial shed is a sign the treatment is
        working.
      </p>

      <AnchorHeading as="h2" id="2-androgenetic-alopecia">
        2. Androgenetic alopecia: the mechanism
      </AnchorHeading>
      <p>
        Androgenetic alopecia (AGA) is the most common form of hair loss in
        men. It affects approximately 50 percent of men by age 50, and it can
        begin in the late teens or early twenties (Trüeb, Endotext, 2015). The
        mechanism begins with testosterone. In genetically susceptible
        follicles, testosterone is converted to dihydrotestosterone (DHT) by
        the enzyme 5-alpha reductase type 2. DHT binds to androgen receptors
        in the dermal papilla of those follicles. Each binding shortens the
        anagen phase incrementally. Over successive cycles, what was a thick
        terminal hair becomes a shorter, finer, lighter hair. Eventually the
        follicle produces only fine vellus hair, and then nothing.
      </p>
      <p>
        The susceptibility of individual follicles to DHT is genetically
        inherited. The follicles at the temples and vertex of the scalp are
        more sensitive than those at the back and sides, which is why AGA
        produces the characteristic recession pattern rather than uniform
        diffuse loss. The Norwood-Hamilton scale classifies this progression
        from Type I (no significant recession) to Type VII (a horseshoe-shaped
        fringe of hair at the sides and back). Finasteride works better at the
        vertex than at the frontal hairline, which means the stage and location
        of your loss affects treatment expectations (Trüeb, 2015).
      </p>
      <p>
        Common folk theories about AGA are worth dismissing directly. Wearing
        hats does not cause hair loss: the follicle is not starved of oxygen by
        a cap. Shampooing frequently does not cause hair loss. Stress can
        trigger a separate condition called telogen effluvium, which causes
        temporary diffuse shedding rather than the patterned recession of AGA.
        A dermatologist can distinguish AGA from telogen effluvium and from
        alopecia areata, which is an autoimmune condition, both of which
        require different management.
      </p>

      <AnchorHeading as="h2" id="3-minoxidil-evidence">
        3. Minoxidil: what the RCT evidence shows
      </AnchorHeading>
      <p>
        Topical minoxidil is one of two FDA-approved treatments for AGA. The
        definitive efficacy comparison between the 5% and 2% formulations is
        Olsen et al. (2002), a 48-week double-blind RCT with 393 men. The
        primary endpoint was the change in non-vellus hair count per square
        centimeter at the vertex. The 5% group gained a mean of 18.6
        non-vellus hairs per cm&sup2;, compared with 12.7 for the 2% group and
        3.9 for placebo. That is 45 percent more regrowth than 2% minoxidil
        and a response that arrived four weeks earlier. Global photographic
        assessment rated 60 percent of the 5% group as improved, against 23
        percent on placebo.
      </p>
      <p>
        Minoxidil&rsquo;s mechanism on hair follicles is not completely
        understood. It is a potassium channel opener, which dilates blood
        vessels, and current evidence points to its prolonging the anagen phase
        and increasing perifollicular blood flow. What is established is that
        its effect is not permanent: stopping minoxidil returns hair to its
        pre-treatment trajectory within months. The treatment stabilizes and
        modestly reverses loss; it does not cure the underlying genetic
        sensitivity of the follicles to DHT.
      </p>
      <p>
        Oral minoxidil at low doses (0.625 to 2.5 mg daily, far below the
        cardiac dosing range) has become an alternative or complement to topical
        application, particularly for men who find daily topical application
        inconvenient. Dr. Sam Ellis (2022) describes it as &ldquo;a wonderful,
        affordable, convenient hair loss intervention for the right patient.&rdquo;
        Oral minoxidil is not FDA-approved for AGA specifically, but it is used
        off-label under dermatologist guidance. The main side effects at low
        dose are hypertrichosis (increased body hair) and rare cases of fluid
        retention. A dermatologist will review your cardiac history before
        prescribing.
      </p>

      <Callout title="The initial shed">
        <p>
          In the first six to eight weeks of minoxidil use, many men experience
          increased shedding. This is because minoxidil pushes follicles from
          telogen into a new anagen cycle, and the old resting hairs shed to
          make room. It is a sign the treatment is working, not a sign it is
          making things worse. If you stop treatment during the initial shed,
          you will not see the regrowth benefit. The shed resolves on its own.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-finasteride-evidence">
        4. Finasteride: evidence and side-effect data presented honestly
      </AnchorHeading>
      <p>
        Oral finasteride 1 mg daily is the second FDA-approved treatment for
        male AGA. Mella et al. (2010) conducted a systematic review of 12 RCTs
        with 3,927 men, published in the Archives of Dermatology. The efficacy
        finding is clear: finasteride increases mean hair count by approximately
        9.4 percent in the short term and 24.3 percent long term compared to
        placebo. Both investigators and patients rated more finasteride-treated
        men as improved, in both short- and long-term studies. Evidence quality
        is rated as moderate.
      </p>
      <p>
        Finasteride works by inhibiting 5-alpha reductase type 2, which reduces
        scalp DHT by approximately 60 to 70 percent (Trüeb, 2015). This
        interrupts the miniaturization signal. Unlike minoxidil, finasteride
        addresses the mechanism of AGA rather than only the symptoms.
      </p>
      <p>
        The Mella 2010 review documents moderate-quality evidence of sexual
        side effects including erectile dysfunction, decreased libido, and
        ejaculatory dysfunction. Discontinuation rates in the RCTs due to side
        effects were comparable to placebo, which has led some sources to
        minimize the sexual side-effect signal. This is a misreading of what
        the data can tell you. A comparable discontinuation rate does not mean
        comparable incidence; it may mean men discontinued at similar rates for
        different reasons, or that the trial periods were too short to capture
        persistent effects. The honest summary is: the sexual side-effect signal
        is real and documented in peer-reviewed trials. It is small but not zero.
      </p>
      <p>
        Post-finasteride syndrome (PFS), describing persistent sexual and
        cognitive side effects that continue after stopping the medication, is
        a clinical report that has not been confirmed or definitively disproven
        by RCT-level evidence. The International Society for Sexual Medicine
        has acknowledged it as an area requiring further study. The appropriate
        response is neither to dismiss it nor to treat online forum
        case-reports as equivalent to systematic evidence. PFS should be part
        of the conversation you have with a prescribing dermatologist, not a
        reason to avoid the conversation altogether.
      </p>
      <p>
        The practical implication: finasteride is a prescription drug that
        should be started under dermatologist supervision, with a clear
        conversation about your personal risk tolerance. Men with a family
        history of prostate conditions should flag that. Men who experience
        sexual side effects during treatment should tell their prescriber
        promptly rather than continuing to take the medication hoping the
        effects resolve. The treatment is effective. The risk is real and
        manageable. The decision belongs to you and your doctor.
      </p>

      <AnchorHeading as="h2" id="5-hair-typing">
        5. Hair typing: the Andre Walker system
      </AnchorHeading>
      <p>
        Andre Walker created his four-category hair typing system in the 1990s
        as a practical care-matching tool, not as a definitive biological
        taxonomy. Walker (2021) explains the purpose directly: the system
        was designed to help people identify which products and techniques
        actually work for their hair texture. Each category carries practical
        implications for washing, conditioning, and product selection that are
        meaningless if hair type is treated as pure aesthetic identity rather
        than as a descriptor of physical behavior.
      </p>
      <p>
        Type 1 is straight hair. It has no natural curl or wave pattern. Sebum
        from the scalp travels easily down the shaft, making it prone to
        oiliness, especially at the roots. Daily washing is often appropriate
        and will not cause damage in the way it would for curlier types. Lighter
        products work best; heavy oils or butters weigh the hair down visibly.
        Type 2 is wavy hair, with a loose S-wave pattern that falls somewhere
        between straight and curly. Sebum does not travel as freely, so washing
        every two to three days suits most Type 2 hair. Products that define
        wave without adding weight perform best here.
      </p>
      <p>
        Type 3 is curly hair, with a defined curl pattern from loose ringlets
        to tight spirals. Curly hair is more prone to frizz and dryness because
        the curl shape interrupts the journey of sebum from root to end. Most
        Type 3 hair benefits from washing once or twice per week with a
        sulfate-free or gentle shampoo, and from leave-in or rinse-out
        conditioning after every wash. Type 4 is coily or kinky hair, with
        tight coil patterns that range from soft S-coils to dense zig-zag
        patterns. Sebum rarely reaches the ends, making moisture retention the
        central care challenge. Weekly or less frequent washing, co-washing
        (using conditioner as the sole cleansing agent between washes), and
        heavier moisturizing products are standard care.
      </p>
      <p>
        The A, B, and C subcategories within each number describe fine,
        medium, and coarse strands respectively. Porosity adds a second
        dimension: low-porosity hair resists moisture absorption and requires
        heat or lighter, water-based products to hydrate; high-porosity hair
        absorbs moisture quickly but loses it just as fast, requiring
        sealant-type products to retain hydration. Neither system is a
        perfect predictor: many people have mixed types across different
        regions of the scalp.
      </p>

      <AnchorHeading as="h2" id="6-wash-frequency">
        6. Wash frequency, shampoo, and conditioner
      </AnchorHeading>
      <p>
        The single most common hair care mistake is washing at a frequency that
        does not match hair type. Washing straight hair daily is appropriate and
        often necessary. Washing coily hair daily strips the scalp&rsquo;s
        natural oils and leaves the hair shaft brittle and more prone to
        breakage without any compensating benefit, because the oils would not
        have reached the ends anyway.
      </p>
      <p>
        Shampoo works through surfactants, molecules with a water-soluble head
        and an oil-soluble tail that simultaneously attract scalp sebum and
        rinse it away with water. Sodium lauryl sulfate (SLS) and sodium laureth
        sulfate (SLES) are the most effective surfactants for removing oil and
        product buildup, but they are also the most stripping. Sulfate-free
        shampoos use milder surfactants such as cocamidopropyl betaine and are
        appropriate for Type 3, Type 4, color-treated, and scalp-sensitive
        hair. Clarifying shampoos use high concentrations of sulfates and are
        useful once a month for removing product buildup, but are too stripping
        for regular use on any hair type.
      </p>
      <p>
        Conditioner deposits moisturizing compounds and proteins onto the hair
        shaft. Fatty alcohols such as cetyl and stearyl alcohol smooth the
        cuticle. Cationic surfactants like behentrimonium chloride have a
        positive charge that bonds to the negatively charged damaged areas of
        the hair cuticle. Hydrolyzed proteins temporarily fill gaps in the
        cuticle, reducing porosity and the friction that causes tangles.
        Leave-in conditioner applies the same principles with a lighter
        formulation that stays on the hair until the next wash. For
        Type 3 and Type 4 hair, leave-in conditioning after every wash is
        standard practice rather than optional.
      </p>

      <AnchorHeading as="h2" id="7-face-shape">
        7. Face shape and cut selection
      </AnchorHeading>
      <p>
        A face-shape-matched haircut does not change your face. It uses volume,
        length, and silhouette to redirect visual weight toward the proportions
        of an oval face, which is considered the reference shape in most
        barber and stylist literature because it has no extreme characteristics
        to compensate for. Conrad (GQ, 2023) states the goal plainly:
        &ldquo;add width where you are narrow, add length where you are round.&rdquo;
        Every cut decision follows from that principle.
      </p>
      <p>
        An oval face has roughly balanced forehead, cheekbone, and jaw widths,
        with a length slightly greater than width. Most cuts work on an oval
        face. A round face has similar width and length measurements and a
        rounded jawline. The cut strategy adds apparent height by keeping
        the top longer and the sides shorter, and avoids any volume above the
        ears. A square face has a defined angular jawline with forehead and
        cheekbone widths that are roughly equal. Softening the corners with
        textured length and avoiding very close fades that expose the angular
        jaw gives a more balanced result.
      </p>
      <p>
        An oblong or rectangular face is longer than it is wide, with parallel
        forehead and jaw widths. The cut strategy adds visual width at the
        sides and avoids additional length on top: a very high, close-cropped
        look makes an oblong face look longer. A heart-shaped face has a wide
        forehead and narrow chin. Volume at or below the cheekbone, with
        nothing added at the top, reduces the forehead-to-chin contrast. A
        fringe or textured forward styling at the front can reduce apparent
        forehead width. A diamond face has narrow forehead and jaw with wide
        cheekbones. Width is added at the forehead through a side part or
        fuller styling on top, with the sides kept tighter at the cheekbone.
      </p>
      <p>
        Hairline recession adds a variable that most face-shape frameworks
        ignore. A high skin fade on a man with early temporal recession
        (Norwood II-III) exposes the recession rather than framing it. A
        lower taper or textured fade can bring the visual transition down to
        where the hairline actually is. Conrad (GQ, 2023) addresses this
        directly: the cut should account for where your hairline is today,
        not where it was five years ago. This is not pessimistic advice; it
        is the difference between a cut that looks intentional and one that
        draws attention to a transition the wearer is managing.
      </p>

      <AnchorHeading as="h2" id="8-worked-example">
        8. Worked example: choosing a cut
      </AnchorHeading>
      <p>
        Consider a man with a round face, wavy Type 2B hair, a cowlick at the
        crown, and early temporal recession. He washes daily and currently uses
        a two-in-one shampoo-conditioner.
      </p>
      <p>
        First, wash and care. Daily washing is fine for Type 2B hair, but a
        dedicated conditioner (not a two-in-one) will give better texture
        definition and reduce frizz. Every other day is also an option if
        oiliness is not an issue. A lightweight rinse-out conditioner used
        two or three times per week is the minimum change.
      </p>
      <p>
        Second, cut goal. A round face needs apparent height and minimal
        side width. The strategy is to keep the top longer, control the sides,
        and avoid any width above the ears. The cowlick at the crown means
        the top hair should be long enough to weight the cowlick down, probably
        three inches or more at the longest point; shorter hair at the crown
        will stick up unpredictably. A volume-adding style (like a
        textured quiff or a side part with height) can work with rather than
        against the cowlick.
      </p>
      <p>
        Third, the recession. A mid fade that starts above the ear would expose
        the temporal recession. A low taper that blends the sides into the
        longer top at a lower point, or a textured disconnected cut with the
        transition below the temples, both avoid this problem.
      </p>
      <p>
        The resulting brief: &ldquo;I want to add some height on top to
        balance my round face. Keep the top long enough to hold down a crown
        cowlick, probably three to three and a half inches. Low taper or low
        fade on the sides, below the temples, because my hairline is starting
        to recede there. Here is my reference photo. I also want a texture
        that air-dries close to this without daily blow-drying.&rdquo;
      </p>

      <AnchorHeading as="h2" id="9-exercises">9. Exercises</AnchorHeading>

      <Exercise n={1}>
        <p>
          Draw a simple diagram of the three hair growth phases, labeling
          anagen, catagen, and telogen with their approximate durations.
          Then write two sentences explaining how AGA shortens the anagen
          phase and what the observable result of miniaturization is over
          successive cycles.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          The Olsen 2002 RCT reported that 5% topical minoxidil produced
          18.6 non-vellus hairs per cm&sup2; gained versus 3.9 on placebo.
          Calculate the absolute difference and express it as a multiple of
          the placebo response. Then write one sentence on what the 60%
          global improvement rate in the 5% group means in practical terms
          for someone starting treatment today.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          A friend who has been on finasteride for three months tells you he
          read on a forum that the sexual side effects are &ldquo;pharmaceutical
          propaganda&rdquo; and that the real data shows no risk. Using the
          Mella 2010 systematic review evidence and the evidence-hierarchy
          concepts from week 1, write a four-to-six sentence response that
          addresses his claim accurately, without either dismissing the
          side-effect signal or overstating it.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Classify your own hair as Type 1, 2, 3, or 4 with an A/B/C
          subcategory. Then write two concrete implications: one for wash
          frequency (with a specific number of days) and one for the kind
          of conditioner (rinse-out, leave-in, or co-wash) that suits your
          type. If you are uncertain of your type, describe what additional
          observation would resolve the ambiguity.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Identify your face shape using the framework from section 7.
          Write your face shape, the cut goal it implies (add length, add
          width, reduce bulk at the sides, or balance the forehead), and
          one specific cut characteristic (a fade level, a length at the
          top, or a styling direction) that advances that goal given any
          constraints you have, such as a cowlick or hairline recession.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="10-going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The worksheet walks you through
          face-shape identification, a growth-pattern audit, reference-photo
          selection, and writing a barber brief. Bring your reference photos
          to section.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Hair biology, AGA mechanism,
          and treatment evidence in depth with clinical context.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Hair typing, wash frequency,
          face-shape cut selection, and barber communication live demonstration.
        </li>
        <li>
          <strong>Week 5 reading.</strong> Body composition: strength training
          and nutrition. The grooming log assigned this week feeds into the
          week 6 review.
        </li>
      </ul>

      <Takeaways>
        <li>
          AGA works by DHT shortening the anagen phase in genetically susceptible
          follicles. It can start in your early twenties and is easier to slow
          than to reverse after years of thinning.
        </li>
        <li>
          5% topical minoxidil produces 45% more non-vellus hair regrowth than
          2% at 48 weeks (Olsen et al., 2002). Results require continuous use
          and take months to appear.
        </li>
        <li>
          Finasteride increases long-term hair count approximately 24% versus
          placebo (Mella et al., 2010). The sexual side-effect signal is real,
          documented, and small. Start it only with dermatologist supervision.
        </li>
        <li>
          Your hair type determines how often to wash and what products to use.
          Daily washing suits straight hair; once-weekly or less suits coily hair.
          Using the wrong frequency works against the hair, not for it.
        </li>
        <li>
          A face-shape-matched cut creates the visual impression of an oval face.
          Account for your actual hairline and growth pattern, not an idealized
          version of either.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Mella, José Manuel, María Clara Perret, Matías Manzotti, Hugo Norberto
          Catalano, Gordon Guyatt. &ldquo;Efficacy and safety of finasteride
          therapy for androgenetic alopecia: a systematic review.&rdquo;{" "}
          <em>Archives of Dermatology</em>, October 2010.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20956649/">
            pubmed.ncbi.nlm.nih.gov/20956649
          </a>
          . Systematic review of 12 RCTs (n = 3,927); finasteride increases mean
          hair count approximately 24.3% long-term versus placebo; documents
          moderate-quality evidence of sexual side effects.
        </p>
        <p>
          Olsen, Elise A., Frederic E. Dunlap, Thomas Funicella, et al.
          &ldquo;A randomized clinical trial of 5% topical minoxidil versus
          2% topical minoxidil and placebo in the treatment of androgenetic
          alopecia in men.&rdquo; <em>Journal of the American Academy of
          Dermatology</em> 47 (2002): 377-385.{" "}
          <a href="https://www.semanticscholar.org/paper/A-randomized-clinical-trial-of-5-topical-minoxidil-Olsen-Dunlap/9adafe31e5569d0844774040b3231e98c43d0962">
            Semantic Scholar record
          </a>
          . Double-blind RCT, n = 393 men, 48 weeks; 5% minoxidil produced
          18.6 non-vellus hairs per cm&sup2; versus 3.9 on placebo.
        </p>
        <p>
          Trüeb RM. &ldquo;Male Androgenetic Alopecia.&rdquo; In:{" "}
          <em>Endotext</em>. NCBI Bookshelf, 2015.{" "}
          <a href="https://www.ncbi.nlm.nih.gov/books/NBK278957/">
            ncbi.nlm.nih.gov/books/NBK278957
          </a>
          . Pathophysiology, Norwood-Hamilton classification, FDA-approved
          treatments; finasteride efficacy stronger at vertex than frontal.
        </p>
        <p>
          Ellis, Sam (Dr. Sam Ellis, board-certified dermatologist).
          &ldquo;Affordable treatment for hair loss? Dermatologist explains.&rdquo;
          YouTube, 2022.{" "}
          <a href="https://www.youtube.com/watch?v=zoNDhLLdf3Q">
            youtube.com/watch?v=zoNDhLLdf3Q
          </a>
          . Oral minoxidil mechanism, dosing, clinical decision framework for
          combining with finasteride.
        </p>
        <p>
          Walker, Andre. &ldquo;Andre Talks hair and the infamous hair typing
          system.&rdquo; YouTube, 2021.{" "}
          <a href="https://www.youtube.com/watch?v=WOrm2N9KKl0">
            youtube.com/watch?v=WOrm2N9KKl0
          </a>
          . Primary source for the 1-4 A/B/C hair typing system; purpose is
          practical product and technique matching, not identity classification.
        </p>
        <p>
          Conrad, Matty (Victory Barber &amp; Brand) / GQ.
          &ldquo;How to choose the best haircut for your face shape.&rdquo;
          YouTube, 2023.{" "}
          <a href="https://www.youtube.com/watch?v=zXIofF28eYk">
            youtube.com/watch?v=zXIofF28eYk
          </a>
          . Face-shape identification, cut matching for six shapes, hairline
          recession considerations.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk04ReadingSearchBody =
  "hair growth cycle anagen catagen telogen androgenetic alopecia AGA DHT dihydrotestosterone 5-alpha reductase Norwood Hamilton follicular miniaturization minoxidil 5% topical RCT Olsen 2002 finasteride systematic review Mella 2010 sexual side effects post-finasteride syndrome dermatologist hair typing Andre Walker Type 1 2 3 4 straight wavy curly coily wash frequency sulfate shampoo conditioner leave-in face shape oval round square heart diamond oblong cut goal barber brief haircut fade taper Week 4 reading";
