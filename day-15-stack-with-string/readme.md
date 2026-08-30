# Reverse a String using Stack

## What We Covered
We reversed a string by using the **Stack** data structure (LIFO — Last In, First Out) instead of just using a built-in shortcut. The idea: push every character in, then pop them back out — they naturally come out in reverse order.

---

## The Code
```javascript
function reverseString(str) {
    let stack = [];
    let reversedString = "";

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    while (stack.length > 0) {
        reversedString += stack.pop();
    }

    return reversedString;
}

console.log(reverseString("HELLO"));
```

---

## How It Works

**Step 1: Push every character onto the stack**
Loop through the string from left to right, pushing each character one by one.

```
stack = ['H', 'E', 'L', 'L', 'O']
```
`'O'` ends up on top since it was pushed last.

**Step 2: Pop everything off**
Since a stack removes the last item first, popping now gives us the characters in reverse order.

```
pop() → 'O'
pop() → 'L'
pop() → 'L'
pop() → 'E'
pop() → 'H'
```

Each popped character is appended to `reversedString`, building it up as: `"O"` → `"OL"` → `"OLL"` → `"OLLE"` → `"OLLEH"`.

---

## Line-by-Line Code Explanation

```javascript
function reverseString(str) {
    let stack = [];              // create an empty stack (array) to hold the characters
    let reversedString = "";     // this will hold the final reversed result

    // Step 1: push every character onto the stack, one by one
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);      // put the i-th character of the string on top of the stack
    }
    // at this point all characters are in the stack in original order, but 'O' is on top since it was pushed last

    // Step 2: keep popping from the stack until it's empty
    while (stack.length > 0) {
        reversedString += stack.pop();   // remove the top character (LIFO) and add it to reversedString
    }
    // pop() always returns the character that was pushed last — that's what flips the order

    return reversedString;       // return the fully reversed string
}

console.log(reverseString("HELLO"));   // calling the function with "HELLO" gives "OLLEH"
```

**Why this works:** A stack always removes the item that went in last (LIFO). So when we push the string's characters from left to right and then pop them, they naturally come back out in reverse order — no manual reversing logic needed, just the natural behavior of a stack.

---

## Dry Run
| Step | Action | stack | reversedString |
|---|---|---|---|
| 1 | push 'H' | `['H']` | `""` |
| 2 | push 'E' | `['H','E']` | `""` |
| 3 | push 'L' | `['H','E','L']` | `""` |
| 4 | push 'L' | `['H','E','L','L']` | `""` |
| 5 | push 'O' | `['H','E','L','L','O']` | `""` |
| 6 | pop → 'O' | `['H','E','L','L']` | `"O"` |
| 7 | pop → 'L' | `['H','E','L']` | `"OL"` |
| 8 | pop → 'L' | `['H','E']` | `"OLL"` |
| 9 | pop → 'E' | `['H']` | `"OLLE"` |
| 10 | pop → 'H' | `[]` | `"OLLEH"` |

**Output:** `"OLLEH"`

---

## Real-World vs DSA
* **Real-World:** You'd just do `str.split("").reverse().join("")` — one line, no manual stack needed.
* **DSA:** This example shows a real use case of a Stack outside of pure theory — reversing order using LIFO is exactly how things like "undo" history or matching brackets work.

---

## Summary
> Pushing characters in order, then popping them, reverses the sequence — that's the core behavior of a Stack (LIFO).
>
> This is a simple, practical demonstration of why Stacks are useful beyond just push/pop theory.