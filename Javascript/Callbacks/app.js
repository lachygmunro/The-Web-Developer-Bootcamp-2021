console.log("Sending request to the server!") //first
setTimeout(() => {
  console.log("Here is your data from the server...") //handed to browser, third
}, 3000)
console.log("I AM AT THE END OF THE FILE!") //second
