const defaultResult = 0;
let currentResult = defaultResult;

let calculationDescription;

function add(num1, num2) {
  const result = num1 + num2;
  calculationDescription = `${num1} + ${num2}`;
  return result;
}

currentResult = add(5, 10);

outputResult(currentResult, calculationDescription);
