function reversed(num) {
let output = [];
while(num !== 0) {
    output.push(num % 10);
    num = Math.floor(num / 10);
}

return output;
}

console.log(reversed(1234567));