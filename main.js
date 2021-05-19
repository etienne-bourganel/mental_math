// All imports
import {
  feedback,
  oneQuestionLevel0,
  score,
  resetScore,
} from "./js_modules/operations.js"
import {
  myTimer,
  timerOff,
  updateTimer,
  timerStatus,
  resetTimer,
} from "./js_modules/timer.js"

// All exports
export { displayInfo, userInputNmr, round, gameOver }

// Declare and initialize main variables
let timeLeft = 20
let round = 0

// Prepare the timer
timerOff()
updateTimer(timeLeft)

// Declare DOM elements
const displayInfo = document.getElementById("displayInfo")
const enter = document.getElementById("enter")
const displayUserInput = document.getElementById("displayUserInput")
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
      displayInfo.innerHTML = "Victory!"
      return
    }
    if (continueGame) {
      round += 1
      clearInput()
      oneQuestionLevel0()
    } else {
      gameOver()
      resetGame()
    }
  }
})

const title = document.getElementById("titleInfo")
title.addEventListener("click", () => {
  clearBubbles()
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

const gameOver = () => {
  displayInfo.innerHTML = "Press ENTER to start"
  displayUserInput.innerHTML = "Game over."
  return
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
    updateDisplayUserInput()
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

// Update display for user input
const updateDisplayUserInput = () => {
  displayUserInput.innerHTML = userInputNmr
}

// Set the user input to "0" and update the display
const clearInput = () => {
  userInputArr = []
  userInputNmr = 0
  updateDisplayUserInput()
}

// Remove all classes for each progress bubble
const clearBubbles = () => {
  const bubbles = document.querySelectorAll(".progress-bubble")
  bubbles.forEach((bubble) => {
    bubble.classList.remove("bubble-correct")
    bubble.classList.remove("bubble-incorrect")
  })
}
