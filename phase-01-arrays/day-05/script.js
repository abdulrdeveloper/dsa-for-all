let arr=[1, 2, 3, 4, 5];
let value=5;
let index=undefined;

for(let i=0; i<arr.length; i++){
    if(arr[i]===value){
        index=i;
        break;
    }
}

console.log(index);