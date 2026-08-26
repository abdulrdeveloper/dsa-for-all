# Complexity

**Time Complexity:**
A measure of how the running time of an algorithm grows as the size of the input (n) increases. It doesn't measure actual seconds — it describes the rate at which the number of operations grows relative to input size, expressed using Big-O notation (e.g., O(1), O(n), O(n²)).

**Space Complexity:**
A measure of how much extra memory an algorithm requires as the size of the input (n) increases. This includes memory used for variables, data structures, or auxiliary storage created during execution — not counting the input itself.

## Big O, Big Theta, Big Omega

- **Big O — O(n) — Upper Bound (Worst Case):**
  Describes the maximum time/space an algorithm could take. This is the most commonly used notation because it guarantees the algorithm will never be slower than this.

- **Big Theta — Θ(n) — Average/Tight Bound:**
  Describes the case where the upper and lower bounds are the same — the algorithm's growth rate is tightly bound, giving an average/typical running time.

- **Big Omega — Ω(n) — Lower Bound (Best Case):**
  Describes the minimum time/space an algorithm will take. This is the best-case scenario — the algorithm will never be faster than this.

## Example — Linear Search

Array:

| Index | 0 | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|---|
| Value | 1 | 2 | 3 | 4 | 5 |

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

- **Best Case — Ω(1):**
  The target is the **first** element. `linearSearch(arr, 1)` finds a match at index 0 on the very first check. Only **1 comparison** is needed, no matter how big the array is — that's why it's Ω(1), not Ω(n).

- **Worst Case — O(n):**
  The target is the **last** element, or doesn't exist at all. `linearSearch(arr, 5)` or `linearSearch(arr, 99)` forces the loop to check every single element (all 5 boxes) before finding it or giving up.

- **Average Case — Θ(n/2), which simplifies to Θ(n):**
  The target is somewhere in the **middle**. `linearSearch(arr, 3)` will, on average, need roughly **n/2 comparisons** before finding a match. Big-O notation drops constants (the "/2"), so this is still written as Θ(n) since it still grows linearly with input size.

## Big O Categories (the "shapes" of growth)

These describe the growth pattern itself, separate from best/worst/average case. In real-world coding and interviews, **Big O (worst case) is what's used by default** — it's the standard answer whenever someone asks "what's the time complexity?" without specifying which case.

1. **O(1) — Constant time**
   The number of operations stays the same no matter how big the input is.
   ```js
   function getFirst(arr) {
     return arr[0]; // always 1 step, whether the array has 5 items or 5 million
   }

   getFirst([10, 20, 30]); // 10 — only one spot was checked
   ```

2. **O(n) — Linear time**
   The number of operations grows directly in proportion to the input size.
   ```js
   function printAll(arr) {
     for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]); // each element gets printed once
     }
   }

   printAll([1, 2, 3]); // 3 elements → loop runs 3 times
   printAll([1, 2, 3, 4, 5, 6]); // 6 elements → loop runs 6 times
   ```

3. **O(log n) — Logarithmic time**
   The input gets cut in half each step, so it grows very slowly even for huge inputs.
   ```js
   // Number guessing game — the range gets cut in half every guess
   function guessNumber(low, high, target) {
     while (low <= high) {
       let mid = Math.floor((low + high) / 2);
       console.log("guessing:", mid);
       if (mid === target) return mid;
       if (mid < target) low = mid + 1;
       else high = mid - 1;
     }
     return -1;
   }

   guessNumber(1, 100, 42);
   // Searches a range of 1-100, and the range is cut in half after every guess.
   // Only about 7 guesses are needed (not 100!) — that's the power of O(log n).
   ```

4. **O(n²) — Quadratic time**
   A loop inside a loop — the number of operations grows with the square of the input size.
   ```js
   // Compare every student against every other student
   function findMatchingPairs(names) {
     for (let i = 0; i < names.length; i++) {
       for (let j = 0; j < names.length; j++) {
         if (names[i] === names[j] && i !== j) {
           console.log("Match:", names[i]);
         }
       }
     }
   }

   findMatchingPairs(["Ali", "Sara", "Ali"]);
   // 3 names → 3 x 3 = 9 total comparisons
   ```

5. **O(n³) — Cubic time**
   Three nested loops. Rare — usually only shows up in 3D data or matrix problems.
   ```js
   // Print every point in a 3D grid (like a cube)
   function print3DGrid(size) {
     for (let x = 0; x < size; x++)
       for (let y = 0; y < size; y++)
         for (let z = 0; z < size; z++)
           console.log(x, y, z);
   }

   print3DGrid(3);
   // 3 x 3 x 3 = 27 total prints
   ```

### Why Big O (worst case) is the default
- It guarantees the algorithm will never be slower than this — critical for reliability in production systems.
- In interviews (LeetCode, DSA prep), "what's the time complexity?" almost always means worst case, unless stated otherwise.
- Ω and Θ are mostly used in academic/theoretical analysis — they're rarely asked about explicitly in real coding interviews.

## Big O Growth Order (fastest to slowest)

This is the order in which these complexities grow, from best (fastest, most efficient) to worst (slowest, least efficient):

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)
```

| Complexity | Name | Speed |
|---|---|---|
| O(1) | Constant | Fastest — doesn't grow at all |
| O(log n) | Logarithmic | Very fast — grows very slowly |
| O(n) | Linear | Grows directly with input |
| O(n log n) | Linearithmic | Slightly worse than linear (common in good sorting algorithms) |
| O(n²) | Quadratic | Grows fast — nested loops |
| O(n³) | Cubic | Grows faster — triple nested loops |
| O(2ⁿ) | Exponential | Very slow — doubles with every extra input |
| O(n!) | Factorial | Slowest — explodes almost instantly |

As input size (n) gets bigger, the gap between these gets massive. For example, at n = 20:
- O(log n) ≈ 4 operations
- O(n) = 20 operations
- O(n²) = 400 operations
- O(2ⁿ) ≈ 1,000,000 operations

This is why choosing the right approach matters — the same problem solved with O(n²) vs O(n log n) can be the difference between a program that runs instantly and one that takes forever on large inputs.