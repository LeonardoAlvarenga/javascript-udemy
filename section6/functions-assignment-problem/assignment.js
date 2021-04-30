const sayHello = (name, greetPhrase = 'Hi  ') => {
  name = name || 'Lele';
  console.log(greetPhrase + name);
};

// const sayHello = (name, greetPhrase = 'Hi  ') => {
//   name = name || 'Lele';
//   return greetPhrase + name;
// };

// sayHello('Benzoquinhaa!', 'Ei ');
// console.log(sayHello('Lelezinhaaaa!!'));

const checkInput = (callBack, ...strings) => {
  if (callBack && strings) {
    for (str of strings) {
      callBack(str);
    }
  }
};

checkInput(sayHello, 'Lele', 'Ben', 'Leo', 'Carminha');
