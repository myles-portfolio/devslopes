// Return all integers between 1 and any given max number.
// Example: listNumbers(10)

/*function listNumbers(max) {
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

//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

function century(year) {
  let result = year / 100;
  if (Number.isInteger(result)) {
    return result;
    } else {
    return Math.floor(result) + 1;
  }
}

function century(year) {  
  return Math.ceil(year/100);
}*/

const people = [
  {
    name: "Jon",
    age: 30
  },
  {
    name: "Julio",
    age: 20
  },
  {
    name: "Clayton",
    age: 13
  },
  {
    name: "Zab",
    age: 22
  },
  {
    name: "Myles",
    age: 3
  },
  {
    name: "Garrett",
    age: 4
  }
]

const answer = people.filter(person => person.name[0] === "J");

console.log(answer)  
