import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk10SectionPage() {
  return (
    <div>
      <AnchorHeading as="h1" id="wk10-section">
        Section: Capstone studio
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 10 · Hands-on worksheet</p>

      <p>
        By the end of this section you will have a running browser-use agent
        that completes a real multi-step task, passes at least five tasks in
        your task set, and a written agent-scorecard you can defend in two
        minutes. The full capstone project handout (the graded submission) is at{" "}
        <a href="/c/browser-use-26su/hw/capstone">/c/browser-use-26su/hw/capstone</a>.
        This session is the in-class build and peer defense.
      </p>

      <AnchorHeading as="h2" id="part-0-retrieval">
        Part 0: retrieval drill (5 minutes, no notes)
      </AnchorHeading>
      <p>
        Answer each question from memory. After section, check your answers
        against the course readings. The goal is to surface gaps before you
        build.
      </p>
      <ol>
        <li>
          Name the three phases of the agent loop and say what happens in each
          one. (Week 1)
        </li>
        <li>
          What is the selector map and why does it use integer indices instead
          of CSS selectors? (Week 2)
        </li>
        <li>
          Name the four fields in a browser-state summary and say which one is
          optional and why. (Week 3)
        </li>
        <li>
          List the four fields of <code>AgentOutput</code> and say what each
          carries. (Week 4)
        </li>
        <li>
          What is the difference between an <code>ActionModel</code> and an{" "}
          <code>ActionResult</code>? (Week 5)
        </li>
        <li>
          How does <code>sensitive_data</code> keep a secret out of the LLM
          context? (Week 6)
        </li>
        <li>
          What does <code>user_data_dir</code> persist, and when do you need
          it? (Week 7)
        </li>
        <li>
          Name two reliability guards from week 8 and say which agent failure
          mode each one addresses.
        </li>
        <li>
          Name one reason a high benchmark score can mislead when predicting
          real-world agent performance. (Week 9)
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-1-scope">
        Part 1: scope your task (15 minutes)
      </AnchorHeading>
      <p>
        Write a task string in one sentence. Then apply the agent-ready
        checklist below. Revise until all four pass.
      </p>
      <ol>
        <li>
          <strong>Stopping condition.</strong> Does the sentence name exactly
          what "done" means? If you removed the last clause and asked "how does
          the agent know it is finished?", could it answer?
        </li>
        <li>
          <strong>DOM-visible steps.</strong> For each action the agent must
          take, is there an interactive element in the DOM the selector map
          would index? If a step requires reading a PDF in a browser plugin or
          parsing a canvas element, plan a custom action.
        </li>
        <li>
          <strong>Auth handled externally.</strong> If the task requires login,
          is the session already in <code>user_data_dir</code> or will you pass
          credentials via <code>sensitive_data</code>? The task string should
          not contain a raw password.
        </li>
        <li>
          <strong>One job per agent.</strong> Does the task string contain "and
          then" linking two independent goals? If so, split into two agents.
        </li>
      </ol>
      <p>
        Write your approved task string at the top of your code file as a
        comment. Do not change it once you start building.
      </p>

      <AnchorHeading as="h2" id="part-2-tools-and-schema">
        Part 2: tools and output schema (15 minutes)
      </AnchorHeading>
      <p>
        List every distinct action your task requires. Sort each action into one
        of two columns: "built-in" (click, navigate, type, scroll, extract,
        done) or "custom". For each custom action, write the function signature
        and return type before you write any implementation.
      </p>
      <p>
        Then design your Pydantic output model. Start from what the caller
        needs, not what the page shows. Follow this template:
      </p>
      <pre>{`from pydantic import BaseModel, Field
from typing import Optional

class MyTaskResult(BaseModel):
    field_one: str = Field(description="...")
    field_two: float = Field(description="...")
    optional_field: Optional[str] = Field(None, description="... or None if not found")
`}</pre>
      <p>
        Rules for a good schema: keep it flat (no nested models unless the data
        genuinely has hierarchy); mark fields Optional only when the page may
        not contain that data; write a clear <code>description</code> so the
        LLM knows exactly what to extract into each slot.
      </p>

      <AnchorHeading as="h2" id="part-3-build">
        Part 3: build and wire the agent (30 minutes)
      </AnchorHeading>
      <p>
        Build the agent end to end. Use the structure below as your scaffold.
        Fill in every parameter before running.
      </p>
      <pre>{`import asyncio
from browser_use import Agent, BrowserSession, Tools
from browser_use.llm import ChatAnthropic  # or ChatOpenAI, ChatGoogle, etc.
from pydantic import BaseModel, Field
from typing import Optional

# --- 1. Output model ---
class MyTaskResult(BaseModel):
    pass  # your fields here

# --- 2. Custom tools (if any) ---
tools = Tools()

# @tools.action("Description of what this action does")
# async def my_custom_action(param: str, browser_session: BrowserSession) -> str:
#     ...  # your implementation
#     return "result string or ActionResult"

# --- 3. Browser session ---
session = BrowserSession(
    user_data_dir="/tmp/capstone-profile",  # set if auth is needed
    headless=True,
)

# --- 4. Agent ---
agent = Agent(
    task="YOUR APPROVED TASK STRING HERE",
    llm=ChatAnthropic(model="claude-opus-4-5"),
    browser_session=session,
    tools=tools,                    # omit if no custom actions
    sensitive_data={},              # add key: value pairs for secrets
    output_model=MyTaskResult,
    max_steps=20,
    max_failures=3,
)

async def main():
    result = await agent.run()
    print(result.final_result())

asyncio.run(main())
`}</pre>
      <p>
        Interleaving check (concepts from weeks 2 and 4): after your first
        successful run, print the step history and find one step where the agent
        selected an element by index. Note the index number. Then open the same
        page in your browser and identify the element that index pointed to. This
        is the selector map (week 2) meeting the AgentOutput action list (week 4)
        in a real run.
      </p>

      <AnchorHeading as="h2" id="part-4-task-set">
        Part 4: build and run a task set (20 minutes)
      </AnchorHeading>
      <p>
        A task set is a list of 5-10 concrete inputs with known correct outputs.
        For a price-extraction agent, the task set includes: a standard product
        page, a product with a variant selector, an out-of-stock product, and a
        product requiring login. For a form-filling agent, the task set includes:
        a form with all required fields, a form with conditional fields, and a
        form with a CAPTCHA (expected outcome: graceful failure).
      </p>
      <p>Build your task set as a Python list:</p>
      <pre>{`TASK_SET = [
    {
        "description": "standard product page",
        "sensitive_data": {"x-url": "https://..."},
        "expected": {"in_stock": True, "price_usd": 29.99},
    },
    {
        "description": "out-of-stock product",
        "sensitive_data": {"x-url": "https://..."},
        "expected": {"in_stock": False},
    },
    # add 3-8 more
]
`}</pre>
      <p>
        Run your agent against each task in the set. For each result, record the
        outcome in one of five categories:
      </p>
      <ul>
        <li>
          <strong>pass</strong>: output matches expected values
        </li>
        <li>
          <strong>fail-wrong-value</strong>: output present but one or more
          fields are incorrect
        </li>
        <li>
          <strong>fail-no-output</strong>: <code>done</code> was called but
          output_model validation failed
        </li>
        <li>
          <strong>fail-loop</strong>: <code>max_steps</code> was hit before{" "}
          <code>done</code>
        </li>
        <li>
          <strong>fail-crash</strong>: unhandled exception
        </li>
      </ul>
      <p>
        For each failure, write one sentence naming the root cause and whether
        the fix is a task-framing change or a code change.
      </p>

      <AnchorHeading as="h2" id="part-5-defend">
        Part 5: peer defense (15 minutes, pairs)
      </AnchorHeading>
      <p>
        Pair with the person next to you. Each person defends their agent in
        three minutes. The defender answers four questions in order. The
        listener asks one follow-up after each answer. Then switch roles.
      </p>
      <ol>
        <li>
          <strong>Scope:</strong> read your task string aloud. What is the
          stopping condition? Did you split it from a larger task?
        </li>
        <li>
          <strong>Tools:</strong> name one action you kept as built-in and say
          why. If you wrote a custom action, say what the built-in could not do.
        </li>
        <li>
          <strong>Schema:</strong> name the fields in your output model and say
          what each contains. Point to one Optional field and explain when it is
          None.
        </li>
        <li>
          <strong>Scorecard:</strong> report one pass and one failure from your
          task set. For the failure, name the category and your proposed fix.
        </li>
      </ol>
      <p>
        Listener norms: ask "why" questions, not "have you tried" questions.
        "Why did you keep extract as a built-in rather than writing a custom
        parser?" is a useful question. "Have you tried using BeautifulSoup?" is
        a distraction unless the current approach is actually failing.
      </p>

      <AnchorHeading as="h2" id="rubric">
        Self-grading rubric
      </AnchorHeading>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Full credit</th>
            <th>Partial</th>
            <th>Incomplete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Task scoping</td>
            <td>
              Task string passes all four agent-ready checklist points; stopping
              condition is explicit
            </td>
            <td>Two or three checklist points pass</td>
            <td>Task string is unchanged from first draft or vague</td>
          </tr>
          <tr>
            <td>Output schema</td>
            <td>
              Pydantic model with typed fields, Field(description), and correct
              Optional usage
            </td>
            <td>Fields present but descriptions missing or Optional misused</td>
            <td>No output_model; prose done string used</td>
          </tr>
          <tr>
            <td>Tool choice</td>
            <td>
              Each action justified as built-in or custom with a specific reason
            </td>
            <td>Custom action written but justification not stated</td>
            <td>Tool choices unjustified or all built-in without reflection</td>
          </tr>
          <tr>
            <td>Task-set scorecard</td>
            <td>
              5+ tasks run, outcomes categorized, root cause written for each
              failure
            </td>
            <td>3-4 tasks, some categories missing</td>
            <td>Single task run or no scorecard</td>
          </tr>
          <tr>
            <td>Peer defense</td>
            <td>
              All four questions answered with specific evidence; one failure
              reported with proposed fix
            </td>
            <td>Two or three questions answered specifically</td>
            <td>Defense is vague or only the happy path is described</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export const wk10SectionSearchBody =
  "capstone studio retrieval drill scope task agent-ready stopping condition built-in custom tools output schema Pydantic output model sensitive_data user_data_dir browser session auth build wire agent task set scorecard pass fail-loop fail-crash fail-wrong-value fail-no-output peer defense agent-scorecard rubric week 10 section hands-on worksheet browser-use synthesis";
