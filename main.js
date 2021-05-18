// All imports
import { level0, feedback } from "./js_modules/operations.js"
import { myTimer, timer, timerOff } from "./js_modules/timer.js"

// All exports
export { displayInfo, userInputNmr }

// Declare and initialize main variables
let timeLeft = 11
let timerStatus = 0
let score = 0
let round = 0

// Prepare the timer
timerOff()
timer.innerHTML = timeLeft.toFixed(1)

// Declare DOM elements
const displayInfo = document.getElementById("displayInfo")
const enter = document.getElementById("enter")
const displayUserInput = document.getElementById("displayUserInput")
const clear = document.getElementById("clear")

// Update progress bubble
const updateBubble = (i, feedback) => {
  const bubble = document.getElementById(`b${i}`)
  if (feedback) {
    bubble.classList.add("bubble-correct")
  } else {
    bubble.classList.add("bubble-incorrect")
  }
}

// Declare user input values
let userInputArr = []
let userInputNmr

// Launch timer and display message when Enter is pressed
enter.addEventListener("click", () => {
  if (timerStatus == 0) {
    myTimer(timeLeft)
    timerStatus = 1
    level0()
  } else {
    if (round <= 9) {
      if (feedback()) {
        score += 1
        updateBubble(round, 1)
      } else {
        updateBubble(round, 0)
      }
      clearInput()
      level0()
      round += 1
    }
  }
})

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
