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
    case 0: // Only addition
      return createPair(1, 9, 1, 9)

    case 1: // Addition and substraction
      switch (operation) {
        case sub:
          return sortDescending(createPair(1, 19, 1, 19))
        default:
          return createPair(1, 49, 1, 49)
      }

    case 2: // Addition, substraction and multiplication
      switch (operation) {
        case sub:
          return sortDescending(createPair(1, 49, 1, 49))
        case mul:
          return createPair(1, 9, 1, 9)
        default:
          return createPair(1, 49, 1, 49)
      }

    case 3: // Addition, substraction and multiplication
      switch (operation) {
        case sub:
          return sortDescending(createPair(1, 49, 1, 49))
        case mul:
          return createPair(1, 15, 1, 15)
        default:
          return createPair(1, 49, 1, 99)
      }

    case 4: // Addition, substraction and multiplication
      switch (operation) {
        case sub:
          return sortDescending(createPair(1, 99, 1, 99))
        case mul:
          return createPair(1, 15, 1, 15)
        default:
          return createPair(1, 99, 1, 99)
      }
  }
}

// Create a pair of random ints based on min and max values
const createPair = (min1, max1, min2, max2) => {
  return [randomInteger(min1, max1), randomInteger(min2, max2)]
}

// Sorting an array in descending order
const sortDescending = (array) => {
  return array.sort((a, b) => b - a)
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
