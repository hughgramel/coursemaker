import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW2, MVP-grade plus the cohort test",
  tagline:
    "Ship a product that actually works, guide the first minute, and measure who comes back.",
  outDate: "End of Week 3",
  dueDate: "End of Week 5 (Friday 11:59pm)",

  overview: [
    "This assignment has one job: find out whether real users return to LangoBee when you put a working product in front of them the right way. To get an honest read, three things must be true at the same time. The product must not be broken. The first session must be guided, not improvised. And the cohort must be measured with internal accounts stripped out so the number reflects real learners, not you.",
    "Week 3's reading introduced the broken-vacuum standard: before you optimize anything, the thing must actually work (Seibel, 2019). The June 2026 snapshot gives you a concrete baseline to check against. LangoBee shows 223 rageclicks in the past 30 days and a 34-second median session. Those two numbers together signal that some users are stuck on something specific, and that the average session ends before the core loop fires. The must-work checklist is the instrument for finding what broke.",
    "Once the product passes the checklist, the second job is cutting time-to-value. Hulick (2013) frames every onboarding flow as a story about the user's transformation: the product is the mushroom that makes Mario bigger, not the point in itself. A brand-new user who lands on LangoBee without guidance has to figure out that tapping a word is the point, that the color means something, and that the comprehension score updates as they go. None of that is obvious. A 60-second guided first session removes those discoveries from the user's plate so the tap-a-word loop can land.",
    "The third job is the cohort report. The May and June data from Supabase shows that 24 percent of real signups return at all, with a median of one active day. That number is the bar you are measuring against, not a grade. What you are looking for is an honest signal: given a working product and a guided start, does return rate move? The cohort must be de-alted before you read it. Founder sessions account for 59 percent of all events in the June snapshot; an un-de-alted return rate tells you nothing about real users (Chen, 2015).",
    "The success bar is specific: at least 10 users onboarded, an honest return-rate read against the approximately 30 percent returned-among-activated benchmark, and at least 2 unprompted positive quotes collected during or after the sessions. You are not being graded on whether return rate exceeds the benchmark. You are being graded on whether you measured it correctly and reported it honestly.",
  ],

  goals: [
    "Run the must-work checklist on iPhone Safari PWA and desktop Chrome, file every defect found, and fix the blocking ones before recruiting begins (Seibel, 2019; Vohra, 2018).",
    "Ship a 60-second guided first session that takes a brand-new user from landing to their first word tap without confusion (Hulick, 2013; Rachitsky, 2022).",
    "Hand-recruit 10-15 real users from language-learning Discords, onboard each one personally, and confirm that every recruit lands on a working product with the guided start active.",
    "Pull a de-alted cohort report one week after onboarding: who activated, who returned on any later day, with content-type split (shorts, video, text) per user (Chen, 2015).",
    "Evaluate the return rate honestly against the approximately 30 percent returned-among-activated bar established by the May and June cohort data.",
  ],

  background: [
    "The broken-vacuum concept comes from a single practical observation: there is a class of product failure where the thing does not work at all for a specific user in a specific context, and no growth tactic can compensate for it. Michael Seibel describes the MVP quality bar as 'actually works for the narrow first use case' (Seibel, 2019). A rageclicking user is telling you something is broken; the question is whether it is broken in a way that blocks the core loop. The must-work checklist operationalizes that question: you write down the actions a brand-new user must be able to complete on the two most important surfaces (iPhone Safari PWA and desktop Chrome), then you run through them on a fresh session and report what fails.",
    "The activation literature distinguishes between the event you track and the experience that produces it. Rachitsky (2022) defines activation as the earliest point in onboarding that predicts long-term retention, which is different from the first action the user takes and different from account creation. For LangoBee, the June snapshot data already points to the answer: word_lookup_opened is the most common product action at 5,225 events in 30 days, and the cohort shape shows that users who engage with the tap-a-word loop are the ones who return. That makes first word tap the activation event, and a guided first session is the mechanism for getting a new user there inside 60 seconds.",
    "Hulick (2013) provides the conceptual scaffold for the guided session design. His central argument is that onboarding should not teach features; it should guide the user through a personal transformation. Applied to LangoBee: the session is not a tutorial about what the color coding means. It is the experience of encountering a word you did not know, tapping it, reading the definition, and seeing it turn amber. That transformation, from unknown to learning, is what the 60-second session is designed to deliver. Every screen before the first tap is overhead to minimize.",
    "The cohort mechanics come from Chen (2015), who argues that the most meaningful retention signal is a revisit rate table grouped by signup week with internal accounts removed. The de-alting step is not optional: when one account (the founder) generates 59 percent of all events, a blended metric is a vanity metric by Ries's definition (Ries, 2009). The correct denominator for return rate is real users who activated, not all signups. The correct numerator is those users who appeared on any day after their activation day.",
    "Nielsen (2000) provides the justification for the cohort size. Five users uncovered 85 percent of usability issues in the original Landauer and Nielsen study; 10 to 15 users is more than sufficient to get an honest first read on return behavior. The goal of this assignment is not statistical power. It is a first honest signal about whether a working product with a guided start changes the return picture.",
  ],

  instructions: [
    {
      title: "Write and run the must-work checklist",
      body: "The must-work checklist is a list of the actions a brand-new user must be able to complete for the product to deliver its core promise. Write it before you run it. The list defines what 'working' means for this cohort; without the written list, you will unconsciously skip the broken parts. Run it on two surfaces: iPhone Safari PWA (the primary mobile surface) and desktop Chrome. Use a fresh incognito session on each surface. Log every defect you find. Classify each defect as blocking (a new user cannot complete the step) or non-blocking (annoying but passable). Fix all blocking defects before you recruit anyone. File non-blocking defects in your issue tracker for a later session.",
      steps: [
        "Write the checklist before opening the product. Include at minimum: landing page loads and renders correctly, sign-up flow completes without error, language and content type are visible on first login, at least one text or video is tappable, tapping a word opens the lookup popup, the popup shows a definition, the word status changes after the tap, and the session ends without a crash or error state.",
        "Open an incognito window on iPhone Safari. Go through every checklist item in order. Screenshot each step and note the wall-clock time.",
        "Repeat on desktop Chrome in a fresh incognito window.",
        "For each failed item, open a GitHub issue with: surface (iPhone Safari / desktop Chrome), the step that failed, what you expected, what happened instead, and a screenshot.",
        "Label each issue 'blocking' or 'non-blocking'. Fix all blocking issues before proceeding to recruiting.",
        "Re-run the checklist on both surfaces after fixes are deployed to confirm blocking issues are resolved.",
      ],
    },
    {
      title: "Ship the 60-second guided first session",
      body: "The guided first session is the product experience a brand-new user gets from the moment they sign up or land on the app. It ends at the first word tap. The design constraint is 60 seconds: a new user who does not tap a word within 60 seconds of starting the guided flow has probably lost the thread. The session does not need to be a formal onboarding wizard; it can be as simple as a single modal that opens on first login, points to a piece of content, and says 'tap any highlighted word to see its meaning.' The goal is to eliminate the question 'what am I supposed to do here?' before the user asks it.",
      steps: [
        "Map the current first-login experience: open the product on a fresh session and write down every screen and decision point from landing to the first word tap. Note where a new user would stop and wonder what to do next.",
        "Design the guided session to collapse that path. The session must take a user from landing to a first word tap in 60 seconds or less on both iPhone Safari and desktop Chrome.",
        "Build and deploy the guided session to production. Do not test it only on localhost; the recruiting cohort will experience the production version.",
        "Run the guided session yourself on a fresh incognito window on both surfaces and time it. If either run exceeds 60 seconds, revise.",
        "Confirm in PostHog that the word_lookup_opened event fires during a guided-session run within 60 seconds of the first pageview.",
      ],
    },
    {
      title: "Hand-recruit 10-15 users from language-learning Discords",
      body: "Manual Discord recruiting is the only proven acquisition channel in the June 2026 snapshot: 174 direct visitors in the past 30 days versus 21 from Google and 5 from Twitter. This is the channel that works. The Refold Espanol Discord and the Dreaming Spanish community are the highest-signal targets: their members use comprehensible-input methods and are the exact users LangoBee is built for. Recruiting means a personal message, not a mass post. The message tells the person what the product does, why you think it would be useful to them specifically, and asks if they would be willing to try it and give you feedback. You onboard each person individually.",
      steps: [
        "Join the Refold Espanol Discord and any language-learning server you are not already in. Read the server rules before posting.",
        "Identify 20-25 individual members who appear to be active language learners, not bots or lurkers. Look for recent messages about vocabulary, comprehension, or specific content they are consuming.",
        "Send a personal direct message to each candidate. Include: one sentence about what LangoBee is, one sentence on why you think it matches their method, a link to the product, and a specific ask ('Would you be willing to try it for 10 minutes and tell me what you think?').",
        "When someone agrees, walk them through the onboarding personally over DM or a short call. Do not send a link and disappear. Confirm they reached the first word tap before ending the session.",
        "Log each recruit in a spreadsheet: Discord handle, server, date recruited, date onboarded, and whether they confirmed reaching first word tap.",
        "Target 10 confirmed onboardings. Stop at 15 to keep the cohort manageable for the one-week follow-up.",
      ],
    },
    {
      title: "Pull the de-alted cohort report one week later",
      body: "One week after the last person in your cohort was onboarded, pull the retention data from Supabase. The report has three parts: activation (did the user trigger word_lookup_opened?), return (did the user appear on any day after their activation day?), and content split (what proportion of their events came from shorts, standard video, and text?). De-alt before reading any number. Remove your own user ID, any accounts you recognize as test accounts, and any account whose email domain matches a known spam pattern from the June bots (a7gi.ru, host315.net, and similar). The return rate you report must be computed only from real users who activated.",
      steps: [
        "Wait until one full week has passed since the last person in your cohort was onboarded.",
        "In Supabase, query the events table for all users in your cohort. Filter to exclude your own user ID and any known test or bot accounts.",
        "For each user, record: did they trigger word_lookup_opened on their first day (activation)? Did they trigger any event on any day after their first day (return)?",
        "For activated users, compute the content-type split: what fraction of their reading_events or equivalent came from texts with type='Shorts', type='Video', and type='Article' or similar.",
        "Compute return rate as: users who returned on any later day divided by users who activated, expressed as a percentage.",
        "Compare the return rate to the approximately 30 percent bar from the May and June cohorts.",
        "Record any unprompted positive quotes from DM conversations or follow-up messages. A quote is unprompted if the user brought it up without you asking.",
      ],
    },
    {
      title: "Write the cohort report",
      body: "The cohort report is the deliverable that closes this assignment. It is a document, not a slide deck, of 2-4 pages or equivalent Markdown. Its job is to give a future session a complete, honest picture of what happened: who you recruited, what the product was like when they arrived, how you guided them, and what the data showed one week later. The report must be honest about numbers that did not move as well as numbers that did. A return rate of 15 percent reported honestly is more useful than a return rate of 35 percent reported from an un-de-alted or cherry-picked cohort.",
      steps: [
        "Section 1, Product state at recruiting time: summarize what you fixed from the must-work checklist and what you left as non-blocking. Include the issue count by severity.",
        "Section 2, The guided first session: describe what you shipped and how long it took a new user to reach first word tap. Include the PostHog confirmation screenshot.",
        "Section 3, Recruiting log: number of DMs sent, number of responses, number of confirmed onboardings, which servers they came from.",
        "Section 4, Cohort data: a table with one row per user (anonymized to a number or initials), showing: activated (yes/no), returned (yes/no), content-type split. Include the de-alting criteria you applied.",
        "Section 5, Return rate: the number, the denominator, the benchmark, and an honest sentence on whether the result is above, at, or below the bar.",
        "Section 6, Quotes: at least 2 unprompted positive quotes, with the exact words, not paraphrases. Note the date and context.",
        "Section 7, What you learned and what you are watching next: one paragraph, no more.",
      ],
    },
    {
      title: "Ship public output and submit",
      body: "Before you submit, post publicly about what you measured. One paragraph on any public channel: what you shipped, one number from the cohort, and one thing you plan to watch in the next cycle. The purpose is the same as in HW1: writing for a public audience forces precision. A vague paragraph is a sign that you do not yet know what you learned.",
      steps: [
        "Write and publish the paragraph on any public channel (X, LinkedIn, a personal blog, or your build-in-public thread).",
        "Include at least one real number from the cohort report.",
        "Copy the URL of the post.",
        "Submit the cohort report PDF or Markdown, the must-work checklist with issue log, the PostHog screenshot confirming the guided session fires word_lookup_opened, and the URL of your public post via the course submission form.",
      ],
    },
  ],

  deliverables: [
    "Must-work checklist with issue log: the written checklist, the run results on iPhone Safari PWA and desktop Chrome, the GitHub issues filed (with blocking/non-blocking labels), and a note on which blocking issues were fixed before recruiting.",
    "Guided first session, shipped to production: a description of what you built, a screen recording or screenshots of the flow on both surfaces, and a PostHog screenshot showing word_lookup_opened firing within 60 seconds of a fresh session start.",
    "Recruiting log: a spreadsheet or table showing each recruit, the server they came from, the date onboarded, and whether they confirmed reaching first word tap.",
    "Cohort report, 2-4 pages following the seven-section structure in Instruction 5: product state, guided session, recruiting log summary, cohort data table (de-alted), return rate with benchmark comparison, at least 2 unprompted quotes, and next watch item.",
    "Public output URL: a link to the paragraph post including at least one real number from the cohort.",
    "Stretch (optional): a short Loom (3-5 minutes) walking through the cohort data table and explaining your de-alting criteria and what you are watching next.",
  ],

  rubric: [
    {
      dimension: "Product actually not broken",
      points: 30,
      notes:
        "Must-work checklist written before running; run on both surfaces with screenshots; all blocking defects filed as GitHub issues; blocking issues fixed and re-verified before recruiting begins. Non-blocking issues filed but not required to be fixed.",
    },
    {
      dimension: "Onboarding actually guided",
      points: 30,
      notes:
        "Guided first session shipped to production; new user reaches first word tap in 60 seconds or less on both iPhone Safari and desktop Chrome; PostHog screenshot confirms word_lookup_opened fires; personal onboarding confirmed for each recruit.",
    },
    {
      dimension: "Cohort actually measured",
      points: 30,
      notes:
        "De-alting criteria stated explicitly; return rate computed from activated real users only; cohort data table present with content-type split per user; return rate compared honestly to the approximately 30 percent bar; at least 2 unprompted quotes present with exact wording.",
    },
    {
      dimension: "Public output shipped",
      points: 5,
      notes:
        "URL resolves; post is public; includes at least one real number from the cohort; posted before submission deadline.",
    },
    {
      dimension: "Report clarity and honesty",
      points: 5,
      notes:
        "Seven-section structure followed; numbers formatted consistently; no rounding up or cherry-picking; honest characterization of results against the benchmark.",
    },
  ],

  hints: [
    "Run the must-work checklist before you touch the guided session code. A broken product plus a polished onboarding flow still produces a broken experience. The checklist reveals which things to fix first.",
    "The 223 rageclicks in the June snapshot are the most direct signal about where blocking defects live. In PostHog, create a funnel from first pageview to word_lookup_opened and look at the drop-off step that precedes the most rage_click events. That step is the first item to put on your checklist.",
    "A guided first session does not have to be an onboarding wizard. A single bottom sheet on first login that says 'tap any word you do not know' and highlights a recommended piece of content is enough. The constraint is 60 seconds; complexity beyond what that requires is overhead.",
    "When you recruit via Discord DM, lead with the specific reason you are reaching out to that person. 'I saw you mentioned Dreaming Spanish and comprehensible input' converts dramatically better than a generic pitch. You are recruiting 10-15 people, not 10,000; the personal touch is the strategy.",
    "De-alting is the step most likely to go wrong. Before you run the return-rate calculation, list every account ID you are excluding and the reason for each exclusion. If you later discover you missed an internal account, you can rerun the calculation; if you never wrote down the criteria, you cannot verify the result.",
    "Rachitsky and Timen (2022) report that the industry median activation rate is 25 percent and the mean is 34 percent. LangoBee's May cohort shows 12 activated out of 15 signups for the week of May 18, which is 80 percent, much higher than the median. That suggests the activation event (word_lookup_opened) may fire too easily or the denominator is too small. Sanity-check your activation count against the checklist run: if all 10 recruits activated, that is useful signal; if 2 activated, the guided session did not deliver.",
    "An unprompted quote is one the user sent without being asked. 'What did you think?' is a prompt; the answer is not a valid unprompted quote. The best place to collect unprompted quotes is in the follow-up DM conversation a day or two after onboarding, when users sometimes reply to say they came back.",
  ],

  late:
    "One week late: maximum 80 points. Two weeks late: maximum 60 points. Submissions more than two weeks late are not accepted. The real-number requirement applies at any submission date: a de-alted cohort from fewer than 10 onboarded users must be reported as such, not padded.",
};

export function Hw2Page() {
  return <ProjectPage spec={spec} />;
}

export const hw2SearchBody =
  "HW2 must-work checklist broken-vacuum guided first session time-to-value activation word tap onboarding 60 seconds iPhone Safari PWA desktop Chrome rageclicks Discord recruiting hand-recruited cohort de-alted return rate cohort report content-type split shorts video text unprompted quotes benchmark 30 percent activation rate week 3 week 4 week 5 product not broken onboarding guided cohort measured";
