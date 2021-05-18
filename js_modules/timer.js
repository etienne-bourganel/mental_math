export { myTimer, timer, timerOff, updateTimer, timerStatus }
import { gameOver } from "../main.js"
// Declaration of DOM elements
const timer = document.querySelector("#timerInfo")

let timerStatus = 0

// Change the style of the timer depending on the situation
const timerOff = () => {
  timer.classList.remove("timer-on")
  timer.classList.add("timer-off")
}

const timerOn = () => {
  timer.classList.remove("timer-off")
  timer.classList.add("timer-on")
}

// What to do when time is out
const timerEnd = () => {
  timerOff()
  timerStatus = 0
  gameOver()
}
// Start the timer and update the style and game info
function myTimer(timeLeft) {
  timerOn()
  timerStatus = 1
  const startTimer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(startTimer)
      return timerEnd()
    } else {
      updateTimer(timeLeft)
      timeLeft -= 0.1
    }
  }, 100)
}

// Update the timer with specific length
const updateTimer = (timeLeft) => {
  const formattedTimeLeft = Math.abs(timeLeft).toFixed(1).padStart(4, "0")
  timer.innerHTML = formattedTimeLeft
}
