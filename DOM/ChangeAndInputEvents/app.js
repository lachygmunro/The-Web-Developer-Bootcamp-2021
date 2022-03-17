const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) { //only once user clicks out of input
//   console.log("Bingo Bango")
// })

input.addEventListener('input', function (e) { //when user types
  h1.innerText = input.value
})


//Coding Exercise 62: Input Event Practice
// const input = document.querySelector("input");
// const h1 = document.querySelector("h1");

// input.addEventListener('input', function (e) {
//     if (!input.value) {
//             h1.innerText = "Enter Your Username";
//     } else {
//            h1.innerText = `Welcome, ${input.value}`
//     }
// })
