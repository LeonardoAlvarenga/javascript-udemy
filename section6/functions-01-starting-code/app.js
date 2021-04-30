// const startGameBtn = document.getElementById('start-game-btn');

// const ROCK = 'ROCK';
// const PAPER = 'PAPER';
// const SCISSORS = 'SCISSORS';
// const RESULT_DRAW = 'DRAW';
// const RESULT_PLAYER_WINS = 'PLAYER WINS';
// const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

// let gameIsRuning = false;

// const getRandomChoice = () => {
//   const randomNumber = Math.round(Math.random() * 2 + 1);

//   switch (randomNumber) {
//     case 1:
//       return ROCK;
//     case 2:
//       return PAPER;
//     case 3:
//       return SCISSORS;
//   }
// };

// const getPlayerChoice = () => {
//   let selection = prompt(
//     `${ROCK}, ${PAPER} or ${SCISSORS}?`,
//     'Choice'
//   ).toUpperCase();

//   if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
//     selection = getRandomChoice();
//     alert(`Invalid choice! We chose ${selection} for you!`);
//   }

//   return selection;
// };

// const getGameResult = (playerChoice, computerChoice) => {
//   if (playerChoice === computerChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (playerChoice === ROCK && computerChoice === SCISSORS) ||
//     (playerChoice === PAPER && computerChoice === ROCK) ||
//     (playerChoice === SCISSORS && computerChoice === PAPER)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }
// };

// startGameBtn.addEventListener('click', () => {
//   if (gameIsRuning) {
//     return;
//   }

//   gameIsRuning = true;
//   console.log('Game is starting...');
//   const playerChoice = getPlayerChoice();
//   const computerChoice = getRandomChoice();
//   const gameResult = getGameResult(playerChoice, computerChoice);

//   let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
//   message =
//     gameResult === RESULT_DRAW
//       ? message + 'a DRAW.'
//       : gameResult === RESULT_PLAYER_WINS
//       ? message + 'WON!'
//       : message + 'LOST. :/';

//   alert(message);
//   gameIsRuning = false;
// });

const alertFinalValue = (result) => {
  alert(`The operation result was: ${result}`);
};

const sumFunction = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  resultHandler(sum);
};

const subFunction = (resultHandler, ...numbers) => {
  let sub = 0;
  for (const number of numbers) {
    sub -= number;
  }
  resultHandler(sub);
};

sumFunction(alertFinalValue, 1, 2, 3, 4, 5);
sumFunction(alertFinalValue, 1, 1, 2, 5, 8, 13);
subFunction(alertFinalValue, 1, 2, 3, 4, 5);
