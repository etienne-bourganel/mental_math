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
