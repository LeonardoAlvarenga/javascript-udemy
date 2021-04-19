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

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  const calculationDescription = `${initialResult} + ${enteredNumber}`;
  currentResult += enteredNumber;
  outputResult(currentResult, calculationDescription); // from vendor file
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  const calculationDescription = `${initialResult} - ${enteredNumber}`;
  currentResult -= enteredNumber;
  outputResult(currentResult, calculationDescription);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  const calculationDescription = `${initialResult} * ${enteredNumber}`;
  currentResult *= enteredNumber;
  outputResult(currentResult, calculationDescription);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  const calculationDescription = `${initialResult} / ${enteredNumber}`;
  currentResult /= enteredNumber;
  outputResult(currentResult, calculationDescription);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
