function reverseString(str) {
    let stack = [];
    let reversedString = "";

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    while (stack.length > 0) {
        reversedString += stack.pop();
    }

    return reversedString;
}

console.log(reverseString("HELLO"));