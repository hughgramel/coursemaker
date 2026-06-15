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

export function Wk01Reading() {
  return (
    <ReadingPage
      id="wk01"
      title="Week 1: what browser-use is and the perceive-decide-act loop"
      kicker="Browser Use: How LLM Agents Drive the Web · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers four things: why automating a browser with an LLM is a different
          problem from writing a script, what browser-use is and how the project came to exist,
          how the <strong>perceive-decide-act loop</strong> works as the agent&rsquo;s operating
          cycle, and how to read an <strong>agent history</strong> after a run. By the end you
          will be able to run a browser-use agent against a live website, describe what happened
          at each step, and explain what role the LLM plays in the loop.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> None. This is week 1. Comfortable with Python
          and the command line; no prior experience with LLM agents, async Python, or browser
          automation is assumed. Async syntax is introduced here as needed.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-the-browser-as-universal-interface">
        1. The browser as the universal interface
      </AnchorHeading>
      <p>
        Most of the tasks people want to automate live behind a web browser. You can book a
        flight, file a tax form, check inventory, pull a price from a competitor, or submit a
        support ticket, and in all of these cases the interface is a web page. Programmatic APIs
        exist for some of these tasks, but the browser is the fallback for everything else.
        For a very large class of real-world tasks, if you can drive a browser, you can automate
        the task.
      </p>
      <p>
        The traditional answer to browser automation is a scripted tool: Playwright, Selenium,
        Puppeteer. You write code that names specific elements ("click the button with
        <code>id=&ldquo;submit&rdquo;</code>"), fills in specific fields, and follows a specific
        sequence of steps. This works well when the site is stable and the task is well-defined.
        It breaks the moment the site changes its layout, renames a class, or restructures its
        navigation. The script is a brittle artifact that must be maintained by someone who was
        not involved in building the site and has no advance warning of changes.
      </p>
      <p>
        The agent approach is different. Instead of naming elements by their selectors, you
        describe the task in plain English: &ldquo;Find the price of the 16-inch MacBook Pro on
        Apple&rsquo;s website.&rdquo; The agent reads the page, decides what to do, does it,
        reads the result, and repeats until the task is done. If the site&rsquo;s layout changes,
        the agent adapts, because it is reasoning about the page&rsquo;s content rather than
        following a hardcoded path (browser-use contributors, 2026).
      </p>

      <Callout title="The trade-off">
        <p>
          Agent-driven automation is more adaptable than scripted automation but also slower and
          less predictable. A tight Playwright script that works will always work the same way; an
          agent may take different paths on different runs. The right tool depends on the task: for
          stable, well-defined workflows, a script is usually better. For exploratory tasks, tasks
          on sites you do not control, or tasks where the goal is easier to state than to script,
          an agent is often the only practical approach.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="2-what-browser-use-is">
        2. What browser-use is
      </AnchorHeading>
      <p>
        browser-use is an open-source Python framework that lets an LLM agent control a real web
        browser to complete tasks described in plain English. You provide two things: a
        <strong> task</strong> (a string) and an <strong>LLM</strong> (a chat model object).
        browser-use opens a browser, reads the page, asks the LLM what to do next, executes that
        action, reads the result, and loops. The loop runs until the agent signals it is done or
        hits a step limit (browser-use team, 2026a).
      </p>
      <p>
        The minimal code to run an agent is:
      </p>
      <pre>{`import asyncio
from browser_use import Agent, ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

async def main():
    agent = Agent(
        task="Find the number 1 post on Show HN",
        llm=ChatOpenAI(model="gpt-4.1-mini"),
    )
    history = await agent.run()
    print(history.final_result())

asyncio.run(main())`}</pre>
      <p>
        The call to <code>agent.run()</code> is async because the loop interleaves browser I/O
        with LLM API calls; Python&rsquo;s <code>asyncio</code> lets both happen without blocking
        each other. <code>history</code> is an object that records every step of the run, and
        <code>history.final_result()</code> returns the agent&rsquo;s answer when it is done.
      </p>
      <p>
        browser-use ships its own native chat model wrappers: <code>ChatOpenAI</code>,{" "}
        <code>ChatAnthropic</code>, <code>ChatGoogle</code>, <code>ChatGroq</code>,{" "}
        <code>ChatOllama</code>, and others, plus a first-party <code>ChatBrowserUse</code>
        model. LangChain is not required and was removed as a core dependency in late 2025
        (browser-use community, 2025). You pass whichever chat model you want directly into{" "}
        <code>Agent(llm=...)</code>.
      </p>

      <AnchorHeading as="h2" id="3-origin-and-context">
        3. Origin and context
      </AnchorHeading>
      <p>
        browser-use was created by Magnus Müller and Gregor Žunič, who met as students at ETH
        Zurich. They launched the project on Hacker News in November 2024 with the title
        &ldquo;Show HN: Open-source browser alternative for Computer Use for any LLM&rdquo;
        (Müller, 2024). The reference to &ldquo;Computer Use&rdquo; was pointed: Anthropic had
        just released a Claude model with a built-in computer-use capability that worked from
        screenshots. The HN launch thread opened a debate about whether screenshot-based control
        or DOM-based control was the better approach for web agents. That debate is the subject of
        Week 2&rsquo;s reading; for now, note that browser-use chose the DOM-first path.
      </p>
      <p>
        Within months of the launch, the project accumulated tens of thousands of GitHub stars and
        became one of the fastest-growing open-source AI agent projects. The company went through
        Y Combinator (W25) and raised a seed round led by Felicis Ventures (Felicis, 2025). A
        hosted cloud product now exists alongside the open-source library, and a CLI lets users
        run agents from the command line without writing Python.
      </p>
      <p>
        The founder podcast interview (Open Source Startup Podcast, 2026) gives useful context
        on how they thought about the problem: the insight was that web pages, despite their
        visual complexity, have a structured representation in the DOM that is far more efficient
        to pass to an LLM than a raw screenshot. The early traction validated that this was a
        problem many developers wanted solved.
      </p>

      <AnchorHeading as="h2" id="4-the-perceive-decide-act-loop">
        4. The perceive-decide-act loop
      </AnchorHeading>
      <p>
        Every step of a browser-use run follows a fixed three-phase cycle. This cycle is the
        central idea of the course: you will return to it in every subsequent week as you look
        more closely at each phase.
      </p>

      <Mermaid
        alt="The perceive-decide-act loop: Perceive reads the browser state, Decide asks the LLM for an action, Act executes the action and returns a result, which feeds the next Perceive phase."
        chart={`flowchart LR
  P[Perceive\\nbrowser state] --> D[Decide\\nLLM picks action] --> A[Act\\naction runs] --> P`}
      />

      <p>
        <strong>Perceive.</strong> At the start of each step, a <code>BrowserSession</code>{" "}
        captures a browser-state summary: the current URL, the page title, a serialized
        representation of the page&rsquo;s content, and optionally a screenshot. This summary is
        everything the LLM will see about the page for this step. The agent does not watch the
        page in real time; it works from this snapshot.
      </p>
      <p>
        <strong>Decide.</strong> A <code>MessageManager</code> assembles the LLM&rsquo;s input:
        the system prompt (which contains the task description and a description of the available
        actions), the browser-state summary from the Perceive phase, and recent history from
        previous steps. The LLM is asked to reply in a fixed structured shape called{" "}
        <code>AgentOutput</code>. The model cannot reply in free text; it must fill in specific
        fields. This structure is what makes the loop reliable: the framework can always parse
        the reply and extract the action (browser-use contributors, 2026).
      </p>
      <p>
        <strong>Act.</strong> The <code>action</code> field of <code>AgentOutput</code> names one
        or more browser actions to execute: click, type text, navigate to a URL, scroll, extract
        page content, or <code>done</code> (which ends the loop). Each action runs in the real
        browser. The result, called an <code>ActionResult</code>, is fed back into the next
        Perceive phase as part of the history.
      </p>
      <p>
        The loop continues until the agent emits <code>done</code> or the run hits{" "}
        <code>max_steps</code>. If the agent emits <code>done</code>, it carries a string answer
        that becomes <code>history.final_result()</code>. If the run ends at{" "}
        <code>max_steps</code> without a <code>done</code>, <code>history.is_done()</code>{" "}
        returns <code>False</code> and <code>final_result()</code> returns <code>None</code>.
      </p>

      <AnchorHeading as="h2" id="5-the-llm-as-controller">
        5. The LLM as controller
      </AnchorHeading>
      <p>
        In a traditional script, the developer is the controller: they decide the sequence of
        steps at write time. In browser-use, the LLM is the controller: it decides the sequence
        of steps at run time, based on what the page looks like. The developer&rsquo;s job is to
        write a clear task description; the LLM&rsquo;s job is to figure out how to accomplish it.
      </p>
      <p>
        This means the LLM must be capable of two things: reading a page representation and
        understanding what is on it, and choosing among available actions in a way that makes
        progress toward the task. Both capabilities are why recent large language models are
        suitable for this role where earlier models were not. A model that cannot reliably follow
        instructions or that frequently confuses visual layout with meaning will make a poor
        controller.
      </p>
      <p>
        The LLM does not touch the browser directly. It communicates exclusively through the
        structured <code>AgentOutput</code> reply. browser-use translates the reply into actual
        browser operations via Playwright (for the stable Python agent; the project&rsquo;s newer
        work moves toward direct Chrome DevTools Protocol calls). This separation is deliberate:
        the LLM concerns itself only with <em>what</em> to do; the framework handles <em>how</em>
        to do it in the browser.
      </p>

      <AnchorHeading as="h2" id="6-agent-output-the-decision-shape">
        6. AgentOutput: the decision shape
      </AnchorHeading>
      <p>
        <code>AgentOutput</code> is a Pydantic model defined in{" "}
        <code>browser_use/agent/views.py</code>. Its fields are (browser-use contributors, 2026):
      </p>
      <ul>
        <li>
          <strong><code>evaluation_previous_goal</code></strong>: a string saying whether the
          previous step&rsquo;s goal was achieved. This is the agent&rsquo;s self-assessment.
        </li>
        <li>
          <strong><code>memory</code></strong>: a string of notes the agent carries forward
          across steps. Useful information that would otherwise be lost between steps can be
          written here.
        </li>
        <li>
          <strong><code>next_goal</code></strong>: a string describing what this step aims to
          accomplish. This is what you see in a step-by-step history printout.
        </li>
        <li>
          <strong><code>action</code></strong>: a list of one or more action objects to execute.
          Each action has a name and parameters. The agent can emit several actions in one step.
        </li>
      </ul>
      <p>
        The <code>current_state</code> property of <code>AgentOutput</code> bundles
        <code>evaluation_previous_goal</code>, <code>memory</code>, and <code>next_goal</code>{" "}
        into an <code>AgentBrain</code> object. You will see references to both{" "}
        <code>step.state</code> and <code>step.model_output</code> when reading history in code.
      </p>

      <Callout title="Why structure matters">
        <p>
          If the LLM could reply in free text, the framework would have to parse that text to
          figure out what action to take. Natural language parsing is unreliable: the model might
          say &ldquo;I think I should click the login button&rdquo; or &ldquo;clicking on
          login&rdquo; or use a dozen other phrasings. Pydantic validation plus the LLM&rsquo;s
          function-calling capability forces the reply into a shape the framework can always
          execute. One structured field, one executable action.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="7-the-task-prompt">
        7. The task prompt
      </AnchorHeading>
      <p>
        The task you pass to <code>Agent(task=...)</code> is the primary input that shapes the
        entire run. A well-written task gives the agent a clear, concrete goal. A vague task
        produces vague behavior.
      </p>
      <p>
        Good task prompts are:
      </p>
      <ul>
        <li>
          <strong>Specific about the goal.</strong> &ldquo;Find the price of item X and return
          just the number&rdquo; is better than &ldquo;look up item X.&rdquo;
        </li>
        <li>
          <strong>Honest about constraints.</strong> If the agent should only look at one
          website, say so. If it should stop after finding the first result, say so.
        </li>
        <li>
          <strong>Decomposed if necessary.</strong> For multi-step tasks, listing the steps
          explicitly often helps: &ldquo;First log in at example.com/login, then navigate to
          the orders page, then return the order number for the most recent order.&rdquo;
        </li>
      </ul>
      <p>
        The task is also the agent&rsquo;s north star for <code>evaluation_previous_goal</code>:
        the agent compares what it did to what the task asks, not to some external judge. A task
        that is too vague to evaluate reliably produces inconsistent loop behavior.
      </p>

      <AnchorHeading as="h2" id="8-max-steps-and-stopping">
        8. max_steps and the stopping condition
      </AnchorHeading>
      <p>
        <code>max_steps</code> is an integer passed to <code>Agent(max_steps=...)</code>. It
        sets the maximum number of perceive-decide-act cycles the agent will run before stopping,
        regardless of whether the task is done. The default value is set in the agent
        configuration (browser-use team, 2026b).
      </p>
      <p>
        Setting <code>max_steps</code> is a safety valve. An agent without a step limit could
        in principle loop indefinitely on a task it cannot complete: visiting the same page
        repeatedly, trying the same action that keeps failing, or wandering through a site
        without converging. browser-use also tracks repeated actions and stagnant pages to detect
        loops, and has a <code>max_failures</code> parameter that stops the run after a
        configurable number of consecutive failures. Together, these guards keep runaway agents
        from consuming unbounded time and tokens.
      </p>
      <p>
        In practice, most simple tasks complete in 5-15 steps. A step limit of 20-30 is a
        reasonable starting point for tasks of moderate complexity. If you are running many tasks
        in a pipeline where each task is bounded, set <code>max_steps</code> conservatively:
        an agent that hits the limit on one task should not prevent the rest of the pipeline from
        running.
      </p>

      <AnchorHeading as="h2" id="9-agent-history">
        9. Agent history
      </AnchorHeading>
      <p>
        <code>agent.run()</code> returns a history object. The history records every step of the
        run, from the first perceive phase to the final action. Reading the history is the primary
        way to understand what an agent did and why.
      </p>
      <p>
        Each entry in <code>history.history</code> is a <code>AgentHistory</code> object with:
      </p>
      <ul>
        <li>
          <strong><code>state</code></strong>: an <code>AgentBrain</code> with{" "}
          <code>evaluation_previous_goal</code>, <code>memory</code>, and{" "}
          <code>next_goal</code>.
        </li>
        <li>
          <strong><code>model_output</code></strong>: the full <code>AgentOutput</code> the LLM
          returned for this step, including the action list.
        </li>
        <li>
          <strong><code>result</code></strong>: a list of <code>ActionResult</code> objects, one
          per action executed. Each contains whether the action succeeded, any extracted content,
          and an optional long-term memory note.
        </li>
      </ul>
      <p>
        A minimal history walk looks like this:
      </p>
      <pre>{`for i, step in enumerate(history.history):
    state = step.state
    print(f"Step {i+1}")
    print(f"  Goal:   {state.next_goal}")
    print(f"  Memory: {state.memory}")
    if step.model_output:
        for action in step.model_output.action:
            print(f"  Action: {action}")`}</pre>
      <p>
        This is enough to reconstruct what the agent was thinking at each step. The{" "}
        <code>next_goal</code> field tells you what the agent decided to accomplish; the action
        list tells you how it tried to do it; and the <code>result</code> list tells you whether
        it worked. When a run produces a wrong answer, reading these three fields step by step
        will almost always show you where the agent went wrong.
      </p>

      <AnchorHeading as="h2" id="10-async-python-a-brief-note">
        10. Async Python: a brief note
      </AnchorHeading>
      <p>
        browser-use uses Python&rsquo;s <code>asyncio</code> library for concurrency. If you have
        not written async Python before, the pattern is simple: any function that does I/O can be
        declared <code>async def</code>, and you call it with <code>await</code>. The{" "}
        <code>asyncio.run(main())</code> call at the bottom of a script is the entry point.
      </p>
      <p>
        You do not need to understand the internals of the event loop to use browser-use. The
        one thing to know is that <code>await agent.run()</code> blocks until the agent is
        done, just like a synchronous function call would; it just does so without blocking the
        entire Python process. If you are running in a Jupyter notebook, use{" "}
        <code>await agent.run()</code> directly (Jupyter runs its own event loop).
      </p>

      <AnchorHeading as="h2" id="11-install-and-first-run">
        11. Install and first run
      </AnchorHeading>
      <p>
        Install browser-use with the <code>[core]</code> extra (Python 3.11+ required):
      </p>
      <pre>{`pip install "browser-use[core]"
# or: uv add "browser-use[core]"`}</pre>
      <p>
        Set an API key for whatever LLM you want to use. For OpenAI:
      </p>
      <pre>{`export OPENAI_API_KEY=sk-...`}</pre>
      <p>
        Run the quickstart:
      </p>
      <pre>{`import asyncio
from browser_use import Agent, ChatOpenAI

async def main():
    agent = Agent(
        task="Find the number of stars of the browser-use repo on GitHub",
        llm=ChatOpenAI(model="gpt-4.1-mini"),
    )
    history = await agent.run()
    print(history.final_result())

asyncio.run(main())`}</pre>
      <p>
        The first run will open a browser window (headless by default on most systems). You will
        see log output in the console for each step. The final line prints the agent&rsquo;s
        answer (browser-use team, 2026a).
      </p>

      <AnchorHeading as="h2" id="12-exercises">
        12. Exercises
      </AnchorHeading>

      <Exercise n={1}>
        <p>
          Draw the perceive-decide-act loop from memory. For each phase, name: (a) what data
          enters that phase, (b) what component of browser-use is responsible, and (c) what data
          leaves that phase and goes to the next. Do this without looking at the diagram in this
          reading.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          List the four fields of <code>AgentOutput</code> and explain in one sentence what each
          one is for. Then explain why requiring the LLM to reply in this fixed shape rather than
          free text makes the loop more reliable.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write two versions of a task prompt for the following goal: &ldquo;find out what the
          top comment says on the most recent post on Hacker News.&rdquo; The first version
          should be vague (likely to produce inconsistent behavior). The second should be specific
          and well-constrained. Explain what makes each version better or worse.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Run a browser-use agent on any task that takes at least four steps. After the run,
          pick one step and annotate it completely: what did the agent perceive (URL, page content
          summary), what did it decide (next_goal, memory, action chosen), and what happened (the
          ActionResult). Do this from the history object, not from memory.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Run the same task twice: once with <code>max_steps=3</code> and once with{" "}
          <code>max_steps=20</code>. Compare the two history objects. What did the
          three-step run accomplish before stopping? What does <code>history.is_done()</code>
          return in each case? What does <code>history.final_result()</code> return in each case?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="13-going-deeper">
        13. Going deeper
      </AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section worksheet asks you to install
          browser-use, run three tasks against live websites, annotate one run step-by-step as
          perceive-decide-act, and experiment with <code>max_steps</code>. Bring a working install
          and an API key.
        </li>
        <li>
          <strong>Week 2 lecture and reading.</strong> The next topic is how the agent actually
          sees a web page: the DOM, the accessibility tree, and the numbered element index that
          gives the agent its action vocabulary. That reading builds directly on the loop you
          learned here.
        </li>
        <li>
          <strong>The HN launch thread</strong> (Müller, 2024) is worth reading: it shows the
          early debate about screenshot-based versus DOM-based agents, which is the central
          question of Week 2.
        </li>
        <li>
          <strong>The GitHub source</strong> (<code>browser_use/agent/service.py</code>) is the
          run loop. Reading it after finishing this week&rsquo;s section is a good way to see how
          the perceive-decide-act cycle maps to real code.
        </li>
      </ul>

      <Takeaways>
        <li>
          The browser is the universal interface for tasks that have no API. Scripted automation
          is brittle under site changes; agent-driven automation adapts by reasoning about page
          content rather than following hardcoded paths.
        </li>
        <li>
          browser-use takes a task (plain English) and an LLM, opens a real browser, and runs a
          perceive-decide-act loop until the task is done or <code>max_steps</code> is reached.
        </li>
        <li>
          Each step: Perceive captures the browser state (URL, title, page content); Decide asks
          the LLM to reply in the <code>AgentOutput</code> shape; Act executes the chosen action
          and feeds the result back into the next step.
        </li>
        <li>
          The LLM is the controller, not the executor. It replies in a fixed Pydantic shape;
          browser-use translates that into real browser operations. This separation is what makes
          the loop reliable.
        </li>
        <li>
          The agent history records every step. Reading <code>next_goal</code>, the action list,
          and the <code>ActionResult</code> for each step is the primary debugging tool.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          browser-use contributors (2026). browser_use/agent/service.py (agent run loop source).{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py
          </a>
          . The core run loop: state capture, message construction, structured decision, action
          dispatch, and feedback. The authoritative source for understanding each phase of the
          perceive-decide-act cycle.
        </p>
        <p>
          browser-use community (2025). GitHub issue #2137: migrate from LangChain to native LLM
          wrappers.{" "}
          <a
            href="https://github.com/browser-use/browser-use/issues/2137"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use/issues/2137
          </a>
          . Documents the removal of LangChain as a core dependency and the move to native chat
          wrappers including ChatOpenAI, ChatAnthropic, and ChatGoogle.
        </p>
        <p>
          browser-use team (2026a). Browser Use docs: Quickstart.{" "}
          <a
            href="https://docs.browser-use.com/quickstart"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/quickstart
          </a>
          . Install, set an LLM API key, and run a first agent in a few lines of Python. The
          canonical getting-started reference.
        </p>
        <p>
          browser-use team (2026b). Browser Use docs: Agent Settings.{" "}
          <a
            href="https://docs.browser-use.com/customize/agent-settings"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/agent-settings
          </a>
          . Every Agent constructor parameter, including max_steps, max_failures, and the planner
          model option.
        </p>
        <p>
          Felicis Ventures (2025). Investing in Browser Use.{" "}
          <a
            href="https://www.felicis.com/blog/investing-in-browser-use"
            target="_blank"
            rel="noopener noreferrer"
          >
            felicis.com/blog/investing-in-browser-use
          </a>
          . Origin story and product positioning from the lead investor in the seed round; covers
          the founder backgrounds and what problem they set out to solve.
        </p>
        <p>
          Müller, Magnus (2024). Show HN: Open-source browser alternative for Computer Use for
          any LLM.{" "}
          <a
            href="https://news.ycombinator.com/item?id=42052432"
            target="_blank"
            rel="noopener noreferrer"
          >
            news.ycombinator.com/item?id=42052432
          </a>
          . The November 2024 Hacker News launch thread. Founder framing of the project and an
          early technical debate on screenshot-based versus DOM-based agent approaches.
        </p>
        <p>
          Open Source Startup Podcast (2026). Episode 192: Creating Browser Use.{" "}
          <a
            href="https://ossstartuppodcast.substack.com/p/episode-192-creating-browser-use"
            target="_blank"
            rel="noopener noreferrer"
          >
            ossstartuppodcast.substack.com/p/episode-192-creating-browser-use
          </a>
          . Founder interview on the origin of browser-use, the rapid early growth, reliability
          challenges, and the longer-term vision for web agents.
        </p>
        <p>
          browser-use team (2026). browser-use on PyPI.{" "}
          <a
            href="https://pypi.org/project/browser-use/"
            target="_blank"
            rel="noopener noreferrer"
          >
            pypi.org/project/browser-use/
          </a>
          . Latest version, install command, and optional extras. Confirms the current install
          path (<code>pip install &ldquo;browser-use[core]&rdquo;</code>) and notes that existing
          Python agent users continue to use <code>from browser_use import Agent</code>.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk01ReadingSearchBody =
  "browser-use agent loop perceive decide act LLM controller task prompt agent history max_steps asyncio ChatOpenAI ChatAnthropic ChatGoogle AgentOutput BrowserSession MessageManager structured output Pydantic browser automation scripted versus agent Magnus Müller Gregor Žunič ETH Zurich YC W25 Felicis browser-use install quickstart Week 1 reading browser-use course";
