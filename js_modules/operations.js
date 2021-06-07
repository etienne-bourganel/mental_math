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
  let interval1 = {}
  let interval2 = {}

  switch (level) {
    case 0:
      interval1 = { min: 1, max: 9 }
      return createPair(interval1, interval1)

    case 1:
      switch (operation) {
        case sub:
          interval1 = { min: 1, max: 19 }
          return sortDescending(createPair(interval1, interval1))
        default:
          interval1 = { min: 1, max: 49 }
          return createPair(interval1, interval1)
      }

    case 2:
      switch (operation) {
        case sub:
          interval1 = { min: 1, max: 49 }
          return sortDescending(createPair(interval1, interval1))
        case mul:
          interval1 = { min: 1, max: 9 }
          return createPair(interval1, interval1)
        default:
          interval1 = { min: 1, max: 49 }
          return createPair(interval1, interval1)
      }

    case 3:
      switch (operation) {
        case sub:
          interval1 = { min: 1, max: 49 }
          return sortDescending(createPair(interval, interval))
        case mul:
          interval1 = { min: 1, max: 9 }
          interval2 = { min: 1, max: 15 }
          return createPair(interval, interval)
        default:
          interval1 = { min: 1, max: 49 }
          interval2 = { min: 1, max: 99 }
          return createPair(interval1, interval2)
      }

    case 4:
      switch (operation) {
        case sub:
          interval1 = { min: 1, max: 99 }
          return sortDescending(createPair(interval1, interval1))
        case mul:
          interval1 = { min: 1, max: 15 }
          return createPair(interval1, interval1)
        default:
          interval1 = { min: 1, max: 99 }
          return createPair(interval1, interval1)
      }
  }
}

const createPair = (interval1, interval2) => {
  return shuffleArray([
    randomInteger(interval1.min, interval1.max),
    randomInteger(interval2.min, interval2.max),
  ])
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
