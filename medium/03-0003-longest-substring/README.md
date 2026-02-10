# Longest Substring Without Repeating Characters

## Problem Overview

The task is to determine the length of the longest **contiguous substring** in a given string such that **no character appears more than once**. The substring must be continuous, and characters cannot be skipped or reordered.

The goal is not to return the substring itself, but only the **maximum length** that satisfies the condition.

---

## Approach Summary

The problem was approached by fixing a starting position in the string and expanding forward while maintaining the constraint that all characters in the current substring are unique. As soon as this constraint is violated, the expansion stops and the length of the valid substring is evaluated.

This process is repeated for each possible starting position, and the maximum length observed across all valid substrings is tracked and returned.

---

## Key Learnings

- A **substring** must always be contiguous; once a rule is broken, further expansion is invalid.
- Maintaining a clear **invariant** (all characters are unique) simplifies reasoning.
- Tracking only the required result (maximum length) avoids unnecessary memory usage.
- Optimizing checks for repeated characters significantly improves performance without changing the overall logic.