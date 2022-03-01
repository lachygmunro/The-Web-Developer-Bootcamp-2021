
//onclick and onmouseenter
const btn = document.querySelector('#v2');

btn.onclick = function(){ //onclick
  console.log("You clicked me!")
  console.log("I hope this worked!")
}


function scream(){
  console.log("Ahhhhhhhhh")
  console.log("Stop touching me!")
}

btn.onmouseenter = scream; //onmouseenter and running function.


document.querySelector('h1').onclick = () => { //can attach to any elements. Not limited to btns.
  alert('You clicked the h1!')
}


//addEventListener - generic event listener. Most commonly used.
const button = document.querySelector('h1');

button.addEventListener('click', () => {
  alert("You clicked me!!")
})


const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', () => {
  alert("Clicked!")
})


//Coding Exercise 60: Click events exercise
const hello = document.querySelector('#hello');
const goodbye = document.querySelector('#goodbye');

hello.addEventListener('click', () => {
    console.log("hello")
});

goodbye.addEventListener('click', () => {
    console.log("goodbye")
});
