import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 2 section, Hook lab",
  tagline: "Write twenty hooks against a single source claim. Peer-rate each on specificity and curiosity. Pick the three you would publish.",
  outDate: "Week 2",
  overview: [
    "A hook only works if a stranger will stop scrolling for it. The goal of this lab is to build the muscle of generating many options before committing to one. You will start with a single factual claim, produce twenty distinct hooks for it using at least four of the five patterns from lecture, then rate your classmates’ hooks on two dimensions and defend your top three picks.",
    "You will leave section with a live list of hooks you can actually post this week, plus a calibrated sense of what “specific enough” means in your niche.",
  ],
  goals: [
    "Generate at least twenty hooks from a single source idea without repeating a pattern more than four times.",
    "Label each hook with the pattern it uses (claim, contrast, number, story-open, question).",
    "Rate a peer’s set on a 1-3 specificity scale and a 1-3 curiosity scale.",
    "Pick your three strongest hooks and write one sentence justifying each choice.",
    "Identify at least one hook where the pattern is strong but the payoff promise is vague, and rewrite it.",
  ],
  instructions: [
    {
      title: "Choose your source claim (5 min)",
      body: "Pick one specific, verifiable claim from your niche. It should be a single sentence you could say out loud at a dinner table without footnotes. Examples: “Most people lose 80% of their new Twitter followers in the first 30 days.” or “Photographers who post behind-the-scenes content get 2x the profile visits of those who only post finished work.” Write your claim at the top of your sheet before generating any hooks.",
    },
    {
      title: "Generate twenty hooks (20 min)",
      body: "Write twenty hooks for your claim. Rules:",
      steps: [
        "Each hook is one sentence, under 280 characters.",
        "Label each with its pattern: C (claim), CT (contrast), N (number), S (story-open), Q (question).",
        "Use each pattern at least twice.",
        "Do not stop at the first ten good ones. The best hooks often appear after you’ve exhausted the obvious options.",
        "Do not self-censor. Write every idea even if it feels weak.",
      ],
    },
    {
      title: "Peer rating (10 min)",
      body: "Exchange sheets with a partner. For each hook, assign two scores:",
      steps: [
        "Specificity (1-3): 1 = could apply to any topic, 2 = recognizably about the niche, 3 = would only make sense to someone already in the niche.",
        "Curiosity (1-3): 1 = I know where this is going, 2 = I’m mildly interested, 3 = I need to know what comes next.",
        "Circle any hook where the pattern is clear but the payoff promise is too vague to deliver on.",
      ],
    },
    {
      title: "Pick your three (5 min)",
      body: "Return the sheet to your partner. Review their ratings. Pick the three hooks you would actually publish this week. For each of the three, write one sentence: why this hook and not a higher-rated one? Your reasoning matters more than the scores.",
    },
    {
      title: "Rewrite one (5 min)",
      body: "Choose one hook from your list that your partner circled as “pattern strong, payoff vague.” Rewrite it so the payoff is concrete. Bring both versions to the debrief.",
    },
    {
      title: "Debrief (15 min)",
      body: "Two volunteers share their source claim, their top three hooks, and the rewrite. The group rates each top-three hook live. We end by identifying one pattern that consistently produced high-scoring hooks in this section and one that consistently fell flat.",
    },
  ],
  deliverables: [
    "A list of twenty labeled hooks on paper or a shared doc, with peer scores filled in.",
    "Three hooks marked as your picks, each with a one-sentence justification.",
    "One before/after rewrite of a vague-payoff hook.",
  ],
  rubric: [
    { dimension: "Volume (20 hooks, all labeled)", points: 10, notes: "Partial credit: 1 point per 2 hooks, minimum labels on all present hooks." },
    { dimension: "Pattern coverage (at least 4 of 5 patterns used)", points: 10, notes: "2 points per pattern used beyond the first." },
    { dimension: "Peer rating completed (all scores filled)", points: 10, notes: "A rating of 1 is fine; missing scores are not." },
    { dimension: "Top three with written justification", points: 10, notes: "Justification must reference specificity or payoff, not just “I like it.”" },
    { dimension: "Before/after rewrite quality", points: 10, notes: "The rewrite must be concretely more specific than the original." },
  ],
  hints: [
    "If you run dry at hook 12, try the pattern you’ve used least. Constraints produce options.",
    "The number pattern is the easiest to start with and the hardest to make specific. Avoid “5 things about X” without saying which five.",
    "A story-open hook needs a specific moment: who, when, what happened. “I almost quit” is too generic. “I almost quit in March 2024 after three months of zero growth” is a hook.",
    "Hook-to-payoff alignment: read each hook and ask “what is this promising to deliver?” If you can’t answer in one clause, the hook is too vague.",
    "Your top three picks do not have to be your three highest-scored picks. Peer ratings are data, not verdicts.",
  ],
};

export function Wk02Section() {
  return <ProjectPage spec={spec} />;
}

export const wk02SectionSearchBody =
  "hook lab section worksheet twenty hooks peer rating specificity curiosity claim contrast number story-open question source claim rewrite payoff vague Week 2 section";
