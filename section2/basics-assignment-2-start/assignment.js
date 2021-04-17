const task3Element = document.getElementById('task-3');

function alertWhatever() {
  alert('Whatever');
}

function alertName(name) {
  alert(name);
}

alertWhatever();
alertName('Helena');

task3Element.addEventListener('click', alertWhatever);

function stringsCombinator(string1, string2, string3) {
  return string1 + string2 + string3;
}

alert(stringsCombinator('Huehue', 'Br', 'br'));
