
// For loop version
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

// ForOf loop version
for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`)
}


// For loop version
const seatingChart = [['Kristen', 'Eric', 'Namita'], ['Geoff', 'Bill', 'Samson'], ['Lachy', 'Benji', 'Stevey']];

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

// ForOf loop version
const seatingChart = [['Kristen', 'Eric', 'Namita'], ['Geoff', 'Bill', 'Samson'], ['Lachy', 'Benji', 'Stevey']];

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}



// Iterate over string
for (let char of "hello world") {
    console.log(char);
}