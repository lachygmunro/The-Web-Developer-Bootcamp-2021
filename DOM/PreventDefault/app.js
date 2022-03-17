const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName")
const list = document.querySelector("#list")

form.addEventListener("submit", function (e){
  e.preventDefault(); //disable default functionality
  const catName = input.value;
  const newLI = document.createElement("LI");
  newLI.innerText = catName;
  list.append(newLI)
  input.value = "";
})


//Coding Exercise 61: Form Events Exercise
const form = document.querySelector('form');
const quant = document.querySelector('#qty')
const prod = document.querySelector('#product')
const list = document.querySelector('#list')

form.addEventListener("submit", function (e){
    e.preventDefault();
    const quantity = quant.value
    const product = prod.value
    const newLI = document.createElement("LI");
    newLI.innerText = `${quantity} ${product}`
    list.appendChild(newLI)
    quant.value = "";
    prod.value = "";
})
