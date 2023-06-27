let prenoms = ["Arthur", "Max", "Hervé", "Véronique", "Oli", "Toto", "Bernard", "Titouan"];

// for(let count = 0; count < 5; count++) {
//     prenoms.push(prompt("Saisir un prénom: "));
// }

// Parcours des élément du tableau et affichage dans la console
prenoms.forEach((prenom) => console.log(prenom));

console.log(
  prenoms.indexOf(prompt("Prénom à chercher: ")) === -1
    ? "Le prénom n'existe pas dans la liste"
    : "Le prénom existe"
);

let prenomATrouver = prompt("Saisir un prénom à trouver: ");
let indexPrenom = prenoms.indexOf(prenomATrouver);

if (indexPrenom === -1) {
  console.log(`Le prénom ${prenomATrouver} n'existe pas dans la liste`); 
} else {
  console.log(`Le prénom ${prenomATrouver} est à l'index ${indexPrenom}`); 
}

let prenomASupprimer = prompt("Prénom à supprimer: ");

let p = prenoms.splice(prenoms.indexOf(prenomASupprimer), 1);

console.table(prenoms);

prenoms.sort();

console.table(prenoms);

console.log("Premier élément: ", prenoms[0], "Dernier élément: ", prenoms[prenoms.length - 1]);