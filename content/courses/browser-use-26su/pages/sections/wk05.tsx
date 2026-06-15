import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk05SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="following-one-click-through-the-loop">
        Section: Following one click through the loop
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 5 · Hands-on worksheet</p>

      <p>
        By the end of this session you will have traced a single click action
        from an <code>AgentOutput</code> through the tools registry to the
        browser page and watched the <code>ActionResult</code> return to the
        loop. You will also observe multi-act in a form-filling scenario and
        see the terminates_sequence abort rule fire live. Every part builds on
        the prior one; do them in order.
      </p>

      <p>
        All code runs against a real browser via Playwright. Set your{" "}
        <code>OPENAI_API_KEY</code> (or whichever LLM key you use) before
        starting. The tasks deliberately use simple, stable pages to keep the
        session short.
      </p>

      <AnchorHeading as="h2" id="part-0-retrieval-drill">
        Part 0: Retrieval drill (5 minutes)
      </AnchorHeading>

      <p>
        Answer the following five questions from memory. Write your answers
        before looking at any source. The goal is recall, not accuracy on the
        first attempt. You will check them against the week 4 reading after
        Part 3.
      </p>

      <ol>
        <li>
          <strong>Name the four fields of AgentOutput.</strong>{" "}
          Write each field name and one phrase describing what it contains.
          Do not look at views.py yet.
        </li>
        <li>
          <strong>What does evaluation_previous_goal contain?</strong>{" "}
          Write one sentence: who fills it in, and when?
        </li>
        <li>
          <strong>What does the memory field carry?</strong>{" "}
          Explain in one sentence how it differs from extracted_content in
          an ActionResult.
        </li>
        <li>
          <strong>What is the action field's type in AgentOutput?</strong>{" "}
          Is it a single item or a list? What does that imply about what the
          agent can do in one step?
        </li>
        <li>
          <strong>How does the LLM know what actions are available?</strong>{" "}
          Name the method or mechanism (from week 4 or the week 5 reading) that
          puts action names and descriptions into the system prompt.
        </li>
      </ol>

      <p>
        Set your answers aside and proceed without checking.
      </p>

      <AnchorHeading as="h2" id="part-1-inspect-the-registry">
        Part 1: Inspect the registry before the agent runs (20 minutes)
      </AnchorHeading>

      <p>
        Before running any task, open the registry and read its contents.
        This tells you exactly what the LLM will see in its prompt.
      </p>

      <p>
        <strong>Step 1.</strong> Install browser-use if you have not already:
      </p>
      <pre>{`pip install browser-use
playwright install chromium`}</pre>

      <p>
        <strong>Step 2.</strong> Run this script and read the output carefully.
      </p>
      <pre>{`import asyncio
from browser_use import Tools
from browser_use.llm import ChatOpenAI

tools = Tools()

# The default Tools instance already has the built-in actions registered.
# Inspect the registry directly.
registry = tools.registry

print("=== Registered actions ===")
for name, registered in registry.registry.items():
    terminates = getattr(registered, "terminates_sequence", False)
    print(f"  {name}: {registered.description[:60]}...")
    print(f"    terminates_sequence={terminates}")
    if registered.param_model:
        fields = list(registered.param_model.model_fields.keys())
        print(f"    params: {fields}")
    print()`}</pre>

      <p>
        <strong>Step 3.</strong> From the output, answer these questions in
        your notes:
      </p>
      <ol>
        <li>
          Which actions have <code>terminates_sequence=True</code>? List them.
          Do they match the list from the reading (navigate, go back, search)?
        </li>
        <li>
          Find the <code>extract_content</code> (or similarly named) action.
          What parameters does its <code>param_model</code> expect?
        </li>
        <li>
          Find the <code>done</code> action. What parameters does it take?
        </li>
        <li>
          Call <code>registry.get_prompt_description()</code> with no
          arguments (or an empty URL). Print the result. This is the text that
          goes into the LLM's system prompt.
        </li>
      </ol>

      <p>
        <strong>Deliverable:</strong> Your notes with the three answers above
        and the printed prompt description.
      </p>

      <AnchorHeading as="h2" id="part-2-trace-one-click">
        Part 2: Trace one click from AgentOutput to the page (25 minutes)
      </AnchorHeading>

      <p>
        Run an agent against a simple page and instrument it so you can
        observe each dispatch. The target page is{" "}
        <code>https://example.com</code>. The task is to click the "More
        information..." link.
      </p>

      <p>
        <strong>Step 4.</strong> Write and run the following instrumented agent.
      </p>
      <pre>{`import asyncio
from browser_use import Agent, BrowserSession
from browser_use.llm import ChatOpenAI

async def main():
    session = BrowserSession(headless=False)
    llm = ChatOpenAI(model="gpt-4o-mini")

    agent = Agent(
        task='Go to https://example.com and click the "More information..." link.',
        llm=llm,
        browser_session=session,
        max_steps=5,
    )

    # Instrument: wrap step() to print actions and results
    _original_step = agent.step

    async def instrumented_step(*args, **kwargs):
        step_result = await _original_step(*args, **kwargs)
        history = agent.state.history.history
        if history:
            last = history[-1]
            if last.model_output and last.model_output.action:
                for act in last.model_output.action:
                    print(f"[DISPATCH] action: {act}")
            if last.result:
                for r in last.result:
                    print(f"[RESULT]   extracted_content={r.extracted_content!r}")
                    print(f"           error={r.error!r}")
                    print(f"           is_done={r.is_done}")
        return step_result

    agent.step = instrumented_step

    result = await agent.run()
    print("\\nFinal result:", result)

asyncio.run(main())`}</pre>

      <p>
        <strong>Step 5.</strong> Read the terminal output and answer these
        questions in your notes:
      </p>
      <ol>
        <li>
          On which step did the click action appear in the output? What was
          the element index the LLM chose?
        </li>
        <li>
          What did the <code>ActionResult</code> carry after the click?
          Was <code>extracted_content</code> set? Was <code>error</code> set?
        </li>
        <li>
          Look at the step after the click. In that step's{" "}
          <code>[DISPATCH]</code> output, did the agent emit the{" "}
          <code>done</code> action? What did its <code>is_done</code> flag
          show in the result?
        </li>
        <li>
          How many total steps did the agent take? Why might it take more
          than one step even for a task this simple?
        </li>
      </ol>

      <p>
        <strong>Deliverable:</strong> Terminal output saved and four questions
        answered in your notes.
      </p>

      <AnchorHeading as="h2" id="part-3-multi-act-and-terminates-sequence">
        Part 3: Observe multi-act and the terminates_sequence abort (25 minutes)
      </AnchorHeading>

      <p>
        Now run a task that triggers multi-act (filling two form fields at
        once) and then one that shows the terminates_sequence abort. This
        reuses the selector-map knowledge from week 3.
      </p>

      <p>
        <strong>Step 6: Multi-act form fill.</strong> The DuckDuckGo homepage
        has a single search input, but you can ask the agent to type text and
        then press Enter in the same step.
      </p>
      <pre>{`agent = Agent(
    task=(
        "Go to https://duckduckgo.com. "
        "Type 'browser-use python' in the search box and press Enter."
    ),
    llm=llm,
    browser_session=session,
    max_steps=5,
    max_actions_per_step=4,  # allow up to 4 actions per step
)`}</pre>

      <p>
        After running, check your instrumented output:
      </p>
      <ol>
        <li>
          Did the agent emit more than one action in any single step? If so,
          which actions appeared together?
        </li>
        <li>
          Did the sequence stop early (terminates_sequence) at any point?
          Which action triggered it?
        </li>
      </ol>

      <p>
        <strong>Step 7: terminates_sequence abort, explicit.</strong>{" "}
        Set <code>max_actions_per_step=4</code> and give the agent a task that
        should produce a navigate action mid-list. A reliable way to observe
        this is to reduce <code>max_steps=3</code> and ask the agent to
        navigate to two pages in a row. The second navigate should be skipped
        after the first.
      </p>
      <pre>{`agent = Agent(
    task=(
        "Navigate to https://example.com, then immediately navigate "
        "to https://iana.org/domains/reserved. After that, click the "
        "first link on the page."
    ),
    llm=llm,
    browser_session=session,
    max_steps=4,
    max_actions_per_step=4,
)`}</pre>

      <p>
        Look at the instrumented output and note:
      </p>
      <ol start={3}>
        <li>
          If both navigates appeared in the same step's action list, which
          one executed and which was skipped? If the agent split them across
          steps, note that too: the model may have learned to avoid the abort.
        </li>
        <li>
          How does the next step's <code>evaluation_previous_goal</code>{" "}
          field reflect what happened? (You may need to print{" "}
          <code>last.model_output.evaluation_previous_goal</code> in the
          instrumented wrapper.)
        </li>
      </ol>

      <p>
        <strong>Deliverable:</strong> Answers to all four questions above,
        with the relevant lines from your terminal output pasted in.
      </p>

      <AnchorHeading as="h2" id="part-4-interleave-week-3-browser-state">
        Part 4: Interleave from week 3 - compare browser state before and
        after dispatch (15 minutes)
      </AnchorHeading>

      <p>
        In week 3 you configured a <code>BrowserSession</code> and inspected
        the browser-state summary it produces. Here you will use that same
        skill to compare the state before and after a single click dispatch,
        making the connection between an action and the state change it
        produces visible.
      </p>

      <p>
        <strong>Step 8.</strong> Add state-capture calls around the click step.
      </p>
      <pre>{`import asyncio
from browser_use import Agent, BrowserSession
from browser_use.llm import ChatOpenAI

async def main():
    session = BrowserSession(headless=False)
    llm = ChatOpenAI(model="gpt-4o-mini")

    # Navigate to a page manually before the agent runs
    await session.start()
    await session.navigate_to("https://example.com")

    # Capture state BEFORE the agent acts
    state_before = await session.get_state_summary(cache_clickable_elements_hashes=False)
    print("URL before:", state_before.url)
    print("Element count before:", len(state_before.selector_map.map) if state_before.selector_map else 0)

    agent = Agent(
        task='Click the "More information..." link.',
        llm=llm,
        browser_session=session,
        max_steps=3,
    )

    await agent.run()

    # Capture state AFTER the click
    state_after = await session.get_state_summary(cache_clickable_elements_hashes=False)
    print("URL after:", state_after.url)
    print("Element count after:", len(state_after.selector_map.map) if state_after.selector_map else 0)

asyncio.run(main())`}</pre>

      <p>
        <strong>Step 9.</strong> Answer in your notes:
      </p>
      <ol>
        <li>
          Did the URL change after the click? Why or why not (the link on
          example.com goes to iana.org)?
        </li>
        <li>
          Did the element count in the selector map change between
          before and after? What does a changed count tell you about why
          the agent must re-run the perceive step after each navigate?
        </li>
        <li>
          Look at the element indices in <code>state_before.selector_map</code>.
          Find the index of the "More information..." link. Does it match the
          index the agent chose in your Part 2 output? Why should it?
        </li>
      </ol>

      <p>
        <strong>Deliverable:</strong> Three questions answered with specific
        values from your output.
      </p>

      <p>
        <strong>Now check your Part 0 answers.</strong> Open the week 4
        reading and verify each of the five retrieval-drill answers. Mark each
        as correct, partially correct, or wrong, and write one sentence for
        any wrong answer explaining what you missed.
      </p>

      <AnchorHeading as="h2" id="self-grading-rubric">
        Self-grading rubric
      </AnchorHeading>

      <p>
        Score each item 1, 2, or 3. This rubric is for you.
      </p>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Standard for a 3</th>
            <th>Your score (1-3)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Retrieval drill</td>
            <td>
              All five answered from memory before checking; each annotated
              after checking.
            </td>
            <td>___</td>
          </tr>
          <tr>
            <td>Registry inspection (Part 1)</td>
            <td>
              Three questions answered with specific values from your output;
              prompt description printed and read.
            </td>
            <td>___</td>
          </tr>
          <tr>
            <td>Click trace (Part 2)</td>
            <td>
              Terminal output saved; four questions answered with specific step
              numbers, index values, and field contents.
            </td>
            <td>___</td>
          </tr>
          <tr>
            <td>Multi-act and terminates_sequence (Part 3)</td>
            <td>
              Four questions answered; at least one observation of
              terminates_sequence aborting a queued action, or a note
              explaining why the model avoided it.
            </td>
            <td>___</td>
          </tr>
          <tr>
            <td>Browser-state comparison (Part 4)</td>
            <td>
              Before and after URL and element counts recorded; index match
              between state_before and agent's dispatch confirmed or explained.
            </td>
            <td>___</td>
          </tr>
        </tbody>
      </table>

      <p>
        Score scale: 3 = complete and specific, 2 = complete but vague, 1 =
        incomplete. Target: 13 out of 15 before week 6.
      </p>

      <AnchorHeading as="h2" id="what-you-leave-with">
        What you should leave with
      </AnchorHeading>

      <ul>
        <li>
          A printed list of all registered built-in actions, their{" "}
          <code>terminates_sequence</code> flags, and their parameter names.
        </li>
        <li>
          Terminal output showing at least one click dispatched by name,
          validated by Pydantic, and returning an <code>ActionResult</code>.
        </li>
        <li>
          At least one observation of the terminates_sequence abort stopping
          a queued action (or a note on why the model avoided queuing them
          together).
        </li>
        <li>
          Before-and-after browser-state snapshots showing how a navigate
          action changes the selector map.
        </li>
        <li>
          Your Part 0 answers annotated as correct / partially correct / wrong.
        </li>
      </ul>
    </>
  );
}

export const wk05SectionSearchBody =
  "tools registry inspect RegisteredAction terminates_sequence multi_act form fill click trace AgentOutput dispatch ActionResult browser state selector map before after retrieval drill AgentOutput fields evaluation_previous_goal memory action list week 5 section worksheet browser-use";
