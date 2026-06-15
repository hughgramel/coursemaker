import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk03SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="two-sessions-two-state-summaries">
        Section: Two sessions, two state summaries
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 3 · Hands-on worksheet</p>

      <p>
        By the end of this session you will have configured a{" "}
        <code>BrowserSession</code> two ways, captured the browser-state summary
        each configuration produces for the same target page, and compared the
        output side by side. You will see exactly what the LLM receives as its
        "eyes" at each agent step, and you will understand what changes and what
        stays constant across configurations.
      </p>

      <p>
        You need a working browser-use installation, an OpenAI or Anthropic API
        key set in your environment, and Python 3.11 or later. All code in this
        worksheet is illustrative teaching code that is plausibly correct against
        the browser-use API as of mid-2026; verify against the installed version
        if anything fails.
      </p>

      <AnchorHeading as="h2" id="part-0-retrieval-drill">
        Part 0: Retrieval drill (5 minutes, no notes)
      </AnchorHeading>

      <p>
        Before opening any code or reading, answer these from memory. Write your
        answers in a scratch file, then check them against the week 2 reading
        and lecture slides.
      </p>

      <ol>
        <li>
          <strong>DOM filtering.</strong> Name three categories of DOM elements
          that the browser-use DOM service excludes from the numbered index.
          Why does excluding them produce a better agent context than including
          everything?
        </li>
        <li>
          <strong>The selector map.</strong> What is a selector map? What is
          the data type of its keys? What is the data type of its values? How
          does the agent use the map at action time?
        </li>
        <li>
          <strong>Vision vs DOM.</strong> In week 2 you compared the DOM-first
          and screenshot-first approaches. Without looking at notes: name one
          task type where a screenshot adds information the DOM text
          representation cannot carry. Name one task type where DOM-only is
          sufficient and a screenshot would add cost without benefit.
        </li>
        <li>
          <strong>The perceive step.</strong> Recall the agent loop from week 1.
          The perceive step runs before the decide step. What does the perceive
          step produce, and who receives its output?
        </li>
      </ol>

      <p>
        If you missed question 2 or 4, re-read section 3 of the week 3 reading
        before continuing. Those concepts are the foundation for everything in
        this session.
      </p>

      <AnchorHeading as="h2" id="part-1-setup">
        Part 1: Setup and a baseline run
      </AnchorHeading>

      <p>
        Start with a minimal agent run to confirm your environment is working.
        Use <code>news.ycombinator.com</code> as the target page throughout
        this session; it has a stable structure and no login requirement.
      </p>

      <pre>{`import asyncio
from browser_use import Agent, BrowserSession
from browser_use.llm import ChatOpenAI  # or ChatAnthropic

async def run_one_step(session: BrowserSession) -> None:
    agent = Agent(
        task="Go to news.ycombinator.com and tell me the title of the first story.",
        llm=ChatOpenAI(model="gpt-4o"),
        browser_session=session,
        max_steps=3,
    )
    history = await agent.run()
    print(history.final_result())

session = BrowserSession(headless=True)
asyncio.run(run_one_step(session))`}</pre>

      <ol>
        <li>
          Run the code above. Confirm the agent returns a story title. If it
          fails, check that your API key is set and that Playwright is installed
          (<code>playwright install chromium</code>).
        </li>
        <li>
          Read the printed output. Identify the final result. This confirms the
          perceive-decide-act loop is completing at least one step.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-capture-the-state-summary-directly">
        Part 2: Capture the state summary directly
      </AnchorHeading>

      <p>
        The agent captures state automatically during a run. To inspect the raw
        state summary, you can use the session's DOM service directly, outside of
        a full agent run. This lets you see what the LLM actually receives as
        its page input.
      </p>

      <pre>{`import asyncio
from browser_use import BrowserSession

async def capture_state(session: BrowserSession, url: str) -> None:
    await session.start()
    page = await session.get_current_page()
    await page.goto(url)

    # The DOM service is accessible on the session
    state = await session.get_state_summary(cache_clickable_elements_hashes=False)

    print("=== URL ===")
    print(state.url)
    print()
    print("=== Title ===")
    print(state.title)
    print()
    print("=== Element count in selector_map ===")
    print(len(state.selector_map))
    print()
    print("=== First 10 elements ===")
    for idx, locator in list(state.selector_map.items())[:10]:
        print(f"  [{idx}] {locator}")
    print()
    print("=== DOM text (first 500 chars) ===")
    print(str(state.element_tree)[:500])

    await session.close()

session = BrowserSession(headless=True)
asyncio.run(capture_state(session, "https://news.ycombinator.com"))`}</pre>

      <ol start={3}>
        <li>
          Run this code and capture the output. Count the number of elements in
          the selector map. This is the LLM's full vocabulary for this page:
          every action it can take must refer to one of these indices.
        </li>
        <li>
          Look at the first 10 elements. Identify what each one represents on
          the page (link to a story, vote button, comment count, etc.). Do this
          without opening a browser; use the label text in the element tree to
          infer what each element is.
        </li>
        <li>
          Note the URL and title fields. These match what you would see in the
          browser address bar and tab. Confirm they are what you expected.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-session-a-dom-only">
        Part 3: Session A - DOM-only (no vision)
      </AnchorHeading>

      <p>
        Now configure the first of the two sessions you will compare. Session A
        is the default: headless, no vision. This is the configuration used by
        most production browser-use agents running text-only models.
      </p>

      <pre>{`import asyncio
from browser_use import BrowserSession

async def session_a(url: str) -> dict:
    session = BrowserSession(headless=True)
    await session.start()
    page = await session.get_current_page()
    await page.goto(url)

    state = await session.get_state_summary(cache_clickable_elements_hashes=False)

    result = {
        "url": state.url,
        "title": state.title,
        "element_count": len(state.selector_map),
        "has_screenshot": state.screenshot is not None,
        "dom_text_length": len(str(state.element_tree)),
    }
    await session.close()
    return result

url = "https://news.ycombinator.com"
result_a = asyncio.run(session_a(url))
print("Session A (DOM-only):")
for k, v in result_a.items():
    print(f"  {k}: {v}")`}</pre>

      <ol start={6}>
        <li>
          Record the output. Note <code>has_screenshot</code> (should be False
          or None), <code>element_count</code>, and <code>dom_text_length</code>.
          These are the baseline numbers.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-session-b-vision-enabled">
        Part 4: Session B - vision enabled
      </AnchorHeading>

      <p>
        Session B adds <code>use_vision=True</code> to the agent. This tells the
        DOM service to include a screenshot in the state summary. Note that
        <code>use_vision</code> is an <code>Agent</code> parameter, not a
        <code>BrowserSession</code> parameter: the session captures the
        screenshot when the agent requests it.
      </p>

      <pre>{`import asyncio
import base64
from browser_use import Agent, BrowserSession
from browser_use.llm import ChatOpenAI

async def session_b_capture(url: str) -> dict:
    session = BrowserSession(headless=True)
    await session.start()
    page = await session.get_current_page()
    await page.goto(url)

    # With use_vision, the state summary includes a screenshot.
    # We capture it via take_screenshot directly to inspect size.
    screenshot_bytes = await page.screenshot()
    state = await session.get_state_summary(cache_clickable_elements_hashes=False)

    # Encode to base64 as the agent would when building the message
    screenshot_b64 = base64.b64encode(screenshot_bytes).decode("utf-8")

    result = {
        "url": state.url,
        "title": state.title,
        "element_count": len(state.selector_map),
        "dom_text_length": len(str(state.element_tree)),
        "screenshot_b64_length": len(screenshot_b64),
        "screenshot_size_kb": round(len(screenshot_bytes) / 1024, 1),
    }
    await session.close()
    return result

url = "https://news.ycombinator.com"
result_b = asyncio.run(session_b_capture(url))
print("Session B (with screenshot):")
for k, v in result_b.items():
    print(f"  {k}: {v}")`}</pre>

      <ol start={7}>
        <li>
          Record the output. Compare <code>dom_text_length</code> between
          session A and session B. They should be identical or nearly identical:
          the DOM text representation does not change when a screenshot is added.
          The screenshot is an additional field, not a replacement.
        </li>
        <li>
          Note <code>screenshot_size_kb</code>. A typical Hacker News viewport
          screenshot at default resolution is around 80-150 KB. When encoded to
          base64 and passed to a vision model, this adds token cost. Estimate the
          approximate token cost: base64 encoding increases size by roughly 33%,
          and most vision model providers charge around 1 token per 4 characters
          of base64, though pricing varies. Compute the approximate additional
          token cost per step from the screenshot alone.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-5-compare-side-by-side">
        Part 5: Compare the two summaries
      </AnchorHeading>

      <p>
        Now place the two result dictionaries side by side and fill in this
        comparison table in your notes:
      </p>

      <pre>{`Field                  | Session A (DOM-only) | Session B (+ screenshot)
-----------------------|----------------------|-------------------------
element_count          |                      |
dom_text_length        |                      |
has_screenshot         | False                | True
screenshot_size_kb     | N/A                  |
screenshot token cost  | 0                    | (your estimate)`}</pre>

      <ol start={9}>
        <li>
          For a 30-step agent run using session B's screenshot cost per step,
          calculate the total additional token cost from screenshots. At a
          hypothetical rate of $0.003 per 1,000 input tokens (a rough
          order-of-magnitude figure, not a real current price: check your
          provider's actual pricing), what does vision add to the cost of this
          run compared to DOM-only?
        </li>
        <li>
          On the Hacker News front page, would vision help the agent complete
          the task "find the top story and click on it"? Justify your answer
          using the element tree you examined in Part 2. Is there any information
          the screenshot contains that the DOM text does not?
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-6-interleaving-the-loop">
        Part 6: Interleaving - the agent loop from week 1
      </AnchorHeading>

      <p>
        This part reconnects to the perceive-decide-act loop from week 1.
        You have now seen what the perceive step produces. Now run two full
        agent steps and inspect the history to see what each step received.
      </p>

      <pre>{`import asyncio
from browser_use import Agent, BrowserSession
from browser_use.llm import ChatOpenAI

async def two_step_trace() -> None:
    session = BrowserSession(headless=True)
    agent = Agent(
        task="Go to news.ycombinator.com. Find the top story. Then go to its comments page.",
        llm=ChatOpenAI(model="gpt-4o"),
        browser_session=session,
        max_steps=2,
    )
    history = await agent.run()

    for i, step in enumerate(history.history):
        print(f"=== Step {i + 1} ===")
        print(f"URL at perceive: {step.state.url}")
        print(f"Title at perceive: {step.state.title}")
        print(f"Elements in selector_map: {len(step.state.selector_map)}")
        if step.model_output:
            print(f"Agent next_goal: {step.model_output.current_state.next_goal}")
            print(f"Actions chosen: {[a.model_dump() for a in step.model_output.action]}")
        print()

asyncio.run(two_step_trace())`}</pre>

      <ol start={11}>
        <li>
          Run the trace. For each step, identify: (a) what URL the agent saw
          during the perceive phase, (b) what action it chose, and (c) what URL
          you expect it to see at the start of the next step.
        </li>
        <li>
          This is the loop you named in week 1. Each perceive step produces a
          state summary; the decide step uses that summary to pick an action;
          the action runs and the loop repeats. At which step does the agent
          "see" the comments page? What was in the selector map at that step
          that told it the navigation had succeeded?
        </li>
      </ol>

      <AnchorHeading as="h2" id="self-grading-rubric">
        Self-grading rubric
      </AnchorHeading>

      <p>
        Check each item before leaving the session. If any item is unchecked,
        note which part to revisit before week 4.
      </p>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Standard</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Retrieval drill completed without notes</td>
            <td>All four questions answered before opening any code</td>
          </tr>
          <tr>
            <td>Baseline state captured (Part 2)</td>
            <td>Printed element count, selector map sample, and DOM text excerpt</td>
          </tr>
          <tr>
            <td>Session A output recorded</td>
            <td>element_count, dom_text_length, has_screenshot = False</td>
          </tr>
          <tr>
            <td>Session B output recorded</td>
            <td>Same fields plus screenshot_size_kb</td>
          </tr>
          <tr>
            <td>Comparison table filled in</td>
            <td>All five rows completed with real numbers from your run</td>
          </tr>
          <tr>
            <td>Vision cost estimate calculated</td>
            <td>Approximate token cost per step and per 30-step run estimated</td>
          </tr>
          <tr>
            <td>Vision necessity answered for this task</td>
            <td>One-sentence justification grounded in the element tree output</td>
          </tr>
          <tr>
            <td>Two-step trace completed (Part 6)</td>
            <td>URL at perceive and action chosen printed for each step</td>
          </tr>
          <tr>
            <td>Loop connection made</td>
            <td>
              Can name which step "sees" the comments page and what in the
              selector map confirmed the navigation
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export const wk03SectionSearchBody =
  "BrowserSession session configuration headless vision use_vision DOM-only screenshot state summary comparison element count selector map token cost retrieval drill perceive step agent loop two-step trace week 3 section worksheet browser use session layer";
