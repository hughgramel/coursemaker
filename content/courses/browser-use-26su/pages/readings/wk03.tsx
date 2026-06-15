import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk03Reading() {
  return (
    <ReadingPage
      id="wk03"
      title="Week 3: The session layer and the context budget"
      kicker="Browser Use: How LLM Agents Drive the Web · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers what a <code>BrowserSession</code> manages,
          what the browser-state summary contains, why the framework uses
          Playwright for launch and CDP for DOM intelligence, why raw HTML
          cannot fit in a model context window, and how the agent handles that
          budget constraint through state filtering and ephemeral messages. By
          the end you will be able to configure a session, describe every field
          of the state summary, and explain the token-cost tradeoffs between
          DOM-only and vision-enabled modes.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> The agent loop (perceive,
          decide, act), DOM tree, accessibility tree, selector map, and
          element index from weeks 1 and 2. Vision vs DOM tradeoffs introduced
          in week 2.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-what-a-browsersession-manages">
        1. What a BrowserSession manages
      </AnchorHeading>
      <p>
        Every browser-use agent run operates inside a <code>BrowserSession</code>.
        The session is the object that owns the browser process, the browser
        context (cookies, storage, and permissions), and the active Playwright
        page handle. When the agent calls a built-in action like{" "}
        <code>click</code>, <code>type</code>, or <code>navigate</code>, those
        actions reach the browser through the session. When the agent needs to
        perceive the current page, the session is the object that captures the
        state. (browser-use contributors, 2026a)
      </p>
      <p>
        You pass a <code>BrowserSession</code> to an <code>Agent</code> either
        explicitly or by relying on the default that the agent creates
        internally. Passing one explicitly lets you share a single browser
        process across multiple agent runs, persist login cookies, or attach to
        a browser that is already open. The documentation page for browser
        settings (browser-use team, 2026b) covers the full set of constructor
        parameters; the most useful for learning are described in this reading.
      </p>
      <p>
        A minimal session in code looks like this:
      </p>
      <pre>{`from browser_use import Agent, BrowserSession
from browser_use.llm import ChatOpenAI

session = BrowserSession(headless=True)
agent = Agent(
    task="Find the current top story on news.ycombinator.com",
    llm=ChatOpenAI(model="gpt-4o"),
    browser_session=session,
)
import asyncio
asyncio.run(agent.run())`}</pre>
      <p>
        When the session starts, Playwright launches a Chromium instance. The
        session keeps that instance alive for the duration of the run. At the
        end of the run (or when you call <code>session.close()</code>), the
        browser is shut down unless <code>keep_alive=True</code> was set.
        (browser-use team, 2026b)
      </p>

      <AnchorHeading as="h2" id="2-playwright-and-cdp-two-distinct-roles">
        2. Playwright and CDP: two distinct roles
      </AnchorHeading>
      <p>
        browser-use uses two different browser-control mechanisms, and
        understanding why they are separate is central to understanding the
        session layer.
      </p>
      <p>
        <strong>Playwright</strong> handles launch and lifecycle: opening the
        browser, creating contexts and pages, navigating to URLs, clicking,
        typing, scrolling, and closing the browser. Playwright provides a
        high-level Python API that abstracts away the raw protocol.
      </p>
      <p>
        <strong>Chrome DevTools Protocol (CDP)</strong> is a lower-level
        protocol that browsers expose for debugging and inspection. The
        browser-use DOM service (<code>browser_use/dom/service.py</code>) calls
        CDP directly to obtain a DOM snapshot and the accessibility tree.
        Specifically, it calls <code>DOMSnapshot.captureSnapshot</code> and
        related CDP commands to get a full, structured representation of the
        rendered page, including computed positions, visibility flags, and the
        role attributes that power the accessibility tree. (browser-use
        contributors, 2026c)
      </p>
      <p>
        Why split responsibilities this way? Playwright's high-level click and
        type methods are reliable and cross-browser. But Playwright's DOM
        inspection methods were not designed for the kind of bulk extraction the
        agent needs: taking a complete snapshot of every element on the page,
        filtering for interactivity, computing visibility, and building a
        numbered map. CDP gives the DOM service direct access to the browser's
        internal snapshot without going through Playwright's higher-level
        abstractions.
      </p>
      <p>
        The trend in browser-use (as noted in the README and visible in newer
        parts of the codebase) is toward more direct CDP use overall, not just
        in the DOM layer. The Python agent you import with{" "}
        <code>from browser_use import Agent</code> still uses Playwright for
        its action layer, but the DOM intelligence is already CDP-native.
        (browser-use contributors, 2026a)
      </p>

      <Callout title="Why not just use Playwright's accessibility tree?">
        <p>
          Playwright does expose an accessibility snapshot via{" "}
          <code>page.accessibility.snapshot()</code>. The browser-use DOM
          service uses CDP directly instead because it needs to combine the DOM
          snapshot with computed layout information (to filter out off-viewport
          elements), interactivity signals from the DOM (click handlers, ARIA
          roles), and the exact coordinates the accessibility snapshot does not
          expose. The CDP snapshot command returns all of this in a single round
          trip.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-the-browser-state-summary">
        3. The browser-state summary
      </AnchorHeading>
      <p>
        Each step of the agent loop begins with a call to capture the current
        browser state. The result is a browser-state summary object with four
        fields. Three are always present; one is optional.
      </p>
      <p>
        <strong>url.</strong> The current page URL as a string. The agent uses
        this to know where it is. The decision step can compare the URL against
        the task goal (for example, to confirm that a navigation action
        succeeded).
      </p>
      <p>
        <strong>title.</strong> The page title as returned by the browser.
        Together with the URL, the title provides a quick sanity check. An agent
        that navigated to the wrong page, or to a redirect landing page, will
        usually see a mismatch between the expected title and the actual title.
      </p>
      <p>
        <strong>Serialized DOM (the element tree and selector map).</strong>{" "}
        This is the most information-dense field. The DOM service runs its
        CDP-based extraction, filters out hidden and off-viewport elements,
        assigns an integer index to each interactive element, and produces two
        things: a human-readable text representation of the page structure
        (heading hierarchy, form fields, links, buttons, their text content),
        and a <code>selector_map</code> dictionary that maps each integer index
        to the real CSS locator needed to interact with that element. The LLM
        sees the text representation. The framework uses the selector map to
        execute actions. (browser-use contributors, 2026c)
      </p>
      <p>
        <strong>Screenshot (optional).</strong> When <code>use_vision=True</code>{" "}
        is set on the agent, a base64-encoded PNG screenshot of the current
        viewport is included in the state. This image is passed to the LLM as
        a vision input alongside the text representation. When{" "}
        <code>use_vision=False</code> (the default for non-vision models), no
        screenshot is captured.
      </p>
      <p>
        The state summary is assembled once per step and then passed to the
        message layer, which packages it into the conversation context for the
        LLM. The agent never passes the raw browser object to the model; it
        always passes this distilled summary.
      </p>

      <AnchorHeading as="h2" id="4-what-the-dom-service-filters">
        4. What the DOM service filters
      </AnchorHeading>
      <p>
        A typical web page has hundreds to thousands of DOM nodes. The DOM
        service does not include all of them in the state summary. It applies
        several filters to keep the representation compact and relevant.
        (browser-use contributors, 2026c; Gonsalvez, 2025)
      </p>
      <p>
        First, it retains only interactive elements: links, buttons, input
        fields, select elements, elements with click handlers, and elements with
        roles like <code>button</code>, <code>link</code>, or <code>menuitem</code>.
        Static text paragraphs, decorative images, and layout containers are
        excluded from the numbered index, though the heading structure is kept
        for context.
      </p>
      <p>
        Second, it filters by visibility. Elements that are hidden via CSS
        (<code>display:none</code>, <code>visibility:hidden</code>), off-screen
        (positioned far outside the viewport), or clipped to zero size are
        excluded. The agent can only act on what a real user could see and click.
      </p>
      <p>
        Third, it assigns sequential integer indices starting from 0. These
        indices are the agent's vocabulary for action. When the LLM decides to
        click "element 5," it is referring to the fifth interactive element in
        the current state's index. The selector map translates that integer back
        to a real locator at execution time.
      </p>
      <p>
        The result is a compact, numbered representation. A complex page with
        500 DOM nodes might produce a state summary with 30-60 indexed elements.
        That is what goes into the prompt.
      </p>

      <AnchorHeading as="h2" id="5-why-raw-html-does-not-fit">
        5. Why raw HTML does not fit a context window
      </AnchorHeading>
      <p>
        A natural question at this point is: why not send the raw HTML to the
        LLM? Modern models accept long contexts. Can the LLM not just read the
        HTML and figure out what to click?
      </p>
      <p>
        The answer is partly about size and partly about signal-to-noise.
      </p>
      <p>
        On size: the raw HTML of a medium-complexity web application page
        commonly runs from 50,000 to several hundred thousand characters. At
        roughly four characters per token, that is 12,000-75,000 tokens for
        the page alone, before adding the system prompt, task description, action
        history, or any previous state summaries. Many pages, particularly those
        built with modern JavaScript frameworks, include inline scripts, SVG
        markup, base64-encoded images, and minified CSS in the HTML document
        that are irrelevant to navigation. (Gonsalvez, 2025)
      </p>
      <p>
        On signal-to-noise: even if the raw HTML fit, most of its content is not
        useful for navigation. The agent needs to know what is on the page and
        what it can interact with. A serialized DOM that lists elements by index
        with their label text communicates that directly. A 300-line HTML
        template with class names, data attributes, and nested divs does not.
      </p>
      <p>
        The DOM service's output is an order of magnitude smaller than raw HTML.
        It gives the LLM exactly the information needed to pick an action, with
        none of the markup noise.
      </p>

      <AnchorHeading as="h2" id="6-the-context-budget">
        6. The context budget
      </AnchorHeading>
      <p>
        Even with the compact state summary, the agent has to manage its context
        window carefully across a multi-step run. The context budget is the
        number of tokens remaining in the model's context window after the
        system prompt and task description have been placed. That budget has to
        cover:
      </p>
      <ul>
        <li>The current browser-state summary (DOM representation, URL, title)</li>
        <li>Recent action history: what the agent did in previous steps and what results came back</li>
        <li>The agent's own memory field (persistent notes carried forward across steps)</li>
        <li>Optionally, screenshots</li>
        <li>Enough room for the LLM's structured output reply</li>
      </ul>
      <p>
        As the run progresses and action history accumulates, the older parts of
        the history consume more of the budget. The framework has to decide what
        to keep and what to drop.
      </p>
      <p>
        The run loop in <code>browser_use/agent/service.py</code> manages this
        through the message manager. (browser-use contributors, 2026d) The
        message manager assembles the conversation context for each step: system
        prompt, task, browser state, and recent messages. Older browser-state
        summaries from earlier steps are treated as ephemeral messages and are
        eventually dropped from the context as the run continues. Only the most
        recent N browser states are retained. (The exact value of N depends on
        the model context length and the configured limits, and may change across
        versions; the principle is that older states are discarded to free budget
        for the current state and new history.)
      </p>
      <p>
        The agent's <code>memory</code> field, part of the structured output
        described in week 4, is the mechanism that lets the agent carry
        forward information that would otherwise be lost when a state is
        dropped. The agent can note key facts ("user is now logged in," "the
        search returned 42 results") in the memory field, and that note persists
        in the context even after the page that produced it has left the window.
      </p>

      <Callout title="Context budget and model choice">
        <p>
          A model with a 128,000-token context window can accommodate longer
          runs and more history than one with 32,000 tokens. But a larger context
          does not eliminate the budget problem: it changes its scale. On a very
          long task with dozens of steps, even a 128,000-token model will
          eventually need to drop old state summaries. The ephemeral-message
          strategy applies regardless of context length.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="7-ephemeral-messages">
        7. Ephemeral messages and the retention strategy
      </AnchorHeading>
      <p>
        The term "ephemeral messages" in browser-use refers to messages that are
        included in the context for a limited number of steps and then removed.
        Browser-state summaries are the primary example: the state summary for
        step 1 is in the context during step 2, but may be removed by step 10
        to make room.
      </p>
      <p>
        The retention strategy keeps the most recent states and drops older ones.
        This makes sense for web navigation: the relevant page context is almost
        always the current page and perhaps the page from one or two steps ago.
        A state from 15 steps earlier (a page the agent browsed and left) is
        rarely needed again. If it is needed, the agent can navigate back.
      </p>
      <p>
        This is different from how the task description, system prompt, and
        the memory field are handled. Those are non-ephemeral: they remain in
        the context for the entire run. The task does not expire. The agent's
        persistent notes do not expire. Only the raw page state for past steps
        is ephemeral.
      </p>
      <p>
        From a system design perspective, this is a form of sliding-window
        attention on the conversation: the window moves forward with each step,
        keeping recent state visible and discarding old state. The agent's memory
        field is the compensation mechanism, allowing long-term facts to survive
        the window.
      </p>

      <AnchorHeading as="h2" id="8-vision-vs-dom-token-cost">
        8. Vision vs DOM: token cost and capability
      </AnchorHeading>
      <p>
        browser-use is DOM-first. The default mode does not require a
        vision-capable model and does not capture screenshots. This was an
        explicit design choice by the founders: the DOM representation is
        usually more token-efficient than a screenshot and works with any
        capable text model. (browser-use contributors, 2026a)
      </p>
      <p>
        When <code>use_vision=True</code> is set, a screenshot is included in
        each state summary alongside the DOM representation. The vision input
        is passed to the model as an image message. Most modern
        frontier models accept this via their chat API.
      </p>
      <p>
        The token cost comparison matters. A DOM state summary for a typical
        page might use 500-2,000 tokens in text. A low-detail screenshot for
        the same page, when encoded as a vision input and billed by the model
        provider, commonly costs 500-1,000 tokens at low detail. A high-detail
        screenshot can cost 1,500-3,000 tokens. At the token pricing rates of
        frontier models, adding vision inputs to every step of a 30-step run
        can meaningfully increase cost compared to DOM-only.
      </p>
      <p>
        When does vision help? On pages where the DOM representation loses
        information that matters for the task: visual layouts where spatial
        position is semantically meaningful (a calendar grid, a chart, an image
        carousel), pages where important content is inside canvas elements
        (which are not in the DOM at all), or pages where styling masks
        interactivity in ways the DOM service does not capture. For standard
        navigation, form filling, and text extraction tasks, DOM-only is
        accurate and cheaper. (Gonsalvez, 2025)
      </p>
      <p>
        The Hacker News launch thread for browser-use (Müller and Hacker News
        commenters, 2024) included an early debate on exactly this question:
        whether screenshot-only agents, DOM-only agents, or hybrid agents would
        prove most effective. The browser-use team's position was that DOM-first
        with optional vision was the right tradeoff for general-purpose tasks.
        That position has held through mid-2026.
      </p>

      <AnchorHeading as="h2" id="9-configuring-a-browsersession">
        9. Configuring a BrowserSession
      </AnchorHeading>
      <p>
        The browser settings documentation (browser-use team, 2026b) lists every
        parameter. The ones most relevant for week 3 are:
      </p>
      <p>
        <strong><code>headless</code> (bool, default True).</strong> When True,
        the browser runs without a visible window. When False, a real browser
        window opens and you can watch the agent work. Headless is the default
        for production use; visible mode is useful during development and
        debugging.
      </p>
      <p>
        <strong><code>keep_alive</code> (bool, default False).</strong> When
        True, the browser process is not shut down after the agent finishes.
        This allows a second agent run to reuse the same browser context,
        preserving cookies and any in-memory session state. Useful when you
        want to run a sequence of agent tasks without re-logging-in between them.
      </p>
      <p>
        <strong><code>user_data_dir</code> (str or Path, optional).</strong>{" "}
        Path to a Chromium user profile directory. When provided, the browser
        loads cookies, local storage, and saved login sessions from that
        directory, and writes back any changes when it closes. This is the
        mechanism for running the agent against a site where you are already
        logged in. This parameter becomes more important in week 7 (persistent
        profiles and real browsers); it is introduced here as a property of the
        session.
      </p>
      <p>
        <strong><code>disable_security</code> (bool, default False).</strong>{" "}
        Disables some browser security features. This is sometimes needed to
        connect to local or self-signed sites during development. Leave it at
        the default for production.
      </p>
      <p>
        A session configured for interactive development might look like this:
      </p>
      <pre>{`session = BrowserSession(
    headless=False,     # watch the browser
    keep_alive=True,    # reuse the context between runs
)`}</pre>
      <p>
        And one configured for a production scraping run might look like this:
      </p>
      <pre>{`session = BrowserSession(
    headless=True,
    user_data_dir="./profiles/mysite",  # use a saved login
)`}</pre>

      <AnchorHeading as="h2" id="10-the-state-summary-in-the-loop">
        10. The state summary in the agent loop
      </AnchorHeading>
      <p>
        To make the flow concrete, here is what happens at the start of each
        agent step, tracing through the perceive phase described in week 1.
      </p>
      <p>
        The agent calls <code>agent.step()</code> (internally, this is part of
        the run loop in <code>service.py</code>). The first thing the step does
        is capture browser state: the session's DOM service invokes CDP to take
        a snapshot of the current page, runs the filtering and indexing logic
        to produce the selector map, and packages the URL, title, text element
        tree, and optionally a screenshot into a state summary object.
        (browser-use contributors, 2026d)
      </p>
      <p>
        That state summary is handed to the message manager, which assembles the
        full message list for the LLM: the non-ephemeral system prompt and task,
        the recent ephemeral history (prior state summaries and action results),
        and the current state summary as the most recent user message. The LLM
        then receives this message list and replies with a structured output
        describing its next action.
      </p>
      <p>
        The agent does not "see" the browser directly. It sees the summary the
        session produced. This indirection is what makes the framework
        model-agnostic: any LLM that can read text (and optionally images) can
        participate in the loop. The browser does not care which model is
        running; the model does not need to know how browsers work.
      </p>

      <AnchorHeading as="h2" id="11-two-sessions-two-summaries">
        11. Two sessions, two summaries: what changes
      </AnchorHeading>
      <p>
        The section this week asks you to configure two sessions and compare
        the state summaries they produce. Here is the conceptual framing before
        you do that hands-on.
      </p>
      <p>
        Two sessions on the same page but with different configurations will
        produce different state summaries in predictable ways. A session with
        <code>use_vision=False</code> produces a summary containing URL, title,
        and the text element tree with selector map. A session with{" "}
        <code>use_vision=True</code> produces the same three fields plus a
        base64 PNG screenshot. The text element tree content is the same in
        both cases; vision adds to it, not replaces it.
      </p>
      <p>
        A session with <code>headless=True</code> and one with{" "}
        <code>headless=False</code> will produce identical state summaries
        for the same page, because headless mode does not change how the DOM
        service extracts the page. The difference is only visible to a human
        watching the screen.
      </p>
      <p>
        Where summaries differ meaningfully is when the browser profile differs.
        A session loaded with a <code>user_data_dir</code> pointing at a profile
        that is logged in to a site will capture a state summary showing the
        authenticated view of the page. A session with no profile will capture
        the logged-out view. The selector map from each will list different
        elements (a logged-in page has a profile menu; a logged-out page has a
        login button). The agent's available actions differ as a result.
      </p>

      <AnchorHeading as="h2" id="12-exercises">
        12. Exercises
      </AnchorHeading>

      <Exercise n={1}>
        <p>
          Without looking at the source, name the four fields in a
          browser-state summary. For each field, write one sentence explaining
          what it contains and how the agent uses it during the decide step.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          A page has 312 DOM elements. The DOM service produces a state summary
          with 41 indexed elements. Name two categories of elements that the
          service filtered out and explain why filtering them out is correct
          for an agent that needs to navigate and interact with the page.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          An agent is on step 18 of a 30-step run on a task that involves
          filling out a multi-page form. The browser-state summary from step 3
          (a page the agent submitted and left) is no longer in the message
          context. The agent now needs to know the value it entered in a field
          on that page. Where should that value have been recorded, and in which
          part of the state summary or agent structure does it persist?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          You are building an agent to extract structured data from a table on a
          business news page. The table has 40 rows, each with 5 columns of
          text. Should you enable <code>use_vision=True</code>? Justify your
          answer using the token-cost and capability arguments from section 8.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Explain in two sentences why browser-use uses CDP for DOM extraction
          rather than relying entirely on Playwright's built-in DOM inspection
          methods. What does CDP provide that Playwright's high-level API does
          not?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="13-going-deeper">
        13. Going deeper
      </AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet this week:</strong> Configure two sessions,
          capture state summaries, and compare them side by side. Hands-on with
          the DOM service output and the vision difference.
        </li>
        <li>
          <strong>Lecture 2 this week:</strong> The context budget in detail:
          message manager internals, ephemeral retention, and token-cost
          arithmetic for vision vs DOM.
        </li>
        <li>
          <strong>Week 4 reading:</strong> The decision step. Once the state
          summary is in the context, how does the LLM produce a structured
          action? That is covered in the AgentOutput reading next week.
        </li>
        <li>
          <strong>Source to read:</strong>{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/dom/service.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            browser_use/dom/service.py
          </a>{" "}
          on GitHub. Read the <code>get_state</code> method and trace how the
          CDP snapshot becomes the element tree and selector map.
        </li>
      </ul>

      <Takeaways>
        <li>
          A <code>BrowserSession</code> owns the browser process, the context,
          and the active page. It is the single object through which all
          perception and action passes.
        </li>
        <li>
          Playwright handles launch and action execution; CDP handles DOM
          extraction. The split gives the DOM service direct access to a full
          structured snapshot without going through Playwright's higher-level
          wrappers.
        </li>
        <li>
          The browser-state summary has four fields: URL, title, serialized DOM
          with selector map, and an optional screenshot. The LLM sees the text
          fields; the framework uses the selector map internally for action
          execution.
        </li>
        <li>
          Raw HTML cannot fit a context window on real pages and contains far
          more noise than signal. The DOM service's filtered, indexed output is
          typically an order of magnitude smaller.
        </li>
        <li>
          Ephemeral messages handle the context budget: older browser-state
          summaries are dropped from the context as the run progresses. The
          agent's memory field is the mechanism that lets important information
          outlive the state that produced it.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          browser-use contributors. (2026a). browser-use/browser-use (GitHub
          repository and README).{" "}
          <a
            href="https://github.com/browser-use/browser-use"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use
          </a>
          . Canonical repo: project description, architecture overview, and
          Playwright/CDP split rationale.
        </p>
        <p>
          browser-use team. (2026b). Browser Use docs: Browser Settings.{" "}
          <a
            href="https://docs.browser-use.com/customize/browser-settings"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/browser-settings
          </a>
          . BrowserSession configuration reference: headless, profiles,
          persistence, proxy, recording, CDP options.
        </p>
        <p>
          browser-use contributors. (2026c). browser_use/dom/service.py (DOM
          extraction source).{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/dom/service.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com
          </a>
          . CDP-based DOM extraction: snapshot, accessibility tree,
          interactive-element detection, and the numbered selector map.
        </p>
        <p>
          browser-use contributors. (2026d). browser_use/agent/service.py
          (agent run loop source).{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com
          </a>
          . The core run loop: state capture, message construction, structured
          decision, action dispatch, and feedback.
        </p>
        <p>
          Gonsalvez, S. (2025). browser-use: Give Your LLM a Browser and Watch
          It Go. DEV.to.{" "}
          <a
            href="https://dev.to/stevengonsalvez/browser-use-give-your-llm-a-browser-and-watch-it-go-51hb"
            target="_blank"
            rel="noopener noreferrer"
          >
            dev.to
          </a>
          . DOM-first approach, per-action token cost, and an early
          WebVoyager benchmark figure.
        </p>
        <p>
          Müller, M. and Hacker News commenters. (2024). Show HN: Open-source
          browser alternative for Computer Use for any LLM. Hacker News.{" "}
          <a
            href="https://news.ycombinator.com/item?id=42052432"
            target="_blank"
            rel="noopener noreferrer"
          >
            news.ycombinator.com
          </a>
          . Launch thread: early technical debate on screenshots vs HTML/DOM for
          agents and the founders' DOM-first framing.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk03ReadingSearchBody =
  "BrowserSession browser-state summary URL title DOM screenshot CDP Playwright session layer context budget ephemeral messages token cost vision DOM extraction selector map headless keep_alive user_data_dir interactive elements filtered DOM accessibility tree agent loop perceive step week 3 browser use session layer context window";
