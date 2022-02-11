//ARROW FUNCTIONS
//Syntactically compact alternative to a regular function expression.
//Not supported IE

const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}

//cannot be used on it's own but can be used when saved in variable etc.

(x) => { //this will not run
    return x * x;
}

const maths = (x) => { //this will run
    return x * x;
}

const maths = function (x) { //this is the same as above
    return x * x;
}


//no praramaters
const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

//parenthesis are optional if only one paramter. will not work for no parameter or multiple parameters.
const maths = x => {
    return x * x;
}

//Coding exercise 48: Arrow function exercise
const greet = str => {
    return `Hey ${str}!`
}
