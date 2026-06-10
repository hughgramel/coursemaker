import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW4, Five-look capsule wardrobe",
  tagline:
    "Build a sustainable rotating kit from what you already own, documented in photos and a one-page plan.",
  outDate: "End of Week 7",
  dueDate: "End of Week 9 (Friday 11:59pm)",

  overview: [
    "The average person owns more clothes than they wear and wears more poorly fitting clothes than they realise. This assignment is not about buying things. It is about understanding what you already have, cutting the items that are working against you, and filling exactly the gaps left behind. The result is five looks that fit correctly, work for your real contexts, and rotate without decision fatigue.",
    "Fit is the whole game. A $30 shirt that lands on the shoulder seam and tapers to the waist will read better than a $200 shirt that pools around your torso. Brian Sacawa (He Spoke Style, 2022) is explicit: the shoulder seam is the single structural point that cannot be fixed by a tailor without a complete rebuild. Everything else can be adjusted. That hierarchy should govern every item in your closet and every item you consider buying. Antonio Centeno (Real Men Real Style, 2022) applies the same logic across all garment categories: shoulder first, then chest, then sleeve or pant break. Get one point right before you move to the next.",
    "Color matters, but only after fit. Justine Leconte and The VOU (2023) converge on the same framework: determine your undertone (warm, cool, or neutral), choose neutrals that complement it as your foundation, then add one or two accent colors within the three-color rule. A warm undertone calls for off-whites, camel, olive, and cognac as neutrals. A cool undertone calls for true white, charcoal, navy, and slate. Once your neutrals are right, any combination from your palette is wearable on any morning without deliberation. That is the point of a capsule: it removes the bottleneck, not the personality.",
  ],

  goals: [
    "Pass every item in your closet through the four-point fit check (shoulder seam, chest clearance, sleeve length, pant rise and break) and record the verdict for each item (Centeno / Real Men Real Style, 2022; Sacawa / He Spoke Style, 2022).",
    "Cull every item that fails the fit check into a bag. Do not leave failing items in rotation on the logic that you will get them tailored. Bag them today; retrieve them if you act on the tailor plan within two weeks.",
    "Determine your skin undertone and contrast level, and identify the neutral palette and up to two accent colors that work for your coloring (Leconte; The VOU, 2023).",
    "Assemble five looks, one for each context below, using only items that pass the fit check and fall within your palette.",
    "Identify the specific items you need to fill gaps, priced to stay within a $300 total build budget.",
  ],

  background: [
    "The four-point fit check comes from two sources that agree on the hierarchy: Centeno's Real Men Real Style playlist (2022) and Sacawa's He Spoke Style guide (2022). The shoulder seam sits first because it is structurally irreversible. The seam should land right at the edge of the natural shoulder, where the arm begins to slope. If it falls past that point, the armhole is too deep and the sleeve hangs wrong; if it sits short of it, the chest and back will pull. The second check is chest clearance: enough room to pinch one inch of fabric through a closed button, no more and no less. Third is sleeve length: shirt sleeves should show roughly half an inch of cuff below a jacket; without a jacket, the sleeve ends at the base of the thumb. Fourth is pant rise and break: mid-rise sits at or just below the navel, the break lands at a slight touch of the shoe, no more fabric pooling than a half-inch. This four-point sequence is fast enough to run on every item in a closet in under an hour.",
    "The three-color rule is the simplest reliable constraint for avoiding outfits that clash without intent. Count your base (typically pants or jeans), your mid layer (shirt or sweater), and your accent (shoes, belt, or a third piece). Three sources across those layers is the ceiling; below it, any combination from a well-chosen palette works. Neutrals, colors with low saturation and broad contextual range, do not count toward the three. They are the foundation. The VOU's seasonal color analysis for men (2023) extends this into a palette-selection framework: once you know your undertone and contrast level, your neutrals are determined, and the accent colors that work for you are a much smaller set than you might expect. High-contrast men (dark hair, light skin, or vice versa) can carry bolder accent combinations. Low-contrast men read better in tonal outfits where values stay close. Getting this right means your five looks are automatically combinable, not five isolated outfits.",
    "The five contexts in this assignment are not arbitrary. They map to the real occasions most people under 35 navigate each week: a daily casual look (the default morning grab), a work look (appropriate for any professional context short of a formal presentation), a going-out look (evening, social, above baseline effort), a weekend-errands look (comfortable but not sloppy), and a dressed-up look (a job interview, a wedding guest, a first dinner). Five looks that genuinely cover these five contexts will serve 90% of your year. The capsule framework is not a Pinterest moodboard with 30 aspirational pieces. It is a functional minimum: the fewest items that cover the most ground, with fit and color already solved so the only decision left is which context today belongs to.",
  ],

  instructions: [
    {
      title: "Run the cull",
      body: "Pull everything in your closet, every top, bottom, jacket, and dress piece, out onto your bed or floor. For each item, run the four-point fit check in sequence: shoulder seam, chest clearance, sleeve length, pant rise and break. Any item that fails any single check goes into a bag. Label the bag with today's date. Do not try items on over another layer, the check only works on skin or a thin undershirt. Photograph every item before it goes into the bag. If an item could be saved by a single inexpensive tailoring alteration (taking in a waist, hemming a pant break), note that explicitly and set a two-week window to act on it; if you have not acted by week 9, the item stays culled.",
      steps: [
        "Pull everything out. No item stays in the closet until it has been checked.",
        "Shoulder check first: seam at the edge of the natural shoulder, not past it, not short of it. Fail = bag.",
        "Chest check: shirt buttoned, pinch test. More than one inch of extra fabric across the chest = bag. Gap at the button placket = bag.",
        "Sleeve check: shirt sleeve ends at the base of the thumb; jacket sleeve shows half an inch of shirt cuff. Outside this range = bag.",
        "Pant check: mid-rise sits at or below the navel; break at half an inch of contact with the shoe, no pooling. Outside this range = bag unless a single hem will fix it.",
        "Photograph every bagged item on a flat surface before it goes into the bag.",
        "Count and record the number of items that passed, the number culled, and the number flagged for tailoring.",
      ],
    },
    {
      title: "Identify your undertone and build your palette",
      body: "Stand near a window in natural light without makeup or tinted products. Hold a white piece of paper next to your face. Look at the color cast in the shadow areas of your skin, the inner wrist veins are also a reliable check. Blue or purple veins and neutral-to-cool shadows indicate a cool undertone. Greenish veins and golden or yellow shadows indicate a warm undertone. Mixed signals indicate a neutral undertone. Once you have a verdict, identify your contrast level: hold a photo of your face next to your hair. High contrast means there is a strong value jump between your hair and your skin; low contrast means they are close in value. Use these two pieces of information to select your neutral palette and two accent colors according to the seasonal color framework (The VOU, 2023).",
      steps: [
        "Determine undertone: cool, warm, or neutral. Write the verdict and the method you used.",
        "Determine contrast level: high or low. Write the verdict.",
        "For warm undertone: candidate neutrals are off-white, camel, tan, olive, cognac. Candidate accents: rust, burnt orange, forest green, burgundy.",
        "For cool undertone: candidate neutrals are true white, charcoal, navy, slate, stone grey. Candidate accents: cobalt, burgundy, forest green, dusty blue.",
        "For neutral undertone: draw from either set, but keep the palette internally consistent, do not mix warm and cool neutrals in the same outfit.",
        "Write out your final palette: neutral 1, neutral 2, accent 1, accent 2 (at most). Any item you build toward must fall in this palette.",
        "Photograph your forearm next to a white card and note it in your submitted plan.",
      ],
    },
    {
      title: "Assemble the five looks from passing items",
      body: "Working only from items that passed the cull, assemble each of the five looks below. Each look must: (a) pass the four-point fit check on every garment in the look, (b) stay within the three-color rule plus your neutrals, (c) be photographed as a flat lay or worn on body with consistent lighting. If a context has no viable look from passing items, that context goes on the gap list, not into the plan.",
      steps: [
        "Look 1, Daily casual: jeans or chinos that fit, a T-shirt or crewneck in a neutral or single accent color, clean shoes. Context: default morning, low-effort, still intentional.",
        "Look 2, Work: trousers or dark slim-fit jeans that fit, a collared shirt or clean sweater, leather or leather-look shoes or smart sneakers. Context: professional setting, seated-meeting ready.",
        "Look 3, Going out: dark trousers or jeans that fit, a slightly elevated top (button-down, clean knit, or textured tee in good condition), a clean shoe with some character. Context: evening social, above baseline visible effort.",
        "Look 4, Weekend errands: well-fitting joggers, chinos, or shorts depending on climate, a clean fitting tee or hooded sweatshirt, trainers in good condition. Context: grocery run, coffee, errands. Comfortable but deliberate.",
        "Look 5, Dressed up: trousers or a suit trouser that fits, a collared shirt or sport coat, dress shoe or clean minimal leather sneaker. Context: interview, wedding guest, formal dinner.",
        "Photograph all five looks. Flat lay or worn, consistent background and lighting across all five.",
        "If any look cannot be assembled from passing items, mark the context and proceed to the gap list.",
      ],
    },
    {
      title: "Build the gap list with a $300 budget ceiling",
      body: "List every item needed to complete a look that could not be assembled from passing items. For each item, specify the garment type, the colorway from your palette, a fit requirement (e.g., slim-fit trousers with mid-rise), and a target price. Total must stay at or below $300. Prioritize items that serve multiple looks over items that serve one. List sources: thrift, fast fashion, and mid-range brands are all acceptable. The budget constraint is real. If the full gap would cost more than $300, prioritise by frequency of use and defer the rest.",
      steps: [
        "List each missing item: garment type, color, fit requirement, target price, suggested source.",
        "Flag items that serve two or more looks, these are your highest priority.",
        "Sum the total. If over $300, cut lowest-priority items until you are at or below the ceiling.",
        "Note any items that could be rescued by tailoring from the cull bag and include the alteration cost in the budget.",
        "Write one sentence for each item explaining why fit before brand applies: what fit spec you are buying for, not what brand.",
      ],
    },
    {
      title: "Write the one-page plan",
      body: "Compile your work into a single plan page that covers: your undertone and palette, the cull summary (items passed, items culled, items flagged for tailoring), the five looks with a photo for each, the gap list with prices totaling $300 or under, and one sentence per look explaining the context it solves. The plan should be readable in under two minutes. Use a simple layout: one section per look, palette swatch notes in the margin, gap list at the bottom. This plan is what you bring to a store or thrift shop; it should make decisions for you, not leave them open.",
      steps: [
        "Section 1: Undertone verdict, contrast level, and final palette (four swatches or color names).",
        "Section 2: Cull summary. Count of items passed, culled, and flagged. Date of cull.",
        "Section 3: Five looks. One photo per look, one sentence of context per look.",
        "Section 4: Gap list. Itemised table with garment, colorway, fit spec, price, and source.",
        "Section 5: Total gap budget (must be $300 or under). One sentence on prioritisation logic if you had to cut items.",
      ],
    },
    {
      title: "Submit",
      body: "Submit a PDF or image set containing your one-page plan, your five look photos, your cull photo set (all items in the bag photographed flat), and your undertone assessment photo. Files can be a single PDF or a shared folder link with clearly labeled contents. A brief voice note or Loom walking through your decision-making on one of the five looks is optional but useful for feedback.",
      steps: [
        "One-page plan as described above (PDF or single image).",
        "Five look photos (flat lay or worn), clearly labeled Look 1 through Look 5 with context name.",
        "Cull photo set: every item bagged, photographed flat before bagging.",
        "Undertone photo: forearm next to white card in natural light.",
        "Optional: 3-5 minute Loom narrating the gap list and how you prioritised the $300 budget.",
      ],
    },
  ],

  deliverables: [
    "One-page plan covering undertone/palette, cull summary, five looks with photos and context labels, gap list with prices at or under $300 total.",
    "Five look photos (flat lay or worn), one per context: daily casual, work, going out, weekend errands, dressed up.",
    "Cull photo set: every failed-fit item photographed flat before it went into the bag.",
    "Undertone assessment photo: forearm next to a white card in natural daylight.",
    "Stretch (optional): a 3-5 minute Loom narrating the gap list and your $300 prioritisation logic.",
  ],

  rubric: [
    {
      dimension: "Cull is complete and documented",
      points: 20,
      notes:
        "Every closet item photographed and checked; cull bag photo set submitted; items counted (passed, culled, flagged); no items described as 'fine for now' that clearly fail the fit check.",
    },
    {
      dimension: "Four-point fit check applied correctly to all five looks",
      points: 25,
      notes:
        "Each look photo shows shoulder seam at edge of natural shoulder, no chest pooling, sleeve ending at base of thumb or with half-inch cuff showing, and pant break at or under half an inch. If a look was assembled despite a borderline item, the borderline must be noted.",
    },
    {
      dimension: "Palette is consistent with undertone assessment and within the three-color rule",
      points: 20,
      notes:
        "Undertone verdict documented and supported by the assessment photo; all five looks draw only from the stated palette; no look exceeds three distinct colors plus neutrals.",
    },
    {
      dimension: "Gap list is specific, priced, and at or under $300",
      points: 20,
      notes:
        "Each item has a garment type, colorway, fit spec, target price, and suggested source; total is stated and does not exceed $300; multi-look items are flagged as priority.",
    },
    {
      dimension: "One-page plan is readable and complete",
      points: 10,
      notes:
        "All five sections present; five look photos labeled; plan reads in under two minutes; no context is left blank without explanation.",
    },
    {
      dimension: "Submission package is complete",
      points: 5,
      notes:
        "All four required deliverables present (plan, five looks, cull photos, undertone photo); files clearly labeled.",
    },
  ],

  hints: [
    "Do the cull in one session. The longer you stall on a single item, the more likely you are to keep something that fails. Set a timer: 3 seconds per item on the fit check. If you cannot decide in 3 seconds whether the shoulder lands correctly, it does not land correctly.",
    "The most common cull resistance is 'I'll get it tailored.' Set a hard date: two weeks from today. If you have not made the tailoring appointment by that date, the item stays culled. Most people do not make the appointment.",
    "Flat lays are easier to photograph consistently than worn outfits. Use the same floor or bed surface for all five. Same lighting. If you photograph worn looks, use the same wall and the same distance from the camera.",
    "The $300 budget forces you to prioritise. A single well-fitting pair of dark trousers that works for looks 2, 3, and 5 is worth more than three cheaper pieces that each serve one look. Sort your gap list by number of looks served before you sort by price.",
    "Undertone assessment is tricky in artificial light or on a screen. Do it by a window in the morning or on an overcast day. Yellow-tinted indoor bulbs will give you a false warm reading every time.",
    "If your five looks all feel too similar, check whether you have accidentally collapsed contexts. Work and going-out are genuinely different contexts; dressed-up is a step above both. If your work look and going-out look are identical, pick one and make the other more intentional.",
  ],

  late:
    "One week late: maximum 80 points. Two weeks late: maximum 60 points. Submissions more than two weeks late are not accepted. The cull must have happened before submission: do not re-photograph items you already culled and re-dress them for the look photos.",
};

export function Hw4Page() {
  return <ProjectPage spec={spec} />;
}

export const hw4SearchBody =
  "HW4 capsule wardrobe five looks fit check shoulder seam pant rise break sleeve length chest clearance cull closet audit color palette undertone three-color rule neutrals warm cool contrast daily work going out weekend errands dressed up gap list $300 budget looksmaxxing style Week 7 Week 9";
