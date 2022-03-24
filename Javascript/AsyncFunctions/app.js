// async function hello() {

// }

const sing = async () => {
  throw new Error("UH OH!")
  return "LA LA LA"
}

sing()
    .then(data => {
      console.log("Promise resolved with:", data)
    })
    .catch(err => {
      console.log("Oh no, Promise rejected!")
      console.log(err)
    })
