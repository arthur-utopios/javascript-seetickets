function sayHello() {
  console.log("Hello world!");
}

sayHello();

function sayHelloToSomeone(name) {
  console.log(`Hello ${name}`);
}

sayHelloToSomeone("Arthur");

// Paramètre par défaut
function sayHelloMessage(from, message = "pas de message") {
  console.log(`${from}: ${message}`);
}

sayHelloMessage("Arthur");
sayHelloMessage("Arthur", "Bonjour");

// Retourner un résultat
function premiereLettre(word) {
  return word.charAt(0);
}

console.log(premiereLettre("Toto"));

// Expression de fonction
const estPair = function (nombre) {
  return nombre % 2 === 0;
};

console.log(estPair(13));

function calculator(number1, number2, callback) {
  return callback(number1, number2);
}

function addition(number1, number2) {
  return number1 + number2;
}

console.log(calculator(1, 1, addition));

console.log(calculator(2, 2, (number1, number2) => number1 - number2));

/*
Fonctions fléchées
*/

// Return implicite lorsqu'on est sur la même ligne
const division = (number1, number2) => number1 / number2;

// Omission des parenthèses lorsqu'il n'y a qu'un seul paramètre
const logName = name => console.log(name);

const isDivisibleBy = (number1, number2) => {
  return number1 % number2 === 0;
};

console.log(calculator(10, 3, division));

console.log(calculator(10, 4, isDivisibleBy));
