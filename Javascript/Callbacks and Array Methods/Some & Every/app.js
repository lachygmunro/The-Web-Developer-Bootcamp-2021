//EVERY
//Test whether all elements in the array pass the provided function. It returns a Boolean value.

const words = ["dog", "dig", "log", "bag", "wag"];

words.every(word => {
    return word.length === 3; //true
})

words.every(word => word[0] === 'd'); //false

words.every(w => {
    let last_letter = w[w.length - 1];
    return last_letter === 'g'
}) //true


//SOME
//Similar to every, but returns true if ANY of the array elements pass the test function.

const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

//Are there any words longer than 4 characters?
words.some(word => {
    return word.length > 4;
}) //true

//Do any words start with 'Z'?
words.some(word => word[0] === 'Z'); //false

//Do any words contain 'cake'?
words.some(w => w.includes('cake')); //true


//Coding Exercise 50: Some/Every exercise
function allEvens(arr) {
    return arr.every(i => i % 2 === 0)
}
