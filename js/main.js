const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const display = document.querySelector('.output');
const miniDisplay = document.querySelector('.mini');
const equals = document.querySelector('.Equal');
const clear = document.querySelector('.clear');
const getValidKeys = document.querySelectorAll('button');

let displayNumbers = [];
let displayOperator = [];

window.addEventListener('keydown', (e) => {
  const validKeys = Array.from(getValidKeys).map((key) => {
    return key.getAttribute('data-key') || key.getAttribute('class');
  });

  if (!validKeys.includes(e.key)) {
    return;
  }

  if (e.code == 'Enter') {
    let firstNumbers = displayNumbers.splice(
      0,
      displayNumbers.indexOf(displayOperator.toString())
    );
    let secondNumbers = displayNumbers.splice(
      displayNumbers.indexOf(displayOperator.toString()),
      displayNumbers.length - 1
    );
    secondNumbers.shift();
    let numbers = [
      parseInt(firstNumbers.join('')),
      parseInt(secondNumbers.join('')),
    ];
    display.textContent = operator(displayOperator.toString(), numbers);
    return;
  }

  if (e.code == 'Backspace') {
    displayNumbers.pop();
    display.textContent = displayNumbers.join('');
  } else {
    let currentInput = document.querySelector(
      `button[data-key="${e.key}"]`
    ).textContent;
    displayNumbers.push(currentInput);
    display.textContent = displayNumbers.join('');
  }
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let currentInput = button.textContent;
    displayNumbers.push(currentInput);
    display.textContent = displayNumbers.join('');
    miniDisplay.textContent = displayNumbers.join('');
  });
});

equals.addEventListener('click', (e) => {
  displayNumbers.pop();
  miniDisplay.textContent = displayNumbers.join('');
  let firstNumbers = displayNumbers.splice(
    0,
    displayNumbers.indexOf(displayOperator.toString())
  );

  let secondNumbers = displayNumbers.splice(
    displayNumbers.indexOf(displayOperator.toString())
  );
  secondNumbers.shift();
  let numbers = [
    parseInt(firstNumbers.join('')),
    parseInt(secondNumbers.join('')),
  ];

  display.textContent = operator(displayOperator.toString(), numbers);
  displayNumbers = [operator(displayOperator.toString(), numbers)];
  displayOperator = [];
});

operators.forEach((op) => {
  op.addEventListener('click', (e) => {
    displayOperator.push(op.textContent);
    while (displayOperator.length > 1) {
      let currentOp = [displayOperator.shift()];

      let firstNumbers = displayNumbers.splice(
        0,
        displayNumbers.indexOf(currentOp.toString())
      );

      let secondNumbers = displayNumbers.splice(
        displayNumbers.indexOf(currentOp.toString()) + 1,
        displayNumbers.length - 2
      );

      let numbers = [
        parseInt(firstNumbers.join('')),
        parseInt(secondNumbers.join('')),
      ];
      displayNumbers = [operator(currentOp.toString(), numbers)].concat(
        displayOperator
      );
    }
    miniDisplay.textContent = displayNumbers.join('');
  });
});

clear.addEventListener('click', (e) => {
  display.textContent = '';
  miniDisplay.textContent = '';
  displayNumbers = [];
  displayOperator = [];
});

function add(numbers) {
  let answer = numbers.reduce((a, c) => a + c);
  return answer;
}

function subtract(numbers) {
  let answer = numbers.reduce((a, c) => a - c);
  return answer;
}

function multiply(numbers) {
  let answer = numbers.reduce((a, c) => a * c);
  return answer;
}

function divided(numbers) {
  let answer = numbers.reduce((a, c) => a / c);
  return answer;
}

function operator(operator, numbers) {
  if (operator == '+') {
    return add(numbers);
  } else if (operator == '-') {
    return subtract(numbers);
  } else if (operator == 'x') {
    return multiply(numbers);
  } else if (operator == '÷') {
    return divided(numbers).toFixed(2);
  }
}
