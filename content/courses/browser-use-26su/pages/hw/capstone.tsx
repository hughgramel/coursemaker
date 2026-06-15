import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Capstone: Ship and defend a browser-use agent",
  tagline: "Design, build, evaluate, and defend a complete browser-use agent for a real multi-step task of your choosing.",
  outDate: "Week 7",
  dueDate: "Week 10",
  overview: [
    "The capstone is the synthesis project for the course. It draws on the full toolkit assembled across weeks 1-10: the perceive-decide-act loop, the selector map, BrowserSession configuration, AgentOutput internals, the tools registry, custom actions, structured output models, persisted authenticated profiles, sensitive_data for secrets, and reliability guards. The goal is not to demonstrate that the agent ran once. The goal is to show you understand why you made every design choice and where the agent breaks.",
    "You pick the task. It must be a real, multi-step task on a live website: something with at least three distinct actions, at least one page transition, and a defined correct output. Example tasks to consider: (1) Log into a job board, search by criteria, and compile a structured CSV of matching listings including title, company, salary range, and URL. (2) Log into an e-commerce account, pull the last 30 orders, and build a structured report grouping items by category and total spend. (3) Given a spreadsheet of contacts with names and addresses, navigate to a government form site, fill one submission per row, and record the confirmation number for each. (4) Monitor a public real-estate listing page daily, extract new listings matching set criteria, and write each to a structured JSON file. These are illustrations. A task you pick from your own work or side project is preferred, provided it meets the complexity bar.",
    "The capstone has four parts: a written design document, a working agent, an evaluation scorecard against a small task set, and a short defense in Week 10 section. Together, these span from design (Understand) through implementation (Create) to honest measurement (Evaluate). The rubric rewards justified decisions and honest reporting of failure as much as it rewards a working agent.",
  ],
  goals: [
    "Create (Bloom level 6): design and build a browser-use agent that completes a real multi-step task end to end, with a custom tool, a structured output model, a persisted profile, and reliability guards.",
    "Evaluate (Bloom level 5): run the agent against a small task set, record success rate, token cost, latency, and failure modes, and judge whether the agent is trustworthy on this task.",
    "Analyze (Bloom level 4): trace a failed run step by step and identify the specific point in the perceive-decide-act loop where the agent went wrong.",
    "Explain: justify in writing why you chose each major setting and tool, including what you ruled out and why.",
    "Reflect: identify, with specific evidence from your scorecard, one category of work you would not yet trust this agent to do unsupervised.",
  ],
  instructions: [
    {
      title: "Pick a task and write the design document",
      body: "The design document is due before you write a line of agent code. It forces you to commit to a scope, an output schema, an auth plan, and a reliability strategy before you learn whether any of them work. One to two pages is the target length.",
      steps: [
        "Task scope: state the task in one sentence, list the websites involved, describe the minimum set of steps an agent must take to complete it (at least three distinct browser actions and at least one page transition), and define what a correct output looks like.",
        "Tool and setting choices: for each major setting (BrowserSession options, max_steps, max_failures, use of a planner model, use_vision) and each tool (built-in vs custom), state why you chose it or ruled it out for this task. Vague justifications ('it seemed useful') do not score.",
        "Output schema: write the Pydantic model you will use as the output_model. Include field names, types, and one-line descriptions of each field. If the task produces a list of records, show the per-record model.",
        "Auth and secrets plan: describe how you will authenticate. If the site requires a login, explain how you will persist the session (user_data_dir), how credentials enter the agent (sensitive_data placeholders), and what the agent will see versus what the framework substitutes at execution time.",
        "Reliability plan: state your max_steps ceiling and your reasoning, your max_failures setting, and at least one specific task-framing choice (a decomposition, a constraint, a memory note) you made to reduce the chance of the agent looping or stalling.",
      ],
    },
    {
      title: "Build the agent",
      body: "The working agent must be a single runnable Python script or a small package with a clear entry point. It must use the current browser-use API surface: from browser_use import Agent, and the Tools / @tools.action pattern for any custom action. No LangChain integration layer.",
      steps: [
        "Implement at least one custom action registered with @tools.action on a Tools instance, with typed Pydantic parameters. The action must do something the built-in actions cannot (write to a file, call an external API, parse a domain-specific structure, or similar). Pass the Tools instance to Agent(tools=tools).",
        "Define a Pydantic output model and pass it to Agent(output_model=YourModel). The agent's final answer must validate against this schema. If it does not, the run is a failure for scorecard purposes.",
        "If the task requires authentication, use user_data_dir on the BrowserSession to persist the profile. Credentials must enter via sensitive_data, never as raw strings in the task prompt.",
        "Set max_steps and max_failures explicitly. Add at least one task-framing choice documented in your design doc (e.g., a step that checks memory for already-visited items, or a task prompt that names the exact sequence).",
        "Run the agent in headless=False at least once to observe it work, then note any corrective changes you made after that observation.",
      ],
    },
    {
      title: "Evaluate the agent against a task set",
      body: "Run the agent against at least five independent instances of your task (five different searches, five different form rows, five different date ranges). Record the results in a scorecard. A task that ran once in development is not an evaluation.",
      steps: [
        "For each of the five runs: record whether the output validated against the output model (pass/fail), the number of steps taken, the approximate token cost (input plus output tokens from the model's response), and wall-clock latency.",
        "For each failed run: capture the step history, identify the specific step where the agent went wrong, and classify the failure mode (loop, wrong element selected, structured output schema violation, authentication error, or other).",
        "Compute and report in your scorecard: success rate (passes out of five), mean steps per run, mean token cost per run, and mean latency per run.",
        "Write a one-paragraph interpretation: what does the scorecard tell you about where this agent is and is not trustworthy? Be specific about which failure modes you observed.",
        "Write a one-paragraph reflection on what you would not trust this agent to do unsupervised, grounded in the failure modes you actually observed, not hypothetical risks.",
      ],
    },
    {
      title: "Defend the design in Week 10 section",
      body: "Each presenter gets six minutes: four minutes to walk through the agent and scorecard, two minutes for questions. You are not pitching a success story. You are walking a peer through a design, its evidence, and its limits.",
      steps: [
        "Show the output schema and explain one design choice that was not obvious (a field you added after a failure, a type you tightened, a field you removed).",
        "Show the scorecard and call out the most informative failure mode you observed.",
        "Answer one question about a specific step in a failed run: what did the agent perceive, what did it decide, what did it do, and why was that wrong?",
        "State, in one sentence, the condition under which you would trust this agent to run without a human watching the output.",
      ],
    },
  ],
  deliverables: [
    "Design document (1-2 pages): task scope, tool and setting justifications, output schema (Pydantic model), auth and secrets plan, reliability plan. Submit before starting on the agent code.",
    "Working agent: a runnable Python script or package with a clear entry point. Must use @tools.action for at least one custom tool, a Pydantic output_model, sensitive_data for any credentials, and explicit max_steps and max_failures. Include a README with setup steps and how to run.",
    "Agent scorecard: a table with one row per run (at least five runs). Columns: run ID, task instance description, pass/fail against output schema, steps taken, approximate token cost, latency in seconds, and failure mode (or 'none'). Include summary row with success rate, mean steps, mean cost, mean latency.",
    "Failure analysis: for each failed run, one paragraph identifying the exact step in the perceive-decide-act loop where the agent went wrong and classifying the failure mode.",
    "Defense reflection: one paragraph, grounded in the scorecard, stating what you would not trust this agent to do unsupervised and why. This is not a disclaimer. It is evidence-based judgment.",
  ],
  rubric: [
    {
      dimension: "Design document: task scope and output schema",
      points: 15,
      notes: "Task is specific (one sentence, named websites, minimum steps defined). Output schema is a real Pydantic model with typed, documented fields. Vague task descriptions or schema-less designs score at most 7.",
    },
    {
      dimension: "Design document: tool and setting justifications",
      points: 10,
      notes: "Each major setting and tool choice has a stated reason. Ruling something out counts. 'It seemed useful' does not score. Partial justifications score proportionally.",
    },
    {
      dimension: "Design document: auth and secrets plan",
      points: 5,
      notes: "Describes user_data_dir usage and sensitive_data placeholders correctly. If task requires no auth, explains why and what would change if it did.",
    },
    {
      dimension: "Working agent: custom tool",
      points: 15,
      notes: "At least one @tools.action with typed Pydantic parameters does something the built-in actions cannot. Tool is registered and used in at least one successful run. A stub that is never called scores 0.",
    },
    {
      dimension: "Working agent: structured output and secrets handling",
      points: 10,
      notes: "output_model is passed to Agent. At least one run produces validated JSON output. Credentials use sensitive_data. Hard-coded secrets in the task prompt or code score 0 on this dimension.",
    },
    {
      dimension: "Scorecard: data quality and honesty",
      points: 20,
      notes: "Five or more independent runs recorded. All required columns present and accurate. A scorecard showing five passes with no failure analysis when failures occurred scores at most 10. Honest failure reporting is the point of this dimension.",
    },
    {
      dimension: "Failure analysis: loop tracing",
      points: 10,
      notes: "Each failed run has a paragraph naming the specific step, what the agent perceived, what it decided, and why that was wrong. Generic explanations ('the agent got confused') score 0.",
    },
    {
      dimension: "Defense reflection: evidence-based judgment",
      points: 10,
      notes: "Reflection names specific failure modes from the scorecard. States a concrete condition for unsupervised use. Optimistic reflections not grounded in the scorecard data score at most 5.",
    },
    {
      dimension: "Week 10 section defense",
      points: 5,
      notes: "Presents within time. Can answer a specific question about a failed run. Missing the defense scores 0 on this dimension.",
    },
  ],
  hints: [
    "Pick a task you actually want to automate. You will run it at least five times. Boredom is a real risk with a contrived task.",
    "Write the design document first and mean it. If you find yourself changing the output schema mid-build without updating the design doc, stop and update the doc. The design document is a commitment, not a formality.",
    "The @tools.action decorator signature is: @tools.action() on a Tools instance, with a typed Pydantic function. The function can request injected dependencies by parameter name (browser_session, file_system). Return an ActionResult or a string.",
    "sensitive_data takes a dict mapping placeholder names to real values. Pass it to Agent(sensitive_data={'MY_PASSWORD': 'actual-value'}). The task prompt should reference the placeholder name, never the real value. The framework substitutes at execution time.",
    "For user_data_dir: run a setup script once that logs in manually and saves the session. Then in subsequent runs, pass the same user_data_dir to BrowserSession. The cookies and storage carry over. Test by checking that the agent opens the browser already logged in.",
    "A success rate of three out of five with a clear failure analysis scores higher than five out of five with no analysis. The rubric rewards honest measurement.",
    "For the scorecard, approximate token cost: most LLM provider responses include token counts in the response metadata. Log these per step and sum them. You do not need exact pricing, but order-of-magnitude cost per run matters.",
    "The failure analysis is not a post-mortem of the whole run. It is a trace to the specific step. 'Step 7: the agent selected element 12 (the sidebar nav link) instead of element 4 (the search button) because both were labeled similarly in the selector map' is the level of specificity to aim for.",
    "For the defense: prepare to show the step history of one failed run, not just the scorecard summary. The questions will be about what the agent actually did.",
  ],
  late: "The design document and the working agent must each be submitted on time. A design document submitted after the agent code is started does not demonstrate the intended planning process and will be graded as if submitted at submission time with a 10-point deduction. The scorecard and reflection may be submitted up to 48 hours late with a 10-point deduction per day. The Week 10 section defense cannot be made up.",
};

export function CapstonePage() {
  return <ProjectPage spec={spec} />;
}

export const capstoneSearchBody =
  "Capstone browser-use agent design document custom tool structured output Pydantic output model sensitive_data user_data_dir BrowserSession AgentOutput tools registry authentication persistent profile max_steps max_failures reliability guards scorecard success rate token cost latency failure analysis evaluation defend perceive decide act loop selector map multi-step real website login form fill extract report";
