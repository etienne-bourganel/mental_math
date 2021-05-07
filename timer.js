// Set a timer and display it

let timeLeft = 20

function updateTimer() {
  timeLeft -= 1
  console.log(timeLeft)
}

function startTimer() {
  while (timeLeft) {
    setInterval(updateTimer, 1000)
  }
}