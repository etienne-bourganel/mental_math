export {
  clearBubbles,
  displayAddition,
  displayGameOver,
  displayStart,
  displayVictory,
  enableEnterBlink,
  showScore,
  stopEnterBlink,
  timerOffStyle,
  timerOnStyle,
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

// TIMER
// Declare DOM variables
const timer = document.querySelector("#timerInfo")

// Change the style of the timer depending on the situation
const timerOffStyle = () => {
  timer.classList.remove("timer-on")
  timer.classList.add("timer-off")
}
const timerOnStyle = () => {
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

// Update the info display with addition question
const displayAddition = (a, b) => {
  displayInfo.innerHTML = `${a} + ${b} ?`
}

// Shows Game over message on info screen
const displayGameOver = () => {
  displayUserInput.innerHTML = "Game over."
  return
}

// Show victory message on info screen
const displayVictory = () => {
  displayUserInput.innerHTML = "Victory!"
}

// Update display for user input
const updateDisplayUserInput = (input) => {
  displayUserInput.innerHTML = input
}

// Show info to start a game
const displayStart = () => {
  displayInfo.innerHTML = "Press ENTER to start"
  displayUserInput.innerHTML = "Good luck!"
}

// Show score
const showScore = (score) => {
  displayInfo.innerHTML = `Correct answers: ${score}/10`
}

// ANIMATIONS
const enter = document.getElementById("enter")

// Makes ENTER-touch blink
const enableEnterBlink = () => {
  enter.classList.add("blinking")
}

// Makes ENTER-touch stop blinking
const stopEnterBlink = () => {
  enter.classList.remove("blinking")
}
