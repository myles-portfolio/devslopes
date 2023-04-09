// Basic truthy/falsy

const firstName = "Myles";

if(!firstName) {
  console.log("no name")
} else {
  console.log(`Hey ${!firstName}`)
}

// Object vs primitive equality
const person1 = {
  name: "Myles",
  age: 33
}

const person2 = {
  name: 'Myles',
  age: 33
}

const person3 = person1;

console.log(person1 == person2) // not the same because they are referring to different objects
console.log(person1 == person3) // same because they are referencing the same object
console.log(person1.name == person2.name) // same because the are primitive values