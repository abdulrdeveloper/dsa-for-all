# Head & Tail Recursion (Call Stack)

## What is Call Stack:
A memory area where JavaScript keeps track of which functions are currently running and in what order (LIFO — the function called last is the one that finishes and gets removed first).


## What This Covers
Where the recursive call sits inside a function changes how it behaves. If the work happens before the call, or after it, that decides whether it's Head or Tail recursion.


## 1. Tail Recursion
The recursive call is the last thing in the function. Nothing runs after it.

Basically: do your work first, then call the next one.

## 2. Head Recursion
The recursive call happens first. The actual work (print, calculation, etc.) happens after the call returns.

Basically: call the next one first, and do your work only when it comes back.

---

## Example (breaking down the code)
This code has both behaviors in one function:

```javascript
function test(x) {
    // Tail-style: runs on the way down
    console.warn("Going down: ", x); 
    
    if(x > 0){
        test(x - 1); 
    }
    
    // Head-style: runs on the way back
    console.warn("Coming up: ", x); 
}

test(3);
```

### Dry Run

**Going down:**
* `test(3)` prints `3`, calls `test(2)`, pauses.
* `test(2)` prints `2`, calls `test(1)`, pauses.
* `test(1)` prints `1`, calls `test(0)`, pauses.
* `test(0)` prints `0`, condition fails, finishes.

**Coming back up:**
* `test(1)` resumes, prints `1`.
* `test(2)` resumes, prints `2`.
* `test(3)` resumes, prints `3`.

Output: `3, 2, 1, 0, 0, 1, 2, 3`

---

## Where Each One Is Used

**Tail Recursion**
* Some JS engines (like Safari's WebKit) support Tail Call Optimization — the old function gets removed from memory right away, so it saves RAM and avoids stack overflow.
* Used for simple linear searches or basic math sequences.

**Head Recursion**
* Used when children need to be processed before the parent — e.g. deleting files inside a folder before deleting the folder itself.
* Good trick for reversing things. Put `console.log` after the recursive call, and it prints in reverse order automatically while the stack unwinds.

---

## Summary
> Tail recursion: call is at the end. Good for memory.
>
> Head recursion: call is at the start. Good for reversing data.
>
> Call stack: what makes a function pause and wait for the inner call to finish before it continues.


> Youtube: https://youtu.be/vzTqM04YbiY?si=UvAEXxcAY3hKvhGx&t=1121