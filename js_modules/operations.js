export { oneQuestionLevel0, feedback, round, score }
import { displayInfo, userInputNmr, round } from "../main.js"

// All basic operations
const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

let result
let score = 0

// Generation of random integers
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Level 0 Additions
const oneQuestionLevel0 = () => {
  const a = randomInteger(1, 20)
  const b = randomInteger(1, 20)
  displayInfo.innerHTML = `${a} + ${b} ?`
  result = add(a, b)
}

const feedback = () => {
  if (result == userInputNmr) {
    score += 1
    console.log(score)
    updateBubble(round, 1)
  } else {
    updateBubble(round, 0)
  }
}

// Update progress bubble
const updateBubble = (i, feedback) => {
  const bubble = document.getElementById(`b${i}`)
  if (feedback) {
    bubble.classList.add("bubble-correct")
  } else {
    bubble.classList.add("bubble-incorrect")
  }
}

const resetScore = () => {
  score = 0
}
