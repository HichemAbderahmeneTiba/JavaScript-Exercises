const sheep = [true,true,false,true,false,true,false];

function counting(array) {
    return array.reduce((acc,value) => {
        if(value === true)  acc++;
        return acc;
    },0);
}

console.log(counting(sheep));