const make = 'Toyota';
const model = 'Tacoma';
const year = 2021;

// const vehicle = {
//   make: make,
//   model: model,
//   year: year,
// }

const vehicle = {
  make,
  model,
  year,
}

const makeVehicle = (make, model, year) => ({
  make,
  model,
  year,
})

const SUV = makeVehicle('Mercedes', 'AMG G 63', 2021);


const key = 'userName';
const value = 'Myles';

const reverseString = (str) => (!str.length) ? '' : reverseString(str.substr(1)) + str.charAt(0);

const obj = {
  [key]: value,
  [`${key}Reverse`]: reverseString(value),
}

console.log(obj);