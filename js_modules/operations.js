export { oneQuestion, feedback, round }
import { userInputNmr, round, incrementScore1 } from "../main.js"
import {
  updateBubble,
  displayAddition,
  displayMultiplication,
  displaySubstraction,
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
  return randomizePair([randomInteger(min1, max1), randomInteger(min2, max2)])
}

const sortDescending = (array) => {
  return array.sort((a, b) => b - a)
}

const randomizePair = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
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
  const randomNumbersPair = randomNumbersArr(operation, level)
  const a = randomNumbersPair[0]
  const b = randomNumbersPair[1]
  result = operation(a, b)
  displayOperations(operation, a, b)
}

const feedback = () => {
  if (result == userInputNmr) {
    incrementScore1()
    updateBubble(round, 1)
  } else {
    updateBubble(round, 0)
  }
}
