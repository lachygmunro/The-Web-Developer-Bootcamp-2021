//REDUCE
//Executes a reducer function on each element of the array, resulting in a single value.

//Summing an array
const nums = [3, 5, 7, 9, 11];

nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});


//exmaple
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

//without reduce
let total = 0;
for (let price of prices) {
    total += price
}
console.log(total);

//with reduce
const total = prices.reduce((total, price) => {
    return total + price
})


//find minimum value
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

prices.reduce((min, price) => {
    if (price < min) {
        return price;
    } return min;
})


//nominate starting point for accumulator

const evens = [2, 4, 6, 8];

evens.reduce((sum, num) => sum + num, 100) //second argument 100 will set accumulator to 100.