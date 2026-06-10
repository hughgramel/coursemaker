import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW2, Two-week skincare and grooming log",
  tagline:
    "Track every AM/PM routine and grooming session for 14 days, then compare your face to where you started.",
  outDate: "End of Week 4",
  dueDate: "End of Week 6",

  overview: [
    "This assignment turns the routines you assembled in Week 3 into a documented 14-day practice. You will keep a daily log of your AM skincare routine, your PM skincare routine, your hair-care sessions, and any shaving, beard, or eyebrow grooming you do. At the end of week two you will photograph your face under the same conditions as your Week 2 baseline shot and place the two images side by side. That pair of photos is not a dramatic before-and-after; it is a record of what two weeks of consistent adherence actually produces, which is usually subtle improvement and a much clearer picture of your own skin.",
    "The deeper purpose of this assignment is habit formation, not cosmetic transformation. Dr. Dray, a board-certified dermatologist, is explicit on this point: product actives need consistent application over weeks and months to show measurable benefit, and the single biggest obstacle to seeing that benefit is not having the wrong product but skipping days (Dr. Dray, Skincare Reset 2023). The AAD's sunscreen guidance makes the same point from the other direction -- a broad-spectrum SPF 30 applied daily does more over a season than an SPF 100 applied twice a week (AAD, How to Select a Sunscreen, 2023). The log is the accountability mechanism that turns intention into data.",
    "You will also use this two-week window to settle your hair-care cadence. After Week 4's hair-typing lecture you know what wash frequency your hair type calls for; now you implement it and note whether your scalp and hair actually respond as predicted. If you shave, trim a beard, or maintain eyebrows, log each session. Small, regular grooming actions compound in the same way skincare actives do: irregular effort produces irregular results, and the log makes that visible.",
  ],

  goals: [
    "Apply (Bloom's Apply) a documented AM and PM skincare routine every day for 14 consecutive days, logging each session on the day it occurs.",
    "Implement (Bloom's Apply) a hair-wash cadence matched to your Andre Walker hair type and note any adjustment needed after observing one week of results.",
    "Analyze (Bloom's Analyze) your own adherence pattern over the 14 days: identify which sessions you most often skip or shorten and name one root cause.",
    "Evaluate (Bloom's Evaluate) your week-zero versus week-two face photos using the Lab Muffin framework for realistic expectation-setting: note what has changed, what has not, and what would require longer time horizons.",
    "Recall (Bloom's Remember) the AAD sunscreen application standard (broad-spectrum, SPF 30+, reapplied after two hours of sun exposure) and confirm it is reflected in your daily log.",
    "Design (Bloom's Create) a personal grooming schedule for weeks 5 onward that corrects the adherence gaps revealed by your log.",
  ],

  background: [
    "Daily adherence beats heroic single-day routines for a simple biological reason: most skincare actives work through cumulative signal, not acute dose. Retinoids accelerate cell turnover through retinoic acid receptor binding that requires weeks of repeated exposure before the cellular machinery upregulates enough to produce visible smoothing or pore refinement. Sunscreen prevents photoaging through daily UV attenuation; a single day without it does not erase a week of protection, but three skipped days a week over a year represents a substantial cumulative UV dose that compounds into accelerated photoaging (AAD, How to Select a Sunscreen, 2023). Dr. Dray makes the clinical case plainly: the patients she sees with the best long-term skin outcomes are rarely the ones who use the most products; they are the ones who use a simple routine without gaps (Dr. Dray, Skincare Reset 2023). The same principle applies to moisturizer, which maintains transepidermal water loss at normal levels only when applied before the skin has a chance to dry and tighten post-cleanse.",
    "Hair-care cadence follows the same logic. Andre Walker's typing system was designed precisely to match wash frequency, product weight, and moisture balance to a hair's structural texture -- straight hair produces excess sebum that reaches the shaft within 24 to 48 hours, while highly coily hair may need two weeks between washes because the same sebum cannot travel down a tightly wound shaft (Andre Walker, hair typing system, 2021). Skipping wash days because it seems fine is not the same as intentionally managing your scalp on the schedule your hair type warrants. Logging your cadence for two weeks generates real data about how your scalp actually behaves, which is more useful than any rule of thumb.",
    "Cosmetic chemist Michelle Wong (Lab Muffin Beauty Science) provides the most useful framework for interpreting the week-two face photo: the changes visible in 14 days are almost always about surface texture, redness reduction from barrier repair, and hydration level rather than structural changes to pore size or pigmentation, which require 8 to 12 weeks of consistent retinoid use (Lab Muffin, How to Start on Retinoids, 2019). Calibrating your expectations to the right time horizon prevents two failure modes: stopping a routine prematurely because you expected results it cannot deliver in two weeks, and falsely crediting a routine with changes that are attributable to something else, like sleep or hydration. The side-by-side photo is your ground truth; the log is the evidence you need to interpret it.",
  ],

  instructions: [
    {
      title: "Set up your 14-day log before Day 1",
      body: "Create the log in whatever format you will actually use: a printed paper template, a notes app, a spreadsheet, or a dedicated habit tracker. The format does not matter. What matters is that each day has a row or entry for AM routine, PM routine, hair care (wash or no-wash, dry styling, etc.), and grooming (shave, trim, or skip). You should be able to fill in each entry in under 90 seconds. If the logging itself becomes a burden you will stop doing it, which defeats the purpose.",
      steps: [
        "Create a log with 14 rows (Day 1 through Day 14) and at least four columns: AM routine (done / partial / skipped), PM routine (done / partial / skipped), hair care (describe briefly), and grooming (describe or 'none').",
        "Add an optional fifth column for any one-line observation -- a new pimple, unusual dryness, a product that stung, anything worth noting.",
        "Set a recurring reminder on your phone for your AM routine time and your PM routine time. These reminders are not about discipline; they are about removing the decision of whether to do the routine tonight.",
        "Note your start date on the log. Day 1 begins the morning after Week 4 ends.",
      ],
    },
    {
      title: "Execute your AM skincare routine every morning",
      body: "Your AM routine should include at minimum a gentle cleanser (or water rinse if your skin type does not need a morning cleanse), a moisturizer, and a broad-spectrum sunscreen of SPF 30 or higher applied as a final step. The AAD specifies that sunscreen should be the last product applied before makeup or going outside, and that most adults need approximately a quarter teaspoon for the face alone (AAD, How to Select a Sunscreen, 2023). If you are indoors all day behind glass, you still apply sunscreen; UVA penetrates glass and drives photoaging regardless of whether you feel the sun.",
      steps: [
        "Cleanse or rinse your face, pat dry, and apply moisturizer within 60 seconds while skin is still slightly damp.",
        "Apply sunscreen as the final step. Use a quarter teaspoon (roughly the size of a grape) for face and neck.",
        "Log AM routine as 'done' within ten minutes of finishing. If you skip, write 'skipped' and a one-word reason (running late, forgot, sick).",
        "If you are using a topical retinoid, do NOT apply it in the AM. Retinoids belong in the PM routine and increase UV sensitivity.",
      ],
    },
    {
      title: "Execute your PM skincare routine every evening",
      body: "Your PM routine is where the active work happens. Dr. Dray recommends double-cleansing if you wore sunscreen (an oil-based or micellar first cleanse to dissolve the sunscreen film, then a gentle second cleanse), followed by any treatment actives, then moisturizer as the final occlusive step (Dr. Dray, Skincare Reset 2023). If you are introducing tretinoin, Week 3's lecture and Dr. Dray's tretinoin starter guide establish the ramp-up schedule: two nights per week for the first month, buffered with moisturizer if needed. Do not accelerate the ramp-up because you think you can handle it; the adjustment period is real.",
      steps: [
        "Remove sunscreen and any product residue with a first cleanse (micellar water, cleansing balm, or oil cleanser), then follow with your gentle second cleanser.",
        "Apply any treatment actives (retinoid, benzoyl peroxide, or salicylic acid) on clean, dry skin. Do not layer benzoyl peroxide and tretinoin in the same session unless your dermatologist has specifically instructed you to.",
        "Apply moisturizer. For retinoid nights, applying moisturizer immediately after ('buffering') reduces irritation without meaningfully reducing efficacy.",
        "Log PM routine as 'done' before you fall asleep. Do not save logging for the morning; you will forget the details.",
      ],
    },
    {
      title: "Log your hair-care cadence and observe the result",
      body: "Using your Andre Walker hair type from Week 4, you should already know your target wash frequency. If you are a Type 1 (straight) or Type 2A/2B (wavy), you likely need to wash every one to two days. If you are a Type 3 or 4, your target may be once a week or less. For the first seven days, follow the target frequency exactly, even if it feels off. On Day 8, note whether your scalp and hair have adapted, whether you needed to adjust, and what you adjusted. The second seven days are your adjusted schedule.",
      steps: [
        "On each wash day, note in your log: shampoo used, whether you conditioned, and how your scalp felt afterward (balanced, too dry, too oily).",
        "On non-wash days, note whether you used dry shampoo or any styling products.",
        "At Day 7, write two sentences in your log: what your scalp and hair actually need versus what the Andre Walker target frequency recommends, and whether they match.",
        "If you are noticing significant scalp itching, flaking, or irritation, note it and flag it to the instructor. These can be signs of seborrheic dermatitis or product sensitivity that warrants a different approach.",
      ],
    },
    {
      title: "Log grooming sessions as they happen",
      body: "Grooming in this assignment covers shaving (face or neck), beard or stubble maintenance, and eyebrow tidying. The goal is to record what you actually do, not to perform an elaborate grooming routine you would not otherwise do. If you shave every two days, that pattern should show up in your log. If you never touch your eyebrows, your log should reflect that and you should note whether you intend to start.",
      steps: [
        "After any shaving or beard-trimming session, log: method (razor, electric, trimmer), areas covered, and how your skin felt post-shave (comfortable, irritated, dry).",
        "If you tidy eyebrows, note what you did: spoolie brush only, small scissors trim, tweezer cleanup beneath the brow arch, or nothing.",
        "If post-shave irritation is recurring, note the product causing it. Alcohol-based aftershaves on a compromised barrier are the most common culprit; a fragrance-free balm or the moisturizer already in your routine is usually sufficient.",
        "Do not over-groom because you are logging. The log should reflect your actual behavior, not an aspirational version of it.",
      ],
    },
    {
      title: "Take your week-two face photo",
      body: "On Day 14, photograph your face using the exact same setup you used for your Week 2 baseline: same room, same light source (or same time of day if using natural light), same distance from the camera, same angles (front and one three-quarter). If you cannot exactly replicate the conditions, get as close as possible and note the difference. The comparison is only meaningful if the conditions are matched.",
      steps: [
        "Return to the location and lighting you used for your Week 2 baseline photo. Use the same device and roughly the same time of day.",
        "Take a front-facing photo and a three-quarter photo at the same angles as your baseline.",
        "Place the Day-0 and Day-14 photos side by side at the same scale. Most phones can do this natively; a free collage app works fine.",
        "Do NOT apply filters, adjust exposure, or alter the photos in any way beyond cropping to the same frame. You are documenting your skin, not creating content.",
      ],
    },
    {
      title: "Write the log summary and submit",
      body: "The written summary is one to two pages (or equivalent) that assembles your adherence data, your photo observation, and your forward-looking schedule into a readable document. It is not a product review and it is not a celebration of how much your skin improved. It is an honest read of your two weeks.",
      steps: [
        "Section 1, Adherence rate: count your 'done' entries as a fraction of the total possible sessions (28 AM + 28 PM = 56 skincare sessions, plus your hair and grooming sessions). State your adherence percentage.",
        "Section 2, Pattern analysis: which type of session did you most often skip or shorten? Name one root cause (e.g., PM routine skipped on gym nights because too tired, sunscreen skipped on work-from-home days).",
        "Section 3, Photo comparison: describe in two to three sentences what you observe in the side-by-side. Resist over-interpreting. 'Skin appears slightly less red around the nose' is a valid observation. 'Pores are visibly smaller' after 14 days is almost certainly premature.",
        "Section 4, Forward schedule: write out your target AM routine, PM routine, hair cadence, and grooming cadence for weeks 5 and 6, adjusted based on what you learned.",
        "Attach your completed log (photo, screenshot, or export) and your side-by-side face photo as appendices.",
      ],
    },
  ],

  deliverables: [
    "14-day log: every day filled in for AM routine, PM routine, hair care, and grooming. Partial and skipped entries must be marked honestly, not retroactively corrected to 'done'.",
    "Side-by-side face photo pair: Day 0 (from Week 2 baseline) and Day 14, same conditions, no filters, front and three-quarter angles.",
    "Written summary, one to two pages following the four-section structure in Instruction 7, with adherence rate stated as a percentage.",
    "Stretch (optional): a brief 2-3 minute voice note or screen recording narrating what you noticed in the photos and what surprised you about your own adherence pattern. Useful for students who find writing hard; accepted in lieu of Section 3 of the written summary.",
  ],

  rubric: [
    {
      dimension: "Log completeness and honesty",
      points: 30,
      notes:
        "All 14 days present; AM, PM, hair, and grooming columns filled; partial and skipped sessions recorded as such rather than back-filled as done. Gaps are expected; dishonest retroactive correction is not.",
    },
    {
      dimension: "AM sunscreen compliance",
      points: 15,
      notes:
        "Sunscreen appears in AM column on all non-skipped days; any skip is noted with a reason. Log should reflect actual AAD-compliant application (SPF 30+, broad-spectrum), not just product name.",
    },
    {
      dimension: "PM routine documented with actives noted",
      points: 15,
      notes:
        "PM routine entries show whether any treatment actives (retinoid, BPO, SA) were applied; retinoid ramp-up schedule followed if applicable (not accelerated beyond two nights per week in the first month).",
    },
    {
      dimension: "Photo pair quality and conditions match",
      points: 20,
      notes:
        "Both photos taken; conditions reasonably matched (lighting, distance, angle); no filters or exposure adjustments; presented at comparable scale. Exact match not required but deviation from baseline conditions must be noted.",
    },
    {
      dimension: "Written summary: adherence analysis and pattern",
      points: 15,
      notes:
        "Adherence rate stated as a percentage; one specific root cause named for most-skipped session type; forward schedule is concrete and adjusted from what was learned, not a repeat of the original plan.",
    },
    {
      dimension: "Photo observation is calibrated and honest",
      points: 5,
      notes:
        "Observations are specific and conservative (no over-claiming structural change at 14 days); shows awareness of what two weeks can and cannot deliver.",
    },
  ],

  hints: [
    "The most common failure mode in this assignment is retroactively filling in skipped days at the end of the two weeks. Graders will look for suspiciously uniform 'done' streaks; an honest log with a few skips and a root-cause analysis is graded more generously than a perfect-looking log that clearly was not kept in real time.",
    "Your PM routine is almost certainly the one you will skip. The AM routine is anchored to waking up and leaving the house, which already has strong cue structure. The PM routine happens when you are tired, and the barrier to doing it feels highest then. BJ Fogg's advice applies: if two-step feels impossible on a given night, do the minimum -- one cleanse and moisturizer -- and log it as partial rather than skipping entirely.",
    "If you are starting tretinoin during these two weeks, expect some dryness and possibly some purging (a transient increase in blemishes as cell turnover accelerates). This is normal and documented. Log the symptoms as observations, not as failures. Do not stop the retinoid unless you have genuine burning or barrier breakdown.",
    "The side-by-side photo comparison is almost never dramatic at 14 days. Lab Muffin's realistic timeline for retinoid results is 8 to 12 weeks for collagen remodeling and 4 to 6 weeks even for pore-size perception change. What you are looking for in the Day-14 photo is skin that looks more consistently hydrated, calmer, and less reactive -- not a different face.",
    "For hair typing, if you are unsure whether you are a 2C or a 3A, wash your hair without any product, let it air dry completely without touching it, and then look. The curl pattern your hair settles into without product is your true type. Andre Walker's system is designed for product-free assessment.",
    "Do not add new actives or new products during the 14-day window. This assignment is about observing a stable routine, not experimenting. If you add a new product and something changes (good or bad), you cannot know whether the change is from the new product or from the cumulative effect of the routine you have been running for two weeks.",
  ],

  late:
    "One week late: maximum 80 points. Two weeks late: maximum 60 points. Log submissions more than two weeks late are not accepted. The log itself must reflect real dates; a 14-day log submitted three weeks late that shows all 14 days clustered in the final week will be treated as late and incomplete.",
};

export function Hw2Page() {
  return <ProjectPage spec={spec} />;
}

export const hw2SearchBody =
  "HW2 skincare log grooming log 14 days AM PM routine sunscreen retinoid tretinoin moisturizer cleanser hair care wash frequency Andre Walker hair typing beard shave eyebrows adherence habit formation Dr Dray Lab Muffin AAD side by side photo face photo week two baseline log summary Week 4 Week 6";
