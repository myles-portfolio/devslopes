/* 
- The code below manually prints out each value in the animal Array.
- Refactor the code so it prints each value in the array, following the DRY Principle.
*/

const animals = ["Reindeer", "Wolf", "Cat"];

const printAnimals = (animals) => animals.forEach(animal => {
   console.log(animal);
});

printAnimals(animals);