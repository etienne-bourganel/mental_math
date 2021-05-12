// All imports
import { level0 } from "./operations.js"
import { myTimer, timer, timerOff } from "./timer.js"

// Declaration and initialization of main variables
let score = 0
let round = 1
let timeLeft = 4

// Declaration of DOM elements
const startButton = document.querySelector("#start")
const userInput = document.querySelector("#userAnswerInput")

// Prepare the timer
timerOff()
timer.innerHTML = timeLeft.toFixed(2)

// Start the timer when the START button is pressed
startButton.addEventListener("click", () => {
  myTimer(timeLeft)
})

// Reads the value of the input userAnswer when the Return key is up
document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    // let userValue = userInput.value
    console.log("hello")
    // document.getElementById("userAnswerForm").reset()
  }
})
