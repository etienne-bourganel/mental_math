export { myTimer, timerIsOn, resetTimer, stopTimer }
import { timerOnStyle, timerOffStyle, updateTimer } from "./display.js"
import { startTime, stopGame } from "../main.js"

let timerIsOn = false

function myTimer() {
  let timeLeft = startTime
  timerOnStyle()
  timerIsOn = true
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

const timerEnd = () => {
  updateTimer("0")
  timerOffStyle()
  timerIsOn = false
  return 1
}

const resetTimer = (time) => {
  timerEnd()
  updateTimer(time)
}

const stopTimer = () => {
  clearInterval(startTimer)
}
