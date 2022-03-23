
const buttons = document.querySelectorAll('button')
const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators')
const display = document.querySelector('.output')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
var displayNumbers = []
var displayOperator = []



window.addEventListener('keydown', e => {
    var currentInput = document.querySelector(`button[data-key="${e.keyCode}"]`).textContent
    displayNumbers.push(currentInput)
    display.textContent = displayNumbers.join("")
})


buttons.forEach((button) => {
    button.addEventListener('click', e => {
        var currentInput = button.textContent
        displayNumbers.push(currentInput)
        display.textContent = displayNumbers.join("")
    })
})

equals.addEventListener('click', e => {
    //this istaking the display numbers array and taking all the numbers form 0 to the operator
    let firstNumbers = displayNumbers.splice(0, displayNumbers.indexOf(displayOperator.toString()))
    //this takes the numbers from the operator to the last number in the array
    let secondNumbers = displayNumbers.splice(displayNumbers.indexOf(displayOperator.toString()), displayNumbers.length - 1)
    secondNumbers.shift()
    var numbers = [parseInt(firstNumbers.join("")), parseInt(secondNumbers.join(""))]
    display.textContent = operator(displayOperator.toString(), numbers)
    displayNumbers = [operator(displayOperator.toString(), numbers)]
    displayOperator = []
    console.log(displayNumbers)

})

operators.forEach((op) => {
    op.addEventListener('click', e => {
        displayOperator.push(op.textContent)
        console.log(displayNumbers)
        while (displayOperator.length > 1) {
            console.log(displayOperator)
            var currentOp = [displayOperator.shift()]
            console.log(currentOp)
            console.log(displayNumbers)
            var firstNumbers = displayNumbers.splice(0, displayNumbers.indexOf(currentOp.toString()))
            console.log(firstNumbers)
            var secondNumbers = displayNumbers.splice(displayNumbers.indexOf(currentOp.toString()) + 1, displayNumbers.length - 2)
            console.log(secondNumbers)
            var numbers = [parseInt(firstNumbers.join("")), parseInt(secondNumbers.join(""))]
            displayNumbers = [operator(currentOp.toString(), numbers)].concat(displayOperator)
            console.log(displayNumbers)



        }

    })

})



clear.addEventListener('click', e => {
    display.textContent = ''
    displayNumbers = []
    displayOperator = []
})



window.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
        let firstNumbers = displayNumbers.splice(0, displayNumbers.indexOf(displayOperator.toString()))
        let secondNumbers = displayNumbers.splice(displayNumbers.indexOf(displayOperator.toString()), displayNumbers.length - 1)
        secondNumbers.shift()
        var numbers = [parseInt(firstNumbers.join("")), parseInt(secondNumbers.join(""))]
        display.textContent = operator(displayOperator.toString(), numbers)
    }
})

function add(numbers) {
    var answer = numbers.reduce((a, c) =>
        a + c
    );
    return answer
};

function subtract(numbers) {
    var answer = numbers.reduce((a, c) =>
        a - c
    );
    return answer
};

function multiply(numbers) {
    var answer = numbers.reduce((a, c) =>
        a * c
    );
    return answer
};

function divided(numbers) {
    var answer = numbers.reduce((a, c) =>
        a / c
    );
    return answer
};

function operator(operator, numbers) {
    if (operator == '+') {
        return add(numbers)
    }
    else if (operator == '-') {
        return subtract(numbers)
    }
    else if (operator == 'x') {
        return multiply(numbers)
    }
    else if (operator == '÷') {
        return divided(numbers).toFixed(2)
    }
}

