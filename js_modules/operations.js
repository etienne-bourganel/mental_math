export { oneQuestion, feedback, round }
import { userInputNmr, round, incrementScore1 } from "../main.js"
import {
  displayAddition,
  displayMultiplication,
  displaySubstraction,
  updateBubble,
} from "./display.js"

let result

const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

const operations = [add, sub, mul, div]

const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomNumbersArr = (operation, level) => {
  switch (level) {
    case 0:
      return createPair(1, 9, 1, 9)

    case 1:
      switch (operation) {
        case sub:
          return sortDescending(createPair(1, 19, 1, 19))
        default:
          return createPair(1, 49, 1, 49)
      }

    case 2:
      switch (operation) {
        case sub:
          return sortDescending(createPair(1, 49, 1, 49))
        case mul:
          return createPair(1, 9, 1, 9)
        default:
          return createPair(1, 49, 1, 49)
      }

    case 3:
      switch (operation) {
        case sub:
          return sortDescending(createPair(1, 49, 1, 49))
        case mul:
          return createPair(1, 15, 1, 15)
        default:
          return createPair(1, 49, 1, 99)
      }

    case 4:
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

const createPair = (min1, max1, min2, max2) => {
  return shuffleArray([randomInteger(min1, max1), randomInteger(min2, max2)])
}

const sortDescending = (array) => {
  return array.sort((a, b) => b - a)
}

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

const randomOperation = (maxIndex) => {
  const opsIndex = randomInteger(0, maxIndex)
  return operations[opsIndex]
}

const oneOperation = (level) => {
  let operation = 0
  switch (level) {
    case 0:
      operation = randomOperation(0)
      break
    case 1:
      operation = randomOperation(1)
      break
    case 2:
      operation = randomOperation(2)
      break
    case 3:
      operation = randomOperation(2)
      break
    case 4:
      operation = randomOperation(2)
      break
  }
  return operation
}

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

const oneQuestion = (level) => {
  const operation = oneOperation(level)
  const [a, b] = randomNumbersArr(operation, level)
  result = operation(a, b)
  displayOperations(operation, a, b)
}

const feedback = () => {
  if (result === userInputNmr) {
    incrementScore1()
    updateBubble(round, 1)
  } else {
    updateBubble(round, 0)
  }
}
