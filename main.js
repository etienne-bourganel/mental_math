// All imports
import { level0 } from "./operations.js"
import { myTimer, timer, timerOff } from "./timer.js"

// Declaration and initialization of main variables
let timeLeft = 4

// Declaration of DOM elements
const startButton = document.querySelector("#enter")

// Prepare the timer
timerOff()
timer.innerHTML = timeLeft.toFixed(2)

// Start the timer when the Spacebar is pressed
startButton.addEventListener("keyup", () => {
  myTimer(timeLeft)
})

// Reads the value of the input userAnswer when the Return key is up
document.addEventListener("keyup", (e) => {
  if (e.key === "Spacebar") {
    console.log("hello")
  }
})
