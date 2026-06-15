import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk01SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="run-and-read-your-first-agents">
        Section: Run and read your first agents
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 1 · Hands-on worksheet</p>

      <p>
        By the end of this session you will have browser-use installed, an API key wired up, three
        agents run against live websites, and the history of each run read and annotated. You will
        leave with a concrete picture of what the perceive-decide-act loop looks like in practice
        before the course digs into each phase in depth.
      </p>

      <AnchorHeading as="h2" id="part-0-calibration-drill">
        Part 0: Predict before you run (5 minutes)
      </AnchorHeading>

      <p>
        This is week 1, so there is no prior-week material to recall. Instead, do a calibration
        drill: write down your predictions <em>before</em> you run any code. A prediction written
        before the fact is far more useful than a reconstruction after. You will compare these to
        what actually happened at the end of Part 2.
      </p>

      <ol>
        <li>
          <strong>Task A</strong>: &ldquo;Go to news.ycombinator.com and tell me the title of the
          number-one post.&rdquo;
          <br />
          How many steps do you think this will take? What will the agent do first? Write your
          prediction now.
        </li>
        <li>
          <strong>Task B</strong>: &ldquo;Search DuckDuckGo for the current Python version and
          return the version number.&rdquo;
          <br />
          What actions do you expect in what order? Write your prediction now.
        </li>
        <li>
          <strong>Task C</strong>: Choose any simple lookup task on a public website (a Wikipedia
          fact, a public API page, a GitHub repo description). Write the task and your step-by-step
          prediction before running it.
        </li>
      </ol>

      <p>
        Keep these predictions. You will return to them in Part 2.
      </p>

      <AnchorHeading as="h2" id="part-1-install-and-configure">
        Part 1: Install browser-use and wire up an API key
      </AnchorHeading>

      <p>
        Install browser-use with the <code>[core]</code> extra, which pulls in the native runtime
        for your platform. Python 3.11 or later is required.
      </p>

      <pre>{`# Install browser-use
pip install "browser-use[core]"

# Or with uv (faster):
uv add "browser-use[core]"`}</pre>

      <p>
        browser-use ships native LLM wrappers, so you do not need to install LangChain. You do
        need an API key for the model you want to use. The examples below use OpenAI&rsquo;s
        GPT-4.1 mini because it is fast and inexpensive; you can substitute{" "}
        <code>ChatAnthropic</code> or <code>ChatGoogle</code> with the same pattern.
      </p>

      <pre>{`# .env (or export directly in your shell)
OPENAI_API_KEY=sk-...`}</pre>

      <p>
        Create a file called <code>agent_hello.py</code>:
      </p>

      <pre>{`import asyncio
from browser_use import Agent, ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

async def main():
    agent = Agent(
        task="Go to news.ycombinator.com and tell me the title of the number-one post.",
        llm=ChatOpenAI(model="gpt-4.1-mini"),
    )
    history = await agent.run()
    print(history.final_result())

if __name__ == "__main__":
    asyncio.run(main())`}</pre>

      <p>
        Run it:
      </p>

      <pre>{`python agent_hello.py`}</pre>

      <p>
        A browser window will open (headless by default; you will see log output). When the agent
        finishes, the final result prints to the console. If the run fails, check that your API
        key is set and that <code>browser-use[core]</code> installed cleanly.
      </p>

      <AnchorHeading as="h2" id="part-2-run-three-tasks">
        Part 2: Run three tasks and read each history
      </AnchorHeading>

      <p>
        Run the three tasks from Part 0. For Tasks A and B, use the code pattern below. For Task C,
        substitute your own task string.
      </p>

      <pre>{`import asyncio
from browser_use import Agent, ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

TASKS = [
    "Go to news.ycombinator.com and tell me the title of the number-one post.",
    "Search DuckDuckGo for the current Python version and return the version number.",
    "YOUR TASK C HERE",
]

async def run_task(task: str, label: str) -> None:
    print(f"\\n=== {label} ===")
    agent = Agent(task=task, llm=ChatOpenAI(model="gpt-4.1-mini"))
    history = await agent.run()
    print(f"Steps taken: {len(history.history)}")
    print(f"Final result: {history.final_result()}")

    # Walk each step and print a summary
    for i, step in enumerate(history.history):
        state = step.state
        print(f"  Step {i+1}: {state.next_goal}")

if __name__ == "__main__":
    for i, task in enumerate(TASKS):
        asyncio.run(run_task(task, f"Task {chr(65+i)}"))`}</pre>

      <p>
        After each run, fill in the table below. Do <em>not</em> look at the output while
        predicting; read history only after you have your prediction written.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9em" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Task</th>
              <th style={{ textAlign: "right", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Predicted steps</th>
              <th style={{ textAlign: "right", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Actual steps</th>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>First action (actual)</th>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Prediction correct?</th>
            </tr>
          </thead>
          <tbody>
            {["A", "B", "C"].map((label) => (
              <tr key={label}>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", fontWeight: 600 }}>{label}</td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", textAlign: "right", color: "#999" }}>___</td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", textAlign: "right", color: "#999" }}>___</td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", color: "#999" }}>___</td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", color: "#999" }}>___</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Write one sentence per task on the most surprising thing the agent did. Where did the loop
        behave differently from your prediction?
      </p>

      <AnchorHeading as="h2" id="part-3-annotate-the-loop">
        Part 3: Annotate one run as perceive-decide-act
      </AnchorHeading>

      <p>
        Pick whichever run had the most steps. For each step, label it with the three phases of
        the loop:
      </p>

      <ul>
        <li><strong>Perceive:</strong> what did the agent observe? (URL, page title, what elements were visible)</li>
        <li><strong>Decide:</strong> what did the LLM choose to do? (what goal did it set, what action did it pick)</li>
        <li><strong>Act:</strong> what happened in the browser? what result came back?</li>
      </ul>

      <p>
        The history object gives you enough to fill this in. Use the{" "}
        <code>step.state.next_goal</code> field for the Decide phase; the action name and
        parameters for the Act phase. For the Perceive phase, use the URL and any extracted
        content in the step record.
      </p>

      <pre>{`# Print the full history of the first run for annotation
import asyncio
from browser_use import Agent, ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

async def main():
    agent = Agent(
        task="Go to news.ycombinator.com and tell me the title of the number-one post.",
        llm=ChatOpenAI(model="gpt-4.1-mini"),
    )
    history = await agent.run()

    for i, step in enumerate(history.history):
        state = step.state
        print(f"--- Step {i+1} ---")
        print(f"  [PERCEIVE] URL:        {step.result[0].extracted_content[:80] if step.result else '(no content)'}")
        print(f"  [DECIDE]   next_goal:  {state.next_goal}")
        print(f"  [DECIDE]   memory:     {state.memory}")
        print(f"  [ACT]      actions:    {[str(a) for a in step.model_output.action] if step.model_output else '?'}")

if __name__ == "__main__":
    asyncio.run(main())`}</pre>

      <p>
        For each step you annotate, write the phase labels in your notes. You should be able to
        point at every line of output and say which phase it belongs to.
      </p>

      <AnchorHeading as="h2" id="part-4-control-the-loop">
        Part 4: Control the loop with max_steps
      </AnchorHeading>

      <p>
        Re-run Task A with <code>max_steps=2</code>. Observe what happens when the agent runs out
        of steps before completing the task.
      </p>

      <pre>{`import asyncio
from browser_use import Agent, ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

async def main():
    agent = Agent(
        task="Go to news.ycombinator.com and tell me the title of the number-one post.",
        llm=ChatOpenAI(model="gpt-4.1-mini"),
        max_steps=2,
    )
    history = await agent.run()
    print(f"Steps taken: {len(history.history)}")
    print(f"Final result: {history.final_result()}")
    print(f"Is done: {history.is_done()}")

if __name__ == "__main__":
    asyncio.run(main())`}</pre>

      <p>Answer these questions in your notes:</p>
      <ol>
        <li>What did <code>history.final_result()</code> return when the agent hit the step limit?</li>
        <li>What did <code>history.is_done()</code> return?</li>
        <li>How would you set <code>max_steps</code> for a task you know takes about 10 steps?
          What would you set it to, and why?</li>
      </ol>

      <AnchorHeading as="h2" id="part-5-interleave-reflect">
        Part 5: Reflection (interleaving)
      </AnchorHeading>

      <p>
        This part asks you to connect what you just ran to the conceptual model from the reading.
        Answer in writing before comparing to the lecture slides.
      </p>

      <ol>
        <li>
          <strong>The perceive-decide-act loop.</strong> For Task A, name the three pieces of
          information the agent needed from the <em>perceive</em> phase to make its first decision.
          Where did each one come from?
        </li>
        <li>
          <strong>The LLM as controller.</strong> The agent did not execute JavaScript or write a
          CSS selector. It described what it wanted to do in structured terms, and browser-use
          translated that into browser actions. Explain in one sentence why this is a different
          model from traditional scripted automation.
        </li>
        <li>
          <strong>The task prompt.</strong> Rewrite Task B as a worse task prompt: one that would
          likely confuse the agent or produce an unreliable result. Explain what makes your
          rewritten version worse.
        </li>
        <li>
          <strong>Agent history as a debug tool.</strong> If Task C produced a wrong final result,
          which step in the history would you look at first to diagnose the error? How would you
          know it was the wrong step?
        </li>
      </ol>

      <AnchorHeading as="h2" id="rubric">
        Self-grading rubric
      </AnchorHeading>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9em" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Checkpoint</th>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Done?</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Predictions written for Tasks A, B, and C before running any code",
              "browser-use installed and API key set; Task A runs without error",
              "All three tasks run; step counts and first actions recorded in the table",
              "One run fully annotated with perceive / decide / act labels for each step",
              "max_steps=2 experiment run; three questions answered in writing",
              "Reflection questions answered before checking lecture slides",
              "One-sentence surprise note written for each task",
            ].map((item) => (
              <tr key={item}>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>{item}</td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", color: "#999" }}>[ ]</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        If any checkbox is empty, complete it before the next lecture. The annotations from Part 3
        and the reflection from Part 5 are the inputs the rest of the course builds on: every
        subsequent week assumes you have a lived mental model of one full agent run.
      </p>
    </>
  );
}

export const wk01SectionSearchBody =
  "browser-use install API key run agent task perceive decide act loop agent history max_steps step limit annotate history ChatOpenAI gpt-4.1-mini asyncio async await prediction calibration drill Week 1 section browser-use course";
