// All imports
import {
  feedback,
  oneQuestionLevel0,
  resetScore,
  score,
} from "./js_modules/operations.js"

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
  timerOff,
  updateDisplayUserInput,
  updateTimer,
} from "./js_modules/display.js"

// All exports
export { userInputNmr, round, startTime }

// Declare and initialize main variables

let round = 0
let gameStarted = 0
let setEnded = 0
let startTime = 20

// Prepare the timer
timerOff()
updateTimer(startTime)

// Display instructions to start game
displayStart()

// Declare DOM elements
const enter = document.getElementById("enter")
const clear = document.getElementById("clear")

// Declare user input values
let userInputArr = []
let userInputNmr

// Start the game when ENTER is pressed
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
    stopTimer()
    setEnded = 1
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
}

// Returns true if game shoud continue
const continueGame = () => {
  if (round < 10 && score < 10 && timerIsOn) {
    return true
  }
}

// Returns true if game should end
const endGame = () => {
  if (round == 10 || !timerIsOn) {
    return true
  }
}

// Set condition for winning the game
const playerWins = () => {
  if (score == 10 && timerIsOn) {
    return 1
  }
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

// eventListener to avoid double tap to trigger zoom on mobile
enter.addEventListener("click", (e) => {
  e.preventDefault()
})
clear.addEventListener("click", (e) => {
  e.preventDefault()
})
