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

const createIntervals = (operation, level) => {
  switch (level) {
    case 0:
      return [
        { min: 1, max: 9 },
        { min: 1, max: 9 },
      ]

    case 1:
      switch (operation) {
        case sub:
          return [
            { min: 1, max: 19 },
            { min: 1, max: 19 },
          ]
        default:
          return [
            { min: 11, max: 49 },
            { min: 11, max: 49 },
          ]
      }

    case 2:
      switch (operation) {
        case mul:
          return [
            { min: 2, max: 9 },
            { min: 2, max: 9 },
          ]
        default:
          return [
            { min: 11, max: 49 },
            { min: 11, max: 49 },
          ]
      }

    case 3:
      switch (operation) {
        case sub:
          return [
            { min: 11, max: 49 },
            { min: 11, max: 49 },
          ]
        case mul:
          return [
            { min: 3, max: 9 },
            { min: 9, max: 15 },
          ]
        default:
          return [
            { min: 11, max: 99 },
            { min: 11, max: 99 },
          ]
      }

    case 4:
      switch (operation) {
        case mul:
          return [
            { min: 3, max: 15 },
            { min: 3, max: 15 },
          ]
        default:
          return [
            { min: 11, max: 99 },
            { min: 11, max: 99 },
          ]
      }
  }
}

const createPairfromIntervals = (intervals) => {
  return [
    randomInteger(intervals[0].min, intervals[0].max),
    randomInteger(intervals[1].min, intervals[1].max),
  ]
}

const adaptPairToOperation = (operation, pair) => {
  const adaptedPair =
    operation === sub ? sortDescending(pair) : shuffleArray(pair)
  return adaptedPair
}

const generateCorrectPair = (operation, level) => {
  const intervals = createIntervals(operation, level)
  const pair = createPairfromIntervals(intervals)
  return adaptPairToOperation(operation, pair)
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
  switch (level) {
    case 0:
      return randomOperation(0)
    case 1:
      return randomOperation(1)
    case 2:
      return randomOperation(2)
    case 3:
      return randomOperation(2)
    case 4:
      return randomOperation(2)
  }
}

const displayOperations = (operation, a, b) => {
  switch (operation) {
    case add:
      return displayAddition(a, b)
    case sub:
      return displaySubstraction(a, b)
    case mul:
      return displayMultiplication(a, b)
  }
}

const oneQuestion = (level) => {
  const operation = oneOperation(level)
  const [a, b] = generateCorrectPair(operation, level)
  result = operation(a, b)
  displayOperations(operation, a, b)
}

const feedback = () => {
  result === userInputNmr
    ? (incrementScore1(), updateBubble(round, 1))
    : updateBubble(round, 0)
}
