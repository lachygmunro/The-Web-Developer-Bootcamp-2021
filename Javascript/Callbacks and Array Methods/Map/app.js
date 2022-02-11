//MAP
//creates a new array with the results of calling a callback on every element in the array

const texts = ['rofl', 'lol', 'omg', 'ttyl']
const caps = texts.map(function (t) {
    return t.toUpperCase();
});



const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const newNum = numbers.map(function (num) {
    return num * 2; //constructs new array with each number multiplied by 2
})


//Coding exercise 47: Map practice
// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];

// Write your code here
const firstNames = fullNames.map(function (fn) {
    return fn.first
})

