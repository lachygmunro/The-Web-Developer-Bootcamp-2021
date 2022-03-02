const h1 = document.querySelector("h1")
const btn = document.querySelector("button")

btn.addEventListener('click', () => {
  const rgb = randomColour()
  document.body.style.backgroundColor = rgb;
  h1.innerText = `${rgb}`
})

const randomColour = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`
}
