const greeting = (name) => `Hello ${name}`;

//console.log(greeting('Radness'));

const sum = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

//console.log(sum([3, 234, 7, 23, 76]));

const Animal = function(animal, sound, delay) {
  this.animal = animal;
  this.sound = sound;
  this.delay = delay;
}

Animal.prototype.greet = function() {
  setTimeout(function() {
    console.log(`Hi, I am a ${this.animal}...${this.sound}`);
  }.bind(this), this.delay);
};

const dog = new Animal('Dog', 'Bark', 3000);
const cat = new Animal('Cat', 'Meow', 200);
// dog.greet();
// cat.greet();

// *** Default Function Arguments

const calcBill = (total, tax = 0.0825, tip) => {
  return total + (total * tax) + (total * tip);
}

// console.log(calcBill(165, undefined, 0.25));

// *** Exercise

/*Below is a list of videos. By chaining a series of arrow functions, sums the total seconds of only the videos that include  'Code' as part of the title.*/

 
const playList = [
  { title: 'Learn to Code', dur: '5:34' },
  { title: 'Learn to Code', dur: '2:33' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '8:32' },
  { title: 'Learn to Skate', dur: '10:17' },
  { title: 'Learn to Skate', dur: '15:36' },
  { title: 'Learn to Code', dur: '13:55' },
];

const codingVids = playList
  .filter(video => video.title.includes('Code'))
  .reduce((acc, cur) => {
    const [min, sec] = cur.dur.split(':').map(Number);
    const durationInSeconds = min * 60 + sec;
    return acc + durationInSeconds;
  }, 0)

console.log(codingVids);