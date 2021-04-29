const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameIsRuning = false;

const getRandomChoice = () => {
  const randomNumber = Math.round(Math.random() * 2 + 1);

  switch (randomNumber) {
    case 1:
      return ROCK;
    case 2:
      return PAPER;
    case 3:
      return SCISSORS;
  }
};

const getPlayerChoice = () => {
  let selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    'Choice'
  ).toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    selection = getRandomChoice();
    alert(`Invalid choice! We chose ${selection} for you!`);
  }

  return selection;
};

const getGameResult = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return RESULT_DRAW;
  } else if (
    (playerChoice === ROCK && computerChoice === SCISSORS) ||
    (playerChoice === PAPER && computerChoice === ROCK) ||
    (playerChoice === SCISSORS && computerChoice === PAPER)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', () => {
  if (gameIsRuning) {
    return;
  }

  gameIsRuning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  console.log(playerChoice);
  const computerChoice = getRandomChoice();
  console.log(computerChoice);
  const gameResult = getGameResult(playerChoice, computerChoice);
  alert(
    `- Player Choice: ${playerChoice} \n- Computer Choice: ${computerChoice}\n\n- RESULT: ${gameResult}`
  );
  gameIsRuning = false;
});
