const numbers = [1,1,2,3,4];

function filtering(array) {
    const max = array.reduce((a,b) => {
        if(b > a)   a = b;
        return a;
    });
    const min = array.reduce((a,b) => {
        if(b < a)   a = b;
        return a;
    });

    return array
    .filter(value => value !== max && value !== min)
    .reduce((a,b) => a + b);
}

console.log(filtering(numbers));