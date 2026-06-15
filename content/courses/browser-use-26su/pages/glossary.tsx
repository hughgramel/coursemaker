import { AnchorHeading } from "@/components/AnchorHeading";

export function GlossaryPage() {
  return (
    <>
      <AnchorHeading as="h1" id="glossary">Glossary</AnchorHeading>
      <p>
        The canonical language of this course. Every reading, lecture, and assignment uses
        these terms in exactly these senses. When browser-use or the wider field has competing
        words for the same idea, the entry picks one and lists the rest under Avoid. In this
        course, "agent" always means a browser-use agent: an LLM driving a real browser through
        a loop, not a chat assistant.
      </p>

      <AnchorHeading as="h2" id="the-loop">The agent loop</AnchorHeading>
      <dl>
        <dt id="browser-agent"><strong>Browser agent</strong></dt>
        <dd>
          An LLM that completes a task by driving a real web browser: it reads the page,
          chooses an action, runs it, and repeats. browser-use is a library for building one.
          <em> Avoid:</em> bot, scraper (both imply fixed scripts, not an LLM deciding).
        </dd>
        <dt id="agent-loop"><strong>Agent loop</strong></dt>
        <dd>
          The repeating cycle that drives a browser agent: perceive the page, decide an
          action, act on it, feed the result back. Everything in this course is a part of this
          loop or a way to steer it.
        </dd>
        <dt id="perceive-decide-act"><strong>Perceive, decide, act</strong></dt>
        <dd>
          The three moves of one loop step. Perceive: capture the page state. Decide: the LLM
          picks an action. Act: the action runs and returns a result. <em>Avoid:</em>
          observe-orient-act, sense-think-act (synonyms from other fields).
        </dd>
        <dt id="llm-as-controller"><strong>LLM as controller</strong></dt>
        <dd>
          The design where the language model, not hand-written code, decides each next action.
          The library's job is to give the model a clean view of the page and a fixed set of
          actions, then execute its choice.
        </dd>
        <dt id="task-prompt"><strong>Task</strong></dt>
        <dd>
          The plain-English goal handed to an agent ("find the cheapest flight and return the
          price"). Good task framing is a reliability lever, not decoration. <em>Avoid:</em>
          prompt (reserve that for the assembled LLM input).
        </dd>
        <dt id="max-steps"><strong>max_steps</strong></dt>
        <dd>
          The hard cap on how many loop steps an agent may take before it stops. The simplest
          guard against an agent running forever.
        </dd>
        <dt id="agent-history"><strong>Agent history</strong></dt>
        <dd>
          The recorded trace of a run: the browser state, model output, and action result at
          each step. The first place to look when an agent succeeds or fails.
        </dd>
      </dl>

      <AnchorHeading as="h2" id="perception">Perception</AnchorHeading>
      <dl>
        <dt id="dom-tree"><strong>DOM tree</strong></dt>
        <dd>
          The browser's structured representation of a page: nested elements (nodes) for tags,
          text, and attributes. The raw material the agent's view is built from.
        </dd>
        <dt id="accessibility-tree"><strong>Accessibility tree</strong></dt>
        <dd>
          The browser's parallel representation of a page in terms of roles and names (button,
          link, textbox), built for assistive technology. browser-use uses it to understand
          what each element is for.
        </dd>
        <dt id="interactive-element"><strong>Interactive element</strong></dt>
        <dd>
          An element the agent can act on: a link, button, input, or anything with a click
          handler or clickable role. Only these get an index.
        </dd>
        <dt id="selector-map"><strong>Selector map</strong></dt>
        <dd>
          The dictionary mapping each integer element index to the interactive element it
          stands for. The bridge between what the LLM says ("element 5") and the real node on
          the page. <em>Avoid:</em> element registry.
        </dd>
        <dt id="element-index"><strong>Element index</strong></dt>
        <dd>
          The integer (0, 1, 2, ...) assigned to each interactive element and shown to the LLM.
          The agent's vocabulary for pointing at things: it acts by index, never by CSS
          selector. <em>Avoid:</em> element id (that means the HTML id attribute).
        </dd>
        <dt id="vision-screenshot"><strong>Vision</strong></dt>
        <dd>
          The optional path where a screenshot of the page is sent to a multimodal LLM
          alongside the text view. Controlled by <code>use_vision</code>. Off by default in
          spirit: the approach is DOM-first.
        </dd>
        <dt id="dom-vs-vision"><strong>DOM-first</strong></dt>
        <dd>
          The choice to give the LLM the serialized DOM and selector map as the primary view,
          with screenshots optional. The opposite extreme, sending only screenshots, is
          vision-first. browser-use is DOM-first.
        </dd>
      </dl>

      <AnchorHeading as="h2" id="state">The session and state</AnchorHeading>
      <dl>
        <dt id="browser-session"><strong>BrowserSession</strong></dt>
        <dd>
          The object that owns the running browser and produces the browser-state summary each
          step. Where headless mode, profiles, and persistence are configured.
        </dd>
        <dt id="browser-state-summary"><strong>Browser-state summary</strong></dt>
        <dd>
          What the agent perceives in one step: the URL, page title, serialized DOM with the
          selector map, and optionally a screenshot.
        </dd>
        <dt id="cdp"><strong>CDP (Chrome DevTools Protocol)</strong></dt>
        <dd>
          The low-level protocol browser-use uses to pull the DOM snapshot, accessibility tree,
          and event listeners straight from Chrome. The project trends toward driving the
          browser through CDP directly.
        </dd>
        <dt id="playwright-layer"><strong>Playwright layer</strong></dt>
        <dd>
          The browser-automation library the stable Python agent uses to launch and manage the
          browser, even as DOM intelligence comes from <a href="#cdp">CDP</a>.
        </dd>
        <dt id="context-budget"><strong>Context budget</strong></dt>
        <dd>
          The token limit that forces the agent to send a trimmed view of the page, not raw
          HTML. Why the selector map and screenshots exist instead of dumping the document.
        </dd>
        <dt id="ephemeral-messages"><strong>Ephemeral messages</strong></dt>
        <dd>
          Browser states and screenshots kept only for the last few steps before being dropped,
          so old page snapshots do not crowd out the context budget.
        </dd>
      </dl>

      <AnchorHeading as="h2" id="decision">The decision step</AnchorHeading>
      <dl>
        <dt id="structured-output"><strong>Structured output</strong></dt>
        <dd>
          Forcing the LLM to answer in a fixed, machine-parseable shape instead of free prose.
          What makes the loop reliable enough to execute automatically.
        </dd>
        <dt id="agent-output"><strong>AgentOutput</strong></dt>
        <dd>
          The structured object the LLM returns each step: an evaluation of the previous goal,
          a memory note, the next goal, and a list of actions to run. <em>Avoid:</em> response,
          completion.
        </dd>
        <dt id="pydantic-schema"><strong>Pydantic schema</strong></dt>
        <dd>
          A Python class that declares the exact shape and types of data. browser-use uses
          Pydantic for <a href="#agent-output">AgentOutput</a>, action parameters, and output
          models, validating every value.
        </dd>
        <dt id="function-calling"><strong>Function calling</strong></dt>
        <dd>
          The LLM-provider feature that makes a model emit arguments matching a declared schema.
          The mechanism behind structured output and action selection. <em>Avoid:</em> tool
          calling (used interchangeably by providers, but in this course "tool" means a
          browser-use action).
        </dd>
        <dt id="message-manager"><strong>Message manager</strong></dt>
        <dd>
          The component that assembles the system prompt, browser-state summary, and recent
          history into the messages sent to the LLM each step.
        </dd>
        <dt id="system-prompt"><strong>System prompt</strong></dt>
        <dd>
          The standing instructions given to the LLM: the task, the available actions and their
          descriptions, and the constraints it must respect.
        </dd>
        <dt id="llm-layer"><strong>LLM layer</strong></dt>
        <dd>
          browser-use's native chat wrappers (<code>ChatOpenAI</code>, <code>ChatAnthropic</code>,
          <code>ChatGoogle</code>, and more) that plug a model into the agent. LangChain is not
          required. <em>Avoid:</em> "the LangChain integration" (removed as a core dependency).
        </dd>
      </dl>

      <AnchorHeading as="h2" id="actions">Actions and tools</AnchorHeading>
      <dl>
        <dt id="tools-registry"><strong>Tools registry</strong></dt>
        <dd>
          The <code>Tools</code> object mapping action names to handler functions and turning
          them into the actions the LLM can choose. In this course "tool" and "action" are the
          same thing. <em>Avoid:</em> Controller (the older name for this).
        </dd>
        <dt id="built-in-actions"><strong>Built-in actions</strong></dt>
        <dd>
          The actions browser-use ships with: click, type, scroll, navigate, go back, search,
          extract content, switch or open a tab, and done.
        </dd>
        <dt id="action-model"><strong>ActionModel</strong></dt>
        <dd>
          The Pydantic model describing one action's name and parameters. The registry builds it
          from the registered actions so the LLM can fill it in.
        </dd>
        <dt id="action-result"><strong>ActionResult</strong></dt>
        <dd>
          What an action returns after it runs: success or error, any extracted content, and an
          optional note for the agent to remember. The "result" half of perceive-decide-act.
        </dd>
        <dt id="multi-act"><strong>multi_act</strong></dt>
        <dd>
          Running several actions from one <a href="#agent-output">AgentOutput</a> in a single
          step, so the agent can, for example, type then click without a round trip.
        </dd>
        <dt id="parameter-injection"><strong>Parameter injection</strong></dt>
        <dd>
          The framework supplying dependencies to an action handler by matching parameter names
          (<code>browser_session</code>, <code>page_extraction_llm</code>,
          <code>file_system</code>). Name it correctly and you receive it.
        </dd>
      </dl>

      <AnchorHeading as="h2" id="extending">Extending and securing the agent</AnchorHeading>
      <dl>
        <dt id="custom-action"><strong>Custom action</strong></dt>
        <dd>
          A tool you write and register with <code>@tools.action()</code>, with typed Pydantic
          parameters, returning an <a href="#action-result">ActionResult</a>. How you teach the
          agent something the built-ins cannot do. <em>Avoid:</em> plugin.
        </dd>
        <dt id="output-model"><strong>Output model</strong></dt>
        <dd>
          A Pydantic class the agent must fill in as its final answer, so a run returns validated
          JSON instead of prose. <em>Avoid:</em> response schema.
        </dd>
        <dt id="sensitive-data"><strong>sensitive_data</strong></dt>
        <dd>
          A map from placeholder names to real secrets. The model sees only the placeholder; the
          framework substitutes the real value at execution time, keeping credentials out of the
          LLM context.
        </dd>
        <dt id="allowed-domains"><strong>allowed_domains</strong></dt>
        <dd>
          The list of domains an agent or action is permitted to act on. The guardrail that keeps
          an agent from wandering off-site. Also called domain restriction.
        </dd>
      </dl>

      <AnchorHeading as="h2" id="real-browser-terms">Driving a real browser</AnchorHeading>
      <dl>
        <dt id="browser-profile"><strong>Browser profile</strong></dt>
        <dd>
          A directory (<code>user_data_dir</code>) holding cookies, local storage, and login
          state, so an agent can reuse a real session across runs. <em>Avoid:</em> session
          (reserve that for <a href="#browser-session">BrowserSession</a>).
        </dd>
        <dt id="persistent-context"><strong>Persistent context</strong></dt>
        <dd>
          A browser context backed by a <a href="#browser-profile">profile</a> on disk, so state
          survives between runs rather than starting fresh each time.
        </dd>
        <dt id="real-browser"><strong>Real browser</strong></dt>
        <dd>
          A visible, non-headless Chrome the agent drives, often with your existing logins. The
          opposite of a throwaway headless instance.
        </dd>
        <dt id="authentication-state"><strong>Authentication state</strong></dt>
        <dd>
          The cookies and tokens that prove an agent is logged in, carried by a
          <a href="#browser-profile">profile</a> so the agent does not log in every run.
        </dd>
      </dl>

      <AnchorHeading as="h2" id="reliability-terms">Reliability, evaluation, ecosystem</AnchorHeading>
      <dl>
        <dt id="reliability"><strong>Reliability</strong></dt>
        <dd>
          How often an agent finishes the task correctly across many runs, not whether it
          worked once. The thing every guard in this course is trying to raise.
        </dd>
        <dt id="loop-detection"><strong>Loop detection</strong></dt>
        <dd>
          The agent noticing it is repeating actions or the page has stopped changing, so it can
          break out instead of spinning.
        </dd>
        <dt id="max-failures"><strong>max_failures</strong></dt>
        <dd>
          The number of consecutive failed steps allowed before the agent gives up. Pairs with
          <a href="#max-steps">max_steps</a> as a stopping guard.
        </dd>
        <dt id="planner-model"><strong>Planner model</strong></dt>
        <dd>
          A separate, often higher-level LLM that lays out a plan the step-by-step agent follows.
          Used when one model struggles to plan and act at once.
        </dd>
        <dt id="procedural-memory"><strong>Procedural memory</strong></dt>
        <dd>
          The running <code>memory</code> note in <a href="#agent-output">AgentOutput</a> that
          carries facts forward between steps, since each step starts from a trimmed view.
        </dd>
        <dt id="task-design"><strong>Task design</strong></dt>
        <dd>
          Framing and decomposing the task so the agent can actually follow it. Often a bigger
          reliability win than any setting.
        </dd>
        <dt id="web-agent-eval"><strong>Web-agent evaluation</strong></dt>
        <dd>
          Measuring whether an agent really completes tasks, ideally on live current sites rather
          than cached snapshots.
        </dd>
        <dt id="evaluation-benchmark"><strong>Benchmark</strong></dt>
        <dd>
          A standard task set (WebVoyager, Mind2Web) used to score web agents. Headline scores
          can mislead when the test sites are cached or stale.
        </dd>
        <dt id="prompt-injection"><strong>Prompt injection</strong></dt>
        <dd>
          Text on a page crafted to hijack the agent's instructions. The main security risk of
          letting an LLM read and act on untrusted web content.
        </dd>
        <dt id="agent-scorecard"><strong>Agent scorecard</strong></dt>
        <dd>
          A short table summarizing an agent's success rate, cost, latency, and failure modes
          across a task set. How this course measures "does it actually work".
        </dd>
        <dt id="comparison"><strong>Comparison (vs Stagehand, Playwright)</strong></dt>
        <dd>
          The map of the neighborhood: browser-use (autonomous, Python, DOM-first), Stagehand
          (developer-directed, TypeScript, CDP-native), and raw Playwright (scripted, no LLM).
        </dd>
        <dt id="design-philosophy"><strong>Bitter-lesson design</strong></dt>
        <dd>
          The project's stance that a minimal agent loop with a simple, broad action space beats
          heavy framework abstraction, since better models reward fewer hand-built rules.
        </dd>
      </dl>
    </>
  );
}

export const glossarySearchBody =
  "browser-use glossary agent loop perceive decide act selector map element index DOM accessibility tree BrowserSession browser-state summary CDP Playwright context budget ephemeral messages AgentOutput structured output Pydantic function calling message manager system prompt LLM layer ChatOpenAI tools registry built-in actions ActionModel ActionResult multi_act parameter injection custom action output model sensitive_data allowed_domains browser profile persistent context real browser authentication state reliability loop detection max_failures planner memory task design web agent evaluation benchmark prompt injection scorecard Stagehand Playwright bitter lesson";
