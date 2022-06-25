function addFunction(a, b) {
        return a + b
}

function subtractFunction (a, b) {
        return a - b
}

function multiplyFunction (a, b) {
        return a * b
}

function divideFunction (a, b) {
        return a / b
}

function operate(operator, a, b) {

  if (operator === '+') {
            return addFunction(a, b)

    } else if (operator === '-') {
            return subtractFunction(a, b)

    } else if (operator === '*') {
            return multiplyFunction(a, b)

    } else if (operator === '/') {
            return divideFunction(a, b)
    } 
}

// CLEAR BUTTON
let clearButton = document.querySelector('.clearButton')
clearButton.addEventListener('click', () => display.textContent = " ")
clearButton.addEventListener('click', () => clearButton.textContent = " ")


// SHOW BUTTON CLICKED ON DISPLAY
let buttons = document.querySelectorAll('.button')
let display = document.querySelector('.displayText')

// VALUE ON DISPLAY STORED AS A displayValue variable
                Array
                    .from(buttons)
                    .forEach(element => element.addEventListener('click', () => displayValue = display.textContent += `${element.textContent}`))


// CURRENT OPERATOR STORED in currentOperator variable
let operatorButton = document.querySelectorAll('.operator')
    Array
        .from(operatorButton)
        .forEach(button => button.addEventListener('click', () => currentOperator = `${button.textContent}`))



