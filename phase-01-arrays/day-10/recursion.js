function dev(x){
    if(x === 0){
        return 1;
    }
    return x * dev(x - 1);
}
console.log(dev(5));

// Dry Run:       console.log(5*dev(4)*dev(3)*dev(2)*dev(1)*dev(0))


/*
function num(n){
    if(n < 10){
        console.log(n);
        num(n + 1);
    }
}
num(0); 
*/