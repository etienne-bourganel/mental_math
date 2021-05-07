import {
  level0
} from "./operations.js"

// Declaration and initialization of main variables
let score = 0
let round = 1

// One gane of 5 rounds

alert("Your score is " + score + "/5")

while (round <= 5) {
  level0()
  if (level0()) {
    score += 1
  }
  round += 1
}
alert("Your score is " + score + "/5")