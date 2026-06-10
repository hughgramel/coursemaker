import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Capstone, Personal twelve-week plan and before-and-after",
  tagline:
    "Document your week-zero-to-week-ten arc honestly, then defend a twelve-week plan to extend every gain.",
  outDate: "End of Week 7 (scaffold due)",
  dueDate: "End of Week 10 (defense day)",

  overview: [
    "Every pillar in this course -- skin, hair, body composition, dental, style, posture, and sleep -- has pointed at this moment. The capstone is the synthesis. You will stand in front of the group with a side-by-side photo set, honest measurement deltas across all seven pillars, a written twelve-week plan on a page, and a five-minute defense that names what worked, what stalled, and what comes next. This is not a before-and-after advertisement. It is an evidence-grounded audit of a ten-week intervention you ran on yourself.",
    "The scaffold you submit at the end of Week 7 serves one purpose: to force you to set your week-zero baseline in writing before you know what your week-ten results will be. Pre-committing the baseline is the only way to guarantee you cannot revise it upward later. If your baseline is already uncomfortable to look at, that is working exactly as intended.",
    "The rubric weights honesty and plan quality far above visible results. Dramatic before-and-after photos are not the point. Two percent body-fat reduction with a complete habit stack and a twelve-week plan you will actually execute is worth more than a photo transformation with no documented system behind it. The student who reports modest changes honestly and designs a compelling extension plan will outscore the student who reports impressive changes with no critical analysis.",
    "One more thing before you start. Reviewing ten weeks of photos of yourself while comparing measurements across every dimension of your appearance is a psychologically non-trivial task. For most people it is clarifying and motivating. For some people it is destabilizing. Both of these responses are important data about you. The course is about installing durable systems, not about passing a physical audit. If reviewing your photos honestly feels destabilizing -- not 'uncomfortable' but genuinely difficult to stop thinking about -- that is itself important information, not a failure. Talk to the instructor. The IOCDF maintains a dedicated Body Dysmorphic Disorder resource hub, including a therapist directory and a Teens and Young Adults section, at https://bdd.iocdf.org/. Using it is not a sign that something went wrong. It is a sign that you are taking the mental-health pillar of this course seriously.",
  ],

  goals: [
    "Assess your week-zero versus week-ten photos and measurements across all seven pillars honestly, using the standardized protocol introduced in Week 2 (Sundelin et al., 2017 on sleep; Dr. Dray, 2023 on skin barrier; Nippard, 2020 on body recomposition).",
    "Identify which pillar delivered the strongest return on the time you invested, and which pillar stalled, naming the specific habit or system failure that caused the stall.",
    "Design a personal twelve-week plan that extends your gains past the course: one focused improvement per pillar, a weekly metric, and a concrete deadline (Fogg, 2021; Clear, 2021).",
    "Critique your own progress using the evidence hierarchy from Week 1, distinguishing between changes that are behaviorally measurable and changes that reflect daily-variability noise.",
    "Recognize the signs of body dysmorphia and the comparison trap in the context of a looksmaxxing practice, and apply the Week 10 clinical framework (Phillips, 2021; IOCDF, 2024) to your own experience.",
    "Deliver a five-minute group defense that names what worked, what stalled, and what you will do next.",
  ],

  background: [
    "The before-and-after format is borrowed from fitness and beauty marketing, where it is almost always misleading: different lighting, posture, hydration, timing, and camera angles can produce a 'transformation' with zero behavioral change. This course uses the standardized photo protocol from Week 2 precisely to strip those variables out. Same light source, same distance, same time of day, same expressions, same camera height. When the protocol is followed, the comparison tells you something real. When it is not followed, it tells you nothing except that someone wanted to look better in the second photo.",
    "Measurement across seven pillars simultaneously is unusual in the looksmaxxing literature, which typically treats each domain in isolation. The integration here is deliberate. Skin improvement is partly a sleep story (Sundelin et al., 2017). Body composition improvement is partly a sleep and protein story (Nippard, 2020; ISSN, 2017). Posture improvement is partly a training-frequency story (Squat University, 2024). A twelve-week extension plan that ignores these cross-pillar dependencies is less likely to succeed than one that treats the seven pillars as a system.",
    "Habit retention research gives a clear picture of what makes plans durable past the course end. Fogg's Behavior Model establishes that a behavior occurs when motivation, ability, and a prompt converge simultaneously -- and that designing for ability (making the behavior physically easy) outlasts designing for motivation (which decays) (Fogg, 2021). Clear's habit-stacking framework operationalizes this: anchor new behaviors to existing ones using 'After I [current habit], I will [new habit]' (Clear, 2021). A twelve-week plan with a prompt for each pillar built on existing anchors is dramatically more likely to survive than one that relies on willpower alone.",
    "The comparison trap deserves explicit attention at this stage of the course. Dr. Katharine Phillips of Weill Cornell Medical College documents that approximately two percent of adults meet criteria for Body Dysmorphic Disorder, and that men with BDD commonly focus on hair thinning, facial features, and muscle definition -- precisely the domains this course addresses (Phillips, 2021). Forum-driven self-improvement culture, including looksmaxxing communities, amplifies BDD risk by providing an endless stream of optimized comparison targets. The Week 10 lecture on 'body dysmorphia, comparison, and the looksmaxxing rabbit hole' is not optional context. It is a prerequisite for doing the capstone assessment safely.",
  ],

  instructions: [
    {
      title: "Take your week-ten photos using the exact Week 2 protocol",
      body: "The only comparison that means anything is a comparison against your week-zero set with no variables changed except time. Recreate the session from Week 2 as precisely as possible: same room, same light source, same distance from the camera, same time of day, same camera height, same three angles (front, side, three-quarter). If you changed lighting between then and now, note the discrepancy in your write-up rather than trying to correct it in post. An honest note about protocol drift is worth more than a retroactively cleaned-up comparison.",
      steps: [
        "Pull up your week-zero photos and note the exact conditions: time of day, light source, distance from camera, angles used.",
        "Recreate the session at the same time of day in the same location with the same three angles.",
        "Do not adjust posture, lighting, or facial expression to look better in the week-ten set. Neutral stance, neutral expression.",
        "Arrange the pairs side by side: front week zero next to front week ten, side week zero next to side week ten, three-quarter week zero next to three-quarter week ten.",
        "Note any protocol deviations (different room, different light, different camera) in your written plan.",
      ],
    },
    {
      title: "Record honest measurement deltas across all seven pillars",
      body: "For each pillar, record where you started, where you are now, and the delta. Use whatever unit is most meaningful for each pillar: percentage points, centimeters, qualitative descriptors on a consistent scale, or behavioral frequency. The requirement is internal consistency -- the same unit for before and after -- not a particular unit. Do not round deltas upward or cherry-pick the measurement that flatters you most.",
      steps: [
        "Skin: describe your baseline skin state (texture, acne frequency, oiliness, photoaging concerns) versus your current state. Note which products you actually stuck with and which you dropped.",
        "Hair: baseline wash frequency, product use, and any hair-loss interventions versus current. If you started minoxidil, note the week you started and the expected timeline (Olsen et al., 2002: meaningful response at 16-plus weeks).",
        "Body: record baseline and week-ten measurements (waist, chest, shoulders, weight or body-fat estimate) and training adherence. Note your actual average sessions per week, not your intended sessions per week.",
        "Dental: baseline oral hygiene frequency and any whitening or orthodontic baseline versus current. Note what changed in the daily routine.",
        "Style: rate your week-zero capsule wardrobe against the fit criteria from Week 7, then rate your current wardrobe. Note how many pieces you culled, added, or tailored.",
        "Posture: describe your week-zero posture from video (upper-cross syndrome markers, forward head, hip flexor tightness) versus your week-ten video. Note mobility routine adherence.",
        "Sleep: baseline average sleep duration and consistency versus current. Use actual data from a tracker if you have it; self-report otherwise, noting the limitation.",
        "Mental-health check-in: a single honest paragraph on what the ten weeks felt like. Did the course feel generative or did it feel like a list of things wrong with you? Both answers are valid and both are important for planning.",
      ],
    },
    {
      title: "Identify your highest-return pillar and your stall pillar",
      body: "Pick exactly one pillar where you got the best return on your effort, and exactly one where you stalled. For the high-return pillar, describe why you think it worked: habit design, intrinsic motivation, quick feedback loop, or some combination. For the stall pillar, be specific about the mechanism of failure. 'I didn't have time' is not a mechanism. 'I designed a routine that required twelve minutes every morning and it consistently got skipped when I woke up late' is a mechanism.",
      steps: [
        "Name your highest-return pillar in one sentence, referencing the delta you recorded in Instruction 2.",
        "Explain in two to three sentences what made the habit stick, referencing the Fogg model (motivation, ability, prompt) or Clear's habit stacking where relevant.",
        "Name your stall pillar in one sentence.",
        "Describe the specific system failure that caused the stall. Distinguish between a motivation failure, an ability failure (the behavior was too hard), and a prompt failure (no reliable trigger).",
        "Note one change you could make to the stall pillar's habit design that would address the failure mode directly.",
      ],
    },
    {
      title: "Write your twelve-week plan on a page",
      body: "The plan is exactly one page. Seven pillars, one focused improvement per pillar, one weekly metric per pillar, one deadline per pillar. The improvements must be specific enough that you could hand this page to a stranger and they could evaluate whether you hit them. 'Get better at skincare' is not a plan. 'Apply tretinoin four nights per week minimum and confirm habit completion in my tracker by the end of each week' is a plan. Fogg's design principle applies here: set the bar low enough that the habit survives a hard week, then raise it once the anchor is solid (Fogg, 2021).",
      steps: [
        "Format the plan as a table or structured list with columns for: pillar, specific improvement, weekly metric, and deadline.",
        "For each pillar, write the improvement as an action sentence, not a goal sentence: 'I will [specific behavior] [frequency]' not 'I want to improve [area].'",
        "Set the weekly metric to something you can check every Friday in under two minutes.",
        "Set a twelve-week deadline for each pillar, which means a specific calendar date, not 'by the end of the plan.'",
        "Build at least three of the seven improvements as explicit habit stacks anchored to existing daily behaviors.",
        "Include one 'quarterly review' date: a single calendar date twelve weeks from now when you will pull your measurements, re-photograph, and assess plan compliance.",
      ],
    },
    {
      title: "Prepare and deliver your five-minute group defense",
      body: "The defense is structured: ninety seconds on your photo and measurement comparison (what changed, what did not); ninety seconds on your highest-return and stall pillars (honest diagnosis, not a highlight reel); ninety seconds presenting your twelve-week plan (walk through the table, name the three behaviors you are most confident about and the one you are most uncertain about); sixty seconds on the mental-health check-in and what you would tell a friend starting this course. The group will ask questions. A calm, honest answer to a hard question is worth more than a smooth answer to an easy one.",
      steps: [
        "Prepare three to five slides or a simple document you can present from: photo comparison, measurement delta table, stall-pillar diagnosis, twelve-week plan table.",
        "Practice the defense out loud at least once before defense day. Time yourself.",
        "Prepare a one-sentence answer to each of: 'What would you have done differently from week one?'; 'Why do you think the stall pillar failed?'; 'How is your twelve-week plan different from the habits you already failed at?'",
        "Submit your written plan (photo set, measurement deltas, twelve-week plan table, mental-health paragraph) before the start of the Week 10 session.",
      ],
    },
  ],

  deliverables: [
    "Side-by-side photo set: week zero versus week ten at the three angles from the Week 2 protocol (front, side, three-quarter), with any protocol deviations noted.",
    "Measurement delta table: honest before-and-after records across all seven pillars (skin, hair, body, dental, style, posture, sleep) plus the mental-health paragraph.",
    "Highest-return and stall pillar write-up: one to two paragraphs each, naming the mechanism of success and the mechanism of failure.",
    "Twelve-week plan on a page: one table or structured list covering all seven pillars with specific improvement, weekly metric, and deadline per pillar, plus the quarterly review date.",
    "Five-minute live defense: delivered to the group on defense day in Week 10, covering the photo comparison, measurement deltas, stall-pillar diagnosis, and twelve-week plan.",
  ],

  rubric: [
    {
      dimension: "Photo set follows the standardized protocol",
      points: 10,
      notes:
        "Same three angles, same lighting conditions, or deviations honestly noted. Week-zero photos must match the set submitted in Week 2. No retouching, no posture adjustments.",
    },
    {
      dimension: "Measurement deltas are honest and internally consistent",
      points: 20,
      notes:
        "All seven pillars present. Same unit used for before and after each pillar. No cherry-picked measurements. Training adherence reports actual sessions, not intended sessions.",
    },
    {
      dimension: "Stall-pillar diagnosis names the specific system failure",
      points: 15,
      notes:
        "Mechanism is specific (motivation, ability, or prompt failure per Fogg) not vague ('I did not have time'). One actionable redesign proposed.",
    },
    {
      dimension: "Twelve-week plan is specific and executable",
      points: 25,
      notes:
        "Action sentences, not goal sentences, for all seven pillars. Weekly metric checkable in under two minutes. Three or more behaviors designed as habit stacks with named anchors. Calendar deadlines, not relative ones. This is the highest-weighted dimension: the course goal is installing systems, not producing results.",
    },
    {
      dimension: "Defense is honest and survives Q&A",
      points: 20,
      notes:
        "Photo comparison presented without spin. Stall pillar named without defensiveness. Twelve-week plan walked through. Hard questions answered with evidence, not deflection.",
    },
    {
      dimension: "Mental-health check-in is present and candid",
      points: 10,
      notes:
        "One paragraph, honest, neither a performance of wellness nor a performance of struggle. Engages with the comparison-trap and BDD material from Week 10. If the review process felt destabilizing, the paragraph should name that and the relevant resource.",
    },
  ],

  hints: [
    "The scaffold you submit at the end of Week 7 is a commitment device, not a rough draft. Write your week-zero deltas as if you already know your week-ten results -- you do not, and that is the point. A baseline set in writing before the endpoint is the only kind that cannot be revised to fit a preferred narrative.",
    "Comparing ten weeks of photos is harder than it sounds, because your eye will hunt for differences whether or not they are real. Anchor your perceptual comparison to the measurement data, not the other way around. If your tape measurements have not moved, 'I can see the difference in the photos' is noise.",
    "The stall pillar is the most important part of the capstone. Everyone has one. The student who diagnoses theirs precisely and designs a repair that targets the actual failure mode learns more from the capstone than the student who had three successful pillars and only talks about those.",
    "A twelve-week plan that tries to move all seven pillars simultaneously with ambitious targets will fail. Fogg's research is clear: ability is a more reliable lever than motivation. Set the minimum viable version of each behavior -- the version you will actually do on your worst week -- then add more once it is automatic (Fogg, 2021).",
    "If reviewing your photos honestly feels destabilizing -- not 'I wish I had done more' uncomfortable but genuinely difficult to stop thinking about -- that is itself important information. Talk to the instructor. The IOCDF maintains a dedicated BDD resource hub, including a therapist directory and a Teens and Young Adults section, at https://bdd.iocdf.org/. Using that resource is not a sign that something went wrong.",
    "The defense question most students are least prepared for is: 'How is your twelve-week plan different from the habits you already failed at during the course?' Have a concrete answer. If the answer is 'I designed a better prompt' or 'I reduced the minimum viable dose,' that is compelling. If the answer is 'This time I will be more motivated,' that is not.",
  ],

  late: "Written plan and photo set: one week late, maximum 80 points. Submissions more than one week late are not accepted. The live defense cannot be made up -- it is scheduled in the Week 10 session. Honesty requirement applies at any submission date: do not adjust baseline measurements or photo conditions retroactively to make the delta look larger.",
};

export function HwCapstonePage() {
  return <ProjectPage spec={spec} />;
}

export const hwCapstoneSearchBody =
  "Capstone personal twelve-week plan before-and-after photo comparison measurement delta skin hair body dental style posture sleep mental health BDD body dysmorphia comparison trap IOCDF habit retention twelve week plan defense week 7 scaffold week 10 defense day seven pillars synthesis honest baseline stall pillar system failure habit stacking Fogg Clear";
