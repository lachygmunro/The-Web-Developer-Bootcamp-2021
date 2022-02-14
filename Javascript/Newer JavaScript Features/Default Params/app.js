//DEFAULT PARAMS

//The old way:
function multiply(a, b) {
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}

multiply(7); //7
multiply(7, 3); //21


//The new way:
function rollDie(numSides = 6) { //set default here (= x)
    return Math.floor(Math.random() * numSides) + 1
}

function greet(msg = "Hey there", person) { //must be concious of order. Defaults should come second etc.
    console.log(`${msg}, ${person}!`);
}