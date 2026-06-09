import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk01Reading() {
  return (
    <ReadingPage
      id="wk01-affine"
      title="Week 1 — Affine transformations and hierarchical modeling"
      kicker="CSE 457 Introduction to Computer Graphics · Spring 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          In a quarter of computer graphics we&rsquo;ll go from a blank window
          to fully ray-traced scenes. We start with the smallest building
          block: how to position things in space without melting our brains.
          By the end of this reading you&rsquo;ll be able to write down a
          transformation matrix for any plane motion, compose several of them
          in the right order, and describe what a &ldquo;hierarchical
          model&rdquo; actually means in code.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Linear algebra at the level
          of CSE 311 — vectors, matrices, matrix-vector products. We do not
          assume any prior graphics.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="why-transformations">1. Why we need transformations at all</AnchorHeading>
      <p>
        Imagine you want to render a tree with three branches, each branch
        carrying five leaves. You could store the world-space position of
        every leaf individually. That&rsquo;s 15 leaf positions you have to
        update by hand the moment the wind blows or the tree leans. It scales
        poorly: a forest of 1,000 trees becomes 15,000 hard-coded numbers.
      </p>
      <p>
        The graphics insight is to <strong>store geometry once in its own
        local space</strong> and position it in the world with a
        transformation. A leaf is defined as a small shape near the origin.
        A branch carries five copies of that leaf shape, each placed by a{" "}
        <em>leaf-to-branch</em> transformation. A tree carries three
        branches, each placed by a <em>branch-to-tree</em> transformation.
        The world holds one tree, placed by a <em>tree-to-world</em>{" "}
        transformation.
      </p>
      <p>
        When the wind blows, we change the <em>tree-to-world</em>{" "}
        transformation. All 15 leaves move correctly without anyone editing
        leaf positions.
      </p>

      <AnchorHeading as="h2" id="four-affine">2. The four affine moves</AnchorHeading>
      <p>
        Almost all the positioning we need on a plane reduces to four
        operations:
      </p>
      <ul>
        <li><strong>Translation</strong> by a vector <code>t</code>. Each point <code>p</code> becomes <code>p + t</code>.</li>
        <li><strong>Rotation</strong> by angle <code>θ</code> around the origin. Each point <code>p</code> becomes <code>R(θ) · p</code> where <code>R(θ)</code> is the familiar 2×2 rotation matrix.</li>
        <li><strong>Scaling</strong> by factors <code>(sx, sy)</code>. Each point <code>(x, y)</code> becomes <code>(sx·x, sy·y)</code>.</li>
        <li><strong>Shear</strong> by amount <code>k</code>. The simplest shear sends <code>(x, y)</code> to <code>(x + k·y, y)</code>, tilting horizontal lines.</li>
      </ul>
      <p>
        Each of these is an <strong>affine transformation</strong> — it maps
        lines to lines and preserves parallelism, but it can change angles
        and lengths.
      </p>

      <Callout title="A definition">
        <p>
          A map <code>T(p) = M·p + t</code> is <em>affine</em> if <code>M</code>{" "}
          is a constant matrix and <code>t</code> a constant vector.
          Translation alone is the case <code>M = I</code>. Rotation, scaling,
          shear alone are the cases <code>t = 0</code>.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="homogeneous">3. Homogeneous coordinates: the trick</AnchorHeading>
      <p>
        Translation by itself is not a matrix multiply: there is no 2×2
        matrix <code>T</code> such that <code>T · p = p + t</code> for
        arbitrary <code>p</code>. That&rsquo;s annoying — it means we
        can&rsquo;t fold a sequence of translations and rotations into a
        single matrix.
      </p>
      <p>
        The trick: lift everything one dimension. Represent the point{" "}
        <code>(x, y)</code> as the 3-vector <code>(x, y, 1)</code>. Then
        translation becomes:
      </p>
      <pre>{`[ x' ]   [ 1  0  tx ] [ x ]
[ y' ] = [ 0  1  ty ] [ y ]
[ 1  ]   [ 0  0   1 ] [ 1 ]`}</pre>
      <p>
        This is a 3×3 matrix times a 3-vector — a plain matrix multiply.
        Rotation fits the same shape:
      </p>
      <pre>{`[ cos θ   -sin θ   0 ]
[ sin θ    cos θ   0 ]
[   0        0     1 ]`}</pre>
      <p>
        So does scaling. So does shear. Now we can compose <em>any</em>{" "}
        affine transformation as a product of 3×3 matrices.
      </p>
      <p>
        The price is small: every point carries an extra <code>1</code>. The
        payoff is huge: a chain of N transformations becomes a single 3×3
        matrix you compute once and apply to every vertex.
      </p>

      <AnchorHeading as="h2" id="worked-example">4. A worked example</AnchorHeading>
      <p>
        We want to rotate a square 45° around its own center at{" "}
        <code>(2, 3)</code>, not around the origin.
      </p>
      <p>The recipe for &ldquo;rotate around a point P&rdquo; is always the same:</p>
      <ol>
        <li><strong>Translate</strong> by <code>-P</code> to move the rotation center to the origin.</li>
        <li><strong>Rotate</strong> by the desired angle.</li>
        <li><strong>Translate</strong> by <code>+P</code> to put it back.</li>
      </ol>
      <p>Written as a matrix product:</p>
      <pre>{`T(P) · R(45°) · T(-P) · p`}</pre>
      <p>
        This reads <strong>right to left</strong>: the rightmost matrix
        applies first.
      </p>
      <p>Numerically, with <code>P = (2, 3)</code> and <code>45°</code>:</p>
      <pre>{`T(-P) = [ 1  0  -2 ]    R(45°) = [  0.707  -0.707   0 ]    T(P) = [ 1  0  2 ]
        [ 0  1  -3 ]             [  0.707   0.707   0 ]            [ 0  1  3 ]
        [ 0  0   1 ]             [  0       0       1 ]            [ 0  0  1 ]`}</pre>
      <p>
        The product <code>M = T(P) · R(45°) · T(-P)</code> is a single 3×3
        matrix you can apply to every vertex of the square once.
      </p>

      <AnchorHeading as="h2" id="composition">5. Composition order matters</AnchorHeading>
      <p>
        The biggest source of bugs in early graphics code is getting the
        order wrong. Two rules:
      </p>
      <ul>
        <li><strong>Right-to-left.</strong> <code>M = A · B · C</code> means &ldquo;apply C, then B, then A.&rdquo;</li>
        <li><strong><code>R · S ≠ S · R</code> in general.</strong> Scale-then-rotate skews; rotate-then-scale preserves the original axes. Try it with <code>S = diag(2, 1)</code> and <code>R = 90°</code>.</li>
      </ul>
      <p>
        A simple habit: write transformations in the order they happen
        physically (&ldquo;first translate, then rotate, then translate
        back&rdquo;), and remember the matrix multiplications go in the
        reverse order.
      </p>

      <AnchorHeading as="h2" id="hierarchical">6. Hierarchical modeling in practice</AnchorHeading>
      <p>Back to the tree. Suppose we have:</p>
      <ul>
        <li><code>M_leaf_to_branch</code> — a small 3×3 placing a leaf on a branch.</li>
        <li><code>M_branch_to_tree</code> — places a branch on the tree.</li>
        <li><code>M_tree_to_world</code> — places the tree in the scene.</li>
      </ul>
      <p>To draw one leaf, multiply:</p>
      <pre>{`M_world = M_tree_to_world · M_branch_to_tree · M_leaf_to_branch`}</pre>
      <p>
        Every leaf shares the same <code>M_tree_to_world</code> and{" "}
        <code>M_branch_to_tree</code>. To animate the wind, you update{" "}
        <strong>just the root</strong> <code>M_tree_to_world</code> and the
        whole tree, branches and leaves, transforms correctly. This is the
        most important idea in scene graphs.
      </p>

      <AnchorHeading as="h2" id="exercises">7. Exercises</AnchorHeading>
      <p>Work these on paper before lecture.</p>

      <Exercise n={1}>
        <p>
          Write the 3×3 homogeneous matrix that translates by{" "}
          <code>(4, -2)</code>, then scales by <code>(0.5, 0.5)</code>, then
          rotates 90° counterclockwise. What&rsquo;s the image of the point{" "}
          <code>(1, 1)</code>?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Show that the product of any two rotation matrices around the
          origin is itself a rotation matrix. What angle?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          A clock face has 12 numbers around its rim. Describe the matrix
          product that draws number <code>k</code> (for{" "}
          <code>k = 1..12</code>), given that the shape &ldquo;number&rdquo;
          is defined once near the origin and the clock face has radius{" "}
          <code>r</code> centered at the origin.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Two students disagree on whether shear changes the area of a unit
          square. Use the determinant of the 2×2 shear matrix to settle it.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">8. Going deeper</AnchorHeading>
      <p>After lecture, if you want to dig in:</p>
      <ul>
        <li><strong>Section worksheet (Friday).</strong> More composition drills with grading rubric.</li>
        <li><strong>Lecture 2 (Q&amp;A Thursday).</strong> Bring any of the four exercises above.</li>
        <li>
          <strong>Project 1 — MazeGame.</strong> This is where hierarchical
          modeling pays off: walls, corridors, and characters all share base
          shapes positioned by the matrices you write.
        </li>
      </ul>

      <Takeaways>
        <li>Affine transformations are the language we use to position geometry.</li>
        <li>Homogeneous coordinates turn translation into a matrix multiply, so any chain of affine moves becomes a single 3×3 matrix.</li>
        <li>Composition is right-to-left, and order matters.</li>
        <li>Hierarchical modeling stores geometry once and places it via a chain of transformations — animating the root animates everything below.</li>
      </Takeaways>

      <Bibliography>
        <p>
          This reading was written to stand on its own; no external textbook
          is required. If you&rsquo;d like a second perspective: Marschner
          &amp; Shirley, <em>Fundamentals of Computer Graphics</em> (5e),
          Chapter 6 — covers the same material with more diagrams. Available
          through the UW library.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk01ReadingSearchBody =
  "Affine transformations hierarchical modeling translation rotation scaling shear homogeneous coordinates composition order matrix product scene graph reading Week 1";
