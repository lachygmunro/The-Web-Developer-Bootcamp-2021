//REST

function sumAll(...nums) { //using rest will pick up all of the numbers, not just the first.
    let total = 0;
    for (let n of nums) total += n;
    return total;
}

sumAll(1, 2); //3
sumAll(1, 2, 3, 4, 5); //15