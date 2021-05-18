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
      return
    }
    if (continueGame) {
      round += 1
      clearInput()
      oneQuestionLevel0()
    } else {
      gameOver()
    }
  }
})

const continueGame = () => {
  if (round < 10 && timerStatus) {
    return true
  }
}

const playerWins = () => {
  if (score == 10 && timerStatus) {
    displayInfo.innerHTML = "Victory!"
    return 1
  }
}

const gameOver = () => {
  displayInfo.innerHTML = "Press ENTER to start"
  displayUserInput.innerHTML = "Game over."
  round = 0
  resetScore()
  return
}

const startGame = () => {
  myTimer(timeLeft)
  oneQuestionLevel0()
}

// eventListener to avoid double tap to trigger zoom on mobile
enter.addEventListener("click", (e) => {
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
  touch.addEventListener("click", (e) => {
    // eventListener to avoid double tap to trigger zoom on mobile
    e.preventDefault()
  })
})

// Reset the user input to 0 and display it
clear.addEventListener("click", () => {
  clearInput()
})

// eventListener to avoid double tap to trigger zoom on mobile
clear.addEventListener("click", (e) => {
  e.preventDefault()
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

const clearInput = () => {
  userInputArr = []
  userInputNmr = 0
  updateDisplayUserInput()
}
