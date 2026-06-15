import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk07SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="reuse-a-login-across-tabs">
        Section: Reuse a login across tabs
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 7 · Hands-on worksheet</p>

      <p>
        By the end of this section you will have run two agents against the same
        site. The first agent logs in and writes the session to a profile
        directory. The second agent reuses that directory and spreads work across
        two tabs, never re-entering credentials. You will also get your first
        look at the Capstone assignment, which is released this week.
      </p>

      {/* ---- RETRIEVAL DRILL ---- */}
      <AnchorHeading as="h2" id="part-0-retrieval">
        Part 0: Five-minute retrieval drill (week 6 concepts)
      </AnchorHeading>

      <p>
        Close all notes. Answer from memory. Write each answer before reading
        the next item. Checking takes ten seconds per item.
      </p>

      <ol>
        <li>
          <strong>Custom action decorator.</strong> What decorator marks a
          function as a custom action on a <code>Tools</code> instance? Write
          the import line and the decorator call as you would use them in real
          code.
        </li>
        <li>
          <strong>Output model.</strong> You want the agent to return a list of
          job titles scraped from a page, validated as a Pydantic model. What
          two things do you need to add to the <code>Agent()</code> call to make
          that work? Name the parameter and its type.
        </li>
        <li>
          <strong>sensitive_data mechanics.</strong> Explain in two sentences how{" "}
          <code>sensitive_data</code> keeps a password out of the model&rsquo;s
          context. What does the agent see? What does the framework substitute?
        </li>
        <li>
          <strong>Interleave (week 3).</strong> Recall the four components of the
          browser-state summary that <code>BrowserSession</code> captures each
          step. List them. Which one is optional, and what parameter controls it?
        </li>
      </ol>

      <p>
        Scoring: 4/4 means you can use week 6 concepts in today&rsquo;s section
        without looking them up. 2-3/4 means re-read the week 6 reading before
        continuing Part 1. Below 2/4: re-read week 6 fully first.
      </p>

      {/* ---- PART 1: PROFILE SETUP ---- */}
      <AnchorHeading as="h2" id="part-1-profile-setup">
        Part 1: Create a persistent profile directory
      </AnchorHeading>

      <p>
        A browser profile directory is an ordinary folder on disk. Chrome and
        Chromium write cookies, local storage, cached credentials, and IndexedDB
        data into it as the browser runs. When you point a new
        <code>BrowserSession</code> at the same folder, the browser picks up
        exactly where the last session left off.
      </p>

      <p>
        Start by creating the directory and confirming it does not already hold
        stale state from another project:
      </p>

      <pre>{`import os, pathlib

PROFILE_DIR = pathlib.Path.home() / ".bu_profiles" / "wk07"
PROFILE_DIR.mkdir(parents=True, exist_ok=True)
print("Profile directory:", PROFILE_DIR)`}</pre>

      <ol>
        <li>
          <strong>Inspect the directory before any run.</strong> List the
          contents of <code>PROFILE_DIR</code> before running any agent. It
          should be empty. Note the path. You will check it again after the
          login run.
        </li>
        <li>
          <strong>Choose a target site.</strong> Pick a site you have an account
          on that does not use SMS 2FA (most developers have a GitHub, GitLab, or
          Hacker News account). The site needs to hold a logged-in session cookie
          that persists across browser restarts. Write the site URL and your
          username (not your password) in your notes now.
        </li>
      </ol>

      {/* ---- PART 2: LOGIN RUN ---- */}
      <AnchorHeading as="h2" id="part-2-login-run">
        Part 2: Run the login agent
      </AnchorHeading>

      <p>
        This agent opens the site with a visible browser (<code>headless=False</code>
        ), logs in using <code>sensitive_data</code> so credentials never reach
        the model context, then closes. The session cookie is written to{" "}
        <code>PROFILE_DIR</code> by the browser automatically.
      </p>

      <pre>{`import asyncio
from browser_use import Agent
from browser_use.browser import BrowserSession
from browser_use.llm import ChatAnthropic  # or ChatOpenAI

async def login_once():
    session = BrowserSession(
        user_data_dir=str(PROFILE_DIR),
        headless=False,        # visible so you can watch the login
        keep_alive=False,      # close after the agent finishes
    )
    agent = Agent(
        task=(
            "Go to https://news.ycombinator.com/login and log in "
            "with username x-username and password x-password. "
            "After login, confirm the page shows 'logout' in the top bar."
        ),
        llm=ChatAnthropic(model="claude-opus-4-5"),
        browser_session=session,
        sensitive_data={
            "x-username": "YOUR_REAL_USERNAME",
            "x-password": "YOUR_REAL_PASSWORD",
        },
    )
    result = await agent.run()
    return result

asyncio.run(login_once())`}</pre>

      <ol start={3}>
        <li>
          <strong>Run the login agent.</strong> Replace the credentials with your
          own. Watch the browser window. Confirm the agent lands on the logged-in
          state before the session closes.
        </li>
        <li>
          <strong>Inspect the profile directory after the run.</strong> List the
          directory contents now. You should see Chrome profile subdirectories
          (Default or similar), including a <code>Cookies</code> file. These are
          your persisted credentials. Do not check them into version control.
        </li>
        <li>
          <strong>Verify the profile persists.</strong> Open Chrome manually and
          point it at the same profile directory (via{" "}
          <code>--user-data-dir=PATH</code>). Navigate to the site. Are you still
          logged in? This confirms the cookie is on disk, not just in memory.
        </li>
      </ol>

      {/* ---- PART 3: SESSION REUSE ACROSS TWO TABS ---- */}
      <AnchorHeading as="h2" id="part-3-two-tabs">
        Part 3: Run a second agent that reuses the session across two tabs
      </AnchorHeading>

      <p>
        The second agent reads the same profile directory. It opens a first tab
        to check that the session is active, then opens a second tab to do
        useful work. No login prompt appears because the cookies are already
        there.
      </p>

      <pre>{`import asyncio
from browser_use import Agent
from browser_use.browser import BrowserSession
from browser_use.llm import ChatAnthropic

async def two_tab_run():
    session = BrowserSession(
        user_data_dir=str(PROFILE_DIR),
        headless=False,
    )
    agent = Agent(
        task=(
            "1. Open a tab to https://news.ycombinator.com and confirm "
            "that the top bar shows a username (not a login link). "
            "2. Open a second tab to https://news.ycombinator.com/saved "
            "and return the titles of the first five saved stories as a "
            "Python list."
        ),
        llm=ChatAnthropic(model="claude-opus-4-5"),
        browser_session=session,
    )
    result = await agent.run()
    print(result)

asyncio.run(two_tab_run())`}</pre>

      <ol start={6}>
        <li>
          <strong>Run the two-tab agent.</strong> Watch the browser. Confirm it
          does not navigate to the login page. The first tab should show your
          username; the second should show saved items.
        </li>
        <li>
          <strong>Observe tab switching in the step history.</strong> After the
          run, print <code>agent.history.all_results()</code> and find the step
          where the agent opened the second tab. Which built-in action name did
          it use?
        </li>
        <li>
          <strong>Interleave (week 5).</strong> Find the step in the history
          where the agent extracted the saved story titles. What{" "}
          <code>ActionResult</code> did it return? Was the content carried
          forward as a note in the <code>memory</code> field of the next{" "}
          <code>AgentOutput</code>? Check the raw output to confirm.
        </li>
      </ol>

      {/* ---- PART 4: SECURE THE PROFILE ---- */}
      <AnchorHeading as="h2" id="part-4-security">
        Part 4: Secure the profile directory
      </AnchorHeading>

      <p>
        A profile directory that contains session cookies is as sensitive as a
        plaintext password file. Anyone with read access to the directory can
        extract the cookies and replay the session. Three steps to reduce risk:
      </p>

      <ol start={9}>
        <li>
          <strong>Restrict permissions.</strong> Run{" "}
          <code>chmod 700 ~/.bu_profiles</code> on Unix. This allows only your
          user to read or write the directory.
        </li>
        <li>
          <strong>Add to .gitignore.</strong> Open your project&rsquo;s{" "}
          <code>.gitignore</code> and add a line for the profile path pattern
          (e.g., <code>.bu_profiles/</code>). Commit the change. Verify with{" "}
          <code>git status</code> that the directory is ignored.
        </li>
        <li>
          <strong>Scope the allowed domains.</strong> Add{" "}
          <code>allowed_domains=["news.ycombinator.com"]</code> to the
          BrowserSession. Confirm that if you change the task to visit a
          different domain, the agent declines or errors rather than acting on
          the out-of-scope site.
        </li>
      </ol>

      {/* ---- PART 5: CAPSTONE NOTICE ---- */}
      <AnchorHeading as="h2" id="part-5-capstone">
        Part 5: Capstone assignment released this week
      </AnchorHeading>

      <p>
        The Capstone is assigned this week and due at the end of week 10. You
        will design, build, and defend a complete browser-use agent for a
        real multi-step task of your choosing. This week&rsquo;s work directly
        informs it: most interesting capstone tasks require either authentication,
        multi-tab navigation, downloads, or all three.
      </p>

      <p>
        Before leaving section, write one sentence in your notes answering this
        question: what multi-step browser task in your own work or side projects
        would benefit from an autonomous agent that can stay logged in? Keep this
        note. It is the seed of your capstone proposal.
      </p>

      {/* ---- SELF-GRADING RUBRIC ---- */}
      <AnchorHeading as="h2" id="rubric">Self-grading rubric</AnchorHeading>

      <p>
        Grade yourself before leaving. Five or more out of six means the section
        is complete.
      </p>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Done?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>1. Retrieval drill 4/4.</strong> All four week 6 items
              answered from memory before looking up.
            </td>
            <td>yes / no</td>
          </tr>
          <tr>
            <td>
              <strong>2. Profile directory created and inspected.</strong> You
              listed contents before and after the login run and observed the
              Cookies file appear.
            </td>
            <td>yes / no</td>
          </tr>
          <tr>
            <td>
              <strong>3. Login agent ran successfully.</strong> The agent
              finished with the site showing the logged-in state; credentials
              passed via <code>sensitive_data</code>, not in the task string.
            </td>
            <td>yes / no</td>
          </tr>
          <tr>
            <td>
              <strong>4. Two-tab agent ran without re-logging in.</strong> The
              second agent opened two tabs and extracted data using the persisted
              session.
            </td>
            <td>yes / no</td>
          </tr>
          <tr>
            <td>
              <strong>5. Step history inspected.</strong> You identified the tab-
              switch action name and found the extraction <code>ActionResult</code>{" "}
              in the history.
            </td>
            <td>yes / no</td>
          </tr>
          <tr>
            <td>
              <strong>6. Profile secured.</strong> Permissions restricted,
              .gitignore updated, and <code>allowed_domains</code> set on the
              session.
            </td>
            <td>yes / no</td>
          </tr>
        </tbody>
      </table>

      <p>
        If you scored below 5/6, finish the missing items before the week 8
        section. Week 8 builds on authenticated agents; a broken profile
        directory will block that work.
      </p>
    </>
  );
}

export const wk07SectionSearchBody =
  "persistent profile login reuse session two tabs BrowserSession user_data_dir sensitive_data login agent second agent multi-tab tab switching allowed_domains profile security cookies gitignore capstone week 7 section worksheet browser use authentication state";
