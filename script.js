const incrementBtn = document.querySelector('.incree')
const decrementBtn = document.querySelector('.decree')
const resetBtn = document.querySelector('.reset')
const counter = document.querySelector('.counter')

let counterValue = Number(counter.textContent)

function addition () {
    counterValue += 1
    counter.textContent = counterValue
}

function subtraction () {
    if (counterValue == 0) {
        counterValue = 0
    } else {
        counterValue -= 1
    }  
    counter.textContent = counterValue
}

function reset () {
    counterValue = 0
    counter.textContent = counterValue
}

incrementBtn.addEventListener("click", addition)
decrementBtn.addEventListener("click", subtraction)
resetBtn.addEventListener("click", reset)