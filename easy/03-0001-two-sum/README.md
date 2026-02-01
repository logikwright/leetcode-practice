# Two Sum — Problem Interpretation & Learning Notes

## Problem Statement (Summary)

Given an array of integers `nums` and an integer `target`, return the indices of two numbers such that they add up to the target.

Constraints:
- Exactly one valid solution exists
- The same element (index) cannot be used twice
- The answer can be returned in any order

---

## My Initial Interpretation

While reading the constraint:

> *“You may not use the same element twice”*

I interpreted this as a signal to **skip indices during iteration** to avoid reuse.

Based on that, I assumed:
- If I move the loop counter by `i + 2`, I would never reuse the same element
- Pairing indices like `[i]` and `[i + 1]` felt equivalent to `[i]` and `[j]`
- Since the indices were different, the constraint should be satisfied

At first glance, this reasoning felt logically consistent.

---

## Where My Approach Failed

The mistake was **mixing iteration strategy with problem constraints**.

By incrementing the loop counter using `i += 2` or pairing only adjacent elements:
- I unintentionally **skipped valid indices**
- I limited the solution space to **neighbor pairs only**
- Certain cases (e.g. array length = 3 or non-adjacent valid pairs) failed

The key issue was not element reuse — it was **incomplete coverage**.

---

## The Core Realization

The constraint:

> *“You may not use the same element twice”*

means:
- **Do not reuse the same index**
- **Do not pair `nums[i]` with itself**

It does **not** mean:
- Skip indices
- Jump the loop counter
- Restrict pairs to adjacent elements

Correct enforcement comes from **pair selection logic**, not from skipping iteration steps.

---

## Important Conceptual Difference

- `[i]` and `[i + 1]` → checks only adjacent elements (sliding window)
- `[i]` and `[j]` (where `j > i`) → checks all valid combinations

Two Sum is a **combination problem**, not a neighbor problem.

---

## Additional Learnings

- Loop increments control **coverage**, not correctness
- Expressions like `i + 2` do nothing unless assigned (`i += 2`)
- `continue` cannot fix a broken loop counter
- Returning an unnamed array like `[i, j]` is idiomatic and O(1)
- Creating a temporary array vs returning inline has no Big-O impact
