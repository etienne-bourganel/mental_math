import {
  level0
} from "./operations.js"

import {
  startTimer
} from "./timer.js"

// Declaration and initialization of main variables
let score = 0
let round = 1

// One gane of 5 rounds

const result = document.querySelector("#result")

let timeLeft = 5
startTimer(timeLeft)
// while (round <= 5 || timeLeft <= 0) {

//   level0()
//   if (level0()) {
//     score += 1
//   }
//   round += 1
// }
result.innerHTML = "Your score is " + score + "/5"