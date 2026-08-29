let arr = [1, 2, 3, 4, 5];
console.log(arr);
for (let i = 2; i < arr.length-1; i++) {
  arr[i] = arr[i + 1];
}
arr.length = arr.length - 1;
console.log(arr);
