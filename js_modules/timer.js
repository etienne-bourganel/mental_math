export { myTimer, timerIsOn, resetTimer, stopTimer }
import { timerOnStyle, timerOffStyle, updateTimer } from "./display.js"
import { startingTime, stopGame } from "../main.js"

let timerIsOn = false
let timeLeft

const myTimer = () => {
  timeLeft = startingTime
  timerIsOn = true
  window.startTimer = setInterval(() => {
    timeLeft <= 0 ? stopEverything() : timeGoesOn()
  }, 100)
}

const stopEverything = () => {
  stopGame()
  return timerEnd()
}

const timeGoesOn = () => {
  timeLeft -= 0.1
  updateTimer(timeLeft)
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
