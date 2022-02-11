//FOREACH
//accepts a callback function. Calls the function once per element in the array.

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
    console.log(n * n) //print 81, 64, 49, 36, 25, 16, 9, 4, 1
});

nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el) //prints 8, 6, 4
    }
});




const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

numbers.forEach(function (el) {
    console.log(el)
})