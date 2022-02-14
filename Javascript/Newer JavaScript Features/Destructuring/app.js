//DESTRUCTURING
//A short, clean syntax to 'unpack': values from arrays, properties from objects into distinct variables

//Destructuring Arrays
const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

const [gold, silver, bronze] = raceResults; //creates three variables

const [fastest, everyoneElse] = raceResults; //creates 2 variables


//example
const scores = [100, 200, 300, 400]

const [gold, silver] = scores //gold = index 0, silver = index 1 etc.



//Destructuring Objects
const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}

const { first, last, country } = runner; //creates 3 variables

const { first: firstName } = user; //rename the variable with a colon and then enter the new name. {objectProperty: newVariableName}

const { first = 'N/A' } = user; //able to enter default value.

//Destructuring Params
const fullName = ({ first, last }) => {
    return `${first} ${last}`
}

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya"
}

fullName(runner); //"Eliud Kipchoge"