export {
  updateBubble,
  displayAddition,
  timerOn,
  timerOff,
  updateTimer,
  displayGameOver,
  displayVictory,
  updateDisplayUserInput,
}

// Update progress bubble
const updateBubble = (i, feedback) => {
  const bubble = document.getElementById(`b${i}`)
  if (feedback) {
    bubble.classList.add("bubble-correct")
  } else {
    bubble.classList.add("bubble-incorrect")
  }
}

// Update the info display with addition question
const displayAddition = (a, b) => {
  displayInfo.innerHTML = `${a} + ${b} ?`
}

// TIMER

// Declare DOM variables
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

// Update the timer with specific length
const updateTimer = (timeLeft) => {
  const formattedTimeLeft = Math.abs(timeLeft).toFixed(1).padStart(4, "0")
  timer.innerHTML = formattedTimeLeft
}

// GAME INFO

// Declare DOM variables
const displayInfo = document.getElementById("displayInfo")
const displayUserInput = document.getElementById("displayUserInput")

// Shows Game over message on screen
const displayGameOver = () => {
  displayInfo.innerHTML = "Press ENTER to start"
  displayUserInput.innerHTML = "Game over."
  return
}

const displayVictory = () => {
  displayInfo.innerHTML = "Victory!"
}

// Update display for user input
const updateDisplayUserInput = (input) => {
  displayUserInput.innerHTML = input
}
