import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk07Reading() {
  return (
    <ReadingPage
      id="wk07"
      title="Week 7: profiles, logins, tabs, and downloads"
      kicker="Browser Use: How LLM Agents Drive the Web · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the browser layer below the agent: how you give an
          agent a real, persistent browser identity instead of a fresh anonymous
          session. After reading it you will be able to persist a login across
          agent runs using a profile directory, share authenticated state across
          tabs inside one run, save downloaded files to a known path, and record
          sessions for debugging. You will also know when the right response to a
          complex file-handling need is to write a custom tool rather than rely on
          the built-in actions.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You should be comfortable with{" "}
          <code>BrowserSession</code> configuration from week 3,{" "}
          <code>@tools.action()</code> custom actions and the{" "}
          <code>file_system</code> injected dependency from week 5, and the{" "}
          <code>sensitive_data</code> placeholder pattern from week 6. This week
          applies all three to the problem of authenticated, multi-step browser
          work.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-headless-vs-real">
        1. Headless vs visible: when the mode matters
      </AnchorHeading>
      <p>
        By default, browser-use launches a headless browser: a Chromium instance
        with no visible window. Headless mode is faster, needs no display server,
        and is the right choice for unattended production runs. But headless mode
        is also the reason many login flows fail: sites that use bot-detection
        heuristics (Cloudflare, Akamai, and similar services) treat headless
        Chrome differently from a visible browser. The browser fingerprint differs
        in detectable ways.
      </p>
      <p>
        Setting <code>headless=False</code> on a <code>BrowserSession</code>{" "}
        opens a real, visible Chrome or Chromium window. The browser-use team
        calls this a "real browser" configuration (browser-use team, 2026). The
        practical effect is that anti-bot checks are more likely to pass, CAPTCHA
        prompts appear where you can intervene, and you can watch the agent work
        step by step, which is useful for debugging.
      </p>
      <pre>{`from browser_use.browser import BrowserSession

session = BrowserSession(
    headless=False,          # open a visible window
    window_size={"width": 1280, "height": 900},
)`}</pre>
      <p>
        Visible mode has one cost: it requires a display. In a cloud VM or Docker
        container you will need a virtual display (Xvfb on Linux) or a hosted
        browser service. For local development, visible mode is the right default
        while you are building and debugging; headless mode is the right default
        when you deploy.
      </p>

      <AnchorHeading as="h2" id="2-profile-directories">
        2. Profile directories and persistent state
      </AnchorHeading>
      <p>
        Every Chrome or Chromium session writes its state somewhere. In a fresh
        browser launch with no profile specified, that state lives in a temporary
        directory and is discarded when the browser closes. Setting{" "}
        <code>user_data_dir</code> to a path on disk tells the browser to use
        that directory as its profile. On the next launch with the same path, the
        browser picks up exactly where the previous session left off.
      </p>
      <p>
        What the profile directory contains (browser-use team, 2026):
      </p>
      <pre>{`~/.bu_profiles/my-site/
├── Default/
│   ├── Cookies           # SQLite database of all cookies
│   ├── Local Storage/    # Web localStorage per origin
│   ├── IndexedDB/        # Per-origin IndexedDB databases
│   ├── Login Data        # Saved form credentials (encrypted)
│   └── ...
└── Local State           # Browser-level preferences`}</pre>
      <p>
        The <code>Cookies</code> file is the key item. An HTTP session cookie
        placed there by a successful login persists until the cookie&rsquo;s
        expiry time. The browser presents it automatically on every subsequent
        request to the same origin, regardless of whether a human or an agent is
        driving the browser. From the server&rsquo;s perspective, the session is
        continuous.
      </p>

      <Callout title="Profile directories are plaintext secrets">
        <p>
          A profile directory containing a live session cookie is functionally
          equivalent to a plaintext password file. Anyone with read access to the
          directory can extract the cookies and replay the session. Three
          practices are required: restrict file permissions (<code>chmod 700</code>{" "}
          on Unix), add the directory to <code>.gitignore</code>, and never put
          it inside a Docker image or CI artifact. Treat the directory with the
          same care as an <code>.env</code> file.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-using-user-data-dir">
        3. Using user_data_dir in practice
      </AnchorHeading>
      <p>
        The pattern for persistent authentication across runs is two-step: run a
        login agent once, then run task agents that reuse the result.
      </p>
      <pre>{`import asyncio, pathlib
from browser_use import Agent
from browser_use.browser import BrowserSession
from browser_use.llm import ChatAnthropic

PROFILE = pathlib.Path.home() / ".bu_profiles" / "my-site"
PROFILE.mkdir(parents=True, exist_ok=True)

# Step 1: login agent (run once)
async def login():
    session = BrowserSession(
        user_data_dir=str(PROFILE),
        headless=False,
        keep_alive=False,
    )
    agent = Agent(
        task=(
            "Go to https://example.com/login and sign in "
            "with username x-user and password x-pass."
        ),
        llm=ChatAnthropic(model="claude-opus-4-5"),
        browser_session=session,
        sensitive_data={"x-user": "myname", "x-pass": "s3cret"},
    )
    await agent.run()

# Step 2: task agent (reuses the profile, no credentials needed)
async def do_work():
    session = BrowserSession(
        user_data_dir=str(PROFILE),
        headless=False,
    )
    agent = Agent(
        task="Go to https://example.com/dashboard and return the account balance.",
        llm=ChatAnthropic(model="claude-opus-4-5"),
        browser_session=session,
    )
    result = await agent.run()
    print(result)

asyncio.run(login())
asyncio.run(do_work())`}</pre>
      <p>
        The login agent uses <code>sensitive_data</code> so the real username and
        password never appear in the task string that the LLM processes. The task
        string contains only the placeholder names (<code>x-user</code>,{" "}
        <code>x-pass</code>); the framework substitutes the real values when it
        executes the type action (browser-use team, 2026). This is the week 6
        pattern applied to the week 7 context: profile persistence and credential
        safety are separate concerns, and both must be handled.
      </p>
      <p>
        The <code>profile_directory</code> parameter is a Chromium-level concept:
        when Chrome stores multiple profiles (the &ldquo;Person 1&rdquo;,
        &ldquo;Person 2&rdquo; switcher), each lives in a named subdirectory of
        the user data dir. For programmatic use, the default subdirectory (named{" "}
        <code>Default</code>) is the right choice unless you need multi-profile
        switching.
      </p>

      <AnchorHeading as="h2" id="4-storage-state-and-keep-alive">
        4. storage_state and keep_alive
      </AnchorHeading>
      <p>
        <code>user_data_dir</code> is the most durable form of session
        persistence: it survives across Python processes, machine restarts, and
        long time gaps. Two lighter-weight alternatives exist for shorter-lived
        scenarios.
      </p>
      <p>
        <strong>storage_state</strong> saves and restores the cookies and local
        storage for a set of origins to a JSON file. It is a Playwright concept
        (browser-use uses Playwright for browser launch and lifecycle) and it is
        available on <code>BrowserSession</code> (browser-use team, 2026). The
        workflow: run a login manually or with a short script, call{" "}
        <code>context.storage_state(path="state.json")</code> on the Playwright
        context, then pass <code>storage_state="state.json"</code> to subsequent
        sessions. The file contains only cookie and storage data, not the full
        browser profile, so it is smaller and easier to handle than a profile
        directory. Its trade-off is that it captures a snapshot rather than a
        live directory, so changes that occur after the snapshot was taken are not
        included.
      </p>
      <p>
        <strong>keep_alive</strong> tells <code>BrowserSession</code> to leave
        the browser process running after the agent finishes (browser-use team,
        2026). A second agent pointing at the same session object picks up the
        existing browser context with its cookies intact. This works within a
        single Python process: useful for a pipeline where you want several agents
        to share state without touching the filesystem. It does not help across
        separate Python process launches.
      </p>
      <pre>{`# keep_alive within one process
session = BrowserSession(keep_alive=True)

agent1 = Agent(task="Log in to example.com ...", browser_session=session, ...)
await agent1.run()

# session is still alive; agent2 gets the same browser context
agent2 = Agent(task="Open the settings page ...", browser_session=session, ...)
await agent2.run()

# Explicitly close when done
await session.close()`}</pre>

      <AnchorHeading as="h2" id="5-multi-tab">
        5. Multi-tab work
      </AnchorHeading>
      <p>
        Every browser context can hold multiple tabs. The agent&rsquo;s built-in
        actions include operations for opening a new tab and switching between
        tabs. The exact action names in the tools registry are accessible from
        the agent&rsquo;s step history; as of mid-2026, the registry includes
        actions in the family of <code>open_tab</code> (navigate a new tab to a
        URL) and <code>switch_tab</code> (change the active page by index).
      </p>
      <p>
        Within one <code>BrowserSession</code>, all tabs share the same browser
        context: same cookies, same local storage, same login state. This is the
        key property that makes multi-tab work useful for authenticated agents. A
        login that happened on tab 1 is immediately present on tab 2 because both
        tabs read from the same cookie jar.
      </p>
      <p>
        A task prompt that asks for multi-tab behavior might look like:
      </p>
      <pre>{`task = """
1. Open https://example.com/inbox and note the number of unread messages.
2. Open a second tab to https://example.com/compose and write a reply
   to the most recent sender with the subject 'Re: your message'.
3. Return: the original unread count and the subject line of the reply.
"""`}</pre>
      <p>
        The agent is free to open tabs in any order the task allows, and it
        carries notes in the <code>memory</code> field of <code>AgentOutput</code>{" "}
        to pass information (like the unread count) across steps and tabs. The
        memory field is exactly the procedural memory introduced in week 4: the
        agent&rsquo;s own scratchpad, carried step to step.
      </p>

      <Callout title="Tab indices are not stable">
        <p>
          When an agent opens a second tab, the first tab is index 0 and the
          second is index 1. If the agent later opens a third tab, the indices
          shift. A task prompt that says &ldquo;go back to tab 0&rdquo; may refer
          to a different page than intended if tabs were opened in an unexpected
          order. Write task prompts in terms of the page content, not the tab
          index: &ldquo;switch to the inbox tab&rdquo; is more reliable than
          &ldquo;switch to tab 0.&rdquo;
        </p>
      </Callout>

      <AnchorHeading as="h2" id="6-downloads">
        6. Downloads and file handling
      </AnchorHeading>
      <p>
        Many real-world tasks end with a file: a CSV export, a PDF invoice, a
        generated report. Three <code>BrowserSession</code> parameters control
        how the browser handles downloads (browser-use team, 2026):
      </p>
      <pre>{`session = BrowserSession(
    accept_downloads=True,          # allow the browser to save files
    downloads_path="/tmp/agent-dl", # where files land on disk
    auto_download_pdfs=True,        # PDF links save instead of opening
)`}</pre>
      <p>
        With <code>accept_downloads=True</code>, when the agent clicks a download
        link the file is saved to <code>downloads_path</code>. The agent itself
        does not move the file; it lands wherever <code>downloads_path</code>{" "}
        points. If you want the agent to do something with the file after
        downloading it (parse a CSV, rename it, move it to a specific location),
        write a custom tool that handles the file using the injected{" "}
        <code>file_system</code> dependency.
      </p>
      <pre>{`import asyncio, csv, pathlib
from browser_use import Agent, Tools
from browser_use.browser import BrowserSession
from browser_use.agent.views import ActionResult
from browser_use.llm import ChatOpenAI
from pydantic import BaseModel

tools = Tools()
DOWNLOAD_DIR = pathlib.Path("/tmp/agent-dl")

class ParseCSVInput(BaseModel):
    filename: str

@tools.action("Parse a downloaded CSV and return the row count", domains=["example.com"])
async def parse_csv(params: ParseCSVInput) -> ActionResult:
    path = DOWNLOAD_DIR / params.filename
    if not path.exists():
        return ActionResult(error=f"File not found: {path}")
    with open(path) as f:
        rows = list(csv.reader(f))
    return ActionResult(extracted_content=f"CSV has {len(rows)} rows")`}</pre>
      <p>
        The <code>domains</code> restriction in <code>@tools.action()</code>{" "}
        (using the <code>allowed_domains</code> parameter, per the week 6 custom
        action pattern) limits where this action can be called, which prevents
        the agent from applying your CSV parser to a file downloaded from an
        unintended site.
      </p>

      <AnchorHeading as="h2" id="7-recording-for-debugging">
        7. Recording runs for debugging
      </AnchorHeading>
      <p>
        Watching an agent fail in headless mode is opaque. Recording gives you a
        video of the browser as it ran, and a HAR file with every network request
        the browser made. Both are configured on <code>BrowserSession</code>{" "}
        (browser-use team, 2026):
      </p>
      <pre>{`session = BrowserSession(
    record_video_dir="/tmp/agent-videos",
    record_video_size={"width": 1280, "height": 900},
    record_video_framerate=10,        # frames per second (10 is enough for debugging)
    record_har_path="/tmp/agent-run.har",  # network archive
)`}</pre>
      <p>
        After a run, the video file lives in <code>record_video_dir</code>. Play
        it back to see exactly what the agent saw at each step. The HAR file
        (HTTP Archive format) can be opened in Chrome DevTools (Network tab,
        &ldquo;Import HAR&rdquo;) to inspect every request and response the
        browser made during the run.
      </p>
      <p>
        Recording is heavier than a normal run: video encoding uses CPU and the
        HAR file can grow large for long sessions. Use recording when you are
        diagnosing a failing agent or verifying a new workflow for the first time.
        Turn it off once the agent runs reliably.
      </p>
      <p>
        The <code>traces_dir</code> parameter enables Playwright tracing: a
        structured JSON trace of every action with screenshots at each step.
        Playwright&rsquo;s own trace viewer (<code>playwright show-trace</code>)
        renders these traces interactively. This is the most detailed debugging
        format available and is worth enabling for any run you intend to dissect
        carefully.
      </p>

      <AnchorHeading as="h2" id="8-when-to-use-a-custom-tool">
        8. When to hand off to a custom tool
      </AnchorHeading>
      <p>
        The built-in actions handle navigation, clicking, typing, scrolling,
        extraction, and tab management. They do not handle: processing downloaded
        files, calling non-browser APIs, interacting with the local filesystem in
        structured ways, or any action where the agent needs typed results back
        from a Python function. For all of those cases, write a custom tool.
      </p>
      <p>
        The decision rule is straightforward: if completing the task requires the
        agent to do something that is not possible through browser interactions,
        write a custom tool. If the task is purely browser-driven, the built-in
        actions are enough.
      </p>
      <p>
        Common week 7 scenarios where a custom tool is the right answer:
      </p>
      <pre>{`# Scenario 1: write a downloaded CSV to a database
@tools.action("Save CSV rows to Postgres")
async def save_to_db(params: SaveCSVInput) -> ActionResult:
    ...  # read the file, connect, INSERT

# Scenario 2: parse a downloaded PDF
@tools.action("Extract text from a PDF")
async def extract_pdf(params: PDFInput) -> ActionResult:
    ...  # use pdfplumber or similar

# Scenario 3: call an API the site does not expose through the UI
@tools.action("Submit an order via the API")
async def api_order(params: OrderInput) -> ActionResult:
    ...  # requests.post to the backend API`}</pre>
      <p>
        Each of these is a case where browser clicks and text extraction are the
        wrong tool. The agent should navigate to the download link, click it, and
        then hand control to a custom tool for the rest. The task prompt drives
        this handoff: tell the agent what to do with the file after downloading,
        and it will call the appropriate custom tool if one is registered.
      </p>

      <AnchorHeading as="h2" id="9-auth-without-leaking-credentials">
        9. Authentication without leaking credentials
      </AnchorHeading>
      <p>
        Week 6 introduced <code>sensitive_data</code> as the mechanism for
        keeping secrets out of the LLM context. Week 7 adds a second risk layer:
        the profile directory. Even if credentials never enter the model context,
        a profile directory with live session cookies is a high-value target. The
        full threat model for an authenticated agent has three layers:
      </p>
      <ol>
        <li>
          <strong>Credentials (username and password)</strong> must stay out of
          the task string using <code>sensitive_data</code>. The LLM sees only
          the placeholder names.
        </li>
        <li>
          <strong>Session cookies (profile directory)</strong> must stay off
          version control and out of CI artifacts. Restrict filesystem permissions
          and add the path to <code>.gitignore</code>.
        </li>
        <li>
          <strong>Scope of action</strong> must be limited. Use{" "}
          <code>allowed_domains</code> on <code>BrowserSession</code> to restrict
          where the agent may navigate. A misconfigured task prompt or a prompt
          injection attack (a malicious page trying to redirect the agent) is
          contained if the allowed domain list is narrow.
        </li>
      </ol>
      <p>
        Prompt injection from page content is a real risk (browser-use
        contributors, 2026). A page you control is safe; a page generated by a
        third party may contain hidden instructions directed at the agent. The{" "}
        <code>allowed_domains</code> restriction reduces the blast radius but does
        not eliminate the risk entirely if the targeted domain itself can be
        compromised. For high-stakes automation (financial transactions, account
        changes), a human-in-the-loop confirmation step before the agent acts is
        appropriate.
      </p>

      <AnchorHeading as="h2" id="10-from-system-chrome">
        10. Connecting to an existing Chrome install
      </AnchorHeading>
      <p>
        Instead of launching a new browser process, you can connect to the system
        Chrome installation that is already installed on your machine and may
        already hold your login sessions. The browser-use docs (browser-use team,
        2026) show two class methods for this:
      </p>
      <pre>{`from browser_use.browser import BrowserSession

# Use the system Chrome binary and optionally an existing profile
session = BrowserSession.from_system_chrome(profile="Default")

# List the Chrome profiles on this machine
profiles = BrowserSession.list_chrome_profiles()
print(profiles)  # ['Default', 'Profile 1', 'Profile 2']`}</pre>
      <p>
        <code>from_system_chrome()</code> finds the system Chrome binary and
        sets <code>user_data_dir</code> to the operating-system-specific default
        location for Chrome profiles. The result is an agent that operates inside
        your everyday browser: it has access to all of your existing logins. This
        is the most convenient approach for personal automation tasks, but it
        carries a risk: the agent can potentially access every site you are logged
        into, not just the one the task intends. Narrow the scope with{" "}
        <code>allowed_domains</code>.
      </p>

      <AnchorHeading as="h2" id="11-putting-it-together">
        11. A complete authenticated multi-tab workflow
      </AnchorHeading>
      <p>
        The complete week 7 pattern combines a persistent profile, credential
        safety, multi-tab navigation, a download, and a custom tool:
      </p>
      <pre>{`import asyncio, pathlib
from browser_use import Agent, Tools
from browser_use.browser import BrowserSession
from browser_use.agent.views import ActionResult
from browser_use.llm import ChatAnthropic
from pydantic import BaseModel

PROFILE = pathlib.Path.home() / ".bu_profiles" / "reports-site"
DOWNLOADS = pathlib.Path("/tmp/reports")
DOWNLOADS.mkdir(exist_ok=True)

tools = Tools()

class ProcessReportInput(BaseModel):
    filename: str

@tools.action("Summarize a downloaded report CSV")
async def summarize_report(params: ProcessReportInput) -> ActionResult:
    path = DOWNLOADS / params.filename
    if not path.exists():
        return ActionResult(error=f"{params.filename} not found in {DOWNLOADS}")
    lines = path.read_text().splitlines()
    return ActionResult(
        extracted_content=f"Report has {len(lines) - 1} data rows (plus header)."
    )

async def main():
    session = BrowserSession(
        user_data_dir=str(PROFILE),
        headless=False,
        accept_downloads=True,
        downloads_path=str(DOWNLOADS),
        allowed_domains=["reports.example.com"],
        record_video_dir="/tmp/run-video",
    )
    agent = Agent(
        task=(
            "1. Go to https://reports.example.com/monthly and confirm you are "
            "logged in (your name appears in the header). "
            "2. Open a second tab to https://reports.example.com/export and "
            "download the file called 'summary.csv'. "
            "3. Call summarize_report with filename='summary.csv' and return "
            "the result."
        ),
        llm=ChatAnthropic(model="claude-opus-4-5"),
        browser_session=session,
        tools=tools,
    )
    result = await agent.run()
    print(result)

asyncio.run(main())`}</pre>
      <p>
        This pattern is the foundation for most production browser agents that
        need authentication. The login step runs once, separately. The task agent
        is stateless with respect to credentials; it only needs the profile
        directory and the <code>allowed_domains</code> guard.
      </p>

      <AnchorHeading as="h2" id="12-exercises">12. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          From memory, describe the three layers of credential risk for an
          authenticated agent: where the username and password could leak, where
          the session cookie could leak, and what limits the agent&rsquo;s scope
          of action. Name the browser-use parameter that addresses each layer.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          You have a <code>user_data_dir</code> pointing at a profile that was
          created three months ago. You run an agent and it gets a login prompt
          instead of accessing the site directly. List three reasons why the
          stored session might no longer work, ordered from most to least likely.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write a <code>BrowserSession</code> configuration that: uses a profile
          directory at <code>~/.bu_profiles/my-project</code>, opens a visible
          window, saves downloads to <code>~/Downloads/agent</code>, records a
          video to <code>/tmp/video</code>, and restricts navigation to{" "}
          <code>app.example.com</code>. Show the code.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          A task prompt asks the agent to &ldquo;open tab 0 and extract the
          order number.&rdquo; Explain why this prompt is fragile and rewrite it
          in a way that does not depend on tab index.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          You are building an agent that logs into a financial dashboard and
          downloads a monthly statement PDF. Identify every place in the design
          where you would use (a) <code>sensitive_data</code>, (b){" "}
          <code>allowed_domains</code>, (c) <code>user_data_dir</code>, and (d) a
          custom tool. For each, write one sentence justifying the choice.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="13-going-deeper">13. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section worksheet walks through
          the two-agent login-then-reuse pattern against a real site you already
          have an account on.
        </li>
        <li>
          <strong>Capstone (assigned this week, due week 10).</strong> Most
          interesting capstone tasks need authentication. The pattern in this
          reading is the foundation for the auth layer of your capstone agent.
          Decide this week whether your capstone task requires login, downloads,
          or both.
        </li>
        <li>
          <strong>Week 8.</strong> Covers agent reliability: loop detection,
          max_failures, and task framing for agents that handle edge cases. The
          patterns here (profile-based auth, multi-tab) are assumed in week 8.
        </li>
        <li>
          <strong>Browser Use docs: Browser Settings.</strong> The full parameter
          reference at{" "}
          <a
            href="https://docs.browser-use.com/customize/browser-settings"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/browser-settings
          </a>{" "}
          lists every <code>BrowserSession</code> option with types and defaults.
          Keep it open during section.
        </li>
      </ul>

      <Takeaways>
        <li>
          <code>user_data_dir</code> is the most durable form of session
          persistence. Set it to a directory on disk and the browser writes
          cookies there; the next agent run reads them back without any login
          step.
        </li>
        <li>
          <code>sensitive_data</code> and <code>user_data_dir</code> address
          different risks. Sensitive_data keeps credentials out of the LLM
          context; the profile directory keeps session cookies off version
          control. Both protections are always needed for authenticated agents.
        </li>
        <li>
          Within one <code>BrowserSession</code>, all tabs share the same browser
          context: the login state from tab 1 is automatically present on tab 2.
          Write task prompts that describe tabs by their content, not by index.
        </li>
        <li>
          <code>accept_downloads</code> and <code>downloads_path</code> route
          files to disk; a custom tool handles anything the agent needs to do
          with the file after it arrives. Built-in actions stop at the download
          click.
        </li>
        <li>
          Use <code>record_video_dir</code> and <code>record_har_path</code> when
          diagnosing a failing run. Turn recording off once the agent runs
          reliably in production.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          browser-use team. &ldquo;Browser Settings.&rdquo; Browser Use
          Documentation, 2026.{" "}
          <a
            href="https://docs.browser-use.com/customize/browser-settings"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/browser-settings
          </a>
          . Full parameter reference for <code>BrowserSession</code>: headless,
          user_data_dir, profile_directory, storage_state, keep_alive,
          accept_downloads, downloads_path, record_video_dir, record_har_path,
          allowed_domains, and more. The primary source for this reading.
        </p>
        <p>
          browser-use team. &ldquo;Custom Functions (Tools).&rdquo; Browser Use
          Documentation, 2026.{" "}
          <a
            href="https://docs.browser-use.com/customize/custom-functions"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/custom-functions
          </a>
          . The <code>@tools.action()</code> decorator, injected dependencies
          including <code>file_system</code>, and the pattern for custom
          download-handling tools.
        </p>
        <p>
          browser-use team. &ldquo;Sensitive Data and Allowed Domains.&rdquo;
          Browser Use Documentation, 2026.{" "}
          <a
            href="https://docs.browser-use.com/customize/sensitive-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.browser-use.com/customize/sensitive-data
          </a>
          . Placeholder substitution that keeps secrets out of the model context,
          and the <code>allowed_domains</code> restriction for scope control.
          (Note: confirm exact URL against the docs nav; the browser-settings page
          is the verified fallback.)
        </p>
        <p>
          browser-use contributors. <em>browser-use/browser-use</em> (GitHub
          repository). browser-use contributors, 2026.{" "}
          <a
            href="https://github.com/browser-use/browser-use"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use
          </a>
          . The canonical source for action names, BrowserSession internals, and
          verified facts about the framework.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk07ReadingSearchBody =
  "headless visible real browser user_data_dir profile directory persistent context cookies session login state storage_state keep_alive multi-tab open_tab switch_tab downloads accept_downloads downloads_path file_system custom tool recording record_video_dir record_har_path traces sensitive_data allowed_domains authentication credentials profile security from_system_chrome week 7 reading browser use profiles logins tabs downloads";
