# Palindrome Number

## Problem Summary
Given an integer `x`, determine whether it reads the same forward and backward.  
Return `true` if it is a palindrome, otherwise return `false`.

---

## Problem Description
A palindrome number remains unchanged when its digits are reversed.  
For example:
- `121` is a palindrome
- `123` is not a palindrome
- Negative numbers are not palindromes because of the `-` sign

The goal is to verify symmetry in the number’s digits while handling edge cases correctly.

---

## Initial Thought Process
The problem was approached by comparing digits from the start and end of the number and moving inward.  
This aligns with the intuitive definition of a palindrome: mirrored equality.

---

## Mistake and Learning
The initial logic relied on updating a flag during each comparison, which caused incorrect results because:
- A later successful comparison could override an earlier failure
- The algorithm did not stop immediately when a mismatch was found

The key learning was understanding that **palindrome validation is an “all-or-nothing” check**:
- One mismatch is enough to conclude the number is not a palindrome
- Early exit improves both correctness and clarity

---

## Key Takeaways
- Validation problems should fail fast
- Loop invariants matter more than flags
- Clear control flow leads to more reliable logic
- Readability is often more valuable than premature optimization