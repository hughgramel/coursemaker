import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk04Reading() {
  return (
    <ReadingPage
      id="wk04"
      title="Week 4: The decision step and structured output"
      kicker="Browser Use: How LLM Agents Drive the Web · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers how browser-use forces the LLM to answer in a
          fixed, parseable shape instead of free text, what every field of{" "}
          <code>AgentOutput</code> is for, how the <code>MessageManager</code>{" "}
          assembles messages each step, and how the native LLM layer works now
          that LangChain is no longer a core dependency. By the end you will be
          able to read a raw <code>AgentOutput</code> JSON object and predict
          what the agent will do next.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> The perceive-decide-act loop
          from week 1. The DOM selector map and element indices from week 2.
          BrowserSession, browser-state summary, and context budget from week 3.
        </p>
      </ReadingFraming>

      {/* 1 */}
      <AnchorHeading as="h2" id="1-free-text-vs-structured-output">
        1. Free text vs structured output
      </AnchorHeading>
      <p>
        An LLM asked to control a browser could, in principle, reply in
        ordinary prose: "I think I should click the login button." The framework
        would then have to parse that prose, guess which element to act on, and
        handle the fact that two different models phrase the same intention in
        completely different ways. None of that is dependable.
      </p>
      <p>
        Structured output is the alternative. Instead of asking the model to
        describe what it wants to do, you give it a schema and require the reply
        to fill that schema exactly. The reply arrives as a validated Python
        object, not a string. The framework never has to guess: it reads a known
        field to get the action name, a known field to get the parameters, and
        dispatches directly.
      </p>
      <p>
        The practical difference is large. With free text, every change to the
        prompt risks breaking the parser. With a schema, the parser is the
        schema: if the model fills it correctly, execution proceeds; if not,
        validation fails early with a clear error, not a silent misparse
        downstream. (browser-use contributors, 2026, agent/views.py)
      </p>

      {/* 2 */}
      <AnchorHeading as="h2" id="2-pydantic-as-the-schema-language">
        2. Pydantic as the schema language
      </AnchorHeading>
      <p>
        browser-use uses{" "}
        <a
          href="https://docs.pydantic.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pydantic
        </a>{" "}
        v2 to define all its data shapes. A Pydantic model is a Python class
        that carries field declarations, types, defaults, and validators. When
        you instantiate the class with data, Pydantic checks every field against
        its type and raises a <code>ValidationError</code> if anything is wrong.
        This is exactly what you want at the boundary between an LLM and a live
        browser: the model may occasionally produce malformed output, and you
        want that caught at the schema boundary rather than silently corrupting
        state downstream.
      </p>
      <p>
        The key model in week 4 is <code>AgentOutput</code>, defined in{" "}
        <code>browser_use/agent/views.py</code>. Its class-level config includes{" "}
        <code>ConfigDict(arbitrary_types_allowed=True, extra="forbid")</code>.
        The <code>extra="forbid"</code> setting means any field the LLM sends
        that is not declared on the model causes an immediate validation error
        rather than being silently ignored. This makes the schema a hard
        contract. (browser-use contributors, 2026, agent/views.py)
      </p>
      <pre>{`# Simplified view of AgentOutput (browser_use/agent/views.py)
from pydantic import BaseModel, ConfigDict, Field

class AgentOutput(BaseModel):
    model_config = ConfigDict(arbitrary_types_allowed=True, extra="forbid")

    thinking: str | None = None
    evaluation_previous_goal: str | None = None
    memory: str | None = None
    next_goal: str | None = None
    action: list[ActionModel] = Field(..., json_schema_extra={"min_items": 1})`}</pre>
      <p>
        The <code>action</code> field requires at least one entry. A reply with
        an empty action list fails validation before it reaches the browser.
      </p>

      {/* 3 */}
      <AnchorHeading as="h2" id="3-function-calling-and-tool-calling">
        3. Function calling and tool calling
      </AnchorHeading>
      <p>
        Pydantic defines the shape, but something has to make the LLM produce
        that shape in the first place. The mechanism is function calling (also
        called tool calling, or structured outputs, depending on the provider).
        The LLM provider exposes an API parameter that accepts a JSON schema and
        constrains the model's next reply to match it. The model does not write
        text; it fills a form.
      </p>
      <p>
        The practical effect: the model's reply arrives at the framework
        already in the correct shape. Pydantic validates it, the agent reads the
        fields, and execution proceeds. If the model cannot fit its intention
        into the schema, it must either pick the closest available action or
        fail, not invent new field names.
      </p>
      <p>
        browser-use builds the JSON schema it sends to the provider from the
        Pydantic model dynamically, including only the action types registered
        in the current tools registry. Every time you add or remove a tool, the
        schema changes. (browser-use contributors, 2026, agent/service.py)
      </p>

      <Callout title="Why not just ask the model to reply in JSON?">
        You could ask the model to produce JSON in a system prompt, but the
        model might add prose before or after the JSON block, or produce
        syntactically valid JSON with unexpected fields. Function calling is
        enforced at the API level: the provider guarantees the reply matches the
        schema before returning it. The guarantee is strong enough that
        browser-use can treat the parsed output as ground truth.
      </Callout>

      {/* 4 */}
      <AnchorHeading as="h2" id="4-the-fields-of-agentoutput">
        4. The fields of AgentOutput
      </AnchorHeading>
      <p>
        <code>AgentOutput</code> has five declared fields in the current source.
        Three of them together form the agent's "cognitive state"; one is
        optional reasoning; one is the instruction.
      </p>

      <AnchorHeading as="h3" id="4a-evaluation-previous-goal">
        4a. evaluation_previous_goal
      </AnchorHeading>
      <p>
        This field contains the agent's own judgment of whether the prior step
        succeeded. On step 1 it is typically "N/A" or "this is the first step."
        On subsequent steps the model reads the browser-state summary it just
        received, compares it to what it aimed to do in the prior step, and
        writes a short assessment: "Success: the login button is now visible" or
        "Failed: the page did not navigate, still on the home page."
      </p>
      <p>
        This is procedural self-monitoring. The agent is not infallible: it can
        misjudge whether a step succeeded. But by writing the evaluation as a
        field, the framework and the operator can read it. If you see a run
        where the agent writes "Success" on a step that clearly failed, you have
        found a reasoning error to investigate.
      </p>

      <AnchorHeading as="h3" id="4b-memory">
        4b. memory
      </AnchorHeading>
      <p>
        The memory field is the agent's running note to itself. It carries
        information forward from step to step: the task it is working on, facts
        it has extracted (a story title, a page count, a username), and any
        context it needs to hold across steps that might fall out of the prompt
        window if not repeated explicitly.
      </p>
      <p>
        Because the MessageManager trims older messages to fit the context
        budget (week 3), the model cannot rely on earlier messages being present
        verbatim. Memory is the mechanism for keeping critical facts in scope:
        the agent writes them here, and the next step's prompt includes this
        field as part of the current state. (browser-use contributors, 2026,
        agent/views.py)
      </p>

      <AnchorHeading as="h3" id="4c-next-goal">
        4c. next_goal
      </AnchorHeading>
      <p>
        This is the agent's plain-English description of what it intends to
        accomplish in the current step, written before selecting the action.
        Reading next_goal and then reading the action list together lets you
        audit whether the agent chose an action that actually serves the goal it
        stated. Mismatches between next_goal and action are a common signal that
        the agent is confused about page state.
      </p>

      <AnchorHeading as="h3" id="4d-action">
        4d. action (the action list)
      </AnchorHeading>
      <p>
        The action field is a list of one or more <code>ActionModel</code>{" "}
        instances. Each <code>ActionModel</code> is itself a Pydantic model
        whose schema is built from the tools registry at agent-startup time.
        The list allows multi-act: the agent can instruct the browser to click,
        type, and scroll in a single step rather than one per step. The minimum
        length is 1; an empty list fails validation.
      </p>
      <p>
        Each entry in the list is a typed dict. The key is the action name
        (e.g. <code>click_element</code>, <code>go_to_url</code>,{" "}
        <code>input_text</code>); the value is a dict of parameters specific to
        that action. For <code>click_element</code> the parameter is{" "}
        <code>index</code>: the integer from the selector map the agent wants
        the browser to click. This is the link between the decision layer and
        the perception layer from week 2. (browser-use contributors, 2026,
        agent/views.py; agent/service.py)
      </p>

      <AnchorHeading as="h3" id="4e-thinking">
        4e. thinking (optional)
      </AnchorHeading>
      <p>
        When <code>use_thinking=True</code> (the default as of mid-2026), the
        model can write a free-text reasoning block in the thinking field before
        committing to a structured reply. This field is not acted on; it is for
        the model's internal scratchpad. With <code>flash_mode=True</code>{" "}
        (faster, simpler), the evaluation and thinking fields are stripped from
        the schema. (browser-use team, 2026, agent-settings docs)
      </p>

      {/* 5 */}
      <AnchorHeading as="h2" id="5-agent-brain-and-current-state">
        5. AgentBrain and the current_state property
      </AnchorHeading>
      <p>
        <code>AgentBrain</code> is a second Pydantic model, also defined in{" "}
        <code>browser_use/agent/views.py</code>:
      </p>
      <pre>{`class AgentBrain(BaseModel):
    thinking: str | None = None
    evaluation_previous_goal: str
    memory: str
    next_goal: str`}</pre>
      <p>
        It groups the three "cognitive state" fields. It is not what the LLM
        produces directly; it is a view object accessible through the{" "}
        <code>current_state</code> property on <code>AgentOutput</code>. The
        distinction matters: <code>AgentOutput</code> is the full schema the
        provider enforces; <code>AgentBrain</code> is a named slice of it that
        internal code can pass around without carrying the full action list.
      </p>

      {/* 6 */}
      <AnchorHeading as="h2" id="6-the-message-manager">
        6. The MessageManager and system prompt assembly
      </AnchorHeading>
      <p>
        The <code>MessageManager</code> is the component that turns everything
        the agent knows into a list of messages the LLM can consume. Each step,
        it assembles:
      </p>
      <ol>
        <li>
          <strong>The system message.</strong> A <code>SystemPrompt</code>{" "}
          object produces this. It includes the task, descriptions of all
          available actions (built from the tools registry), constraints
          (max_steps, any domain restrictions), and general instructions for how
          to fill the AgentOutput schema. You can extend it with{" "}
          <code>extend_system_message</code> or replace it entirely with{" "}
          <code>override_system_message</code>. (browser-use team, 2026,
          agent-settings docs)
        </li>
        <li>
          <strong>Prior step history.</strong> Earlier steps' inputs and outputs
          appear as alternating user/assistant messages. Older entries are
          trimmed when the total would exceed the context budget. The{" "}
          <code>max_history_items</code> parameter controls the cap explicitly.
        </li>
        <li>
          <strong>The current browser-state summary.</strong> The serialized DOM
          (with element indices), current URL, page title, and optional
          screenshot arrive as the final user message in the sequence. This is
          what the model reads to evaluate the prior step and plan the next one.
        </li>
      </ol>
      <p>
        The order matters. The system message sets the rules. History gives the
        model context about what happened. The current state gives it the raw
        material for the decision. If the system message is too long, history
        gets squeezed. If both are long, the current state may be truncated. The
        context budget from week 3 is the constraint that governs all three.
        (browser-use contributors, 2026, agent/service.py)
      </p>

      <Callout title="Saving the full conversation">
        Pass <code>save_conversation_path="./run.json"</code> to the Agent
        constructor. The file will contain the exact messages sent to the LLM
        at each step, including the assembled system prompt, history, and
        browser-state summary. Reading this file is the most direct way to see
        what the model actually received.
      </Callout>

      {/* 7 */}
      <AnchorHeading as="h2" id="7-the-native-llm-layer">
        7. The native LLM layer
      </AnchorHeading>
      <p>
        Until 2025, browser-use used LangChain as the integration layer between
        the framework and LLM providers. LangChain abstracts over many providers
        but adds a dependency chain, version friction, and abstraction overhead.
        The browser-use community moved away from this approach; the migration
        is documented in{" "}
        <a
          href="https://github.com/browser-use/browser-use/issues/2137"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub issue #2137
        </a>
        . LangChain is no longer a required dependency. (browser-use community,
        2025)
      </p>
      <p>
        In its place, browser-use ships native wrappers in{" "}
        <code>browser_use/llm</code>. Each wrapper is a thin class that speaks
        directly to one provider's API. The current list includes, among others:
      </p>
      <ul>
        <li>
          <code>ChatOpenAI</code>: OpenAI GPT-4o and related models
        </li>
        <li>
          <code>ChatAnthropic</code>: Anthropic Claude models
        </li>
        <li>
          <code>ChatGoogle</code>: Google Gemini and Gemma models
        </li>
        <li>
          <code>ChatGroq</code>: Groq's inference platform
        </li>
        <li>
          <code>ChatOllama</code>: Local Ollama models
        </li>
        <li>
          <code>ChatBrowserUse</code>: the first-party browser-use model
        </li>
        <li>
          <code>ChatDeepSeek</code>, <code>ChatMistral</code>,{" "}
          <code>ChatOpenRouter</code>, and several more
        </li>
      </ul>
      <p>
        You pass any of these directly to <code>Agent(llm=...)</code>. The
        wrapper handles authentication, streaming, and the function-calling
        interface. You do not need LangChain installed. (browser-use team, 2026,
        supported-models docs)
      </p>
      <pre>{`# Correct import path (no LangChain)
from browser_use.llm import ChatOpenAI, ChatAnthropic, ChatGoogle

# GPT-4o
agent = Agent(task="...", llm=ChatOpenAI(model="gpt-4o"))

# Claude Sonnet
agent = Agent(task="...", llm=ChatAnthropic(model="claude-3-5-sonnet-20241022"))

# Gemini Flash
agent = Agent(task="...", llm=ChatGoogle(model="gemini-2.0-flash"))`}</pre>

      <Callout title="If you see old LangChain imports">
        Code samples from 2024 and early 2025 may import from{" "}
        <code>langchain_openai</code>, <code>langchain_anthropic</code>, or
        similar. Those imports still work if you have LangChain installed, but
        they are the old path. The current path is{" "}
        <code>from browser_use.llm import ...</code>. Migrate when you see the
        old pattern.
      </Callout>

      {/* 8 */}
      <AnchorHeading as="h2" id="8-how-agentoutput-is-built-dynamically">
        8. How AgentOutput is built dynamically
      </AnchorHeading>
      <p>
        <code>AgentOutput</code> is not a single static class. At agent
        startup, the framework calls{" "}
        <code>AgentOutput.type_with_custom_actions(ActionModel)</code>, which
        creates a new subclass with the action field typed to include exactly
        the actions registered in the current tools registry. The JSON schema
        sent to the LLM via function calling reflects only those actions.
      </p>
      <p>
        This is why the LLM cannot hallucinate an action name that doesn't
        exist: the schema only lists actions the tools registry knows about. An
        agent with five built-in actions and one custom action will have a
        schema with six action types. An agent with only built-ins will have a
        smaller schema. The dynamic build also means the system prompt's action
        descriptions and the function-calling schema stay in sync automatically.
        (browser-use contributors, 2026, agent/service.py)
      </p>

      {/* 9 */}
      <AnchorHeading as="h2" id="9-inspecting-agent-history">
        9. Inspecting agent history
      </AnchorHeading>
      <p>
        After a run, <code>agent.history</code> is an{" "}
        <code>AgentHistoryList</code> whose <code>.history</code> attribute is a
        list of step records. Each record carries:
      </p>
      <ul>
        <li>
          <code>model_output</code>: the raw <code>AgentOutput</code> the model
          produced (or <code>None</code> if the step failed before the LLM
          replied)
        </li>
        <li>
          <code>result</code>: the <code>ActionResult</code> from the browser
          after the action ran
        </li>
        <li>
          <code>state</code>: the browser state (URL, title, etc.) captured
          before the LLM was called
        </li>
        <li>
          <code>metadata</code>: step number, timestamps, token counts if
          cost tracking is on
        </li>
      </ul>
      <pre>{`agent = Agent(task="...", llm=ChatOpenAI(model="gpt-4o"))
result = await agent.run()

for item in agent.history.history:
    step = item.metadata.step_number
    output = item.model_output
    if output:
        print(f"Step {step} | goal: {output.next_goal}")
        print(f"  eval: {output.evaluation_previous_goal}")
        print(f"  memory: {output.memory}")
        print(f"  actions: {[a.model_dump() for a in output.action]}")`}</pre>
      <p>
        You can also pass <code>save_conversation_path="./run.json"</code> to
        persist the full message history to disk, which is useful for debugging
        what the model actually received at each step.
      </p>

      {/* 10 */}
      <AnchorHeading as="h2" id="10-the-loop-from-this-angle">
        10. The loop from this angle
      </AnchorHeading>
      <p>
        Putting weeks 1-4 together: the perceive-decide-act loop has a concrete
        data flow. PERCEIVE ends when <code>BrowserSession</code> produces a
        browser-state summary (URL, title, serialized DOM with element indices,
        optional screenshot). DECIDE begins when <code>MessageManager</code>{" "}
        assembles system prompt, history, and that summary into messages, sends
        them to the LLM via function calling, and receives an{" "}
        <code>AgentOutput</code> validated by Pydantic. ACT begins when the
        framework reads <code>AgentOutput.action</code> and dispatches each
        entry through the tools registry (week 5 topic).
      </p>
      <p>
        The decision step is exactly the width of one <code>AgentOutput</code>{" "}
        object. Everything the agent decided is in that object. Nothing is
        implicit. This is what makes the loop inspectable: you can read any
        step's AgentOutput and reconstruct the agent's full mental state at that
        moment.
      </p>

      {/* exercises */}
      <AnchorHeading as="h2" id="exercises">
        11. Exercises
      </AnchorHeading>
      <Exercise n={1}>
        <p>
          Without looking at the source, write the five field names on{" "}
          <code>AgentOutput</code> from memory. Then open{" "}
          <code>browser_use/agent/views.py</code> and check. For any field you
          missed, write a one-sentence explanation of what it is for.
        </p>
      </Exercise>
      <Exercise n={2}>
        <p>
          <code>ConfigDict(extra="forbid")</code> appears on{" "}
          <code>AgentOutput</code>. In your own words: what would happen at
          runtime if a model returned a field named <code>reasoning</code> that
          is not declared on the class? Why is this behavior preferable to
          silently ignoring extra fields?
        </p>
      </Exercise>
      <Exercise n={3}>
        <p>
          Given this AgentOutput from step 3 of a run, predict what the agent
          will do in step 4:
        </p>
        <pre>{`{
  "evaluation_previous_goal": "Success: the search results page loaded",
  "memory": "Task: find the price of a MacBook Air on Best Buy. Search results are visible.",
  "next_goal": "Click the first MacBook Air listing in the search results",
  "action": [{"click_element": {"index": 12}}]
}`}</pre>
        <p>
          What information would you need from the selector map (week 2) to
          verify the agent is clicking the right thing?
        </p>
      </Exercise>
      <Exercise n={4}>
        <p>
          Explain why the action list on <code>AgentOutput</code> uses integer
          element indices rather than CSS selectors or XPath expressions. What
          property of the DOM service (week 2) makes this possible? What does it
          mean that the indices are ephemeral and reset each step?
        </p>
      </Exercise>
      <Exercise n={5}>
        <p>
          An older code sample imports{" "}
          <code>from langchain_openai import ChatOpenAI</code>. Rewrite the
          import line and the Agent constructor to use the current native
          wrapper. What does browser-use gain by removing the LangChain
          dependency?
        </p>
      </Exercise>

      {/* going deeper */}
      <AnchorHeading as="h2" id="going-deeper">
        12. Going deeper
      </AnchorHeading>
      <ul>
        <li>
          This week's section worksheet: capture and dissect real AgentOutput
          objects across several steps, then trace one element index back to the
          selector map.
        </li>
        <li>
          Week 5 lecture: how the tools registry dispatches the action list to
          the browser, and what an ActionResult carries back.
        </li>
        <li>
          The browser-use GitHub discussions and issues are the best place to
          track API changes as the project moves fast; the migration issue #2137
          is a good example of how the team documents breaking changes.
        </li>
      </ul>

      <Takeaways>
        <li>
          Structured output replaces free-text LLM replies with a Pydantic
          model enforced via function calling: the reply either validates or
          fails, never silently misparsed.
        </li>
        <li>
          <code>AgentOutput</code> has five fields: evaluation_previous_goal,
          memory, next_goal, action (the list), and an optional thinking field.
          Together they are the complete record of one decision step.
        </li>
        <li>
          <code>AgentBrain</code> is a view onto the three cognitive-state
          fields; it is not a separate thing the LLM produces.
        </li>
        <li>
          The <code>MessageManager</code> assembles system prompt, trimmed
          history, and the current browser-state summary into each LLM call;
          the context budget governs what fits.
        </li>
        <li>
          LangChain is no longer a required dependency. Import LLM wrappers
          from <code>browser_use.llm</code> directly.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          browser-use contributors (2026).{" "}
          <em>browser_use/agent/views.py</em>.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py
          </a>
          . Source definitions for AgentOutput, AgentBrain, and all agent data
          models.
        </p>
        <p>
          browser-use contributors (2026).{" "}
          <em>browser_use/agent/service.py</em>.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py
          </a>
          . The agent run loop: MessageManager usage, AgentOutput construction,
          and action dispatch.
        </p>
        <p>
          browser-use team (2026).{" "}
          <em>Browser Use docs: Supported Models</em>.{" "}
          <a
            href="https://docs.browser-use.com/customize/supported-models"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://docs.browser-use.com/customize/supported-models
          </a>
          . The native LLM wrappers: ChatOpenAI, ChatAnthropic, ChatGoogle, and
          more.
        </p>
        <p>
          browser-use team (2026).{" "}
          <em>Browser Use docs: Agent Settings</em>.{" "}
          <a
            href="https://docs.browser-use.com/customize/agent-settings"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://docs.browser-use.com/customize/agent-settings
          </a>
          . Every Agent constructor parameter, including prompt overrides and
          history management.
        </p>
        <p>
          browser-use community (2025).{" "}
          <em>
            GitHub issue #2137: Migration guide for Langchain to native
            browser-use LLMs
          </em>
          .{" "}
          <a
            href="https://github.com/browser-use/browser-use/issues/2137"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/browser-use/browser-use/issues/2137
          </a>
          . Documents the removal of LangChain as a core dependency.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk04ReadingSearchBody =
  "structured output free text Pydantic schema function calling tool calling AgentOutput AgentBrain evaluation_previous_goal memory next_goal action list ActionModel current_state MessageManager system prompt context budget native LLM layer ChatOpenAI ChatAnthropic ChatGoogle ChatGroq LangChain removed browser_use.llm agent history AgentHistoryList save_conversation_path extra forbid dynamic schema tools registry week 4 reading decision step";
