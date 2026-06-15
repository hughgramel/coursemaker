import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk08Reading() {
  return (
    <ReadingPage
      id="wk08"
      title="Week 8: Making agents reliable"
      kicker="Browser Use: How LLM Agents Drive the Web · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading explains why browser-use agents loop, stall, or fail
          partway through a task, and what you can do about it. By the end you
          will be able to read a failure from the agent history, set the right
          step and failure limits, enable planning for multi-step tasks, use the{" "}
          <code>memory</code> field to carry notes across steps, and write a
          task description that an agent can actually follow.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> The agent loop
          (perceive-decide-act), the <code>AgentOutput</code> model and its
          fields (<code>evaluation_previous_goal</code>, <code>memory</code>,{" "}
          <code>next_goal</code>, <code>action</code>), the{" "}
          <code>MessageManager</code> that assembles the context each step, the
          agent history list, and <code>max_steps</code> as the basic stopping
          condition. These were covered in weeks 1-4 of this course.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-why-agents-fail">
        1. Why agents fail
      </AnchorHeading>
      <p>
        A browser-use agent fails in one of three ways. It loops: it performs
        the same action (or sequence of actions) repeatedly without making
        progress. It stalls: it keeps trying different actions on a page that
        has not changed and will not change without external input. Or it errors:
        an action throws an exception, the LLM returns something that cannot
        be parsed into an <code>AgentOutput</code>, or the browser itself
        crashes. These three failure modes require different responses.
      </p>
      <p>
        Looping is the most common failure mode in practice. The agent clicks
        a button. The page reloads to the same state. The agent clicks the same
        button again. Nothing changes. Without a mechanism to detect this
        pattern, the agent will exhaust all its allocated steps on a single
        fruitless cycle. Stagnation is the same pattern at the page level: the
        agent tries multiple different actions, none of them change what it sees,
        and it has no way to know it is stuck.
      </p>
      <p>
        Errors are different: they are logged and counted. An action that throws
        returns an <code>ActionResult</code> with an error field rather than
        content. The agent sees this in its next step (the result feeds back
        through <code>MessageManager</code>) and can try a different approach.
        The danger is that the agent, having seen one error, tries to recover
        with an action that also fails, producing a cascade of consecutive
        errors with no progress.
      </p>
      <p>
        Understanding which failure mode you are looking at is the first step
        in fixing it. The agent history is where you look.
      </p>

      <AnchorHeading as="h2" id="2-loop-detection">
        2. Loop detection: repeated actions and stagnant pages
      </AnchorHeading>
      <p>
        browser-use ships with loop detection enabled by default
        (browser-use contributors, 2026, <em>agent/service.py</em>). The
        detector watches a sliding window of recent actions and flags two
        patterns. The first is a repeated-action loop: the agent emits the
        same action with the same parameters more than once within the window.
        The second is a stagnant-page loop: the page state (as represented by
        the DOM snapshot and URL) has not changed across several consecutive
        steps even though the agent kept acting.
      </p>
      <p>
        When a loop is detected, the framework informs the agent by injecting
        a signal into the next step&apos;s context. The agent can then respond by
        trying a different approach, navigating away, or calling{" "}
        <code>done</code> with a partial result. The key parameters are:
      </p>
      <pre>{`Agent(
    task=task,
    llm=llm,
    # loop detection (both on by default)
    loop_detection_enabled=True,
    loop_detection_window=20,   # steps in the sliding window
)`}</pre>
      <p>
        Turning <code>loop_detection_enabled</code> off is rarely the right
        move. When you do disable it, a task that reaches an impossible page
        state will consume every remaining step before stopping. The window size
        (default 20) controls sensitivity: a smaller window catches loops
        faster but risks false positives on legitimately repetitive tasks like
        paginating through search results.
      </p>

      <AnchorHeading as="h2" id="3-max-steps">
        3. max_steps: the hard ceiling
      </AnchorHeading>
      <p>
        <code>max_steps</code> is the absolute upper bound on how many
        perceive-decide-act cycles the agent is allowed to run. When the step
        counter reaches <code>max_steps</code>, the loop ends. Whether the
        agent emits a meaningful <code>done</code> action or simply stops
        depends on a second parameter covered in the next section.
      </p>
      <p>
        The default value differs by environment; the docs recommend setting
        it explicitly for any task you care about (browser-use team, 2026,{" "}
        <em>Agent Settings</em>). A value of 25-50 covers most single-page
        tasks. Multi-step tasks that span several pages or require many form
        interactions may need 75-150. Setting it too low produces a task that
        never finishes; setting it too high means a stuck agent runs for a long
        time (and spends tokens) before you notice it failed.
      </p>
      <pre>{`from browser_use import Agent
from browser_use.llm import ChatAnthropic

agent = Agent(
    task="Find the cheapest flight from SFO to JFK next Tuesday",
    llm=ChatAnthropic(model="claude-opus-4-8"),
    max_steps=50,
)`}</pre>
      <p>
        A useful mental model: estimate how many discrete page interactions your
        task requires (load search page, enter query, read results, click a
        result, read details, extract price). Multiply by two to three to
        account for retries and navigation errors. That is a reasonable starting
        point for <code>max_steps</code>.
      </p>

      <AnchorHeading as="h2" id="4-max-failures">
        4. max_failures and consecutive error handling
      </AnchorHeading>
      <p>
        <code>max_failures</code> counts consecutive failed steps, not total
        failures across the run (browser-use team, 2026, <em>Agent Settings</em>). The
        default is 3 as of mid-2026. When the counter reaches{" "}
        <code>max_failures</code>, the loop ends immediately, regardless of
        how many steps remain. The counter resets to zero on any successful step,
        so a single success after two failures does not accumulate toward the
        limit.
      </p>
      <p>
        This behavior is exactly right for the error cascade pattern described
        in section 1: if an agent has failed three times in a row, it is
        unlikely to recover without intervention, and continuing to spend tokens
        on failing steps is wasteful. Lower the limit when you want to fail
        fast (useful in testing or CI); raise it when you are automating a
        slow or unreliable site where single failures are expected.
      </p>
      <pre>{`agent = Agent(
    task=task,
    llm=llm,
    max_steps=40,
    max_failures=2,           # fail fast: stop after 2 consecutive errors
    final_response_after_failure=True,
)`}</pre>

      <Callout title="What counts as a failure?">
        A failure is a step where the action raised an exception or returned an
        error in the <code>ActionResult</code>. A step where the agent
        successfully called <code>done</code> with a partial result is not a
        failure, even if the task was incomplete. A step where the LLM call
        itself timed out (<code>llm_timeout</code>) also counts as a failure.
      </Callout>

      <AnchorHeading as="h2" id="5-final-response">
        5. Retries and forced done: final_response_after_failure
      </AnchorHeading>
      <p>
        When the agent hits <code>max_failures</code> or <code>max_steps</code>,
        the default behavior (with <code>final_response_after_failure=True</code>,
        which is on by default) is to make one final LLM call that forces the
        agent to produce a <code>done</code> action. This call uses a constrained
        action set that includes only <code>done</code>, so the agent cannot
        continue acting. It is given the full history and asked to summarize
        what it accomplished and why it is stopping.
      </p>
      <p>
        This is preferable to a silent abort because it gives you a structured
        output even from a failed run. The <code>done</code> action carries
        a text field with the agent&apos;s self-assessment. That text often contains
        useful diagnostic information: what the agent was trying to do, what
        went wrong, and what it would need to proceed.
      </p>
      <p>
        Setting <code>final_response_after_failure=False</code> skips the
        final call and produces no structured output on failure. This saves
        one LLM call but leaves you with only the history to diagnose the
        failure. In production, keep it at the default (True). In high-volume
        pipelines where you are running hundreds of agents and failures are
        expected to be rare, the cost argument for False is more defensible.
      </p>

      <AnchorHeading as="h2" id="6-reading-failures">
        6. Reading failures from the history
      </AnchorHeading>
      <p>
        After a run, <code>agent.history</code> (an <code>AgentHistoryList</code>)
        holds a record of every step. Each entry in the history contains the
        structured <code>AgentOutput</code> the model produced and the{" "}
        <code>ActionResult</code> list from executing the actions. Reading the
        history is the primary diagnostic tool for understanding why a run
        failed (browser-use contributors, 2026, <em>agent/service.py</em>).
      </p>
      <pre>{`history = agent.history

# Print evaluation and result for each step
for i, item in enumerate(history):
    brain = item.model_output.current_state  # AgentBrain
    print(f"Step {i+1}: {brain.evaluation_previous_goal}")
    for result in item.result:
        if result.error:
            print(f"  ERROR: {result.error}")
        else:
            print(f"  OK: {result.extracted_content or '(action completed)'}")`}</pre>
      <p>
        The fields to focus on during diagnosis:
      </p>
      <ul>
        <li>
          <strong>evaluation_previous_goal</strong> (from{" "}
          <code>AgentBrain</code>): what the agent thought happened in the
          previous step. When an agent loops without realizing it, this field
          often reads &ldquo;Success&rdquo; even when the action had no effect.
          That mismatch between the agent&apos;s self-assessment and the actual
          page state is a diagnostic signal.
        </li>
        <li>
          <strong>ActionResult.error</strong>: the exception message if the
          action threw. This is where you find element-not-found errors,
          timeout errors, and DOM-changed errors.
        </li>
        <li>
          <strong>memory</strong> (from <code>AgentBrain</code>): what the
          agent was carrying forward as its working notes. A sudden change in
          the memory content between steps often marks the moment the agent
          realized it was stuck.
        </li>
        <li>
          <strong>next_goal</strong>: what the agent intended to do next. When
          the same next_goal appears across many consecutive steps, you are
          looking at a stalled agent.
        </li>
      </ul>
      <p>
        The <code>AgentHistoryList</code> also exposes convenience methods.
        As of mid-2026, <code>history.errors()</code> returns only the steps
        with errors, and <code>history.final_result()</code> returns the text
        from the last <code>done</code> action. Confirm the exact method names
        against the current source before using them in production code.
      </p>

      <AnchorHeading as="h2" id="7-planner">
        7. The planner: high-level planning across steps
      </AnchorHeading>
      <p>
        For tasks that span many pages and require tracking progress across
        multiple goals, browser-use provides a planning layer. Enabling planning
        (<code>enable_planning=True</code> in <code>AgentSettings</code>, or
        by constructing an agent with a planner configuration) causes the agent
        to generate and maintain a <code>Plan</code>: an ordered list of{" "}
        <code>PlanItem</code> objects, each with a text description and a status
        (<code>pending</code>, <code>current</code>, <code>done</code>,{" "}
        <code>skipped</code>) (browser-use contributors, 2026,{" "}
        <em>agent/views.py</em>).
      </p>
      <p>
        The planner fires at the start of the run to produce the initial plan.
        It also fires on stall: when the agent has failed{" "}
        <code>planning_replan_on_stall</code> consecutive steps, the plan is
        regenerated. The current plan item index is tracked in{" "}
        <code>AgentState</code>, so the agent always knows which step of its
        own plan it is executing.
      </p>
      <pre>{`from browser_use import Agent
from browser_use.llm import ChatAnthropic, ChatOpenAI

# Use a capable model as the main LLM
# The planner can use the same model or a different one
agent = Agent(
    task=(
        "1. Go to news.ycombinator.com. "
        "2. Find the top story. "
        "3. Open the comments. "
        "4. Extract the three highest-voted comments. "
        "5. Return the text of each comment."
    ),
    llm=ChatAnthropic(model="claude-opus-4-8"),
    max_steps=60,
    max_failures=3,
)`}</pre>
      <p>
        The planning layer is most useful when the task has three or more
        clearly distinct stages that cannot be accomplished in a single browser
        interaction. For short tasks (one or two page interactions), the
        overhead of plan generation is not worth the cost.
      </p>
      <p>
        <code>planning_exploration_limit</code> controls how many steps the
        agent is allowed to take without the current plan item being marked
        done before the framework nudges it to update the plan. This prevents
        the agent from drifting into off-plan exploration while still allowing
        some flexibility within each plan step.
      </p>

      <AnchorHeading as="h2" id="8-procedural-memory">
        8. Procedural memory: the memory field
      </AnchorHeading>
      <p>
        Every <code>AgentOutput</code> contains a <code>memory</code> field
        (browser-use contributors, 2026, <em>agent/views.py</em>). This is not
        long-term storage or retrieval augmented generation. It is a string the
        agent writes to itself each step and reads back in the next step via
        the assembled messages. Think of it as a sticky note the agent maintains
        across the run.
      </p>
      <p>
        The memory field is the agent&apos;s answer to context window pressure. Because
        the <code>MessageManager</code> trims older browser-state summaries to
        fit the model&apos;s context budget (covered in week 3), the agent cannot
        rely on scrolling back through its full history to remember what it
        found on page 1. The <code>memory</code> field is how it preserves
        that information across the trim boundary.
      </p>
      <p>
        In practice, a well-functioning agent uses the memory field to carry:
      </p>
      <ul>
        <li>
          Extracted values it will need later (a product ID, a login token
          found on one page, a price from a search result).
        </li>
        <li>
          Progress notes (&ldquo;completed login step, now on product listing
          page&rdquo;).
        </li>
        <li>
          Failure context (&ldquo;tried clicking element 4 twice, both times the
          page reloaded without change; trying the search box instead&rdquo;).
        </li>
      </ul>
      <p>
        You cannot inject content into the memory field from outside the agent.
        It is entirely under the model&apos;s control. But you can observe it in
        the history and use it to understand what the agent was tracking at
        each step.
      </p>

      <Callout title="Memory vs. the message history">
        The <code>memory</code> field is part of the structured{" "}
        <code>AgentOutput</code> that the model emits. It is always carried
        forward. The message history, by contrast, is trimmed by{" "}
        <code>MessageManager</code> to fit the context budget. When you want
        information to survive across many steps, the memory field is more
        reliable than relying on distant messages surviving the trim.
      </Callout>

      <AnchorHeading as="h2" id="9-task-framing">
        9. Task framing as a reliability lever
      </AnchorHeading>
      <p>
        The task string is the agent&apos;s primary instruction. Its quality affects
        reliability more than any single parameter setting. A vague task
        produces an agent that wastes steps interpreting ambiguous instructions.
        An overly constrained task produces an agent that fails when the page
        does not match its rigid expectations.
      </p>
      <p>
        Four properties of a well-framed task:
      </p>
      <ol>
        <li>
          <strong>A clear starting point.</strong> Tell the agent where to
          begin. &ldquo;Go to example.com/products&rdquo; is better than &ldquo;find
          the products page.&rdquo; The first costs one navigation action; the
          second may cost several steps of uncertain search.
        </li>
        <li>
          <strong>A clear stopping condition.</strong> What should the agent
          return in its <code>done</code> action? &ldquo;Return the price of the
          first result&rdquo; is better than &ldquo;find the price.&rdquo; The
          agent needs to know what constitutes success so it can call{" "}
          <code>done</code> at the right moment rather than continuing
          indefinitely.
        </li>
        <li>
          <strong>Expected scope.</strong> How many pages should this take?
          If the answer is one, say so: &ldquo;do not navigate away from this page.&rdquo;
          If the answer is several, describe the expected journey so the
          agent can match its <code>next_goal</code> sequence against it.
        </li>
        <li>
          <strong>Failure handling hints.</strong> What should the agent do
          if an expected element is not found? &ldquo;If you cannot find the
          price on the listing page, return the text &lsquo;price not found&rsquo;
          rather than navigating further&rdquo; prevents the agent from
          wandering to unrelated pages.
        </li>
      </ol>
      <pre>{`# Poorly framed
task_bad = "Research the product and tell me what you find."

# Better framed
task_good = (
    "Go to https://example.com/products/widget-x. "
    "Find the current price (it appears near the 'Add to cart' button). "
    "If the price is not visible on the main product page, check the "
    "'Pricing' tab if one exists. "
    "Return the price as a number, e.g. '$29.99'. "
    "If you cannot find a price after checking both locations, "
    "return 'price not found'."
)`}</pre>

      <AnchorHeading as="h2" id="10-task-decomposition">
        10. Decomposing a hard task
      </AnchorHeading>
      <p>
        Some tasks are inherently multi-stage: log in, navigate to a
        specific section, fill a form, confirm the result. Squeezing all of
        this into one run is possible, but it has a reliability cost. The
        further the agent is from its starting point in the task, the more
        things that can go wrong and the harder recovery becomes.
      </p>
      <p>
        One approach is to number the stages explicitly in the task string:
      </p>
      <pre>{`task = (
    "Complete these steps in order:\n"
    "1. Go to example.com and log in with the credentials provided.\n"
    "2. Navigate to Settings > Notifications.\n"
    "3. Enable the 'Weekly summary' option.\n"
    "4. Click Save.\n"
    "5. Confirm the page shows a success message and return its text."
)`}</pre>
      <p>
        Numbered steps give the agent a clear <code>next_goal</code> target at
        each step and make the agent&apos;s <code>memory</code> field easier to
        populate (&ldquo;completed step 1, now on Settings page&rdquo;). They also make
        failures easier to diagnose in the history because you can see exactly
        which numbered step the agent was attempting when it failed.
      </p>
      <p>
        An alternative for very long or branching tasks is to run multiple
        agents sequentially, with each agent receiving the output of the
        previous one. This keeps each agent&apos;s task small and its step budget
        accurate. The tradeoff is additional orchestration code and the
        overhead of launching separate agent runs. For the capstone project
        (week 10), you will make this architectural decision deliberately.
      </p>

      <AnchorHeading as="h2" id="11-the-bitter-lesson">
        11. The bitter lesson applied to agent design
      </AnchorHeading>
      <p>
        The browser-use founders have written explicitly about the design
        philosophy behind the framework (browser-use team, Gregor Žunič, 2026).
        The central argument borrows from Rich Sutton&apos;s &ldquo;The Bitter Lesson&rdquo;
        in machine learning: general methods that scale with compute tend to
        outperform approaches that encode human-specific knowledge. Applied to
        agent frameworks, the argument runs: &ldquo;All the value is in the RL&apos;d
        model, not your 10,000 lines of abstractions.&rdquo;
      </p>
      <p>
        The practical implication is that browser-use aims to be a minimal
        loop with a maximal action space rather than a framework that tries
        to solve reliability by adding layers of verification, planning, and
        output parsing. The essay&apos;s recommendation: &ldquo;Start with maximal
        capability, then restrict.&rdquo; Give the agent as many tools and as much
        context as the task needs, then add guards (step limits, failure
        limits, loop detection) to prevent runaway behavior.
      </p>
      <p>
        This reading covers the guards. The insight from the bitter-lesson
        argument is that the guards should be minimal: enough to prevent
        obviously bad outcomes, not so many that they prevent the model from
        applying its own trained judgment about what to do next. If you find
        yourself adding verification steps, output validators, and elaborate
        recovery logic to a task, it is worth asking whether the simpler fix
        is a better-framed task.
      </p>

      <AnchorHeading as="h2" id="12-combining-the-tools">
        12. Combining the tools: a reliability checklist
      </AnchorHeading>
      <p>
        In practice, making an agent reliable means applying several mechanisms
        together. The following is a reasonable starting configuration for a
        new task:
      </p>
      <pre>{`from browser_use import Agent
from browser_use.llm import ChatAnthropic

agent = Agent(
    task=task,                            # well-framed, scoped, with stopping condition
    llm=ChatAnthropic(model="claude-opus-4-8"),
    max_steps=50,                         # set explicitly; adjust after first run
    max_failures=3,                       # default; lower to 2 to fail fast in dev
    final_response_after_failure=True,    # always get a structured done action
    loop_detection_enabled=True,          # default; leave on
    loop_detection_window=20,             # default; fine for most tasks
)`}</pre>
      <p>
        After the first run, read the history. If the run used fewer than half
        its allocated steps, the task may be over-specified or the step limit
        too high. If it hit exactly <code>max_steps</code> without calling{" "}
        <code>done</code>, either the task needs more steps or there is a loop
        the detection did not catch. If it hit <code>max_failures</code>, read
        the error messages in the history and fix the underlying cause before
        adjusting the limit.
      </p>
      <p>
        This iterative read-adjust-rerun cycle is the main reliability
        engineering loop for browser-use tasks. No configuration is right on
        the first try, and the history is the instrument for tuning it.
      </p>

      <AnchorHeading as="h2" id="13-exercises">
        13. Exercises
      </AnchorHeading>

      <Exercise n={1}>
        <p>
          From memory: name the two loop-detection patterns that browser-use
          monitors for. What parameter controls the detection window, and what
          does a smaller window value mean for sensitivity?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          An agent runs against a form that requires a CAPTCHA. It attempts to
          submit the form three times. All three attempts fail with an error.
          With <code>max_failures=3</code> and{" "}
          <code>final_response_after_failure=True</code>, describe step by step
          what happens next: which code path fires, what LLM call is made, and
          what the agent returns.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          You have this task: &ldquo;Go to Hacker News and summarize what is
          happening.&rdquo; Identify at least two problems with this framing. Rewrite
          it as a better task string. State what stopping condition you added
          and why.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          A run produces a history where <code>evaluation_previous_goal</code>{" "}
          reads &ldquo;Success&rdquo; at step 12 but the <code>next_goal</code>{" "}
          at step 12 is identical to <code>next_goal</code> at step 9. What
          failure mode is this, and what would you check next to confirm?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Explain in two sentences why the <code>memory</code> field in{" "}
          <code>AgentOutput</code> is more reliable for carrying information
          across a long run than relying on older browser-state summaries
          remaining in the message history.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="14-going-deeper">
        14. Going deeper
      </AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet (this week).</strong> You will take a
          deliberately flaky agent and task, diagnose the failure from its
          history, and make it pass reliably by reframing the task and adding
          guards. Bring the reading to section.
        </li>
        <li>
          <strong>Week 8 Lecture 1.</strong> Loop detection mechanics, reading
          failures from the history in real time, and the max_steps vs.
          max_failures tradeoff in practice.
        </li>
        <li>
          <strong>Week 8 Lecture 2.</strong> The planning layer in depth,
          PlanItem lifecycle, and when to split a task into multiple agents.
        </li>
        <li>
          <strong>Week 9 reading.</strong> Evaluation and the wider ecosystem.
          The reliability work this week feeds directly into week 9&apos;s question:
          how do you measure whether an agent is reliable enough to deploy?
        </li>
        <li>
          <strong>browser_use/agent/views.py</strong> in the repo. Read the{" "}
          <code>AgentOutput</code>, <code>AgentBrain</code>, and{" "}
          <code>PlanItem</code> class definitions directly. The field names and
          types are the authoritative source for what the agent can express
          each step.
        </li>
      </ul>

      <Takeaways>
        <li>
          Agents fail in three modes: looping (same action repeated), stalling
          (page does not change), and erroring (action throws). Each mode
          appears differently in the history and requires a different fix.
        </li>
        <li>
          Loop detection (<code>loop_detection_enabled</code>) watches a sliding
          window of recent steps. <code>max_steps</code> is the hard ceiling.{" "}
          <code>max_failures</code> stops consecutive error cascades. All three
          are needed.
        </li>
        <li>
          <code>final_response_after_failure=True</code> forces a final LLM
          call that produces a structured <code>done</code> action even from a
          failed run. This gives you diagnostic information instead of a silent
          abort.
        </li>
        <li>
          The <code>memory</code> field in <code>AgentOutput</code> is the
          agent&apos;s working note across steps. It survives the message-history
          trim that older browser-state summaries do not.
        </li>
        <li>
          Task framing affects reliability more than parameter tuning. A clear
          starting point, stopping condition, expected scope, and failure hint
          each reduce the number of steps the agent wastes on ambiguity.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          browser-use contributors (2026).{" "}
          <em>browser_use/agent/service.py</em>.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py
          </a>
          . The agent run loop: loop detection implementation, failure counting,
          max_steps handling, and forced done on failure.
        </p>
        <p>
          browser-use contributors (2026).{" "}
          <em>browser_use/agent/views.py</em>.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py
          </a>
          . Pydantic models for AgentOutput, AgentBrain (evaluation_previous_goal,
          memory, next_goal), AgentState, PlanItem, and AgentHistoryList.
        </p>
        <p>
          browser-use team (2026).{" "}
          <em>Browser Use docs: Agent Settings</em>.{" "}
          <a
            href="https://docs.browser-use.com/customize/agent-settings"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/agent-settings
          </a>
          . Every Agent constructor parameter: max_steps, max_failures,
          final_response_after_failure, loop_detection_enabled,
          loop_detection_window, enable_planning, and related reliability settings.
        </p>
        <p>
          browser-use team, Gregor Žunič (2026).{" "}
          <em>The Bitter Lesson of Agent Frameworks</em>.{" "}
          <a
            href="https://browser-use.com/posts/bitter-lesson-agent-frameworks"
            target="_blank"
            rel="noopener noreferrer"
          >
            browser-use.com/posts/bitter-lesson-agent-frameworks
          </a>
          . Argues for a minimal loop with a maximal action space; the origin
          of the &ldquo;start with maximal capability, then restrict&rdquo; design
          principle.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk08ReadingSearchBody =
  "loop detection repeated actions stagnant page max_steps max_failures final_response_after_failure agent history evaluation_previous_goal memory procedural memory next_goal AgentOutput AgentBrain PlanItem enable_planning planner replan stall task framing task decomposition stopping condition bitter lesson minimal loop maximal action space reliability browser-use week 8 reading making agents reliable";
