import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk05SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="wk05-section-title">
        Week 5 section: your program and nutrition plan
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 5 · Hands-on worksheet</p>

      <p>
        This session has two outputs: a written four-day training program and a
        written nutrition plan. You will then swap plans with a partner for a
        structured peer review against the principles from both lectures. Bring
        the reading and your body-weight measurement from week 2.
      </p>

      <AnchorHeading as="h2" id="part-1-write-your-training-program">
        Part 1: Write your training program
      </AnchorHeading>
      <p>
        Design a four-day upper/lower split for the next ten weeks using the
        principles from Lecture 1. Your program must meet all of the criteria
        below. Write it out by hand or in a plain document you can share with
        your peer reviewer.
      </p>
      <ol>
        <li>
          <strong>Four training days per week.</strong> Label each day Upper A,
          Lower A, Upper B, or Lower B. Leave at least one rest day between any
          two training days.
        </li>
        <li>
          <strong>At least one compound lift per session.</strong> Choose from:
          bench press or overhead press (upper push), barbell or dumbbell row
          (upper pull), squat variation (lower quad-dominant), deadlift or
          Romanian deadlift (lower hip-dominant). Name the specific exercise.
        </li>
        <li>
          <strong>Rep ranges based on goal.</strong> For strength focus (first
          compound): 3-6 reps, 3-5 sets, 2-3 RIR. For hypertrophy (accessories):
          8-15 reps, 3-4 sets, 1-2 RIR. Label each exercise with its rep range
          and RIR target.
        </li>
        <li>
          <strong>Progressive overload plan.</strong> State how you will add load
          each week. Example: add 2.5 kg to upper lifts and 5 kg to lower lifts
          when you complete all sets at the top of your rep range with 2+ RIR.
          Write the exact rule you will follow.
        </li>
        <li>
          <strong>Session length estimate.</strong> Count your sets. At roughly
          3-4 minutes per set (including rest), estimate total session time.
          If it exceeds 75 minutes, cut a set somewhere.
        </li>
      </ol>
      <p>
        A sample program structure to build from (not required to copy):
      </p>
      <pre>{`Upper A
  Bench press          4 x 3-5 @ 3 RIR
  Barbell row          4 x 3-5 @ 3 RIR
  Dumbbell incline     3 x 8-12 @ 2 RIR
  Cable row            3 x 10-15 @ 1-2 RIR
  Lateral raise        3 x 12-20 @ 1 RIR

Lower A
  Squat                4 x 3-5 @ 3 RIR
  Romanian deadlift    3 x 8-12 @ 2 RIR
  Leg press            3 x 10-15 @ 1-2 RIR
  Nordic curl          3 x 6-10 @ 2 RIR
  Calf raise           4 x 12-20 @ 1 RIR

Upper B / Lower B: rotate exercise selection (e.g., overhead press
instead of bench, trap-bar deadlift instead of squat)`}</pre>

      <AnchorHeading as="h2" id="part-2-write-your-nutrition-plan">
        Part 2: Write your nutrition plan
      </AnchorHeading>
      <p>
        Using your body weight from the week 2 measurement, calculate your
        nutrition targets. Show the arithmetic for every number you write down.
      </p>
      <ol>
        <li>
          <strong>Body weight in kilograms.</strong> If you only know your weight
          in pounds, divide by 2.205. Write the result.
        </li>
        <li>
          <strong>Maintenance calories.</strong> Use the Mifflin-St Jeor equation
          or the simpler multiplier method: body weight in kg × 33 for a
          lightly active male (3-4 hours exercise per week). Write the number.
        </li>
        <li>
          <strong>Caloric target.</strong> Choose one approach and justify it in
          one sentence:
          <ul>
            <li><strong>Recomposition:</strong> maintenance calories or up to 200 kcal below. Best if you are new to training or returning after a break.</li>
            <li><strong>Deficit (cut):</strong> 300-500 kcal below maintenance. Best if you have 5+ kg of fat to lose and have trained consistently for over a year.</li>
            <li><strong>Surplus (bulk):</strong> 200-300 kcal above maintenance. Best if you are lean and have been consistent for over a year.</li>
          </ul>
        </li>
        <li>
          <strong>Daily protein target.</strong> Use the ISSN range of 1.4-2.0 g
          per kg of body weight. If recomping or cutting, aim for the higher end
          (1.8-2.0 g/kg). Calculate your target in grams. Divide by 3-4 to get a
          per-meal target.
        </li>
        <li>
          <strong>Three-day example plan.</strong> List breakfast, lunch, dinner,
          and one snack for three representative days. Estimate the protein in
          grams for each meal. Check that daily totals land within 10% of your
          target. You do not need to count calories unless you want to.
        </li>
        <li>
          <strong>Hydration note.</strong> Write your daily water target (minimum
          35 ml per kg of body weight) and note one habit that will help you
          hit it. Note whether you currently eat high-sodium processed foods
          most days, and what one swap would reduce that.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-peer-review">
        Part 3: Peer review
      </AnchorHeading>
      <p>
        Swap your written program and nutrition plan with a partner. Review
        their work using the checklist below. Write one-sentence comments for
        each item, then give the plan back with your comments before leaving
        section.
      </p>
      <ol>
        <li>
          <strong>Program: compound lifts present?</strong> Does each session
          include at least one compound lift? Are the exercises named specifically
          (not just “leg day”)?
        </li>
        <li>
          <strong>Program: rep ranges labeled?</strong> Is each exercise labeled
          with a rep range and RIR target? Does the strength work use 3-6 reps
          and the accessory work use 8-15+ reps?
        </li>
        <li>
          <strong>Program: progressive overload rule written?</strong> Is there a
          specific, written rule for when and how to add weight? Is it realistic
          (not “add weight every session” without a completion criterion)?
        </li>
        <li>
          <strong>Nutrition: arithmetic shown?</strong> Are the body-weight,
          maintenance-calorie, and protein calculations written out step by step?
          Do the numbers follow from the formulas?
        </li>
        <li>
          <strong>Nutrition: protein target realistic?</strong> Does the
          three-day plan actually deliver the stated protein target? Pick one
          day and add up the protein grams from the meals listed.
        </li>
        <li>
          <strong>Approach justified?</strong> Is the choice of recomposition,
          cut, or bulk justified in one sentence that matches the person’s
          situation? (A beginner choosing a steep cut is a red flag. A lean,
          experienced lifter choosing a recomp is fine.)
        </li>
      </ol>

      <AnchorHeading as="h2" id="what-to-ship">What to ship</AnchorHeading>
      <ul>
        <li>
          Written four-day upper/lower program: exercise names, sets, reps, RIR,
          and written progressive overload rule.
        </li>
        <li>
          Written nutrition plan: body weight (kg), maintenance calories,
          caloric target with approach choice, daily protein target, three-day
          meal example with protein estimates, and hydration target.
        </li>
        <li>
          Completed peer review checklist: six items scored with one-sentence
          comments. Your partner’s name is on the sheet you return to them.
        </li>
        <li>
          One revision: after reading your partner’s comments, change at least
          one thing in your plan. Write the change and why you made it at the
          bottom of your document.
        </li>
      </ul>
      <p>
        This section’s output is the starting point for HW 3 (Strength
        program and nutrition plan), which is due in week 8.
      </p>
    </>
  );
}

export const wk05SectionSearchBody =
  "section worksheet training program upper lower split compound lifts progressive overload rep ranges RIR nutrition plan maintenance calories protein target ISSN recomposition cut bulk peer review week 5 looksmaxxing body composition";
