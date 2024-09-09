let numbers = [1,3,-4,5,-2,7];

const sum = numbers.filter(n => n >= 0).reduce((a,b) => a + b);

console.log(sum);