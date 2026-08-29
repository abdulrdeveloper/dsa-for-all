# Array Searching (Linear Search)

## What We Covered
In this topic, we learned how to find a specific value inside an array. We explored two ways to search:
1. Using built-in JavaScript methods (for real-world projects).
2. Using manual Linear Search with loops (for Data Structures and Algorithms - DSA).
3. The difference between using `-1` and `undefined` when an item is not found.

---

## Real-World Searching (Built-in)
In everyday web development, we don't write manual loops to find items. JavaScript provides handy built-in methods:

* **`indexOf(value)`**: Returns the index of the item. Returns `-1` if not found.
* **`includes(value)`**: Returns `true` if the item exists, and `false` if it doesn't.
* **`find(callback)`**: Returns the actual value if found, or `undefined` if not found.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Mango")); // Output: 2
console.log(fruits.includes("Banana")); // Output: true
```

---

## Manual Searching (The DSA Way)
For DSA, you must understand how searching actually works behind the scenes. The most basic searching algorithm is called Linear Search. It works by checking every single element in the array from start to finish.

### The JavaScript Developer's Approach (`undefined` instead of `-1`)
In traditional languages like C++ or Java, variables are strictly typed (e.g., an integer variable can only hold numbers). So, developers use `-1` to indicate "not found" because `0` is a valid index.

However, in JavaScript, variables are flexible. We can safely initialize our `index` as `undefined`, which logically means "no index has been assigned yet."

Here is the perfect JavaScript-native way to write a Linear Search:

```javascript
let arr = [1, 2, 3, 4, 5];
let value = 5; // The target we are looking for
let index = undefined; // Default state: Not found yet

// Step 1: Start a loop from the beginning to the end
for(let i = 0; i < arr.length; i++) {
    
    // Step 2: Check if the current box matches our target
    if(arr[i] === value) {
        index = i; // Save the index where we found it
        break;     // Stop the loop! No need to check the rest.
    }
}

console.log(index); 
// Output: 4 (Because 5 is at index 4)
// If the value was 99, the output would gracefully remain 'undefined'.
```

### Why use `break;`?
If we find our target, there is no logical reason to keep checking the rest of the array. The `break` statement immediately stops the loop, saving computer memory and processing time.

---

## Extra: The "Line of People" Analogy
Imagine there is a line of 10 people standing in front of you, and you are looking for your friend named "Ali".

How do you find him?
You go to the 1st person and ask, "Are you Ali?". If no, you move to the 2nd person. If no, you move to the 3rd.
Suddenly, the 4th person says, "Yes, I am Ali!"

What do you do next? Do you keep asking the 5th, 6th, and 7th person? No. You stop asking because you already found him.

This is exactly what Linear Search does:
1. It asks every index: `if (arr[i] === value)`
2. When it finds it, it stops asking: `break;`

---

## Small Summary
> Linear Search checks every element one by one from left to right.
>
> In JavaScript, setting your default index to `undefined` is a clean and logical approach.
>
> Always use the `break` keyword to stop the loop as soon as you find your target!