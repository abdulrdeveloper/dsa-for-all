# Topic: Recursion (Functions Calling Themselves)

The word **Recursion** comes from Latin and can be broken into two parts:

* **"Re"** — means "again" or "back" (repetition).
* **"Cursion"** — comes from "cursus", meaning "to run" or "a running".

So literally, **Recursion = "running back again"** — i.e., something that runs (repeats) by going back to itself again and again. That's exactly what a recursive function does: it keeps calling itself again until it's told to stop.

---

## What We Covered
In this topic, we learned about **Recursion**. Recursion happens when a function calls itself inside its own body to solve a smaller piece of the same problem.

Think of it like looking into two mirrors facing each other—you see an endless loop of reflections. But in code, we must eventually stop the loop!

---

## 2 Rules of Recursion
Every recursive function MUST have two parts. If you forget the first one, your browser will crash with a `Stack Overflow` error!

1. **The Base Case (The Stopper):** A condition that tells the function to STOP calling itself.
2. **The Recursive Call:** The part where the function actually calls itself with modified data.

---

## Code Examples & Dry Run

### Example 1: Factorial of a Number (Math Concept)
We want to multiply a number by all numbers below it (e.g., 5 * 4 * 3 * 2 * 1).

```javascript
function calculateFactorial(x) {
    // 1. The Base Case (Stop when x hits 0)
    if(x === 0) {
        return 1; 
    }
    // 2. The Recursive Call (Multiply x by the factorial of x-1)
    return x * calculateFactorial(x - 1);
}

console.log(calculateFactorial(5)); // Output: 120
```

### Dry Run
Here is how JavaScript memory unfolds this calculation step-by-step:

```
calculateFactorial(5) 
  = 5 * calculateFactorial(4)
    = 5 * (4 * calculateFactorial(3))
      = 5 * (4 * (3 * calculateFactorial(2)))
        = 5 * (4 * (3 * (2 * calculateFactorial(1))))
          = 5 * (4 * (3 * (2 * (1 * 1)))) <-- Stopped at Base Case!

Then it multiplies backwards: 1 * 2 * 3 * 4 * 5 = 120
```

### Example 2: Simple Counting
Printing numbers from 0 to 9 without using a `for` loop.

```javascript
function printNumbers(n) {
    // Base Case check is embedded in the if-condition
    if(n < 10) {
        console.log(n);
        printNumbers(n + 1); // Recursive call increasing the number
    }
}

printNumbers(0); 
```

---

## Real-World vs DSA Usage

**When to AVOID Recursion (Use simple loops instead):**
* Iterating through simple flat arrays or printing numbers.
* Why? Recursion takes up more memory (Call Stack). A simple `for` loop is much faster and safer for flat data.

**When to USE Recursion (The Modern Web & DSA):**
* In UI Development (React/Next.js): When building deeply nested components where you don't know the depth. Examples:
  * Nested Comments (like Reddit).
  * Folder/File trees (like VS Code explorer).
  * Multi-level Dropdown menus.
* In DSA: It is mandatory for advanced data structures like Trees, Graphs, and advanced sorting algorithms (Merge Sort, Quick Sort).

---

## Small Summary
> Recursion is a function calling itself.
>
> Always write the Base Case first to prevent infinite loops.
>
> Use loops for flat arrays, but use Recursion for deeply nested structures and advanced algorithms!