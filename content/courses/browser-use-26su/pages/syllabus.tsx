import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export function SyllabusPage() {
  return (
    <>
      <AnchorHeading as="h1" id="syllabus">Syllabus</AnchorHeading>
      <p className="fs-6 fw-300">{config.fullTitle} · {config.term}</p>
      <p>
        By the end of this course you can hand a plain-English task to an LLM, have a browser-use
        agent carry it out in a real browser, and explain to a colleague exactly what happened
        inside the loop when it worked and when it did not. You will not just call the library.
        You will own the perceive-decide-act loop well enough to debug it, extend it, and decide
        what to trust it with.
      </p>

      <AnchorHeading as="h2" id="about">What this course is about</AnchorHeading>
      <p>
        browser-use is an open-source Python library that lets a language model drive a web
        browser to complete tasks described in plain language. You give it a goal and a model;
        it reads the page, picks an action, runs it, and repeats until the task is done. This
        course takes you from your first three-line agent to a complete, hardened agent you
        design and defend, and it spends equal time on two questions: how does the thing work
        inside, and how do I build something real with it.
      </p>
      <p>
        Half the weeks open the hood: how a rendered page becomes a numbered list of clickable
        elements, how the browser state is captured and trimmed to fit a model&rsquo;s context,
        how the model is forced to answer in a fixed shape, and how that answer becomes a real
        click. The other half are hands-on: writing custom tools, returning structured data,
        driving a logged-in browser, and making an agent reliable enough to trust.
      </p>

      <AnchorHeading as="h2" id="fundamentals">The four fundamentals</AnchorHeading>
      <ol>
        <li>
          <strong>The loop is the whole game.</strong> Perceive, decide, act, repeat. Every
          feature in browser-use is either part of this loop or a way to steer it. When something
          breaks, you debug the loop, not the library.
        </li>
        <li>
          <strong>The agent acts by index, not by selector.</strong> The page is reduced to a
          numbered list of interactive elements. The model says &ldquo;click element 5&rdquo;.
          Understand that translation and most of the system makes sense.
        </li>
        <li>
          <strong>Structure is what makes it reliable.</strong> The model must answer in a fixed,
          validated shape. Free prose cannot be executed; a typed object can. The same idea powers
          custom tools and structured output.
        </li>
        <li>
          <strong>Working once is not reliability.</strong> A demo that succeeds once proves
          almost nothing. Reliability is measured across many runs, and it is earned with task
          framing and guards, not hope.
        </li>
      </ol>

      <AnchorHeading as="h2" id="roadmap">The roadmap</AnchorHeading>
      <p>
        <strong>Foundations (weeks 1-2).</strong> What browser-use is, the perceive-decide-act
        loop, and how an agent sees a page: the DOM, the accessibility tree, and the numbered
        selector map. You run your first agents and read their history.
      </p>
      <p>
        <strong>Core mechanics (weeks 3-5).</strong> The three essential pieces, one per week:
        capturing browser state in a session, forcing a structured decision out of the LLM, and
        dispatching the chosen action through the tools registry to the page.
      </p>
      <p>
        <strong>Composition (weeks 6-7).</strong> Putting the pieces to work: writing custom
        tools with typed parameters, returning validated structured data, and driving a real,
        logged-in browser across tabs without leaking secrets.
      </p>
      <p>
        <strong>Frontier (weeks 8-9).</strong> Where the field actually is: making agents
        reliable, then evaluating them honestly and surveying the ecosystem (CLI, MCP, the
        hosted cloud, and how browser-use compares to Stagehand and raw Playwright).
      </p>
      <p>
        <strong>Synthesis (week 10).</strong> You design, build, test, and defend a complete
        agent for a real multi-step task of your choosing.
      </p>

      <AnchorHeading as="h2" id="prerequisites">Prerequisites</AnchorHeading>
      <p>
        You should be comfortable reading and writing basic Python and working at the command
        line. Async Python (<code>async</code>/<code>await</code>) and LLM API basics are
        introduced as they come up, not assumed. You need access to one LLM provider key (an
        OpenAI, Anthropic, or Google key, or a local model). No prior experience with browser
        automation or LLM agents is required.
      </p>

      <AnchorHeading as="h2" id="work-flow">How the work flows</AnchorHeading>
      <p>
        Each week: read the chapter first, then attend the two lectures, then do the section
        worksheet, which is where the skill is actually built. Homeworks run for two weeks each
        and are spaced so that a concept introduced in one week is exercised again later.
        Sections open with a five-minute retrieval drill on the prior week and mix in earlier
        material on purpose, because recalling something cold is what moves it into long-term
        memory.
      </p>

      <AnchorHeading as="h2" id="evaluation">How you are evaluated</AnchorHeading>
      <p>
        Exact weights are confirmed before the term begins; the structure below is fixed. You are
        evaluated on:
      </p>
      <ul>
        <li><strong>Section worksheets.</strong> Completed and self-graded each week.</li>
        <li><strong>Homeworks (HW1-HW4).</strong> Four build-one-piece assignments, each out for two weeks.</li>
        <li><strong>Capstone.</strong> A complete agent you design, build, evaluate, and defend.</li>
        <li><strong>Participation in a real community.</strong> Evidence that you took a question or a result somewhere humans could push back on it.</li>
      </ul>

      <AnchorHeading as="h2" id="policies">Policies</AnchorHeading>
      <p>
        <strong>Late work.</strong> Homeworks have a short grace window; the design document
        portion of the capstone does not, because its whole point is to commit to a plan before
        you build. Plan around the two-week windows.
      </p>
      <p>
        <strong>AI use.</strong> This is a course about directing AI agents, so using AI tools is
        expected. Two rules. First, you own every line you submit: if an agent or assistant wrote
        code you cannot explain, it is not done. Second, when an assignment asks you to read an
        agent&rsquo;s history or diagnose a failure, do that analysis yourself. The skill being
        built is judgment about agents, and you cannot outsource the thing you are trying to learn.
      </p>

      <AnchorHeading as="h2" id="reading-list">Reading list</AnchorHeading>
      <p>
        There is no required external textbook. The weekly <a href={`${base}/readings`}>readings</a>{" "}
        are the textbook. For going deeper, these primary references are worth keeping open:
      </p>
      <ul>
        <li><Ext href="https://docs.browser-use.com">browser-use documentation</Ext>: the authoritative reference for the current API.</li>
        <li><Ext href="https://github.com/browser-use/browser-use">browser-use source on GitHub</Ext>: when the docs are ambiguous, the code is the truth.</li>
        <li><Ext href="https://docs.pydantic.dev">Pydantic documentation</Ext>: the data-validation library behind structured output and tool parameters.</li>
        <li><Ext href="https://playwright.dev/python/">Playwright for Python</Ext>: the browser-automation layer the stable agent builds on.</li>
        <li><Ext href="https://arxiv.org/abs/2504.01382">An Illusion of Progress? Assessing the Current State of Web Agents (COLM 2025)</Ext>: the honest case for why benchmark scores mislead.</li>
      </ul>

      <AnchorHeading as="h2" id="communities">Where to find people who aren&rsquo;t this site</AnchorHeading>
      <p>
        Wisdom comes from people who are not reading from this script. Take your questions and
        your results to communities where humans can push back:
      </p>
      <ul>
        <li>
          <Ext href="https://github.com/browser-use/browser-use/discussions">browser-use GitHub Discussions</Ext>:
          the primary place for questions and feature talk; maintainers are active. Search before posting.
        </li>
        <li>
          <Ext href="https://github.com/browser-use/browser-use/issues">browser-use GitHub Issues</Ext>:
          reading closed issues is one of the fastest ways to learn what changed in the API and why.
        </li>
        <li>
          browser-use Discord: real-time help and project show-and-tell. The current invite link lives
          in the <Ext href="https://github.com/browser-use/browser-use">repo README</Ext> (invites rotate).
        </li>
        <li>
          <Ext href="https://reddit.com/r/LocalLLaMA">r/LocalLLaMA</Ext>: running agents with local and
          open-weight models, and the cost tradeoffs.
        </li>
        <li>
          <Ext href="https://reddit.com/r/MachineLearning">r/MachineLearning</Ext>: academic discussion of
          web-agent papers and benchmark debates, useful for week 9.
        </li>
        <li>
          <Ext href="https://ossstartuppodcast.substack.com">Open Source Startup Podcast</Ext>: founder
          interviews and build-culture context, including the browser-use episode.
        </li>
      </ul>
    </>
  );
}

export const syllabusSearchBody =
  "syllabus browser-use LLM agents perceive decide act loop selector map structured output reliability prerequisites Python async grading homework capstone late policy AI use reading list Pydantic Playwright communities GitHub Discussions Discord r/LocalLLaMA evaluation";
