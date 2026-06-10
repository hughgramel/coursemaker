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
      title="Week 6: Dental, whitening, and the jawline myths"
      kicker="Looksmaxxing: Evidence-Based Softmaxxing &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the oral hygiene habits that demonstrably reduce
          gum disease and bad breath, the whitening pathways that work and the
          ones that do not, and an honest accounting of three popular jawline
          claims: mewing, chewing for masseter hypertrophy, and orthodontics for
          structural change. By the end you will be able to implement a
          peer-reviewed oral hygiene routine, choose a whitening approach matched
          to your actual staining type, and evaluate jawline claims with the
          same evidence hierarchy you applied in week one.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You have read the week one
          material on <strong>evidence hierarchy</strong> and{" "}
          <strong>common myths</strong>, including the evidence-inversion pattern
          common in hardmaxxing forums. You are familiar with{" "}
          <strong>habit-stacking</strong> from week two. The week five lecture
          on <strong>body recomposition</strong> introduced the relationship
          between body fat and facial definition; that material is extended here.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-plaque-biofilm">
        1. Plaque biofilm: what it is and why brushing technique matters
      </AnchorHeading>
      <p>
        Dental plaque is a structured bacterial community, not loose food debris.
        Bacteria adhere to tooth surfaces within hours of cleaning and begin
        secreting a polysaccharide matrix that anchors them in place. This
        structure, called a <strong>biofilm</strong>, protects the bacteria from
        saliva and from low-concentration antimicrobials like mouthwash. The
        biofilm thickens over 24-48 hours. If it remains undisturbed for 48-72
        hours, it begins to mineralize into calculus (tartar), a hardened deposit
        that mechanical brushing can no longer remove. Calculus removal requires
        professional scaling.
      </p>
      <p>
        The clinical consequence of undisturbed biofilm at the gumline is
        gingivitis: inflammation of the gingival tissue caused by bacterial
        metabolites. Gingivitis is reversible with improved hygiene. Left
        untreated for years, it can progress to periodontitis, which involves
        irreversible bone loss around the tooth roots. The goal of daily
        brushing is to mechanically disrupt the biofilm before it mineralizes,
        not after.
      </p>
      <p>
        The American Dental Association recommends brushing twice daily, for
        two minutes each time, with a soft-bristled brush and an ADA-accepted
        fluoride toothpaste. The technique matters as much as the frequency. The
        ADA specifies holding the brush at a 45-degree angle to the gums and
        using short, tooth-wide strokes. This angle directs bristle tips into
        the gingival sulcus, the shallow pocket between the tooth surface and
        the gum edge where supragingival plaque accumulates. Horizontal
        scrubbing across the tooth surface misses the sulcus and, over years,
        abrades enamel. Medium and hard bristles increase abrasion risk without
        improving plaque removal (ADA MouthHealthy.org, 2023).
      </p>
      <p>
        Most people brush for approximately 45 seconds. Studies using
        timer-equipped brushes consistently document this. Two minutes is not
        arbitrary: it takes roughly 30 seconds per quadrant to cover outer
        surfaces, inner surfaces, and chewing surfaces with appropriate stroke
        density. Powered toothbrushes can improve consistency for users whose
        manual technique is poor, but a manual brush used correctly achieves
        comparable plaque removal.
      </p>

      <AnchorHeading as="h2" id="2-interdental-cleaning">
        2. Flossing and interdental brushes: what the evidence actually says
      </AnchorHeading>
      <p>
        Interdental cleaning is the aspect of oral hygiene most often
        misrepresented online: both by people claiming flossing is useless (based
        on a misreading of an AP story from 2016) and by people citing it as
        essential without acknowledging the evidence quality. The most rigorous
        available synthesis is the 2019 Cochrane systematic review by Worthington,
        MacDonald, Poklepovic Pericic and colleagues.
      </p>
      <p>
        The Cochrane review found that using floss or interdental brushes in
        addition to toothbrushing may reduce gingivitis or plaque, or both, more
        than toothbrushing alone. The evidence was rated{" "}
        <strong>low to very low certainty</strong>. Most included trials had
        high risk of bias due to blinding problems inherent in dental hygiene
        research, short follow-up periods, and inconsistent outcome measurement.
        The review found no evidence that interdental cleaning reduces severe
        periodontitis or interproximal caries (Worthington et al., 2019).
      </p>

      <Callout title="What low certainty means in Cochrane terminology">
        <p>
          A Cochrane certainty rating of &ldquo;low&rdquo; means the true effect
          may differ substantially from the estimate; the finding is compatible
          with both a meaningful benefit and a small or negligible one. It does
          not mean the evidence is against the intervention. Given the plausible
          mechanism (interdental cleaning removes biofilm from surfaces a brush
          cannot reach), the low certainty finding is most reasonably interpreted
          as a reflection of trial quality rather than a null effect.
        </p>
      </Callout>

      <p>
        A secondary finding in the same Cochrane review is more practically
        useful: interdental brushes may be more effective than floss for reducing
        gingivitis. Interdental brushes clean a larger proportion of the proximal
        tooth surface than string floss. They are also easier to use correctly
        for most people, which matters because technique compliance is a larger
        driver of outcome than tool selection. If you will consistently use an
        interdental brush but inconsistently use floss, the evidence supports
        using the brush. The converse is equally true.
      </p>
      <p>
        The 2016 AP story that generated the &ldquo;flossing is useless&rdquo; headline
        was based on a review of 25 studies, most of which had methodological
        problems the original authors acknowledged. Neither that story nor any
        subsequent analysis found evidence that flossing is harmful. The honest
        summary: the evidence base is weaker than dentists have historically
        implied, but the mechanism is sound and the practice has no downside
        other than time.
      </p>

      <AnchorHeading as="h2" id="3-halitosis">
        3. Tongue cleaning and the sources of bad breath
      </AnchorHeading>
      <p>
        Halitosis has identifiable sources, and most of them are oral. The
        primary reservoir of volatile sulfur compounds (VSCs) in the mouth is
        the dorsal surface of the tongue. Bacteria in the tongue coating
        metabolize protein debris and produce hydrogen sulfide and methyl
        mercaptan, the compounds responsible for the characteristic smell of
        chronic bad breath. Untreated gingivitis and periodontitis contribute a
        second VSC source through bacteria in subgingival plaque. Dry mouth
        (xerostomia) worsens both sources by reducing the saliva flow that
        mechanically clears debris and maintains an antibacterial pH.
      </p>
      <p>
        Mouthwash addresses halitosis by chemically disrupting VSCs for 30-60
        minutes. It does not remove tongue coating or subgingival biofilm, so
        the effect is temporary. Alcohol-based mouthwashes worsen dry mouth with
        repeated use, potentially amplifying the underlying problem. If
        mouthwash is part of your routine, alcohol-free formulations are
        preferable for daily use.
      </p>
      <p>
        Tongue scraping removes the coated layer more effectively than brushing
        the tongue surface with a toothbrush. A scraper applied from the back
        of the tongue toward the tip collects and removes the coating in 3-5
        strokes; a toothbrush tends to disperse the material laterally. The gag
        reflex is less pronounced with a scraper because the direction of
        movement is toward the tip rather than toward the throat. Once daily,
        integrated into the bedtime or morning routine, is sufficient for most
        people. If halitosis persists after consistent brushing, interdental
        cleaning, and tongue scraping, the cause is likely periodontal disease
        and warrants a dentist visit.
      </p>

      <AnchorHeading as="h2" id="4-whitening">
        4. Whitening: the stain classification that changes your decision
      </AnchorHeading>
      <p>
        The most common mistake in whitening is choosing a product before
        identifying the type of staining. Dr. Joyce Kahng DDS, a cosmetic and
        restorative dentist, frames this as the primary clinical decision:
        extrinsic staining responds to peroxide; intrinsic staining does not.
      </p>
      <p>
        <strong>Extrinsic staining</strong> accumulates on or near the enamel
        surface. Common causes are coffee, tea, red wine, and tobacco. Peroxide
        penetrates the enamel and oxidizes chromogen molecules responsible for
        the discoloration. OTC whitening strips at 10-14% hydrogen peroxide and
        professional tray systems at 16-22% carbamide peroxide both work through
        this mechanism. The distinction between the two is concentration and
        duration of contact: higher concentration achieves faster results but
        increases sensitivity risk. In-office whitening uses 35-40% hydrogen
        peroxide under professional supervision, with light or heat activation.
        Studies show that over a comparable treatment period, tray and in-office
        outcomes are similar; in-office is faster, not more effective per unit
        of peroxide contact time.
      </p>
      <p>
        <strong>Intrinsic staining</strong> is discoloration within the dentin
        layer. Causes include tetracycline antibiotic exposure during tooth
        development in childhood, fluorosis (excess fluoride during development),
        natural age-related dentin darkening, and pulp trauma. No OTC whitening
        product reaches the dentin effectively. Professional tray whitening can
        produce modest improvement in mild intrinsic cases with extended
        treatment, but severe tetracycline or fluorosis staining requires
        porcelain veneers or crowns (Kahng, 2022).
      </p>
      <p>
        Two other staining scenarios require specific mention. First, dental
        restorations including crowns, veneers, and composite bonding do not
        respond to whitening products; whitening the surrounding natural teeth
        will create a visible color mismatch. Second, whitening sensitivity
        (temporary tooth and gum pain) is more likely in people with enamel
        erosion or existing sensitivity. Desensitizing toothpaste containing
        potassium nitrate used for two weeks before whitening reduces sensitivity
        in most cases.
      </p>
      <p>
        Whitening toothpastes occupy a distinct category. They rely primarily on
        abrasive polishing agents, not peroxide chemistry, to lift surface stains.
        They polish effectively but do not penetrate enamel. Some newer
        formulations include phthalimidoperoxy-caproic acid (PAP) as a non-peroxide
        whitening agent with lower sensitivity risk, but the evidence base for PAP
        is less developed than for peroxide. Toothpaste whitening is appropriate
        for mild extrinsic maintenance between professional or OTC strip treatments.
      </p>

      <AnchorHeading as="h2" id="5-orthodontics">
        5. Orthodontics in adults: what it can and cannot change
      </AnchorHeading>
      <p>
        Modern orthodontics moves teeth by applying controlled force through
        brackets, wires, or aligner trays. The tissue that responds is the
        alveolar bone, the specialized bony ridge that surrounds and supports
        tooth roots. Under sustained pressure, osteoclasts resorb bone on the
        pressure side and osteoblasts deposit new bone on the tension side,
        allowing teeth to migrate through the jaw. This process takes months to
        years depending on the distance teeth must move and the patient&rsquo;s
        bone metabolism.
      </p>
      <p>
        In adolescents, the midpalatal suture is not yet fully fused, allowing
        orthopedic palate expansion devices to widen the upper arch and the
        palate bone itself. This has real effects on facial width. In adults,
        the midpalatal suture is fused; palate expansion in adults requires
        surgically-assisted rapid palate expansion (SARPE), which involves
        surgically separating the suture before applying the expander. This is a
        clinical procedure, not a forum technique.
      </p>
      <p>
        What adult orthodontics does not change: the mandibular body and ramus
        (the lower jaw bone itself), the chin projection, the gonial angle (the
        angle at the jaw corner), or any craniofacial structure outside the
        alveolar process. Improving occlusion through orthodontics can modestly
        alter the soft-tissue profile of the lips and chin because lip posture
        is influenced by tooth position, but these are millimeter-scale changes
        in trained clinical measurement. They are not visible skeletal remodeling.
      </p>
      <p>
        Adults who complete comprehensive orthodontic treatment gain a
        straighter bite, a more even smile line, and easier oral hygiene
        (straighter teeth have fewer plaque-trapping gaps). Some gain modest
        improvement in facial balance if teeth were severely out of position.
        Retention is lifelong: the teeth will relapse without a retainer because
        the periodontal ligament fibers attempt to pull teeth back toward their
        original positions.
      </p>

      <AnchorHeading as="h2" id="6-jawline">
        6. The jawline conversation: mewing, masseter, and body fat
      </AnchorHeading>
      <p>
        The looksmaxxing community has generated three major claims about
        jawline improvement: mewing reshapes the maxilla through tongue pressure;
        chewing hard gum builds masseter muscle and sharpens the jaw angle; and
        orthodontics or surgical simulation can change jaw shape non-surgically.
        Each deserves a precise answer.
      </p>
      <p>
        <strong>Mewing.</strong> The practice was popularized by British
        orthodontist Mike Mew, who claimed that maintaining the tongue in full
        contact with the palate at rest would apply enough pressure to move
        maxillary bones forward over time. The American Association of
        Orthodontists reviewed the available literature and found zero
        peer-reviewed studies supporting mewing&rsquo;s effectiveness for
        reshaping the jaw or bite in adults. The AAO noted that Mike Mew was
        struck from the UK dental register in 2024. The biological mechanism
        proposed requires adult cortical bone to remodel under tongue pressure.
        Adult cortical bone responds to forces in the range of 100-1000 newtons
        over time (as in orthodontic appliances); the tongue generates roughly
        0.5-2 newtons of sustained force. The order-of-magnitude gap is not
        addressable by technique (AAO, 2023).
      </p>
      <p>
        Forum evidence for mewing consists largely of before-and-after photos
        taken years apart, often during adolescence. Facial development continues
        into the mid-twenties. Body fat changes alter jaw definition independently.
        Photo angle, chin position, and lighting can all modify the apparent
        mandibular angle by 5-10 degrees. None of the forum comparisons control
        for these variables. Mike Mew&rsquo;s father, John Mew, developed
        orthotropics for pediatric patients during active growth phases, where
        functional appliances can influence development. The adult extrapolation
        is not supported by that pediatric evidence.
      </p>
      <p>
        <strong>Masseter hypertrophy.</strong> The masseter is a jaw-closing
        muscle at the posterior ramus of the mandible. Like any skeletal muscle,
        it hypertrophies with resistance training, and chewing hard foods or gum
        provides that stimulus. Imaging studies confirm that people who chew
        frequently or aggressively have larger masseters. The questions are
        whether this is cosmetically visible and at what cost.
      </p>
      <p>
        The cosmetic effect is real but small for most people. The masseter sits
        beneath a layer of subcutaneous fat; it becomes visible in proportion to
        both its size and the thinness of the overlying tissue. At a body fat
        percentage where buccal fat is already reduced, masseter development
        becomes more visible. At higher body fat, additional masseter volume is
        hidden. The second problem is asymmetry: most people chew preferentially
        on one side, and targeted chewing protocols do not fully correct this.
        The result in some cases is a visibly unequal jaw angle. A third concern
        is temporomandibular joint (TMJ) dysfunction: aggressive jaw-clenching
        and hard-gum protocols can load the TMJ in ways that cause persistent
        pain, clicking, or restricted mouth opening in susceptible individuals.
      </p>
      <p>
        <strong>Body recomposition effects on jaw definition.</strong> This is
        the claim with the strongest evidence and the most practical payoff. The
        mandibular angle and gonial region are covered by subcutaneous fat,
        buccal fat pads, and the submandibular fat compartment. As total body
        fat decreases through a caloric deficit and resistance training, these
        compartments reduce. The bony and muscular structure of the jaw becomes
        more visible. This is not a cosmetic illusion; it is the same mechanism
        by which abdominal definition becomes visible at lower body fat.
      </p>
      <p>
        The week five lecture established that body fat reduction of 5-10
        percentage points, achievable over 3-6 months with a consistent
        recomposition or cut program, produces visible changes in facial
        definition for most people. The jaw is one of the structures most
        affected because facial fat tends to redistribute with body fat changes.
        This path requires no special equipment, no TMJ risk, and no departure
        from evidence-based practice. It is also the most honest answer to the
        forum question &ldquo;how do I get a better jawline?&rdquo;
      </p>

      <AnchorHeading as="h2" id="7-bdd-note">
        7. A calibrated note on obsession
      </AnchorHeading>
      <p>
        Oral aesthetics and jawline fixation are among the features that
        looksmaxxing forums track obsessively. For most readers, spending a few
        weeks building a solid oral hygiene routine and understanding the evidence
        on whitening is a productive, finite project. For a small subset, it
        becomes a loop: checking teeth color multiple times a day, comparing jaw
        angles in photos, researching procedures without stopping. If that
        pattern sounds familiar, it is worth naming. The week ten lecture covers
        body dysmorphic disorder in more depth. The warning sign is not caring
        about your teeth; it is when the caring is disproportionate to the
        situation and interrupts daily function. The course is designed to help
        you make evidence-based improvements and move on.
      </p>

      <AnchorHeading as="h2" id="8-worked-example">
        8. Worked example: building a 24-hour oral hygiene schedule
      </AnchorHeading>
      <p>
        The section worksheet asks you to construct and defend a 24-hour
        schedule. Here is a worked example with the reasoning made explicit.
      </p>
      <pre>{`MORNING (anchor: after waking, before phone)
  Step 1: Tongue scrape (3-5 strokes, back to tip)
    Reason: overnight bacteria accumulate on tongue dorsum;
    removing them before eating or drinking prevents VSC
    ingestion and reduces morning breath.

  Step 2: Brush 2 minutes with fluoride toothpaste
    (45-degree angle to gumline, short tooth-wide strokes,
    all four quadrants)
    Reason: ADA technique; disrupts overnight biofilm
    before it progresses toward calculus.

  Step 3: Do NOT rinse with water immediately.
    Reason: residual fluoride continues remineralizing
    enamel; rinsing immediately removes it.
    Wait 30 minutes before eating if possible.

EVENING (anchor: after face wash, before bed)
  Step 1: Interdental cleaning (floss or interdental brush)
    Reason: loosens proximal biofilm that toothbrush
    cannot reach; doing this before brushing means the
    brush removes what the interdental cleaning loosened.

  Step 2: Brush 2 minutes (same technique as morning)
    Reason: evening brushing has the highest impact because
    saliva flow decreases during sleep, allowing
    undisturbed biofilm to develop for 6-8 hours.

  Step 3: Do NOT eat or drink (except water) after brushing.
    Reason: fluoride retention overnight.`}</pre>
      <p>
        This schedule takes approximately 5-7 minutes total across the day.
        It addresses plaque biofilm, interproximal cleaning, and tongue-sourced
        halitosis. It stacks on top of existing anchor habits (waking routine,
        face wash). The source for each step is either the ADA guidance or the
        Cochrane 2019 review.
      </p>

      <AnchorHeading as="h2" id="exercises">9. Exercises</AnchorHeading>
      <Exercise n={1}>
        <p>
          Explain in two sentences what a dental plaque biofilm is and why the
          45-degree brushing angle targets it more effectively than horizontal
          scrubbing. Use the term &ldquo;gingival sulcus&rdquo; in your answer.
        </p>
      </Exercise>
      <Exercise n={2}>
        <p>
          The Cochrane 2019 review rated the flossing evidence as
          &ldquo;low-to-very-low certainty.&rdquo; A classmate says this means
          &ldquo;flossing has been proven not to work.&rdquo; Write a
          three-sentence correction. Explain what low certainty means, what the
          Cochrane review actually found, and what the practical recommendation
          is given the plausible mechanism.
        </p>
      </Exercise>
      <Exercise n={3}>
        <p>
          You have mild extrinsic staining from coffee and tea. You are also
          considering whitening but have two composite bonded teeth in your
          upper arch. Describe the whitening approach you would take and explain
          one risk you would need to manage.
        </p>
      </Exercise>
      <Exercise n={4}>
        <p>
          Apply the evidence hierarchy from week one to this claim: &ldquo;I
          mewed for 18 months and my before-and-after photos clearly show
          mandible forward growth.&rdquo; What are three alternative explanations
          for the visual difference that do not require structural bone
          remodeling? What would a valid study need to control for?
        </p>
      </Exercise>
      <Exercise n={5}>
        <p>
          A person at 22% body fat wants a more defined jaw. They are deciding
          between: (a) starting a chewing gum protocol for masseter hypertrophy,
          (b) mewing, or (c) running the body recomposition program from week
          five. Which option has the most evidence support? What are the specific
          limits of options (a) and (b)? Give a concrete answer in 150-200 words.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          Section worksheet: 24-hour oral hygiene cycle with partner defense and
          jawline claim audit, at `/c/looksmaxxing-26au/sections/wk06`.
        </li>
        <li>
          Lecture 2 slides cover whitening decision trees, orthodontics limits,
          and mewing in more depth with the AAO position quoted directly.
        </li>
        <li>
          The body-recomposition program that drives facial fat reduction is
          built in the week five section worksheet.
        </li>
        <li>
          Week ten&rsquo;s lecture on body dysmorphic disorder is relevant if
          the jaw-checking behavior described in section 7 resonates.
        </li>
      </ul>

      <Takeaways>
        <li>
          Plaque biofilm reforms within hours; brushing twice daily with the
          correct 45-degree technique is the primary mechanical defense against
          gingivitis.
        </li>
        <li>
          The Cochrane 2019 review found low-certainty evidence that interdental
          cleaning reduces gingivitis; interdental brushes may outperform floss;
          consistent use of either tool matters more than the tool choice.
        </li>
        <li>
          Identify your stain type before choosing a whitening product: extrinsic
          staining responds to peroxide; intrinsic staining does not, and OTC
          products will not help.
        </li>
        <li>
          The AAO found zero peer-reviewed studies supporting mewing for jaw
          remodeling in adults; the tongue forces involved are orders of magnitude
          below what bone remodeling requires.
        </li>
        <li>
          Reducing body fat through a consistent strength and nutrition program
          is the most evidence-supported path to improved jawline definition;
          masseter hypertrophy from chewing is real but small and often asymmetric.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          American Dental Association (2023). Brushing Your Teeth.{" "}
          <em>MouthHealthy.org.</em>{" "}
          https://www.mouthhealthy.org/all-topics-a-z/brushing-your-teeth
        </p>
        <p>
          Worthington HV, MacDonald L, Poklepovic Pericic T, et al. (2019).
          Home use of interdental cleaning devices, in addition to toothbrushing,
          for preventing and controlling periodontal diseases and dental caries.{" "}
          <em>Cochrane Database of Systematic Reviews.</em>{" "}
          https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD012018.pub2/full
        </p>
        <p>
          Kahng, J. (2022). Why Your Teeth Won&rsquo;t Whiten (And Solutions
          for Stubborn Stains). YouTube.{" "}
          https://www.youtube.com/watch?v=3nJOG_7pro0
        </p>
        <p>
          American Association of Orthodontists (2023). Does Mewing Actually
          Reshape Your Jaw?{" "}
          https://aaoinfo.org/whats-trending/is-mewing-bad-for-you/
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk06ReadingSearchBody =
  "dental oral hygiene plaque biofilm brushing technique ADA flossing evidence Cochrane 2019 interdental brushing gingivitis tongue cleaning halitosis whitening extrinsic intrinsic staining orthodontics adults mewing AAO jawline myths masseter hypertrophy body recomposition jaw definition looksmaxxing week 6";
