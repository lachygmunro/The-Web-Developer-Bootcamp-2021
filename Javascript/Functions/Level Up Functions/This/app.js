//'THIS' in methods
//use the keyword this to access other properties on the same object

const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullName() {
        return `${this.first} ${this.last}`
    }
}

person.fullName(); //Robert Herjavec
person.last = "Plant";
person.fullName(); //Robert Plant



const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says Meow!`)
    }
}

//The value of 'this' depends on the invocation context of the function it is used in.
//It depends on how we call the function.


cat.meow() // this refers to cat object and will print Blue Steele says Meow! Referring to the left (cat)
const meow2 = cat.meow,
    meow2(); // will only print 'says Meow!'


//Coding exercise 46: Egg laying exercise
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1
        return "EGG"
    }
}


