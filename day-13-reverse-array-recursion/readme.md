# Reverse Array with Recursion

## What We Covered
We learned how to reverse the order of an array (e.g., changing `[1, 2, 3]` to `[3, 2, 1]`).
We covered both the modern professional method and the traditional DSA (Data Structures & Algorithms) method.

---

## 1. The Real-World Way (Built-in Method)
In real-world projects (React, Node.js, etc.), we don't write manual loops or recursion to reverse an array. We just use the built-in JavaScript method — it's fast, tested, and bug-free.

```javascript
let data = [1, 2, 3, 4, 5];

// Instant reversal
data.reverse();

console.log(data); // Output: [5, 4, 3, 2, 1]
```

**Note:** The manual/recursive method below is purely for learning DSA and cracking interviews — you will not use it in actual production code.

---

## 2. The DSA Way (Two-Pointer Recursion)
In coding interviews, you have to build the logic yourself. We use a method called the **Two-Pointer Approach** combined with recursion.

Think of it like two hands: `start` points to the first item, `end` points to the last item. We swap their values and slowly move both hands towards the middle.

To swap two values, we need a temporary variable — like using an empty third glass to swap the contents of two glasses (Pepsi and Sprite) without spilling either one.

### The Code
```javascript
let data = [10, 20, 30, 40, 50];

function customReverse(data, start, end) {
    
    // Base Case: stop when the two pointers cross the middle
    if (start <= end) {          
        
        // Step 1: swap the values using a temp variable
        let temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        
        // Step 2: move pointers inward and call again
        // start + 1 moves forward, end - 1 moves backward
        customReverse(data, start + 1, end - 1); 
    }
}

// Pass the array, index 0 (first), and index length-1 (last)
customReverse(data, 0, data.length - 1);

console.log(data); // Output: [50, 40, 30, 20, 10]
```

### Dry Run
Let's trace `[10, 20, 30]`:

1. First call: `start = 0 (10)`, `end = 2 (30)`.
   - Swaps 10 and 30 → array becomes `[30, 20, 10]`.
   - Moves inward → calls again with `start = 1`, `end = 1`.

2. Second call: `start = 1 (20)`, `end = 1 (20)`.
   - Swaps 20 with itself (no visible change).
   - Moves inward → calls again with `start = 2`, `end = 0`.

3. Third call: `start = 2`, `end = 0`.
   - `start <= end` is now false → recursion stops.

---

## Summary
> Real world: just use `.reverse()`.
>
> DSA: two pointers (`start`, `end`) swap and move toward the middle, using a `temp` variable to hold one value during the swap.
>
> The recursive version is only meant to build your understanding for DSA/interviews — not something you'd write on the job.