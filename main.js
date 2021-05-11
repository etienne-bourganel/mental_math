// All imports
import { level0 } from "./operations.js"
import { startTimer, timer, timerOff } from "./timer.js"

// Declaration and initialization of main variables
let score = 0
let round = 1
let timeLeft = 10

// Declaration of DOM elements
const startButton = document.querySelector("#start")
const userInput = document.querySelector("#user_answer")
userInput.setAttribute("value", "0")

// Prepare the timer
timerOff()
timer.innerHTML = timeLeft.toFixed(2)

// Start the timer when the START button is pressed
startButton.addEventListener("click", () => {
  startTimer(timeLeft)
})

// Reads the value of the input userAnswer when the Return key is up
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let userValue = userInput.value
    console.log(userValue)
  }
})
