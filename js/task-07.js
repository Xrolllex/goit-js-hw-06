const inputSize = document.getElementById("font-size-control")
const textSpan = document.getElementById("text")

inputSize.addEventListener("input", () => {

const fontSize = inputSize.value
textSpan.style.fontSize = `${fontSize}px`

})