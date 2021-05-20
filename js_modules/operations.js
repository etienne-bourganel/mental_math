// All exports and exports
export { oneQuestionLevel0, feedback, round }
import { userInputNmr, round, incrementScore1 } from "../main.js"
import { updateBubble, displayAddition } from "./display.js"

// All basic operations
const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

// Declaration of main variables
let result

// Generation of random integers
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Level 0 Additions
const oneQuestionLevel0 = () => {
  const a = randomInteger(1, 20)
  const b = randomInteger(1, 20)
  result = add(a, b)
  displayAddition(a, b)
}

// Update score and progress bubble depending on user input
const feedback = () => {
  if (result == userInputNmr) {
    incrementScore1()
    updateBubble(round, 1)
  } else {
    updateBubble(round, 0)
  }
}
