
//SCOPE
//variable declared within function with let cannot be accessed outside of function.
function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}

console.log(totalEggs); //would not run successfully.


//cam declare variable outside of function as global variable and update within function (not usually done in this way)

let totalEggs = 0;

function collectEggs() {
    totalEggs = 6;
}

console.log(totalEggs);
collectEggs();
console.log(totalEggs);


//if two variables are declared with the same name. The closest variable will be used. 
let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron';
    console.log(bird)
}
birdWatch();

// What is printed to the console when this code runs?
// Answer: Pajama Squid

let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
}
observe();

// What is the result of running the following code:
// Answer: Spanish Dancer

const creature = "Common Sea Dragon";

function scubaDive() {
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}

scubaDive();

// What two values are printed to the console:
// Answer: Scorpion Fish, Blue-Ringed Octopus

let deadlyAnimal = "Blue-Ringed Octopus";

function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}

handleAnimal();
console.log(deadlyAnimal)



//BLOCK SCOPE
//variables declared within block with let and const only exist within block (conditional statements, loops, functions etc.)
let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIII!'
}

console.log(radius);
console.log(PI) //will fail. variable declared within block cannot be accessed outside of block. if using var to declare variable within block it can be accessed outside of block. let and const are scoped to block.



//LEXICAL SCOPE
//An inner function can access variables declared in outer function. outer function cannot access variables declared in inner function.
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther']
    function cryForHelp() {
        for (let hero of heroes) { //inner function has access to variables declared in outer functions (heroes)
            console.log(`Please help us, ${hero, toUpperCase()}`)
        }
    }
    cryForHelp() //cryForHelp must be called within outer function to run
}

