// Declaration and initialization of main variables
const time = 20
let score = 0

// The timer starts
const timerStarts = time => {
  // decrease time value each second
} 

// One round start and ends when the timer is down to 0



// Resolution of the situation when the timer is at 0

// Proposition to start a new level if minimum level reached or start again same level otherwise

// All basic operations
const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

// Generation of random integers
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Level 0 Additions
const level0 = () => {
  const a = randomInteger(1, 20)
  const b = randomInteger(1, 20)
  console.log(a + " + " + b + " ?")
}

level0()