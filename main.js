// All imports
import {
  feedback,
  oneQuestionLevel0,
  score,
  resetScore,
} from "./js_modules/operations.js"
import { myTimer, timerStatus, resetTimer } from "./js_modules/timer.js"
import {
  timerOff,
  updateTimer,
  displayGameOver,
  displayVictory,
  updateDisplayUserInput,
} from "./js_modules/display.js"

// All exports
export { userInputNmr, round }

// Declare and initialize main variables
let timeLeft = 20
let round = 0

// Prepare the timer
timerOff()
updateTimer(timeLeft)

// Declare DOM elements
const enter = document.getElementById("enter")
const clear = document.getElementById("clear")

// Declare user input values
let userInputArr = []
let userInputNmr

// Define what the ENTER touch does
enter.addEventListener("click", () => {
  if (timerStatus == 0) {
    startGame()
  } else {
    feedback()
    if (playerWins()) {
      displayVictory()
      return
    }
    if (continueGame) {
      round += 1
      clearInput()
      oneQuestionLevel0()
    } else {
      displayGameOver()
      resetGame()
    }
  }
})

//
const resetGame = () => {
  clearBubbles()
  clearInput()
  resetScore()
  resetRound()
  resetTimer()
}

// Reset the round number
const resetRound = () => {
  round = 0
}

// Returns true if game shoud continue
const continueGame = () => {
  if (round < 10 && timerStatus) {
    return true
  }
}

// Set condition for winning the game
const playerWins = () => {
  if (score == 10 && timerStatus) {
    return 1
  }
}

// Start the timer and trigger the first question
const startGame = () => {
  myTimer(timeLeft)
  oneQuestionLevel0()
}

// eventListener to avoid double tap to trigger zoom on mobile
enter.addEventListener("click", (e) => {
  e.preventDefault()
})
clear.addEventListener("click", (e) => {
  e.preventDefault()
})

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

// Set the user input to "0" and update the display
const clearInput = () => {
  userInputArr = []
  userInputNmr = 0
  updateDisplayUserInput(userInputNmr)
}

// Remove all classes for each progress bubble
const clearBubbles = () => {
  const bubbles = document.querySelectorAll(".progress-bubble")
  bubbles.forEach((bubble) => {
    bubble.classList.remove("bubble-correct")
    bubble.classList.remove("bubble-incorrect")
  })
}
