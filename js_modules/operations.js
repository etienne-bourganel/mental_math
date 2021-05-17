export { level0, feedback }
import { displayInfo, userInputNmr } from "../main.js"

// All basic operations
const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

let result

// Generation of random integers
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Level 0 Additions
const level0 = () => {
  const a = randomInteger(1, 20)
  const b = randomInteger(1, 20)
  displayInfo.innerHTML = `${a} + ${b} ?`
  result = add(a, b)
}

const feedback = () => {
  if (result == userInputNmr) {
    return 1
  } else {
    return 0
  }
}
