var rs = require('readline-sync');
const availOperators = ['/','*','+','-'];
const option = Number + availOperators + Number;

function operation() {
  let operationPrompt = rs.question('Enter an operation with two numbers (e.g. 6 + 4): ');
  const parts = operationPrompt.split(' ');
  if (parts.length !== 3) {
    console.log('Invalid operation format!');
    return;
  }

  const firstNumber = parseFloat(parts[0]);
  const operator = parts[1];
  const secondNumber = parseFloat(parts[2]);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log('Invalid operation format!');
    return;
  }


let result;
switch (operator) {
  case '+':
    result = firstNumber + secondNumber;
    break;
  case '-':
    result = firstNumber - secondNumber;
    break;
  case '*':
    result = firstNumber * secondNumber;
    break;
  case '/':
    if (secondNumber === 0) {
      console.log('Division by zero.');
      return;
    }
    result = firstNumber / secondNumber;
    break;
  default:
    console.log('That is not a valid input.');
    return;
  }

  console.log(`The result is: ${result}`);
}

while (true) {
  operation();

  const repeat = rs.keyInYN('Perform another operation? ');
  if (!repeat) {
    break;
  }
}

console.log('Thanks for using the calculator!');