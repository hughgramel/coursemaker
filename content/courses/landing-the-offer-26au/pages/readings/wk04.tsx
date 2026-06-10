import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk04Reading() {
  return (
    <ReadingPage
      id="wk04"
      title="Week 4: recursion, trees, and graph traversal"
      kicker="Landing the Offer: SWE Job Search for Senior CS Students &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading has three outcomes. First, you will{" "}
          <strong>apply</strong> the recursion pattern by implementing an
          in-order traversal of a binary tree and tracing through its call-stack
          behavior step by step. Second, you will{" "}
          <strong>apply</strong> BFS and DFS by reading working queue and stack
          templates and explaining the invariant each one maintains. Third, you
          will <strong>analyze</strong> a real-world scenario, model it as a
          graph, and choose the traversal strategy by reasoning rather than
          guessing.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> The coding interview format,
          O-notation and complexity analysis, and the hash-map pattern from week
          3. You do not need prior experience with tree or graph algorithms, but
          you do need to be comfortable reading Python code, understanding that
          functions can call themselves, and writing complexity claims in the
          form O(n) or O(V + E).
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-recursion-as-structure">
        1. Recursion as structure, not magic
      </AnchorHeading>
      <p>
        Recursion is not a trick. It is an observation about structure: some
        problems are defined in terms of smaller versions of themselves, and
        the cleanest way to write a solution is to reflect that structure in
        the code. The depth of a tree is one plus the depth of the deeper
        subtree. The sum of a list is the head plus the sum of the tail. The
        paths through a tree are the root followed by all paths through the
        left subtree and all paths through the right subtree.
      </p>
      <p>
        Before writing any recursive function, answer two questions. First:
        what is the <strong>recursive case</strong>? State it in one sentence
        in terms of smaller inputs of the same type. Second: what is the{" "}
        <strong>base case</strong>? Identify every terminal input that can be
        reached and specify the correct return value for each. Only then write
        code. Interviewers notice when you write the base case first because it
        signals that you are thinking about correctness, not just getting
        something to compile.
      </p>
      <p>
        The base case for almost every binary-tree function is the null node:
        if the current node is null, the tree is empty at this point, and the
        function should return the identity value for whatever it is computing
        (0 for a count or depth, null for a search, an empty list for a path
        collector, true for a vacuous condition). Missing this check causes the
        function to crash the moment it tries to access a field on a null
        reference.
      </p>

      <AnchorHeading as="h2" id="2-in-order-traversal">
        2. In-order traversal: a worked example
      </AnchorHeading>
      <p>
        In-order traversal visits the left subtree, then the current node, then
        the right subtree. On a <strong>binary search tree (BST)</strong>,
        this ordering visits nodes in ascending sorted order, which makes it
        the canonical way to extract sorted output from a BST.
      </p>
      <p>
        Here is the recursive implementation in Python and TypeScript:
      </p>
      <pre><code>{`# Python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder(root: TreeNode | None) -> list[int]:
    if root is None:          # base case: null node
        return []
    left_vals  = inorder(root.left)
    right_vals = inorder(root.right)
    return left_vals + [root.val] + right_vals`}</code></pre>
      <pre><code>{`// TypeScript
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val; this.left = left; this.right = right;
  }
}

function inorder(root: TreeNode | null): number[] {
  if (root === null) return [];   // base case
  return [...inorder(root.left), root.val, ...inorder(root.right)];
}`}</code></pre>
      <p>
        Both versions say exactly the same thing: the in-order listing of a
        tree is the in-order listing of the left subtree, followed by the root
        value, followed by the in-order listing of the right subtree. The base
        case stops the recursion when the node is null.
      </p>

      <AnchorHeading as="h2" id="3-call-stack-walkthrough">
        3. Call-stack walkthrough on a five-node tree
      </AnchorHeading>
      <p>
        Consider the following five-node binary search tree:
      </p>
      <pre><code>{`        4
       / \\
      2   6
     / \\
    1   3`}</code></pre>
      <p>
        The in-order traversal should produce <code>[1, 2, 3, 4, 6]</code>.
        Here is the exact sequence of calls and returns, showing which frames
        are on the call stack at each step. Read each indented level as a new
        frame pushed onto the stack; a return pops that frame.
      </p>
      <pre><code>{`inorder(4)                  [stack: inorder(4)]
  inorder(2)                [stack: inorder(4), inorder(2)]
    inorder(1)              [stack: inorder(4), inorder(2), inorder(1)]
      inorder(None) -> []   [base case, no new frame]
      inorder(None) -> []   [base case, no new frame]
    returns [1]             [inorder(1) popped]
    -- collects root.val=2 --
    inorder(3)              [stack: inorder(4), inorder(2), inorder(3)]
      inorder(None) -> []   [base case]
      inorder(None) -> []   [base case]
    returns [3]             [inorder(3) popped]
  returns [1, 2, 3]         [inorder(2) popped]
  -- collects root.val=4 --
  inorder(6)                [stack: inorder(4), inorder(6)]
    inorder(None) -> []     [base case]
    inorder(None) -> []     [base case]
  returns [6]               [inorder(6) popped]
returns [1, 2, 3, 4, 6]    [inorder(4) popped, done]`}</code></pre>
      <p>
        Several observations follow from this trace. The maximum stack depth is
        3 (root, its left child, its left grandchild), which equals the height
        of the tree. For a balanced tree of <em>n</em> nodes, height is O(log
        n), so the recursive call stack uses O(log n) space. For a degenerate
        tree where every node has only a right child (a linked-list shape), the
        height is <em>n</em>, and the call stack uses O(n) space, which can
        cause a stack overflow for large inputs in Python (default limit:
        1,000 frames).
      </p>
      <p>
        Time complexity: each node is visited exactly once, and each call does
        O(1) work beyond the recursive calls. Total time is O(n). The list
        concatenation in the Python version adds a hidden cost because
        <code>left_vals + [root.val] + right_vals</code> creates a new list at
        each level; the standard way to avoid this is to pass an accumulator
        list and append to it in-place.
      </p>

      <Callout title="The call stack is memory">
        <p>
          Every active recursive call consumes memory for its local variables
          and return address. For interviews, state space complexity as two
          components: the output (O(n) for the result list) and the call stack
          (O(h) where h is the tree height). Interviewers who ask about space
          complexity are often specifically asking about the stack, not just the
          output.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-bfs-template">
        4. BFS: the queue template and the shortest-path guarantee
      </AnchorHeading>
      <p>
        Breadth-first search processes nodes in order of their distance from
        the starting node. It achieves this by using a queue: first-in,
        first-out. Every node at distance <em>d</em> is enqueued before any
        node at distance <em>d+1</em>, so when the search first reaches a
        node, it has necessarily found the shortest path to that node (on an
        unweighted graph).
      </p>
      <p>
        Here is the standard BFS template. Every correct BFS implementation
        follows this structure:
      </p>
      <pre><code>{`# Python BFS template
from collections import deque

def bfs(start, graph):
    visited = set([start])
    queue = deque([start])
    while queue:
        node = queue.popleft()           # O(1) dequeue from left
        # process node here
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)   # mark BEFORE enqueue
                queue.append(neighbor)
    return visited`}</code></pre>
      <p>
        The invariant is: <em>a node in the visited set will never be enqueued
        again</em>. This prevents cycles from causing infinite loops. Mark the
        starting node as visited before entering the loop, and mark each
        neighbor as visited at the moment you enqueue it, not the moment you
        dequeue it. If you mark on dequeue, a node can appear in the queue
        multiple times before it is processed, which corrupts shortest-path
        counts and can cause incorrect output on grid problems.
      </p>
      <p>
        BFS on a binary tree is called level-order traversal. On a grid, BFS
        models each cell as a node and each cardinal-direction neighbor as an
        edge, turning a 2D array into a graph without building an explicit
        adjacency list. This pattern appears in problems like Rotting Oranges,
        Walls and Gates, and Pacific Atlantic Water Flow.
      </p>
      <p>
        Time complexity for BFS: O(V + E), where V is the number of nodes and
        E is the number of edges. On a grid of rows r and columns c, V = r*c
        and E = 2*r*c (each cell has up to four neighbors), so the complexity
        is O(r*c). Space complexity: O(V) for the visited set and queue.
      </p>

      <AnchorHeading as="h2" id="5-dfs-template">
        5. DFS: recursion and the explicit-stack variant
      </AnchorHeading>
      <p>
        Depth-first search follows one path as far as possible before
        backtracking to explore alternatives. The call stack (in the recursive
        version) or an explicit stack (in the iterative version) determines
        which path to follow next.
      </p>
      <p>
        For binary trees, the three DFS orderings differ only in where you
        process the current node relative to its children:
      </p>
      <pre><code>{`# Python: pre-order, in-order, post-order
def preorder(root):
    if root is None: return []
    return [root.val] + preorder(root.left) + preorder(root.right)

def inorder(root):
    if root is None: return []
    return inorder(root.left) + [root.val] + inorder(root.right)

def postorder(root):
    if root is None: return []
    return postorder(root.left) + postorder(root.right) + [root.val]`}</code></pre>
      <p>
        Pre-order is useful when a parent must be processed before its
        children (serialization, copying a tree). Post-order is useful when
        children must resolve before the parent can compute its result (tree
        height, tree diameter, deleting nodes). In-order on a BST yields
        sorted output.
      </p>
      <p>
        For general graphs, you need a visited set to prevent revisiting nodes
        in cycles:
      </p>
      <pre><code>{`# Python DFS on a general graph
def dfs(node, graph, visited):
    if node in visited:
        return
    visited.add(node)
    # process node here
    for neighbor in graph[node]:
        dfs(neighbor, graph, visited)

# Call with:
visited = set()
dfs(start_node, graph, visited)`}</code></pre>
      <p>
        The iterative variant replaces the call stack with an explicit stack
        data structure, which lets you handle inputs that would otherwise exceed
        the language recursion limit:
      </p>
      <pre><code>{`# Python DFS with explicit stack
def dfs_iterative(start, graph):
    visited = set()
    stack = [start]
    while stack:
        node = stack.pop()
        if node in visited:
            continue
        visited.add(node)
        # process node here
        for neighbor in graph[node]:
            if neighbor not in visited:
                stack.append(neighbor)
    return visited`}</code></pre>
      <p>
        Note the difference from BFS: the only change is replacing{" "}
        <code>deque.popleft()</code> with <code>stack.pop()</code> and removing
        the upfront marking-on-enqueue rule. DFS does not need to guarantee
        shortest paths, so marking on dequeue (with the early continue) is
        acceptable here, though marking on push is also correct and avoids
        duplicates in the stack.
      </p>

      <AnchorHeading as="h2" id="6-graph-modeling">
        6. Modeling a problem as a graph
      </AnchorHeading>
      <p>
        Translating a real-world problem into a graph is a separate skill from
        writing BFS or DFS. Once you can state the nodes and edges clearly, the
        traversal is mechanical. The modeling step is where most candidates
        lose time.
      </p>
      <p>
        Ask three questions before writing any code. What are the{" "}
        <strong>nodes</strong>? What are the <strong>edges</strong>? What is
        the <strong>question</strong> being asked? The question determines
        whether you need BFS or DFS.
      </p>
      <p>
        Example: you are given a list of courses and prerequisites. You need to
        determine whether it is possible to finish all courses (LeetCode 207,
        Course Schedule). The nodes are courses (integers 0 to n-1). The edges
        are directed: if course A is a prerequisite for course B, there is a
        directed edge from A to B. The question is: does this directed graph
        contain a cycle? A cycle means you can never finish (A requires B
        requires A). Use DFS to detect the cycle. BFS (Kahn&rsquo;s algorithm
        for topological sort) also works and may be more natural for some
        candidates.
      </p>
      <p>
        Example: you are given a map of islands and water cells. You need to
        find the number of islands (LeetCode 200). The nodes are cells. The
        edges connect horizontally or vertically adjacent land cells. The
        question is: how many connected components of land cells are there?
        Either BFS or DFS works; choose whichever template you can write faster
        from memory.
      </p>
      <p>
        Back To Back SWE (2019) states the unifying insight directly: a tree is
        a graph with no cycles and one designated root. Every BFS or DFS
        pattern you learn on trees applies to general graphs by adding a visited
        set. The visited set is the only structural difference.
      </p>

      <AnchorHeading as="h2" id="7-backtracking">
        7. Backtracking as constrained DFS
      </AnchorHeading>
      <p>
        Backtracking is DFS on a <strong>decision tree</strong>. At each step
        you choose one option, recurse into that choice, and then undo the
        choice before exploring the next option. The undo step is what
        distinguishes backtracking from plain DFS: you restore the state of a
        shared data structure after each recursive call so the next branch
        starts from the same starting point.
      </p>
      <pre><code>{`# Python: generate all subsets of a list (LeetCode 78)
def subsets(nums):
    result = []

    def backtrack(start, current):
        result.append(current[:])   # record current subset
        for i in range(start, len(nums)):
            current.append(nums[i])     # make a choice
            backtrack(i + 1, current)   # recurse
            current.pop()               # undo the choice

    backtrack(0, [])
    return result`}</code></pre>
      <p>
        The <code>current.pop()</code> is the backtrack step. Without it,
        every recursive branch would see the modifications made by previous
        branches, producing incorrect output.
      </p>
      <p>
        <strong>Pruning</strong> cuts branches of the decision tree that cannot
        lead to a valid solution. For a problem like Combination Sum (LeetCode
        39), if the running sum exceeds the target, you can return immediately
        rather than continuing to recurse. Stating your pruning conditions
        before writing the loop is a signal interviewers look for: it shows you
        understand the size of the search space and are thinking about
        efficiency, not just correctness.
      </p>
      <p>
        The NeetCode roadmap (2023) places Backtracking after Trees and Graphs
        in its learning sequence for exactly this reason: backtracking is a
        tree-shaped recursion, and understanding DFS on trees makes the
        backtracking pattern easier to see and implement correctly.
      </p>

      <AnchorHeading as="h2" id="8-exercises">8. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          Write a recursive function <code>treeSum(root)</code> that returns
          the sum of all values in a binary tree. State the base case first,
          then the recursive case. Trace the execution on this three-node tree:
          root = 5, left child = 3, right child = 8. What is the maximum stack
          depth during that execution?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Write the BFS template from memory without looking at section 4.
          Apply it to find the level-order traversal of this five-node tree:
          root = 1, children of 1 are 2 and 3, children of 2 are 4 and 5.
          Show the state of the queue after each dequeue operation. What is the
          output?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          A social network can be modeled as a graph where each person is a
          node and each &ldquo;follows&rdquo; relationship is a directed edge.
          You want to find the shortest chain of &ldquo;follows&rdquo; from
          person A to person B. Which traversal do you use, and why? What
          happens if you use DFS instead?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          The in-order traversal implemented in section 2 uses list
          concatenation (<code>left_vals + [root.val] + right_vals</code>),
          which creates a new list at every recursive call. Rewrite the function
          using an accumulator list passed by reference so that only one list is
          created. What is the space complexity of the new version, not counting
          the output list?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Write a backtracking function that generates all permutations of the
          list <code>[1, 2, 3]</code>. Identify the decision tree: how many
          nodes does it have, and what is its depth? How many total recursive
          calls does your function make (count the base-case calls too)?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="9-going-deeper">9. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> Pattern sprint 2 puts BFS, DFS,
          and binary-tree recursion under timed conditions. Bring the call-stack
          trace from exercise 1 and the BFS queue trace from exercise 2 to
          section.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the call-stack model
          in more depth, including the iterative equivalent and when to use it.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers BFS and DFS in
          interview shape, including the graph-modeling framework and
          backtracking.
        </li>
        <li>
          <strong>Week 5.</strong> Dynamic programming, which depends on the
          recursion pattern introduced this week. Memoization is a recursive
          solution with a cache; tabulation converts that recursion to
          iteration. Both are easier to understand if the call-stack model from
          this week is solid.
        </li>
        <li>
          <strong>NeetCode roadmap.</strong> The Trees, Graphs, and Backtracking
          sections contain the practice problems this week&rsquo;s patterns
          prepare you for. Aim for at least two problems per pattern before
          week 5.
        </li>
      </ul>

      <Takeaways>
        <li>
          Recursion reflects structure. State the recursive case in one
          sentence and the base case explicitly before writing code. For binary
          trees, the null check is almost always the base case.
        </li>
        <li>
          The call stack uses O(h) space where h is the recursion depth. For
          trees, h equals the height: O(log n) for balanced, O(n) for
          degenerate. Always state this separately from output space.
        </li>
        <li>
          BFS uses a queue, marks nodes visited on enqueue, and guarantees
          shortest path on unweighted graphs. DFS uses a stack (implicit or
          explicit) and is the right choice for cycle detection, all-paths, and
          topological sort.
        </li>
        <li>
          A tree is a graph with no cycles and one root. The BFS and DFS
          templates for trees work on general graphs with a visited set added.
          Modeling a problem means naming the nodes, the edges, and the question
          before writing any traversal code.
        </li>
        <li>
          Backtracking is DFS with an undo step after each recursive call.
          State pruning conditions before writing the loop; pruning is what
          makes an exponential search tractable in practice.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Back To Back SWE. &ldquo;Binary Tree Level Order Traversal: Drawing
          the Parallel Between Trees &amp; Graphs.&rdquo; YouTube, 2019.{" "}
          <a href="https://www.youtube.com/watch?v=gcR28Hc2TNQ">
            youtube.com/watch?v=gcR28Hc2TNQ
          </a>
          . Bridges the conceptual gap between tree BFS and graph BFS; the key
          insight that a tree is a special case of a graph is the organizing
          principle for sections 4 through 6 of this reading.
        </p>
        <p>
          NeetCode. &ldquo;NeetCode Roadmap.&rdquo; neetcode.io, 2023.{" "}
          <a href="https://neetcode.io/roadmap">neetcode.io/roadmap</a>.
          Pattern-based learning sequence covering Trees, Graphs, and
          Backtracking with free video solutions for each problem. The roadmap
          ordering (Arrays then Trees then Graphs then Backtracking) informed
          the sequencing of this reading.
        </p>
        <p>
          NeetCode. &ldquo;NeetCode 150 Course: All Coding Interview Questions
          Solved.&rdquo; YouTube, 2022.{" "}
          <a href="https://www.youtube.com/watch?v=T0u5nwSA0w0">
            youtube.com/watch?v=T0u5nwSA0w0
          </a>
          . Demonstrates the pattern-recognition approach to each of the 150
          curated problems, including multiple tree and graph problems solved
          with the BFS and DFS templates from this reading.
        </p>
        <p>
          Washam, John. &ldquo;Coding Interview University.&rdquo; GitHub,
          2016.{" "}
          <a href="https://github.com/jwasham/coding-interview-university">
            github.com/jwasham/coding-interview-university
          </a>
          . Multi-month CS study curriculum with curated problem sets for
          trees and graphs. The complexity analysis framework in sections 3 and
          4 of this reading follows the structure Washam uses for O(V + E)
          and O(h) space claims.
        </p>
        <p>
          Tay, Yangshun. &ldquo;Tech Interview Handbook.&rdquo; GitHub, 2023.{" "}
          <a href="https://github.com/yangshun/tech-interview-handbook">
            github.com/yangshun/tech-interview-handbook
          </a>
          . Pattern-focused reference for the full SWE interview process.
          The cheat sheets for tree traversal and graph traversal are a useful
          quick reference alongside the code templates in this reading.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk04ReadingSearchBody =
  "recursion recursive case base case call stack stack frame in-order traversal binary tree BFS breadth-first search DFS depth-first search queue template graph modeling adjacency list backtracking decision tree pruning level-order traversal shortest path unweighted graph visited set tree height space complexity Week 4 reading landing the offer";
