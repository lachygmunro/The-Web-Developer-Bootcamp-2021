const button = document.querySelector('#changeColour');
const container = document.querySelector('#container');


button.addEventListener('click', function (e) {
  container.getElementsByClassName.backgroundColor = makeRandColor();
  e.stopPropagation(); //stops event bubbling occuring
})

container.addEventListener('click', function () {
  container.classList.toggle('hide'); //toggle hide class style
})


const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
