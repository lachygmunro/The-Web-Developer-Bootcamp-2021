
// console.log("Before conditional");
// if (1 + 1 === 2) {
//     console.log("Math still works!")
// }
// console.log("After conditional");


// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5!")
//     console.log(random)
// }


// if (random >= 0.5) {
//     console.log("Your number is greater than 0.5")
//     console.log(random)
// }


// const dayOfWeek = prompt("Enter a day of the week").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("Ughhh I hate Mondays")
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yay I love Saturdays")
// } else if (dayOfWeek === 'friday') {
//     console.log("Fridays are decent too!")
// } else {
//     console.log("Meh!")
// }



// const age = 8;

// if (age < 5) {
//     console.log("You are a child under 5. You get in for free.")
// } else if (age < 10) {
//     console.log("You are a child under 10. $10 entry.")
// } else if (age < 65) {
//     console.log("You are an adult. $20 entry.")
// } else {
//     console.log("You are a senior. $10 entry.")
// }




// NESTED CONDITIONALS

const password = prompt("Please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid password!")
    } else {
        console.log("Password must not include spaces!")
    }
} else {
    console.log("Password too short. Must be 6+ characters.")
}

