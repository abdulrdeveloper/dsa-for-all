# Array Traversal

## What We Covered

In this topic, we learned how to get data from an array in two ways:

1. Read every value from the array.
2. Read one value using its index.

---

## Array Traversal

**Array traversal** means going through every element of an array one by one.

```javascript
numbers.forEach((number, index) => {
    console.log(`Index: ${index} and Value: ${number}`);
});
```

In simple words:

> Traversing an array means reading all of its data.

### Other names

- Iterating over an array
- Looping through an array
- Visiting array elements
- Reading array elements

These terms all mean almost the same thing: **go through the array and read its values**.

---

## Array Accessing

**Array accessing** means getting a value from a specific index.

```javascript
const numbers = [9, 3, 5, 8, 7];

console.log(numbers[3]);
// 8
```

`numbers[3]` means: get the value at index `3`.

Remember: array indexes start from `0`.

### Other names

- Array indexing
- Access by index
- Index-based access
- Index lookup
- Retrieving an array element

These terms mean: **get one value from the array using its index**.

---

## User-Specified Index

Your program lets the user enter an index and then gets the value from that position:

```javascript
bigArray[index]
```

This is called:

- User-specified index access
- Dynamic array access
- User-driven array lookup

The easiest meaning is:

> The user gives an index, and the program returns the value at that index.

---

## Traversal vs Accessing

| Term | Easy meaning |
| --- | --- |
| Traversal | Read all values one by one |
| Accessing | Read one value from a specific index |
| Indexing | Another name for accessing by index |


## Small Summary

> Traversal reads all. <br>
> Accessing reads one. <br>
> Indexing accesses one.
