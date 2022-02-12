//setTimeout

console.log("Hello!") //runs first.
setTimeout(() => {
    console.log("Are you still there?") //runs third after three seconds.
}, 3000)

console.log("Goodbye!") // runs second.



//setInterval

const id = setInterval(() => { //generates id each time which can be save to variable
    console.log(Math.random()) //calls function every 2 seconds.
}, 2000);


clearInterval(id); //to stop function running.