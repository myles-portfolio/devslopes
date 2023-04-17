var rs = require('readline-sync');

// *** BONUS ***

//TODO Make the program more elegant by allowing the user to enter an entire operation on one line such as: "6 / 6" or "5 * 3" (Hint use arguments to solve this)

const options = ['/','*','+','-'];
//var anotherOperation = false;

var askForOperation = rs.question('What operation would you like to perform? ', {
  limit: options,
  limitMessage: 'That is not a valid operation.'
});

var operator = askForOperation;

var firstNumber = rs.questionInt('Please enter the first number: ',
{
limit: Number,
limitMessage: 'This is not a number.'
});

var secondNumber = rs.questionInt('Please enter the second number: ',
{
limit: Number,
limitMessage: 'This is not a number.'
});

function repeat() {
  var askForOperation = rs.question('What operation would you like to perform? ', {
    limit: options,
    limitMessage: 'That is not a valid operation.'
  });

  operator = askForOperation;

  firstNumber = rs.questionInt('Please enter the first number: ',
  {
  limit: Number,
  limitMessage: 'This is not a number.'
  });

  secondNumber = rs.questionInt('Please enter the second number: ',
  {
  limit: Number,
  limitMessage: 'This is not a number.'
  });

  calcResult();
  askAgain();
}

function calcResult() {
  if (operator === '/') {
    let result = firstNumber / secondNumber;
    console.log('The result is: ' + result);
  } 
  else if (operator === '*') {
    let result = firstNumber * secondNumber;
    console.log('The result is: ' + result);
  }
  else if (operator === '+') {
    let result = firstNumber + secondNumber;
    console.log('The result is: ' + result);
  }
  else if (operator === '-') {
    let result = firstNumber - secondNumber;
    console.log('The result is: ' + result);
  }
}

function askAgain() {
  let anotherOperation = rs.keyInYN('Would you like to perform another operation? ')
  if (anotherOperation === true) {
    repeat();
  } else {
    console.log('Thank you for trying my calculator!');
  }
}

calcResult();
askAgain();