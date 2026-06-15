import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk06SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="a-custom-tool-with-a-typed-result">
        Section: A custom tool with a typed result
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 6 · Hands-on worksheet</p>

      <p>
        By the end of this session you will have a working browser-use agent that uses one custom
        action registered with <code>@tools.action()</code> and returns its output as a validated
        Pydantic model via <code>output_model_schema</code>. You will confirm the schema holds by
        calling <code>model_validate_json</code> on the result, and you will wire up
        <code>allowed_domains</code> at both the tool level and the browser level.
      </p>

      <AnchorHeading as="h2" id="part-0-retrieval-drill">
        Part 0: Retrieval drill on week 5 (5 minutes, no notes)
      </AnchorHeading>

      <p>
        Answer the following from memory. Write your answers before looking anything up. The goal is
        to surface gaps before you build on top of this material.
      </p>

      <ol>
        <li>
          <strong>The tools registry.</strong> What object holds the registry? What does the registry
          store for each registered action besides the handler function? Name at least two things.
        </li>
        <li>
          <strong>ActionModel.</strong> When the LLM decides to call an action, what does it actually
          emit? Is it a function call, a JSON string, or something else? How does the framework know
          which registered action to dispatch?
        </li>
        <li>
          <strong>ActionResult.</strong> Name three fields on ActionResult and describe what each one
          does to the next step of the loop.
        </li>
        <li>
          <strong>Parameter injection.</strong> A handler declares{" "}
          <code>async def my_action(query: str, browser_session: BrowserSession)</code>. The LLM
          provides <code>query</code>. Who provides <code>browser_session</code> and how?
        </li>
        <li>
          <strong>multi_act.</strong> The agent emits two actions in one step: first{" "}
          <code>navigate</code>, then <code>click</code>. Does <code>click</code> always execute?
          Explain the rule that governs this.
        </li>
      </ol>

      <p>
        Compare your answers to the week 5 reading before moving to Part 1. If any answer is
        missing, re-read the relevant section now. The rest of this worksheet assumes you can recall
        these without looking.
      </p>

      <AnchorHeading as="h2" id="part-1-write-a-custom-extraction-action">
        Part 1: Write a custom extraction action
      </AnchorHeading>

      <p>
        This custom action reads headings from the current page using a CSS selector. It connects to
        the week-2 and week-3 concept of the selector map: the agent already knows which elements are
        interactive by index, but custom actions can go further and query the DOM directly by tag or
        CSS class when you need a specific structural element regardless of its index.
      </p>

      <pre>{`import asyncio
import json
from browser_use import Agent, Tools, ActionResult, ChatOpenAI
from browser_use.browser import BrowserSession

tools = Tools()

@tools.action(
    description='Extract all h1 and h2 headings from the current page and return them as JSON',
    allowed_domains=['news.ycombinator.com'],
)
async def extract_headings(browser_session: BrowserSession) -> ActionResult:
    page = await browser_session.must_get_current_page()
    elements = await page.get_elements_by_css_selector('h1, h2, .titleline')
    headings = []
    for el in elements:
        text = await el.get_text()
        if text and text.strip():
            headings.append(text.strip())
    result_json = json.dumps(headings, ensure_ascii=False)
    return ActionResult(
        extracted_content=result_json,
        long_term_memory=f'Found {len(headings)} headings on this page',
    )

async def main():
    agent = Agent(
        task='Go to news.ycombinator.com and extract the headings from the page.',
        llm=ChatOpenAI(model='gpt-4.1-mini'),
        tools=tools,
    )
    history = await agent.run(max_steps=5)
    print(history.final_result())

if __name__ == '__main__':
    asyncio.run(main())`}</pre>

      <p>
        Run this file. Answer in your notes:
      </p>

      <ol>
        <li>
          Did the agent call <code>extract_headings</code> voluntarily, or did it use the built-in
          extract action instead? Why do you think it made that choice?
        </li>
        <li>
          Look at the step where <code>extract_headings</code> was called (if it was). What does the{" "}
          <code>long_term_memory</code> value look like in subsequent steps?
        </li>
        <li>
          Remove <code>allowed_domains=['news.ycombinator.com']</code> from the decorator and re-run.
          Does the behavior change? What would change if the agent were on a different domain?
        </li>
      </ol>

      <p>
        The interleaving point here: in week 2 you saw that the selector map assigns integer indices
        to interactive elements. The <code>extract_headings</code> action bypasses the index system
        entirely and queries by tag name. Write one sentence in your notes explaining when the
        index-based built-in actions are enough, and when a direct CSS selector query (like this
        action) is preferable.
      </p>

      <AnchorHeading as="h2" id="part-2-add-a-pydantic-param-model">
        Part 2: Add a Pydantic param_model
      </AnchorHeading>

      <p>
        The action above takes no LLM-provided parameters. Now write a second action that accepts a
        structured input: the agent decides which CSS selector to use.
      </p>

      <pre>{`from pydantic import BaseModel, Field

class SelectorParams(BaseModel):
    css_selector: str = Field(
        description='CSS selector to query, e.g. "h1", ".titleline a", "table.itemlist"'
    )
    max_results: int = Field(
        default=10,
        description='Maximum number of elements to return. Default is 10.',
    )

@tools.action(
    description='Query the current page with a CSS selector and return the text of matching elements',
    param_model=SelectorParams,
    allowed_domains=['news.ycombinator.com', '*.github.com'],
)
async def query_by_selector(params: SelectorParams, browser_session: BrowserSession) -> ActionResult:
    page = await browser_session.must_get_current_page()
    elements = await page.get_elements_by_css_selector(params.css_selector)
    results = []
    for el in elements[:params.max_results]:
        text = await el.get_text()
        if text and text.strip():
            results.append(text.strip())
    result_json = json.dumps(results, ensure_ascii=False)
    return ActionResult(extracted_content=result_json)`}</pre>

      <p>
        Update the task to something that should trigger this new action:
      </p>

      <pre>{`agent = Agent(
    task=(
        'Go to news.ycombinator.com. '
        'Use the query_by_selector tool with selector ".titleline a" to extract the first 5 story titles. '
        'Return the titles as a list.'
    ),
    llm=ChatOpenAI(model='gpt-4.1-mini'),
    tools=tools,
)`}</pre>

      <p>
        Run it. Answer in your notes:
      </p>

      <ol>
        <li>
          What CSS selector did the LLM choose to pass? Was it the one the task suggested, or did the
          agent adapt?
        </li>
        <li>
          The action accepts both <code>css_selector</code> (from the LLM) and{" "}
          <code>browser_session</code> (injected). Open the source at{" "}
          <code>browser_use/tools/registry/views.py</code> and find where the framework separates
          injected parameters from LLM-provided parameters. What is the mechanism?
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-add-an-output-model">
        Part 3: Add an output model and verify the schema
      </AnchorHeading>

      <p>
        Now give the agent a typed output schema so the final result is a structured object, not a
        prose string.
      </p>

      <pre>{`from pydantic import BaseModel
from browser_use import Agent, Tools, ActionResult, ChatOpenAI

class Story(BaseModel):
    title: str
    rank: int

class TopStories(BaseModel):
    stories: list[Story]

tools = Tools()  # fresh instance

# ... (re-register extract_headings and query_by_selector here if desired)

async def main():
    agent = Agent(
        task=(
            'Go to news.ycombinator.com. '
            'Extract the titles and ranks of the top 5 stories. '
            'Return a JSON object with a "stories" key containing a list of objects '
            'with "title" (string) and "rank" (integer) fields.'
        ),
        llm=ChatOpenAI(model='gpt-4.1-mini'),
        tools=tools,
        output_model_schema=TopStories,
    )
    history = await agent.run(max_steps=8)

    raw = history.final_result()
    print('Raw JSON:', raw)

    if raw:
        parsed = TopStories.model_validate_json(raw)
        print(f'Parsed {len(parsed.stories)} stories:')
        for story in parsed.stories:
            print(f'  {story.rank}. {story.title}')
    else:
        print('No structured result returned.')`}</pre>

      <p>
        Run it. Answer in your notes:
      </p>

      <ol>
        <li>
          Did the schema validate without errors? If it raised a <code>ValidationError</code>, what
          field was wrong and why might the agent have produced an invalid value?
        </li>
        <li>
          Run <code>agent.task</code> after construction (before calling <code>run()</code>). How did
          the framework modify the task string to include the schema?
        </li>
        <li>
          Try <code>history.structured_output</code> instead of calling{" "}
          <code>model_validate_json</code> yourself. Do both return the same result?
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-lock-the-browser-with-allowed-domains">
        Part 4: Lock the browser with allowed_domains on BrowserProfile
      </AnchorHeading>

      <p>
        The <code>allowed_domains</code> on the decorator scopes a single action. The{" "}
        <code>allowed_domains</code> on <code>BrowserProfile</code> restricts where the browser can
        navigate at all.
      </p>

      <pre>{`from browser_use.browser import BrowserProfile, BrowserSession

browser_session = BrowserSession(
    browser_profile=BrowserProfile(
        allowed_domains=['news.ycombinator.com'],
    )
)

agent = Agent(
    task=(
        'Go to news.ycombinator.com and extract the top story. '
        'Then try to navigate to google.com and report what you find there.'
    ),
    llm=ChatOpenAI(model='gpt-4.1-mini'),
    browser_session=browser_session,
    output_model_schema=TopStories,
)
history = await agent.run(max_steps=10)
print(history.final_result())`}</pre>

      <ol>
        <li>
          Did the agent succeed in navigating to google.com? What did the history show when it
          attempted that navigation?
        </li>
        <li>
          The <code>allowed_domains</code> on the decorator for <code>extract_headings</code> is
          already limited to <code>news.ycombinator.com</code>. If you also set{" "}
          <code>allowed_domains=['news.ycombinator.com']</code> on BrowserProfile, are you doing
          double work? Explain which layer enforces what.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-5-interleaving-week-2-page-content">
        Part 5: Interleaving task from week 2 and week 3
      </AnchorHeading>

      <p>
        In week 2 you learned that the selector map assigns sequential integer indices to interactive
        elements. In week 3 you saw that the browser-state summary passes those indices to the LLM.
        Your custom action above bypasses the selector map and queries the DOM by CSS selector
        directly.
      </p>

      <p>
        Write a short comparison in your notes (5 sentences maximum):
      </p>

      <ul>
        <li>
          When is the LLM's indexed selector map the right tool? (Hint: what happens when you need
          to click an element, not just read its text?)
        </li>
        <li>
          When is a custom action that queries by CSS selector preferable? (Hint: what if you need
          all elements of a type regardless of whether they are interactive?)
        </li>
        <li>
          Could you use both in the same agent run? Describe a task where the agent would use the
          built-in <code>click</code> action (which uses the selector map) in some steps and your{" "}
          <code>query_by_selector</code> action in others.
        </li>
      </ul>

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
              "Part 0: Five retrieval questions answered from memory before any code run",
              "Part 1: extract_headings action registered and agent run completed; three questions answered",
              "Part 1: Interleaving comparison written (selector map vs CSS selector query)",
              "Part 2: query_by_selector with param_model registered; agent called the action with an LLM-chosen selector",
              "Part 2: Mechanism for separating injected vs LLM-provided params located in source",
              "Part 3: output_model_schema=TopStories set; schema validated without error (or error diagnosed)",
              "Part 3: agent.task inspected to confirm schema was injected into the task string",
              "Part 4: BrowserProfile(allowed_domains=[...]) set; navigation block confirmed in history",
              "Part 5: Written comparison of selector-map vs CSS-selector approaches (5 sentences)",
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
        If the schema validation in Part 3 failed, diagnose the error before leaving. A{" "}
        <code>ValidationError</code> on <code>rank</code> typically means the agent returned a
        string like <code>"1."</code> instead of an integer. Add a{" "}
        <code>Field(description='Integer rank, e.g. 1')</code> annotation and re-run.
      </p>
    </>
  );
}

export const wk06SectionSearchBody =
  "custom action tools.action decorator Pydantic param_model output_model_schema TopStories structured output allowed_domains BrowserProfile CSS selector extract headings query selector retrieval drill tools registry ActionResult multi_act parameter injection week 6 section browser-use";
