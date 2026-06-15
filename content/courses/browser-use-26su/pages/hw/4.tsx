import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW4: Harden an authenticated agent",
  tagline:
    "Reuse a real login via a persisted browser profile, add reliability guards, and measure what actually changed.",
  outDate: "Week 8",
  dueDate: "Week 10",

  overview: [
    "Most agents break in one of two places: they get stuck at a login wall because they cannot authenticate without exposing credentials, or they loop and fail because the task framing is vague and the guards are too permissive. This assignment attacks both. You take a browser-use agent that operates on a site where you have a real account, and you harden it across three dimensions: persistent authentication, reliability guards, and task framing.",
    "The centerpiece is the combination you learned in weeks 7-8: a persisted browser profile carries your real login across runs without the model ever seeing your password, while sensitive_data keeps any remaining secrets (API tokens, one-time codes) out of the LLM context window. On top of that, you set max_steps and max_failures to give the agent a budget, add a task prompt that decomposes the goal into ordered steps so the agent knows when it is done, and optionally wire a planner model to break long tasks into sub-goals.",
    "The deliverable is not just running code. It is also a short reliability report: you run the hardened agent at least five times and record whether each run succeeded or failed, where failures occurred, and what you changed between the unhardened and hardened versions. The report separates what actually improved reliability from what you assumed would help.",
  ],

  goals: [
    "Apply (Week 7): configure a BrowserSession with user_data_dir pointing to a real browser profile so the agent reuses an existing login without re-authenticating.",
    "Apply (Week 6-7): use sensitive_data to keep any remaining secrets (passwords, tokens) out of the model context while still passing them to the browser at execution time.",
    "Apply (Week 8): set max_steps, max_failures, and a well-framed task prompt so the agent terminates cleanly instead of looping or running indefinitely.",
    "Analyze (Week 8): run the agent at least five times before and after hardening, compare success rates, and identify the specific failure modes that remained.",
    "Evaluate (Weeks 1-8): read the step history for a failed run and pinpoint the step where the agent diverged, using perceived/decided/acted annotations from the same reading skill practiced in HW1.",
  ],

  instructions: [
    {
      title: "Choose your target site and task",
      body: "Pick a site where you have a real, working login and a task the agent can repeat multiple times without side effects (or with side effects you can reset). Good candidates: a personal dashboard you can read from, a task tracker where you can create and delete items, a search interface behind a login wall. The task must require authentication to reach the relevant content.",
      steps: [
        "Name the site and the specific task in two sentences: what page the agent must reach, and what action it must take or extract.",
        "Confirm the task is repeatable: you can run it five or more times without manual cleanup between runs, or you can describe the cleanup step.",
        "Run the unhardened baseline first: a plain Agent with your task prompt and no profile, no sensitive_data, no reliability guards. Record whether it succeeds. This is the before state you will compare against.",
      ],
    },
    {
      title: "Set up a persisted browser profile",
      body: "Log into the target site manually in a Chrome or Chromium browser, then point user_data_dir at that profile directory so the agent inherits the session. The agent must reach the authenticated content without triggering a login form.",
      steps: [
        "Find your Chrome user data directory. On macOS it is typically ~/Library/Application Support/Google/Chrome; on Linux, ~/.config/google-chrome. You can also create a dedicated profile directory by launching Chrome with --user-data-dir=/path/to/my-profile and logging in once.",
        "Create a BrowserSession with user_data_dir set to that directory and headless=False for the first test run, so you can confirm the profile loads and the site opens already logged in.",
        "Run the agent with the profile and verify it reaches the authenticated content at step 1, before it has taken any action. If a login form appears, the profile did not load correctly: check the path and the profile subdirectory.",
        "Once the profile works, you may switch to headless=True for repeated runs if headless mode does not break any UI elements the agent needs.",
      ],
    },
    {
      title: "Keep secrets out of the model with sensitive_data",
      body: "Even with a persisted profile, there are often credentials or tokens the agent still needs to type, such as two-factor codes, API keys entered into a form, or a password for a secondary action. Use sensitive_data to pass these values through the framework without putting them in the LLM's context window.",
      steps: [
        "Identify any secret the agent needs to type or use during the task. If the profile handles everything and no secrets are needed, note that explicitly and explain why.",
        "Define a sensitive_data dict mapping a placeholder name to the real value. Example: {\"MY_PASSWORD\": os.environ[\"SITE_PASSWORD\"]}. Load the real value from an environment variable, never from a hardcoded string.",
        "Rewrite the task prompt to reference the placeholder, not the real value. Example: \"Log in using the password MY_PASSWORD if prompted.\" The framework substitutes the real value at execution time; the model only sees the placeholder.",
        "Confirm the substitution works by checking the agent's step history: the placeholder name should appear in the logged task, not the real secret.",
      ],
    },
    {
      title: "Add reliability guards and reframe the task",
      body: "Set max_steps and max_failures, then rewrite the task prompt to decompose the goal into ordered sub-steps with a clear done condition. Vague task prompts are a leading cause of loops: the agent does not know when it is finished, so it keeps acting.",
      steps: [
        "Set max_steps to a value that gives the agent enough room to complete the task with some buffer but not so much that a looping agent wastes tokens. A focused authenticated task usually needs 8-15 steps. Justify your number in a comment.",
        "Set max_failures to 3 or lower. The default is permissive enough that an agent can fail repeatedly before stopping. Tightening it surfaces real failure modes faster.",
        "Rewrite the task prompt to list the sub-steps in order. Example: \"1. Navigate to /reports. 2. Click the Download CSV button for the current month. 3. Wait for the download to complete. 4. Call done and report the filename.\" Ordered, numbered steps reduce ambiguity about what comes next.",
        "Optional: pass a separate planner model via the planner_llm parameter and set use_vision=False on the main agent if the site is text-heavy. This routes high-level planning to a stronger model while the executor focuses on action selection.",
      ],
    },
    {
      title: "Run the hardened agent five or more times",
      body: "Run the hardened agent at least five times against the same task. Record each run as pass or fail, note the step number where failures occurred, and save the step history for at least one failed run and one successful run. Do not modify the agent between runs during this measurement window; fix bugs, but do not tune the prompt or guards mid-run.",
      steps: [
        "Create a simple run script that loops five times, calls agent.run(), prints the result, and appends a pass/fail line to a results file.",
        "For each failed run, note: which step failed, what the agent was trying to do (next_goal), and what action it attempted.",
        "Save the full step history for the worst failure (the run that diverged earliest) and one clean success. You will reference these in the reliability report.",
      ],
    },
    {
      title: "Write the reliability report",
      body: "Write a short report (400-600 words) covering four things: (1) the before/after success rate across your runs, stated as a fraction (e.g., 1 out of 3 unhardened runs succeeded; 4 out of 5 hardened runs succeeded); (2) which specific change had the largest effect on reliability and why you think so; (3) the failure mode that persisted after hardening, with the exact step and next_goal from the history where it broke; (4) one change you would make if you had more time.",
      steps: [
        "State the before success rate from your unhardened baseline runs and the after success rate from your five hardened runs. Use fractions, not invented percentages.",
        "Attribute the reliability gain. Did the profile remove a login-failure step? Did the reframed prompt eliminate a loop? Point to a specific step in the history that disappeared or changed.",
        "Describe the failure mode that remains. Paste the next_goal and action from the step where the hardened agent still breaks. Speculate briefly on the cause.",
        "One-paragraph prescription: what would you change next, and which lever (prompt, guards, profile, custom action, planner) would you pull first?",
      ],
    },
  ],

  deliverables: [
    "Working Python code: the hardened agent script with BrowserSession configured with user_data_dir, sensitive_data wired (or a note explaining none was needed), max_steps and max_failures set, and the reframed task prompt. Secrets must be loaded from environment variables, not hardcoded.",
    "Evidence the profile works: a screenshot or terminal output showing the agent reaching authenticated content at step 1 without hitting a login form.",
    "Run results file: a plain-text or Markdown table listing each of your five or more runs as pass or fail, the number of steps taken, and the failure step for each failed run.",
    "Step history excerpts: the full step history for one successful run and one failed run, as text copied from the agent output.",
    "Reliability report (400-600 words): before/after success rates as fractions, attribution of the largest reliability gain, description of the remaining failure mode with a specific step excerpt, and a one-paragraph prescription for what to try next.",
  ],

  rubric: [
    {
      dimension: "Persisted profile authenticates without exposing credentials",
      points: 25,
      notes:
        "BrowserSession uses user_data_dir; agent reaches authenticated content at step 1 without a login form; no password or token appears in the task prompt or step history.",
    },
    {
      dimension: "sensitive_data used correctly (or justified absence)",
      points: 15,
      notes:
        "If any secret needs to be typed, sensitive_data maps a placeholder to an env-var value and the task prompt uses the placeholder. If no secret is needed, the report explains why.",
    },
    {
      dimension: "Reliability guards set and task prompt decomposed",
      points: 20,
      notes:
        "max_steps and max_failures are set with a comment justifying the numbers; task prompt lists ordered sub-steps with a clear done condition; no vague open-ended phrasing.",
    },
    {
      dimension: "Five or more runs measured with a results file",
      points: 15,
      notes:
        "Results file lists each run as pass or fail with step count; at least five hardened runs; step histories for one success and one failure are included.",
    },
    {
      dimension: "Reliability report: before/after fractions and failure attribution",
      points: 25,
      notes:
        "Before/after success rates stated as fractions from actual runs; largest reliability gain attributed to a specific change with evidence from the step history; remaining failure mode described with a concrete step excerpt.",
    },
  ],

  hints: [
    "The most common profile mistake is pointing user_data_dir at the parent Chrome directory instead of a specific profile subdirectory. Chrome stores profiles in Default, Profile 1, Profile 2, and so on. If the agent opens a fresh browser instead of your logged-in one, check that you are pointing at the directory that contains a file called Cookies, not the directory that contains Default.",
    "headless=False is your debugging tool. Run the first few hardened attempts with the browser visible. You will see immediately whether the profile loaded, whether the agent is hitting a CAPTCHA or two-factor prompt, and whether a click is landing on the wrong element. Switch to headless later.",
    "Task prompts that say 'find the report and download it' are too open. The agent does not know which report, how to navigate to it, or what downloading looks like. Numbered sub-steps turn a wandering search into a deterministic sequence: step 1 goes to a specific URL, step 2 clicks a specific element type, step 3 waits for a specific condition, step 4 calls done.",
    "If the agent loops at a particular step across multiple runs, the loop detector will eventually catch it, but it wastes steps getting there. A faster fix is to add that action to the list of things to avoid in the task prompt: 'Do not click the Help button. Do not navigate away from /reports.' Negative constraints reduce the action space at the step where confusion recurs.",
    "sensitive_data substitution happens at the framework level before the action reaches the browser. The model never sees the real value. You can confirm this by reading the printed step history: the placeholder name (e.g., MY_PASSWORD) will appear in the logged action, not the real string. If the real value appears in the log, you did not use sensitive_data correctly.",
    "Five runs is the minimum. If you have time, run ten. Reliability behavior at small sample sizes is noisy: three successes out of three is not the same as nine out of ten. The more runs you have, the more meaningful the before/after comparison becomes.",
  ],

  late: "Late submissions lose 10 points per day, up to three days. After three days the assignment closes. Submit the run results file and step history excerpts even if the reliability report is incomplete.",
};

export function Hw4Page() {
  return <ProjectPage spec={spec} />;
}

export const hw4SearchBody = [
  spec.title,
  spec.tagline ?? "",
  ...spec.overview,
  ...spec.goals,
  ...(spec.background ?? []),
  ...spec.instructions.map(
    (t) => `${t.title} ${t.body ?? ""} ${(t.steps ?? []).join(" ")}`
  ),
  ...spec.deliverables,
  ...(spec.rubric ?? []).map((r) => `${r.dimension} ${r.notes ?? ""}`),
  ...(spec.hints ?? []),
  spec.late ?? "",
].join(" ");
