export { myTimer, timerIsOn, resetTimer }
import { timerOn, timerOff, updateTimer, displayGameOver } from "./display.js"

// Declaration of DOM elements

let timerIsOn = 0

// What to do when time is out
const timerEnd = () => {
  timerOff()
  timerIsOn = 0
}

// Start the timer and update the style and game info
function myTimer(timeLeft) {
  timerOn()
  timerIsOn = 1
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
