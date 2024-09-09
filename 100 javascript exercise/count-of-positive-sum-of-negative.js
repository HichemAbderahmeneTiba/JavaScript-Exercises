function count_and_sum(array) {
    let output = [];
    let count = array
        .filter(value => value >= 0)
        .length;
    let sum = array
        .filter(value => value < 0)
        .reduce((acc,value) => acc + value);

    output.push(count,sum);
    return output;
    
}

console.log(count_and_sum([1,2,3,4,-5,-6,-6,5]));