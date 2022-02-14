//Arrow functions behave different within objects.
//This with a normal function within an object.
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}



//This with an arrow function. Reference Window object. Does not work as expected.
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: () => {
        return `${this.firstName} ${this.lastName}` //undefined undefined
    }
}
