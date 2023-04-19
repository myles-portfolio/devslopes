var rs = require('readline-sync');
const availOperators = ['/','*','+','-'];

function getOperator(limit) {
  return rs.question('What operation would you like to perform? ', {
  limit,
  limitMessage: 'That is not a valid operation.'
  });
}

const getAnyNumber = (order, operator = false) => {
  const number = rs.questionInt(`Please enter the ${order} number: `, {
    limit: Number,
    limitMessage: 'This is not a number.'
  });
  if (operator === '/' && number === 0) {
    console.log('You can\'t divide by zero.');
    return getAnyNumber(order, operator);
  } else {
    return number;
  }
};

function getValues(limit) {
  const operator = getOperator(limit);
  const firstNumber = getAnyNumber('first');
  const secondNumber = getAnyNumber('second', operator);
  return [operator, firstNumber, secondNumber];
}

function calculate(operator, firstNumber, secondNumber) {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => (a / b).toFixed(2),
  };
  return operations[operator](firstNumber, secondNumber);
}

while (true) {
  const [operator, firstNumber, secondNumber] = getValues(availOperators);
  console.log('The result is', calculate(operator, firstNumber, secondNumber));
  const repeat = rs.keyInYN('Perform another operation? ');
  if (!repeat) {
    break;
  }
}

console.log('Thanks for using the calculator!');