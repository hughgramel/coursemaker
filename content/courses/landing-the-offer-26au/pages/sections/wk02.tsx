import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 2 section: resume teardown clinic and public artifact sketch",
  tagline:
    "Rewrite three of your own bullets live, then sketch the one public artifact you will ship this term.",
  outDate: "Week 2",
  overview: [
    "Your resume and your public surfaces are the first filter in every formal application channel. This section does two things. First, it gives you a structured space to rewrite real bullets from your own resume draft using the accomplishment formula from Lecture 1. Second, it asks you to commit to one specific public artifact you will ship before the end of term.",
    "The section work feeds directly into HW 1 (Resume and portfolio audit, due Week 3). The three bullets you rewrite here are candidates for your final resume draft. The artifact sketch you produce here is your commitment device: you will check in on it in later weeks.",
    "Come with at least three bullet points from your current resume draft and a rough idea of one project you could turn into a public artifact. You do not need a polished draft of anything: the work happens in the room.",
  ],
  goals: [
    "Apply the three-question accomplishment formula (what, at what scale, with what result) to real bullets from your own resume",
    "Identify where a bullet describes a task rather than an accomplishment and rewrite it with a stronger action verb and a concrete result",
    "Audit one section of your resume against the keyword list from a real job description you want to apply to",
    "Choose and describe one public artifact you will produce this term: a blog post, a live demo, a write-up, or a detailed README",
    "Give and receive specific peer feedback on two bullet rewrites using the accomplishment formula as the rubric",
  ],
  instructions: [
    {
      title: "Bring your material",
      body: "Before section, open your current resume draft and pick three bullets that feel weak or generic. Copy them into a plain text document. Also bring one job description for a role you plan to apply to this term. You will need both during the teardown.",
    },
    {
      title: "Keyword gap audit (15 minutes)",
      body: "Working individually, paste the job description into a plain text editor. Highlight every technology name and action verb. Compare the list against your resume section by section. Write down the three largest keyword gaps: skills or technologies the JD mentions that your resume does not. These are your priority edits for HW 1.",
    },
    {
      title: "Bullet teardown in pairs (20 minutes)",
      body: "Pair up with someone. Share your three weak bullets with your partner. For each bullet, your partner asks: &ldquo;What did you do? At what scale? With what result?&rdquo; Your answers become the raw material for the rewrite. Switch roles after 10 minutes. The goal is to surface the real information that is missing from the bullet, not to polish prose.",
    },
    {
      title: "Live rewrite (15 minutes)",
      body: "Working alone, rewrite all three bullets using the information surfaced in the teardown. Each rewritten bullet should: start with an ownership verb (Built, Designed, Implemented, Optimized, Reduced, Shipped), include a scale signal (team size, data volume, user count, time pressure), and end with or contain a result (metric before/after, concrete outcome, or scoped claim). Bring all three rewrites to the group debrief.",
    },
    {
      title: "Group debrief on bullet rewrites (10 minutes)",
      body: "Two volunteers share one original bullet and its rewrite with the full group. The group applies the three-question test aloud: does the rewrite answer what, scale, and result? Is the action verb specific enough? Does it signal ownership or contribution? Iterate on one bullet as a group so everyone sees the editing process.",
    },
    {
      title: "Public artifact sketch (15 minutes)",
      body: "Working individually, fill out a short artifact plan: (1) What project will this artifact cover? (2) What format: blog post, live demo, write-up, or detailed README? (3) What problem does the project solve and for whom? (4) What is the one interesting technical decision you made that an interviewer would want to ask about? (5) What is your target publication date? You will not submit this plan for a grade, but you will check in on it at the start of section in Weeks 4 and 8.",
    },
  ],
  deliverables: [
    "A list of your top three keyword gaps from the job description audit (bring to section, feed into HW 1)",
    "Three original bullets and three rewritten bullets, side by side (bring to section, candidates for your HW 1 resume draft)",
    "A completed one-page artifact plan covering project, format, problem statement, interesting technical decision, and target publish date",
    "Peer feedback notes from the bullet teardown: what your partner surfaced that was missing from your original bullets",
  ],
  rubric: [
    {
      dimension: "Keyword gap audit: three gaps identified with specific evidence",
      points: 20,
      notes:
        "Each gap names a technology or skill from the JD that is absent from the resume; not just a generic category",
    },
    {
      dimension: "Bullet rewrites: three rewrites apply the full formula",
      points: 40,
      notes:
        "Each rewrite has an ownership verb, a scale signal, and a result. Weak verbs (helped, assisted) are absent.",
    },
    {
      dimension: "Public artifact plan: all five fields complete and specific",
      points: 30,
      notes:
        "The interesting technical decision field is the hardest; a vague answer here is the most common gap",
    },
    {
      dimension: "Section participation: peer teardown and group debrief",
      points: 10,
      notes:
        "Asks at least one substantive question during the group debrief or volunteer debrief",
    },
  ],
  hints: [
    "The most common reason a bullet stays weak after a rewrite is that the result field is vague. If you wrote &ldquo;improved performance,&rdquo; push yourself to name a number: how much, measured how, compared to what baseline?",
    "If you genuinely do not have a metric, use a scoped claim instead of a vague one. &ldquo;Sole backend engineer on a 3-person team that shipped in 6 weeks&rdquo; is specific even without a performance number.",
    "For the keyword gap audit, prioritize gaps in the &ldquo;Required skills&rdquo; section of the JD over gaps in &ldquo;Nice to have.&rdquo; Closing a required-skills gap is almost always a higher-leverage edit than adding a nice-to-have.",
    "The artifact plan works best when the interesting technical decision is something you genuinely found hard or surprising. If you cannot think of one, that is a sign the project needs more depth, not that you need a better answer.",
    "This section&rsquo;s bullet rewrites are your raw material for HW 1. Do not leave section without at least one rewrite you feel good about: it will anchor the rest of the assignment.",
  ],
};

export function Wk02Section() {
  return <ProjectPage spec={spec} />;
}

export const wk02SectionSearchBody =
  "section resume teardown bullet rewrite accomplishment formula keyword gap audit public artifact sketch peer feedback action verb scale result ownership Week 2 landing the offer SWE job search";
