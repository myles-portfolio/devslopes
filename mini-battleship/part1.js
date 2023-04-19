// TODO Create battleship
// TODO Randomly place 2 battleships
// TODO Prompt user to strike "Enter a location to strike (i.e.: 'A2'): "
// TODO If there is a ship at that location the prompt will read, "Hit. You have sunk a battleship. 1 ship remaining."
// TODO If there is not a ship at that location the prompt will read, "You have missed!"
// TODO If you enter a location you have already guessed the prompt will read, "You have already picked this location. Miss!"

var rs = require('readline-sync');

function startGame() {
  const startPrompt = rs.keyIn('Press any key to start the game.');
  console.log(startPrompt);
}

function createFleet(num, length) {
  const fleet = {};
  const ship = {
    position: [],
    hit: false,
  };

}

function createBoard(rows, cols) {
  const board = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const tile = `${String.fromCharCode(65 + i)}${j + 1}`;
      row.push(tile);
    }
    board.push(row);
  }
}



while (true) {
  startGame();
  createFleet(2, 1)
  createBoard(3, 3);
  const repeat = rs.keyInYN('You have destroyed all battleships. Would you like to play again? Y/N ');
  if (!repeat) {
    break;
  }
}

console.log('Thanks for playing!');