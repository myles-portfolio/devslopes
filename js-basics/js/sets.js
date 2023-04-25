const people = ['Mary', 'Larry', 'Gary'];

const names = new Set(people);
// Sets can only contain one unique value.

// add items
names.add('Jason');
names.add('Nathan');
names.add('Jared');

//delete items
names.delete('Jared');


const humans = names.values();

for (const name of humans) {
  console.log(name);
}

names.keys();
names.entries();

console.log(names);
console.log(names.size); //similar to .length but for sets
console.log(names.has('Jason'));

//delete all items
//names.clear();

const competitors = new Set();

competitors.add('Eric Koston');
competitors.add('Andrew Reynolds');
competitors.add('Chris Cole');

const competed = competitors.values();
console.log(competed);
competed.next(); // when you call .next it will pluck the value out of the set iterator.
competed.next();
competitors.add('Paul Rodriguez');

console.log(competed);

let person1 = { id:1, name: 'Lars'};
let person2 = { id:2, name: 'Jerome'};

const weakSauce = new WeakSet([person1, person2]); // can only ever contain objects, can't loop over it, no clear method

console.log(weakSauce);
setTimeout(() => {
  person1 = null;
}, 2000);
console.log(weakSauce);