


for (let i = 1; i <= 10; i++) {
    console.log("I'm in the loop body!!")
    console.log(i)
}



// Loop that prints even numbers

for (let i = 2; i <= 20; i += 2 {
    console.log(i)
}



// Loop print down from 100

for (let i = 100; i >= 0; i--) {
    console.log(i)
}



// Looping over arrays

const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}


// Looping over array in reverse
for (let i = animals.length - 1; i >= 0; i--) {
    console.log(i, animals[i]);
}


// Exercise
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}



// Nested loops
for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++)
        console.log(`j is: ${j}`);
}
}

const seatingChart = [['Kristen', 'Eric', 'Namita'], ['Geoff', 'Bill', 'Samson'], ['Lachy', 'Benji', 'Stevey']];

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

