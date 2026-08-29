let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let temp;

function customReverse(data, start, end){
    if(start<=end){          // we are checking if start index is less than or equal to end index so that we can swap the elements in the array
    temp = data[start];
    data[start] = data[end];
    data[end]=temp;
    customReverse(data,start+1,end-1); // we are calling the function again with incremented start and decremented end so that we can swap the next pair of elements in the array
    }
}

customReverse(data,0,data.length-1);   // we passed array and starting index and last index 
console.log(data);