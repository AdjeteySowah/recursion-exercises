# Recursion Exercises

This folder contains JavaScript solutions for the recursion exercises from [The Odin Project's JavaScript course](https://www.theodinproject.com/lessons/javascript-recursion).

## Solutions Overview

### fibonacci.js

Implements two functions:

* `fibs(term)` — **Iterative** approach to generate the Fibonacci sequence up to the given term.
* `fibsRec(term)` — **Recursive** approach to generate the Fibonacci sequence up to the given term.

Both functions:

* Expect a positive integer greater than 1.
* Throw an error if the argument is not a valid integer, ≥ 2.

**Example Usage:**

```js
console.log(fibs(6));    // [0, 1, 1, 2, 3, 5]
console.log(fibsRec(6)); // [0, 1, 1, 2, 3, 5]
```

### merge-sort.js

Implements a classic **recursive merge sort** algorithm with two functions:

* `mergeSort(array)` — Splits the array until single elements, then merges sorted halves.
* `mergeHalves(a, b)` — Helper to merge two sorted arrays into one.

mergeSort:

* Expect a valid JavaScript array.
* Throw an error if the argument to `mergeSort` is not an array.

**Example Usage:**

```js
console.log(mergeSort([5, 3, 8, 2, 1]));
// Output: [1, 2, 3, 5, 8]
```