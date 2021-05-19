export { myTimer, timerStatus, resetTimer }
import { timerOn, timerOff, updateTimer, displayGameOver } from "./display.js"

// Declaration of DOM elements

let timerStatus = 0

// What to do when time is out
const timerEnd = () => {
  timerOff()
  timerStatus = 0
  displayGameOver()
}

// Start the timer and update the style and game info
function myTimer(timeLeft) {
  timerOn()
  timerStatus = 1
  const startTimer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(startTimer)
      updateTimer(timeLeft)
      return timerEnd()
    } else {
      updateTimer(timeLeft)
      timeLeft -= 0.1
    }
  }, 100)
}

// Reste the timer to the starting time
const resetTimer = (timeLeft) => {
  timerEnd()
  updateTimer(timeLeft)
}
