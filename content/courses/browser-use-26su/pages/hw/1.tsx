import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW1: Run and narrate your first agents",
  tagline: "Install browser-use, run three real tasks, and write a step-by-step narration of what the agent perceived, decided, and did.",
  outDate: "Week 1",
  dueDate: "Week 3",
  overview: [
    "Before you can improve an agent, you need to read one. This assignment gets you running browser-use against three real tasks of your choosing, then forces you to slow down and read the step history the way a doctor reads a chart: what did the agent see at each step, what did it decide to do next, and where did it get stuck or backtrack?",
    "The perceive-decide-act loop is the heartbeat of every browser agent. You will observe it live, in your own terminal, on tasks you set. By the end you will have run at least three agents, read their full step histories, and written a plain-English narration of each run. The writing is the point: narrating the loop forces you to notice details you would otherwise skim past.",
  ],
  goals: [
    "Remember (Recall): name the three phases of the agent loop and what data flows between them.",
    "Apply: install browser-use and configure an LLM API key so an agent runs successfully end to end.",
    "Apply: write task prompts for three distinct task types and run each with a step limit you chose deliberately.",
    "Analyze: read an agent step history and identify, for each step, what the agent perceived, what it decided, and what action it executed.",
    "Evaluate: identify at least one step per run where the agent struggled, and describe what the history shows about why.",
  ],
  instructions: [
    {
      title: "Install browser-use and set up your environment",
      body: "Create a Python virtual environment, install browser-use, and export an LLM API key. The example below uses OpenAI, but any provider browser-use ships natively (Anthropic, Google, Groq, Ollama) works.",
      steps: [
        "python -m venv .venv && source .venv/bin/activate",
        "pip install browser-use playwright && playwright install chromium",
        "export OPENAI_API_KEY=sk-... (or set ANTHROPIC_API_KEY, GOOGLE_API_KEY, etc. for your chosen provider)",
        "Verify the install: python -c \"from browser_use import Agent, ChatOpenAI; print('ok')\"",
      ],
    },
    {
      title: "Choose three tasks and run each agent",
      body: "Pick three tasks that test different kinds of browser behavior. A good spread: one simple search and retrieval, one multi-step navigation that requires filling a form or clicking through several pages, and one small extraction where you ask the agent to pull specific text off a page. Write a task prompt for each in plain English. Set max_steps to a value between 8 and 20 so the agent has enough room to work but stops at a predictable point. The code below shows the pattern for one run; repeat it for each task.",
      steps: [
        "Write a task prompt as a plain-English sentence: e.g. \"Go to news.ycombinator.com and tell me the title and score of the top post.\"",
        "Set max_steps deliberately: 10 is a reasonable default for a focused task, 20 if you expect multi-page navigation.",
        "Run the agent and save the output. Pipe stdout to a log file: python run.py | tee run1.log",
        "After the run, open the log and locate the step-by-step history. Each entry will show a URL, a next_goal, the action chosen, and the result.",
        "Repeat steps 1-4 for tasks 2 and 3.",
      ],
    },
    {
      title: "Write a narration for each run",
      body: "For each run, write a short narration (roughly one paragraph per step, or a structured table) that walks through the loop. At each step, answer three questions: what did the agent perceive (what URL and page state did it receive), what did it decide (what was its next_goal), and what did it do (which action and with what parameters). Then note any step where the agent seemed confused, repeated itself, or took a detour, and describe what the history shows.",
      steps: [
        "Read the step history from your log file from top to bottom.",
        "For each step, write one to three sentences answering: perceived (URL + page summary), decided (next_goal), acted (action name + key parameters).",
        "Mark any step where the agent backtracked, retried, or reached max_steps without completing the task. Write one sentence explaining what the history suggests went wrong.",
        "At the end of each narration, write a one-sentence verdict: did the agent complete the task successfully, partially, or not at all?",
      ],
    },
    {
      title: "Assemble your report",
      body: "Combine the three narrations, the three log files, and the sample code you used into a single submission. The report document should be readable on its own: a reader who cannot open your logs should still follow what happened from the narration alone.",
    },
  ],
  deliverables: [
    "A report document (PDF or Markdown) containing three task narrations, each covering every step in the loop with perceived/decided/acted annotations and a \"where it struggled\" observation.",
    "Three run log files (one per task) produced by piping agent output to a file during the run.",
    "The Python script or scripts you used to run the agents, with task prompts and max_steps values visible in the code.",
  ],
  rubric: [
    {
      dimension: "Environment setup and working code",
      points: 15,
      notes: "Script runs without errors, API key is configured, at least three successful (or terminated-at-max_steps) runs are evidenced by the log files.",
    },
    {
      dimension: "Task variety",
      points: 15,
      notes: "Three tasks cover meaningfully different browser behaviors (not three searches of the same type). Each task prompt is clear and specific.",
    },
    {
      dimension: "Perceive annotation accuracy",
      points: 20,
      notes: "For each step in each narration, the perceive annotation correctly identifies the URL and the state the agent received. No steps are skipped.",
    },
    {
      dimension: "Decide and act annotation accuracy",
      points: 25,
      notes: "next_goal and action choice are correctly read from the history and stated in the narration. Parameters (element index, typed text, URL navigated to) are included where the history shows them.",
    },
    {
      dimension: "Struggle analysis",
      points: 15,
      notes: "At least one per run: a specific step is identified where the agent struggled, retried, or hit max_steps, with a concrete observation from the history (not a vague \"it got confused\").",
    },
    {
      dimension: "Report clarity and completeness",
      points: 10,
      notes: "The three narrations are self-contained, the log files are attached, and the code is readable. A reviewer can follow the narrations without opening the logs.",
    },
  ],
  hints: [
    "Keep your first task simple: a single-page lookup is enough to see the full loop clearly. Save multi-step navigation for task 2 or 3 once you know what the output looks like.",
    "The history prints each step as a block with evaluation_previous_goal, next_goal, and action. Read those three fields in order for each step: that is the perceive-decide-act loop in the log.",
    "If the agent reaches max_steps without finishing, that is a valid run. Note it in your narration and describe what the last step showed.",
    "agent.run() returns a history object. You can also inspect it programmatically with history.model_actions() or history.model_thoughts() if you want to explore the data beyond the printed output.",
    "Task prompts that are too vague (\"find me something interesting\") produce wandering runs that are hard to narrate. Give the agent a concrete goal with a clear end condition.",
  ],
  late: "Late submissions lose 10 points per day, up to three days late. After three days the assignment closes. Submit the log files even if the narration is incomplete.",
};

export function Hw1Page() {
  return <ProjectPage spec={spec} />;
}

export const hw1SearchBody = "HW1 browser-use install run agent perceive decide act loop step history narration task prompt max_steps log file API key OpenAI Anthropic run agent first time Week 1";
