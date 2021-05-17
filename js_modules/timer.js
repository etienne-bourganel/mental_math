export { myTimer, timer, timerOff }

// Declaration of DOM elements
const timer = document.querySelector("#timerInfo")

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
}
// Start the timer and update the style and game info
function myTimer(timeLeft) {
  timerOn()
  const startTimer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(startTimer)
      return timerEnd()
    } else {
      timeLeft -= 0.1
      timer.innerHTML = Math.abs(timeLeft).toFixed(1)
    }
  }, 100)
}
