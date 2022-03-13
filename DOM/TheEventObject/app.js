document.querySelector('button').addEventListener('click', function(evt) {
  console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function() =>{
//   console.log('Key down!')
// })

// input.addEventListener('keyup', function() =>{
//   console.log('Key up!')
// })

// input.addEventListener('keydown', function(e) => {
//   console.log(e.key)
//   console.log(e.code)
// })

window.addEventListener('keydown', function (e) {
  switch(e.code){
    case 'ArrowUp':
      console.log("Up!");
    case 'ArrowDown':
      console.log("Down!");
    case 'ArrowLeft':
      console.log("Left!");
    case 'ArrowRight':
      console.log("Right");
      break;
    default:
      console.log("Ignored!")
  }
})
