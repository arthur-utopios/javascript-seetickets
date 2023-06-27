let joursSemaine = [];

// Ajout d'un élément en fin de tableau
joursSemaine.push("lundi");

// Ajout de plusieurs éléments
joursSemaine.push("mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche")

console.table(joursSemaine);

// Supprimer le dernier élément
joursSemaine.pop();

console.table(joursSemaine);

// Trouver l'index du premier élément l'élément (-1 si non trouvé)
let indexMardi = joursSemaine.indexOf("mardi");

console.log(indexMardi);

// Découpe d'un tableau (début, fin)
console.table(joursSemaine.splice(3, 5));

console.table(joursSemaine);

delete joursSemaine[1];

console.table(joursSemaine);

// la propriété length prend renvoie la taille de l'index maximum + 1
console.log(joursSemaine.length);

// Ajout d'un élément à l'index 100
joursSemaine[100] = "toto";

console.table(joursSemaine);

// Ré-indexer un tableau
console.log(joursSemaine.filter(val => val));

console.log([...joursSemaine]);

let tab = joursSemaine.slice()

console.log(tab);

console.log(joursSemaine.map(value => value.toUpperCase()))