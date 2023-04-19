// *** Destructuring Objects

const mylesh = {
  name: 'Myles',
  lastName: 'Hobdy',
  urls: {
    socials: {
      facebook: 'fb/mylesh',
      instagram: 'ig/mylesh',
    },
    web: {
      website: 'web/mylesh',
      blog: 'blog/mylesh'
    }
  }
}

//const {fisrtName, lastName} = mylesh;
//const {facebook: fb, instagram: ig} = mylesh.urls.socials;

const shape = {
  width: 200,
  height: 400,
};

const { width = 100, height = 100, bgColor = 'Red', borderRad = '8px'} = shape;

//console.log(mylesh.name);
//console.log(mylesh.lastName);
//console.log(mylesh.urls.socials.instagram);

//console.log(name);
//console.log(lastName);
//console.log(ig);

//console.log(width);
//console.log(height);

// *** Practice: Take the following object and store the name and youtube properties in their own variable.

const person = {
  fullName: "Harry Mack",
  age: 30,
  expertise: "jaw-dropping visual freestyle rapping",
  youtube: "www.youtube.com/harrymack",
};

const {fullName, youtube} = person;

//console.log(fullName);

// *** Destructuring Arrays

const movies = ['Gladiator', 'Elf', 'Maze Runner'];
const [movie1, movie2, movie3] = movies;

//console.log(movie1);

const students = ['Sally', 'George', 'Bethany', 'Justin'];
// const [dev1, dev2, skater1, skater2] = students.split(', ');

const [dev1, dev2, ...rest] = students;
const [skater1, skater2] = rest;

//console.log(dev1);
//console.log(dev2);
//console.log(rest);
//console.log(skater2);

// *** Swapping Variables in Destructuring

let working = 'Larry';
let onBreak = 'Lisa';

//console.log(`Is working: ${working}`);
//console.log(`On break: ${onBreak}`);

[working, onBreak] = [onBreak, working];

//console.log(`Is working: ${working}`);
//console.log(`On break: ${onBreak}`);

// *** Destructuring Functions - multiple returns and named defaults

const cryptoConverter = (amount) => {
  const crypto = {
    BTC: amount / 19000,
    ETH: amount / 595,
    LTC: amount / 88,
    DOGE: amount / 3000,
  }
  return crypto;
}

const {BTC, ETH, LTC, DOGE} = cryptoConverter(1000);
//console.log(BTC, ETH);

const myBill = {
  total: 125,
  tax: 0.0825,
  tip: 0.25,
}

const calcBill = ({total, tax = 0.0825, tip = 0.20}) => total + (tip * total) + (tax * total);
const finalBill = calcBill(myBill);

//console.log(finalBill);

// *** Practice: 

// Exercise 1: Using array destructuring, take the first two items from the array and store them in a variable

const names = ['John', 'Jacob', 'Jingleheimer'];
// => John Jacob
const [name1, name2] = names;

console.log(name1, name2);

// Destructuring Functions

// Exercise 2: Destructure the first two items returned from the function and store them in a variable

const foo = () => [1, 2, 3];
// => 1 2
const [first, second] = foo();
console.log(first, second);

// Swapping Variables

// Exercise 3: Without creating a temporary variable, use destructuring to swap the value of the following variables

let aa = 'Jack';
let bb = 'Jill';
[aa, bb] = [bb, aa];
console.log('a:', aa, 'b:',bb);
// => a: Jill b: Jack

// BONUS: Advanced - nested arrays

// Using array destructuring, accomplish the following output. Carefully study the array and the output to understand it.

const array = [1, [2, [[[3, 4], 5], 6]]];
const [a, [b, [c, d]]] = array;
console.log("a:", a, "b:", b, "c:", c, "d:", d);

// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6
// another way to visualize the output. (a), (b) & (d) are numbers. (c) is an array.

//a: 1
//b: 2
//c: [ [ 3, 4 ], 5 ] 
//d: 6