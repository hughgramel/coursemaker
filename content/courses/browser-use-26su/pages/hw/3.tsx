import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW3: Build a custom-tool agent with structured output",
  tagline: "Register a custom action, constrain the agent's domain, and return validated JSON from a real multi-step browsing task.",
  outDate: "Week 6",
  dueDate: "Week 8",

  overview: [
    "The built-in action set covers navigation, clicking, typing, and extraction, but real tasks often need something the defaults do not provide: a way to parse a specific data format, compute a value mid-run, or gate access to a particular API. The tools registry lets you register your own action with the same @tools.action() decorator the built-ins use, with typed Pydantic parameters and the same ActionResult return contract. From the agent's perspective, your custom action is indistinguishable from a built-in.",
    "This assignment brings together the tools registry and structured output introduced in weeks 5-6. You will build an agent that collects structured records from a public website, uses at least one custom action with typed parameters, returns its findings as validated JSON defined by a Pydantic output model, restricts itself to a declared list of allowed domains, and keeps any credentials out of the LLM context via sensitive_data. The task is deliberately concrete: the agent must visit multiple pages, extract repeated data, and return a list of records the output model can validate.",
    "The purpose of the custom action is not to replace what click or extract_page_content already do well. It is to handle something those actions handle poorly: structured extraction of a repeated pattern, a derived field that requires local computation, or a domain-specific transformation the LLM would otherwise narrate rather than execute reliably. You will write a short design note explaining the choice.",
  ],

  goals: [
    "Register a custom action on a Tools instance using @tools.action() with a descriptive name and typed Pydantic parameters.",
    "Pass the Tools instance to an Agent so the LLM can call your action as part of its action repertoire.",
    "Define a Pydantic output model that describes the structured result you want, and pass it to the Agent so it returns validated JSON rather than prose.",
    "Use allowed_domains to restrict where the agent may browse, and sensitive_data to pass any secret value without exposing it to the LLM.",
    "Explain in a short design note why a custom action improves on what the built-in actions provide for your specific task.",
  ],

  instructions: [
    {
      title: "Choose a concrete multi-step task on a public website",
      body: "Pick a task that requires the agent to visit several pages on the same site and collect a repeating structured record from each. Good examples: collecting job listings from a public job board (title, company, location, date), reading product details from a public catalogue, or extracting event records from a public events page. The site must be accessible without login so you do not need session management (covered in week 7). If the site requires an API key, you will handle it through sensitive_data in step 3.",
      steps: [
        "Write one sentence naming the site and the record type you are collecting (e.g. 'Collect the title, salary range, and location of each listing on the first results page of RemoteOK.').",
        "Identify which fields you want in each record. You will turn these fields into a Pydantic model in step 2.",
        "Confirm the site is publicly accessible at a stable URL before proceeding.",
      ],
    },
    {
      title: "Define a Pydantic output model for the structured result",
      body: "Create a Pydantic model that represents a single collected record, and a second model that wraps a list of those records as the agent's overall output. These become the schema the agent must satisfy when it calls the done action.",
      steps: [
        "Define the per-record model with typed fields and, where helpful, Field(description=...) annotations so the LLM knows what each field means.",
        "Define an output model with a single field that holds a list of the per-record model.",
        "Pass the output model to Agent via the output_model parameter.",
        "After the agent runs, access the validated result via agent.result() or the return value of agent.run(). Print it as JSON to confirm validation passed.",
      ],
    },
    {
      title: "Write and register at least one custom action",
      body: "Create a Tools instance and register at least one custom action using the @tools.action() decorator. The action must accept at least one typed parameter beyond injected dependencies. A common pattern: an action that takes a raw string extracted from the page and returns a cleaned or parsed version as an ActionResult, so the agent does not have to reason about the parsing step itself.",
      steps: [
        "Instantiate tools = Tools() before defining the action.",
        "Decorate your function with @tools.action('action-name'). Give it a name that is specific enough for the LLM to choose correctly.",
        "Type all parameters. If the action needs a browser_session or page_extraction_llm, list them by name so the framework injects them automatically.",
        "Return an ActionResult (or a plain string). If the action produces content the agent should remember, set extracted_content on the ActionResult.",
        "Pass tools=tools to the Agent constructor.",
      ],
    },
    {
      title: "Configure allowed_domains and sensitive_data",
      body: "Restrict the agent to the domains it needs and keep any secret out of the LLM context.",
      steps: [
        "Set allowed_domains to a list containing only the domain(s) the agent needs to browse. The agent will refuse to navigate to any domain not on the list.",
        "If your task requires an API key, a session token, or any other secret, add it to sensitive_data as a dict mapping a placeholder name to the real value. Reference the placeholder in your task string; the framework substitutes the real value at execution time.",
        "If the task requires no secrets, pass sensitive_data={} or omit it, and include a comment noting why.",
      ],
    },
    {
      title: "Run the agent and capture the output",
      body: "Run the agent against the real site. Capture both the structured output and a brief trace of what the agent did.",
      steps: [
        "Run with max_steps set to a reasonable ceiling (20-30 is typical for a multi-page collection task). Too low and the agent cannot finish; too high and a stuck agent wastes time and tokens.",
        "After the run, print the validated output model as JSON (e.g. result.model_dump_json(indent=2)).",
        "Save the JSON output to a file named output.json. This is one of your deliverables.",
        "If the agent fails or produces invalid output, read the step-by-step history (agent.state.history or the printed step log) to diagnose which action failed and why.",
      ],
    },
    {
      title: "Write the design note",
      body: "Write a short note (150-300 words) explaining the design of your custom action. The note must answer three questions: (1) What does the custom action do that the built-in actions handle poorly or not at all? (2) How does the typed Pydantic parameter improve reliability compared to passing the same value as a freeform string in the task prompt? (3) What would break or become less reliable if you removed the custom action and relied on built-ins alone?",
    },
  ],

  deliverables: [
    "agent.py (or a similarly named file): the complete agent code, including the Tools definition, custom action(s), output model, and Agent construction. Include a short comment block at the top naming the site, the record type, and the allowed domains.",
    "output.json: a real run's validated JSON output, containing at least three collected records. Fabricated output does not satisfy this requirement.",
    "design_note.txt (or a section in a README): 150-300 words answering the three design questions from step 6.",
  ],

  rubric: [
    {
      dimension: "Custom action registered and used",
      points: 25,
      notes: "@tools.action() present with a descriptive name; action is called by the agent at least once in the run (visible in the step log or history).",
    },
    {
      dimension: "Typed Pydantic parameters on the custom action",
      points: 15,
      notes: "At least one parameter beyond injected dependencies is typed; a plain **kwargs or untyped dict does not satisfy this.",
    },
    {
      dimension: "Output model validates the result",
      points: 20,
      notes: "A Pydantic output model is defined and passed to the Agent; output.json is the result of model_dump_json(), not hand-written JSON.",
    },
    {
      dimension: "allowed_domains and sensitive_data configured",
      points: 15,
      notes: "allowed_domains is non-empty and matches the site used; sensitive_data is present (even if empty, with a comment explaining why).",
    },
    {
      dimension: "output.json contains real collected records",
      points: 15,
      notes: "At least three records present; fields match the output model schema; content is plausibly from the named site.",
    },
    {
      dimension: "Design note answers all three questions",
      points: 10,
      notes: "Note is 150-300 words; addresses custom action purpose, typed parameter benefit, and what breaks without the custom action.",
    },
  ],

  hints: [
    "Start with the output model before writing the agent task string. If you know what fields you want, you can write a task string that tells the agent exactly which data to find. Vague task strings produce vague structured output.",
    "The @tools.action() decorator accepts a description keyword argument. Use it. The LLM sees this description when deciding whether to call your action. A one-sentence description that names the input format and the output format is far more useful than the action name alone.",
    "Parameter injection works by name match. If you name a parameter browser_session, the framework passes the current BrowserSession automatically. You do not need to pass it yourself. The same applies to page_extraction_llm and file_system. Check the verified facts in the course brief for the full list.",
    "If the agent never calls your custom action, read the tool description the LLM received. Add a sentence to the @tools.action() description explaining when to prefer your action over extract_page_content.",
    "ActionResult has an extracted_content field. Set it to the cleaned or parsed data your action produced. This puts the result into the agent's working memory for the next step, which is usually what you want.",
    "Pydantic validation errors from the output model are your friend. If the agent returns data that does not match the schema, the error message tells you exactly which field is wrong. Use that to tighten either the model definition or the task string.",
    "Week 7 covers persistent browser profiles and session authentication. If the site you chose requires login, either pick a different site for this assignment or note in your design note that auth is deferred to week 7.",
  ],

  late: "Assignments submitted up to 48 hours late receive full credit. After 48 hours, submissions are accepted but scored at half credit. Contact the teaching team before the deadline if you are blocked on a technical issue.",
};

export function Hw3Page() {
  return <ProjectPage spec={spec} />;
}

export const hw3SearchBody = [
  spec.title,
  spec.tagline ?? "",
  ...spec.overview,
  ...spec.goals,
  ...(spec.background ?? []),
  ...spec.instructions.map((t) => `${t.title} ${t.body ?? ""} ${(t.steps ?? []).join(" ")}`),
  ...spec.deliverables,
  ...(spec.hints ?? []),
  spec.late ?? "",
].join(" ");
