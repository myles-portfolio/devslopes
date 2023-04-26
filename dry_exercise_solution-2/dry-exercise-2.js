/*
 - It's time to "Guess the number"!!
 - The code certainly works.... but it breaks the DRY Principle 🤢
 - Refactor the code to follow the DRY Principle. Let's GO!
*/

// const secretNum = 7;
// let remainingGuesses = 3;

// NOT DRY
// const playGuessingGame = () => {
//   while(remainingGuesses) {
//     let guess = prompt("Enter a number between 1-10: ");
//     guess = guess * 1;
//     if (guess > secretNum) {
//       if (remainingGuesses > 1) {
//         remainingGuesses--;
//         alert(`Too high! Remaining guesses: ${remainingGuesses}`);
//       } else {
//         alert(`You lost the game, the number was: ${secretNum}`);
//       }
//     } else if (guess < secretNum) {
//       if (remainingGuesses > 1) {
//         remainingGuesses--;
//         alert(`Too low! Remaining guesses: ${remainingGuesses}`);
//       } else {
//         alert(`You lost the game, the number was: ${secretNum}`);
//         break;
//       }
//     } else if (guess === secretNum) {
//       alert("You WON!");
//       break;
//     }
//   };
// }

const playDryGuessingGame = (remainingGuesses,secretNum) => {
  do {
    let guess = prompt("Enter a number between 1-10: ");
    guess = guess * 1;
    
    switch (true) {
      case guess > secretNum:
        alert(`Too high! Remaining guesses: ${remainingGuesses}`);
        break;
      case guess < secretNum:
        alert(`Too low! Remaining guesses: ${remainingGuesses}`);
        break;
      case guess === secretNum:
        alert("You WON!");
        return;
      default:
        break;
    }
    
    remainingGuesses--;
  } while (remainingGuesses > 0);
  
  alert(`You lost the game, the number was: ${secretNum}`);
}

playDryGuessingGame(3,7);