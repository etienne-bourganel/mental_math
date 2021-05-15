// All imports
import { level0 } from "./js_modules/operations.js"
import { myTimer, timer, timerOff } from "./js_modules/timer.js"

// Declaration and initialization of main variables
let timeLeft = 4

// Prepare the timer
timerOff()
timer.innerHTML = timeLeft.toFixed(2)

// Reads the value of the input userAnswer when the Return key is up
document.addEventListener("keyup", (e) => {
  if (e.key === " ") {
    myTimer(timeLeft)
  }
})

// Declarations of DOM elements
const displayInfo = document.getElementById("displayInfo")
const enter = document.getElementById("enter")
const displayUserInput = document.getElementById("displayUserInput")
const clear = document.getElementById("clear")

// Declarations of user input values
let userInputArr = []
let userInputNmr

// Launch timer and display message when Enter is pressed
enter.addEventListener("touchstart", () => {
  myTimer(timeLeft)
  displayInfo.innerHTML = "OK let's go!"
})

// Update user input for every number pressed and display it
const touches = document.querySelectorAll(".number")
touches.forEach((touch) => {
  touch.addEventListener("touchstart", () => {
    const userInputDigit = touch.innerHTML
    updateUserInput(Number(userInputDigit))
    updateDisplayUserInput()
  })
})

// Reset the user input to 0 and display it
clear.addEventListener("touchstart", () => {
  userInputArr = []
  userInputNmr = 0
  updateDisplayUserInput()
})

// Update user input
const updateUserInput = (value) => {
  userInputArr.push(value)
  userInputNmr = Number(userInputArr.join(""))
}

// Update display for user input
const updateDisplayUserInput = () => {
  displayUserInput.innerHTML = userInputNmr
}
