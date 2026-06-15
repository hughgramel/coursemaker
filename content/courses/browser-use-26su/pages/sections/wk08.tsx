import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk08SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="make-a-flaky-agent-reliable">
        Section: Make a flaky agent reliable
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 8 &middot; Hands-on worksheet</p>

      <p>
        By the end of this session you will have taken a deliberately broken
        agent and task, diagnosed the failure from its history, and made it
        pass reliably by reframing the task and adding the right guards. You
        will read <code>evaluation_previous_goal</code> and{" "}
        <code>next_goal</code> across multiple steps to identify whether the
        agent was looping, stalling, or erroring, and you will pick the correct
        fix for each mode.
      </p>

      <AnchorHeading as="h2" id="part-0-retrieval">
        Part 0: Five-minute retrieval drill (week 7 review)
      </AnchorHeading>

      <p>
        Close the reading. Answer these from memory. Write your answers before
        checking.
      </p>
      <ol>
        <li>
          <strong>user_data_dir.</strong> What does passing{" "}
          <code>user_data_dir</code> to a <code>BrowserSession</code> do? Why
          does an agent run that sets this parameter not need to log in again
          on its second run?
        </li>
        <li>
          <strong>storage_state vs. user_data_dir.</strong> Name one difference
          between <code>storage_state</code> and <code>user_data_dir</code> as
          persistence mechanisms. Which one stores the full browser profile
          including extension state?
        </li>
        <li>
          <strong>Multi-tab.</strong> Which built-in action does a browser-use
          agent call to open a new tab and navigate to a URL? What does{" "}
          <code>switch_tab</code> take as its argument?
        </li>
        <li>
          <strong>keep_alive.</strong> What happens to the browser process when
          an agent run finishes and <code>keep_alive=True</code> is set? When
          would you set this?
        </li>
      </ol>
      <p>
        Check against the week 7 reading before moving on. If you missed any,
        note the gap before continuing.
      </p>

      <AnchorHeading as="h2" id="part-1-baseline-run">
        Part 1: Run the flaky agent and read the failure
      </AnchorHeading>

      <p>
        Copy the agent below and run it. The task is intentionally underspecified
        and the step limit too low. Let it fail. Then read the history.
      </p>

      <pre>{`import asyncio
from browser_use import Agent
from browser_use.llm import ChatOpenAI  # or ChatAnthropic, etc.

TASK_BAD = "Research something on the web and tell me what you find."

async def run_flaky():
    agent = Agent(
        task=TASK_BAD,
        llm=ChatOpenAI(model="gpt-4o"),
        max_steps=5,         # too low
        max_failures=3,
        final_response_after_failure=True,
    )
    history = await agent.run()
    return history

history = asyncio.run(run_flaky())`}</pre>

      <p>
        Once the run finishes, print a step-by-step diagnosis:
      </p>

      <pre>{`for i, item in enumerate(history):
    brain = item.model_output.current_state
    print(f"--- Step {i+1} ---")
    print(f"  evaluation : {brain.evaluation_previous_goal}")
    print(f"  memory     : {brain.memory}")
    print(f"  next_goal  : {brain.next_goal}")
    for r in item.result:
        if r.error:
            print(f"  ERROR      : {r.error}")
        else:
            print(f"  OK         : {r.extracted_content or '(action)'}")`}</pre>

      <p>Answer these questions before moving to Part 2:</p>
      <ol>
        <li>
          How many steps did the agent complete? Did it call <code>done</code>{" "}
          voluntarily or was it forced?
        </li>
        <li>
          Look at the <code>next_goal</code> field across the steps. Did the
          same goal appear more than once? That is the stagnation pattern.
        </li>
        <li>
          Was there an error in any step? If so, which action caused it and
          what did the error message say?
        </li>
        <li>
          What did the forced <code>done</code> action say in its text field?
          Does it contain useful diagnostic information?
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-diagnose">
        Part 2: Classify the failure mode
      </AnchorHeading>

      <p>
        Using what you observed in Part 1, classify the failure. Match it to
        one of the three modes from the reading: looping (repeated identical
        action), stalling (page did not change, agent kept trying), or erroring
        (action threw an exception).
      </p>

      <p>
        Fill in this table (on paper or in your editor):
      </p>

      <pre>{`Failure mode observed: [ ] looping   [ ] stalling   [ ] erroring

Evidence (which step, what you saw in evaluation/next_goal/error):
  Step: ___
  Evidence: ___

Root cause in the task string (what was missing or ambiguous):
  ___

Root cause in the agent settings (what limit was wrong):
  ___`}</pre>

      <p>
        This classification step matters. The fix for looping is different from
        the fix for stalling, which is different from the fix for erroring.
        Applying the wrong fix wastes another run.
      </p>

      <AnchorHeading as="h2" id="part-3-reframe">
        Part 3: Reframe the task
      </AnchorHeading>

      <p>
        Rewrite the task string so the agent has a clear starting point, a
        clear stopping condition, an expected scope, and a failure hint. A
        good target task for this section is:
      </p>

      <pre>{`TASK_BETTER = (
    "Go to https://news.ycombinator.com. "
    "Find the title and URL of the #1 story (the story at position 1 on "
    "the front page, not the comments link). "
    "Return the title and URL. "
    "Do not navigate to the story itself. "
    "If the ranking is not visible, return 'front page unavailable'."
)`}</pre>

      <p>
        If you have a task from your own work that has been failing, use that
        instead. Apply the four framing properties from the reading:
      </p>
      <ol>
        <li>Clear starting point (a URL or a known starting state).</li>
        <li>Clear stopping condition (exactly what to put in the <code>done</code> action).</li>
        <li>Expected scope (which pages, how many interactions).</li>
        <li>Failure hint (what to return if the expected element is not found).</li>
      </ol>
      <p>
        Write your revised task string and annotate each sentence with which
        property it satisfies.
      </p>

      <AnchorHeading as="h2" id="part-4-add-guards">
        Part 4: Add the right guards and re-run
      </AnchorHeading>

      <p>
        Now build the fixed agent. Adjust <code>max_steps</code> based on
        your estimate of the task&apos;s actual step count, set{" "}
        <code>max_failures</code> and <code>final_response_after_failure</code>{" "}
        deliberately, and leave loop detection on.
      </p>

      <pre>{`import asyncio
from browser_use import Agent
from browser_use.llm import ChatOpenAI

TASK_BETTER = (
    "Go to https://news.ycombinator.com. "
    "Find the title and URL of the #1 story on the front page. "
    "Return the title and URL. "
    "Do not navigate to the story itself. "
    "If the ranking is not visible, return 'front page unavailable'."
)

async def run_fixed():
    agent = Agent(
        task=TASK_BETTER,
        llm=ChatOpenAI(model="gpt-4o"),
        max_steps=10,                      # 1-2 page loads, some margin
        max_failures=2,                    # fail fast: 2 consecutive errors stops the run
        final_response_after_failure=True, # always get a structured done
        loop_detection_enabled=True,       # default; leave on
    )
    history = await agent.run()
    return history

history = asyncio.run(run_fixed())
print(history.final_result())`}</pre>

      <p>
        Run the fixed agent. Then answer:
      </p>
      <ol>
        <li>
          How many steps did the fixed agent use? Compare to the flaky run.
        </li>
        <li>
          Did the agent call <code>done</code> voluntarily this time? How can
          you tell from the history?
        </li>
        <li>
          Print the <code>memory</code> field at each step. What was the agent
          carrying between steps? Was the memory field useful on this task or
          effectively empty?
        </li>
        <li>
          Did it return the correct title and URL? If not, what went wrong this
          time?
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-5-interleaving">
        Part 5: Use AgentOutput to diagnose (week 4 concept, applied here)
      </AnchorHeading>

      <p>
        This is the interleaving task. It revisits <code>AgentOutput</code> and
        the <code>AgentBrain</code> model from week 4, now applied to
        reliability diagnosis.
      </p>

      <p>
        Pick any step from your fixed run where the agent made an interesting
        decision (found an element, read a value, called <code>done</code>).
        Print the full <code>AgentOutput</code> for that step:
      </p>

      <pre>{`step_n = history[1]  # change the index to the step you picked

# The raw model output
output = step_n.model_output
print("thinking          :", output.thinking)
print("evaluation        :", output.current_state.evaluation_previous_goal)
print("memory            :", output.current_state.memory)
print("next_goal         :", output.current_state.next_goal)
print("actions           :", output.action)

# The results of executing those actions
for r in step_n.result:
    print("action result     :", r.extracted_content or r.error or "(done)")`}</pre>

      <p>Answer these questions:</p>
      <ol>
        <li>
          At your chosen step, what did <code>evaluation_previous_goal</code>{" "}
          say? Was it accurate? Compare it against what the previous step&apos;s
          result actually contained.
        </li>
        <li>
          What did the agent put in <code>next_goal</code>? Did it match what
          it actually did (the action it chose)?
        </li>
        <li>
          If the agent had <em>not</em> put that content in the{" "}
          <code>memory</code> field, which information would it have risked
          losing if <code>MessageManager</code> trimmed older messages?
        </li>
        <li>
          Look at the <code>action</code> list. Was there more than one action
          in the list (a multi-act step)? If so, what were the two actions and
          why might the agent have batched them?
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-6-planning-optional">
        Part 6 (stretch): Enable planning on a multi-step task
      </AnchorHeading>

      <p>
        If you finish Parts 1-5 early, try enabling planning on a task that
        has three or more distinct stages. Use the numbered-steps framing from
        the reading:
      </p>

      <pre>{`import asyncio
from browser_use import Agent
from browser_use.llm import ChatOpenAI

TASK_PLANNED = (
    "Complete these steps in order:\\n"
    "1. Go to https://news.ycombinator.com and note the title of the #1 story.\\n"
    "2. Navigate to https://lobste.rs and note the title of the #1 story.\\n"
    "3. Return both titles in the format: HN: <title> | Lobsters: <title>.\\n"
    "If either site is unavailable, write 'unavailable' for that title."
)

async def run_planned():
    agent = Agent(
        task=TASK_PLANNED,
        llm=ChatOpenAI(model="gpt-4o"),
        max_steps=20,
        max_failures=3,
        final_response_after_failure=True,
    )
    history = await agent.run()
    return history

history = asyncio.run(run_planned())
print(history.final_result())`}</pre>

      <p>After the run:</p>
      <ol>
        <li>
          Print <code>agent.state.plan</code> (or inspect{" "}
          <code>history[-1].state.plan</code> if available). What plan items
          were generated? What status did each end up with?
        </li>
        <li>
          Did the agent track its progress through the two sites correctly in
          the <code>memory</code> field?
        </li>
        <li>
          How many steps did the planned run use compared to what you would
          have budgeted without planning?
        </li>
      </ol>

      <AnchorHeading as="h2" id="self-grading">
        Self-grading rubric
      </AnchorHeading>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Criterion</th>
              <th>Full credit</th>
              <th>Partial</th>
              <th>Not yet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Flaky run completed and history printed</td>
              <td>History printed step by step; all four Part 1 questions answered</td>
              <td>Run completed but history not printed</td>
              <td>Did not run the flaky agent</td>
            </tr>
            <tr>
              <td>Failure mode classified correctly</td>
              <td>Correct mode selected with specific evidence from the history</td>
              <td>Correct mode but evidence is vague</td>
              <td>Wrong mode or no evidence cited</td>
            </tr>
            <tr>
              <td>Task reframed with all four properties</td>
              <td>Starting point, stopping condition, scope, and failure hint all present</td>
              <td>Two or three properties present</td>
              <td>Task still vague or missing stopping condition</td>
            </tr>
            <tr>
              <td>Fixed agent passes and history compared</td>
              <td>Agent calls <code>done</code> voluntarily; step count compared to flaky run</td>
              <td>Agent passes but comparison not done</td>
              <td>Fixed agent still fails</td>
            </tr>
            <tr>
              <td>AgentOutput dissected (interleaving, Part 5)</td>
              <td>
                All four Part 5 questions answered with specific field values from the history
              </td>
              <td>Two or three questions answered</td>
              <td>Part 5 skipped</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export const wk08SectionSearchBody =
  "flaky agent reliable loop detection stagnant page repeated action max_steps max_failures final_response_after_failure task framing stopping condition task decomposition AgentOutput AgentBrain evaluation_previous_goal memory next_goal history diagnosis week 8 section worksheet browser use make a flaky agent reliable";
