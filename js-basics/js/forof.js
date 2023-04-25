const shoes = ['Nike SB', 'Emerica', 'Supra', 'Vans'];

/*for(let i = 0; i < shoes.length; i++) {
  console.log(shoes[i]);
}*/

//shoes.forEach((shoe) => console.log(shoe)); //cannot break out or skip over items

/*for (const index in shoes) {
  console.log(shoes[index]);
}*/

const shoe = shoes.entries()
//console.log(shoe);

for(const [i, shoe] of shoes.entries()) {
  //console.log(`${shoe} is the ${i} index`);
}

function addTotal() {
  let total = 0;
  for(const num of arguments) {
    total += num;
  }
  console.log(total);
  return total;
}
// arguments keyword is not available in arrow function
// addTotal(12,23,45,56,78,65)

const name = 'Myles Hobdy';

for(const char of name) {
//  console.log(char);
}

//const header = document.querySelectorAll('h5');

/*for(const h of header) {
  h.addEventListener('click', function() {
    console.log(this.textContent);
  })
}*/
//console.log(header);

// Creates a NodeList(5) with five array-like items

// *** Practice

// Practice 1: Create a loop that runs through each item in the fruits array.

const fruits = ["Apple", "Banana", "Orange"];
// => Apple Banana Orange
for (const fruit of fruits) {
  console.log(fruit);
}

// Practice 2: Create a loop that runs as long as i is less than 22, but increase i with 2 each time.

let i = 0; 
while (i < 22) {
  i += 2;
  console.log(i);
}

console.log(i);