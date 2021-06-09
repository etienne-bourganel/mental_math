export {
  clearBubbles,
  displayAddition,
  displayDivision,
  displayGameOver,
  displayMultiplication,
  displayStart,
  displaySubstraction,
  displayVictory,
  enableEnterBlink,
  switchTheme,
  showScore,
  stopEnterBlink,
  timerOffStyle,
  timerOnStyle,
  updateBubble,
  updateDisplayUserInput,
  updateLevel,
  updateTimer,
}

const updateBubble = (i, feedback) => {
  const bubble = document.getElementById(`b${i}`)
  feedback
    ? bubble.classList.add("bubble-correct")
    : bubble.classList.add("bubble-incorrect")
}

// TIMER
const timer = document.querySelector("#timerInfo")

const timerOffStyle = () => {
  timer.classList.toggle("timer-off")
}
const timerOnStyle = () => {
  timer.classList.toggle("timer-on")
}

const updateTimer = (time) => {
  const formattedTime = Math.abs(time).toFixed(1).padStart(4, "0")
  timer.innerHTML = formattedTime
}

// PROGRESS BUBBLES
const clearBubbles = () => {
  const bubbles = document.querySelectorAll(".progress-bubble")
  bubbles.forEach((bubble) => {
    bubble.classList.remove("bubble-correct")
    bubble.classList.remove("bubble-incorrect")
  })
}

// GAME INFO
const displayInfo = document.getElementById("displayInfo")
const displayUserInput = document.getElementById("displayUserInput")

const displayAddition = (a, b) => {
  displayInfo.innerHTML = `${a} + ${b} ?`
}

const displaySubstraction = (a, b) => {
  displayInfo.innerHTML = `${a} - ${b} ?`
}

const displayMultiplication = (a, b) => {
  displayInfo.innerHTML = `${a} x ${b} ?`
}

const displayDivision = (a, b) => {
  displayInfo.innerHTML = `${a} / ${b} ?`
}

const displayGameOver = () => {
  displayUserInput.classList.add("display-message")
  displayUserInput.innerHTML = "Game over."
  return
}

const displayVictory = () => {
  displayUserInput.classList.add("display-message")
  displayUserInput.innerHTML = "Victory!"
}

const updateDisplayUserInput = (input) => {
  displayUserInput.classList.remove("display-message")
  displayUserInput.innerHTML = input
}

const displayStart = (level) => {
  displayInfo.innerHTML = `ENTER to start level ${level}`
  displayUserInput.classList.add("display-message")
  displayUserInput.innerHTML = "Good luck!"
  enableEnterBlink()
}

const showScore = (score) => {
  displayInfo.innerHTML = `Correct answers: ${score}/10`
}

const updateLevel = (level) => {
  const levelNum = document.getElementById("levelNum")
  levelNum.innerHTML = level
}

// ANIMATIONS
const enter = document.getElementById("enter")

const enableEnterBlink = () => {
  enter.classList.add("blinking")
}

const stopEnterBlink = () => {
  enter.classList.remove("blinking")
}

// NIGHTMODE
const switchTheme = (switchStatus) => {
  const pageTheme = document.getElementById("pageTheme")
  const nightMode = "./css/nightmode.css"
  const dayMode = "./css/daymode.css"

  const swapStyleSheet = (sheet) => {
    pageTheme.setAttribute("href", sheet)
  }

  !switchStatus ? swapStyleSheet(nightMode) : swapStyleSheet(dayMode)
}
