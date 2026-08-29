# Array Deletion

## What We Covered
In this topic, we learned how to remove a value from a specific index in an array in two ways:
1. Using built-in JavaScript methods (for real-world projects).
2. Using manual shifting with loops (for Data Structures and Algorithms - DSA).

---

## Real-World Deletion (Built-in)
In real-world web development, we use the built-in `splice()` method to delete elements. It automatically handles the shifting of the remaining elements.

### `splice()` Example for Deletion
To delete an element, we tell `splice()` the starting index and how many elements we want to remove.

```javascript
let numbers = [10, 20, 99, 30, 40];

// Syntax: array.splice(startIndex, deleteCount)
numbers.splice(2, 1); // Go to index 2, and delete 1 element

console.log(numbers);
// Output: [10, 20, 30, 40]
```

In simple words:
> `splice()` removes the item and automatically pulls all the next items backward to fill the gap.

---

## Manual Array Deletion (The DSA Way)
For DSA, you must understand how to fill the gap manually after removing an element. You have to pull (shift) all the elements after the gap one step to the left.

### The 3 Steps of Manual Deletion
Here is how we manually delete a value under the hood:
1. **Start a Forward Loop:** Start the loop exactly at the target index (where the gap is created).
2. **Shift Elements Backward (Left):** Pull every next element one position to the left (`arr[i] = arr[i + 1]`) to fill the gap.
3. **Trim the Array:** Once everything is shifted, the last element will be a duplicate. Reduce the array's length by 1 to remove it.

```javascript
// Example: We want to delete the value at 'targetIndex'
let arr = [10, 20, 99, 30, 40, 50];
let targetIndex = 2; // We want to remove '99'

// Step 1: Start a Forward Loop from the gap
for (let i = targetIndex; i < arr.length - 1; i++) {
    
    // Step 2: Shift Elements Backward (Left)
    arr[i] = arr[i + 1];
}
// Visual state here: [10, 20, 30, 40, 50, 50]

// Step 3: Trim the Array to remove the duplicate at the end
arr.length = arr.length - 1;

console.log(arr); 
// Output: [10, 20, 30, 40, 50]
```

### Why a Forward Loop?
If we start pulling from the end of the array, we will overwrite and lose our data. Starting right from the gap and moving forward safely pulls elements one by one into their new correct positions.

### Other names
* Left-shifting in arrays
* Manual element deletion
* Overwriting to delete

---

## Built-in vs Manual Deletion

| Method | Shift Direction | Loop Used (Under the hood) |
| --- | --- | --- |
| **`splice()`** | Automatic Left Shift | Hidden from developer |
| **Manual Loop** | Left Shift (←) | Forward Loop (`i++`) |

---

## Small Summary
> **Insertion (Adding):** Right Shift (→) using a Reverse Loop.
>
> **Deletion (Removing):** Left Shift (←) using a Forward Loop.
>
> Always start shifting from the element that won't overwrite its neighbor!

---

## Extra: The "Bricks" Analogy (Code Breakdown)
If the loops still confuse you, imagine the array as a row of bricks on the floor. Let's see both operations in code, where `i` represents the position (index) of our bricks.

### 1. Inserting a New Brick (Insertion) = Reverse Loop
We want to place a new value (`99`) at index `2`. Our Array: `[10, 20, 30, 40, 50]`

**Start the Loop from the End:** (To avoid collisions) We start from the last index and go down to the target index (`2`).

```javascript
// i = the last brick of the array (index 4)
for (let i = arr.length - 1; i >= 2; i--) {
    // ...
}
```

**Shift Bricks Forward (Right Shift):** Grab each brick and place it in the next (empty) box.

```javascript
for (let i = arr.length - 1; i >= 2; i--) {
    arr[i + 1] = arr[i]; // Next box = Current box
}
```

Visual Result: `[10, 20, 30, 30, 40, 50]` (Notice, 30 is duplicated and a gap is created).

**Place the New Brick in the Empty Space:** Now that the brick at index 2 has shifted forward, place the new brick there.

```javascript
arr[2] = 99;
```

Final Array: `[10, 20, 99, 30, 40, 50]`

### 2. Removing a Brick (Deletion) = Forward Loop
We want to remove the brick at index `2` (`99`) and fill the gap. Our Array: `[10, 20, 99, 30, 40, 50]`

**Start the Loop from the Target:** (Where the gap is) We start from index `2` and go to the end.

```javascript
// i = target index (where the gap is)
for (let i = 2; i < arr.length - 1; i++) {
    // ...
}
```

**Pull Backward to Fill the Gap (Left Shift):** Place the brick coming after the gap into the gap's position.

```javascript
for (let i = 2; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // Current box = Next box
}
```

Visual Result: `[10, 20, 30, 40, 50, 50]` (Everything moved back, but the last 50 is left twice).

**Remove the Extra Last Brick (Trim the array):** Once everything is pulled back, the last box is useless. Shrink the array by one step.

```javascript
arr.length = arr.length - 1;
```

Final Array: `[10, 20, 30, 40, 50]`

### 🧠 Easy Way to Memorize

**Where is the Loop Going?**
* Insert (`i--`): End ➔ Target (Because space needs to be created at the end).
* Delete (`i++`): Target ➔ End (Because the gap created at the target needs to be filled).

**Assignment (What is being placed where?)**
* Insert: `arr[i + 1] = arr[i]` (I am moving forward ➡️)
* Delete: `arr[i] = arr[i + 1]` (You come back to me ⬅️)