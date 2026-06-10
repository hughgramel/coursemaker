import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk05Reading() {
  return (
    <ReadingPage
      id="wk05"
      title="Week 5: dynamic programming and interview communication"
      kicker="Landing the Offer: SWE Job Search for Senior CS Students · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers two outcomes. First, you will{" "}
          <strong>apply</strong>: solve a 1D dynamic programming problem by
          stating its recurrence in math, converting it to top-down memoization,
          then converting that to bottom-up tabulation. The worked example is
          House Robber, followed by a second example that shows how the same
          pattern applies to Coin Change. Second, you will{" "}
          <strong>apply</strong>: narrate a coding session in interview style,
          including the clarifying questions you ask before writing, the edge
          cases you name before coding, and the recovery moves you use when
          stuck. A checklist and a set of ready phrases close the reading.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Recursion as a pattern and
          base-case discipline from Week 4. Time and space complexity analysis
          from Week 3. Familiarity with solving LeetCode mediums under time
          pressure from Week 3. The concept of a coding interview rubric and
          what code-quality signal means, also from Week 3.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-what-dp-is-and-is-not">
        1. What dynamic programming is and is not
      </AnchorHeading>
      <p>
        <strong>Dynamic programming</strong> is a technique for solving
        problems that have two properties: overlapping subproblems and optimal
        substructure. Overlapping subproblems means the same smaller problem
        appears repeatedly inside the larger one. Optimal substructure means an
        optimal answer to the large problem can be built from optimal answers to
        the smaller ones.
      </p>
      <p>
        The technique does not require memorizing a library of solutions. It
        requires recognizing these two properties in a new problem, then
        following a consistent process to convert them into code. NeetCode
        (2021) puts this directly: "Don&rsquo;t try to memorize solutions.
        Learn the pattern. Once you see that a problem is a 0/1 knapsack
        variant, you already know the recurrence." The process is the same
        across dozens of surface-level-different problems.
      </p>
      <p>
        What DP is not: it is not a search technique (that is BFS or DFS), and
        it is not a greedy algorithm. Greedy algorithms make the locally optimal
        choice at each step without storing past results. DP stores past results
        precisely because the greedy choice is not always globally optimal. The
        distinction matters in interviews because candidates often confuse the
        two, particularly on problems where a greedy approach exists for some
        inputs but not all.
      </p>

      <AnchorHeading as="h2" id="2-the-three-questions">
        2. The three questions before any DP problem
      </AnchorHeading>
      <p>
        Before writing a single line of code for a DP problem, answer three
        questions in writing (or aloud, in an interview). These questions force
        you to define the state before the code, which is where most DP errors
        originate.
      </p>
      <ol>
        <li>
          <strong>What does dp[i] represent?</strong> Write one sentence.
          If you cannot write it, the state is not yet defined. For Climbing
          Stairs: "dp[i] is the number of distinct ways to reach step i from
          step 0."
        </li>
        <li>
          <strong>What are the base cases?</strong> The smallest valid inputs
          you can answer directly, without needing earlier cells. For Climbing
          Stairs: dp[0] = 1 (one way to be at step 0: do nothing), dp[1] = 1
          (one way to reach step 1: one single step).
        </li>
        <li>
          <strong>What is the transition?</strong> How does dp[i] depend on
          earlier cells? For Climbing Stairs: dp[i] = dp[i-1] + dp[i-2],
          because you can reach step i from step i-1 (one step) or from step
          i-2 (two steps).
        </li>
      </ol>
      <p>
        Tushar Roy&rsquo;s teaching discipline (2016) is built entirely around
        this order: draw the recurrence first, then fill in the table, then
        write the code. The code is a translation of the table, not an
        independent artifact.
      </p>

      <AnchorHeading as="h2" id="3-house-robber-top-down">
        3. House Robber: recurrence and top-down memoization
      </AnchorHeading>
      <p>
        House Robber is the canonical 1D DP problem. The problem: given an
        array of non-negative integers representing the money in each house on a
        street, return the maximum amount you can rob without robbing two
        adjacent houses.
      </p>
      <p>
        <strong>Step 1: state definition.</strong>
      </p>
      <pre>{`dp[i] = the maximum money you can rob
        from houses 0 through i (inclusive)`}</pre>
      <p>
        <strong>Step 2: base cases.</strong>
      </p>
      <pre>{`dp[0] = nums[0]              (only one house; take it)
dp[1] = max(nums[0], nums[1])(two houses; take the larger)`}</pre>
      <p>
        <strong>Step 3: transition.</strong> At house i, you have two choices.
        Rob it: take nums[i] plus the best you could do through house i-2
        (skipping the adjacent house i-1). Skip it: take whatever you got
        through house i-1.
      </p>
      <pre>{`dp[i] = max(dp[i-1], dp[i-2] + nums[i])`}</pre>
      <p>
        <strong>Step 4: top-down (memoized) code.</strong>
      </p>
      <pre>{`def rob(nums: list[int]) -> int:
    memo: dict[int, int] = {}

    def dp(i: int) -> int:
        if i == 0:
            return nums[0]
        if i == 1:
            return max(nums[0], nums[1])
        if i in memo:
            return memo[i]
        memo[i] = max(dp(i - 1), dp(i - 2) + nums[i])
        return memo[i]

    return dp(len(nums) - 1)`}</pre>
      <p>
        Time complexity: O(n), because each cell is computed once. Space
        complexity: O(n) for the cache plus O(n) for the call stack in the
        worst case (a chain of recursive calls).
      </p>

      <AnchorHeading as="h2" id="4-house-robber-tabulation">
        4. House Robber: bottom-up tabulation
      </AnchorHeading>
      <p>
        Tabulation eliminates the call stack by filling the dp array iteratively
        from left to right. You compute dp[0] and dp[1] directly (base cases),
        then fill dp[2] through dp[n-1] using the transition.
      </p>
      <pre>{`def rob(nums: list[int]) -> int:
    n = len(nums)
    if n == 1:
        return nums[0]
    dp = [0] * n
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    for i in range(2, n):
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])
    return dp[n - 1]`}</pre>
      <p>
        Time: O(n). Space: O(n) for the dp array. This can be reduced to O(1)
        by keeping only the two most recent values instead of the full array,
        since dp[i] depends only on dp[i-1] and dp[i-2].
      </p>
      <pre>{`def rob(nums: list[int]) -> int:
    n = len(nums)
    if n == 1:
        return nums[0]
    prev2, prev1 = nums[0], max(nums[0], nums[1])
    for i in range(2, n):
        curr = max(prev1, prev2 + nums[i])
        prev2, prev1 = prev1, curr
    return prev1`}</pre>

      <Callout title="State compression">
        <p>
          When dp[i] depends only on dp[i-1] and dp[i-2], you do not need the
          full array. Two variables hold the last two values. This pattern
          (called state compression) reduces space from O(n) to O(1) and comes
          up on House Robber, Climbing Stairs, and any other Fibonacci-shaped
          recurrence. Mention it in an interview when you present the
          tabulation version.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="5-house-robber-trace">
        5. Worked trace: House Robber on [2, 7, 9, 3, 1]
      </AnchorHeading>
      <p>
        Input: <code>nums = [2, 7, 9, 3, 1]</code>. Five houses.
      </p>
      <pre>{`dp[0] = 2
        (only house 0 available; take it)

dp[1] = max(nums[0], nums[1])
      = max(2, 7)
      = 7
        (take house 1 alone; it beats house 0)

dp[2] = max(dp[1], dp[0] + nums[2])
      = max(7, 2 + 9)
      = max(7, 11)
      = 11
        (rob houses 0 and 2: 2 + 9 = 11)

dp[3] = max(dp[2], dp[1] + nums[3])
      = max(11, 7 + 3)
      = max(11, 10)
      = 11
        (skip house 3; previous best is still 11)

dp[4] = max(dp[3], dp[2] + nums[4])
      = max(11, 11 + 1)
      = max(11, 12)
      = 12
        (rob houses 0, 2, and 4: 2 + 9 + 1 = 12)`}</pre>
      <p>
        Answer: 12. The optimal set is houses 0, 2, and 4. Notice that dp[3]
        equals dp[2] because house 3 (value 3) is not worth robbing given what
        we already have from dp[1] = 7. The transition automatically handles
        this by taking the max.
      </p>

      <AnchorHeading as="h2" id="6-coin-change">
        6. A second pattern: Coin Change
      </AnchorHeading>
      <p>
        Coin Change shows the unbounded knapsack pattern, where you can use
        each item (coin) as many times as you want. The problem: given a set of
        coin denominations and a target amount, return the minimum number of
        coins needed to make that amount.
      </p>
      <p>
        <strong>State:</strong>{" "}
        <code>dp[i] = minimum coins needed to make amount i</code>.
      </p>
      <p>
        <strong>Base case:</strong> dp[0] = 0 (zero coins make amount 0).
        Initialize all other cells to a sentinel value larger than any valid
        answer (amount + 1 is standard).
      </p>
      <p>
        <strong>Transition:</strong> for each amount i and each coin c in the
        coin list, if c &lt;= i then dp[i] = min(dp[i], 1 + dp[i - c]).
      </p>
      <pre>{`def coin_change(coins: list[int], amount: int) -> int:
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for c in coins:
            if c <= i:
                dp[i] = min(dp[i], 1 + dp[i - c])
    return dp[amount] if dp[amount] <= amount else -1`}</pre>
      <p>
        Time: O(amount * len(coins)). Space: O(amount). The two nested loops
        are the giveaway: outer loop over targets, inner loop over coins.
      </p>
      <p>
        Compare this to House Robber: the state definition (dp[i] represents
        the answer for size-i subproblem) is the same shape. The transition is
        different because the structure of the problem is different. Learning to
        recognize "which family does this belong to" is what the NeetCode (2021)
        approach trains.
      </p>

      <AnchorHeading as="h2" id="7-thinking-aloud">
        7. Thinking aloud: the scored skill most candidates ignore
      </AnchorHeading>
      <p>
        A coding interview rubric typically scores four dimensions: problem
        solving, communication, code quality, and verification. Communication
        means: did the candidate keep the interviewer informed about what they
        were doing and why?
      </p>
      <p>
        Tay (2023) writes: "Try to avoid staying quiet for long periods of
        time, as it is important to keep the interviewer in your loop and talk
        them through your approach." The reason this matters is not courtesy.
        It is information. An interviewer who knows you are stuck can offer a
        hint. An interviewer who sees you silent for two minutes cannot tell
        whether you are thinking or lost, and often assumes the latter.
      </p>
      <p>
        Narration is a skill, not a personality trait. It does not come
        naturally under pressure. The only way to build it is to practice
        solving problems aloud before you are in the interview. The section
        worksheet this week includes a recorded narrated solve for exactly this
        reason: you need to hear your own silence before you can fix it.
      </p>

      <AnchorHeading as="h2" id="8-edge-case-checklist">
        8. Edge-case enumeration: a repeatable checklist
      </AnchorHeading>
      <p>
        Run this checklist before writing code for any interview problem. Say
        each case aloud and state how your approach handles it.
      </p>
      <ol>
        <li>
          <strong>Empty input.</strong> Array of length 0, empty string, n = 0,
          amount = 0.
        </li>
        <li>
          <strong>Single element.</strong> Array of length 1. Often a base
          case; confirm your base case covers it.
        </li>
        <li>
          <strong>Negative numbers.</strong> Does the problem allow them? If
          yes, does your recurrence handle them? Coin Change with negative coins
          is a different problem.
        </li>
        <li>
          <strong>Duplicates.</strong> If the input has repeated values, does
          your state definition remain unambiguous?
        </li>
        <li>
          <strong>Overflow.</strong> If you are summing or multiplying, can the
          running total exceed int range? In Python this is rarely an issue; in
          Java or C++ it matters.
        </li>
        <li>
          <strong>Off-by-one.</strong> Is your loop{" "}
          <code>range(n)</code> or <code>range(n+1)</code>? Does your dp array
          have length n or n+1? Coin Change needs dp of length amount+1, not
          amount.
        </li>
      </ol>
      <p>
        Working through this list takes about 60 seconds. Skipping it costs 5
        minutes when you discover a bug mid-code and have to trace back to find
        which edge case broke the invariant.
      </p>

      <AnchorHeading as="h2" id="9-clarifying-questions">
        9. Clarifying questions: three to ask, how to ask them
      </AnchorHeading>
      <p>
        Three categories of questions apply to almost every interview problem.
        Ask before coding.
      </p>
      <p>
        <strong>Input constraints.</strong> "Can the array be empty? Are values
        always positive? What is the maximum value of n?" The answers determine
        which edge cases you handle and whether your approach is fast enough.
      </p>
      <p>
        <strong>Output format.</strong> "Should I return the value or its
        index? If there is no valid answer, what should I return?" For Coin
        Change, the convention is -1 for no answer; knowing this before you
        start lets you set your sentinel value correctly.
      </p>
      <p>
        <strong>Ambiguity in the problem statement.</strong> "If there are
        multiple valid answers, should I return any one, all of them, or the
        lexicographically smallest?" For problems like Combination Sum, this
        changes the output structure entirely.
      </p>
      <p>
        Ask questions one at a time. After the answers, state your approach:
        "OK, with that I am thinking of approaching this bottom-up, with a 1D
        dp array of size amount+1. Does that seem reasonable?" This invites
        early feedback before you spend 15 minutes on the wrong path.
      </p>

      <AnchorHeading as="h2" id="10-recovery-when-stuck">
        10. Recovery when stuck
      </AnchorHeading>
      <p>
        The moment most candidates go silent is when their initial approach
        produces a wrong answer or they cannot see the transition. Mihailescu
        (2020) argues this is the moment that distinguishes candidates: "When
        you get stuck, you need a system for getting unstuck."
      </p>
      <p>
        Four tactics, in order. Use the first one first.
      </p>
      <p>
        <strong>Step back to examples.</strong> Pick the smallest input where
        your approach fails. Trace through it by hand, writing values in a
        table. Often the trace reveals the bug or the missing case. Say aloud:
        "Let me trace through this with input [1, 2, 3] to see what is
        happening."
      </p>
      <p>
        <strong>Simplify the problem.</strong> Can you solve it correctly for
        an array of length 2? Length 3? Where exactly does your approach break
        when you add the fourth element? Narrowing the failure case almost
        always reveals the fix.
      </p>
      <p>
        <strong>Name what you know.</strong> State the constraints you are
        certain about: "I know the answer is at most n. I know dp[i] must be
        non-decreasing. I know the transition involves the two adjacent cells."
        Naming constraints reduces the search space and often surfaces the
        answer.
      </p>
      <p>
        <strong>Ask for a hint.</strong> Say: "I am stuck on how to handle the
        case where the coin value exceeds the current amount. Is there a
        direction you can point me in?" Asking for a hint is not a failure. It
        shows the interviewer exactly where your reasoning broke down, which is
        useful signal. Do not pretend you are fine when you are not.
      </p>

      <AnchorHeading as="h2" id="11-ready-phrases">
        11. Ready phrases for each moment
      </AnchorHeading>
      <p>
        Prepare one phrase for each of the following moments before the
        interview. These should feel natural, not scripted.
      </p>
      <p>
        <strong>Opening the problem:</strong> "Let me read this through once
        and then ask a couple of clarifying questions before I start."
      </p>
      <p>
        <strong>Stating the approach:</strong> "I think this is a 1D DP
        problem. My state will be dp[i] = [definition]. The transition looks
        like [recurrence]. Let me verify that with a small example before
        coding."
      </p>
      <p>
        <strong>Getting stuck:</strong> "I am not immediately seeing the
        transition here. Let me step back and trace a small example."
      </p>
      <p>
        <strong>Finding a bug:</strong> "My output for this test case is
        wrong. I am going to trace through the dp array by hand and find where
        it diverges."
      </p>
      <p>
        <strong>Finishing:</strong> "I believe this is correct. The time
        complexity is O(n) and the space is O(n), reducible to O(1) with state
        compression. Let me check the edge cases: empty array handled here,
        single element handled here."
      </p>

      <AnchorHeading as="h2" id="12-exercises">12. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          Write the recurrence relation for Climbing Stairs in math notation.
          Define dp[i], state the base cases, and state the transition. Then
          write the tabulated code and trace it on n = 5. What is dp[5]?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Convert the memoized House Robber solution from Section 3 of this
          reading to a tabulated version. Then compress the state so the space
          is O(1) instead of O(n). Verify your compressed version produces the
          same output as the full table on input [2, 7, 9, 3, 1].
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Pick a DP problem from the NeetCode 1D DP section of the roadmap
          that you have not solved before. Before writing any code, write the
          three-question answers: dp[i] definition, base cases, transition.
          Then code the tabulated solution. Time yourself on the recurrence
          step: how long does it take before you feel confident in the state
          definition?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Open a problem (any problem, DP or otherwise). Run the six-item
          edge-case checklist from Section 8 aloud. For each case, state in
          one sentence how your approach handles it or why it does not apply.
          Record yourself doing this. On playback, were there silences longer
          than five seconds? Which case caused the longest pause?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Read this claim: "I do not need to ask clarifying questions because
          the LeetCode problem statement is unambiguous." Name two categories
          of information that the problem statement does not tell you, and
          explain how the answer to each would change your code.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="13-going-deeper">
        13. Going deeper
      </AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> Pattern sprint 3: two DP mediums
          with recurrence written first, plus a recorded narrated solve with
          peer feedback on your communication. The section worksheet at{" "}
          <a href="/c/landing-the-offer-26au/sections/wk05">
            landing-the-offer-26au/sections/wk05
          </a>{" "}
          has the full rubric.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the recurrence-first
          process, memoization vs. tabulation, 1D vs. 2D state, and the four
          canonical problems in detail with slides at{" "}
          <a href="/c/landing-the-offer-26au/slides/wk05-l1.pdf">
            wk05-l1.pdf
          </a>
          .
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers think-aloud, edge-case
          enumeration, clarifying questions, and recovery tactics with slides at{" "}
          <a href="/c/landing-the-offer-26au/slides/wk05-l2.pdf">
            wk05-l2.pdf
          </a>
          .
        </li>
        <li>
          <strong>HW3 (recorded mock coding interview).</strong> Now out. The
          narration practice in section and in the exercises above is the direct
          preparation for this assignment.
        </li>
        <li>
          <strong>NeetCode 1D DP section.</strong> The NeetCode roadmap at{" "}
          <a href="https://neetcode.io/roadmap">neetcode.io/roadmap</a> lists
          the 1D DP problems in a deliberate order. Work through at least three
          problems from that section this week, writing the recurrence before
          each one.
        </li>
      </ul>

      <Takeaways>
        <li>
          DP problems have two properties: overlapping subproblems and optimal
          substructure. Recognizing these properties tells you the technique;
          the recurrence tells you the solution.
        </li>
        <li>
          Always answer three questions before coding: what does dp[i]
          represent, what are the base cases, and what is the transition.
          Writing the recurrence before the code catches state definition
          errors early.
        </li>
        <li>
          Memoization and tabulation produce the same result. Memoization is
          easier to derive from the recurrence; tabulation eliminates the call
          stack and allows state compression.
        </li>
        <li>
          Communication is scored separately from correctness. Run the
          edge-case checklist aloud, ask one to three clarifying questions
          before coding, and narrate your stuck state immediately rather than
          going silent.
        </li>
        <li>
          Recovery when stuck follows a sequence: trace a small example,
          simplify the problem, name what you know, then ask for a hint. The
          worst move is silence.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Mihailescu, Clement. &ldquo;How To Pass Your Coding Interviews.&rdquo;
          YouTube, 2020.{" "}
          <a href="https://www.youtube.com/watch?v=z3h0JGANLoI">
            youtube.com/watch?v=z3h0JGANLoI
          </a>
          . Practical framework for coding interview preparation, with a focus
          on the meta-strategy and the process for getting unstuck.
        </p>
        <p>
          NeetCode. &ldquo;Top 5 Dynamic Programming Patterns for Coding
          Interviews.&rdquo; YouTube, 2021.{" "}
          <a href="https://www.youtube.com/watch?v=mBNrRy2_hVs">
            youtube.com/watch?v=mBNrRy2_hVs
          </a>
          . Surveys the five DP pattern families (0/1 knapsack, unbounded
          knapsack, Fibonacci-style 1D, palindromes, longest common
          subsequence) as templates, not one-off solutions.
        </p>
        <p>
          NeetCode. &ldquo;NeetCode Roadmap.&rdquo; 2023.{" "}
          <a href="https://neetcode.io/roadmap">neetcode.io/roadmap</a>.
          Canonical free interactive DSA roadmap; the 1D DP and 2D DP sections
          are the direct practice complement to this reading.
        </p>
        <p>
          Roy, Tushar. &ldquo;Dynamic Programming.&rdquo; Coding Made Simple
          (YouTube playlist), 2016.{" "}
          <a href="https://www.youtube.com/playlist?list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr">
            youtube.com/playlist?list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr
          </a>
          . Twenty-plus problems taught by drawing the state table before
          writing any code; the source of the &ldquo;recurrence first&rdquo;
          discipline in this reading.
        </p>
        <p>
          Tay, Yangshun. &ldquo;Coding Interview Best Practices.&rdquo; Tech
          Interview Handbook, 2023.{" "}
          <a href="https://www.techinterviewhandbook.org/coding-interview-prep/">
            techinterviewhandbook.org/coding-interview-prep/
          </a>
          . Checklist for interview communication: think-aloud, edge cases,
          clarifying questions, and verification. The primary source for the
          communication sections of this reading.
        </p>
        <p>
          Washam, John (jwasham). &ldquo;Coding Interview University.&rdquo;
          GitHub, 2016.{" "}
          <a href="https://github.com/jwasham/coding-interview-university">
            github.com/jwasham/coding-interview-university
          </a>
          . Multi-month CS fundamentals curriculum with curated video
          lectures and problem sets for dynamic programming and related topics.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk05ReadingSearchBody =
  "dynamic programming recurrence relation memoization tabulation bottom-up top-down state space house robber climbing stairs coin change longest common subsequence 1D DP 2D DP overlapping subproblems optimal substructure think aloud interview communication edge case enumeration clarifying questions recovery when stuck narration state compression Week 5 reading landing the offer";
