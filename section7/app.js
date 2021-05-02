const h1 = document.querySelector('h1');
h1.textContent = 'Lelezinha e Benzquinha';

const allLIs = document.querySelectorAll('li');

const leleEBenArray = [
  'Helena Pechy Alvarenga',
  'Benjamin Pechy Alvarenga',
  '23/04/2017',
];

i = 0;
for (li of allLIs) {
  li.textContent = leleEBenArray[i];
  i++;
}
