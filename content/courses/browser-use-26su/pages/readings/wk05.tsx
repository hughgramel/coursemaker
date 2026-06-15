import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk05Reading() {
  return (
    <ReadingPage
      id="wk05-tools-registry"
      title="Week 5: The tools registry and how actions reach the page"
      kicker="Browser Use: How LLM Agents Drive the Web · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading traces the full path an action takes from the moment the
          LLM writes it into an <code>AgentOutput</code> to the moment the
          browser executes it and an <code>ActionResult</code> returns to the
          loop. Along the way it covers the <code>Tools</code> registry, each
          built-in action, how registered actions become the structured choices
          the LLM sees, multi-step dispatch within a single agent step, and
          how dependencies such as the browser session reach action handlers
          without the caller passing them explicitly.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You should be comfortable
          with <code>AgentOutput</code> and its fields (<code>action</code>,{" "}
          <code>evaluation_previous_goal</code>, <code>memory</code>,{" "}
          <code>next_goal</code>) from week 4. You should know what a{" "}
          <code>BrowserSession</code> is and what it manages (week 3), and you
          should understand the selector map and element indices the agent uses
          to refer to interactive elements (week 2).
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-where-we-are">
        1. Where we are in the loop
      </AnchorHeading>
      <p>
        The perceive-decide-act loop has three moves. By the end of week 4 you
        understood the decide move in detail: the <code>MessageManager</code>{" "}
        assembles a prompt, the LLM replies with a Pydantic-validated{" "}
        <code>AgentOutput</code>, and the <code>action</code> field carries a
        list of one or more actions to run. This week is about the act move:
        what happens to that list.
      </p>
      <p>
        The act move has two jobs. First, each action name and its parameters
        must be matched to a handler function. Second, each handler must be
        called in the right order, with the right arguments, and its result
        must be returned to the loop so the next step can see what happened.
        Both jobs are performed by the tools registry and the dispatch layer
        in <code>browser_use/agent/service.py</code> (browser-use contributors,
        2026).
      </p>

      <AnchorHeading as="h2" id="2-the-tools-registry">
        2. The Tools registry
      </AnchorHeading>
      <p>
        The <code>Tools</code> object (imported as{" "}
        <code>from browser_use import Tools</code>) holds an{" "}
        <code>ActionRegistry</code> that maps action names to{" "}
        <code>RegisteredAction</code> objects. Each{" "}
        <code>RegisteredAction</code> stores four things: the action's name,
        a human-readable description, the handler function to call, and a
        Pydantic <code>param_model</code> that describes the parameters the
        handler expects (browser-use contributors, 2026,{" "}
        <code>browser_use/tools/registry/views.py</code>).
      </p>
      <p>
        The registry is not fixed at import time. You can add actions to it by
        calling the <code>@tools.action()</code> decorator on any async Python
        function. The built-in actions are registered the same way, on a
        default <code>Tools</code> instance the agent creates internally. When
        you pass your own <code>tools=tools</code> to the{" "}
        <code>Agent</code> constructor, your registry is merged with (or
        replaces, depending on configuration) the built-in one (browser-use
        team, 2026, docs: Custom Functions).
      </p>
      <p>
        One additional field on <code>RegisteredAction</code> matters for
        dispatch: <code>terminates_sequence</code>. Actions that are known to
        change the page state (navigate, search, go back) carry{" "}
        <code>terminates_sequence=True</code>. The dispatch layer uses this
        flag to decide whether to continue executing the remaining queued
        actions in a multi-act step (covered in section 7).
      </p>
      <p>
        An optional <code>domains</code> list on a registered action restricts
        when the action appears. When the registry is asked for the available
        actions at a given URL, it filters out any action whose{" "}
        <code>domains</code> list does not match the current origin. This
        means the LLM only sees actions that are valid on the current page
        (browser-use contributors, 2026,{" "}
        <code>browser_use/tools/registry/views.py</code>).
      </p>

      <AnchorHeading as="h2" id="3-how-descriptions-reach-the-llm">
        3. How action descriptions reach the LLM
      </AnchorHeading>
      <p>
        The LLM cannot call a function directly. It chooses an action by name
        and fills in its parameters based on the descriptions it read in the
        system prompt. The registry's{" "}
        <code>get_prompt_description()</code> method generates that text. For
        each registered action that is available at the current URL, it emits
        a line in this format:
      </p>
      <pre>{`action_name: description. (param1=type, param2=type, ...)`}</pre>
      <p>
        When no URL is provided (as in the system prompt, which is constructed
        before the agent visits any page), the method returns only actions
        that have no domain filter. Domain-restricted actions appear only in
        the per-step dynamic context when the agent is actually on a matching
        page (browser-use contributors, 2026,{" "}
        <code>browser_use/tools/registry/views.py</code>).
      </p>
      <p>
        The description field on each registered action is not optional. The
        docs are explicit: "the LLM uses this to decide when to call it"
        (browser-use team, 2026, docs: Custom Functions). A vague description
        produces missed or mis-timed action choices. A precise description
        (naming the precondition, the expected effect, and any limits) helps
        the model pick the right action at the right step.
      </p>
      <Callout title="ActionModel: the structured choice">
        <p>
          The registry's registered actions are also used to build the{" "}
          <code>ActionModel</code>: a dynamically constructed Pydantic model
          where each registered action becomes an optional field. The LLM's
          response is validated against <code>ActionModel</code> via function
          calling. If the model writes an action name that is not in the
          registry, or fills a parameter with the wrong type, validation fails
          and the step is marked as an error (browser-use contributors, 2026,{" "}
          <code>browser_use/agent/service.py</code>).
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-built-in-actions">
        4. Built-in actions
      </AnchorHeading>
      <p>
        browser-use ships a set of built-in actions that cover the most common
        browser interactions. The agent can complete most web tasks using only
        these. (browser-use team, 2026, docs: Agent Settings; browser-use
        contributors, 2026, <code>browser_use/agent/service.py</code>.)
      </p>

      <AnchorHeading as="h3" id="4-click">Click</AnchorHeading>
      <p>
        Parameters: <code>index: int</code>. Clicks the interactive element
        with that index in the current selector map. The element index is the
        integer assigned by the DOM service during the perceive step (week 2).
        The agent does not write a CSS selector or XPath; it writes a number.
      </p>

      <AnchorHeading as="h3" id="4-type">Type / input text</AnchorHeading>
      <p>
        Parameters: <code>index: int</code>, <code>text: str</code>. Focuses
        the element at that index and types the text. Used for search boxes,
        form fields, and any editable input.
      </p>

      <AnchorHeading as="h3" id="4-scroll">Scroll</AnchorHeading>
      <p>
        Parameters: <code>index: int | None</code>,{" "}
        <code>direction: str</code>, <code>amount: int</code>. Scrolls the
        viewport or a specific element. Used to bring off-screen elements into
        view so subsequent steps can interact with them.
      </p>

      <AnchorHeading as="h3" id="4-navigate">Navigate / go to URL</AnchorHeading>
      <p>
        Parameters: <code>url: str</code>. Navigates the browser to an
        absolute URL. Carries <code>terminates_sequence=True</code> because
        navigating changes the page entirely, invalidating the current
        selector map.
      </p>

      <AnchorHeading as="h3" id="4-go-back">Go back</AnchorHeading>
      <p>
        No required parameters. Presses the browser's back button. Also
        terminates_sequence because the page changes.
      </p>

      <AnchorHeading as="h3" id="4-search">Search</AnchorHeading>
      <p>
        Parameters: <code>query: str</code>. Performs a web search using the
        configured search engine. Carries <code>terminates_sequence=True</code>.
      </p>

      <AnchorHeading as="h3" id="4-extract-content">Extract content</AnchorHeading>
      <p>
        Parameters: <code>goal: str</code>. Asks the agent's LLM (via the{" "}
        <code>page_extraction_llm</code> dependency) to read the current page
        and extract information relevant to <code>goal</code>. Returns the
        extracted text in <code>ActionResult.extracted_content</code>. This is
        the primary way the agent reads data from a page rather than acting on
        it.
      </p>

      <AnchorHeading as="h3" id="4-tabs">Switch tab / open tab</AnchorHeading>
      <p>
        Switch tab parameters: <code>tab_id: int</code>. Open tab parameters:
        <code>url: str | None</code>. These manage the browser's tab list,
        allowing the agent to work across multiple pages.
      </p>

      <AnchorHeading as="h3" id="4-done">Done</AnchorHeading>
      <p>
        Parameters: <code>text: str</code>,{" "}
        <code>success: bool</code>. The agent emits this action when it
        believes the task is complete (or when it concludes the task cannot be
        completed). The handler sets <code>ActionResult.is_done=True</code>.
        The loop checks this flag after each step and exits when it is true.
        The <code>success</code> field records whether the agent reports the
        task as completed successfully or not.
      </p>
      <Callout title="Constraint: success requires is_done">
        <p>
          The <code>ActionResult</code> Pydantic model enforces a validator:
          <code>success=True</code> can only be set when{" "}
          <code>is_done=True</code> (browser-use contributors, 2026,{" "}
          <code>browser_use/agent/views.py</code>). An action cannot report
          success without also declaring the task done. This prevents a
          handler from accidentally signaling completion while the loop
          should continue.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="5-actionresult">
        5. ActionResult in detail
      </AnchorHeading>
      <p>
        Every action handler returns an <code>ActionResult</code>. The fields
        that matter most for the loop (browser-use contributors, 2026,{" "}
        <code>browser_use/agent/views.py</code>):
      </p>
      <ul>
        <li>
          <code>extracted_content: str | None</code>. Text extracted from the
          page or produced by an action. This content appears in the next
          step's context so the LLM can reason about what it found.
        </li>
        <li>
          <code>long_term_memory: str | None</code>. A note the agent should
          carry across many steps. Unlike <code>extracted_content</code>, which
          is short-lived, this field is designed to persist across the step
          window limit.
        </li>
        <li>
          <code>error: str | None</code>. If set, the action failed. The
          loop counts this failure against <code>max_failures</code>.
        </li>
        <li>
          <code>is_done: bool | None</code>. Signals the loop to stop. Set
          by the <code>done</code> built-in.
        </li>
        <li>
          <code>success: bool | None</code>. Records whether the task ended
          successfully. Only meaningful when <code>is_done=True</code>.
        </li>
        <li>
          <code>include_in_memory: bool</code>. When true, the result is
          written into the agent's persistent memory, not just the current
          step's context.
        </li>
      </ul>
      <p>
        The result of each action in a step is collected and then made
        available to the LLM in the next step's browser-state context. The
        <code>MessageManager</code> (week 4) includes this result text when
        assembling the next prompt, which is how the agent knows what the
        previous step accomplished.
      </p>

      <AnchorHeading as="h2" id="6-one-click-traced">
        6. Following one click through the loop
      </AnchorHeading>
      <p>
        Here is the path a single click takes, from the LLM's decision to the
        page and back. Suppose the agent's task is to find the price of a
        laptop on an e-commerce page. The perceive step ran and the DOM service
        numbered the "Add to cart" button as element 7.
      </p>
      <p>
        <strong>Step 1: LLM decides.</strong> The <code>MessageManager</code>{" "}
        assembled the browser-state summary (URL, title, serialized DOM,
        selector map) and the agent's history into a prompt. The LLM replies
        with an <code>AgentOutput</code> that includes{" "}
        <code>action=[{"{"}"click": {"{"}"index": 7{"}"}{"}"}]</code>.
        Pydantic validates this against the <code>ActionModel</code>. The
        action name "click" is known; the parameter <code>index: int</code>{" "}
        is present and valid.
      </p>
      <p>
        <strong>Step 2: Registry lookup.</strong> The dispatch layer looks up
        "click" in the <code>ActionRegistry</code>. It finds the{" "}
        <code>RegisteredAction</code> for click, retrieves the handler
        function, and passes the validated <code>index=7</code> parameter.
      </p>
      <p>
        <strong>Step 3: Handler executes.</strong> The click handler receives
        the index and asks the <code>BrowserSession</code> to look up element
        7 in the selector map. The session resolves the index to the
        underlying DOM node and fires a Playwright click on that element.
      </p>
      <p>
        <strong>Step 4: ActionResult returns.</strong> The handler returns an{" "}
        <code>ActionResult</code>. If the click succeeded, <code>error</code>{" "}
        is None. The result is appended to the step's result list.
      </p>
      <p>
        <strong>Step 5: Next step begins.</strong> The loop re-enters the
        perceive step. A new browser-state summary is captured. The previous{" "}
        <code>ActionResult</code> (or a summary of it) appears in the next
        step's prompt under <code>evaluation_previous_goal</code>, giving the
        LLM a record of what just happened.
      </p>
      <pre>{`# Minimal instrumentation: print each action and its result
import asyncio
from browser_use import Agent, BrowserSession
from browser_use.llm import ChatOpenAI

async def main():
    session = BrowserSession(headless=False)
    agent = Agent(
        task="Find the price of the first laptop on amazon.com",
        llm=ChatOpenAI(model="gpt-4o"),
        browser_session=session,
    )

    # Hook into the step callback to observe dispatch
    original_step = agent.step

    async def instrumented_step(*args, **kwargs):
        result = await original_step(*args, **kwargs)
        # agent.state.history[-1] holds the last step
        last = agent.state.history.history[-1]
        if last.model_output:
            for act in last.model_output.action:
                print("Action dispatched:", act)
        if last.result:
            for r in last.result:
                print("  => result:", r.extracted_content or r.error)
        return result

    agent.step = instrumented_step
    await agent.run()

asyncio.run(main())`}</pre>
      <p>
        The instrumentation above wraps the step method and prints each
        dispatched action alongside its <code>ActionResult</code>. Running
        this against a real task shows the registry lookup and result in your
        terminal for every step.
      </p>

      <AnchorHeading as="h2" id="7-multi-act">
        7. Multi-act: several actions per step
      </AnchorHeading>
      <p>
        The <code>action</code> field of <code>AgentOutput</code> is a list.
        The agent can emit more than one action in a single step, and the
        dispatch layer executes them in order. The agent settings call this
        behavior multi-act, and the parameter <code>max_actions_per_step</code>{" "}
        (default: 4) controls how many can appear (browser-use team, 2026,
        docs: Agent Settings).
      </p>
      <p>
        The documentation gives form filling as the motivating example: the
        agent can output four field-fill actions at once, which is faster
        than one field per step and also reduces the number of round-trips
        to the LLM.
      </p>
      <p>
        Multi-act does not execute unconditionally. The dispatch layer respects
        the <code>terminates_sequence</code> flag on each action. When an
        action with <code>terminates_sequence=True</code> executes, the
        remaining queued actions in that step are skipped. This is the correct
        behavior: if the second of four queued actions navigates to a new page,
        the element indices from the original page are no longer valid, so
        running the third and fourth actions would interact with the wrong
        elements or fail entirely (browser-use contributors, 2026,{" "}
        <code>browser_use/tools/registry/views.py</code>).
      </p>
      <pre>{`# Example: agent emits two type actions in one step (form filling)
# AgentOutput.action might look like:
[
    {"input_text": {"index": 3, "text": "John"}},
    {"input_text": {"index": 4, "text": "john@example.com"}},
]
# Both execute because neither terminates_sequence.

# If instead the agent emits:
[
    {"input_text": {"index": 3, "text": "John"}},
    {"go_to_url": {"url": "https://example.com/confirm"}},
    {"click": {"index": 1}},
]
# go_to_url has terminates_sequence=True.
# input_text executes, go_to_url executes, click is SKIPPED.`}</pre>

      <AnchorHeading as="h2" id="8-parameter-injection">
        8. Parameter injection by name
      </AnchorHeading>
      <p>
        Action handlers often need access to the browser session, the agent's
        LLM, or the file system. Requiring the caller to pass these explicitly
        would couple every action to the agent's internal state. Instead,
        browser-use uses parameter injection by name: when the dispatch layer
        calls a handler, it inspects the handler's parameter names and
        supplies matching objects from the agent's context automatically
        (browser-use team, 2026, docs: Custom Functions).
      </p>
      <p>
        The injectable names, exact spelling required:
      </p>
      <ul>
        <li>
          <code>browser_session: BrowserSession</code>. The active session,
          giving the handler access to the Playwright page, CDP client, and
          the selector map.
        </li>
        <li>
          <code>page_extraction_llm: BaseChatModel</code>. The agent's
          configured LLM, usable inside the handler to make additional model
          calls (for example, to classify extracted text).
        </li>
        <li>
          <code>file_system: FileSystem</code>. An interface for reading and
          writing files, used when the agent downloads or produces files.
        </li>
        <li>
          <code>available_file_paths: list[str]</code>. The list of files
          currently accessible to the agent.
        </li>
        <li>
          <code>has_sensitive_data: bool</code>. True if the agent was given
          sensitive-data placeholders (covered in week 6).
        </li>
        <li>
          <code>cdp_client</code>. A direct Chrome DevTools Protocol client
          for low-level browser control.
        </li>
      </ul>
      <p>
        The injection is name-based, not type-based. Naming a parameter{" "}
        <code>session: BrowserSession</code> instead of{" "}
        <code>browser_session: BrowserSession</code> will not inject anything:
        the parameter will be unset and the handler will likely fail silently.
        The docs call this "the most common cause of tools failing silently"
        (browser-use team, 2026, docs: Custom Functions).
      </p>
      <p>
        Parameters that are not in the injection list are treated as
        LLM-supplied parameters. The LLM fills them when it chooses the action.
        This is how the <code>index</code> in a click action reaches the
        handler: the LLM writes the number, Pydantic validates it, and the
        dispatch layer passes it as a normal function argument.
      </p>
      <pre>{`from browser_use import Tools, ActionResult
from browser_use.browser.session import BrowserSession

tools = Tools()

@tools.action(description="Read the current page title from the DOM")
async def get_page_title(browser_session: BrowserSession) -> ActionResult:
    # browser_session is injected by name; the LLM does not supply it.
    title = await browser_session.get_title()
    return ActionResult(extracted_content=f"Page title: {title}")

# The LLM calls this action with no parameters:
# {"get_page_title": {}}
# The dispatch layer sees browser_session in the signature and injects it.`}</pre>
      <p>
        Week 6 covers writing custom actions in full, including the{" "}
        <code>@tools.action</code> decorator, typed Pydantic parameters, and
        domain restrictions. This week's focus is on understanding the
        injection mechanism so you can reason about how built-in actions
        receive their dependencies.
      </p>

      <AnchorHeading as="h2" id="9-result-to-next-step">
        9. How a result feeds the next step
      </AnchorHeading>
      <p>
        Once all actions in a step have executed (or the sequence was
        terminated early by a <code>terminates_sequence</code> action), the
        results are packaged for the next iteration of the loop. The{" "}
        <code>extracted_content</code> from each <code>ActionResult</code>{" "}
        appears in the next step's browser-state context, where the LLM can
        read it as part of its prompt.
      </p>
      <p>
        The <code>evaluation_previous_goal</code> field in the next{" "}
        <code>AgentOutput</code> is where the LLM records its own assessment
        of whether the previous step succeeded. The LLM reads the action
        results, looks at the new browser state (new URL, new DOM), and
        decides whether its previous goal was achieved. This self-evaluation
        drives the agent's sense of progress.
      </p>
      <p>
        The <code>memory</code> field in <code>AgentOutput</code> (week 4)
        is where the LLM can store notes that persist across steps. If an
        action returns data the agent will need ten steps later, the agent
        can copy it into <code>memory</code>. The{" "}
        <code>long_term_memory</code> field on <code>ActionResult</code>{" "}
        serves a similar purpose but is set by the action handler rather than
        the LLM itself: the handler decides what to persist.
      </p>

      <AnchorHeading as="h2" id="10-putting-it-together">
        10. Putting it together: one full step
      </AnchorHeading>
      <p>
        A complete step in the perceive-decide-act loop, annotated with which
        component handles each part:
      </p>
      <pre>{`# PERCEIVE
# BrowserSession captures: URL, title, serialized DOM, selector map,
# optional screenshot. (week 3)

# DECIDE
# MessageManager assembles: system prompt (with action descriptions from
# get_prompt_description()), browser-state summary, step history.
# LLM replies with AgentOutput validated against ActionModel. (week 4)

# ACT  <-- this week
# 1. dispatch layer reads AgentOutput.action (a list)
# 2. for each action in the list:
#    a. look up the RegisteredAction in the ActionRegistry by name
#    b. validate the LLM-supplied params against the param_model
#    c. inject named dependencies (browser_session, etc.)
#    d. call the handler
#    e. receive ActionResult
#    f. if result.is_done: stop the loop
#    g. if action.terminates_sequence: skip remaining actions in list
# 3. collect all ActionResults
# 4. store results; they appear in the next step's prompt`}</pre>
      <p>
        Every action the agent can take, whether built-in or custom, passes
        through exactly this path. The registry is the single point of control:
        if a name is not in the registry, the LLM cannot choose it, and even
        if the LLM somehow writes it, validation will fail.
      </p>

      <AnchorHeading as="h2" id="exercises">11. Exercises</AnchorHeading>

      <Exercise n={1}>
        <p>
          From memory, name the four fields a{" "}
          <code>RegisteredAction</code> object stores. Then explain in one
          sentence what role each field plays in the dispatch path.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          An agent step emits three actions:{" "}
          <code>input_text</code> (index 2, text "hello"),{" "}
          <code>navigate</code> (url "https://example.com"), and{" "}
          <code>click</code> (index 5). Which actions execute? Which is
          skipped, and why? Name the flag that controls this behavior and where
          it lives.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write a short action handler signature (function definition only,
          no body) that accepts a LLM-supplied <code>goal: str</code>{" "}
          parameter and an injected <code>browser_session</code>. Explain
          why the two parameters are treated differently by the dispatch layer.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          An <code>ActionResult</code> is returned with{" "}
          <code>extracted_content="Price: $129"</code> and{" "}
          <code>error=None</code>. Describe the path this content takes through
          the loop until the LLM can read it. Name the specific field in the
          next <code>AgentOutput</code> where the LLM acknowledges it.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          The <code>extract_content</code> built-in action uses the{" "}
          <code>page_extraction_llm</code> injected dependency. Explain in
          two sentences what this dependency is and why extract_content needs
          it rather than reading the DOM directly.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">
        12. Going deeper
      </AnchorHeading>
      <ul>
        <li>
          <strong>This week's section worksheet:</strong> Follow one click from{" "}
          <code>AgentOutput</code> to the page, instrument the dispatch layer,
          and observe multi-act in action.
        </li>
        <li>
          <strong>Week 6 lecture and reading:</strong> Writing custom actions
          with <code>@tools.action</code>, typed Pydantic parameters, returning{" "}
          <code>ActionResult</code>, and restricting actions with{" "}
          <code>allowed_domains</code>.
        </li>
        <li>
          <strong>
            browser_use/tools/registry/views.py (browser-use contributors,
            2026):
          </strong>{" "}
          The source for <code>RegisteredAction</code>,{" "}
          <code>ActionRegistry</code>, and <code>get_prompt_description()</code>
          . Reading this file directly is the most reliable way to understand
          what the registry does.
        </li>
        <li>
          <strong>browser-use GitHub Discussions:</strong> The community often
          posts questions about parameter injection failures; the most common
          mistake (wrong parameter name) is well-documented there.
        </li>
      </ul>

      <Takeaways>
        <li>
          The <code>Tools</code> registry maps action names to{" "}
          <code>RegisteredAction</code> objects. Each stores the name,
          description, handler function, and a Pydantic param_model.
        </li>
        <li>
          Registered actions become the <code>ActionModel</code> the LLM
          chooses from. The action descriptions reach the LLM via{" "}
          <code>get_prompt_description()</code>, one line per action, filtered
          by the current URL.
        </li>
        <li>
          Built-in actions cover click, type, scroll, navigate, go back,
          search, extract content, switch tab, open tab, and done. Actions
          that change the page carry <code>terminates_sequence=True</code>.
        </li>
        <li>
          Multi-act executes a list of actions in one step but stops when
          a <code>terminates_sequence</code> action runs, because subsequent
          element indices would be stale.
        </li>
        <li>
          Parameter injection is name-based. Parameters named{" "}
          <code>browser_session</code>, <code>page_extraction_llm</code>,{" "}
          <code>file_system</code>, and <code>available_file_paths</code>{" "}
          are supplied by the dispatch layer; all other parameters come from
          the LLM.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          browser-use contributors. (2026). browser_use/agent/service.py.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use
          </a>
          . The core run loop: state capture, message construction, structured
          decision, action dispatch, and feedback.
        </p>
        <p>
          browser-use contributors. (2026). browser_use/agent/views.py.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use
          </a>
          . The Pydantic models: AgentOutput, ActionResult, and the constraint
          that success=True requires is_done=True.
        </p>
        <p>
          browser-use contributors. (2026). browser_use/tools/registry/views.py.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/tools/registry/views.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use
          </a>
          . ActionModel construction, RegisteredAction, terminates_sequence, and
          get_prompt_description().
        </p>
        <p>
          browser-use team. (2026). Browser Use docs: Custom Functions (Tools).{" "}
          <a
            href="https://docs.browser-use.com/customize/custom-functions"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/custom-functions
          </a>
          . The @tools.action decorator, injected dependencies, and the
          description field requirement.
        </p>
        <p>
          browser-use team. (2026). Browser Use docs: Agent Settings.{" "}
          <a
            href="https://docs.browser-use.com/customize/agent-settings"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/agent-settings
          </a>
          . max_actions_per_step (default 4) and the tools parameter.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk05ReadingSearchBody =
  "tools registry registered action ActionModel ActionResult built-in actions click type scroll navigate go back search extract content switch tab open tab done terminates_sequence multi_act multi act parameter injection browser_session page_extraction_llm file_system available_file_paths get_prompt_description action descriptions LLM prompt dispatch loop extracted_content long_term_memory is_done success week 5 browser-use";
