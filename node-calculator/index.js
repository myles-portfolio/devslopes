var rs = require('readline-sync');
const availOperators = ['/','*','+','-'];

function operation() {
  let operationPrompt = rs.question('Enter an operation with two numbers (e.g. 6 + 4): ');
  const inputs = operationPrompt.split(' ');
  if (inputs.length !== 3) {
    console.log('Invalid operation format!');
    return;
  }

  const firstNumber = parseFloat(inputs[0]);
  const operator = inputs[1];
  const secondNumber = parseFloat(inputs[2]);

  if (isNaN(firstNumber) || isNaN(secondNumber) || !availOperators.includes(operator)) {
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