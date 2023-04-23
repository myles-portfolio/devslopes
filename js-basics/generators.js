function* listOfHumans() {
  let num = 0;
  yield num;
  num += 1;
  yield num;
  num += 1;
  yield num;
}

const humans = listOfHumans();
console.log(humans);
humans.next();