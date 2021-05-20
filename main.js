// All imports
import { feedback, oneQuestionLevel0 } from "./js_modules/operations.js"

import {
  myTimer,
  resetTimer,
  timerIsOn,
  stopTimer,
} from "./js_modules/timer.js"

import {
  clearBubbles,
  displayGameOver,
  displayStart,
  displayVictory,
  enableEnterBlink,
  showScore,
  stopEnterBlink,
  timerOnStyle,
  updateDisplayUserInput,
  updateTimer,
} from "./js_modules/display.js"

// All exports
export { incrementScore1, userInputNmr, round, startTime, stopGame }

// Declare and initialize main variables
let round = 0
let score = 0
let gameStarted = 0
let setEnded = 0
let startTime = 20

// Prepare the timer
timerOnStyle()
updateTimer(startTime)

// Display instructions to start game
displayStart()
enableEnterBlink()

// Declare DOM elements
const enter = document.getElementById("enter")
const clear = document.getElementById("clear")

// Declare user input values
let userInputArr = []
let userInputNmr

// Define the different actions triggered when ENTER is pressed
enter.addEventListener("click", () => {
  if (!gameStarted) {
    startGame()
  } else if (setEnded) {
    proposeNewSet()
  } else {
    feedback()
    oneRound()
  }
})

// Start the timer and trigger the first question
const startGame = () => {
  stopEnterBlink()
  gameStarted = 1
  myTimer()
  oneRound()
}

// One round with control for winning/losing situations
const oneRound = () => {
  clearInput()
  if (continueGame()) {
    oneQuestionLevel0()
    round += 1
  } else {
    stopGame()
    if (playerWins()) {
      displayVictory()
    } else {
      displayGameOver()
    }
  }
}

// Propose a new set
const proposeNewSet = () => {
  displayStart()
  resetGame()
  enableEnterBlink()
}

// Returns true if game shoud continue
const continueGame = () => {
  if (round < 10 && score < 10 && timerIsOn) {
    return true
  }
}

// Set condition for winning the game
const playerWins = () => {
  if (score == 10 && timerIsOn) {
    return 1
  }
}

// Stop the game
const stopGame = () => {
  enableEnterBlink()
  stopTimer()
  setEnded = 1
  showScore(score)
}

// Update user input for every number pressed and display it
const touches = document.querySelectorAll(".number")
touches.forEach((touch) => {
  touch.addEventListener("click", () => {
    const userInputDigit = touch.innerHTML
    updateUserInput(Number(userInputDigit))
    updateDisplayUserInput(userInputNmr)
  })
  // eventListener to avoid double tap to trigger zoom on mobile
  touch.addEventListener("click", (e) => {
    e.preventDefault()
  })
})

// Reset the user input to 0 and display it
clear.addEventListener("click", () => {
  clearInput()
})

// Update user input
const updateUserInput = (value) => {
  if (userInputArr.length <= 5) {
    userInputArr.push(value)
    userInputNmr = Number(userInputArr.join(""))
  }
}

// Reset game variables and styles
const resetGame = () => {
  setEnded = 0
  gameStarted = 0
  clearBubbles()
  clearInput()
  resetScore()
  resetRound()
  resetTimer(startTime)
}

// Reset the round number
const resetRound = () => {
  round = 0
}

// Set the user input to "0" and update the display
const clearInput = () => {
  userInputArr = []
  userInputNmr = 0
  updateDisplayUserInput(userInputNmr)
}

// Increment the score of 1 point
const incrementScore1 = () => {
  score += 1
}

// Det the score to 0
const resetScore = () => {
  score = 0
}

// eventListener to avoid double tap to trigger zoom on mobile
enter.addEventListener("click", (e) => {
  e.preventDefault()
})
clear.addEventListener("click", (e) => {
  e.preventDefault()
})
