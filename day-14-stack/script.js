let data = [];
let currentSize = data.length;
let max = 5;

function push(newVal) {
  if (currentSize >= max) {
    console.warn("Stack is full you can not add " + newVal);
  }else{
  data[currentSize] = newVal;
  currentSize ++;
}
}

// function pop() {
//   if (currentSize > 0) {
//     currentSize -= 1;
//     data.length = currentSize;
//   } else {
//     alert("stack is already empty");
//   }
// }

push(20);
push(30);
push(10);
push(2);
// pop();
// pop();
// pop();
push(25);
push(23);
push(67);
// pop()
// pop()

console.log(data);
