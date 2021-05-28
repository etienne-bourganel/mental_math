import { feedback, oneQuestion } from "./js_modules/operations.js"

import {
  myTimer,
  resetTimer,
  timerIsOn,
  stopTimer,
} from "./js_modules/timer.js"

import {
  clearBubbles,
  displayGameOver,
  displayStart,
  displayVictory,
  enableEnterBlink,
  switchTheme,
  showScore,
  stopEnterBlink,
  timerOnStyle,
  updateDisplayUserInput,
  updateLevel,
} from "./js_modules/display.js"

export { incrementScore1, userInputNmr, round, startTime, stopGame }

let gameStarted = 0
let level = 0
let round = 0
let score = 0
let setEnded = 0
let startTime = 20
let switchStatus = false
let userInputArr = []
let userInputDigit
let userInputNmr

const clear = document.getElementById("clear")
const enter = document.getElementById("enter")
const nightMode = document.getElementById("nightmode")

nightMode.addEventListener("click", () => {
  switchTheme(switchStatus)
  switchStatus = !switchStatus
})

enter.addEventListener("click", () => {
  manageEnter()
})

const manageEnter = () => {
  if (!gameStarted) {
    startGame()
  } else if (setEnded) {
    proposeNewSet()
  } else {
    feedback()
    oneRound()
  }
}

const startGame = () => {
  updateLevel(level)
  stopEnterBlink()
  gameStarted = 1
  myTimer()
  oneRound()
}

const oneRound = () => {
  clearInput()
  if (continueGame()) {
    oneQuestion(level)
    round += 1
  } else {
    stopGame()
  }
}

const proposeNewSet = () => {
  displayStart(level)
  resetGame()
}

const continueGame = () => {
  if (round < 10 && score < 10 && timerIsOn) {
    return true
  }
}

const playerWins = () => {
  if (score == 10 && timerIsOn) {
    return 1
  }
}

const stopGame = () => {
  stopTimer()
  setEnded = 1
  endGameInfo()
}

const endGameInfo = () => {
  enableEnterBlink()
  showScore(score)
  if (playerWins()) {
    displayVictory()
    if (level < 4) {
      level += 1
      startTime += 5
    }
  } else {
    displayGameOver()
  }
}

const touches = document.querySelectorAll(".number")
touches.forEach((touch) => {
  touch.addEventListener("click", (e) => {
    userInputDigit = e.target.dataset.value
    inputDigit()
  })
  // eventListener to avoid double tap to trigger zoom on mobile
  touch.addEventListener("click", (e) => {
    e.preventDefault()
  })
})

const inputDigit = () => {
  updateUserInput(Number(userInputDigit))
  updateDisplayUserInput(userInputNmr)
}

clear.addEventListener("click", () => {
  clearInput()
})

const updateUserInput = (value) => {
  if (userInputArr.length <= 5) {
    userInputArr.push(value)
    userInputNmr = Number(userInputArr.join(""))
  }
}

const resetGame = () => {
  setEnded = 0
  gameStarted = 0
  clearBubbles()
  resetScore()
  resetRound()
  resetTimer(startTime)
  timerOnStyle()
}

const resetRound = () => {
  round = 0
}

const clearInput = () => {
  userInputArr = []
  userInputNmr = 0
  updateDisplayUserInput(userInputNmr)
}

const incrementScore1 = () => {
  score += 1
}

const resetScore = () => {
  score = 0
}

// eventListener to avoid double tap to trigger zoom on mobile
enter.addEventListener("click", (e) => {
  e.preventDefault()
})
clear.addEventListener("click", (e) => {
  e.preventDefault()
})

const inputKey = (e) => {
  if (e.keyCode == 13) {
    manageEnter()
  }
  if (e.keyCode == 8 || e.keyCode == 12) {
    clearInput()
  }
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if (key) {
    const value = key.dataset.value
    if (value == "enter") {
      return manageEnter()
    } else if (value == "clear") {
      return clearInput()
    } else {
      userInputDigit = value
      inputDigit()
      return
    }
  }
}

resetGame()
displayStart(level)
window.addEventListener("keydown", inputKey)
