const people = new Map();

//add items
people.set('Bill', 1);
people.set('Bob', 2);
people.set('Joe', 3);

console.log(people.has('Bill'));
console.log(people.get('Joe'));

people.delete('Bob');
//people.clear();

people.set('Johan', 4);

people.forEach((item) => console.log(item));

for(const [key, value] of people) {
  console.log(key, value);
}