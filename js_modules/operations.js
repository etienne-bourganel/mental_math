// All exports and exports
export { oneQuestion, feedback, round }
import { userInputNmr, round, incrementScore1 } from "../main.js"
import { updateBubble, displayAddition, displayStart } from "./display.js"

// All basic operations
const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

const operations = [add, sub, mul, div]
const displayOperations = [displayAddition]

// Declaration of main variables
let result

// Generate random integer
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Provide random numbers depending on level
const randomNumbersArr = (level) => {
  switch (level) {
    case 0:
      return [randomInteger(1, 9), randomInteger(1, 9)]
  }
}

// Return an operation based on level
const randomOperation = (level) => {
  const opsIndex = randomInteger(0, level)
  return operations[opsIndex]
}

// Generate and display an operation based on level
const oneQuestion = (level) => {
  const a = randomNumbersArr(level)[0]
  const b = randomNumbersArr(level)[1]
  result = randomOperation(level)(a, b)
  displayOperations[level](a, b)
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
