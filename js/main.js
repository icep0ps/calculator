
const buttons = document.querySelectorAll('button')
const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators')
const display = document.querySelector('.output')
const equals = document.querySelector('.equals')
var displayNumbers = []
var displayOperator = []

buttons.forEach((button) => {
    button.addEventListener('click', e => {
        var currentInput = button.innerText
        displayNumbers.push(currentInput)
        display.innerText = displayNumbers.join("")
    })
})

equals.addEventListener('click', e => {
    let firstNumbers = displayNumbers.splice(0, displayNumbers.indexOf(displayOperator.toString()))//this istaking the display numbers array and taking all the numbers form 0 to the operator
    let secondNumbers = displayNumbers.splice(displayNumbers.indexOf(displayOperator.toString()), displayNumbers.length - 1)//this takes the numbers from the operator to the last number in the array
    let useroperator = secondNumbers.shift()
    var numbers = [parseInt(firstNumbers.join("")), parseInt(secondNumbers.join(""))]
    display.innerText = operator(displayOperator.toString(), numbers)

})

operators.forEach((op) => {
    op.addEventListener('click', e => {
        displayOperator.push(op.innerText) 
        console.log(displayNumbers)
        while(displayOperator.length>1){
            console.log(displayOperator)
           var currentOp = [displayOperator.shift()]
           console.log(currentOp)
            console.log(displayNumbers)
            var firstNumbers = displayNumbers.splice(0, displayNumbers.indexOf(currentOp.toString()))//this istaking the display numbers array and taking all the numbers form 0 to the operator
            console.log(firstNumbers)       
            var secondNumbers =displayNumbers.splice(displayNumbers.indexOf(currentOp.toString())+1, displayNumbers.length-2 )//this takes the numbers from the operator to the last number in the array
            console.log(secondNumbers)
            var numbers = [parseInt(firstNumbers.join("")), parseInt(secondNumbers.join(""))]
            displayNumbers = [operator(currentOp.toString(), numbers)].concat(displayOperator)
            console.log(displayNumbers)

            

        }

    })

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

