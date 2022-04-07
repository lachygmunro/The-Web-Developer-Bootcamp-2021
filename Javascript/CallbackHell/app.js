
// setTimeout(() => { //nesting option
//   document.body.style.backgroundColor = red;
//   setTimeout(() => {
//     document.body.style.backgroundColor = orange;
//     setTimeout(() => {
//       document.body.style.backgroundColor = yellow;
//       setTimeout(() => {
//         document.body.style.backgroundColor = green;
//         setTimeout(() => {
//           document.body.style.backgroundColor = blue;
//           setTimeout(() => {
//             document.body.style.backgroundColor = red;
//           }, 1000)
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)



const delayedColorChange = (newColor, delay, doNext) => { //function option
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay)
}

delayedColorChange('red', 1000, () => { //nesting call
  delayedColorChange('orange', 1000, () => {
    delayedColorChange('yellow', 1000, () => {
      delayedColorChange('green', 1000, () => {
        delayedColorChange('blue', 1000, () => {

        })
      })
    })
  })
});
