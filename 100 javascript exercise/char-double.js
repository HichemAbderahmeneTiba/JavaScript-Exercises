function double(string) {
    let result = '';
    for(let i = 0; i < string.length ; i++) 
        result += string[i] + string[i];
     return result;
}

console.log(double('hi my name is hichem'));


function repeatChars(str) {
    return str.split('').map(char => char + char).join('');
}

// Example usage
let originalString = "Hello";
let repeatedString = repeatChars(originalString);
console.log(repeatedString);
