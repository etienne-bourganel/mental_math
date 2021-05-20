export {
  clearBubbles,
  displayAddition,
  displayGameOver,
  displayStart,
  displayVictory,
  timerOff,
  timerOn,
  updateBubble,
  updateDisplayUserInput,
  updateTimer,
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
const updateTimer = (time) => {
  const formattedTime = Math.abs(time).toFixed(1).padStart(4, "0")
  timer.innerHTML = formattedTime
}

// PROGRESS BUBBLES
// Remove all classes for each progress bubble
const clearBubbles = () => {
  const bubbles = document.querySelectorAll(".progress-bubble")
  bubbles.forEach((bubble) => {
    bubble.classList.remove("bubble-correct")
    bubble.classList.remove("bubble-incorrect")
  })
}

// GAME INFO
// Declare DOM variables
const displayInfo = document.getElementById("displayInfo")
const displayUserInput = document.getElementById("displayUserInput")

// Shows Game over message on info screen
const displayGameOver = () => {
  displayInfo.innerHTML = "Game over."
  return
}

// Show victory message on info screen
const displayVictory = () => {
  displayInfo.innerHTML = "Victory!"
}

// Update display for user input
const updateDisplayUserInput = (input) => {
  displayUserInput.innerHTML = input
}

// Show info to start a game
const displayStart = () => {
  displayInfo.innerHTML = "Press ENTER to start"
}
