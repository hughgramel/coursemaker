import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk06Reading() {
  return (
    <ReadingPage
      id="wk06-custom-tools-structured-results"
      title="Week 6: Custom tools and structured results"
      kicker="Browser Use: How LLM Agents Drive the Web · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          The built-in actions get an agent far: click, type, scroll, navigate, extract, done. But
          real tasks often need something the built-ins cannot do: write a record to a database, call
          an external API, parse a page structure that the general-purpose extract action misses, or
          return data in a typed schema another system can consume. This reading covers the three
          mechanisms that address these gaps: the <strong>custom action</strong> via{" "}
          <code>@tools.action()</code>, the <strong>output model</strong> via{" "}
          <code>output_model_schema</code>, and <strong>sensitive_data</strong> placeholder
          substitution that keeps secrets out of the LLM's context.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Tools registry, ActionModel, ActionResult, and
          parameter injection from week 5. Pydantic BaseModel and Field from week 4. The
          selector map and page-state summary from weeks 2 and 3.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-why-extend">
        1. When the built-in actions are not enough
      </AnchorHeading>
      <p>
        The tools registry ships with a complete set of browser actions: click an element by index,
        type text, scroll, navigate to a URL, go back, open or switch tabs, search the web, extract
        page content, and signal completion with done. For any task that lives entirely inside the
        browser and does not need structured output, these actions are sufficient. The agent clicks
        and types its way to a result, then calls done with a prose string.
      </p>
      <p>
        Three situations push beyond this boundary. First, the task needs a <em>side effect outside
        the browser</em>: write a file, insert a row into a database, call a webhook. The built-in
        extract action can read a page, but nothing in the built-in set can write that data anywhere
        outside the browser session. Second, the task needs <em>structured data as output</em>:
        another system will consume the result and it needs a typed object, not a paragraph. Parsing
        prose is fragile; schemas break drift. Third, the task involves <em>credentials</em> that
        must not appear in the LLM's context, either in the task prompt or in screenshots the agent
        reads back.
      </p>
      <p>
        Custom actions, output models, and sensitive data are independent features. You can use any
        subset of them in a single agent. A common pattern combines all three: a custom action writes
        to disk, output_model_schema validates the final result, and sensitive_data keeps the login
        credentials out of the transcript.
      </p>

      <AnchorHeading as="h2" id="2-tools-instance">
        2. The Tools instance and registration
      </AnchorHeading>
      <p>
        In week 5 you saw that <code>Agent</code> holds a <code>Tools</code> object and that built-in
        actions are pre-registered on it. To add custom actions, create your own <code>Tools</code>{" "}
        instance, register handlers on it, then pass it to <code>Agent</code>:
      </p>
      <pre>{`from browser_use import Agent, Tools, ActionResult, ChatOpenAI

tools = Tools()

@tools.action(description='Ask a human for help with a question')
async def ask_human(question: str) -> ActionResult:
    answer = input(f'{question} > ')
    return ActionResult(extracted_content=f'Human answered: {answer}')

agent = Agent(task='...', llm=ChatOpenAI(model='gpt-4.1-mini'), tools=tools)`}</pre>
      <p>
        The decorator's <code>description</code> argument is not a docstring for the developer; it is
        the description that appears in the system prompt the LLM reads. Write it the way you would
        write a tool description for an API: precise, action-oriented, specific enough that the LLM
        can distinguish this action from the built-ins. A vague description like "do something with
        the page" produces unpredictable invocation (browser-use team, 2026).
      </p>
      <p>
        The <code>Tools</code> instance is passed as <code>tools=tools</code>; the parameter name is
        also <code>controller</code> as an alias. The built-in actions are merged with your custom
        ones at construction time. You do not lose click, type, or navigate by supplying your own
        tools instance; you extend the registry.
      </p>

      <AnchorHeading as="h2" id="3-typed-parameters">
        3. Typed parameters: plain signatures vs Pydantic models
      </AnchorHeading>
      <p>
        The registry builds a JSON schema for each action so the LLM knows what parameters to
        provide. There are two ways to declare those parameters.
      </p>
      <p>
        <strong>Plain function signature.</strong> Each typed argument becomes a field in the
        generated schema. This is sufficient for simple actions with one or two scalar parameters:
      </p>
      <pre>{`@tools.action(description='Save text to a named file')
def save_file(filename: str, content: str) -> str:
    with open(filename, 'w') as f:
        f.write(content)
    return f'Saved {len(content)} chars to {filename}'`}</pre>
      <p>
        <strong>Pydantic param_model.</strong> Pass a Pydantic model class and a single parameter
        named <code>params</code>. This lets you add <code>Field</code> descriptions that appear in
        the schema the LLM reads, defaults, and validators:
      </p>
      <pre>{`from pydantic import BaseModel, Field

class CarRecord(BaseModel):
    name: str = Field(description='Full model name, e.g. "Toyota Camry 2024"')
    price_usd: int = Field(description='Price in USD as an integer, e.g. 27500')
    in_stock: bool = Field(default=True, description='Whether the car is currently available')

@tools.action(description='Save a car record to the inventory file', param_model=CarRecord)
def save_car(params: CarRecord) -> str:
    with open('inventory.jsonl', 'a') as f:
        f.write(params.model_dump_json() + '\\n')
    return f'Saved {params.name}'`}</pre>
      <p>
        Field descriptions matter. Without them the LLM sees the field name and type only. For
        ambiguous fields like <code>price_usd</code> (is that a float or an int? is it thousands or
        dollars?) the description prevents hallucination (browser-use team, 2026).
      </p>

      <Callout title="Injected vs LLM-provided parameters">
        Parameters named after framework objects are injected by the registry, not provided by the
        LLM. Available injected names include <code>browser_session</code>{" "}
        (a <code>BrowserSession</code>), <code>page_extraction_llm</code> (the agent's LLM),{" "}
        <code>file_system</code>, and <code>available_file_paths</code>. The registry separates
        injected parameters from the schema it sends to the LLM; the LLM never sees or provides
        injected values. Name matching is exact: <code>browser_session: BrowserSession</code> is
        injected; <code>bs: BrowserSession</code> is not and will cause an error.
      </Callout>

      <AnchorHeading as="h2" id="4-action-result">
        4. ActionResult: carrying content forward
      </AnchorHeading>
      <p>
        Every action returns an <code>ActionResult</code> (or a plain string, which the framework
        wraps in one). The loop reads the result after each action and decides how to pass it to the
        next step. Four fields matter for custom actions:
      </p>
      <p>
        <strong>extracted_content</strong> is added to the current step's context and appears in the
        next step's browser-state summary. Use it for information the agent needs in the very next
        decision: "found 3 matching rows". It is ephemeral; if the agent takes many more steps, this
        content may no longer appear in the context window.
      </p>
      <p>
        <strong>long_term_memory</strong> is written to the agent's persistent memory field and is
        carried across many steps regardless of context length. Use it for facts the agent will need
        later in a long run: "logged in as user id 42".
      </p>
      <p>
        <strong>is_done</strong> signals that the task is complete. Only the done built-in action
        normally sets this; custom actions should rarely use it. If a custom action sets{" "}
        <code>is_done=True</code>, the loop stops.
      </p>
      <p>
        <strong>error</strong> describes a failure. The loop counts consecutive errors toward the
        <code>max_failures</code> limit. Return an error string rather than raising an exception when
        the failure is expected (browser-use contributors, 2026).
      </p>
      <pre>{`return ActionResult(
    extracted_content='Query returned 3 rows: id=1, id=4, id=9',
    long_term_memory='Database query complete; target rows are ids 1, 4, 9',
)`}</pre>

      <AnchorHeading as="h2" id="5-allowed-domains-action">
        5. Domain restriction on a custom action
      </AnchorHeading>
      <p>
        The <code>@tools.action()</code> decorator accepts an <code>allowed_domains</code> list. When
        set, the action is visible to the LLM only when the current page's URL matches one of the
        patterns. On every step the registry recalculates which actions are available given the
        current URL and sends only those to the LLM.
      </p>
      <pre>{`@tools.action(
    description='Log the current page title to a file',
    allowed_domains=['news.ycombinator.com', '*.github.com'],
)
async def log_title(browser_session: BrowserSession) -> ActionResult:
    page = await browser_session.must_get_current_page()
    title = await page.title()
    with open('titles.log', 'a') as f:
        f.write(title + '\\n')
    return ActionResult(extracted_content=f'Logged: {title}')`}</pre>
      <p>
        Domain patterns support wildcards: <code>*.github.com</code> matches{" "}
        <code>docs.github.com</code> and <code>api.github.com</code>. Exact domain names without a
        wildcard match only that domain (browser-use team, 2026).
      </p>
      <p>
        This feature solves a practical problem: without domain scoping, every action is in the LLM's
        prompt on every step. For an agent that visits many sites, a long action list adds tokens and
        increases the chance the LLM invokes the wrong action. Scoping keeps the action list short and
        precise.
      </p>
      <p>
        Domain restriction also provides a security property: an action that writes to disk or calls
        an external API is available only on the sites where you intend it to run. If the agent is
        redirected to an unexpected page, the action is not visible.
      </p>

      <AnchorHeading as="h2" id="6-combining-extraction-and-selector-map">
        6. Custom extraction and the selector map (a week 2 connection)
      </AnchorHeading>
      <p>
        In week 2 you saw that the DOM service assigns integer indices to interactive elements and
        stores them in a selector map. The built-in click and type actions use those indices: the LLM
        says "click element 5" and the registry translates index 5 back to the element. The built-in
        extract action reads the full page content as text.
      </p>
      <p>
        A custom action with <code>browser_session</code> injected can query the DOM directly by CSS
        selector, bypassing the index system:
      </p>
      <pre>{`@tools.action(
    description='Extract the text of all elements matching a CSS selector on the current page',
    allowed_domains=['news.ycombinator.com'],
)
async def extract_by_selector(
    selector: str,
    browser_session: BrowserSession,
) -> ActionResult:
    page = await browser_session.must_get_current_page()
    elements = await page.get_elements_by_css_selector(selector)
    texts = []
    for el in elements:
        text = await el.get_text()
        if text and text.strip():
            texts.append(text.strip())
    import json
    return ActionResult(extracted_content=json.dumps(texts, ensure_ascii=False))`}</pre>
      <p>
        This pattern is useful when you need all elements of a structural type (every heading,
        every table row, every link in a nav) regardless of whether they are interactive. The selector
        map only covers interactive elements; a CSS selector query covers everything in the DOM. The
        two approaches are complementary: use the built-in actions for clicking and typing (they
        require interactivity), and use custom extraction actions when you need structural elements the
        selector map would not include.
      </p>

      <AnchorHeading as="h2" id="7-output-model">
        7. output_model_schema: getting typed data back
      </AnchorHeading>
      <p>
        By default the agent's final result is the string argument to the done action. For tasks that
        produce structured data, this string is typically JSON that you parse manually. The risk is
        schema drift: the agent might return slightly different keys between runs, omit optional
        fields, or use a string where you expect an integer.
      </p>
      <p>
        <code>output_model_schema</code> gives the agent a Pydantic model to fill in. The framework
        does three things automatically:
      </p>
      <ol>
        <li>
          Serializes the model's JSON schema and appends it to the task string so the LLM knows the
          expected output shape from the first step.
        </li>
        <li>
          Configures the done action to require output that conforms to the schema.
        </li>
        <li>
          Exposes a <code>structured_output</code> property on the history that calls{" "}
          <code>model_validate_json</code> for you.
        </li>
      </ol>
      <pre>{`from pydantic import BaseModel
from browser_use import Agent, ChatOpenAI

class Post(BaseModel):
    post_title: str
    post_url: str
    num_comments: int
    hours_since_post: int

class Posts(BaseModel):
    posts: list[Post]

async def main():
    agent = Agent(
        task='Go to hackernews show hn and give me the first 5 posts',
        llm=ChatOpenAI(model='gpt-4.1-mini'),
        output_model_schema=Posts,
    )
    history = await agent.run()

    # Option 1: parse manually
    raw = history.final_result()
    parsed = Posts.model_validate_json(raw)

    # Option 2: use the property
    parsed = history.structured_output   # Posts | None

    for post in parsed.posts:
        print(post.post_title, post.num_comments)`}</pre>
      <p>
        The model classes do not need to inherit from anything special; any Pydantic
        <code>BaseModel</code> works. Nested models (like <code>Posts</code> containing a list of{" "}
        <code>Post</code> objects) are supported. Field descriptions on the inner model help the LLM
        populate the right shape (browser-use contributors, 2026).
      </p>

      <Callout title="output_model_schema and custom tools together">
        When you pass both <code>tools=tools</code> and <code>output_model_schema=MyModel</code>, the
        framework checks whether the Tools instance also has an output model configured. If both are
        set and they differ, the Agent parameter takes precedence and the framework logs a warning.
        In practice, set <code>output_model_schema</code> on the Agent and leave the Tools instance
        focused on action registration.
      </Callout>

      <AnchorHeading as="h2" id="8-sensitive-data">
        8. sensitive_data: keeping secrets out of the model context
      </AnchorHeading>
      <p>
        Passing credentials in the task string is the most obvious approach, and the least safe. The
        password appears in every message the LLM processes, in the logged conversation history, and
        potentially in screenshots the agent reads back after filling a form.
      </p>
      <p>
        <code>sensitive_data</code> is a dictionary passed to <code>Agent</code>. It maps placeholder
        names to real values. The LLM sees only the placeholder names; the framework substitutes the
        real value at execution time via a <em>secret tag protocol</em>.
      </p>
      <p>
        <strong>Flat format</strong> (global placeholders, available on any domain):
      </p>
      <pre>{`sensitive_data = {
    'x_name': 'my_actual_username',
    'x_password': 'my_actual_password',
}

agent = Agent(
    task='Log into x.com using x_name and x_password',
    llm=llm,
    sensitive_data=sensitive_data,
)`}</pre>
      <p>
        The framework tells the LLM: "SENSITIVE DATA - Use these placeholders for secure input:
        x_name, x_password. When entering sensitive values, wrap the placeholder name in{" "}
        <code>&lt;secret&gt;</code> tags." When the agent decides to type the password, it emits{" "}
        <code>&lt;secret&gt;x_password&lt;/secret&gt;</code> as the text action's content. The
        framework intercepts this, substitutes the real value, and sends the real value to the
        browser. The LLM never sees the substituted value (browser-use contributors, 2026).
      </p>
      <p>
        <strong>Domain-scoped format</strong> (credentials exposed only on matching domains):
      </p>
      <pre>{`company_creds = {
    'telephone': '9123456789',
    'email': 'user@example.com',
    'name': 'John Doe',
}

sensitive_data = {
    'httpbin.org': company_creds,
    'https://*.example-staging.com': company_creds,
}

agent = Agent(
    task='Go to httpbin.org/forms/post and fill in the form with the company details.',
    llm=llm,
    sensitive_data=sensitive_data,
)`}</pre>
      <p>
        In domain-scoped mode, the placeholder names appear in the system prompt only when the agent
        is on a URL that matches the domain pattern. If the agent navigates away from{" "}
        <code>httpbin.org</code>, those placeholders disappear. This limits exposure if the agent is
        misdirected (browser-use contributors, 2026).
      </p>

      <AnchorHeading as="h2" id="9-allowed-domains-browser">
        9. allowed_domains on BrowserProfile
      </AnchorHeading>
      <p>
        The <code>allowed_domains</code> field on <code>BrowserProfile</code> is a different mechanism
        from the per-action <code>allowed_domains</code>. It restricts where the browser can navigate
        at all, regardless of what the LLM wants to do. Any navigate or go_to_url action targeting a
        domain not in the list is blocked before the browser acts:
      </p>
      <pre>{`from browser_use.browser import BrowserProfile, BrowserSession

browser_session = BrowserSession(
    browser_profile=BrowserProfile(
        allowed_domains=['news.ycombinator.com'],
    )
)

agent = Agent(
    task='Go to news.ycombinator.com and extract the top story.',
    llm=llm,
    browser_session=browser_session,
)`}</pre>
      <p>
        When you combine <code>sensitive_data</code> with <code>BrowserProfile</code>, the framework
        checks that <code>allowed_domains</code> is set. If it is not, it logs a warning:
      </p>
      <pre>{`# Console output (warning, not error):
⚠️ Agent(sensitive_data=••••••••) was provided but Browser(allowed_domains=[...]) is not locked down!
☠️ If the agent visits a malicious website and encounters a prompt-injection attack,
   your sensitive_data may be exposed!`}</pre>
      <p>
        The threat model here is prompt injection: malicious text on a web page that instructs the
        agent to navigate elsewhere and enter credentials. Without <code>allowed_domains</code> on
        the browser profile, the agent could comply. With it set, the navigate action is blocked at
        the browser layer before any credential substitution occurs (browser-use contributors, 2026).
      </p>
      <p>
        The two <code>allowed_domains</code> settings serve different purposes. The per-action setting
        controls which actions the LLM <em>sees</em> in its prompt. The BrowserProfile setting
        controls where the browser <em>goes</em>. Use both: scope actions to the domains where they
        make sense, and lock the browser to the sites the task requires.
      </p>

      <AnchorHeading as="h2" id="10-putting-it-together">
        10. A complete example: extraction with a typed result
      </AnchorHeading>
      <p>
        The following agent combines a custom extraction action (restricted to Hacker News), an output
        model, and browser-level domain restriction. It reads the top stories from HN and returns them
        as a validated list:
      </p>
      <pre>{`import asyncio
import json
from pydantic import BaseModel, Field
from browser_use import Agent, Tools, ActionResult, ChatOpenAI
from browser_use.browser import BrowserProfile, BrowserSession

# --- Output schema ---
class Story(BaseModel):
    title: str = Field(description='The full story title as it appears on the page')
    rank: int = Field(description='The story rank as an integer, e.g. 1 for the top story')

class TopStories(BaseModel):
    stories: list[Story] = Field(description='Ranked list of stories, most popular first')

# --- Custom tool ---
tools = Tools()

@tools.action(
    description='Extract the top story titles and ranks from the current Hacker News page',
    allowed_domains=['news.ycombinator.com'],
)
async def extract_hn_stories(browser_session: BrowserSession) -> ActionResult:
    page = await browser_session.must_get_current_page()
    title_els = await page.get_elements_by_css_selector('.titleline > a')
    rank_els  = await page.get_elements_by_css_selector('.rank')
    stories = []
    for rank_el, title_el in zip(rank_els[:10], title_els[:10]):
        rank_text = (await rank_el.get_text()).rstrip('.')
        title_text = await title_el.get_text()
        try:
            rank_int = int(rank_text)
        except ValueError:
            rank_int = 0
        stories.append({'rank': rank_int, 'title': title_text})
    return ActionResult(extracted_content=json.dumps(stories, ensure_ascii=False))

# --- Browser session with domain lock ---
browser_session = BrowserSession(
    browser_profile=BrowserProfile(allowed_domains=['news.ycombinator.com'])
)

async def main():
    agent = Agent(
        task='Go to news.ycombinator.com and extract the top 5 story titles and ranks.',
        llm=ChatOpenAI(model='gpt-4.1-mini'),
        tools=tools,
        browser_session=browser_session,
        output_model_schema=TopStories,
    )
    history = await agent.run(max_steps=8)

    parsed: TopStories | None = history.structured_output
    if parsed:
        for story in parsed.stories:
            print(f'{story.rank}. {story.title}')
    else:
        print('No structured result. Raw:', history.final_result())

if __name__ == '__main__':
    asyncio.run(main())`}</pre>
      <p>
        Notice the three layers working together: the custom action restricts extraction to HN,
        the output model enforces the schema, and the BrowserProfile prevents navigation to any
        other site. Each layer is independent: remove any one and the other two still function.
      </p>

      <AnchorHeading as="h2" id="11-when-to-use-what">
        11. Choosing the right mechanism
      </AnchorHeading>
      <p>
        With four options (built-in actions, custom actions, output models, sensitive data), the
        choice can be unclear. A decision guide:
      </p>
      <p>
        <strong>Use built-in actions when</strong> the task is navigation, clicking, typing, or
        reading the page as text. The built-in set handles 90% of web tasks. Adding a custom action
        for clicking a specific button adds complexity without benefit; the built-in click action
        already uses element indices and handles edge cases.
      </p>
      <p>
        <strong>Use a custom action when</strong> you need a side effect outside the browser (write
        a file, call an API), need to query the DOM in a way the built-in extract does not support
        (CSS selector, accessibility role, structural elements), or need to expose a tool only on
        specific domains.
      </p>
      <p>
        <strong>Use output_model_schema when</strong> another system will consume the result and you
        need the field names, types, and presence guaranteed. Even when no downstream consumer
        exists, a schema improves reliability: the LLM is told exactly what to produce from the
        first step.
      </p>
      <p>
        <strong>Use sensitive_data when</strong> the task requires a credential: a password, an API
        key, a token. Do not put credentials in the task string. Always pair sensitive_data with{" "}
        <code>BrowserProfile(allowed_domains=[...])</code>.
      </p>

      <AnchorHeading as="h2" id="exercises">
        12. Exercises
      </AnchorHeading>

      <Exercise n={1}>
        <p>
          From memory, write the minimal Python to register a custom action called{" "}
          <code>save_result</code> that takes a <code>content: str</code> parameter and appends it
          to a file called <code>results.txt</code>. Include the Tools instantiation and the Agent
          construction line. Do not look at the reading.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          A custom action is decorated with{" "}
          <code>allowed_domains=['api.example.com', '*.example.com']</code>. The agent navigates to
          <code>staging.example.com</code>. Does the action appear in the LLM's prompt? What about
          on <code>example.com</code> (no subdomain)?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          You define <code>output_model_schema=MyModel</code> where{" "}
          <code>MyModel</code> has a required field <code>price: float</code>. The agent runs and
          calls done with the string <code>"The price is $42.00"</code> instead of JSON. Describe
          what happens: does <code>history.final_result()</code> return the string? Does{" "}
          <code>history.structured_output</code> return a <code>MyModel</code> instance? Why or why
          not?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Write the <code>sensitive_data</code> dictionary for an agent that needs to log into two
          different sites: <code>app.acme.com</code> (username <code>alice@acme.com</code>,
          password <code>hunter2</code>) and <code>vendor.example.org</code> (API key{" "}
          <code>sk-abc123</code>). Use the domain-scoped format.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Explain the difference between <code>allowed_domains</code> on{" "}
          <code>@tools.action()</code> and <code>allowed_domains</code> on{" "}
          <code>BrowserProfile</code>. For each one, describe: (a) what it restricts, (b) when the
          restriction is checked, and (c) what happens when it is violated.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">
        13. Going deeper
      </AnchorHeading>
      <ul>
        <li>
          This week's section worksheet: build the complete agent from section 10 yourself,
          confirm the schema validates, and add a second custom action with a Pydantic param_model.
        </li>
        <li>
          Week 7 lecture and reading: persistent browser profiles, logging in once and reusing the
          session, multi-tab work, and downloads. Custom actions and sensitive_data from this week
          are prerequisites.
        </li>
        <li>
          The browser-use GitHub examples directory (examples/features/) contains{" "}
          <code>sensitive_data.py</code>, <code>custom_output.py</code>, and{" "}
          <code>restrict_urls.py</code>, each a self-contained working example for the features
          covered here.
        </li>
      </ul>

      <Takeaways>
        <li>
          Register a custom action with <code>@tools.action(description=...)</code> on a{" "}
          <code>Tools</code> instance and pass <code>tools=tools</code> to Agent. The description is
          what the LLM reads to decide when to call the action.
        </li>
        <li>
          Use a Pydantic <code>param_model</code> with <code>Field</code> descriptions for actions
          with complex or ambiguous parameters; plain function signatures work for simple scalar
          inputs.
        </li>
        <li>
          <code>ActionResult.extracted_content</code> is visible the next step;{" "}
          <code>long_term_memory</code> persists across many steps. Return errors in the{" "}
          <code>error</code> field rather than raising exceptions.
        </li>
        <li>
          <code>output_model_schema</code> injects the schema into the task, configures the done
          action, and exposes <code>history.structured_output</code> for a parsed instance. Use it
          whenever another system consumes the result.
        </li>
        <li>
          <code>sensitive_data</code> keeps real secrets out of the LLM context via placeholder
          substitution. Always pair it with <code>BrowserProfile(allowed_domains=[...])</code> to
          prevent prompt-injection attacks from redirecting credentials to an unintended site.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          browser-use team (2026). Browser Use docs: Custom Functions (Tools).{" "}
          <a
            href="https://docs.browser-use.com/customize/custom-functions"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://docs.browser-use.com/customize/custom-functions
          </a>
          . The @tools.action decorator, allowed_domains per-action, Pydantic parameters, and
          injected dependencies.
        </p>
        <p>
          browser-use contributors (2026). browser_use/agent/views.py.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py
          </a>
          . ActionResult definition; AgentHistoryList.structured_output; AgentStructuredOutput TypeVar.
        </p>
        <p>
          browser-use contributors (2026). browser_use/agent/service.py.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py
          </a>
          . Agent.__init__ signature (output_model_schema, sensitive_data); _enhance_task_with_schema;
          sensitive_data domain validation and security warning.
        </p>
        <p>
          browser-use contributors (2026). browser_use/agent/message_manager/service.py.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/agent/message_manager/service.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/browser-use/browser-use/blob/main/browser_use/agent/message_manager/service.py
          </a>
          . _get_sensitive_data_description; _filter_sensitive_data; the &lt;secret&gt; tag protocol.
        </p>
        <p>
          browser-use contributors (2026). examples/features/custom_output.py.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/examples/features/custom_output.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/browser-use/browser-use/blob/main/examples/features/custom_output.py
          </a>
          . End-to-end example of output_model_schema with Post and Posts models.
        </p>
        <p>
          browser-use contributors (2026). examples/features/sensitive_data.py.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/examples/features/sensitive_data.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/browser-use/browser-use/blob/main/examples/features/sensitive_data.py
          </a>
          . Flat and domain-scoped sensitive_data formats with httpbin.org example.
        </p>
        <p>
          browser-use contributors (2026). examples/features/restrict_urls.py.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/examples/features/restrict_urls.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/browser-use/browser-use/blob/main/examples/features/restrict_urls.py
          </a>
          . BrowserProfile(allowed_domains=[...]) to restrict navigation at the browser layer.
        </p>
        <p>
          browser-use contributors (2026). examples/custom-functions/action_filters.py.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/examples/custom-functions/action_filters.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/browser-use/browser-use/blob/main/examples/custom-functions/action_filters.py
          </a>
          . Per-action allowed_domains with domain glob patterns; recalculation of available actions per step.
        </p>
        <p>
          browser-use contributors (2026). browser_use/browser/profile.py.{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/browser/profile.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/browser-use/browser-use/blob/main/browser_use/browser/profile.py
          </a>
          . BrowserProfile.allowed_domains and prohibited_domains field definitions.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk06ReadingSearchBody =
  "custom action tools.action decorator Tools instance Pydantic param_model Field description ActionResult extracted_content long_term_memory is_done error allowed_domains domain restriction output_model_schema structured output TopStories Posts sensitive_data placeholder secret tag domain-scoped credentials BrowserProfile browser navigation restriction prompt injection security CSS selector extract headings selector map week 6 reading browser-use custom tools structured results";
