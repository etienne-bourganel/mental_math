export { updateBubble, displayAddition }

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
