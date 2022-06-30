const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator')
const firstOperand = document.querySelector('[data-firstOperand]')
const secondOperand = document.querySelector('[data-secondOperand]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')

let currentOperator
let num1
let num2

// MATH FUNCTIONS
function addFunction(a, b) {
        return firstOperand.textContent = parseInt(a) + parseInt(b)
}

function subtractFunction (a, b) {
        return firstOperand.textContent = parseInt(a) - parseInt(b)
}

function multiplyFunction (a, b) {
        return firstOperand.textContent = parseInt(a) * parseInt(b)
}

function divideFunction (a, b) {
        
        return firstOperand.textContent = parseInt(a) / parseInt(b)
}


//OPERATE FUNCTION, CALLED WHEN EQUALS BUTTON IS HIT

function operate(currentOperator, a, b) {

  if (currentOperator === '+') {
            return addFunction(a, b)

    } else if (currentOperator === '-') {
            return subtractFunction(a, b)

    } else if (currentOperator === 'x') {
            return multiplyFunction(a, b)

    } else if (currentOperator === '/') {
        if(a === '0' || b === '0') {
                return firstOperand.textContent = "NAH HOMIE"
        } 
            return divideFunction(a, b)
    } 
}

// Show numbers on display

numberButtons.forEach(button => {
        button.addEventListener('click', () => {
                firstOperand.innerText += button.innerText
        });
})

operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
                secondOperand.innerText = firstOperand.innerText  
                num1 = secondOperand.innerText
                currentOperator = button.innerText
                firstOperand.innerText = " "

        });
})

// EQUALS BUTTON
equalsButton.addEventListener('click', () => {
                num2 = firstOperand.innerText
                operate(currentOperator, num1, num2)
                secondOperand.innerText = " "
        });

// CLEAR BUTTON
clearButton.addEventListener('click', () => {
        firstOperand.innerText = ""
        secondOperand.innerText = ""
        currentOperator = undefined
})
