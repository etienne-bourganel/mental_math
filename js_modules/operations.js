export { level0 }

// All basic operations
const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

// Generation of random integers
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const question = document.querySelector("#question")

// Level 0 Additions
const level0 = () => {
  const a = randomInteger(1, 20)
  const b = randomInteger(1, 20)
  const result = add(a, b)
  question.innerHTML = `${a} + ${b} ?`
}