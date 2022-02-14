//FILTER
//Creates a new array with all elements that pass the test implemented by the provided function.

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = nums.filter(n => {
    return n % 2 === 1; //our callback returns true or false. If it returns true, n is added to the filtered array
}) //return [9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5); //return [4, 3, 2, 1]


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


const higherRated = movies.filter(movie => {
    return movie.score > 80
})

//shorter syntax
const higherRated = movies.filter(m => m.score > 80)

const lowerRated = movies.filter(m => m.score < 80)

const recentMovies = movie.filter(m => m.year > 2000)


//can use map and filter together
const higherRated = movies.filter(m => m.score > 80)
const goodTitles = higherRated.map(m => m.title)

//combined into one line

movies.filter(m => m.score > 80).map(m => m.title);


//Coding Exercise 49: Filter exercise
function validUserNames(arr) {
    return arr.filter(item => item.length < 10)
}

//refactored
const validUserNames = (arr) => { return arr.filter(item => item.length < 10) }