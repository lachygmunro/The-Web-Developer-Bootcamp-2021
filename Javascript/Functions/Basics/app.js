// Basic function
function singSong() {
    console.log('Do')
    console.log('Re')
    console.log('Mi')
}

singSong();


// Function that takes an argument
function greet(name) {
    console.log(`Hi ${name}!`)
}

greet('Lachy');


// Coding exercise 36
function rant(message) {
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
}

rant('pickles');


// Function that takes more than one argument
function greet(firstName, secondName) {
    console.log(`Hi ${firstName} ${secondName}!`)
}

greet('Lachy', 'Munro');


// Function that expects different types of arguments
function repeat(string, numOfTimes) {
    let result = '';
    for (i = 0; i < numOfTimes; i++) {
        result += string;
    }
    console.log(result);
}

repeat('Hello!')


// Coding exercise 37
function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log('Snake Eyes!')
    } else {
        console.log('Not Snake Eyes!')
    }
}


// Outputs that can be used when using return
function addNum(x, y) {
    return x + y;
}

let total = addNum(1, 2);


// Return will end function. Lines after return will not run.
// Only one value can be returned.

//Coding exercise 38
function multiply(num1, num2) {
    return num1 * num2;
}

//Coding exercise 39
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } return false;
}

//Coding exercise 40
function lastElement(arr) {
    if (arr.length > 0) {
        return arr[arr.length - 1]
    } else {
        return null;
    }
}


//Coding exercise 41
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}


//Coding exercise 42
function sumArray(arr) {
    let total = 0
    for (let item of arr) {
        total += item;
    }
    return total;
}


//coding exercise 43
function returnDay(num) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (num < 1 || num > 7) {
        return null;
    } return days[num - 1];
}

