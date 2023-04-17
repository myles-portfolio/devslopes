var rs = require('readline-sync');

//TODO After a valid number is entered, ask the user, "Please enter the second number". Perform the same error handling as before
//TODO Then create a function to perform the proper math operation and print the result as: "The result is: X" where "X" is the actual result

// *** BONUS ***

//TODO Handle remainders properly (modulo). Example : 9 divided by 4 would print 2.25
//TODO Make the program more elegant by allowing the user to enter an entire operation on one line such as: "6 / 6" or "5 * 3" (Hint use arguments to solve this)

const options = ['/','*','+','-']

var askForOperation = rs.question('What operation would you like to perform? ', {
  limit: options,
  limitMessage: 'That is not a valid operation.'
});

function getFirstNum() {
  firstInput = rs.questionInt('Please enter the first number: ',
  {
  limit: Number,
  limitMessage: 'This is not a number.'
  });
}

function getSecondNum() {
  secondInput = rs.questionInt('Please enter the second number: ',
  {
  limit: Number,
  limitMessage: 'This is not a number.'
  });
}

var firstNumber = getFirstNum();
var secondNumber = getSecondNum();