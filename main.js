// All imports
import { feedback, oneQuestion } from "./js_modules/operations.js"

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
  switchTheme,
  showScore,
  stopEnterBlink,
  timerOnStyle,
  updateDisplayUserInput,
  updateLevel,
} from "./js_modules/display.js"

// All exports
export { incrementScore1, userInputNmr, round, startTime, stopGame }

// Declare and initialize main variables
let gameStarted = 0
let level = 0
let round = 0
let score = 0
let setEnded = 0
let startTime = 20
let switchStatus = false

// Declare DOM elements
const enter = document.getElementById("enter")
const clear = document.getElementById("clear")
const nightMode = document.getElementById("nightmode")

// Declare user input values
let userInputArr = []
let userInputDigit
let userInputNmr

// Switch nightmode theme on nightmode div click
nightMode.addEventListener("click", () => {
  switchTheme(switchStatus)
  switchStatus = !switchStatus
})

// Define the different actions triggered when ENTER is pressed
enter.addEventListener("click", () => {
  manageEnter()
})

// All actions triggered by pressing ENTER
const manageEnter = () => {
  if (!gameStarted) {
    startGame()
  } else if (setEnded) {
    proposeNewSet()
  } else {
    feedback()
    oneRound()
  }
}

// Start the timer and trigger the first question
const startGame = () => {
  updateLevel(level)
  stopEnterBlink()
  gameStarted = 1
  myTimer()
  oneRound()
}

// One round with control for winning/losing situations
const oneRound = () => {
  clearInput()
  if (continueGame()) {
    oneQuestion(level)
    round += 1
  } else {
    stopGame()
  }
}

// Propose a new set
const proposeNewSet = () => {
  displayStart(level)
  resetGame()
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
  stopTimer()
  setEnded = 1
  endGameInfo()
}

// Update end of game info
const endGameInfo = () => {
  enableEnterBlink()
  showScore(score)
  if (playerWins()) {
    displayVictory()
    if (level < 4) {
      level += 1
      startTime += 5
    }
  } else {
    displayGameOver()
  }
}

// Update user input for every number pressed and display it
const touches = document.querySelectorAll(".number")
touches.forEach((touch) => {
  touch.addEventListener("click", (e) => {
    userInputDigit = e.target.dataset.value
    inputDigit()
  })
  // eventListener to avoid double tap to trigger zoom on mobile
  touch.addEventListener("click", (e) => {
    e.preventDefault()
  })
})

// Add the chosen digit to the user input and display it
const inputDigit = () => {
  updateUserInput(Number(userInputDigit))
  updateDisplayUserInput(userInputNmr)
}

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
  resetScore()
  resetRound()
  resetTimer(startTime)
  timerOnStyle()
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

// Add keyboards support for input
const inputKey = (e) => {
  if (e.keyCode == 13) {
    manageEnter()
  }
  if (e.keyCode == 8 || e.keyCode == 12) {
    clearInput()
  }
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if (key) {
    const value = key.dataset.value
    if (value == "enter") {
      return manageEnter()
    } else if (value == "clear") {
      return clearInput()
    } else {
      userInputDigit = value
      inputDigit()
      return
    }
  }
}

// Prepare the styles and info at game start
resetGame()
displayStart(level)
window.addEventListener("keydown", inputKey)
