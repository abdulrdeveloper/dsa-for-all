# Array Sorting — Ascending & Descending

---

## 1️⃣ Real World Way (Built-in `sort()`)

### Ascending Order
```javascript
let data = [40, 30, 12, 25];

data.sort((a, b) => a - b);
console.log(data); // [12, 25, 30, 40]
```

### Descending Order
```javascript
let data = [40, 30, 12, 25];

data.sort((a, b) => b - a);
console.log(data); // [40, 30, 25, 12]
```

**Difference:** `a - b` = ascending, `b - a` = descending. Bas order palat gaya, baaki sab same.

---

## 2️⃣ DSA / Manual Way (Bubble Sort)

### Ascending Order — Code
```javascript
let data = [40, 30, 12, 25];

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1; j++) {
        if (data[j] > data[j+1]) {
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
        }
    }
}

console.log(data); // [12, 25, 30, 40]
```



### Line-by-Line Explanation + Dry Run

Let's dry-run this line by line, with `data = [40, 30, 12, 25]`:

```js
let data = [40, 30, 12, 25];
```
Array created — indices: `data[0]=40, data[1]=30, data[2]=12, data[3]=25`

```js
for (let i = 0; i < data.length; i++) {
```
Outer loop `i` — controls how many full passes are made over the array. `data.length` = 4, so `i` runs 0,1,2,3 (4 times).

```js
  for (let j = 0; j < data.length - 1; j++) {
```
Inner loop `j` — compares adjacent pairs. `data.length - 1` = 3, so `j` runs 0,1,2 (there's no pair after the last element, hence `-1`).

```js
    if (data[j] > data[j+1]) {
```
Compare the current element `data[j]` with the next element `data[j+1]`. If the current one is bigger, the order is wrong — a swap is needed.

```js
      let temp = data[j];
      data[j] = data[j+1];
      data[j+1] = temp;
```
Swap logic:
- Save `data[j]`'s value into `temp` (otherwise it would be lost)
- Put `data[j+1]`'s value into `data[j]`
- Put `temp` (original `data[j]`) into `data[j+1]`

**Now the actual dry run (i=0):**
Array: `[40, 30, 12, 25]`

- j=0: `data[0]=40 > data[1]=30`? Yes → swap → `[30, 40, 12, 25]`
- j=1: `data[1]=40 > data[2]=12`? Yes → swap → `[30, 12, 40, 25]`
- j=2: `data[2]=40 > data[3]=25`? Yes → swap → `[30, 12, 25, 40]`

Notice — 40 (the largest number) has "bubbled" all the way to the end. This is where the name "Bubble Sort" comes from.

**i=1:**
Array: `[30, 12, 25, 40]`
- j=0: `30>12`? Yes → `[12, 30, 25, 40]`
- j=1: `30>25`? Yes → `[12, 25, 30, 40]`
- j=2: `30>40`? No → no swap

**i=2:**
Array: `[12, 25, 30, 40]`
- j=0: `12>25`? No
- j=1: `25>30`? No
- j=2: `30>40`? No
(already sorted, no swaps happen)

**i=3:**
Same — no swaps.

**Final result:**
```js
[12, 25, 30, 40]
```

**Core idea:** in every outer loop pass, the largest unsorted element reaches its correct position (the end) — just like a bubble rising to the top.

---

### Descending Order — Code
```javascript
let data = [40, 30, 12, 25];

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - 1; j++) {
        if (data[j] < data[j+1]) {
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
        }
    }
}

console.log(data); // [40, 30, 25, 12]
```

**Only one thing changes:**
```javascript
if (data[j] > data[j+1])   // ascending
if (data[j] < data[j+1])   // descending
```
The comparison operator is flipped from `>` to `<`. Now if the current element is smaller than the next one, a swap happens — this way the larger element moves toward the **start** and the smaller element moves toward the end.

The rest of the logic (outer loop, inner loop, swap using `temp`) stays exactly the same — only the condition is reversed.