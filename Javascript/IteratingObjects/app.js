const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// Not iterable with for of loop. Must use for in loop.

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`)
}

// Other options are..

Object.keys(testScores)  //will list keys within object

Object.values(testScores) //will list values within object

Object.entries(testScores) //will list new nested array with keys and values



for (let score of Object.values(testScores)) {
    console.log(score)
}