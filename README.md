# JavaScript TypeError: Cannot convert undefined or null to object

This repository demonstrates a common JavaScript error: a TypeError thrown when attempting to perform arithmetic operations (like addition) on values that are not numbers (such as null or undefined).  The bug.js file shows the problematic code, while bugSolution.js provides a corrected version.

## Bug Description
The function `foo` attempts to add two values, `a` and `b`. If either `a` or `b` is `null`, the function correctly returns `null`. However, if `a` or `b` is not a number, the addition operator throws an error.

## Solution
The bugSolution.js file shows a corrected version of the function that performs input validation before the addition operation, preventing the `TypeError`.  This solution ensures that the addition is only attempted if both inputs are numbers.