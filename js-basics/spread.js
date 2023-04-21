const skaterDude = {
  name: 'nah',
  shoes: ['DC', 'Supra'],
};

//skaterDude.shoes = [...skaterDude.shoes, ...skaterShoes];

const comments = [
  { id: 1, comment: 'You keep shredding dude, you rock!'},
  { id: 2, comment: 'You\'re my hero! I live vicariously through you!'},
  { id: 3, comment: 'A giraffe skates better than you...and you look like one too...'},
  { id: 4, comment: 'I love you long time.'},
];

const id = 3;
const commentIndex = comments.findIndex((comment) => comment.id = id);


const niceComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];


//console.log(niceComments);
//console.log([...skaterDude.shoes[2]]);

// *** Practice

//Exercise 1: Write a function called combineArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).

const arr1 = [1,3,4,5];
const arr2 = [2,6,7,8];

const combineArrays = (arr1, arr2) => [...arr1.slice(0, arr1.length), ...arr2.slice(0, arr2.length)];

//console.log(combineArrays(arr1, arr2));

//Exercise 2: Write a function called addEveryOther that takes in any amount of arguments, and returns the sum of every other argument.

// => addEveryOther(4, 7, 3, 2, 10) // 17
// => addEveryOther(2, 8, 3, 1) // 5

//const addEveryOther = (...args) => {
//  let sum = 0;
//  for(let i = 0; i <= args.length; i++) {
//    if (i % 2 === 0) {
//      sum += args[i];
//    }
//  }
//  return sum;
//}

//console.log(addEveryOther(4, 7, 3, 2, 10));

// *** Spreading into a function

const dogs = ['German Shepherd', 'Bulldog', 'Poodle'];
const moreDogs = ['Labrador', 'Golden Retriever', 'Great Dane'];

dogs.push(...moreDogs);
//console.log(dogs);


const greeting = (first, last) => console.log(`Hello ${first} ${last}`)
const userName = ['John', 'Smith'];
//greeting(...userName);


const currencyConverter = (rate, ...amounts) => amounts.map(amount => rate * amount);
const converted = currencyConverter(1.25, 5, 10, 23, 44, 87);
//console.log(converted);

const teams = ['You', 'Them', 'Jason', 'Nathan', 'Jared'];
const [capt, coCapt, ...team] = teams;

console.log(capt, coCapt, team);