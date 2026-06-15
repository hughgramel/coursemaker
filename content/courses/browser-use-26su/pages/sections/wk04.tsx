import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk04SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="dissecting-agent-output">
        Section: Dissecting AgentOutput
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 4 · Hands-on worksheet</p>

      <p>
        By the end of this section you will have captured real{" "}
        <code>AgentOutput</code> objects from a live multi-step run, read every
        field by hand, and predicted the agent's next action before revealing
        it. You will also trace one action's element index back to the selector
        map you built in week 2, connecting the decision layer to the
        perception layer.
      </p>

      {/* ---- RETRIEVAL DRILL ---- */}
      <AnchorHeading as="h2" id="part-0-retrieval-drill">
        Part 0: Retrieval drill (5 minutes)
      </AnchorHeading>

      <p>
        Do not open your notes. Answer from memory. Write your answers before
        moving to Part 1.
      </p>

      <ol>
        <li>
          <strong>Browser-state summary fields.</strong> Name the four pieces of
          information a <code>BrowserSession</code> captures into a
          browser-state summary each step (week 3).
        </li>
        <li>
          <strong>Context budget.</strong> Why does the framework not send raw
          HTML to the LLM? Name two things it does instead to keep the
          browser-state representation inside the model's context budget (week
          3).
        </li>
        <li>
          <strong>Selector map.</strong> What does an element's integer index in
          the selector map refer to, and how does the agent use it when deciding
          what to click (week 2)?
        </li>
      </ol>

      <p>
        If you could not answer all three from memory, re-read the week 3
        reading before continuing. The concepts are load-bearing for this
        section.
      </p>

      {/* ---- PART 1: SETUP ---- */}
      <AnchorHeading as="h2" id="part-1-setup">
        Part 1: Set up logging to capture raw agent output (15 minutes)
      </AnchorHeading>

      <p>
        The agent does not print its full structured output by default. Add a
        step callback to intercept each <code>AgentOutput</code> object as the
        run progresses.
      </p>

      <pre>{`import asyncio
import json
from browser_use import Agent
from browser_use.llm import ChatOpenAI  # native wrapper, no LangChain needed

captured_outputs = []

def on_step(state, output, step_number):
    """Callback fires after each step. state is AgentState, output is AgentOutput."""
    captured_outputs.append({
        "step": step_number,
        "evaluation_previous_goal": output.evaluation_previous_goal,
        "memory": output.memory,
        "next_goal": output.next_goal,
        "actions": [a.model_dump() for a in output.action],
    })

async def main():
    agent = Agent(
        task=(
            "Go to news.ycombinator.com. "
            "Find the title of the top story. "
            "Then navigate to that story's comments page. "
            "Report how many comments it has."
        ),
        llm=ChatOpenAI(model="gpt-4o"),
        max_steps=8,
        on_step_start=on_step,   # fires before action dispatch
    )
    result = await agent.run()

    print("\\n=== Captured AgentOutput objects ===")
    for item in captured_outputs:
        print(json.dumps(item, indent=2))

    print("\\nFinal result:", result)

asyncio.run(main())`}</pre>

      <p>
        Run this script. You should see structured JSON printed for each step
        once the run completes. If <code>on_step_start</code> is not available
        in your version, check the Agent constructor for the callback parameter
        name (it may be <code>register_new_step_callback</code> in older builds;
        confirm against{" "}
        <a
          href="https://docs.browser-use.com/customize/agent-settings"
          target="_blank"
          rel="noopener noreferrer"
        >
          the agent-settings docs
        </a>
        ).
      </p>

      {/* ---- PART 2: READ THE FIRST STEP ---- */}
      <AnchorHeading as="h2" id="part-2-read-step-1">
        Part 2: Read the first AgentOutput in full (20 minutes)
      </AnchorHeading>

      <p>
        Find the JSON block for <strong>step 1</strong>. You will see something
        like this (exact content varies):
      </p>

      <pre>{`{
  "step": 1,
  "evaluation_previous_goal": "N/A - this is the first step",
  "memory": "Task: find the top HN story title and its comment count.",
  "next_goal": "Navigate to news.ycombinator.com",
  "actions": [
    {
      "go_to_url": {
        "url": "https://news.ycombinator.com"
      }
    }
  ]
}`}</pre>

      <p>Work through each field:</p>

      <ol start={4}>
        <li>
          <strong>evaluation_previous_goal.</strong> On step 1 this is always
          "N/A" or similar, because there was no prior step to evaluate. Write
          in your notebook: what question does this field answer on steps 2 and
          beyond? (One sentence.)
        </li>
        <li>
          <strong>memory.</strong> The agent starts with a summary of the task.
          After step 2, does the memory field change? Copy the memory field from
          step 2 and step 3 into your notebook and note any additions.
        </li>
        <li>
          <strong>next_goal.</strong> Read the next_goal from step 1 and step 2.
          Does next_goal describe the action just taken or the action about to
          be taken? Write your answer.
        </li>
        <li>
          <strong>actions.</strong> The action list for step 1 contains one
          entry: a <code>go_to_url</code> call. Actions are typed dictionaries:
          the key is the action name, the value is a dict of parameters. Write
          down the action name and its parameters from step 2 (likely a scroll
          or a click).
        </li>
      </ol>

      {/* ---- PART 3: ELEMENT INDEX BACK TO THE SELECTOR MAP ---- */}
      <AnchorHeading as="h2" id="part-3-element-index">
        Part 3: Trace the click action back to the selector map (20 minutes)
      </AnchorHeading>

      <p>
        This part interlocks with week 2. When the agent decides to click a
        link, it refers to an element by integer index. That index comes from
        the selector map the DOM service built during PERCEIVE. Here you will
        read both and match them.
      </p>

      <p>
        Modify your script to also dump the browser state after each step. Add
        this to the callback:
      </p>

      <pre>{`def on_step(state, output, step_number):
    captured_outputs.append({
        "step": step_number,
        "evaluation_previous_goal": output.evaluation_previous_goal,
        "memory": output.memory,
        "next_goal": output.next_goal,
        "actions": [a.model_dump() for a in output.action],
        # The browser state is in agent.state, not yet the history at callback time;
        # or inspect agent.history after run() completes (see Part 4).
    })`}</pre>

      <p>
        After the run, inspect <code>agent.history</code> for the step where
        the agent clicked a story link:
      </p>

      <pre>{`for hist_item in agent.history.history:
    print(f"Step {hist_item.metadata.step_number}")
    print("  State URL:", hist_item.state.url if hist_item.state else "N/A")
    print("  Model output:", hist_item.model_output)
    print("  Result:", hist_item.result)`}</pre>

      <ol start={8}>
        <li>
          <strong>Find a click action.</strong> Locate the step where the agent
          clicked a story link on HN. Read the element index from the action
          parameters, e.g. <code>{`{"click_element": {"index": 7}}`}</code>.
          Write down the index number.
        </li>
        <li>
          <strong>Match to the selector map.</strong> The selector map for that
          step is embedded in the serialized DOM state the agent received. If
          you saved the conversation (set{" "}
          <code>save_conversation_path="./conversation.json"</code> on the
          Agent), open that file and search for element <code>index: 7</code>{" "}
          (or whatever index you found). You will see its tag, text content, and
          attributes. Write: what HTML element does that index correspond to?
          Does its text match the story title the agent reported?
        </li>
        <li>
          <strong>State the connection.</strong> In one sentence, explain the
          chain: DOM service extracts element with index N (week 2 concept);
          browser-state summary carries that index to the LLM (week 3 concept);
          AgentOutput action carries index N back to the framework; the tools
          registry uses the selector map to find the real element and click it
          (week 5 concept, not covered yet). Write the chain in your notebook.
          You have now seen where week 2, week 3, and week 4 meet.
        </li>
      </ol>

      {/* ---- PART 4: READ ACROSS STEPS ---- */}
      <AnchorHeading as="h2" id="part-4-across-steps">
        Part 4: Read across all steps and predict the next action (20 minutes)
      </AnchorHeading>

      <p>
        Reading a single AgentOutput tells you one decision. Reading the
        sequence tells you how the agent plans and revises. Work through your
        captured steps in order.
      </p>

      <ol start={11}>
        <li>
          <strong>Build a step table.</strong> In your notebook, make a table
          with columns: step number, evaluation_previous_goal (success/failure
          or N/A), memory (changes since last step?), next_goal, action name.
          Fill in all rows from your captured output. The table should span
          every step the agent took.
        </li>
        <li>
          <strong>Find a failure or retry.</strong> Look for a step where
          evaluation_previous_goal indicates the prior step did not succeed.
          What happened? What did the agent do differently in the action list on
          the following step? If your run had no failures, set{" "}
          <code>max_steps=4</code> on a task that needs more steps, so the
          agent cannot finish and you can read a partial run.
        </li>
        <li>
          <strong>Predict before revealing.</strong> Cover the last step in your
          table. Read the second-to-last <code>next_goal</code> and the
          browser-state URL at that point. Write your prediction for what action
          the agent will take in the last step. Then uncover it. Did you
          predict correctly? If not, what cue did you miss?
        </li>
        <li>
          <strong>Read the AgentBrain property.</strong> The{" "}
          <code>current_state</code> property on AgentOutput returns an{" "}
          <code>AgentBrain</code> object grouping evaluation_previous_goal,
          memory, and next_goal. Confirm this in the source:
          <pre>{`# In your script, after reading history:
for hist_item in agent.history.history:
    raw_output = hist_item.model_output
    if raw_output:
        brain = raw_output.current_state  # returns AgentBrain
        print(brain.evaluation_previous_goal, brain.memory, brain.next_goal)`}</pre>
          Write: <code>AgentBrain</code> is not a separate object the LLM
          produces. It is a property accessor that groups three fields already
          on <code>AgentOutput</code> into a named view. Why might the codebase
          expose this view?
        </li>
      </ol>

      {/* ---- PART 5: LLM WRAPPERS ---- */}
      <AnchorHeading as="h2" id="part-5-llm-wrappers">
        Part 5: Swap the LLM wrapper (10 minutes)
      </AnchorHeading>

      <p>
        browser-use ships native wrappers in <code>browser_use/llm</code>:
        ChatOpenAI, ChatAnthropic, ChatGoogle, ChatGroq, ChatOllama, and more.
        LangChain is not required. (browser-use community, 2025, issue #2137)
      </p>

      <ol start={15}>
        <li>
          <strong>Import and swap.</strong> Change your script to use
          ChatAnthropic instead of ChatOpenAI:
          <pre>{`from browser_use.llm import ChatAnthropic

agent = Agent(
    task="...",
    llm=ChatAnthropic(model="claude-3-5-sonnet-20241022"),
    max_steps=8,
)`}</pre>
          Run the same task. Does the number of steps change? Does the agent
          reach the correct answer? Note any differences in the action
          sequences.
        </li>
        <li>
          <strong>State what did not change.</strong> Write two things that are
          identical regardless of which chat model you use: (a) the structure of
          the AgentOutput the framework parses, and (b) the element index
          vocabulary the agent uses to refer to DOM elements.
        </li>
      </ol>

      {/* ---- SELF-GRADING ---- */}
      <AnchorHeading as="h2" id="self-grading">
        Self-grading rubric
      </AnchorHeading>

      <p>Check each item before you close the session.</p>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Standard</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Retrieval drill</td>
            <td>All three answers written from memory before opening notes</td>
            <td>Pass / Did not attempt</td>
          </tr>
          <tr>
            <td>Step-1 fields read</td>
            <td>
              evaluation_previous_goal, memory, next_goal, action described in
              your own words for step 1
            </td>
            <td>Pass / Incomplete</td>
          </tr>
          <tr>
            <td>Element index traced</td>
            <td>
              Click action's index number identified and matched to a DOM
              element in the selector map
            </td>
            <td>Pass / Not found</td>
          </tr>
          <tr>
            <td>Step table complete</td>
            <td>Every step captured with all five columns filled in</td>
            <td>Pass / Incomplete</td>
          </tr>
          <tr>
            <td>Prediction attempted</td>
            <td>
              Next action predicted from next_goal before revealing the actual
              output; outcome noted
            </td>
            <td>Pass / Skipped</td>
          </tr>
          <tr>
            <td>LLM swap completed</td>
            <td>Run repeated with a different chat model; differences noted</td>
            <td>Pass / Not run</td>
          </tr>
          <tr>
            <td>AgentBrain explained</td>
            <td>
              Relationship between AgentOutput and AgentBrain stated in one
              sentence
            </td>
            <td>Pass / Not written</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export const wk04SectionSearchBody =
  "AgentOutput dissect capture inspection evaluation_previous_goal memory next_goal action list element index selector map DOM week 2 interleave history AgentBrain current_state ChatOpenAI ChatAnthropic LangChain native LLM wrapper step table prediction retrieval drill browser-state summary context budget section worksheet week 4";
