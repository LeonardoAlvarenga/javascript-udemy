const defaultResult = 0;
let currentResult = defaultResult;

let calculationDescription = '0';

function add() {
  currentResult = currentResult + parseFloat(userInput.value);
  calculationDescription = calculationDescription + ' + ' + userInput.value;
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener('click', add);
