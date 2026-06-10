import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW3, Strength program and nutrition plan",
  tagline:
    "Design and launch the training and eating system you will actually run for the rest of the quarter.",
  outDate: "End of Week 5",
  dueDate: "End of Week 8",

  overview: [
    "This is the first assignment where you ship a real system, not a one-time audit. By the time you submit, you will have written a four-day-per-week strength program grounded in the progressive overload and hypertrophy principles from Week 5, computed your maintenance calories and personal protein target from your bodyweight, drafted a sample day of meals that hits that target, and logged at least nine completed training sessions across three weeks. The grade is on the quality of the plan and your adherence to the principles, not on how many pounds of muscle you gained. Recomposition is slow; the system is what you are building.",
    "Why this assignment at this point in the course? Your Week 2 baseline measurements gave you a starting snapshot. Your Week 5 lectures gave you the science: progressive overload as the master variable (Nippard, 2025), rep ranges from 6 to 30 producing comparable hypertrophy when sets are taken close to failure (Nippard, 2018), and protein intake in the 1.4 to 2.0 g/kg/day range sufficient to support muscle synthesis in most training individuals (Jager et al., 2017). This assignment closes the loop between theory and practice. You are not doing a homework problem; you are commissioning yourself a twelve-week program that will still be running when Week 10 arrives.",
    "The only grading constraint is honesty. Log actual loads, actual reps, and actual sessions. A three-week log that shows two missed sessions and honest progression on the sessions you did complete is worth more than a fabricated log showing perfect attendance. The peer review in the Week 5 section will catch plans that violate the principles; the log will catch plans that were never executed.",
  ],

  goals: [
    "Design a four-day-per-week program using compound lifts, hypertrophy-range sets (6 to 30 reps per set taken close to failure), and a named progressive overload scheme (Nippard, 2018; Nippard, 2025).",
    "Calculate your maintenance calorie estimate and your personal protein target in grams per day using the ISSN 1.4 to 2.0 g/kg/day range (Jager et al., 2017), anchored to your current bodyweight from your Week 2 measurements.",
    "Differentiate a cut, a bulk, and a recomposition by their calorie balance, protein requirement, and realistic time horizon, and state which strategy you are running and why.",
    "Draft a concrete sample day of meals that reaches your protein target, with approximate gram-level protein counts per meal spaced roughly every three to four hours per ISSN guidance.",
    "Produce a three-week training log with at least nine completed sessions, recording date, exercise, sets, reps, and load for every work set.",
  ],

  background: [
    "Progressive overload is the single most important driver of muscle growth. Jeff Nippard, drawing on primary literature, defines it as consistently adding reps, weight, or sets to a given exercise over time, and identifies it as the variable that separates programs that produce visible body composition changes from programs that produce only fatigue (Nippard, 2025). The mechanism matters for program design: if your plan has no explicit rule for when and how to add load, you do not have a progressive overload program. You have a workout. This assignment requires you to name the rule before you start.",
    "Rep range selection is less important than proximity to failure. The landmark Schoenfeld meta-analyses and the Nippard Fundamentals series Chapter 3 both document that sets performed in the 6 to 30 rep range produce statistically comparable hypertrophy as long as the final reps approach muscular failure (Nippard, 2018). This has two practical implications for your program. First, you do not need to chase a narrow hypertrophy rep range. Second, you do need to train hard enough that the last two reps of each set feel genuinely difficult. A program run at 50 percent intensity produces 50 percent of the available adaptation.",
    "Protein intake is the nutritional lever that matters most for body composition. The International Society of Sports Nutrition's 2017 position stand synthesized available RCT and mechanistic evidence and concluded that 1.4 to 2.0 g of protein per kilogram of bodyweight per day is sufficient for building and maintaining muscle mass in most training individuals. The same paper recommends distributing intake across meals spaced every three to four hours to maximize muscle protein synthesis across the day, with individual doses of approximately 0.25 g/kg per meal (Jager et al., 2017). For a 175 lb (79.5 kg) individual, this translates to a target range of 111 to 159 g of protein per day, or roughly 130 g as a practical midpoint. A 200 lb (91 kg) individual targets 127 to 182 g per day.",
    "Body recomposition is simultaneously building muscle and losing fat. Nippard (2020) documents that recomposition is most achievable for beginners, returning lifters, and individuals with higher body fat percentages. The conditions are a modest caloric deficit of 200 to 300 kcal below maintenance, a high protein intake at the upper end of the ISSN range, and consistent progressive resistance training. Recomposition is slower than a dedicated bulk or cut, but it is appropriate for most students in this course who are training seriously for the first time or returning after a long break. If you are already advanced and specifically trying to add mass or strip fat, you may declare a bulk or cut in your plan and adjust your calorie target accordingly, but you still need to justify the choice against your Week 2 baseline.",
  ],

  instructions: [
    {
      title: "Write your four-day training program",
      body: "Choose one of two evidence-supported splits: Upper / Lower (two upper days, two lower days per week) or Push / Pull / Legs / Upper (one push day, one pull day, one legs day, one upper day per week). Either split distributes compound work across the week and hits each muscle group at least twice in seven days, which is the minimum frequency recommended for naturals by the muscle science literature (Nippard, 2025). Write out every day: exercise name, sets, target rep range, and the load you plan to use in week one. Then name your progressive overload rule explicitly.",
      steps: [
        "Choose your split: Upper / Lower (U/L/U/L, e.g. Mon / Wed / Fri / Sat) or Push / Pull / Legs / Upper (e.g. Mon / Tue / Thu / Sat).",
        "List four to six exercises per day. Every day must include at least one compound lift (squat, hip hinge, horizontal press, vertical press, horizontal row, or vertical pull).",
        "For each exercise, state: sets x rep range x starting load (e.g. '3 x 8-12 x 95 lb bench press').",
        "Write your progressive overload rule in one sentence: 'When I complete the top of the rep range for all sets with good form, I will add [X lb / X kg] the following session.'",
        "Review your program against the principles: every muscle group trained at least twice per week, sets taken close to failure, and a clear overload scheme. Fix any gaps before proceeding.",
      ],
    },
    {
      title: "Compute your maintenance calories and protein target",
      body: "Use the Mifflin-St Jeor equation to estimate your basal metabolic rate, then multiply by your activity factor to get your total daily energy expenditure (TDEE). Your TDEE is your maintenance. For your protein target, apply the ISSN 1.4 to 2.0 g/kg/day range to your current bodyweight in kilograms. Worked example for a 175 lb individual: 175 lb divided by 2.205 equals 79.4 kg. Lower bound: 79.4 x 1.4 equals 111 g/day. Upper bound: 79.4 x 2.0 equals 159 g/day. A practical midpoint target is 130 g/day. Record both your maintenance calorie estimate and your protein target range in your submission.",
      steps: [
        "Convert your current bodyweight from pounds to kilograms: weight in lb divided by 2.205.",
        "Compute your protein target range: multiply your weight in kg by 1.4 (lower bound) and by 2.0 (upper bound). Pick a daily target within that range.",
        "Estimate your TDEE using Mifflin-St Jeor plus an activity multiplier: sedentary 1.2, lightly active 1.375, moderately active 1.55, very active 1.725.",
        "State your calorie strategy: maintenance (TDEE), recomposition (TDEE minus 200 to 300 kcal), modest bulk (TDEE plus 200 to 300 kcal), or cut (TDEE minus 300 to 500 kcal). Justify your choice in two sentences referencing your Week 2 baseline.",
      ],
    },
    {
      title: "Draft a sample day of meals",
      body: "Write out a realistic single day of eating that hits your protein target. Include every meal and significant snack. For each item, list the approximate protein content in grams. The total must meet or exceed your daily protein target. Distribute meals every three to four hours to approximate optimal muscle protein synthesis timing per the ISSN position stand (Jager et al., 2017). You do not need to be precise to the calorie; you need to demonstrate that a day of normal eating, with deliberate protein choices, can actually reach your target without heroic measures.",
      steps: [
        "List three to five meals and one to two snacks. Give each a time or label (e.g. breakfast, post-workout, dinner).",
        "For each meal, list the main protein source and the approximate grams of protein it contributes (e.g. '4 oz chicken breast: 35 g protein').",
        "Sum the protein across the day. If the total falls short, identify which meal to adjust and how.",
        "Note total approximate calories if you are running a deficit or surplus. You do not need macro-level precision for every meal, but the total should be roughly consistent with your calorie strategy.",
      ],
    },
    {
      title: "Execute and log three weeks of training",
      body: "Run your program for three full weeks and record every session. The minimum is nine completed sessions (three per week). Each log entry must include the date, which training day it was (e.g. Upper A, Lower B), the exercise, and the actual sets, reps, and load you used. Write actual numbers, not target numbers. If you used 85 lb instead of the planned 95 lb, log 85 lb. If you missed a set, log that too. The log is graded on completeness and honesty, not on hitting every target.",
      steps: [
        "Use the log template provided in the deliverables section below. You may use a spreadsheet, a notebook photo, or a notes app screenshot, as long as every required field is legible.",
        "After each week, note whether you applied your progressive overload rule and, if so, which lifts moved up.",
        "If you missed a session, note the date and the reason in one sentence. Missed sessions do not penalize your grade; hiding them does.",
        "At the end of week three, review your log and answer: which lift progressed the most? Which stalled? What would you adjust going into week four?",
      ],
    },
    {
      title: "Write your program rationale",
      body: "Attach a short written rationale (approximately 300 to 400 words) that explains the choices you made and ties them explicitly to the Week 5 principles. This is not a reflection on how the workouts felt. It is a technical document defending your program design.",
      steps: [
        "Paragraph 1: Why you chose your split (Upper/Lower or Push/Pull/Legs/Upper) and how it ensures each muscle group is trained at least twice per week.",
        "Paragraph 2: Your rep range choices. Explain why the ranges you selected are consistent with hypertrophy research, and name at least one exercise where you intentionally chose a higher rep range (15 to 20) and one where you chose a lower range (6 to 8).",
        "Paragraph 3: Your nutrition strategy. State your bodyweight in kg, your protein target with the ISSN calculation shown, your calorie strategy (maintenance, recomp, bulk, or cut), and two sentences on why that strategy fits your current starting point.",
        "Cite at least two of the three primary Week 5 sources in your rationale: Nippard (2025), Nippard (2018), or Jager et al. (2017).",
      ],
    },
  ],

  deliverables: [
    "Written program: a table or structured list showing all four training days, with exercises, sets, rep ranges, starting loads, and your progressive overload rule stated explicitly.",
    "Nutrition plan: your bodyweight in kg, protein target range with the ISSN calculation shown, TDEE estimate, calorie strategy with justification, and the sample day of meals with per-meal protein counts.",
    "Three-week training log: at minimum nine sessions, each with date, day label, exercise, sets, reps, and actual load. A spreadsheet screenshot, a notebook photo, or a formatted text log are all acceptable formats.",
    "Program rationale: approximately 300 to 400 words defending your split choice, rep range selections, and nutrition strategy, citing at least two Week 5 sources.",
    "Stretch (optional): a brief end-of-week-three note (100 to 150 words) identifying the lift that progressed the most, the lift that stalled, and one adjustment you plan to make in week four.",
  ],

  rubric: [
    {
      dimension: "Program design: split, compound lifts, rep ranges, overload rule",
      points: 30,
      notes:
        "Four training days present; each day has at least one compound lift; rep ranges are in the hypertrophy-supported 6 to 30 window; progressive overload rule is stated explicitly in one sentence.",
    },
    {
      dimension: "Nutrition plan: ISSN calculation correct, calorie strategy justified",
      points: 25,
      notes:
        "Bodyweight in kg shown; protein target computed using 1.4 to 2.0 g/kg with at least one arithmetic step visible; TDEE estimate present; calorie strategy (recomp/bulk/cut/maintenance) justified in reference to Week 2 baseline.",
    },
    {
      dimension: "Sample day of meals reaches protein target",
      points: 15,
      notes:
        "Three to five meals listed with per-meal protein estimates; daily total meets the stated protein target; meals are spaced roughly every three to four hours.",
    },
    {
      dimension: "Three-week log: at least nine sessions, honest and complete",
      points: 20,
      notes:
        "Minimum nine sessions logged; each entry has date, exercise, sets, reps, and actual load; missed sessions are noted rather than omitted; progressive overload application noted at least once.",
    },
    {
      dimension: "Program rationale: cites Week 5 sources, defends design choices",
      points: 10,
      notes:
        "300 to 400 words; covers split rationale, rep range choices, and nutrition strategy; cites at least two of Nippard (2025), Nippard (2018), or Jager et al. (2017).",
    },
  ],

  hints: [
    "The Upper / Lower split is simpler to schedule for most students. Monday and Thursday for upper, Tuesday and Saturday for lower is a common arrangement that spaces sessions evenly and allows 48 hours of recovery between same-muscle sessions.",
    "Your progressive overload rule needs to be specific. 'Add 5 lb to the bar when I hit the top of my rep range for all sets' is a rule. 'Try to get stronger over time' is not. Write the number and the condition before your first session.",
    "175 lb in kilograms is 79.4 kg. Protein range: 111 g (lower) to 159 g (upper). A practical daily target of 130 g is achievable with three meals averaging 35 to 40 g of protein each, plus a protein-rich snack.",
    "If your protein target feels hard to hit, look at breakfast first. Most people under-eat protein in the morning. A two-egg plus cottage cheese breakfast plus a glass of milk clears 40 g before 9am.",
    "Recomposition is the right default strategy for most students in this course. You are not in a dedicated mass-gaining phase; you are establishing a training habit. Eat at or slightly below maintenance, hit your protein target, and train hard. The recomposition evidence shows that body composition improves at maintenance calories for beginners when protein is high and training is progressive (Nippard, 2020).",
    "The log does not need to be beautiful. A photo of a filled-in notebook page is fine. What matters is that the date, exercise, sets, reps, and load are all legible. A log that takes 30 seconds to fill in after each session will actually get filled in.",
    "Do not change your program every week in response to how sore you are. Soreness is not a reliable indicator of productive training. Follow your program for all three weeks, apply the overload rule as written, and save the redesign for after you have completed the log.",
  ],

  late:
    "One week late: maximum 80 points. Two weeks late: maximum 60 points. Submissions more than two weeks late are not accepted. The log must reflect sessions completed before the submission date. Do not backfill load numbers for sessions that did not happen.",
};

export function Hw3Page() {
  return <ProjectPage spec={spec} />;
}

export const hw3SearchBody =
  "HW3 strength program nutrition plan four day training progressive overload compound lifts hypertrophy rep ranges protein target ISSN maintenance calories body recomposition cut bulk upper lower push pull legs training log sample meals bodyweight Jeff Nippard Week 5 Week 8";
