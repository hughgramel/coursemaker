import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW1, Define your niche and rewrite your bio",
  tagline: "Pick the narrow group you serve, then turn your X profile into a conversion landing page.",
  outDate: "Week 1",
  dueDate: "Week 2",
  overview: [
    "Most X accounts grow slowly not because they post too little but because they stand for nothing specific. A broad account, “thoughts on business, life, and tech”, gives visitors no reason to follow. This assignment asks you to reverse that: pick the narrowest description of the people you serve and the problem you solve, then rebuild your public-facing profile around that claim. You will leave this assignment with a live bio, a coherent visual identity, and a written record of the choices you made and why.",
    "The profile-conversion math from Week 1 makes the stakes concrete. If 200 people visit your profile this week and 4 follow, your conversion rate is 2%. Rewrite the bio so it speaks directly to the right person and that rate can double or triple without any change in posting volume. David Perell calls this your Personal Monopoly: the niche so specific that you own it by default. Kevin Kelly&rsquo;s &ldquo;1,000 True Fans&rdquo; makes the same point from the other side, depth of connection with a small group beats shallow reach across a large one. This assignment is the first step toward both.",
  ],
  goals: [
    "State your niche in one sentence tight enough that a stranger can repeat it back.",
    "Build a written ideal-reader profile that names what your reader wants, fears, and is already doing.",
    "Audit an existing bio against the four-part landing-page model (name signal, headline, proof, CTA).",
    "Draft three genuinely different bio variants and make a reasoned choice among them.",
    "Align photo, header image, and pinned post so the profile tells one consistent story.",
    "Articulate how niche choice shapes voice, who you serve determines what you say and how you sound.",
  ],
  background: [
    "Justin Welsh&rsquo;s niche framework argues that the right niche sits at the intersection of what you know, what you&rsquo;ve done, and who you want to serve, not just a topic you find interesting. Daniel Koe extends this by pointing out that a niche is not a content category but a transformation: you help a specific person move from a specific problem to a specific outcome. When you write &ldquo;I write about productivity,&rdquo; you are naming a topic. When you write &ldquo;I help early-career engineers ship faster without burning out,&rdquo; you are naming a transformation, and giving a potential follower a reason to care.",
    "The bio-craft framework from Week 1 treats your 160-character bio as a conversion landing page. Every word must earn its place. The name signal tells the visitor at a glance what camp you belong to. The headline states the promise, the transformation you offer. Proof is the one fact that makes the promise credible: a number, a credential, a link. The call to action tells the visitor what to do next. Most bios fail because they skip proof, bury the headline in jargon, or try to list every interest instead of committing to one. Your shadow audience (the lurkers who read but never reply) will judge the bio long before they read your posts, the bio is often the only chance to convert them.",
  ],
  instructions: [
    {
      title: "Pick a starting niche",
      body: "Read Justin Welsh&rsquo;s three-step niche framework (https://www.justinwelsh.me/newsletter/the-counterintuitive-approach-to-uncovering-your-profitable-niche) before you start. Then answer the three questions below in writing. Your answers will feed directly into your ideal-reader profile and bio draft. A niche that names only a topic, &ldquo;finance&rdquo; or &ldquo;AI&rdquo;, is not a niche; it is a section of a bookstore. Narrow until a specific person can read your niche statement and say &ldquo;that&rsquo;s me.&rdquo;",
      steps: [
        "What transformation do you offer? Complete the sentence: &ldquo;I help [specific person] go from [problem] to [outcome].&rdquo;",
        "What have you actually done, built, or lived through that makes you credible here? List two or three concrete facts, not traits, facts.",
        "Who is your ideal reader? Write 3&ndash;5 bullets: what they do, what they want, what they fear, what they have already tried, and why it hasn&rsquo;t worked.",
      ],
    },
    {
      title: "Audit your current bio against the four-part landing-page model",
      body: "Open your X profile in a private browser window so you see it as a stranger would. Copy your current bio into your submission document. Then grade each of the four parts: present and clear, present but weak, or missing. Be honest, a bio that technically contains a CTA but buries it in three lines of job titles is a missing CTA.",
      steps: [
        "Name signal: Does your display name or handle tell a first-time visitor what world you belong to, or does it require prior knowledge of you?",
        "Headline (the promise): Is there a single line that states who you help and what they get? Cut anything that sounds like a LinkedIn summary.",
        "Proof (number, link, credential): Is there one fact, not an adjective, that backs up the promise? &ldquo;Passionate about growth&rdquo; is not proof. &ldquo;Grew a newsletter to 12,000&rdquo; is.",
        "Call to action (link): Does the link in your profile go somewhere that deepens the relationship, or is it a generic homepage?",
      ],
    },
    {
      title: "Rewrite the bio in three variants and pick one",
      body: "Write three bio drafts, each under 160 characters. The three should differ in approach, not just wording: one might lead with proof, one with the transformation, one with the ideal reader named directly. Read each aloud. Ask whether a person who has never heard of you would understand it and feel something. Daniel Koe&rsquo;s test: does the bio make your ideal reader feel seen, or does it make you feel described? Those are different goals and only one converts. After drafting all three, choose one and write a short paragraph (3&ndash;5 sentences) explaining why it is stronger than the others, not just that you like it better, but what specific conversion weakness in the other two made you rule them out.",
    },
    {
      title: "Refresh profile photo, header, and pinned post to match",
      body: "The bio you picked makes a claim. Your photo, header image, and pinned post either reinforce that claim or contradict it. A bio that promises tactical SaaS pricing advice paired with a landscape header and a pinned post about your marathon finish sends mixed signals to the visitor deciding whether to follow. Update all three so they tell the same story. The pinned post should answer &ldquo;why follow this account&rdquo; more directly than the bio does, it has room for a full sentence or two. Use it. Then take a screenshot of the live profile showing all four elements together.",
    },
  ],
  deliverables: [
    "Submit a single document with: (a) your one-sentence niche statement, (b) your ideal-reader profile (3&ndash;5 bullets), (c) all three bio variants, (d) which one you chose and why, (e) a before/after screenshot of your live X profile.",
    "Post the chosen bio LIVE on your X profile by the due date.",
  ],
  rubric: [
    { dimension: "Niche specificity", points: 25, notes: "The niche is narrow enough to be remembered. Not ‘business’ or ‘self-improvement’." },
    { dimension: "Ideal-reader clarity", points: 20, notes: "You can describe who the reader is, what they want, and what they fear in one paragraph." },
    { dimension: "Bio as conversion landing page", points: 30, notes: "All four parts present: name signal, headline promise, proof, CTA. No throat-clearing." },
    { dimension: "Cohesion across photo, header, pinned post", points: 15, notes: "Everything signals the same niche." },
    { dimension: "Three real variants, real decision", points: 10, notes: "Not three rephrasings of the same line. A real selection with reasoning." },
  ],
  hints: [
    "If you can describe your niche only by listing your job title, narrow it further. &ldquo;SaaS founder&rdquo; is too broad; &ldquo;SaaS founder writing about pricing experiments for B2B&rdquo; is workable.",
    "Read Justin Welsh&rsquo;s three-step niche framework (https://www.justinwelsh.me/newsletter/the-counterintuitive-approach-to-uncovering-your-profitable-niche) before drafting.",
    "Your bio is read by people who don&rsquo;t know you yet. Don&rsquo;t write for friends.",
    "Proof can be a number (subscribers, customers, posts shipped), a credential (where you worked, what you built), or a specific demo.",
    "The pinned post should answer &rsquo;why follow this account&rsquo; more directly than the bio does.",
    "The follower funnel from Week 1 runs: impression to profile click to follow. The bio only does one job, convert the profile click. Don&rsquo;t load it with work it cannot do.",
  ],
  late: "Late submissions lose 10% per day, up to three days. After three days, no credit. Submit anyway, because HW2 depends on having a niche.",
};

export function Hw1() { return <ProjectPage spec={spec} />; }
export const hw1SearchBody = "HW1 niche bio rewrite ideal reader conversion landing page voice positioning Personal Monopoly Justin Welsh";
