# Week 1 — Affine transformations and hierarchical modeling

CSE 457 Introduction to Computer Graphics · Spring 2026 · Reading

## What this reading covers

In a quarter of computer graphics we'll go from a blank window to fully ray-traced
scenes. We start with the smallest building block: how to position things in
space without melting our brains. By the end of this reading you'll be able to
write down a transformation matrix for any plane motion, compose several of
them in the right order, and describe what a "hierarchical model" actually
means in code.

**Prerequisites assumed.** Linear algebra at the level of CSE 311 — vectors,
matrices, matrix-vector products. We do not assume any prior graphics.

## 1. Why we need transformations at all

Imagine you want to render a tree with three branches, each branch carrying
five leaves. You could store the world-space position of every leaf
individually. That's 15 leaf positions you have to update by hand the moment
the wind blows or the tree leans. It scales poorly: a forest of 1,000 trees
becomes 15,000 hard-coded numbers.

The graphics insight is to **store geometry once in its own local space** and
position it in the world with a transformation. A leaf is defined as a small
shape near the origin. A branch carries five copies of that leaf shape,
each placed by a *leaf-to-branch* transformation. A tree carries three
branches, each placed by a *branch-to-tree* transformation. The world holds
one tree, placed by a *tree-to-world* transformation.

When the wind blows, we change the *tree-to-world* transformation. All 15
leaves move correctly without anyone editing leaf positions.

## 2. The four affine moves

Almost all the positioning we need on a plane reduces to four operations:

- **Translation** by a vector `t`. Each point `p` becomes `p + t`.
- **Rotation** by angle `θ` around the origin. Each point `p` becomes
  `R(θ) · p` where `R(θ)` is the familiar 2×2 rotation matrix.
- **Scaling** by factors `(sx, sy)`. Each point `(x, y)` becomes `(sx·x, sy·y)`.
- **Shear** by amount `k`. The simplest shear sends `(x, y)` to `(x + k·y, y)`,
  tilting horizontal lines.

Each of these is an **affine transformation** — it maps lines to lines and
preserves parallelism, but it can change angles and lengths.

> **A definition.** A map `T(p) = M·p + t` is *affine* if `M` is a constant
> matrix and `t` a constant vector. Translation alone is the case `M = I`.
> Rotation, scaling, shear alone are the cases `t = 0`.

## 3. Homogeneous coordinates: the trick

Translation by itself is not a matrix multiply: there is no 2×2 matrix `T`
such that `T · p = p + t` for arbitrary `p`. That's annoying — it means we
can't fold a sequence of translations and rotations into a single matrix.

The trick: lift everything one dimension. Represent the point `(x, y)` as
the 3-vector `(x, y, 1)`. Then translation becomes:

```
[ x' ]   [ 1  0  tx ] [ x ]
[ y' ] = [ 0  1  ty ] [ y ]
[ 1  ]   [ 0  0   1 ] [ 1 ]
```

This is a 3×3 matrix times a 3-vector — a plain matrix multiply. Rotation
fits the same shape:

```
[ cos θ   -sin θ   0 ]
[ sin θ    cos θ   0 ]
[   0        0     1 ]
```

So does scaling. So does shear. Now we can compose *any* affine
transformation as a product of 3×3 matrices.

The price is small: every point carries an extra `1`. The payoff is huge:
a chain of N transformations becomes a single 3×3 matrix you compute once
and apply to every vertex.

## 4. A worked example

We want to rotate a square 45° around its own center at `(2, 3)`, not around
the origin.

The recipe for "rotate around a point P" is always the same:

1. **Translate** by `-P` to move the rotation center to the origin.
2. **Rotate** by the desired angle.
3. **Translate** by `+P` to put it back.

Written as a matrix product:

```
T(P) · R(45°) · T(-P) · p
```

This reads **right to left**: the rightmost matrix applies first.

Numerically, with `P = (2, 3)` and `45°`:

```
T(-P) = [ 1  0  -2 ]    R(45°) = [  0.707  -0.707   0 ]    T(P) = [ 1  0  2 ]
        [ 0  1  -3 ]             [  0.707   0.707   0 ]            [ 0  1  3 ]
        [ 0  0   1 ]             [  0       0       1 ]            [ 0  0  1 ]
```

The product `M = T(P) · R(45°) · T(-P)` is a single 3×3 matrix you can
apply to every vertex of the square once.

## 5. Composition order

The biggest source of bugs in early graphics code is getting the order wrong.
Two rules:

- **Right-to-left.** `M = A · B · C` means "apply C, then B, then A."
- **`R · S ≠ S · R` in general.** Scale-then-rotate skews; rotate-then-scale
  preserves the original axes. Try it with `S = diag(2, 1)` and `R = 90°`.

A simple habit: write transformations in the order they happen physically
("first translate, then rotate, then translate back"), and remember the
matrix multiplications go in the reverse order.

## 6. Hierarchical modeling in practice

Back to the tree. Suppose we have:

- `M_leaf_to_branch` — a small 3×3 placing a leaf on a branch.
- `M_branch_to_tree` — places a branch on the tree.
- `M_tree_to_world` — places the tree in the scene.

To draw one leaf, multiply:

```
M_world = M_tree_to_world · M_branch_to_tree · M_leaf_to_branch
```

Every leaf shares the same `M_tree_to_world` and `M_branch_to_tree`. To
animate the wind, you update **just the root** `M_tree_to_world` and the
whole tree, branches and leaves, transforms correctly. This is the most
important idea in scene graphs.

## 7. Exercises

Work these on paper before lecture.

<div class="exercise">

**Exercise 1.** Write the 3×3 homogeneous matrix that translates by
`(4, -2)`, then scales by `(0.5, 0.5)`, then rotates 90° counterclockwise.
What's the image of the point `(1, 1)`?

</div>

<div class="exercise">

**Exercise 2.** Show that the product of any two rotation matrices around
the origin is itself a rotation matrix. What angle?

</div>

<div class="exercise">

**Exercise 3.** A clock face has 12 numbers around its rim. Describe the
matrix product that draws number `k` (for `k = 1..12`), given that the
shape "number" is defined once near the origin and the clock face has
radius `r` centered at the origin.

</div>

<div class="exercise">

**Exercise 4.** Two students disagree on whether shear changes the area of
a unit square. Use the determinant of the 2×2 shear matrix to settle it.

</div>

## 8. Going deeper

After lecture, if you want to dig in:

- **Section worksheet (Friday).** More composition drills with grading rubric.
- **Lecture 2 (Q&A Thursday).** Bring any of the four exercises above.
- **Project 1 — MazeGame.** This is where hierarchical modeling pays off:
  walls, corridors, and characters all share base shapes positioned by
  the matrices you write.

## Take-aways

1. Affine transformations are the language we use to position geometry.
2. Homogeneous coordinates turn translation into a matrix multiply, so any
   chain of affine moves becomes a single 3×3 matrix.
3. Composition is right-to-left, and order matters.
4. Hierarchical modeling stores geometry once and places it via a chain of
   transformations — animating the root animates everything below.

---

<div class="bibliography">

**Further reading (course-internal).** This reading was written to stand on
its own; no external textbook is required. If you'd like a second
perspective:

Marschner & Shirley, *Fundamentals of Computer Graphics* (5e), Chapter 6 —
covers the same material with more diagrams. Available through the UW
library.

</div>
