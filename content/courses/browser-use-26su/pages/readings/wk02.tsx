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

export function Wk02Reading() {
  return (
    <ReadingPage
      id="wk02-page-to-elements"
      title="Week 2: From rendered page to numbered elements"
      kicker="Browser Use: How LLM Agents Drive the Web · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading explains exactly how browser-use turns a rendered web
          page into a short numbered list that an LLM can act on. The pipeline
          runs in the perceive step of every agent loop iteration: the DOM
          service pulls a DOM snapshot and the browser&rsquo;s accessibility
          tree over the Chrome DevTools Protocol (CDP), detects which elements
          are interactive, filters out hidden and off-viewport elements, and
          assigns a sequential integer index to each surviving element. Those
          indices are the agent&rsquo;s entire vocabulary for addressing the
          page. By the end you will be able to describe each stage of that
          pipeline, explain why pure-screenshot agents cost more tokens, and
          point at an index in a run log and say which element it refers to.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Week 1 introduced the
          perceive-decide-act loop, the browser-agent concept, and the
          agent-loop mechanics including <code>max_steps</code>. This reading
          goes inside the perceive step and opens up the DOM service that week
          1 treated as a black box.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-the-problem-html-is-too-big">
        1. The problem: raw HTML does not fit in a prompt
      </AnchorHeading>
      <p>
        A typical e-commerce product page produces between 50,000 and 500,000
        characters of raw HTML. A typical LLM context window holds tens of
        thousands of tokens, where one token is roughly four characters. Even
        if the page fit, most of that HTML is structural scaffolding: nested
        divs, inline styles, tracking pixels, and comment nodes that carry no
        information useful for deciding what to click next.
      </p>
      <p>
        The alternative that browser-use uses is to extract only what matters:
        the interactive elements a user could act on, described in a compact
        structured form. Each extracted element gets a sequential integer
        index. The LLM acts by referring to &ldquo;element 5&rdquo; rather
        than by writing a CSS selector or an XPath expression. This keeps the
        prompt short, keeps it model-agnostic, and makes every action
        deterministically parseable (browser-use contributors, 2026a).
      </p>

      <AnchorHeading as="h2" id="2-the-dom-tree">
        2. The DOM tree: a quick map
      </AnchorHeading>
      <p>
        When a browser loads a page, it parses the HTML and builds a Document
        Object Model: a tree of nodes where each node is an element, a text
        run, a comment, or one of a few other types. The root is the{" "}
        <code>document</code> node. Its children include <code>html</code>,
        which has <code>head</code> and <code>body</code>, and the body
        contains every visible element.
      </p>
      <p>
        Each element node carries a tag name (<code>button</code>,{" "}
        <code>a</code>, <code>input</code>), a set of attributes (
        <code>href</code>, <code>type</code>, <code>aria-label</code>,{" "}
        <code>class</code>), child nodes, and computed layout information such
        as the element&rsquo;s bounding box on screen. The bounding box is
        particularly important for the DOM service: it tells the service
        whether an element is visible in the current viewport.
      </p>

      <Mermaid
        chart={`graph TD
  doc[document]
  html[html]
  head[head]
  body[body]
  nav[nav]
  a1[a href=/]
  a2[a href=/about]
  main[main]
  h1[h1]
  btn[button]
  form[form]
  input[input type=text]
  submit[button type=submit]

  doc --> html
  html --> head
  html --> body
  body --> nav
  body --> main
  nav --> a1
  nav --> a2
  main --> h1
  main --> btn
  main --> form
  form --> input
  form --> submit`}
        alt="A simplified DOM tree showing document, html, head, body, nav with two links, and main with a heading, button, and form containing an input and submit button."
      />

      <p>
        The DOM tree alone is not enough for an agent. Two elements can have
        identical tags and attributes but very different purposes. A{" "}
        <code>div</code> with a click handler behaves like a button but has no
        semantic tag to distinguish it. This is where the accessibility tree
        comes in.
      </p>

      <AnchorHeading as="h2" id="3-the-accessibility-tree">
        3. The accessibility tree: semantic roles and names
      </AnchorHeading>
      <p>
        The accessibility tree is a parallel structure the browser maintains
        alongside the DOM. It exists primarily for screen readers and other
        assistive technology: it exposes a semantic view of the page where
        every node has a <em>role</em> (button, link, textbox, heading,
        listitem) and a <em>name</em> (the text or label a screen reader would
        announce). The name comes from the element&rsquo;s text content, its{" "}
        <code>aria-label</code> attribute, its <code>title</code>, or a
        label element linked with <code>for</code>.
      </p>
      <p>
        browser-use reads both trees simultaneously using CDP&rsquo;s{" "}
        <code>Accessibility.getFullAXTree</code> call. The DOM snapshot gives
        layout and computed styles. The accessibility tree gives semantic
        roles and human-readable names. Together they provide the information
        needed to both detect interactivity and describe each element to the
        LLM in plain text (browser-use contributors, 2026b).
      </p>
      <p>
        For a concrete example: a button rendered as{" "}
        <code>&lt;div class=&quot;btn&quot; role=&quot;button&quot; aria-label=&quot;Search&quot;&gt;</code>{" "}
        has a DOM node with tag <code>div</code> and an accessibility node
        with role <code>button</code> and name <code>Search</code>. When
        browser-use presents this element to the LLM, it can describe it as
        &ldquo;button: Search&rdquo; rather than as a raw div with a class
        name that carries no meaning.
      </p>

      <Callout title="Why the accessibility tree matters for agents">
        <p>
          Sokolov (2025) identifies accessibility-tree perception as one of
          three main architectures for browser agents. The key property is
          cost: &ldquo;A page that costs 5,000 vision tokens might be 500
          accessibility-tree tokens.&rdquo; For an agent that runs dozens or
          hundreds of steps, this 10x difference in per-step cost compounds
          into a large total. The accessibility tree also provides semantic
          labels that are more reliably correct than inferring intent from
          class names and inline styles.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-cdp-dom-snapshot">
        4. The CDP call: capturing both trees at once
      </AnchorHeading>
      <p>
        The Chrome DevTools Protocol is a wire protocol, originally built for
        DevTools, that lets any client (not just the browser&rsquo;s own tools)
        send commands to and receive events from a running Chrome or Chromium
        instance. browser-use uses it directly for DOM intelligence, even
        though the browser is launched through Playwright.
      </p>
      <p>
        The <code>DomService</code> class in{" "}
        <code>browser_use/dom/service.py</code> orchestrates several CDP
        requests in parallel at each perceive step (browser-use contributors,
        2026b):
      </p>
      <ul>
        <li>
          <code>DOMSnapshot.captureSnapshot()</code>: returns computed styles,
          paint order, and the bounding box (DOM rect) of every element. This
          is the source of layout and visibility information.
        </li>
        <li>
          <code>DOM.getDocument()</code>: retrieves the full DOM tree with{" "}
          <code>pierce: true</code>, which crosses shadow DOM boundaries so
          that elements inside web components are included.
        </li>
        <li>
          <code>Accessibility.getFullAXTree()</code>: the accessibility tree
          for all frames. The service recursively collects trees from all
          child frames and merges them into a single array, handling
          cross-origin iframes gracefully.
        </li>
        <li>
          <code>Page.getLayoutMetrics()</code>: the viewport dimensions and
          device pixel ratio, which are needed to evaluate whether an
          element&rsquo;s bounding box falls within the visible area.
        </li>
      </ul>
      <p>
        Running these in parallel rather than sequentially keeps the perceive
        step fast. The service then combines the results: for each DOM node,
        it looks up the corresponding accessibility node to get the semantic
        role and name, and it checks the bounding box against the viewport to
        determine visibility.
      </p>

      <AnchorHeading as="h2" id="5-interactive-element-detection">
        5. Detecting interactive elements
      </AnchorHeading>
      <p>
        Not every element that exists in the DOM is something an agent can
        usefully act on. A heading is informative but not clickable. A
        paragraph of text cannot receive keyboard input. The DOM service
        applies a detection step to find the elements that make sense to
        include in the numbered list.
      </p>
      <p>
        The detection works in two layers. The first layer uses the element
        tag and ARIA role: <code>a</code> (link), <code>button</code>,{" "}
        <code>input</code>, <code>select</code>, <code>textarea</code>, and
        elements whose role is <code>button</code>, <code>link</code>,{" "}
        <code>checkbox</code>, <code>radio</code>, <code>combobox</code>,{" "}
        <code>menuitem</code>, or similar interactive roles are candidates.
      </p>
      <p>
        The second layer handles elements that are interactive but do not use
        semantic HTML. Many modern web applications attach JavaScript click
        handlers to plain <code>div</code> or <code>span</code> elements.
        The DOM service uses a JavaScript event-listener inspection call to
        identify elements with click handlers. On pages with fewer than
        roughly 10,000 elements, it runs <code>getEventListeners()</code> on
        candidate elements to check for attached click listeners. On very
        large pages it skips this step to avoid performance issues
        (browser-use contributors, 2026b). The result is a set of backend
        node IDs for elements that have JS click listeners and thus should be
        treated as interactive even without a semantic role.
      </p>

      <AnchorHeading as="h2" id="6-visibility-filtering">
        6. Visibility filtering: what gets kept
      </AnchorHeading>
      <p>
        Once the interactive candidates are identified, the DOM service filters
        out elements the user cannot actually interact with. The filter applies
        three checks:
      </p>
      <p>
        <strong>CSS visibility.</strong> An element with{" "}
        <code>display: none</code>, <code>visibility: hidden</code>, or{" "}
        <code>opacity: 0</code> is not rendered. These are excluded.
      </p>
      <p>
        <strong>Viewport intersection.</strong> An element whose bounding box
        falls entirely outside the current viewport (including a configurable
        threshold margin) is excluded. The threshold extends slightly beyond
        the strict viewport boundary so that elements just off screen do not
        flicker in and out of the indexed set when the page scrolls by a few
        pixels.
      </p>
      <p>
        <strong>Parent iframe visibility.</strong> For elements inside an
        iframe, the check must verify that the iframe itself is visible in the
        parent page, accounting for scroll offsets at each level of the iframe
        hierarchy. The DOM service reverses up through the parent chain,
        adjusting coordinates at each level, and excludes the element if any
        ancestor iframe is off-screen (browser-use contributors, 2026b).
      </p>
      <p>
        Elements that pass all three checks are the interactive, visible
        candidates that proceed to the next step: indexing.
      </p>

      <AnchorHeading as="h2" id="7-the-selector-map">
        7. The selector map: numbering what survives
      </AnchorHeading>
      <p>
        After filtering, the DOM service assigns a sequential integer to each
        surviving element, starting from 0. The result is the{" "}
        <code>selector_map</code>: a dictionary mapping integer index to the
        enhanced node object that describes the element (its role, name, type,
        bounding box, and backend node ID). On a typical page this produces
        somewhere between a few dozen and a few hundred entries (browser-use
        contributors, 2026a).
      </p>
      <p>
        The selector map is what turns the abstract LLM decision &ldquo;I need
        to click the search button&rdquo; into a concrete browser action. The
        LLM is shown a text description of the numbered list: something like
        <code>[0] link: Home</code>, <code>[1] link: About</code>,{" "}
        <code>[2] button: Search</code>, <code>[3] input: Search query</code>.
        When it decides to click index 2, the DOM service looks up index 2 in
        the selector_map, retrieves the backend node ID, and sends the click to
        that specific node via CDP.
      </p>
      <p>
        This design means the LLM never writes CSS selectors or XPath
        expressions. It never needs to know how a button is positioned or what
        its class names are. It only needs to refer to an integer. The mapping
        from integer to real page element is handled entirely by the framework.
        Non-vision models work because the description is text. Vision models
        work too: they can align the numbered overlay on a screenshot with the
        text description. In either case the action resolves through the same
        integer.
      </p>

      <AnchorHeading as="h2" id="8-vision-the-use_vision-option">
        8. Vision: the <code>use_vision</code> option
      </AnchorHeading>
      <p>
        browser-use is DOM-first, but it can also send a screenshot alongside
        the text description. The <code>use_vision</code> parameter on the{" "}
        <code>Agent</code> constructor controls this. When set to{" "}
        <code>True</code>, a low-detail screenshot is captured at each perceive
        step and included in the message sent to the LLM, alongside the text
        representation of the indexed elements (browser-use contributors,
        2026a).
      </p>
      <p>
        The screenshot is marked &ldquo;low detail&rdquo; in the API call to
        keep token cost down. Even so, images cost tokens. A low-detail image
        in the OpenAI API costs 85 tokens regardless of dimensions. A
        high-detail image of a large page can exceed 1,000 tokens for the
        image alone, before counting the text prompt. For an agent running 20
        steps, the difference between DOM-only and DOM-plus-screenshot adds up
        to thousands of tokens per run (Gonsalvez, 2025).
      </p>
      <p>
        The screenshot provides spatial context that text cannot: the agent
        can see that element 5 is in the top-right corner and element 12 is in
        the middle of the page, and use that layout information in its
        reasoning. This is valuable for tasks where position matters (for
        example, filling a multi-column form where the label and input are not
        adjacent in the DOM tree). It is less valuable for tasks that are
        purely semantic: navigating to a link, filling in a search box,
        clicking a clearly labeled button.
      </p>

      <AnchorHeading as="h2" id="9-dom-first-vs-pure-screenshot">
        9. DOM-first vs. pure screenshot: a direct comparison
      </AnchorHeading>
      <p>
        Sokolov (2025) describes three architectures for browser agents:
        vision-based (screenshot only), accessibility-tree-based (text from
        the a11y tree), and runtime-DOM-based (compressed DOM representation).
        browser-use occupies a hybrid of the second and third: it reads both
        the accessibility tree and the DOM snapshot, and optionally adds a
        screenshot. Understanding the pure-screenshot approach clarifies why
        browser-use is designed the way it is.
      </p>
      <p>
        In a pure-screenshot approach, the agent receives only an image of the
        page. It uses a vision-capable LLM to identify what is on screen and
        decide where to click, typically by generating pixel coordinates. The
        advantages are universality (it works on any interface, including
        canvas elements and custom-rendered content that has no DOM
        representation) and simplicity (no CDP, no DOM extraction code
        needed). The disadvantages are cost and model requirements.
      </p>
      <p>
        Sokolov (2025) gives a direct token comparison: a page that costs
        5,000 vision tokens might cost 500 accessibility-tree tokens. For
        multi-step tasks, this difference is multiplicative: 20 steps at 5,000
        image tokens each is 100,000 image tokens in addition to the text
        tokens for the same run. Vision-only agents also require a model with
        vision capability; text-only models cannot be used even if they are
        cheaper or better at reasoning for a particular task.
      </p>
      <p>
        browser-use&rsquo;s DOM-first approach means a capable text model
        works without any vision support. The optional screenshot adds spatial
        context for tasks that need it, at a predictable extra token cost.
        Non-vision models can handle most navigational and form-filling tasks
        without seeing the page at all, because the text description of the
        indexed elements contains the semantic information needed to act.
      </p>
      <p>
        The tradeoff runs the other way for certain page types. Pages with
        canvas-based rendering (interactive charts, map UIs, custom game
        interfaces) have little or no DOM content to extract. For those,
        screenshots are the only path. Pages with poor accessibility compliance
        (legacy enterprise tools, pre-HTML5 applications) may have interactive
        elements that are not correctly labeled in the accessibility tree and
        whose click handlers are not detectable via event-listener inspection.
        For those, screenshots provide a fallback. The browser-use architecture
        handles the common case well and degrades gracefully for the edge cases
        (Sokolov, 2025).
      </p>

      <AnchorHeading as="h2" id="10-what-the-agent-actually-receives">
        10. What the agent actually receives
      </AnchorHeading>
      <p>
        The output of the DOM service at each perceive step is a structured
        representation of the page. It includes the current URL and page title,
        a serialized description of the interactive elements with their indices,
        and optionally a screenshot. The element descriptions look roughly like
        this (simplified from the actual format):
      </p>
      <pre>{`[0] link "Home" href=/
[1] link "About" href=/about
[2] link "Sign in" href=/login
[3] button "Search"
[4] input type=text placeholder="Search..."
[5] button type=submit "Submit"`}</pre>
      <p>
        This is what the LLM reasons over. When it decides to type into the
        search box, it generates an action referencing index 4. When it decides
        to click the search button, it references index 3. The integer is
        stable for the duration of one perceive step: after every navigation or
        page change, the entire index is rebuilt from scratch.
      </p>
      <p>
        The rebuild-from-scratch design is deliberate. DOM mutations (elements
        appearing or disappearing due to JavaScript) would make a persistent
        index stale and unreliable. Rebuilding at each step means the agent
        always acts on the current state of the page, not a cached state from
        a previous step (browser-use contributors, 2026a).
      </p>

      <AnchorHeading as="h2" id="11-the-hn-launch-thread-design-debate">
        11. Design choices reflected in the launch discussion
      </AnchorHeading>
      <p>
        The November 2024 Hacker News launch thread for browser-use includes
        an early community debate about screenshots versus DOM-based
        approaches. The founders explicitly positioned the project as
        DOM-first: the title of the launch post was &ldquo;Open-source browser
        alternative for Computer Use for any LLM,&rdquo; explicitly
        contrasting with Anthropic&rsquo;s screenshot-based computer-use
        feature (Müller, 2024).
      </p>
      <p>
        The &ldquo;for any LLM&rdquo; phrase in the launch title directly
        reflects the DOM-first design decision: by avoiding a mandatory
        screenshot in the perceive step, browser-use works with text-only
        models that have no vision capability. This was a deliberate choice to
        broaden the set of models that can drive the browser, not just the set
        of tasks.
      </p>
      <p>
        Gonsalvez (2025) summarizes the practical implication: &ldquo;Instead
        of taking a screenshot and feeding pixels to a vision model, browser-use
        extracts the DOM structure and presents it as text the model can reason
        over.&rdquo; The result is that the agent is &ldquo;fast and
        token-efficient&rdquo; compared to screenshot-only alternatives, at
        the cost of not working on canvas-based or accessibility-poor pages
        without enabling the vision option.
      </p>

      <AnchorHeading as="h2" id="12-the-index-as-vocabulary">
        12. The index as the agent&rsquo;s vocabulary
      </AnchorHeading>
      <p>
        The integer index system deserves emphasis because it is the mechanism
        that makes the entire architecture work. The LLM is not writing browser
        automation code. It is not generating CSS selectors or XPath
        expressions that might break when a site updates its class names. It is
        not identifying pixel coordinates that might drift when the viewport
        size changes. It is producing a short integer that refers to a specific
        interactive element in the current state of the page.
      </p>
      <p>
        This is exactly parallel to how a human thinks about a page: &ldquo;I
        need to click the blue button in the top right.&rdquo; The human does
        not write a selector. They identify the thing they want and act on it.
        The integer index is the agent&rsquo;s equivalent: a stable, unambiguous
        reference to a thing on the page, derived from the page&rsquo;s own
        semantic structure.
      </p>
      <p>
        The index also bounds the action space. At any given step, the agent
        can only reference indices that exist in the current selector_map. It
        cannot reference an element that is hidden, off-screen, or does not
        exist. This is a correctness property: the framework enforces that
        every element-targeted action points to a real, visible, interactive
        element. Actions that refer to nonexistent indices fail with an{" "}
        <code>ActionResult</code> error rather than silently doing the wrong
        thing (browser-use contributors, 2026a).
      </p>

      <AnchorHeading as="h2" id="exercises">
        13. Exercises
      </AnchorHeading>

      <Exercise n={1}>
        <p>
          From memory: name the four things the DOM service uses to build the
          selector_map (hint: two CDP calls give layout and accessibility, one
          call handles the viewport, and one mechanism detects JS click
          handlers). Do not look at section 4 while writing your answer.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          A page has a button with the HTML{" "}
          <code>&lt;div class=&quot;cta&quot; onclick=&quot;submit()&quot;&gt;Buy now&lt;/div&gt;</code>.
          Walk through how the DOM service decides whether to include this
          element in the selector_map: (a) what tag and role does it have?
          (b) what mechanism detects that it is interactive? (c) what name
          would it receive in the accessibility tree? (d) what index-entry
          description would the LLM see?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Compare: a task requires clicking a checkbox inside an iframe on a
          page with good accessibility markup. A second task requires clicking
          a drawing tool in a browser-based image editor rendered entirely in
          a canvas element. Which approach is better for each task: DOM-first,
          pure screenshot, or DOM-plus-screenshot? Give one specific reason for
          each choice.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          The selector_map index is rebuilt from scratch after every page
          change. Why does this design choice matter for correctness? What
          would go wrong if the index were cached across steps?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          You are designing an agent to fill out a multi-section form. The form
          has 12 input fields, 3 dropdowns, and 2 buttons. After the DOM
          service runs, should you expect all 17 interactive elements to appear
          in the selector_map? Name two conditions under which some of them
          would be excluded.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">14. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet:</strong> Dump the selector map for three
          real pages and match each index to an on-screen element. The
          hands-on implementation of every concept in this reading.
          (Week 2 section worksheet.)
        </li>
        <li>
          <strong>Week 3 reading:</strong> Covers how the DOM service output
          becomes a browser-state summary and how that summary is trimmed to
          fit a context budget.
        </li>
        <li>
          <strong>browser_use/dom/service.py:</strong> Read the actual
          extraction code to see the CDP calls and the visibility filter.
          The{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/dom/service.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            source on GitHub
          </a>{" "}
          is readable Python; the key methods are{" "}
          <code>_get_all_trees</code>,{" "}
          <code>is_element_visible_according_to_all_parents</code>, and{" "}
          <code>get_dom_tree</code>.
        </li>
        <li>
          <strong>Chrome DevTools Protocol documentation:</strong> The
          Accessibility domain and DOMSnapshot domain pages describe the exact
          fields returned by the CDP calls browser-use uses. Useful if you
          want to understand what information is available beyond what
          browser-use currently extracts.
        </li>
      </ul>

      <Takeaways>
        <li>
          Raw HTML is too large and too noisy to send to an LLM. The DOM
          service extracts only the interactive, visible elements and
          describes them compactly.
        </li>
        <li>
          The extraction uses two CDP data sources in parallel: the DOM
          snapshot (layout and computed styles) and the accessibility tree
          (semantic roles and names). Together they provide both the
          &ldquo;what is here&rdquo; and the &ldquo;what does it mean&rdquo;
          information.
        </li>
        <li>
          Interactive-element detection has two layers: semantic HTML tags and
          ARIA roles (first), and JavaScript event-listener inspection for
          non-semantic click handlers (second). Elements hidden by CSS or
          outside the viewport are then filtered out.
        </li>
        <li>
          Each surviving element gets a sequential integer index stored in the
          selector_map. The integer is the agent&rsquo;s entire vocabulary for
          addressing elements: it never writes selectors or coordinates.
        </li>
        <li>
          Screenshots are optional (<code>use_vision=True</code>). DOM-first
          works with text-only models and costs fewer tokens per step.
          Screenshots add spatial context for tasks where layout matters, at a
          measurable per-step token cost.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          browser-use contributors (2026a). browser-use/browser-use (GitHub
          repository and README).{" "}
          <a
            href="https://github.com/browser-use/browser-use"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use
          </a>
          . Canonical project description, quickstart, and architecture
          overview. Source of the DOM-first and use_vision design rationale.
        </p>
        <p>
          browser-use contributors (2026b). browser_use/dom/service.py (DOM
          extraction source).{" "}
          <a
            href="https://github.com/browser-use/browser-use/blob/main/browser_use/dom/service.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/browser-use/browser-use/blob/main/browser_use/dom/service.py
          </a>
          . The CDP-based DOM extraction implementation: snapshot, accessibility
          tree, interactive-element detection, visibility filtering, and the
          numbered selector map.
        </p>
        <p>
          Gonsalvez, S. (2025). browser-use: Give Your LLM a Browser and Watch
          It Go. DEV.to.{" "}
          <a
            href="https://dev.to/stevengonsalvez/browser-use-give-your-llm-a-browser-and-watch-it-go-51hb"
            target="_blank"
            rel="noopener noreferrer"
          >
            dev.to/stevengonsalvez
          </a>
          . Explains the DOM-first approach, per-action LLM call cost, and the
          token-efficiency rationale.
        </p>
        <p>
          Müller, M. (2024). Show HN: Open-source browser alternative for
          Computer Use for any LLM. Hacker News.{" "}
          <a
            href="https://news.ycombinator.com/item?id=42052432"
            target="_blank"
            rel="noopener noreferrer"
          >
            news.ycombinator.com/item?id=42052432
          </a>
          . November 2024 launch thread; founder framing and early community
          discussion of DOM versus screenshot approaches.
        </p>
        <p>
          Sokolov, A. (2025). The Three Architectures of Browser Agents.
          DEV.to.{" "}
          <a
            href="https://dev.to/alexey_sokolov_10deecd763/runtime-snapshots-16-the-three-architectures-of-browser-agents-4gkc"
            target="_blank"
            rel="noopener noreferrer"
          >
            dev.to/alexey_sokolov_10deecd763
          </a>
          . Compares screenshot-only, accessibility-tree, and runtime-DOM
          architectures, with token-cost comparisons.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk02ReadingSearchBody =
  "DOM tree accessibility tree selector map element index interactive elements visibility filtering CDP Chrome DevTools Protocol DOM snapshot AX tree ARIA roles use_vision screenshot token cost DOM-first browser-use perceive-decide-act loop numbered elements week 2 foundations how an agent sees a web page";
