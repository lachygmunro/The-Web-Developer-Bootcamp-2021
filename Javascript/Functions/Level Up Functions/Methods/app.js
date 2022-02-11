//METHODS
//can add functions as properties on objects. we call them methods

const myMath = {
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    square: function (x) {
        return x * x;
    },
    PI: 3.14159
};

myMath.multiply(10, 2);
myMath.divide(10, 5);

//Shorthand

const myMath = {
    blah: 'Hi!',
    add(x, y) {
        return x + y;
    },
    multiply(x, y) {
        return x * y;
    }
}

myMath.add(10, 20);

//Coding exercise 45: Methods exercise
const square = {
    area(x) {
        return x * x;
    },
    perimeter(x) {
        return x * 4;
    }
}