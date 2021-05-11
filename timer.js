export { startTimer, timer, timerOff }

// Declaration of DOM elements
const timer = document.querySelector("#timer")
const game_update = document.querySelector("#game_update")

// Change the style of the timer depending on the situation
const timerOff = () => {
  timer.classList.remove("timer-on")
  timer.classList.add("timer-off")
}

const timerOn = () => {
  timer.classList.remove("timer-off")
  timer.classList.add("timer-on")
}

// Start the timer and update the style fo the timer and the game info
function startTimer(timeLeft) {
  timerOn()
  game_update.innerHTML = "Go!"
  setInterval(() => {
    if (timeLeft <= 0) {
      timerOff()
      game_update.innerHTML = "Time is out!"
    } else {
      timer.innerHTML = timeLeft.toFixed(2)
      timeLeft -= 0.01
    }
  }, 10)
}
