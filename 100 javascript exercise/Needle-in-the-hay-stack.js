function needle(array) {
    const position = array.lastIndexOf('needle');
    return 'found the needle at position ' + position + ' index';
}
const phrases = ['hello' , 'junk' , 'needle' , 'wow' , 'beautiful'];

console.log(needle(phrases));

