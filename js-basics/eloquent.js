// Write a loop that makes 7 calls to console.log printing a '#' equal to the nth call

function printPoundSign(max) {
	let poundSign = '';
  for (let i =  1; i <= max; i++) {
      console.log(poundSign += '#');
  }
}

printPoundSign(7);

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