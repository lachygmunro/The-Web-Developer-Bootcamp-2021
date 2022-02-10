//HIGHER ORDER FUNCTIONS
//Functions that operate on/with other functions. They can: Accept other functions as arguments, Return a function.

//FUNCTIONS AS ARGUMENTS
function callTwice(func) {
    func();
    func();
}

function laugh() {
    console.log('HAHAHAHAHAHA')
}

callTwice(laugh); //passing a function as an argument.


//second example
function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTwice(rollDie)


//RETURN FUNCTIONS
//first example
function makeMysteryFun() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("You WIN A MILLION DOLLARS!!")
        }
    } else {
        return function () {
            console.log("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            console.log("STOP TRYING TO CLOSE THIS WINDOW!!")
        }
    }
}

//second example

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}


const numCheck = makeBetween(10, 100); //assigns a function to numCheck that can take a variable (num)

numCheck(50);
