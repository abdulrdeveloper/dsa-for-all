let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let margedArr = [];
let count = 0;

for(let i=0; i < arr1.length; i++){
    margedArr[count] = arr1[i];
    count++;
}
for(let i=0; i < arr2.length; i++){
    margedArr[count] = arr2[i];
    count++;
}
console.log(margedArr);