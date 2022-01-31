


let count = 0;
while (count < 10) {
    console.log(count)
    count++;
}



const secret = "BabyHippo";
let guess = prompt("Enter the secret code:")

while (guess !== secret) {
    guess = prompt("Enter the secret code:")
}
console.log("Congrats! You entered the secret code!")




// Break
let input = prompt("Hey! Say something!")

while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") {
        break;
    }
}
console.log("Ok...fine!")


// Guessing game

let maxNum = parseInt(prompt("Enter the maximum number!"));
while (!maxNum) {
    maxNum = parseInt(prompt("Enter the maximum number!"))
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:")
    } else {
        guess = prompt("Too low! Enter a new guess:")
    }
}
if (guess === 'q') {
    console.log('Ok, you quit!')
} else {
    console.log(`You got it! It took you ${attempts} guesses`)
}






