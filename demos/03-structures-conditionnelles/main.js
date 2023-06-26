let age = 18;

if (age >= 18) {
    console.log("Vous êtes majeur");
}

if (age <= 25) {
    console.log("Vous êtes éligible à la carte jeune");
} else {
    console.log("Désolé, vous n'êtes pas éligible");
}

if (age > 15 && age < 18) {
    console.log("Ado");
} else if (age >= 18 && age <= 25) {
    console.log("Jeune adulte");
} else if (age >= 25 && age <= 65) {
    console.log("adulte");
} else {
    console.log("personne âgée")
}

let code = Number(prompt("Saisir un code: "));
let message = "";

switch (code) {
    case 100:
    case 200:
    case 300:
        message = "ok";
        break;
    case 400:
        message = "Erreur côté client";
        break;
    case 500:
        message = "Erreur côté serveur";
        break;
    default:
        message = "Erreur inconnue";
        break;
}

alert(message);

// Opérateur ternaire "expression ? true : false"
let result = code > 300 ? "Danger" : "Cool";

let maValeurNulle = null;

// Opérateur de coalescence "valeurPotentiellementNulleOuUndefinied ?? ValeurParDéfaut"
let prenom = maValeurNulle ?? "Jean";

console.log(prenom);
