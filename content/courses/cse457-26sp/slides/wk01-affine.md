---
marp: true
theme: coursemaker
paginate: true
---

<!-- _class: title -->

# Affine Transformations

## Week 1 · CSE 457 Introduction to Computer Graphics

<div class="meta">University of Washington · Spring 2026</div>

---

## What we'll cover today

- **Why** transformations: positioning objects in space
- **2D** translation, rotation, scaling, shear
- **Homogeneous coordinates** — the trick that unifies them
- **3D** rotation around an arbitrary axis
- **Composition** order matters

---

<!-- _class: divider -->

# Why transformations

---

## A scene is a hierarchy

We don't model each leaf in world space.

We model **the tree** in its own space, **the branch** in the tree's space,
**the leaf** in the branch's space, and let composition do the work.

> "All the geometry, all the way down."

---

## Translation: just add the offset

```
T(x, y) = (x + tx, y + ty)
```

In matrix form (homogeneous coords):

```
[ x' ]   [ 1  0  tx ] [ x ]
[ y' ] = [ 0  1  ty ] [ y ]
[ 1  ]   [ 0  0   1 ] [ 1 ]
```

The 1 in the bottom row is what makes this work.

---

## Rotation: trig + a matrix

For angle θ around the origin:

```
[ cos θ   -sin θ   0 ] [ x ]
[ sin θ    cos θ   0 ] [ y ]
[   0        0     1 ] [ 1 ]
```

To rotate around a **point** P: translate(-P), rotate, translate(+P).

---

<!-- _class: two-col -->

# Composition order matters

**Scale then rotate**

```
R · S · p
```

skews then turns: shapes stretch and the rotation tilts the
stretched axes.

**Rotate then scale**

```
S · R · p
```

turns then stretches: the original axes are preserved.

---

## Take-aways

1. Homogeneous coords let translation be a matrix multiply.
2. Composition reads **right to left**.
3. To rotate around a non-origin point, sandwich the rotation between two translations.

---

<!-- _class: quote -->

> Hierarchical modeling is just a story you tell with matrices.

<div class="attr">— A graphics textbook, paraphrased</div>

---

## What's next

- **Section worksheet:** matrix composition exercises
- **Reading:** Marschner & Shirley §6.1-6.3
- **Lecture 2 (Thu Apr 2 Q&A):** ask anything

**Project 1 (MazeGame) out today.** Due Apr 7.
