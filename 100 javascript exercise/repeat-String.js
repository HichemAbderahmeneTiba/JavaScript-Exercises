function repeat(string,times) {
    return string.repeat(times);
}

console.log(repeat('hello',5));

function repeat_2(string,times){
    let word = '';
    for(let i = 0 ; i < times; i++) {
        word += string;
    }
    return word;
}

console.log(repeat_2('hi',5));