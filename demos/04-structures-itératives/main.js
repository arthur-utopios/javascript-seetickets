let nombre = 0;

// On utilise la boucle while quand on ne sait pas combien de fois on doit itérer
while (nombre < 3) {
  console.log(nombre);
  nombre++;
}

for(let cpt = 0; cpt < 10; cpt++) {
  console.log(`cpt: ${cpt}`);
}

let random = Math.floor(Math.random() * (10 - 1) + 1);

console.log(random);

let response;

// do {
//   response = prompt("Trouver le nombre mystère: ");
// } while (response !== random);

if (random > 5) {
  debugger;
}