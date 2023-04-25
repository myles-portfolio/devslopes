//something that will happen at some point between now and until it is delivered


// const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/ditto');

// pokemon
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// const promise = new Promise((resolve, reject) => {
//   resolve('Hell yeahhhhhh!!');
// });

// promise
//   .then((data) => console.log(data));

// const promise2 = new Promise((resolve, reject) => {
//   reject('Darn it!!');
// });

// promise2
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error, 'No data'));

// *** Multiple promises

/* 
const ytPost = {
  id: 1,
  comment: 'You Rock!',
};
const hobbies = ['Coding', 'Gaming'];

const post = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(ytPost);
  }, 4000);
});

const hobby = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(hobbies);
  }, 1000);
});

Promise
  .all([post, hobby])
  .then((data) => {
    const [userPost, userHobbies] = data;
    console.log(userPost, userHobbies);
  });
*/

const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/charmander');
const chuckNorris = fetch('https://api.chucknorris.io/jokes/random');

Promise
  .all([pokemon,chuckNorris])
  .then((response) => {
    return Promise.all(response.map((res) => res.json()));
  })
  .then((data) => {
    const [poke, joke] = data;
    console.log(poke.name, joke.value);
    console.log(
      `${poke.name}
      
      ${joke.value}`
    )
  });
