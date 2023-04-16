// Write a loop that makes 7 calls to console.log printing a '#' equal to the nth call

function printPoundSign(max) {
	let poundSign = '';
  for (let i =  1; i <= max; i++) {
      console.log(poundSign += '#');
  }
}

//printPoundSign(7);

// Write a FizzBuss program that prints all numbers from 1 to 100 with three exceptions: 
//numbers divisible by 3 print "Fizz"
//numbers divisible by 5 print "Buzz"
//numbers divisible by both 3 and 5 print "FizzBuzz"

function fizzBuzz(num) {
  let int = '';
  for (let i = 1; i <= num; i++) {
    if (int % 3 === 0) {
      console.log(int += 'Fizz');
    }
    if (int % 5 === 0) {
      console.log(int += 'Buzz')
    }
    else {
      console.log(int += 1);
    }
  }
}

// Write a program that creates a string that represents an 8x8 grid, using new line characters to separate lines.
// At each line there is either a space or # character, forming a chessboard.
// The function should be dynamic and able to produce a grid of varying size.

function chessBoard(size) {
  let rows = size;
  let board = '';
  for (let l = 1; l < size; l++) {
    function chessBoardRowA(rows) {
      let result = '';
      for (let i = 0; i < rows; i++) {
        if (i % 2 === 0) {
          result += ' ';
        } else {
          result += '#';
        }
      }
      result += '\n';
      return result;
    }

    function chessBoardRowB(rows) {
      let result = '';
      for (let x = 0; x < rows; x++) {
        if (x % 2 === 0) {
          result += '#';
        } else {
          result += ' ';
        }
      }
      result += '\n';
      return result;
    }

    if (l % 2 === 1) {
      board += chessBoardRowA(rows);
    } else {
      board += chessBoardRowB(rows);
    }
  }
  return board;
}