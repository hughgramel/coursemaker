import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk03Reading() {
  return (
    <ReadingPage
      id="wk03"
      title="Week 3: the three early patterns"
      kicker="Landing the Offer: SWE Job Search for Senior CS Students · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the three algorithm patterns that appear most
          frequently in early coding rounds: the hash-map pattern, two pointers,
          and sliding window. For each pattern you will see a brute-force
          baseline, the transformation that produces the O(n) version, and a
          worked implementation in Python. By the end you will be able to
          recognize which pattern a problem calls for, state the invariant or
          trade-off that makes it work, and explain the complexity of your
          solution from first principles rather than memory.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> This reading builds on{" "}
          <strong>interview-loop-anatomy</strong> from Week 1. You should already
          know what a coding round looks like at a high level, and you should be
          comfortable writing code in at least one language. The reading does not
          assume any prior knowledge of the three specific patterns covered here.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-why-patterns">
        1. Why patterns, not problems
      </AnchorHeading>
      <p>
        A common mistake in coding interview preparation is to study problems:
        memorize the solution to Two Sum, memorize the solution to Valid
        Anagram, memorize the solution to Longest Substring Without Repeating
        Characters. The problem with this approach surfaces in the interview
        itself, when the interviewer presents a variant you have not seen before.
        Memorized solutions do not transfer; understood patterns do.
      </p>
      <p>
        NeetCode (2020) described the distinction from his own preparation:
        &ldquo;I wasn&rsquo;t trying to memorize solutions. I was trying to
        understand the patterns well enough to derive any solution from
        scratch.&rdquo; The NeetCode Roadmap is organized around this idea: it
        groups problems by pattern rather than by topic, and it sequences the
        patterns so that each one builds on the previous. Arrays &amp; Hashing
        comes first because the hash-map pattern is the most general of the
        three early tools, and it reappears inside two-pointer and sliding-window
        solutions.
      </p>
      <p>
        Pattern understanding has a testable definition. You understand a
        pattern if you can: (1) state why it works, not just that it works;
        (2) derive the correct solution for a problem you have not seen before
        once you identify the pattern; and (3) state the time and space
        complexity from the structure of the algorithm, not from memory. This
        reading trains all three.
      </p>

      <AnchorHeading as="h2" id="2-hash-map">
        2. The hash-map pattern
      </AnchorHeading>
      <p>
        The hash-map pattern applies when a problem requires repeated membership
        tests or frequency counts across a collection of elements. The brute
        force on these problems is a nested loop: for each element, scan the
        rest of the array to check whether some related element exists. That
        scan is O(n) per query, and if you run it for every element in an
        array of length n, the total cost is O(n&sup2;).
      </p>
      <p>
        A hash map (called a <code>dict</code> in Python, a <code>Map</code> in
        JavaScript, or an <code>unordered_map</code> in C++) supports O(1)
        amortized lookup, insertion, and deletion. Storing elements as keys in a
        hash map as you iterate converts the inner scan into a single dictionary
        lookup, collapsing O(n&sup2;) to O(n). The cost is O(n) extra space.
        In interview contexts, this trade is almost always worth making; the
        interviewer will accept it as the intended solution.
      </p>

      <AnchorHeading as="h3" id="2-1-worked">
        2.1 Worked example: Two Sum
      </AnchorHeading>
      <p>
        Two Sum (LeetCode 1) asks: given an array of integers and a target,
        return the indices of two elements that sum to the target. Assume exactly
        one solution exists.
      </p>
      <p>
        The brute-force solution tries every pair. For each element at index{" "}
        <code>i</code>, it scans every element at index <code>j &gt; i</code>{" "}
        looking for a value equal to <code>target - nums[i]</code>:
      </p>
      <pre><code>{`# Brute force: O(n^2) time, O(1) space
def two_sum_brute(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]`}</code></pre>
      <p>
        The bottleneck is the inner loop: it exists only to ask &ldquo;does
        this complement value appear in the array?&rdquo; We can answer that
        question in O(1) with a hash map:
      </p>
      <pre><code>{`# Hash-map version: O(n) time, O(n) space
def two_sum(nums, target):
    seen = {}                        # maps value -> index
    for i, n in enumerate(nums):
        complement = target - n
        if complement in seen:       # O(1) lookup
            return [seen[complement], i]
        seen[n] = i                  # store for future lookups`}</code></pre>
      <p>
        The algorithm makes one pass through the array. At each step it checks
        whether the complement of the current element was seen earlier; if so,
        the pair is found. If not, it records the current element and moves on.
        Time: O(n) for the single pass. Space: O(n) because in the worst case
        every element is stored in the map before the pair is found.
      </p>
      <p>
        Two Sum is worth understanding deeply because it is the template, not
        the only problem. Group Anagrams (LeetCode 49) uses a hash map whose
        keys are sorted character tuples and whose values are lists of original
        strings. Top K Frequent Elements (LeetCode 347) uses a hash map to count
        frequencies and then selects from it. In every case, the pattern is the
        same: cache what you have seen in a structure that supports O(1) lookup,
        and use it to avoid a repeated scan.
      </p>

      <Callout title="Recognizing the hash-map entry condition">
        <p>
          Reach for the hash map when you see any of these in a problem: &ldquo;find
          two elements that satisfy some relationship,&rdquo; &ldquo;count the
          frequency of each element,&rdquo; &ldquo;group elements by some
          property,&rdquo; or &ldquo;check whether some element has been seen
          before.&rdquo; All of these are O(n) scans in disguise, and all of
          them collapse to O(1) with a hash map.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-two-pointers">
        3. Two pointers
      </AnchorHeading>
      <p>
        The two-pointer pattern applies when the input is sorted, or when the
        problem has a structure where moving one pointer in a given direction
        always moves the result in a predictable direction. One pointer starts
        at the left end of the array, one at the right. At each step you compare
        some function of the values they point to against a target, and you move
        whichever pointer would bring the result closer to the target. The loop
        ends when the pointers meet.
      </p>
      <p>
        The reason this eliminates the inner loop is a monotonicity argument.
        If the array is sorted ascending and the current sum of the two pointed
        values is too large, moving the right pointer left will reduce the sum
        (because we are moving to a smaller value). Moving the left pointer left
        would also reduce the sum, but we already know all values to the left of
        the left pointer are smaller than the target complement, so there is no
        reason to revisit them. Each pointer moves at most n times, so the loop
        runs at most 2n steps total: O(n).
      </p>

      <AnchorHeading as="h3" id="3-1-worked">
        3.1 Worked example: Two Sum II (sorted array)
      </AnchorHeading>
      <p>
        Two Sum II (LeetCode 167) is the same problem as Two Sum, but the input
        array is sorted in non-decreasing order. The constraint is that the
        solution must use O(1) extra space, which rules out the hash map.
      </p>
      <pre><code>{`# Brute force: O(n^2) time, O(1) space
def two_sum_sorted_brute(numbers, target):
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            if numbers[i] + numbers[j] == target:
                return [i + 1, j + 1]  # 1-indexed`}</code></pre>
      <pre><code>{`# Two-pointer version: O(n) time, O(1) space
def two_sum_sorted(numbers, target):
    left, right = 0, len(numbers) - 1
    while left < right:
        s = numbers[left] + numbers[right]
        if s == target:
            return [left + 1, right + 1]   # 1-indexed
        elif s < target:
            left += 1    # sum too small: move left pointer right
        else:
            right -= 1   # sum too large: move right pointer left`}</code></pre>
      <p>
        Why does moving <code>left</code> right increase the sum? Because the
        array is sorted, <code>numbers[left + 1] &gt;= numbers[left]</code>.
        Replacing <code>numbers[left]</code> with a larger value increases
        (or maintains) the sum. The same logic in reverse: moving{" "}
        <code>right</code> left replaces <code>numbers[right]</code> with a
        smaller or equal value, decreasing the sum. The sorted order is the
        proof that each pointer move is correct.
      </p>
      <p>
        The O(1) space claim holds because the only variables are two integer
        indices and a running sum. No auxiliary data structure is allocated.
        When the problem requires O(1) extra space and gives you sorted input,
        two pointers is the expected solution.
      </p>
      <p>
        3Sum (LeetCode 15) extends this: for each outer loop element, run
        two pointers on the remaining sorted subarray. The outer loop is O(n),
        the inner two-pointer pass is O(n), so the total is O(n&sup2;). That
        is the best known general solution for the triplet sum problem, which
        makes it correct for the interview even though it is not O(n).
      </p>

      <AnchorHeading as="h2" id="4-sliding-window">
        4. Sliding window
      </AnchorHeading>
      <p>
        The sliding-window pattern applies when the problem asks about a
        contiguous subarray or substring with a running constraint. The window
        is defined by a left and right boundary. The right boundary expands to
        include new elements; the left boundary contracts to restore a violated
        invariant. The key insight is that neither boundary ever reverses
        direction, so the total number of boundary moves across the entire
        algorithm is at most 2n: O(n).
      </p>
      <p>
        Before writing any code, state the window invariant in one sentence.
        The invariant is the property that must hold for the window to be
        considered valid. Every decision about when to expand or contract follows
        directly from the invariant. If you cannot state the invariant, you
        cannot reliably implement the algorithm.
      </p>

      <AnchorHeading as="h3" id="4-1-worked">
        4.1 Worked example: longest substring without repeating characters
      </AnchorHeading>
      <p>
        LeetCode 3 asks: given a string, find the length of the longest
        substring with no repeating characters.
      </p>
      <p>
        Invariant: the window contains no duplicate characters.
      </p>
      <p>
        Expand when: the character at <code>right</code> is not in the current
        window. Contract when: the character at <code>right</code> is already
        in the window (add it, then shrink from the left until the duplicate
        is gone).
      </p>
      <pre><code>{`# Brute force: O(n^2) time in the naive version
# (check all substrings for duplicates)

# Sliding-window version: O(n) time, O(k) space
# where k is the size of the character set
def length_of_longest_substring(s: str) -> int:
    chars = set()   # tracks characters in current window
    left = 0
    result = 0
    for right in range(len(s)):
        # contract until invariant holds
        while s[right] in chars:
            chars.remove(s[left])
            left += 1
        # now s[right] is safe to add
        chars.add(s[right])
        result = max(result, right - left + 1)
    return result`}</code></pre>
      <p>
        Walk through the string <code>&quot;abcabcbb&quot;</code>:
      </p>
      <pre><code>{`right=0  window="a"      chars={a}         result=1
right=1  window="ab"     chars={a,b}       result=2
right=2  window="abc"    chars={a,b,c}     result=3
right=3  s[3]='a' in chars -> shrink:
           remove s[0]='a', left=1
         window="bca"    chars={b,c,a}     result=3
right=4  s[4]='b' in chars -> shrink:
           remove s[1]='b', left=2
         window="cab"    chars={c,a,b}     result=3
right=5  s[5]='c' in chars -> shrink:
           remove s[2]='c', left=3
         window="abc"    chars={a,b,c}     result=3
right=6  s[6]='b' in chars -> shrink:
           remove s[3]='a', left=4
           s[6]='b' still in chars -> remove s[4]='b', left=5
         window="cb"     chars={c,b}       result=3
right=7  s[7]='b' in chars -> shrink:
           remove s[5]='c', left=6
           s[7]='b' still in chars -> remove s[6]='b', left=7
         window="b"      chars={b}         result=3
Final result: 3`}</code></pre>
      <p>
        Time complexity: each character is added to <code>chars</code> at most
        once (when <code>right</code> passes it) and removed at most once (when{" "}
        <code>left</code> passes it). Total operations: at most 2n. Space
        complexity: O(k) where k is the number of distinct characters (at most
        26 for lowercase English letters, or O(1) from that perspective).
      </p>

      <AnchorHeading as="h2" id="5-complexity-by-reasoning">
        5. Complexity analysis by reasoning, not memorization
      </AnchorHeading>
      <p>
        One of the week&rsquo;s learning outcomes is to distinguish O(n) from
        O(n log n) for common interview shapes by reasoning, not memorization.
        The word &ldquo;reasoning&rdquo; has a precise meaning here: you derive
        the complexity from the structure of the algorithm by answering two
        questions.
      </p>
      <p>
        First: how many times does each element participate in the dominant
        operation? For the sliding-window solution above, each element is
        touched at most twice (once by <code>right</code>, once by{" "}
        <code>left</code>). Total touches: at most 2n. Since constant factors
        drop out of big-O notation, the time complexity is O(n).
      </p>
      <p>
        Second: does any step inside the loop itself grow with n? In the
        sliding-window solution, the inner <code>while</code> loop looks
        dangerous, but each iteration removes one character and advances{" "}
        <code>left</code> by one. Since <code>left</code> can only advance n
        times total (it starts at 0 and ends at most at n), the inner loop
        runs at most n times across the entire outer loop, not n times per
        outer iteration. The total is O(n).
      </p>
      <p>
        Contrast this with a sorting-based approach. If you sort the array to
        enable two pointers on an unsorted input, the sort costs O(n log n).
        The subsequent two-pointer pass is O(n), but O(n log n) dominates.
        You are allowed to sort and use two pointers; the complexity is O(n
        log n), not O(n). State this accurately.
      </p>
      <p>
        The Coding Interview University (Washam, 2016) emphasizes that
        complexity analysis should become automatic: &ldquo;You probably
        won&rsquo;t have to study as much as I did&rdquo; applies partly
        because students who understand why algorithms have a given complexity
        can analyze new problems on the fly instead of reciting memorized
        answers. This reading is your grounding for that fluency.
      </p>

      <AnchorHeading as="h2" id="6-recognition">
        6. Pattern recognition under time pressure
      </AnchorHeading>
      <p>
        In a real interview you have roughly five minutes from reading the
        problem to committing to an approach. The following decision sequence
        is not a formula but a trained instinct you build by applying it
        deliberately across many problems.
      </p>
      <p>
        Step 1: write the brute force in words, not code. &ldquo;Try every
        pair&rdquo; or &ldquo;check every substring.&rdquo; State its
        complexity. This takes 60 seconds and gives you a baseline.
      </p>
      <p>
        Step 2: identify the bottleneck. Most O(n&sup2;) solutions have one
        inner operation that drives the cost. Name it.
      </p>
      <p>
        Step 3: ask which structural property of the problem lets you eliminate
        the bottleneck:
      </p>
      <ul>
        <li>
          If the bottleneck is a repeated membership test or frequency count,
          the hash map probably eliminates it.
        </li>
        <li>
          If the bottleneck is searching for a complement in a sorted array,
          two pointers probably eliminates it.
        </li>
        <li>
          If the bottleneck is scanning every subarray when you only care about
          contiguous ranges, sliding window probably eliminates it.
        </li>
      </ul>
      <p>
        Step 4: if you identify a candidate pattern, state the invariant or
        trade-off out loud before writing any code. The Tech Interview Handbook
        (Tay, 2023) recommends this explicitly: clarifying your approach before
        coding is a rubric-level signal, not just a good practice.
      </p>
      <p>
        None of these patterns apply everywhere. 3Sum is O(n&sup2;) even with
        two pointers, and that is the correct answer. If you cannot see a
        pattern that improves on brute force, say so honestly: &ldquo;I do not
        see a sub-quadratic approach yet. Let me code the brute force and think
        from there.&rdquo; That is a much stronger signal than silence or a
        wrong approach stated with false confidence.
      </p>

      <AnchorHeading as="h2" id="7-exercises">7. Exercises</AnchorHeading>
      <p>
        Work these before or during section this week. All are answerable from
        the reading and your own code editor.
      </p>

      <Exercise n={1}>
        <p>
          Implement Group Anagrams (LeetCode 49) using the hash-map pattern.
          The input is a list of strings; return a list of groups where each
          group contains strings that are anagrams of each other. State the
          time and space complexity of your solution. Then explain in one sentence
          why sorting the characters of each string is a valid key for the hash
          map.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Given a sorted array of integers and a target sum, write a function
          that returns all unique triplets <code>[a, b, c]</code> such that{" "}
          <code>a + b + c = 0</code> (LeetCode 15: 3Sum). Explain why the outer
          loop is necessary and why two pointers apply to the inner part. State
          the time complexity of your solution and argue that O(n&sup2;) is the
          best you can achieve for this problem with this approach.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          State the window invariant for the following problem, then implement
          it: given a string <code>s</code> and a string <code>p</code>, return
          all start indices of <code>p</code>&rsquo;s anagrams in{" "}
          <code>s</code> (LeetCode 567 / 438). Your invariant should specify
          exactly what condition makes the window valid. What data structure
          maintains the invariant efficiently?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          The reading claims that the sliding-window algorithm for longest
          substring without repeating characters runs in O(n) even though it
          contains a <code>while</code> loop inside a <code>for</code> loop.
          Prove this by tracking the maximum total number of times{" "}
          <code>left</code> can be incremented across the entire execution of
          the algorithm. Does this argument change if the string contains
          only two distinct characters? What about an unbounded alphabet?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Given an unsorted array of integers and a target sum, can you solve
          Two Sum in O(n log n) time using sorting and two pointers instead of
          a hash map? Implement this version. When would you prefer this approach
          over the O(n) hash-map version, and when would you not? Consider both
          time complexity and space complexity in your answer.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="8-going-deeper">8. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> Pattern sprint 1 runs three timed
          25-minute problems, one per pattern. Bring the invariant or entry
          condition for each pattern written down before you arrive.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the 45-minute interview
          arc and the rubric dimensions. The skills in this reading (stating
          complexity, narrating your approach) are the same skills scored on
          those dimensions.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Walks through all three
          patterns with live pattern-recognition practice.
        </li>
        <li>
          <strong>HW 2 (out this week).</strong> Thirty problems across six
          pattern categories (hash map, two pointer, sliding window, stack,
          binary search, linked list). The sprint today calibrates how much time
          to budget per problem in HW 2.
        </li>
        <li>
          <strong>Week 4.</strong> Recursion, binary trees, BFS, and DFS. The
          hash-map pattern reappears inside BFS (visited sets) and DFS
          (memoization). Understanding it now will make week 4 faster.
        </li>
      </ul>

      <Takeaways>
        <li>
          The hash-map pattern replaces O(n) inner scans with O(1) lookups,
          turning O(n&sup2;) nested loops into a single O(n) pass at the cost
          of O(n) extra space.
        </li>
        <li>
          Two pointers are valid when sorted order makes each boundary move
          monotone. Neither pointer reverses, so the total moves are O(n) even
          though the algorithm processes pairs.
        </li>
        <li>
          A sliding window maintains an invariant over a contiguous range.
          State the invariant before coding; every expand/contract decision
          follows from it.
        </li>
        <li>
          Complexity analysis by reasoning means counting how many times each
          element participates in the dominant operation, not reciting a
          memorized answer. This transfers to problems you have never seen.
        </li>
        <li>
          Pattern recognition under time pressure is a trained skill: brute
          force first, name the bottleneck, ask which structural property of
          the problem eliminates it.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          NeetCode. &ldquo;How I Got Good at Coding Interviews.&rdquo; 2020.{" "}
          <a href="https://www.youtube.com/watch?v=SVvr3ZjtjI8">
            youtube.com/watch?v=SVvr3ZjtjI8
          </a>
          . Autobiographical account of pattern-based study over solution
          memorization; the methodological frame for this week.
        </p>
        <p>
          NeetCode. &ldquo;NeetCode Roadmap.&rdquo; 2023.{" "}
          <a href="https://neetcode.io/roadmap">neetcode.io/roadmap</a>. The
          canonical free, pattern-ordered DSA roadmap for coding interview
          preparation; source for the Arrays &amp; Hashing, Two Pointers, and
          Sliding Window sequence.
        </p>
        <p>
          NeetCode. &ldquo;NeetCode 150 Course: All Coding Interview Questions
          Solved.&rdquo; 2022.{" "}
          <a href="https://www.youtube.com/watch?v=T0u5nwSA0w0">
            youtube.com/watch?v=T0u5nwSA0w0
          </a>
          . Worked solutions to all 150 problems with pattern identification and
          complexity analysis for each.
        </p>
        <p>
          Tay, Yangshun. &ldquo;Tech Interview Handbook.&rdquo; 2023.{" "}
          <a href="https://github.com/yangshun/tech-interview-handbook">
            github.com/yangshun/tech-interview-handbook
          </a>
          . Practical coding interview preparation reference covering patterns,
          cheat sheets, and behavioral guidance; cited for the recommendation to
          state your approach before coding.
        </p>
        <p>
          Washam, John. &ldquo;Coding Interview University.&rdquo; 2016.{" "}
          <a href="https://github.com/jwasham/coding-interview-university">
            github.com/jwasham/coding-interview-university
          </a>
          . Multi-month CS fundamentals curriculum used to land a position at
          Amazon; cited for the emphasis on automatic complexity analysis.
        </p>
        <p>
          Mihailescu, Cl&eacute;ment. &ldquo;Google Coding Interview Grading
          Rubric.&rdquo; 2021.{" "}
          <a href="https://www.youtube.com/watch?v=-btCHmVMHro">
            youtube.com/watch?v=-btCHmVMHro
          </a>
          . Walkthrough of the internal Google interview rubric; source for the
          four signal dimensions.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk03ReadingSearchBody =
  "hash map pattern two pointers sliding window complexity analysis O(n) O(n squared) brute force optimized trade space for time sorted array invariant entry condition Two Sum Group Anagrams longest substring 3Sum pattern recognition NeetCode coding interview patterns Week 3 reading landing the offer";
