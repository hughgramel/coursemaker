import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW2: Trace the perception pipeline",
  tagline: "Run a real agent, capture what it saw at each step, and explain how the page became a numbered selector map.",
  outDate: "Week 3",
  dueDate: "Week 5",
  overview: [
    "Every browser-use agent step begins with perception: a BrowserSession assembles a browser-state summary (URL, page title, serialized DOM, optional screenshot) and hands it to the model. The DOM service has already done the hard work of turning a raw webpage into a numbered selector map, an integer index for each interactive element the agent is allowed to act on. The model never writes CSS selectors; it says 'click element 5' and the framework resolves that to the right node.",
    "This assignment makes that perception layer visible. You will run an agent on a multi-step task, pause to capture the browser-state summary and selector map at several checkpoints, and produce an annotated trace: each step shows which element indices appeared, what they mapped to on screen, what state was trimmed to fit the context budget, and what the agent chose to do next. You will also run the same page twice, once with vision disabled and once with it enabled, and compare the token cost and clarity tradeoff.",
    "By the time you submit, you will be able to read a step trace and narrate, from the data, exactly what the agent perceived and why it made the choice it did. That ability is the foundation for every debugging and extension skill the rest of the course builds on.",
  ],
  goals: [
    "Explain how the DOM service converts a live webpage into a selector map: CDP snapshot, accessibility tree merge, interactive-element detection, hidden-element filtering, and integer index assignment.",
    "Capture and read a BrowserSession browser-state summary at multiple steps in a running agent.",
    "Annotate a selector map by mapping each integer index to the visible on-screen element it refers to.",
    "Identify which parts of the browser state were trimmed or summarized to stay within the context budget, and explain why trimming is necessary.",
    "Compare a DOM-only run against a vision-enabled run on the same page: describe the token cost difference and the cases where a screenshot adds clarity the DOM text alone cannot provide.",
  ],
  instructions: [
    {
      title: "Choose a multi-step task and a target website.",
      body: "Pick a publicly accessible website and a task that requires at least four agent steps (for example: search for a product, open a result, locate the price, and extract the shipping options). Use a site that does not require login. Write one sentence describing the task you will give the agent.",
    },
    {
      title: "Set up the agent with step-level logging.",
      body: "Run the agent with a low max_steps value (8-12) so traces stay manageable. Add a step callback or wrap the agent run in an async loop to capture the browser state at each step. The browser-state summary is available from the BrowserSession; print or save it as JSON after each step.",
      steps: [
        "Install browser-use and set your LLM API key in the environment.",
        "Write a short script that instantiates Agent with your task and a step callback.",
        "In the callback, serialize the current browser-state summary (url, title, DOM text, selector map) to a file named step-N.json.",
        "Run with headless=False so you can take a screenshot of each step for your annotations.",
        "Confirm that step-N.json files are created for each step before proceeding.",
      ],
    },
    {
      title: "Capture the selector map at three steps and annotate it.",
      body: "Choose three steps from your trace where the selector map is interesting: a step with many interactive elements, a step where the map changed significantly from the previous step, and the step where the agent makes the key decision (click, type, or navigate) that advances the task. For each of these three steps, annotate the selector map.",
      steps: [
        "Open the step-N.json file and locate the selector_map or equivalent element index list.",
        "Take a screenshot of the browser at that step (or use the screenshot in the browser state if vision is enabled).",
        "For each element index that appears in the selector map, write one line: [index] -> tag/role, visible text or label, approximate location on screen.",
        "Circle or highlight at least three elements in the screenshot to show the mapping visually.",
        "Note any elements you expected to see that do NOT appear in the map and explain why (hidden, off-viewport, no interactive role).",
      ],
    },
    {
      title: "Identify what was trimmed and explain the context budget.",
      body: "A BrowserSession browser-state summary does not pass the full raw HTML to the model. It passes a serialized representation that has already been filtered and possibly truncated to fit the context budget. Look at the DOM text in two of your step files and compare it to the raw page source.",
      steps: [
        "Open the page in a browser and view its raw HTML source (Ctrl+U or view-source:).",
        "Count the approximate number of characters in the raw HTML versus in the DOM text field of your step JSON.",
        "List at least three categories of content that appear in the raw source but not in the browser-state summary (for example: script tags, style blocks, comments, non-interactive decorative elements).",
        "State, in one sentence per category, why each category is excluded from the summary.",
        "If the DOM text was truncated (ends mid-element or has a truncation marker), note the approximate character limit you observed.",
      ],
    },
    {
      title: "Run the same page with vision enabled and compare.",
      body: "Re-run the agent on the same task with use_vision=True (pass this to Agent or BrowserSession). Choose one step where the DOM-only run struggled or made a suboptimal choice, and compare the two step files for that step.",
      steps: [
        "Add use_vision=True to your agent or session configuration.",
        "Run the same task again and capture step-N.json files as before.",
        "Pick one step to compare in detail. Side-by-side: paste the DOM text from the DOM-only run and the DOM text plus screenshot description from the vision run.",
        "State the approximate token count of each (character count / 4 is a reasonable estimate for English text; screenshots cost a fixed token amount that your LLM provider publishes).",
        "Describe one concrete case where the screenshot helped the agent understand the page better than the DOM text alone. If the DOM-only run handled the page fine, explain what property of this page made vision redundant.",
      ],
    },
    {
      title: "Write the annotated trace document.",
      body: "Assemble your findings into a single annotated trace document (PDF, Markdown, or a structured notebook). The document must cover all steps in your trace with the three deeply annotated steps called out explicitly.",
      steps: [
        "Start with a one-paragraph task description: what site, what goal, how many steps the agent took, and whether it succeeded.",
        "For each step: a table or list showing the step number, the current URL, the number of elements in the selector map, and the action the agent chose.",
        "For each of the three annotated steps: the annotated screenshot with element indices labeled, the selector map excerpt, and your analysis of what the agent perceived.",
        "A dedicated section on trimming: your comparison of raw HTML size vs DOM text size and the three trimming categories you identified.",
        "A dedicated section on DOM-only vs vision: the side-by-side comparison for your chosen step and your token-cost analysis.",
        "A one-paragraph reflection: what surprised you about the perception pipeline, and what would you want the selector map to show that it currently does not?",
      ],
    },
  ],
  deliverables: [
    "step-N.json files for all agent steps (or a combined JSON/JSONL file), attached or linked in your submission.",
    "Annotated trace document (PDF, Markdown, or notebook) covering all six instruction sections above.",
    "Three annotated screenshots, one per deeply analyzed step, with element indices labeled on screen.",
    "DOM-only vs vision comparison for one step: side-by-side DOM text excerpts plus token-count estimates for each.",
    "One-paragraph task description and one-paragraph reflection (both inside the trace document).",
  ],
  rubric: [
    {
      dimension: "Selector map annotations: three steps, indices mapped to on-screen elements",
      points: 30,
      notes: "Each annotation names the tag or role, the visible text or label, and the approximate screen location. Unlabeled or missing mappings lose points.",
    },
    {
      dimension: "Trimming analysis: three categories identified and explained",
      points: 20,
      notes: "Each category is a distinct content type (not just 'stuff that was removed'). Explanation states why it is excluded from the browser-state summary.",
    },
    {
      dimension: "DOM-only vs vision comparison: token cost estimated and clarity tradeoff stated",
      points: 20,
      notes: "Comparison covers the same step from both runs. Token estimate methodology is stated. At least one concrete example of vision adding or not adding clarity.",
    },
    {
      dimension: "Trace completeness: all steps tabulated, three steps deeply annotated",
      points: 15,
      notes: "Step table covers every step the agent took. Three annotated steps are the clearly marked deep dives.",
    },
    {
      dimension: "Reflection: addresses something surprising about the perception pipeline",
      points: 10,
      notes: "Reflection is specific, not generic. It names a property of the pipeline, not just 'it was interesting.'",
    },
    {
      dimension: "Clarity and accuracy",
      points: 5,
      notes: "Document is readable, steps are in order, JSON files are attached. No placeholder text.",
    },
  ],
  hints: [
    "The selector map lives in the BrowserSession state. Print agent.browser_session.state after each step, or add a register_new_step_callback to the Agent to capture it automatically.",
    "If the selector map has more than 30 elements, the page is rich enough to generate interesting annotations. If it has fewer than 10, try a page with a navigation bar, search form, and results list.",
    "Hidden elements are filtered out before the selector map is built. If you expect an element to be clickable but it does not appear in the map, check whether it is display:none, visibility:hidden, or fully off-viewport.",
    "For the token comparison, you do not need an exact count. A character-count estimate divided by four is close enough for the writeup. What matters is the order of magnitude: is the screenshot cheaper or more expensive than the DOM text for this page?",
    "Vision helps most when a page relies on icons without text labels, image-based buttons, or CAPTCHA-style visual elements. It adds little on pages that already have clear text labels on every interactive element.",
    "Keep max_steps low (8-12) while you are debugging your capture script. A 40-step run produces a lot of JSON. Get the pipeline working on a short run first.",
    "The late policy applies to the annotated trace document. The step JSON files are generated automatically once your script runs, so there is no reason to be late on those.",
  ],
  late: "Submissions within 48 hours of the deadline receive full credit. After that, 10 points are deducted per additional 24-hour period, down to a minimum of 50 points for work eventually submitted.",
};

export function Hw2Page() {
  return <ProjectPage spec={spec} />;
}

export const hw2SearchBody = [
  spec.title,
  spec.tagline ?? "",
  ...spec.overview,
  ...spec.goals,
  ...(spec.background ?? []),
  ...spec.instructions.map((t) => `${t.title} ${t.body ?? ""} ${(t.steps ?? []).join(" ")}`),
  ...spec.deliverables,
  ...(spec.hints ?? []),
].join(" ");
