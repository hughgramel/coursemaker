import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk02SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="mapping-indices-to-elements">
        Section: Mapping indices to elements
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 2 · Hands-on worksheet</p>

      <p>
        By the end of this session you will have dumped the serialized DOM and
        selector map for three real pages, matched each integer index to a
        visible element on screen, and observed exactly which elements the DOM
        service keeps versus discards. You will also have written a short agent
        that prints the selector map before acting, so you can see what the
        model sees.
      </p>

      <AnchorHeading as="h2" id="part-0-memory-drill">
        Part 0: Write from memory (5 minutes, no looking up)
      </AnchorHeading>

      <p>
        Before running any code, write down your answers to the following
        questions from week 1. The goal is calibration: finding the gaps
        between what you think you know and what the code actually does.
      </p>

      <ol>
        <li>
          In the perceive-decide-act loop, what does the agent receive during
          the perceive step? Name the four things listed in the verified facts.
        </li>
        <li>
          What is the stopping condition for the agent loop? Name both stopping
          mechanisms.
        </li>
        <li>
          What Python class do you import to run a browser-use agent? Write the
          import line from memory.
        </li>
        <li>
          In your own words, what is a &ldquo;browser-state summary&rdquo; and
          why does it exist?
        </li>
        <li>
          In week 1 you ran at least one agent task. Without looking at the
          history, describe what happened at step 1: what did the agent see,
          what did it decide, and what did it do?
        </li>
      </ol>

      <p>
        Write your five answers down and date them. You will compare them to
        what you observe in Part 2.
      </p>

      <AnchorHeading as="h2" id="part-1-inspect-the-dom-tree-in-devtools">
        Part 1: Inspect the DOM tree and accessibility tree in DevTools
      </AnchorHeading>

      <p>
        Before writing any Python, spend five minutes with the browser&rsquo;s
        own tools. This grounds the code in something you can see.
      </p>

      <ol>
        <li>
          Open any moderately complex page (for example, github.com or
          news.ycombinator.com) in Chrome.
        </li>
        <li>
          Open DevTools (F12 or Cmd-Opt-I). In the <strong>Elements</strong>{" "}
          panel, expand the DOM tree. Find a button or link element. Note its
          tag, class, and any <code>aria-label</code> attributes.
        </li>
        <li>
          Still in the Elements panel, select that element. Look at the{" "}
          <strong>Accessibility</strong> tab (you may need to enable it from
          More tools). Note the{" "}
          <strong>role</strong>, <strong>name</strong>, and{" "}
          <strong>description</strong> fields. These are the same fields
          browser-use reads from the accessibility tree.
        </li>
        <li>
          In the DevTools <strong>Console</strong>, run:
          <pre>{`document.querySelectorAll('a, button, input, select, textarea').length`}</pre>
          Note the count. Then run:
          <pre>{`[...document.querySelectorAll('a, button, input, select, textarea')]
  .filter(el => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.top < window.innerHeight;
  }).length`}</pre>
          The second number is the set of elements that pass a rough
          viewport-visibility check. The gap between the two numbers is how
          many elements the DOM service would filter out.
        </li>
      </ol>

      <p>
        Write down both counts and the page you tested. You will revisit these
        numbers after Part 2.
      </p>

      <AnchorHeading as="h2" id="part-2-dump-the-selector-map">
        Part 2: Dump the selector map from browser-use
      </AnchorHeading>

      <p>
        browser-use exposes the DOM state through the{" "}
        <code>BrowserSession</code> and the agent&rsquo;s history. The
        simplest way to see the selector map is to run an agent against a page
        and inspect what it received in the perceive step.
      </p>

      <p>
        <strong>Step 2a: Install and confirm your setup.</strong>
      </p>
      <pre>{`# If you have not already done this from week 1:
pip install browser-use
playwright install chromium

# Confirm the install works:
python -c "from browser_use import Agent; print('ok')"
`}</pre>

      <p>
        <strong>Step 2b: Run a one-step agent and print what it sees.</strong>
      </p>
      <pre>{`import asyncio
from browser_use import Agent
from browser_use.llm import ChatOpenAI  # or ChatAnthropic, ChatGoogle

async def inspect_page(url: str) -> None:
    """Run one perceive step and print the browser-state summary."""
    llm = ChatOpenAI(model="gpt-4o-mini")  # any supported model

    agent = Agent(
        task=f"Go to {url} and tell me how many interactive elements you can see. "
             "After counting, call done.",
        llm=llm,
        max_steps=3,
    )

    history = await agent.run()

    # The history stores what the agent saw at each step.
    # Print the model output for each step to see what it received.
    for i, step in enumerate(history.history):
        print(f"\\n--- Step {i} ---")
        if step.model_output:
            state = step.model_output.current_state
            print(f"  next_goal: {state.next_goal}")
            print(f"  memory:    {state.memory}")
        if step.result:
            for r in step.result:
                if r.extracted_content:
                    print(f"  extracted: {r.extracted_content[:300]}")

asyncio.run(inspect_page("https://news.ycombinator.com"))
`}</pre>

      <p>
        Run this script. Note how many steps the agent uses and what it reports
        as its <code>next_goal</code> at step 0. The agent&rsquo;s goal text
        at step 0 reflects what it decided to do after seeing the page state.
      </p>

      <p>
        <strong>Step 2c: Run against three pages.</strong>
      </p>
      <p>
        Repeat the script for three different pages: a content-heavy site like
        Hacker News, a login form (you can use accounts.google.com or any
        similar page), and a single-product e-commerce page of your choice.
        For each, note:
      </p>
      <ol>
        <li>
          What URL was the agent on at step 0?
        </li>
        <li>
          What did the agent report as its goal after perceiving the page?
        </li>
        <li>
          Did the agent mention any specific element numbers in its output?
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-match-indices-to-on-screen-elements">
        Part 3: Match indices to on-screen elements
      </AnchorHeading>

      <p>
        Now give the agent a task that forces it to refer to elements by
        index, then find those elements on screen yourself.
      </p>

      <pre>{`import asyncio
from browser_use import Agent
from browser_use.llm import ChatOpenAI

async def trace_click(url: str, task: str) -> None:
    """Run an agent and capture which element indices it clicks."""
    llm = ChatOpenAI(model="gpt-4o-mini")

    agent = Agent(
        task=task,
        llm=llm,
        max_steps=5,
        # Set headless=False so you can watch the browser
        # BrowserSession is covered in detail in week 3; for now,
        # pass headless=False through the browser_config parameter
    )

    history = await agent.run()

    for i, step in enumerate(history.history):
        print(f"\\n--- Step {i} ---")
        if step.model_output:
            state = step.model_output.current_state
            print(f"  next_goal: {state.next_goal}")
            for action in step.model_output.action:
                # Each action is a Pydantic model; print its fields
                print(f"  action:    {action}")

asyncio.run(trace_click(
    url="https://news.ycombinator.com",
    task="Find the first story link on Hacker News and click it. Then call done."
))
`}</pre>

      <p>
        While the script runs (run with <code>headless=False</code> in your
        browser session config, which you will configure fully in week 3), watch
        the browser. When the agent clicks an element:
      </p>
      <ol>
        <li>
          Pause the terminal output (Ctrl-S works in some terminals) and look
          at the browser. Which element was highlighted or clicked?
        </li>
        <li>
          Note the element index that appeared in the action log.
        </li>
        <li>
          Can you find a second element on the same page with an index one
          higher and one lower? Describe what those elements are.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-observe-visibility-filtering">
        Part 4: Observe visibility filtering
      </AnchorHeading>

      <p>
        Not every element in the DOM gets an index. The DOM service filters out
        hidden and off-viewport elements before numbering. This part shows the
        filter in practice.
      </p>

      <p>
        Choose a page that has a cookie banner or modal dialog (many news sites
        show one on first visit). Run your inspect script against it. Then:
      </p>

      <ol>
        <li>
          Does the agent&rsquo;s first goal mention the cookie banner or modal?
          If so, the banner is visible in the indexed elements.
        </li>
        <li>
          Scroll to the bottom of the page in the browser while the agent is
          on a later step. Does the agent&rsquo;s goal change to mention
          elements that were previously off-screen?
        </li>
        <li>
          In the DevTools Console, hide an element with:
          <pre>{`document.querySelector('nav').style.display = 'none'`}</pre>
          Then reload the agent. Does the navigation disappear from the
          agent&rsquo;s reported elements?
        </li>
      </ol>

      <p>
        These observations confirm that browser-use&rsquo;s visibility filter
        operates on the rendered state of the page, not just the HTML source.
        An element that exists in the DOM but is hidden gets no index.
      </p>

      <AnchorHeading as="h2" id="part-5-interleaving">
        Part 5: Interleaving task (connects to week 1 perceive-decide-act loop)
      </AnchorHeading>

      <p>
        This part reuses the perceive-decide-act loop from week 1 to explain
        what you observed in parts 2-4.
      </p>

      <p>
        Write a short narration (three to five sentences per step) of one
        complete agent run from parts 2 or 3. For each step, describe:
      </p>
      <ul>
        <li>
          <strong>Perceive:</strong> what the DOM service extracted from the
          page at this step (what elements were indexed, what was visible).
        </li>
        <li>
          <strong>Decide:</strong> what the LLM chose to do, and which element
          index it targeted.
        </li>
        <li>
          <strong>Act:</strong> what happened in the browser when that index
          was resolved and the click or input was sent.
        </li>
      </ul>

      <p>
        This narration is the connecting thread between week 1 concepts and
        week 2 concepts. The DOM service is what makes &ldquo;perceive&rdquo;
        possible: without it, the LLM would see either raw HTML (too large) or
        only a screenshot (requires vision capability).
      </p>

      <AnchorHeading as="h2" id="rubric">
        Self-grading rubric
      </AnchorHeading>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9em" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Checkpoint</th>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Done?</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Part 0 memory-drill answers written before running any code",
              "DevTools DOM and accessibility tab inspected on one real page",
              "Raw element count vs viewport-visible element count recorded",
              "inspect_page script run against three different pages",
              "Element indices observed in agent action output for at least one click",
              "One on-screen element matched to its integer index in the action log",
              "Visibility filtering observed: at least one hidden element confirmed absent from the indexed set",
              "Perceive-decide-act narration written for one complete run",
            ].map((item) => (
              <tr key={item}>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>{item}</td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", color: "#999" }}>[ ]</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        If any checkbox is empty at the end of the session, complete it before
        moving to week 3. The selector map and visibility-filter behavior are
        the foundation for understanding the browser-state summary in week 3.
      </p>
    </>
  );
}

export const wk02SectionSearchBody =
  "selector map element index numbered elements DOM tree accessibility tree visibility filtering interactive elements browser-use CDP inspector devtools perceive-decide-act loop memory drill week 2 section mapping indices to elements hands-on worksheet";
