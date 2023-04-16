// [1] Basic truthy/falsy

const firstName = "Myles";

if(!firstName) {
  console.log("no name")
} else {
  console.log(`Hey ${!firstName}`)
}

// [2] Object vs primitive equality
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

// [3] Numbers and strings can be equal...and you can add them??
const age = 33;
const ageStr = "33";

console.log(age == ageStr); //these are the same because double equal does conversion
console.log(age ==+ ageStr); //these are not the same because triple equal takes into account the data type

// [4] "false" is true(thy)
const devMode = "false";

if(!devMode) {
  console.log("not dev")
} else {
  console.log("dev")
}

if(devMode === "false") {
  console.log("not dev")
} else {
  console.log("dev")
}

// [5] Empty array/object is not falsy
const arr1 = null;

if(!arr1) {
  console.log("no array")
} else {
  console.log("We got one!!")
}

const arr2 = [];

if(!arr2) {
  console.log("no array")
} else if(arr2.length === 0) {
  console.log("We got an empty one!!")
} else {
  console.log("We got one!!")
}