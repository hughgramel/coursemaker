import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk05Reading() {
  return (
    <ReadingPage
      id="wk05"
      title="Week 5 , Strength, protein, and body recomposition"
      kicker="Evidence-based looksmaxxing &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the exercise and nutrition principles that change
          body composition over weeks and months. By the end you will be able to
          design a four-day upper/lower training program using compound lifts and
          progressive overload, calculate your maintenance calories and protein
          target from body weight, and explain the difference between a cut, a
          bulk, and a recomposition in terms of caloric balance and time horizon.
          The worked example walks through each calculation step by step using a
          hypothetical 175 lb (79.4 kg) male.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Concepts from weeks 2 and 4:
          your <strong>body-measurement baseline</strong> including current body
          weight (you need this number for the protein and calorie calculations),
          your <strong>measurement-tracking</strong> habit for weekly
          trend-line data, and <strong>sleep fundamentals</strong> (sleep quality
          affects muscle protein synthesis and cortisol, both of which influence
          body composition).
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-progressive-overload">
        1. Progressive overload: the master variable
      </AnchorHeading>
      <p>
        Every lasting change in body composition that comes from training rests
        on a single principle: the muscles must face a demand greater than what
        they have already adapted to. When you lift the same weight for the same
        reps week after week, adaptation stops. The body has no reason to build
        more muscle because the existing muscle is already sufficient for the
        task. <strong>Progressive overload</strong> is the systematic increase in
        training demand over time, and it is the non-negotiable foundation of any
        program that produces results.
      </p>
      <p>
        Jeff Nippard (2025), synthesizing current hypertrophy research, states
        directly: &ldquo;Progressive overload is the single most important driver of
        muscle growth.&rdquo; The practical implementation is simple. Pick a rep
        range. Start at a weight where you hit the bottom of the range with
        2-3 reps in reserve (RIR). Add reps each session until you reach the
        top of the range. Then add weight (2.5 kg for upper-body lifts,
        5 kg for lower-body lifts) and start again. Write it down. Without a
        training log, progressive overload is guesswork.
      </p>
      <p>
        Trainees often confuse progressive overload with simply &ldquo;training hard.&rdquo;
        These are not the same. A session can feel exhausting while providing
        zero progressive stimulus if you repeat the same weights and reps as
        last time. Effort is necessary but not sufficient. The log is what makes
        effort systematic.
      </p>

      <AnchorHeading as="h2" id="2-compound-lifts">
        2. Compound lifts and why they come first
      </AnchorHeading>
      <p>
        A <strong>compound lift</strong> trains multiple joints and multiple
        muscle groups simultaneously. The four movement patterns that cover the
        entire body are: horizontal push (bench press, overhead press), horizontal
        pull (barbell row, cable row), quad-dominant squat (back squat, goblet
        squat), and hip-dominant hinge (deadlift, Romanian deadlift). Every
        well-designed program includes all four patterns across the week.
      </p>
      <p>
        The argument for compound lifts is mechanical and practical. They produce
        a large stimulus per set because many muscles contribute to the movement.
        A barbell squat trains the quadriceps, hamstrings, glutes, and spinal
        erectors simultaneously. A leg extension trains only the quadriceps. At
        the same subjective effort level, the compound lift produces more total
        muscle protein synthesis per unit of time spent in the gym.
      </p>
      <p>
        Compound lifts belong at the start of the session, before any isolation
        or accessory work. Fatigue accumulates across a session: the motor
        patterns required for a heavy squat are complex and degrade under
        pre-fatigue. Always do the compound lift first. Everything else is
        secondary.
      </p>

      <AnchorHeading as="h2" id="3-rep-ranges">
        3. Rep ranges, hypertrophy, and proximity to failure
      </AnchorHeading>
      <p>
        A persistent training myth holds that 8-12 reps is the unique
        &ldquo;hypertrophy range.&rdquo; The current evidence does not support this.
        Nippard (2018), drawing on Schoenfeld et al. meta-analyses, is clear:
        a wide range of rep ranges from 6 to 30 reps produce comparable
        hypertrophy, provided sets are taken close to muscular failure. The
        key variable is <strong>proximity to failure</strong>, not the specific
        rep count.
      </p>
      <p>
        <strong>Reps in reserve (RIR)</strong> quantifies proximity to failure.
        RIR 0 means you could not have completed another rep. RIR 2 means you
        could have done two more. The research supports training in the range of
        RIR 0-3 for hypertrophy. Training with RIR 5+ (stopping far from failure)
        produces significantly less stimulus per set.
      </p>
      <p>
        In practice, a sensible program uses different rep ranges for different
        purposes within the same session. The main compound lift runs at 3-6 reps
        to build the strength base that allows heavier future loads. Secondary
        compounds run at 8-15 reps where form degrades more safely under fatigue.
        Finishing accessory work (lateral raises, leg curls, cable pulls) runs
        at 15-25 reps where the joint stress is low and the pump is high. None
        of these ranges is &ldquo;wrong.&rdquo; The wrong thing is training consistently
        far from failure at any rep count.
      </p>

      <AnchorHeading as="h2" id="4-program-structure">
        4. Program structure for natural lifters
      </AnchorHeading>
      <p>
        Natural lifters (meaning: not using anabolic steroids or other
        performance-enhancing drugs) respond best to training each muscle group
        twice per week at moderate weekly volume. This conclusion comes from
        multiple meta-analyses comparing once-per-week versus twice-per-week
        frequency at equated weekly set volume. The twice-per-week condition
        consistently produces more hypertrophy, because each training session
        triggers a 24-48 hour window of elevated muscle protein synthesis, and
        two such windows per muscle per week compounds the stimulus.
      </p>
      <p>
        A four-day upper/lower split is the most practical structure for this
        audience. It trains each muscle group twice per week (Upper A, Lower A,
        Upper B, Lower B), fits a Monday/Tuesday/Thursday/Friday schedule with
        rest days Wednesday and the weekend, and keeps sessions to 60-75 minutes.
      </p>
      <p>
        Weekly volume per muscle group should start at 10-12 sets for beginners.
        Increase by 2 sets per week when all of the following are true: lifts are
        progressing (you added reps or weight last session), sleep quality is
        normal, and there is no lingering joint soreness. If any of these
        conditions fails, hold volume and address the limiting factor.
      </p>

      <AnchorHeading as="h2" id="5-caloric-balance">
        5. Caloric balance and approach selection
      </AnchorHeading>
      <p>
        <strong>Caloric balance</strong> is the relationship between calories
        consumed and calories expended. A deficit produces fat loss (and some
        muscle loss if protein is inadequate). A surplus produces mass gain
        (and some fat gain if the surplus is large). Maintenance produces
        minimal change in either direction, though body recomposition can
        occur at maintenance with the right training and protein intake.
      </p>
      <p>
        Three approaches exist for the reader of this course. A{" "}
        <strong>recomposition</strong> strategy runs at maintenance or a modest
        deficit (up to 200 kcal/day) and suits beginners and returning lifters
        who are gaining muscle rapidly under any conditions. A{" "}
        <strong>cut</strong> runs at a 300-500 kcal deficit and suits trained
        individuals who have significant body fat to lose. A{" "}
        <strong>lean bulk</strong> runs at a 200-300 kcal surplus and suits
        lean, trained individuals whose priority is adding muscle mass. Most
        readers of this course, who are untrained or minimally trained males,
        should start with a recomposition approach.
      </p>
      <p>
        Nippard (2020) states the conditions for recomposition directly:
        &ldquo;Body recomposition is most achievable for beginners and detrained
        individuals. The key variables are a modest caloric deficit (200-300
        kcal), high protein (1.6-2.2 g/kg/day), and consistent progressive
        resistance training.&rdquo; Beginners in this course meet all three conditions
        if they follow the program in section 4 of this reading and the protein
        guidance in section 6.
      </p>

      <AnchorHeading as="h2" id="6-protein-intake">
        6. Protein intake: the ISSN position stand
      </AnchorHeading>
      <p>
        The International Society of Sports Nutrition (ISSN) reviewed the
        available research on protein intake for exercising individuals in their
        2017 position stand (Jäger et al.). Their consensus recommendation:
        <strong> 1.4-2.0 g of protein per kg of body weight per day</strong> is
        sufficient for building and maintaining muscle mass in most exercising
        individuals.
      </p>
      <p>
        Distribution matters as much as total. The ISSN recommends an acute dose
        of 0.25 g/kg per meal (or 20-40 g absolute), distributed every 3-4 hours.
        This means 3-4 protein-containing meals per day, each anchored around a
        high-quality source. The reason is mechanistic: muscle protein synthesis
        is maximally stimulated by roughly 20-40 g of protein per meal in most
        individuals. Additional protein in a single meal is not wasted, but it
        contributes less per gram than the first 20-40 g.
      </p>
      <p>
        Protein quality matters at the margin. Animal proteins (meat, fish, eggs,
        dairy) are considered &ldquo;complete&rdquo; because they contain adequate
        amounts of all essential amino acids, including leucine, which is the
        primary trigger for muscle protein synthesis. Plant proteins can achieve
        the same effect when combined across the day or when consumed in somewhat
        higher quantities, but this requires more dietary planning.
      </p>

      <Callout title="What the ISSN range means in practice">
        <p>
          A 79.4 kg male at the lower end of the ISSN range (1.4 g/kg) needs
          111 g of protein per day. At the upper end (2.0 g/kg), he needs 159 g.
          When recomping or in a caloric deficit, aim for the upper end: protein
          is thermogenic, satiating, and helps preserve muscle mass when calories
          are restricted. When in a surplus and eating consistently, the lower
          end is sufficient.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="7-worked-example">
        7. Worked example: 175 lb male, four-day upper/lower program
      </AnchorHeading>
      <p>
        Below is a fully worked example for a hypothetical 175 lb (79.4 kg) male,
        age 22, 178 cm tall, moderately active (3-4 days exercise per week). All
        arithmetic is shown.
      </p>

      <AnchorHeading as="h3" id="7a-calories">
        7a. Maintenance calorie estimate
      </AnchorHeading>
      <p>
        Using the Mifflin-St Jeor equation:
      </p>
      <pre>{`BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5
    = (10 × 79.4) + (6.25 × 178) - (5 × 22) + 5
    = 794 + 1112.5 - 110 + 5
    = 1801.5 kcal

Activity multiplier (moderate exercise, 3-5 days/week): 1.55

Maintenance calories = 1801.5 × 1.55 = 2792 kcal/day
Rounded: approximately 2800 kcal/day

Recomposition target: 2600-2800 kcal/day
(maintenance or up to 200 kcal below)
Cut target: 2300-2500 kcal/day
(300-500 kcal below maintenance)`}</pre>

      <AnchorHeading as="h3" id="7b-protein">
        7b. Daily protein target
      </AnchorHeading>
      <pre>{`Body weight: 79.4 kg

ISSN range:
  Lower end: 79.4 kg × 1.4 g/kg = 111 g/day
  Upper end: 79.4 kg × 2.0 g/kg = 159 g/day

Recomposition recommendation (upper end):
  Target: 79.4 × 1.8 = 143 g/day

Per-meal target (4 meals):
  143 g ÷ 4 = ~36 g protein per meal

Example daily distribution:
  Breakfast: 3 eggs + 200 g Greek yogurt   = 36 + 17 = ~40 g
  Lunch:     175 g chicken breast + veg    = ~54 g
  Snack:     cottage cheese (200 g)        = ~24 g
  Dinner:    200 g salmon + rice           = ~40 g
  Day total: approximately 158 g ✓`}</pre>

      <AnchorHeading as="h3" id="7c-program">
        7c. Four-day upper/lower program, weeks 1-10
      </AnchorHeading>
      <p>
        This program follows the double-progression model: add reps each session
        until you reach the top of the range, then add weight and return to the
        bottom of the range. RIR targets apply at the final set of each exercise.
      </p>
      <pre>{`UPPER A (Monday)
Exercise                    Sets  Reps   RIR   Starting load
Bench press (barbell)         4   3-5     3    Use weight where 3 reps = RIR 3
Barbell row                   4   3-5     3    Same principle
Dumbbell incline press        3   8-12    2    Moderate weight, controlled
Seated cable row              3  10-15    2    Full range of motion
Lateral raise (dumbbell)      3  15-20    1    Light; burn the last few reps

LOWER A (Tuesday)
Squat (back or goblet)        4   3-5     3    Depth below parallel
Romanian deadlift (RDL)       3   8-12    2    Hip hinge, not back rounding
Leg press                     3  10-15    2    Full range
Nordic curl or leg curl       3   6-10    2    Hamstring focus
Calf raise (standing)         4  12-20    1    Full stretch at bottom

REST (Wednesday)

UPPER B (Thursday)
Overhead press (barbell)      4   3-5     3    Alternate with bench as primary
Chest-supported row           3   8-12    2    Less lower-back demand than barbell row
Cable fly or pec deck         3  12-15    1    Peak contraction focus
Lat pulldown                  3  10-15    2    Full stretch at top
Face pull                     3  15-20    1    Shoulder health, rear delts

LOWER B (Friday)
Trap-bar deadlift or
  conventional deadlift       4   3-5     3    Alternate with squat as primary
Bulgarian split squat         3   8-12    2    Each leg; unilateral balance
Leg curl (machine)            3  10-15    2    Hamstrings isolated
Leg extension                 3  12-15    2    Knee health: go light, full range
Calf raise (seated)           3  15-20    1    Different angle than standing

REST Saturday / Sunday

Progressive overload rule:
  When you complete all prescribed sets at the TOP of the rep range
  with AT LEAST 2 RIR on the final set, add weight next session:
  - Upper-body compounds: add 2.5 kg
  - Lower-body compounds: add 5 kg
  - Accessories: add the smallest available increment (1-2.5 kg)

Weekly volume per muscle group:
  Chest:     7 sets Upper A + 4 sets Upper B = 11 sets/week
  Back:      8 sets Upper A + 6 sets Upper B = 14 sets/week
  Quads:     7 sets Lower A + 7 sets Lower B = 14 sets/week
  Hamstrings: 6 sets Lower A + 6 sets Lower B = 12 sets/week
  Shoulders: 3 sets Upper A + 6 sets Upper B = 9 sets/week
  (add one lateral raise set Upper A if desired: 12 sets/week)`}</pre>

      <p>
        Estimated session length: 18-20 sets at 3-4 minutes per set (including
        rest) = 54-80 minutes. Upper sessions will run slightly longer than
        lower. Adjust rest periods to stay under 75 minutes.
      </p>

      <AnchorHeading as="h3" id="7d-timeline">
        7d. Realistic ten-week timeline
      </AnchorHeading>
      <p>
        Be honest about what ten weeks of consistent work produces. This is not
        a pessimistic forecast; it is calibrated against the evidence.
      </p>
      <pre>{`Strength gains (typical beginner, weeks 1-10):
  Bench press: +20-40% from starting 1RM equivalent
  Squat:       +30-50% from starting 1RM equivalent
  Deadlift:    +30-60% from starting 1RM equivalent
  (These are large relative gains because starting levels are low)

Body composition (recomposition at maintenance, 10 weeks):
  Muscle gain estimate:    0.5-1.5 kg of lean mass
  Fat loss estimate:       1.0-2.0 kg of fat mass
  Visible change:          Moderate. Clothing fits differently.
                           Face and jaw are not dramatically leaner,
                           but the trend is established.

Body composition (cut at 400 kcal deficit, 10 weeks):
  Fat loss estimate:       2.0-3.5 kg
  Muscle retention:        Good, if protein is at 1.8-2.0 g/kg
  Visible change:          More pronounced fat loss in face and torso.
                           Jaw definition improves modestly.

Face/jaw appearance specifically:
  Subcutaneous fat in the face and neck responds to overall body fat %
  reduction. A 2-3 kg fat loss typically produces a visible but not
  dramatic change in jaw definition at this timeframe.
  Expect continued improvement over 20-30 weeks, not ten.`}</pre>

      <AnchorHeading as="h2" id="8-hydration-sodium">
        8. Hydration, sodium, and short-term face appearance
      </AnchorHeading>
      <p>
        Two controllable habits affect face appearance in the short term. Neither
        substitutes for the body composition work above, but both produce a
        visible difference within days of changing them.
      </p>
      <p>
        <strong>Sodium.</strong> Chronic high sodium intake causes the body to
        retain water in subcutaneous tissue, including the face and neck. This is
        not dangerous at typical dietary levels, but it is visible. Processed
        foods (packaged snacks, fast food, canned soups, deli meats) are the
        primary source of excess sodium for most men in this age group. Reducing
        processed food consumption and cooking more meals from fresh ingredients
        typically cuts sodium intake by 30-50% within a week, with visible
        reduction in facial puffiness within 3-5 days.
      </p>
      <p>
        <strong>Alcohol.</strong> Alcohol is a diuretic that causes rebound water
        retention and inflammation. Heavy drinking events (4+ drinks) produce
        visible facial puffiness within 12-24 hours that persists for 2-3 days.
        This effect is well-known but underappreciated in this context. Reducing
        drinking frequency is one of the highest-leverage short-term interventions
        for face appearance available to men in this age group.
      </p>
      <p>
        <strong>Water intake.</strong> Drinking adequate water (minimum 35 ml per
        kg of body weight per day, so 2.8 liters for the 79.4 kg example) prevents
        the mild cellular dehydration that reduces skin elasticity and thickness.
        The &ldquo;drink more water to plump your face&rdquo; claim is exaggerated, but
        adequate hydration is a genuine baseline condition for skin health.
      </p>

      <AnchorHeading as="h2" id="9-exercises">9. Exercises</AnchorHeading>
      <p>
        These exercises are answerable from the reading and from your own
        body-measurement record from week 2.
      </p>

      <Exercise n={1}>
        <p>
          Your body weight from week 2 is 82 kg. Using the ISSN range of
          1.4-2.0 g/kg/day, calculate your minimum and maximum daily protein
          targets. You are recomping. Which end of the range should you target,
          and why? Convert your target to a per-meal amount assuming three meals
          per day.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          A classmate argues that he should run the following split: chest on
          Monday, back on Tuesday, shoulders on Wednesday, arms on Thursday,
          legs on Friday. Using the frequency argument from this reading, explain
          why this program is suboptimal for hypertrophy compared to a four-day
          upper/lower split at the same weekly set volume.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          You complete a set of Romanian deadlifts for 10 reps at 60 kg and you
          estimate RIR 4 (you had four reps left in the tank). According to the
          progressive overload principle, should you add weight next session?
          Should you add reps? Neither? Explain your reasoning using the RIR
          framework from section 3.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Using the worked example in section 7 as a template, calculate your
          own maintenance calories using the Mifflin-St Jeor equation (you will
          need your height and age, plus the body weight from week 2). Show
          every step of the calculation. Then choose a caloric approach
          (recomposition, cut, or bulk) and justify the choice in two sentences.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          A friend tells you he started a &ldquo;body recomposition&rdquo; program six
          weeks ago and has seen no visible change. He trains three days per
          week but does not track his food. He eats around 100 g of protein per
          day. His body weight is 85 kg. Name two specific, quantifiable changes
          he could make to improve his results, based on this reading. Use
          numbers where possible.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="10-going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet (this week).</strong> Write your own
          four-day program and nutrition plan using the templates from sections
          7b and 7c. Bring both to section for peer review against the criteria
          from both lectures.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Strength training first
          principles: progressive overload, compound lifts, rep ranges, and
          program structure. The slides cover the same principles with more
          visual breakdowns of the four movement patterns.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Eating for a visible jawline:
          caloric balance, ISSN protein research, body recomposition vs cut/bulk,
          hydration, and realistic timelines.
        </li>
        <li>
          <strong>HW 3 (out this week, due Week 8).</strong> Strength program and
          nutrition plan. The section worksheet is the first draft of this
          assignment.
        </li>
        <li>
          <strong>Week 6 reading.</strong> Dental, oral aesthetics, and the
          jawline conversation. The body-recomposition concept introduced this
          week recurs in the week 6 lecture on how fat loss affects jaw and
          face definition.
        </li>
      </ul>

      <Takeaways>
        <li>
          Progressive overload, tracked in a written log, is the mechanism
          that drives all muscle growth. Training without it produces fatigue
          but not adaptation.
        </li>
        <li>
          Compound lifts (push, pull, squat, hinge) produce the largest stimulus
          per set and should open every training session. Rep ranges from 6 to 30
          produce comparable hypertrophy if sets are taken within 0-3 RIR.
        </li>
        <li>
          The ISSN recommends 1.4-2.0 g protein/kg/day for exercising individuals,
          distributed over 3-4 meals. Aim for the upper end when in a deficit
          or recomping.
        </li>
        <li>
          Body recomposition at maintenance calories is the right starting point
          for most beginners. Cut only if you have 5+ kg of excess fat and at
          least one year of consistent training. Lean bulk only if you are already
          lean and have been consistent for over a year.
        </li>
        <li>
          Ten weeks of consistent training and adequate protein produce measurable
          strength gains and modest fat loss. Visible jaw definition improves
          gradually. Dramatic body composition change requires a sustained quarter
          of consistent work, not ten weeks of motivation.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Jäger, Ralf, Chad M. Kerksick, Bill I. Campbell, et al. &ldquo;International
          Society of Sports Nutrition Position Stand: Protein and Exercise.&rdquo;{" "}
          <em>Journal of the International Society of Sports Nutrition</em> 14,
          no. 20 (2017).{" "}
          <a href="https://link.springer.com/article/10.1186/s12970-017-0177-8">
            link.springer.com/article/10.1186/s12970-017-0177-8
          </a>
          . The authoritative 24-page consensus on daily protein targets, acute
          dosing, distribution frequency, and protein quality for exercising
          individuals. Recommends 1.4-2.0 g/kg/day with doses distributed
          every 3-4 hours.
        </p>
        <p>
          Nippard, Jeff. &ldquo;The Science of Muscle Growth: Train Smarter, Build
          Bigger.&rdquo; YouTube, 2025.{" "}
          <a href="https://www.youtube.com/watch?v=iZbaW2wQ3V8">
            youtube.com/watch?v=iZbaW2wQ3V8
          </a>
          . 25-minute synthesis of hypertrophy science by a BSc Biochemistry
          graduate and competitive natural bodybuilder. Covers progressive
          overload, effective rep ranges, volume thresholds, and frequency for
          natural lifters, citing primary literature throughout.
        </p>
        <p>
          Nippard, Jeff. &ldquo;Rep Ranges and Training Intensity: The Fundamentals
          Series, Chapter 3.&rdquo; YouTube, 2018.{" "}
          <a href="https://www.youtube.com/watch?v=3JOEZb46-dM">
            youtube.com/watch?v=3JOEZb46-dM
          </a>
          . 18-minute evidence-based primer on rep ranges, RPE, and RIR,
          citing Schoenfeld et al. meta-analyses. Argues for a wide effective
          rep range (6-30) given sufficient proximity to failure.
        </p>
        <p>
          Nippard, Jeff. &ldquo;The Ultimate Guide to Body Recomposition: Build Muscle
          &amp; Lose Fat at the Same Time.&rdquo; YouTube, 2020.{" "}
          <a href="https://www.youtube.com/watch?v=OHeArouYfN0">
            youtube.com/watch?v=OHeArouYfN0
          </a>
          . 30-minute guide to simultaneous fat loss and muscle gain, covering
          the populations for whom recomposition is most achievable, protein
          requirements, caloric balance mechanics, and realistic timelines.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk05ReadingSearchBody =
  "progressive overload compound lifts bench press squat deadlift row hypertrophy rep ranges RIR reps in reserve protein intake ISSN 1.4 2.0 grams per kilogram maintenance calories Mifflin-St Jeor body recomposition cut bulk caloric balance caloric deficit sodium hydration face jawline ten week timeline upper lower split four day program week 5 reading looksmaxxing body composition strength training nutrition";
