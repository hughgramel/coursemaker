import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW1, Honest baseline audit",
  tagline:
    "Document exactly where you are before you try to change anything.",
  outDate: "End of Week 1",
  dueDate: "End of Week 3 (Friday 11:59pm)",

  overview: [
    "You cannot optimize what you have not measured. This assignment asks you to produce a single document that captures your current appearance, health habits, and daily routines with no edits, no flattering angles, and no wishful thinking. The baseline you build this week is the reference point against which every change you make over the next nine weeks will be evaluated. Without it, you are guessing.",
    "The looksmaxxing literature is full of people who made changes and believed they saw results without ever establishing what they looked like before. Week 1 introduced you to the evidence hierarchy and the distinction between controllable and fixed traits (Rhodes, 2006). Week 2 covered standardized photo technique and body measurement protocols. Both weeks converge here: the honest baseline audit is the practical application of those principles to your own body. Measurement before optimization is not a formality. It is the act of taking yourself seriously enough to know the truth.",
    "By the time you submit, you will have a photo set you can reproduce every four weeks, a body measurement record you can update monthly, a written inventory of your current grooming and skincare habits, a seven-day sleep log, and a short mirror-check paragraph that names what you actually see. That package becomes your personal north star for the rest of the course.",
  ],

  goals: [
    "Apply the standardized photo protocol from Week 2 to produce a front, side, and three-quarter photo set that is consistent enough to serve as a reliable four-week comparison baseline.",
    "Apply the body-measurement protocol from Week 2 to record neck, chest, waist, hip, and thigh circumferences plus height and weight with consistent technique.",
    "Analyze your current grooming, skincare, and dental routines by documenting every product and step you actually perform, not the routine you intend to follow.",
    "Analyze seven days of your own sleep data to identify whether your nightly duration meets the AASM consensus recommendation of at least seven hours and whether your bedtime and wake time are consistent (AASM and Sleep Research Society, 2015).",
    "Distinguish controllable from fixed traits in your own mirror-check paragraph by naming what you observe and labeling each observation as behavioral, environmental, or genetic using the framework from Week 1 (Rhodes, 2006).",
    "Evaluate your current state honestly rather than aspirationally, using Week 1's evidence hierarchy as the standard for what counts as a claim worth making.",
  ],

  background: [
    "The halo effect is the most robust finding in attractiveness research: people who are perceived as physically attractive are also judged as more competent, more trustworthy, and more socially skilled, in the absence of any evidence for those qualities (Rhodes, 2006). The practical consequence for this course is that physical appearance has real downstream effects on first-impression outcomes, and those effects are large enough to justify systematic effort. The countervailing finding, equally important, is that a substantial portion of what drives attractiveness perception is behavioral and environmental rather than structural: skin tone, grooming quality, body composition, posture, and sleep status all shift how a face is perceived. Sundelin et al. (2017) demonstrated that two nights of restricted sleep to five hours produced faces rated as significantly less attractive, less healthy, and sadder than well-rested faces by blinded observers. Your sleep habits are visible.",
    "The evidence hierarchy introduced in Week 1 is also what makes an honest audit hard. Forum discourse defaults to anecdote and reverse burden of proof: if no one has proven that a habit hurts you, it must be fine. Peer-reviewed measurement does the opposite: it asks what the data actually show before drawing conclusions. The AAO's review of mewing found zero peer-reviewed studies supporting efficacy for structural jaw change in adults (AAO, 2023), while the thread arguing there is no evidence against bonesmashing treated the absence of disconfirmation as permission (looksmax.org, 2022). This audit applies that same hierarchy inward. Do not write down what you think your skin looks like; write what you observe under consistent lighting. Do not estimate your sleep; log it for seven nights. The discipline of honest self-measurement is the same discipline that distinguishes supportable claims from unfounded ones.",
    "Measurement consistency matters as much as accuracy. A single measurement taken carelessly is useless. Langlois and Roggman (1990) averaged dozens of individual face photographs to produce composites rated as more attractive than any individual face, a finding that only held because each source photo was taken under controlled conditions. The same principle applies to your photo baseline and your body measurements: small differences in posture, lighting, camera distance, or time of day will create the illusion of change where there is none, or mask real change that exists. The instructions below specify every parameter that must stay constant across measurement sessions. Follow them exactly, or your comparison data will not be interpretable.",
  ],

  instructions: [
    {
      title: "Set up your photo station",
      body: "A photo station is a fixed location with fixed lighting and a fixed camera position that you can reproduce every four weeks. Consistency here is what turns a photo set into a measurement. Changing any parameter between sessions introduces noise that cannot be separated from real change.",
      steps: [
        "Choose a blank wall or door with even, neutral-colored paint. No mirrors, no artwork, no windows behind you.",
        "Use natural light from a window to your side (not in front of or behind you), or a single overhead light source. Do not use flash. Do not use a ring light for the baseline: it flattens features. Note the time of day and replicate it every session.",
        "Set your camera at sternum height, approximately 1.2 meters from the ground, mounted on a tripod or propped on a stable surface. Do not hand-hold the camera.",
        "Stand 1.5 to 2 meters from the wall. Note the exact distance and mark the floor with tape if possible.",
        "Wear form-fitting clothing (fitted t-shirt and shorts or athletic wear) or no shirt. Do not wear baggy clothes that hide body shape.",
        "Take one test shot and verify: your full head is in frame, the top of your head has at least 10 cm of clearance, and your feet are fully visible.",
      ],
    },
    {
      title: "Take your week-zero photo set",
      body: "Three angles are required: front, true side (90 degrees), and three-quarter (45 degrees). Each angle captures different information. Replicating all three every session gives you a complete picture that a single angle cannot.",
      steps: [
        "Front photo: stand with feet hip-width apart, arms relaxed at your sides, face relaxed and looking directly into the camera. Do not smile, do not flex, do not adjust your posture beyond standing naturally.",
        "Side photo: rotate exactly 90 degrees so your left side faces the camera. Arms at sides. Same relaxed posture.",
        "Three-quarter photo: rotate to 45 degrees between front and side. Same posture.",
        "Take at least two shots of each angle. Keep the sharper one; delete the blurry one.",
        "Note the date, time, and camera position in your baseline document so you can replicate the setup.",
        "Do not edit, filter, or crop the photos before including them in your deliverable.",
      ],
    },
    {
      title: "Record your body measurements",
      body: "Use a soft tape measure. Take all measurements at the same time of day, ideally morning before eating, which controls for daily fluctuations. Two consistent morning measurements are worth more than ten measurements taken at random times.",
      steps: [
        "Weight: use a digital scale on a hard floor (not carpet). Record to the nearest 0.1 kg.",
        "Height: stand shoeless against a wall, place a book flat on your head and mark the wall. Measure from the floor to the mark.",
        "Neck: measure at the narrowest point of your neck, below the larynx, tape snug but not tight.",
        "Chest: measure at the widest point across the nipple line, arms relaxed at sides, tape parallel to the floor, end of a normal breath.",
        "Waist: measure at the narrowest point between your lower ribs and hipbone, tape parallel to the floor, end of a normal breath. Do not suck in.",
        "Hips: measure at the widest point across the hip bones and glutes, tape parallel to the floor.",
        "Thigh (left): measure at the midpoint between your hip crease and kneecap, standing with weight equally distributed.",
        "Record every number in a table in your baseline document alongside the date.",
      ],
    },
    {
      title: "Document your current grooming, skincare, and dental routines",
      body: "Write down every product and every step you actually performed in the last seven days, not what you intend to do or what you used to do. If you skipped days, note which days. This is an inventory of current behavior, not a wishlist.",
      steps: [
        "Skincare: list every product you applied to your face in the last seven days, morning and evening separately. Include brand, product name, and how many times you used it.",
        "Hair: list your shampoo, conditioner, and any styling products. Note how many times you washed your hair this week.",
        "Dental: list your toothbrush type, toothpaste, whether you flossed or used an interdental brush, and how many times you brushed in the last seven days. Be exact, not aspirational.",
        "Body grooming: note any other grooming performed (shaving, body hair, nails, moisturizing).",
        "For each category, write one honest sentence: 'My current routine is ____ and I perform it ____ days per week on average.'",
      ],
    },
    {
      title: "Complete a seven-day sleep audit",
      body: "For seven consecutive nights before your submission date, log your actual bedtime, actual wake time, and subjective sleep quality. Use your phone's screen-on time, a sleep-tracking app, or a paper log. The AASM consensus recommends at least seven hours per night for adults (AASM and Sleep Research Society, 2015). Sundelin et al. (2017) showed that two nights of five-hour sleep visibly degrades facial appearance ratings by blinded observers. Your sleep is affecting how you look right now.",
      steps: [
        "Create a table with columns: Date, Bedtime (lights out), Wake time, Total hours, Quality (1 to 5 subjective).",
        "Fill in the table for seven consecutive nights. If you use a sleep tracker, export or screenshot the summary.",
        "Calculate your average nightly duration. Note how many nights fell below seven hours.",
        "Note your average bedtime and average wake time. A range of more than 90 minutes across the week indicates circadian inconsistency.",
        "Write two sentences summarizing what the data show, not what you wish they showed.",
      ],
    },
    {
      title: "Write your mirror-check paragraph",
      body: "Stand in front of a mirror in natural light. Look at your face, skin, hair, and body for two minutes. Then write a paragraph of 150 to 250 words that names what you observe. Use Week 1's controllable-versus-fixed distinction (Rhodes, 2006) to label each observation. Do not write about what you want to change yet. This paragraph is a description, not a plan.",
      steps: [
        "Use natural light, ideally morning light from a window. Not bathroom overhead fluorescents.",
        "Describe your skin: texture, tone, any visible concerns (acne, dryness, oiliness, uneven tone). Label each as behavioral/environmental or genetic.",
        "Describe your hair: thickness, texture, growth pattern, current condition. Same labels.",
        "Describe your body: posture as you naturally stand, visible body composition, any asymmetries you notice.",
        "End with one sentence identifying the single area you believe has the highest leverage for improvement based on what you actually see, not what forums say you should fix.",
        "Do not use hedging language such as 'not that bad' or 'could be worse'. Name what you see plainly.",
      ],
    },
    {
      title: "Assemble and submit your baseline document",
      body: "Combine all five components into one PDF or one clearly organized folder. Everything must be labeled so that a reader with no prior context can understand what they are looking at.",
      steps: [
        "PDF or folder name: [YourName]-looksmaxxing-baseline-[YYYY-MM-DD].",
        "Section 1: Photo set, three images labeled front, side, three-quarter, with date and camera position noted.",
        "Section 2: Body measurements table, all eight measurements with date and time.",
        "Section 3: Routine inventory, skincare, hair, dental, and grooming listed with products and weekly frequency.",
        "Section 4: Sleep audit table, all seven nights plus the two-sentence summary.",
        "Section 5: Mirror-check paragraph, 150 to 250 words.",
        "Submit via the course submission form before the deadline. Keep your original files: you will need them for the Week 10 before-and-after.",
      ],
    },
  ],

  deliverables: [
    "Photo set: three images (front, side, three-quarter) unedited, with camera position and date noted in the filename or in the document.",
    "Body measurements table: eight measurements (weight, height, neck, chest, waist, hips, left thigh) with date and time of measurement.",
    "Routine inventory: a written list of every skincare, hair, dental, and grooming product and step you performed in the last seven days, with honest weekly frequency for each category.",
    "Sleep audit table: seven consecutive nights with bedtime, wake time, total hours, and subjective quality; plus a two-sentence summary of what the data show.",
    "Mirror-check paragraph: 150 to 250 words of first-person observation with controllable-vs-fixed labels applied to each observation.",
    "All five components assembled into one labeled PDF or one labeled folder submitted via the course submission form.",
  ],

  rubric: [
    {
      dimension: "Honesty and absence of self-flattery",
      points: 30,
      notes:
        "Photos are unedited and taken under consistent conditions. Measurements are recorded as-observed, not rounded to appealing numbers. Mirror-check paragraph names specific observations without hedging. Sleep data matches real behavior, not an ideal.",
    },
    {
      dimension: "Completeness of all five components",
      points: 25,
      notes:
        "All five sections are present: photos (all three angles), measurements (all eight), routine inventory (all four categories), sleep table (all seven nights plus summary), and mirror-check paragraph.",
    },
    {
      dimension: "Measurement consistency and protocol compliance",
      points: 20,
      notes:
        "Photo station parameters (distance, height, angle, lighting, time of day) are documented and consistent across all three angles. Body measurements follow the protocol: same time of day, tape snug and level, correct anatomical landmarks.",
    },
    {
      dimension: "Mirror-check reflection quality",
      points: 15,
      notes:
        "Paragraph applies the controllable-vs-fixed distinction from Week 1 correctly. Each observation is labeled. The paragraph ends with a specific, reasoned leverage statement, not a vague aspiration.",
    },
    {
      dimension: "Presentation and organization",
      points: 10,
      notes:
        "Document is clearly labeled and structured. Sections are in the specified order. Photos are legible. Measurements are in a table, not buried in prose.",
    },
  ],

  hints: [
    "Shoot your photos at the same time of day every session, ideally morning before exercise and before eating. Your face is most consistent then, and you will have the same lighting if you use a window. A photo taken at 8am in the same spot as last month's 8am photo is a real measurement. A photo taken whenever is not.",
    "Take your tape measurements standing up and at the end of a normal exhale, not a held breath. Even a slight stomach contraction changes the waist number by one to two centimeters. Consistency of posture matters more than perfection.",
    "Do not set up the photo station in front of a mirror. You will unconsciously adjust your expression and posture when you can see yourself. Put the camera on a timer or use a remote shutter, then look at the wall behind the camera, not at the screen.",
    "The mirror-check paragraph is the hardest part of this assignment for most people. Two failure modes are common: writing about what you want to change (a plan, not a description) and using softening language that obscures what you actually see. Write what you observe, then label it. The labels do the analytical work; the paragraph does not need to.",
    "Keep the source files of your photos at full resolution. Do not compress or share them publicly. You will use these exact files for the before-and-after comparison in Week 10, and a low-resolution copy will make side-by-side comparison harder.",
  ],

  late: "One free extension of up to seven days is available if requested before the original deadline, no reason required. After that, late submissions receive a maximum of 70 points. Submissions more than two weeks past the original deadline are not accepted. The honesty requirement applies at any submission date: do not backdate photos or logs.",
};

export function Hw1Page() {
  return <ProjectPage spec={spec} />;
}

export const hw1SearchBody =
  "HW1 honest baseline audit photo set body measurements grooming skincare dental sleep audit mirror-check controllable fixed traits halo effect evidence hierarchy week 1 week 2 week 3 front side three-quarter photo station tape measure sleep log routine inventory";
