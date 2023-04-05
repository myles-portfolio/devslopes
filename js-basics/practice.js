// Return all integers between 1 and any given max number.
// Example: listNumbers(10)

function listNumbers(max) {
  let int = 0;

  for (let i =  1; i <= max; i++) {
    console.log(int += 1);
  }
}

listNumbers(10);

// Return all even integers between 1 and any given max number.
// Example: evenNumbers(10)

function evenNumbers(max) {
	let int = 0;
  for (let i =  1; i <= max; i++) {
  	if (i % 2 === 0) {
      console.log(int + i);
    }
  }
}

evenNumbers(10);

// Return all odd integers between 1 and any given max number.
// Example: evenNumbers(10)

function oddNumbers(max) {
	let int = 0;
  for (let i =  1; i <= max; i++) {
  	if (i % 2 !== 0) {
      console.log(int + i);
    }
  }
}

oddNumbers(10);