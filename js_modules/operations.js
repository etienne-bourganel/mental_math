// All exports and exports
export { oneQuestion, feedback, round }
import { userInputNmr, round, incrementScore1 } from "../main.js"
import {
  updateBubble,
  displayAddition,
  displayMultiplication,
  displaySubstraction,
} from "./display.js"

// All basic operations
const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

const operations = [add, sub, mul, div]

// Declaration of main variables
let result

// Generate random integer
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Provide random numbers depending on level
const randomNumbersArr = (operation, level) => {
  switch (level) {
    case 0:
      return [randomInteger(1, 9), randomInteger(1, 9)]

    case 1:
      if (operation == sub) {
        return [randomInteger(1, 9), randomInteger(1, 9)].sort((a, b) => b - a)
      } else {
        return [randomInteger(1, 9), randomInteger(1, 9)]
      }
    case 2:
      if (operation == sub) {
        return [randomInteger(1, 9), randomInteger(1, 9)].sort((a, b) => b - a)
      } else {
        return [randomInteger(1, 9), randomInteger(1, 9)]
      }
    case 3:
      if (operation == sub) {
        return [randomInteger(9, 19), randomInteger(9, 19)].sort(
          (a, b) => b - a
        )
      } else if (operation == mul) {
        return [randomInteger(9, 19), randomInteger(1, 9)]
      } else return [randomInteger(9, 19), randomInteger(9, 19)]
    case 4:
      if (operation == sub) {
        return [randomInteger(9, 49), randomInteger(9, 49)].sort(
          (a, b) => b - a
        )
      } else if (operation == mul) {
        return [randomInteger(9, 19), randomInteger(1, 9)]
      } else return [randomInteger(9, 49), randomInteger(9, 49)]
  }
}

// Return a random operation based on the maximum given index for operations[]
const randomOperation = (maxIndex) => {
  const opsIndex = randomInteger(0, maxIndex)
  return operations[opsIndex]
}

// Return a semi-random operation based on given level
const oneOperation = (level) => {
  let operation = 0
  switch (level) {
    case 0:
      operation = randomOperation(0) // Addition only
      break
    case 1:
      operation = randomOperation(1) // Addition and substraction
      break
    case 2:
      operation = randomOperation(2) // Addition, substraction and multiplication
      break
    case 3:
      operation = randomOperation(2) // Addition, substraction and multiplication
      break
    case 4:
      operation = randomOperation(2) // Addition, substraction and multiplication
      break
  }
  return operation
}

// Display the selected operations and arguments
const displayOperations = (operation, a, b) => {
  switch (operation) {
    case add:
      displayAddition(a, b)
      break
    case sub:
      displaySubstraction(a, b)
      break
    case mul:
      displayMultiplication(a, b)
      break
  }
}

// Generate and display an operation based on level
const oneQuestion = (level) => {
  const operation = oneOperation(level)
  const randomNumbersPair = randomNumbersArr(operation, level)
  const a = randomNumbersPair[0]
  const b = randomNumbersPair[1]
  result = operation(a, b)
  displayOperations(operation, a, b)
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
