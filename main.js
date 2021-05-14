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

const displayInfo = document.getElementById("displayInfo")
const enter = document.getElementById("enter")

enter.addEventListener("touchstart", () => {
  myTimer(timeLeft)
  displayInfo.innerHTML = "OK let's go!"
})

const touches = document.querySelectorAll("number")
touches.forEach((touch) => {
  touch.addEventListener("touchstart", () => {
    displayInfo.innerHTML = "A touch has been touched!"
  })
})

const one = document.getElementById("one")
one.addEventListener("touchstart", () => {
  displayInfo.innerHTML = "One has been pressed!"
})
