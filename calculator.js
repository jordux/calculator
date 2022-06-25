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


