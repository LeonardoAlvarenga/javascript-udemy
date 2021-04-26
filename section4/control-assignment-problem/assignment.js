const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert(`Number greater than 0.7! ${randomNumber}`);
}

let arrayExemple = [];

for (i = 0; i < 5; i++) {
  let randomIntNumber = Math.round(Math.random() * 100);
  arrayExemple.push(randomIntNumber);
}

let count = 1;
for (const num of arrayExemple) {
  console.log(`#${count}: ${num}`);
  count++;
}

console.log('------');

for (i = arrayExemple.length - 1; i >= 0; i--) {
  count--;
  console.log(`#${count}: ${arrayExemple[i]}`);
}

const anotherRandomNumber = Math.random();

if (
  (randomNumber > 0.7 && anotherRandomNumber > 0.7) ||
  randomNumber < 0.2 ||
  anotherRandomNumber < 0.2
) {
  alert('Treta!');
}
