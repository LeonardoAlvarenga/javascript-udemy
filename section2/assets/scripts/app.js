const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseFloat(userInput.value);
}

/* 
    Funções para as operações da calculadora
    Cada uma delas cria seu próprio output e realiza a operação descrita
    Chamadas pelos listeners
*/

function writeToLog(
  operationIdentifier,
  previousResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    previousResult: previousResult,
    number: operationNumber,
    newResult: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE') ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  const calculationDescription = `${initialResult} ${mathOperator} ${enteredNumber}`;
  outputResult(currentResult, calculationDescription); // from vendor file
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', () => calculateResult('ADD'));
subtractBtn.addEventListener('click', () => calculateResult('SUBTRACT'));
multiplyBtn.addEventListener('click', () => calculateResult('MULTIPLY'));
divideBtn.addEventListener('click', () => calculateResult('DIVIDE'));
