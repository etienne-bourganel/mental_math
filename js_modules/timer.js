export { myTimer, timerIsOn, resetTimer, stopTimer }
import { timerOnStyle, timerOffStyle, updateTimer } from "./display.js"
import { startTime, stopGame } from "../main.js"

// Declaration of timer variables
let timerIsOn = 0

// What to do when time is out
const timerEnd = () => {
  updateTimer("0")
  timerOffStyle()
  timerIsOn = 0
  return 1
}

// Start the timer and update the style and game info
function myTimer() {
  let timeLeft = startTime
  timerOnStyle()
  timerIsOn = 1
  // Make startTimer global with "window."
  window.startTimer = setInterval(() => {
    if (timeLeft <= 0) {
      stopGame()
      return timerEnd()
    } else {
      timeLeft -= 0.1
      updateTimer(timeLeft)
    }
  }, 100)
}

// Reset the timer to the starting time
const resetTimer = (time) => {
  timerEnd()
  updateTimer(time)
}

// Stop the timer
const stopTimer = () => {
  clearInterval(startTimer)
}

// Provisory button to test stopTimer
const logo = document.querySelector("#titleInfo")
logo.addEventListener("click", () => {
  stopTimer()
})
