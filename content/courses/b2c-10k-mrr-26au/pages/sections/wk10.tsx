import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 10 section: Stall diagnosis clinic",
  tagline:
    "Each student presents their funnel, cohorts, and MRR curve. The class diagnoses the single highest-leverage move for the next 30 days.",
  outDate: "Week 10 · Friday",
  overview: [
    "This is the capstone defense clinic. Ten weeks of building, measuring, and iterating converge in one 15-minute slot per student. You will present your real numbers: activation rate, D7 and D30 retention, MRR, and the diagnostic quadrant your data lands in. Peers and staff will tell you what they see in your funnel that you may not see yourself.",
    "The goal is not a polished pitch. It is a rigorous, honest diagnosis. The most common failure mode in this clinic is presenting numbers that have been softened or contextualized away from their actual meaning. Resist that. A flat retention curve is a flat retention curve. The question is what to do about it.",
    "Each student has 15 minutes total: 5 minutes to present, 5 minutes for peer diagnosis, and 5 minutes for staff guidance. The clinic runs back-to-back. Arrive with your data loaded and your screen ready to share.",
  ],
  goals: [
    "Present funnel numbers, activation rate, D7/D30 retention, and MRR curve without softening or contextualizing",
    "State your diagnosed quadrant (leak, ceiling, price, or channel) with the evidence that points you there",
    "Name the single 30-day intervention you propose and the metric it moves",
    "Receive one diagnosis from a peer that differs from your own and evaluate whether it changes your intervention",
    "Leave the clinic with a written path-to-$10k-MRR plan you can act on Monday morning",
  ],
  background: [
    "The diagnostic quadrant introduced this week names four reasons MRR stalls. A leak means users sign up but do not activate, or activate but do not retain: the funnel has a hole, and more acquisition pours through it. A ceiling means you have retained a small user base but cannot grow past it: your wedge channel is saturated and you have not found the next one. A price problem means the product delivers value but the price is wrong relative to the user’s willingness to pay: the conversion rate from trial to paid is the diagnostic number. A channel problem means the product retains the users it gets, but it cannot find more of them at a viable cost: your CAC ceiling has arrived.",
    "Most stalls are combinations. A product with weak D30 retention and a saturated wedge channel has both a leak and a ceiling. The clinic forces you to name the primary quadrant: the one where fixing it first would unlock the others. This is a judgment call. The evidence you bring to the clinic is what the class uses to test your judgment.",
    "The peer diagnosis step is not feedback-as-encouragement. It is a cold read of your numbers. Your peer has 5 minutes. They will say what they see. The norm for this clinic is that disagreement is useful and agreement is cheap. If your peer reaches the same diagnosis you did, that is one kind of signal. If they reach a different one and can point to a number you discounted, that is a more valuable signal.",
  ],
  instructions: [
    {
      title: "Setup (before the clinic)",
      body: "Prepare a screen-shareable view of your dashboard that shows, in one view: your MRR curve across the 10 weeks of the course, your most recent activation rate, your most recent D7 and D30 retention, and your funnel diagram with real conversion rates at each stage. You do not need slides. The dashboard is your slide. If your tool does not show all four in one view, have tabs ready to switch between them.",
      steps: [
        "Pull MRR data for all 10 weeks. If your MRR is $0, pull signup counts and paid conversion attempts. Zero is a number.",
        "Write your activation rate as a percentage: of users who signed up in the past 30 days, what share completed the activation event you defined in week 1?",
        "Pull D7 and D30 retention for your most recent complete cohort. Name the retention curve shape: smiling, flat, or decaying.",
        "Write one sentence stating your diagnosed quadrant and the two or three numbers that point there.",
        "Write one sentence stating your proposed 30-day intervention: one metric, one target, one deadline.",
      ],
    },
    {
      title: "Step 1: 5-minute presentation",
      body: "Share your screen. Walk the class through your dashboard in the following order: funnel (60 seconds), MRR curve (60 seconds), retention shape and activation rate (60 seconds), diagnosed quadrant with evidence (60 seconds), proposed intervention (60 seconds). Do not apologize for the numbers. Present them as data. The class cannot diagnose you if you explain away your numbers before they can read them.",
      steps: [
        "Funnel (60 seconds): acquisition number, signup rate, activation rate, paid conversion rate. Four numbers. Say them out loud.",
        "MRR curve (60 seconds): starting MRR, current MRR, the shape of the curve (straight line up, staircase, plateau, decline). One sentence on what happened in the biggest jump or the biggest drop.",
        "Retention shape (60 seconds): D7 and D30 for your most recent complete cohort. Name the curve shape. If you have multiple cohorts, name whether the shape improved or worsened over time.",
        "Diagnosed quadrant (60 seconds): name the quadrant and give two numbers that point to it. Do not give four quadrants. Give one.",
        "Proposed intervention (60 seconds): the metric you will move, the target, the deadline, and the rollback criterion.",
      ],
    },
    {
      title: "Step 2: 5-minute peer diagnosis",
      body: "Your assigned peer (rotating by seat order) has 5 minutes. Their job is to diagnose your quadrant cold, from the numbers they just saw, without being influenced by your diagnosis. The ground rules: the peer states what they see, not what they think you want to hear. The presenter listens without defending. After the peer finishes, the presenter has 30 seconds to note whether the peer’s diagnosis agrees or disagrees and which number they weighted differently.",
      steps: [
        "Peer: name the quadrant you see in the numbers presented (leak, ceiling, price, or channel). Give the one number that most strongly supports your reading.",
        "Peer: if you saw a different intervention than the one presented, name it. One sentence.",
        "Presenter: note agree or disagree. If disagree, name the number you are weighting that the peer discounted.",
        "Both: do not argue. Note the disagreement. The presenter will resolve it by Monday.",
      ],
    },
    {
      title: "Step 3: 5-minute staff guidance",
      body: "Staff will respond to both the presenter’s diagnosis and any peer disagreement. Staff guidance focuses on two things: whether the evidence supports the diagnosed quadrant, and whether the proposed intervention is correctly scoped (one metric, measurable, 30 days). Staff may redirect the intervention if the quadrant diagnosis does not match the numbers, or sharpen the rollback criterion if it is vague.",
      steps: [
        "Staff confirms or redirects the quadrant diagnosis based on the numbers presented.",
        "Staff confirms or sharpens the intervention scope: is the metric moveable in 30 days? Is the target specific enough to know if it was hit?",
        "Staff names the single most important question the founder should answer in the first week after the course ends.",
        "Presenter writes down the staff’s one question. This is the week 1 post-course priority.",
      ],
    },
    {
      title: "After all presentations: group pattern recognition",
      body: "Once all students have presented, the instructor runs a 10-minute group debrief: what quadrants appeared most often across the cohort? Were there common misdiagnoses (products diagnosed as ceiling problems that were actually price problems, or leak problems called channel problems)? What does the cohort’s aggregate data say about the most common bottleneck for B2C products at this stage?",
    },
  ],
  deliverables: [
    "A presented dashboard with MRR curve, activation rate, D7/D30 retention, and funnel conversion rates",
    "A stated diagnostic quadrant with two supporting numbers",
    "A 30-day intervention plan: one metric, one target, one deadline, one rollback criterion",
    "One note on the peer diagnosis: agree or disagree and the specific number at issue",
    "One note on staff’s single most important post-course question",
  ],
  rubric: [
    {
      dimension: "Number honesty",
      points: 25,
      notes:
        "Numbers presented as-is with no softening; zero MRR or decaying retention presented as data, not contextualized away",
    },
    {
      dimension: "Quadrant diagnosis quality",
      points: 30,
      notes:
        "Quadrant named with two specific numbers as evidence; primary quadrant identified even if multiple apply",
    },
    {
      dimension: "Intervention scope",
      points: 25,
      notes:
        "One metric, specific target, 30-day deadline, and a rollback criterion that names a number (not a feeling)",
    },
    {
      dimension: "Peer engagement",
      points: 10,
      notes:
        "Presenter listens without defending; notes the disagree/agree distinction and names the number at issue",
    },
    {
      dimension: "Post-course question",
      points: 10,
      notes:
        "Staff’s question written down and answerable: specific enough to actually answer in the first week after the course ends",
    },
  ],
  hints: [
    "The hardest part of the clinic is presenting a $0 MRR or a decaying retention curve without apologizing for it. Practice saying the number out loud once before the clinic. It gets easier after the first time.",
    "If your peer disagrees with your quadrant, their disagreement is more useful than their agreement. Do not dismiss it. Ask yourself which number they saw differently and whether they are right.",
    "A rollback criterion is not “if it doesn’t work.” It is a specific number: “if activation rate does not reach 35% by day 30, I revert to the original onboarding flow.” Vague rollback criteria mean you will keep running the experiment past the point where it is clearly not working.",
    "The most common misdiagnosis in this clinic is calling a price problem a ceiling problem. If your D30 retention is above 30% but your trial-to-paid conversion is below 5%, you probably have a price problem, not a ceiling. Look at where in the funnel users drop out before you name the quadrant.",
    "The graduate-to-compound mindset from lecture 2 is not for the capstone defense. It is for after the defense. The defense is about the next 30 days. Lifecycle sequences and programmatic SEO clusters are 90-day and 180-day moves.",
  ],
};

export function Wk10Section() {
  return <ProjectPage spec={spec} />;
}

export const wk10SectionSearchBody =
  "stall diagnosis clinic capstone defense presentation funnel cohort MRR curve diagnostic quadrant leak ceiling price channel peer diagnosis staff guidance 5-minute presentation 30-day intervention rollback criterion week 10 section";
