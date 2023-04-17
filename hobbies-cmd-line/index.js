var rs = require('readline-sync');
var hobbies = [];
var areYouSure = false;
var moreHobbies = 0;

function getHobbyCount() {
  moreHobbies = rs.questionInt('How many other hobbies do you have? ');
}
function addHobbies(num) {
    var counter = 0;
  while(counter < num) {
    var input = rs.prompt();
    hobbies.push(input);
    counter++;
    if (counter < num) {
      console.log('-- Awesome! "' + input + '" is cool! What\'s the other ' + + (moreHobbies - counter) + '? ');
    } else {
      console.log('I wish I could do ' + hobbies + '...but I\'m not even real!');
    }
  }
}

var userName = rs.question('What is your name? ');
var favHobby = rs.question(userName + ', what is your favorite hobby? ');

hobbies.push(favHobby);
getHobbyCount();

if(moreHobbies > 0) {
  console.log('Cool, what are they?');
  addHobbies(moreHobbies);
} else {
  areYouSure = rs.keyInYN('Are you sure ' + hobbies[0] + ' is all that you like to do?');
}

if (!areYouSure && hobbies.length <= 1) {
  getHobbyCount();
  console.log('Cool, what are they?');
  addHobbies(moreHobbies);
} else if(areYouSure) {
  console.log(hobbies + ' is cool, good for you.');
}