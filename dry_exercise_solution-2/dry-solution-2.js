// Solution Example
const secretNum = 7;
let remainingGuesses = 3;

const playGuessingGame = () => {
  while(remainingGuesses) {
    let guess = prompt("Enter a number between 1-10: ");
    guess = guess * 1;
    if (guess !== secretNum) {
      if (remainingGuesses > 1) {
        remainingGuesses--;
        const message = `${guess > secretNum ? "Too high!" : "Too Low!"} Remaining guesses: ${remainingGuesses}`;
        alert(message);
      } else {
        alert(`You LOST the game, the number was: ${secretNum}`);
        break;
      }
    } else {
      alert("You WON the game");
      break;
    }
  };
}

playGuessingGame();