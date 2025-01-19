# Unexpected Null Handling in Addition Function

This repository demonstrates an uncommon JavaScript bug related to null handling in an addition function. The function `foo` returns `null` if either of its arguments is `null`, even if the other argument is a number. This behavior is unexpected and may lead to errors in applications where null or undefined values might appear as inputs.

The `bug.js` file contains the original faulty code, while `bugSolution.js` provides a corrected version that handles null values more gracefully.

## Bug Description
The function `foo` is intended to add two numbers. However, if either input is `null`, it prematurely returns `null` without attempting any type coercion or error handling.  This can cause unexpected errors in scenarios where `null` might be present in the input data.

## Solution
The `bugSolution.js` file demonstrates a possible solution. The improved function either coerces null values to 0 before addition or throws an error if the inputs are not numbers to clearly show the bug.