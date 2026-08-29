# Stack Implementation using Array

## What We Covered
We implemented a **Stack** data structure from scratch using a plain JavaScript array, along with a fixed maximum size limit. We covered the `push()` operation (adding an item) and the `pop()` operation (removing an item).

A Stack follows the **LIFO** rule — Last In, First Out. The last item added is the first one to be removed.

---

## The Code
```javascript
let data = [];
let currentSize = data.length;
let max = 5;

function push(newVal) {
    if (currentSize >= max) {
        console.warn("Stack is full you can not add " + newVal);
    } else {
        data[currentSize] = newVal;
        currentSize++;
    }
}

function pop() {
    if (currentSize > 0) {
        currentSize -= 1;
        data.length = currentSize;
    } else {
        alert("stack is already empty");
    }
}

push(20);
push(30);
push(10);
push(2);
push(25);
push(23);
push(67);

console.log(data);
```

---

## How `push()` Works
1. Check if `currentSize` has reached `max`. If yes, the stack is full — reject the new value and warn the user.
2. Otherwise, place the new value at index `currentSize` (the next empty slot).
3. Increase `currentSize` by 1 so the next push knows where the next empty slot is.

## How `pop()` Works
1. Check if `currentSize` is greater than 0 (i.e., the stack isn't empty).
2. Decrease `currentSize` by 1.
3. Set `data.length` to the new `currentSize` — this trims off the last element of the array automatically.
4. If the stack is already empty, alert the user instead of trying to remove anything.

---

## Dry Run
With `max = 5`:

| Call | currentSize before | Action | currentSize after |
|---|---|---|---|
| `push(20)` | 0 | added at index 0 | 1 |
| `push(30)` | 1 | added at index 1 | 2 |
| `push(10)` | 2 | added at index 2 | 3 |
| `push(2)`  | 3 | added at index 3 | 4 |
| `push(25)` | 4 | added at index 4 | 5 |
| `push(23)` | 5 | stack full, rejected | 5 |
| `push(67)` | 5 | stack full, rejected | 5 |

Final output:
```
[20, 30, 10, 2, 25]
```

---

## Real-World vs DSA
* **Real-World:** Native arrays already support `push()` and `pop()` methods (`data.push(20)`, `data.pop()`), so you'd rarely write this manually in a normal project.
* **DSA:** Writing your own push/pop with a size limit teaches you the internal logic of how a Stack works — useful for interviews and understanding data structures like the Call Stack, undo/redo systems, and browser history.

---

## Summary
> A Stack works on a Last In, First Out (LIFO) basis.
>
> `push()` adds an item at the end and increases the size counter.
>
> `pop()` removes the last item by shrinking the array's length.
>
> A `max` limit prevents the stack from growing beyond its capacity.