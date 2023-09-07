const addListenerBtn = document.querySelector(`[data-action="increment"]`)
const removeListenerBtn = document.querySelector(`[data-action="decrement"]`)
const valueSpan = document.getElementById('value');

let counterValue = 0

const updateCounter = ()=> {
    valueSpan.textContent = counterValue
}

addListenerBtn.addEventListener("click", () => {
    counterValue +=1
  updateCounter()
});

removeListenerBtn.addEventListener("click", () => {
    counterValue -=1
  updateCounter()
});

updateCounter()