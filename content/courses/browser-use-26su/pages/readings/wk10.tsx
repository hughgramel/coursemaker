import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";
import { Mermaid } from "@/components/Mermaid";

export function Wk10Reading() {
  return (
    <ReadingPage
      id="wk10"
      title="Week 10: designing a complete agent end to end"
      kicker="Browser Use: How LLM Agents Drive the Web · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading is the synthesis chapter for the course. It covers how to
          take a real multi-step task from an idea to a running agent: scoping
          the task, choosing which tools to build or reuse, designing a typed
          output schema, handling authentication and secrets in a production
          setting, adding reliability guards, and measuring success with a small
          task-set scorecard. The chapter closes with a worked example that
          traces all ten weeks of material through a single agent.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> The full course: agent-loop
          (week 1), selector-map (week 2), browser-session (week 3),
          agent-output (week 4), tools-registry (week 5), custom-action and
          output-model (week 6), browser-profile and authentication-state (week
          7), reliability and task-design (week 8), and the evaluation and
          evaluation and deployment (week 9).
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-scoping">
        1. Scoping a real task
      </AnchorHeading>
      <p>
        The first question is not "can an agent do this?" but "what exactly is
        this?" A vague task prompt is the single most reliable way to produce a
        fragile agent. Before writing any code, write the task in one sentence
        and apply four tests.
      </p>
      <p>
        First: does the sentence name a stopping condition? "Find the current
        price of a product" is incomplete; "find the current price of product X
        on site Y and return it" has a stopping condition. An agent cannot emit
        the{" "}
        <code>done</code> action reliably when it does not know what done means
        (browser-use contributors, 2026, <em>service.py</em>).
      </p>
      <p>
        Second: does the task decompose into steps an agent can take with DOM
        interactions? A task like "summarize the financial news today" could
        mean navigating to a news site, reading headlines, navigating to
        articles, extracting text, and then synthesizing. Each of those is a
        browser action. A task like "form an opinion about the economy" is not
        decomposable into browser actions. The agent loop was designed for the
        first kind, not the second.
      </p>
      <p>
        Third: does each step produce a page state the agent can read? The
        perceive step (week 1) gives the agent a browser-state summary: URL,
        title, serialized DOM, and an optional screenshot. If a step requires
        reading a PDF that loads in a plugin viewer with no accessible DOM, the
        agent is blind. Plan around those gaps with custom tools that extract
        text through other means.
      </p>
      <p>
        Fourth: is the task one agent or several? A large task with branching
        logic ("if the product is in stock, add to cart; otherwise find the
        next best option") is better split into two tasks with the output of the
        first feeding the second. The browser-use design philosophy (Žunič,
        2026) argues for a minimal loop: one task per agent, with clear inputs
        and outputs, rather than a monolithic agent that tries to handle every
        branch.
      </p>

      <Callout title="The agent-ready checklist">
        <p>Before wiring up any code, confirm:</p>
        <ol>
          <li>The task has a single clear stopping condition stated in plain English.</li>
          <li>Every step produces a visible DOM state the selector map can index.</li>
          <li>
            Authentication is handled before the task runs, not inside it
            (unless logging in is the task).
          </li>
          <li>The task is one logical job, not two tasks joined with "and then".</li>
        </ol>
      </Callout>

      <AnchorHeading as="h2" id="2-built-in-vs-custom">
        2. Choosing built-in vs custom tools
      </AnchorHeading>
      <p>
        The tools registry (week 5) ships with click, type, scroll, navigate,
        go back, search, extract page content, switch tab, open tab, and done
        (browser-use contributors, 2026, <em>service.py</em>). For many tasks
        those ten actions cover everything. The question is when they do not.
      </p>
      <p>
        Use built-in actions when: the task is purely navigational (click here,
        fill this form, read that value); the extracted output is short enough
        to live in the agent's memory field; and no external system needs to be
        called mid-task. Built-in actions are tested, documented, and carry
        their own Pydantic parameter models, so the LLM knows exactly how to
        invoke them (browser-use team, 2026, custom-functions docs).
      </p>
      <p>
        Write a custom action when: a step requires calling an external API
        (posting to a webhook, writing to a database, sending an email); a step
        requires reading or writing a local file; the extraction logic is too
        complex for the built-in extract action (e.g., parsing a structured
        table and joining it with another source); or a step must be restricted
        to specific domains (the <code>allowed_domains</code> parameter on a{" "}
        <code>@tools.action</code> handler enforces this at the registry level).
      </p>
      <p>
        The custom action API (week 6) is straightforward. Create a{" "}
        <code>Tools</code> instance, decorate a function with{" "}
        <code>@tools.action()</code>, type the parameters as a Pydantic model,
        return an <code>ActionResult</code>, and pass{" "}
        <code>tools=tools</code> to the <code>Agent</code> constructor.
        Injected dependencies (<code>browser_session</code>,{" "}
        <code>page_extraction_llm</code>, <code>file_system</code>) arrive by
        parameter name at call time (browser-use team, 2026, custom-functions
        docs). The agent sees the action's description in its system prompt and
        can choose it exactly as it would choose a built-in.
      </p>

      <AnchorHeading as="h2" id="3-output-schema">
        3. Designing the output schema
      </AnchorHeading>
      <p>
        The default agent output is a prose string in the <code>done</code>{" "}
        action. For a one-off exploration task that is fine. For a production
        agent whose output feeds a downstream system, prose is fragile: it
        varies across runs, it cannot be type-checked, and it breaks callers
        when the format shifts.
      </p>
      <p>
        The <code>output_model</code> parameter (week 6) accepts a Pydantic
        class. When set, the agent is instructed to return JSON matching that
        schema instead of a prose string. The schema is enforced at parse time
        (browser-use team, 2026, output-format docs). A failed parse is an
        agent failure, not silent data corruption.
      </p>
      <p>
        Design the schema starting from the downstream consumer, not the page.
        Ask: what fields does the calling code need? Which fields are always
        present and which are conditional? Use <code>Optional[str]</code> for
        fields that may not exist on every page, and add a{" "}
        <code>Field(description="...")</code> annotation so the LLM understands
        what to put in each slot.
      </p>
      <pre>{`from pydantic import BaseModel, Field
from typing import Optional

class ProductResult(BaseModel):
    name: str = Field(description="Product name as shown on the page")
    price_usd: float = Field(description="Current price in US dollars, no currency symbol")
    in_stock: bool = Field(description="True if the product is available to add to cart")
    sku: Optional[str] = Field(None, description="SKU or product code if shown, else None")
`}</pre>
      <p>
        Pass this to the agent as <code>output_model=ProductResult</code>. The
        agent's final call to <code>done</code> will carry JSON that Pydantic
        validates before the result reaches your code.
      </p>
      <p>
        Keep schemas flat where possible. A deeply nested schema is harder for
        the LLM to fill correctly and harder to debug when it fills one field
        wrong. If the output is complex, consider splitting the task into two
        agents with simpler schemas each.
      </p>

      <AnchorHeading as="h2" id="4-auth-and-secrets">
        4. Auth and secrets in production
      </AnchorHeading>
      <p>
        Authentication has two distinct problems in a browser-use deployment:
        where the credentials come from, and how the browser state is persisted
        between runs.
      </p>
      <p>
        For credentials, the answer is <code>sensitive_data</code> (week 6).
        Pass a dict mapping placeholder names to real values. The agent sees
        only the placeholder name ("x-username", "x-password") in its context;
        the framework substitutes the real value at execution time. The secret
        never appears in the LLM conversation, in logs, or in the agent's memory
        field (browser-use team, 2026, sensitive-data docs). This is the correct
        pattern for any credential, token, or API key the agent must use.
      </p>
      <pre>{`from browser_use import Agent
from browser_use.llm import ChatAnthropic

agent = Agent(
    task="Log in with x-username and x-password, then extract the account balance.",
    llm=ChatAnthropic(model="claude-opus-4-5"),
    sensitive_data={"x-username": "alice@example.com", "x-password": "s3cr3t"},
)
`}</pre>
      <p>
        For browser state, a persistent profile (week 7) is the right tool when
        the login is expensive (CAPTCHA, MFA, slow SSO) or when the session
        needs to survive across multiple agent runs. Set <code>user_data_dir</code>{" "}
        on the <code>BrowserSession</code> to a path on disk. The browser writes
        its cookie jar and local storage to that directory. A second agent that
        opens the same <code>user_data_dir</code> starts already logged in, as
        long as the session cookie has not expired (browser-use team, 2026,
        browser-settings docs).
      </p>
      <p>
        The two-step pattern for authenticated agents: run a one-time login
        agent to establish the session, then run task agents reusing the same{" "}
        <code>user_data_dir</code>. The login agent can be triggered manually or
        on a schedule when the session expires.
      </p>
      <p>
        Pair <code>sensitive_data</code> with <code>allowed_domains</code> to
        reduce the blast radius if the agent encounters a prompt-injection attack
        (week 9). An action restricted to <code>example.com</code> cannot be
        hijacked into sending credentials to an attacker's domain, even if
        malicious page content tries to instruct the agent to do so.
      </p>

      <AnchorHeading as="h2" id="5-reliability-guards">
        5. Adding reliability guards
      </AnchorHeading>
      <p>
        A fragile agent is one that was not designed to fail gracefully. The
        reliability work from week 8 translates directly into production
        configuration.
      </p>
      <p>
        <strong>Step limits.</strong> Set <code>max_steps</code> to a number you
        have calculated from the expected step count. A task that normally takes
        12 steps should cap at 20 to allow for retries, not at 100 where a
        looping agent burns tokens for minutes before anyone notices. The agent
        raises or returns a failure state when <code>max_steps</code> is hit
        (browser-use team, 2026, agent-settings docs).
      </p>
      <p>
        <strong>Failure caps.</strong> <code>max_failures</code> caps
        consecutive action failures before the agent gives up. The default is
        around 3. For tasks where a single step failing is expected (e.g., a
        search that sometimes returns zero results), you may want to raise this.
        For tasks where any failure is unexpected, keep it at the default.
      </p>
      <p>
        <strong>Loop detection.</strong> The agent tracks repeated actions and
        stagnant page states. If the DOM has not changed across several steps,
        the agent detects a stall (browser-use contributors, 2026,{" "}
        <em>service.py</em>). Write task prompts that give the agent an explicit
        exit: "if the element is not found after two attempts, call done with
        in_stock set to False" is better than leaving the agent to invent its
        own escape.
      </p>
      <p>
        <strong>The planner model.</strong> For tasks with 15 or more steps, a
        separate planner model (week 8) adds a high-level planning step before
        each action cluster. This reduces drift in long tasks and gives the
        agent a persistent high-level goal to steer against. The planner is
        configured as a separate <code>llm</code>-like object passed to the
        agent; the main loop LLM handles the low-level perceive-decide-act
        cycle.
      </p>
      <p>
        <strong>Task framing.</strong> Most reliability failures trace back to
        the task string. A task that says "find the best product" is asking the
        agent to make a judgment the LLM cannot make reliably given one page of
        DOM. A task that says "find the product with the lowest price on this
        search results page and return its name and price" is unambiguous. The
        rule: the task string should be answerable from the DOM content available
        to the agent, with no implicit knowledge assumed.
      </p>

      <AnchorHeading as="h2" id="6-scorecard">
        6. Measuring success: the task-set scorecard
      </AnchorHeading>
      <p>
        A single agent run tells you whether the agent succeeded or failed once.
        A task-set scorecard tells you where and how often it fails, which is
        the information you need to improve it.
      </p>
      <p>
        Build a task set of 10-20 tasks that cover the realistic input space.
        For a product-price agent, the task set should include: a product with a
        standard price page, a product with a sale price, a product with a
        price that requires expanding a variant selector, a product that is out
        of stock, and a product whose page requires login to see the price. Each
        task has a known correct output you can check automatically.
      </p>
      <p>
        Run the agent against the task set and record: pass (correct output),
        fail-wrong-value (output present but incorrect), fail-no-output (done
        emitted but output_model validation failed), fail-loop (max_steps hit),
        and fail-crash (unhandled exception). The distribution across these
        categories tells you more than the raw pass rate (COLM 2025,
        arXiv 2504.01382).
      </p>

      <Mermaid
        alt="Failure categories for a task-set scorecard"
        chart={`flowchart TD
  A[Task runs] --> B{Did it complete?}
  B -->|Yes| C{Is output correct?}
  B -->|No| D{How did it stop?}
  C -->|Yes| E[PASS]
  C -->|No| F[fail-wrong-value]
  D -->|max_steps| G[fail-loop]
  D -->|max_failures| H[fail-crash]
  D -->|schema error| I[fail-no-output]`}
      />

      <p>
        The COLM 2025 paper (arXiv 2504.01382) showed that published benchmark
        scores for web agents fall sharply when tested on live websites rather
        than cached snapshots. The lesson for your own scorecard: run it on live
        pages, re-run it across different times of day, and treat any score
        above 90% on a static test harness with suspicion. Real websites change.
        Your task set should cover the variation.
      </p>
      <p>
        A scorecard also reveals which failure category to address first. A
        cluster of fail-loop entries points to task framing or loop-detection
        configuration. A cluster of fail-wrong-value entries on pages with
        variant selectors points to a missing custom action or a clearer task
        instruction. A cluster of fail-no-output entries points to an
        output-model schema mismatch between what the page contains and what the
        schema expects.
      </p>

      <AnchorHeading as="h2" id="7-worked-example">
        7. Worked example: a complete agent from start to finish
      </AnchorHeading>
      <p>
        This example builds a product-price monitor that checks a retail page
        and returns structured data. It deliberately pulls in every major concept
        from the course.
      </p>
      <p>
        <strong>Task:</strong> "Go to the product page at the URL stored in
        x-product-url. Extract the product name, current price in USD, and
        whether it is in stock. If the price requires selecting a size or color
        variant, choose the first available variant before reading the price.
        Return the result."
      </p>
      <p>
        <strong>Week 1 (perceive-decide-act):</strong> the agent loop will
        navigate to the URL, capture the browser-state summary, ask the LLM what
        to do, execute the action, and repeat until done.
      </p>
      <p>
        <strong>Week 2 (selector map):</strong> the DOM service indexes every
        interactive element on the product page. The agent selects variant
        dropdowns and the add-to-cart button by their integer indices, not by
        CSS selectors. If the page layout changes tomorrow, the indices update
        automatically.
      </p>
      <p>
        <strong>Week 3 (browser session):</strong> a <code>BrowserSession</code>{" "}
        with <code>user_data_dir="/tmp/price-monitor-profile"</code> persists
        cookies. If the product page requires login (handled in a prior run), the
        session reuses the saved state.
      </p>
      <p>
        <strong>Week 4 (AgentOutput):</strong> at each step the LLM returns an{" "}
        <code>AgentOutput</code> with <code>evaluation_previous_goal</code>{" "}
        (did the last action succeed?), <code>memory</code> (what have I found
        so far?), <code>next_goal</code> (what am I about to do?), and{" "}
        <code>action</code> (the specific browser action to execute). The memory
        field carries partial results across steps so the agent does not forget
        the product name when it navigates to a variant page.
      </p>
      <p>
        <strong>Week 5 (tools registry):</strong> the built-in actions cover
        navigation, click, and extract. No custom tool is needed here. If the
        site blocked the extract action, a custom action calling a server-side
        HTML parser would be the answer.
      </p>
      <p>
        <strong>Week 6 (output model and sensitive data):</strong> the{" "}
        <code>ProductResult</code> schema from section 3 above is passed as{" "}
        <code>output_model</code>. The URL is passed as <code>sensitive_data</code>{" "}
        because it may encode a session token or affiliate parameter that should
        not appear in logs.
      </p>
      <p>
        <strong>Week 7 (browser profile, authentication):</strong> the persistent
        profile handles the login session. The login step was run separately with
        credentials in <code>sensitive_data</code> and the result stored in the
        shared <code>user_data_dir</code>.
      </p>
      <p>
        <strong>Week 8 (reliability):</strong>{" "}
        <code>max_steps=15</code>, <code>max_failures=3</code>, and a task
        string that gives the agent an explicit escape ("if the price is not
        visible after two attempts, set price_usd to -1 and in_stock to False").
        The task string also tells the agent to choose the first available
        variant, preventing an infinite loop on variant selection.
      </p>
      <p>
        The full agent setup looks like this:
      </p>
      <pre>{`import asyncio
from pydantic import BaseModel, Field
from typing import Optional
from browser_use import Agent, BrowserSession
from browser_use.llm import ChatAnthropic

class ProductResult(BaseModel):
    name: str = Field(description="Product name as shown on the page")
    price_usd: float = Field(description="Current price in US dollars, no symbol")
    in_stock: bool = Field(description="True if the product can be added to cart")
    sku: Optional[str] = Field(None, description="SKU or product code if shown")

async def run_price_check():
    session = BrowserSession(
        user_data_dir="/tmp/price-monitor-profile",
        headless=True,
    )
    agent = Agent(
        task=(
            "Go to the product page at x-product-url. "
            "If there are size or color variants, select the first available one. "
            "Extract the product name, current price in USD, and stock status. "
            "If the price is not visible after two navigation attempts, "
            "set price_usd to -1 and in_stock to False. "
            "Return the result."
        ),
        llm=ChatAnthropic(model="claude-opus-4-5"),
        browser_session=session,
        sensitive_data={"x-product-url": "https://shop.example.com/items/42"},
        output_model=ProductResult,
        max_steps=15,
        max_failures=3,
    )
    result = await agent.run()
    return result.final_result()

if __name__ == "__main__":
    print(asyncio.run(run_price_check()))
`}</pre>
      <p>
        <strong>Week 9 (evaluation and deployment):</strong> this agent would
        run as a scheduled job using the CLI or the hosted cloud product. A
        task-set scorecard across 20 product URLs runs nightly and reports
        failure categories. When the fail-loop count rises, it usually means a
        site changed its variant selector layout, which is the most common
        source of drift on live pages (COLM 2025, arXiv 2504.01382).
      </p>

      <AnchorHeading as="h2" id="8-defending-the-design">
        8. Presenting and defending the design
      </AnchorHeading>
      <p>
        The capstone presentation is a design defense, not a demo. A demo shows
        a happy path. A defense answers "why did you design it this way?" for
        each major decision. Prepare to answer four questions for any agent you
        build.
      </p>
      <p>
        <strong>Why this task scope?</strong> Explain the stopping condition,
        what makes the task agent-ready, and why you did not split it into two
        tasks (or why you did).
      </p>
      <p>
        <strong>Why these tools?</strong> For each custom action, say what
        built-in action it replaces and why the built-in was not enough. For
        each built-in action you kept, say why it was sufficient.
      </p>
      <p>
        <strong>Why this output schema?</strong> Name the downstream consumer
        and explain each field. Say which fields are Optional and why. Explain
        what happens when the schema validation fails.
      </p>
      <p>
        <strong>What does your scorecard show?</strong> Give at least two
        results: one pass and one failure. For the failure, name the category
        and say what you would change. A scorecard with only passes is not
        credible; every real agent fails on some inputs.
      </p>

      <AnchorHeading as="h2" id="9-exercises">9. Exercises</AnchorHeading>

      <Exercise n={1}>
        <p>
          Write a one-sentence task string for a real multi-step task you want
          to automate. Apply the four-point agent-ready checklist: stopping
          condition, DOM-visible steps, no auth inside the task, one job per
          agent. Fix the sentence until it passes all four points.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          List every step in your task and sort them into two columns: covered
          by built-in actions (click, navigate, extract, type, scroll, done)
          and needs a custom action. For each custom action you identify, write
          the <code>@tools.action</code> function signature and the{" "}
          <code>ActionResult</code> it returns.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Design a Pydantic output model for your task. Name every field, give
          it a type annotation, mark Optional fields, and add a{" "}
          <code>Field(description=...)</code> for each. Confirm that a
          downstream caller could validate and consume the result without
          reading the agent's task string.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Run your agent against five tasks in your task set. For each result,
          record the outcome category: pass, fail-wrong-value, fail-no-output,
          fail-loop, or fail-crash. For each failure, write one sentence naming
          the root cause and whether it is a task-framing issue or a code issue.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Prepare a three-minute verbal defense of your agent design covering:
          (1) why the task scope is correct, (2) one tool choice justified,
          (3) the output schema explained field by field, and (4) two scorecard
          results including one failure with a proposed fix.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="10-going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The capstone studio worksheet
          walks you through scoping, building, and testing your agent in one
          session, ending with a structured peer defense. Complete the reading
          before arriving.
        </li>
        <li>
          <strong>Capstone project.</strong> The graded capstone handout is at{" "}
          <a
            href="/c/browser-use-26su/hw/capstone"
            rel="noopener noreferrer"
          >
            /c/browser-use-26su/hw/capstone
          </a>
          . It specifies the submission format, the agent-scorecard rubric, and
          the defense requirements.
        </li>
        <li>
          <strong>The bitter-lesson essay.</strong> Gregor Žunič's argument for
          a minimal loop with a maximal action space (Žunič, 2026) is the design
          philosophy behind every API decision you used this course. Read it
          once you have built your capstone agent: it reads differently when you
          have been inside the loop.
        </li>
        <li>
          <strong>COLM 2025 paper.</strong> The "Illusion of Progress" paper
          (arXiv 2504.01382) is worth reading in full before you report a
          scorecard number to anyone. It is a careful argument for why "passes
          our task set" is weaker evidence than it looks.
        </li>
      </ul>

      <Takeaways>
        <li>
          Scope the task first: a stopping condition, DOM-visible steps, auth
          handled externally, and one job per agent. Most reliability failures
          trace to a vague task string, not to code.
        </li>
        <li>
          Choose built-in actions (click, navigate, extract, type, done) until
          a step requires an external system, a local file, or domain
          restriction. Only then write a custom <code>@tools.action</code>.
        </li>
        <li>
          Design the output schema from the downstream consumer. Flat Pydantic
          models with <code>Field(description=...)</code> annotations give the
          LLM enough context to fill each field correctly and give callers
          type-safe results.
        </li>
        <li>
          Keep secrets out of the LLM context with <code>sensitive_data</code>,
          persist login sessions with <code>user_data_dir</code>, and restrict
          actions to known domains with <code>allowed_domains</code>.
        </li>
        <li>
          A task-set scorecard across 10-20 inputs with failure categories
          (pass, fail-wrong-value, fail-no-output, fail-loop, fail-crash) is
          more useful than a single pass/fail. Run it on live pages; scores on
          cached snapshots mislead (COLM 2025, arXiv 2504.01382).
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
            github.com/browser-use/browser-use
          </a>
          . The core run loop: perceive, decide, act, loop detection, and
          stopping conditions.
        </p>
        <p>
          browser-use contributors (2026).{" "}
          <em>browser_use/agent/views.py</em>.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use
          </a>
          . Pydantic models: AgentOutput, AgentBrain, ActionResult.
        </p>
        <p>
          browser-use team (2026). Browser Use docs: Agent Settings.{" "}
          <a
            href="https://docs.browser-use.com/customize/agent-settings"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/agent-settings
          </a>
          . Every Agent constructor parameter including max_steps, max_failures,
          output_model, sensitive_data, and planner.
        </p>
        <p>
          browser-use team (2026). Browser Use docs: Custom Functions (Tools).{" "}
          <a
            href="https://docs.browser-use.com/customize/custom-functions"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/custom-functions
          </a>
          . The @tools.action decorator, injected dependencies, and registering
          tools on an agent.
        </p>
        <p>
          browser-use team (2026). Browser Use docs: Output Format.{" "}
          <a
            href="https://docs.browser-use.com/customize/output-format"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/output-format
          </a>
          . Using output_model to return validated, typed data instead of prose.
        </p>
        <p>
          browser-use team (2026). Browser Use docs: Sensitive Data and Allowed
          Domains.{" "}
          <a
            href="https://docs.browser-use.com/customize/sensitive-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/sensitive-data
          </a>
          . Placeholder substitution and domain restrictions.
        </p>
        <p>
          browser-use team (2026). Browser Use docs: Browser Settings.{" "}
          <a
            href="https://docs.browser-use.com/customize/browser-settings"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/browser-settings
          </a>
          . BrowserSession configuration: headless, user_data_dir, keep_alive,
          recording.
        </p>
        <p>
          COLM 2025 (2025). An Illusion of Progress? Assessing the Current
          State of Web Agents. arXiv 2504.01382.{" "}
          <a
            href="https://arxiv.org/abs/2504.01382"
            target="_blank"
            rel="noopener noreferrer"
          >
            arxiv.org/abs/2504.01382
          </a>
          . Shows high benchmark scores fall sharply on live, current websites;
          a careful critique of web-agent evaluation.
        </p>
        <p>
          Žunič, Gregor / browser-use team (2026). The Bitter Lesson of Agent
          Frameworks.{" "}
          <a
            href="https://browser-use.com/posts/bitter-lesson-agent-frameworks"
            target="_blank"
            rel="noopener noreferrer"
          >
            browser-use.com/posts/bitter-lesson-agent-frameworks
          </a>
          . The design argument for a minimal loop with a maximal, simple action
          space.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk10ReadingSearchBody =
  "designing complete agent end to end scoping task agent-ready stopping condition decompose built-in vs custom tools @tools.action output schema Pydantic output model sensitive_data allowed_domains persistent profile user_data_dir authentication auth secrets production reliability guards max_steps max_failures planner loop detection task framing scorecard task-set failure categories pass fail-loop fail-crash worked example ProductResult perceive-decide-act selector map AgentOutput browser session tools registry custom action browser profile capstone design week 10 reading browser-use synthesis";
