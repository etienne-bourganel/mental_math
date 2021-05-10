export {
  startTimer
}

// Set a timer and display it
const timer = document.querySelector("#timer")

function startTimer(timeLeft) {
  setInterval(() => {
    timer.innerHTML = timeLeft.toFixed(2)
    if (timeLeft <= 0.01) {
      return "Time is out"
    } else {
      timeLeft -= 0.01
    }
  }, 10)
}